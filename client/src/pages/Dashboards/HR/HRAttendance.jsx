import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import { 
  Calendar, Clock, CheckCircle, XCircle, AlertCircle, 
  Search, Filter, Download, User, FileText
} from 'lucide-react';
import { attendanceAPI, leavesAPI } from '../../../services/api';

const HRAttendance = () => {
  // State
  const [activeTab, setActiveTab] = useState('attendance'); // 'attendance' or 'leaves'
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Advanced Filters
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  const [filterDepartment, setFilterDepartment] = useState('all');

  // Stats State
  const [stats, setStats] = useState({
    present: 0,
    absent: 0,
    late: 0,
    onLeave: 0
  });

  useEffect(() => {
    if (activeTab === 'attendance') {
      fetchAttendance();
    } else {
      fetchLeaves();
    }
  }, [activeTab, startDate, endDate]); // Refetch when date range changes

  const fetchAttendance = async () => {
    try {
      setLoading(true);
      const response = await attendanceAPI.getAll({ startDate, endDate });
      setAttendanceRecords(response || []);
      // Mock stats calculation based on records
      calculateAttendanceStats(response || []);
    } catch (error) {
      console.error('Error fetching attendance:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchLeaves = async () => {
    try {
      setLoading(true);
      const response = await leavesAPI.getAll();
      setLeaveRequests(response || []);
    } catch (error) {
      console.error('Error fetching leaves:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateAttendanceStats = (records) => {
    const present = records.filter(r => r.status === 'PRESENT').length;
    const absent = records.filter(r => r.status === 'ABSENT').length;
    const late = records.filter(r => r.status === 'LATE').length;
    const onLeave = records.filter(r => r.status === 'ON_LEAVE').length;
    setStats({ present, absent, late, onLeave });
  };

  const handleLeaveAction = async (id, action) => {
    if (!confirm(`Are you sure you want to ${action} this leave request?`)) return;
    
    try {
      setLoading(true);
      if (action === 'approve') {
        await leavesAPI.approve(id, 'Approved by HR');
      } else {
        await leavesAPI.reject(id, 'Rejected by HR');
      }
      alert(`Leave request ${action}d successfully`);
      fetchLeaves();
    } catch (error) {
      console.error(`Error ${action}ing leave:`, error);
      alert(`Failed to ${action} leave request`);
    } finally {
      setLoading(false);
    }
  };

  // Derived Data for Filters
  const departments = [...new Set(attendanceRecords.map(r => r.user?.employeeProfile?.department).filter(Boolean))];

  // Filtered Data
  const filteredAttendance = attendanceRecords.filter(record => {
    const matchesSearch = record.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          record.user?.employeeProfile?.employeeCode?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'all' || record.user?.employeeProfile?.department === filterDepartment;
    return matchesSearch && matchesDepartment;
  });

  const filteredLeaves = leaveRequests.filter(leave => 
    leave.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    leave.leaveType?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Export to CSV
  const downloadCSV = () => {
    const headers = ['Employee Name', 'Employee Code', 'Department', 'Date', 'Check In', 'Check Out', 'Status', 'Work Hours'];
    const csvData = filteredAttendance.map(record => [
      record.user?.name || '',
      record.user?.employeeProfile?.employeeCode || '',
      record.user?.employeeProfile?.department || '',
      new Date(record.date).toLocaleDateString(),
      record.checkIn ? new Date(record.checkIn).toLocaleTimeString() : '-',
      record.checkOut ? new Date(record.checkOut).toLocaleTimeString() : '-',
      record.status,
      record.workHours || '-'
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `attendance_report_${startDate}_to_${endDate}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <DashboardLayout role="hr">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col justify-between items-start gap-4 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Attendance & Leaves</h2>
            <p className="text-gray-500 mt-1">Track attendance and manage leave requests</p>
          </div>
          <div className="flex flex-col-reverse w-full gap-4 sm:flex-row sm:w-auto">
             {activeTab === 'attendance' && (
              <button
                onClick={downloadCSV}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 font-medium transition-colors sm:py-2"
              >
                <Download size={18} />
                Export CSV
              </button>
            )}
            <div className="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('attendance')}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center ${
                  activeTab === 'attendance'
                    ? 'bg-white dark:bg-gray-600 text-blue-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                }`}
              >
                Daily Attendance
              </button>
              <button
                onClick={() => setActiveTab('leaves')}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center ${
                  activeTab === 'leaves'
                    ? 'bg-white dark:bg-gray-600 text-blue-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                }`}
              >
                Leave Requests
              </button>
            </div>
          </div>
        </div>

        {/* Stats (Only for Attendance Tab) */}
        {activeTab === 'attendance' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-lg text-white">
              <h3 className="text-green-100 text-sm font-medium">Present</h3>
              <p className="text-4xl font-bold mt-2">{stats.present}</p>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-rose-600 p-6 rounded-2xl shadow-lg text-white">
              <h3 className="text-red-100 text-sm font-medium">Absent</h3>
              <p className="text-4xl font-bold mt-2">{stats.absent}</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-amber-600 p-6 rounded-2xl shadow-lg text-white">
              <h3 className="text-yellow-100 text-sm font-medium">Late Arrivals</h3>
              <p className="text-4xl font-bold mt-2">{stats.late}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-lg text-white">
              <h3 className="text-blue-100 text-sm font-medium">On Leave</h3>
              <p className="text-4xl font-bold mt-2">{stats.onLeave}</p>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-end">
            <div className="relative flex-1 max-w-md w-full">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search employee..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {activeTab === 'attendance' && (
              <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
                <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500">Department</label>
                    <select
                        value={filterDepartment}
                        onChange={(e) => setFilterDepartment(e.target.value)}
                        className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="all">All Departments</option>
                        {departments.map(dept => (
                            <option key={dept} value={dept}>{dept}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-500">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-500">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-12 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-gray-500 mt-4">Loading data...</p>
              </div>
            ) : activeTab === 'attendance' ? (
              // Attendance Table
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 dark:bg-gray-700/50 text-xs uppercase font-semibold text-gray-500">
                  <tr>
                    <th className="px-6 py-4">Employee</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Check In</th>
                    <th className="px-6 py-4">Check Out</th>
                    <th className="px-6 py-4">Work Hours</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {filteredAttendance.length === 0 ? (
                    <tr><td colSpan="6" className="p-8 text-center text-gray-500">No attendance records found</td></tr>
                  ) : (
                    filteredAttendance.map((record) => (
                      <tr key={record.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{record.user?.name}</p>
                            <p className="text-xs text-gray-500">{record.user?.employeeProfile?.employeeCode}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                            {new Date(record.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                          {record.checkIn ? new Date(record.checkIn).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : '-'}
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                          {record.checkOut ? new Date(record.checkOut).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : '-'}
                        </td>
                        <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-400">
                          {record.workHours || '-'}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            record.status === 'PRESENT' ? 'bg-green-100 text-green-700' :
                            record.status === 'ABSENT' ? 'bg-red-100 text-red-700' :
                            record.status === 'LATE' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {record.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            ) : (
              // Leave Requests Table
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 dark:bg-gray-700/50 text-xs uppercase font-semibold text-gray-500">
                  <tr>
                    <th className="px-6 py-4">Employee</th>
                    <th className="px-6 py-4">Leave Type</th>
                    <th className="px-6 py-4">Duration</th>
                    <th className="px-6 py-4">Reason</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {filteredLeaves.length === 0 ? (
                    <tr><td colSpan="6" className="p-8 text-center text-gray-500">No leave requests found</td></tr>
                  ) : (
                    filteredLeaves.map((leave) => (
                      <tr key={leave.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{leave.user?.name}</p>
                            <p className="text-xs text-gray-500">Applied: {new Date(leave.createdAt).toLocaleDateString()}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{leave.leaveType?.replace('_', ' ')}</td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                          {new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()}
                          <div className="text-xs text-gray-500">({leave.days} days)</div>
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400 max-w-xs truncate" title={leave.reason}>
                          {leave.reason}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            leave.status === 'APPROVED' ? 'bg-green-100 text-green-700' :
                            leave.status === 'REJECTED' ? 'bg-red-100 text-red-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {leave.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {leave.status === 'PENDING' && (
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleLeaveAction(leave.id, 'approve')}
                                className="p-1 text-green-600 hover:bg-green-50 rounded"
                                title="Approve"
                              >
                                <CheckCircle size={18} />
                              </button>
                              <button
                                onClick={() => handleLeaveAction(leave.id, 'reject')}
                                className="p-1 text-red-600 hover:bg-red-50 rounded"
                                title="Reject"
                              >
                                <XCircle size={18} />
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HRAttendance;
