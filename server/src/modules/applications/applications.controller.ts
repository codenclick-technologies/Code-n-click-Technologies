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
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiConsumes,
} from '@nestjs/swagger';
import { ApplicationsService } from './applications.service';
import {
  CreateApplicationDto,
  UpdateApplicationDto,
  QueryApplicationsDto,
} from './dto/application.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@ApiTags('Applications')
@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  // Public endpoint - Apply to job
  @Post('jobs/:jobId/apply')
  @UseInterceptors(FileInterceptor('resume'))
  @ApiOperation({ summary: 'Apply to a job (Public)' })
  @ApiConsumes('multipart/form-data')
  async apply(
    @Param('jobId') jobId: string,
    @Body() createApplicationDto: CreateApplicationDto,
    @UploadedFile() resume: Express.Multer.File,
  ) {
    return this.applicationsService.create(jobId, createApplicationDto, resume);
  }

  // Protected endpoints
  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.OWNER, Role.HR, Role.MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all applications with filtering' })
  findAll(@Query() query: QueryApplicationsDto) {
    return this.applicationsService.findAll(query);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.OWNER, Role.HR, Role.MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get application by ID' })
  findOne(@Param('id') id: string) {
    return this.applicationsService.findOne(id);
  }

  @Patch(':id/status')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.OWNER, Role.HR, Role.MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update application status' })
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.applicationsService.updateStatus(id, status);
  }

  @Patch(':id/notes')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.OWNER, Role.HR, Role.MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update application notes' })
  updateNotes(@Param('id') id: string, @Body('notes') notes: string) {
    return this.applicationsService.updateNotes(id, notes);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.OWNER, Role.HR, Role.MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete application' })
  remove(@Param('id') id: string) {
    return this.applicationsService.remove(id);
  }
}
