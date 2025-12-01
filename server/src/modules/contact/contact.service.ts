import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';

@Injectable()
export class ContactService {
    constructor(private prisma: PrismaService) { }

    async create(data: any) {
        return this.prisma.contactSubmission.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                subject: data.subject,
                message: data.message,
            },
        });
    }

    async findAll() {
        return this.prisma.contactSubmission.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }

    async markAsRead(id: string) {
        return this.prisma.contactSubmission.update({
            where: { id },
            data: { status: 'READ' },
        });
    }
}
