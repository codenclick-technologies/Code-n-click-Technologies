import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Code, Globe, BarChart, PenTool, Search, CheckCircle, ArrowRight, Layers, Zap, Users, HelpCircle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const servicesData = {
  'web-development': {
    title: 'Web Development',
    seoTitle: 'Custom Web Development Services | Code\'N\'Click Technologies',
    seoDesc: 'Expert web development services using React, Next.js, and modern technologies. We build scalable, high-performance websites tailored to your business.',
    icon: Code,
    heroGradient: 'from-blue-600 to-cyan-500',
    description: 'We build high-performance, scalable, and visually stunning websites using the latest technologies like React, Next.js, and Three.js.',
    longDescription: 'In the digital age, your website is your storefront. We don\'t just write code; we engineer digital experiences. Our web development team specializes in creating responsive, accessible, and lightning-fast applications that drive growth and engagement.',
    benefits: [
      'Custom Single Page Applications (SPA)',
      'Progressive Web Apps (PWA) for mobile-first experiences',
      'SEO-friendly architecture with Next.js',
      'Secure and scalable backend integration'
    ],
    process: [
      { title: 'Discovery', desc: 'We analyze your requirements and business goals.' },
      { title: 'Design', desc: 'Creating wireframes and high-fidelity UI/UX mockups.' },
      { title: 'Development', desc: 'Clean, modular coding with modern frameworks.' },
      { title: 'Deployment', desc: 'CI/CD pipelines for smooth and reliable launches.' }
    ],
    faq: [
      { q: 'How long does it take to build a website?', a: 'Timeline varies by complexity, typically 2-8 weeks.' },
      { q: 'Do you provide maintenance?', a: 'Yes, we offer ongoing support and maintenance packages.' }
    ]
  },
  'meta-ads': {
    title: 'Meta Ads',
    seoTitle: 'Facebook & Instagram Ads Management | Code\'N\'Click Technologies',
    seoDesc: 'Maximize ROI with targeted Meta Ads campaigns. Expert Facebook and Instagram advertising strategies to boost brand awareness and conversions.',
    icon: Globe,
    heroGradient: 'from-blue-600 to-purple-600',
    description: 'Maximize your reach and ROI with targeted Facebook and Instagram advertising campaigns designed to convert.',
    longDescription: 'Social media is where your audience lives. Our Meta Ads strategies are data-driven, focusing on precise audience targeting and compelling creatives to stop the scroll and drive action.',
    benefits: [
      'Advanced Audience Targeting & Retargeting',
      'High-converting Ad Creatives & Copywriting',
      'A/B Testing for continuous optimization',
      'Detailed Analytics & ROI Reporting'
    ],
    process: [
      { title: 'Audit', desc: 'Reviewing past campaigns and current assets.' },
      { title: 'Strategy', desc: 'Defining target personas and campaign structure.' },
      { title: 'Launch', desc: 'Setting up pixels, events, and ad sets.' },
      { title: 'Optimize', desc: 'Daily monitoring and tweaking for best performance.' }
    ],
    faq: [
      { q: 'What is the minimum budget?', a: 'We recommend a starting budget that allows for significant data gathering.' },
      { q: 'Can you target my local area?', a: 'Absolutely, we can target specific geo-locations down to the mile.' }
    ]
  },
  'google-ads': {
    title: 'Google Ads',
    seoTitle: 'Google Ads (PPC) Management Services | Code\'N\'Click Technologies',
    seoDesc: 'Drive high-intent traffic with expert Google Ads management. Search, Display, and Shopping campaigns optimized for maximum conversions.',
    icon: BarChart,
    heroGradient: 'from-green-500 to-emerald-600',
    description: 'Capture high-intent traffic with strategic Google Search, Display, and Shopping campaigns.',
    longDescription: 'Be found exactly when customers are searching for you. Our Google Ads experts manage your PPC budget efficiently to ensure every click has the potential to convert into a sale.',
    benefits: [
      'Keyword Research & Competitor Analysis',
      'High Quality Score optimization',
      'Conversion Rate Optimization (CRO)',
      'Remarketing campaigns to bring back visitors'
    ],
    process: [
      { title: 'Research', desc: 'Identifying high-value keywords and negative keywords.' },
      { title: 'Setup', desc: 'Structuring campaigns, ad groups, and extensions.' },
      { title: 'Bidding', desc: 'Strategic bid management to maximize impression share.' },
      { title: 'Reporting', desc: 'Transparent reports showing cost-per-acquisition.' }
    ],
    faq: [
      { q: 'How fast will I see results?', a: 'PPC offers almost immediate visibility once campaigns are live.' },
      { q: 'Do I own the ad account?', a: 'Yes, you retain full ownership of your Google Ads account.' }
    ]
  },
  'graphic-design': {
    title: 'Graphic Design',
    seoTitle: 'Professional Graphic Design & Branding | Code\'N\'Click Technologies',
    seoDesc: 'Elevate your brand with stunning graphic design. Logo design, marketing materials, and UI/UX design that tells your brand story.',
    icon: PenTool,
    heroGradient: 'from-pink-500 to-rose-600',
    description: 'Elevate your brand identity with professional logo design, marketing materials, and UI/UX design.',
    longDescription: 'Design is the silent ambassador of your brand. We create visual identities that resonate with your audience, from memorable logos to cohesive marketing collateral that builds trust and recognition.',
    benefits: [
      'Unique Brand Identity Design',
      'Engaging Social Media Graphics',
      'User-Centric UI/UX Design',
      'Print-ready Marketing Materials'
    ],
    process: [
      { title: 'Brief', desc: 'Understanding your brand values and aesthetic preferences.' },
      { title: 'Concept', desc: 'Sketching and digitalizing initial design concepts.' },
      { title: 'Refine', desc: 'Iterative feedback rounds to perfect the design.' },
      { title: 'Deliver', desc: 'Providing all necessary file formats and style guides.' }
    ],
    faq: [
      { q: 'How many revisions do I get?', a: 'We typically offer 3 rounds of revisions to ensure satisfaction.' },
      { q: 'Do you design for print?', a: 'Yes, we handle everything from business cards to billboards.' }
    ]
  },
  'seo': {
    title: 'SEO',
    seoTitle: 'Expert SEO Services & Strategy | Code\'N\'Click Technologies',
    seoDesc: 'Boost your organic rankings with our data-driven SEO services. On-page, off-page, and technical SEO to drive sustainable traffic.',
    icon: Search,
    heroGradient: 'from-orange-500 to-amber-600',
    description: 'Improve your search engine rankings and drive organic traffic with our data-driven SEO strategies.',
    longDescription: 'Organic traffic is the lifeblood of sustainable growth. Our SEO strategies are built on white-hat practices that improve your visibility, authority, and user experience for long-term success.',
    benefits: [
      'Comprehensive Technical SEO Audits',
      'Content Strategy & Optimization',
      'High-Quality Backlink Building',
      'Local SEO for geographic dominance'
    ],
    process: [
      { title: 'Audit', desc: 'Deep dive into your site\'s health and current rankings.' },
      { title: 'Optimize', desc: 'Fixing technical issues and optimizing on-page content.' },
      { title: 'Authority', desc: 'Building a robust backlink profile through outreach.' },
      { title: 'Monitor', desc: 'Tracking rankings and traffic to adjust strategy.' }
    ],
    faq: [
      { q: 'Is SEO a one-time thing?', a: 'No, SEO requires ongoing effort to maintain and grow rankings.' },
      { q: 'Can you guarantee #1 ranking?', a: 'No ethical SEO agency can guarantee specific rankings, but we guarantee improvement.' }
    ]
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData[id];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
          <Link to="/services" className="text-blue-400 hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-blue-500/30">
      <Helmet>
        <title>{service.seoTitle}</title>
        <meta name="description" content={service.seoDesc} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r ${service.heroGradient} opacity-20 blur-[120px] rounded-full pointer-events-none`} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center justify-center p-4 mb-8 glass-panel rounded-2xl text-blue-400">
              <service.icon size={48} />
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
              {service.title}
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 leading-relaxed mb-10">
              {service.longDescription}
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Start Your Project <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Our <br /><span className="text-blue-500">{service.title}</span> Services?</h2>
              <div className="space-y-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="mt-1 p-2 bg-blue-500/20 rounded-lg text-blue-400">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-lg text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] glass-panel rounded-3xl flex items-center justify-center overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.heroGradient} opacity-10`} />
              <div className="text-center p-8">
                <Layers size={64} className="mx-auto text-gray-600 mb-4" />
                <p className="text-gray-500">Visual Representation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-400">How we deliver excellence, step by step.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 glass-panel rounded-2xl border-t border-white/10"
              >
                <div className="absolute -top-4 left-6 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {service.faq.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-2xl"
              >
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <HelpCircle size={18} className="text-blue-400" />
                  {item.q}
                </h3>
                <p className="text-gray-400 pl-7">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-panel p-12 rounded-3xl relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-r ${service.heroGradient} opacity-20 blur-3xl`} />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your {service.title}?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's collaborate to build something extraordinary. Contact us today for a free consultation.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-full font-bold text-lg transition-all hover:scale-105"
              >
                Get a Quote <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
