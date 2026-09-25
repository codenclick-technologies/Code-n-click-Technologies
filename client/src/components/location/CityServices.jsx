import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Globe, Target, Code, Cpu, Smartphone, ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';

const CityServices = ({ cityName, servicesSectionRef }) => {
  const serviceCards = [
    {
      icon: Search,
      title: `Search Engine Optimization (SEO) in ${cityName}`,
      description: `Target high-intent commercial keywords across ${cityName} and nationwide. We combine deep technical SEO, structured content architecture, and authority acquisition to build permanent organic search pipelines.`,
      link: '/services/seo',
      tag: 'Organic Growth',
      color: 'from-emerald-500/20 to-teal-500/5',
      iconColor: 'text-emerald-400'
    },
    {
      icon: Target,
      title: `Google Ads & Paid Search in ${cityName}`,
      description: `Stop paying for unqualified clicks. We structure intent-driven Google Search, Shopping, and Display campaigns with negative keyword fencing and automated bid strategies for high ROAS.`,
      link: '/services/google-ads',
      tag: 'Instant Intent',
      color: 'from-blue-500/20 to-indigo-500/5',
      iconColor: 'text-blue-400'
    },
    {
      icon: Globe,
      title: `Meta Ads & Paid Social in ${cityName}`,
      description: `High-converting visual storytelling on Instagram and Facebook. We leverage first-party audience signals, rapid creative testing, and Meta CAPI to generate scalable qualified leads and customer acquisitions.`,
      link: '/services/meta-ads',
      tag: 'Demand Generation',
      color: 'from-pink-500/20 to-purple-500/5',
      iconColor: 'text-pink-400'
    },
    {
      icon: Code,
      title: `High-Performance Web Development`,
      description: `Slow templates kill conversions. We build modern, headless web applications using React, Next.js, and high-speed CSS architectures engineered for sub-second Core Web Vitals and high lead capture.`,
      link: '/services/web-development',
      tag: 'Conversion Engine',
      color: 'from-cyan-500/20 to-blue-500/5',
      iconColor: 'text-cyan-400'
    },
    {
      icon: Cpu,
      title: `AI Automation & Growth Agents`,
      description: `Automate lead qualification, CRM syncing, customer follow-ups, and data routing using custom AI workflows and WhatsApp integrations so no inquiry from ${cityName} is ever missed.`,
      link: '/services/saas-development',
      tag: 'Operational Velocity',
      color: 'from-purple-500/20 to-indigo-500/5',
      iconColor: 'text-purple-400'
    },
    {
      icon: Smartphone,
      title: `SaaS & Custom Application Engineering`,
      description: `Transform ideas into enterprise software. We design and develop full-stack SaaS MVPs, client portals, and mobile-friendly applications with secure API integrations.`,
      link: '/services/saas-development',
      tag: 'Product Engineering',
      color: 'from-amber-500/20 to-orange-500/5',
      iconColor: 'text-amber-400'
    }
  ];

  return (
    <section ref={servicesSectionRef} className="py-20 bg-[#020205] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Capabilities Engineered for Growth
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Integrated Growth Services for Businesses in {cityName}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            We don’t treat channels as disconnected silos. We integrate technical engineering, organic search, performance advertising, and automation into a unified customer acquisition system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceCards.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-7 hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle gradient hover wash */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${service.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10 pt-6 mt-4 border-t border-white/5">
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore {service.tag}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

CityServices.propTypes = {
  cityName: PropTypes.string.isRequired,
  servicesSectionRef: PropTypes.object
};

export default CityServices;
