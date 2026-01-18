import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../components/utils/SEO';
import { motion } from 'framer-motion';
import { useState } from 'react';
import TeamProfileModal from '../components/ui/TeamProfileModal';
import { Users, Award, Globe, Coffee, Mail } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import SpotlightCard from '../components/ui/SpotlightCard';

const team = [
  { name: 'Lokender Chauhan', role: 'Founder & CEO', bio: 'Visionary leader driving digital transformation for global enterprises.', bioLong: 'Lokender is the driving force behind Codenclick. With a deep passion for technology and business growth, he helps clients navigate the digital landscape with clarity and confidence.', avatar: '👔', email: 'lokender@codenclick.in', skills: ['Business Strategy', 'Tech Leadership', 'Enterprise Solutions'] },
  { name: 'Himanshu Sharma', role: 'Head of Growth', bio: 'Growth strategist focused on paid & organic acquisition.', bioLong: 'Himanshu specializes in growth strategies combining paid channels and organic funnels. He builds repeatable acquisition systems and analytics stacks.', avatar: '🧑‍💼', email: 'himanshu@codenclick.com', skills: ['Paid acquisition', 'Analytics', 'Funnel optimization'] },
  { name: 'Jitender Saini', role: 'Team Lead', bio: 'Design systems and product leadership specialist.', bioLong: 'Jitender leads cross-functional teams, design systems and product delivery. He bridges design and engineering to ship high-quality products.', avatar: '👨‍💼', email: 'jitender@codenclick.com', skills: ['Design systems', 'Product leadership', 'UX'] },
];

const timeline = [
  { icon: '🚀', title: 'We Dream Big', desc: 'Every project we take on, we approach with ambition. We don\'t settle for incremental improvements — we aim to transform how our clients do business.' },
];

const About = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-[#020205] text-white overflow-hidden pt-32 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Codenclick Technologies | Best Digital Agency in New Delhi, India"
        description="Learn about Codenclick Technologies, New Delhi's premier software development and digital marketing agency. We engineer growth for businesses through custom code and data-driven marketing."
        keywords="About Codenclick Technologies, Best Digital Agency Delhi, Software Company New Delhi, Web Development Team Delhi, Digital Marketing Experts Delhi"
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
              We started <strong className="text-white">Codenclick Technologies</strong> because we were tired of seeing businesses get burned by "digital agencies" that overpromised and underdelivered. We wanted to build a company that actually cared about the outcome, not just the invoice. Based in New Delhi, serving clients across Delhi NCR and beyond, we've built our reputation on delivering real, measurable results.
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

        {/* Team */}
        <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-6">The Builders</motion.h2>
          <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group">
                <SpotlightCard className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-2xl">{member.avatar}</div>
                    <div>
                      <div className="font-bold text-white">{member.name}</div>
                      <div className="text-xs text-gray-400">{member.role}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 flex-grow">{member.bio}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <button onClick={() => setSelected(member)} className="text-sm text-cyan-300 hover:underline">View profile</button>
                    <a href={`mailto:${member.email}`} className="text-sm text-gray-400 flex items-center gap-2"><Mail size={14} /> Contact</a>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
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
