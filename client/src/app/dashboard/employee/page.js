'use client';
import EmployeeDashboard from '../../../../src/pages/Dashboards/EmployeeDashboard';
import ProtectedRoute from '../../../../src/components/auth/ProtectedRoute';

export default function Page() {
    return (
        <ProtectedRoute allowedRoles={['EMPLOYEE']}>
            <EmployeeDashboard />
        </ProtectedRoute>
    );
}
