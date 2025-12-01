import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
    async uploadFile(file: Express.Multer.File, folder: string = 'general') {
        // Mock upload logic
        return {
            url: `http://localhost:3000/uploads/${folder}/${file.originalname}`,
            filename: file.originalname,
        };
    }
}
