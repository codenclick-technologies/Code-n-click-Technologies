import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../components/utils/SEO';
import { motion } from 'framer-motion';
import TeamProfileModal from '../components/ui/TeamProfileModal';
import { Users, Award, Globe, Coffee, Mail, Cpu, Zap, TrendingUp } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import SpotlightCard from '../components/ui/SpotlightCard';

const team = [
  { 
    name: 'Himanshu', 
    role: 'Co-Founder & CTO', 
    bio: 'A seasoned full-stack architect with a focus on scalable cloud infrastructure and performance optimization. With a deep passion for clean code and modern frameworks, Himanshu ensures that every project at Codenclick is built on a foundation of technical excellence.',
    avatar: <Zap size={32} />,
    email: 'himanshu@codenclick.in', 
    skills: ['Architecture', 'Cloud Infrastructure', 'Security', 'Performance'] 
  },
  { 
    name: 'Jitender', 
    role: 'Co-Founder & COO', 
    bio: 'A strategic growth specialist with extensive experience in digital marketing and business operations. Jitender bridges the gap between technical execution and business goals, ensuring every digital product we build delivers measurable ROI and sustainable growth.',
    avatar: <TrendingUp size={32} />,
    email: 'jitender@codenclick.in', 
    skills: ['Strategy', 'Marketing', 'Operations', 'Growth'] 
  }
];

const timeline = [
  { icon: '🚀', title: 'We Dream Big', desc: 'Every project we take on, we approach with ambition. We don\'t settle for incremental improvements — we aim to transform how our clients do business.' },
];

const About = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-[#020205] text-white overflow-hidden pt-32 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Codenclick Technologies | Best Digital Agency in Delhi, India"
        description="Learn about Codenclick Technologies, Delhi's premier software development and digital marketing agency. We engineer growth for businesses through custom code and data-driven marketing."
        keywords="About Codenclick Technologies, Best Digital Agency Delhi, Software Company Delhi, Web Development Team Delhi, Digital Marketing Experts Delhi"
      />

      <div className="max-w-7xl mx-auto">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400">
            We Don't Just Write Code. <br />
            <span className="text-blue-500">We Engineer Growth.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
            Codenclick Technologies is a team of builders, strategists, and problem solvers. We exist for one reason: to help ambitious businesses win in the digital age.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Forget agency bloat and buzzwords. We deliver lean, mean, high-performance digital products that look great and work even better.
          </motion.p>
        </motion.section>

        {/* Key Metrics */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, label: 'Partners Who Trust Us', value: '500+', subtext: 'Startups to enterprises' },
            { icon: Award, label: 'Industry Recognition', value: '25+', subtext: 'Awards &amp; accolades' },
            { icon: Globe, label: 'Global Impact', value: '12', subtext: 'Countries, 1 mission' },
            { icon: Coffee, label: 'Fueled By Passion', value: '10k+', subtext: 'Cups &amp; counting' },
          ].map((s, i) => (
            <motion.div key={i} variants={fadeInUp} className="">
              <SpotlightCard className="p-6 text-center">
                <s.icon className="mx-auto text-cyan-400 mb-3" size={28} />
                <div className="text-3xl font-extrabold text-white">{s.value}</div>
                <div className="text-gray-300 font-semibold text-sm">{s.label}</div>
                <div className="text-gray-500 text-xs mt-1">{s.subtext}</div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission + Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We started <strong className="text-white">Codenclick Technologies</strong> because we were tired of seeing businesses get burned by "digital agencies" that overpromised and underdelivered. We wanted to build a company that actually cared about the outcome, not just the invoice. Based in Delhi, serving clients across Delhi NCR and beyond, we've built our reputation on delivering real, measurable results.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Today, we are a team of obsessives. Obsessed with clean code, obsessed with conversion rates, and obsessed with helping you win. From <Link to="/services/web-development" className="text-blue-400 hover:text-blue-300 underline">custom web applications that power your business operations</Link> to <Link to="/services/saas-development" className="text-purple-400 hover:text-purple-300 underline">scalable SaaS platforms</Link> that serve thousands of users, we build software that doesn't just work—it excels. Our <Link to="/services/seo" className="text-green-400 hover:text-green-300 underline">SEO strategies</Link> and <Link to="/services/google-ads" className="text-yellow-400 hover:text-yellow-300 underline">performance marketing campaigns</Link> are designed to drive sustainable growth, not vanity metrics.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Whether you need <Link to="/services/graphic-design" className="text-indigo-400 hover:text-indigo-300 underline">stunning brand identity and UI/UX design</Link> that captivates your audience, or <Link to="/services/meta-ads" className="text-pink-400 hover:text-pink-300 underline">data-driven Meta advertising campaigns</Link> that maximize your ROAS, we bring the technical expertise and creative thinking that transforms businesses. Check out our <Link to="/portfolio" className="text-cyan-400 hover:text-cyan-300 underline">portfolio of successful projects</Link> to see how we've helped companies like yours achieve breakthrough results.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4 mt-8">The Codenclick Technologies Promise</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              <strong className="text-white">We build for the long haul.</strong> We're not here for quick projects and quick exits. We want to be the partner you trust when you're scaling your business, launching new products, or entering new markets. That means total transparency, zero technical debt, and results that directly impact your bottom line. Every line of code we write, every campaign we launch, every design we create is built with your sustained success in mind. Our clients don't just work with us once—they come back because we deliver.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Our comprehensive <Link to="/services" className="text-blue-400 hover:text-blue-300 underline">suite of digital services</Link> covers everything from initial strategy to ongoing optimization. We don't just hand off a project and disappear—we become an extension of your team, continuously monitoring performance, iterating on what works, and pivoting away from what doesn't. This commitment to partnership, backed by proven results and measurable ROI, is what sets us apart in an industry full of one-and-done vendors.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              <strong className="text-white">Our work speaks for itself.</strong> We've helped businesses increase their revenue by 300%, reduce their customer acquisition costs by 60%, and scale their platforms to serve millions of users. We don't just promise results—we engineer them. From startups finding product-market fit to established enterprises modernizing their tech stack, our track record proves we know how to turn digital investments into business growth.
            </p>

            <div className="space-y-6 mt-8">
              {timeline.map((t, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-none w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-2xl">{t.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{t.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl bg-[#050505]/80 backdrop-blur-xl border border-white/5 p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-3">Our Mantra</h3>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li>✓ Code that scales</li>
              <li>✓ Designs that convert</li>
              <li>✓ Marketing that delivers ROI</li>
              <li>✓ Partnerships that last</li>
            </ul>
            <a href="/contact" className="inline-block mt-6 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold">Start construction</a>
          </motion.aside>
        </div>

        <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-8 text-center">Leadership</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {team.map((member, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group">
                <SpotlightCard className="p-8 md:p-10 relative overflow-hidden">
                  {/* Decorative Background Elements */}
                  <div className="absolute top-0 right-0 p-3 opacity-10">
                    <Users size={120} />
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
                    {/* Avatar / Icon Section */}
                    <div className="flex-none">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-2xl shadow-blue-500/20">
                        {member.avatar}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white">{member.name}</h3>
                          <p className="text-blue-400 font-medium tracking-wide uppercase text-sm mt-1">{member.role}</p>
                        </div>
                        <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
                           <a href={`mailto:${member.email}`} className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors flex items-center gap-2">
                              <Mail size={14} /> Contact
                           </a>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base border-l-4 border-blue-500/30 pl-4">
                        {member.bio}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-wider">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">Core values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              title: 'Innovation',
              desc: 'Continuously iterate and experiment to find better solutions.'
            }, {
              title: 'Integrity',
              desc: 'Transparent communication and trust-based relationships.'
            }, {
              title: 'Excellence',
              desc: 'Deliver craftsmanship in code, design, and strategy.'
            }].map((v, i) => (
              <SpotlightCard key={i} className="p-6">
                <h4 className="text-lg font-bold text-white mb-2">{v.title}</h4>
                <p className="text-gray-400 text-sm">{v.desc}</p>
              </SpotlightCard>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to build something remarkable?</h3>
          <p className="text-gray-400 mb-6">Whether you're a startup looking to launch your MVP or an established business ready to scale, we're here to help. <Link to="/contact" className="text-blue-400 hover:text-blue-300 underline">Contact us for a free consultation</Link> where we'll analyze your current challenges, identify opportunities, and create a roadmap for success. We'll help you prioritize the highest-impact work that delivers real ROI, not just busy work. Join the <Link to="/careers" className="text-purple-400 hover:text-purple-300 underline">growing team of innovators</Link> or explore our <Link to="/resources" className="text-green-400 hover:text-green-300 underline">free resources and insights</Link> to learn more about digital transformation.</p>
          <Link to="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:scale-105 transition-transform">Get in touch</Link>
        </motion.section>
      </div>
      {selected && <TeamProfileModal member={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

export default About;
