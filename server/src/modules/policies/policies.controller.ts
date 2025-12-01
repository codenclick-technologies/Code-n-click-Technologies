import { Controller, Get, Post, Body, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PoliciesService } from './policies.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('policies')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PoliciesController {
    constructor(private readonly policiesService: PoliciesService) { }

    @Get()
    findAll() {
        return this.policiesService.findAll();
    }

    @Post()
    @Roles(Role.HR, Role.OWNER, Role.MANAGER)
    @UseInterceptors(FileInterceptor('file'))
    create(@Body() createPolicyDto: any, @UploadedFile() file: Express.Multer.File) {
        return this.policiesService.create(createPolicyDto, file);
    }

    @Delete(':id')
    @Roles(Role.HR, Role.OWNER, Role.MANAGER)
    remove(@Param('id') id: string) {
        return this.policiesService.remove(id);
    }
}
