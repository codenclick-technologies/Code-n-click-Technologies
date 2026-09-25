import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Palette, 
  Terminal, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    title: 'Strategic Discovery & Architecture',
    description: 'We listen first. We map out your target customer journeys, commercial objectives, and technical constraints before writing a single line of code.',
    icon: Compass,
    lightBg: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
    deliverables: ['Commercial Funnel Audit', 'Tech Stack Selection', 'Product Scope & Milestone Plan']
  },
  {
    number: '02',
    title: 'Conversion UI/UX & Prototyping',
    description: 'We engineer intuitive, high-converting interfaces in Figma that feel effortless. Every screen is designed with clear visual hierarchy and persuasive psychology.',
    icon: Palette,
    lightBg: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600',
    deliverables: ['Clickable Interactive Prototype', 'Design System & Component Library', 'Mobile-First Testing']
  },
  {
    number: '03',
    title: 'Agile Full-Stack Engineering',
    description: 'Clean, maintainable, modular code built for speed and security. Regular weekly sprints and staging demos keep you fully in control of the build.',
    icon: Terminal,
    lightBg: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-600',
    deliverables: ['Sub-500ms Core Web Vitals', 'Automated QA & Security Scans', 'Private GitHub Repository Access']
  },
  {
    number: '04',
    title: 'Launch, SEO & Scale',
    description: 'Deployment is day one. We ensure zero-downtime DNS rollouts, technical SEO crawlability, live analytics instrumentation, and ongoing growth support.',
    icon: BarChart3,
    lightBg: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-600',
    deliverables: ['Edge CDN Deployment', 'Google Analytics & GTM Setup', 'Continuous Optimization']
  },
];

const ProcessSection = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-white text-slate-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-5 shadow-sm"
          >
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>Structured Execution</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 font-outfit"
          >
            How We Take You From{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              Concept to Market Leader
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            A predictable, transparent development methodology designed to minimize risk and launch on schedule.
          </motion.p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-[#FAFBFC] border border-slate-200/90 hover:border-blue-400/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-slate-900 font-mono tracking-tight">
                      {step.number}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl ${step.lightBg} ${step.borderColor} border flex items-center justify-center shadow-sm`}>
                      <Icon className={`w-6 h-6 ${step.textColor}`} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-200/70">
                    {step.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default memo(ProcessSection);
