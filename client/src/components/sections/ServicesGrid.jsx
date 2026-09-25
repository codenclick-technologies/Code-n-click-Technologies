import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Globe, 
  BarChart3, 
  Layout, 
  Search, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  Zap,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Code2,
    title: 'Custom Web Applications',
    description: 'We don’t just write code; we build your primary digital revenue engine. Fast, scalable, and engineered to outperform your competitors.',
    link: '/services/web-development',
    color: 'from-blue-600 to-indigo-600',
    lightBg: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
    tag: 'Web Engineering',
    features: ['React 19 & Modern Stack', 'Core Web Vitals 99+', 'Custom CMS Integrations']
  },
  {
    icon: Cpu,
    title: 'Smart SaaS & Cloud Tools',
    description: 'Transform your vision into robust, multi-tenant software ready to onboard thousands of daily users without breaking a sweat.',
    link: '/services/saas-development',
    color: 'from-cyan-500 to-blue-600',
    lightBg: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    textColor: 'text-cyan-600',
    tag: 'Cloud Native',
    features: ['Multi-Tenant Architecture', 'Stripe/Razorpay Billing', 'Automated Microservices']
  },
  {
    icon: Globe,
    title: 'Social & Meta Ads Engine',
    description: 'Stop burning budget on vanity clicks. We build high-converting Meta funnels that target real decision-makers and drive predictable ROAS.',
    link: '/services/meta-ads',
    color: 'from-purple-600 to-pink-600',
    lightBg: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600',
    tag: 'Paid Acquisition',
    features: ['Hyper-Targeted Lookalikes', 'High-Converting Creatives', 'Server-Side CAPI Tracking']
  },
  {
    icon: BarChart3,
    title: 'Google Search & P-Max Ads',
    description: 'Show up right when your prospective customers are searching to buy. Eliminate wasted spend with precision negative bidding shields.',
    link: '/services/google-ads',
    color: 'from-emerald-600 to-teal-600',
    lightBg: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-600',
    tag: 'Intent Capture',
    features: ['Zero-Waste Negative Bidding', 'High-Intent Search Ads', 'Transparent ROI Reporting']
  },
  {
    icon: Layout,
    title: 'High-Converting UI/UX Design',
    description: 'World-class aesthetic meets conversion rate psychology. We craft intuitive user journeys that turn casual visitors into loyal customers.',
    link: '/services/graphic-design',
    color: 'from-pink-600 to-rose-600',
    lightBg: 'bg-pink-50',
    borderColor: 'border-pink-200',
    textColor: 'text-pink-600',
    tag: 'Conversion Design',
    features: ['Design Systems & Figma', 'Interactive Micro-Animations', 'User Journey Optimization']
  },
  {
    icon: Search,
    title: 'Top 1% SEO & Generative Search',
    description: 'Rank for high-intent commercial keywords and get cited in Google AI Overviews & Perplexity. Build a permanent organic moat.',
    link: '/services/seo',
    color: 'from-amber-500 to-orange-600',
    lightBg: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-600',
    tag: 'AEO & GEO Authority',
    features: ['Technical & Semantic SEO', 'AEO Question Answering', '18+ City Regional Hubs']
  },
];

const ServicesGrid = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#FAFBFC] border-y border-slate-200/80 text-slate-900 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>End-to-End Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 font-outfit"
          >
            Everything You Need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              Build, Launch & Scale
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            We don’t believe in bloated agency packages. Every solution is tailored to your business model, target audience, and growth milestones.
          </motion.p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-500/50 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${service.lightBg} ${service.borderColor} border flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm`}>
                      <Icon className={`w-7 h-7 ${service.textColor}`} />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold uppercase tracking-wider border border-slate-200/70">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Pills */}
                  <div className="space-y-2 pb-6 border-b border-slate-100">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-6">
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 group-hover:text-blue-600 transition-colors"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Regional City SEO Hub Quick Navigation */}
        <div className="mt-16 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              NATIONAL AGENCY NETWORK
            </p>
            <h4 className="text-base font-bold text-slate-900">
              Delivering Digital Growth Across 18+ Major Indian Tech Hubs
            </h4>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { name: 'Delhi', slug: 'delhi' },
              { name: 'Mumbai', slug: 'mumbai' },
              { name: 'Bangalore', slug: 'bangalore' },
              { name: 'Hyderabad', slug: 'hyderabad' },
              { name: 'Pune', slug: 'pune' },
              { name: 'Noida', slug: 'noida' },
              { name: 'Gurgaon', slug: 'gurgaon' },
            ].map((city) => (
              <Link
                key={city.slug}
                to={`/digital-marketing-agency/${city.slug}`}
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200/70 hover:border-blue-200 transition-all"
              >
                {city.name}
              </Link>
            ))}
            <Link
              to="/digital-marketing-agency"
              className="px-3 py-1.5 rounded-full text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              <span>+ View all 18 hubs</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default memo(ServicesGrid);
