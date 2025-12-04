import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { 
  Clock, Calendar, FileText, User, Briefcase, Users,
  CheckCircle, XCircle, AlertCircle, Download, Plus, Loader
} from 'lucide-react';
import { leavesAPI, attendanceAPI, tasksAPI } from '../../services/api';

const EmployeeDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(false);
  
  // Attendance State
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  
  // Leave State
  const [leaves, setLeaves] = useState([]);
  const [leaveBalance, setLeaveBalance] = useState(null);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [leaveForm, setLeaveForm] = useState({
    leaveType: 'CASUAL',
    startDate: '',
    endDate: '',
    days: 1,
    reason: ''
  });

  // Tasks State
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (activeTab === 'overview') {
      fetchOverviewData();
    } else if (activeTab === 'attendance') {
      fetchAttendanceData();
    } else if (activeTab === 'leaves') {
      fetchLeaveData();
    } else if (activeTab === 'tasks') {
      fetchTasks();
    }
  }, [activeTab]);

  const fetchOverviewData = async () => {
    try {
      setLoading(true);
      const [statusRes, balanceRes, leavesRes] = await Promise.all([
        attendanceAPI.getTodayStatus(),
        leavesAPI.getBalance(),
        leavesAPI.getMyLeaves({ status: 'PENDING' })
      ]);
      setAttendanceStatus(statusRes);
      setLeaveBalance(balanceRes);
      setLeaves(leavesRes || []);
    } catch (error) {
      console.error('Error fetching overview:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAttendanceData = async () => {
    try {
      setLoading(true);
      const [statusRes, recordsRes] = await Promise.all([
        attendanceAPI.getTodayStatus(),
        attendanceAPI.getMyRecords({ month: new Date().getMonth() + 1, year: new Date().getFullYear() })
      ]);
      console.log('fetchAttendanceData: status', statusRes.data);
      console.log('fetchAttendanceData: status', statusRes);
      setAttendanceStatus(statusRes);
      setAttendanceRecords(recordsRes || []);
    } catch (error) {
      console.error('Error fetching attendance:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchLeaveData = async () => {
    try {
      setLoading(true);
      const [leavesRes, balanceRes] = await Promise.all([
        leavesAPI.getMyLeaves(),
        leavesAPI.getBalance()
      ]);
      setLeaves(leavesRes || []);
      setLeaveBalance(balanceRes);
    } catch (error) {
      console.error('Error fetching leaves:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await tasksAPI.getMyTasks();
      setTasks(response.data || []);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTaskStatusUpdate = async (taskId, newStatus) => {
    try {
      await tasksAPI.updateMyTask(taskId, { status: newStatus });
      fetchTasks();
      alert('Task updated successfully!');
    } catch (error) {
      alert('Failed to update task');
    }
  };

  const handleCheckIn = async () => {
    try {
      await attendanceAPI.checkIn();
      fetchAttendanceData();
      alert('Checked in successfully!');
    } catch (error) {
      console.error('Check-in error:', error);
      alert(error.response?.data?.message || error.message || 'Failed to check in');
    }
  };

  const handleCheckOut = async () => {
    try {
      await attendanceAPI.checkOut();
      fetchAttendanceData();
      alert('Checked out successfully!');
    } catch (error) {
      console.error('Check-out error:', error);
      alert(error.response?.data?.message || error.message || 'Failed to check out');
    }
  };

  const handleApplyLeave = async (e) => {
    e.preventDefault();
    try {
      await leavesAPI.apply(leaveForm);
      setShowLeaveModal(false);
      setLeaveForm({
        leaveType: 'CASUAL',
        startDate: '',
        endDate: '',
        days: 1,
        reason: ''
      });
      fetchLeaveData();
      alert('Leave application submitted successfully!');
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to apply for leave');
    }
  };

  const handleCancelLeave = async (id) => {
    if (!confirm('Are you sure you want to cancel this leave request?')) return;
    try {
      await leavesAPI.cancel(id);
      fetchLeaveData();
      alert('Leave cancelled successfully!');
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to cancel leave');
    }
  };

  const calculateDays = () => {
    if (leaveForm.startDate && leaveForm.endDate) {
      const start = new Date(leaveForm.startDate);
      const end = new Date(leaveForm.endDate);
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
      setLeaveForm({ ...leaveForm, days: days > 0 ? days : 1 });
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-gray-500 text-sm font-medium">Today's Status</h3>
                <p className={`text-2xl font-bold mt-2 ${attendanceStatus?.hasCheckedIn ? 'text-green-500' : 'text-gray-400'}`}>
                  {attendanceStatus?.hasCheckedIn ? 'Checked In' : 'Not Checked In'}
                </p>
                {attendanceStatus?.checkIn && (
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(attendanceStatus.checkIn).toLocaleTimeString()}
                  </p>
                )}
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-gray-500 text-sm font-medium">Leave Balance</h3>
                <p className="text-2xl font-bold text-blue-500 mt-2">{leaveBalance?.remaining || 0} Days</p>
                <p className="text-xs text-gray-500 mt-1">Out of {leaveBalance?.totalQuota || 24}</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-gray-500 text-sm font-medium">Pending Leaves</h3>
                <p className="text-2xl font-bold text-orange-500 mt-2">
                  {leaves?.filter(l => l.status === 'PENDING').length || 0}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-gray-500 text-sm font-medium">Approved Leaves</h3>
                <p className="text-2xl font-bold text-green-500 mt-2">
                  {leaves?.filter(l => l.status === 'APPROVED').length || 0}
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={attendanceStatus?.hasCheckedIn ? handleCheckOut : handleCheckIn}
                  className={`p-4 rounded-xl border-2 ${
                    attendanceStatus?.hasCheckedIn
                      ? 'border-red-300 bg-red-50 dark:bg-red-900/20 hover:bg-red-100'
                      : 'border-green-300 bg-green-50 dark:bg-green-900/20 hover:bg-green-100'
                  } transition-colors`}
                >
                  <Clock className={`${attendanceStatus?.hasCheckedIn ? 'text-red-600' : 'text-green-600'} mb-2`} size={24} />
                  <p className="font-medium text-gray-900 dark:text-white">
                    {attendanceStatus?.hasCheckedIn ? 'Check Out' : 'Check In'}
                  </p>
                </button>

                <button
                  onClick={() => setShowLeaveModal(true)}
                  className="p-4 rounded-xl border-2 border-blue-300 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 transition-colors"
                >
                  <Calendar className="text-blue-600 mb-2" size={24} />
                  <p className="font-medium text-gray-900 dark:text-white">Apply for Leave</p>
                </button>

                <button
                  onClick={() => setActiveTab('attendance')}
                  className="p-4 rounded-xl border-2 border-purple-300 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 transition-colors"
                >
                  <FileText className="text-purple-600 mb-2" size={24} />
                  <p className="font-medium text-gray-900 dark:text-white">View Attendance</p>
                </button>
              </div>
            </div>
          </div>
        );

      case 'attendance':
        return (
          <div className="space-y-6">
            {/* Today's Status */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Today's Attendance</h3>
                <div className="flex gap-3">
                  <button
                    onClick={handleCheckIn}
                    disabled={attendanceStatus?.hasCheckedIn}
                    className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                  >
                    Check In
                  </button>
                  <button
                    onClick={handleCheckOut}
                    disabled={!attendanceStatus?.hasCheckedIn || attendanceStatus?.hasCheckedOut}
                    className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                  >
                    Check Out
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <p className="text-sm text-gray-500">Status</p>
                  <p className={`text-lg font-bold ${attendanceStatus?.hasCheckedIn ? 'text-green-500' : 'text-gray-400'}`}>
                    {attendanceStatus?.hasCheckedIn ? 'Present' : 'Absent'}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <p className="text-sm text-gray-500">Check In</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {attendanceStatus?.checkIn ? new Date(attendanceStatus.checkIn).toLocaleTimeString() : '--:--'}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <p className="text-sm text-gray-500">Check Out</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {attendanceStatus?.checkOut ? new Date(attendanceStatus.checkOut).toLocaleTimeString() : '--:--'}
                  </p>
                </div>
              </div>
            </div>

            {/* Attendance History */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">This Month's Attendance</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-medium">Date</th>
                      <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-medium">Check In</th>
                      <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-medium">Check Out</th>
                      <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceRecords?.map((record) => (
                      <tr key={record.id} className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 px-4 text-gray-900 dark:text-white">
                          {new Date(record.date).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                          {record.checkIn ? new Date(record.checkIn).toLocaleTimeString() : '--'}
                        </td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                          {record.checkOut ? new Date(record.checkOut).toLocaleTimeString() : '--'}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            record.status === 'PRESENT' ? 'bg-green-100 text-green-700' :
                            record.status === 'ABSENT' ? 'bg-red-100 text-red-700' :
                            record.status === 'LEAVE' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {record.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'leaves':
        return (
          <div className="space-y-6">
            {/* Leave Balance */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-gray-500 text-sm font-medium">Total Quota</h3>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{leaveBalance?.totalQuota || 0}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-gray-500 text-sm font-medium">Used</h3>
                <p className="text-2xl font-bold text-red-500 mt-2">{leaveBalance?.used || 0}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-gray-500 text-sm font-medium">Remaining</h3>
                <p className="text-2xl font-bold text-green-500 mt-2">{leaveBalance?.remaining || 0}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center">
                <button
                  onClick={() => setShowLeaveModal(true)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Plus size={20} />
                  Apply Leave
                </button>
              </div>
            </div>

            {/* Leave History */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Leave History</h3>
              <div className="space-y-3">
                {leaves?.map((leave) => (
                  <div key={leave.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            leave.status === 'APPROVED' ? 'bg-green-100 text-green-700' :
                            leave.status === 'REJECTED' ? 'bg-red-100 text-red-700' :
                            leave.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {leave.status}
                          </span>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {leave.leaveType.replace('_', ' ')}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()} ({leave.days} days)
                        </p>
                        <p className="text-sm text-gray-500 mt-1">{leave.reason}</p>
                        {leave.approvalNote && (
                          <p className="text-sm text-blue-600 mt-2">Note: {leave.approvalNote}</p>
                        )}
                      </div>
                      {leave.status === 'PENDING' && (
                        <button
                          onClick={() => handleCancelLeave(leave.id)}
                          className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors text-sm"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                {(!leaves || leaves.length === 0) && (
                  <p className="text-center text-gray-500 py-8">No leave requests found</p>
                )}
              </div>
            </div>
          </div>

        );

      case 'tasks':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">My Tasks</h3>
              <div className="space-y-4">
                {tasks?.map((task) => (
                  <div key={task.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            task.priority === 'HIGH' ? 'bg-red-100 text-red-700' :
                            task.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {task.priority}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            task.status === 'COMPLETED' ? 'bg-green-100 text-green-700' :
                            task.status === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {task.status.replace('_', ' ')}
                          </span>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{task.title}</h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{task.description}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                          {task.createdBy && <span>Assigned by: {task.createdBy.name}</span>}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {task.status !== 'COMPLETED' && (
                          <select
                            value={task.status}
                            onChange={(e) => handleTaskStatusUpdate(task.id, e.target.value)}
                            className="px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-600 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                          >
                            <option value="PENDING">Pending</option>
                            <option value="IN_PROGRESS">In Progress</option>
                            <option value="COMPLETED">Completed</option>
                          </select>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {(!tasks || tasks.length === 0) && (
                  <p className="text-center text-gray-500 py-8">No tasks assigned to you</p>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <DashboardLayout role="employee" activeTab={activeTab} onTabChange={setActiveTab}>
      <div className="space-y-6">
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader className="animate-spin text-blue-600" size={32} />
          </div>
        ) : (
          renderContent()
        )}
      </div>

      {/* Leave Application Modal */}
      {showLeaveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Apply for Leave</h3>
            </div>
            <form onSubmit={handleApplyLeave} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Leave Type
                </label>
                <select
                  value={leaveForm.leaveType}
                  onChange={(e) => setLeaveForm({ ...leaveForm, leaveType: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                >
                  <option value="SICK">Sick Leave</option>
                  <option value="CASUAL">Casual Leave</option>
                  <option value="EARNED">Earned Leave</option>
                  <option value="UNPAID">Unpaid Leave</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={leaveForm.startDate}
                    onChange={(e) => {
                      setLeaveForm({ ...leaveForm, startDate: e.target.value });
                      setTimeout(calculateDays, 0);
                    }}
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={leaveForm.endDate}
                    onChange={(e) => {
                      setLeaveForm({ ...leaveForm, endDate: e.target.value });
                      setTimeout(calculateDays, 0);
                    }}
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Total Days: {leaveForm.days}
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Reason
                </label>
                <textarea
                  value={leaveForm.reason}
                  onChange={(e) => setLeaveForm({ ...leaveForm, reason: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  rows="4"
                  required
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowLeaveModal(false)}
                  className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default EmployeeDashboard;
