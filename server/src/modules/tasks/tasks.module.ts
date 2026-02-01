import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { PrismaService } from '../../config/prisma.service';
import { UploadService } from '../../common/services/upload.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService, PrismaService, UploadService],
  exports: [TasksService],
})
export class TasksModule {}
