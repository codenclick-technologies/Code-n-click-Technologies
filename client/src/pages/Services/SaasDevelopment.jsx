import React from 'react';
import SEOHead from '../../components/utils/SEO';
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
  Lock,
  Code2,
  CheckCircle2
} from 'lucide-react';

const SaasDevelopment = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
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
    <div className="min-h-screen bg-[#030014] text-white overflow-hidden">
      <SEOHead
        title="SaaS Development Services | Code'N'Click"
        description="Expert SaaS development services. We build scalable, secure, and high-performance cloud applications for startups and enterprises."
        keywords="saas development Delhi, saas development Faridabad, cloud application Delhi, cloud application Faridabad, multi-tenant architecture"
        canonical="/services/saas-development"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-[#030014] to-[#030014] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
           <div className="absolute top-40 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
           <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-sm font-medium mb-8"
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
            We architect and build enterprise-grade SaaS platforms that are secure, scalable, and delightful to use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2">
              Get SaaS Strategy <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 glass-button text-white rounded-xl font-bold flex items-center justify-center gap-2">
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid (Glass Upgrade) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">SaaS Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              End-to-end development for modern software distributors.
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
                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-purple-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
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
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Cloud Stack</h2>
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
                <Zap className="w-4 h-4 text-purple-400" />
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
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Product Roadmap</h2>
              <p className="text-xl text-gray-400 mb-8">
                From MVP to IPO, we are your technical partners at every stage.
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
              <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full" />
              <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10">
                 <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                       <CheckCircle2 className="text-green-400" />
                       <span className="text-gray-300 font-medium">SOC2 Compliant Architecture</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                       <CheckCircle2 className="text-green-400" />
                       <span className="text-gray-300 font-medium">99.99% Uptime SLA</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                       <CheckCircle2 className="text-green-400" />
                       <span className="text-gray-300 font-medium">Automated CI/CD Pipelines</span>
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Launch Your SaaS</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't let technical challenges slow down your growth. Hire the experts.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform">
              Book Strategy Call <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
};

export default SaasDevelopment;
