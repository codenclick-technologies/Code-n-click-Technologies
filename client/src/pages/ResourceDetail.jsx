import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/utils/SEO';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, User, Tag, Share2, Clock, Eye, Facebook, Twitter, Linkedin, Link as LinkIcon, Code2, Layout, Zap, Hash } from 'lucide-react';
import { resourcesAPI } from '../services/api';
import { fadeInUp } from '../utils/animations';
import ArticleAudioPlayer from '../components/utils/ArticleAudioPlayer';


const ResourceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedResources, setRelatedResources] = useState([]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const data = await resourcesAPI.getBySlug(slug);
        setResource(data);
        
        // Fetch related resources (same category)
        const allResources = await resourcesAPI.getAll({ status: 'PUBLISHED' });
        const related = allResources
          .filter(r => r.category === data.category && r.id !== data.id)
          .slice(0, 3);
        setRelatedResources(related);
      } catch (error) {
        console.error('Error fetching resource:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchResource();
  }, [slug]);

  const shareUrl = window.location.href;

  const handleShare = (platform) => {
    let url = '';
    const text = `Check out this article: ${resource?.title}`;
    
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        return;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!'); 
    } catch (err) {
      console.error('Failed to copy link', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 font-medium">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold font-serif mb-4">Resource not found</h2>
        <p className="text-gray-400 mb-8">The resource you're looking for doesn't exist.</p>
        <button 
          onClick={() => navigate('/resources')}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-bold flex items-center gap-2 transition-all hover:scale-105"
        >
          <ArrowLeft size={20} /> Back to Resources
        </button>
      </div>
    );
  }

  const readingTime = Math.ceil((resource.content?.replace(/<[^>]*>/g, '').length || 0) / 1000);



  return (
    <div className="min-h-screen bg-gray-950 bg-noise font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <SEO 
        title={resource.title}
        description={resource.content?.replace(/<[^>]*>/g, '').substring(0, 160)}
        imageUrl={resource.thumbnail}
        type="article"
        author={resource.author}
        keywords={resource.tags?.join(', ') || resource.category}
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": resource.title,
            "image": resource.thumbnail || "https://codenclick.in/default-og.png",
            "author": {
              "@type": "Person",
              "name": resource.author || "Codenclick Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Codenclick Technologies",
              "logo": {
                "@type": "ImageObject",
                "url": "https://codenclick.in/logo.png"
              }
            },
            "datePublished": resource.publishedAt || resource.createdAt,
            "dateModified": resource.updatedAt,
            "articleBody": resource.content?.replace(/<[^>]*>/g, '').substring(0, 5000), // Truncate if necessary
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": shareUrl
            }
          },
          ...(resource.autoSchema ? [resource.autoSchema] : [])
        ]}
      />

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-[0%] z-50"
        style={{ scaleX }}
      />



      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-end justify-center pb-20 pt-48 overflow-hidden">
        {/* Background Image with Parallax-like fix */}
        <div className="absolute inset-0 z-0">
          {resource.thumbnail ? (
             <img 
               src={resource.thumbnail} 
               alt={resource.title} 
               className="w-full h-full object-cover opacity-60"
             />
          ) : (
             <div className="w-full h-full bg-gradient-to-br from-gray-900 to-blue-900/40" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-transparent to-gray-950/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <span className="px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest backdrop-blur-md shadow-xl shadow-blue-500/5">
                {resource.category}
              </span>
              <span className="flex items-center gap-2 text-gray-400 text-sm font-medium uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full backdrop-blur-md">
                <Clock size={14} /> {readingTime} min read
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] tracking-tight text-shadow-lg break-words">
              {resource.title}
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-[2px]">
                   <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center">
                      <User size={20} className="text-white" />
                   </div>
                </div>
                <div className="text-left">
                  <div className="text-white font-bold">{resource.author}</div>
                  <div className="text-xs uppercase tracking-wider text-blue-400">Author</div>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-gray-800" />
              <div className="flex items-center gap-3">
                 <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                    <Calendar size={20} className="text-white" />
                 </div>
                 <div className="text-left">
                  <div className="text-white font-bold">
                    {new Date(resource.attendance || resource.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">Published</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 pb-24 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Content */}
          <div className="lg:col-span-8">
            <motion.div 
               className="bg-gray-900/30 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
            >
              {/* Feature: Audio Player */}
              <ArticleAudioPlayer title={resource.title} content={resource.content || ''} />

              {resource.content?.startsWith('__CODE_BLOG__') ? (
                  // ... Code Blog Rendering (Simplified reuse)
                 <div className="prose prose-invert max-w-none text-center py-20">
                    <Zap size={48} className="mx-auto text-yellow-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Interactive Component</h3>
                    <p>This is an interactive code experience. Please view on desktop for best results.</p>
                 </div>
              ) : (
                <div 
                  className="prose prose-xl prose-invert max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white prose-h1:text-5xl prose-h1:mb-8 prose-h1:leading-tight prose-h2:text-3xl prose-h2:text-blue-200 prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-b prose-h2:border-blue-500/20 prose-h2:pb-4 prose-h3:text-2xl prose-h3:text-purple-200 prose-h3:mt-12 prose-h3:mb-4 prose-p:text-gray-200 prose-p:leading-8 prose-p:font-light prose-p:mb-6 prose-a:text-blue-400 prose-a:no-underline prose-a:font-medium hover:prose-a:text-blue-300 hover:prose-a:underline prose-strong:text-blue-400 prose-strong:font-bold prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-900/10 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:font-serif prose-blockquote:text-xl prose-blockquote:text-blue-100 prose-blockquote:shadow-inner prose-ul:list-disc prose-ul:pl-6 prose-ul:text-gray-200 prose-ul:space-y-2 prose-li:marker:text-blue-500 prose-img:rounded-3xl prose-img:shadow-2xl prose-img:border prose-img:border-gray-800 prose-img:my-12 prose-img:w-full prose-hr:border-gray-800 prose-hr:my-16"
                  dangerouslySetInnerHTML={{ __html: resource.content }}
                />
              )}
            </motion.div>

            {/* Share Footer */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gray-900 border border-gray-800 rounded-2xl p-8">
               <div>
                  <h3 className="text-white font-serif text-2xl font-bold mb-2">Enjoyed the read?</h3>
                  <p className="text-gray-400">Share this article with your network.</p>
               </div>
               <div className="flex gap-3">
                  <button onClick={() => handleShare('twitter')} className="p-3 rounded-full bg-gray-800 hover:bg-[#1DA1F2] hover:text-white text-gray-400 transition-all"><Twitter size={20} /></button>
                  <button onClick={() => handleShare('facebook')} className="p-3 rounded-full bg-gray-800 hover:bg-[#4267B2] hover:text-white text-gray-400 transition-all"><Facebook size={20} /></button>
                  <button onClick={() => handleShare('linkedin')} className="p-3 rounded-full bg-gray-800 hover:bg-[#0077b5] hover:text-white text-gray-400 transition-all"><Linkedin size={20} /></button>
                  <button onClick={copyLink} className="p-3 rounded-full bg-gray-800 hover:bg-green-600 hover:text-white text-gray-400 transition-all"><LinkIcon size={20} /></button>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-10">
            {/* Author Profile */}
            <div className="sticky top-32">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-blue-600/30"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 mx-auto rounded-full p-1 bg-gradient-to-br from-blue-500 to-purple-500 mb-6 shadow-lg shadow-blue-500/20">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Codenclick" 
                      alt="Author" 
                      className="w-full h-full rounded-full bg-gray-900 object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 font-serif">{resource.author}</h3>
                  <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-6">Content Creator</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Sharing insights on web development, SEO strategies, and the future of digital tech.
                  </p>
                  <button onClick={() => navigate('/contact')} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg shadow-blue-600/25">
                    Contact Author
                  </button>
                </div>
              </div>

              {/* Related Posts */}
              {relatedResources.length > 0 && (
                <div className="mt-10">
                  <h4 className="text-white font-serif font-bold text-xl mb-6 flex items-center gap-2">
                    <Hash size={20} className="text-blue-500" /> Related Topics
                  </h4>
                  <div className="space-y-4">
                    {relatedResources.map((item, idx) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => navigate(`/resources/${item.slug}`)}
                        className="group flex gap-4 cursor-pointer p-4 rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5"
                      >
                        <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-gray-800">
                           <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div>
                           <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider mb-1 block">{item.category}</span>
                           <h5 className="text-white font-medium text-sm leading-snug group-hover:text-blue-300 transition-colors line-clamp-2">
                             {item.title}
                           </h5>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetail;
