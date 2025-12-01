import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import * as fs from 'fs';
import * as path from 'path';

/**
 * File Upload Service
 * Supports both local filesystem and S3-compatible storage
 */
@Injectable()
export class UploadService {
  private s3Client: S3Client | null = null;
  private storageType: string;
  private uploadPath: string;

  constructor(private configService: ConfigService) {
    this.storageType = this.configService.get('STORAGE_TYPE') || 'local';
    this.uploadPath = this.configService.get('UPLOAD_PATH') || './uploads';

    if (this.storageType === 's3') {
      this.s3Client = new S3Client({
        region: this.configService.get<string>('AWS_REGION'),
        credentials: {
          accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY_ID') || '',
          secretAccessKey: this.configService.get<string>('AWS_SECRET_ACCESS_KEY') || '',
        },
      });
    } else {
      // Ensure upload directory exists
      if (!fs.existsSync(this.uploadPath)) {
        fs.mkdirSync(this.uploadPath, { recursive: true });
      }
    }
  }

  async uploadFile(
    file: Express.Multer.File,
    folder: string = 'general',
  ): Promise<string> {
    const fileName = `${Date.now()}-${file.originalname}`;

    if (this.storageType === 's3') {
      return this.uploadToS3(file, folder, fileName);
    } else {
      return this.uploadToLocal(file, folder, fileName);
    }
  }

  private async uploadToS3(
    file: Express.Multer.File,
    folder: string,
    fileName: string,
  ): Promise<string> {
    const bucket = this.configService.get('AWS_S3_BUCKET');
    const key = `${folder}/${fileName}`;

    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    });

    await this.s3Client!.send(command);

    return `https://${bucket}.s3.amazonaws.com/${key}`;
  }

  private async uploadToLocal(
    file: Express.Multer.File,
    folder: string,
    fileName: string,
  ): Promise<string> {
    const folderPath = path.join(this.uploadPath, folder);

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const filePath = path.join(folderPath, fileName);
    fs.writeFileSync(filePath, file.buffer);

    return `/uploads/${folder}/${fileName}`;
  }

  async deleteFile(fileUrl: string): Promise<void> {
    if (this.storageType === 'local') {
      const filePath = path.join(process.cwd(), fileUrl);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
    // S3 deletion can be implemented if needed
  }
}
