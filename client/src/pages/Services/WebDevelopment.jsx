import React from 'react';
import { Helmet } from 'react-helmet-async';
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
  Shield,
  Cpu
} from 'lucide-react';

const WebDevelopment = () => {
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
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      <Helmet>
        <title>Professional Web Development Services | Code'N'Click</title>
        <meta name="description" content="Expert web development services. We build high-performance, SEO-optimized websites and web applications using React, Next.js, and modern technologies." />
        <meta name="keywords" content="web development, custom web apps, react development, next.js, seo services, pwa, e-commerce, frontend, backend" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Web Development",
              "provider": {
                "@type": "Organization",
                "name": "Code'N'Click"
              },
              "description": "Custom, high-performance websites and web apps built for speed, accessibility and conversions.",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "Custom Quote"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
           <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8"
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
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 focus:ring-offset-gray-900"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-300 transition-all duration-200 bg-gray-800/50 border border-gray-700 rounded-full hover:bg-gray-800 hover:text-white backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Marquee (Simplified as Grid for reliability) */}
      <section className="py-10 border-y border-gray-800/50 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-wider mb-8">Powered by Modern Technologies</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive web development services designed to solve complex business challenges.</p>
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
                className="group p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="mb-6 p-3 rounded-xl bg-gray-950 inline-block border border-gray-800 group-hover:border-blue-500/30 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h3>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
              <p className="text-gray-400 mb-8 text-lg">
                A transparent, agile process designed to deliver excellence on time and within budget.
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
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-900/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
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
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
              <div className="relative rounded-2xl border border-gray-800 bg-gray-950/80 backdrop-blur-xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <Zap className="w-6 h-6 text-yellow-400" />
                    <div>
                      <div className="font-semibold">Lightning Fast</div>
                      <div className="text-sm text-gray-400">Optimized for Core Web Vitals</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <Shield className="w-6 h-6 text-green-400" />
                    <div>
                      <div className="font-semibold">Secure by Design</div>
                      <div className="text-sm text-gray-400">Best practices & regular audits</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <Cpu className="w-6 h-6 text-red-400" />
                    <div>
                      <div className="font-semibold">Scalable Architecture</div>
                      <div className="text-sm text-gray-400">Built to grow with your business</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO & FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Common Questions</h2>
          <div className="space-y-4">
            <details className="group bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/30">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                How long does a typical project take?
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Timelines vary based on complexity. A standard marketing site can take 3-6 weeks, while complex web applications or SaaS platforms typically range from 3-6 months. We provide detailed timelines during the discovery phase.
              </div>
            </details>
            <details className="group bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/30">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                Do you optimize for SEO?
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Absolutely. We build with SEO in mind from day one. This includes semantic HTML, fast load times, mobile responsiveness, and structured data implementation. We also offer ongoing SEO services post-launch.
              </div>
            </details>
            <details className="group bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/30">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                Will my website be mobile-friendly?
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Yes. We take a mobile-first approach to design and development. Your site will look and perform beautifully on all devices, from smartphones to large desktop monitors.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale Your Business?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's build something extraordinary together. Schedule a free consultation today.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-600/30"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
