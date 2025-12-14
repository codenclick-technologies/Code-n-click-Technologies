import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github, X, Filter, Code, Palette, TrendingUp, Globe, Check, Sparkles } from 'lucide-react';
import Footer from '../components/layout/Footer';

// Define categories outside component so it's accessible everywhere
const categories = [
  { id: 'all', name: 'All Projects', icon: Globe },
  { id: 'web', name: 'Web Development', icon: Code },
  { id: 'saas', name: 'SaaS Products', icon: TrendingUp },
  { id: 'design', name: 'Design', icon: Palette },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
      description: 'Full-stack e-commerce solution with advanced product filtering and payment integration',
      longDescription: 'Built a comprehensive e-commerce platform featuring real-time inventory management, secure payment processing, advanced search and filtering, customer reviews, and an intuitive admin dashboard. The platform handles 10,000+ daily transactions.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      client: 'RetailCo Inc.',
      duration: '6 months',
      results: [
        '250% increase in online sales',
        '40% reduction in cart abandonment',
        '99.9% uptime achieved'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'SaaS Analytics Dashboard',
      category: 'saas',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      description: 'Real-time analytics platform with custom reporting and data visualization',
      longDescription: 'Developed a scalable SaaS analytics platform that processes millions of data points in real-time. Features include customizable dashboards, automated reporting, predictive analytics, and seamless integrations with popular tools.',
      technologies: ['Next.js', 'PostgreSQL', 'Redis', 'Chart.js', 'Docker'],
      client: 'DataInsights Ltd.',
      duration: '8 months',
      results: [
        '500+ enterprise clients',
        '50M+ data points processed daily',
        '4.8/5 customer satisfaction'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Brand Identity & Website',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
      description: 'Complete brand redesign with modern website and marketing materials',
      longDescription: 'Created a comprehensive brand identity system including logo design, color palette, typography, and brand guidelines. Designed and developed a stunning website that increased engagement by 300%.',
      technologies: ['Figma', 'Adobe CC', 'React', 'Tailwind CSS', 'Framer Motion'],
      client: 'TechStartup',
      duration: '4 months',
      results: [
        '300% increase in engagement',
        '85% brand recognition boost',
        'Award-winning design'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'HR Management System',
      category: 'saas',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      description: 'Enterprise HR platform with recruitment, payroll, and performance tracking',
      longDescription: 'Built a complete HR management solution featuring applicant tracking, employee onboarding, payroll processing, performance reviews, and advanced analytics. The system serves 200+ companies with 50,000+ employees.',
      technologies: ['React', 'NestJS', 'PostgreSQL', 'AWS', 'Microservices'],
      client: 'HRTech Solutions',
      duration: '12 months',
      results: [
        '200+ companies using platform',
        '70% reduction in HR admin time',
        'SOC 2 Type II certified'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Real Estate Portal',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      description: 'Property listing platform with virtual tours and AI-powered recommendations',
      longDescription: 'Developed a modern real estate portal featuring 360° virtual tours, AI-powered property recommendations, advanced search with map integration, and agent dashboard. Platform hosts 100,000+ property listings.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps API', 'TensorFlow'],
      client: 'RealtyGroup',
      duration: '7 months',
      results: [
        '100K+ active property listings',
        '45% increase in lead generation',
        '3M+ monthly visitors'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Mobile Banking App Design',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      description: 'Award-winning mobile banking app with seamless UX and modern UI',
      longDescription: 'Designed an intuitive mobile banking experience focusing on security, accessibility, and ease of use. The app features biometric authentication, instant transfers, financial insights, and a clean, modern interface.',
      technologies: ['Figma', 'Sketch', 'Principle', 'After Effects'],
      client: 'DigitalBank',
      duration: '5 months',
      results: [
        '1M+ app downloads',
        '4.9/5 app store rating',
        'Red Dot Design Award winner'
      ],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Portfolio - Our Work | Codenclick Technologies</title>
        <meta name="description" content="Explore our portfolio of successful web development, SaaS, and design projects. See how we've helped businesses achieve their digital goals." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gray-950">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>

        {/* Hero Section with Parallax */}
        <motion.div 
          ref={heroRef}
          style={{ opacity, scale }}
          className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-blue-500/30 backdrop-blur-sm text-blue-300 text-sm font-semibold mb-8"
              >
                <Sparkles size={16} className="animate-pulse" />
                Our Premium Work
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
              >
                Projects That{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                    Deliver Results
                  </span>
                  <motion.div 
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              >
                From startups to enterprises, we've built digital solutions that drive growth, 
                enhance user experiences, and deliver <span className="text-blue-400 font-semibold">measurable ROI</span>.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* Category Filter with Enhanced Design */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className={`relative flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold transition-all duration-300 overflow-hidden ${
                    isActive
                      ? 'text-white shadow-2xl shadow-blue-500/50'
                      : 'text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl"
                      style={{ backgroundSize: '200% 100%' }}
                      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  )}
                  <Icon size={18} className="relative z-10" />
                  <span className="relative z-10">{category.name}</span>
                </motion.button>
              );
            })}</motion.div>
        </div>

        {/* Projects Grid with Stagger Animation */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>

        {/* CTA Section with Gradient Animation */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl p-12 text-center overflow-hidden"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90" 
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradient 6s ease infinite'
              }} 
            />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
            
            <div className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Ready to Start Your Project?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              >
                Let's discuss how we can bring your vision to life and deliver exceptional results.
              </motion.p>
              <motion.a
                href="/contact"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-2xl font-bold shadow-2xl hover:shadow-white/30 transition-all duration-300"
              >
                Get In Touch
                <ExternalLink size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

const ProjectCard = ({ project, index, onClick }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group cursor-pointer perspective"
      style={{
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm hover:border-white/40 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/25">
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
          backgroundSize: '300% 300%',
          animation: 'gradient 3s ease infinite',
          padding: '2px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude'
        }} />

        {/* Project Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
          
          {/* Category Badge with Glow */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/50"
          >
            {categories.find(c => c.id === project.category)?.name.split(' ')[0]}
          </motion.div>
        </div>

        {/* Project Info */}
        <div className="relative p-6 z-10">
          <motion.h3 
            className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
            whileHover={{ x: 5 }}
          >
            {project.title}
          </motion.h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + i * 0.05 + 0.4 }}
                className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all"
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs border border-white/10">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* View Button */}
          <motion.button 
            className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all"
            whileHover={{ x: 5 }}
          >
            View Case Study
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ExternalLink size={16} className="group-hover:rotate-45 transition-transform" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 rounded-3xl max-w-5xl w-full my-8 overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/20"
      >
        {/* Header with Parallax Image */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
          
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors shadow-lg"
          >
            <X size={24} />
          </motion.button>

          <motion.div 
            className="absolute bottom-8 left-8 right-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold uppercase tracking-wider mb-4 shadow-lg shadow-blue-500/50">
              {categories.find(c => c.id === project.category)?.name}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              {project.title}
            </h2>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Project Info Grid with Animation */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 pb-8 border-b border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {[
              { label: 'Client', value: project.client },
              { label: 'Duration', value: project.duration },
              { label: 'Category', value: categories.find(c => c.id === project.category)?.name }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center md:text-left"
              >
                <p className="text-gray-500 text-sm mb-2">{item.label}</p>
                <p className="text-white font-bold text-lg">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
              About the Project
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              {project.longDescription}
            </p>
          </motion.div>

          {/* Technologies with Stagger */}
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-white font-semibold border border-white/20 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Results with Check Icons */}
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
              Key Results
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-start gap-3 p-5 rounded-2xl bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent border border-blue-500/20 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg">
                    <Check size={16} className="text-white" />
                  </div>
                  <p className="text-white font-semibold">{result}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/30 transition-all"
            >
              <ExternalLink size={20} />
              View Live Project
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-white/5 text-white rounded-2xl font-bold border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <Github size={20} />
              View Code
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
