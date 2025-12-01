import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiQuery,
} from '@nestjs/swagger';
import { DashboardService } from './dashboard.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@ApiTags('Dashboard')
@Controller('dashboard')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.OWNER, Role.MANAGER)
@ApiBearerAuth()
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('summary')
  @ApiOperation({ summary: 'Get dashboard summary' })
  getSummary() {
    return this.dashboardService.getSummary();
  }

  @Get('tasks-by-status')
  @ApiOperation({ summary: 'Get tasks grouped by status' })
  getTasksByStatus() {
    return this.dashboardService.getTasksByStatus();
  }

  @Get('applications-by-status')
  @ApiOperation({ summary: 'Get applications grouped by status' })
  getApplicationsByStatus() {
    return this.dashboardService.getApplicationsByStatus();
  }

  @Get('tasks-by-employee')
  @ApiOperation({ summary: 'Get tasks grouped by employee' })
  getTasksByEmployee() {
    return this.dashboardService.getTasksByEmployee();
  }

  @Get('jobs-by-department')
  @ApiOperation({ summary: 'Get jobs grouped by department' })
  getJobsByDepartment() {
    return this.dashboardService.getJobsByDepartment();
  }

  @Get('application-trend')
  @ApiOperation({ summary: 'Get application trend over time' })
  @ApiQuery({ name: 'days', required: false, type: Number })
  getApplicationTrend(@Query('days') days?: number) {
    return this.dashboardService.getApplicationTrend(
      days ? parseInt(days.toString()) : 30,
    );
  }
}
