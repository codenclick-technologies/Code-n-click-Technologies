import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getPublishedCities } from '../src/data/cities/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Standardized production canonical domain (always https://www.codenclick.in)
const DOMAIN = 'https://www.codenclick.in';

const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/careers',
  '/portfolio',
  '/pricing',
  '/privacy',
  '/terms',
  '/company-brochure',
  '/services',
  '/services/web-development',
  '/services/app-development',
  '/services/saas-development',
  '/services/meta-ads',
  '/services/google-ads',
  '/services/graphic-design',
  '/services/seo',
  '/resources',
  '/digital-marketing-agency'
];

// Dynamically retrieve only published cities that meet quality thresholds
const publishedCities = getPublishedCities();
const cityRoutes = publishedCities.map(city => `/digital-marketing-agency/${city.slug}`);

const allRoutes = [...staticRoutes, ...cityRoutes];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => {
  const isHome = route === '/';
  const isHub = route === '/digital-marketing-agency';
  const isCity = route.startsWith('/digital-marketing-agency/');
  const isService = route.startsWith('/services');

  let priority = '0.8';
  let changefreq = 'weekly';

  if (isHome) {
    priority = '1.0';
    changefreq = 'daily';
  } else if (isHub || isCity || isService) {
    priority = '0.9';
    changefreq = 'weekly';
  }

  // Ensure trailing slash for directory/hub routes for canonical consistency
  const canonicalUrl = isHome ? `${DOMAIN}/` : `${DOMAIN}${route}`;

  return `  <url>
    <loc>${canonicalUrl}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

const publicDir = path.resolve(__dirname, '../public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(sitemapPath, sitemapContent);

// Generate public/robots.txt as well for local and static consistency
const robotsContent = `User-agent: *
Allow: /
Allow: /assets/
Allow: /brand-full.png
Allow: /faviconimage.png
Allow: /digital-marketing-agency/
Disallow: /dashboard/
Disallow: /login
Disallow: /change-password
Disallow: /forgot-password
Disallow: /reset-password

Sitemap: ${DOMAIN}/sitemap.xml
`;

const robotsPath = path.join(publicDir, 'robots.txt');
fs.writeFileSync(robotsPath, robotsContent);

console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
console.log(`Included ${allRoutes.length} total routes (Static: ${staticRoutes.length}, Published Cities: ${cityRoutes.length}).`);
console.log(`✅ Robots.txt generated at ${robotsPath}`);
