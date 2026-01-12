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
  Zap
} from 'lucide-react';

const GraphicDesign = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <Palette className="w-8 h-8 text-indigo-400" />,
      title: "Brand Identity",
      description: "Logos, color palettes, and typography that tell your story and build lasting recognition."
    },
    {
      icon: <Layout className="w-8 h-8 text-blue-400" />,
      title: "UI/UX Design",
      description: "Intuitive, user-centric interfaces for web and mobile applications that delight users."
    },
    {
      icon: <Image className="w-8 h-8 text-cyan-400" />,
      title: "Marketing Materials",
      description: "Brochures, flyers, business cards, and banners that make a professional impact."
    },
    {
      icon: <Monitor className="w-8 h-8 text-purple-400" />,
      title: "Social Media Graphics",
      description: "Engaging visuals optimized for Instagram, LinkedIn, Twitter, and Facebook feeds."
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
      description: "Understanding your brand values, target audience, and design preferences."
    },
    {
      number: "02",
      title: "Concepting",
      description: "Sketching and brainstorming multiple creative directions for you to choose from."
    },
    {
      number: "03",
      title: "Design & Refine",
      description: "Developing high-fidelity designs and iterating based on your feedback."
    },
    {
      number: "04",
      title: "Final Delivery",
      description: "Providing all source files and assets in the formats you need for print and digital."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-hidden">
      <SEOHead
        title="Graphic Design Services | Code'N'Click"
        description="Professional graphic design services. We create stunning brand identities, UI/UX designs, and marketing materials that captivate your audience."
        keywords="Best Graphic Design Company Delhi, Best Graphic Design Company Faridabad, Premium Branding Services Delhi, Premium Branding Services Faridabad, Top Logo Designer Delhi, Top UI/UX Design Agency Faridabad, graphic design Delhi, graphic design Faridabad, branding"
        canonical="/services/graphic-design"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#030014] to-[#030014] pointer-events-none" />
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
            Design That Speaks <br className="hidden md:block" />
            <span className="text-indigo-500">Louder Than Words</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            We transform abstract ideas into powerful visual narratives that resonate with your audience and elevate your brand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
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

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Design Solutions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From pixel-perfect UI to print-ready assets, we do it all.
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

      {/* Tech Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Creative Tools</h2>
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

       {/* Process Section */}
       <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Design Process</h2>
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

      {/* CTA Section */}
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
