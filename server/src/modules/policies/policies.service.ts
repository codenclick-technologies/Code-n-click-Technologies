import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';

@Injectable()
export class PoliciesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    // Mock data
    return [
      {
        id: '1',
        title: 'Employee Handbook',
        description: 'General guidelines and policies.',
        category: 'GENERAL',
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        title: 'Leave Policy',
        description: 'Rules regarding leaves and time off.',
        category: 'LEAVE',
        createdAt: new Date().toISOString(),
      },
    ];
  }

  async create(data: any, file: Express.Multer.File) {
    // Mock creation
    return { id: Date.now().toString(), ...data, fileName: file?.originalname };
  }

  async remove(id: string) {
    return { success: true };
  }
}
