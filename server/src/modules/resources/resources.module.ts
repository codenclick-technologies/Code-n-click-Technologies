import { Module } from '@nestjs/common';
import { ResourcesController } from './resources.controller';
import { ResourcesService } from './resources.service';
import { PrismaService } from '../../config/prisma.service';
import { SeoModule } from '../seo/seo.module';

@Module({
  imports: [SeoModule],
  controllers: [ResourcesController],
  providers: [ResourcesService, PrismaService],
})
export class ResourcesModule { }
