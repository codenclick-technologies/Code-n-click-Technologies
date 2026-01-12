import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Mail, Phone, Calendar, DollarSign, FileText, 
  Download, ExternalLink, Clock, CheckCircle, XCircle,
  MessageSquare, Send
} from 'lucide-react';
import { applicationsAPI } from '../../../services/api';

const ApplicationDetailsModal = ({ application, onClose, onUpdate }) => {
  const [note, setNote] = useState('');
  const [updating, setUpdating] = useState(false);

  if (!application) return null;

  const handleStatusUpdate = async (newStatus) => {
    try {
      setUpdating(true);
      await applicationsAPI.updateStatus(application.id, newStatus);
      onUpdate();
      onClose();
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    } finally {
      setUpdating(false);
    }
  };

  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!note.trim()) return;

    try {
      setUpdating(true);
      // Append new note to existing notes
      const existingNotes = application.notes || '';
      const timestamp = new Date().toLocaleString();
      const newNotes = `${existingNotes}\n[${timestamp}] ${note}`;
      
      await applicationsAPI.updateNotes(application.id, newNotes);
      onUpdate();
      setNote('');
    } catch (error) {
      console.error('Error adding note:', error);
      alert('Failed to add note');
    } finally {
      setUpdating(false);
    }
  };

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

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full my-8 border border-gray-200 dark:border-gray-700 flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-start sticky top-0 bg-white dark:bg-gray-800 rounded-t-2xl z-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{application.name}</h2>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(application.status)}`}>
                {application.status}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Applied for <span className="font-semibold text-blue-600 dark:text-blue-400">{application.job?.title}</span>
            </p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <Mail className="text-blue-500" size={20} />
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Email</div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{application.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <Phone className="text-green-500" size={20} />
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Phone</div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{application.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <Calendar className="text-purple-500" size={20} />
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Experience</div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{application.experienceYears} Years</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <Clock className="text-orange-500" size={20} />
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Notice Period</div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{application.noticePeriod || 'N/A'}</div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {application.skills.split(',').map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm border border-blue-100 dark:border-blue-800">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cover Letter */}
              {application.coverLetter && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Cover Letter</h3>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl text-gray-700 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                    {application.coverLetter}
                  </div>
                </div>
              )}

              {/* Notes Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <MessageSquare size={18} />
                  Internal Notes
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 mb-4 max-h-40 overflow-y-auto">
                  {application.notes ? (
                    <pre className="whitespace-pre-wrap text-sm text-gray-600 dark:text-gray-400 font-sans">
                      {application.notes}
                    </pre>
                  ) : (
                    <p className="text-sm text-gray-400 italic">No notes added yet.</p>
                  )}
                </div>
                <form onSubmit={handleAddNote} className="flex gap-2">
                  <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Add a note..."
                    className="flex-1 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    disabled={!note.trim() || updating}
                    className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: Actions & Resume */}
            <div className="space-y-6">
              {/* Status Actions */}
              <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">Update Status</h3>
                <div className="space-y-2">
                  {['PENDING', 'REVIEWING', 'SHORTLISTED', 'INTERVIEW', 'OFFERED', 'REJECTED'].map((status) => (
                    <button
                      key={status}
                      onClick={() => handleStatusUpdate(status)}
                      disabled={application.status === status || updating}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                        application.status === status
                          ? 'bg-blue-600 text-white'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                      }`}
                    >
                      {status}
                      {application.status === status && <CheckCircle size={16} />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Resume */}
              <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">Resume</h3>
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 mb-3">
                  <FileText className="text-red-500" size={24} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {application.resumeFileName || 'resume.pdf'}
                    </div>
                    <div className="text-xs text-gray-500">PDF Document</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={application.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium transition-colors"
                  >
                    <ExternalLink size={16} />
                    View
                  </a>
                  <a
                    href={application.resumeUrl}
                    download
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors"
                  >
                    <Download size={16} />
                    Download
                  </a>
                </div>
              </div>

              {/* CTC Info */}
              <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">Compensation</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Current CTC</div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-1">
                      <DollarSign size={14} className="text-gray-400" />
                      {application.currentCTC ? application.currentCTC.toLocaleString() : 'N/A'}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Expected CTC</div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-1">
                      <DollarSign size={14} className="text-gray-400" />
                      {application.expectedCTC ? application.expectedCTC.toLocaleString() : 'N/A'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ApplicationDetailsModal;
