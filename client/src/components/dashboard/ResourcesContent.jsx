import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { Plus, Edit2, Trash2, Image, Save, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import ApiService from '../../services/api';

const api = new ApiService();

const ResourcesContent = () => {
  const { user } = useAuth();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'Blog',
    thumbnail: '',
    status: 'PUBLISHED'
  });

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      setLoading(true);
      const response = await api.get('/resources');
      setResources(response || []);
    } catch (error) {
      console.error('Error fetching resources:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.patch(`/resources/${editingId}`, { ...formData, author: user.name });
      } else {
        await api.post('/resources', { ...formData, author: user.name });
      }
      fetchResources();
      setShowModal(false);
      resetForm();
    } catch (error) {
      console.error('Error saving resource:', error);
      alert('Failed to save resource');
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this resource?')) {
      try {
        await api.delete(`/resources/${id}`);
        fetchResources();
      } catch (error) {
        console.error('Error deleting resource:', error);
      }
    }
  };

  const handleEdit = (resource) => {
    setEditingId(resource.id);
    setFormData({
      title: resource.title,
      content: resource.content,
      category: resource.category,
      thumbnail: resource.thumbnail || '',
      status: resource.status
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      title: '',
      content: '',
      category: 'Blog',
      thumbnail: '',
      status: 'PUBLISHED'
    });
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Resources CMS</h2>
          <p className="text-gray-500">Manage blog posts and resources</p>
        </div>
        <button 
          onClick={() => { resetForm(); setShowModal(true); }}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl flex items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} /> Create New
        </button>
      </div>

      {/* List View */}
      <div className="grid gap-4">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 flex justify-between items-center">
            <div className="flex items-center gap-4">
              {resource.thumbnail && (
                <img src={resource.thumbnail} alt="" className="w-16 h-16 object-cover rounded-lg" />
              )}
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">{resource.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs">{resource.category}</span>
                  <span>•</span>
                  <span>{new Date(resource.updatedAt).toLocaleDateString()}</span>
                  <span>•</span>
                  <span className={`px-2 py-0.5 rounded text-xs ${resource.status === 'PUBLISHED' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {resource.status}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => handleEdit(resource)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                <Edit2 size={18} />
              </button>
              <button onClick={() => handleDelete(resource.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Editor Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center sticky top-0 bg-white dark:bg-gray-800 z-10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {editingId ? 'Edit Resource' : 'Create Resource'}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                  <input 
                    type="text" 
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option>Blog</option>
                    <option>Case Study</option>
                    <option>Tutorial</option>
                    <option>News</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Thumbnail URL</label>
                <div className="flex gap-2">
                  <input 
                    type="url" 
                    value={formData.thumbnail}
                    onChange={(e) => setFormData({...formData, thumbnail: e.target.value})}
                    placeholder="https://example.com/image.jpg"
                    className="flex-1 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Content</label>
                <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  <ReactQuill 
                    theme="snow"
                    value={formData.content}
                    onChange={(content) => setFormData({...formData, content})}
                    modules={modules}
                    className="h-64 mb-12 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button 
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Save size={20} /> Save Resource
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesContent;
