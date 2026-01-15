import React, { useState, useEffect } from 'react';
import { 
  Calendar, Search, Filter, Download, 
  CheckCircle, XCircle, Clock, AlertCircle, 
  ChevronLeft, ChevronRight, Edit2, Loader
} from 'lucide-react';
import { attendanceAPI } from '../../../services/api';
import AttendanceCorrectionModal from './AttendanceCorrectionModal';

const AttendanceTab = () => {
  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState([]);
  const [stats, setStats] = useState({
    present: 0,
    absent: 0,
    late: 0,
    onLeave: 0
  });
  
  // Filters
  const [dateFilter, setDateFilter] = useState(new Date().toISOString().split('T')[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Modal State
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showCorrectionModal, setShowCorrectionModal] = useState(false);

  useEffect(() => {
    fetchAttendanceData();
  }, [dateFilter]);

  const fetchAttendanceData = async () => {
    try {
      setLoading(true);
      const response = await attendanceAPI.getAll({
        startDate: dateFilter,
        endDate: dateFilter
      });
      setRecords(response.data || []);
      calculateStats(response.data || []);
    } catch (error) {
      console.error('Error fetching attendance:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (data) => {
    const newStats = {
      present: 0,
      absent: 0,
      late: 0,
      onLeave: 0
    };

    data.forEach(record => {
      if (record.status === 'PRESENT') newStats.present++;
      else if (record.status === 'ABSENT') newStats.absent++;
      else if (record.status === 'LEAVE') newStats.onLeave++;
      else if (record.status === 'HALF_DAY') {
        newStats.present += 0.5;
        newStats.onLeave += 0.5;
      }
      
      // Check for late arrival (assuming 9:30 AM is late)
      if (record.checkIn) {
        const checkInTime = new Date(record.checkIn);
        if (checkInTime.getHours() > 9 || (checkInTime.getHours() === 9 && checkInTime.getMinutes() > 30)) {
          newStats.late++;
        }
      }
    });

    setStats(newStats);
  };

  const handleEditRecord = (record) => {
    setSelectedRecord(record);
    setShowCorrectionModal(true);
  };

  const filteredRecords = records.filter(record => {
    const matchesSearch = record.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          record.user?.employeeProfile?.department?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || record.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Present Today</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stats.present}</h3>
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Late Arrivals</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stats.late}</h3>
            </div>
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl">
              <Clock className="text-yellow-600 dark:text-yellow-400" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">On Leave</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stats.onLeave}</h3>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <Calendar className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Absent</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stats.absent}</h3>
            </div>
            <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-xl">
              <XCircle className="text-red-600 dark:text-red-400" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Toolbar */}
        <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="date" 
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="PRESENT">Present</option>
              <option value="ABSENT">Absent</option>
              <option value="LEAVE">On Leave</option>
              <option value="HALF_DAY">Half Day</option>
            </select>
          </div>

          <div className="relative w-full sm:w-64">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search employee..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader className="animate-spin text-blue-600" size={32} />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-100 dark:border-gray-700">
                  <th className="text-left py-4 px-6 text-gray-500 font-medium">Employee</th>
                  <th className="text-left py-4 px-6 text-gray-500 font-medium">Check In</th>
                  <th className="text-left py-4 px-6 text-gray-500 font-medium">Check Out</th>
                  <th className="text-left py-4 px-6 text-gray-500 font-medium">Work Hours</th>
                  <th className="text-left py-4 px-6 text-gray-500 font-medium">Status</th>
                  <th className="text-right py-4 px-6 text-gray-500 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.map((record) => {
                  const checkIn = record.checkIn ? new Date(record.checkIn) : null;
                  const checkOut = record.checkOut ? new Date(record.checkOut) : null;
                  let workHours = '--';
                  
                  if (checkIn && checkOut) {
                    const diff = checkOut - checkIn;
                    const hours = Math.floor(diff / 3600000);
                    const minutes = Math.floor((diff % 3600000) / 60000);
                    workHours = `${hours}h ${minutes}m`;
                  }

                  return (
                    <tr key={record.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                            {record.user?.name?.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{record.user?.name}</p>
                            <p className="text-xs text-gray-500">{record.user?.employeeProfile?.department || 'N/A'}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-300 font-mono text-sm">
                        {checkIn ? checkIn.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--'}
                      </td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-300 font-mono text-sm">
                        {checkOut ? checkOut.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--'}
                      </td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-300 font-mono text-sm">
                        {workHours}
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          record.status === 'PRESENT' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                          record.status === 'ABSENT' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                          record.status === 'LEAVE' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                          'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                        }`}>
                          {record.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button 
                          onClick={() => handleEditRecord(record)}
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                        >
                          <Edit2 size={18} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
                {filteredRecords.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center py-12 text-gray-500">
                      No attendance records found for this date
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Correction Modal */}
      {showCorrectionModal && (
        <AttendanceCorrectionModal
          record={selectedRecord}
          onClose={() => setShowCorrectionModal(false)}
          onUpdate={fetchAttendanceData}
        />
      )}
    </div>
  );
};

export default AttendanceTab;
