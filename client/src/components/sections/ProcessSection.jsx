import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Cog, Rocket, BarChart3 } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'We Listen & Learn',
      description: 'First, we shut up and listen. We analyze your goals, your competition, and your audience to build a strategy that actually fits.',
      icon: Lightbulb,
      color: 'from-blue-500 to-cyan-400',
      details: ['Deep-dive Workshops', 'Market Analysis', 'Technical Feasibility', 'Clear Roadmap']
    },
    {
      number: '02',
      title: 'We Design for Humans',
      description: 'We prototype user experiences that feel intuitive and look stunning. We validate designs before writing a single line of code.',
      icon: Cog,
      color: 'from-purple-500 to-pink-400',
      details: ['User Flow Mapping', 'High-Fidelity Prototypes', 'Accessibility First', 'Brand Alignment']
    },
    {
      number: '03',
      title: 'We Build to Scale',
      description: 'Our engineers build robust, clean code. We use modern stacks that ensure your product is fast, secure, and ready to grow.',
      icon: Rocket,
      color: 'from-orange-500 to-red-400',
      details: ['Clean Code Standards', 'Weekly Sprints', 'Rigorous Testing', 'Seamless Integration']
    },
    {
      number: '04',
      title: 'We Launch & Grow',
      description: 'Launch is just Day 1. We help you monitor performance, optimize based on data, and iterate for continuous improvement.',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-400',
      details: ['Zero-Downtime Deploy', 'Real-time Analytics', 'Growth Hacking', 'Ongoing Support']
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#020205] overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

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
            From Idea to Impact
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Transparency is our default setting. You'll never have to wonder "what's happening now?" with our clear, collaborative process.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connector line - hidden on mobile */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-green-500/50 -z-10" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: idx * 0.1 }
                  }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-4 z-10">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow`}>
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-white/10 group-hover:border-white/30 p-8 pt-24 h-full transition-all duration-300 hover:bg-gray-800/50">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{step.description}</p>

                    {/* Details List */}
                    <ul className="space-y-2 mb-6">
                      {step.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 + i * 0.05 }}
                          className="text-sm text-gray-300 flex items-center"
                        >
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mr-3`} />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Arrow for desktop */}
                    {idx < steps.length - 1 && (
                      <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 text-white/30 group-hover:text-white/60 transition-colors">
                        <ArrowRight size={24} />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Ready to start your journey? Let's discuss your project today.</p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-blue-500/50"
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
