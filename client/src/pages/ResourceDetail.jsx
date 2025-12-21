import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, User, Tag, Share2, Clock, Eye, Facebook, Twitter, Linkedin, Link as LinkIcon, Code2, Layout, Zap } from 'lucide-react';
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
            <div className="w-[95%] max-w-7xl mx-auto px-6 sm:px-8 pb-16 w-full">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <button 
                  onClick={() => navigate('/resources')}
                  className="text-white/60 hover:text-white flex items-center gap-2 mb-8 transition-all hover:-translate-x-1 group"
                >
                  <ArrowLeft size={20} /> 
                  <span className="text-sm font-medium tracking-wide">Back to Resources</span>
                </button>

                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest leading-none">
                    {resource.category}
                  </span>
                  <div className="h-px w-12 bg-gray-700"></div>
                  <span className="text-gray-400 text-xs font-medium uppercase tracking-widest">{readingTime} min read</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight max-w-4xl">
                  {resource.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-8 text-white/50 text-sm border-t border-white/10 pt-8 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {resource.author?.[0] || 'C'}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{resource.author || 'Code-n-Click Team'}</div>
                      <div className="text-[11px] uppercase tracking-wider text-gray-500">Author</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl">
                    <Calendar size={16} className="text-blue-400" />
                    <span className="font-medium">{new Date(resource.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <article className="w-[95%] max-w-7xl mx-auto px-6 sm:px-8 py-20">
        {!resource.thumbnail && (
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-16">
            <button 
              onClick={() => navigate('/resources')}
              className="text-gray-500 hover:text-white flex items-center gap-2 mb-10 transition-all hover:-translate-x-1"
            >
              <ArrowLeft size={20} /> <span className="text-sm font-medium">Back to Resources</span>
            </button>

            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
                {resource.category}
              </span>
              <div className="h-px w-12 bg-gray-800"></div>
              <span className="text-gray-500 text-xs font-medium uppercase tracking-widest">{readingTime} min read</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              {resource.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 text-gray-500 text-sm pb-10 border-b border-gray-800/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold border border-gray-700">
                  {resource.author?.[0] || 'C'}
                </div>
                <div>
                  <div className="text-gray-300 font-semibold">{resource.author || 'Code-n-Click Team'}</div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-600 italic">Expert Author</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar size={16} />
                <span>{new Date(resource.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
            >
          {resource.content?.startsWith('__CODE_BLOG__') ? (() => {
            let codeData = { html: '', css: '', js: '' };
            try {
              codeData = JSON.parse(resource.content.replace('__CODE_BLOG__', ''));
            } catch (e) {
              console.error('Failed to parse code blog:', e);
            }

            return (
              <div className="space-y-8">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="flex items-center justify-between px-6 py-4 bg-gray-800/50 border-b border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-gray-400 text-xs font-mono ml-2 flex items-center gap-2">
                         <Zap size={14} className="text-blue-400" /> interactive_preview.html
                      </span>
                    </div>
                  </div>
                  <div className="min-h-[500px] w-full bg-white">
                    <iframe
                      title="Code Preview"
                      srcDoc={`
                        <!DOCTYPE html>
                        <html>
                          <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <style>
                              body { 
                                margin: 0; 
                                padding: 40px; 
                                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                                line-height: 1.6;
                              }
                              ${codeData.css}
                            </style>
                          </head>
                          <body>
                            ${codeData.html}
                            <script>
                              try {
                                ${codeData.js}
                              } catch (err) {
                                console.error('JS Error:', err);
                              }
                            </script>
                          </body>
                        </html>
                      `}
                      className="w-full min-h-[500px] border-none"
                    />
                  </div>
                </div>
              </div>
            );
          })() : (
            <div 
              className="
                prose prose-invert prose-lg max-w-none 
                prose-headings:text-white prose-headings:font-black prose-headings:tracking-tight
                prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-gray-800
                prose-h3:text-2xl 
                prose-p:text-gray-400 prose-p:leading-relaxed prose-p:mb-8 prose-p:text-[1.1rem]
                prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
                prose-strong:text-white prose-strong:font-bold
                prose-code:text-blue-300 prose-code:bg-blue-500/10 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800 prose-pre:rounded-2xl prose-pre:shadow-2xl
                prose-ul:text-gray-400 prose-ol:text-gray-400
                prose-li:mb-3
                prose-img:rounded-3xl prose-img:shadow-2xl prose-img:border prose-img:border-gray-800
                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-gray-900/50 prose-blockquote:px-8 prose-blockquote:py-6 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-gray-300
              "
              dangerouslySetInnerHTML={{ __html: resource.content }}
            />
          )}

          <style>{`
            .prose .text-gradient-animate {
              background: linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6);
              background-size: 200% auto;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: gradient-text-anim 3s linear infinite;
              font-weight: bold;
              display: inline-block;
            }
            @keyframes gradient-text-anim {
              0% { background-position: 0% 50%; }
              100% { background-position: 200% 50%; }
            }
            .prose .ql-font-outfit { font-family: 'Outfit', sans-serif; }
            .prose .ql-font-roboto { font-family: 'Roboto', sans-serif; }
            .prose .ql-font-playfair { font-family: 'Playfair Display', serif; }
            .prose table {
              width: 100%;
              border-collapse: collapse;
              margin: 2rem 0;
              background: rgba(255,255,255,0.05);
              border-radius: 12px;
              overflow: hidden;
            }
            .prose th, .prose td {
              border: 1px solid rgba(255,255,255,0.1);
              padding: 12px 16px;
              text-align: left;
            }
            .prose th {
              background: rgba(255,255,255,0.1);
              color: white;
              font-weight: bold;
            }
          `}</style>
        </motion.div>

            {/* Share Section */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.4 }}
              className="mt-16 pt-10 border-t border-gray-800/50"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-1">Found this helpful?</h3>
                  <p className="text-gray-500 text-sm">Spread the knowledge with your network.</p>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleShare('facebook')}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-gray-400 hover:text-white hover:bg-blue-600 transition-all focus:ring-2 focus:ring-blue-500/50"
                  >
                    <Facebook size={18} />
                    <span className="text-sm font-semibold">Share</span>
                  </button>
                  <button 
                    onClick={() => handleShare('twitter')}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-gray-400 hover:text-white hover:bg-sky-500 transition-all focus:ring-2 focus:ring-sky-500/50"
                  >
                    <Twitter size={18} />
                    <span className="text-sm font-semibold">Tweet</span>
                  </button>
                  <button 
                    onClick={copyLink}
                    className="p-3 rounded-xl bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
                  >
                    <LinkIcon size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Author Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <User size={80} />
              </div>
              <h4 className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">Article Author</h4>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-black shadow-xl">
                  {resource.author?.[0] || 'C'}
                </div>
                <div>
                  <div className="text-white text-xl font-bold">{resource.author || 'Code-n-Click Team'}</div>
                  <div className="text-blue-400/80 text-sm font-medium">Digital Tech Experts</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Pioneering digital solutions and sharing industry leading insights to help businesses scale in the modern era.
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="w-full py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold transition-all border border-white/10 flex items-center justify-center gap-2 group-hover:gap-3"
              >
                Work with us <ArrowRight size={18} />
              </button>
            </div>

            {/* Related Articles Sidebar */}
            {relatedResources.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-white text-lg font-bold">Related Read</h4>
                  <div className="h-px flex-1 bg-gray-800 ml-4"></div>
                </div>
                <div className="space-y-4">
                  {relatedResources.map((related) => (
                    <div
                      key={related.id}
                      onClick={() => navigate(`/resources/${related.id}`)}
                      className="flex gap-4 group cursor-pointer p-4 rounded-2xl bg-gray-900/40 border border-transparent hover:border-gray-800 hover:bg-gray-900/60 transition-all"
                    >
                      {related.thumbnail && (
                        <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden border border-gray-800">
                          <img 
                            src={related.thumbnail} 
                            alt={related.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                          />
                        </div>
                      )}
                      <div className="flex flex-col justify-center">
                        <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-1">{related.category}</span>
                        <h5 className="text-white text-sm font-bold leading-snug group-hover:text-blue-400 transition-colors line-clamp-2">
                          {related.title}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Newsletter Mini */}
            <div className="p-8 rounded-3xl bg-blue-600 text-white shadow-2xl shadow-blue-500/20">
              <h4 className="text-xl font-bold mb-2">Join the inner circle</h4>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed opacity-90">Get the latest insights delivered weekly to your inbox.</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-blue-500/30 border border-blue-400/30 rounded-xl px-4 py-3 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all">
                  Subscribe Now
                </button>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
};

export default ResourceDetail;
