import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import * as streamifier from 'streamifier';

/**
 * Upload Service with Enhanced Security
 * Handles file uploads to Cloudinary with comprehensive validation
 */
@Injectable()
export class UploadService {
    // Security Configuration
    private readonly ALLOWED_MIME_TYPES = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'image/jpeg',
        'image/png',
        'image/webp',
    ];

    private readonly MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    private readonly ALLOWED_EXTENSIONS = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png', 'webp'];

    /**
     * Validates file before upload
     * @param file - The file to validate
     * @throws BadRequestException if validation fails
     */
    private validateFile(file: Express.Multer.File): void {
        if (!file) {
            throw new BadRequestException('No file provided');
        }

        // File size validation
        if (file.size > this.MAX_FILE_SIZE) {
            throw new BadRequestException(
                `File size exceeds maximum limit of ${this.MAX_FILE_SIZE / 1024 / 1024}MB`
            );
        }

        // MIME type validation
        if (!this.ALLOWED_MIME_TYPES.includes(file.mimetype)) {
            throw new BadRequestException(
                `Invalid file type. Allowed types: PDF, DOC, DOCX, JPG, PNG, WEBP`
            );
        }

        // File extension validation
        const fileExtension = file.originalname.split('.').pop()?.toLowerCase();
        if (!fileExtension || !this.ALLOWED_EXTENSIONS.includes(fileExtension)) {
            throw new BadRequestException(
                `Invalid file extension. Allowed: ${this.ALLOWED_EXTENSIONS.join(', ')}`
            );
        }

        // Suspicious file name check (XSS prevention)
        if (/<|>|script|javascript|onclick|onerror/i.test(file.originalname)) {
            throw new BadRequestException('File name contains invalid characters');
        }

        // File name length check
        if (file.originalname.length > 255) {
            throw new BadRequestException('File name is too long (max 255 characters)');
        }
    }

    /**
     * Uploads file to Cloudinary with validation
     * @param file - The file to upload
     * @param folder - Optional folder name (default: 'general')
     * @returns Promise<string> - The secure URL of uploaded file
     */
    async uploadFile(file: Express.Multer.File, folder: string = 'general'): Promise<string> {
        // Validate file before upload
        this.validateFile(file);

        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    folder: `code-n-click/${folder}`,
                    // Generate unique public ID to prevent overwrites
                    public_id: `file_${Date.now()}_${Math.random().toString(36).substring(7)}`,
                    // Security: Disable URL transformation
                    invalidate: true,
                    // Auto-detect resource type
                    resource_type: 'auto',
                },
                (error, result) => {
                    if (error || !result) {
                        console.error('Cloudinary upload error:', error);
                        return reject(new InternalServerErrorException('File upload failed'));
                    }
                    resolve(result.secure_url);
                },
            );

            streamifier.createReadStream(file.buffer).pipe(uploadStream);
        });
    }

    /**
     * Deletes file from Cloudinary
     * @param fileUrl - The Cloudinary file URL to delete
     */
    async deleteFile(fileUrl: string): Promise<void> {
        try {
            // Extract public ID from URL
            const splitUrl = fileUrl.split('/');
            const filename = splitUrl[splitUrl.length - 1];
            const publicId = `code-n-click/${filename.split('.')[0]}`;

            await cloudinary.uploader.destroy(publicId);
        } catch (error) {
            console.error('Error deleting file from Cloudinary:', error);
            // Don't throw - deletion failures shouldn't block operations
        }
    }
}
