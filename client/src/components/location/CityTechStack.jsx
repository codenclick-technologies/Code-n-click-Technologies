import React from 'react';
import PropTypes from 'prop-types';

const tools = [
  { name: 'Google Search Console', category: 'Search Intelligence' },
  { name: 'Ahrefs & Semrush', category: 'Competitive Analysis' },
  { name: 'Google Analytics 4', category: 'Attribution & Tracking' },
  { name: 'Meta Graph API', category: 'Paid Social Performance' },
  { name: 'React 19 & Next.js', category: 'Headless Web Core' },
  { name: 'Tailwind CSS', category: 'High-Speed UI' },
  { name: 'Node.js & Python', category: 'Automation & AI' },
  { name: 'Vercel Edge Network', category: 'Sub-Second CDN' }
];

const CityTechStack = ({ cityName }) => {
  return (
    <section className="py-16 bg-[#020205] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Our Modern Growth & Technology Stack
          </h3>
          <p className="text-sm text-gray-400">
            We build and scale digital pipelines in {cityName} using industry-leading performance analytics and modern web frameworks.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors text-center space-y-1"
            >
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                {tool.category}
              </div>
              <div className="text-sm font-semibold text-gray-200">
                {tool.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

CityTechStack.propTypes = {
  cityName: PropTypes.string.isRequired
};

export default CityTechStack;
