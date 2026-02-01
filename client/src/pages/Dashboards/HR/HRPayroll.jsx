import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import { 
  IndianRupee, FileText, CheckCircle, Download, 
  TrendingUp, Users, Calendar, AlertCircle, Mail, Send, MoreVertical 
} from 'lucide-react';
import { payrollAPI } from '../../../services/api';
import { useAuth } from '../../../context/AuthContext';

const HRPayroll = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(null);
  const [slips, setSlips] = useState([]);
  const [emailing, setEmailing] = useState(null);

  useEffect(() => {
    fetchSummary();
    fetchSlips();
  }, []);

  const fetchSummary = async () => {
    try {
      if (user.role === 'hr' || user.role === 'owner') {
        const response = await payrollAPI.getSummary();
        setSummary(response.data);
      }
    } catch (error) {
      console.error('Error fetching payroll summary:', error);
    }
  };

  const fetchSlips = async () => {
    try {
      setLoading(true);
      const response = await payrollAPI.getSalarySlips();
      setSlips(response.data || []);
    } catch (error) {
      console.error('Error fetching salary slips:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRunPayroll = async () => {
    try {
      setLoading(true);
      await payrollAPI.runPayroll({ month: 'December', year: 2025 });
      alert('Payroll run successfully! Sent for approval.');
      fetchSummary();
    } catch (error) {
      console.error('Error running payroll:', error);
      alert('Failed to run payroll');
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id) => {
    try {
      setLoading(true);
      await payrollAPI.approvePayroll(id);
      alert('Payroll approved successfully!');
      fetchSummary();
    } catch (error) {
      console.error('Error approving payroll:', error);
      alert('Failed to approve payroll');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSlip = async (id) => {
    try {
      setEmailing(id);
      await payrollAPI.emailSlip(id);
      alert('Salary slip emailed successfully!');
    } catch (error) {
      console.error('Error emailing slip:', error);
      alert('Failed to email slip');
    } finally {
      setEmailing(null);
    }
  };

  const handleEmailAll = async () => {
    if (!window.confirm('Are you sure you want to email salary slips to ALL employees?')) return;
    try {
      setLoading(true);
      await payrollAPI.emailAllSlips({ month: 'December', year: 2025 });
      alert('All salary slips queued for emailing!');
    } catch (error) {
      console.error('Error emailing all slips:', error);
      alert('Failed to email all slips');
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout role={user.role}>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Payroll Management</h2>
            <p className="text-gray-500 mt-2 text-lg">Manage salaries, payslips, and approvals with ease.</p>
          </div>
          {activeTab === 'slips' && user.role === 'hr' && (
            <button 
              onClick={handleEmailAll}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all shadow-lg hover:shadow-blue-500/30 disabled:opacity-50"
            >
              <Send size={20} />
              Email All Slips
            </button>
          )}
        </div>

        {/* Stats Cards (HR/Owner only) */}
        {(user.role === 'hr' || user.role === 'owner') && summary && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl text-green-600">
                  <IndianRupee size={24} />
                </div>
                <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded-full dark:bg-green-900/30 dark:text-green-400">+12%</span>
              </div>
              <p className="text-gray-500 text-sm font-medium">Total Expense</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">₹{summary.totalExpense.toLocaleString()}</h3>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600">
                  <Calendar size={24} />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${summary.lastRun?.status === 'APPROVED' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {summary.lastRun?.status}
                </span>
              </div>
              <p className="text-gray-500 text-sm font-medium">Last Run</p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{summary.lastRun?.month} {summary.lastRun?.year}</h3>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-purple-600">
                  <Users size={24} />
                </div>
              </div>
              <p className="text-gray-500 text-sm font-medium">Employees Paid</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">{summary.lastRun?.employeesCount || 0}</h3>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl text-orange-600">
                  <AlertCircle size={24} />
                </div>
                {summary.pendingApprovals > 0 && (
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                  </span>
                )}
              </div>
              <p className="text-gray-500 text-sm font-medium">Pending Actions</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">{summary.pendingApprovals}</h3>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-4 px-2 font-medium text-lg transition-all relative ${
              activeTab === 'overview' 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
            }`}
          >
            Overview
            {activeTab === 'overview' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-t-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('slips')}
            className={`pb-4 px-2 font-medium text-lg transition-all relative ${
              activeTab === 'slips' 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
            }`}
          >
            Salary Slips
            {activeTab === 'slips' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-t-full" />
            )}
          </button>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Quick Actions</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {user.role === 'hr' && (
                <div 
                  onClick={handleRunPayroll}
                  className="group relative overflow-hidden p-8 border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all cursor-pointer bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/50"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <IndianRupee size={120} />
                  </div>
                  <div className="relative z-10 flex items-center gap-6">
                    <div className="p-4 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform">
                      <IndianRupee size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Run Payroll</h4>
                      <p className="text-gray-500">Process salaries for the current month</p>
                    </div>
                  </div>
                </div>
              )}

              {user.role === 'owner' && summary?.pendingApprovals > 0 && (
                <div 
                  onClick={() => handleApprove(summary.lastRun.id)}
                  className="group relative overflow-hidden p-8 border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 transition-all cursor-pointer bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/50"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <CheckCircle size={120} />
                  </div>
                  <div className="relative z-10 flex items-center gap-6">
                    <div className="p-4 bg-green-600 text-white rounded-2xl shadow-lg shadow-green-600/30 group-hover:scale-110 transition-transform">
                      <CheckCircle size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Approve Payroll</h4>
                      <p className="text-gray-500">Review and finalize pending payrolls</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'slips' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-100 dark:border-gray-700">
                  <tr>
                    <th className="px-8 py-5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Employee</th>
                    <th className="px-8 py-5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Month/Year</th>
                    <th className="px-8 py-5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Net Salary</th>
                    <th className="px-8 py-5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-8 py-5 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {slips.map((slip) => (
                    <tr key={slip.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md">
                            {slip.employeeName.charAt(0)}
                          </div>
                          <div>
                            <span className="block font-semibold text-gray-900 dark:text-white">{slip.employeeName}</span>
                            <span className="text-xs text-gray-500">ID: {slip.employeeId}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-gray-600 dark:text-gray-300 font-medium">
                        {slip.month} {slip.year}
                      </td>
                      <td className="px-8 py-5 font-bold text-gray-900 dark:text-white">
                        ₹{slip.netSalary.toLocaleString()}
                      </td>
                      <td className="px-8 py-5">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                          {slip.status}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                            title="Download PDF"
                          >
                            <Download size={18} />
                          </button>
                          {user.role === 'hr' && (
                            <button 
                              onClick={() => handleEmailSlip(slip.id)}
                              disabled={emailing === slip.id}
                              className={`p-2 rounded-lg transition-colors ${
                                emailing === slip.id 
                                  ? 'text-blue-400 bg-blue-50' 
                                  : 'text-gray-500 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20'
                              }`}
                              title="Email Slip"
                            >
                              <Mail size={18} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default HRPayroll;
