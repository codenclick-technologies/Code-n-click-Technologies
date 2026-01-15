import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useInView, useSpring, useMotionValue, useTransform, animate } from 'framer-motion';
import { TrendingUp, Users, Target, Award } from 'lucide-react';

const Counter = ({ value, suffix }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest;
      }
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <span className="inline-flex items-center">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const stats = useMemo(() => [
    {
      number: 200,
      suffix: '+',
      label: 'Happy Clients',
      detail: 'Successful projects delivered to businesses just like yours.',
      icon: Target,
      color: 'from-blue-500 via-cyan-400 to-blue-600',
      glow: 'rgba(59, 130, 246, 0.5)'
    },
    {
      number: 95,
      suffix: '%',
      label: 'They Stay With Us',
      detail: 'Almost all our clients come back for their next big project.',
      icon: Users,
      color: 'from-purple-500 via-pink-400 to-purple-600',
      glow: 'rgba(168, 85, 247, 0.5)'
    },
    {
      number: 340,
      suffix: '%',
      label: 'Growth for Brands',
      detail: 'Our strategies help businesses grow their revenue rapidly.',
      icon: TrendingUp,
      color: 'from-emerald-500 via-teal-400 to-emerald-600',
      glow: 'rgba(16, 185, 129, 0.5)'
    },
    {
      number: 12,
      suffix: '+',
      label: 'Years of Experience',
      detail: 'A decade of helping founders turn ideas into reality.',
      icon: Award,
      color: 'from-orange-500 via-amber-400 to-orange-600',
      glow: 'rgba(249, 115, 22, 0.5)'
    },
  ], []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  return (
    <section className="relative py-16 lg:py-20 bg-[#020205] overflow-hidden selection:bg-blue-500/30">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[120px] mix-blend-screen opacity-50 hidden md:block" />
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <div className="text-center mb-20 lg:mb-24 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Our Story in Numbers</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Real results for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">real people.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Numbers matter, but the people behind them matter more. Here’s what we’ve achieved together with our clients.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index }) => {
  const cardRef = useRef(null);
  const Icon = stat.icon;
  
  const handleMouseMove = (e) => {
    if (!cardRef.current || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0)) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
      }}
      whileHover={{ y: -10 }}
      className="group relative h-full will-change-transform"
    >
      <div className="relative h-full p-8 rounded-[2.5rem] bg-[#030303]/80 backdrop-blur-xl border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
        
        <div 
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0"
          style={{
            background: `radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), ${stat.glow}, transparent 80%)`,
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} p-[1px] mb-8 group-hover:scale-110 transition-transform duration-500`}>
             <div className="w-full h-full bg-[#020205] rounded-2xl flex items-center justify-center">
                <Icon className="w-7 h-7 text-white" />
             </div>
          </div>

          <div className={`text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter`}>
            <Counter value={stat.number} suffix={stat.suffix} />
          </div>

          <h4 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-white transition-colors">
            {stat.label}
          </h4>
          
          <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors flex-grow">
            {stat.detail}
          </p>

          <div className="mt-8 relative h-1 w-full bg-white/5 rounded-full overflow-hidden">
             <motion.div 
               initial={{ x: '-100%' }}
               whileInView={{ x: '0%' }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
               className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-70`}
             />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default StatsSection;
