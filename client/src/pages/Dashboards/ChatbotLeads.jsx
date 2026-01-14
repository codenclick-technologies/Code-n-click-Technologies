import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { chatbotAPI } from '../../services/api';
import { Users, Mail, Phone, Calendar, Search, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';
import DashboardLayout from '../../components/layout/DashboardLayout';

const ChatbotLeads = () => {
  const location = useLocation();
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('ALL');

  // Derive role from path
  const role = location.pathname.includes('/owner') ? 'owner' 
             : location.pathname.includes('/manager') ? 'manager' 
             : 'hr';

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const data = await chatbotAPI.getLeads();
      setLeads(data);
    } catch (error) {
      console.error('Failed to fetch leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.requirement?.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'ALL') return matchesSearch;
    return matchesSearch && lead.status === filter;
  });

  return (
    <DashboardLayout role={role}>
      <div className="min-h-screen text-white p-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 flex items-center gap-3">
                <Sparkles className="text-blue-400" />
                AI Chatbot Leads
              </h1>
              <p className="text-gray-400 mt-2">View and manage potential clients captured by your AI Assistant.</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={fetchLeads} className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg border border-white/10 transition-all text-sm font-medium text-gray-200">
                Refresh Data
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search leads by name, email, or requirement..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/20 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
            <div className="flex gap-2">
              {['ALL', 'NEW', 'CONTACTED', 'CONVERTED'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filter === status 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10 border-dashed">
              <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-300">No leads found</h3>
              <p className="text-gray-500 mt-2">Your AI hasn't captured any leads yet. Try chatting with it!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLeads.map((lead, idx) => (
                <motion.div 
                  key={lead.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-[#0A0A0C] border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all group shadow-lg"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{lead.name || 'Unknown Name'}</h3>
                        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {format(new Date(lead.createdAt), 'PPp')}
                        </p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        lead.status === 'NEW' ? 'bg-green-500/20 text-green-400' : 
                        lead.status === 'CONTACTED' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {lead.status}
                      </span>
                    </div>

                    <div className="space-y-3 mb-6">
                      {lead.email && (
                        <div className="flex items-center gap-3 text-gray-300 text-sm">
                          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                            <Mail className="w-4 h-4 text-blue-400" />
                          </div>
                          <span className="truncate">{lead.email}</span>
                        </div>
                      )}
                      {lead.phone && (
                        <div className="flex items-center gap-3 text-gray-300 text-sm">
                          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                            <Phone className="w-4 h-4 text-green-400" />
                          </div>
                          <span>{lead.phone}</span>
                        </div>
                      )}
                    </div>

                    <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                      <p className="text-xs text-gray-500 uppercase font-bold mb-2 tracking-wider">Requirement</p>
                      <p className="text-sm text-gray-300 leading-relaxed italic">
                        "{lead.requirement}"
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-black/20 border-t border-white/10 flex justify-end gap-3">
                     <button className="text-xs font-medium text-gray-400 hover:text-white transition-colors">Archive</button>
                     <button className="text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors">Mark Contacted</button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChatbotLeads;
