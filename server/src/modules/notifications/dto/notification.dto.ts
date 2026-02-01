import {
  IsString,
  IsEnum,
  IsOptional,
  IsBoolean,
  IsDateString,
  IsInt,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { BannerType, DisplayType } from '@prisma/client';

export class CreateNotificationDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  message: string;

  @ApiProperty({ enum: BannerType })
  @IsEnum(BannerType)
  type: BannerType;

  @ApiProperty({ enum: DisplayType })
  @IsEnum(DisplayType)
  displayType: DisplayType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  htmlContent?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  linkUrl?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  linkText?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  startDateTime?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  endDateTime?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  priority?: number;
}

export class UpdateNotificationDto extends PartialType(CreateNotificationDto) {}

export class QueryNotificationsDto {
  @ApiPropertyOptional({ enum: BannerType })
  @IsOptional()
  @IsEnum(BannerType)
  type?: BannerType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  page?: number;

  @ApiPropertyOptional()
  @IsOptional()
  limit?: number;
}
