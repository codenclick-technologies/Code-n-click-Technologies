import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import ErrorBoundary from './components/utils/ErrorBoundary';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';
import SmoothScroll from './components/utils/SmoothScroll';
import CustomCursor from './components/common/CustomCursor';
import Preloader from './components/common/Preloader';
import { Analytics } from '@vercel/analytics/react';

// Critical Routes (eager load)
import Home from './pages/Home';
import ThirdPartyLoader from './components/utils/ThirdPartyLoader';
import HolidayBanner from './components/common/HolidayBanner';
import HolidayEffects from './components/common/HolidayEffects';
import { checkHoliday } from './data/holidayConfig';

// Lazy Loaded Routes
const Login = lazy(() => import('./pages/Auth/Login'));
const ChangePassword = lazy(() => import('./pages/Auth/ChangePassword'));
const ForgotPassword = lazy(() => import('./pages/Auth/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/Auth/ResetPassword'));

const EmployeeDashboard = lazy(() => import('./pages/Dashboards/EmployeeDashboard'));
const HRDashboard = lazy(() => import('./pages/Dashboards/HRDashboard'));
const HRJobs = lazy(() => import('./pages/Dashboards/HR/HRJobs'));
const HRApplications = lazy(() => import('./pages/Dashboards/HR/HRApplications'));
const HRCelebrations = lazy(() => import('./pages/Dashboards/HR/HRCelebrations'));
const HRAttendance = lazy(() => import('./pages/Dashboards/HR/HRAttendance'));
const HRPolicies = lazy(() => import('./pages/Dashboards/HR/HRPolicies'));
const ContactMessages = lazy(() => import('./pages/Dashboards/ContactMessages'));
const ManageResources = lazy(() => import('./pages/Dashboards/ManageResources'));
const ManagerDashboard = lazy(() => import('./pages/Dashboards/ManagerDashboard'));
const OwnerDashboard = lazy(() => import('./pages/Dashboards/OwnerDashboard'));

const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Resources = lazy(() => import('./pages/Resources'));
const ResourceDetail = lazy(() => import('./pages/ResourceDetail'));
const Careers = lazy(() => import('./pages/Careers'));
const Services = lazy(() => import('./pages/Services/Services'));
const SaasDevelopment = lazy(() => import('./pages/Services/SaasDevelopment'));
const WebDevelopment = lazy(() => import('./pages/Services/WebDevelopment'));
const MetaAds = lazy(() => import('./pages/Services/MetaAds'));
const GoogleAds = lazy(() => import('./pages/Services/GoogleAds'));
const GraphicDesign = lazy(() => import('./pages/Services/GraphicDesign'));
const SEO = lazy(() => import('./pages/Services/SEO'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const ServiceLocation = lazy(() => import('./pages/ServiceLocation'));
const CostEstimator = lazy(() => import('./pages/Tools/CostEstimator'));
const NotFound = lazy(() => import('./pages/NotFound'));
import ProtectedRoute from './components/auth/ProtectedRoute';

// Loading Component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-950">
    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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

  const [activeHoliday, setActiveHoliday] = React.useState(null);

  // Check for Holidays (Indian Calendar Support)
  React.useEffect(() => {
    const checkDate = () => {
      const today = new Date();
      // NOTE: System time is used here. 
      const date = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();

      // Check against fixed and variable Indian calendar dates
      const holiday = checkHoliday(date, month, year);
      
      // FOR DEBUGGING ONLY: Uncomment next line to test specific dates
      // const holiday = checkHoliday(25, 12, 2025); // Test Christmas
      
      setActiveHoliday(holiday);
    };
    checkDate();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white transition-colors duration-300 flex flex-col">
      <Preloader />
      <CustomCursor />
      <ThirdPartyLoader />
      <Analytics />
      <ScrollToTop />
      <SmoothScroll />

      {/* Premium Noise Overlay */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-noise opacity-[0.03] mix-blend-overlay" />

      {activeHoliday && <HolidayBanner holiday={activeHoliday} />}
      {activeHoliday && <HolidayEffects type={activeHoliday.type} />}
      {!isDashboard && <Navbar isBannerVisible={!!activeHoliday} />}
      <main className="flex-grow">
        <Suspense fallback={<Loading />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
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

            {/* Programmatic SEO Route: /services/web-development/in/delhi */}
            <Route path="/services/:service/in/:city" element={<ServiceLocation />} />

            {/* Dynamic fallback for legacy service detail pages */}
            <Route path="/services/:id" element={<ServiceDetail />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:slug" element={<ResourceDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/tools/website-cost-estimator" element={<CostEstimator />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            
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
            {/* 404 Route - Must be last */}
            <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

export default App;
