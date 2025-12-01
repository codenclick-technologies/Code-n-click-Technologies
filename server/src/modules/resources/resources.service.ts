import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';

@Injectable()
export class ResourcesService {
    constructor(private prisma: PrismaService) { }

    async create(data: any) {
        return this.prisma.resource.create({
            data: {
                title: data.title,
                content: data.content,
                thumbnail: data.thumbnail,
                category: data.category,
                author: data.author,
                status: data.status || 'PUBLISHED',
            },
        });
    }

    async findAll(query: any) {
        const { status, search } = query;
        const where: any = {};

        if (status) where.status = status;
        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { content: { contains: search, mode: 'insensitive' } },
            ];
        }

        return this.prisma.resource.findMany({
            where,
            orderBy: { updatedAt: 'desc' },
        });
    }

    async findOne(id: string) {
        const resource = await this.prisma.resource.findUnique({ where: { id } });
        if (!resource) throw new NotFoundException('Resource not found');
        return resource;
    }

    async update(id: string, data: any) {
        return this.prisma.resource.update({
            where: { id },
            data,
        });
    }

    async remove(id: string) {
        return this.prisma.resource.delete({ where: { id } });
    }
}
