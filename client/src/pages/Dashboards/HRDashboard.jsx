import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { 
  Users, FileText, Download, Upload, Search, Plus, Edit2, Trash2,
  Eye, EyeOff, XCircle, CheckCircle, AlertCircle, Filter, MoreVertical, Key, Copy
} from 'lucide-react';
import { employeesAPI, usersAPI, authAPI } from '../../services/api';

const HRDashboard = () => {
  // State Management
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  
  // Employee Form State
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [employeeForm, setEmployeeForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'EMPLOYEE',
    status: 'ACTIVE',
    designation: '',
    department: '',
    phone: '',
    joiningDate: new Date().toISOString().split('T')[0],
    salary: '',
    dateOfBirth: '',
    address: '',
    emergencyContact: '',
    location: ''
  });

  // Password Reset State
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [resetPasswordEmployee, setResetPasswordEmployee] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessPassword, setShowSuccessPassword] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  // Stats State
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    inactive: 0,
    newHires: 0
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  useEffect(() => {
    calculateStats();
  }, [employees]);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const response = await employeesAPI.getAll();
      // Handle both direct array and paginated response
      const data = Array.isArray(response) ? response : (response.data || []);
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
      alert('Failed to fetch employees');
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = () => {
    const total = employees.length;
    const active = employees.filter(emp => emp.user?.status === 'ACTIVE').length;
    const inactive = employees.filter(emp => emp.user?.status === 'INACTIVE').length;
    
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const newHires = employees.filter(emp => 
      emp.joiningDate && new Date(emp.joiningDate) >= thirtyDaysAgo
    ).length;

    setStats({ total, active, inactive, newHires });
  };

  const handleAddEmployee = () => {
    setEditingEmployee(null);
    setEmployeeForm({
      name: '', email: '', password: '', role: 'EMPLOYEE', status: 'ACTIVE',
      designation: '', department: '', phone: '',
      joiningDate: new Date().toISOString().split('T')[0],
      salary: '', dateOfBirth: '', address: '', emergencyContact: '', location: ''
    });
    setShowEmployeeModal(true);
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
    setEmployeeForm({
      name: employee.user?.name || '',
      email: employee.user?.email || '',
      password: '',
      role: employee.user?.role || 'EMPLOYEE',
      status: employee.user?.status || 'ACTIVE',
      designation: employee.designation || '',
      department: employee.department || '',
      phone: employee.phone || '',
      joiningDate: employee.joiningDate ? new Date(employee.joiningDate).toISOString().split('T')[0] : '',
      salary: employee.salary || '',
      dateOfBirth: employee.dateOfBirth ? new Date(employee.dateOfBirth).toISOString().split('T')[0] : '',
      address: employee.address || '',
      emergencyContact: employee.emergencyContact || '',
      location: employee.location || ''
    });
    setShowEmployeeModal(true);
  };

  const handleSaveEmployee = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (editingEmployee) {
        // Update existing employee - FIXED: using usersAPI.update
        await usersAPI.update(editingEmployee.userId, {
          name: employeeForm.name,
          email: employeeForm.email,
          role: employeeForm.role,
          status: employeeForm.status
        });

        await employeesAPI.update(editingEmployee.id, {
          designation: employeeForm.designation,
          department: employeeForm.department,
          phone: employeeForm.phone,
          joiningDate: employeeForm.joiningDate ? new Date(employeeForm.joiningDate).toISOString() : null,
          salary: employeeForm.salary ? parseFloat(employeeForm.salary) : null,
          dateOfBirth: employeeForm.dateOfBirth ? new Date(employeeForm.dateOfBirth).toISOString() : null,
          address: employeeForm.address,
          emergencyContact: employeeForm.emergencyContact,
          location: employeeForm.location
        });

        alert('Employee updated successfully!');
      } else {
        // Create new employee
        const password = employeeForm.password || `Temp@${Date.now()}`;
        
        const userData = {
          name: employeeForm.name,
          email: employeeForm.email,
          password: password,
          role: employeeForm.role,
          status: employeeForm.status
        };
        
        const userResponse = await usersAPI.create(userData);
        const userId = userResponse.id;

        // Auto-generate employee code
        const employeeCode = `EMP-${new Date().getFullYear()}${String(Date.now()).slice(-5)}`;

        const employeeData = {
          userId: userId,
          designation: employeeForm.designation,
          department: employeeForm.department,
          phone: employeeForm.phone,
          joiningDate: employeeForm.joiningDate ? new Date(employeeForm.joiningDate).toISOString() : null,
          salary: employeeForm.salary ? parseFloat(employeeForm.salary) : null,
          employeeCode: employeeCode,
          dateOfBirth: employeeForm.dateOfBirth ? new Date(employeeForm.dateOfBirth).toISOString() : null,
          address: employeeForm.address,
          emergencyContact: employeeForm.emergencyContact,
          location: employeeForm.location
        };

        await employeesAPI.create(employeeData);
        alert(`Employee created successfully!\\nEmployee Code: ${employeeCode}\\nTemporary Password: ${password}`);
      }

      setShowEmployeeModal(false);
      fetchEmployees();
    } catch (error) {
      console.error('Error saving employee:', error);
      const errorMsg = error.response?.data?.message || error.message || 'Unknown error';
      alert('Failed to save employee: ' + errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEmployee = async (employee) => {
    if (!confirm(`Are you sure you want to deactivate ${employee.user?.name}?`)) return;

    try {
      setLoading(true);
      // FIXED: using usersAPI.update
      await usersAPI.update(employee.userId, { status: 'INACTIVE' });
      alert('Employee deactivated successfully!');
      fetchEmployees();
    } catch (error) {
      console.error('Error deactivating employee:', error);
      alert('Failed to deactivate employee');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (employee) => {
    const newStatus = employee.user?.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
    
    try {
      setLoading(true);
      // FIXED: using usersAPI.update
      await usersAPI.update(employee.userId, { status: newStatus });
      alert(`Employee ${newStatus === 'ACTIVE' ? 'activated' : 'deactivated'} successfully!`);
      fetchEmployees();
    } catch (error) {
      console.error('Error toggling status:', error);
      alert('Failed to update status');
    } finally {
      setLoading(false);
    }
  };

  // Password Reset Functions
  const generateRandomPassword = () => {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '!@#$%^&*';
    const all = upper + lower + numbers + special;
    
    let password = '';
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += special[Math.floor(Math.random() * special.length)];
    
    for (let i = 4; i < 12; i++) {
      password += all[Math.floor(Math.random() * all.length)];
    }
    
    return password.split('').sort(() => Math.random() - 0.5).join('');
  };

  const handleOpenResetPassword = (employee) => {
    setResetPasswordEmployee(employee);
    setNewPassword('');
    setShowPassword(false);
    setShowSuccessPassword(false);
    setShowResetPasswordModal(true);
  };

  const handleGeneratePassword = () => {
    const generated = generateRandomPassword();
    setNewPassword(generated);
  };

  const handleResetPassword = async () => {
    if (!newPassword || newPassword.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    try {
      setLoading(true);
      
      // FIXED: using authAPI.adminResetUserPassword
      await authAPI.adminResetUserPassword(resetPasswordEmployee.userId, {
        temporaryPassword: newPassword,
        mustChangePassword: true
      });

      setGeneratedPassword(newPassword);
      setShowSuccessPassword(true);
      fetchEmployees();
    } catch (error) {
      console.error('Error resetting password:', error);
      alert('Failed to reset password: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Password copied to clipboard!');
    }).catch(() => {
      alert('Failed to copy password');
    });
  };

  const closeResetPasswordModal = () => {
    setShowResetPasswordModal(false);
    setResetPasswordEmployee(null);
    setNewPassword('');
    setShowPassword(false);
    setShowSuccessPassword(false);
    setGeneratedPassword('');
  };

  // Filtered Employees
  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         emp.user?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         emp.employeeCode?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = filterDepartment === 'all' || emp.department === filterDepartment;
    const matchesRole = filterRole === 'all' || emp.user?.role === filterRole;
    const matchesStatus = filterStatus === 'all' || emp.user?.status === filterStatus;
    
    return matchesSearch && matchesDepartment && matchesRole && matchesStatus;
  });

  // Get unique departments and roles for filters
  const departments = [...new Set(employees.map(e => e.department).filter(Boolean))];
  const roles = ['EMPLOYEE', 'MANAGER', 'HR', 'OWNER'];
  const statuses = ['ACTIVE', 'INACTIVE', 'SUSPENDED'];

  return (
    <DashboardLayout role="hr">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Employee Management</h2>
            <p className="text-gray-500 mt-1">Manage your workforce efficiently</p>
          </div>
          <button
            onClick={handleAddEmployee}
            className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium transition-colors"
          >
            <Plus size={20} />
            Add Employee
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-lg text-white">
            <h3 className="text-blue-100 text-sm font-medium">Total Employees</h3>
            <p className="text-4xl font-bold mt-2">{stats.total}</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl shadow-lg text-white">
            <h3 className="text-green-100 text-sm font-medium">Active</h3>
            <p className="text-4xl font-bold mt-2">{stats.active}</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-2xl shadow-lg text-white">
            <h3 className="text-orange-100 text-sm font-medium">Inactive</h3>
            <p className="text-4xl font-bold mt-2">{stats.inactive}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl shadow-lg text-white">
            <h3 className="text-purple-100 text-sm font-medium">New Hires (30 days)</h3>
            <p className="text-4xl font-bold mt-2">{stats.newHires}</p>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search employees..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
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
            
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Roles</option>
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Employee Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-12 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-gray-500 mt-4">Loading employees...</p>
              </div>
            ) : filteredEmployees.length === 0 ? (
              <div className="p-12 text-center">
                <Users size={48} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No employees found</p>
              </div>
            ) : (
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 dark:bg-gray-700/50 text-xs uppercase font-semibold text-gray-500">
                  <tr>
                    <th className="px-6 py-4">Employee</th>
                    <th className="px-6 py-4">Employee Code</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4">Department</th>
                    <th className="px-6 py-4">Salary</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {filteredEmployees.map((emp) => (
                    <tr key={emp.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{emp.user?.name}</p>
                          <p className="text-xs text-gray-500">{emp.user?.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-mono text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                          {emp.employeeCode || 'N/A'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                          {emp.user?.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{emp.department || 'N/A'}</td>
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        {emp.salary ? `₹${(emp.salary / 1000).toFixed(0)}K` : 'N/A'}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleToggleStatus(emp)}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            emp.user?.status === 'ACTIVE'
                              ? 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400'
                              : emp.user?.status === 'INACTIVE'
                              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400'
                              : 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400'
                          }`}
                        >
                          {emp.user?.status || 'ACTIVE'}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEditEmployee(emp)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() => handleOpenResetPassword(emp)}
                            className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                            title="Reset Password"
                          >
                            <Key size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteEmployee(emp)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Deactivate"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Employee Modal */}
      {showEmployeeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {editingEmployee ? 'Edit Employee' : 'Add New Employee'}
              </h3>
              <button
                onClick={() => setShowEmployeeModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <XCircle size={28} />
              </button>
            </div>

            <form onSubmit={handleSaveEmployee} className="p-6 space-y-6">
              {/* Account Details */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Users size={20} className="text-blue-600" />
                  Account Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                    <input type="text" value={employeeForm.name} onChange={(e) => setEmployeeForm({ ...employeeForm, name: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                    <input type="email" value={employeeForm.email} onChange={(e) => setEmployeeForm({ ...employeeForm, email: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  {!editingEmployee && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                      <input type="password" value={employeeForm.password} onChange={(e) => setEmployeeForm({ ...employeeForm, password: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" placeholder="Auto-generated if empty" />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Role *</label>
                    <select value={employeeForm.role} onChange={(e) => setEmployeeForm({ ...employeeForm, role: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500">
                      <option value="EMPLOYEE">Employee</option>
                      <option value="MANAGER">Manager</option>
                      <option value="HR">HR</option>
                      <option value="OWNER">Owner</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Status *</label>
                    <select value={employeeForm.status} onChange={(e) => setEmployeeForm({ ...employeeForm, status: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500">
                      <option value="ACTIVE">Active</option>
                      <option value="INACTIVE">Inactive</option>
                      <option value="SUSPENDED">Suspended</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Employment Details */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <FileText size={20} className="text-green-600" />
                  Employment Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Designation *</label>
                    <input type="text" value={employeeForm.designation} onChange={(e) => setEmployeeForm({ ...employeeForm, designation: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Department *</label>
                    <input type="text" value={employeeForm.department} onChange={(e) => setEmployeeForm({ ...employeeForm, department: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Joining Date *</label>
                    <input type="date" value={employeeForm.joiningDate} onChange={(e) => setEmployeeForm({ ...employeeForm, joiningDate: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Salary (₹)</label>
                    <input type="number" value={employeeForm.salary} onChange={(e) => setEmployeeForm({ ...employeeForm, salary: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" placeholder="50000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</label>
                    <input type="text" value={employeeForm.location} onChange={(e) => setEmployeeForm({ ...employeeForm, location: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" placeholder="Mumbai Office" />
                  </div>
                </div>
              </div>

              {/* Personal Details */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Users size={20} className="text-purple-600" />
                  Personal Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                    <input type="tel" value={employeeForm.phone} onChange={(e) => setEmployeeForm({ ...employeeForm, phone: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" placeholder="+91 9876543210" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date of Birth</label>
                    <input type="date" value={employeeForm.dateOfBirth} onChange={(e) => setEmployeeForm({ ...employeeForm, dateOfBirth: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Address</label>
                    <textarea value={employeeForm.address} onChange={(e) => setEmployeeForm({ ...employeeForm, address: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" rows="2" placeholder="Full address"></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Emergency Contact</label>
                    <input type="text" value={employeeForm.emergencyContact} onChange={(e) => setEmployeeForm({ ...employeeForm, emergencyContact: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" placeholder="Name: +91 9876543210" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button type="button" onClick={() => setShowEmployeeModal(false)} className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl hover:bg-gray-300 font-medium">Cancel</button>
                <button type="submit" disabled={loading} className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium disabled:opacity-50 flex items-center gap-2">
                  {loading ? <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>Saving...</> : <><CheckCircle size={18} />{editingEmployee ? 'Update' : 'Create'}</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Password Reset Modal */}
      {showResetPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2"><Key size={24} className="text-orange-600" />Reset Password</h3>
              <button onClick={closeResetPasswordModal} className="text-gray-500 hover:text-gray-700"><XCircle size={24} /></button>
            </div>
            {!showSuccessPassword ? (
              <div className="p-6 space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                  <p className="text-sm text-blue-800 dark:text-blue-300"><strong>Employee:</strong> {resetPasswordEmployee?.user?.name}</p>
                  <p className="text-sm text-blue-800 dark:text-blue-300"><strong>Employee ID:</strong> {resetPasswordEmployee?.employeeCode}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">New Password *</label>
                  <div className="relative">
                    <input type={showPassword ? 'text' : 'password'} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-blue-500 focus:outline-none" placeholder="Min 8 characters" minLength={8} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}</button>
                  </div>
                </div>
                <button onClick={handleGeneratePassword} className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-medium py-3 px-4 rounded-xl hover:bg-gray-200">🎲 Generate Random Password</button>
                <div className="flex gap-3">
                  <button onClick={closeResetPasswordModal} className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-medium py-3 rounded-xl">Cancel</button>
                  <button onClick={handleResetPassword} disabled={loading || !newPassword} className="flex-1 bg-orange-600 text-white font-bold py-3 rounded-xl hover:bg-orange-700 disabled:opacity-50 flex items-center justify-center gap-2">{loading ? <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>Resetting...</> : <><Key size={18} />Reset</>}</button>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4">
                  <p className="text-sm text-yellow-800 dark:text-yellow-300"><strong>⚠️ Note:</strong> Employee must change password on first login</p>
                </div>
              </div>
            ) : (
              <div className="p-6 space-y-6 text-center">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto"><CheckCircle size={40} className="text-green-600 dark:text-green-400" /></div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Password Reset Successful!</h4>
                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">New Password:</p>
                  <p className="text-lg font-mono font-bold text-gray-900 dark:text-white break-all">{generatedPassword}</p>
                </div>
                <button onClick={() => copyToClipboard(generatedPassword)} className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 flex items-center justify-center gap-2"><Copy size={18} />Copy Password</button>
                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4">
                  <p className="text-sm text-orange-800 dark:text-orange-300">✉️ Share with <strong>{resetPasswordEmployee?.user?.name}</strong> securely</p>
                </div>
                <button onClick={closeResetPasswordModal} className="w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-medium py-3 rounded-xl">Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default HRDashboard;
