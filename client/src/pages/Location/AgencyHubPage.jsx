import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { getPublishedCities, getDraftCities } from '../../data/cities';
import SEOHead from '../../components/utils/SEOHead';
import CityBreadcrumbs from '../../components/location/CityBreadcrumbs';
import { MapPin, ArrowRight, ShieldCheck, Zap, TrendingUp, Search, Target, Globe, Code, Cpu, ChevronRight } from 'lucide-react';

const AgencyHubPage = () => {
  const publishedCities = getPublishedCities();
  const draftCities = getDraftCities();
  const ctaRef = useRef(null);

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Digital Marketing Agency', path: '/digital-marketing-agency' }
  ];

  const hubFaqs = [
    {
      question: "What makes Codenclick different from traditional digital marketing agencies?",
      answer: "We are software engineers and performance marketers. Rather than treating marketing as isolated design or ad buying, we build end-to-end technical growth systems: custom React/Next.js web platforms, technical SEO architecture, first-party data attribution, and automated AI lead pipelines."
    },
    {
      question: "How do your city-specific digital marketing strategies work?",
      answer: "Each regional market in India has distinct commercial dynamics, search competition, and consumer psychology. We calibrate geo-fenced bidding, create hyper-local semantic content clusters, and solve specific market challenges (such as high CAC in Mumbai or industrial B2B search in Faridabad) to maximize ROI."
    },
    {
      question: "Do you service clients outside the listed cities?",
      answer: "Yes. While our published location hubs represent regions where we have deep commercial and competitor mapping, our digital marketing, web engineering, and SEO services operate Pan-India and internationally."
    }
  ];

  return (
    <div className="bg-[#020205] text-white min-h-screen">
      <SEOHead
        title="Digital Marketing Agency | Performance Marketing & SEO | Codenclick"
        description="Codenclick is a performance-driven digital marketing agency helping businesses scale across India. We deliver technical SEO, high-ROAS paid ads, custom web apps, and AI automation."
        canonicalPath="/digital-marketing-agency"
        breadcrumbs={breadcrumbs}
        faqs={hubFaqs}
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-purple-600/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <CityBreadcrumbs items={breadcrumbs.slice(1)} />

          <div className="max-w-3xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              National Growth Infrastructure
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Digital Marketing Agency & Growth Engineering
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              We help ambitious companies across India build dominant search visibility, run profitable paid customer acquisition, and scale revenue with modern web engineering and AI automation.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="button"
                onClick={() => ctaRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2"
              >
                <span>Request Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Published Cities Directory */}
      <section className="py-20 bg-[#030014]/60 relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              Regional Commercial Hubs
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Explore Our City-Specific Growth Hubs
            </h2>
            <p className="text-gray-400 text-base">
              Every city landing page features genuine local market intelligence, verified competitor dynamics, and tailored acquisition strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedCities.map((c) => (
              <Link
                key={c.slug}
                to={`/digital-marketing-agency/${c.slug}`}
                className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-7 hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-gray-400 px-2 py-0.5 rounded bg-white/5">
                      {c.state}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {c.city}
                    </h3>
                    <p className="text-xs text-blue-400 font-medium mt-0.5">
                      {c.region}
                    </p>
                  </div>

                  <p className="text-sm text-gray-400 font-light leading-relaxed line-clamp-3">
                    {c.heroDescription}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-sm font-medium text-blue-400 group-hover:text-blue-300">
                  <span>View {c.city} Strategy</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* Strategic Pan-India Footprint Note */}
          {draftCities.length > 0 ? (
            <div className="mt-16 p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center max-w-3xl mx-auto space-y-3">
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                National Expansion Pipeline ({draftCities.length} Additional Cities Staged)
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                We uphold strict programmatic quality standards. New commercial hubs are published sequentially as dedicated market audits are finalized.
              </p>
            </div>
          ) : (
            <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-blue-950/20 via-slate-900/40 to-indigo-950/20 border border-blue-500/20 text-center max-w-3xl mx-auto space-y-3">
              <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                Delhi NCR Base & Pan-India High-Velocity Execution
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Headquartered in Delhi NCR with dedicated regional intelligence across India's top 20 economic powerhouses. We serve corporate enterprises, high-growth startups, and manufacturers nationwide.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-[#020205] relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Our Core Growth Capabilities
            </h2>
            <p className="text-gray-400 text-base">
              Explore our core service lines built to drive sustainable organic authority and high-return advertising.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/services/seo" className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all space-y-3 block">
              <Search className="w-6 h-6 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Technical & On-Page SEO</h3>
              <p className="text-sm text-gray-400">Dominate search engine rankings with semantic topic clusters, Core Web Vitals optimization, and white-hat authority.</p>
            </Link>

            <Link to="/services/google-ads" className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all space-y-3 block">
              <Target className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Google Ads Management</h3>
              <p className="text-sm text-gray-400">High-intent search, shopping, and display campaigns engineered to minimize wasted ad spend and maximize ROAS.</p>
            </Link>

            <Link to="/services/meta-ads" className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all space-y-3 block">
              <Globe className="w-6 h-6 text-pink-400" />
              <h3 className="text-lg font-bold text-white">Meta Ads & Social Growth</h3>
              <p className="text-sm text-gray-400">Scroll-stopping creative testing, lookalike modeling, and full-funnel acquisition on Instagram and Facebook.</p>
            </Link>

            <Link to="/services/web-development" className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all space-y-3 block">
              <Code className="w-6 h-6 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">High-Speed Web Development</h3>
              <p className="text-sm text-gray-400">Custom headless websites built on React and Next.js designed for lightning speed and conversion architecture.</p>
            </Link>

            <Link to="/services/saas-development" className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all space-y-3 block">
              <Cpu className="w-6 h-6 text-purple-400" />
              <h3 className="text-lg font-bold text-white">AI Automation & Custom Apps</h3>
              <p className="text-sm text-gray-400">Custom AI workflow agents, automated CRM lead routing, and scalable SaaS product engineering.</p>
            </Link>

            <Link to="/portfolio" className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all space-y-3 block">
              <TrendingUp className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Verified Client Portfolio</h3>
              <p className="text-sm text-gray-400">Explore authentic case studies and engineering milestones built for high-growth Indian and global brands.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Master Consultation CTA */}
      <section ref={ctaRef} className="py-20 bg-[#030014] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Scale Your Digital Acquisition Engine
          </h2>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Whether you operate in Delhi NCR, Mumbai, Bangalore, or nationwide, our senior growth architects are ready to audit your current channels and build a predictable growth roadmap.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium shadow-xl shadow-blue-500/25 transition-all text-base"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgencyHubPage;
