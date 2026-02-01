import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ResourcesContent from '../../components/dashboard/ResourcesContent';
import { useAuth } from '../../context/AuthContext';

const ManageResources = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout role={user.role}>
      <ResourcesContent />
    </DashboardLayout>
  );
};

export default ManageResources;
