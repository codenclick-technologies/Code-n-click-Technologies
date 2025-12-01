import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UploadService } from './services/upload.service';
import { UploadController } from './controllers/upload.controller';

@Global()
@Module({
    imports: [ConfigModule],
    controllers: [UploadController],
    providers: [UploadService],
    exports: [UploadService],
})
export class CommonModule { }
