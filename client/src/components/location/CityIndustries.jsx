import React from 'react';
import { Briefcase, ArrowUpRight } from 'lucide-react';
import PropTypes from 'prop-types';

const CityIndustries = ({ cityName, industries = [] }) => {
  if (!industries || industries.length === 0) return null;

  return (
    <section className="py-20 bg-[#020205] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Sector Specialization
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Industries We Scale Across {cityName}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Our search models and performance campaigns are custom-calibrated for the unique sales cycles and regulatory nuances of each commercial vertical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, index) => (
            <div
              key={ind.name}
              className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-gray-400">Vertical 0{index + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {ind.name}
                </h3>

                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span>Inbound Demand Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

CityIndustries.propTypes = {
  cityName: PropTypes.string.isRequired,
  industries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  )
};

export default CityIndustries;
