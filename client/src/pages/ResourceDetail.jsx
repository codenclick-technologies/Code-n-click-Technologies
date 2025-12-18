import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Share2, Clock, Eye, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { resourcesAPI } from '../services/api';
import { fadeInUp } from '../utils/animations';

const ResourceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedResources, setRelatedResources] = useState([]);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const data = await resourcesAPI.getOne(id);
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
  }, [id]);

  const shareUrl = window.location.href;
  const shareTitle = resource?.title || '';

  const handleShare = (platform) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    };
    
    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Link copied to clipboard!');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold mb-4">Resource not found</h2>
        <p className="text-gray-400 mb-8">The resource you're looking for doesn't exist.</p>
        <button 
          onClick={() => navigate('/resources')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Resources
        </button>
      </div>
    );
  }

  const readingTime = Math.ceil((resource.content?.replace(/<[^>]*>/g, '').length || 0) / 1000);

  return (
    <div className="min-h-screen bg-gray-950 bg-noise">
      <Helmet>
        <title>{resource.title} | Code'N'Click Resources</title>
        <meta name="description" content={resource.content?.replace(/<[^>]*>/g, '').substring(0, 160)} />
        <meta property="og:title" content={resource.title} />
        <meta property="og:description" content={resource.content?.replace(/<[^>]*>/g, '').substring(0, 160)} />
        <meta property="og:image" content={resource.thumbnail} />
        <meta property="og:url" content={shareUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section with Image */}
      {resource.thumbnail && (
        <div className="relative h-[500px] w-full overflow-hidden">
          <img 
            src={resource.thumbnail} 
            alt={resource.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/80 to-gray-950"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <button 
                  onClick={() => navigate('/resources')}
                  className="text-white/80 hover:text-white flex items-center gap-2 mb-6 transition-colors group"
                >
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
                  Back to Resources
                </button>

                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/90 backdrop-blur-md border border-blue-400/30 text-white text-sm font-bold uppercase tracking-wider mb-4">
                  {resource.category}
                </span>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {resource.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <User size={18} />
                    <span>{resource.author || 'Code-n-Click Team'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{new Date(resource.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>{readingTime} min read</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {!resource.thumbnail && (
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-12">
            <button 
              onClick={() => navigate('/resources')}
              className="text-gray-400 hover:text-white flex items-center gap-2 mb-8 transition-colors"
            >
              <ArrowLeft size={20} /> Back to Resources
            </button>

            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-4">
              {resource.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {resource.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm pb-8 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{resource.author || 'Code-n-Click Team'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(resource.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{readingTime} min read</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Article Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }}
          className="
            prose prose-invert prose-lg max-w-none 
            prose-headings:text-white prose-headings:font-bold
            prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl 
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-bold
            prose-code:text-blue-300 prose-code:bg-gray-900 prose-code:px-2 prose-code:py-1 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800 prose-pre:rounded-xl
            prose-ul:text-gray-300 prose-ol:text-gray-300
            prose-li:mb-2
            prose-img:rounded-xl prose-img:shadow-2xl
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-gray-900/50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg
          "
          dangerouslySetInnerHTML={{ __html: resource.content }}
        />

        {/* Share Section */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <h3 className="text-white text-xl font-bold mb-4">Share this article</h3>
          <div className="flex gap-3">
            <button 
              onClick={() => handleShare('facebook')}
              className="p-3 rounded-lg bg-gray-900 text-gray-400 hover:text-white hover:bg-blue-600 transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook size={20} />
            </button>
            <button 
              onClick={() => handleShare('twitter')}
              className="p-3 rounded-lg bg-gray-900 text-gray-400 hover:text-white hover:bg-sky-500 transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter size={20} />
            </button>
            <button 
              onClick={() => handleShare('linkedin')}
              className="p-3 rounded-lg bg-gray-900 text-gray-400 hover:text-white hover:bg-blue-700 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin size={20} />
            </button>
            <button 
              onClick={copyLink}
              className="p-3 rounded-lg bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              aria-label="Copy link"
            >
              <LinkIcon size={20} />
            </button>
          </div>
        </motion.div>

        {/* Related Resources */}
        {relatedResources.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.6 }}
            className="mt-20 pt-12 border-t border-gray-800"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedResources.map((related) => (
                <div
                  key={related.id}
                  onClick={() => navigate(`/resources/${related.id}`)}
                  className="group cursor-pointer bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 overflow-hidden transition-all hover:scale-105"
                >
                  {related.thumbnail && (
                    <img 
                      src={related.thumbnail} 
                      alt={related.title} 
                      className="w-full h-40 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <span className="text-xs text-blue-400 font-medium uppercase">{related.category}</span>
                    <h3 className="text-white font-bold mt-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                      {related.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </article>
    </div>
  );
};

export default ResourceDetail;
