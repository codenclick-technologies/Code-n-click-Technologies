import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Shield, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Average ROI increase of 340% for our clients within 6 months. Data-driven strategies backed by 50+ successful campaigns.',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Delivery',
      description: 'Agile development cycles with weekly sprints. Your project goes live 40% faster with our optimized processes.',
      color: 'from-yellow-500 to-orange-400'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'ISO 27001 certified infrastructure. GDPR & SOC 2 compliant. Your data is protected with military-grade encryption.',
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: Users,
      title: '24/7 Dedicated Support',
      description: 'Round-the-clock monitoring and technical support. Average response time under 15 minutes for critical issues.',
      color: 'from-pink-500 to-red-400'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-grid-white/5 opacity-10" style={{
        backgroundImage: 'linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Why Industry Leaders Choose Us
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We combine cutting-edge technology with strategic expertise to deliver measurable business impact. Partner with 200+ successful companies.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} rounded-2xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <div className="rounded-2xl bg-gray-950 h-full" />
                </div>

                {/* Card Content */}
                <div className="relative rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-white/10 group-hover:border-white/30 p-8 h-full transition-all duration-300 overflow-hidden">
                  {/* Animated gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${reason.color} flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-shadow`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Text Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Ready to see results? Start with a free consultation today.</p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-blue-500/50"
          >
            Get Started Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
