import { IsString, IsEmail, IsInt, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { ApplicationStatus, ApplicationSource } from '@prisma/client';

export class CreateApplicationDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsInt()
  experienceYears: number;

  @ApiPropertyOptional()
  @IsOptional()
  currentCTC?: number;

  @ApiPropertyOptional()
  @IsOptional()
  expectedCTC?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  noticePeriod?: string;

  @ApiProperty()
  @IsString()
  skills: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  coverLetter?: string;

  @ApiPropertyOptional({ enum: ApplicationSource })
  @IsOptional()
  @IsEnum(ApplicationSource)
  appliedFrom?: ApplicationSource;
}

export class UpdateApplicationDto extends PartialType(CreateApplicationDto) {
  @ApiPropertyOptional({ enum: ApplicationStatus })
  @IsOptional()
  @IsEnum(ApplicationStatus)
  status?: ApplicationStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}

export class QueryApplicationsDto {
  @ApiPropertyOptional()
  @IsOptional()
  jobId?: string;

  @ApiPropertyOptional({ enum: ApplicationStatus })
  @IsOptional()
  @IsEnum(ApplicationStatus)
  status?: ApplicationStatus;

  @ApiPropertyOptional()
  @IsOptional()
  search?: string;

  @ApiPropertyOptional()
  @IsOptional()
  page?: number;

  @ApiPropertyOptional()
  @IsOptional()
  limit?: number;
}
