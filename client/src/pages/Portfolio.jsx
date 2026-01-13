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
      title: 'Enterprise Resource Planning System',
      description: 'A robust ERP solution designed for multi-location hospitality management, featuring real-time inventory tracking, automated workflows, and comprehensive analytics.',
      category: 'Enterprise Software',
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
        <title>Our Portfolio - Transforming Ideas Into Digital Success | Codenclick Technologies</title>
        <meta name="description" content="Explore our portfolio of cutting-edge digital solutions. From AI-powered platforms to enterprise systems, see how we turn ambitious ideas into market-leading products." />
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
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-2xl tracking-tight"
            >
              Transforming Ideas<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Into Digital Success</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 mx-auto leading-relaxed font-light mb-12"
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
                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                <div className="relative h-full glass-panel rounded-3xl overflow-hidden border border-white/10 bg-gray-900/40 hover:bg-gray-800/40 transition-all duration-500">
                  
                  {/* Project Gradient Background */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
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
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${project.color} text-white font-semibold hover:scale-105 transition-transform text-sm`}
                    >
                      Build Similar Solution
                      <ArrowRight size={16} />
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
            className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build Something Extraordinary?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Let's transform your vision into a market-leading digital product. Our team is ready to bring your ideas to life with cutting-edge technology and proven expertise.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:scale-105 transition-transform inline-flex items-center gap-2 shadow-lg shadow-blue-500/30"
                >
                  Start Your Project
                  <Rocket size={20} />
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 rounded-xl border-2 border-white/20 text-white font-bold hover:bg-white/5 transition-colors"
                >
                  Explore Services
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
