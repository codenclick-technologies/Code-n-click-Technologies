import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Globe, BarChart, PenTool, Search, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom, high-performance websites built with React, Next.js, and 3D technologies.',
    link: '/services/web-development',
    gradient: 'from-blue-500 to-cyan-500',
    shadow: 'shadow-blue-500/20'
  },
  {
    icon: Server,
    title: 'SaaS Development',
    description: 'Reliable, scalable SaaS products with multi-tenant architecture and enterprise-grade infrastructure.',
    link: '/services/saas-development',
    gradient: 'from-purple-500 to-pink-500',
    shadow: 'shadow-purple-500/20'
  },
  {
    icon: Globe,
    title: 'Meta Ads',
    description: 'Targeted Facebook and Instagram ad campaigns to skyrocket your ROI.',
    link: '/services/meta-ads',
    gradient: 'from-pink-500 to-red-500',
    shadow: 'shadow-pink-500/20'
  },
  {
    icon: BarChart,
    title: 'Google Ads',
    description: 'Strategic PPC campaigns to capture high-intent traffic and leads.',
    link: '/services/google-ads',
    gradient: 'from-yellow-400 to-orange-500',
    shadow: 'shadow-yellow-500/20'
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description: 'Stunning visuals and branding that tell your story and captivate audiences.',
    link: '/services/graphic-design',
    gradient: 'from-indigo-500 to-blue-500',
    shadow: 'shadow-indigo-500/20'
  },
  {
    icon: Search,
    title: 'SEO',
    description: 'Data-driven SEO strategies to rank higher and drive organic growth.',
    link: '/services/seo',
    gradient: 'from-green-500 to-emerald-500',
    shadow: 'shadow-green-500/20'
  }
];

const ServiceCard = ({ service }) => {
  return (
    <motion.div 
      variants={fadeInUp} 
      className="group relative h-full"
    >
      {/* Card Background & Border */}
      <div className="relative h-full rounded-3xl p-[1px] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
        {/* Animated Gradient Border (Hidden by default, shows on hover) */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`} />
        
        {/* Static Low-Opacity Border */}
        <div className="absolute inset-0 bg-white/10 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />

        {/* Inner Card Content */}
        <div className="relative h-full bg-gray-950/90 backdrop-blur-xl rounded-[23px] p-8 flex flex-col overflow-hidden">
          
          {/* Subtle Ambient Glow Effect inside card */}
          <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 rounded-full`} />
          
          {/* Icon Section */}
          <div className="relative mb-6">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient} text-white shadow-lg ${service.shadow} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
              <service.icon size={26} className="text-white" />
            </div>
            {/* Sparkle Decoration */}
            <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
               <Sparkles size={16} className="text-yellow-300 animate-pulse" />
            </div>
          </div>

          {/* Text Content */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors">
            {service.title}
          </h3>
          
          <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
            {service.description}
          </p>

          {/* Button / Link */}
          <Link 
            to={service.link}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/70 group-hover:text-white transition-colors"
          >
            Learn More
            <span className={`flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-gradient-to-r ${service.gradient} transition-all duration-300 group-hover:translate-x-2`}>
              <ArrowRight size={14} className="text-white" />
            </span>
          </Link>

          {/* Bottom Gradient Line */}
          <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        </div>
      </div>
    </motion.div>
  );
};

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
          <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={14} />
            Our Expertise
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Digital Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Modern Business
            </span>
          </motion.h2>
          
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            We blend creativity with technical excellence to deliver products that stand out.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
