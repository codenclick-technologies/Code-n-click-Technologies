import {
  IsString,
  IsOptional,
  IsDateString,
  IsArray,
  IsEnum,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMeetingDto {
  @ApiProperty({ example: 'Weekly Team Sync' })
  @IsString()
  title: string;

  @ApiPropertyOptional({ example: 'Discuss project updates and blockers' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: '2023-12-01T10:00:00Z' })
  @IsDateString()
  startTime: string;

  @ApiProperty({ example: '2023-12-01T11:00:00Z' })
  @IsDateString()
  endTime: string;

  @ApiPropertyOptional({ example: 'Conference Room A' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ example: 'https://meet.google.com/abc-defg-hij' })
  @IsOptional()
  @IsString()
  meetingLink?: string;

  @ApiPropertyOptional({ example: ['user-id-1', 'user-id-2'] })
  @IsOptional()
  @IsArray()
  attendees?: string[];
}

export class UpdateMeetingDto {
  @ApiPropertyOptional({ example: 'Weekly Team Sync' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ example: 'Discuss project updates and blockers' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: '2023-12-01T10:00:00Z' })
  @IsOptional()
  @IsDateString()
  startTime?: string;

  @ApiPropertyOptional({ example: '2023-12-01T11:00:00Z' })
  @IsOptional()
  @IsDateString()
  endTime?: string;

  @ApiPropertyOptional({ example: 'Conference Room A' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ example: 'https://meet.google.com/abc-defg-hij' })
  @IsOptional()
  @IsString()
  meetingLink?: string;

  @ApiPropertyOptional({ example: ['user-id-1', 'user-id-2'] })
  @IsOptional()
  @IsArray()
  attendees?: string[];

  @ApiPropertyOptional({ example: 'CANCELLED' })
  @IsOptional()
  @IsString()
  status?: string;
}
