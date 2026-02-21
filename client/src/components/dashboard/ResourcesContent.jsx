import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Eye, EyeOff, Search, Filter, X } from 'lucide-react';
import { resourcesAPI } from '../../services/api';
import ResourceEditor from './ResourceEditor';

const ResourcesContent = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [showEditor, setShowEditor] = useState(false);
  const [editingResource, setEditingResource] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    fetchResources();
  }, [statusFilter]);

  const fetchResources = async () => {
    try {
      setLoading(true);
      // Always include future posts for the dashboard
      const params = { 
        includeFuture: true,
        ...(statusFilter !== 'ALL' && { status: statusFilter })
      };
      const data = await resourcesAPI.getAll(params);
      setResources(data || []);
    } catch (error) {
      console.error('Error fetching resources:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingResource(null);
    setShowEditor(true);
  };

  const handleEdit = async (resource) => {
    try {
      setLoading(true);
      const fullResource = await resourcesAPI.getOne(resource.id);
      setEditingResource(fullResource);
      setShowEditor(true);
    } catch (error) {
      console.error('Error fetching resource detail:', error);
      alert('Failed to load resource content. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await resourcesAPI.delete(id);
      fetchResources();
      setDeleteConfirm(null);
    } catch (error) {
      console.error('Error deleting resource:', error);
      alert('Failed to delete resource');
    }
  };

  const handlePublish = async (id) => {
    try {
      await resourcesAPI.publish(id);
      fetchResources();
    } catch (error) {
      console.error('Error publishing resource:', error);
      alert('Failed to publish resource');
    }
  };

  const handleUnpublish = async (id) => {
    try {
      await resourcesAPI.unpublish(id);
      fetchResources();
    } catch (error) {
      console.error('Error unpublishing resource:', error);
      alert('Failed to unpublish resource');
    }
  };

  const handleEditorClose = (shouldRefresh) => {
    setShowEditor(false);
    setEditingResource(null);
    if (shouldRefresh) {
      fetchResources();
    }
  };

  const filteredResources = resources.filter(r =>
    r.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isScheduled = (resource) => {
    return resource.status === 'PUBLISHED' && 
           resource.publishedAt && 
           new Date(resource.publishedAt) > new Date();
  };

  const getDisplayStatus = (resource) => {
    if (isScheduled(resource)) return 'SCHEDULED';
    return resource.status;
  };

  const getStatusBadge = (resource) => {
    if (isScheduled(resource)) {
      return 'bg-purple-900/30 text-purple-400 border-purple-500/30';
    }
    
    const styles = {
      PUBLISHED: 'bg-green-900/30 text-green-400 border-green-500/30',
      DRAFT: 'bg-yellow-900/30 text-yellow-400 border-yellow-500/30',
      ARCHIVED: 'bg-gray-900/30 text-gray-400 border-gray-500/30',
    };
    return styles[resource.status] || styles.DRAFT;
  };

  if (showEditor) {
    return (
      <ResourceEditor
        resource={editingResource}
        onClose={handleEditorClose}
      />
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Manage Resources</h1>
          <p className="text-gray-400 text-sm md:text-base">Create and manage blog posts and articles</p>
        </div>
        <button
          onClick={handleCreate}
          className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <Plus size={20} />
          Create New
        </button>
      </div>

      {/* Filters */}
      <div className="bg-gray-800/50 rounded-xl p-4 mb-6 flex flex-col md:flex-row items-stretch md:items-center gap-4">
        {/* Search */}
        <div className="flex-1 w-full md:min-w-[300px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by title or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter size={20} className="text-gray-400 shrink-0" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="flex-1 md:flex-none bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
          >
            <option value="ALL">All Status</option>
            <option value="PUBLISHED">Published</option>
            <option value="DRAFT">Draft</option>
            <option value="ARCHIVED">Archived</option>
          </select>
        </div>

        {/* Results Count */}
        <div className="text-gray-400 text-sm text-center md:text-left">
          {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Resources Table */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : filteredResources.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg mb-4">No resources found</p>
          <button
            onClick={handleCreate}
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            Create your first resource
          </button>
        </div>
      ) : (
        <div className="bg-gray-800/50 rounded-xl overflow-hidden overflow-x-auto border border-gray-700/50">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left p-4 text-gray-400 font-medium">Title</th>
                <th className="text-left p-4 text-gray-400 font-medium">Category</th>
                <th className="text-left p-4 text-gray-400 font-medium">Status</th>
                <th className="text-left p-4 text-gray-400 font-medium">Views</th>
                <th className="text-left p-4 text-gray-400 font-medium">Published At</th>
                <th className="text-right p-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredResources.map((resource) => (
                <tr key={resource.id} className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      {resource.thumbnail && (
                        <img
                          src={resource.thumbnail}
                          alt={resource.title}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                      )}
                      <div>
                        <div className="text-white font-medium line-clamp-1">{resource.title}</div>
                        <div className="text-gray-500 text-sm line-clamp-1">{resource.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm border border-blue-500/30">
                      {resource.category}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm border ${getStatusBadge(resource)}`}>
                      {getDisplayStatus(resource)}
                    </span>
                  </td>
                  <td className="p-4 text-gray-400">{resource.views || 0}</td>
                  <td className="p-4 text-gray-400 text-sm">
                    {resource.publishedAt ? (
                      <div className="flex flex-col">
                        <span className="text-white">
                          {new Date(resource.publishedAt).toLocaleDateString()}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(resource.publishedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    ) : (
                      <span className="text-gray-600 italic">Not set</span>
                    )}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      {resource.status === 'DRAFT' ? (
                        <button
                          onClick={() => handlePublish(resource.id)}
                          className="p-2 text-green-400 hover:bg-green-900/30 rounded-lg transition-colors"
                          title="Publish"
                        >
                          <Eye size={18} />
                        </button>
                      ) : resource.status === 'PUBLISHED' ? (
                        <button
                          onClick={() => handleUnpublish(resource.id)}
                          className="p-2 text-yellow-400 hover:bg-yellow-900/30 rounded-lg transition-colors"
                          title="Unpublish"
                        >
                          <EyeOff size={18} />
                        </button>
                      ) : null}
                      <button
                        onClick={() => handleEdit(resource)}
                        className="p-2 text-blue-400 hover:bg-blue-900/30 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(resource.id)}
                        className="p-2 text-red-400 hover:bg-red-900/30 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full mx-4 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Confirm Delete</h3>
            <p className="text-gray-400 mb-6">
              Are you sure you want to delete this resource? This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesContent;
