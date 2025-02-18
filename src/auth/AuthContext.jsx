// import React, { createContext, useState, useEffect, useCallback } from "react";
// import axiosInstance from "../utils/axiosInstance"; // Assuming you have axiosInstance set up
// import { useNavigate } from "react-router-dom";
// import TokenService from "../utils/TokenService"; // Utility to manage tokens

// // Create the AuthContext
// export const AuthContext = createContext();

// // AuthProvider component
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // Store user data
//   const [loading, setLoading] = useState(true); // Loading state for async operations
//   const [error, setError] = useState(null); // Error state for API failures
//   const navigate = useNavigate();
  
//   // Use environment variable for API base URL
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   // Function to log out the user
//   const logoutUser = useCallback(() => {
//     TokenService.clearToken(); // Clear token from storage
//     setUser(null); // Clear user state
//     navigate("/signin"); // Redirect to login page
//   }, [navigate]);

//   // Function to fetch user data
//   const fetchUserData = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
  
//       const response = await axiosInstance.get(`${API_BASE_URL}/auth/user`);
//       setUser(response.data); // Update user data
//     } catch (err) {
//       console.error("Error fetching user data:", err);
  
//       if (err.response?.status === 401) {
//         // Clear user data if unauthorized
//         TokenService.clearToken();
//         setUser(null);
//         navigate("/signin"); // Redirect to login
//       } else {
//         setError(err.response?.data?.message || "Failed to fetch user data");
//       }
//     } finally {
//       setLoading(false);
//     }
//   }, [API_BASE_URL, navigate]);
  

//   // Refresh user data manually (can be exposed for other components to use)
//   const refreshUserData = useCallback(() => {
//     fetchUserData();
//   }, [fetchUserData]);

//   // Fetch user data when the component is first mounted
//   useEffect(() => {
//     fetchUserData();
//   }, [fetchUserData]);

//   return (
//     <AuthContext.Provider
//       value={{
//         user,            // Expose user data
//         loading,         // Expose loading state
//         error,           // Expose error state
//         refreshUserData, // Expose function to refresh user data
//         logoutUser,      // Expose logout function
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };



// import React, { createContext, useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import TokenService from '../utils/TokenService';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     useEffect(() => {
//         const checkAuthStatus = async () => {
//             const token = TokenService.getToken();
//             if (token) {
//                 try {
//                     const headers = { Authorization: `Bearer ${token}` };
//                     const response = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//                     if (response.status === 200) {
//                         setUser(response.data);
//                     } else {
//                         TokenService.removeToken();
//                         setUser(null);
//                     }
//                 } catch (error) {
//                     TokenService.removeToken();
//                     setUser(null);
//                 }
//             }
//             setLoading(false);
//         };

//         checkAuthStatus();
//     }, [API_BASE_URL]);

//     const login = async (email, password) => {
//         try {
//             const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
//             if (response.status === 200) {
//                 TokenService.setToken(response.data.tokens.accessToken, response.data.tokens.refreshToken);

//                 // Fetch user data after login to determine the role
//                 const headers = { Authorization: `Bearer ${response.data.tokens.accessToken}` };
//                 const userResponse = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//                 if (userResponse.status === 200) {
//                     setUser(userResponse.data);

//                     // Redirect based on role
//                     if (userResponse.data.role === 'admin') {
//                         navigate('/admin');  // Redirect to admin panel
//                     } else {
//                         navigate('/dashboard');  // Redirect to user dashboard
//                     }
//                     toast.success("Login successful!");
//                 } else {
//                     TokenService.removeToken();
//                     setUser(null);
//                     toast.error("Failed to fetch user details.");
//                 }
//             } else {
//                 toast.error("Login failed.");
//             }
//         } catch (error) {
//             console.error("Login error:", error);
//             TokenService.removeToken();
//             setUser(null);
//             toast.error(error.response?.data?.message || "Login failed.");
//         } finally {
//             setLoading(false);
//         }
//     };
//     const logout = () => {
//         TokenService.removeToken();
//         setUser(null);
//         navigate('/');
//     };

//     const contextValue = {
//         user,
//         setUser,
//         login,
//         logout,
//         loading
//     };

//     return (
//         <AuthContext.Provider value={contextValue}>
//             {!loading && children}
//         </AuthContext.Provider>
//     );
// };
// export const useAuth = () => useContext(AuthContext);






// import React, { createContext, useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import TokenService from '../utils/TokenService';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     useEffect(() => {
//         const checkAuthStatus = async () => {
//             const token = TokenService.getToken();
//             if (token) {
//                 try {
//                     const headers = { Authorization: `Bearer ${token}` };
//                     const response = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//                     if (response.status === 200) {
//                         setUser(response.data);
//                     } else if (response.status === 401) {  //Token is expired and unauthorized
//                         // Attempt to refresh the token
//                         try {
//                             const refreshToken = localStorage.getItem("refreshToken");  // get from local storage
//                             if (!refreshToken) {
//                                 TokenService.removeToken();
//                                 setUser(null);
//                                 return;
//                             }

//                             const refreshResponse = await axios.post(`${API_BASE_URL}/auth/refresh-token`, {}, {  //Empty body because refresh token is in cookies
//                                 headers: { 'Content-Type': 'application/json' },
//                                 withCredentials: true
//                             });
//                             if (refreshResponse.status === 200) {
//                                 // Update the access token in TokenService
//                                 TokenService.setToken(refreshResponse.data.accessToken);

//                                 // Retry fetching user data with the new access token
//                                 const newHeaders = { Authorization: `Bearer ${refreshResponse.data.accessToken}` };
//                                 const newUserResponse = await axios.get(`${API_BASE_URL}/auth/user`, { newHeaders });

//                                 if (newUserResponse.status === 200) {
//                                     setUser(newUserResponse.data);
//                                 } else {
//                                     TokenService.removeToken();
//                                     localStorage.removeItem("refreshToken");
//                                     setUser(null);  // Logout if retrying user data fetch fails
//                                 }
//                             } else {
//                                 TokenService.removeToken();
//                                 localStorage.removeItem("refreshToken");
//                                 setUser(null);  // Logout if refresh fails
//                             }
//                         } catch (refreshError) {
//                             console.error("Token refresh error:", refreshError);
//                             TokenService.removeToken();
//                             localStorage.removeItem("refreshToken");
//                             setUser(null);  // Logout if refresh fails
//                         }
//                     } else {
//                         TokenService.removeToken();
//                         localStorage.removeItem("refreshToken");
//                         setUser(null);
//                     }
//                 } catch (error) {
//                     console.error("Error fetching user data:", error);
//                     TokenService.removeToken();
//                     localStorage.removeItem("refreshToken");
//                     setUser(null);
//                 }
//             }
//             setLoading(false);
//         };

//         checkAuthStatus();
//     }, [API_BASE_URL, navigate]);

//     const login = async (email, password) => {
//         try {
//             const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password }, { withCredentials: true });
//             if (response.status === 200) {
//                 TokenService.setToken(response.data.tokens.accessToken);
//                 localStorage.setItem("refreshToken", response.data.refreshToken) // Save refreshToken to local storage

//                 // Fetch user data after login to determine the role
//                 const headers = { Authorization: `Bearer ${response.data.tokens.accessToken}` };
//                 const userResponse = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//                 if (userResponse.status === 200) {
//                     setUser(userResponse.data);

//                     // Redirect based on role
//                     if (userResponse.data.role === 'admin') {
//                         navigate('/admin');  // Redirect to admin panel
//                     } else {
//                         navigate('/dashboard');  // Redirect to user dashboard
//                     }
//                     toast.success("Login successful!");
//                 } else {
//                     TokenService.removeToken();
//                     localStorage.removeItem("refreshToken");
//                     setUser(null);
//                     toast.error("Failed to fetch user details.");
//                 }
//             } else {
//                 toast.error("Login failed.");
//             }
//         } catch (error) {
//             console.error("Login error:", error);
//             TokenService.removeToken();
//             localStorage.removeItem("refreshToken");
//             setUser(null);
//             toast.error(error.response?.data?.message || "Login failed.");
//         } finally {
//             setLoading(false);
//         }
//     };
//     const logout = () => {
//         TokenService.removeToken();
//         localStorage.removeItem("refreshToken");
//         setUser(null);
//         navigate('/');
//     };

//     const contextValue = {
//         user,
//         setUser,
//         login,
//         logout,
//         loading
//     };

//     return (
//         <AuthContext.Provider value={contextValue}>
//             {!loading && children}
//         </AuthContext.Provider>
//     );
// };
// export const useAuth = () => useContext(AuthContext);








// AuthContext.jsx (Modified)
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import TokenService from '../utils/TokenService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const checkAuthStatus = async () => {
      const accessToken = TokenService.getToken();
      const refreshToken = TokenService.getRefreshToken();

      if (!accessToken && !refreshToken) {
        setLoading(false);
        return;
      }

      if (accessToken) {
        try {
          const headers = { Authorization: `Bearer ${accessToken}` };
          const response = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

          if (response.status === 200) {
            setUser(response.data);
            setLoading(false); // Move setLoading(false) here after successful fetch
            return;
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }

      if (refreshToken) {
        try {
          const refreshResponse = await axios.post(`${API_BASE_URL}/auth/refresh-token`, {}, {
            withCredentials: true
          });

          if (refreshResponse.status === 200) {
            TokenService.setToken(refreshResponse.data.accessToken);
            const headers = { Authorization: `Bearer ${refreshResponse.data.accessToken}` };
            const userResponse = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

            if (userResponse.status === 200) {
              setUser(userResponse.data);
            } else {
              TokenService.removeToken();
              TokenService.removeRefreshToken();
              setUser(null);
            }
          } else {
            TokenService.removeToken();
            TokenService.removeRefreshToken();
            setUser(null);
          }
        } catch (refreshError) {
          console.error("Token refresh error:", refreshError);
          TokenService.removeToken();
          TokenService.removeRefreshToken();
          setUser(null);
        }
      }

      setLoading(false); // Ensure setLoading is called in all code paths
    };

    checkAuthStatus();
  }, [API_BASE_URL, navigate]);


  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password }, { withCredentials: true });
      if (response.status === 200) {
        TokenService.setToken(response.data.tokens.accessToken);
        TokenService.setRefreshToken(response.data.refreshToken);

        // Fetch user data after login to determine the role
        const headers = { Authorization: `Bearer ${response.data.tokens.accessToken}` };
        const userResponse = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

        if (userResponse.status === 200) {
          setUser(userResponse.data);

          // Redirect based on role
          if (userResponse.data.role === 'admin') {
            navigate('/admin');  // Redirect to admin panel
          } else {
            navigate('/dashboard');  // Redirect to user dashboard
          }
          toast.success("Login successful!");
        } else {
          TokenService.removeToken();
          TokenService.removeRefreshToken();
          setUser(null);
          toast.error("Failed to fetch user details.");
        }
      } else {
        toast.error("Login failed.");
      }
    } catch (error) {
      console.error("Login error:", error);
      TokenService.removeToken();
      TokenService.removeRefreshToken();
      setUser(null);
      toast.error(error.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

    const logout = () => {
        TokenService.removeToken();
        TokenService.removeRefreshToken();
        setUser(null);
        navigate('/');
    };

  const contextValue = {
    user,
    setUser,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);