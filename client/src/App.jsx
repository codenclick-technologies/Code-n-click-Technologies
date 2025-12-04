import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';

import Home from './pages/Home';
import Login from './pages/Auth/Login';
import ChangePassword from './pages/Auth/ChangePassword';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import ProtectedRoute from './components/auth/ProtectedRoute';

import EmployeeDashboard from './pages/Dashboards/EmployeeDashboard';
import HRDashboard from './pages/Dashboards/HRDashboard';
import HRJobs from './pages/Dashboards/HR/HRJobs';
import HRApplications from './pages/Dashboards/HR/HRApplications';
import HRCelebrations from './pages/Dashboards/HR/HRCelebrations';
import HRAttendance from './pages/Dashboards/HR/HRAttendance';
import HRPolicies from './pages/Dashboards/HR/HRPolicies';
// import HRPayroll from './pages/Dashboards/HR/HRPayroll';
import ContactMessages from './pages/Dashboards/ContactMessages';
import ManageResources from './pages/Dashboards/ManageResources';
import ManagerDashboard from './pages/Dashboards/ManagerDashboard';
import OwnerDashboard from './pages/Dashboards/OwnerDashboard';

import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import ResourceDetail from './pages/ResourceDetail';
import Careers from './pages/Careers';
import Services from './pages/Services/Services';
import SaasDevelopment from './pages/Services/SaasDevelopment';
import WebDevelopment from './pages/Services/WebDevelopment';
import MetaAds from './pages/Services/MetaAds';
import GoogleAds from './pages/Services/GoogleAds';
import GraphicDesign from './pages/Services/GraphicDesign';
import SEO from './pages/Services/SEO';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="min-h-screen bg-gray-950 text-white transition-colors duration-300 flex flex-col">
      <ScrollToTop />

      {!isDashboard && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Services explicit pages */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/saas-development" element={<SaasDevelopment />} />
          <Route path="/services/meta-ads" element={<MetaAds />} />
          <Route path="/services/google-ads" element={<GoogleAds />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/seo" element={<SEO />} />

          {/* Dynamic fallback for legacy service detail pages */}
          <Route path="/services/:id" element={<ServiceDetail />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:id" element={<ResourceDetail />} />
          <Route path="/careers" element={<Careers />} />
          
          {/* Employee Routes */}
          <Route 
            path="/dashboard/employee/*" 
            element={
              <ProtectedRoute allowedRoles={['EMPLOYEE']}>
                <EmployeeDashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* HR Routes */}
          <Route 
            path="/dashboard/hr" 
            element={
              <ProtectedRoute allowedRoles={['HR', 'OWNER']}>
                <HRDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/hr/jobs" 
            element={
              <ProtectedRoute allowedRoles={['HR', 'OWNER']}>
                <HRJobs />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/hr/applications" 
            element={
              <ProtectedRoute allowedRoles={['HR', 'OWNER']}>
                <HRApplications />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/hr/celebrations" 
            element={
              <ProtectedRoute allowedRoles={['HR', 'OWNER']}>
                <HRCelebrations />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/hr/attendance" 
            element={
              <ProtectedRoute allowedRoles={['HR', 'OWNER']}>
                <HRAttendance />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/hr/policies" 
            element={
              <ProtectedRoute allowedRoles={['HR', 'OWNER']}>
                <HRPolicies />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/hr/messages" 
            element={
              <ProtectedRoute allowedRoles={['HR', 'OWNER']}>
                <ContactMessages />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/hr/resources" 
            element={
              <ProtectedRoute allowedRoles={['HR', 'OWNER']}>
                <ManageResources />
              </ProtectedRoute>
            } 
          />

          {/* Manager Routes */}
          <Route 
            path="/dashboard/manager/*" 
            element={
              <ProtectedRoute allowedRoles={['MANAGER', 'OWNER']}>
                <ManagerDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/manager/messages" 
            element={
              <ProtectedRoute allowedRoles={['MANAGER', 'OWNER']}>
                <ContactMessages />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/manager/resources" 
            element={
              <ProtectedRoute allowedRoles={['MANAGER', 'OWNER']}>
                <ManageResources />
              </ProtectedRoute>
            } 
          />
          
          {/* Owner Routes */}
          <Route 
            path="/dashboard/owner/*" 
            element={
              <ProtectedRoute allowedRoles={['OWNER']}>
                <OwnerDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/owner/messages" 
            element={
              <ProtectedRoute allowedRoles={['OWNER']}>
                <ContactMessages />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/owner/resources" 
            element={
              <ProtectedRoute allowedRoles={['OWNER']}>
                <ManageResources />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

export default App;
