import React, { createContext, useState, useEffect, useCallback } from "react";
import axiosInstance from "../utils/axiosInstance"; // Assuming you have axiosInstance set up
import { useNavigate } from "react-router-dom";
import TokenService from "../utils/TokenService"; // Utility to manage tokens

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user data
  const [loading, setLoading] = useState(true); // Loading state for async operations
  const [error, setError] = useState(null); // Error state for API failures
  const navigate = useNavigate();
  
  // Use environment variable for API base URL
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Function to log out the user
  const logoutUser = useCallback(() => {
    TokenService.clearToken(); // Clear token from storage
    setUser(null); // Clear user state
    navigate("/signin"); // Redirect to login page
  }, [navigate]);

  // Function to fetch user data
  const fetchUserData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
  
      const response = await axiosInstance.get(`${API_BASE_URL}/auth/user`);
      setUser(response.data); // Update user data
    } catch (err) {
      console.error("Error fetching user data:", err);
  
      if (err.response?.status === 401) {
        // Clear user data if unauthorized
        TokenService.clearToken();
        setUser(null);
        navigate("/signin"); // Redirect to login
      } else {
        setError(err.response?.data?.message || "Failed to fetch user data");
      }
    } finally {
      setLoading(false);
    }
  }, [API_BASE_URL, navigate]);
  

  // Refresh user data manually (can be exposed for other components to use)
  const refreshUserData = useCallback(() => {
    fetchUserData();
  }, [fetchUserData]);

  // Fetch user data when the component is first mounted
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <AuthContext.Provider
      value={{
        user,            // Expose user data
        loading,         // Expose loading state
        error,           // Expose error state
        refreshUserData, // Expose function to refresh user data
        logoutUser,      // Expose logout function
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
