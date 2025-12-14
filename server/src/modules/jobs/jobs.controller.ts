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
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JobsService } from './jobs.service';
import { CreateJobDto, UpdateJobDto, QueryJobsDto } from './dto/job.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Public } from '../../common/decorators/public.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Role } from '@prisma/client';

@ApiTags('Jobs')
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) { }

  // Public endpoints
  @Public()
  @Get('public')
  @ApiOperation({ summary: 'Get all public job listings' })
  findAllPublic(@Query() query: QueryJobsDto) {
    return this.jobsService.findAll(query, true);
  }

  @Public()
  @Get('public/:id')
  @ApiOperation({ summary: 'Get public job by ID' })
  findOnePublic(@Param('id') id: string) {
    return this.jobsService.findOne(id, true);
  }

  // Protected endpoints
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.OWNER, Role.HR, Role.MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create job posting' })
  create(@Body() createJobDto: CreateJobDto, @CurrentUser() user: any) {
    return this.jobsService.create(createJobDto, user.id);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.OWNER, Role.HR, Role.MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all jobs (HR/Owner)' })
  findAll(@Query() query: QueryJobsDto) {
    return this.jobsService.findAll(query, false);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.OWNER, Role.HR, Role.MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get job by ID (HR/Owner)' })
  findOne(@Param('id') id: string) {
    return this.jobsService.findOne(id, false);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.OWNER, Role.HR, Role.MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update job' })
  update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto) {
    return this.jobsService.update(id, updateJobDto);
  }

  @Patch(':id/visibility')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.OWNER, Role.HR, Role.MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Toggle job visibility' })
  toggleVisibility(@Param('id') id: string) {
    return this.jobsService.toggleVisibility(id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.OWNER, Role.HR, Role.MANAGER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete job' })
  remove(@Param('id') id: string) {
    return this.jobsService.remove(id);
  }
}
