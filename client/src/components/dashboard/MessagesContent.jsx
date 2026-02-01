import React, { useState, useEffect } from 'react';
import { Mail, Search, CheckCircle, Clock, Trash2, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
import { contactAPI } from '../../services/api';

const MessagesContent = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIds, setSelectedIds] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteType, setDeleteType] = useState(''); // 'single' or 'bulk'
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await contactAPI.getAll();
      setMessages(Array.isArray(response) ? response : []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      await contactAPI.markAsRead(id);
      setMessages(messages.map(msg => msg.id === id ? { ...msg, status: 'READ' } : msg));
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  const handleSingleDelete = (id) => {
    setDeleteType('single');
    setDeleteTarget(id);
    setShowDeleteConfirm(true);
  };

  const handleBulkDelete = () => {
    if (selectedIds.length === 0) return;
    setDeleteType('bulk');
    setDeleteTarget(selectedIds);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    try {
      setDeleting(true);
      if (deleteType === 'single') {
        await contactAPI.delete(deleteTarget);
        setMessages(messages.filter(msg => msg.id !== deleteTarget));
        if (expandedId === deleteTarget) setExpandedId(null);
      } else {
        await contactAPI.bulkDelete(deleteTarget);
        setMessages(messages.filter(msg => !deleteTarget.includes(msg.id)));
        setSelectedIds([]);
      }
      setShowDeleteConfirm(false);
      setDeleteTarget(null);
    } catch (error) {
      console.error('Error deleting:', error);
      alert('Failed to delete messages');
    } finally {
      setDeleting(false);
    }
  };

  const toggleSelection = (id) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredMessages.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredMessages.map(msg => msg.id));
    }
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredMessages = messages.filter(msg => 
    msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const unreadCount = messages.filter(msg => msg.status === 'NEW').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Messages</h2>
            {unreadCount > 0 && (
              <span className="px-3 py-1 bg-blue-600 text-white text-xs md:text-sm font-bold rounded-full">
                {unreadCount} new
              </span>
            )}
          </div>
          <p className="text-sm md:text-base text-gray-500 mt-1">View and manage contact form submissions</p>
        </div>
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search messages..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
          />
        </div>
      </div>

      {/* Bulk Actions */}
      {filteredMessages.length > 0 && (
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedIds.length === filteredMessages.length && filteredMessages.length > 0}
              onChange={toggleSelectAll}
              className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Select All ({filteredMessages.length})
            </span>
          </label>
          {selectedIds.length > 0 && (
            <button
              onClick={handleBulkDelete}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              <Trash2 size={18} />
              Delete ({selectedIds.length})
            </button>
          )}
        </div>
      )}

      {/* Messages List */}
      <div className="grid gap-4">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : filteredMessages.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
            <Mail size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500">No messages found</p>
          </div>
        ) : (
          filteredMessages.map((msg) => {
            const isExpanded = expandedId === msg.id;
            const isSelected = selectedIds.includes(msg.id);
            
            return (
              <div 
                key={msg.id} 
                className={`bg-white dark:bg-gray-800 rounded-2xl border transition-all ${
                  msg.status === 'NEW' ? 'border-blue-500 shadow-md' : 'border-gray-100 dark:border-gray-700'
                } ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
              >
                {/* Collapsed Header */}
                <div className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelection(msg.id)}
                        className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 shrink-0"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <div 
                        className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer"
                        onClick={() => toggleExpand(msg.id)}
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                          {msg.firstName.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-bold text-gray-900 dark:text-white truncate">
                              {msg.firstName} {msg.lastName}
                            </h3>
                            {msg.status === 'NEW' && (
                              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">NEW</span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{msg.subject}</p>
                          <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                            <Clock size={12} />
                            {new Date(msg.createdAt).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-2 ml-9 md:ml-0">
                      {msg.status === 'NEW' && !isExpanded && (
                        <button 
                          onClick={() => handleMarkAsRead(msg.id)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium whitespace-nowrap"
                        >
                          <CheckCircle size={14} /> <span className="hidden sm:inline">Read</span>
                        </button>
                      )}
                      <button
                        onClick={() => toggleExpand(msg.id)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-6 animate-in slide-in-from-top duration-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email Address</span>
                          <p className="font-medium text-gray-900 dark:text-white mt-1">{msg.email}</p>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Subject</span>
                          <p className="font-medium text-gray-900 dark:text-white mt-1">{msg.subject}</p>
                        </div>
                      </div>

                      <div>
                        <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Message</span>
                        <div className="mt-2 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/30 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                          {msg.message}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        {msg.status === 'NEW' && (
                          <button 
                            onClick={() => handleMarkAsRead(msg.id)}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                          >
                            <CheckCircle size={18} /> Mark as Read
                          </button>
                        )}
                        <button
                          onClick={() => handleSingleDelete(msg.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                        >
                          <Trash2 size={18} /> Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <AlertTriangle className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Confirm Delete</h3>
                <p className="text-sm text-gray-500">This action cannot be undone</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Are you sure you want to delete {deleteType === 'bulk' ? `${deleteTarget.length} messages` : 'this message'}?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setDeleteTarget(null);
                }}
                disabled={deleting}
                className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={deleting}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {deleting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 size={18} />
                    Delete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesContent;
