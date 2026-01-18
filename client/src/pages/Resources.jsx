import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Video, FileText, ArrowRight, Tag, Mail, Zap, TrendingUp, Code2, Clock } from 'lucide-react';
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
      setResources(Array.isArray(response) ? response : []);
    } catch (error) {
      console.error('Error fetching resources:', error);
      setResources([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredResources = React.useMemo(() => {
    return resources.filter(r => {
      const lowerSearch = searchTerm.toLowerCase();
      const titleMatch = r.title?.toLowerCase().includes(lowerSearch) || false;
      const categoryMatch = r.category?.toLowerCase().includes(lowerSearch) || false;
      const tagsMatch = r.tags?.some(tag => tag.toLowerCase().includes(lowerSearch)) || false;
      // Excerpt match is better than full content match for performance
      const excerptMatch = r.excerpt?.toLowerCase().includes(lowerSearch) || false;
      
      return titleMatch || categoryMatch || tagsMatch || excerptMatch;
    });
  }, [resources, searchTerm]);

  return (
    <div className="min-h-screen bg-[#020205] bg-noise pt-32 pb-20">
      <Helmet>
        <title>Digital Growth Resources & Guides | Codenclick Technologies Delhi</title>
        <meta name="description" content="Expert insights on web development, SEO, and digital marketing from Delhi's top agency. Tutorials, guides, and industry reports to help you grow." />
        <meta name="keywords" content="digital marketing blog Delhi, web development tutorials, SEO guides Delhi, business growth tips, Codenclick Technologies resources" />
      </Helmet>

      <div className="w-full md:w-[95%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-tight">
            Insights for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Builders</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-gray-400 max-w-4xl mx-auto mb-8 md:mb-12 font-medium leading-relaxed px-4">
            Deep dives, tutorials, and industry reports to help you build better products and grow your business. Learn about <Link to="/services/web-development" className="text-blue-400 hover:text-blue-300 underline">modern web development</Link>, <Link to="/services/seo" className="text-green-400 hover:text-green-300 underline">SEO best practices</Link>, <Link to="/services/saas-development" className="text-purple-400 hover:text-purple-300 underline">SaaS growth strategies</Link>, and <Link to="/services/google-ads" className="text-yellow-400 hover:text-yellow-300 underline">performance marketing</Link>. Want to work with us? <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">Get in touch</Link> or explore our <Link to="/services" className="text-blue-400 hover:text-blue-300 underline">full range of services</Link>.
          </motion.p>

          {/* Search Bar */}
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto relative group px-2 md:px-0">
            <div className="absolute inset-y-0 left-2 md:left-0 pl-4 flex items-center pointer-events-none">
              <Search className="text-gray-500 group-focus-within:text-blue-400 transition-colors" size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search by topic..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 md:py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all shadow-lg shadow-black/20 text-sm md:text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {loading ? (
             <div className="col-span-3 text-center py-20">
               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
             </div>
          ) : filteredResources.length === 0 ? (
            <div className="col-span-3 text-center py-20">
              <BookOpen size={48} className="mx-auto text-gray-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No Resources Found</h3>
              <p className="text-gray-400">
                {searchTerm ? 'Try adjusting your search term' : 'Check back soon for new content!'}
              </p>
              <p className="text-gray-500 mt-4 text-sm">
                Total resources: {resources.length} | Filtered: {filteredResources.length}
              </p>
            </div>
          ) : 
            filteredResources.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="md:col-span-1"
            >
              <SpotlightCard 
                className={`group h-full cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
                  item.content?.startsWith('__CODE_BLOG__') 
                    ? 'hover:border-purple-500/50' 
                    : 'hover:border-blue-500/50'
                }`}
              >
                <div 
                  onClick={() => navigate(`/resources/${item.slug}`)}
                  className="h-full flex flex-col"
                >
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden">
                    {item.thumbnail ? (
                      <img 
                        src={item.thumbnail} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
                        <FileText size={64} className="text-blue-400/20" />
                      </div>
                    )}
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                      <span className="px-3 py-1 rounded-lg bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl border border-white/10">
                        {item.category}
                      </span>
                      {item.content?.startsWith('__CODE_BLOG__') && (
                        <span className="px-3 py-1 rounded-lg bg-purple-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl border border-white/10 flex items-center gap-1">
                          <Zap size={10} fill="currentColor" />
                          Interactive
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-px w-8 bg-blue-500/50"></div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{new Date(item.updatedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                    </div>

                    <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors line-clamp-2 mb-4 leading-tight tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed mb-8 flex-1">
                      {item.excerpt || (item.content?.startsWith('__CODE_BLOG__') 
                        ? 'Explore this interactive code experiment and tutorial.' 
                        : item.content?.replace(/<[^>]*>/g, '').substring(0, 120))}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                        <Clock size={12} className="text-blue-500/50" />
                        <span>Read Detail</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-400 font-bold text-xs group-hover:gap-3 transition-all uppercase tracking-widest bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                        <span>Open Insight</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))
          }
        </div>

        {/* Newsletter Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-xl" />
          <div className="absolute inset-0 bg-noise opacity-20" />
          <div className="relative z-10 p-8 md:p-20 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-blue-500/20 text-blue-400 mb-6 md:mb-8">
              <Mail className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Stay Ahead of the Curve</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base md:text-lg">
              Join 5,000+ developers and founders getting the latest insights on tech, growth, and design delivered to their inbox weekly.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-black/30 border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors w-full"
              />
              <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 w-full sm:w-auto">
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
