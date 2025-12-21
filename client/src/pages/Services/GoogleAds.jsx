import React from 'react';
import SEOHead from '../../components/utils/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  BarChart2, 
  Target, 
  ShoppingBag, 
  MapPin, 
  ArrowRight,
  TrendingUp,
  MousePointer,
  RefreshCw,
  CheckCircle2,
  Zap
} from 'lucide-react';

const GoogleAds = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <Search className="w-8 h-8 text-yellow-500" />,
      title: "Search Campaigns",
      description: "Capture high-intent customers exactly when they're searching for your products or services."
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-orange-500" />,
      title: "Google Shopping",
      description: "Showcase your inventory with rich product listings that drive qualified e-commerce sales."
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: "Display Advertising",
      description: "Build brand awareness with visual ads across millions of websites and apps in the Google Network."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-blue-500" />,
      title: "Remarketing",
      description: "Stay top-of-mind by showing relevant ads to users who have previously visited your site."
    },
    {
      icon: <MapPin className="w-8 h-8 text-green-500" />,
      title: "Local Services Ads",
      description: "Connect with local customers in your area who are ready to book your services now."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "Performance Max",
      description: "Leverage Google's AI to access all inventory from a single campaign for maximum conversion value."
    }
  ];

  const techStack = [
    { name: "Google Ads", category: "Platform" },
    { name: "GA4", category: "Analytics" },
    { name: "Tag Manager", category: "Tracking" },
    { name: "Looker Studio", category: "Reporting" },
    { name: "Merchant Center", category: "E-commerce" },
    { name: "Keyword Planner", category: "Research" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Keyword Research",
      description: "Identifying high-value search terms with commercial intent and low competition."
    },
    {
      number: "02",
      title: "Campaign Setup",
      description: "Structuring ad groups, writing compelling copy, and configuring precise targeting."
    },
    {
      number: "03",
      title: "Bid Management",
      description: "Optimizing bids to maximize impression share while maintaining a profitable CPA."
    },
    {
      number: "04",
      title: "Conversion Optimization",
      description: "Testing landing pages and ad variations to improve quality scores and conversion rates."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-hidden">
      <SEOHead
        title="Google Ads Services (PPC) | Code'N'Click"
        description="Expert Google Ads management. We create high-ROI search, display, and shopping campaigns to drive qualified traffic and sales."
        keywords="Best Google Ads Agency Delhi, Best Google Ads Agency Faridabad, Premium PPC Services Delhi, Premium PPC Services Faridabad, Top Google Ads Company Delhi, No1 PPC Management Faridabad"
        canonical="/services/google-ads"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/20 via-[#030014] to-[#030014] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
           <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
           <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-yellow-500/30 text-yellow-400 text-sm font-medium mb-8"
          >
            <MousePointer className="w-4 h-4" />
            <span>Pay Only For Results</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-100 to-gray-400"
          >
            Capture High-Intent <br className="hidden md:block" />
            <span className="text-yellow-500">Traffic Instantly</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
             Skip the wait. Get your business in front of customers exactly when they are searching for what you offer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-yellow-500/25 flex items-center justify-center gap-2">
              Start PPC Campaign <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 glass-button text-white rounded-xl font-bold flex items-center justify-center gap-2">
              Success Stories
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">PPC Solutions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From Search to Shopping, we master every Google Ads channel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-panel glass-card-shine p-8 rounded-3xl border border-white/10 group"
              >
                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-yellow-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">PPC Tools</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="glass-button px-6 py-3 rounded-full flex items-center gap-3 text-gray-300 hover:text-white border border-white/5"
              >
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="font-semibold">{tech.name}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-400">{tech.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Process Section */}
       <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Campaign Strategy</h2>
              <p className="text-xl text-gray-400 mb-8">
                Strict optimization to lowering your CPA and increasing conversions.
              </p>
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex gap-6"
                  >
                    <div className="text-5xl font-bold text-white/10">{step.number}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full" />
              <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10">
                 <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                       <CheckCircle2 className="text-green-400" />
                       <span className="text-gray-300 font-medium">9-10/10 Quality Scores</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                       <CheckCircle2 className="text-green-400" />
                       <span className="text-gray-300 font-medium">Conversion Tracking Setup</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                       <CheckCircle2 className="text-green-400" />
                       <span className="text-gray-300 font-medium">A/B Testing Landing Pages</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto glass-panel rounded-[3rem] p-12 text-center relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Maximize Your Budget</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stop wasting money on irrelevant clicks. Get high-quality leads today.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform">
              Book PPC Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GoogleAds;
