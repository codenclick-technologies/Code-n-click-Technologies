import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { Public } from '../../common/decorators/public.decorator';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

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

  @Get('unread-count')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.HR, Role.OWNER, Role.MANAGER)
  getUnreadCount() {
    return this.contactService.getUnreadCount();
  }

  @Patch(':id/read')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.HR, Role.OWNER, Role.MANAGER)
  markAsRead(@Param('id') id: string) {
    return this.contactService.markAsRead(id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.HR, Role.OWNER, Role.MANAGER)
  delete(@Param('id') id: string) {
    return this.contactService.delete(id);
  }

  @Post('bulk-delete')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.HR, Role.OWNER, Role.MANAGER)
  bulkDelete(@Body() body: { ids: string[] }) {
    return this.contactService.bulkDelete(body.ids);
  }
}
