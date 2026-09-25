import React from 'react';
import PropTypes from 'prop-types';

const defaultRoadmap = [
  {
    step: "01",
    title: "Market & Competitor Forensic Audit",
    description: "We analyze local competitors, discover high-intent keyword gaps, and audit your conversion funnels to uncover hidden opportunities."
  },
  {
    step: "02",
    title: "High-Performance Digital Foundation",
    description: "We deploy modern web architectures optimized for Core Web Vitals, conversion mechanics, and friction-free inquiry capture."
  },
  {
    step: "03",
    title: "Omnichannel Acquisition Engine",
    description: "We execute technical SEO for compounding organic search authority paired with precision Google and Meta ad campaigns."
  },
  {
    step: "04",
    title: "AI Automation & Lead Pipeline Acceleration",
    description: "We integrate automated lead scoring, instant messaging notifications, and continuous conversion rate optimization."
  }
];

const CityProcess = ({ cityName, roadmap = [] }) => {
  const steps = roadmap && roadmap.length > 0 ? roadmap : defaultRoadmap;

  return (
    <section className="py-20 bg-[#030014]/40 relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Execution Framework
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            How Codenclick Approaches Growth in {cityName}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            A disciplined, data-backed 4-stage engineering and performance marketing methodology designed to turn traffic into qualified pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl bg-white/[0.02] border border-white/10 p-6 hover:border-white/20 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  {step.step}
                </span>

                <h3 className="text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center text-xs text-gray-400 font-mono">
                <span>Phase {step.step} Milestone</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

CityProcess.propTypes = {
  cityName: PropTypes.string.isRequired,
  roadmap: PropTypes.arrayOf(
    PropTypes.shape({
      step: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  )
};

export default CityProcess;
