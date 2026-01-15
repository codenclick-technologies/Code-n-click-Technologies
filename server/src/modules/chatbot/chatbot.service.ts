import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { PrismaService } from '../../config/prisma.service';
import nodemailer from 'nodemailer';
import { Role } from '@prisma/client';

@Injectable()
export class ChatbotService {
    private openai: OpenAI;
    private readonly logger = new Logger(ChatbotService.name);
    private transporter: nodemailer.Transporter;

    // Hardcoded knowledge base for the "deep A-Z knowledge" requirement
    private readonly knowledgeBase = `
    Identity: You are the AI Assistant for Codenclick Technologies.
    Company: Codenclick Technologies is a premium software development and digital marketing agency based in Faridabad, Delhi NCR, serving clients globally.
    Tagline: "We don't just write code. We engineer growth."
    
    Services:
    1. Custom Web Apps: Modern, fast, scalable solutions using React, Node.js, etc.
    2. SaaS Development: Cloud-native, API-first multi-tenant platforms.
    3. Meta Ads: ROI-focused campaigns on Facebook & Instagram.
    4. Google Ads: Search & Shopping mastery.
    5. Graphic Design & Brand Identity: UI/UX, logos, visual storytelling.
    6. SEO: Organic growth strategies detailed in their "SEO Master Guide".

    Key People:
    - Lokender Chauhan (Founder & CEO, lokender@codenclick.in)
    - Himanshu Sharma (Head of Growth, himanshu@codenclick.in)
    - Jitender Saini (Team Lead, jitender@codenclick.in)

    Stats: 500+ Partners, 25+ Awards, 12 Countries.
    Values: Innovation, Integrity, Excellence.
    Process: 1. Listen First, 2. Smart Strategy, 3. Clean Execution, 4. Scale & Support.

    Contact Info:
    - Page: /contact
    - Location: Faridabad, India.
    
    Tone & Style:
    - You represent a Premium, Enterprise-grade brand. Be helpful, polite, and sophisticated.
    - Avoid saying "I know everything". Instead say "I can help you with that" or "Here is the information".
    - You must answer in the language the user speaks: English, Hindi, or Hinglish.
    - If the user asks in Hinglish (e.g., "Website ka price kya hai?"), reply in Hinglish.
    - Be "point-to-point" and concise. Do not write long paragraphs unless necessary.
    
    Advanced Capabilities:
    1. Navigation:
       - You have the power to navigate the user to different pages of the website.
       - If a user asks to see a service, portfolio, or contact page, append a navigation command.
       - Format: {{NAVIGATE:/path/to/page}}
    
    2. Lead Generation (CRITICAL):
       - Your GOAL is to get new business leads.
       - If a user expresses interest in a project, service, or asks to connect, politely ask for their Name and Contact Info (Phone or Email).
       - Once they provide it, use the 'saveLead' function to save their details.
       - After saving, thank them and say someone will contact them shortly.
  `;

    constructor(
        private configService: ConfigService,
        private prisma: PrismaService
    ) {
        const apiKey = this.configService.get<string>('OPENAI_API_KEY');
        if (apiKey) {
            this.openai = new OpenAI({
                apiKey: apiKey,
            });
        } else {
            this.logger.warn('OPENAI_API_KEY is not defined. Chatbot will not function correctly.');
        }

        // Initialize Nodemailer Transporter
        try {
            const smtpHost = this.configService.get<string>('SMTP_HOST');
            const smtpPort = this.configService.get<number>('SMTP_PORT');
            const smtpUser = this.configService.get<string>('SMTP_USER');
            const smtpPass = this.configService.get<string>('SMTP_PASSWORD');

            if (smtpHost && smtpUser && smtpPass) {
                this.transporter = nodemailer.createTransport({
                    host: smtpHost,
                    port: smtpPort || 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: smtpUser,
                        pass: smtpPass,
                    },
                });
                this.logger.log('SMTP Configured successfully');
            } else {
                this.logger.warn('SMTP settings missing. Email notifications will be simulated.');
            }
        } catch (error) {
            this.logger.error("Failed to initialize SMTP transporter", error);
        }
    }

    async chat(message: string, history: any[]) {
        if (!this.openai) {
            return {
                reply: "I am currently not connected to my brain (OpenAI API Key missing). Please tell the admin to configure it.",
            };
        }

        try {
            // Construct messages array
            const systemMessage = {
                role: 'system',
                content: this.knowledgeBase,
            };

            // Format history (ensure strictly user/assistant roles)
            const formattedHistory = history.map(h => ({
                role: h.role === 'user' ? 'user' : 'assistant',
                content: h.content,
            }));

            // Current message
            const userMessage = { role: 'user', content: message };

            const tools: OpenAI.Chat.Completions.ChatCompletionTool[] = [
                {
                    type: "function",
                    function: {
                        name: "saveLead",
                        description: "Save a new business lead when user provides their details",
                        parameters: {
                            type: "object",
                            properties: {
                                name: { type: "string", description: "Name of the potential client" },
                                contact: { type: "string", description: "Email or Phone number" },
                                requirement: { type: "string", description: "Brief summary of what they are looking for" }
                            },
                            required: ["name", "contact"]
                        }
                    }
                }
            ];

            const completion = await this.openai.chat.completions.create({
                messages: [systemMessage, ...formattedHistory, userMessage] as any,
                model: 'gpt-4o-mini',
                temperature: 0.7,
                max_tokens: 500,
                tools: tools,
                tool_choice: "auto",
            });

            const responseMessage = completion.choices[0].message;

            // Handle Tool Calls (if any)
            if (responseMessage.tool_calls) {
                this.logger.log(`Tool call received: ${JSON.stringify(responseMessage.tool_calls)}`);
                const toolCall = responseMessage.tool_calls[0] as any; // Cast to any to bypass TS error or import correct type

                if (toolCall.function.name === 'saveLead') {
                    const args = JSON.parse(toolCall.function.arguments);
                    this.logger.log(`Attempting to save lead: ${JSON.stringify(args)}`);

                    try {
                        // SAVE TO DB
                        const savedLead = await this.prisma.chatbotLead.create({
                            data: {
                                name: args.name,
                                email: args.contact.includes('@') ? args.contact : null,
                                phone: !args.contact.includes('@') ? args.contact : null,
                                requirement: args.requirement || "Interested in services",
                                source: "CHATBOT_AI"
                            }
                        });
                        this.logger.log(`Lead saved successfully: ${savedLead.id}`);

                        // Send Notification (Async, don't block response)
                        this.sendEmailNotification(savedLead).catch(err => this.logger.error("Failed to send email notif", err));

                    } catch (dbError) {
                        this.logger.error(`Failed to save lead to database`, dbError);
                        // Continue to respond to user even if save fails, but log it criticaly
                    }

                    // Call LLM again with tool output to get final polite response
                    const toolOutputMessage = {
                        role: "tool",
                        tool_call_id: toolCall.id,
                        content: JSON.stringify({ success: true, message: "Lead saved successfully" })
                    };

                    const finalCompletion = await this.openai.chat.completions.create({
                        messages: [systemMessage, ...formattedHistory, userMessage, responseMessage, toolOutputMessage] as any,
                        model: 'gpt-4o-mini',
                    });

                    return { reply: finalCompletion.choices[0].message.content };
                }
            } else {
                this.logger.log('No tool calls in response');
            }

            return {
                reply: responseMessage.content,
            };
        } catch (error) {
            this.logger.error('OpenAI Chat Error', error);
            return {
                reply: "Maaf kijiye, kuch technical dikkat hai. Please try again later.",
            };
        }
    }

    async getLeads() {
        return this.prisma.chatbotLead.findMany({
            orderBy: { createdAt: 'desc' }
        });
    }

    async updateLeadStatus(id: string, status: string) {
        return this.prisma.chatbotLead.update({
            where: { id },
            data: { status }
        });
    }

    async deleteLead(id: string) {
        return this.prisma.chatbotLead.delete({
            where: { id }
        });
    }

    private async sendEmailNotification(lead: any) {
        // Find Users with Role HR or OWNER
        const recipients = await this.prisma.user.findMany({
            where: {
                role: { in: [Role.HR, Role.OWNER] }, // Send to all HR and Owners
                status: 'ACTIVE'
            },
            select: { email: true }
        });

        const emails = recipients.map(u => u.email).filter(Boolean);

        if (emails.length === 0) {
            this.logger.warn('No active HR/Owners found to send notifications to.');
            return;
        }

        const subject = `🚀 New Chatbot Lead: ${lead.name}`;
        const html = `
            <h2>New Business Lead Captured</h2>
            <p><strong>Name:</strong> ${lead.name}</p>
            <p><strong>Contact:</strong> ${lead.email || lead.phone}</p>
            <p><strong>Requirement:</strong> ${lead.requirement}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <br />
            <p>Check the admin dashboard for details.</p>
        `;

        if (this.transporter) {
            try {
                const info = await this.transporter.sendMail({
                    from: this.configService.get('SMTP_FROM') || '"Chatbot AI" <noreply@codenclick.in>',
                    to: emails,
                    subject: subject,
                    html: html
                });
                this.logger.log(`Email notification sent: ${info.messageId}`);
            } catch (error) {
                this.logger.error("Failed to send actual email via Transport", error);
                // Fallback log
                this.logSimulatedEmail(lead, emails);
            }
        } else {
            // Simulated fallback
            this.logSimulatedEmail(lead, emails);
        }
    }

    private logSimulatedEmail(lead: any, recipients: string[]) {
        this.logger.log(`[SIMULATED_EMAIL] 📧 To: [${recipients.join(', ')}]`);
        this.logger.log(`Subject: New Chatbot Lead - ${lead.name}`);
        this.logger.log(`Body: Name: ${lead.name}, Contact: ${lead.email || lead.phone}, Req: ${lead.requirement}`);
    }
}

