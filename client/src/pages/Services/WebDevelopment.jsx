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
  Zap
} from 'lucide-react';
import SEOHead from '../../components/utils/SEO';

const WebDevelopment = () => {

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

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
      description: "Built from the ground up for search engines with semantic HTML, SSR, and optimized core web vitals."
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
      description: "Creating intuitive, high-fidelity prototypes that align with your brand and maximize user engagement."
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
    }
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-hidden">
      <SEOHead
        title="Professional Web Development Services | Code'N'Click"
        description="Expert web development services. We build high-performance, SEO-optimized websites and web applications using React, Next.js, and modern technologies."
        keywords="Best Web Development Company Delhi, Best Web Development Company Faridabad, Premium Web Development Services Delhi, Premium Web Development Services Faridabad, No1 Web Developer Delhi, Top Web Development Agency Faridabad, custom web apps"
        canonical="/services/web-development"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030014] to-[#030014] pointer-events-none" />
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
            We Build Digital <br className="hidden md:block" />
            <span className="text-blue-500">Excellence</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Transform your vision into a powerful, high-performance digital reality. 
            We engineer websites that drive growth, engage users, and dominate search results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 glass-button text-white rounded-xl font-bold flex items-center justify-center gap-2">
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid (Glass Upgrade) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive web solutions tailored to scale your business.
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

      {/* Tech Stack (Glass Upgrade) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Technologies We Master</h2>
             <p className="text-xl text-gray-400">Modern tools for modern problems.</p>
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

      {/* Process Section (Glass Upgrade) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How We Work</h2>
              <p className="text-xl text-gray-400 mb-8">
                A transparent, agile process designed to deliver excellence on time and within budget.
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
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
              <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10">
                 <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                       <CheckCircle2 className="text-green-400" />
                       <span className="text-gray-300 font-medium">Daily Updates & Transparency</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                       <CheckCircle2 className="text-green-400" />
                       <span className="text-gray-300 font-medium">Code Quality Guarantee</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                       <CheckCircle2 className="text-green-400" />
                       <span className="text-gray-300 font-medium">On-Time Delivery</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                       <CheckCircle2 className="text-green-400" />
                       <span className="text-gray-300 font-medium">Lifetime Support Support</span>
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Scale?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a roadmap for your digital success.
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
