import React from 'react';
import SEOHead from '../../components/utils/SEO';
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
  Award,
  CheckCircle2
} from 'lucide-react';

const MetaAds = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
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
    <div className="min-h-screen bg-[#030014] text-white overflow-hidden">
      <SEOHead
        title="Meta Ads Services (Facebook & Instagram) | Code'N'Click"
        description="Expert Meta Ads management. We create high-converting Facebook and Instagram ad campaigns to scale your business and maximize ROAS."
        keywords="Best Meta Ads Agency Delhi, Best Meta Ads Agency Faridabad, Premium Facebook Ads Services Delhi, Premium Instagram Ads Services Faridabad, Top Social Media Marketing Delhi"
        canonical="/services/meta-ads"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-900/20 via-[#030014] to-[#030014] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
           <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
           <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-pink-500/30 text-pink-400 text-sm font-medium mb-8"
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
             Turn engagement into revenue with creative-first campaigns on Facebook and Instagram.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-pink-600 hover:bg-pink-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-pink-500/25 flex items-center justify-center gap-2">
              Launch Campaign <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 glass-button text-white rounded-xl font-bold flex items-center justify-center gap-2">
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ad Solutions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From cold awareness to hot retargeting, we handle the full funnel.
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
                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-pink-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
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
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ad Tech Stack</h2>
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
                <Zap className="w-4 h-4 text-pink-400" />
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
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Campaign Roadmap</h2>
              <p className="text-xl text-gray-400 mb-8">
                Data-backed strategy meets scroll-stopping creative.
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
              <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full" />
              <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10">
                 <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                       <CheckCircle2 className="text-green-400" />
                       <span className="text-gray-300 font-medium">Clear ROI Reporting</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                       <CheckCircle2 className="text-green-400" />
                       <span className="text-gray-300 font-medium">Daily Ad optimization</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                       <CheckCircle2 className="text-green-400" />
                       <span className="text-gray-300 font-medium">Creative Testing Pipeline</span>
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
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Scale Your Business today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to turn strangers into customers? Let's launch your winning campaign.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform">
              Book Strategy Call <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MetaAds;
