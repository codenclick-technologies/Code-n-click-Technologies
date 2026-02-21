import React, { useState, useEffect } from 'react';
import ReactQuill, { Quill } from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { X, Save, Eye, Image as ImageIcon, Upload, Code2, FileText, Layout, Calendar } from 'lucide-react';
import ApiService, { resourcesAPI } from '../../services/api';
import { useRef, useMemo, useCallback } from 'react';

// Custom Font & Size whitelists for Quill
const Size = Quill.import('attributors/style/size');
Size.whitelist = ['12px', '14px', '16px', '18px', '20px', '24px', '32px', '48px', '64px'];
Quill.register(Size, true);

const Font = Quill.import('attributors/style/font');
Font.whitelist = ['serif', 'sans-serif', 'monospace', 'inter', 'roboto', 'outfit', 'playfair'];
Quill.register(Font, true);

// Custom Style Blots - Safely register to avoid console clutter
try {
  const Inline = Quill.import('blots/inline');
  class GradientTextBlot extends Inline {
    static create(value) {
      let node = super.create();
      node.setAttribute('class', 'text-gradient-animate');
      return node;
    }
  }
  GradientTextBlot.blotName = 'gradient-text';
  GradientTextBlot.tagName = 'span';
  
  // Quill 2.x expects formats in the 'formats/' namespace
  Quill.register('formats/gradient-text', GradientTextBlot, true);
} catch (e) {
  // Silent fallback
}

const ResourceEditor = ({ resource, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    contentType: 'rich-text', // 'rich-text' or 'code-blog'
    codeBlog: {
      html: '',
      css: '',
      js: '',
    },
    excerpt: '',
    category: '',
    tags: [],
    thumbnail: '',
    author: 'Code-n-Click Team',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: [],
    publishedAt: '',
  });
  const [tagInput, setTagInput] = useState('');
  const [keywordInput, setKeywordInput] = useState('');
  const [saving, setSaving] = useState(false);
  const [uploadingThumbnail, setUploadingThumbnail] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isSlugEdited, setIsSlugEdited] = useState(false);

  useEffect(() => {
    if (resource) {
      let contentType = 'rich-text';
      let codeBlog = { html: '', css: '', js: '' };
      let content = resource.content || '';

      if (content.startsWith('__CODE_BLOG__')) {
        contentType = 'code-blog';
        try {
          codeBlog = JSON.parse(content.replace('__CODE_BLOG__', ''));
          content = ''; // So ReactQuill doesn't show the JSON
        } catch (e) {
          // Silent parse failure
        }
      }

      setFormData({
        title: resource.title || '',
        slug: resource.slug || '',
        content: content,
        contentType: contentType,
        codeBlog: codeBlog,
        excerpt: resource.excerpt || '',
        category: resource.category || '',
        tags: resource.tags || [],
        thumbnail: resource.thumbnail || '',
        author: resource.author || 'Code-n-Click Team',
        metaTitle: resource.metaTitle || '',
        metaDescription: resource.metaDescription || '',
        metaKeywords: resource.metaKeywords || [],
        publishedAt: resource.publishedAt ? new Date(resource.publishedAt).toISOString().slice(0, 16) : '',
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

  const quillRef = useRef(null);

  // Helper to convert file to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const imageHandler = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        if (file.size > 50 * 1024 * 1024) {
          alert('File is too large. Max 50MB allowed.');
          return;
        }

        try {
          const api = new ApiService();
          let uploadedUrl = null;

          // Strategy 1: Standard Binary Upload
          try {
             const formData = new FormData();
             formData.append('file', file);
             formData.append('folder', 'resources_content');
             const response = await api.uploadFile('/upload', formData);
             uploadedUrl = response.url;
          } catch (stdError) {
             console.warn('Standard upload failed, attempting Base64 fallback...', stdError);
          }

          // Strategy 2: Base64 Fallback
          if (!uploadedUrl) {
            const base64Data = await fileToBase64(file);
            const response = await api.post('/upload/base64', { 
              file: base64Data, 
              folder: 'resources_content' 
            });
            uploadedUrl = response.url;
          }
          
          if (uploadedUrl) {
            const quill = quillRef.current.getEditor();
            quill.focus();
            const range = quill.getSelection();
            const index = range ? range.index : quill.getLength();
            quill.insertEmbed(index, 'image', uploadedUrl);
            quill.setSelection(index + 1);
          } else {
             throw new Error('All upload methods failed.');
          }

        } catch (error) {
          console.error('Editor image upload failed:', error);
          alert(`Upload failed: ${error.message || 'Network error or server timeout. Please check your connection.'}`);
        }
      }
    };
  }, []);

  const quillModules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': Font.whitelist }],
        [{ 'size': Size.whitelist }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        ['blockquote', 'code-block', 'table'],
        ['link', 'image', 'video'],
        [{ 'gradient': 'Gradient' }],
        ['clean']
      ],
      handlers: {
        image: imageHandler,
        gradient: function() {
          const quill = this.quill;
          const range = quill.getSelection();
          if (range) {
            const format = quill.getFormat(range);
            quill.format('gradient-text', !format['gradient-text']);
          }
        }
      }
    },
    table: true,
    clipboard: {
      matchVisual: false,
    }
  }), []);

  const quillFormats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script', 'align', 'list', 'indent',
    'blockquote', 'code-block', 'table',
    'link', 'image', 'video',
    'gradient-text'
  ];

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCodeChange = (type, value) => {
    setFormData(prev => ({
      ...prev,
      codeBlog: {
        ...prev.codeBlog,
        [type]: value
      }
    }));
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

  const handleThumbnailUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('File is too large. Max 5MB allowed.');
      return;
    }

    try {
      setUploadingThumbnail(true);
      const api = new ApiService();
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'resources');

      const response = await api.uploadFile('/upload', formData);
      handleChange('thumbnail', response.url);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setUploadingThumbnail(false);
    }
  };

  const handleSave = async (publish = false) => {
    if (!formData.title || !formData.category) {
      alert('Please fill in title and category');
      return;
    }

    if (formData.contentType === 'rich-text' && !formData.content) {
      alert('Please fill in content');
      return;
    }

    if (formData.contentType === 'code-blog' && !formData.codeBlog.html) {
      alert('Please provide HTML for the code blog');
      return;
    }

    try {
      setSaving(true);
      
      let finalContent = formData.content;
      if (formData.contentType === 'code-blog') {
        finalContent = '__CODE_BLOG__' + JSON.stringify(formData.codeBlog);
      }

      const data = {
        title: formData.title,
        slug: formData.slug,
        content: finalContent,
        excerpt: formData.excerpt,
        category: formData.category,
        tags: formData.tags,
        thumbnail: formData.thumbnail,
        author: formData.author,
        metaTitle: formData.metaTitle,
        metaDescription: formData.metaDescription,
        metaKeywords: formData.metaKeywords,
        publishedAt: formData.publishedAt ? new Date(formData.publishedAt).toISOString() : new Date(),
        status: publish ? 'PUBLISHED' : 'DRAFT',
      };

      if (resource) {
        await resourcesAPI.update(resource.id, data);
      } else {
        await resourcesAPI.create(data);
      }

      onClose(true); // Refresh list
    } catch (error) {
      alert('Failed to save resource');
    } finally {
      setSaving(false);
    }
  };

  if (showPreview) {
    const isCodeBlog = formData.contentType === 'code-blog';
    
    return (
      <div className="min-h-screen bg-gray-950 p-6 overflow-y-auto">
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
            <img src={formData.thumbnail} alt={formData.title} className="w-full h-64 object-cover rounded-xl mb-6 shadow-2xl" />
          )}
          
          <div className="bg-gray-800/50 rounded-xl p-8 shadow-xl">
            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold uppercase tracking-wider">{formData.category}</span>
            <h1 className="text-4xl font-bold text-white mt-4 mb-4">{formData.title || 'Untitled'}</h1>
            <p className="text-gray-400 mb-6 italic">{formData.excerpt}</p>
            
            {isCodeBlog ? (
              <div className="bg-gray-900 rounded-lg p-1 border border-gray-700 min-h-[400px]">
                {/* Code Blog Rendering in Preview */}
                <iframe
                  title="Code Blog Preview"
                  srcDoc={`
                    <html>
                      <head>
                        <style>
                          body { margin: 0; padding: 20px; font-family: sans-serif; color: #fff; background: transparent; }
                          ${formData.codeBlog.css}
                        </style>
                      </head>
                      <body>
                        ${formData.codeBlog.html}
                        <script>${formData.codeBlog.js}</script>
                      </body>
                    </html>
                  `}
                  className="w-full h-full min-h-[400px] border-none"
                />
              </div>
            ) : (
              <div 
                className="prose prose-xl prose-invert max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white prose-h1:text-5xl prose-h1:mb-8 prose-h1:leading-tight prose-h2:text-3xl prose-h2:text-blue-200 prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-b prose-h2:border-blue-500/20 prose-h2:pb-4 prose-h3:text-2xl prose-h3:text-purple-200 prose-h3:mt-12 prose-h3:mb-4 prose-p:text-gray-200 prose-p:leading-8 prose-p:font-light prose-p:mb-6 prose-a:text-blue-400 prose-a:no-underline prose-a:font-medium hover:prose-a:text-blue-300 hover:prose-a:underline prose-strong:text-blue-400 prose-strong:font-bold prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-900/10 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:font-serif prose-blockquote:text-xl prose-blockquote:text-blue-100 prose-blockquote:shadow-inner prose-ul:list-disc prose-ul:pl-6 prose-ul:text-gray-200 prose-ul:space-y-2 prose-li:marker:text-blue-500 prose-img:rounded-3xl prose-img:shadow-2xl prose-img:border prose-img:border-gray-800 prose-img:my-12 prose-img:w-full prose-hr:border-gray-800 prose-hr:my-16"
                dangerouslySetInnerHTML={{ __html: formData.content }}
              />
            )}
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

            {/* Content Type Toggle */}
            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Resource Type
              </label>
              <div className="flex p-1 bg-gray-900 rounded-lg w-fit border border-gray-700">
                <button
                  type="button"
                  onClick={() => handleChange('contentType', 'rich-text')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    formData.contentType === 'rich-text'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <FileText size={16} />
                  Rich Text
                </button>
                <button
                  type="button"
                  onClick={() => handleChange('contentType', 'code-blog')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    formData.contentType === 'code-blog'
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Code2 size={16} />
                  Code Blog
                </button>
              </div>
            </div>

            {/* Content Editor */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {formData.contentType === 'rich-text' ? 'Content *' : 'Code Editor *'}
              </label>
              
              {formData.contentType === 'rich-text' ? (
                <div className="bg-white rounded-lg overflow-hidden ring-1 ring-gray-700">
                  <style>{`
                    .ql-editor {
                      min-height: 450px;
                      color: #000;
                      font-size: 16px;
                      font-family: 'Inter', sans-serif;
                    }
                    .ql-editor.ql-blank::before {
                      color: rgba(0,0,0,0.3);
                    }
                    .ql-toolbar {
                      background: #f8fafc;
                      border-color: #e2e8f0 !important;
                      border-top-left-radius: 8px;
                      border-top-right-radius: 8px;
                      position: sticky;
                      top: 0;
                      z-index: 10;
                    }
                    .ql-container {
                      border-color: #e2e8f0 !important;
                      border-bottom-left-radius: 8px;
                      border-bottom-right-radius: 8px;
                    }
                    /* Custom styles for fonts */
                    .ql-font-outfit { font-family: 'Outfit', sans-serif; }
                    .ql-font-roboto { font-family: 'Roboto', sans-serif; }
                    .ql-font-playfair { font-family: 'Playfair Display', serif; }
                    
                    /* Gradient Text Animation */
                    .text-gradient-animate {
                      background: linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6);
                      background-size: 200% auto;
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;
                      animation: gradient 3s linear infinite;
                      font-weight: bold;
                      display: inline-block;
                    }
                    @keyframes gradient {
                      0% { background-position: 0% 50%; }
                      100% { background-position: 200% 50%; }
                    }
                    /* Custom toolbar icon for gradient */
                    .ql-gradient {
                      width: 28px !important;
                      color: #3b82f6 !important;
                      font-weight: bold !important;
                    }
                    .ql-gradient::after {
                      content: 'G';
                      font-family: inherit;
                    }
                  `}</style>
                  <ReactQuill
                    ref={quillRef}
                    theme="snow"
                    value={formData.content}
                    onChange={(value) => handleChange('content', value)}
                    modules={quillModules}
                    formats={quillFormats}
                    placeholder="Write your amazing story here..."
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase">
                        <Code2 size={14} /> HTML
                      </div>
                      <textarea
                        value={formData.codeBlog.html}
                        onChange={(e) => handleCodeChange('html', e.target.value)}
                        className="w-full h-64 bg-gray-900 border border-gray-700 rounded-lg p-4 text-gray-300 font-mono text-sm focus:outline-none focus:border-blue-500"
                        placeholder="<div>Hello World</div>"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase">
                        <Layout size={14} /> CSS
                      </div>
                      <textarea
                        value={formData.codeBlog.css}
                        onChange={(e) => handleCodeChange('css', e.target.value)}
                        className="w-full h-64 bg-gray-900 border border-gray-700 rounded-lg p-4 text-gray-300 font-mono text-sm focus:outline-none focus:border-purple-500"
                        placeholder=".container { color: blue; }"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase">
                      <Code2 size={14} /> JavaScript
                    </div>
                    <textarea
                      value={formData.codeBlog.js}
                      onChange={(e) => handleCodeChange('js', e.target.value)}
                      className="w-full h-48 bg-gray-900 border border-gray-700 rounded-lg p-4 text-gray-300 font-mono text-sm focus:outline-none focus:border-yellow-500"
                      placeholder="console.log('Hello!');"
                    />
                  </div>
                  <p className="text-xs text-gray-500">
                    Your code will be rendered inside an encapsulated container on the detail page.
                  </p>
                </div>
              )}
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

            {/* Published Date (Scheduler) */}
            <div className="bg-gray-800/50 rounded-xl p-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                 Publish Date & Time
              </label>
              <div className="relative group">
                <input
                  type="datetime-local"
                  value={formData.publishedAt}
                  onChange={(e) => handleChange('publishedAt', e.target.value)}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 pl-10 text-white focus:outline-none focus:border-blue-500 placeholder-gray-500 [color-scheme:dark] transition-colors"
                  placeholder="Select date and time"
                />
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none group-focus-within:text-blue-500 transition-colors" size={18} />
                {formData.publishedAt && (
                  <button
                    onClick={() => handleChange('publishedAt', '')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-400 transition-colors"
                    title="Clear schedule"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {formData.publishedAt 
                  ? `Scheduled for: ${new Date(formData.publishedAt).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}`
                  : 'Leave empty to publish immediately.'}
              </p>
            </div>

            {/* Thumbnail */}
            <div className="bg-gray-800/50 rounded-xl p-4 space-y-4">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-300">
                  Thumbnail
                </label>
                <span className="text-[10px] text-gray-500 font-medium bg-gray-900 px-2 py-0.5 rounded-full border border-gray-700">
                  1200 x 630 px recommended
                </span>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="relative group">
                  <input
                    type="text"
                    value={formData.thumbnail}
                    onChange={(e) => handleChange('thumbnail', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 text-sm"
                    placeholder="Enter image URL or upload below..."
                  />
                  <ImageIcon size={16} className="absolute right-3 top-2.5 text-gray-600 group-focus-within:text-blue-500 transition-colors" />
                </div>

                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailUpload}
                    className="hidden"
                    id="thumbnail-upload"
                    disabled={uploadingThumbnail}
                  />
                  <label
                    htmlFor="thumbnail-upload"
                    className={`flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group ${uploadingThumbnail ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {uploadingThumbnail ? (
                      <div className="flex items-center gap-2 text-gray-400">
                        <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent animate-spin rounded-full" />
                        <span className="text-sm">Uploading...</span>
                      </div>
                    ) : (
                      <>
                        <Upload size={18} className="text-gray-500 group-hover:text-blue-400" />
                        <span className="text-sm text-gray-400 group-hover:text-gray-200">Upload Image File</span>
                      </>
                    )}
                  </label>
                </div>
              </div>

              {formData.thumbnail && (
                <div className="relative mt-4 rounded-lg overflow-hidden border border-gray-700 shadow-lg group">
                  <img
                    src={formData.thumbnail}
                    alt="Thumbnail preview"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-[10px] text-white/80 font-mono truncate">{formData.thumbnail}</span>
                  </div>
                </div>
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
