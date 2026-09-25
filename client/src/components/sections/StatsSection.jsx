import React, { useEffect, useRef, useMemo, memo } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { TrendingUp, Users, Target, Award, Sparkles } from 'lucide-react';

const Counter = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.2,
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
      label: 'Delivered Projects',
      detail: 'Successful web apps, SaaS platforms, and enterprise solutions deployed.',
      icon: Target,
      lightBg: 'bg-blue-50',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      number: 95,
      suffix: '%',
      label: 'Client Retention Rate',
      detail: 'Partners who continue working with us for recurring growth and scaling.',
      icon: Users,
      lightBg: 'bg-purple-50',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      number: 340,
      suffix: '%',
      label: 'Average ROAS & ROI Lift',
      detail: 'Quantifiable first-year business growth across our performance campaigns.',
      icon: TrendingUp,
      lightBg: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      borderColor: 'border-emerald-200'
    },
    {
      number: 10,
      suffix: 'M+',
      label: 'Monthly User Reach',
      detail: 'End-users utilizing software and websites powered by Codenclick code.',
      icon: Award,
      lightBg: 'bg-amber-50',
      textColor: 'text-amber-600',
      borderColor: 'border-amber-200'
    },
  ], []);

  return (
    <section className="relative py-20 lg:py-24 bg-[#FAFBFC] border-y border-slate-200/80 text-slate-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-outfit">
            Numbers That Speak for Themselves
          </h2>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${stat.lightBg} ${stat.borderColor} border flex items-center justify-center mb-6`}>
                    <Icon className={`w-6 h-6 ${stat.textColor}`} />
                  </div>

                  <p className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                    <Counter value={stat.number} suffix={stat.suffix} />
                  </p>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {stat.label}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stat.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default memo(StatsSection);
