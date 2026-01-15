import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import { 
  FileText, Search, Filter, Eye, CheckCircle, XCircle, 
  Clock, Download, MessageSquare, User, Mail, Phone, Briefcase
} from 'lucide-react';
import { applicationsAPI } from '../../../services/api';

const HRApplications = () => {
  // State
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  
  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [notes, setNotes] = useState('');

  // Stats State
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    shortlisted: 0,
    rejected: 0
  });

  useEffect(() => {
    fetchApplications();
  }, []);

  useEffect(() => {
    calculateStats();
  }, [applications]);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await applicationsAPI.getAll();
      setApplications(response.data || []);
    } catch (error) {
      console.error('Error fetching applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = () => {
    const total = applications.length;
    const pending = applications.filter(app => app.status === 'PENDING').length;
    const shortlisted = applications.filter(app => app.status === 'SHORTLISTED').length;
    const rejected = applications.filter(app => app.status === 'REJECTED').length;
    
    setStats({ total, pending, shortlisted, rejected });
  };

  const handleViewApplication = (application) => {
    setSelectedApplication(application);
    setNotes(application.notes || '');
    setShowModal(true);
  };

  const handleUpdateStatus = async (status) => {
    if (!selectedApplication) return;
    
    try {
      setLoading(true);
      await applicationsAPI.updateStatus(selectedApplication.id, status);
      alert(`Application marked as ${status}`);
      setShowModal(false);
      fetchApplications();
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedApplication) return;

    try {
      setLoading(true);
      await applicationsAPI.updateNotes(selectedApplication.id, notes);
      alert('Notes saved successfully');
      // Update local state
      const updatedApp = { ...selectedApplication, notes };
      setSelectedApplication(updatedApp);
      setApplications(apps => apps.map(app => app.id === updatedApp.id ? updatedApp : app));
    } catch (error) {
      console.error('Error saving notes:', error);
      alert('Failed to save notes');
    } finally {
      setLoading(false);
    }
  };

  // Filtered Applications
  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.applicantName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || app.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'PENDING': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'SHORTLISTED': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'REJECTED': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'HIRED': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400';
    }
  };

  return (
    <DashboardLayout role="hr">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Application Tracking</h2>
          <p className="text-gray-500 mt-1">Review and manage job applications</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-lg text-white">
            <h3 className="text-blue-100 text-sm font-medium">Total Applications</h3>
            <p className="text-4xl font-bold mt-2">{stats.total}</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-6 rounded-2xl shadow-lg text-white">
            <h3 className="text-yellow-100 text-sm font-medium">Pending Review</h3>
            <p className="text-4xl font-bold mt-2">{stats.pending}</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl shadow-lg text-white">
            <h3 className="text-green-100 text-sm font-medium">Shortlisted</h3>
            <p className="text-4xl font-bold mt-2">{stats.shortlisted}</p>
          </div>
          <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-2xl shadow-lg text-white">
            <h3 className="text-red-100 text-sm font-medium">Rejected</h3>
            <p className="text-4xl font-bold mt-2">{stats.rejected}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative md:col-span-3">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by applicant name, email, or job title..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="PENDING">Pending</option>
              <option value="SHORTLISTED">Shortlisted</option>
              <option value="REJECTED">Rejected</option>
              <option value="HIRED">Hired</option>
            </select>
          </div>
        </div>

        {/* Applications List */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-12 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-gray-500 mt-4">Loading applications...</p>
              </div>
            ) : filteredApplications.length === 0 ? (
              <div className="p-12 text-center">
                <FileText size={48} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No applications found</p>
              </div>
            ) : (
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 dark:bg-gray-700/50 text-xs uppercase font-semibold text-gray-500">
                  <tr>
                    <th className="px-6 py-4">Applicant</th>
                    <th className="px-6 py-4">Job Title</th>
                    <th className="px-6 py-4">Applied Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {filteredApplications.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{app.applicantName}</p>
                          <p className="text-xs text-gray-500">{app.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{app.jobTitle}</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                        {new Date(app.appliedAt || Date.now()).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleViewApplication(app)}
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Application Detail Modal */}
      {showModal && selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Application Details</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <XCircle size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Header Info */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl font-bold">
                    {selectedApplication.applicantName?.charAt(0) || '?'}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{selectedApplication.applicantName}</h4>
                    <p className="text-gray-500">{selectedApplication.jobTitle}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedApplication.status)}`}>
                  {selectedApplication.status}
                </span>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 dark:bg-gray-700/30 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Mail size={18} /> {selectedApplication.email}
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Phone size={18} /> {selectedApplication.phone || 'N/A'}
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Clock size={18} /> Applied: {new Date(selectedApplication.appliedAt || Date.now()).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Briefcase size={18} /> Experience: {selectedApplication.experience || 'N/A'}
                </div>
              </div>

              {/* Resume */}
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Resume / CV</h5>
                <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-center gap-3">
                    <FileText size={24} className="text-red-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Resume.pdf</span>
                  </div>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                    <Download size={18} /> Download
                  </button>
                </div>
              </div>

              {/* Notes */}
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">HR Notes</h5>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  placeholder="Add internal notes about this candidate..."
                ></textarea>
                <div className="flex justify-end mt-2">
                  <button 
                    onClick={handleSaveNotes}
                    disabled={loading}
                    className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg hover:bg-gray-200"
                  >
                    Save Notes
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => handleUpdateStatus('SHORTLISTED')}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 font-medium"
                >
                  Shortlist
                </button>
                <button
                  onClick={() => handleUpdateStatus('HIRED')}
                  className="flex-1 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 font-medium"
                >
                  Hire
                </button>
                <button
                  onClick={() => handleUpdateStatus('REJECTED')}
                  className="flex-1 bg-red-100 text-red-700 py-2 rounded-xl hover:bg-red-200 font-medium"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default HRApplications;
