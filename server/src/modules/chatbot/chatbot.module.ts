import { Module } from '@nestjs/common';
import { ChatbotController } from './chatbot.controller';
import { ChatbotService } from './chatbot.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from '../../config/prisma.service';

@Module({
    imports: [ConfigModule],
    controllers: [ChatbotController],
    providers: [ChatbotService, PrismaService],
    exports: [ChatbotService],
})
export class ChatbotModule { }
