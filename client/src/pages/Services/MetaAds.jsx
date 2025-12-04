import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  BarChart2, 
  Users, 
  Zap, 
  TrendingUp, 
  Smartphone, 
  ArrowRight,
  Eye,
  MousePointer2,
  PieChart,
  Layers,
  Award
} from 'lucide-react';

const MetaAds = () => {
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
      icon: <Target className="w-8 h-8 text-pink-500" />,
      title: "Precision Targeting",
      description: "Reach your ideal customers based on demographics, interests, and behaviors with laser-focused accuracy."
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: "Creative Strategy",
      description: "High-converting ad creatives (video, carousel, image) designed to stop the scroll and drive action."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Lookalike Audiences",
      description: "Scale your reach by finding new people who resemble your best existing customers."
    },
    {
      icon: <MousePointer2 className="w-8 h-8 text-red-500" />,
      title: "Retargeting Campaigns",
      description: "Re-engage visitors who didn't convert the first time and guide them back to purchase."
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-green-500" />,
      title: "A/B Testing",
      description: "Continuous testing of headlines, creatives, and audiences to lower CPA and increase ROAS."
    },
    {
      icon: <PieChart className="w-8 h-8 text-orange-500" />,
      title: "Analytics & Reporting",
      description: "Transparent, real-time dashboards showing exactly where your budget is going and the results it's driving."
    }
  ];

  const techStack = [
    { name: "Meta Pixel", category: "Tracking" },
    { name: "Ads Manager", category: "Platform" },
    { name: "Google Analytics 4", category: "Analytics" },
    { name: "Canva/Figma", category: "Design" },
    { name: "CapCut/Premiere", category: "Video" },
    { name: "Zapier", category: "Automation" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Audit & Strategy",
      description: "We analyze your past performance and define clear KPIs and audience personas."
    },
    {
      number: "02",
      title: "Creative Production",
      description: "Designing compelling visuals and copy that resonate with your target audience."
    },
    {
      number: "03",
      title: "Campaign Launch",
      description: "Setting up campaign structures, pixels, and tracking for optimal data collection."
    },
    {
      number: "04",
      title: "Scale & Optimize",
      description: "Daily monitoring and adjustments to maximize ROI and scale winning ads."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      <Helmet>
        <title>Meta Ads Services (Facebook & Instagram) | Code'N'Click</title>
        <meta name="description" content="Expert Meta Ads management. We create high-converting Facebook and Instagram ad campaigns to scale your business and maximize ROAS." />
        <meta name="keywords" content="meta ads, facebook ads, instagram ads, social media marketing, paid social, ad creative, retargeting" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Social Media Advertising",
              "provider": {
                "@type": "Organization",
                "name": "Code'N'Click"
              },
              "description": "Creative-first ad campaigns on Facebook and Instagram designed to drive conversions and LTV.",
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-900/20 via-gray-950 to-gray-950 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
           <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
           <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-900/30 border border-pink-500/30 text-pink-400 text-sm font-medium mb-8"
          >
            <TrendingUp className="w-4 h-4" />
            <span>Maximize Your ROAS</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-100 to-gray-400"
          >
            Stop Scrolling. <br className="hidden md:block" />
            <span className="text-pink-500">Start Converting.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Turn social media engagement into revenue. We build data-driven Meta Ad campaigns 
            that find your customers where they spend their time.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-pink-600 rounded-full hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600 focus:ring-offset-gray-900"
            >
              Launch Your Campaign
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
          <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-wider mb-8">Tools of the Trade</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Full-Funnel Strategy</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From brand awareness to purchase, we cover every stage of the customer journey.</p>
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
                className="group p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-pink-500/50 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="mb-6 p-3 rounded-xl bg-gray-950 inline-block border border-gray-800 group-hover:border-pink-500/30 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-pink-400 transition-colors">{service.title}</h3>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Growth Engine</h2>
              <p className="text-gray-400 mb-8 text-lg">
                Our proven framework for scaling ad accounts and generating consistent leads and sales.
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
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-900/20 border border-pink-500/30 flex items-center justify-center text-pink-400 font-bold">
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
              <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full" />
              <div className="relative rounded-2xl border border-gray-800 bg-gray-950/80 backdrop-blur-xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <Smartphone className="w-6 h-6 text-blue-400" />
                    <div>
                      <div className="font-semibold">Mobile First</div>
                      <div className="text-sm text-gray-400">Optimized for vertical viewing</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <Award className="w-6 h-6 text-yellow-400" />
                    <div>
                      <div className="font-semibold">Creative Excellence</div>
                      <div className="text-sm text-gray-400">Ads that don't look like ads</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <Layers className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Multi-Platform</div>
                      <div className="text-sm text-gray-400">Facebook, Instagram, Messenger</div>
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
            <details className="group bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-pink-500/30">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                What is the minimum budget to start?
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                We generally recommend a minimum ad spend of $1,500/month to generate sufficient data for optimization. However, this can vary based on your industry and goals.
              </div>
            </details>
            <details className="group bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-pink-500/30">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                Do you create the ad creatives?
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Yes! We have a team of designers and copywriters who create high-performing images, videos, and ad copy tailored to your brand and audience.
              </div>
            </details>
            <details className="group bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-pink-500/30">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                How long does it take to see results?
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                While some campaigns generate leads immediately, it typically takes 2-4 weeks to gather enough data to fully optimize the account and stabilize performance.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pink-600/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale Your Sales?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's build a customer acquisition machine that works while you sleep.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-pink-600 rounded-full hover:bg-pink-700 hover:scale-105 shadow-lg shadow-pink-600/30"
          >
            Get a Free Strategy Audit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MetaAds;
