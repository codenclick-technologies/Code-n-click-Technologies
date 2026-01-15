import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import MessagesContent from '../../components/dashboard/MessagesContent';
import { useAuth } from '../../context/AuthContext';

const ContactMessages = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout role={user.role}>
      <MessagesContent />
    </DashboardLayout>
  );
};

export default ContactMessages;
