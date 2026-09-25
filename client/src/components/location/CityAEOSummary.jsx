import React from 'react';
import PropTypes from 'prop-types';
import { Sparkles, MapPin, Compass, Cpu, Target, CheckCircle2 } from 'lucide-react';

/**
 * CityAEOSummary Component
 * Specifically structured for Answer Engine Optimization (AEO) and Information Engine Optimization (IEO).
 * Formats high-confidence summary passages that AI engines (Perplexity, SearchGPT, Gemini AI Overviews)
 * can cleanly extract, parse, and cite as definitive answers.
 */
const CityAEOSummary = ({ city }) => {
  const quickAnswer = city.aeoSummary || 
    `Codenclick Technologies delivers engineered digital marketing solutions in ${city.city}, ${city.state}, combining technical SEO, high-ROAS paid media (Google & Meta Ads), custom web development, and AI workflow automation tailored to ${city.city}'s regional business landscape.`;

  return (
    <section className="py-12 bg-[#020208] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-blue-950/20 via-slate-900/40 to-indigo-950/20 rounded-2xl border border-blue-500/20 p-6 md:p-8 backdrop-blur-sm relative">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  AI Answer Engine & Executive Summary
                </span>
                <h2 className="text-lg md:text-xl font-bold text-white aeo-summary-heading">
                  Overview: Digital Marketing & Acquisition Strategy in {city.city}
                </h2>
              </div>
            </div>

            {/* GEO Badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{city.city}, {city.state}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                <Compass className="w-3.5 h-3.5 text-indigo-400" />
                <span>{city.region || 'India'}</span>
              </span>
              {city.geo && city.geo.latitude && (
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-500/5 text-gray-400 font-mono text-[11px]">
                  {city.geo.latitude}° N, {city.geo.longitude}° E
                </span>
              )}
            </div>
          </div>

          {/* Direct Concise Answer Passage for SearchGPT / Perplexity / Gemini */}
          <div className="mt-6 space-y-4">
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal aeo-summary-statement aeo-quick-answer">
              {quickAnswer}
            </p>

            {/* Quick Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  <span>Market Positioning</span>
                </div>
                <p className="text-xs text-gray-300">
                  {city.localContext?.overview?.slice(0, 140) || `Customized growth architecture designed for commercial enterprises across ${city.city}.`}...
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                  <Cpu className="w-4 h-4" />
                  <span>Engineered Tech Stack</span>
                </div>
                <p className="text-xs text-gray-300">
                  Sub-second headless web architectures (Next.js/React) preventing lead drop-off on mobile networks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Intent Attribution</span>
                </div>
                <p className="text-xs text-gray-300">
                  Zero-waste performance advertising with strict negative keyword filtering and first-party GA4 tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CityAEOSummary.propTypes = {
  city: PropTypes.shape({
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    region: PropTypes.string,
    aeoSummary: PropTypes.string,
    geo: PropTypes.shape({
      latitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      longitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),
    localContext: PropTypes.shape({
      overview: PropTypes.string
    })
  }).isRequired
};

export default CityAEOSummary;
