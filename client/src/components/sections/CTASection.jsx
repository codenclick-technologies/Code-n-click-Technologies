import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Lock, Headphones } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
      {/* Decorative SVG flourish */}
      <svg className="absolute left-0 -top-20 w-full h-40 opacity-10 pointer-events-none" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M0 96L80 112C160 128 320 160 480 176C640 192 800 192 960 176C1120 160 1280 128 1360 112L1440 96V0H1360C1280 0 1120 0 960 0C800 0 640 0 480 0C320 0 160 0 80 0H0V96Z" fill="url(#grad)" />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.12" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 sm:px-6 lg:px-0"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold text-sm">🚀 Limited Time</span>
              <span className="text-xs text-gray-400">Free strategy call • Slots filling fast</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">Ready to Transform Your Business?</h2>

            <p className="text-lg text-gray-300 mb-6 max-w-xl">
              Book a focused strategy session — no sales pressure. We'll audit your funnel, identify 3 high-impact wins, and map a growth plan tailored to your audience and budget.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="flex-none w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white">
                  <Zap size={18} />
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">Quick 15-min Call</div>
                  <div className="text-xs text-gray-400">Actionable recommendations</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-none w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center text-white">
                  <Lock size={18} />
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">100% Confidential</div>
                  <div className="text-xs text-gray-400">Secure & NDA-friendly</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-none w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center text-white">
                  <Headphones size={18} />
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">Expert Guidance</div>
                  <div className="text-xs text-gray-400">Senior team handoff</div>
                </div>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 text-white font-semibold rounded-full shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-400/20"
                aria-label="Get free consultation"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="/portfolio"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 text-white/90 rounded-full hover:bg-white/5 justify-center"
                aria-label="View our portfolio"
              >
                View Portfolio
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Feature card with animated border and micro-interactions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 sm:px-6 lg:px-0"
          >
            <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600">
              <div className="rounded-3xl bg-gradient-to-br from-gray-900/95 to-gray-950/95 backdrop-blur-md p-8 h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-none w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white text-2xl shadow-xl">🏆</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Audit + Quick Wins</h3>
                    <p className="text-gray-300 text-sm mt-2">We audit your funnel and hand over a prioritized roadmap with immediate-impact experiments.</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-900/40 rounded-lg border border-white/6">
                    <div className="text-xs text-gray-400">Expected Outcome</div>
                    <div className="text-lg font-bold text-white mt-2">3x Conversions</div>
                    <div className="text-xs text-gray-400 mt-1">With CRO & targeted experiments</div>
                  </div>

                  <div className="p-4 bg-gray-900/40 rounded-lg border border-white/6">
                    <div className="text-xs text-gray-400">Timeframe</div>
                    <div className="text-lg font-bold text-white mt-2">90 Days</div>
                    <div className="text-xs text-gray-400 mt-1">Roadmap with sprints & measurable milestones</div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <a href="/case-studies" className="text-sm text-cyan-300 font-semibold hover:underline">See case studies →</a>
                  <span className="text-xs text-gray-400">·</span>
                  <a href="/contact" className="text-sm text-gray-300">Schedule a call</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Subtext */}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-10 text-center text-sm text-gray-500">
          No spam, no commitments. We respond within 24 hours and respect your privacy.
        </motion.p>
      </div>
    </section>
  );
};

export default CTASection;
