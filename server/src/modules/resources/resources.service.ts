import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';
import { ResourceStatus } from '@prisma/client';
import { generateSlug, ensureUniqueSlug } from '../../common/utils/slug.util';

@Injectable()
export class ResourcesService {
    constructor(private prisma: PrismaService) { }

    async create(data: any) {
        // Generate slug from title
        const baseSlug = generateSlug(data.title);

        // Check for existing slugs
        const existingResources = await this.prisma.resource.findMany({
            where: { slug: { startsWith: baseSlug } },
            select: { slug: true },
        });

        const existingSlugs = existingResources.map(r => r.slug);
        const uniqueSlug = ensureUniqueSlug(baseSlug, existingSlugs);

        return this.prisma.resource.create({
            data: {
                title: data.title,
                slug: uniqueSlug,
                content: data.content,
                excerpt: data.excerpt,
                thumbnail: data.thumbnail,
                category: data.category,
                tags: data.tags || [],
                author: data.author || 'Code-n-Click Team',
                authorId: data.authorId,
                status: data.status || ResourceStatus.DRAFT,
                metaTitle: data.metaTitle || data.title,
                metaDescription: data.metaDescription,
                metaKeywords: data.metaKeywords || [],
            },
        });
    }

    async findAll(query: any) {
        const { status, search, category, tags } = query;
        const where: any = {};

        if (status) where.status = status;
        if (category) where.category = category;
        if (tags) where.tags = { hasSome: Array.isArray(tags) ? tags : [tags] };

        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { content: { contains: search, mode: 'insensitive' } },
                { excerpt: { contains: search, mode: 'insensitive' } },
            ];
        }

        return this.prisma.resource.findMany({
            where,
            orderBy: { publishedAt: 'desc' },
        });
    }

    async findOne(id: string) {
        const resource = await this.prisma.resource.findUnique({ where: { id } });
        if (!resource) throw new NotFoundException('Resource not found');
        return resource;
    }

    async findBySlug(slug: string) {
        const resource = await this.prisma.resource.findUnique({
            where: { slug },
        });
        if (!resource) throw new NotFoundException('Resource not found');
        return resource;
    }

    async update(id: string, data: any) {
        // If title changed, regenerate slug
        if (data.title) {
            const resource = await this.findOne(id);
            if (data.title !== resource.title) {
                const baseSlug = generateSlug(data.title);
                const existingResources = await this.prisma.resource.findMany({
                    where: {
                        slug: { startsWith: baseSlug },
                        NOT: { id }
                    },
                    select: { slug: true },
                });
                const existingSlugs = existingResources.map(r => r.slug);
                data.slug = ensureUniqueSlug(baseSlug, existingSlugs);
            }
        }

        return this.prisma.resource.update({
            where: { id },
            data: {
                ...data,
                updatedAt: new Date(),
            },
        });
    }

    async publish(id: string) {
        return this.prisma.resource.update({
            where: { id },
            data: {
                status: ResourceStatus.PUBLISHED,
                publishedAt: new Date(),
            },
        });
    }

    async unpublish(id: string) {
        return this.prisma.resource.update({
            where: { id },
            data: {
                status: ResourceStatus.DRAFT,
            },
        });
    }

    async incrementViews(id: string) {
        return this.prisma.resource.update({
            where: { id },
            data: {
                views: { increment: 1 },
            },
        });
    }

    async remove(id: string) {
        return this.prisma.resource.delete({ where: { id } });
    }

    async getCategories() {
        const resources = await this.prisma.resource.findMany({
            where: { status: ResourceStatus.PUBLISHED },
            select: { category: true },
            distinct: ['category'],
        });
        return resources.map(r => r.category);
    }

    async getTags() {
        const resources = await this.prisma.resource.findMany({
            where: { status: ResourceStatus.PUBLISHED },
            select: { tags: true },
        });
        const allTags = resources.flatMap(r => r.tags);
        return [...new Set(allTags)];
    }
}
