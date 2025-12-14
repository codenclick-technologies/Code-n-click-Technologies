import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Rocket, Code2, Database, Cpu, Cloud, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const floatVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-gray-950 overflow-hidden">
      {/* Premium background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-left blue gradient blob */}
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Bottom-right purple gradient blob */}
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Center cyan gradient */}
        <motion.div
          className="absolute top-1/2 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid background pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full py-12 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[90vh] md:min-h-screen"
        >
          {/* LEFT SECTION: Content */}
          <motion.div className="space-y-8 order-1 lg:order-1">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center mt-16 gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 cursor-pointer group">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, linear: true }}
                >
                  <Zap size={16} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                </motion.div>
                <span className="text-sm font-semibold text-blue-300 tracking-widest uppercase group-hover:text-blue-200 transition-colors">Innovative Solutions</span>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-6.5xl font-black leading-tight text-white">
                Transform Your
                <br />
                <span className="relative inline-block whitespace-nowrap">
                  <span className="absolute inset-15 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-pulse">
                    Digital Future
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.div variants={itemVariants}>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
                Unlock unprecedented growth with our cutting-edge digital solutions. We combine AI-driven innovation with enterprise-grade reliability to deliver results that matter.
              </p>
            </motion.div>

            {/* Feature bullets */}
            <motion.div variants={itemVariants} className="space-y-3 py-4">
              {[
                { icon: Rocket, text: 'Lightning-fast deployment & scaling' },
                { icon: Shield, text: 'Enterprise security & compliance' },
                { icon: Zap, text: '24/7 dedicated support team' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-3 group cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/40 group-hover:to-cyan-500/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                    <item.icon size={20} className="text-blue-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <span className="text-gray-200 font-medium group-hover:text-blue-300 transition-colors">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link
                to="/contact"
                className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 inline-flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 group-hover:from-blue-500 group-hover:via-cyan-400 group-hover:to-cyan-300 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 blur transition-all duration-300 group-hover:blur-md" />
                
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Now
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </span>
              </Link>

              <Link
                to="/services"
                className="group relative px-8 py-4 rounded-xl font-semibold text-white border-2 border-gray-700 hover:border-blue-500/50 bg-white/5 hover:bg-blue-500/10 transition-all duration-300 inline-flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/20"
              >
                <span className="relative z-10">Learn More</span>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-12 border-t border-gray-800">
              {[
                { value: '500+', label: 'Clients' },
                { value: '98%', label: 'Satisfaction' },
                { value: '50M+', label: 'Users' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 mt-2 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION: Premium Interactive Tech Showcase */}
          <motion.div
            variants={floatVariants} 
            className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] order-2 lg:order-2 flex items-center justify-center"
          >
            {/* Animated background orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-500/40 to-transparent rounded-full blur-3xl"
              animate={{
                x: [0, 40, 0],
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-tl from-purple-500/30 to-transparent rounded-full blur-3xl"
              animate={{
                x: [0, -40, 0],
                y: [0, 30, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-cyan-500/30 to-transparent rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Main showcase card */}
            <motion.div
              className="absolute inset-0 rounded-3xl p-0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {/* Animated gradient border */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)',
                  backgroundSize: '300% 100%',
                }}
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />

              {/* Inner content */}
              <div className="absolute inset-1 rounded-3xl bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-950/95 backdrop-blur-xl overflow-hidden">
                {/* Grid pattern background */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
                    `,
                  }}
                />

                {/* Content wrapper */}
                <div className="relative z-10 w-full h-full flex flex-col p-6 sm:p-8 justify-between">
                  
                  {/* Header section */}
                  <div className="space-y-2">
                    <motion.h3
                      className="text-2xl sm:text-3xl font-black text-white"
                      animate={{ 
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent bg-300% animate-pulse">
                        Our Services
                      </span>
                    </motion.h3>
                    <p className="text-xs sm:text-sm text-gray-400 font-medium">What we deliver for your success</p>
                  </div>

                  {/* Services cards grid (what we provide) */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    {[
                      { label: 'Web Development', desc: 'Custom websites & apps', color: 'from-blue-500 to-cyan-500', delay: 0 },
                      { label: 'SaaS Platforms', desc: 'Build and scale SaaS', color: 'from-purple-500 to-pink-500', delay: 0.05 },
                      { label: 'Meta Ads', desc: 'Facebook & Instagram ads', color: 'from-pink-500 to-red-400', delay: 0.1 },
                      { label: 'Google Ads', desc: 'Search & Display campaigns', color: 'from-yellow-400 to-orange-500', delay: 0.15 },
                      { label: 'Graphic Design', desc: 'Branding & visuals', color: 'from-indigo-500 to-blue-500', delay: 0.2 },
                      { label: 'SEO', desc: 'Organic growth & audits', color: 'from-green-500 to-emerald-500', delay: 0.25 },
                    ].map((svc, idx) => (
                      <motion.button
                        key={idx}
                        className="group/serv relative w-full"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: svc.delay, duration: 0.35 }}
                        whileHover={{ scale: 1.08, y: -8 }}
                        onClick={() => window.location.href = '/services'}
                      >
                        <div className={`relative rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 bg-gradient-to-br ${svc.color} opacity-6 group-hover/serv:opacity-20 transition-all duration-300 border border-white/8 group-hover/serv:border-white/40 h-24 sm:h-28 md:h-32 flex flex-col items-center justify-center gap-1 sm:gap-2 cursor-pointer overflow-hidden`}>
                          <motion.div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover/serv:opacity-100 transition-opacity duration-300" animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }} />
                          <div className="relative z-10 flex flex-col items-center text-center gap-0.5 sm:gap-1">
                            <span className="text-xs sm:text-sm font-semibold text-white leading-tight">{svc.label}</span>
                            <span className="text-[10px] sm:text-[11px] text-white/60 leading-tight">{svc.desc}</span>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {/* Performance metrics */}
                  <motion.div
                    className="flex items-center justify-around pt-4 border-t border-white/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    {[
                      { value: '99.9%', label: 'Uptime', icon: '⚡' },
                      { value: '<50ms', label: 'Latency', icon: '🚀' },
                      { value: '∞', label: 'Scale', icon: '📈' },
                    ].map((metric, idx) => (
                      <motion.div
                        key={idx}
                        className="text-center group/metric cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="text-lg sm:text-xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent group-hover/metric:from-cyan-300 group-hover/metric:to-blue-400 transition-all">{metric.value}</div>
                        <p className="text-[10px] sm:text-xs text-gray-500 group-hover/metric:text-blue-400 transition-colors">{metric.label}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Corner decorations */}
                <motion.div
                  className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500/30 rounded-br-3xl"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Floating tech badges */}
            <motion.div
              className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] sm:text-xs md:text-sm font-bold shadow-2xl shadow-blue-500/50"
              animate={{
                y: [0, -12, 0],
                rotate: [-5, 0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              ✨ Latest Tech
            </motion.div>

            <motion.div
              className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white text-[10px] sm:text-xs md:text-sm font-bold shadow-2xl shadow-purple-500/50"
              animate={{
                y: [0, 12, 0],
                rotate: [5, 0, -5, 0],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              🚀 Production Ready
            </motion.div>

            {/* Pulse effect rings */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-blue-500/20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-5/6 h-5/6 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-cyan-500/10"
              animate={{
                scale: [1.05, 1.15, 1.05],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  );
};

export default Hero;
