import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Rocket, 
  Lock, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

const reasons = [
  {
    icon: TrendingUp,
    title: 'Obsessed with Net Revenue & ROI',
    description: 'We don’t celebrate vanity metrics like impressions and clicks. We track every rupee spent directly back to pipeline value, qualified leads, and closed deals.',
    lightBg: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
    stat: '+340%',
    statLabel: 'Avg. First-Year ROI Lift'
  },
  {
    icon: Rocket,
    title: 'Sub-Second Page Load Velocity',
    description: 'Slow websites kill conversion rates. We eliminate heavy WordPress bloat and build headless, custom React applications that render in under 600ms on mobile.',
    lightBg: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-600',
    stat: '480ms',
    statLabel: 'Average LCP Speed'
  },
  {
    icon: Lock,
    title: 'Bank-Grade Code & Data Security',
    description: 'Your intellectual property and client data are non-negotiable. Every system undergoes strict vulnerability assessments, OWASP compliance, and SSL enforcement.',
    lightBg: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-600',
    stat: '100%',
    statLabel: 'Secure Code Audited'
  },
  {
    icon: Users,
    title: 'Senior Engineering Partners, Not Vendors',
    description: 'You communicate directly with experienced product engineers and growth strategists on dedicated channels. No account manager telephone games or delays.',
    lightBg: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600',
    stat: '95%',
    statLabel: 'Client Retention Rate'
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-white text-slate-900 overflow-hidden">
      {/* Subtle Background Mesh Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[500px] pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.03) 50%, transparent 80%)"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-5 shadow-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>The Codenclick Difference</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 font-outfit"
          >
            Why Ambitious Brands{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              Trust Our Team
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            We operate at the intersection of technical engineering precision and commercial growth psychology to guarantee measurable business impact.
          </motion.p>
        </div>

        {/* 4 Value Pillars in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 lg:p-10 rounded-3xl bg-[#FAFBFC] border border-slate-200/90 hover:border-blue-400/50 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${reason.lightBg} ${reason.borderColor} border flex items-center justify-center shadow-sm`}>
                      <Icon className={`w-7 h-7 ${reason.textColor}`} />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-slate-900 font-mono">{reason.stat}</p>
                      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{reason.statLabel}</p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    {reason.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Banner */}
        <div className="p-8 lg:p-10 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-wider">
              No More Guesswork
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to Upgrade from Traditional Freelancers & Agencies?
            </h3>
            <p className="text-sm text-slate-400 max-w-2xl">
              Get direct access to certified engineers, dedicated PMs, clean GitHub code repos, and guaranteed delivery timelines.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95"
            >
              <span>Get Free Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default memo(WhyChooseUs);
