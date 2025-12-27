import React from 'react';
import SEO from '../../components/utils/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Cloud, 
  Target, 
  Search, 
  PenTool, 
  TrendingUp, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Zap, 
  Globe,
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'High-performance websites and web apps built with React and Next.js for speed and scalability.',
    icon: Code2,
    link: '/services/web-development',
    gradient: 'from-blue-500 to-cyan-500',
    shadow: 'shadow-blue-500/20'
  },
  {
    id: 'saas-development',
    title: 'SaaS Development',
    description: 'Scalable cloud-native applications and multi-tenant platforms designed for growth.',
    icon: Cloud,
    link: '/services/saas-development',
    gradient: 'from-purple-500 to-pink-500',
    shadow: 'shadow-purple-500/20'
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads',
    description: 'Data-driven Facebook and Instagram campaigns that drive conversions and ROI.',
    icon: Target,
    link: '/services/meta-ads',
    gradient: 'from-pink-500 to-red-500',
    shadow: 'shadow-pink-500/20'
  },
  {
    id: 'google-ads',
    title: 'Google Ads',
    description: 'Capture high-intent traffic with precision search, display, and shopping campaigns.',
    icon: Search,
    link: '/services/google-ads',
    gradient: 'from-yellow-400 to-orange-500',
    shadow: 'shadow-yellow-500/20'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Stunning brand identities, UI/UX design, and marketing materials that captivate.',
    icon: PenTool,
    link: '/services/graphic-design',
    gradient: 'from-indigo-500 to-blue-500',
    shadow: 'shadow-indigo-500/20'
  },
  {
    id: 'seo',
    title: 'SEO Services',
    description: 'Technical SEO and content strategies to dominate search results and drive organic traffic.',
    icon: TrendingUp,
    link: '/services/seo',
    gradient: 'from-green-500 to-emerald-500',
    shadow: 'shadow-green-500/20'
  }
];

// Reusable Premium Card Component (Similar to Homepage but larger/detailed)
const ServiceCard = ({ service }) => {
  return (
    <motion.div 
      variants={fadeInUp} 
      className="group relative h-full"
    >
      <div className="relative h-full rounded-3xl p-[1px] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
        {/* Animated Gradient Border */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`} />
        <div className="absolute inset-0 bg-white/10 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />

        {/* Card Content */}
        <div className="relative h-full bg-gray-950/90 backdrop-blur-xl rounded-[23px] p-8 flex flex-col overflow-hidden">
          {/* Ambient Glow */}
          <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 rounded-full`} />
          
          <div className="relative mb-6">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient} text-white shadow-lg ${service.shadow} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
              <service.icon size={32} className="text-white" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors">
            {service.title}
          </h3>
          
          <p className="text-gray-400 leading-relaxed mb-8 flex-grow text-lg">
            {service.description}
          </p>

          <Link 
            to={service.link}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/70 group-hover:text-white transition-colors"
          >
            Explore Service
            <span className={`flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-gradient-to-r ${service.gradient} transition-all duration-300 group-hover:translate-x-2`}>
              <ArrowRight size={14} className="text-white" />
            </span>
          </Link>

          <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      <SEO 
        title="Digital Services | Web, SaaS, Marketing & Design"
        description="Comprehensive digital services tailored for growth. FROM custom web & SaaS development to performance marketing. Premium quality, guaranteed results."
        keywords="web development, saas development, digital marketing, seo services, graphic design, google ads, meta ads"
        canonical="/services"
      />

      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 center w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950" />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3], 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] will-change-transform"
          />
          <motion.div 
             animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3], 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] will-change-transform"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-bold uppercase tracking-wider mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4" />
            <span>World-Class Digital Services</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-8"
          >
            Building the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient-x">
              Future of Digital
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            We don't just deliver services; we craft digital experiences that define brands. 
            From scalable SaaS platforms to high-impact marketing campaigns, we are your growth partners.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pt-0 pb-20 relative z-10" id="services">         
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust / Process Section - Dark & Sleek */}
      <section className="py-24 bg-gray-900/30 relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Industry Leaders <br/><span className="text-blue-500">Choose Us?</span></h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                We combine technical excellence with deep business acumen. We treat your business like our own, ensuring every line of code and every ad dollar spent drives real value.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Reliability First", desc: "Enterprise-grade code that scales.", icon: ShieldCheck, color: "text-blue-400", bg: "bg-blue-500/10" },
                  { title: "Collaborative Approach", desc: "Transparent communication at every step.", icon: Users, color: "text-purple-400", bg: "bg-purple-500/10" },
                  { title: "Global Standards", desc: "Security, performance, and accessibility built-in.", icon: Globe, color: "text-green-400", bg: "bg-green-500/10" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1 text-white group-hover:text-blue-400 transition-colors">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual Abstract Graphic */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-[60px] opacity-20" />
              <div className="relative rounded-3xl border border-white/10 bg-gray-950/50 backdrop-blur-2xl p-8 lg:p-12">
                 <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 p-6 rounded-2xl bg-white/5 border border-white/10">
                       <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                             <Layers className="text-blue-400" />
                             <span className="font-bold">Project Architecture</span>
                          </div>
                          <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-bold">OPTIMIZED</span>
                       </div>
                       <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500" 
                          />
                       </div>
                    </div>
                    
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center">
                        <span className="text-4xl font-black text-white mb-2">98%</span>
                        <span className="text-sm text-gray-400">Client Retention</span>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center">
                        <span className="text-4xl font-black text-white mb-2">100+</span>
                        <span className="text-sm text-gray-400">Projects Shipped</span>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Process for Success</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">A proven agile framework that ensures transparency, quality, and speed.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We analyze your goals, market, and challenges." },
              { step: "02", title: "Strategy", desc: "We architect the perfect solution and tech stack." },
              { step: "03", title: "Build", desc: "Agile development with regular updates and feedback." },
              { step: "04", title: "Scale", desc: "Launch, monitor, and optimize for growth." }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="text-6xl font-black text-white/5 mb-4 group-hover:text-white/10 transition-colors duration-300">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed border-l-2 border-white/10 pl-4 group-hover:border-blue-500 transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-gray-950 to-gray-950" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Ready for a Digital Transformation?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Let's build something extraordinary together. Book a free consultation and let's discuss your vision.
          </p>
          <Link 
            to="/contact" 
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/50 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-xy" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
