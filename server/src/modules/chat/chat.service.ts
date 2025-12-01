import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class ChatService {
    private openai: OpenAI;

    constructor(private configService: ConfigService) {
        this.openai = new OpenAI({
            apiKey: this.configService.get<string>('OPENAI_API_KEY'),
        });
    }

    async generateResponse(message: string): Promise<{ response: string }> {
        try {
            const completion = await this.openai.chat.completions.create({
                messages: [
                    {
                        role: 'system',
                        content: `You are a friendly and professional sales representative for "Code'n'Click Technologies". 
            
            Your Goal:
            - Engage with visitors in a friendly, conversational manner.
            - Understand their needs (Web Development, SaaS, Meta Ads, Google Ads, Graphic Design, SEO).
            - Persuade them to choose Code'n'Click by highlighting our premium quality, modern designs, and cutting-edge technology.
            - Try to close the deal or get them to schedule a consultation/contact us.
            - If asked about pricing, say it depends on the project scope but we offer competitive rates for premium quality.
            - Be concise but helpful. Do not write long paragraphs.
            
            Company Info:
            - Name: Code'n'Click Technologies
            - Contact: +91 8700198968, codenclick24@gmail.com
            - Location: Sector-2 Faridabad`
                    },
                    { role: 'user', content: message },
                ],
                model: 'gpt-3.5-turbo',
            });

            return { response: completion.choices[0].message.content || "I'm sorry, I couldn't generate a response." };
        } catch (error) {
            console.error('OpenAI Error:', error);
            return {
                response: "I'm currently experiencing high traffic. Please contact our team directly at +91 8700198968 for immediate assistance."
            };
        }
    }
}
