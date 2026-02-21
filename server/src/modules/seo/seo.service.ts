
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';

@Injectable()
export class SeoService {
    constructor(private prisma: PrismaService) { }

    private readonly SITE_URL = 'https://www.codenclick.in';

    async generateRobots(): Promise<string> {
        return `User-agent: *
Allow: /
Allow: /assets/
Allow: /images/
Disallow: /dashboard/
Disallow: /login
Disallow: /change-password
Disallow: /forgot-password
Disallow: /reset-password

Sitemap: ${this.SITE_URL}/sitemap.xml
`;
    }

    async generateSnapshot(path: string): Promise<string> {
        // Defined Metadata for Static Routes
        const pageMetadata: Record<string, { title: string; description: string; h1: string }> = {
            '/': {
                title: "Codenclick Technologies | Best Web Development & SEO in Delhi",
                description: "Scale your business with Codenclick Technologies. Top-rated Web Development, SEO, & SaaS solutions in Delhi. Get a free quote for premium IT services today!",
                h1: "Capabilities Scaling Delhi Businesses."
            },

            '/about': {
                title: "About Codenclick Technologies | Top Digital Agency in Delhi",
                description: "Learn about Codenclick Technologies, a premier web development and digital marketing agency in Delhi. We combine tech and creativity to drive growth.",
                h1: "About Us"
            },
            '/contact': {
                title: "Contact Us | Web Development & Marketing Agency Delhi",
                description: "Get in touch with Codenclick Technologies in Delhi. Call +91 8700198968 for a free consultation on web development, SEO, or paid ads.",
                h1: "Let's Build Something Great"
            },
            '/services': {
                title: "Best Digital Marketing & Web Development Services in Delhi NCR",
                description: "Top-rated digital agency in Delhi. We offer custom web development, SaaS engineering, SEO, and performance marketing to scale your business.",
                h1: "Capabilities Scaling Delhi Businesses."
            },
            '/services/web-development': {
                title: "Best Web Development Company in Delhi | Codenclick Technologies",
                description: "Top-rated web development company in Delhi. We build high-performance, SEO-optimized websites and web apps using React & Next.js.",
                h1: "Professional Website Development in Delhi"
            },
            '/services/saas-development': {
                title: "Best SaaS Development Company in Delhi | Codenclick",
                description: "Top SaaS development agency in Delhi. We build scalable, secure cloud applications and MVPs for startups and enterprises.",
                h1: "SaaS Application Development in Delhi"
            },
            '/services/meta-ads': {
                title: "Best Meta Ads Agency in Delhi | Codenclick Technologies",
                description: "Top Meta Ads agency in Delhi. We create high-converting Facebook and Instagram ad campaigns for local businesses.",
                h1: "Meta Ads Management in Delhi"
            },
            '/services/google-ads': {
                title: "Best Google Ads Agency in Delhi | Codenclick Technologies",
                description: "Premier Google Ads (PPC) agency in Delhi. Maximizing ROI with data-driven search and shopping campaigns.",
                h1: "Google Ads Management in Delhi"
            },

            '/services/graphic-design': {
                title: "Best Graphic Design Company in Delhi | Codenclick Technologies",
                description: "Top graphic design agency in Delhi. We create stunning logos, branding, and marketing materials for businesses in Delhi NCR.",
                h1: "Professional Graphic Design in Delhi"
            },
            '/services/seo': {
                title: "Best SEO Agency in Delhi | Rank #1 on Google | Codenclick Technologies",
                description: "Leading SEO Company in Delhi. We drive organic traffic and top rankings for local businesses with ethical, data-driven SEO strategies.",
                h1: "Data-Driven SEO Services in Delhi"
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
            },
            '/privacy': {
                title: "Privacy Policy | Codenclick Technologies",
                description: "Read our privacy policy to understand how we collect, use, and protect your data at Codenclick Technologies.",
                h1: "Privacy Policy"
            },
            '/terms': {
                title: "Terms of Service | Codenclick Technologies",
                description: "Read our terms of service to understand the rules and guidelines for using our services.",
                h1: "Terms of Service"
            }
        };

        // Humanize & Clean Path
        let cleanPath = path;
        if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
        if (cleanPath.endsWith('/') && cleanPath.length > 1) cleanPath = cleanPath.slice(0, -1);

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
                <link rel="icon" type="image/png" href="https://www.codenclick.in/faviconimage.png">
                <link rel="apple-touch-icon" href="https://www.codenclick.in/faviconimage.png">
                <link rel="canonical" href="${this.SITE_URL}${cleanPath === '/' ? '' : cleanPath}">

                <script type="application/ld+json">
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Codenclick Technologies",
                        "url": "https://www.codenclick.in/",
                        "logo": "https://www.codenclick.in/faviconimage.png",
                        "sameAs": [
                            "https://www.facebook.com/codenclick",
                            "https://www.linkedin.com/company/codenclick",
                            "https://www.instagram.com/codenclick"
                        ]
                    }
                </script>
                <script type="application/ld+json">
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://www.codenclick.in/"
                        }${cleanPath !== '/' ? `, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "${h1}",
                            "item": "https://www.codenclick.in${cleanPath}"
                        }` : ''}]
                    }
                </script>
                ${cleanPath.includes('/services/') ? `
                <script type="application/ld+json">
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [{
                            "@type": "Question",
                            "name": "What are your ${h1} charges in Delhi?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "At Codenclick Technologies, we offer competitive and transparent pricing for ${h1}. Contact us at +91 8700198968 for a custom quote tailored to your business needs."
                            }
                        }, {
                            "@type": "Question",
                            "name": "How long does it take for ${h1}?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Project timelines vary based on complexity, but we typically deliver high-quality ${h1} projects within 2 to 6 weeks."
                            }
                        }]
                    }
                </script>` : ''}
                <style>
                    body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; color: #333; background: #fff; }
                    h1 { font-size: 2.5rem; color: #111; margin-bottom: 20px; }
                    p { font-size: 1.1rem; margin-bottom: 15px; }
                    .cta { display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 20px; font-weight: 600; }
                    nav { margin-bottom: 40px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
                    nav a { text-decoration: none; color: #2563eb; margin-right: 15px; }
                </style>
            </head>
            <body>
                <header>
                    <nav>
                        <a href="/">Home</a> 
                        <a href="/about">About</a>
                        <a href="/services">Services</a> 
                        <a href="/portfolio">Portfolio</a>
                        <a href="/resources">Resources</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </header>
                <main>
                    <h1>${h1}</h1>
                    <p>${description}</p>
                    <hr>
                    <p><strong>Codenclick Technologies</strong> is a premium software development company delivering enterprise-grade solutions in Delhi NCR.</p>
                    <a href="${this.SITE_URL}${cleanPath}" class="cta">View Full Interactive Experience</a>
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
            '/company-brochure',
        ];

        const urls = [
            ...staticRoutes.map((route) => ({
                loc: `${this.SITE_URL}${route}`,
                lastmod: new Date().toISOString(),
                changefreq: route === '' ? 'daily' : 'weekly' as const,
                priority: route === '' ? '1.0' : (route.startsWith('/services') ? '0.9' : '0.8'),
            })),
            ...resources.map((resource: any) => ({
                loc: `${this.SITE_URL}/resources/${resource.slug}`,
                lastmod: resource.updatedAt.toISOString(),
                changefreq: 'weekly' as const,
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
