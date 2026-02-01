import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, LayoutGrid, List, MoreVertical, 
  Calendar, IndianRupee, Briefcase, Clock, ChevronRight,
  Download, Eye, CheckCircle, XCircle, Loader
} from 'lucide-react';
import { applicationsAPI, jobsAPI } from '../../../services/api';
import ApplicationDetailsModal from './ApplicationDetailsModal';

const ApplicationsTab = () => {
  const [viewMode, setViewMode] = useState('kanban'); // 'kanban' or 'list'
  const [applications, setApplications] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState('');
  const [selectedApplication, setSelectedApplication] = useState(null);

  const statuses = ['PENDING', 'REVIEWING', 'SHORTLISTED', 'INTERVIEW', 'OFFERED', 'REJECTED'];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [appsRes, jobsRes] = await Promise.all([
        applicationsAPI.getAll(),
        jobsAPI.getAll()
      ]);
      setApplications(appsRes.data || []);
      setJobs(jobsRes.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = 
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesJob = selectedJob ? app.jobId === selectedJob : true;
    return matchesSearch && matchesJob;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'PENDING': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'REVIEWING': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'SHORTLISTED': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case 'INTERVIEW': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400';
      case 'OFFERED': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'REJECTED': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const KanbanColumn = ({ status, items }) => (
    <div className="flex-shrink-0 w-80 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 flex flex-col h-full max-h-[calc(100vh-250px)]">
      <div className="flex items-center justify-between mb-4 px-2">
        <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wider">
          {status}
        </h3>
        <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full text-xs font-medium">
          {items.length}
        </span>
      </div>
      
      <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
        {items.map(app => (
          <motion.div
            key={app.id}
            layoutId={app.id}
            onClick={() => setSelectedApplication(app)}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 cursor-pointer hover:shadow-md transition-all group"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {app.name}
              </h4>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(app.createdAt).toLocaleDateString()}
              </span>
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {app.job?.title}
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
              <Briefcase size={12} />
              <span>{app.experienceYears} Years</span>
              <span className="mx-1">•</span>
              <IndianRupee size={12} />
              <span>{app.expectedCTC ? `${app.expectedCTC / 1000}k` : 'N/A'}</span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
              <div className="flex -space-x-2">
                {/* Placeholder for avatars if available later */}
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400">
                  {app.name.charAt(0)}
                </div>
              </div>
              <button className="text-blue-600 dark:text-blue-400 text-xs font-medium hover:underline">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search candidates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={selectedJob}
            onChange={(e) => setSelectedJob(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Jobs</option>
            {jobs.map(job => (
              <option key={job.id} value={job.id}>{job.title}</option>
            ))}
          </select>
        </div>

        <div className="flex bg-gray-100 dark:bg-gray-700 rounded-xl p-1">
          <button
            onClick={() => setViewMode('kanban')}
            className={`p-2 rounded-lg transition-all ${
              viewMode === 'kanban' 
                ? 'bg-white dark:bg-gray-600 shadow-sm text-blue-600 dark:text-blue-400' 
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
            }`}
          >
            <LayoutGrid size={18} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-all ${
              viewMode === 'list' 
                ? 'bg-white dark:bg-gray-600 shadow-sm text-blue-600 dark:text-blue-400' 
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
            }`}
          >
            <List size={18} />
          </button>
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex justify-center py-20">
          <Loader className="animate-spin text-blue-600" size={40} />
        </div>
      ) : filteredApplications.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
          <Briefcase className="mx-auto text-gray-400 mb-4" size={48} />
          <p className="text-gray-600 dark:text-gray-400 text-lg">No applications found</p>
        </div>
      ) : viewMode === 'kanban' ? (
        <div className="flex overflow-x-auto gap-6 pb-6 custom-scrollbar">
          {statuses.map(status => (
            <KanbanColumn
              key={status}
              status={status}
              items={filteredApplications.filter(app => app.status === status)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600 dark:text-gray-400">
              <thead className="bg-gray-50 dark:bg-gray-700/50 text-xs uppercase font-medium">
                <tr>
                  <th className="px-6 py-4">Candidate</th>
                  <th className="px-6 py-4">Job Role</th>
                  <th className="px-6 py-4">Experience</th>
                  <th className="px-6 py-4">Applied Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {filteredApplications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900 dark:text-white">{app.name}</div>
                      <div className="text-xs text-gray-500">{app.email}</div>
                    </td>
                    <td className="px-6 py-4">{app.job?.title}</td>
                    <td className="px-6 py-4">{app.experienceYears} Years</td>
                    <td className="px-6 py-4">{new Date(app.createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => setSelectedApplication(app)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Details Modal */}
      <AnimatePresence>
        {selectedApplication && (
          <ApplicationDetailsModal
            application={selectedApplication}
            onClose={() => setSelectedApplication(null)}
            onUpdate={fetchData}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ApplicationsTab;
