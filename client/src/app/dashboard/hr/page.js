'use client';
import HRDashboard from '../../../../src/pages/Dashboards/HRDashboard';
import ProtectedRoute from '../../../../src/components/auth/ProtectedRoute';

export default function Page() {
    return (
        <ProtectedRoute allowedRoles={['HR', 'OWNER']}>
            <HRDashboard />
        </ProtectedRoute>
    );
}
