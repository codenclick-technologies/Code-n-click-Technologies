import React, { useRef, useEffect } from 'react';
import SEO from '../../components/utils/SEO';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
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
  Award,
  ArrowUpRight,
  MousePointer2,
  Palette,
  Terminal,
  BarChart3
} from 'lucide-react';
import SpotlightCard from '../../components/ui/SpotlightCard';

// --- Animated Counter Component (Optimized) ---
const Counter = ({ value, label, detail, icon: Icon, color, glow }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const num = Math.round(latest);
    return value.includes('+') ? `${num}+` : value.includes('%') ? `${num}%` : num;
  });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value);
      const controls = animate(count, numericValue, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <div ref={ref} className="relative group p-8 lg:p-10 rounded-[2.5rem] bg-[#030303]/80 backdrop-blur-2xl border border-white/5 hover:border-white/10 transition-all duration-700 h-full flex flex-col items-center text-center overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      {/* Icon & Beam */}
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} p-[1.5px] mb-8 relative z-10 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
        <div className="w-full h-full bg-[#0A0A0B] rounded-2xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className={`absolute -inset-4 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} style={{ backgroundColor: glow }} />
      </div>

      <motion.span className="text-5xl lg:text-6xl font-black text-white mb-4 tracking-tighter">
        {rounded}
      </motion.span>

      <h4 className="text-sm font-black uppercase tracking-[0.3em] text-blue-400 mb-4">{label}</h4>
      <p className="text-sm text-gray-400 leading-relaxed font-light">{detail}</p>
    </div>
  );
};

const Services = () => {

  const services = [
    {
      id: 'web-development',
      title: 'Custom Web Apps',
      description: 'We build fast, secure, and stunning web experiences using the latest tech. From simple sites to complex platforms, we\'ve got you covered.',
      icon: Code2,
      link: '/services/web-development',
      color: 'from-blue-600 via-indigo-500 to-blue-400',
      tags: ['Modern Tech', 'Fast', 'Scalable']
    },
    {
      id: 'saas-development',
      title: 'Smart SaaS Tools',
      description: 'Turn your idea into a powerful software product. We design and engineer multi-tenant platforms that are ready for millions of users.',
      icon: Cloud,
      link: '/services/saas-development',
      color: 'from-purple-600 via-pink-500 to-purple-400',
      tags: ['Cloud Native', 'API First', 'Ready to Grow']
    },
    {
      id: 'meta-ads',
      title: 'Social Ad Growth',
      description: 'Get your brand in front of the right people on FB & Instagram. Our data-driven strategies turn clicks into loyal customers.',
      icon: Target,
      link: '/services/meta-ads',
      color: 'from-pink-600 via-rose-500 to-orange-400',
      tags: ['ROI Focused', 'Creative Ads', 'Conversion']
    },
    {
      id: 'google-ads',
      title: 'Google Ad Mastery',
      description: 'Be found when your customers are searching. We manage precision search and shopping campaigns that dominate the front page.',
      icon: Search,
      link: '/services/google-ads',
      color: 'from-yellow-600 via-amber-500 to-orange-400',
      tags: ['High Intent', 'Search Ads', 'Analytics']
    },
    {
      id: 'graphic-design',
      title: 'Brand Identity',
      description: 'Stunning visuals that tell your story. From logos to full UI/UX design, we craft identities that people remember.',
      icon: PenTool,
      link: '/services/graphic-design',
      color: 'from-indigo-600 via-violet-500 to-purple-400',
      tags: ['Clean UI', 'Brand Guide', 'Modern']
    },
    {
      id: 'seo',
      title: 'Organic Reach (SEO)',
      description: 'Dominating search results isn\'t magic, it\'s strategy. We optimize your site so you stay at the top without paying for every click.',
      icon: TrendingUp,
      link: '/services/seo',
      color: 'from-emerald-600 via-teal-500 to-cyan-400',
      tags: ['Keywords', 'Growth', 'Traffic']
    }
  ];

  const process = [
    {
      step: "01",
      title: "We Listen First",
      description: "We dive deep into your world to understand your goals and audience before we touch any code.",
      icon: MousePointer2,
      color: "from-blue-600 to-indigo-500"
    },
    {
      step: "02",
      title: "Smart Strategy",
      description: "Our experts craft a simple, effective roadmap tailored specifically to your business growth.",
      icon: Palette,
      color: "from-purple-600 to-pink-500"
    },
    {
      step: "03",
      title: "Clean Execution",
      description: "We build and launch with precision, keeping you updated every step of the way. No surprises.",
      icon: Terminal,
      color: "from-orange-600 to-amber-500"
    },
    {
      step: "04",
      title: "Scale & Support",
      description: "Launch is just day one. We stay by your side to monitor, tweak, and help you scale further.",
      icon: BarChart3,
      color: "from-emerald-600 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020205] text-white">
      <SEO
        title="Best Digital Marketing & Web Development Services in Delhi NCR"
        description="Top-rated digital agency in Delhi. We offer custom web development, SaaS engineering, SEO, and performance marketing to scale your business."
        keywords="Digital Marketing Agency Delhi, Web Development Company Delhi, SEO Services Delhi, SaaS Development India, Graphic Design Delhi"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Architectural Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-40 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        </div>

        {/* Tech Grid Mask */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '100px 100px',
            maskImage: 'radial-gradient(circle at center, black, transparent 90%)'
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[10px] font-black uppercase tracking-[0.3em] mb-8 backdrop-blur-md"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span>Premium Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9] text-white"
          >
            Capabilities That Help <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Delhi Brands Thrive.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            We don't just deliver services; we deliver solutions that matter. As a premier **Delhi** agency, we combine <Link to="/services/saas-development" className="text-white hover:text-blue-400 transition-colors border-b border-white/20">smart technology</Link> with marketing that actually finds your next customer.
          </motion.p>
        </div>
      </section>

      {/* Stats Area (Butter Smooth Counters) */}
      <section className="py-16 relative overflow-hidden bg-[#020205] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Counter value="100+" label="Brands Served" detail="Successfully launched products across various industries." icon={CheckCircle2} color="from-blue-600 to-indigo-500" glow="rgba(59, 130, 246, 0.4)" />
            <Counter value="98%" label="Client Retention" detail="Our partners stay with us because they trust our code." icon={Users} color="from-purple-600 to-pink-500" glow="rgba(168, 85, 247, 0.4)" />
            <Counter value="500+" label="Live Platforms" detail="High-performance applications running globally." icon={Zap} color="from-orange-600 to-amber-500" glow="rgba(249, 115, 22, 0.4)" />
            <Counter value="10+" label="Years of Impact" detail="A decade of helping founders build their vision." icon={Award} color="from-emerald-600 to-teal-500" glow="rgba(16, 185, 129, 0.4)" />
          </div>
        </div>
      </section>

      {/* Core Services Grid (Spotlight Cards) */}
      <section className="py-24 relative overflow-hidden bg-[#020205]" id="services">
        <div className="max-w-7xl mx-auto px-6 z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 tracking-tighter">What We <span className="text-blue-500">Do Best.</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">Integrated solutions designed to work together for maximum business impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <SpotlightCard className="h-full bg-[#030303]/90 backdrop-blur-3xl border border-white/5 group-hover:border-white/10 p-10 rounded-[2.5rem] flex flex-col group overflow-hidden transition-all duration-700">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-500">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-light mb-8 group-hover:text-gray-300 transition-colors duration-500">
                      {service.description}
                    </p>

                    <div className="mt-auto pt-8 border-t border-white/5 flex flex-wrap gap-2 mb-8">
                      {service.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] uppercase font-black tracking-widest text-gray-400 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all duration-500">{tag}</span>
                      ))}
                    </div>

                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-white group-hover:text-blue-400 transition-all duration-500"
                    >
                      Process Insight <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                    </Link>

                    {/* Subtle Internal Glow */}
                    <div className={`absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 blur-[40px] transition-all duration-1000 rounded-full`} />
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Elite Process Section */}
      <section className="py-24 relative bg-[#020205] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 text-balance">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 tracking-tighter">How We Work <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">With You.</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">A proven framework for delivering excellence, without the corporate headache.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Subtle connecting line for Desktop */}
            <div className="hidden lg:block absolute top-[100px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group p-8 lg:p-10 rounded-[2.5rem] bg-[#030303]/80 backdrop-blur-2xl border border-white/5 hover:border-white/20 transition-all duration-500 h-full flex flex-col"
                >
                  <span className="absolute top-6 right-8 text-7xl font-black text-white/[0.03] group-hover:text-white/[0.06] transition-colors pointer-events-none">{step.step}</span>

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-500">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-light mb-4">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-24 relative overflow-hidden bg-[#020205]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Available for Projects</span>
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">Ready to Build Something <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Amazing Together?</span></h2>
          <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">
            Stop waiting for the "perfect time". Let's discuss your vision and turn it into a high-performance reality today.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block relative group/btn px-4"
          >
            <div className="absolute inset-x-0 inset-y-0 bg-blue-600 blur-2xl opacity-20 group-hover/btn:opacity-40 transition-opacity" />
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center gap-4 px-12 py-6 text-xs font-black uppercase tracking-[0.3em] text-black bg-white rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-2xl"
            >
              Initiate Project
              <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
