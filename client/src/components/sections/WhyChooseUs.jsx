import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Zap, Shield, Users, ArrowUpRight, BarChart3, Rocket, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SpotlightCard from '../ui/SpotlightCard';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: 'We care about your ROI',
      description: 'We don\'t just build for the sake of it. Everything we do is focused on helping you get more leads and grow your actual sales.',
      color: 'from-blue-600 via-indigo-500 to-cyan-400',
      glow: 'rgba(59, 130, 246, 0.4)'
    },
    {
      icon: Rocket,
      title: 'Blazing fast speed',
      description: 'Nobody likes a slow website. We build platforms that load in the blink of an eye, keeping your users happy and engaged.',
      color: 'from-orange-600 via-amber-500 to-yellow-400',
      glow: 'rgba(249, 115, 22, 0.4)'
    },
    {
      icon: Lock,
      title: 'Safety you can trust',
      description: 'Your data is precious. We use enterprise-level security to make sure your website and your customers are always protected.',
      color: 'from-emerald-600 via-teal-500 to-green-400',
      glow: 'rgba(16, 185, 129, 0.4)'
    },
    {
      icon: Users,
      title: 'A partner, not just a vendor',
      description: 'We don\'t disappear after the launch. We stick around to help you solve problems and scale your business as you grow.',
      color: 'from-pink-600 via-rose-500 to-purple-400',
      glow: 'rgba(244, 63, 94, 0.4)'
    },
  ];

  return (
    <section className="relative py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#020205] overflow-hidden">
      
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
             backgroundSize: '100px 100px',
             maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
           }} 
      />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">Why brands love us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 tracking-tighter"
          >
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Growth.</span> <br />
            Designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">People.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            We combine high-end technology with a deep understanding of what people actually want. No jargon, just <Link to="/services" className="text-white hover:text-blue-400 transition-colors font-medium border-b border-white/20">real results</Link> for your business. <Link to="/contact" className="text-blue-400 hover:text-white transition-colors">Let's talk growth.</Link>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="group relative h-full will-change-transform"
              >
                <SpotlightCard className="h-full bg-[#0A0A0B]/80 backdrop-blur-xl border border-white/5 group-hover:border-white/20 transition-all duration-700 rounded-[2.5rem] overflow-hidden flex flex-col p-8">
                    
                    <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 blur-[40px] transition-all duration-700 rounded-full z-0`} />

                    <div className="relative z-10 flex flex-col h-full">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.color} p-[1.5px] mb-8 group-hover:rotate-[10deg] transition-transform duration-500`}>
                            <div className="w-full h-full bg-[#0A0A0B] rounded-2xl flex items-center justify-center">
                                <Icon className="w-7 h-7 text-white" />
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors duration-500">
                            {reason.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed font-light group-hover:text-gray-400 transition-colors duration-500">
                            {reason.description}
                        </p>

                        <div className="mt-auto pt-8">
                            <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${reason.color} transition-all duration-700 rounded-full`} />
                        </div>
                    </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-gray-500 text-sm font-light mb-8 uppercase tracking-[0.3em]">Ready to start your journey?</p>
          <motion.div className="inline-block relative group/btn px-4">
             <div className="absolute inset-x-0 inset-y-0 bg-blue-600 blur-2xl opacity-10 group-hover/btn:opacity-30 transition-opacity" />
             <Link
                to="/contact"
                className="relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl transition-all shadow-2xl hover:bg-blue-600 hover:text-white group"
             >
                Let's have a chat
                <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
             </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
