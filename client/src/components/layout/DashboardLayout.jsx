import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { contactAPI } from '../../services/api';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  Menu,
  X,
  Briefcase,
  Calendar,
  Cake,
  Sparkles,
  ClipboardList,
  DollarSign,
  Mail,
  BookOpen
} from 'lucide-react';

const DashboardLayout = ({ children, role, activeTab, onTabChange }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const [unreadCount, setUnreadCount] = React.useState(0);

  const getLinks = (role) => {
    const common = [{ name: 'Overview', path: `/dashboard/${role?.toLowerCase()}`, icon: LayoutDashboard }];
    
    switch(role?.toLowerCase()) {
      case 'employee':
        return [
          ...common,
          { name: 'My Tasks', path: '/dashboard/employee/tasks', icon: CheckSquare },
          { name: 'Attendance', path: '/dashboard/employee/attendance', icon: Calendar },
        ];
      case 'hr':
        return [
          { name: 'Employees', path: '/dashboard/hr', icon: Users },
          { name: 'Jobs', path: '/dashboard/hr/jobs', icon: Briefcase },
          { name: 'Applications', path: '/dashboard/hr/applications', icon: ClipboardList },
          { name: 'Celebrations', path: '/dashboard/hr/celebrations', icon: Cake },
          { name: 'Attendance', path: '/dashboard/hr/attendance', icon: Calendar },
          // { name: 'Payroll', path: '/dashboard/hr/payroll', icon: DollarSign },
          { name: 'Policies', path: '/dashboard/hr/policies', icon: FileText },
          { name: 'Messages', path: '/dashboard/hr/messages', icon: Mail, badge: unreadCount },
          { name: 'Chat Leads', path: '/dashboard/hr/chat-leads', icon: Sparkles },
          { name: 'Resources', path: '/dashboard/hr/resources', icon: BookOpen },
        ];
      case 'manager':
        return [
          ...common,
          { name: 'Team', path: '/dashboard/manager/team', icon: Users },
          { name: 'Meetings', path: '/dashboard/manager/meetings', icon: Briefcase },
          { name: 'Messages', path: '/dashboard/manager/messages', icon: Mail, badge: unreadCount },
          { name: 'Chat Leads', path: '/dashboard/manager/chat-leads', icon: Sparkles },
          { name: 'Resources', path: '/dashboard/manager/resources', icon: BookOpen },
        ];
      case 'owner':
        return [
          ...common,
          { name: 'All Data', path: '/dashboard/owner/data', icon: Settings },
          { name: 'Employees', path: '/dashboard/owner/employees', icon: Users },
          { name: 'Messages', path: '/dashboard/owner/messages', icon: Mail, badge: unreadCount },
          { name: 'Chat Leads', path: '/dashboard/owner/chat-leads', icon: Sparkles },
          { name: 'Resources', path: '/dashboard/owner/resources', icon: BookOpen },
        ];
      default:
        return common;
    }
  };

  // Fetch unread count for authorized roles
  useEffect(() => {
    const fetchUnreadCount = async () => {
      if (['hr', 'manager', 'owner'].includes(role?.toLowerCase())) {
        try {
          const count = await contactAPI.getUnreadCount();
          setUnreadCount(count);
        } catch (error) {
          console.error('Error fetching unread count:', error);
        }
      }
    };

    fetchUnreadCount();
    // Poll every 30 seconds
    const interval = setInterval(fetchUnreadCount, 30000);
    return () => clearInterval(interval);
  }, [role]);

  const links = getLinks(role);

  const handleNavigation = (link) => {
    if (onTabChange) {
      // Extract tab ID from path (e.g., /dashboard/hr/employees -> employees)
      const tabId = link.path.split('/').pop();
      // Special case for overview which usually matches the role path
      const id = link.path === `/dashboard/${role}` ? 'overview' : tabId;
      onTabChange(id);
      // Close sidebar on mobile after selection
      if (window.innerWidth < 1024) setSidebarOpen(false);
    } else {
      navigate(link.path);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-xl transform transition-transform duration-300 flex flex-col h-screen ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700 shrink-0">
          <span className="text-xl font-bold text-gray-800 dark:text-white">CNC Dashboard</span>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-500">
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
          {links.map((link) => {
            // Determine if active based on tab state or URL
            const tabId = link.path === `/dashboard/${role}` ? 'overview' : link.path.split('/').pop();
            const isActive = activeTab ? activeTab === tabId : location.pathname === link.path;

            return (
              <button
                key={link.path}
                onClick={() => handleNavigation(link)}
                className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
              >
                <div className="flex items-center gap-3">
                  <link.icon size={20} />
                  {link.name}
                </div>
                {link.badge > 0 && (
                  <span className="px-2 py-0.5 bg-blue-600 text-white text-xs font-bold rounded-full min-w-[20px] text-center">
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 shrink-0 bg-white dark:bg-gray-800">
          <button 
            onClick={logout}
            className="flex items-center gap-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 lg:ml-64">
        <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-sm z-40">
          <div className="flex items-center justify-between h-16 px-6">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-500">
              <Menu size={24} />
            </button>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{user?.name}</p>
                <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                {user?.name?.charAt(0)}
              </div>
            </div>
          </div>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
