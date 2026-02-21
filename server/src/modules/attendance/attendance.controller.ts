import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
} from '@nestjs/swagger';
import { AttendanceService } from './attendance.service';
import {
  CheckInDto,
  CheckOutDto,
  QueryAttendanceDto,
} from './dto/attendance.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@ApiTags('Attendance')
@Controller('attendance')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post('check-in')
  @Roles(Role.EMPLOYEE, Role.HR, Role.MANAGER, Role.OWNER)
  @ApiOperation({ summary: 'Check in for the day' })
  @ApiResponse({ status: 201, description: 'Checked in successfully' })
  checkIn(@Request() req: any, @Body() checkInDto: CheckInDto) {
    return this.attendanceService.checkIn(req.user.id, checkInDto);
  }

  @Post('check-out')
  @Roles(Role.EMPLOYEE, Role.HR, Role.MANAGER, Role.OWNER)
  @ApiOperation({ summary: 'Check out for the day' })
  @ApiResponse({ status: 201, description: 'Checked out successfully' })
  checkOut(@Request() req: any, @Body() checkOutDto: CheckOutDto) {
    return this.attendanceService.checkOut(req.user.id, checkOutDto);
  }

  @Get('today')
  @Roles(Role.EMPLOYEE, Role.HR, Role.MANAGER, Role.OWNER)
  @ApiOperation({ summary: "Get today's attendance status" })
  getTodayStatus(@Request() req: any) {
    return this.attendanceService.getTodayStatus(req.user.id);
  }

  @Get('my-records')
  @Roles(Role.EMPLOYEE, Role.HR, Role.MANAGER, Role.OWNER)
  @ApiOperation({ summary: 'Get my attendance records' })
  getMyRecords(@Request() req: any, @Query() query: QueryAttendanceDto) {
    return this.attendanceService.getMyRecords(req.user.id, query);
  }

  @Get('monthly-report')
  @Roles(Role.EMPLOYEE, Role.HR, Role.MANAGER, Role.OWNER)
  @ApiOperation({ summary: 'Get monthly attendance report' })
  getMonthlyReport(
    @Request() req: any,
    @Query('month') month: number,
    @Query('year') year: number,
  ) {
    const currentMonth = month || new Date().getMonth() + 1;
    const currentYear = year || new Date().getFullYear();
    return this.attendanceService.getMonthlyReport(
      req.user.id,
      currentMonth,
      currentYear,
    );
  }

  @Get('all')
  @Roles(Role.HR, Role.MANAGER, Role.OWNER)
  @ApiOperation({ summary: 'Get all attendance records (HR/Manager/Owner)' })
  getAllRecords(@Query() query: QueryAttendanceDto) {
    return this.attendanceService.getAllRecords(query);
  }

  @Patch(':id')
  @Roles(Role.HR, Role.OWNER, Role.MANAGER)
  @ApiOperation({ summary: 'Update attendance record (HR/Owner)' })
  update(@Param('id') id: string, @Body() updateAttendanceDto: any) {
    return this.attendanceService.update(id, updateAttendanceDto);
  }
}
