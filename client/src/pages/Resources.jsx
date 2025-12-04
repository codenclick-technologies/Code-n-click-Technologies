import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Search, BookOpen, Video, FileText, ArrowRight, Tag, Mail, Zap, TrendingUp, Code2 } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import SpotlightCard from '../components/ui/SpotlightCard';

import { useNavigate } from 'react-router-dom';
import { resourcesAPI } from '../services/api';

const Resources = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await resourcesAPI.getAll({ status: 'PUBLISHED' });
      setResources(response || []);
    } catch (error) {
      console.error('Error fetching resources:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredResources = resources.filter(r => 
    r.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    r.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 bg-noise pt-32 pb-20">
      <Helmet>
        <title>Resources, Guides & Insights | Code'N'Click</title>
        <meta name="description" content="Explore our library of articles, guides, and videos on web development, SEO, SaaS growth, and digital marketing. Stay ahead with expert insights." />
        <meta name="keywords" content="web development blog, seo guides, saas metrics, digital marketing trends, react tutorials, next.js performance" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Knowledge Hub</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Insights for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Builders</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Deep dives, tutorials, and industry reports to help you build better products and grow your business.
          </motion.p>

          {/* Search Bar */}
          <motion.div variants={fadeInUp} className="max-w-xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="text-gray-500 group-focus-within:text-blue-400 transition-colors" size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search by topic, keyword, or title..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all shadow-lg shadow-black/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          {loading ? (
             <div className="col-span-3 text-center py-20">
               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
             </div>
          ) : filteredResources.map((item) => (
            <motion.div 
              key={item.id} 
              variants={fadeInUp} 
              className="md:col-span-1 cursor-pointer"
              onClick={() => navigate(`/resources/${item.id}`)}
            >
              <SpotlightCard className="h-full p-8 group relative overflow-hidden flex flex-col">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {item.thumbnail && (
                  <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover rounded-xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-white/10 text-white backdrop-blur-sm border border-white/5">
                      <FileText size={24} />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10 backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="text-gray-400 mb-6 flex-grow line-clamp-3" dangerouslySetInnerHTML={{ __html: item.content }} />
                  
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <span className="text-sm text-gray-500 flex items-center gap-2">
                      <Tag size={14} /> {new Date(item.updatedAt).toLocaleDateString()}
                    </span>
                    <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-xl" />
          <div className="absolute inset-0 bg-noise opacity-20" />
          <div className="relative z-10 p-12 md:p-20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/20 text-blue-400 mb-8">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Ahead of the Curve</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
              Join 5,000+ developers and founders getting the latest insights on tech, growth, and design delivered to their inbox weekly.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-black/30 border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-4">No spam, unsubscribe at any time.</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Resources;
