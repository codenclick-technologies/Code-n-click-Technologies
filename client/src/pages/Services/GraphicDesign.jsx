import React from 'react';
import SEOHead from '../../components/utils/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  PenTool,
  Palette,
  Layout,
  Image,
  Monitor,
  ArrowRight,
  Layers,
  Feather,
  Box,
  CheckCircle2,
  Zap,
  Award
} from 'lucide-react';
import FAQ from '../../components/ui/FAQ';

const GraphicDesign = () => {

  const services = [
    {
      icon: <Palette className="w-8 h-8 text-indigo-400" />,
      title: "Brand Identity",
      description: "Logos, color palettes, and typography that tell your story and build lasting recognition."
    },
    {
      icon: <Layout className="w-8 h-8 text-blue-400" />,
      title: "UI/UX Design",
      description: <span>Intuitive, user-centric interfaces for <Link to="/services/web-development" className="text-blue-400 hover:underline">web and mobile apps</Link> that delight users.</span>
    },
    {
      icon: <Image className="w-8 h-8 text-cyan-400" />,
      title: "Marketing Materials",
      description: "Brochures, flyers, business cards, and banners that make a professional impact."
    },
    {
      icon: <Monitor className="w-8 h-8 text-purple-400" />,
      title: "Social Media Graphics",
      description: <span>Engaging visuals optimized for <Link to="/services/meta-ads" className="text-purple-400 hover:underline">Instagram, LinkedIn</Link>, Twitter, and Facebook feeds.</span>
    },
    {
      icon: <Box className="w-8 h-8 text-pink-400" />,
      title: "Packaging Design",
      description: "Eye-catching packaging solutions that stand out on the shelf and unboxing experiences."
    },
    {
      icon: <Feather className="w-8 h-8 text-emerald-400" />,
      title: "Illustration",
      description: "Custom illustrations and iconography to add a unique personality to your brand."
    }
  ];

  const techStack = [
    { name: "Photoshop", category: "Editing" },
    { name: "Illustrator", category: "Vector" },
    { name: "Figma", category: "UI/UX" },
    { name: "InDesign", category: "Layout" },
    { name: "After Effects", category: "Motion" },
    { name: "Canva", category: "Social" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We don't design in a vacuum. We learn what makes you unique and who you need to impress."
    },
    {
      number: "02",
      title: "Concepting",
      description: "We explore multiple creative paths to ensure we hit the mark. No stone left unturned."
    },
    {
      number: "03",
      title: "Design & Refine",
      description: "This is where the magic happens. We polish, tweak, and perfect until you are blown away."
    },
    {
      number: "04",
      title: "Final Delivery",
      description: "You get everything. Vector files, print-ready assets, and the keys to your new visual kingdom."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020205] text-white overflow-hidden">
      <SEOHead
        title="Best Graphic Design Company in Delhi | Codenclick Technologies"
        description="Top graphic design agency in Delhi. We create stunning logos, branding, and marketing materials for businesses in Delhi NCR to captivate audiences."
        keywords="Best Graphic Design Company Delhi, Logo Design Services Delhi NCR, Brochure Design Delhi, Social Media Graphics Agency India, Branding Studio Delhi"
        canonical="/services/graphic-design"
      />

      {/* 1. H1 - Main Service Title */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#020205] to-[#020205] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8"
          >
            <PenTool className="w-4 h-4" />
            <span>Crafting Visual Excellence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-gray-400"
          >
            Professional Graphic <br className="hidden md:block" />
            <span className="text-indigo-500">Design in Delhi</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2">
              Start Your Brand Journey <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 glass-button text-white rounded-xl font-bold flex items-center justify-center gap-2">
              See Our Designs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro Section (Pain Point -> Solution -> Trust) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#020205]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ugly Design is Costing You Sales</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            In a split second, your customer judges your business based on how it looks. If your branding is outdated or inconsistent, you lose trust before you even get a chance to speak. Design is not just decoration; it is your silent ambassador.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            At <strong>Codenclick Technologies</strong>, the top design studio in <strong>Delhi</strong>, we merge psychology with aesthetics. We create visual identities that don't just look pretty—they command authority, evoke emotion, and drive conversions. We ensure every pixel serves a business purpose.
          </p>
          <p className="text-indigo-400 font-medium text-lg">
            Brands in Delhi NCR we design for stay memorable.
          </p>
        </div>
      </section>

      {/* 3. What Is This Service? (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Visual Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We bring your brand to life across every medium in **Delhi NCR** and beyond.
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
                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-indigo-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
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

      {/* 4. Why This Service Is Important (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">Design = Trust</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6">
              {[
                "First Impressions: You have 0.05 seconds to make a good first impression. Design is the only variable.",
                "Perceived Value: Premium design allows you to charge premium prices.",
                "Brand Consistency: Uniform design establishes credibility. Chaos breeds doubt.",
                "Communication: Good design explains complex ideas simply. Bad design confuses."
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-indigo-500/20 p-2 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                  </div>
                  <p className="text-lg text-gray-300">{point}</p>
                </div>
              ))}
            </div>
            <div className="relative glass-panel p-8 rounded-3xl border border-white/10">
              <div className="absolute top-0 right-0 p-4">
                <PenTool className="w-12 h-12 text-blue-400 opacity-50" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">The ROI of Good Design</h3>
              <p className="text-gray-400 mb-6">
                Companies that prioritize design outperform their competitors by <span className="text-white font-bold">200%</span>. It's not an expense; it's the highest leverage investment you can make for your brand equity.
              </p>
              <Link to="/contact" className="text-indigo-400 font-bold hover:underline">Revamp your brand today &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 Technical Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Explanation */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Psychology of Color</h2>
              <p className="text-lg text-gray-400 mb-8">
                Great design follows rules. We select color palettes and typography not because they "look nice," but because they evoke specific psychological responses that align with your brand's mission.
              </p>
              
               <div className="space-y-6">
                <div className="flex gap-4">
                   <div className="w-16 h-16 rounded-xl bg-blue-600 shadow-lg shadow-blue-900/50 flex items-center justify-center text-white font-bold text-xs">Trust</div>
                   <div>
                      <h4 className="text-white font-bold">Blue (Security)</h4>
                      <p className="text-gray-400 text-sm">Often used for banks and tech to convey stability.</p>
                   </div>
                </div>
                 <div className="flex gap-4">
                   <div className="w-16 h-16 rounded-xl bg-orange-500 shadow-lg shadow-orange-900/50 flex items-center justify-center text-white font-bold text-xs">Action</div>
                   <div>
                      <h4 className="text-white font-bold">Orange (Energy)</h4>
                      <p className="text-gray-400 text-sm">Stimulates impulse buying and cheerfulness.</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
             <div className="relative">
                <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full" />
                <div className="relative bg-[#0F0F13] border border-white/10 rounded-xl p-6 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-start mb-8">
                         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                            <Zap className="w-6 h-6 text-black" />
                         </div>
                         <div className="text-right">
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Brand Book</div>
                             <div className="font-serif text-2xl text-white">Vortex</div>
                         </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-2 mb-8">
                       <div className="aspect-square bg-[#1a1a1a] rounded text-[10px] flex items-end p-2 text-gray-500 font-mono">#000</div>
                       <div className="aspect-square bg-indigo-500 rounded text-[10px] flex items-end p-2 text-indigo-200 font-mono">#6366F1</div>
                       <div className="aspect-square bg-purple-500 rounded text-[10px] flex items-end p-2 text-purple-200 font-mono">#A855F7</div>
                       <div className="aspect-square bg-white rounded text-[10px] flex items-end p-2 text-gray-400 font-mono">#FFF</div>
                    </div>

                    <div className="space-y-2">
                       <div className="h-2 bg-white/10 rounded w-3/4" />
                       <div className="h-2 bg-white/10 rounded w-1/2" />
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Our Process (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Creative Process</h2>
              <p className="text-xl text-gray-400 mb-8">
                A collaborative approach to bringing your vision to life.
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
              <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
              <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400" />
                    <span className="text-gray-300 font-medium">Unlimited Revisions (Standard)</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400" />
                    <span className="text-gray-300 font-medium">Full Copyright Ownership</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400" />
                    <span className="text-gray-300 font-medium">Print & Web Ready Formats</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Tools / Technologies (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Design Tech Stack</h2>
            <p className="text-xl text-gray-400">Industry standard tools for professional results.</p>
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
                <Zap className="w-4 h-4 text-indigo-400" />
                <span className="font-semibold">{tech.name}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-400">{tech.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Delhi Brands Hire Our Studio</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Design is intelligence made visible. We make your brand smarter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Business-Centric Design",
                desc: "We don't make art for art's sake. We design commercial assets intended to build trust, authority, and sales."
              },
              {
                title: "Unlimited Revisions",
                desc: "We work until you're happy. No hidden fees for 'extra rounds'. We are partners in perfection."
              },
              {
                title: "Consistency Across Channels",
                desc: "Your Instagram should look like your website. We ensure visual cohesion across every customer touchpoint."
              },
              {
                title: "Lightning Fast Turnaround",
                desc: "We know business moves fast. Our agile design sprints ensure you get quality assets when you need them."
              },
              {
                title: "Full Ownership",
                desc: "You paid for it, you own it. We provide all open source files (AI, PSD, Figma) upon project completion."
              },
              {
                title: "Versatile Styles",
                desc: "From corporate minimalist to vibrant consumer aesthetics, we adapt our style to fit your specific brand voice."
              }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-indigo-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Case Studies / Results (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Design Metrics</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Yes, we measure design impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">IT Consultant</h3>
                  <h3 className="text-2xl font-bold text-white">IT Consultant</h3>
                  <p className="text-indigo-400">Gurgaon Rebranding</p>
                </div>
                <Award className="text-yellow-500 w-10 h-10" />
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Challenge</span>
                  <span className="text-red-400">Outdated 90s Look</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Solution</span>
                  <span className="text-green-400">Modern Tech Identity</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Result</span>
                  <span className="text-white font-bold">30% Increase in Inbound Leads</span>
                </div>
              </div>
            </div>
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">D2C Brand</h3>
                  <h3 className="text-2xl font-bold text-white">D2C Brand</h3>
                  <p className="text-indigo-400">Delhi Social Media Styling</p>
                </div>
                <Award className="text-yellow-500 w-10 h-10" />
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Challenge</span>
                  <span className="text-red-400">Low Engagement</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Solution</span>
                  <span className="text-green-400">Visual Grid Strategy</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Result</span>
                  <span className="text-white font-bold">3x Engagement Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Pricing (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Engagement Models</h2>
            <p className="text-xl text-gray-400">Flexible ways to get world-class design.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Project */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col hover:border-indigo-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-2">Per Project</h3>
              <p className="text-lg text-gray-400 mb-6">One-off needs</p>
              <ul className="space-y-4 mb-8 flex-1 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Logo Design</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Brand Guidelines</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Website UI/UX</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Pitch Decks</li>
              </ul>
              <Link to="/contact" className="w-full py-4 rounded-xl border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all text-center font-bold">Get Quote</Link>
            </div>
            {/* Retainer */}
            <div className="glass-panel p-8 rounded-3xl border border-indigo-500 relative transform scale-105 shadow-2xl shadow-indigo-900/20 flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</div>
              <h3 className="text-2xl font-bold text-white mb-2">Design Retainer</h3>
              <p className="text-lg text-gray-400 mb-6">Your on-demand design team</p>
              <ul className="space-y-4 mb-8 flex-1 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Dedicated Designer</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Unlimited Requests/Queue</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> 24-48h Turnaround</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Slack Access</li>
              </ul>
              <Link to="/contact" className="w-full py-4 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-all text-center font-bold">Start Retainer</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQs (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">
              Common questions about our design process.
            </p>
          </div>

          <FAQ faqs={[
            {
              question: "Do you provide source files?",
              answer: "Yes, absolutely. You will receive all editable source files (Adobe Illustrator, Photoshop, Figma) along with print-ready PDFs and web-optimized images."
            },
            {
              question: "What if I don't like the initial design?",
              answer: "That's why we have unlimited revisions. We take your feedback, iterate, and refine until the design perfectly matches your vision."
            },
            {
              question: "Can you help with printing?",
              answer: "While we are a digital agency, we can prepare all files for print and even recommend high-quality printing vendors we trust."
            },
            {
              question: "Who owns the copyright?",
              answer: "You do. Once the final payment is made, full copyright ownership of all created assets transfers to you."
            },
            {
              question: "How long does a logo take?",
              answer: "Typically, a logo project takes 1-2 weeks. This allows time for research, concepting, and revisions to ensure it's timeless."
            }
          ]} />
        </div>
      </section>

      {/* 11. CTA (Strong) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto glass-panel rounded-[3rem] p-12 text-center relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need a Design Upgrade?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create visuals that captivate your audience and drive conversions.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform">
              Book Design Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GraphicDesign;
