import React from 'react';
import { Helmet } from 'react-helmet-async';
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
  Eye,
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

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
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
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      <Helmet>
        <title>Graphic Design Services | Code'N'Click</title>
        <meta name="description" content="Professional graphic design services. We create stunning brand identities, UI/UX designs, and marketing materials that captivate your audience." />
        <meta name="keywords" content="graphic design, branding, logo design, ui/ux design, web design, marketing materials, visual identity" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Graphic Design",
              "provider": {
                "@type": "Organization",
                "name": "Code'N'Click"
              },
              "description": "Visual systems and brand assets that resonate with your audience and scale across channels.",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "Custom Quote"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-gray-950 to-gray-950 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
           <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
           <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-400 text-sm font-medium mb-8"
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
            Elevate your brand with world-class design. We create cohesive visual systems 
            that communicate your value and leave a lasting impression.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:ring-offset-gray-900"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-300 transition-all duration-200 bg-gray-800/50 border border-gray-700 rounded-full hover:bg-gray-800 hover:text-white backdrop-blur-sm"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-10 border-y border-gray-800/50 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-wider mb-8">Creative Suite</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {techStack.map((tech, index) => (
               <div key={index} className="flex items-center gap-2">
                 <span className="text-lg font-semibold text-gray-300">{tech.name}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From pixels to print, we handle all your visual communication needs.</p>
          </div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="group p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500/50 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="mb-6 p-3 rounded-xl bg-gray-950 inline-block border border-gray-800 group-hover:border-indigo-500/30 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Creative Process</h2>
              <p className="text-gray-400 mb-8 text-lg">
                We combine artistic intuition with strategic thinking to deliver designs that work.
              </p>
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-900/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
              <div className="relative rounded-2xl border border-gray-800 bg-gray-950/80 backdrop-blur-xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <Eye className="w-6 h-6 text-pink-400" />
                    <div>
                      <div className="font-semibold">Attention Grabbing</div>
                      <div className="text-sm text-gray-400">Designs that stop the scroll</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <Layers className="w-6 h-6 text-blue-400" />
                    <div>
                      <div className="font-semibold">Consistent Branding</div>
                      <div className="text-sm text-gray-400">Unified look across all channels</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                    <div>
                      <div className="font-semibold">Print Ready</div>
                      <div className="text-sm text-gray-400">High-resolution files included</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-indigo-500/30">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                How many revisions do I get?
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                We typically include 3 rounds of revisions in our standard packages. This ensures we can refine the design to your satisfaction without getting stuck in endless loops.
              </div>
            </details>
            <details className="group bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-indigo-500/30">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                What file formats will I receive?
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                You will receive all necessary formats, including AI/EPS (vector source files), PDF, JPG, and PNG (transparent background) for digital use.
              </div>
            </details>
            <details className="group bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-indigo-500/30">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg">
                Do you do logo redesigns?
                <span className="transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Yes! Whether you need a subtle refresh or a complete rebrand, we can modernize your existing logo while retaining its core identity.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Stand Out?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's create designs that turn heads and win customers.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-700 hover:scale-105 shadow-lg shadow-indigo-600/30"
          >
            Start Your Design Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesign;
