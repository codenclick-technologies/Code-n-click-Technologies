import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Code, TrendingUp, Palette, Sparkles, Globe, Cpu, Smartphone, Rocket, Shield, Layers, Zap, Database } from 'lucide-react';
import { Link } from 'react-router-dom';


const Portfolio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const capabilities = [
    {
      id: 1,
      title: 'SaaS That Scales',
      description: 'We build SaaS products that investors love and customers can\'t live without.',
      details: 'Multi-tenant architecture? Checked. Real-time analytics? Standard. We build for your Series B, not just your MVP.',
      icon: TrendingUp,
      color: 'from-blue-600 to-indigo-600',
      keywords: ['Scalability', 'Multi-tenant', 'Cloud-Native'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      id: 2,
      title: 'High-Converting Commerce',
      description: 'Stop losing sales to a slow website. We build stores that fly.',
      details: 'From headless commerce to custom checkout flows, we engineer digital storefronts that turn visitors into repeat buyers.',
      icon: Globe,
      color: 'from-purple-600 to-pink-600',
      keywords: ['CRO', 'Headless', 'Speed'],
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80'
    },
    {
      id: 3,
      title: 'Apps Users Love',
      description: 'Native-like performance across iOS and Android without the double cost.',
      details: 'We build cross-platform apps that feel premium, perform flawlessly, and keep your users coming back.',
      icon: Smartphone,
      color: 'from-emerald-500 to-teal-500',
      keywords: ['React Native', 'Flutter', '60 FPS'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80'
    },
    {
      id: 4,
      title: 'Design That Sells',
      description: 'We don\'t make things "pretty". We make them effective.',
      details: 'User interfaces that are intuitive, accessible, and designed to move users towards your business goals.',
      icon: Palette,
      color: 'from-orange-500 to-red-500',
      keywords: ['UI/UX', 'Design Systems', 'Conversion'],
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80'
    },
    {
      id: 5,
      title: 'AI Integration',
      description: 'Stop talking about AI and start using it to save money.',
      details: 'We integrate LLMs and automation into your workflows to cut costs and speed up operations.',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-500',
      keywords: ['OpenAI', 'Automation', 'Efficiency'],
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80'
    },
    {
      id: 6,
      title: 'Fort Knox Security',
      description: 'Sleep easy knowing your data is locked down.',
      details: 'Security isn\'t an afterthought. It\'s baked into every line of code we write. Compliance ready.',
      icon: Shield,
      color: 'from-slate-700 to-gray-900',
      keywords: ['Security', 'Compliance', 'Peace of Mind'],
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80'
    }
  ];

  const technologies = [
    { name: 'React', icon: Code },
    { name: 'Node.js', icon: Database },
    { name: 'Next.js', icon: Layers },
    { name: 'AWS', icon: Globe },
    { name: 'Docker', icon: Layers },
    { name: 'AI/ML', icon: Cpu },
    { name: 'Cybersecurity', icon: Shield },
    { name: 'Mobile', icon: Smartphone }
  ];

  return (
    <>
      <Helmet>
        <title>Our Expertise - World Class Engineering | Codenclick Technologies</title>
        <meta name="description" content="Discover our capabilities in Enterprise SaaS, E-Commerce, Mobile App Development, and AI Solutions. We deliver engineering excellence." />
      </Helmet>

      {/* Main Container */}
      <div className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-gray-950" ref={containerRef}>

        {/* Abstract Backgrounds */}
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-blue-900/10 via-purple-900/5 to-transparent pointer-events-none" />
        <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Enhancement Header */}
          <div className="text-center mb-24 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel mb-8 border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <Sparkles size={18} className="text-amber-400" />
              <span className="text-sm font-semibold tracking-wide text-blue-100 uppercase">Engineering Excellence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-2xl tracking-tight"
            >
              Beyond Code.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pure Innovation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
            >
              We don't showcase projects; we define <span className="text-white font-medium">industry standards</span>.
              Our <Link to="/services/web-development" className="font-bold hover:opacity-80 transition-opacity">web development expertise</Link>, <Link to="/services/saas-development" className="font-bold hover:opacity-80 transition-opacity">SaaS solutions</Link>, and <Link to="/services/seo" className="font-bold hover:opacity-80 transition-opacity">SEO strategies</Link> power businesses worldwide. <Link to="/contact" className="font-bold hover:opacity-80 transition-opacity">Ready to start your project?</Link>
            </motion.p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl -z-10 blur-sm group-hover:blur-md transition-all duration-500 opacity-0 group-hover:opacity-100" />

                <div className="glass-panel h-full rounded-3xl p-8 border border-white/5 bg-gray-900/40 hover:bg-gray-800/40 transition-all duration-500 overflow-hidden relative group-hover:-translate-y-2">

                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cap.color} p-3 mb-8 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                      <cap.icon className="text-white w-full h-full" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                      {cap.title}
                    </h3>

                    <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {cap.description}
                    </p>

                    <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6" />

                    <p className="text-sm text-gray-500 mb-6 italic">
                      "{cap.details}"
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {cap.keywords.map((keyword, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-blue-300 font-medium">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-32 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl blur-3xl -z-10" />
            <div className="glass-panel rounded-3xl p-8 md:p-16 border border-white/5 bg-black/40 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">The Engineering Process</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-16">
                  Our methodology is a blend of scientific precision and creative chaos, distilled into four phases of execution.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: '01', title: 'Discovery', desc: 'Deep dive into ecosystem requirements.', icon: Search },
                  { step: '02', title: 'Architecture', desc: 'Designing scalable & secure systems.', icon: Layers },
                  { step: '03', title: 'Development', desc: 'Agile iteration with rigorous code reviews.', icon: Code },
                  { step: '04', title: 'Evolution', desc: 'Continuous deployment & optimization.', icon: Rocket }
                ].map((phase, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="text-6xl font-bold text-white/5 absolute -top-8 left-1/2 -translate-x-1/2 select-none">
                      {phase.step}
                    </div>
                    <div className="relative z-10 bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 transition-colors">
                      <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                      <p className="text-sm text-gray-400">{phase.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Stack Marquee */}
          <div className="mb-20">
            <h3 className="text-center text-gray-500 uppercase tracking-[0.2em] text-sm mb-10">Powering Next-Gen Solutions With</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, opacity: 1, color: '#60A5FA' }}
                  className="flex flex-col items-center gap-3 text-gray-400 cursor-pointer transition-all"
                >
                  <tech.icon size={32} />
                  <span className="text-sm font-semibold">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>


      </div>
    </>
  );
};

// Simple Icon component for process section ensuring no missing reference
const Search = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export default Portfolio;
