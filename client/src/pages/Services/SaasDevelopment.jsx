import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Database, 
  Server, 
  Shield, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Zap,
  Layers,
  Code2,
  Globe,
  Lock
} from 'lucide-react';

const SaasDevelopment = () => {
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
      icon: <Cloud className="w-8 h-8 text-pink-400" />,
      title: "Cloud-Native Architecture",
      description: "Scalable, resilient systems built on AWS, Azure, or GCP that grow with your user base."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Multi-Tenant Platforms",
      description: "Secure data isolation and custom experiences for every customer on your platform."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "High-Performance APIs",
      description: "Robust REST and GraphQL APIs designed for speed, reliability, and easy integration."
    },
    {
      icon: <Lock className="w-8 h-8 text-emerald-400" />,
      title: "Enterprise Security",
      description: "SOC2-ready security practices, encryption, and role-based access control (RBAC)."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: "Subscription Management",
      description: "Seamless integration with Stripe, Lemon Squeezy, or Paddle for recurring billing."
    },
    {
      icon: <Layers className="w-8 h-8 text-orange-400" />,
      title: "Microservices & Serverless",
      description: "Modern architectures that reduce costs and improve maintainability."
    }
  ];

  const techStack = [
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "AI/ML" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Redis", category: "Caching" },
    { name: "Docker", category: "Container" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "AWS", category: "Cloud" },
    { name: "Terraform", category: "IaC" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "MVP Strategy",
      description: "Defining the core value proposition and minimum feature set to launch quickly."
    },
    {
      number: "02",
      title: "Architecture Design",
      description: "Planning a scalable foundation that can handle thousands of concurrent users."
    },
    {
      number: "03",
      title: "Agile Build",
      description: "Rapid development sprints with continuous deployment and feedback loops."
    },
    {
      number: "04",
      title: "Scale & Optimize",
      description: "Performance tuning, cost optimization, and feature expansion based on data."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      <Helmet>
        <title>SaaS Development Services | Code'N'Click</title>
        <meta name="description" content="Expert SaaS development services. We build scalable, secure, and high-performance cloud applications for startups and enterprises." />
        <meta name="keywords" content="saas development, cloud application, multi-tenant, microservices, aws, node.js, enterprise software" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "SaaS Development",
              "provider": {
                "@type": "Organization",
                "name": "Code'N'Click"
              },
              "description": "Build reliable, scalable SaaS products designed for growth, retention, and efficient operations.",
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-950 to-gray-950 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
           <div className="absolute top-40 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
           <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-400 text-sm font-medium mb-8"
          >
            <Cloud className="w-4 h-4" />
            <span>Scalable Cloud Solutions</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-gray-400"
          >
            Build Your Next <br className="hidden md:block" />
            <span className="text-purple-500">SaaS Unicorn</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            From MVP to enterprise scale, we engineer robust SaaS platforms that are secure, 
            reliable, and ready for exponential growth.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 focus:ring-offset-gray-900"
            >
              Start Your Pilot
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
          <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-wider mb-8">Enterprise-Grade Stack</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to build, launch, and scale your software business.</p>
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
                className="group p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="mb-6 p-3 rounded-xl bg-gray-950 inline-block border border-gray-800 group-hover:border-purple-500/30 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{service.title}</h3>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">From Idea to IPO</h2>
              <p className="text-gray-400 mb-8 text-lg">
                We don't just write code; we build businesses. Our process is designed to minimize risk and maximize speed to market.
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
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-900/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold">
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
              <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full" />
              <div className="relative rounded-2xl border border-gray-800 bg-gray-950/80 backdrop-blur-xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <Server className="w-6 h-6 text-blue-400" />
                    <div>
                      <div className="font-semibold">99.99% Uptime</div>
                      <div className="text-sm text-gray-400">Reliable infrastructure</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <Shield className="w-6 h-6 text-green-400" />
                    <div>
                      <div className="font-semibold">Data Privacy</div>
                      <div className="text-sm text-gray-400">GDPR & HIPAA compliant</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <Code2 className="w-6 h-6 text-pink-400" />
                    <div>
                      <div className="font-semibold">Clean Code</div>
                      <div className="text-sm text-gray-400">Maintainable & documented</div>
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
            <details className="group bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-500/30">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                How do you handle data security?
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Security is paramount. We implement industry-standard practices including encryption at rest and in transit, secure authentication (OAuth/SSO), role-based access control, and regular security audits.
              </div>
            </details>
            <details className="group bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-500/30">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                Can you help with legacy system migration?
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Yes, we specialize in modernizing legacy applications. We can help you migrate to a cloud-native architecture, improve performance, and reduce technical debt with minimal downtime.
              </div>
            </details>
            <details className="group bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-500/30">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                Do you offer post-launch support?
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Absolutely. We offer various support and maintenance packages to ensure your SaaS platform remains secure, up-to-date, and performs optimally as you scale.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-600/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's turn your innovative idea into a market-leading SaaS product.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-purple-600 rounded-full hover:bg-purple-700 hover:scale-105 shadow-lg shadow-purple-600/30"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SaasDevelopment;
