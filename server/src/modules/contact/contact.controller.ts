import { Controller, Post, Get, Body, Param, Patch, UseGuards } from '@nestjs/common';
import { ContactService } from './contact.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { Public } from '../../common/decorators/public.decorator';

@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) { }

    @Public()
    @Post()
    submit(@Body() body: any) {
        return this.contactService.create(body);
    }

    @Get()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.HR, Role.OWNER, Role.MANAGER)
    findAll() {
        return this.contactService.findAll();
    }

    @Patch(':id/read')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.HR, Role.OWNER, Role.MANAGER)
    markAsRead(@Param('id') id: string) {
        return this.contactService.markAsRead(id);
    }
}
