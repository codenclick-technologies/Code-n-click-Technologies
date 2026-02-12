import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../components/utils/SEO';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Coffee, Cpu, Zap, TrendingUp, Shield, Rocket } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import SpotlightCard from '../components/ui/SpotlightCard';

const timeline = [
  { icon: '🚀', title: 'We Dream Big', desc: 'Every project we take on, we approach with ambition. We don\'t settle for incremental improvements — we aim to transform how our clients do business.' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#020205] text-white overflow-hidden pt-32 px-4 sm:px-6 lg:px-8">
      <SEO
        title="About Us | Codenclick Technologies"
        description="Learn about Codenclick Technologies and our mission to transform businesses through high-performance custom code and elite digital strategies."
        keywords="Codenclick Technologies, Web Development Agency Delhi, Digital Transformation Leader, Custom Software Development"
      />

      <div className="max-w-7xl mx-auto">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">Our Story & Vision</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400 leading-tight">
            Your Success Is <br />
            <span className="text-blue-500">Our Only Currency.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We don't just build code; we engineer competitive advantages. Codenclick Technologies was born from a simple realization: businesses deserve better than "good enough" digital products.
          </motion.p>
        </motion.section>

        {/* Key Metrics */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, label: 'Partners Who Trust Us', value: '500+', subtext: 'Startups to enterprises' },
            { icon: Award, label: 'Industry Recognition', value: '25+', subtext: 'Awards & accolades' },
            { icon: Globe, label: 'Global Impact', value: '12', subtext: 'Countries, 1 mission' },
            { icon: Coffee, label: 'Fueled By Passion', value: '10k+', subtext: 'Cups & counting' },
          ].map((s, i) => (
            <motion.div key={i} variants={fadeInUp} className="">
              <SpotlightCard className="p-6 text-center h-full flex flex-col justify-center items-center group hover:border-white/20 transition-colors">
                <s.icon className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300" size={28} />
                <div className="text-3xl font-extrabold text-white mb-1">{s.value}</div>
                <div className="text-gray-300 font-semibold text-sm">{s.label}</div>
                <div className="text-gray-500 text-xs mt-1">{s.subtext}</div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission + Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-4">Why We Started</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We started <strong className="text-white">Codenclick Technologies</strong> because we saw too many businesses getting lost in "tech talk" and over-complicated agency packages. We wanted to build something different: a **Digital Marketing Agency in Delhi** that actually listens, cares, and delivers what matters most — your success.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Whether it's building a fast <Link to="/services/web-development" className="text-blue-400 hover:text-blue-300 underline">Custom Website</Link> or helping you get seen on Google as your <Link to="/services/seo" className="text-green-400 hover:text-green-300 underline">SEO Expert in Delhi</Link>, we focus on what works for your business. No fluff, no jargon, just results that scale.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              From <Link to="/services/meta-ads" className="text-pink-400 hover:text-pink-300 underline">Meta Ads</Link> to <Link to="/services/google-ads" className="text-yellow-400 hover:text-yellow-300 underline">Google Ads</Link>, every strategy we create is designed to bring you high-quality leads and steady growth. Check out our <Link to="/portfolio" className="text-cyan-400 hover:text-cyan-300 underline">Success Stories</Link> to see how we help brands like yours.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4 mt-8">The Codenclick Promise</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We don't just build and disappear. We become an extension of your team, helping you navigate the digital landscape with ease. Our <Link to="/services" className="text-blue-400 hover:text-blue-300 underline">Digital Services</Link> are built for the long term, ensuring your business stays ahead of the curve.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              <strong className="text-white">Our work speaks for itself.</strong> We've helped businesses increase their revenue by 300%, reduce their customer acquisition costs by 60%, and scale their platforms to serve millions of users. We don't just promise results—we engineer them.
            </p>

            <div className="space-y-6 mt-8">
              {timeline.map((t, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="flex-none w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">{t.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{t.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl bg-[#050505]/80 backdrop-blur-xl border border-white/5 p-6 shadow-2xl sticky top-32">
            <h3 className="text-lg font-bold text-white mb-3">Our Mantra</h3>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li>✓ Code that scales</li>
              <li>✓ Designs that convert</li>
              <li>✓ Marketing that delivers ROI</li>
              <li>✓ Partnerships that last</li>
            </ul>
            <a href="/contact" className="inline-block mt-6 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all w-full text-center">Start construction</a>
          </motion.aside>
        </div>



        {/* Values - High End Layout */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">The Codenclick Code</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our culture is built on these foundational pillars, ensuring every project meets our highest standard of excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Obsessive Quality', desc: 'We don\'t do "good enough". Every line of code and every pixel in the design must serve a purpose and provide elite value.', icon: Cpu, color: 'text-amber-500' },
              { title: 'Aggressive Transparency', desc: 'No smoke and mirrors. You get direct access to truth, metrics, and progress. We win or lose together as true partners.', icon: Shield, color: 'text-blue-500' },
              { title: 'Future-Proof Scalability', desc: 'We build for 10x growth today. Our architectures are designed to handle millions of users without breaking a sweat.', icon: Rocket, color: 'text-emerald-500' }
            ].map((v, i) => (
              <SpotlightCard key={i} className="p-8 border-white/5 hover:border-white/20 transition-all group">
                <v.icon className={`${v.color} mb-6 group-hover:scale-110 transition-transform`} size={40} />
                <h4 className="text-xl font-black text-white mb-4 tracking-tight">{v.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </SpotlightCard>
            ))}
          </div>
        </motion.section>

        {/* CTA - Final High Stakes Message */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          className="text-center mb-20 relative px-6 py-20 rounded-[40px] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-amber-500/5 to-transparent"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">Ready to Build Your Empire?</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Join the ranks of high-growth founders who chose elite engineering over generic templates. Stop settling for less and start building for market dominance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="px-10 py-5 bg-white text-black font-black rounded-full hover:bg-gray-200 transition-all hover:scale-105 shadow-xl shadow-white/5">
                SECURE YOUR SLOT
              </Link>
              <Link to="/portfolio" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all">
                VIEW OUR PROOF
              </Link>
            </div>

          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
