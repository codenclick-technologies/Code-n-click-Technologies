import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const resources = [
  // 1. Web Development - Immediate
  {
    title: 'The Future of Web Development: AI, No-Code, and Beyond',
    slug: 'future-of-web-development-ai-no-code',
    content: `
      <h2>The Shift in Web Development</h2>
      <p>The web development landscape is shifting beneath our feet. As we move deeper into the decade, three trends are defining the future: Artificial Intelligence, No-Code/Low-Code platforms, and the relentless demand for performance.</p>
      
      <h3>1. AI-Assisted Coding</h3>
      <p>Tools like GitHub Copilot and Cursor are not replacing developers; they are augmenting them. They handle the boilerplate, allowing engineers to focus on architecture and business logic. At <strong>Codenclick Technologies</strong>, we leverage these tools to deliver projects 30% faster without compromising code quality.</p>
      
      <h3>2. The Rise of "Composable" Architectures</h3>
      <p>Monoliths are dying. The future is composable—Headless CMS, independent APIs, and micro-frontends. This approach gives businesses the flexibility to swap out components (like changing a payment gateway or CRM) without rebuilding the entire system.</p>
      
      <h3>3. Web Assembly (Wasm)</h3>
      <p>Wasm is bringing near-native performance to the browser. It allows us to run high-performance applications (like video editors or 3D rendering engines) directly in the web, unlocking capabilities that were previously reserved for desktop apps.</p>
      
      <h3>Conclusion</h3>
      <p>To stay ahead, businesses must adopt these technologies not just as buzzwords, but as strategic advantages. The future belongs to those who build fast, scalable, and intelligent web applications.</p>
    `,
    excerpt: 'Explore how AI, Composable Architecture, and Web Assembly are revolutionizing the way we build the web in 2025 and beyond.',
    category: 'Web Development',
    tags: ['AI', 'Web3', 'Future Tech'],
    author: 'Codenclick Team',
    status: 'PUBLISHED',
    publishedAt: new Date(new Date().setDate(new Date().getDate() - 10)), // 10 days ago
    thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000',
    views: 1250
  },
  // 2. Web Development - Immediate
  {
    title: 'Next.js vs React: Which is Right for Your Business?',
    slug: 'nextjs-vs-react-business-guide',
    content: `
      <h2>Choosing the Right Stack</h2>
      <p>React is the library. Next.js is the framework. But for a business owner or CTO, the choice often boils down to one question: <strong>Do you need SEO?</strong></p>
      
      <h3>The Search Engine Factor</h3>
      <p>React, by default, renders content in the browser (Client-Side Rendering). This is great for interactivity but can be a challenge for search engines. Next.js solves this with Server-Side Rendering (SSR) and Static Site Generation (SSG), serving pre-rendered HTML that Google loves.</p>
      
      <h3>Performance</h3>
      <p>Next.js includes automatic image optimization, script scheduling, and route pre-fetching out of the box. These features directly impact your Core Web Vitals, which are now a ranking factor for Google.</p>
      
      <h3>Developer Experience & Time-to-Market</h3>
      <p>Next.js provides a standardized structure. This means faster onboarding for new developers and quicker deployment times. Vercel, the company behind Next.js, offers a deployment infrastructure that is second to none.</p>
      
      <h3>Verdict</h3>
      <p>If you are building a dashboard or internal tool behind a login, React is sufficient. For everything else—e-commerce, landing pages, blogs—Next.js is the undisputed champion.</p>
    `,
    excerpt: 'A comprehensive guide for decision makers comparing React and Next.js, focusing on SEO, performance, and scalability.',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'Tech Stack'],
    author: 'Codenclick Team',
    status: 'PUBLISHED',
    publishedAt: new Date(new Date().setDate(new Date().getDate() - 5)), // 5 days ago
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
    views: 890
  },
  // 3. SEO - Immediate
  {
    title: 'SEO in 2026: Semantic Search & AI Overviews',
    slug: 'seo-2026-semantic-search-ai',
    content: `
      <h2>The Evolution of Search</h2>
      <p>SEO is no longer just about keywords. With Google's Search Generative Experience (SGE), the focus has shifted entirely to <strong>context</strong> and <strong>intent</strong>.</p>
      
      <h3>Optimizing for "People Also Ask"</h3>
      <p>Your content needs to answer specific questions concisely. We utilize FAQ schemas and "Answer Target" formatting to capture these snippets. This is zero-click search optimization.</p>
      
      <h3>E-E-A-T is Everything</h3>
      <p>Experience, Expertise, Authoritativeness, and Trustworthiness. Google wants to know that real experts are writing your content. Adding author bios (like our Team profiles) and citing sources is non-negotiable.</p>
      
      <h3>Technical Foundation</h3>
      <p>Schema markup, fast load times (Core Web Vitals), and mobile-first indexing form the bedrock. Without these, even the best content will struggle to rank.</p>
    `,
    excerpt: 'How to prepare your website for the AI-driven future of search engines and Semantic SEO.',
    category: 'SEO',
    tags: ['SEO', 'Google', 'AI Search'],
    author: 'Codenclick Team',
    status: 'PUBLISHED',
    publishedAt: new Date(new Date().setDate(new Date().getDate() - 2)), // 2 days ago
    thumbnail: 'https://images.unsplash.com/photo-1571721795195-a2ca2d337096?auto=format&fit=crop&q=80&w=1000',
    views: 540
  },
  // 4. Local SEO - Immediate
  {
    title: 'Why Local SEO is a Game Changer for Small Business',
    slug: 'local-seo-game-changer',
    content: `
      <h2>Dominating the Local Market</h2>
      <p>46% of all Google searches have a "local intent". If you are a service provider in Faridabad or Delhi, and you aren't showing up in the "Map Pack", you are invisible to half your market.</p>
      
      <h3>Google Business Profile (GBP)</h3>
      <p>Your GBP is your new homepage. It needs to be optimized with accurate hours, categories, and regular posts. Reviews are the social proof that drives clicks.</p>
      
      <h3>NAP Consistency</h3>
      <p>Name, Address, Phone Number. It must be identical across your website, Google, Facebook, and directory listings. Inconsistencies confuse search engines and hurt rankings.</p>
      
      <h3>Hyper-Local Content</h3>
      <p>Creating pages specifically for "Services in Faridabad" or "Consulting in Noida" helps you capture high-intent local traffic that is ready to convert.</p>
    `,
    excerpt: 'Unlock the power of Local SEO to dominate the "Map Pack" and attract high-intent customers in your area.',
    category: 'SEO',
    tags: ['Local SEO', 'Business Growth', 'GMB'],
    author: 'Codenclick Team',
    status: 'PUBLISHED',
    publishedAt: new Date(new Date().setTime(new Date().getTime() - 1000 * 60 * 60)), // 1 hour ago
    thumbnail: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1000',
    views: 120
  },
  // 5. Google Ads - SCHEDULED (Future)
  {
    title: 'Maximizing ROAS: A Guide to Google Performance Max',
    slug: 'maximizing-roas-performance-max',
    content: `
      <h2>Mastering Performance Max (PMax)</h2>
      <p>Performance Max (PMax) is Google's black-box automated campaign type. While it uses AI to find conversions, it requires expert guidance to avoid budget wastage.</p>
      
      <h3>Feed the AI High-Quality Data</h3>
      <p>Garbage in, garbage out. You must provide high-quality audience signals (customer lists, website visitors) to guide the machine learning algorithms.</p>
      
      <h3>Asset Groups Matter</h3>
      <p>Don't just use one generic image. Provide a diverse range of headlines, descriptions, and high-resolution images/videos to allow Google to test millions of combinations.</p>
      
      <h3>Negative Keywords</h3>
      <p>PMax can be aggressive. Actively monitoring and adding negative keywords is essential to prevent your budget from being spent on irrelevant searches.</p>
    `,
    excerpt: 'Strategies to get the highest Return on Ad Spend (ROAS) from Google\'s new Performance Max campaigns.',
    category: 'Google Ads',
    tags: ['PPC', 'Google Ads', 'Marketing'],
    author: 'Codenclick Team',
    status: 'PUBLISHED',
    publishedAt: new Date(new Date().setDate(new Date().getDate() + 2)), // 2 days in future
    thumbnail: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=1000',
    views: 0
  },
  // 6. Meta Ads - SCHEDULED (Future)
  {
    title: 'Meta Ads Strategy: Scaling Beyond the Learning Phase',
    slug: 'meta-ads-scaling-strategy',
    content: `
      <h2>Scaling Your Ads Profitably</h2>
      <p>Stuck at 5 sales a day? Scaling Facebook and Instagram ads requires a shift from "hacking" to "building".</p>
      
      <h3>Creative is the New Targeting</h3>
      <p>With iOS privacy changes, detailed targeting is less effective. Your creative (video/image) now does the targeting. If your ad appeals to dog owners, the algorithm will find them.</p>
      
      <h3>Consolidated Account Structure</h3>
      <p>Stop fragmenting your budget across 50 ad sets. Simplify your structure to give Meta's algorithm enough data points to optimize effectively.</p>
      
      <h3>Advantage+ Shopping Campaigns</h3>
      <p>For e-commerce, ASC is performing exceptionally well. It uses machine learning to automate the entire creation process, often outperforming manual setups.</p>
    `,
    excerpt: 'How to break through the plateau and scale your Facebook/Instagram ad campaigns profitably.',
    category: 'Meta Ads',
    tags: ['Social Media', 'Facebook Ads', 'Scaling'],
    author: 'Codenclick Team',
    status: 'PUBLISHED',
    publishedAt: new Date(new Date().setDate(new Date().getDate() + 5)), // 5 days in future
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000',
    views: 0
  },
  // 7. SaaS - SCHEDULED (Future)
  {
    title: 'SaaS MVP: From Idea to Launch in 90 Days',
    slug: 'saas-mvp-launch-guide',
    content: `
      <h2>Building for Speed and Learning</h2>
      <p>Speed is the lifeblood of a startup. The goal of an MVP (Minimum Viable Product) is not to be perfect, but to learn.</p>
      
      <h3>Focus on the "Core Loop"</h3>
      <p>Identify the single most important action a user takes to get value. Build that. Ignore secondary features like "Dark Mode" or comprehensive settings pages for now.</p>
      
      <h3>Choose Boring Technology</h3>
      <p>Now is not the time to learn a new experimental framework. Use what you know, or use established stacks (React, Node, Postgres). Reliability beats novelty.</p>
      
      <h3>Launch & Iterate</h3>
      <p>Release early. The feedback you get from real users is worth more than months of internal brainstorming.</p>
    `,
    excerpt: 'A blueprint for founders to build and launch their SaaS Minimum Viable Product efficiently.',
    category: 'SaaS Development',
    tags: ['Startup', 'MVP', 'Product Management'],
    author: 'Codenclick Team',
    status: 'PUBLISHED',
    publishedAt: new Date(new Date().setDate(new Date().getDate() + 7)), // 7 days in future
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000',
    views: 0
  },
  // 8. Trends - SCHEDULED (Future)
  {
    title: 'The Rise of Headless CMS in Enterprise Tech',
    slug: 'headless-cms-enterprise-rise',
    content: `
      <h2>Why Headless is Taking Over</h2>
      <p>Traditional CMS platforms like WordPress coupled the frontend and backend tightly. This is becoming a bottleneck for enterprises that need to deliver content across web, mobile, smartwatches, and kiosks.</p>
      
      <h3>Omnichannel Delivery</h3>
      <p>A Headless CMS (like Strapi or Sanity) stores content as data, not HTML. This allows a single content hub to push updates to your website, iOS app, and even digital signage simultaneously.</p>
      
      <h3>Security & Performance</h3>
      <p>By decoupling the frontend, you reduce the attack surface. There is no database to hack on the presentation layer. Static generation means pages load instantly from a CDN.</p>
      
      <h3>Is it right for you?</h3>
      <p>If you have multiple digital touchpoints and a need for high customization, Headless is the future.</p>
    `,
    excerpt: 'Why large organizations are migrating to Headless Content Management Systems for agility and security.',
    category: 'SaaS Development',
    tags: ['CMS', 'Enterprise', 'Architecture'],
    author: 'Codenclick Team',
    status: 'PUBLISHED',
    publishedAt: new Date(new Date().setDate(new Date().getDate() + 10)), // 10 days in future
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
    views: 0
  }
];

async function main() {
  console.log('Start seeding resources...');

  try {
    // Clear existing resources
    await prisma.resource.deleteMany({});
    console.log('Deleted existing resources.');

    for (const resource of resources) {
      // Cast resource to any to match Prisma Input type looser strictness if needed
      await prisma.resource.create({
        data: resource as any,
      });
    }
    console.log('Seeding finished successfully.');
  } catch (error) {
    console.error('Error during seeding:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
