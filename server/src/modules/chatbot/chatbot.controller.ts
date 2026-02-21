import { Controller, Post, Body, HttpCode, HttpStatus, Get, Patch, Param, Delete } from '@nestjs/common';
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

    @Patch('leads/:id/status')
    @Roles(Role.HR, Role.MANAGER, Role.OWNER)
    async updateStatus(@Param('id') id: string, @Body('status') status: string) {
        return this.chatbotService.updateLeadStatus(id, status);
    }

    @Delete('leads/:id')
    @Roles(Role.HR, Role.MANAGER, Role.OWNER)
    async deleteLead(@Param('id') id: string) {
        return this.chatbotService.deleteLead(id);
    }
}


