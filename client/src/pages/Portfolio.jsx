import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github, X, Code, TrendingUp, Palette, Sparkles, Check, Globe, ArrowRight } from 'lucide-react';
import Footer from '../components/layout/Footer';

// Define categories
const categories = [
  { id: 'all', name: 'All Projects', icon: Globe },
  { id: 'web', name: 'Web Dev', icon: Code },
  { id: 'saas', name: 'SaaS', icon: TrendingUp },
  { id: 'design', name: 'Brand Design', icon: Palette },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
      description: 'Full-stack e-commerce solution with advanced product filtering.',
      longDescription: 'Built a comprehensive e-commerce platform featuring real-time inventory management, secure payment processing, advanced search and filtering, customer reviews, and an intuitive admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      client: 'RetailCo Inc.',
      duration: '6 months',
      results: ['250% Sales Growth', '99.9% Uptime', 'Automated workflows'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'SaaS Analytics Dashboard',
      category: 'saas',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      description: 'Real-time analytics platform with custom reporting.',
      longDescription: 'Developed a scalable SaaS analytics platform that processes millions of data points in real-time. Features include customizable dashboards and predictive analytics.',
      technologies: ['Next.js', 'PostgreSQL', 'Redis', 'Docker'],
      client: 'DataInsights',
      duration: '8 months',
      results: ['50M+ Data Points', 'Enterprise Ready', 'Real-time Sync'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Modern Brand Identity',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
      description: 'Complete brand redesign with modern aesthetics.',
      longDescription: 'Created a comprehensive brand identity system including logo design, color palette, typography, and brand guidelines.',
      technologies: ['Figma', 'React', 'Tailwind', 'Framer Motion'],
      client: 'TechStartup',
      duration: '4 months',
      results: ['300% Engagement', 'Award Winning', 'Modern UI'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'HR Management System',
      category: 'saas',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      description: 'Enterprise HR platform with recruitment and payroll.',
      longDescription: 'Built a complete HR management solution featuring applicant tracking, employee onboarding, payroll processing, and performance reviews.',
      technologies: ['React', 'NestJS', 'PostgreSQL', 'AWS'],
      client: 'HRTech Solutions',
      duration: '1 year',
      results: ['200+ Companies', 'Auto-Payroll', 'SOC 2 Certified'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Luxury Real Estate',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      description: 'Property listing platform with virtual tours.',
      longDescription: 'Developed a modern real estate portal featuring 360° virtual tours, AI-powered property recommendations, and map integration.',
      technologies: ['Vue.js', 'Laravel', 'Maps API', 'AI'],
      client: 'RealtyGroup',
      duration: '7 months',
      results: ['100K Listings', 'Virtual Tours', 'Fast Search'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Fintech App Design',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      description: 'Award-winning mobile banking app UI/UX.',
      longDescription: 'Designed an intuitive mobile banking experience focusing on security, accessibility, and ease of use.',
      technologies: ['Figma', 'Principle', 'iOS', 'Android'],
      client: 'NeoBank',
      duration: '5 months',
      results: ['1M+ Downloads', '4.9 Star Rating', 'Best UX Award'],
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
        <title>Portfolio - Premium Work | Codenclick Technologies</title>
        <meta name="description" content="Explore our premium portfolio of web development, SaaS, and brand design projects." />
      </Helmet>

      {/* Main Container */}
      <div className="min-h-screen pt-24 pb-20 relative overflow-hidden" ref={containerRef}>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Hero Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6"
            >
              <Sparkles size={16} className="text-yellow-400" />
              <span className="text-sm font-medium text-blue-200">World Class Engineering</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-lg"
            >
              Our Masterpieces
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              We don't just write code; we craft <span className="text-white font-semibold">digital experiences</span> that define brands and drive growth.
            </motion.p>
          </div>

          {/* Glass Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105'
                    : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <cat.icon size={16} />
                <span className="font-medium">{cat.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid (Bento Style) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setSelectedProject(project)}
                    className="group relative cursor-pointer"
                >
                  <div className="glass-panel glass-card-shine rounded-3xl overflow-hidden h-full hover:border-blue-500/30 transition-colors">
                    
                    {/* Image Container */}
                    <div className="h-64 overflow-hidden relative">
                       <motion.img 
                         whileHover={{ scale: 1.1 }}
                         transition={{ duration: 0.6 }}
                         src={project.image} 
                         alt={project.title} 
                         className="w-full h-full object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-80" />
                       
                       <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-panel text-xs text-white font-medium">
                         {categories.find(c => c.id === project.category)?.name}
                       </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 relative">
                       <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                         {project.title}
                       </h3>
                       <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                         {project.description}
                       </p>
                       
                       <div className="flex flex-wrap gap-2 mb-4">
                         {project.technologies.slice(0, 3).map(tech => (
                           <span key={tech} className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-300 border border-white/5">
                             {tech}
                           </span>
                         ))}
                       </div>

                       <div className="flex items-center text-blue-400 text-sm font-semibold group-hover:gap-2 transition-all">
                         View Project <ArrowRight size={16} className="ml-1" />
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <Footer />
      </div>

      {/* Project Modal (Ultra Premium) */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[60] flex items-center justify-center p-4"
  >
    <motion.div
      initial={{ scale: 0.9, y: 50, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.9, y: 50, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
      className="glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] border border-white/10 relative"
    >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full glass-button flex items-center justify-center text-white"
        >
          <X size={20} />
        </button>

        <div className="relative h-80 w-full overflow-hidden">
           <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/50 to-transparent" />
           <div className="absolute bottom-6 left-6 md:left-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-blue-300 text-lg">{project.client}</p>
           </div>
        </div>

        <div className="p-6 md:p-10 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
                <div>
                   <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                     <Sparkles size={20} className="text-purple-400" /> Overview
                   </h3>
                   <p className="text-gray-300 leading-relaxed text-lg">{project.longDescription}</p>
                </div>

                <div>
                   <h3 className="text-xl font-bold text-white mb-3">Key Results</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {project.results.map((res, i) => (
                       <div key={i} className="glass-panel p-4 rounded-xl flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                            <Check size={16} />
                          </div>
                          <span className="font-medium text-gray-200">{res}</span>
                       </div>
                     ))}
                   </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="glass-panel p-6 rounded-2xl">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-white/5 rounded-lg text-sm text-blue-200 border border-white/10">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="space-y-3">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-full py-4 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                        <ExternalLink size={20} /> View Live Site
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="w-full py-4 rounded-xl glass-button text-white font-bold flex items-center justify-center gap-2">
                        <Github size={20} /> View Code
                    </a>
                </div>
            </div>
        </div>
    </motion.div>
  </motion.div>
);

export default Portfolio;
