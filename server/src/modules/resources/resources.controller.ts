import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Public } from '../../common/decorators/public.decorator';
import { Role } from '@prisma/client';

@Controller('resources')
export class ResourcesController {
    constructor(private readonly resourcesService: ResourcesService) { }

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

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.HR, Role.OWNER, Role.MANAGER)
    remove(@Param('id') id: string) {
        return this.resourcesService.remove(id);
    }
}
