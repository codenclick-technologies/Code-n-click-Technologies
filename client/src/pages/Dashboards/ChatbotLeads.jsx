import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { chatbotAPI } from '../../services/api';
import { Users, Mail, Phone, Calendar, Search, Loader2, Sparkles, AlertCircle, Trash2, CheckCircle2, Clock, XCircle, TrendingUp, Download, AlertTriangle } from 'lucide-react';
import { format, differenceInHours } from 'date-fns';
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

  const handleStatusUpdate = async (id, status) => {
    try {
      await chatbotAPI.updateStatus(id, status);
      setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
    } catch (error) {
      console.error("Failed to update status", error);
      alert("Failed to update status");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to permanently delete this lead?")) {
      try {
        await chatbotAPI.deleteLead(id);
        setLeads(prev => prev.filter(l => l.id !== id));
      } catch (error) {
        console.error("Failed to delete lead", error);
        alert("Failed to delete lead. Check console for details.");
      }
    }
  };

  const handleExportCSV = () => {
    const headers = ["Name", "Email", "Phone", "Requirement", "Status", "Date"];
    const rows = leads.map(l => [
      l.name || "N/A",
      l.email || "N/A",
      l.phone || "N/A",
      `"${l.requirement?.replace(/"/g, '""') || ''}"`, // Escape quotes
      l.status,
      format(new Date(l.createdAt), 'yyyy-MM-dd HH:mm:ss')
    ]);

    const csvContent = "data:text/csv;charset=utf-8,"
      + headers.join(",") + "\n"
      + rows.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `chatbot_leads_${format(new Date(), 'yyyy-MM-dd')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // --- ADVANCED LOGIC START ---

  // 1. Calculate Real-Time Stats with Conversion Rate
  const totalLeads = leads.length;
  const newLeads = leads.filter(l => l.status === 'NEW').length;
  const contactedLeads = leads.filter(l => l.status === 'CONTACTED').length;
  const convertedLeads = leads.filter(l => l.status === 'CONVERTED').length;

  // Avoid division by zero
  const conversionRate = totalLeads > 0
    ? ((convertedLeads / totalLeads) * 100).toFixed(1)
    : "0.0";

  const stats = {
    total: totalLeads,
    new: newLeads,
    contacted: contactedLeads,
    converted: convertedLeads,
    rate: conversionRate
  };

  // 2. Identify Stale Leads (More than 24 hours old AND still NEW)
  const isStale = (lead) => {
    if (lead.status !== 'NEW') return false;
    const hoursDiff = differenceInHours(new Date(), new Date(lead.createdAt));
    return hoursDiff >= 24;
  };

  // --- ADVANCED LOGIC END ---

  const filteredLeads = leads.filter(lead => {
    const matchesSearch =
      lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.requirement?.toLowerCase().includes(searchTerm.toLowerCase());

    if (filter === 'ALL') return matchesSearch && lead.status !== 'ARCHIVED';
    return matchesSearch && lead.status === filter;
  });

  return (
    <DashboardLayout role={role}>
      <div className="min-h-screen text-white p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 flex items-center gap-3 animate-gradient">
                <Sparkles className="text-blue-400 w-8 h-8 flex-shrink-0" />
                AI Chatbot Leads
              </h1>
              <p className="text-gray-400 mt-2 text-sm md:text-base">Manage leads captured by your AI Assistant.</p>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto">
              <button
                onClick={handleExportCSV}
                className="flex-1 sm:flex-none justify-center flex items-center gap-2 bg-green-600/20 hover:bg-green-600/30 text-green-400 border border-green-500/30 px-5 py-2.5 rounded-xl transition-all text-sm font-medium hover:shadow-lg hover:shadow-green-500/10 active:scale-95"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
              <button 
                onClick={fetchLeads} 
                className="flex-shrink-0 bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-xl border border-white/10 transition-all text-sm font-medium text-gray-200 hover:shadow-lg active:scale-95"
              >
                Refresh
              </button>
            </div>
          </div>

          {/* Stats Grid - Responsive with Conversion Rate */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-8">
            <StatsCard
              title="Total Leads"
              count={stats.total}
              icon={Users}
              color="text-blue-400"
              bg="bg-blue-500/10 border-blue-500/20"
            />
            <StatsCard
              title="New Leads"
              count={stats.new}
              icon={Sparkles}
              color="text-purple-400"
              bg="bg-purple-500/10 border-purple-500/20"
            />
            {/* Highlight Conversion Rate */}
            <StatsCard
              title="Conversion Rate"
              count={`${stats.rate}%`}
              icon={TrendingUp}
              color="text-pink-400"
              bg="bg-pink-500/10 border-pink-500/20"
              isHighlight={true}
            />
            <StatsCard
              title="Contacted"
              count={stats.contacted}
              icon={Phone}
              color="text-yellow-400"
              bg="bg-yellow-500/10 border-yellow-500/20"
            />
            <StatsCard
              title="Converted"
              count={stats.converted}
              icon={CheckCircle2}
              color="text-green-400"
              bg="bg-green-500/10 border-green-500/20"
            />
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8 bg-white/5 p-4 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by name, email, or requirement..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all placeholder:text-gray-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap sm:flex-nowrap lg:w-auto overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
              {['ALL', 'NEW', 'CONTACTED', 'CONVERTED', 'ARCHIVED'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${filter === status
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Leads Grid */}
          {loading ? (
            <div className="flex items-center justify-center py-32">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-pulse"></div>
                <Loader2 className="relative w-12 h-12 text-blue-500 animate-spin" />
              </div>
            </div>
          ) : filteredLeads.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-32 bg-white/5 rounded-3xl border border-white/10 border-dashed backdrop-blur-sm"
            >
              <div className="w-20 h-20 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">No leads found</h3>
              <p className="text-gray-500 max-w-sm mx-auto">
                No leads match your current filters. Try changing filters or wait for new leads to arrive.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredLeads.map((lead, idx) => (
                <LeadCard
                  key={lead.id}
                  lead={lead}
                  idx={idx}
                  isStale={isStale(lead)}
                  onDelete={handleDelete}
                  onUpdateStatus={handleStatusUpdate}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

// Sub-components for cleaner code
const StatsCard = ({ title, count, icon: Icon, color, bg, isHighlight }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className={`p-5 rounded-2xl border ${bg} backdrop-blur-sm relative overflow-hidden group ${isHighlight ? 'ring-1 ring-pink-500/50 shadow-lg shadow-pink-500/10' : ''}`}
  >
    <div className={`absolute top-0 right-0 w-24 h-24 ${color.replace('text-', 'bg-')}/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110`} />
    <div className="relative flex justify-between items-start">
      <div>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">{title}</p>
        <h3 className="text-3xl font-bold text-white tracking-tight">{count}</h3>
      </div>
      <div className={`p-3 rounded-xl bg-black/20 ${color} shadow-inner`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  </motion.div>
);

const LeadCard = ({ lead, idx, isStale, onDelete, onUpdateStatus }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.05 }}
    className={`bg-[#0A0A0C] border rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all group shadow-xl flex flex-col relative
            ${isStale ? 'border-red-500/50 ring-1 ring-red-500/20' : 'border-white/10'}`}
  >
    {isStale && (
      <div className="bg-red-500/10 px-4 py-2 flex items-center gap-2 text-xs font-bold text-red-400 border-b border-red-500/10 animate-pulse">
        <AlertTriangle className="w-3 h-3" />
        Action Required: Response overdue (&gt;24h)
      </div>
    )}

    <div className="p-6 flex-1 relative z-10">
      <div className="flex justify-between items-start mb-5">
        <div className="min-w-0 pr-2">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors truncate" title={lead.name}>
            {lead.name || 'Unknown User'}
          </h3>
          <p className="text-xs text-gray-500 mt-1.5 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {format(new Date(lead.createdAt), 'PP p')}
          </p>
        </div>
        <StatusBadge status={lead.status} />
      </div>

      <div className="space-y-3 mb-6">
        {lead.email && (
          <div className="flex items-center gap-3 text-gray-300 text-sm group/item">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-500/50 transition-colors">
              <Mail className="w-4 h-4 text-gray-400 group-hover/item:text-blue-400 transition-colors" />
            </div>
            <span className="truncate select-all" title={lead.email}>{lead.email}</span>
          </div>
        )}
        {lead.phone && (
          <div className="flex items-center gap-3 text-gray-300 text-sm group/item">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover/item:bg-green-500/20 group-hover/item:border-green-500/50 transition-colors">
              <Phone className="w-4 h-4 text-gray-400 group-hover/item:text-green-400 transition-colors" />
            </div>
            <span className="select-all">{lead.phone}</span>
          </div>
        )}
      </div>

      <div className="bg-white/5 rounded-xl p-4 border border-white/5 group-hover:border-white/10 transition-colors">
        <p className="text-[10px] text-gray-500 uppercase font-bold mb-2 tracking-wider flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          Requirement
        </p>
        <p className="text-sm text-gray-300 leading-relaxed">
          "{lead.requirement}"
        </p>
      </div>
    </div>

    <div className="px-6 py-4 bg-black/20 border-t border-white/10 flex flex-wrap justify-between gap-3 items-center">
      <button
        onClick={() => onDelete(lead.id)}
        className="p-2 rounded-lg bg-white/5 text-gray-400 hover:bg-red-500/20 hover:text-red-400 border border-transparent hover:border-red-500/30 transition-all"
        title="Delete Lead"
      >
        <Trash2 className="w-4 h-4" />
      </button>

      <div className="flex gap-2 flex-wrap justify-end flex-1">
        {lead.status !== 'ARCHIVED' && (
          <button
            onClick={() => onUpdateStatus(lead.id, 'ARCHIVED')}
            className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-400 hover:text-white transition-all shadow-sm"
          >
            Archive
          </button>
        )}

        {lead.status === 'NEW' && (
          <button
            onClick={() => onUpdateStatus(lead.id, 'CONTACTED')}
            className="bg-blue-600 hover:bg-blue-700 border border-transparent px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-all shadow-lg shadow-blue-500/20"
          >
            Mark Contacted
          </button>
        )}

        {lead.status === 'CONTACTED' && (
          <button
            onClick={() => onUpdateStatus(lead.id, 'CONVERTED')}
            className="bg-green-600 hover:bg-green-700 border border-transparent px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-all shadow-lg shadow-green-500/20"
          >
            Mark Converted
          </button>
        )}
      </div>
    </div>
  </motion.div>
);

const StatusBadge = ({ status }) => {
  const styles = {
    NEW: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    CONTACTED: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    CONVERTED: 'bg-green-500/10 text-green-400 border-green-500/20',
    ARCHIVED: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
    DEFAULT: 'bg-gray-500/10 text-gray-400 border-gray-500/20'
  };

  return (
    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border tracking-wide uppercase ${styles[status] || styles.DEFAULT}`}>
      {status}
    </span>
  );
};

export default ChatbotLeads;
