import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Public } from '../../common/decorators/public.decorator';
import { Role } from '@prisma/client';

@Controller('resources')
export class ResourcesController {
  constructor(private readonly resourcesService: ResourcesService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.HR, Role.OWNER, Role.MANAGER)
  create(@Body() body: any) {
    return this.resourcesService.create(body);
  }

  @Public()
  @Get()
  findAll(@Query() query: any) {
    return this.resourcesService.findAll(query);
  }

  @Public()
  @Get('categories')
  getCategories() {
    return this.resourcesService.getCategories();
  }

  @Public()
  @Get('tags')
  getTags() {
    return this.resourcesService.getTags();
  }

  @Public()
  @Get('slug/:slug')
  findBySlug(@Param('slug') slug: string) {
    return this.resourcesService.findBySlug(slug);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourcesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.HR, Role.OWNER, Role.MANAGER)
  update(@Param('id') id: string, @Body() body: any) {
    return this.resourcesService.update(id, body);
  }

  @Patch(':id/publish')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.HR, Role.OWNER, Role.MANAGER)
  publish(@Param('id') id: string) {
    return this.resourcesService.publish(id);
  }

  @Patch(':id/unpublish')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.HR, Role.OWNER, Role.MANAGER)
  unpublish(@Param('id') id: string) {
    return this.resourcesService.unpublish(id);
  }

  @Post(':id/view')
  @Public()
  incrementViews(@Param('id') id: string) {
    return this.resourcesService.incrementViews(id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.HR, Role.OWNER, Role.MANAGER)
  remove(@Param('id') id: string) {
    return this.resourcesService.remove(id);
  }
}
