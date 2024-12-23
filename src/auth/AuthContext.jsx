// // auth/AuthContext.js
// import React, { createContext, useState, useEffect, useCallback } from "react";
// import axiosInstance from "../utils/axiosInstance"; // Assuming you have an axiosInstance set up
// import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   // Function to fetch user data
//   const fetchUserData = async () => {
//     try {
//       setLoading(true);
//       const response = await axiosInstance.get(`${API_BASE_URL}/auth/user`);
//       setUser(response.data); // Update the user state with fetched data
//     } catch (err) {
//       console.error("Error fetching user data:", err);
//       setError(err.response?.data?.message || "Failed to fetch user data");
//       setUser(null);
//       if (err.response?.status === 401) {
//         navigate("/login"); // Redirect to login if unauthorized
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to refresh user data (can be called manually)
//   const refreshUserData = useCallback(() => {
//     fetchUserData();
//   }, []);

//   // Fetch user data on initial mount
//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         loading,
//         error,
//         refreshUserData, // Expose the refresh function
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };



// auth/AuthContext.js
import React, { createContext, useState, useEffect, useCallback } from "react";
import axiosInstance from "../utils/axiosInstance"; // Assuming you have axiosInstance set up
import { useNavigate } from "react-router-dom";

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

  // Function to fetch user data
  const fetchUserData = useCallback(async () => {
    try {
      setLoading(true); // Start loading
      setError(null); // Clear previous errors
      const response = await axiosInstance.get(`${API_BASE_URL}/auth/user`);
      setUser(response.data); // Update user state with API response
    } catch (err) {
      console.error("Error fetching user data:", err);

      // Handle errors gracefully
      const statusCode = err.response?.status;
      const message = err.response?.data?.message || "Failed to fetch user data";

      setError(message);
      setUser(null); // Clear user data on failure
      
      // Handle specific error codes (e.g., 401 Unauthorized)
      if (statusCode === 401) {
        navigate("/login"); // Redirect to login page
      }
    } finally {
      setLoading(false); // Stop loading
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
