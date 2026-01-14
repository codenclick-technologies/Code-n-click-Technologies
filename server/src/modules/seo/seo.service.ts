
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';

@Injectable()
export class SeoService {
    constructor(private prisma: PrismaService) { }

    private readonly SITE_URL = 'https://codenclick.in';

    async generateRobots(): Promise<string> {
        return `User-agent: *
Allow: /
Sitemap: ${this.SITE_URL}/sitemap.xml
`;
    }

    async generateSnapshot(path: string): Promise<string> {
        // Logic to generate HTML snapshot based on path
        // 1. Identify if it's a programmatic service page
        // 2. Or a resource page
        // 3. Or a static page

        // Default Metadata
        let title = "Codenclick Technologies | Premium Web & App Development";
        let description = "We build high-performance websites and apps. Rated #1 in Delhi NCR.";
        let h1 = "Engineered for Excellence";

        path = path || '/';

        // simple regex routing for snapshot
        if (path.includes('/services/') && path.includes('/in/')) {
            // Programmatic SEO Page: /services/web-development/in/delhi
            const parts = path.split('/');
            const service = parts[2].replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
            const city = parts[4].replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());

            title = `Best ${service} Service in ${city} | Codenclick`;
            description = `Looking for ${service} in ${city}? We provide top-tier ${service} solutions tailored for your business in ${city}. Get a free quote today.`;
            h1 = `${service} in ${city}`;
        } else if (path.includes('/resources/')) {
            // Blog Post
            const slug = path.split('/').pop();
            const resource = await this.prisma.resource.findUnique({ where: { slug } });
            if (resource) {
                title = resource.metaTitle || resource.title || '';
                description = resource.metaDescription || resource.excerpt || '';
                h1 = resource.title || '';
            }
        }

        // Return the "Perfect" HTML for Googlebot
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${title}</title>
                <meta name="description" content="${description}">
                <meta name="robots" content="index, follow">
                <style>
                    body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; color: #333; }
                    h1 { font-size: 2.5rem; color: #111; }
                    p { font-size: 1.1rem; }
                    .cta { display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 20px; }
                </style>
            </head>
            <body>
                <header>
                    <nav>
                        <a href="/">Home</a> | <a href="/services">Services</a> | <a href="/resources">Resources</a>
                    </nav>
                </header>
                <main>
                    <h1>${h1}</h1>
                    <p>${description}</p>
                    <hr>
                    <p><strong>Codenclick Technologies</strong> is a premium software development company delivering enterprise-grade solutions.</p>
                    <a href="${path}" class="cta">View Full Interactive Experience</a>
                </main>
                <footer>
                    <p>&copy; ${new Date().getFullYear()} Codenclick Technologies. All rights reserved.</p>
                </footer>
            </body>
            </html>
        `;
    }

    async generateSitemap(): Promise<string> {
        const resources = await this.prisma.resource.findMany({
            where: {
                status: 'PUBLISHED',
            },
            select: {
                slug: true,
                updatedAt: true,
            },
        });

        const staticRoutes = [
            '',
            '/about',
            '/contact',
            '/resources',
            '/careers',
            '/services',
            '/services/web-development',
            '/services/saas-development',
            '/services/meta-ads',
            '/services/google-ads',
            '/services/graphic-design',
            '/services/seo',
        ];

        // Programmatic Pages: Services x Cities
        const services = [
            'web-development',
            'saas-development',
            'meta-ads',
            'google-ads',
            'graphic-design',
            'seo'
        ];

        // Top 10 Tech Cities in India for "Programmatic" scale
        const cities = [
            'delhi', 'mumbai', 'bangalore', 'hyderabad', 'chennai',
            'pune', 'noida', 'gurgaon', 'faridabad', 'kolkata'
        ];

        const programmaticRoutes: string[] = [];
        services.forEach(service => {
            cities.forEach(city => {
                programmaticRoutes.push(`/services/${service}/in/${city}`);
            });
        });

        const urls = [
            ...staticRoutes.map((route) => ({
                loc: `${this.SITE_URL}${route}`,
                lastmod: new Date().toISOString(),
                changefreq: 'weekly',
                priority: route === '' ? '1.0' : '0.8',
            })),
            ...resources.map((resource: any) => ({
                loc: `${this.SITE_URL}/resources/${resource.slug}`,
                lastmod: resource.updatedAt.toISOString(),
                changefreq: 'weekly',
                priority: '0.7',
            })),
            ...programmaticRoutes.map((route) => ({
                loc: `${this.SITE_URL}${route}`,
                lastmod: new Date().toISOString(),
                changefreq: 'weekly',
                priority: '0.6',
            }))
        ];

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
                .map(
                    (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
                )
                .join('')}
</urlset>`;

        return sitemap;
    }
}
