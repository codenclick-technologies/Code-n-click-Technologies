import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Rocket, CheckCircle2, TrendingUp, Users, Briefcase } from 'lucide-react';
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 cursor-pointer group">
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
                Transform Your
                <br />
                <span className="relative inline-block whitespace-nowrap">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
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

          {/* RIGHT SECTION: Enterprise Project Showcase */}
          <motion.div
            variants={floatVariants}
            className="relative h-[400px] sm:h-[500px] md:h-[600px] order-2 lg:order-2"
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

            {/* Main card */}
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
                
                {/* Content wrapper */}
                <div className="relative z-10 w-full h-full flex flex-col p-6 sm:p-8 justify-between">
                  
                  {/* Header with icon */}
                  <div className="space-y-4">
                    <motion.div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/20 border border-blue-500/40 w-fit"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Briefcase size={16} className="text-blue-400" />
                      <span className="text-xs font-bold text-blue-300">Enterprise Ready</span>
                    </motion.div>

                    <motion.h3
                      className="text-2xl sm:text-3xl font-black text-white"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                        Ready to Build?
                      </span>
                    </motion.h3>
                    <p className="text-sm text-gray-400">Transform your enterprise vision into reality</p>
                  </div>

                  {/* Features showcase */}
                  <div className="space-y-3">
                    {[
                      { icon: CheckCircle2, text: 'Custom enterprise solutions', delay: 0 },
                      { icon: TrendingUp, text: 'Proven ROI & results', delay: 0.1 },
                      { icon: Users, text: 'Expert team dedicated to you', delay: 0.2 },
                    ].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: feature.delay + 0.5, duration: 0.5 }}
                        whileHover={{ x: 4 }}
                      >
                        <feature.icon size={18} className="text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA inside card */}
                  <motion.div
                    className="pt-4 border-t border-white/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <Link
                      to="/contact"
                      className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-center hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 inline-flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-blue-500/50"
                    >
                      <span>Start Your Project</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </Link>
                  </motion.div>

                  {/* Bottom accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
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

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -left-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs sm:text-sm font-bold shadow-2xl shadow-blue-500/50 flex items-center gap-2"
              animate={{
                y: [0, -12, 0],
                rotate: [-5, 0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              ✨ Enterprise Grade
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs sm:text-sm font-bold shadow-2xl shadow-purple-500/50 flex items-center gap-2"
              animate={{
                y: [0, 12, 0],
                rotate: [5, 0, -5, 0],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              🚀 Start Building
            </motion.div>

            {/* Pulse rings */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-blue-500/20"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
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
