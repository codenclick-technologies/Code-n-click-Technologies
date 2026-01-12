import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import { 
  Cake, Calendar, Gift, Plus, Search, Mail, Star, 
  PartyPopper, Trash2, XCircle, CheckCircle
} from 'lucide-react';
import { celebrationsAPI } from '../../../services/api';

const HRCelebrations = () => {
  // State
  const [celebrations, setCelebrations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    type: 'BIRTHDAY',
    employeeName: '',
    description: ''
  });

  useEffect(() => {
    fetchCelebrations();
  }, []);

  const fetchCelebrations = async () => {
    try {
      setLoading(true);
      const response = await celebrationsAPI.getAll();
      setCelebrations(response.data || []);
    } catch (error) {
      console.error('Error fetching celebrations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await celebrationsAPI.create(newEvent);
      alert('Celebration added successfully!');
      setShowModal(false);
      setNewEvent({ title: '', date: '', type: 'BIRTHDAY', employeeName: '', description: '' });
      fetchCelebrations();
    } catch (error) {
      console.error('Error adding celebration:', error);
      alert('Failed to add celebration');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEvent = async (id) => {
    if (!confirm('Are you sure you want to delete this event?')) return;
    try {
      setLoading(true);
      await celebrationsAPI.delete(id);
      fetchCelebrations();
    } catch (error) {
      console.error('Error deleting celebration:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendWish = (event) => {
    alert(`Wish sent to ${event.employeeName || event.title}! 🎈`);
  };

  // Group celebrations by month
  const groupedCelebrations = celebrations.reduce((acc, event) => {
    const date = new Date(event.date);
    const month = date.toLocaleString('default', { month: 'long' });
    if (!acc[month]) acc[month] = [];
    acc[month].push(event);
    return acc;
  }, {});

  const filteredCelebrations = celebrations.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.employeeName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout role="hr">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Celebrations & Events</h2>
            <p className="text-gray-500 mt-1">Birthdays, anniversaries, and company events</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium"
          >
            <Plus size={20} />
            Add Event
          </button>
        </div>

        {/* Upcoming Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-6 rounded-2xl shadow-lg text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Cake size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Upcoming Birthdays</h3>
                <p className="text-pink-100">Next 7 days</p>
              </div>
            </div>
            <div className="space-y-3">
              {celebrations.filter(c => c.type === 'BIRTHDAY').slice(0, 3).map((b, i) => (
                <div key={i} className="flex items-center justify-between bg-white/10 p-2 rounded-lg">
                  <span className="font-medium">{b.employeeName}</span>
                  <span className="text-sm opacity-80">{new Date(b.date).getDate()} {new Date(b.date).toLocaleString('default', { month: 'short' })}</span>
                </div>
              ))}
              {celebrations.filter(c => c.type === 'BIRTHDAY').length === 0 && (
                <p className="text-sm opacity-80">No upcoming birthdays</p>
              )}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-6 rounded-2xl shadow-lg text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Star size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Work Anniversaries</h3>
                <p className="text-purple-100">This Month</p>
              </div>
            </div>
            <div className="space-y-3">
              {celebrations.filter(c => c.type === 'ANNIVERSARY').slice(0, 3).map((a, i) => (
                <div key={i} className="flex items-center justify-between bg-white/10 p-2 rounded-lg">
                  <span className="font-medium">{a.employeeName}</span>
                  <span className="text-sm opacity-80">{new Date(a.date).getDate()} {new Date(a.date).toLocaleString('default', { month: 'short' })}</span>
                </div>
              ))}
              {celebrations.filter(c => c.type === 'ANNIVERSARY').length === 0 && (
                <p className="text-sm opacity-80">No upcoming anniversaries</p>
              )}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-6 rounded-2xl shadow-lg text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <PartyPopper size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Company Events</h3>
                <p className="text-orange-100">Upcoming</p>
              </div>
            </div>
            <div className="space-y-3">
              {celebrations.filter(c => c.type === 'EVENT').slice(0, 3).map((e, i) => (
                <div key={i} className="flex items-center justify-between bg-white/10 p-2 rounded-lg">
                  <span className="font-medium">{e.title}</span>
                  <span className="text-sm opacity-80">{new Date(e.date).getDate()} {new Date(e.date).toLocaleString('default', { month: 'short' })}</span>
                </div>
              ))}
              {celebrations.filter(c => c.type === 'EVENT').length === 0 && (
                <p className="text-sm opacity-80">No upcoming events</p>
              )}
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search celebrations..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* All Celebrations List */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">All Celebrations</h3>
          </div>
          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {filteredCelebrations.length === 0 ? (
              <div className="p-12 text-center">
                <Calendar size={48} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No celebrations found</p>
              </div>
            ) : (
              filteredCelebrations.map((event) => (
                <div key={event.id} className="p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${
                      event.type === 'BIRTHDAY' ? 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400' :
                      event.type === 'ANNIVERSARY' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' :
                      'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'
                    }`}>
                      {event.type === 'BIRTHDAY' ? <Cake size={24} /> : 
                       event.type === 'ANNIVERSARY' ? <Star size={24} /> : 
                       <PartyPopper size={24} />}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{event.title || event.employeeName}</h4>
                      <p className="text-sm text-gray-500">{event.type} • {new Date(event.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => handleSendWish(event)}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                    >
                      <Mail size={16} /> Send Wish
                    </button>
                    <button 
                      onClick={() => handleDeleteEvent(event.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Add Event Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Add Celebration</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <XCircle size={24} />
              </button>
            </div>
            <form onSubmit={handleAddEvent} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Event Type</label>
                <select 
                  value={newEvent.type} 
                  onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="BIRTHDAY">Birthday</option>
                  <option value="ANNIVERSARY">Work Anniversary</option>
                  <option value="EVENT">Company Event</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {newEvent.type === 'EVENT' ? 'Event Title' : 'Employee Name'}
                </label>
                <input 
                  type="text" 
                  value={newEvent.type === 'EVENT' ? newEvent.title : newEvent.employeeName} 
                  onChange={(e) => setNewEvent({
                    ...newEvent, 
                    [newEvent.type === 'EVENT' ? 'title' : 'employeeName']: e.target.value
                  })}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date</label>
                <input 
                  type="date" 
                  value={newEvent.date} 
                  onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description (Optional)</label>
                <textarea 
                  value={newEvent.description} 
                  onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" 
                  rows="3"
                ></textarea>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-xl">Cancel</button>
                <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 flex items-center gap-2">
                  {loading ? 'Saving...' : <><CheckCircle size={18} /> Save Event</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default HRCelebrations;
