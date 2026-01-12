import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { 
  Calendar, Clock, Users, Video, TrendingUp, CheckCircle, 
  XCircle, AlertCircle, BarChart3, Target, UserCheck,
  ClipboardList, Plus, Filter, Download, Search
} from 'lucide-react';
import { employeesAPI, leavesAPI, attendanceAPI, meetingsAPI, tasksAPI } from '../../services/api';

const TaskCard = ({ task, onDelete, onUpdateStatus }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group">
    <div className="flex justify-between items-start mb-2">
      <h5 className="font-medium text-gray-900 dark:text-white line-clamp-2">{task.title}</h5>
      <div className="relative">
        <button 
          onClick={() => onDelete(task.id)}
          className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <XCircle size={16} />
        </button>
      </div>
    </div>
    
    <p className="text-xs text-gray-500 mb-3 line-clamp-2">{task.description}</p>
    
    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xs font-bold text-blue-600">
          {task.assignedTo?.name?.charAt(0) || '?'}
        </div>
        <span className="text-xs text-gray-500 truncate max-w-[80px]">
          {task.assignedTo?.name || 'Unassigned'}
        </span>
      </div>
      
      <select
        value={task.status}
        onChange={(e) => onUpdateStatus(task.id, e.target.value)}
        className={`text-xs font-medium px-2 py-1 rounded-lg border-0 cursor-pointer focus:ring-2 focus:ring-blue-500 ${
          task.status === 'TODO' ? 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300' :
          task.status === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
          'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
        }`}
      >
        <option value="TODO">To Do</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="COMPLETED">Completed</option>
      </select>
    </div>
    
    {task.dueDate && (
      <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
        <Clock size={12} />
        <span>Due {new Date(task.dueDate).toLocaleDateString()}</span>
      </div>
    )}
  </div>
);

const ManagerDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [teamTab, setTeamTab] = useState('members');
  
  // Derive active section from URL path
  // e.g. /dashboard/manager/team -> team
  // e.g. /dashboard/manager -> overview
  const getActiveSection = () => {
    const pathParts = location.pathname.split('/');
    // pathParts[0] = '', [1] = 'dashboard', [2] = 'manager', [3] = 'team'
    return pathParts[3] || 'overview';
  };

  const activeSection = getActiveSection();
  
  // State
  const [teamStats, setTeamStats] = useState({
    totalMembers: 0,
    activeToday: 0,
    onLeave: 0,
    pendingTasks: 0
  });
  const [teamMembers, setTeamMembers] = useState([]);
  const [pendingLeaves, setPendingLeaves] = useState([]);
  const [teamTasks, setTeamTasks] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  // Meetings state
  const [meetings, setMeetings] = useState([]);
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [newMeeting, setNewMeeting] = useState({
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    location: '',
    meetingLink: '',
    attendees: []
  });

  // Task Modal State
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    assignedTo: '',
    dueDate: '',
    priority: 'MEDIUM'
  });

  useEffect(() => {
    if (activeSection === 'overview') {
      fetchTeamStats();
      fetchPendingLeaves();
    } else if (activeSection === 'team') {
      fetchTeamMembers();
      loadTeamTasks();
    } else if (activeSection === 'meetings') {
      fetchMeetings();
      fetchTeamMembers(); // Need team members for attendee selection
    }
  }, [activeSection]);

  const fetchMeetings = async () => {
    try {
      setLoading(true);
      const response = await meetingsAPI.getAll();
      setMeetings(response || []);
    } catch (error) {
      console.error('Error fetching meetings:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTeamStats = async () => {
    try {
      setLoading(true);
      const [employeesRes, leavesRes] = await Promise.all([
        employeesAPI.getAll({ limit: 1000 }),
        leavesAPI.getAll({ status: 'PENDING' })
      ]);

      const employees = employeesRes.data || [];
      const leaves = leavesRes || [];

      setTeamStats({
        totalMembers: employees.length,
        activeToday: employees.filter(e => e.user?.isActive).length,
        onLeave: leaves.filter(l => l.status === 'APPROVED').length,
        pendingTasks: 0
      });
    } catch (error) {
      console.error('Error fetching team stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      // Fetch all employees (limit 1000) to ensure dropdowns have all options
      const response = await employeesAPI.getAll({ limit: 1000 });
      setTeamMembers(response.data || []);
    } catch (error) {
      console.error('Error fetching team members:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPendingLeaves = async () => {
    try {
      setLoading(true);
      const response = await leavesAPI.getAll({ status: 'PENDING' });
      setPendingLeaves(response || []);
    } catch (error) {
      console.error('Error fetching leaves:', error);
    } finally {
      setLoading(false);
    }
  };



  const handleApproveLeave = async (leaveId) => {
    try {
      await leavesAPI.approve(leaveId);
      alert('Leave approved successfully!');
      fetchPendingLeaves();
      fetchTeamStats();
    } catch (error) {
      alert('Failed to approve leave: ' + (error.response?.data?.message || 'Unknown error'));
    }
  };

  const handleRejectLeave = async (leaveId) => {
    try {
      await leavesAPI.reject(leaveId);
      alert('Leave rejected successfully!');
      fetchPendingLeaves();
      fetchTeamStats();
    } catch (error) {
      alert('Failed to reject leave: ' + (error.response?.data?.message || 'Unknown error'));
    }
  };

  const handleScheduleMeeting = async (e) => {
    e.preventDefault();
    try {
      await meetingsAPI.create(newMeeting);
      setShowMeetingModal(false);
      setNewMeeting({
        title: '',
        description: '',
        startTime: '',
        endTime: '',
        location: '',
        meetingLink: '',
        attendees: []
      });
      fetchMeetings();
      alert('Meeting scheduled successfully!');
    } catch (error) {
      alert('Failed to schedule meeting: ' + (error.response?.data?.message || 'Unknown error'));
    }
  };

  const handleDeleteMeeting = async (id) => {
    if (!confirm('Are you sure you want to cancel this meeting?')) return;
    try {
      await meetingsAPI.delete(id);
      fetchMeetings();
      alert('Meeting cancelled successfully!');
    } catch (error) {
      alert('Failed to cancel meeting');
    }
  };

  // Import tasksAPI is already done in line 9 (checked previously)
  
  const loadTeamTasks = async () => {
    try {
      setLoading(true);
      const response = await tasksAPI.getAll();
      // Ensure response is an array, handle paginated response { data: [...] } or direct array
      const tasks = Array.isArray(response) ? response : (response?.data || []);
      setTeamTasks(Array.isArray(tasks) ? tasks : []);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setTeamTasks([]); // Fallback to empty array on error
    } finally {
      setLoading(false);
    }
  };

  const handleAssignTask = async (e) => {
    e.preventDefault();
    try {
      await tasksAPI.create({
        ...newTask,
        assignedToId: newTask.assignedTo // API expects assignedToId
      });
      
      setShowTaskModal(false);
      setNewTask({
        title: '',
        description: '',
        assignedTo: '',
        dueDate: '',
        priority: 'MEDIUM'
      });
      loadTeamTasks();
      alert('Task assigned successfully!');
    } catch (error) {
      alert('Failed to assign task: ' + (error.response?.data?.message || 'Unknown error'));
    }
  };

  const handleUpdateTaskStatus = async (taskId, newStatus) => {
    try {
      await tasksAPI.update(taskId, { status: newStatus });
      loadTeamTasks(); // Refresh to update UI
    } catch (error) {
      alert('Failed to update task status');
    }
  };

  const handleDeleteTask = async (taskId) => {
    if(!confirm('Are you sure you want to delete this task?')) return;
    try {
      await tasksAPI.delete(taskId);
      loadTeamTasks();
      alert('Task deleted successfully');
    } catch (error) {
      alert('Failed to delete task');
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Team Members</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{teamStats.totalMembers}</p>
            </div>
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600">
              <Users size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Today</p>
              <p className="text-3xl font-bold text-green-500 mt-2">{teamStats.activeToday}</p>
            </div>
            <div className="p-3 rounded-xl bg-green-50 dark:bg-green-900/30 text-green-600">
              <UserCheck size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">On Leave</p>
              <p className="text-3xl font-bold text-orange-500 mt-2">{teamStats.onLeave}</p>
            </div>
            <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-900/30 text-orange-600">
              <Calendar size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Pending Tasks</p>
              <p className="text-3xl font-bold text-purple-500 mt-2">{teamStats.pendingTasks}</p>
            </div>
            <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600">
              <ClipboardList size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Pending Leave Requests</h3>
            <button 
              onClick={() => {
                setTeamTab('leaves');
                navigate('/dashboard/manager/team');
              }}
              className="text-sm text-blue-600 hover:underline"
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            {pendingLeaves.length === 0 ? (
              <p className="text-center text-gray-500 py-8">No pending requests</p>
            ) : (
              pendingLeaves.slice(0, 3).map((leave) => (
                <div key={leave.id} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{leave.user?.name || 'Employee'}</p>
                      <p className="text-sm text-gray-500">{leave.leaveType}</p>
                    </div>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                      Pending
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()} ({leave.days} days)
                  </p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleApproveLeave(leave.id)}
                      className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      Approve
                    </button>
                    <button 
                      onClick={() => handleRejectLeave(leave.id)}
                      className="flex-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Team Performance</h3>
            <button className="text-sm text-blue-600 hover:underline">View Report</button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600">
                  <Target size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Tasks Completed</p>
                  <p className="text-sm text-gray-500">This Month</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">45</p>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Productivity</p>
                  <p className="text-sm text-gray-500">vs Last Month</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-green-500">+12%</p>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Attendance Rate</p>
                  <p className="text-sm text-gray-500">This Month</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">94%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTeamMembers = () => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Team Directory</h3>
          <div className="flex gap-3">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search team..."
                className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Download size={18} />
              Export
            </button>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600 dark:text-gray-400">
          <thead className="bg-gray-50 dark:bg-gray-700/50 text-xs uppercase font-medium">
            <tr>
              <th className="px-6 py-4">Employee</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">Designation</th>
              <th className="px-6 py-4">Contact</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {teamMembers.length === 0 ? (
              <tr><td colSpan="5" className="px-6 py-8 text-center text-gray-500">No team members found</td></tr>
            ) : (
              teamMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {member.user?.firstName} {member.user?.lastName}
                    </div>
                    <div className="text-xs text-gray-500">{member.user?.email}</div>
                  </td>
                  <td className="px-6 py-4">{member.department || '-'}</td>
                  <td className="px-6 py-4">{member.designation || '-'}</td>
                  <td className="px-6 py-4">{member.phone || '-'}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      member.user?.isActive 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {member.user?.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderLeaveApprovals = () => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Leave Approvals</h3>
      </div>
      <div className="p-6 space-y-4">
        {pendingLeaves.length === 0 ? (
          <p className="text-center text-gray-500 py-12">No pending leave requests</p>
        ) : (
          pendingLeaves.map((leave) => (
            <div key={leave.id} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">{leave.user?.name || 'Employee'}</h4>
                  <p className="text-sm text-gray-500">{leave.leaveType} Leave</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                  {leave.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Duration</p>
                  <p className="font-medium text-gray-900 dark:text-white">{leave.days} days</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Dates</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-1">Reason</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{leave.reason}</p>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => handleApproveLeave(leave.id)}
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <CheckCircle size={18} />
                  Approve
                </button>
                <button 
                  onClick={() => handleRejectLeave(leave.id)}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <XCircle size={18} />
                  Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );

  const renderTasks = () => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden h-[calc(100vh-200px)] flex flex-col">
      <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex-shrink-0">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Team Tasks Board</h3>
          <button 
            onClick={() => setShowTaskModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus size={18} />
            Assign Task
          </button>
        </div>
      </div>
      
      <div className="p-6 flex-1 overflow-x-auto">
        <div className="flex gap-6 h-full min-w-[1000px]">
          {/* To Do Column */}
          <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                To Do
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-full text-gray-600 dark:text-gray-400">
                  {teamTasks.filter(t => t.status === 'TODO').length}
                </span>
              </h4>
            </div>
            <div className="space-y-3 overflow-y-auto flex-1 pr-2">
              {teamTasks.filter(t => t.status === 'TODO').map((task) => (
                <TaskCard 
                  key={task.id} 
                  task={task} 
                  onDelete={handleDeleteTask}
                  onUpdateStatus={handleUpdateTaskStatus}
                />
              ))}
              {teamTasks.filter(t => t.status === 'TODO').length === 0 && (
                <div className="text-center py-8 text-gray-400 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl">
                  No tasks
                </div>
              )}
            </div>
          </div>

          {/* In Progress Column */}
          <div className="flex-1 flex flex-col bg-blue-50/50 dark:bg-blue-900/10 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                In Progress
                <span className="text-xs bg-blue-100 dark:bg-blue-900/40 px-2 py-0.5 rounded-full text-blue-600 dark:text-blue-400">
                  {teamTasks.filter(t => t.status === 'IN_PROGRESS').length}
                </span>
              </h4>
            </div>
            <div className="space-y-3 overflow-y-auto flex-1 pr-2">
              {teamTasks.filter(t => t.status === 'IN_PROGRESS').map((task) => (
                <TaskCard 
                  key={task.id} 
                  task={task} 
                  onDelete={handleDeleteTask}
                  onUpdateStatus={handleUpdateTaskStatus}
                />
              ))}
              {teamTasks.filter(t => t.status === 'IN_PROGRESS').length === 0 && (
                <div className="text-center py-8 text-gray-400 border-2 border-dashed border-blue-100 dark:border-blue-900/30 rounded-xl">
                  No tasks
                </div>
              )}
            </div>
          </div>

          {/* Completed Column */}
          <div className="flex-1 flex flex-col bg-green-50/50 dark:bg-green-900/10 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                Completed
                <span className="text-xs bg-green-100 dark:bg-green-900/40 px-2 py-0.5 rounded-full text-green-600 dark:text-green-400">
                  {teamTasks.filter(t => t.status === 'COMPLETED').length}
                </span>
              </h4>
            </div>
            <div className="space-y-3 overflow-y-auto flex-1 pr-2">
              {teamTasks.filter(t => t.status === 'COMPLETED').map((task) => (
                <TaskCard 
                  key={task.id} 
                  task={task} 
                  onDelete={handleDeleteTask}
                  onUpdateStatus={handleUpdateTaskStatus}
                />
              ))}
              {teamTasks.filter(t => t.status === 'COMPLETED').length === 0 && (
                <div className="text-center py-8 text-gray-400 border-2 border-dashed border-green-100 dark:border-green-900/30 rounded-xl">
                  No tasks
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );



  const renderMeetings = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Team Meetings</h2>
        <button 
          onClick={() => setShowMeetingModal(true)}
          className="px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Plus size={18} />
          Schedule Meeting
        </button>
      </div>

      {/* Upcoming Meetings */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Upcoming Meetings</h3>
        <div className="space-y-4">
          {meetings.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No upcoming meetings scheduled</p>
          ) : (
            meetings.map((meeting) => (
              <div key={meeting.id} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 relative group">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                  <Video size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-white">{meeting.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{meeting.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> 
                      {new Date(meeting.startTime).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> 
                      {new Date(meeting.startTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - 
                      {new Date(meeting.endTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </span>
                    {meeting.attendees && (
                      <span className="flex items-center gap-1">
                        <Users size={14} /> 
                        {JSON.parse(meeting.attendees || '[]').length} attendees
                      </span>
                    )}
                  </div>
                  {meeting.location && (
                    <p className="text-xs text-gray-500 mt-1">📍 {meeting.location}</p>
                  )}
                  {meeting.organizer && (
                    <p className="text-xs text-gray-400 mt-1">Organized by: {meeting.organizer.name}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  {meeting.meetingLink && (
                    <a 
                      href={meeting.meetingLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:underline px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                    >
                      Join
                    </a>
                  )}
                  <button 
                    onClick={() => handleDeleteMeeting(meeting.id)}
                    className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Cancel Meeting"
                  >
                    <XCircle size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Meeting Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-gray-500 text-sm font-medium">Total Meetings</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{meetings.length}</p>
          <p className="text-xs text-gray-500 mt-1">Scheduled</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-gray-500 text-sm font-medium">Avg Duration</h3>
          <p className="text-3xl font-bold text-blue-500 mt-2">-- min</p>
          <p className="text-xs text-gray-500 mt-1">Per meeting</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-gray-500 text-sm font-medium">Attendance Rate</h3>
          <p className="text-3xl font-bold text-green-500 mt-2">--%</p>
          <p className="text-xs text-gray-500 mt-1">Average</p>
        </div>
      </div>

      {/* Schedule Meeting Modal */}
      {showMeetingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Schedule Meeting</h3>
              <button onClick={() => setShowMeetingModal(false)} className="text-gray-500 hover:text-gray-700">
                <XCircle size={24} />
              </button>
            </div>
            <form onSubmit={handleScheduleMeeting} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={newMeeting.title}
                  onChange={(e) => setNewMeeting({ ...newMeeting, title: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="e.g. Weekly Sync"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Start Time
                  </label>
                  <input
                    type="datetime-local"
                    value={newMeeting.startTime}
                    onChange={(e) => setNewMeeting({ ...newMeeting, startTime: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    End Time
                  </label>
                  <input
                    type="datetime-local"
                    value={newMeeting.endTime}
                    onChange={(e) => setNewMeeting({ ...newMeeting, endTime: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Location / Link
                </label>
                <input
                  type="text"
                  value={newMeeting.meetingLink}
                  onChange={(e) => setNewMeeting({ ...newMeeting, meetingLink: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="e.g. https://meet.google.com/..."
                />
              </div>
              
              <div>
                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Physical Location (Optional)
                </label>
                <input
                  type="text"
                  value={newMeeting.location}
                  onChange={(e) => setNewMeeting({ ...newMeeting, location: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="e.g. Conference Room A"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  value={newMeeting.description}
                  onChange={(e) => setNewMeeting({ ...newMeeting, description: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  rows="3"
                  placeholder="Meeting agenda..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Attendees
                </label>
                <select
                  multiple
                  value={newMeeting.attendees}
                  onChange={(e) => {
                    const selected = Array.from(e.target.selectedOptions, option => option.value);
                    setNewMeeting({ ...newMeeting, attendees: selected });
                  }}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white h-32"
                >
                  {teamMembers.map(member => (
                    <option key={member.id} value={member.user?.id}>
                      {member.user?.firstName} {member.user?.lastName}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowMeetingModal(false)}
                  className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  // Team section with sub-tabs
  const renderTeam = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Team Management</h2>

        {/* Team Sub-tabs */}
        <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
          {[
            { id: 'members', label: 'Team Members', icon: Users },
            { id: 'leaves', label: 'Leave Approvals', icon: Calendar },
            { id: 'tasks', label: 'Tasks', icon: ClipboardList }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setTeamTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors whitespace-nowrap ${
                teamTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Team Content */}
        {teamTab === 'members' && renderTeamMembers()}
        {teamTab === 'leaves' && renderLeaveApprovals()}
        {teamTab === 'tasks' && renderTasks()}
      </div>
    );
  };

  // Main render based on sidebar selection
  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return renderOverview();
      case 'team':
        return renderTeam();
      case 'meetings':
        return renderMeetings();
      default:
        return renderOverview();
    }
  };

  return (
    <DashboardLayout role="manager">
      <div className="space-y-6">
        {renderContent()}
      </div>

      {/* Assign Task Modal */}
      {showTaskModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Assign New Task</h3>
              <button onClick={() => setShowTaskModal(false)} className="text-gray-500 hover:text-gray-700">
                <XCircle size={24} />
              </button>
            </div>
            <form onSubmit={handleAssignTask} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Task Title
                </label>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="e.g. Update Documentation"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Assign To
                </label>
                <select
                  value={newTask.assignedTo}
                  onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                >
                  <option value="">Select Team Member</option>
                  {teamMembers.map(member => (
                    <option key={member.id} value={member.id}>
                      {member.user?.firstName} {member.user?.lastName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Due Date
                  </label>
                  <input
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Priority
                  </label>
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="LOW">Low</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HIGH">High</option>
                    <option value="URGENT">Urgent</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  rows="3"
                  placeholder="Task details..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowTaskModal(false)}
                  className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Assign Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default ManagerDashboard;
