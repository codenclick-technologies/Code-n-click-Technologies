import { IsEnum, IsDateString, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CheckInDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  notes?: string;
}

export class CheckOutDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  notes?: string;
}

export class QueryAttendanceDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  date?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  month?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  year?: number;
}

export class UpdateAttendanceDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  checkIn?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  checkOut?: string;

  @ApiProperty({
    required: false,
    enum: ['PRESENT', 'ABSENT', 'LEAVE', 'HALF_DAY'],
  })
  @IsOptional()
  @IsEnum(['PRESENT', 'ABSENT', 'LEAVE', 'HALF_DAY'])
  status?: 'PRESENT' | 'ABSENT' | 'LEAVE' | 'HALF_DAY';

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}
