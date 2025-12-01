import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const resources = [
  {
    title: 'The Future of Web Development: Top Trends for 2025',
    category: 'Web Development',
    author: 'Code-n-Click Team',
    thumbnail: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: `
      <h2>Introduction</h2>
      <p>As we approach 2025, the landscape of <strong>web development</strong> is evolving at an unprecedented pace. From <strong>AI-driven interfaces</strong> to the widespread adoption of <strong>WebGPU</strong>, staying ahead of the curve is essential for businesses aiming to maintain a competitive edge.</p>
      
      <h3>1. AI-Augmented Development</h3>
      <p>Artificial Intelligence is no longer just a buzzword; it's a core component of the development workflow. Tools like GitHub Copilot and ChatGPT are transforming how code is written, optimized, and tested. In 2025, expect to see more <strong>AI-generated UI components</strong> and automated backend logic generation.</p>
      
      <h3>2. The Rise of Server Components</h3>
      <p>Frameworks like <strong>Next.js</strong> and <strong>React</strong> are doubling down on Server Components. This shift allows for faster page loads, better <strong>SEO performance</strong>, and reduced bundle sizes by rendering components on the server and sending minimal JavaScript to the client.</p>
      
      <h3>3. WebGPU and 3D Experiences</h3>
      <p>With <strong>WebGPU</strong> becoming widely supported, the web is ready for high-performance 3D graphics and compute tasks. This opens the door for immersive <strong>metaverse experiences</strong>, advanced data visualization, and browser-based gaming without the need for plugins.</p>
      
      <h3>Conclusion</h3>
      <p>To rank higher and engage users, adopting these technologies is crucial. At <strong>Code-n-Click Technologies</strong>, we specialize in building future-proof web applications that leverage these cutting-edge trends.</p>
    `,
    status: 'PUBLISHED'
  },
  {
    title: 'The Ultimate Technical SEO Checklist for 2025',
    category: 'SEO',
    author: 'SEO Expert',
    thumbnail: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: `
      <h2>Why Technical SEO Matters More Than Ever</h2>
      <p>In 2025, Google's algorithms are smarter and more user-centric. <strong>Technical SEO</strong> is the foundation upon which your content ranks. Without a technically sound website, even the best content will struggle to appear in search results.</p>
      
      <h3>1. Core Web Vitals Mastery</h3>
      <p><strong>Core Web Vitals</strong> (LCP, INP, CLS) are critical ranking factors. Ensure your site loads in under 2.5 seconds, responds instantly to interactions, and maintains visual stability. Use tools like PageSpeed Insights to monitor these metrics regularly.</p>
      
      <h3>2. Mobile-First Indexing</h3>
      <p>With over 60% of traffic coming from mobile devices, a <strong>responsive design</strong> is non-negotiable. Google predominantly uses the mobile version of the content for indexing and ranking.</p>
      
      <h3>3. Structured Data (Schema Markup)</h3>
      <p>Help search engines understand your content better with <strong>Schema Markup</strong>. Whether it's for articles, products, or local businesses, structured data can significantly boost your visibility through rich snippets.</p>
      
      <h3>Conclusion</h3>
      <p>Optimizing your technical SEO is a continuous process. Start with this checklist to ensure your website is primed for <strong>organic growth</strong> and high search engine rankings.</p>
    `,
    status: 'PUBLISHED'
  },
  {
    title: 'SaaS Growth Strategies: From MVP to IPO',
    category: 'SaaS',
    author: 'Growth Lead',
    thumbnail: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: `
      <h2>Scaling Your SaaS Business</h2>
      <p>Building a successful <strong>SaaS (Software as a Service)</strong> product requires more than just great code; it demands a strategic approach to growth, customer acquisition, and retention.</p>
      
      <h3>1. Product-Led Growth (PLG)</h3>
      <p><strong>PLG</strong> is the strategy where the product itself is the primary driver of acquisition. By offering a freemium model or a free trial, you allow users to experience value before they pay, reducing the <strong>Customer Acquisition Cost (CAC)</strong>.</p>
      
      <h3>2. Reducing Churn Rate</h3>
      <p><strong>Churn rate</strong> is the silent killer of SaaS businesses. Focus on customer success, onboarding, and continuous feature updates to keep users engaged. A 5% increase in retention can increase profits by 25% to 95%.</p>
      
      <h3>3. Data-Driven Decision Making</h3>
      <p>Leverage analytics to understand user behavior. Track metrics like <strong>Monthly Recurring Revenue (MRR)</strong>, <strong>Lifetime Value (LTV)</strong>, and active usage to make informed product decisions.</p>
      
      <h3>Conclusion</h3>
      <p>Sustainable growth comes from balancing acquisition with retention. Implement these strategies to scale your SaaS platform effectively.</p>
    `,
    status: 'PUBLISHED'
  },
  {
    title: 'React vs. Vue vs. Angular: Choosing the Right Framework in 2025',
    category: 'Development',
    author: 'Tech Lead',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: `
      <h2>The Battle of the Frontend Frameworks</h2>
      <p>Choosing the right <strong>frontend framework</strong> is a critical decision for any project. In 2025, the "Big Three"—<strong>React</strong>, <strong>Vue</strong>, and <strong>Angular</strong>—continue to dominate, but each serves different needs.</p>
      
      <h3>1. React: The Ecosystem King</h3>
      <p><strong>React</strong> remains the most popular choice due to its massive ecosystem, <strong>React Native</strong> for mobile, and the power of Next.js. It's ideal for large-scale applications requiring flexibility and a rich library of components.</p>
      
      <h3>2. Vue: The Progressive Framework</h3>
      <p><strong>Vue.js</strong> is loved for its simplicity and ease of integration. With Vue 3 and the Composition API, it offers performance comparable to React but with a gentler learning curve. Perfect for startups and rapid prototyping.</p>
      
      <h3>3. Angular: The Enterprise Standard</h3>
      <p><strong>Angular</strong> is a full-fledged platform. It comes with everything out of the box—routing, state management, and form validation. It's the go-to for strict, enterprise-level applications where standardization is key.</p>
      
      <h3>Conclusion</h3>
      <p>There is no "best" framework, only the right one for your specific project requirements. Consider team expertise, project scale, and long-term maintenance when making your choice.</p>
    `,
    status: 'PUBLISHED'
  },
  {
    title: 'Why Headless CMS is the Future of Content Management',
    category: 'Content Strategy',
    author: 'CMS Architect',
    thumbnail: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: `
      <h2>Going Headless: Decoupling Content from Presentation</h2>
      <p>Traditional CMS platforms like WordPress are being replaced by <strong>Headless CMS</strong> solutions. But what exactly is a Headless CMS, and why should you care?</p>
      
      <h3>1. Omnichannel Delivery</h3>
      <p>A Headless CMS allows you to manage content in one place and deliver it anywhere—websites, mobile apps, smartwatches, and even IoT devices—via <strong>APIs</strong>. This ensures consistent messaging across all channels.</p>
      
      <h3>2. Developer Freedom</h3>
      <p>Developers are no longer tied to a specific templating language. They can build the frontend using their favorite tools like <strong>React</strong>, <strong>Vue</strong>, or <strong>Svelte</strong>, resulting in faster, more dynamic user experiences.</p>
      
      <h3>3. Enhanced Security and Scalability</h3>
      <p>By separating the backend from the frontend, you reduce the attack surface. Additionally, Headless CMS platforms are often cloud-native, offering superior <strong>scalability</strong> and uptime compared to traditional self-hosted solutions.</p>
      
      <h3>Conclusion</h3>
      <p>For businesses looking to future-proof their content strategy, adopting a Headless CMS is a smart move towards flexibility and performance.</p>
    `,
    status: 'PUBLISHED'
  },
  {
    title: 'Cybersecurity Essentials for Modern Web Applications',
    category: 'Security',
    author: 'Security Analyst',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: `
      <h2>Securing Your Digital Assets</h2>
      <p>With cyber threats becoming more sophisticated, <strong>web application security</strong> is paramount. Protecting user data and maintaining trust is essential for business continuity.</p>
      
      <h3>1. Implementing Zero Trust Architecture</h3>
      <p><strong>Zero Trust</strong> operates on the principle of "never trust, always verify." Every request, whether from inside or outside the network, must be authenticated and authorized. This minimizes the impact of potential breaches.</p>
      
      <h3>2. Defending Against OWASP Top 10</h3>
      <p>Familiarize yourself with the <strong>OWASP Top 10</strong> vulnerabilities, such as Injection, Broken Access Control, and Cross-Site Scripting (XSS). Regular security audits and penetration testing are vital to identify and patch these weaknesses.</p>
      
      <h3>3. Data Encryption and Privacy</h3>
      <p>Ensure that sensitive data is encrypted both in transit (using <strong>TLS/SSL</strong>) and at rest. Compliance with regulations like <strong>GDPR</strong> and <strong>CCPA</strong> is not just legal adherence but a competitive advantage.</p>
      
      <h3>Conclusion</h3>
      <p>Security is not a one-time setup but an ongoing practice. Prioritize security from the design phase to build robust and trustworthy applications.</p>
    `,
    status: 'PUBLISHED'
  }
];

async function main() {
  console.log('Start seeding resources...');

  // Optional: Clear existing resources
  // await prisma.resource.deleteMany({});

  for (const resource of resources) {
    const createdResource = await prisma.resource.create({
      data: resource,
    });
    console.log(`Created resource with id: ${createdResource.id}`);
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
