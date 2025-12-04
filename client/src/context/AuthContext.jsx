import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mustChangePassword, setMustChangePassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for stored user and token
    const storedUser = localStorage.getItem('cnc_user');
    const accessToken = localStorage.getItem('cnc_access_token');

    if (storedUser && accessToken) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setMustChangePassword(userData.mustChangePassword || false);
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await authAPI.login(email, password);

      // Store tokens and user data
      localStorage.setItem('cnc_access_token', response.accessToken);
      localStorage.setItem('cnc_refresh_token', response.refreshToken);
      localStorage.setItem('cnc_user', JSON.stringify(response.user));

      setUser(response.user);
      setMustChangePassword(response.user.mustChangePassword || false);

      return { 
        success: true, 
        mustChangePassword: response.user.mustChangePassword 
      };
    } catch (error) {
      return { 
        success: false, 
        message: error.message || 'Login failed' 
      };
    }
  };

  const changePassword = async (currentPassword, newPassword) => {
    try {
      await authAPI.changePassword(currentPassword, newPassword);

      // Update user state to clear mustChangePassword flag
      const updatedUser = { ...user, mustChangePassword: false };
      setUser(updatedUser);
      setMustChangePassword(false);
      localStorage.setItem('cnc_user', JSON.stringify(updatedUser));

      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: error.message || 'Password change failed' 
      };
    }
  };

  const forgotPassword = async (email) => {
    try {
      const response = await authAPI.forgotPassword(email);
      return { success: true, message: response.message };
    } catch (error) {
      return { 
        success: false, 
        message: error.message || 'Request failed' 
      };
    }
  };

  const resetPassword = async (token, newPassword) => {
    try {
      const response = await authAPI.resetPassword(token, newPassword);
      return { success: true, message: response.message };
    } catch (error) {
      return { 
        success: false, 
        message: error.message || 'Password reset failed' 
      };
    }
  };

  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear local storage
      localStorage.removeItem('cnc_user');
      localStorage.removeItem('cnc_access_token');
      localStorage.removeItem('cnc_refresh_token');

      setUser(null);
      setMustChangePassword(false);
      navigate('/login');
    }
  };

  const value = {
    user,
    loading,
    mustChangePassword,
    login,
    logout,
    changePassword,
    forgotPassword,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
