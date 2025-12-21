import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './config/prisma.service';
import { Public } from './common/decorators/public.decorator';
import { v2 as cloudinary } from 'cloudinary';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Public()
  @Get('health')
  async getHealth() {
    this.logger.log('Health check requested');
    const dbStatus = await this.prisma.$queryRaw`SELECT 1`
      .catch((e) => {
        this.logger.error('DB Health Check Failed:', e.message);
        return 'FAILED: ' + e.message;
      });

    // Check Cloudinary config (basic check)
    const cloudinaryConfig = cloudinary.config();
    const cloudinaryStatus = (cloudinaryConfig.cloud_name && cloudinaryConfig.api_key)
      ? 'CONFIGURED'
      : 'NOT CONFIGURED';

    return {
      status: 'OK',
      database: dbStatus ? 'UP' : 'DOWN',
      cloudinary: cloudinaryStatus,
      timestamp: new Date().toISOString(),
      node_env: process.env.NODE_ENV,
    };
  }
}
