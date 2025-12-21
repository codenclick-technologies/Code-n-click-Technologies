import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  UseGuards,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiOperation,
  ApiConsumes,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { UploadService } from '../services/upload.service';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';

@ApiTags('Uploads')
@Controller('upload')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }

  @Post()
  @ApiOperation({ summary: 'Upload a file' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
        folder: {
          type: 'string',
          default: 'general',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file', {
    limits: {
      fileSize: 50 * 1024 * 1024, // 50MB
    },
  }))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('folder') folder: string = 'general',
  ) {
    console.log('Upload request received:', {
      filename: file?.originalname,
      size: file?.size,
      folder
    });
    const url = await this.uploadService.uploadFile(file, folder);
    return { url };
  }

  @Post('base64')
  @ApiOperation({ summary: 'Upload a base64 encoded file' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          description: 'Base64 data URI',
        },
        folder: {
          type: 'string',
          default: 'general',
        },
      },
    },
  })
  async uploadBase64(
    @Body('file') base64: string,
    @Body('folder') folder: string = 'general',
  ) {
    if (!base64) {
      throw new Error('File content is required');
    }
    console.log('Base64 upload request received', { folder, sizeEstimate: base64.length });
    const url = await this.uploadService.uploadBase64(base64, folder);
    return { url };
  }
}
