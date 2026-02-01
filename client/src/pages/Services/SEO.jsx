import React from 'react';
import SEOHead from '../../components/utils/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  BarChart2,
  Globe,
  Link as LinkIcon,
  FileText,
  ArrowRight,
  TrendingUp,
  Settings,
  Zap,
  CheckCircle2,
  Award,
  LineChart
} from 'lucide-react';
import FAQ from '../../components/ui/FAQ';

const SEO = () => {

  const services = [
    {
      icon: <Settings className="w-8 h-8 text-green-400" />,
      title: "Technical SEO",
      description: <span>Optimizing <Link to="/services/web-development" className="text-emerald-400 hover:underline">site architecture</Link>, speed, and mobile-friendliness to ensure search engines can crawl and index your pages.</span>
    },
    {
      icon: <FileText className="w-8 h-8 text-emerald-400" />,
      title: "On-Page Optimization",
      description: "Fine-tuning content, meta tags, and internal linking to target high-value keywords."
    },
    {
      icon: <LinkIcon className="w-8 h-8 text-blue-400" />,
      title: "Link Building",
      description: "Acquiring high-quality backlinks from authoritative sites to boost your domain authority."
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "Local SEO",
      description: <span>Dominating local search results and <Link to="/services/google-ads" className="text-cyan-400 hover:underline">Google Maps</Link> to drive foot traffic and local leads.</span>
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-purple-400" />,
      title: "Content Strategy",
      description: "Creating data-driven content plans that answer user queries and establish topical authority."
    },
    {
      icon: <LineChart className="w-8 h-8 text-orange-400" />,
      title: "SEO Audits",
      description: "Comprehensive analysis of your website's health to identify and fix ranking blockers."
    }
  ];

  const techStack = [
    { name: "Ahrefs", category: "Research" },
    { name: "SEMrush", category: "Analysis" },
    { name: "Google Search Console", category: "Data" },
    { name: "Screaming Frog", category: "Crawling" },
    { name: "Google Analytics 4", category: "Tracking" },
    { name: "Surfer SEO", category: "Content" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Audit & Analysis",
      description: "Deep dive into your current performance, competitors, and technical health."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Creating a roadmap for keywords, content, and technical fixes."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Executing on-page optimizations, technical fixes, and content creation."
    },
    {
      number: "04",
      title: "Monitoring & Reporting",
      description: "Tracking rankings, traffic, and conversions with monthly transparent reports."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020205] text-white overflow-hidden">
      <SEOHead
        title="Best SEO Services in Delhi | Codenclick Technologies"
        description="Top-rated SEO agency in Delhi. We help business rank #1 on Google, drive organic traffic, and increase revenue with data-driven strategies."
        keywords="Best SEO Services Delhi, SEO Company Delhi NCR, Local SEO Agency Delhi, Ecommerce SEO Services India, Technical SEO Audit Delhi"
        canonical="/services/seo"
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Search Engine Optimization",
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
              "name": "SEO Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Technical SEO Audit"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local SEO Optimization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Content Strategy & Link Building"
                  }
                }
              ]
            }
          }
        ]}
      />

      {/* 1. H1 - Main Service Title */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/20 via-[#020205] to-[#020205] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-green-500/30 text-green-400 text-sm font-medium mb-8"
          >
            <TrendingUp className="w-4 h-4" />
            <span>Dominate Search Results</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-green-100 to-gray-400"
          >
            Search Engine <br className="hidden md:block" />
            <span className="text-green-500">Optimization in Delhi</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2">
              Get Free Audit <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 glass-button text-white rounded-xl font-bold flex items-center justify-center gap-2">
              See Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro Section (Pain Point -> Solution -> Trust) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#020205]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">If They Can't Find You, You Don't Exist</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Having the best product or service means nothing if you're buried on Page 2 of Google. You are losing thousands of dollars in potential revenue every single day to competitors who simply rank higher.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            At <strong>Codenclick Technologies</strong>, a premier SEO agency in <strong>Delhi</strong>, we don't guess. We engineer growth. Using battle-tested, white-hat strategies, we help you climb the rankings, capture high-intent traffic, and turn searchers into loyal customers.
          </p>
          <p className="text-green-400 font-medium text-lg">
            We build digital real estate for Delhi NCR brands that pays dividends for years.
          </p>
        </div>
      </section>

      {/* 3. What Is This Service? (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">SEO Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A holistic approach to organic growth covering technical, on-page, and authority for **Delhi NCR** businesses.
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
                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-green-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">Why Rank Higher?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6">
              {[
                "Trust & Authority: 75% of users never scroll past the first page. Being top means being trusted.",
                "Inbound Leads: Stop chasing clients. Let them come to you.",
                "Cost Efficiency: Unlike ads, organic traffic is free once you rank. It's the highest ROI marketing channel.",
                "24/7 Marketing: Your website works for you while you sleep, bringing in leads around the clock."
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-green-500/20 p-2 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-lg text-gray-300">{point}</p>
                </div>
              ))}
            </div>
            <div className="relative glass-panel p-8 rounded-3xl border border-white/10">
              <div className="absolute top-0 right-0 p-4">
                <LineChart className="w-12 h-12 text-emerald-400 opacity-50" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Traffic Compounding</h3>
              <p className="text-gray-400 mb-6">
                SEO is compound interest. The effort we put in today builds momentum. In 6 months, you won't just have more traffic; you'll have an <span className="text-white font-bold">asset worth 10x</span> your investment.
              </p>
              <Link to="/contact" className="text-green-400 font-bold hover:underline">Start investing in SEO &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 Technical Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Explanation */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Science Behind Rankings</h2>
              <p className="text-lg text-gray-400 mb-8">
                Modern SEO isn't magic; it's engineering. We speak Google's language using advanced Schema Markup and Core Web Vitals optimization to compel the algorithm to rank you higher.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">0.8s</div>
                  <div className="text-xs text-gray-400">LCP (Speed)</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">0ms</div>
                  <div className="text-xs text-gray-400">CLS (Stability)</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">50ms</div>
                  <div className="text-xs text-gray-400">FID (Response)</div>
                </div>
              </div>

              <div className="flex gap-4">
                 <div className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> JSON-LD Structured Data
                 </div>
                 <div className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> Semantic HTML5
                 </div>
              </div>
            </div>

            {/* Right: Code Block */}
            <div>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0F0F13] shadow-2xl relative">
                <div className="absolute top-4 right-4 px-2 py-1 bg-green-900/30 border border-green-500/30 text-green-400 text-xs rounded">
                   Google Knowledge Graph
                </div>
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                  <div className="ml-4 text-xs text-gray-400 font-mono">schema-markup.json</div>
                </div>
                <div className="p-6 overflow-x-auto">
                  <pre className="text-sm font-mono text-gray-300">
                    <code>
                      {'{'}{'\n'}
                      {'  '}<span className="text-purple-400">"@context"</span>: <span className="text-green-400">"https://schema.org"</span>,{'\n'}
                      {'  '}<span className="text-purple-400">"@type"</span>: <span className="text-green-400">"LocalBusiness"</span>,{'\n'}
                      {'  '}<span className="text-purple-400">"name"</span>: <span className="text-green-400">"Your Brand"</span>,{'\n'}
                      {'  '}<span className="text-purple-400">"aggregateRating"</span>: {'{'}{'\n'}
                      {'    '}<span className="text-purple-400">"@type"</span>: <span className="text-green-400">"AggregateRating"</span>,{'\n'}
                      {'    '}<span className="text-purple-400">"ratingValue"</span>: <span className="text-yellow-400">"4.9"</span>,{'\n'}
                      {'    '}<span className="text-purple-400">"reviewCount"</span>: <span className="text-blue-400">1250</span>{'\n'}
                      {'  '}{'}'},{'\n'}
                      {'  '}<span className="text-purple-400">"priceRange"</span>: <span className="text-green-400">"$$"</span>{'\n'}
                      {'}'}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Our Process (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">SEO Roadmap</h2>
              <p className="text-xl text-gray-400 mb-8">
                A proven methodology for climbing the rankings.
              </p>
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
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full" />
              <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <Zap className="text-yellow-400" />
                    <span className="text-gray-300 font-medium">Core Web Vitals Optimized</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400" />
                    <span className="text-gray-300 font-medium">100% White Hat Tactics</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <Award className="text-purple-400" />
                    <span className="text-gray-300 font-medium">Proven Ranking Track Record</span>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">SEO Toolset</h2>
            <p className="text-xl text-gray-400">We use the best data to make the best decisions.</p>
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
                <LineChart className="w-4 h-4 text-green-400" />
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Delhi Brands Trust Us</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We don't chase algorithms. We chase user experience, and Google follows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "100% White Hat Only",
                desc: "We play by the rules. No shady backlinks or keyword stuffing that risks a Google penalty. Just sustainable, long-term growth."
              },
              {
                title: "Content-Led Strategy",
                desc: "We write content that humans actually want to read. High-value, authoritative articles that naturally attract links."
              },
              {
                title: "Technical Excellence",
                desc: "We speak dynamic rendering, schema markup, and core web vitals. We fix the deep technical issues that hold you back."
              },
              {
                title: "Total Transparency",
                desc: "No 'secret sauce'. We show you exactly what we're doing every month. You see every link built and every optimization made."
              },
              {
                title: "Revenue Focused",
                desc: "Rankings are vanity. Revenue is sanity. We focus on keywords with commercial intent that actually drive sales."
              },
              {
                title: "Holistic Approach",
                desc: "We don't view SEO in a silo. We align it with your UX, your content, and your broader marketing goals."
              }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-green-500/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-green-400" size={24} />
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Organic Wins</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real rankings. Real traffic. Real growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">SaaS Startup</h3>
                  <p className="text-green-400">Noida-based B2B Software</p>
                </div>
                <Award className="text-yellow-500 w-10 h-10" />
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Challenge</span>
                  <span className="text-red-400">Zero Organic Traffic</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Solution</span>
                  <span className="text-green-400">Programmatic SEO Strategy</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Result</span>
                  <span className="text-white font-bold">10k+ Monthly Visits in 6mo</span>
                </div>
              </div>
            </div>
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Legal Firm</h3>
                  <p className="text-green-400">South Delhi Law Office</p>
                </div>
                <Award className="text-yellow-500 w-10 h-10" />
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Challenge</span>
                  <span className="text-red-400">Stuck on Page 3</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Solution</span>
                  <span className="text-green-400">Local Citations & Link Building</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Result</span>
                  <span className="text-white font-bold">#1 Ranking for 'Lawyer Near Me'</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Pricing (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Growth Retainers</h2>
            <p className="text-xl text-gray-400">Ongoing partnerships for ongoing growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col hover:border-green-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-2">Growth</h3>
              <p className="text-lg text-gray-400 mb-6">For Local Businesses</p>
              <ul className="space-y-4 mb-8 flex-1 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Technical Audit</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Keyword Research</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> 2 Blog Posts/mo</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Monthly Reporting</li>
              </ul>
              <Link to="/contact" className="w-full py-4 rounded-xl border border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition-all text-center font-bold">Get Started</Link>
            </div>
            {/* Scale */}
            <div className="glass-panel p-8 rounded-3xl border border-green-500 relative transform scale-105 shadow-2xl shadow-green-900/20 flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">Aggressive Growth</div>
              <h3 className="text-2xl font-bold text-white mb-2">Dominance</h3>
              <p className="text-lg text-gray-400 mb-6">For National Brands</p>
              <ul className="space-y-4 mb-8 flex-1 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Advanced Technical Fixes</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> 4+ High-Value Articles/mo</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Authority Link Building</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Bi-Weekly Strategy Calls</li>
              </ul>
              <Link to="/contact" className="w-full py-4 rounded-xl bg-green-600 text-white hover:bg-green-500 transition-all text-center font-bold">Start Dominating</Link>
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
              The truth about SEO, plain and simple.
            </p>
          </div>

          <FAQ faqs={[
            {
              question: "How long does it take to see results?",
              answer: "SEO is a marathon, not a sprint. Typically, you start seeing movement in 3-4 months, with significant traffic growth by months 6-9. Trust the process, and the results will compound."
            },
            {
              question: "Do you guarantee #1 rankings?",
              answer: "No agency can ethically guarantee a #1 spot, because Google's algorithm is a black box. If someone promises you #1, run. We promise Best Practice execution and proven strategies that maximize your chances."
            },
            {
              question: "What about local SEO?",
              answer: "Yes! We specialize in Local SEO (Google Business Profile) to help you dominate the 'Map Pack' and drive foot traffic or local leads."
            },
            {
              question: "Do I need to change my website content?",
              answer: "Likely, yes. Search engines need improved content to understand your relevance. We will optimize existing pages and create new, high-authority content for you."
            },
            {
              question: "Do you build backlinks?",
              answer: "Yes, but only high-quality ones. We use digital PR and content outreach to earn links from reputable sites. We never buy spammy links."
            }
          ]} />
        </div>
      </section>

      {/* 11. CTA (Strong) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto glass-panel rounded-[3rem] p-12 text-center relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Scale?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Build a custom SEO strategy that drives real business growth.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform">
              Start Your Growth Journey <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SEO;
