import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Globe, BarChart, PenTool, Search, ArrowRight, Sparkles, Box, Layout, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import SpotlightCard from '../ui/SpotlightCard';

const services = [
  {
    icon: Code,
    title: 'Custom Web Apps',
    description: 'We don\'t just write code; we build your digital home. As the best Web Development Company in Delhi, we create fast, scalable websites.',
    link: '/services/web-development',
    color: 'from-blue-600 via-indigo-500 to-blue-400',
    glow: 'rgba(59, 130, 246, 0.4)',
    tag: 'Built for You'
  },
  {
    icon: Cpu,
    title: 'Smart SaaS Tools',
    description: 'Bring your big idea to life with custom-built software that\'s easy to use and ready to handle thousands of users smoothly.',
    link: '/services/saas-development',
    color: 'from-cyan-500 via-blue-500 to-cyan-400',
    glow: 'rgba(6, 182, 212, 0.4)',
    tag: 'Ready to Scale'
  },
  {
    icon: Globe,
    title: 'Social Media Growth',
    description: 'Need more customers? We create high-converting Meta and Social Ads that actually speak to your audience and drive real growth.',
    link: '/services/meta-ads',
    color: 'from-purple-600 via-pink-500 to-purple-400',
    glow: 'rgba(168, 85, 247, 0.4)',
    tag: 'Get Noticed'
  },
  {
    icon: BarChart,
    title: 'Google Ad Campaigns',
    description: 'Stop guessing where your money goes. We manage your Google Ads so you show up exactly when your next customer is looking.',
    link: '/services/google-ads',
    color: 'from-emerald-500 via-teal-400 to-emerald-300',
    glow: 'rgba(16, 185, 129, 0.4)',
    tag: 'Real Results'
  },
  {
    icon: Layout,
    title: 'High-Converting Design',
    description: 'Good design should make you money. We create brands and websites that look premium and are engineered to turn visitors into paying customers.',
    link: '/services/graphic-design',
    color: 'from-pink-600 via-rose-500 to-pink-400',
    glow: 'rgba(244, 63, 94, 0.4)',
    tag: 'Modern Craft'
  },
  {
    icon: Search,
    title: 'Be Found on Google',
    description: 'Tired of being on page 10? We help you climb the rankings. Our SEO Experts in Delhi ensure you stay ahead of the competition.',
    link: '/services/seo',
    color: 'from-orange-500 via-amber-400 to-yellow-300',
    glow: 'rgba(249, 115, 22, 0.4)',
    tag: 'Better Reach'
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full"
    >
      <SpotlightCard className="h-full bg-[#030303]/90 backdrop-blur-3xl border border-white/5 group-hover:border-white/20 transition-all duration-700 rounded-[2rem] overflow-hidden flex flex-col shadow-2xl">

        <div className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-[60px] transition-all duration-700 rounded-full z-0`} />

        <div className="p-8 lg:p-10 flex flex-col h-full relative z-10">

          <div className="flex items-center justify-between mb-10">
            <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[1.5px] group-hover:scale-110 transition-transform duration-500 shadow-xl overflow-hidden`}>
              <div className="w-full h-full bg-[#030303] rounded-2xl flex items-center justify-center">
                <service.icon size={26} className="text-white group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
            <div className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">
              {service.tag}
            </div>
          </div>

          <div className="flex-grow space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-500">
              {service.title}
            </h3>
            <p className="text-sm lg:text-base text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-500">
              {service.description}
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between group/action">
            <Link
              to={service.link}
              className="flex items-center gap-3 text-xs font-black tracking-[0.25em] uppercase text-white/50 hover:text-white transition-all duration-300"
            >
              See our process
              <ArrowRight size={14} className="group-hover/action:translate-x-1 transition-transform" />
            </Link>
            <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-[4]`} />
          </div>
        </div>

        <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`} />
      </SpotlightCard>
    </motion.div>
  );
};

const ServicesGrid = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#020205] relative z-10 overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none opacity-30" />

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 50%, transparent)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">What we do best</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tighter"
          >
            Scale Your Traffic, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Leads & Revenue.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Stop guessing and start growing. We use high-performance engineering and data-driven marketing to turn your digital presence into a revenue-generating machine. Ready to <Link to="/contact" className="text-blue-400 hover:text-white transition-colors">outrank your competition?</Link>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">Trusted by modern brands</span>
          <div className="flex items-center gap-8 text-white font-black text-sm tracking-widest">
            <span>STARTUPS</span>
            <span>SCALEUPS</span>
            <span>ENTERPRISE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
