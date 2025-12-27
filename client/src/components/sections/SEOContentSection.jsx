import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import SpotlightCard from '../ui/SpotlightCard';
import { Search, Globe, Share2, MapPin, Code2, Rocket, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const SEOContentSection = () => {
  return (
    <section className="py-12 bg-[#050505] relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 via-transparent to-transparent opacity-60 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {/* Section Header */}
          <div className="max-w-3xl">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Web Development & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Digital Excellence
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 leading-relaxed border-l-2 border-blue-500/50 pl-6">
              Empowering businesses in <strong>Faridabad</strong> and <strong>Delhi NCR</strong> with world-class digital solutions. We bridge the gap between complex technology and measurable business growth.
            </motion.p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            
            {/* 1. Main Feature Card (Large) */}
            <motion.div variants={fadeInUp} className="md:col-span-6 lg:col-span-8 bg-gray-900/50 rounded-3xl p-1 border border-white/5 backdrop-blur-sm">
              <SpotlightCard className="h-full p-8 md:p-10 flex flex-col justify-between border-none bg-transparent">
                <div className="mb-8">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
                    <Rocket size={14} /> Top-Tier Development
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Crafting High-Performance Digital Experiences</h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                    As a leading <strong className="text-white">software development company</strong>, we engineer robust SaaS platforms, custom web apps, and mobile solutions. Our code quality rivals Silicon Valley standards, making us the preferred choice for startups and enterprises seeking the <strong>best web development services in Delhi NCR</strong>.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                    {[
                      { label: 'Next.js & React Experts', icon: Code2 },
                      { label: 'Cloud Native Solutions', icon: Globe },
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                        <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400">
                          <feature.icon size={20} />
                        </div>
                        <span className="font-semibold text-gray-200">{feature.label}</span>
                      </div>
                    ))}
                </div>
              </SpotlightCard>
            </motion.div>

            {/* 2. Marketing Services (Tall) */}
            <motion.div variants={fadeInUp} className="md:col-span-6 lg:col-span-4 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl p-1 border border-white/10">
               <SpotlightCard className="h-full p-8 border-none bg-transparent flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Growth Marketing</h3>
                    <p className="text-sm text-gray-400">Data-driven strategies that deliver ROI</p>
                  </div>
                  
                  <div className="space-y-4 flex-grow">
                     {[
                       { title: 'SEO Dominance', desc: 'Rank #1 for local Faridabad keywords', icon: Search, color: 'text-green-400' },
                       { title: 'PPC & Performance', desc: 'High-converting Google & Meta Ads', icon: Rocket, color: 'text-purple-400' },
                       { title: 'Brand Strategy', desc: 'Identity designs that resonate', icon: Share2, color: 'text-pink-400' }
                     ].map((item, i) => (
                       <div key={i} className="group flex flex-col p-4 rounded-2xl bg-black/20 hover:bg-white/5 transition-colors border border-white/5">
                         <div className="flex items-center justify-between mb-2">
                           <item.icon className={item.color} size={20} />
                           <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" size={16} />
                         </div>
                         <h4 className="font-bold text-gray-200 text-sm">{item.title}</h4>
                         <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                       </div>
                     ))}
                  </div>
               </SpotlightCard>
            </motion.div>

            {/* 3. Tech Stack Chips (Wide) */}
            <motion.div variants={fadeInUp} className="md:col-span-6 lg:col-span-7 bg-gray-900/30 rounded-3xl border border-white/5 p-8 flex flex-col justify-center">
               <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                 <Code2 size={16} /> Powering Innovation With
               </h4>
               <div className="flex flex-wrap gap-3">
                 {['React', 'Next.js', 'Node.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'AWS', 'Docker'].map((tech) => (
                   <span key={tech} className="px-4 py-2 rounded-xl bg-white/5 text-gray-300 font-mono text-sm border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all cursor-default">
                     {tech}
                   </span>
                 ))}
               </div>
            </motion.div>

             {/* 4. Location Map (Medium) */}
            <motion.div variants={fadeInUp} className="md:col-span-6 lg:col-span-5 bg-gray-900/30 rounded-3xl border border-white/5 p-8 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-50" />
               <div className="relative z-10">
                 <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                   <MapPin className="text-red-500" size={20} /> Serving Delhi NCR
                 </h4>
                 <div className="flex flex-wrap gap-2 mb-6">
                   {['Faridabad', 'Gurgaon', 'Noida', 'Delhi'].map((city) => (
                     <span key={city} className="text-xs font-semibold text-gray-400 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                       {city}
                     </span>
                   ))}
                 </div>
                 <p className="text-sm text-gray-500 leading-relaxed italic border-t border-white/5 pt-4">
                   "Searching for 'web designers near me'? Visit our <span className="text-white">Faridabad HQ</span>."
                 </p>
               </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOContentSection;
