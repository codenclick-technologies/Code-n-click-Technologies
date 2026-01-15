import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MousePointer2, Palette, Terminal, BarChart3, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SpotlightCard from '../ui/SpotlightCard';

const steps = [
  {
    number: '01',
    title: 'We listen, then we talk.',
    description: 'We start by understanding your world. No one knows your business better than you, so we listen first to build a strategy that actually works for your goals.',
    icon: MousePointer2,
    color: 'from-blue-600 via-indigo-500 to-blue-400',
    glow: 'rgba(59, 130, 246, 0.4)',
    details: ['Goal Discovery', 'Market Insight', 'Tech Strategy', 'The Roadmap']
  },
  {
    number: '02',
    title: 'Made for real people.',
    description: 'Good design should feel natural, not confusing. We create simple, stunning experiences that your customers will love to use every single day.',
    icon: Palette,
    color: 'from-purple-600 via-pink-500 to-purple-400',
    glow: 'rgba(168, 85, 247, 0.4)',
    details: ['Easy Workflows', 'Stunning Prototyping', 'User-Tested', 'Modern Branding']
  },
  {
    number: '03',
    title: 'Engineered to grow.',
    description: 'We don\'t just "build" things; we engineer them. Our code is clean, fast, and ready to handle your growth from 10 users to 10 million.',
    icon: Terminal,
    color: 'from-orange-600 via-amber-500 to-yellow-400',
    glow: 'rgba(249, 115, 22, 0.4)',
    details: ['Clean Codebase', 'Speed Optimization', 'Robust Testing', 'Future-Proofing']
  },
  {
    number: '04',
    title: 'Launch is just the start.',
    description: 'Going live is day one. We stay by your side to monitor performance, tweak the small details, and help you scale as the world changes.',
    icon: BarChart3,
    color: 'from-emerald-600 via-teal-500 to-green-400',
    glow: 'rgba(16, 185, 129, 0.4)',
    details: ['Smooth Deployment', 'Live Analytics', 'Ongoing Support', 'Regular Updates']
  },
];

const ProcessSection = () => {
  return (
    <section className="relative py-16 lg:py-20 bg-[#020205] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none opacity-40" />
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
             backgroundSize: '80px 80px',
             maskImage: 'radial-gradient(circle at center, black, transparent 90%)'
           }} 
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Centered Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">Our Workflow</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 tracking-tighter"
          >
            From your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Vision</span> <br />
            to real-world <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Impact.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Transparency is our default setting. You’ll never have to wonder what’s happening with our clear, <Link to="/services" className="text-white border-b border-white/20 hover:text-blue-400 transition-colors">collaborative-first process</Link>. Ready to <Link to="/contact" className="text-blue-400 hover:text-white transition-colors">start your project?</Link>
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          
          {/* Subtle connecting line for Desktop */}
          <div className="hidden lg:block absolute top-[50px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full"
              >
                <SpotlightCard className="h-full bg-[#030303]/90 backdrop-blur-3xl border border-white/5 group-hover:border-white/20 transition-all duration-700 rounded-[2.5rem] overflow-hidden flex flex-col p-8 lg:p-10 pt-16 lg:pt-20">
                    
                    {/* Big Background Number */}
                    <span className="absolute top-6 right-8 text-8xl font-black text-white/[0.03] group-hover:text-white/[0.06] transition-colors pointer-events-none select-none">
                      {step.number}
                    </span>

                    {/* Badge Number */}
                    <div className={`absolute -top-1 left-8 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} p-[1.5px] shadow-2xl z-20`}>
                      <div className="w-full h-full bg-[#020205] rounded-2xl flex items-center justify-center">
                        <span className="text-xl font-black text-white">{step.number}</span>
                      </div>
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                        {/* Icon */}
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-8 shadow-xl`}>
                            <Icon className="w-6 h-6 text-white" />
                        </div>

                        {/* Text */}
                        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors duration-500">
                            {step.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed font-light mb-8 group-hover:text-gray-300 transition-colors duration-500">
                            {step.description}
                        </p>

                        {/* Details List */}
                        <ul className="space-y-3 mt-auto border-t border-white/5 pt-8">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-3 text-xs font-medium text-gray-500 group-hover:text-gray-400 transition-colors">
                               <CheckCircle2 size={14} className={`text-transparent bg-clip-text bg-gradient-to-br ${step.color}`} />
                               {detail}
                            </li>
                          ))}
                        </ul>
                    </div>

                    {/* Internal Glow Pulse */}
                    <div className={`absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 blur-[40px] transition-all duration-1000 rounded-full`} />
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Action Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-gray-500 text-sm font-light mb-8 uppercase tracking-[0.3em]">Ready to turn your idea into impact?</p>
          <motion.div className="inline-block relative group/btn px-4">
             <div className="absolute inset-x-0 inset-y-0 bg-blue-600 blur-2xl opacity-10 group-hover/btn:opacity-30 transition-opacity" />
             <Link
                to="/contact"
                className="relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl transition-all shadow-2xl hover:bg-blue-600 hover:text-white group"
             >
                Start Your Journey
                <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
             </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
