import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import { 
  Briefcase, Search, Plus, Edit2, Trash2, Eye, EyeOff, 
  MapPin, Clock, DollarSign, Filter, MoreVertical, CheckCircle, XCircle
} from 'lucide-react';
import { jobsAPI } from '../../../services/api';

const HRJobs = () => {
  // State
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  
  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [jobForm, setJobForm] = useState({
    title: '',
    department: '',
    location: '',
    type: 'FULL_TIME',
    salaryRange: '',
    description: '',
    requirements: '',
    status: 'OPEN'
  });

  // Stats State
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    closed: 0,
    applications: 0
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    calculateStats();
  }, [jobs]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await jobsAPI.getAll();
      setJobs(response.data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = () => {
    const total = jobs.length;
    const active = jobs.filter(job => job.status === 'OPEN').length;
    const closed = jobs.filter(job => job.status === 'CLOSED').length;
    // Mock applications count for now as it might come from a different API or joined data
    const applications = jobs.reduce((acc, job) => acc + (job.applicationCount || 0), 0);
    
    setStats({ total, active, closed, applications });
  };

  const handleAddJob = () => {
    setEditingJob(null);
    setJobForm({
      title: '', department: '', location: '', type: 'FULL_TIME',
      salaryRange: '', description: '', requirements: '', status: 'OPEN'
    });
    setShowModal(true);
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setJobForm({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      salaryRange: job.salaryRange,
      description: job.description,
      requirements: job.requirements,
      status: job.status
    });
    setShowModal(true);
  };

  const handleSaveJob = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (editingJob) {
        await jobsAPI.updateJob(editingJob.id, jobForm);
        alert('Job updated successfully!');
      } else {
        await jobsAPI.createJob(jobForm);
        alert('Job posted successfully!');
      }
      setShowModal(false);
      fetchJobs();
    } catch (error) {
      console.error('Error saving job:', error);
      alert('Failed to save job');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteJob = async (id) => {
    if (!confirm('Are you sure you want to delete this job posting?')) return;
    try {
      setLoading(true);
      await jobsAPI.deleteJob(id);
      alert('Job deleted successfully!');
      fetchJobs();
    } catch (error) {
      console.error('Error deleting job:', error);
      alert('Failed to delete job');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (job) => {
    try {
      setLoading(true);
      const newStatus = job.status === 'OPEN' ? 'CLOSED' : 'OPEN';
      await jobsAPI.updateJob(job.id, { status: newStatus });
      fetchJobs();
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filtered Jobs
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || job.type === filterType;
    const matchesStatus = filterStatus === 'all' || job.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <DashboardLayout role="hr">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Job Management</h2>
            <p className="text-gray-500 mt-1">Create and manage job openings</p>
          </div>
          <button
            onClick={handleAddJob}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium"
          >
            <Plus size={20} />
            Post New Job
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-lg text-white">
            <h3 className="text-blue-100 text-sm font-medium">Total Jobs</h3>
            <p className="text-4xl font-bold mt-2">{stats.total}</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl shadow-lg text-white">
            <h3 className="text-green-100 text-sm font-medium">Active Openings</h3>
            <p className="text-4xl font-bold mt-2">{stats.active}</p>
          </div>
          <div className="bg-gradient-to-br from-gray-500 to-gray-600 p-6 rounded-2xl shadow-lg text-white">
            <h3 className="text-gray-100 text-sm font-medium">Closed Jobs</h3>
            <p className="text-4xl font-bold mt-2">{stats.closed}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl shadow-lg text-white">
            <h3 className="text-purple-100 text-sm font-medium">Total Applications</h3>
            <p className="text-4xl font-bold mt-2">{stats.applications}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative md:col-span-2">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search jobs by title or department..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Types</option>
              <option value="FULL_TIME">Full Time</option>
              <option value="PART_TIME">Part Time</option>
              <option value="CONTRACT">Contract</option>
              <option value="INTERNSHIP">Internship</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="OPEN">Open</option>
              <option value="CLOSED">Closed</option>
            </select>
          </div>
        </div>

        {/* Jobs List */}
        <div className="grid grid-cols-1 gap-6">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-500 mt-4">Loading jobs...</p>
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
              <Briefcase size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500">No jobs found</p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div key={job.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        job.status === 'OPEN' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400'
                      }`}>
                        {job.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span className="flex items-center gap-1"><Briefcase size={16} /> {job.department}</span>
                      <span className="flex items-center gap-1"><Clock size={16} /> {job.type?.replace('_', ' ') || 'N/A'}</span>
                      <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                      <span className="flex items-center gap-1"><DollarSign size={16} /> {job.salaryRange}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggleStatus(job)}
                      className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                      title={job.status === 'OPEN' ? 'Close Job' : 'Reopen Job'}
                    >
                      {job.status === 'OPEN' ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                    <button
                      onClick={() => handleEditJob(job)}
                      className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit2 size={20} />
                    </button>
                    <button
                      onClick={() => handleDeleteJob(job.id)}
                      className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
                  {job.description}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-sm text-gray-500">Posted on {new Date(job.createdAt || Date.now()).toLocaleDateString()}</span>
                  <button className="text-blue-600 font-medium hover:underline text-sm">View Applications ({job.applicationCount || 0})</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Job Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {editingJob ? 'Edit Job Posting' : 'Create New Job Posting'}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <XCircle size={24} />
              </button>
            </div>
            <form onSubmit={handleSaveJob} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Job Title *</label>
                  <input type="text" value={jobForm.title} onChange={(e) => setJobForm({...jobForm, title: e.target.value})} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Department *</label>
                  <input type="text" value={jobForm.department} onChange={(e) => setJobForm({...jobForm, department: e.target.value})} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Job Type *</label>
                  <select value={jobForm.type} onChange={(e) => setJobForm({...jobForm, type: e.target.value})} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500">
                    <option value="FULL_TIME">Full Time</option>
                    <option value="PART_TIME">Part Time</option>
                    <option value="CONTRACT">Contract</option>
                    <option value="INTERNSHIP">Internship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location *</label>
                  <input type="text" value={jobForm.location} onChange={(e) => setJobForm({...jobForm, location: e.target.value})} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Salary Range</label>
                  <input type="text" value={jobForm.salaryRange} onChange={(e) => setJobForm({...jobForm, salaryRange: e.target.value})} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" placeholder="e.g. $50k - $70k" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description *</label>
                  <textarea value={jobForm.description} onChange={(e) => setJobForm({...jobForm, description: e.target.value})} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" rows="4" required></textarea>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Requirements</label>
                  <textarea value={jobForm.requirements} onChange={(e) => setJobForm({...jobForm, requirements: e.target.value})} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" rows="4" placeholder="List requirements..."></textarea>
                </div>
              </div>
              <div className="flex justify-end gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button type="button" onClick={() => setShowModal(false)} className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl hover:bg-gray-300 font-medium">Cancel</button>
                <button type="submit" disabled={loading} className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium disabled:opacity-50 flex items-center gap-2">
                  {loading ? 'Saving...' : <><CheckCircle size={18} /> {editingJob ? 'Update Job' : 'Post Job'}</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default HRJobs;
