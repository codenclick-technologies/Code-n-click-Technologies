import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Target, 
  Zap, 
  Smartphone, 
  MessageSquare, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  TrendingUp,
  ShieldCheck,
  Clock,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const stages = [
  {
    id: 'traffic',
    number: '01',
    name: 'High-Intent Traffic',
    category: 'Acquisition',
    icon: Search,
    color: 'blue',
    tagline: 'Attracting buyers, not just browsers.',
    summary: 'Most agencies chase vanity traffic that never converts. We engineer precision organic search rankings (SEO) and high-intent paid search campaigns (Google & Meta Ads) that target decision-makers at the exact moment of commercial intent.',
    metrics: [
      { label: 'Keyword Intent', val: 'Bottom-of-Funnel' },
      { label: 'Negative Waste', val: '-42% Ad Spend' },
      { label: 'Organic Moat', val: 'Top 3 SERP Ranks' }
    ],
    features: [
      'Technical & Semantic Topic Cluster SEO',
      'High-ROAS Google Search & Performance Max',
      'Hyper-segmented Meta lookalike & retargeting funnels',
      'Zero-waste negative keyword bidding shields'
    ],
    mockup: {
      title: 'Google & Meta Acquisition Console',
      badge: 'High-Intent Active',
      data: [
        { source: 'Google Search (High Intent)', visitors: '14,200', convRate: '6.4%', cpa: '₹340' },
        { source: 'Technical SEO (Organic)', visitors: '28,900', convRate: '5.8%', cpa: '₹0 (Organic)' },
        { source: 'Meta Retargeting Funnel', visitors: '8,400', convRate: '7.1%', cpa: '₹290' }
      ]
    }
  },
  {
    id: 'experience',
    number: '02',
    name: 'Sub-Second Web Experience',
    category: 'Engineering',
    icon: Zap,
    color: 'emerald',
    tagline: 'Speed is the ultimate conversion multiplier.',
    summary: 'A 1-second delay in page load time reduces conversions by 7%. While typical agency sites rely on bloated WordPress templates with 40+ plugins, we build custom, headless web architectures (React & Next.js) that load in under 600ms on 4G mobile networks.',
    metrics: [
      { label: 'Lighthouse Score', val: '98/100 Mobile' },
      { label: 'Largest Contentful Paint', val: '0.65s' },
      { label: 'Mobile Bounce Rate', val: '-38%' }
    ],
    features: [
      'Bespoke React & Next.js sub-second web platforms',
      'Pristine Core Web Vitals (LCP, INP, CLS)',
      'Editorial typography and clean visual hierarchy',
      'Enterprise security with zero plugin vulnerabilities'
    ],
    mockup: {
      title: 'Real-Time Performance Benchmark',
      badge: 'Lighthouse 99',
      data: [
        { metric: 'Core Web Vitals', codenclick: '99/100 (Pass)', typical: '42/100 (Fail)' },
        { metric: 'First Contentful Paint', codenclick: '0.4s', typical: '2.8s' },
        { metric: 'Mobile Conversion Rate', codenclick: '5.8%', typical: '1.4%' }
      ]
    }
  },
  {
    id: 'conversion',
    number: '03',
    name: 'Conversion Architecture',
    category: 'CRO',
    icon: Target,
    color: 'indigo',
    tagline: 'Frictionless pathways that turn visitors into revenue.',
    summary: 'Traffic without conversion is just an expensive expense. We structure every landing page with persuasive psychological hierarchy: immediate value clarity, transparent proofs, localized authority, and frictionless 3-field inquiry forms.',
    metrics: [
      { label: 'Form Completion', val: '+64% Uplift' },
      { label: 'Lead Quality Score', val: '8.8 / 10' },
      { label: 'Drop-off Reduction', val: '-48%' }
    ],
    features: [
      'Cognitive load reduction & focused visual storytelling',
      'Sticky contextual conversion triggers',
      'Micro-friction elimination across checkout/forms',
      'Continuous A/B testing of headlines & value propositions'
    ],
    mockup: {
      title: 'Inbound Conversion Funnel Optimization',
      badge: 'CRO Active',
      data: [
        { step: 'Page Landing', conversion: '100%', dropoff: 'Baseline' },
        { step: 'Value Proposition Engagement', conversion: '78.4%', dropoff: '-21.6%' },
        { step: 'Inquiry Form Submission', conversion: '12.8%', dropoff: 'Industry Top Tier' }
      ]
    }
  },
  {
    id: 'automation',
    number: '04',
    name: 'Instant WhatsApp & Lead Routing',
    category: 'Lead Action',
    icon: MessageSquare,
    color: 'emerald',
    tagline: 'Zero lead decay. Contact leads in 60 seconds.',
    summary: 'Leads contacted within 5 minutes are 21 times more likely to convert than those contacted after 30 minutes. We connect your web forms directly to automated WhatsApp notifications, internal team routing (Slack/CRM), and instant qualification dialogues.',
    metrics: [
      { label: 'Speed-to-Lead', val: '< 45 Seconds' },
      { label: 'Contact Rate', val: '92%' },
      { label: 'Lost Inquiries', val: '0%' }
    ],
    features: [
      'Official WhatsApp Business API integration',
      'Instant lead dispatch to sales agents with source attribution',
      'Automated qualification chat bot for after-hours leads',
      'Real-time bi-directional CRM syncing (HubSpot, Zoho, Salesforce)'
    ],
    mockup: {
      title: 'Automated Lead Dispatch Pipeline',
      badge: 'Real-time Event',
      data: [
        { time: '00:00:02', event: 'Web Lead Captured', detail: 'High-Ticket B2B Buyer' },
        { time: '00:00:06', event: 'WhatsApp Notification', detail: 'Sent to Key Sales Rep' },
        { time: '00:00:28', event: 'First Contact Initiated', detail: 'Prospect Responded' }
      ]
    }
  },
  {
    id: 'attribution',
    number: '05',
    name: 'Multi-Touch Attribution',
    category: 'Intelligence',
    icon: BarChart3,
    color: 'cyan',
    tagline: 'Know exactly which rupee generates profit.',
    summary: 'No more guessing where your marketing budget went. We establish transparent, server-side GA4 tracking, first-party cookie attribution, and closed-loop CRM reporting so founders know their exact Customer Acquisition Cost (CAC) and Return on Ad Spend (ROAS).',
    metrics: [
      { label: 'Attribution Model', val: 'Server-Side CAPI' },
      { label: 'Verified ROAS', val: '4.8x Average' },
      { label: 'Reporting Cadence', val: 'Live Dashboard' }
    ],
    features: [
      'Meta Conversions API (CAPI) & Google Enhanced Conversions',
      'Closed-loop offline conversion import from CRM',
      'Transparent live executive dashboard access',
      'Continuous reallocation of ad budget to highest-yield channels'
    ],
    mockup: {
      title: 'Executive Revenue Attribution Dashboard',
      badge: 'Live Data',
      data: [
        { channel: 'High-Intent SEO', spend: 'Fixed Retainer', revenue: '₹14,50,000', roas: '7.2x' },
        { channel: 'Google Search Ads', spend: '₹1,80,000', revenue: '₹9,20,000', roas: '5.1x' },
        { channel: 'Meta Creative Funnel', spend: '₹1,20,000', revenue: '₹4,90,000', roas: '4.0x' }
      ]
    }
  }
];

const ConnectedGrowthEngine = () => {
  const [activeStageId, setActiveStageId] = useState('traffic');
  const activeStage = stages.find(s => s.id === activeStageId) || stages[0];

  return (
    <section className="py-24 lg:py-32 bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden border-y border-slate-200">
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>The Connected Digital Growth Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0F1D] tracking-tight leading-[1.15] mb-6">
            Marketing is not a set of silos. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              It is an integrated revenue machine.
            </span>
          </h2>

          <p className="text-lg text-slate-600 font-normal leading-relaxed">
            Running ads without a fast website wastes money. Building a website without SEO leaves it invisible. Capturing leads without instant WhatsApp automation causes deals to slip. Here is how Codenclick connects every stage into a unified growth pipeline.
          </p>
        </div>

        {/* Step Selector Tabs (Interactive Pipeline Navigation) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {stages.map((stage) => {
            const isActive = stage.id === activeStageId;
            const Icon = stage.icon;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStageId(stage.id)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 relative border cursor-pointer ${
                  isActive
                    ? 'bg-white border-blue-600 shadow-xl shadow-blue-500/10 ring-2 ring-blue-600/20'
                    : 'bg-white/60 hover:bg-white border-slate-200 hover:border-slate-300 text-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                    STAGE {stage.number}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    isActive ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-sm font-bold text-[#0A0F1D] mb-1">
                  {stage.name}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {stage.category}
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activePillIndicator"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Interactive Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="rounded-[2.5rem] bg-white border border-slate-200/90 shadow-2xl shadow-slate-200/50 p-8 lg:p-12 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
          >
            {/* Left Content (Strategic Explanation & Business Context) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
                <span>Phase {activeStage.number} Execution</span>
                <span>•</span>
                <span className="text-blue-600">{activeStage.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0F1D] tracking-tight">
                {activeStage.tagline}
              </h3>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                {activeStage.summary}
              </p>

              {/* Key Features Checklist */}
              <div className="space-y-3 pt-2">
                {activeStage.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Primary Contextual CTA */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A0F1D] hover:bg-blue-600 text-white font-bold text-sm shadow-xl shadow-slate-950/10 transition-all group"
                >
                  <span>Implement this Stage for My Business</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all"
                >
                  View Related Services
                </Link>
              </div>
            </div>

            {/* Right: Live Interactive Visual Mockup / Data Console */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#0A0F1D] text-white p-6 sm:p-8 shadow-2xl border border-slate-800 relative">
                {/* Header of Mockup */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2 font-medium">
                      {activeStage.mockup.title}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold uppercase tracking-wider">
                    {activeStage.mockup.badge}
                  </span>
                </div>

                {/* Key Metric Highlights */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {activeStage.metrics.map((m, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
                        {m.label}
                      </div>
                      <div className="text-base sm:text-lg font-black text-white">
                        {m.val}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Data Rows */}
                <div className="space-y-3 font-mono text-xs">
                  {activeStage.mockup.data.map((row, idx) => (
                    <div 
                      key={idx} 
                      className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/60 flex items-center justify-between text-slate-300"
                    >
                      {row.source && (
                        <>
                          <span className="font-semibold text-white">{row.source}</span>
                          <span className="text-emerald-400">{row.convRate} Conv.</span>
                          <span className="text-slate-400">{row.cpa}</span>
                        </>
                      )}
                      {row.metric && (
                        <>
                          <span className="font-semibold text-white">{row.metric}</span>
                          <span className="text-emerald-400 font-bold">Codenclick: {row.codenclick}</span>
                          <span className="text-slate-500 line-through">Typical: {row.typical}</span>
                        </>
                      )}
                      {row.step && (
                        <>
                          <span className="font-semibold text-white">{row.step}</span>
                          <span className="text-blue-400 font-bold">{row.conversion}</span>
                          <span className="text-emerald-400">{row.dropoff}</span>
                        </>
                      )}
                      {row.event && (
                        <>
                          <span className="text-slate-500">{row.time}</span>
                          <span className="font-semibold text-emerald-400">{row.event}</span>
                          <span className="text-slate-300">{row.detail}</span>
                        </>
                      )}
                      {row.channel && (
                        <>
                          <span className="font-semibold text-white">{row.channel}</span>
                          <span className="text-slate-400">{row.spend}</span>
                          <span className="text-emerald-400 font-bold">{row.roas} ROAS</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                {/* Console Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Pipeline Active & Verifiable</span>
                  </div>
                  <span>Codenclick Growth OS v3.2</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ConnectedGrowthEngine;
