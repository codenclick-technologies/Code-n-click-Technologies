import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, BarChart, PenTool, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import SpotlightCard from '../ui/SpotlightCard';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom, high-performance websites built with React, Next.js, and 3D technologies.',
    link: '/services/web-development',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    icon: Code,
    title: 'SaaS Development',
    description: 'Reliable, scalable SaaS products with multi-tenant architecture and enterprise-grade infrastructure.',
    link: '/services/saas-development',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    icon: Globe,
    title: 'Meta Ads',
    description: 'Targeted Facebook and Instagram ad campaigns to skyrocket your ROI.',
    link: '/services/meta-ads',
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    icon: BarChart,
    title: 'Google Ads',
    description: 'Strategic PPC campaigns to capture high-intent traffic and leads.',
    link: '/services/google-ads',
    color: 'text-green-500',
    bg: 'bg-green-50 dark:bg-green-900/20'
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description: 'Stunning visuals and branding that tell your story and captivate audiences.',
    link: '/services/graphic-design',
    color: 'text-pink-500',
    bg: 'bg-pink-50 dark:bg-pink-900/20'
  },
  {
    icon: Search,
    title: 'SEO',
    description: 'Data-driven SEO strategies to rank higher and drive organic growth.',
    link: '/services/seo',
    color: 'text-orange-500',
    bg: 'bg-orange-50 dark:bg-orange-900/20'
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-gray-950 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Comprehensive digital solutions tailored to your business goals.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={fadeInUp} whileHover={{ scale: 1.03 }} className="transition-transform h-full">
              {/* Gradient border -> SpotlightCard for the inner glass panel (equal heights) */}
              <div className="relative rounded-3xl p-[1px] h-full" style={{
                background: 'linear-gradient(90deg, rgba(59,130,246,0.9), rgba(139,92,246,0.9), rgba(6,182,212,0.9))',
                backgroundSize: '300% 100%'
              }}>
                <SpotlightCard className="h-60 p-6">
                  <div className="flex items-start gap-4 h-full">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${service.bg} ${service.color} shadow-lg flex-shrink-0`}>
                      <service.icon size={20} className="text-white/95" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-400 mb-6 leading-relaxed flex-1">{service.description}</p>
                      <div>
                        <Link to={service.link} className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider">
                          Learn More <ArrowRight size={14} className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
