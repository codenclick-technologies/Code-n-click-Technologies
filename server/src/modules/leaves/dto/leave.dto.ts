import { IsEnum, IsString, IsDateString, IsInt, Min, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { LeaveType, LeaveStatus } from '@prisma/client';

export class CreateLeaveDto {
    @ApiProperty({ enum: LeaveType })
    @IsEnum(LeaveType)
    leaveType: LeaveType;

    @ApiProperty()
    @IsDateString()
    startDate: string;

    @ApiProperty()
    @IsDateString()
    endDate: string;

    @ApiProperty()
    @IsInt()
    @Min(1)
    days: number;

    @ApiProperty()
    @IsString()
    reason: string;
}

export class UpdateLeaveDto {
    @ApiProperty({ enum: LeaveStatus, required: false })
    @IsEnum(LeaveStatus)
    @IsOptional()
    status?: LeaveStatus;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    approvalNote?: string;
}

export class QueryLeavesDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsEnum(LeaveStatus)
    status?: LeaveStatus;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsDateString()
    startDate?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsDateString()
    endDate?: string;
}
