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

const SEO = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      icon: <Settings className="w-8 h-8 text-green-400" />,
      title: "Technical SEO",
      description: "Optimizing site architecture, speed, and mobile-friendliness to ensure search engines can crawl and index your pages."
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
      description: "Dominating local search results and Google Maps to drive foot traffic and local leads."
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
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      <SEOHead
        title="SEO Services (Search Engine Optimization)"
        description="Expert SEO services. We help businesses rank higher on Google, drive organic traffic, and increase revenue with data-driven strategies."
        keywords="seo services, search engine optimization, technical seo, link building, local seo, seo audit, content marketing"
        canonical="/services/seo"
      >
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Search Engine Optimization",
              "provider": {
                "@type": "Organization",
                "name": "Code'N'Click"
              },
              "description": "Technical SEO, content strategy, and link-building to increase organic visibility and qualified traffic.",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "Custom Quote"
              }
            }
          `}
        </script>
      </SEOHead>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/20 via-gray-950 to-gray-950 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
           <div className="absolute top-20 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
           <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 text-sm font-medium mb-8"
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
            Rank Higher. <br className="hidden md:block" />
            <span className="text-green-500">Grow Faster.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Stop guessing and start ranking. We use data-driven SEO strategies to put your brand 
            in front of customers who are actively looking for you.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-green-600 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 focus:ring-offset-gray-900"
            >
              Get a Free SEO Audit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-300 transition-all duration-200 bg-gray-800/50 border border-gray-700 rounded-full hover:bg-gray-800 hover:text-white backdrop-blur-sm"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-10 border-y border-gray-800/50 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-wider mb-8">SEO Toolset</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {techStack.map((tech, index) => (
               <div key={index} className="flex items-center gap-2">
                 <span className="text-lg font-semibold text-gray-300">{tech.name}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete SEO Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A holistic approach to organic growth that covers every ranking factor.</p>
          </div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="group p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-green-500/50 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="mb-6 p-3 rounded-xl bg-gray-950 inline-block border border-gray-800 group-hover:border-green-500/30 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sustainable Growth</h2>
              <p className="text-gray-400 mb-8 text-lg">
                SEO isn't a one-time fix; it's a long-term strategy. Our process ensures consistent improvement over time.
              </p>
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-900/20 border border-green-500/30 flex items-center justify-center text-green-400 font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full" />
              <div className="relative rounded-2xl border border-gray-800 bg-gray-950/80 backdrop-blur-xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <Zap className="w-6 h-6 text-yellow-400" />
                    <div>
                      <div className="font-semibold">Speed Optimized</div>
                      <div className="text-sm text-gray-400">Core Web Vitals ready</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <CheckCircle2 className="w-6 h-6 text-blue-400" />
                    <div>
                      <div className="font-semibold">White Hat Tactics</div>
                      <div className="text-sm text-gray-400">Safe, long-term results</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <Award className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Proven Results</div>
                      <div className="text-sm text-gray-400">Track record of #1 rankings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-green-500/30">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                How long does SEO take?
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                SEO is a marathon, not a sprint. While some technical fixes can show immediate results, significant ranking improvements typically take 3-6 months depending on competition.
              </div>
            </details>
            <details className="group bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-green-500/30">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                Do you guarantee #1 rankings?
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                No ethical SEO agency can guarantee specific rankings because search algorithms are constantly changing. However, we guarantee a proven process that has consistently delivered results for our clients.
              </div>
            </details>
            <details className="group bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-green-500/30">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                What is included in an SEO audit?
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Our audit covers technical health (speed, mobile, indexing), on-page optimization (content, keywords), off-page factors (backlinks), and competitor analysis.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-600/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Outrank the Competition?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's build a custom SEO strategy that drives real business growth.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-green-600 rounded-full hover:bg-green-700 hover:scale-105 shadow-lg shadow-green-600/30"
          >
            Start Your Growth Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SEO;
