import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Cpu, ShieldCheck, Zap } from 'lucide-react';
import PropTypes from 'prop-types';
import CityBreadcrumbs from './CityBreadcrumbs';

const CityHero = ({ city, onCtaClick, onServicesClick }) => {
  const breadcrumbItems = [
    { name: 'Digital Marketing Agency', path: '/digital-marketing-agency' },
    { name: city.city, path: `/digital-marketing-agency/${city.slug}` }
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-white/5">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <CityBreadcrumbs items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-4">
          {/* Left Column: Headings, Value Proposition, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs md:text-sm font-medium text-gray-300">
                {city.state}, {city.country} • Regional Growth Hub
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]"
            >
              Digital Marketing Agency in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                {city.city}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl font-light"
            >
              {city.heroDescription || "Growth-focused digital marketing, SEO, paid advertising, websites and AI-powered automation designed to help businesses build visibility, generate qualified leads and scale."}
            </motion.p>

            {/* Micro Feature Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-gray-400"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Lock-in Retainers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span>AI & Automation Stack</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Direct Revenue Focus</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <button
                type="button"
                onClick={onCtaClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium shadow-lg shadow-blue-500/25 transition-all duration-200 active:scale-[0.98]"
              >
                <span>Get a Growth Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onServicesClick}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 font-medium transition-all duration-200"
              >
                <span>Explore Our Services</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Abstract Technology & Performance Dashboard Visual */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5 sm:p-6 shadow-2xl overflow-hidden"
            >
              {/* Inner ambient glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Header Telemetry */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">
                    {city.city} Growth Node • Live
                  </span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  GA4 + CRM Sync
                </span>
              </div>

              {/* Metric Cards Grid */}
              <div className="grid grid-cols-2 gap-3.5 mb-5">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs text-gray-400 mb-1 flex items-center justify-between">
                    <span>Search Visibility</span>
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xl font-bold text-white">Top 3</div>
                  <div className="text-[11px] text-emerald-400 mt-1">High-Intent Keywords</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs text-gray-400 mb-1 flex items-center justify-between">
                    <span>Target CAC</span>
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="text-xl font-bold text-white">Optimized</div>
                  <div className="text-[11px] text-cyan-400 mt-1">First-Party Lead Scoring</div>
                </div>
              </div>

              {/* Visualized Acquisition Pipeline */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-3">
                <div className="text-xs text-gray-400 font-medium flex items-center justify-between">
                  <span>Full-Funnel Infrastructure</span>
                  <span className="text-[11px] text-blue-400 font-mono">100% Attributed</span>
                </div>

                {/* Progress bars representing the stack */}
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-[11px] text-gray-300 mb-1">
                      <span>Technical SEO & Authority</span>
                      <span className="text-emerald-400 font-mono">Organic Inbound</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[92%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-gray-300 mb-1">
                      <span>Performance Google & Meta Ads</span>
                      <span className="text-blue-400 font-mono">High ROAS Bidding</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-400 w-[88%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-gray-300 mb-1">
                      <span>Next.js Headless Conversion Engine</span>
                      <span className="text-purple-400 font-mono">&lt; 0.8s LCP Speed</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-400 w-[96%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                <span>Enterprise Attribution Framework</span>
                <span className="text-gray-300 font-mono">Codenclick Engine</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

CityHero.propTypes = {
  city: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    heroDescription: PropTypes.string
  }).isRequired,
  onCtaClick: PropTypes.func.isRequired,
  onServicesClick: PropTypes.func.isRequired
};

export default CityHero;
