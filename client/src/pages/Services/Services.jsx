import React from 'react';
import SEO from '../../components/utils/SEO';
import { motion } from 'framer-motion';
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
  CheckCircle2
} from 'lucide-react';

const Services = () => {
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
      id: 'web-development',
      title: 'Web Development',
      description: 'High-performance websites and web apps built with React and Next.js for speed and scalability.',
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      link: '/services/web-development',
      color: 'blue'
    },
    {
      id: 'saas-development',
      title: 'SaaS Development',
      description: 'Scalable cloud-native applications and multi-tenant platforms designed for growth.',
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      link: '/services/saas-development',
      color: 'purple'
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads',
      description: 'Data-driven Facebook and Instagram campaigns that drive conversions and ROI.',
      icon: <Target className="w-8 h-8 text-pink-400" />,
      link: '/services/meta-ads',
      color: 'pink'
    },
    {
      id: 'google-ads',
      title: 'Google Ads',
      description: 'Capture high-intent traffic with precision search, display, and shopping campaigns.',
      icon: <Search className="w-8 h-8 text-yellow-400" />,
      link: '/services/google-ads',
      color: 'yellow'
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      description: 'Stunning brand identities, UI/UX design, and marketing materials that captivate.',
      icon: <PenTool className="w-8 h-8 text-indigo-400" />,
      link: '/services/graphic-design',
      color: 'indigo'
    },
    {
      id: 'seo',
      title: 'SEO Services',
      description: 'Technical SEO and content strategies to dominate search results and drive organic traffic.',
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      link: '/services/seo',
      color: 'green'
    }
  ];

  const stats = [
    { label: "Projects Delivered", value: "100+" },
    { label: "Client Retention", value: "98%" },
    { label: "Years Experience", value: "10+" },
    { label: "Team Experts", value: "25+" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into your business goals, challenges, and target audience to build a solid foundation."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Our experts craft a tailored roadmap, selecting the right technologies and channels for success."
    },
    {
      step: "03",
      title: "Execution",
      description: "We build, launch, and optimize with precision, keeping you in the loop every step of the way."
    },
    {
      step: "04",
      title: "Growth",
      description: "Continuous monitoring, testing, and scaling to ensure long-term ROI and business impact."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      <SEO 
        title="Digital Services | Web, SaaS, Marketing & Design"
        description="Comprehensive digital services tailored for growth. From custom web and SaaS development to performance marketing and SEO, we build solutions that scale."
        keywords="web development, saas development, digital marketing, seo services, graphic design, google ads, meta ads"
      >
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Code'N'Click",
              "description": "Full-service digital agency specializing in development, design, and marketing.",
              "url": "https://codenclick.com/services",
              "areaServed": "Global",
              "priceRange": "$$"
            }
          `}
        </script>
      </SEO>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
           <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
           <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8"
          >
            <Zap className="w-4 h-4" />
            <span>End-to-End Digital Solutions</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400"
          >
            Expertise That Drives <br className="hidden md:block" />
            <span className="text-blue-500">Real Growth</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            We don't just deliver services; we deliver results. Whether you need a scalable SaaS platform, 
            a high-converting website, or a marketing strategy that dominates, we have the experts to make it happen.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 border-y border-gray-800/50 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Integrated solutions designed to work together for maximum impact.</p>
          </div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div 
                key={service.id}
                variants={fadeIn}
                className="group relative p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:bg-gray-800/50 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-${service.color}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`mb-6 p-3 rounded-xl bg-gray-950 inline-block border border-gray-800 group-hover:border-${service.color}-500/30 group-hover:scale-110 transition-all duration-300 relative z-10`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 relative z-10">
                  {service.description}
                </p>
                <Link 
                  to={service.link}
                  className={`inline-flex items-center text-${service.color}-400 font-semibold group-hover:translate-x-1 transition-transform relative z-10`}
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us / Trust Section */}
      <section className="py-24 bg-gray-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner With Us?</h2>
              <p className="text-gray-400 mb-8 text-lg">
                We combine technical excellence with business acumen. We don't just build software; we build assets that grow your business.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center text-blue-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Reliability First</h4>
                    <p className="text-gray-400">We write clean, testable code and build robust systems that don't break when you scale.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-900/20 flex items-center justify-center text-purple-400">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Extension of Your Team</h4>
                    <p className="text-gray-400">We work collaboratively, communicating clearly and transparently throughout the project.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-900/20 flex items-center justify-center text-green-400">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Global Standards</h4>
                    <p className="text-gray-400">We adhere to international best practices for security, accessibility, and performance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
              <div className="relative rounded-2xl border border-gray-800 bg-gray-950/80 backdrop-blur-xl p-8 shadow-2xl">
                 {/* Abstract visual representation of process/trust */}
                 <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400" />
                          <div className="h-2 w-32 bg-gray-800 rounded-full" />
                        </div>
                        <div className="h-2 w-12 bg-gray-800 rounded-full" />
                      </div>
                    ))}
                    <div className="p-4 rounded-lg bg-blue-900/20 border border-blue-500/30 text-center text-blue-400 font-semibold">
                      100% Satisfaction Guarantee
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A proven framework for delivering excellence, on time and on budget.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-gray-800/50 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's discuss your goals and how we can help you achieve them.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-600/30"
          >
            Book a Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
