import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import { 
  FileText, Upload, Download, Trash2, Plus, Search, 
  Shield, AlertCircle, File, CheckCircle, XCircle
} from 'lucide-react';
import { policiesAPI } from '../../../services/api';

const HRPolicies = () => {
  // State
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [newPolicy, setNewPolicy] = useState({
    title: '',
    description: '',
    category: 'GENERAL',
    file: null
  });

  useEffect(() => {
    fetchPolicies();
  }, []);

  const fetchPolicies = async () => {
    try {
      setLoading(true);
      const response = await policiesAPI.getAll();
      setPolicies(response.data || []);
    } catch (error) {
      console.error('Error fetching policies:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPolicy({ ...newPolicy, file });
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!newPolicy.file) {
      alert('Please select a file to upload');
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('title', newPolicy.title);
      formData.append('description', newPolicy.description);
      formData.append('category', newPolicy.category);
      formData.append('file', newPolicy.file);

      await policiesAPI.upload(formData);
      alert('Policy uploaded successfully!');
      setShowModal(false);
      setNewPolicy({ title: '', description: '', category: 'GENERAL', file: null });
      fetchPolicies();
    } catch (error) {
      console.error('Error uploading policy:', error);
      alert('Failed to upload policy');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this policy?')) return;
    try {
      setLoading(true);
      await policiesAPI.delete(id);
      fetchPolicies();
    } catch (error) {
      console.error('Error deleting policy:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPolicies = policies.filter(policy => 
    policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    policy.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout role="hr">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Company Policies</h2>
            <p className="text-gray-500 mt-1">Manage and distribute company policies and documents</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium transition-colors"
          >
            <Upload size={20} />
            Upload Policy
          </button>
        </div>

        {/* Search */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search policies..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-500 mt-4">Loading policies...</p>
            </div>
          ) : filteredPolicies.length === 0 ? (
            <div className="col-span-full text-center py-12 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
              <Shield size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500">No policies found</p>
            </div>
          ) : (
            filteredPolicies.map((policy) => (
              <div key={policy.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400">
                    <FileText size={24} />
                  </div>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-lg font-medium">
                    {policy.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{policy.title}</h3>
                <p className="text-gray-500 text-sm mb-4 flex-1 line-clamp-3">{policy.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                  <span className="text-xs text-gray-400">
                    {new Date(policy.createdAt || Date.now()).toLocaleDateString()}
                  </span>
                  <div className="flex gap-2">
                    <button 
                      className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                      title="Download"
                    >
                      <Download size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(policy.id)}
                      className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Upload Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Upload New Policy</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <XCircle size={24} />
              </button>
            </div>
            <form onSubmit={handleUpload} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Policy Title</label>
                <input 
                  type="text" 
                  value={newPolicy.title} 
                  onChange={(e) => setNewPolicy({...newPolicy, title: e.target.value})}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                <select 
                  value={newPolicy.category} 
                  onChange={(e) => setNewPolicy({...newPolicy, category: e.target.value})}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="GENERAL">General</option>
                  <option value="LEAVE">Leave Policy</option>
                  <option value="CONDUCT">Code of Conduct</option>
                  <option value="IT">IT Policy</option>
                  <option value="BENEFITS">Benefits</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                <textarea 
                  value={newPolicy.description} 
                  onChange={(e) => setNewPolicy({...newPolicy, description: e.target.value})}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" 
                  rows="3"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Document File (PDF)</label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-4 text-center">
                  <input 
                    type="file" 
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden" 
                    id="policy-file"
                  />
                  <label htmlFor="policy-file" className="cursor-pointer flex flex-col items-center gap-2 text-gray-500 hover:text-blue-600">
                    <Upload size={24} />
                    <span className="text-sm">{newPolicy.file ? newPolicy.file.name : 'Click to upload file'}</span>
                  </label>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-xl">Cancel</button>
                <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 flex items-center gap-2">
                  {loading ? 'Uploading...' : <><CheckCircle size={18} /> Upload Policy</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default HRPolicies;
