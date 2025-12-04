import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    {
      number: '200+',
      label: 'Successful Projects',
      detail: 'Delivered across diverse industries with consistent excellence'
    },
    {
      number: '95%',
      label: 'Client Retention',
      detail: 'Long-term partnerships built on trust and measurable results'
    },
    {
      number: '340%',
      label: 'Average ROI Increase',
      detail: 'Data-driven strategies consistently exceed expectations'
    },
    {
      number: '12+',
      label: 'Years Experience',
      detail: 'Industry leaders in digital transformation and innovation'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
      {/* Gradient orbs background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full filter blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-full filter blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Proven Track Record of Success
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our metrics speak volumes. Here's what we've accomplished for our clients and partners.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="text-center group"
            >
              {/* Counter animation */}
              <motion.h3
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6, delay: idx * 0.1 }
                }}
                viewport={{ once: true }}
                className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-3 group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300"
              >
                {stat.number}
              </motion.h3>

              {/* Label */}
              <h4 className="text-xl font-bold text-white mb-2">{stat.label}</h4>

              {/* Detail */}
              <p className="text-gray-400 text-sm leading-relaxed">{stat.detail}</p>

              {/* Animated bottom accent */}
              <motion.div
                className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4 mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                style={{ originX: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
