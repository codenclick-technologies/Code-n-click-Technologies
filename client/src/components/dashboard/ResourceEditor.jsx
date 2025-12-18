import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { X, Save, Eye, Image as ImageIcon, Upload } from 'lucide-react';
import { resourcesAPI } from '../../services/api';

const ResourceEditor = ({ resource, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    category: '',
    tags: [],
    thumbnail: '',
    author: 'Code-n-Click Team',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: [],
  });
  const [tagInput, setTagInput] = useState('');
  const [keywordInput, setKeywordInput] = useState('');
  const [saving, setSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isSlugEdited, setIsSlugEdited] = useState(false);

  useEffect(() => {
    if (resource) {
      setFormData({
        title: resource.title || '',
        slug: resource.slug || '',
        content: resource.content || '',
        excerpt: resource.excerpt || '',
        category: resource.category || '',
        tags: resource.tags || [],
        thumbnail: resource.thumbnail || '',
        author: resource.author || 'Code-n-Click Team',
        metaTitle: resource.metaTitle || '',
        metaDescription: resource.metaDescription || '',
        metaKeywords: resource.metaKeywords || [],
      });
      setIsSlugEdited(!!resource.slug);
    }
  }, [resource]);

  // Auto-generate slug from title if not manually edited
  useEffect(() => {
    if (!isSlugEdited && formData.title) {
        const generatedSlug = formData.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');
        setFormData(prev => ({ ...prev, slug: generatedSlug }));
    }
  }, [formData.title, isSlugEdited]);

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'image', 'code-block'],
      ['clean']
    ],
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };

  const handleAddKeyword = () => {
    if (keywordInput.trim() && !formData.metaKeywords.includes(keywordInput.trim())) {
      setFormData(prev => ({
        ...prev,
        metaKeywords: [...prev.metaKeywords, keywordInput.trim()]
      }));
      setKeywordInput('');
    }
  };

  const handleRemoveKeyword = (keyword) => {
    setFormData(prev => ({
      ...prev,
      metaKeywords: prev.metaKeywords.filter(k => k !== keyword)
    }));
  };

  const handleSave = async (publish = false) => {
    if (!formData.title || !formData.content || !formData.category) {
      alert('Please fill in title, content, and category');
      return;
    }

    try {
      setSaving(true);
      const data = {
        ...formData,
        status: publish ? 'PUBLISHED' : 'DRAFT',
      };

      if (resource) {
        await resourcesAPI.update(resource.id, data);
      } else {
        await resourcesAPI.create(data);
      }

      onClose(true); // Refresh list
    } catch (error) {
      console.error('Error saving resource:', error);
      alert('Failed to save resource');
    } finally {
      setSaving(false);
    }
  };

  if (showPreview) {
    return (
      <div className="min-h-screen bg-gray-950 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Preview</h2>
            <button
              onClick={() => setShowPreview(false)}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              Back to Editor
            </button>
          </div>
          
          {formData.thumbnail && (
            <img src={formData.thumbnail} alt={formData.title} className="w-full h-64 object-cover rounded-xl mb-6" />
          )}
          
          <div className="bg-gray-800/50 rounded-xl p-8">
            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">{formData.category}</span>
            <h1 className="text-4xl font-bold text-white mt-4 mb-4">{formData.title || 'Untitled'}</h1>
            <p className="text-gray-400 mb-6">{formData.excerpt}</p>
            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: formData.content }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            {resource ? 'Edit Resource' : 'Create New Resource'}
          </h2>
          <button
            onClick={() => onClose(false)}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Enter resource title..."
              />
            </div>

            {/* Slug */}
             <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Slug (URL)
              </label>
              <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm">codenclick.in/resources/</span>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => {
                        handleChange('slug', e.target.value);
                        setIsSlugEdited(true);
                    }}
                    className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm font-mono"
                    placeholder="url-slug"
                  />
              </div>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Excerpt
              </label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => handleChange('excerpt', e.target.value)}
                rows={3}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Short description for cards..."
              />
            </div>

            {/* Content Editor */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Content *
              </label>
              <div className="bg-white rounded-lg overflow-hidden">
                <ReactQuill
                  theme="snow"
                  value={formData.content}
                  onChange={(value) => handleChange('content', value)}
                  modules={quillModules}
                  className="h-96"
                />
              </div>
            </div>

            {/* SEO Section */}
            <div className="bg-gray-800/50 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">SEO Settings</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={formData.metaTitle}
                  onChange={(e) => handleChange('metaTitle', e.target.value)}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Leave empty to use title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Meta Description
                </label>
                <textarea
                  value={formData.metaDescription}
                  onChange={(e) => handleChange('metaDescription', e.target.value)}
                  rows={2}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 resize-none"
                  placeholder="SEO description (150-160 characters)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Meta Keywords
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={keywordInput}
                    onChange={(e) => setKeywordInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddKeyword())}
                    className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                    placeholder="Add keyword and press Enter"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.metaKeywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm border border-purple-500/30 flex items-center gap-2"
                    >
                      {keyword}
                      <button
                        onClick={() => handleRemoveKeyword(keyword)}
                        className="hover:text-purple-200"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Actions */}
            <div className="bg-gray-800/50 rounded-xl p-4 space-y-3">
              <button
                onClick={() => handleSave(true)}
                disabled={saving}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
              >
                <Save size={18} />
                {saving ? 'Saving...' : 'Publish'}
              </button>
              <button
                onClick={() => handleSave(false)}
                disabled={saving}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
              >
                <Save size={18} />
                Save as Draft
              </button>
              <button
                onClick={() => setShowPreview(true)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
              >
                <Eye size={18} />
                Preview
              </button>
            </div>

            {/* Thumbnail */}
            <div className="bg-gray-800/50 rounded-xl p-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Thumbnail URL
              </label>
              <input
                type="text"
                value={formData.thumbnail}
                onChange={(e) => handleChange('thumbnail', e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 mb-2"
                placeholder="https://..."
              />
              {formData.thumbnail && (
                <img
                  src={formData.thumbnail}
                  alt="Thumbnail preview"
                  className="w-full h-40 object-cover rounded-lg"
                />
              )}
            </div>

            {/* Category */}
            <div className="bg-gray-800/50 rounded-xl p-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => handleChange('category', e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="">Select category</option>
                <option value="Development">Development</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="SEO">SEO</option>
                <option value="SaaS">SaaS</option>
                <option value="Security">Security</option>
                <option value="Business">Business</option>
              </select>
            </div>

            {/* Tags */}
            <div className="bg-gray-800/50 rounded-xl p-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tags
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                  className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Add tag and press Enter"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm border border-blue-500/30 flex items-center gap-2"
                  >
                    {tag}
                    <button
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-blue-200"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Author */}
            <div className="bg-gray-800/50 rounded-xl p-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Author
              </label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => handleChange('author', e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceEditor;
