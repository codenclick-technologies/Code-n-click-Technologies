import { Module } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
import { PrismaService } from '../../config/prisma.service';
import { UploadService } from '../../common/services/upload.service';

@Module({
  controllers: [ApplicationsController],
  providers: [ApplicationsService, PrismaService, UploadService],
  exports: [ApplicationsService],
})
export class ApplicationsModule {}
