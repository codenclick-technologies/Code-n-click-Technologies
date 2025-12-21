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
    <div className="min-h-screen bg-[#030014] text-white overflow-hidden">
      <SEOHead
        title="SEO Services (Search Engine Optimization) | Code'N'Click"
        description="Expert SEO services. We help businesses rank higher on Google, drive organic traffic, and increase revenue with data-driven strategies."
        keywords="Best SEO Services Delhi, Best SEO Services Faridabad, Premium SEO Company Delhi, Premium SEO Company Faridabad, No1 SEO Agency Delhi"
        canonical="/services/seo"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/20 via-[#030014] to-[#030014] pointer-events-none" />
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
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2">
              Get Free Audit <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/services" className="w-full sm:w-auto px-8 py-4 glass-button text-white rounded-xl font-bold flex items-center justify-center gap-2">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">SEO Solutions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A holistic approach to organic growth covering technical, on-page, and authority.
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

      {/* Tech Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">SEO Toolset</h2>
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

       {/* Process Section */}
       <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Sustainable Growth</h2>
              <p className="text-xl text-gray-400 mb-8">
                SEO isn't a one-time fix; it's a long-term compound interest for your business.
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

      {/* CTA Section */}
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
