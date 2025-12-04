import React, { useState, useEffect } from 'react';
import { Mail, Search, CheckCircle, Clock } from 'lucide-react';
import { contactAPI } from '../../services/api';

const MessagesContent = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await contactAPI.getAll();
      setMessages(response.data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
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

  const filteredMessages = messages.filter(msg => 
    msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Messages</h2>
          <p className="text-gray-500">View and manage contact form submissions</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search messages..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none w-64" 
          />
        </div>
      </div>

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
          filteredMessages.map((msg) => (
            <div key={msg.id} className={`bg-white dark:bg-gray-800 p-6 rounded-2xl border transition-all ${msg.status === 'NEW' ? 'border-blue-500 shadow-md' : 'border-gray-100 dark:border-gray-700'}`}>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    {msg.firstName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">New Inquiry</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock size={14} />
                      {new Date(msg.createdAt).toLocaleString()}
                    </div>
                  </div>
                </div>
                {msg.status === 'NEW' && (
                  <button 
                    onClick={() => handleMarkAsRead(msg.id)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
                  >
                    <CheckCircle size={16} /> Mark as Read
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Full Name</span>
                  <p className="font-medium text-gray-900 dark:text-white mt-1">{msg.firstName} {msg.lastName}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email Address</span>
                  <p className="font-medium text-gray-900 dark:text-white mt-1">{msg.email}</p>
                </div>
                <div className="md:col-span-2">
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
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MessagesContent;
