import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CelebrationsService } from './celebrations.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('celebrations')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CelebrationsController {
  constructor(private readonly celebrationsService: CelebrationsService) {}

  @Get()
  findAll() {
    return this.celebrationsService.findAll();
  }

  @Get('upcoming')
  findUpcoming() {
    return this.celebrationsService.findUpcoming();
  }

  @Post()
  @Roles(Role.HR, Role.OWNER, Role.MANAGER)
  create(@Body() createCelebrationDto: any) {
    return this.celebrationsService.create(createCelebrationDto);
  }

  @Delete(':id')
  @Roles(Role.HR, Role.OWNER, Role.MANAGER)
  remove(@Param('id') id: string) {
    return this.celebrationsService.remove(id);
  }
}
