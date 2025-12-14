import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/utils/SEO';
import { motion } from 'framer-motion';
import { useState } from 'react';
import TeamProfileModal from '../components/ui/TeamProfileModal';
import { Users, Award, Globe, Coffee, Mail } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import SpotlightCard from '../components/ui/SpotlightCard';

const team = [
  { name: 'Lokender Chauhan', role: 'Founder &amp; CTO', bio: 'Leads product &amp; engineering. Passionate about performant web experiences.', bioLong: 'Lokender leads engineering and product. He focuses on performance, scalable architectures, and developer experience. Previously built SaaS platforms and large-scale React apps.', avatar: '🧑‍💻', email: 'lokender@codenclick.com' },
  { name: 'Himanshu Sharma', role: 'Head of Growth', bio: 'Growth strategist focused on paid &amp; organic acquisition.', bioLong: 'Himanshu specializes in growth strategies combining paid channels and organic funnels. He builds repeatable acquisition systems and analytics stacks.', avatar: '🧑‍💼', email: 'himanshu@codenclick.com', skills: ['Paid acquisition','Analytics','Funnel optimization'] },
  { name: 'Jitender Saini', role: 'Team Lead', bio: 'Design systems and product leadership specialist.', bioLong: 'Jitender leads cross-functional teams, design systems and product delivery. He bridges design and engineering to ship high-quality products.', avatar: '👨‍💼', email: 'jitender@codenclick.com', skills: ['Design systems','Product leadership','UX'] },
];

const timeline = [
  { icon: '🚀', title: 'We Dream Big', desc: 'Every project we take on, we approach with ambition. We don\'t settle for incremental improvements — we aim to transform how our clients do business.' },
];

const About = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden pt-32 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="About Us - Leading Software Development & Digital Marketing Company"
        description="Codenclick Technologies is India's premier software development and digital marketing agency. We combine cutting-edge technology with creative strategies to deliver measurable business growth. From web development to digital marketing, we're your partner in digital transformation."
        keywords="about code-n-click, software development company, digital agency India, custom software solutions, web development team, digital marketing experts"
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
            Transforming Ideas into Digital Success
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
            We are <strong className="text-white">Codenclick Technologies</strong> — a technology-driven software development and digital marketing agency based in India, dedicated to helping businesses thrive in the digital era.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our multidisciplinary team of expert developers, creative designers, and strategic marketers combine innovation with execution to deliver solutions that drive real, measurable business growth.
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
            <h2 className="text-3xl font-bold text-white mb-4">Who We Are</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between technology and business growth, <strong className="text-white">Codenclick Technologies</strong> has emerged as a trusted partner for businesses seeking digital transformation. We are more than just a service provider—we are strategic partners invested in your success.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Our expertise spans <strong className="text-white">custom software development, web and mobile applications, SaaS platforms, digital marketing, SEO, and brand design</strong>. Whether you're a startup looking to build your MVP or an enterprise seeking to modernize legacy systems, we bring the technical prowess and creative thinking to make it happen.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4 mt-8">Our Commitment</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We built our reputation on a simple principle: <strong className="text-white">We don't promise what we can't deliver.</strong> Every project—whether for a bootstrapped startup or a Fortune 500 company—is executed with the same rigor, attention to detail, and commitment to measurable results.
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

          <motion.aside initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-950/80 p-6">
            <h3 className="text-lg font-bold text-white mb-3">What Drives Us</h3>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li>✓ Building products that matter</li>
              <li>✓ Creating lasting impact</li>
              <li>✓ Growing with ambitious partners</li>
              <li>✓ Delivering with integrity</li>
            </ul>
            <a href="/contact" className="inline-block mt-6 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold">Let's Build Together</a>
          </motion.aside>
        </div>

        {/* Team */}
        <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-6">Meet the team</motion.h2>
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
            },{
              title: 'Integrity',
              desc: 'Transparent communication and trust-based relationships.'
            },{
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
          <p className="text-gray-400 mb-6">Contact us for a free consultation — we'll help you prioritize the highest-impact work.</p>
          <a href="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold">Get in touch</a>
        </motion.section>
      </div>
      {selected && <TeamProfileModal member={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

export default About;
