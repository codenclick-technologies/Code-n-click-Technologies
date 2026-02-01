import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';
import { ResourceStatus } from '@prisma/client';
import { generateSlug, ensureUniqueSlug } from '../../common/utils/slug.util';
import { IndexNowService } from '../seo/indexnow.service';

@Injectable()
export class ResourcesService {
  constructor(
    private prisma: PrismaService,
    private indexNowService: IndexNowService
  ) { }

  // 100x SEO Strategy: The "Money Map"
  // These keywords will be AUTO-LINKED in every single blog post.
  private readonly KEYWORD_MAP = {
    'Web Development': '/services/web-development',
    'Website Design': '/services/web-development',
    'SaaS': '/services/saas-development',
    'Software': '/services/saas-development',
    'SEO': '/services/seo',
    'Search Engine Optimization': '/services/seo',
    'Meta Ads': '/services/meta-ads',
    'Facebook Ads': '/services/meta-ads',
    'Google Ads': '/services/google-ads',
    'PPC': '/services/google-ads',
    'Graphic Design': '/services/graphic-design',
    'Logo Design': '/services/graphic-design'
  };

  private autoLinkContent(content: string): string {
    if (!content) return content;

    let linkedContent = content;
    // Iterate through our money keywords
    Object.entries(this.KEYWORD_MAP).forEach(([keyword, url]) => {
      // Regex to find keyword:
      // 1. Case insensitive (i)
      // 2. Global (g) - find all occurrences? No, usually just the first one is better for SEO to avoid spamminess. 
      // Let's stick to replacing the FIRST occurrence to look natural.
      // 3. Ensure it's not already inside a link (complex, but simple boundary checks help)

      const regex = new RegExp(`\\b(${keyword})\\b(?![^<]*>|[^<>]*<\/a>)`, 'i');

      // Replace matching keyword with an internal link
      linkedContent = linkedContent.replace(regex, `<a href="${url}" class="text-blue-600 hover:underline font-medium" title="Learn more about ${keyword}">$1</a>`);
    });

    return linkedContent;
  }

  private generateFAQSchema(content: string): any[] {
    if (!content) return [];

    const faqs: any[] = [];
    // Regex to find H2 questions: <h2>What is SEO?</h2>
    // We look for text ending in '?' inside h2
    const regex = /<h2[^>]*>(.*?\?)<\/h2>[\s\S]*?(?:<p>(.*?)<\/p>)/gi;

    let match;
    while ((match = regex.exec(content)) !== null) {
      const question = match[1].replace(/<[^>]+>/g, ''); // strip tags just in case
      const answer = match[2].replace(/<[^>]+>/g, ''); // get first paragraph answer

      if (question && answer) {
        faqs.push({
          "@type": "Question",
          "name": question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": answer
          }
        });
      }
    }
    return faqs;
  }

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

    // Security Check: Hide Drafts and Scheduled posts from public access
    const isPublished = resource.status === ResourceStatus.PUBLISHED;
    const isLive = !resource.publishedAt || resource.publishedAt <= new Date();

    if (!isPublished || !isLive) {
      throw new NotFoundException('Resource not found');
    }

    // 100x SEO: Auto-inject internal links before serving
    // This creates the "Neural Network" of content
    if (resource.content) {
      resource.content = this.autoLinkContent(resource.content);

      // 100x SEO: Auto-generate FAQ Schema
      const generatedFaqs = this.generateFAQSchema(resource.content);
      if (generatedFaqs.length > 0) {
        // Append to existing resource so frontend can render json-ld
        (resource as any).autoSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": generatedFaqs
        };
      }
    }

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

    const updatedResource = await this.prisma.resource.update({
      where: { id },
      data: {
        status: ResourceStatus.PUBLISHED,
        ...(publishedAt && { publishedAt }),
      },
    });

    if (updatedResource.status === 'PUBLISHED') {
      const url = `https://codenclick.in/resources/${updatedResource.slug}`;
      this.indexNowService.submitUrl(url);
    }

    return updatedResource;
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
