import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';
import { ResourceStatus } from '@prisma/client';
import { generateSlug, ensureUniqueSlug } from '../../common/utils/slug.util';

@Injectable()
export class ResourcesService {
  constructor(private prisma: PrismaService) { }

  async create(data: any) {
    // Generate slug from title or use provided slug
    const baseSlug = data.slug
      ? generateSlug(data.slug)
      : generateSlug(data.title);

    // Check for existing slugs
    const existingResources = await this.prisma.resource.findMany({
      where: { slug: { startsWith: baseSlug } },
      select: { slug: true },
    });

    const existingSlugs = existingResources.map((r) => r.slug);
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
        publishedAt: data.publishedAt ? new Date(data.publishedAt) : new Date(),
      },
    });
  }

  async findAll(query: any) {
    const { status, search, category, tags } = query;
    const where: any = { AND: [] };

    if (status) {
      where.AND.push({ status });
    }

    if (category) {
      where.AND.push({ category });
    }

    if (tags) {
      where.AND.push({ tags: { hasSome: Array.isArray(tags) ? tags : [tags] } });
    }

    // Scheduling Logic:
    // If status is PUBLISHED, only show posts where publishedAt <= NOW,
    // unless 'includeFuture' is explicitly set to true.
    if (status === 'PUBLISHED' && query.includeFuture !== 'true') {
      where.AND.push({
        OR: [
          { publishedAt: { lte: new Date() } },
          { publishedAt: null }
        ]
      });
    }

    if (search) {
      where.AND.push({
        OR: [
          { title: { contains: search, mode: 'insensitive' } },
          { content: { contains: search, mode: 'insensitive' } },
          { excerpt: { contains: search, mode: 'insensitive' } },
        ]
      });
    }

    // Clean up empty AND array if perfectly empty
    if (where.AND.length === 0) {
      delete where.AND;
    }

    const result = await this.prisma.resource.findMany({
      where,
      orderBy: { publishedAt: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
        // content: false, // Exclude heavy content
        excerpt: true,
        thumbnail: true,
        category: true,
        tags: true,
        author: true,
        authorId: true,
        status: true,
        views: true,
        publishedAt: true,
        createdAt: true,
        updatedAt: true,
        // SEO Metadata - keeping as it's lightweight
        metaTitle: true,
        metaDescription: true,
        metaKeywords: true,
      }
    });

    // If 'returnContent' param is passed, we might want to support it, 
    // but for now, for the list view, we strictly return everything EXCEPT content.
    // If a specific client needs content in list, we could add a query param.
    // But standard practice is list = no content.

    return result;
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
    // If title or slug changed, regenerate slug
    if (data.title || data.slug) {
      const resource = await this.findOne(id);
      const newBaseSlug = data.slug
        ? generateSlug(data.slug)
        : generateSlug(data.title || resource.title);

      // Only update if the slug effectively changes or is explicitly requested
      if (data.slug || (data.title && data.title !== resource.title)) {
        const existingResources = await this.prisma.resource.findMany({
          where: {
            slug: { startsWith: newBaseSlug },
            NOT: { id },
          },
          select: { slug: true },
        });
        const existingSlugs = existingResources.map((r) => r.slug);
        data.slug = ensureUniqueSlug(newBaseSlug, existingSlugs);
      }
    }

    return this.prisma.resource.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
        publishedAt: data.publishedAt ? new Date(data.publishedAt) : undefined,
      },
    });
  }

  async publish(id: string) {
    const resource = await this.findOne(id);
    const now = new Date();

    // If resource is already scheduled for the future, keep that date.
    // Otherwise, set publishedAt to now.
    const publishedAt = (resource.publishedAt && resource.publishedAt > now)
      ? undefined
      : now;

    return this.prisma.resource.update({
      where: { id },
      data: {
        status: ResourceStatus.PUBLISHED,
        ...(publishedAt && { publishedAt }),
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
    return resources.map((r) => r.category);
  }

  async getTags() {
    const resources = await this.prisma.resource.findMany({
      where: { status: ResourceStatus.PUBLISHED },
      select: { tags: true },
    });
    const allTags = resources.flatMap((r) => r.tags);
    return [...new Set(allTags)];
  }
}
