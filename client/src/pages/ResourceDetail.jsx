import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import { resourcesAPI } from '../services/api';
import { fadeInUp } from '../utils/animations';

const ResourceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const data = await resourcesAPI.getOne(id);
        setResource(data);
      } catch (error) {
        console.error('Error fetching resource:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchResource();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl font-bold mb-4">Resource not found</h2>
        <button 
          onClick={() => navigate('/resources')}
          className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
        >
          <ArrowLeft size={20} /> Back to Resources
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 bg-noise pt-32 pb-20">
      <Helmet>
        <title>{resource.title} | Code'N'Click Resources</title>
        <meta name="description" content={resource.title} />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <button 
            onClick={() => navigate('/resources')}
            className="text-gray-400 hover:text-white flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> Back to Resources
          </button>

          <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-4">
              {resource.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {resource.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm border-b border-gray-800 pb-8">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{resource.author || 'Code-n-Click Team'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(resource.updatedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
          </div>

          {resource.thumbnail && (
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
              <img 
                src={resource.thumbnail} 
                alt={resource.title} 
                className="w-full h-[400px] object-cover"
              />
            </div>
          )}

          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white prose-code:text-blue-300 prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800"
            dangerouslySetInnerHTML={{ __html: resource.content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between items-center">
            <div className="flex gap-4">
              <button className="p-2 rounded-full bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default ResourceDetail;
