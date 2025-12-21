import { Module, Global } from '@nestjs/common';
import { UploadService } from './services/upload.service';
import { SanitizationService } from './services/sanitization.service';
import { CloudinaryProvider } from './providers/cloudinary.provider';
import { UploadController } from './controllers/upload.controller';

@Global()
@Module({
  controllers: [UploadController],
  providers: [CloudinaryProvider, UploadService, SanitizationService],
  exports: [UploadService, SanitizationService],
})
export class CommonModule { }
