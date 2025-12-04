import React from 'react';
import { Helmet } from 'react-helmet-async';
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
  Globe,
  PieChart,
  RefreshCw,
  Award
} from 'lucide-react';

const GoogleAds = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
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
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      <Helmet>
        <title>Google Ads Services (PPC) | Code'N'Click</title>
        <meta name="description" content="Expert Google Ads management. We create high-ROI search, display, and shopping campaigns to drive qualified traffic and sales." />
        <meta name="keywords" content="google ads, ppc management, search advertising, display ads, google shopping, sem, pay per click" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "PPC Advertising",
              "provider": {
                "@type": "Organization",
                "name": "Code'N'Click"
              },
              "description": "Capture high-intent users with targeted search and display campaigns optimized for ROI.",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "Custom Quote"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/20 via-gray-950 to-gray-950 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
           <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
           <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-900/30 border border-yellow-500/30 text-yellow-400 text-sm font-medium mb-8"
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
            Get in front of customers exactly when they are searching for what you offer. 
            We manage your Google Ads to maximize visibility and ROI.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-yellow-600 rounded-full hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 focus:ring-offset-gray-900"
            >
              Get a Free Audit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-300 transition-all duration-200 bg-gray-800/50 border border-gray-700 rounded-full hover:bg-gray-800 hover:text-white backdrop-blur-sm"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-10 border-y border-gray-800/50 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-wider mb-8">Google Partner Ecosystem</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {techStack.map((tech, index) => (
               <div key={index} className="flex items-center gap-2">
                 <span className="text-lg font-semibold text-gray-300">{tech.name}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive PPC Management</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We handle everything from keyword research to landing page optimization.</p>
          </div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="group p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-yellow-500/50 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="mb-6 p-3 rounded-xl bg-gray-950 inline-block border border-gray-800 group-hover:border-yellow-500/30 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Data-Driven Results</h2>
              <p className="text-gray-400 mb-8 text-lg">
                We don't guess; we test. Our scientific approach to PPC ensures your budget is always working hard for you.
              </p>
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-900/20 border border-yellow-500/30 flex items-center justify-center text-yellow-400 font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full" />
              <div className="relative rounded-2xl border border-gray-800 bg-gray-950/80 backdrop-blur-xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <Target className="w-6 h-6 text-red-400" />
                    <div>
                      <div className="font-semibold">Precise Targeting</div>
                      <div className="text-sm text-gray-400">Right person, right time</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <PieChart className="w-6 h-6 text-blue-400" />
                    <div>
                      <div className="font-semibold">Transparent Reporting</div>
                      <div className="text-sm text-gray-400">Live dashboards & insights</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <Award className="w-6 h-6 text-green-400" />
                    <div>
                      <div className="font-semibold">Certified Experts</div>
                      <div className="text-sm text-gray-400">Google Partner status</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-yellow-500/30">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                How much does Google Ads cost?
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                You set your own budget. You can start small and scale up. We charge a management fee based on your ad spend, ensuring our incentives are aligned with your growth.
              </div>
            </details>
            <details className="group bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-yellow-500/30">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                What is a good Quality Score?
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Quality Score is a diagnostic tool meant to give you a sense of how well your ad quality compares to other advertisers. A score of 7-10 is considered good and can lower your cost per click.
              </div>
            </details>
            <details className="group bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-yellow-500/30">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                Do I need a landing page?
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Highly recommended. Sending traffic to a dedicated landing page that matches the ad's intent significantly increases conversion rates compared to sending traffic to your homepage.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-600/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Dominate Search?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Get a free audit of your current campaigns or a strategy session for a new launch.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-yellow-600 rounded-full hover:bg-yellow-700 hover:scale-105 shadow-lg shadow-yellow-600/30"
          >
            Claim Your Free Audit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GoogleAds;
