import { Controller, Post, Body, HttpCode, HttpStatus, Get, UseGuards } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('chatbot')
export class ChatbotController {
    constructor(private readonly chatbotService: ChatbotService) { }

    @Public()
    @Post('chat')
    @HttpCode(HttpStatus.OK)
    async chat(@Body() body: { message: string; history: any[] }) {
        return this.chatbotService.chat(body.message, body.history || []);
    }

    @Get('leads')
    @Roles(Role.HR, Role.MANAGER, Role.OWNER)
    async getLeads() {
        return this.chatbotService.getLeads();
    }
}
