import { Module } from '@nestjs/common';
import { CelebrationsService } from './celebrations.service';
import { CelebrationsController } from './celebrations.controller';
import { PrismaService } from '../../config/prisma.service';

@Module({
  controllers: [CelebrationsController],
  providers: [CelebrationsService, PrismaService],
})
export class CelebrationsModule {}
