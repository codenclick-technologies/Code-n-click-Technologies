import { Controller, Get, Post, Body, Param, UseGuards, Patch, Query, Req } from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('payroll')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PayrollController {
    constructor(private readonly payrollService: PayrollService) { }

    @Get('summary')
    @Roles(Role.HR, Role.OWNER)
    getSummary() {
        return this.payrollService.getPayrollSummary();
    }

    @Post('run')
    @Roles(Role.HR)
    runPayroll(@Body() body: { month: string; year: number }) {
        return this.payrollService.runPayroll(body.month, body.year);
    }

    @Patch(':id/approve')
    @Roles(Role.OWNER)
    approvePayroll(@Param('id') id: string) {
        return this.payrollService.approvePayroll(id);
    }

    @Get('slips')
    @Roles(Role.HR, Role.OWNER, Role.MANAGER, Role.EMPLOYEE)
    getSalarySlips(@Req() req: any, @Query('employeeId') employeeId?: string) {
        // Employees can only see their own slips
        const targetId = req.user.role === Role.EMPLOYEE ? req.user.id : employeeId;
        return this.payrollService.getSalarySlips(targetId);
    }

    @Post('slips/generate')
    @Roles(Role.HR)
    generateSlip(@Body() body: { employeeId: string; month: string; year: number }) {
        return this.payrollService.generateSlip(body.employeeId, body.month, body.year);
    }

    @Post('slips/:id/email')
    @Roles(Role.HR)
    emailSlip(@Param('id') id: string) {
        return this.payrollService.emailSlip(id);
    }

    @Post('slips/email-all')
    @Roles(Role.HR)
    emailAllSlips(@Body() body: { month: string; year: number }) {
        return this.payrollService.emailAllSlips(body.month, body.year);
    }
}
