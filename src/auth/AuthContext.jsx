// auth/AuthContext.js
import React, { createContext, useState, useEffect, useCallback } from "react";
import axiosInstance from "../utils/axiosInstance"; // Assuming you have an axiosInstance set up
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`${API_BASE_URL}/auth/user`);
      setUser(response.data); // Update the user state with fetched data
    } catch (err) {
      console.error("Error fetching user data:", err);
      setError(err.response?.data?.message || "Failed to fetch user data");
      setUser(null);
      if (err.response?.status === 401) {
        navigate("/login"); // Redirect to login if unauthorized
      }
    } finally {
      setLoading(false);
    }
  };

  // Function to refresh user data (can be called manually)
  const refreshUserData = useCallback(() => {
    fetchUserData();
  }, []);

  // Fetch user data on initial mount
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        refreshUserData, // Expose the refresh function
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
