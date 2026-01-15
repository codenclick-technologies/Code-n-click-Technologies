'use client';
import ManagerDashboard from '../../../../src/pages/Dashboards/ManagerDashboard';
import ProtectedRoute from '../../../../src/components/auth/ProtectedRoute';

export default function Page() {
    return (
        <ProtectedRoute allowedRoles={['MANAGER', 'OWNER']}>
            <ManagerDashboard />
        </ProtectedRoute>
    );
}
