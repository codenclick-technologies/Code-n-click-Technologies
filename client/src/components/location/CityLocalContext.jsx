import React from 'react';
import { AlertCircle, CheckCircle2, MapPin, Building2, TrendingUp, Shield } from 'lucide-react';
import PropTypes from 'prop-types';

const CityLocalContext = ({ city }) => {
  const localContext = city.localContext || {};
  const challenges = city.localChallenges || [];
  const keyHubs = localContext.keyHubs || [];

  return (
    <section className="py-20 bg-[#030014]/60 relative overflow-hidden border-b border-white/5">
      {/* Background visual accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section 1: Why Businesses in [City] Choose Codenclick */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              Local Market Dynamics
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Why Businesses in {city.city} Choose Codenclick Technologies
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {localContext.overview || `${city.city} presents a distinct commercial landscape where generic marketing templates consistently underdeliver. Companies here need digital growth strategies that account for specific regional buyer psychology, local auction dynamics, and rigorous search competition.`}
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Engineering-First Mindset:</strong> We build on modern web frameworks (React, Next.js) rather than slow, generic templates.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Commercial Attribution:</strong> We optimize for verified leads, phone calls, and pipeline revenue—not inflated vanity impressions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Zero Lock-In Contracts:</strong> We retain clients through measurable monthly performance and transparent sprint reporting.
                </p>
              </div>
            </div>
          </div>

          {/* Key Commercial Hubs Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative">
              <div className="flex items-center gap-2 mb-4 text-cyan-400">
                <Building2 className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">Commercial Footprint & Hubs in {city.city}</h3>
              </div>

              <p className="text-xs text-gray-400 mb-6">
                Our campaigns are specifically calibrated for consumer and enterprise decision-makers across {city.city}&apos;s primary commercial corridors:
              </p>

              <div className="space-y-3">
                {keyHubs.map((hub) => (
                  <div
                    key={hub}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-gray-200"
                  >
                    <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>{hub}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span>Tailored Geo-fenced Bidding</span>
                <span className="text-emerald-400 font-mono">100% Granular Targeting</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Local Business Challenges We Solve */}
        <div className="space-y-8">
          <div className="max-w-3xl space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Navigating Digital Challenges Specific to {city.city}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Every city presents distinct roadblocks in search ranking, bidding economics, and buyer behavior. Here is how we engineer solutions around them:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <div
                key={challenge.title}
                className="rounded-xl bg-white/[0.02] border border-white/10 p-5 sm:p-6 hover:border-white/20 transition-all space-y-3"
              >
                <div className="flex items-center gap-2.5 text-amber-400">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <h4 className="text-base font-semibold text-white">
                    {challenge.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

CityLocalContext.propTypes = {
  city: PropTypes.shape({
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    localContext: PropTypes.shape({
      overview: PropTypes.string,
      keyHubs: PropTypes.arrayOf(PropTypes.string)
    }),
    localChallenges: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      })
    )
  }).isRequired
};

export default CityLocalContext;
