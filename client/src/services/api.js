// API Configuration and Base Service
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://code-n-click-backendn-lleygvxs8-codenclick-technologys-projects.vercel.app/api';

class ApiService {
    constructor() {
        this.baseURL = API_BASE_URL;
    }

    getAuthHeader() {
        const token = localStorage.getItem('cnc_access_token');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...this.getAuthHeader(),
                ...options.headers,
            },
        };

        try {
            let response = await fetch(url, config);

            // Handle 401 Unauthorized - Attempt Token Refresh
            if (response.status === 401 && !options._retry) {
                try {
                    await this.handleTokenRefresh();
                    // Retry original request with new token
                    return this.request(endpoint, { ...options, _retry: true });
                } catch (refreshError) {
                    // Refresh failed - clear auth and redirect
                    this.clearAuth();
                    window.location.href = '/login';
                    throw new Error('Session expired. Please login again.');
                }
            }

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Request failed');
            }

            return data;
        } catch (error) {
            throw error;
        }
    }

    async handleTokenRefresh() {
        const refreshToken = localStorage.getItem('cnc_refresh_token');
        if (!refreshToken) throw new Error('No refresh token');

        const response = await fetch(`${this.baseURL}/auth/refresh`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refreshToken }),
        });

        if (!response.ok) throw new Error('Refresh failed');

        const data = await response.json();
        localStorage.setItem('cnc_access_token', data.accessToken);
        localStorage.setItem('cnc_refresh_token', data.refreshToken);

        // Update user if returned
        if (data.user) {
            localStorage.setItem('cnc_user', JSON.stringify(data.user));
        }
    }

    clearAuth() {
        localStorage.removeItem('cnc_access_token');
        localStorage.removeItem('cnc_refresh_token');
        localStorage.removeItem('cnc_user');
    }

    async get(endpoint) {
        return this.request(endpoint, { method: 'GET' });
    }

    async post(endpoint, body) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(body),
        });
    }

    async patch(endpoint, body) {
        return this.request(endpoint, {
            method: 'PATCH',
            body: JSON.stringify(body),
        });
    }

    async delete(endpoint) {
        return this.request(endpoint, { method: 'DELETE' });
    }

    async uploadFile(endpoint, formData) {
        const token = localStorage.getItem('cnc_access_token');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        const response = await fetch(`${this.baseURL}${endpoint}`, {
            method: 'POST',
            headers,
            body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Upload failed');
        }

        return data;
    }
}

// Authentication API
export const authAPI = {
    login: async (email, password) => {
        const api = new ApiService();
        return api.post('/auth/login', { email, password });
    },

    changePassword: async (currentPassword, newPassword) => {
        const api = new ApiService();
        return api.post('/auth/change-password', { currentPassword, newPassword });
    },

    forgotPassword: async (email) => {
        const api = new ApiService();
        return api.post('/auth/forgot-password', { email });
    },

    resetPassword: async (token, newPassword) => {
        const api = new ApiService();
        return api.post('/auth/reset-password', { token, newPassword });
    },

    refreshToken: async (refreshToken) => {
        const api = new ApiService();
        return api.post('/auth/refresh', { refreshToken });
    },

    logout: async () => {
        const api = new ApiService();
        return api.post('/auth/logout');
    },

    getCurrentUser: async () => {
        const api = new ApiService();
        return api.get('/auth/me');
    },

    adminResetUserPassword: async (userId, data) => {
        const api = new ApiService();
        return api.patch(`/auth/admin/reset-user-password/${userId}`, data);
    },
};

// Jobs API
export const jobsAPI = {
    getPublicJobs: async (params = {}) => {
        const api = new ApiService();
        const queryString = new URLSearchParams(params).toString();
        return api.get(`/jobs/public${queryString ? `?${queryString}` : ''}`);
    },
    getAll: async (params = {}) => {
        const api = new ApiService();
        const queryString = new URLSearchParams(params).toString();
        return api.get(`/jobs${queryString ? `?${queryString}` : ''}`);
    },
    getJobById: async (id) => {
        const api = new ApiService();
        return api.get(`/jobs/public/${id}`);
    },
    createJob: async (jobData) => {
        const api = new ApiService();
        return api.post('/jobs', jobData);
    },
    updateJob: async (id, jobData) => {
        const api = new ApiService();
        return api.patch(`/jobs/${id}`, jobData);
    },
    deleteJob: async (id) => {
        const api = new ApiService();
        return api.delete(`/jobs/${id}`);
    },
    toggleVisibility: async (id) => {
        const api = new ApiService();
        return api.patch(`/jobs/${id}/visibility`);
    },
    applyToJob: async (id, formData) => {
        const api = new ApiService();
        return api.uploadFile(`/applications/jobs/${id}/apply`, formData);
    },
};

// Leaves API
export const leavesAPI = {
    apply: async (leaveData) => {
        const api = new ApiService();
        return api.post('/leaves', leaveData);
    },
    getMyLeaves: async (params = {}) => {
        const api = new ApiService();
        const queryString = new URLSearchParams(params).toString();
        return api.get(`/leaves/my-leaves${queryString ? `?${queryString}` : ''}`);
    },
    getAll: async (params = {}) => {
        const api = new ApiService();
        const queryString = new URLSearchParams(params).toString();
        return api.get(`/leaves/all${queryString ? `?${queryString}` : ''}`);
    },
    getBalance: async (year) => {
        const api = new ApiService();
        return api.get(`/leaves/balance${year ? `?year=${year}` : ''}`);
    },
    approve: async (id, note) => {
        const api = new ApiService();
        return api.patch(`/leaves/${id}/approve`, { approvalNote: note });
    },
    reject: async (id, note) => {
        const api = new ApiService();
        return api.patch(`/leaves/${id}/reject`, { approvalNote: note });
    },
    cancel: async (id) => {
        const api = new ApiService();
        return api.patch(`/leaves/${id}/cancel`);
    },
};

// Attendance API
export const attendanceAPI = {
    checkIn: async (notes) => {
        const api = new ApiService();
        return api.post('/attendance/check-in', { notes });
    },
    checkOut: async (notes) => {
        const api = new ApiService();
        return api.post('/attendance/check-out', { notes });
    },
    getTodayStatus: async () => {
        const api = new ApiService();
        return api.get(`/attendance/today?t=${new Date().getTime()}`);
    },
    getMyRecords: async (params = {}) => {
        const api = new ApiService();
        const queryString = new URLSearchParams(params).toString();
        return api.get(`/attendance/my-records${queryString ? `?${queryString}` : ''}`);
    },
    getMonthlyReport: async (month, year) => {
        const api = new ApiService();
        return api.get(`/attendance/monthly-report?month=${month}&year=${year}`);
    },
    getAll: async (params = {}) => {
        const api = new ApiService();
        const queryString = new URLSearchParams(params).toString();
        return api.get(`/attendance/all${queryString ? `?${queryString}` : ''}`);
    },
    update: async (id, data) => {
        const api = new ApiService();
        return api.patch(`/attendance/${id}`, data);
    },
};

export const usersAPI = {
    getAll: async (params = {}) => {
        const api = new ApiService();
        const queryString = new URLSearchParams(params).toString();
        return api.get(`/users${queryString ? `?${queryString}` : ''}`);
    },
    create: async (userData) => {
        const api = new ApiService();
        return api.post('/users', userData);
    },
    update: async (id, userData) => {
        const api = new ApiService();
        return api.patch(`/users/${id}`, userData);
    },
    delete: async (id) => {
        const api = new ApiService();
        return api.delete(`/users/${id}`);
    }
};

export const employeesAPI = {
    getAll: async (params = {}) => {
        const api = new ApiService();
        const queryString = new URLSearchParams(params).toString();
        return api.get(`/employees${queryString ? `?${queryString}` : ''}`);
    },
    create: async (employeeData) => {
        const api = new ApiService();
        return api.post('/employees', employeeData);
    },
    update: async (id, employeeData) => {
        const api = new ApiService();
        return api.patch(`/employees/${id}`, employeeData);
    },
    delete: async (id) => {
        const api = new ApiService();
        return api.delete(`/employees/${id}`);
    }
};

// Notifications API
export const notificationsAPI = {
    getActiveNotifications: async () => {
        const api = new ApiService();
        return api.get('/notifications/active');
    },
};

// Applications API
export const applicationsAPI = {
    getAll: async (params = {}) => {
        const api = new ApiService();
        const queryString = new URLSearchParams(params).toString();
        return api.get(`/applications${queryString ? `?${queryString}` : ''}`);
    },
    getOne: async (id) => {
        const api = new ApiService();
        return api.get(`/applications/${id}`);
    },
    updateStatus: async (id, status) => {
        const api = new ApiService();
        return api.patch(`/applications/${id}/status`, { status });
    },
    updateNotes: async (id, notes) => {
        const api = new ApiService();
        return api.patch(`/applications/${id}/notes`, { notes });
    },
    delete: async (id) => {
        const api = new ApiService();
        return api.delete(`/applications/${id}`);
    }
};

// Celebrations API
export const celebrationsAPI = {
    getUpcoming: async () => {
        const api = new ApiService();
        return api.get('/celebrations/upcoming');
    },
    getAll: async (params = {}) => {
        const api = new ApiService();
        const queryString = new URLSearchParams(params).toString();
        return api.get(`/celebrations${queryString ? `?${queryString}` : ''}`);
    },
    create: async (data) => {
        const api = new ApiService();
        return api.post('/celebrations', data);
    },
    delete: async (id) => {
        const api = new ApiService();
        return api.delete(`/celebrations/${id}`);
    }
};

// Policies API
export const policiesAPI = {
    getAll: async (params = {}) => {
        const api = new ApiService();
        const queryString = new URLSearchParams(params).toString();
        return api.get(`/policies${queryString ? `?${queryString}` : ''}`);
    },
    upload: async (formData) => {
        const api = new ApiService();
        return api.uploadFile('/policies', formData);
    },
    delete: async (id) => {
        const api = new ApiService();
        return api.delete(`/policies/${id}`);
    }
};

// Payroll API
export const payrollAPI = {
    getSummary: async () => {
        const api = new ApiService();
        return api.get('/payroll/summary');
    },
    runPayroll: async (data) => {
        const api = new ApiService();
        return api.post('/payroll/run', data);
    },
    approvePayroll: async (id) => {
        const api = new ApiService();
        return api.patch(`/payroll/${id}/approve`);
    },
    getSalarySlips: async (params = {}) => {
        const api = new ApiService();
        const queryString = new URLSearchParams(params).toString();
        return api.get(`/payroll/slips${queryString ? `?${queryString}` : ''}`);
    },
    generateSlip: async (data) => {
        const api = new ApiService();
        return api.post('/payroll/slips/generate', data);
    },
    emailSlip: async (id) => {
        const api = new ApiService();
        return api.post(`/payroll/slips/${id}/email`);
    },
    emailAllSlips: async (data) => {
        const api = new ApiService();
        return api.post('/payroll/slips/email-all', data);
    }
};

export const contactAPI = {
    submit: async (data) => {
        const api = new ApiService();
        return api.post('/contact', data);
    },
    getAll: async () => {
        const api = new ApiService();
        return api.get('/contact');
    },
    markAsRead: async (id) => {
        const api = new ApiService();
        return api.patch(`/contact/${id}/read`);
    }
};

export const resourcesAPI = {
    getAll: async (params) => {
        const api = new ApiService();
        return api.get('/resources', { params });
    },
    getOne: async (id) => {
        const api = new ApiService();
        return api.get(`/resources/${id}`);
    },
    create: async (data) => {
        const api = new ApiService();
        return api.post('/resources', data);
    },
    update: async (id, data) => {
        const api = new ApiService();
        return api.patch(`/resources/${id}`, data);
    },
    delete: async (id) => {
        const api = new ApiService();
        return api.delete(`/resources/${id}`);
    },
};

export const tasksAPI = {
    getAll: async (params = {}) => {
        const api = new ApiService();
        const queryString = new URLSearchParams(params).toString();
        return api.get(`/tasks${queryString ? `?${queryString}` : ''}`);
    },
    getMyTasks: async (params = {}) => {
        const api = new ApiService();
        const queryString = new URLSearchParams(params).toString();
        return api.get(`/tasks/my-tasks${queryString ? `?${queryString}` : ''}`);
    },
    create: async (data) => {
        const api = new ApiService();
        return api.post('/tasks', data);
    },
    update: async (id, data) => {
        const api = new ApiService();
        return api.patch(`/tasks/${id}`, data);
    },
    updateMyTask: async (id, data) => {
        const api = new ApiService();
        return api.patch(`/tasks/my-tasks/${id}`, data);
    },
    delete: async (id) => {
        const api = new ApiService();
        return api.delete(`/tasks/${id}`);
    },
    addComment: async (id, comment) => {
        const api = new ApiService();
        return api.post(`/tasks/${id}/comments`, { comment });
    }
};

export const meetingsAPI = {
    getAll: async () => {
        const api = new ApiService();
        return api.get('/meetings');
    },
    getMyMeetings: async () => {
        const api = new ApiService();
        return api.get('/meetings/my-meetings');
    },
    create: async (data) => {
        const api = new ApiService();
        return api.post('/meetings', data);
    },
    update: async (id, data) => {
        const api = new ApiService();
        return api.patch(`/meetings/${id}`, data);
    },
    delete: async (id) => {
        const api = new ApiService();
        return api.delete(`/meetings/${id}`);
    }
};





export default ApiService;
