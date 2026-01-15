import { Module } from '@nestjs/common';
import { SeoController } from './seo.controller';
import { SeoService } from './seo.service';
import { IndexNowService } from './indexnow.service';
import { PrismaService } from '../../config/prisma.service';

@Module({
    imports: [],
    controllers: [SeoController],
    providers: [SeoService, IndexNowService, PrismaService],
    exports: [SeoService, IndexNowService],
})
export class SeoModule { }
