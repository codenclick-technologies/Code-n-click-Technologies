
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
        // Defined Metadata for Static Routes
        const pageMetadata: Record<string, { title: string; description: string; h1: string }> = {
            '/': {
                title: "Your Partner in Digital Growth | Web Development & Marketing Experts",
                description: "We don't just build websites; we build businesses. From custom software to ROI-focused digital marketing, Codenclick Technologies is your partner in scaling up. Based in New Delhi.",
                h1: "Capabilities Scaling Delhi Businesses."
            },
            '/about': {
                title: "About Codenclick Technologies | Top Digital Agency in Delhi",
                description: "Learn about Codenclick Technologies, a premier web development and digital marketing agency in New Delhi. We combine tech and creativity to drive growth.",
                h1: "About Us"
            },
            '/contact': {
                title: "Contact Us | Web Development & Marketing Agency Delhi",
                description: "Get in touch with Codenclick Technologies in New Delhi. Call +91 8700198968 for a free consultation on web development, SEO, or paid ads.",
                h1: "Let's Build Something Great"
            },
            '/services': {
                title: "Best Digital Marketing & Web Development Services in Delhi NCR",
                description: "Top-rated digital agency in New Delhi. We offer custom web development, SaaS engineering, SEO, and performance marketing to scale your business.",
                h1: "Capabilities Scaling Delhi Businesses."
            },
            '/services/web-development': {
                title: "Best Web Development Company in Delhi | Codenclick Technologies",
                description: "Top-rated web development company in Delhi. We build high-performance, SEO-optimized websites and web apps using React & Next.js.",
                h1: "Professional Website Development in New Delhi"
            },
            '/services/saas-development': {
                title: "Best SaaS Development Company in Delhi | Codenclick Technologies",
                description: "Top SaaS development agency in Delhi. We build scalable, secure cloud applications and MVPs for startups and enterprises.",
                h1: "SaaS Application Development in New Delhi"
            },
            '/services/meta-ads': {
                title: "Best Meta Ads Agency in Delhi | Codenclick Technologies",
                description: "Top Meta Ads agency in Delhi. We create high-converting Facebook and Instagram ad campaigns for local businesses in Delhi NCR.",
                h1: "Meta Ads (Facebook/Instagram) Management in New Delhi"
            },
            '/services/google-ads': {
                title: "Best Google Ads Agency in Delhi | Codenclick Technologies",
                description: "Premier Google Ads (PPC) agency in Delhi. Maximizing ROI with data-driven search and shopping campaigns for Delhi businesses.",
                h1: "Focus on ROI with Google Ads in Delhi"
            },
            '/services/graphic-design': {
                title: "Best Graphic Design Company in Delhi | Codenclick Technologies",
                description: "Top graphic design agency in Delhi. We create stunning logos, branding, and marketing materials for businesses in Delhi NCR.",
                h1: "Professional Graphic Design in New Delhi"
            },
            '/services/seo': {
                title: "Best SEO Agency in Delhi | Rank #1 on Google | Codenclick Technologies",
                description: "Leading SEO Company in Delhi. We drive organic traffic and top rankings for local businesses with ethical, data-driven SEO strategies.",
                h1: "Data-Driven SEO Services in New Delhi"
            },
            '/portfolio': {
                title: "Our Portfolio - Transforming Ideas Into Digital Success",
                description: "Explore our portfolio of cutting-edge digital solutions. From AI-powered platforms to enterprise systems in Delhi NCR.",
                h1: "Building the Future, Today."
            },
            '/resources': {
                title: "Resources, Guides & Insights | Codenclick Technologies",
                description: "Explore our library of articles, guides, and videos on web development, SEO, SaaS growth, and digital marketing.",
                h1: "Insights for Builders"
            },
            '/careers': {
                title: "Careers at Codenclick Technologies | Join Our Team in Delhi",
                description: "Join the best tech team in Delhi. We are hiring developers, designers, and marketers passionate about innovation.",
                h1: "Join Our Team"
            }
        };

        // Remove trailing slash for consistency
        const cleanPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;

        // Default Metadata
        let title = "Codenclick Technologies | Premium Web & App Development";
        let description = "We build high-performance websites and apps. Rated #1 in Delhi NCR.";
        let h1 = "Engineered for Excellence";

        // Logic routing
        if (pageMetadata[cleanPath]) {
            // 1. Static Routes (Exact Match)
            const meta = pageMetadata[cleanPath];
            title = meta.title;
            description = meta.description;
            h1 = meta.h1;
        } else if (cleanPath.includes('/services/') && cleanPath.includes('/in/')) {
            // 2. Programmatic SEO Page: /services/web-development/in/delhi
            const parts = cleanPath.split('/');
            const service = parts[2].replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
            const city = parts[4].replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());

            title = `Best ${service} Service in ${city} | Codenclick Technologies`;
            description = `Looking for the best ${service} in ${city}? We provide top-tier ${service} solutions tailored for your business in ${city}. Get a free quote today.`;
            h1 = `${service} in ${city}`;
        } else if (cleanPath.includes('/resources/')) {
            // 3. Blog Post
            const slug = cleanPath.split('/').pop();
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
                    <a href="${pageMetadata[cleanPath] ? `https://codenclick.in${cleanPath}` : 'https://codenclick.in'}" class="cta">View Full Interactive Experience</a>
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
            '/services/app-development',
            '/services/saas-development',
            '/services/meta-ads',
            '/services/google-ads',
            '/services/graphic-design',
            '/services/seo',
            '/privacy',
            '/terms',
            '/portfolio',
            '/brochure',
        ];



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
