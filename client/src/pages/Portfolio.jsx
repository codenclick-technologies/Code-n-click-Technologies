import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Sparkles, Rocket, TrendingUp, Zap, ArrowRight, ExternalLink, Play } from 'lucide-react';
import { Link } from 'react-router-dom';


const Portfolio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Marketing Automation Platform',
      description: 'A comprehensive automation engine that revolutionized social media marketing workflows, integrating seamlessly with major platforms to deliver unprecedented efficiency.',
      category: 'SaaS Platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      gradient: 'from-blue-600 via-cyan-500 to-blue-400',
      results: [
        '300% increase in campaign performance',
        '85% reduction in manual tasks',
        '250% improvement in ROI'
      ],
      techStack: ['React', 'Node.js', 'AI/ML', 'Cloud APIs'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Enterprise ERP System',
      description: 'A robust ERP solution designed for multi-location hospitality management, featuring real-time inventory tracking, automated workflows, and comprehensive analytics.',
      category: 'Enterprise Software',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
      gradient: 'from-purple-600 via-pink-500 to-purple-400',
      results: [
        '20% increase in operational uptime',
        '25% boost in user engagement',
        '99.9% system reliability achieved'
      ],
      techStack: ['Laravel', 'React', 'MySQL', 'REST APIs'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'High-Converting E-Commerce Platform',
      description: 'A lightning-fast headless commerce solution that transformed online shopping experience with custom checkout flows and advanced personalization.',
      category: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
      gradient: 'from-emerald-600 via-teal-500 to-emerald-400',
      results: [
        '40% increase in conversion rate',
        '0.8 second average page load',
        '65% growth in mobile traffic'
      ],
      techStack: ['Shopify', 'React', 'GraphQL', 'AWS'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 4,
      title: 'Real-Time Financial Analytics Dashboard',
      description: 'An enterprise-grade analytics platform processing millions of transactions daily, delivering actionable insights through interactive visualizations.',
      category: 'Data Analytics',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      gradient: 'from-orange-600 via-red-500 to-orange-400',
      results: [
        '10M+ data points processed daily',
        'Sub-100ms query response time',
        '99.7% prediction accuracy'
      ],
      techStack: ['React', 'Python', 'PostgreSQL', 'D3.js'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Cross-Platform Healthcare Application',
      description: 'A HIPAA-compliant mobile solution empowering healthcare professionals with offline-first architecture and real-time patient data synchronization.',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
      gradient: 'from-indigo-600 via-purple-500 to-indigo-400',
      results: [
        '50,000+ active users',
        '4.8/5 average app rating',
        '100% offline functionality'
      ],
      techStack: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'AI Content Generation Platform',
      description: 'An intelligent content creation system leveraging GPT-4 to automate content production, SEO optimization, and multi-language publishing.',
      category: 'AI Platform',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      gradient: 'from-pink-600 via-rose-500 to-pink-400',
      results: [
        '100,000+ pieces of content generated',
        '95+ average SEO score',
        '70% time savings for content teams'
      ],
      techStack: ['Next.js', 'OpenAI', 'TypeScript', 'Vercel'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const categories = ['All', 'SaaS Platform', 'Enterprise Software', 'E-Commerce', 'Data Analytics', 'Mobile App', 'AI Platform'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Our Work | Proven Web & App Development Projects in Delhi</title>
        <meta name="description" content="Explore our portfolio of successful projects delivered for Delhi NCR businesses. From AI-powered SaaS platforms to high-conversion e-commerce stores." />
      </Helmet>

      {/* Main Container */}
      <div className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-[#020205]" ref={containerRef}>

        {/* Abstract Backgrounds */}
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-blue-900/10 via-purple-900/5 to-transparent pointer-events-none" />
        <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="text-center mb-20 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel mb-8 border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <Sparkles size={18} className="text-amber-400" />
              <span className="text-sm font-semibold tracking-wide text-blue-100 uppercase">Our Work</span>
            </motion.div>

          <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white"
            >
              Building the<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Future, Today.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400 mx-auto leading-relaxed mb-12"
              style={{ maxWidth: '1200px' }}
            >
              We build products that users love and businesses depend on. From <Link to="/services/web-development" className="text-blue-400 hover:text-blue-300 underline">custom web applications</Link> to <Link to="/services/saas-development" className="text-purple-400 hover:text-purple-300 underline">enterprise-grade SaaS platforms</Link>, every project is engineered for scale and performance. Our <Link to="/services/seo" className="text-green-400 hover:text-green-300 underline">SEO expertise</Link> ensures your product gets discovered, while our <Link to="/services/google-ads" className="text-yellow-400 hover:text-yellow-300 underline">performance marketing</Link> drives measurable growth. Whether you need <Link to="/services/graphic-design" className="text-indigo-400 hover:text-indigo-300 underline">stunning UI/UX design</Link> or <Link to="/services/meta-ads" className="text-pink-400 hover:text-pink-300 underline">data-driven advertising campaigns</Link>, we deliver results that matter. Want to learn more? Check out <Link to="/about" className="text-cyan-400 hover:text-cyan-300 underline">our story</Link> or <Link to="/contact" className="text-blue-400 hover:text-blue-300 underline font-semibold">start your project today</Link>.
            </motion.p>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="relative h-full bg-[#030303]/90 backdrop-blur-3xl border border-white/5 hover:border-white/10 transition-all duration-700 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
                  
                  {/* Project Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className={`absolute top-6 left-6 z-20 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-gradient-to-r ${project.color} text-white shadow-xl`}>
                      {project.category}
                    </div>
                  </div>

                  <div className="p-8 lg:p-10 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-500 tracking-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-gray-400 leading-relaxed mb-8 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="space-y-2 mb-6">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Zap size={16} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      to="/contact"
                      className="mt-auto group/btn relative inline-flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-500"
                    >
                      Process Insight
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32"
          >
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '500+', label: 'Happy Clients' },
              { number: '99.9%', label: 'Uptime Achieved' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[3rem] p-12 md:p-20 text-center bg-[#030303] border border-white/5"
          >
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] rounded-full" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Ready to build something <span className="text-blue-500">remarkable?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Let's transform your vision into a market-leading digital product. Our team is ready to bring your ideas to life with cutting-edge technology and proven expertise.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-10 py-6 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-2xl flex items-center gap-3 group"
                >
                  Initiate Project
                  <Rocket size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="px-10 py-6 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all flex items-center gap-3"
                >
                  Explore Capabilities
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default Portfolio;
