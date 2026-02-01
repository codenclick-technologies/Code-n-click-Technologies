import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code2,
  Rocket,
  Globe,
  Smartphone,
  Layout,
  Search,
  Database,
  Server,
  CheckCircle2,
  ArrowRight,
  Zap,
  TrendingUp,
  Award
} from 'lucide-react';
import SEOHead from '../../components/utils/SEO';
import FAQ from '../../components/ui/FAQ';

const WebDevelopment = () => {

  const services = [
    {
      icon: <Layout className="w-8 h-8 text-blue-400" />,
      title: "Custom Web Applications",
      description: "Scalable, secure, and high-performance web apps tailored to your business needs using React and Next.js."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: "Progressive Web Apps (PWA)",
      description: "Mobile-first experiences that work offline and feel like native apps, accessible directly from the browser."
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "E-Commerce Solutions",
      description: "Custom storefronts with seamless checkout flows, inventory management, and payment gateway integrations."
    },
    {
      icon: <Database className="w-8 h-8 text-emerald-400" />,
      title: "CMS Development",
      description: "Flexible content management systems (Headless CMS, Strapi, Sanity) giving you full control over your content."
    },
    {
      icon: <Search className="w-8 h-8 text-pink-400" />,
      title: "SEO-First Architecture",
      description: <span>Built from the ground up for search engines with <Link to="/services/seo" className="text-pink-400 hover:underline">advanced SEO</Link> foundations, semantic HTML, and core web vitals.</span>
    },
    {
      icon: <Server className="w-8 h-8 text-orange-400" />,
      title: "API Integration & Development",
      description: "Robust REST and GraphQL APIs to connect your services and third-party tools seamlessly."
    }
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "Node.js", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your business goals, user needs, and technical requirements to build a solid roadmap."
    },
    {
      number: "02",
      title: "UI/UX Design",
      description: <span>Creating intuitive, <Link to="/services/graphic-design" className="text-blue-400 hover:underline">stunning UI/UX</Link> prototypes that align with your brand and maximize user engagement.</span>
    },
    {
      number: "03",
      title: "Agile Development",
      description: "Iterative coding sprints with regular updates, ensuring the product evolves exactly as envisioned."
    },
    {
      number: "04",
      title: "Testing & Launch",
      description: "Rigorous QA, performance optimization, and a smooth deployment process to get you live."
    },
    {
      number: "05",
      title: "Optimization",
      description: "Continuous monitoring and improvements to ensure your site stays fast, secure, and competitive."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020205] text-white overflow-hidden">
      <SEOHead
        title="Best Web Development Company in Delhi | Codenclick Technologies"
        description="Web Development company in Delhi. We build high-performance, SEO-optimized websites and web apps using React & Next.js to grow your local business."
        keywords=" Web Development Company Delhi, Website Design Company Delhi, Web Development Agency Delhi NCR, Custom Web App Development Delhi, React JS Developers Delhi"
        canonical="/services/web-development"
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Web Development",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Codenclick Technologies",
              "image": "https://codenclick.in/brand-full.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Delhi",
                "addressRegion": "Delhi",
                "addressCountry": "IN"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Delhi"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Web Application Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce Website Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Corporate Website Design"
                  }
                }
              ]
            }
          }
        ]}
      />

      {/* 1. H1 - Main Service Title */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020205] to-[#020205] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-blue-500/30 text-blue-300 text-sm font-medium mb-8"
          >
            <Code2 className="w-4 h-4" />
            <span>Future-Proof Web Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400"
          >
            Professional Website <br className="hidden md:block" />
            <span className="text-blue-500">Development in Delhi</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2">
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 glass-button text-white rounded-xl font-bold flex items-center justify-center gap-2">
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro Section (Pain Point -> Solution -> Trust) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#020205]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Is Your Website Costing You Revenue?</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            In today's digital-first world, a slow, outdated, or confusing website isn't just an annoyance—it's a revenue killer. You lose potential customers to competitors every second your site fails to load or engage.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            That's where we step in. At <strong>Codenclick Technologies</strong>, a premier agency based in <strong>Delhi</strong>, we don't just write code; we engineer digital growth engines. We transform your business vision into a high-performance, secure, and <Link to="/services/seo" className="text-blue-400 hover:underline">SEO-optimized</Link> web platform that builds trust instantly.
          </p>
          <p className="text-blue-400 font-medium text-lg">
            Over 50+ businesses in Delhi & NCR trust us to deliver pixel-perfect code.
          </p>
        </div>
      </section>

      {/* 3. What Is This Service? (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What We Deliver</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We provide comprehensive web development solutions for startups, SMBs, and enterprises in **Delhi NCR** looking to upgrade their digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-panel glass-card-shine p-8 rounded-3xl border border-white/10 group"
              >
                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-blue-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why This Service Is Important (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">Why Invest in Professional Web Development?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6">
              {[
                "First Impressions Matter: 94% of first impressions are design-related.",
                "SEO & Visibility: Google prioritizes fast, clean code. Better code = higher rankings.",
                "Mobile Dominance: With mobile traffic surpassing desktop, a responsive site is non-negotiable.",
                "Credibility: A professional site signals that you are an industry leader."
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-blue-500/20 p-2 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-lg text-gray-300">{point}</p>
                </div>
              ))}
            </div>
            <div className="relative glass-panel p-8 rounded-3xl border border-white/10">
              <div className="absolute top-0 right-0 p-4">
                <TrendingUp className="w-12 h-12 text-green-400 opacity-50" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">The Impact of Good Design</h3>
              <p className="text-gray-400 mb-6">
                Businesses with professional web presence see an average of <strong>40% increase in lead generation</strong> and significantly lower bounce rates. It is the highest ROI investment for your brand longevity.
              </p>
              <Link to="/contact" className="text-blue-400 font-bold hover:underline">Calculate your potential ROI &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 Technical Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Code Block */}
            <div className="order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0F0F13] shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="ml-4 text-xs text-gray-400 font-mono">CleanCode.tsx</div>
                </div>
                <div className="p-6 overflow-x-auto">
                  <pre className="text-sm font-mono text-gray-300">
                    <code>
                      <span className="text-purple-400">const</span> <span className="text-blue-400">SecureComponent</span> = <span className="text-yellow-400">()</span> =&gt; {'{'}{'\n'}
                      {'  '}<span className="text-purple-400">const</span> {'{'}<span className="text-red-400"> data</span>, <span className="text-red-400">loading </span>{'}'} = <span className="text-blue-400">useEncryption</span>(<span className="text-green-400">"AES-256"</span>);{'\n'}
                      {'\n'}
                      {'  '}<span className="text-gray-500">// Optimized for 60fps animations</span>{'\n'}
                      {'  '}<span className="text-purple-400">return</span> ({'\n'}
                      {'    '}&lt;<span className="text-blue-400">motion.div</span>{'\n'}
                      {'      '}<span className="text-purple-400">initial</span>={'{{'} <span className="text-orange-400">opacity</span>: <span className="text-red-400">0</span> {'}}'}{'\n'}
                      {'      '}<span className="text-purple-400">animate</span>={'{{'} <span className="text-orange-400">opacity</span>: <span className="text-red-400">1</span> {'}}'}{'\n'}
                      {'      '}<span className="text-purple-400">className</span>=<span className="text-green-400">"gpu-accelerated"</span>{'\n'}
                      {'    '}&gt;{'\n'}
                      {'      '}{'{'}<span className="text-red-400">loading</span> ? &lt;<span className="text-yellow-400">Skeleton</span> /&gt; : &lt;<span className="text-yellow-400">DataGrid</span> data={'{'}<span className="text-red-400">data</span>{'}'} /&gt;{'}'}{'\n'}
                      {'    '}&lt;/<span className="text-blue-400">motion.div</span>&gt;{'\n'}
                      {'  '});{'\n'}
                      {'}'};
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Right: Explanation */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Technical Excellence Standards</h2>
              <p className="text-lg text-gray-400 mb-8">
                We don't just "make it work." We engineer it to last. Every project adheres to strict coding standards to ensure specific performance benchmarks.
              </p>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-white">Google Lighthouse Performance</span>
                    <span className="text-green-400">98/100</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[98%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-white">SEO Optimization Score</span>
                    <span className="text-green-400">100/100</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-white">Accessibility (WCAG 2.1)</span>
                    <span className="text-green-400">100/100</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Process (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Development Process</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A transparent, 5-step journey from concept to code.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-6"
                >
                  <div className="text-5xl font-bold text-white/10">{step.number}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
              <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400" />
                    <span className="text-gray-300 font-medium">Daily Updates via Slack/WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400" />
                    <span className="text-gray-300 font-medium">Strict Code Quality Standards</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400" />
                    <span className="text-gray-300 font-medium">On-Time Delivery Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Tools / Technologies (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Tech Stack</h2>
            <p className="text-xl text-gray-400">We use modern, scalable tools to future-proof your product.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="glass-button px-6 py-3 rounded-full flex items-center gap-3 text-gray-300 hover:text-white border border-white/5"
              >
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="font-semibold">{tech.name}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-400">{tech.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Delhi Businesses Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Business-First Engineering",
                desc: "We don't just write code; we build assets that generate revenue. Every line of code is written with your ROI in mind."
              },
              {
                title: "Obsessed with Speed",
                desc: "Slow sites kill conversions. We engineer for sub-second load times using advanced caching and edge computing."
              },
              {
                title: "Scalable Architecture",
                desc: "We build systems that can handle 10 users or 10 million. You won't need a rewrite when you grow."
              },
              {
                title: "Direct Engineer Access",
                desc: "No account managers playing telephone. You speak directly to the engineers building your product."
              },
              {
                title: "Security is Standard",
                desc: "We implement bank-grade security protocols from day one. Your data (and your customers' data) is safe with us."
              },
              {
                title: "One-Stop Shop",
                desc: "From design to deployment to marketing. We handle the entire lifecycle so you can focus on running your business."
              }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Case Studies / Results (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Proven Results</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real businesses, real growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">E-Commerce Scale-Up</h3>
                  <p className="text-blue-400">Leading Delhi Retail Brand</p>
                </div>
                <Award className="text-yellow-500 w-10 h-10" />
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Before</span>
                  <span className="text-red-400">3.5s Load Time</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">After</span>
                  <span className="text-green-400">0.8s Load Time</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Result</span>
                  <span className="text-white font-bold">+150% Conversion Increase</span>
                </div>
              </div>
            </div>
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">SaaS Efficiency</h3>
                  <p className="text-blue-400">Gurgaon Fintech Startup</p>
                </div>
                <Award className="text-yellow-500 w-10 h-10" />
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Before</span>
                  <span className="text-red-400">Manual Invoicing</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">After</span>
                  <span className="text-green-400">Automated Pipeline</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Result</span>
                  <span className="text-white font-bold">Saved 20hrs/week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Recommended Tech Stacks (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Recommended Tech Stacks</h2>
            <p className="text-xl text-gray-400">Choose the right technology foundation for your project's success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
              <p className="text-sm text-gray-400 mb-6">Perfect for small businesses & landing pages</p>
              
              <div className="mb-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                  <CheckCircle2 size={18} /> Recommended Stack
                </h4>
                <p className="text-sm text-gray-300">HTML5 + CSS3 + Vanilla JavaScript</p>
              </div>

              <div className="space-y-3 mb-6 flex-1">
                <h5 className="text-white font-semibold text-sm">Why This Stack?</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" /> Lightning-fast load times (under 1 second)</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" /> SEO-friendly with clean semantic HTML</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" /> Low hosting costs (works on any server)</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" /> Easy to maintain and update</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" /> Perfect for brochure sites & portfolios</li>
                </ul>
              </div>

              <div className="mb-6 p-3 rounded-lg bg-white/5 border border-white/5">
                <p className="text-xs text-gray-400">Best For: Local businesses, personal portfolios, simple landing pages</p>
              </div>

              <Link to="/contact" className="w-full py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all text-center font-bold">Get Started</Link>
            </div>

            {/* Growth */}
            <div className="glass-panel p-8 rounded-3xl border border-blue-500 relative transform scale-105 shadow-2xl shadow-blue-900/20 flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</div>
              <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
              <p className="text-sm text-gray-400 mb-6">For growing businesses with dynamic content</p>
              
              <div className="mb-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                  <CheckCircle2 size={18} /> Recommended Stack
                </h4>
                <p className="text-sm text-gray-300">React + Next.js + Node.js + MongoDB</p>
              </div>

              <div className="space-y-3 mb-6 flex-1">
                <h5 className="text-white font-semibold text-sm">Why This Stack?</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" /> Server-side rendering for excellent SEO</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" /> Dynamic content management with CMS</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" /> Scalable architecture for future growth</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" /> Fast page transitions & smooth UX</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" /> Built-in blog & content features</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" /> API-ready for third-party integrations</li>
                </ul>
              </div>

              <div className="mb-6 p-3 rounded-lg bg-white/5 border border-white/5">
                <p className="text-xs text-gray-400">Best For: E-commerce stores, content-heavy sites, business platforms, blogs</p>
              </div>

              <Link to="/contact" className="w-full py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-all text-center font-bold">Choose Growth</Link>
            </div>

            {/* Enterprise */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col hover:border-purple-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-sm text-gray-400 mb-6">For complex applications & high-traffic platforms</p>
              
              <div className="mb-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                  <CheckCircle2 size={18} /> Recommended Stack
                </h4>
                <p className="text-sm text-gray-300">React + Next.js + Node.js + PostgreSQL + AWS</p>
              </div>

              <div className="space-y-3 mb-6 flex-1">
                <h5 className="text-white font-semibold text-sm">Why This Stack?</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" /> Enterprise-grade security & compliance</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" /> Handles millions of users seamlessly</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" /> Advanced database with ACID compliance</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" /> Cloud infrastructure for 99.99% uptime</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" /> Microservices architecture support</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" /> Real-time features & WebSocket support</li>
                </ul>
              </div>

              <div className="mb-6 p-3 rounded-lg bg-white/5 border border-white/5">
                <p className="text-xs text-gray-400">Best For: SaaS platforms, enterprise portals, fintech apps, high-traffic sites</p>
              </div>

              <Link to="/contact" className="w-full py-3 rounded-xl border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all text-center font-bold">Talk to Expert</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQs (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about our web development process.
            </p>
          </div>

          <FAQ faqs={[
            {
              question: "How long does it take to build a website?",
              answer: "It depends on the complexity. A high-converting landing page can be done in 1-2 weeks, while a full-scale custom web application typically takes 4-8 weeks. We provide a detailed timeline during the discovery phase and stick to it."
            },
            {
              question: "Will my website be mobile-friendly?",
              answer: "Absolutely. We adopt a 'mobile-first' approach. Your website will look and perform perfectly on smartphones, tablets, and desktops. Google loves mobile-friendly sites, and so do your customers."
            },
            {
              question: "Do you provide hosting and maintenance?",
              answer: "Yes, we offer fully managed hosting and maintenance packages. We handle security updates, backups, and performance monitoring so you don't have to worry about technical downtime."
            },
            {
              question: "Can I update the content myself?",
              answer: "Yes! We integrate user-friendly Content Management Systems (CMS) like Strapi, Sanity, or custom admin panels that allow you to easily update text, images, and blog posts without touching a line of code."
            },
            {
              question: "What happens after the website is launched?",
              answer: "We don't disappear. We offer post-launch support to ensure everything runs smoothly. We also help with SEO and digital marketing to drive traffic to your new site."
            }
          ]} />
        </div>
      </section>

      {/* 11. CTA (Strong) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto glass-panel rounded-[3rem] p-12 text-center relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Scale Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stop losing customers to outdated websites. Get a high-performance web solution today.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform">
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WebDevelopment;
