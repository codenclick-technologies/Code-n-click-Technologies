import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/utils/SEO';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Users, Award, Globe, Coffee, Cpu, Zap, 
  TrendingUp, Shield, Rocket, Heart, Lightbulb, 
  Target, MessageSquare, Code2, Sparkles, CheckCircle2 
} from 'lucide-react';
import { fadeInUp, staggerContainer, fadeIn, scaleIn } from '../utils/animations';
import SpotlightCard from '../components/ui/SpotlightCard';

const About = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-[#020205] text-white overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Our Story | Codenclick Technologies - Humanizing Technology"
        description="Discover the passion behind Codenclick Technologies. We're a team of results-obsessed creators in Delhi, dedicated to building high-performance digital products that scale."
        keywords="About Codenclick, Tech Agency Delhi, Human Centric Design, Web Development Story, Digital Growth Partners"
      />

      {/* Hero Section - The "Soul" of the Agency */}
      <div className="max-w-7xl mx-auto mb-32 relative">
        <motion.div 
          style={{ opacity, scale }}
          className="text-center relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8 backdrop-blur-md"
          >
            <Sparkles className="text-blue-400 w-4 h-4" />
            <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">Built with Passion in Delhi</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-500 leading-tight tracking-tighter"
          >
            We don't just sell code. <br />
            <span className="text-blue-500">We engineer growth.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light italic"
          >
            "In a world drowned in technical jargon and complex agency packages, we chose a different path: <span className="text-white font-medium">Results over Fluff. Humans over Machines.</span>"
          </motion.p>
        </motion.div>

        {/* Floating background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Core Philosophy - Human Understandable */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
              Why Codenclick? <br />
              <span className="text-gray-500 text-3xl font-bold">Because you deserve a partner, not just a vendor.</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                We've seen it too many times — brilliant founders getting lost in "tech talk" or paying for expensive agency packages that don't deliver a single lead. 
              </p>
              <p>
                At <strong className="text-white">Codenclick Technologies</strong>, our philosophy is simple: <span className="text-blue-400 underline decoration-blue-500/30 underline-offset-4">We listen first, then we talk.</span> We understand your business goals before we write a single line of code.
              </p>
              <p className="border-l-2 border-blue-500/30 pl-6 italic">
                Whether you're a startup looking for your first MVP or an enterprise scaling to millions, we treat your project like our own. No smoke, no mirrors, just aggressive transparency.
              </p>
            </div>
          </motion.div>

          <motion.div variants={scaleIn} className="relative">
             <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full" />
             <div className="grid grid-cols-2 gap-4 relative z-10">
                {[
                  { icon: Heart, title: "Human Centric", desc: "Designed for real people, not just algorithms." },
                  { icon: Target, title: "Result Obsessed", desc: "If it doesn't grow your business, it's not finished." },
                  { icon: Zap, title: "Speed First", desc: "Performance is revenue. We optimize for every millisecond." },
                  { icon: Shield, title: "Total Trust", desc: "Complete transparency in every step we take." }
                ].map((item, idx) => (
                  <SpotlightCard key={idx} className="p-6 bg-[#050505]/50 backdrop-blur-xl border-white/5 group">
                    <item.icon className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
                  </SpotlightCard>
                ))}
             </div>
          </motion.div>
        </motion.section>

        {/* Impact Numbers - Reimagined */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-40 border-y border-white/5 py-16 px-4"
        >
          {[
            { value: '500+', label: 'Happy Partners', sub: 'From local heroes to global brands' },
            { value: '25+', label: 'Award Wins', sub: 'Recognized for elite engineering' },
            { value: '100M+', label: 'Lines of Code', sub: 'Written with precision & care' },
            { value: '300%', label: 'Avg. ROI Growth', sub: 'Transforming businesses effectively' }
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeInUp} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">{stat.value}</div>
              <div className="text-gray-300 font-bold uppercase tracking-widest text-xs mb-3">{stat.label}</div>
              <div className="text-gray-500 text-[10px] max-w-[150px] mx-auto leading-relaxed">{stat.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* The Codenclick DNA */}
        <section className="mb-40">
           <div className="text-center mb-20">
              <h2 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase">The Codenclick DNA</h2>
              <p className="text-gray-400 max-w-xl mx-auto">These aren't just values written on a wall. They are the rules we live by every single day.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Aggressive Transparency', 
                  content: 'No jargon. No excuses. You get a direct line to the people building your vision. We share the wins, and we are honest about the challenges.',
                  icon: MessageSquare,
                  color: 'text-emerald-400'
                },
                { 
                  title: 'Future-Proof Code', 
                  content: 'We build for 10x growth today. Our architectures are clean, documented, and built to handle millions of users without breaking a sweat.',
                  icon: Code2,
                  color: 'text-blue-400'
                },
                { 
                  title: 'Continuous Evolution', 
                  content: 'The digital world moves fast. We spend 10% of our week learning new tech to ensure you always have the most modern edge.',
                  icon: TrendingUp,
                  color: 'text-purple-400'
                }
              ].map((pill, i) => (
                <SpotlightCard key={i} className="p-10 border-white/5 relative overflow-hidden group">
                   <pill.icon className={`${pill.color} mb-6 transition-transform group-hover:scale-110`} size={40} />
                   <h3 className="text-2xl font-black text-white mb-6 leading-tight">{pill.title}</h3>
                   <p className="text-gray-400 leading-relaxed font-light">{pill.content}</p>
                   <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 -rotate-45 translate-x-12 translate-y-12 blur-2xl group-hover:bg-blue-500/10 transition-colors" />
                </SpotlightCard>
              ))}
           </div>
        </section>

        {/* Journey Section - "Our Promise" */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative rounded-[3rem] bg-gradient-to-br from-blue-600/10 via-[#050505] to-transparent border border-white/5 p-8 md:p-20 overflow-hidden mb-40"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] -z-10 rounded-full" />
          
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
              A Message to Our Partners
            </h2>
            <div className="space-y-6 text-xl text-gray-300 font-light leading-relaxed">
              <p>
                When we started Codenclick, we didn't want to be "another agency." We wanted to be the <span className="text-white font-bold">solution</span> for the frustration that business owners feel when they can't get clear answers or real value.
              </p>
              <p>
                Every project we take on is a commitment. A commitment to quality, a commitment to your timeline, and most importantly, a commitment to your ROl.
              </p>
              <p className="text-2xl text-blue-400 font-medium">
                We are building more than apps. We are building the future of your business.
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4 items-center">
               <span className="px-4 py-2 border border-white/10 rounded-full text-xs font-bold text-gray-500 uppercase tracking-widest">Team Driven</span>
               <span className="px-4 py-2 border border-white/10 rounded-full text-xs font-bold text-gray-500 uppercase tracking-widest">Client Obsessed</span>
               <span className="px-4 py-2 border border-white/10 rounded-full text-xs font-bold text-gray-500 uppercase tracking-widest">Tech Forward</span>
            </div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          className="text-center py-20 relative"
        >
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic">Ready to make history?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 font-light">
              Don't settle for "okay" when you can have "extraordinary." Let's build something that actually moves the needle for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="group relative px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-2xl overflow-hidden hover:scale-105 active:scale-95">
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link to="/portfolio" className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-white/10 transition-all">
                See Our Impact
              </Link>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-blue-600/5 blur-[150px] rounded-full -z-10" />
        </motion.section>

      </div>
    </div>
  );
};

export default About;
