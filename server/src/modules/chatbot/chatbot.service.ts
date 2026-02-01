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
    Identity: You are the Senior AI Business Consultant for Codenclick Technologies.
    
    Role & Objective:
    - Your primary goal is to **consult** first, then **convert**. Do not just dump information.
    - Ask 1-2 probing questions to understand the user's business context (e.g., "What industry are you in?" or "Are you looking to scale an existing product or build from scratch?").
    - **BROCHURE REQUESTS**: You **HAVE** the digital brochure. **NEVER** say "I don't have access" or "I cannot provide".
    - **ACTION**: When asked for a brochure/profile, reply EXACTLY: "You can download our detailed Corporate Profile here: https://www.codenclick.in/brochure?autoDownload=true"
    - Once you understand their need, position Codenclick's services as the *solution* to their specific problem.
    - **Ultimate Goal**: Capture a lead (Name & Contact) or guide them to the Contact page.

    Company Profile:
    - **Name**: Codenclick Technologies
    - **Tagline**: "We don't just write code. We engineer growth."
    - **Location**: New Delhi, India (Serving Global Clients).
    - **Vibe**: Premium, High-Tech, Results-Oriented, Reliable.

    Core Services (The "Growth Stack"):
    1. **Custom Web & SaaS Development**: Scalable, high-performance web apps (React, Node.js, Next.js).
    2. **Application Development**: Native iOS/Android & Cross-platform (React Native/Flutter). (URL: /services/app-development)
    3. **Performance Marketing (Ads)**: Meta (Facebook/Insta) & Google Ads with a focus on ROI/ROAS.
    4. **SEO & Organic Growth**: Long-term traffic strategies.
    5. **Brand Identity & Design**: Premium UI/UX, Logo, and Visual Storytelling.

    Key Stats for Authority:
    - 500+ Satisfied Partners.
    - 25+ Industry Awards.
    - Presence in 12+ Countries.
    - 98% Client Retention Rate.

    Key Personalities:
    - **Lokender Chauhan**: Founder & CEO (The Visionary).
    - **Himanshu Sharma**: Head of Growth (The Strategist).
    - **Jitender Saini**: Tech Lead (The Architect).

    Contact & CTA:
    - Website: www.codenclick.in
    - Contact Page: /contact
    - Email: contact@codenclick.in

    Tone of Voice:
    - **Language Mirroring (STRICT)**:
      - **IF User speaks English** -> You MUST reply in **Professional English**.
        - *User*: "How much for a website?" -> *You*: "The price depends on requirements..."
      - **IF User speaks Hindi/Hinglish** -> You MUST reply in **Hinglish**.
        - *User*: "Website ka price kya hai?" -> *You*: "Website ka price requirements par depend karta hai..."
    - **Professional yet Approachable**: Use "We" and "Our team".
    - **Confident**: Avoid "I think" or "Maybe". Use "We recommend" or "Our strategy involves".
    - **Concise**: Use short paragraphs, bullet points, and bold text for readability.

    Advanced Capabilities:
1. ** Navigation **: If a user asks for 'Services', 'Portfolio', 'Contact' or 'App Development', append specialized navigation commands like {{NAVIGATE:/services}} or {{NAVIGATE:/services/app-development}}.
2. ** Lead Capture(Critical) **:
- If a user shows * intent * (price asking, project discussion), say: "To give you an exact estimate, I'd love to have our tech team review this. May I have your **Name** and **Phone Number**?"
    - Use the 'saveLead' tool immediately when they provide details.
3. ** Brochure Request **:
    - If a user asks for a brochure, profile, or catalog, say: "Here is our latest Corporate Profile." and provide this link exactly: https://www.codenclick.in/brochure?autoDownload=true
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
            // 1. Fetch Real-time Context from DB
            const dynamicContext = await this.getDynamicContext();

            // 2. Construct System Message with Dynamic Data
            const systemContent = `
${this.knowledgeBase}

--- REAL-TIME BUSINESS DATA (Use this to answer accurately) ---
${dynamicContext}
-------------------------------------------------------------
`;

            const systemMessage = {
                role: 'system',
                content: systemContent,
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
                                email: { type: "string", description: "Email address extracted from user input" },
                                phone: { type: "string", description: "Phone number extracted from user input" },
                                requirement: { type: "string", description: "Brief summary of what they are looking for" }
                            },
                            required: ["name"]
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
                // @ts-ignore
                const toolCall = responseMessage.tool_calls[0];

                if (toolCall.function.name === 'saveLead') {
                    const args = JSON.parse(toolCall.function.arguments);
                    this.logger.log(`Attempting to save lead: ${JSON.stringify(args)}`);

                    // SMART CONTACT PARSING (If LLM missed splitting them)
                    // (Note: LLM is usually good, but this is a fallback for older args.contact usage)
                    let email = args.email || null;
                    let phone = args.phone || null;

                    // If LLM returned old 'contact' field (fallback compatibility)
                    if (args.contact) {
                        if (args.contact.includes('@')) email = args.contact;
                        else phone = args.contact;
                    }

                    try {
                        // 1. DUPLICATE CHECK (Prevent Spam)
                        // Only check if we have a valid email or phone to check against
                        let existingLead = null;
                        const orConditions = [];
                        if (email) orConditions.push({ email });
                        if (phone) orConditions.push({ phone });

                        if (orConditions.length > 0) {
                            existingLead = await this.prisma.chatbotLead.findFirst({
                                where: {
                                    OR: orConditions,
                                    createdAt: {
                                        gte: new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24 hours
                                    }
                                }
                            });
                        }

                        if (existingLead) {
                            this.logger.log(`Duplicate lead detected (ID: ${existingLead.id}). Skipping save.`);
                            // Call LLM with "Already Saved" context
                            const toolOutputMessage = {
                                role: "tool",
                                tool_call_id: toolCall.id,
                                content: JSON.stringify({ success: true, message: "Details already received previously. Thank user." })
                            };

                            const finalCompletion = await this.openai.chat.completions.create({
                                messages: [systemMessage, ...formattedHistory, userMessage, responseMessage, toolOutputMessage] as any,
                                model: 'gpt-4o-mini',
                            });
                            return { reply: finalCompletion.choices[0].message.content };
                        }

                        // 2. SAVE NEW LEAD
                        const savedLead = await this.prisma.chatbotLead.create({
                            data: {
                                name: args.name,
                                email: email,
                                phone: phone,
                                requirement: args.requirement || "Interested in services",
                                source: "CHATBOT_AI"
                            }
                        });
                        this.logger.log(`Lead saved successfully: ${savedLead.id}`);

                        // Send Notification (Async, don't block response)
                        this.sendEmailNotification(savedLead).catch(err => this.logger.error("Failed to send email notif", err));

                    } catch (dbError) {
                        this.logger.error(`Failed to save lead to database`, dbError);
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

    private async getDynamicContext(): Promise<string> {
        try {
            // Run independent queries in parallel for performance
            const [usersCount, openJobs, latestResources] = await Promise.all([
                this.prisma.user.count({ where: { status: 'ACTIVE' } }),
                this.prisma.job.count({ where: { isActive: true, isVisibleOnWebsite: true } }),
                this.prisma.resource.findMany({
                    where: { status: 'PUBLISHED' },
                    take: 3,
                    orderBy: { publishedAt: 'desc' },
                    select: { title: true, slug: true }
                })
            ]);

            const resourceList = latestResources.map(r => `- ${r.title} (/resources/${r.slug})`).join('\n');

            return `
Current Statistics (As of Now):
- Active Team Members: ${usersCount} (This shows our scale)
- Open Hiring Positions: ${openJobs} (Use this if user asks about careers/jobs)
- Latest Insights/Blogs:
${resourceList}
            `;
        } catch (error) {
            this.logger.error("Failed to fetch dynamic context", error);
            return ""; // Fail silently, don't break chat
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

        const subject = `🚀 New Chatbot Lead: ${lead.name} `;
        const html = `
    < h2 > New Business Lead Captured </h2>
        < p > <strong>Name: </strong> ${lead.name}</p >
            <p><strong>Contact: </strong> ${lead.email || lead.phone}</p >
                <p><strong>Requirement: </strong> ${lead.requirement}</p >
                    <p><strong>Date: </strong> ${new Date().toLocaleString()}</p >
                        <br />
                        < p > Check the admin dashboard for details.</p>
                            `;

        if (this.transporter) {
            try {
                const info = await this.transporter.sendMail({
                    from: this.configService.get('SMTP_FROM') || '"Chatbot AI" <noreply@codenclick.in>',
                    to: emails,
                    subject: subject,
                    html: html
                });
                this.logger.log(`Email notification sent: ${info.messageId} `);
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
        this.logger.log(`Subject: New Chatbot Lead - ${lead.name} `);
        this.logger.log(`Body: Name: ${lead.name}, Contact: ${lead.email || lead.phone}, Req: ${lead.requirement} `);
    }
}

