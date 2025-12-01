import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Query,
    UseGuards,
    Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { User } from '@prisma/client';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { LeavesService } from './leaves.service';
import { CreateLeaveDto, UpdateLeaveDto, QueryLeavesDto } from './dto/leave.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@ApiTags('Leaves')
@Controller('leaves')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class LeavesController {
    constructor(private readonly leavesService: LeavesService) { }

    @Post()
    @Roles(Role.EMPLOYEE, Role.HR, Role.MANAGER, Role.OWNER)
    @ApiOperation({ summary: 'Apply for leave' })
    @ApiResponse({ status: 201, description: 'Leave request created successfully' })
    create(@Req() req: Request & { user: User }, @Body() createLeaveDto: CreateLeaveDto) {
        return this.leavesService.create(req.user.id, createLeaveDto);
    }

    @Get('my-leaves')
    @Roles(Role.EMPLOYEE, Role.HR, Role.MANAGER, Role.OWNER)
    @ApiOperation({ summary: 'Get my leave requests' })
    findMyLeaves(@Req() req: Request & { user: User }, @Query() query: QueryLeavesDto) {
        return this.leavesService.findAll(query, req.user.id);
    }

    @Get('balance')
    @Roles(Role.EMPLOYEE, Role.HR, Role.MANAGER, Role.OWNER)
    @ApiOperation({ summary: 'Get leave balance' })
    getBalance(@Req() req: Request & { user: User }, @Query('year') year?: number) {
        const currentYear = year || new Date().getFullYear();
        return this.leavesService.getLeaveBalance(req.user.id, currentYear);
    }

    @Get('all')
    @Roles(Role.HR, Role.MANAGER, Role.OWNER)
    @ApiOperation({ summary: 'Get all leave requests (HR/Manager/Owner)' })
    findAll(@Query() query: QueryLeavesDto) {
        return this.leavesService.findAll(query);
    }

    @Get(':id')
    @Roles(Role.EMPLOYEE, Role.HR, Role.MANAGER, Role.OWNER)
    @ApiOperation({ summary: 'Get leave by ID' })
    findOne(@Param('id') id: string, @Req() req: Request) {
        // HR/Manager/Owner can view any leave, employees can only view their own
        const userId = [Role.HR, Role.MANAGER, Role.OWNER].includes((req as any).user?.role)
            ? undefined
            : (req as any).user?.id;
        return this.leavesService.findOne(id, userId);
    }

    @Patch(':id/approve')
    @Roles(Role.HR, Role.MANAGER, Role.OWNER)
    @ApiOperation({ summary: 'Approve leave request' })
    approve(@Param('id') id: string, @Req() req: Request, @Body() updateDto: UpdateLeaveDto) {
        return this.leavesService.update(
            id,
            { status: 'APPROVED' as any, approvalNote: updateDto.approvalNote },
            (req as any).user?.id,
        );
    }

    @Patch(':id/reject')
    @Roles(Role.HR, Role.MANAGER, Role.OWNER)
    @ApiOperation({ summary: 'Reject leave request' })
    reject(@Param('id') id: string, @Req() req: Request, @Body() updateDto: UpdateLeaveDto) {
        return this.leavesService.update(
            id,
            { status: 'REJECTED' as any, approvalNote: updateDto.approvalNote },
            (req as any).user?.id,
        );
    }

    @Patch(':id/cancel')
    @Roles(Role.EMPLOYEE, Role.HR, Role.MANAGER, Role.OWNER)
    @ApiOperation({ summary: 'Cancel leave request' })
    cancel(@Param('id') id: string, @Req() req: Request) {
        return this.leavesService.cancel(id, (req as any).user?.id);
    }
}
