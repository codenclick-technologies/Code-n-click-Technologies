'use client';
import OwnerDashboard from '../../../../src/pages/Dashboards/OwnerDashboard';
import ProtectedRoute from '../../../../src/components/auth/ProtectedRoute';

export default function Page() {
    return (
        <ProtectedRoute allowedRoles={['OWNER']}>
            <OwnerDashboard />
        </ProtectedRoute>
    );
}
