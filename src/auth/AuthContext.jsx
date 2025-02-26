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








// // AuthContext.jsx (Modified)
// import React, { createContext, useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import TokenService from '../utils/TokenService';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       const accessToken = TokenService.getToken();
//       const refreshToken = TokenService.getRefreshToken();

//       if (!accessToken && !refreshToken) {
//         setLoading(false);
//         return;
//       }

//       if (accessToken) {
//         try {
//           const headers = { Authorization: `Bearer ${accessToken}` };
//           const response = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//           if (response.status === 200) {
//             setUser(response.data);
//             setLoading(false); // Move setLoading(false) here after successful fetch
//             return;
//           }
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//         }
//       }

//       if (refreshToken) {
//         try {
//           const refreshResponse = await axios.post(`${API_BASE_URL}/auth/refresh-token`, {}, {
//             withCredentials: true
//           });

//           if (refreshResponse.status === 200) {
//             TokenService.setToken(refreshResponse.data.accessToken);
//             const headers = { Authorization: `Bearer ${refreshResponse.data.accessToken}` };
//             const userResponse = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//             if (userResponse.status === 200) {
//               setUser(userResponse.data);
//             } else {
//               TokenService.removeToken();
//               TokenService.removeRefreshToken();
//               setUser(null);
//             }
//           } else {
//             TokenService.removeToken();
//             TokenService.removeRefreshToken();
//             setUser(null);
//           }
//         } catch (refreshError) {
//           console.error("Token refresh error:", refreshError);
//           TokenService.removeToken();
//           TokenService.removeRefreshToken();
//           setUser(null);
//         }
//       }

//       setLoading(false); // Ensure setLoading is called in all code paths
//     };

//     checkAuthStatus();
//   }, [API_BASE_URL, navigate]);


//   const login = async (email, password) => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password }, { withCredentials: true });
//       if (response.status === 200) {
//         TokenService.setToken(response.data.tokens.accessToken);
//         TokenService.setRefreshToken(response.data.refreshToken);

//         // Fetch user data after login to determine the role
//         const headers = { Authorization: `Bearer ${response.data.tokens.accessToken}` };
//         const userResponse = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//         if (userResponse.status === 200) {
//           setUser(userResponse.data);

//           // Redirect based on role
//           if (userResponse.data.role === 'admin') {
//             navigate('/admin');  // Redirect to admin panel
//           } else {
//             navigate('/dashboard');  // Redirect to user dashboard
//           }
//           toast.success("Login successful!");
//         } else {
//           TokenService.removeToken();
//           TokenService.removeRefreshToken();
//           setUser(null);
//           toast.error("Failed to fetch user details.");
//         }
//       } else {
//         toast.error("Login failed.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       TokenService.removeToken();
//       TokenService.removeRefreshToken();
//       setUser(null);
//       toast.error(error.response?.data?.message || "Login failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//     const logout = () => {
//         TokenService.removeToken();
//         TokenService.removeRefreshToken();
//         setUser(null);
//         navigate('/');
//     };

//   const contextValue = {
//     user,
//     setUser,
//     login,
//     logout,
//     loading
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);




// import React, { createContext, useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import TokenService from '../utils/TokenService';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       setLoading(true);  // Start loading when checking auth status
//       try {
//         const accessToken = TokenService.getToken();
//         const refreshToken = TokenService.getRefreshToken();

//         if (!accessToken && !refreshToken) {
//           return; // Exit early if no tokens
//         }

//         if (accessToken) {
//           try {
//             const headers = { Authorization: `Bearer ${accessToken}` };
//             const response = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//             if (response.status === 200) {
//               setUser(response.data);
//               return; // Exit after successful fetch
//             }
//           } catch (error) {
//             console.error("Error fetching user data:", error);
//             // Consider token invalidation here if needed
//           }
//         }

//         if (refreshToken) {
//           try {
//             const refreshResponse = await axios.post(`${API_BASE_URL}/auth/refresh-token`, {}, {
//               withCredentials: true
//             });

//             if (refreshResponse.status === 200) {
//               TokenService.setToken(refreshResponse.data.accessToken);
//               const headers = { Authorization: `Bearer ${refreshResponse.data.accessToken}` };
//               const userResponse = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//               if (userResponse.status === 200) {
//                 setUser(userResponse.data);
//               } else {
//                 // Invalidate tokens if user fetch fails after refresh
//                 TokenService.removeToken();
//                 TokenService.removeRefreshToken();
//                 setUser(null);
//               }
//             } else {
//               // Invalidate tokens if refresh fails
//               TokenService.removeToken();
//               TokenService.removeRefreshToken();
//               setUser(null);
//             }
//           } catch (refreshError) {
//             console.error("Token refresh error:", refreshError);
//             TokenService.removeToken();
//             TokenService.removeRefreshToken();
//             setUser(null);
//           }
//         }
//       } finally {
//         setLoading(false); // Ensure loading is always set to false
//       }
//     };

//     checkAuthStatus();
//   }, [API_BASE_URL, navigate]);


//   const login = async (email, password) => {
//     setLoading(true); // Start loading during login
//     try {
//       const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password }, { withCredentials: true });
//       if (response.status === 200) {
//         TokenService.setToken(response.data.tokens.accessToken);
//         TokenService.setRefreshToken(response.data.refreshToken);

//         // Fetch user data after login to determine the role
//         const headers = { Authorization: `Bearer ${response.data.tokens.accessToken}` };
//         const userResponse = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//         if (userResponse.status === 200) {
//           setUser(userResponse.data);

//           // Redirect based on role
//           if (userResponse.data.role === 'admin') {
//             navigate('/admin');  // Redirect to admin panel
//           } else {
//             navigate('/dashboard');  // Redirect to user dashboard
//           }
//           toast.success("Login successful!");
//         } else {
//           TokenService.removeToken();
//           TokenService.removeRefreshToken();
//           setUser(null);
//           toast.error("Failed to fetch user details.");
//         }
//       } else {
//         toast.error("Login failed.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       TokenService.removeToken();
//       TokenService.removeRefreshToken();
//       setUser(null);
//       toast.error(error.response?.data?.message || "Login failed.");
//     } finally {
//       setLoading(false); // Ensure loading is always set to false
//     }
//   };

//   const logout = () => {
//     TokenService.removeToken();
//     TokenService.removeRefreshToken();
//     setUser(null);
//     navigate('/');
//   };

//   const contextValue = {
//     user,
//     setUser,
//     login,
//     logout,
//     loading
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


// import React, {
//   createContext,
//   useState,
//   useEffect,
//   useContext,
//   useCallback,
// } from 'react';
// import axios from 'axios';
// import TokenService from '../utils/TokenService';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [accessToken, setAccessToken] = useState(null); // Store access token
//   const navigate = useNavigate();

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   // Memoized fetchUserData function
//   const fetchUserData = useCallback(
//     async (token) => {
//       if (!token) {
//         console.warn("fetchUserData: No token provided."); // Log this
//         return false;
//       }

//       try {
//         const headers = { Authorization: `Bearer ${token}` };
//         const response = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//         if (response.status === 200) {
//           setUser(response.data);
//           return true;
//         } else {
//           console.error("fetchUserData: Error fetching user data. Status:", response.status);
//           setUser(null);
//           return false;
//         }
//       } catch (error) {
//         console.error("fetchUserData: Error fetching user data:", error);
//         setUser(null);
//         return false;
//       }
//     },
//     [API_BASE_URL]
//   );

//   // Memoized refreshAccessToken function
//   const refreshAccessToken = useCallback(async () => {
//     const refreshToken = TokenService.getRefreshToken();

//     if (!refreshToken) {
//       console.warn("refreshAccessToken: No refresh token found.");
//       setAccessToken(null);
//       setUser(null);
//       return null; // Return null instead of false, more idiomatic for tokens
//     }

//     try {
//       const refreshResponse = await axios.post(
//         `${API_BASE_URL}/auth/refresh-token`,
//         {},
//         { withCredentials: true }
//       );

//       if (refreshResponse.status === 200) {
//         const newAccessToken = refreshResponse.data.accessToken;
//         TokenService.setRefreshToken(refreshResponse.data.refreshToken);  //Update refresh Token as well
//         setAccessToken(newAccessToken);
//         return newAccessToken;
//       } else {
//         console.error("refreshAccessToken: Token refresh failed. Status:", refreshResponse.status);
//         TokenService.removeRefreshToken();
//         TokenService.removeToken();
//         setAccessToken(null);
//         setUser(null);
//         return null;
//       }
//     } catch (refreshError) {
//       console.error("refreshAccessToken: Token refresh error:", refreshError);
//       TokenService.removeRefreshToken();
//       TokenService.removeToken();
//       setAccessToken(null);
//       setUser(null);
//       return null;
//     }
//   }, [API_BASE_URL]);

//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       setLoading(true);
//       try {
//         let initialAccessToken = TokenService.getToken();
//         const initialRefreshToken = TokenService.getRefreshToken();

//         if (!initialAccessToken && !initialRefreshToken) {
//           console.log("checkAuthStatus: No initial tokens found.");
//           setUser(null);
//           setAccessToken(null);
//           return;
//         }

//         if (!initialAccessToken && initialRefreshToken) {
//           initialAccessToken = await refreshAccessToken();
//           if (!initialAccessToken) {
//             console.log("checkAuthStatus: Could not refresh Access Token");
//             TokenService.removeRefreshToken();
//             TokenService.removeToken();
//             setUser(null);
//             setAccessToken(null);
//             return;
//           }
//         }

//         if (initialAccessToken) {
//           const userDataFetched = await fetchUserData(initialAccessToken);
//           if (!userDataFetched) {
//             console.log("checkAuthStatus: Could not fetch user data with Access Token");
//             TokenService.removeRefreshToken();
//             TokenService.removeToken();
//             setUser(null);
//             setAccessToken(null);
//           }
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkAuthStatus();

//     // Refresh token periodically (e.g., every hour)
//     const intervalId = setInterval(async () => {
//       if (TokenService.getRefreshToken()) {
//         const newAccessToken = await refreshAccessToken();
//         if (newAccessToken) {
//           await fetchUserData(newAccessToken);
//         } else {
//           console.warn("Periodic refresh failed. User might need to re-authenticate.");
//         }
//       }
//     }, 3600000); // 1 hour

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [fetchUserData, refreshAccessToken]);

//   const login = async (email, password) => {
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/auth/login`,
//         { email, password },
//         { withCredentials: true }
//       );

//       if (response.status === 200) {
//         const { accessToken: newAccessToken, refreshToken } = response.data.tokens;
//         TokenService.setToken(newAccessToken);
//         TokenService.setRefreshToken(refreshToken);
//         setAccessToken(newAccessToken);

//         const userDataFetched = await fetchUserData(newAccessToken);

//         if (userDataFetched) {
//           toast.success("Login successful!");
//           if (user?.role === 'admin') {
//             navigate('/admin');
//           } else {
//             navigate('/dashboard');
//           }
//         } else {
//           TokenService.removeRefreshToken();
//           TokenService.removeToken();
//           setAccessToken(null);
//           setUser(null);
//           toast.error("Failed to fetch user details.");
//         }
//       } else {
//         toast.error("Login failed.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       TokenService.removeRefreshToken();
//       TokenService.removeToken();
//       setAccessToken(null);
//       setUser(null);
//       toast.error(error.response?.data?.message || "Login failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const logout = () => {
//     TokenService.removeRefreshToken();
//     TokenService.removeToken();
//     setAccessToken(null);
//     setUser(null);
//     navigate('/');
//   };

//   const contextValue = {
//     user,
//     setUser,
//     accessToken, // Provide the access token
//     login,
//     logout,
//     loading,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


// import React, {
//   createContext,
//   useState,
//   useEffect,
//   useContext,
//   useCallback,
// } from 'react';
// import axios from 'axios';
// import TokenService from '../utils/TokenService';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [accessToken, setAccessToken] = useState(null); // Store access token
//   const navigate = useNavigate();

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   // Memoized fetchUserData function
//   const fetchUserData = useCallback(
//     async (token) => {
//       if (!token) {
//         console.warn("fetchUserData: No token provided."); // Log this
//         return false;
//       }

//       try {
//         const headers = { Authorization: `Bearer ${token}` };
//         const response = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//         if (response.status === 200) {
//           setUser(response.data);
//           return true;
//         } else {
//           console.error("fetchUserData: Error fetching user data. Status:", response.status);
//           setUser(null);
//           return false;
//         }
//       } catch (error) {
//         console.error("fetchUserData: Error fetching user data:", error);
//         setUser(null);
//         return false;
//       }
//     },
//     [API_BASE_URL]
//   );

//   // Memoized refreshAccessToken function
//   const refreshAccessToken = useCallback(async () => {
//     const refreshToken = TokenService.getRefreshToken();

//     if (!refreshToken) {
//       console.warn("refreshAccessToken: No refresh token found.");
//       setAccessToken(null);
//       setUser(null);
//       return null; // Return null instead of false, more idiomatic for tokens
//     }

//     try {
//       const refreshResponse = await axios.post(
//         `${API_BASE_URL}/auth/refresh-token`,
//         {},
//         { withCredentials: true }
//       );

//       if (refreshResponse.status === 200) {
//         const newAccessToken = refreshResponse.data.accessToken;
//         TokenService.setRefreshToken(refreshResponse.data.refreshToken);  //Update refresh Token as well
//         setAccessToken(newAccessToken);
//         return newAccessToken;
//       } else {
//         console.error("refreshAccessToken: Token refresh failed. Status:", refreshResponse.status);
//         TokenService.removeRefreshToken();
//         TokenService.removeToken();
//         setAccessToken(null);
//         setUser(null);
//         return null;
//       }
//     } catch (refreshError) {
//       console.error("refreshAccessToken: Token refresh error:", refreshError);
//       TokenService.removeRefreshToken();
//       TokenService.removeToken();
//       setAccessToken(null);
//       setUser(null);
//       return null;
//     }
//   }, [API_BASE_URL]);

//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       setLoading(true);
//       try {
//         let initialAccessToken = TokenService.getToken();
//         const initialRefreshToken = TokenService.getRefreshToken();

//         if (!initialAccessToken && !initialRefreshToken) {
//           console.log("checkAuthStatus: No initial tokens found.");
//           setUser(null);
//           setAccessToken(null);
//           return;
//         }

//         if (!initialAccessToken && initialRefreshToken) {
//           initialAccessToken = await refreshAccessToken();
//           if (!initialAccessToken) {
//             console.log("checkAuthStatus: Could not refresh Access Token");
//             TokenService.removeRefreshToken();
//             TokenService.removeToken();
//             setUser(null);
//             setAccessToken(null);
//             return;
//           }
//         }

//         if (initialAccessToken) {
//           const userDataFetched = await fetchUserData(initialAccessToken);
//           if (!userDataFetched) {
//             console.log("checkAuthStatus: Could not fetch user data with Access Token");
//             TokenService.removeRefreshToken();
//             TokenService.removeToken();
//             setUser(null);
//             setAccessToken(null);
//           }
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkAuthStatus();

//     // Refresh token periodically (e.g., every hour)
//     const intervalId = setInterval(async () => {
//       if (TokenService.getRefreshToken()) {
//         const newAccessToken = await refreshAccessToken();
//         if (newAccessToken) {
//           await fetchUserData(newAccessToken);
//         } else {
//           console.warn("Periodic refresh failed. User might need to re-authenticate.");
//         }
//       }
//     }, 3600000); // 1 hour

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [fetchUserData, refreshAccessToken]);

//   const login = async (email, password) => {
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/auth/login`,
//         { email, password },
//         { withCredentials: true }
//       );

//       if (response.status === 200) {
//         const { accessToken: newAccessToken, refreshToken } = response.data.tokens;
//         TokenService.setToken(newAccessToken);
//         TokenService.setRefreshToken(refreshToken);
//         setAccessToken(newAccessToken);

//         const userDataFetched = await fetchUserData(newAccessToken);

//         if (userDataFetched) {
//           toast.success("Login successful!");
//           if (user?.role === 'admin') {
//             navigate('/admin');
//           } else {
//             navigate('/dashboard');
//           }
//         } else {
//           TokenService.removeRefreshToken();
//           TokenService.removeToken();
//           setAccessToken(null);
//           setUser(null);
//           toast.error("Failed to fetch user details.");
//         }
//       } else {
//         toast.error("Login failed.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       TokenService.removeRefreshToken();
//       TokenService.removeToken();
//       setAccessToken(null);
//       setUser(null);
//       toast.error(error.response?.data?.message || "Login failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const logout = () => {
//     TokenService.removeRefreshToken();
//     TokenService.removeToken();
//     setAccessToken(null);
//     setUser(null);
//     navigate('/');
//   };

//   const contextValue = {
//     user,
//     setUser,
//     accessToken, // Provide the access token
//     login,
//     logout,
//     loading,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);



// import React, {
//   createContext,
//   useState,
//   useEffect,
//   useContext,
//   useCallback,
// } from 'react';
// import axios from 'axios';
// import TokenService from '../utils/TokenService';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [accessToken, setAccessToken] = useState(null);
//   const navigate = useNavigate();

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   const fetchUserData = useCallback(
//     async (token) => {
//       if (!token) {
//         console.warn("fetchUserData: No token provided.");
//         return false;
//       }

//       try {
//         const headers = { Authorization: `Bearer ${token}` };
//         const response = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//         if (response.status === 200) {
//           setUser(response.data);
//           return true;
//         } else {
//           console.error("fetchUserData: Error fetching user data. Status:", response.status);
//           setUser(null);
//           return false;
//         }
//       } catch (error) {
//         console.error("fetchUserData: Error fetching user data:", error);
//         setUser(null);
//         return false;
//       }
//     },
//     [API_BASE_URL]
//   );

//   const refreshAccessToken = useCallback(async () => {
//     const refreshToken = TokenService.getRefreshToken();

//     if (!refreshToken) {
//       console.warn("refreshAccessToken: No refresh token found.");
//       setAccessToken(null);
//       setUser(null);
//       return null;
//     }

//     try {
//       const refreshResponse = await axios.post(
//         `${API_BASE_URL}/auth/refresh-token`,
//         {},
//         { withCredentials: true }
//       );

//       if (refreshResponse.status === 200) {
//         const newAccessToken = refreshResponse.data.accessToken;
//         TokenService.setRefreshToken(refreshResponse.data.refreshToken);
//         setAccessToken(newAccessToken);
//         return newAccessToken;
//       } else {
//         console.error("refreshAccessToken: Token refresh failed. Status:", refreshResponse.status);
//         TokenService.removeRefreshToken();
//         TokenService.removeToken();
//         setAccessToken(null);
//         setUser(null);
//         return null;
//       }
//     } catch (refreshError) {
//       console.error("refreshAccessToken: Token refresh error:", refreshError);
//       TokenService.removeRefreshToken();
//       TokenService.removeToken();
//       setAccessToken(null);
//       setUser(null);
//       return null;
//     }
//   }, [API_BASE_URL]);

//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       setLoading(true);
//       try {
//         let initialAccessToken = TokenService.getToken();
//         const initialRefreshToken = TokenService.getRefreshToken();

//         if (!initialAccessToken && !initialRefreshToken) {
//           console.log("checkAuthStatus: No initial tokens found.");
//           setUser(null);
//           setAccessToken(null);
//           return;
//         }

//         if (!initialAccessToken && initialRefreshToken) {
//           initialAccessToken = await refreshAccessToken();
//           if (!initialAccessToken) {
//             console.log("checkAuthStatus: Could not refresh Access Token");
//             TokenService.removeRefreshToken();
//             TokenService.removeToken();
//             setUser(null);
//             setAccessToken(null);
//             return;
//           }
//         }

//         if (initialAccessToken) {
//           const userDataFetched = await fetchUserData(initialAccessToken);
//           if (userDataFetched)
//             //Check to make sure we have data
//             if (!userDataFetched) {
//               console.log("checkAuthStatus: Could not fetch user data with Access Token");
//               TokenService.removeRefreshToken();
//               TokenService.removeToken();
//               setUser(null);
//               setAccessToken(null);
//             }
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkAuthStatus();
//   }, [fetchUserData, refreshAccessToken]);

//   const login = async (email, password) => {
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/auth/login`,
//         { email, password },
//         { withCredentials: true }
//       );

//       if (response.status === 200) {
//         const { accessToken: newAccessToken, refreshToken } = response.data.tokens;
//         TokenService.setToken(newAccessToken);
//         TokenService.setRefreshToken(refreshToken);
//         setAccessToken(newAccessToken);

//         const userDataFetched = await fetchUserData(newAccessToken);

//         if (userDataFetched) {
//           toast.success("Login successful!");
//           if (user?.role === 'admin') {
//             navigate('/admin');
//           } else {
//             navigate('/dashboard');
//           }
//         } else {
//           TokenService.removeRefreshToken();
//           TokenService.removeToken();
//           setAccessToken(null);
//           setUser(null);
//           toast.error("Failed to fetch user details.");
//         }
//       } else {
//         toast.error("Login failed.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       TokenService.removeRefreshToken();
//       TokenService.removeToken();
//       setAccessToken(null);
//       setUser(null);
//       toast.error(error.response?.data?.message || "Login failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const logout = () => {
//     TokenService.removeRefreshToken();
//     TokenService.removeToken();
//     setAccessToken(null);
//     setUser(null);
//     navigate('/');
//   };

//   const contextValue = {
//     user,
//     setUser,
//     accessToken,
//     login,
//     logout,
//     loading,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);



// import React, {
//   createContext,
//   useState,
//   useEffect,
//   useContext,
//   useCallback,
// } from 'react';
// import axios from 'axios';
// import TokenService from '../utils/TokenService';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [accessToken, setAccessToken] = useState(null);
//   const navigate = useNavigate();

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   const fetchUserData = useCallback(
//       async (token) => {
//           if (!token) {
//               console.warn("fetchUserData: No token provided.");
//               return false;
//           }

//           try {
//               const headers = { Authorization: `Bearer ${token}` };
//               const response = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//               if (response.status === 200) {
//                   setUser(response.data);
//                   return true;
//               } else {
//                   console.error("fetchUserData: Error fetching user data. Status:", response.status);
//                   setUser(null);
//                   return false;
//               }
//           } catch (error) {
//               console.error("fetchUserData: Error fetching user data:", error);
//               setUser(null);
//               return false;
//           }
//       },
//       [API_BASE_URL]
//   );

//   const refreshAccessToken = useCallback(async () => {
//       const refreshToken = TokenService.getRefreshToken();

//       if (!refreshToken) {
//           console.warn("refreshAccessToken: No refresh token found.");
//           setAccessToken(null);
//           setUser(null);
//           return null;
//       }

//       try {
//           const refreshResponse = await axios.post(
//               `${API_BASE_URL}/auth/refresh-token`,
//               {},
//               { withCredentials: true }
//           );

//           if (refreshResponse.status === 200) {
//               const newAccessToken = refreshResponse.data.accessToken;
//               TokenService.setRefreshToken(refreshResponse.data.refreshToken);
//               setAccessToken(newAccessToken);
//               return newAccessToken;
//           } else {
//               console.error("refreshAccessToken: Token refresh failed. Status:", refreshResponse.status);
//               TokenService.removeRefreshToken();
//               TokenService.removeToken();
//               setAccessToken(null);
//               setUser(null);
//               return null;
//           }
//       } catch (refreshError) {
//           console.error("refreshAccessToken: Token refresh error:", refreshError);
//           TokenService.removeRefreshToken();
//           TokenService.removeToken();
//           setAccessToken(null);
//           setUser(null);
//           return null;
//       }
//   }, [API_BASE_URL]);

//   useEffect(() => {
//       const checkAuthStatus = async () => {
//           setLoading(true);
//           try {
//               let initialAccessToken = TokenService.getToken();
//               const initialRefreshToken = TokenService.getRefreshToken();

//               if (!initialAccessToken && !initialRefreshToken) {
//                   console.log("checkAuthStatus: No initial tokens found.");
//                   setUser(null);
//                   setAccessToken(null);
//                   return;
//               }

//               if (!initialAccessToken && initialRefreshToken) {
//                   initialAccessToken = await refreshAccessToken();
//                   if (!initialAccessToken) {
//                       console.log("checkAuthStatus: Could not refresh Access Token");
//                       TokenService.removeRefreshToken();
//                       TokenService.removeToken();
//                       setUser(null);
//                       setAccessToken(null);
//                       return;
//                   }
//               }

//               if (initialAccessToken) {
//                   const userDataFetched = await fetchUserData(initialAccessToken);
//                   if (userDataFetched)
//                   //Check to make sure we have data
//                   if (!userDataFetched) {
//                       console.log("checkAuthStatus: Could not fetch user data with Access Token");
//                       TokenService.removeRefreshToken();
//                       TokenService.removeToken();
//                       setUser(null);
//                       setAccessToken(null);
//                   }
//               }
//           } finally {
//               setLoading(false);
//           }
//       };

//       checkAuthStatus();
//   }, [fetchUserData, refreshAccessToken]);

//   const login = async (email, password) => {
//       setLoading(true);
//       try {
//           const response = await axios.post(
//               `${API_BASE_URL}/auth/login`,
//               { email, password },
//               { withCredentials: true }
//           );

//           if (response.status === 200) {
//               const { accessToken: newAccessToken, refreshToken } = response.data.tokens;
//               TokenService.setToken(newAccessToken);
//               TokenService.setRefreshToken(refreshToken);
//               setAccessToken(newAccessToken);

//               const userDataFetched = await fetchUserData(newAccessToken);

//               if (userDataFetched) {
//                   toast.success("Login successful!");
//                   if (response.data.user.role === 'admin') {
//                       navigate('/admin');
//                   } else {
//                       navigate('/dashboard');
//                   }
//               } else {
//                   TokenService.removeRefreshToken();
//                   TokenService.removeToken();
//                   setAccessToken(null);
//                   setUser(null);
//                   toast.error("Failed to fetch user details.");
//               }
//           } else {
//               toast.error("Login failed.");
//           }
//       } catch (error) {
//           console.error("Login error:", error);
//           TokenService.removeRefreshToken();
//           TokenService.removeToken();
//           setAccessToken(null);
//           setUser(null);
//           toast.error(error.response?.data?.message || "Login failed.");
//       } finally {
//           setLoading(false);
//       }
//   };

//   const logout = () => {
//       TokenService.removeRefreshToken();
//       TokenService.removeToken();
//       setAccessToken(null);
//       setUser(null);
//       navigate('/');
//   };

//   const contextValue = {
//       user,
//       setUser,
//       accessToken,
//       login,
//       logout,
//       loading,
//   };

//   return (
//       <AuthContext.Provider value={contextValue}>
//           {children}
//       </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);



// import React, {
//     createContext,
//     useState,
//     useEffect,
//     useContext,
//     useCallback,
//     useRef,
//   } from 'react';
//   import axios from 'axios';
//   import TokenService from '../utils/TokenService';
//   import { useNavigate } from 'react-router-dom';
//   import { toast } from 'react-toastify';
  
//   const AuthContext = createContext();
  
//   export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [accessToken, setAccessToken] = useState(null);
//     const navigate = useNavigate();
  
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     const refreshTimeoutId = useRef(null); // useRef to hold the timeout id
  
//     const refreshAccessToken = useCallback(async () => {
//       const refreshToken = TokenService.getRefreshToken();
  
//       if (!refreshToken) {
//         console.warn("refreshAccessToken: No refresh token found.");
//         setAccessToken(null);
//         setUser(null);
//         return null;
//       }
  
//       try {
//         const refreshResponse = await axios.post(
//           `${API_BASE_URL}/auth/refresh-token`,
//           {},
//           { withCredentials: true }
//         );
  
//         if (refreshResponse.status === 200) {
//           const newAccessToken = refreshResponse.data.accessToken;
//           TokenService.setToken(newAccessToken);
//           TokenService.setRefreshToken(refreshResponse.data.refreshToken);
  
//           setAccessToken(newAccessToken);
//           const payload = JSON.parse(atob(newAccessToken.split('.')[1])); // Decode JWT payload
//           scheduleRefresh(payload.exp - (Date.now() / 1000)); // Schedule refresh
//           return newAccessToken;
  
//         } else {
//           console.error("refreshAccessToken: Token refresh failed. Status:", refreshResponse.status);
//           TokenService.removeRefreshToken();
//           TokenService.removeToken();
//           setAccessToken(null);
//           setUser(null);
//           return null;
//         }
//       } catch (refreshError) {
//         console.error("refreshAccessToken: Token refresh error:", refreshError);
//         TokenService.removeRefreshToken();
//         TokenService.removeToken();
//         setAccessToken(null);
//         setUser(null);
//         return null;
//       }
//     }, [API_BASE_URL]);
  
//     const scheduleRefresh = useCallback((expiresIn) => {
//       if (refreshTimeoutId.current) {
//         clearTimeout(refreshTimeoutId.current);
//       }
  
//       const timeout = (expiresIn * 1000) - (5 * 60 * 1000); // Refresh 5 minutes before expiry
//       if (timeout > 0) {
//         refreshTimeoutId.current = setTimeout(async () => {
//           console.log('Attempting proactive token refresh...');
//           const newToken = await refreshAccessToken();
//           if (newToken) {
//             console.log('Proactive token refresh successful.');
//           } else {
//             console.warn('Proactive token refresh failed.');
//           }
//         }, timeout);
//       }
//     }, [refreshAccessToken]);
  
  
//     const fetchUserData = useCallback(
//       async (token) => {
//         if (!token) {
//           console.warn("fetchUserData: No token provided.");
//           return false;
//         }
  
//         try {
//           const headers = { Authorization: `Bearer ${token}` };
//           const response = await axios.get(`${API_BASE_URL}/auth/user`, { headers });
  
//           if (response.status === 200) {
//             setUser(response.data);
//             return true;
//           } else if (response.status === 401) {
//             console.warn("fetchUserData: Access token expired. Attempting refresh.");
//             const newToken = await refreshAccessToken();
//             if (newToken) {
//               console.log("fetchUserData: Token refreshed successfully. Retrying fetch.");
//               // Retry the fetch by updating accessToken state, which triggers re-render
//               setAccessToken(newToken);
//               return true; // Indicate success so the user state isn't cleared.
//             } else {
//               console.error("fetchUserData: Token refresh failed after 401.");
//               return false;
//             }
//           } else {
//             console.error("fetchUserData: Error fetching user data. Status:", response.status);
//             return false;
//           }
//         } catch (error) {
//           console.error("fetchUserData: Error fetching user data:", error);
//           return false;
//         }
//       },
//       [API_BASE_URL, refreshAccessToken, setAccessToken] // added setAccessToken to dependencies
//     );
  
//     useEffect(() => {
//       const checkAuthStatus = async () => {
//         setLoading(true);
//         try {
//           let currentAccessToken = TokenService.getToken();
//           const initialRefreshToken = TokenService.getRefreshToken();
  
//           if (!currentAccessToken && !initialRefreshToken) {
//             console.log("checkAuthStatus: No initial tokens found.");
//             setUser(null);
//             setAccessToken(null);
//             return;
//           }
  
//           if (!currentAccessToken && initialRefreshToken) {
//             currentAccessToken = await refreshAccessToken();
//             if (!currentAccessToken) {
//               console.log("checkAuthStatus: Could not refresh Access Token");
//               TokenService.removeRefreshToken();
//               TokenService.removeToken();
//               setUser(null);
//               setAccessToken(null);
//               return;
//             }
//           }
  
//           if (currentAccessToken) {
//             const userDataFetched = await fetchUserData(currentAccessToken);
//             if (userDataFetched) {
//               setAccessToken(currentAccessToken); // Update the accessToken state
//               const payload = JSON.parse(atob(currentAccessToken.split('.')[1]));
//               scheduleRefresh(payload.exp - (Date.now() / 1000));
//             }
//             //Check to make sure we have data
//             if (!userDataFetched) {
//               console.log("checkAuthStatus: Could not fetch user data with Access Token");
//               TokenService.removeRefreshToken();
//               TokenService.removeToken();
//               setUser(null);
//               setAccessToken(null);
//             }
//           }
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       checkAuthStatus();
  
//       return () => {
//         if (refreshTimeoutId.current) {
//           clearTimeout(refreshTimeoutId.current);
//         }
//       };
//     }, [fetchUserData, refreshAccessToken, scheduleRefresh]);  //Removed accessToken from here, Added it to fetchUserData dependency to avoid a cyclic dependency
  
//     const login = async (email, password) => {
//       setLoading(true);
//       try {
//         const response = await axios.post(
//           `${API_BASE_URL}/auth/login`,
//           { email, password },
//           { withCredentials: true }
//         );
  
//         if (response.status === 200) {
//           const { accessToken: newAccessToken } = response.data.tokens;
//           TokenService.setToken(newAccessToken);
//           TokenService.setRefreshToken(response.data.refreshToken);
//           setAccessToken(newAccessToken);
  
//           const userDataFetched = await fetchUserData(newAccessToken);
  
//           if (userDataFetched) {
//             toast.success("Login successful!");
//             const payload = JSON.parse(atob(newAccessToken.split('.')[1]));
//             scheduleRefresh(payload.exp - (Date.now() / 1000));
//             if (response.data.user.role === 'admin') {
//               navigate('/admin');
//             } else {
//               navigate('/dashboard');
//             }
//           } else {
//             TokenService.removeRefreshToken();
//             TokenService.removeToken();
//             setAccessToken(null);
//             setUser(null);
//             toast.error("Failed to fetch user details.");
//           }
//         } else {
//           toast.error("Login failed.");
//         }
//       } catch (error) {
//         console.error("Login error:", error);
//         TokenService.removeRefreshToken();
//         TokenService.removeToken();
//         setAccessToken(null);
//         setUser(null);
//         toast.error(error.response?.data?.message || "Login failed.");
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     const logout = () => {
//       TokenService.removeRefreshToken();
//       TokenService.removeToken();
//       setAccessToken(null);
//       setUser(null);
//       navigate('/');
//     };
  
//     const contextValue = {
//       user,
//       setUser,
//       accessToken,
//       login,
//       logout,
//       loading,
//     };
  
//     return (
//       <AuthContext.Provider value={contextValue}>
//         {children}
//       </AuthContext.Provider>
//     );
//   };
  
//   export const useAuth = () => useContext(AuthContext);


import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from 'react';
import axios from 'axios';
import TokenService from '../utils/TokenService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState(null);
  const navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const refreshTimeoutId = useRef(null); // useRef to hold the timeout id
  const isMounted = useRef(true);

  const refreshAccessToken = useCallback(async () => {
    const refreshToken = TokenService.getRefreshToken();

    if (!refreshToken) {
      console.warn("refreshAccessToken: No refresh token found.");
      setAccessToken(null);
      setUser(null);
      return null;
    }

    try {
      const refreshResponse = await axios.post(
        `${API_BASE_URL}/auth/refresh-token`,
        {},
        { withCredentials: true }
      );

      if (refreshResponse.status === 200) {
        const newAccessToken = refreshResponse.data.accessToken;
        TokenService.setToken(newAccessToken);
        TokenService.setRefreshToken(refreshResponse.data.refreshToken);

        setAccessToken(newAccessToken);
        const payload = JSON.parse(atob(newAccessToken.split('.')[1])); // Decode JWT payload

        // Move Schedule refresh inside
        const scheduleRefresh = (expiresIn) => {
          if (refreshTimeoutId.current) {
            clearTimeout(refreshTimeoutId.current);
          }

          const timeout = (expiresIn * 1000) - (5 * 60 * 1000); // Refresh 5 minutes before expiry
          if (timeout > 0) {
            refreshTimeoutId.current = setTimeout(async () => {
              console.log('Attempting proactive token refresh...');
              const newToken = await refreshAccessToken();
              if (newToken) {
                console.log('Proactive token refresh successful.');
              } else {
                console.warn('Proactive token refresh failed.');
              }
            }, timeout);
          }
        };

        scheduleRefresh(payload.exp - (Date.now() / 1000)); // Schedule refresh
        return newAccessToken;

      } else {
        console.error("refreshAccessToken: Token refresh failed. Status:", refreshResponse.status);
        TokenService.removeRefreshToken();
        TokenService.removeToken();
        setAccessToken(null);
        setUser(null);
        return null;
      }
    } catch (refreshError) {
      console.error("refreshAccessToken: Token refresh error:", refreshError);
      TokenService.removeRefreshToken();
      TokenService.removeToken();
      setAccessToken(null);
      setUser(null);
      return null;
    }
  }, [API_BASE_URL]);



  const fetchUserData = useCallback(
    async (token) => {
      if (!token) {
        console.warn("fetchUserData: No token provided.");
        return false;
      }

      try {
        const headers = { Authorization: `Bearer ${token}` };
        const response = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

        if (response.status === 200) {
          if (isMounted.current) {
            setUser(response.data);
            return true;
          }
        } else if (response.status === 401) {
          console.warn("fetchUserData: Access token expired. Attempting refresh.");
          const newToken = await refreshAccessToken();
          if (newToken) {
            console.log("fetchUserData: Token refreshed successfully. Retrying fetch.");
            // Retry the fetch by updating accessToken state, which triggers re-render
            if (isMounted.current) {
              setAccessToken(newToken);
            }
            return true; // Indicate success so the user state isn't cleared.
          } else {
            console.error("fetchUserData: Token refresh failed after 401.");
            return false;
          }
        } else {
          console.error("fetchUserData: Error fetching user data. Status:", response.status);
          return false;
        }
      } catch (error) {
        console.error("fetchUserData: Error fetching user data:", error);
        return false;
      }
    },
    [API_BASE_URL, refreshAccessToken]
  );

  useEffect(() => {
    const checkAuthStatus = async () => {
      setLoading(true);
      try {
        let currentAccessToken = TokenService.getToken();
        const initialRefreshToken = TokenService.getRefreshToken();

        if (!currentAccessToken && !initialRefreshToken) {
          console.log("checkAuthStatus: No initial tokens found.");
          setUser(null);
          setAccessToken(null);
          return;
        }

        if (!currentAccessToken && initialRefreshToken) {
          currentAccessToken = await refreshAccessToken();
          if (!currentAccessToken) {
            console.log("checkAuthStatus: Could not refresh Access Token");
            TokenService.removeRefreshToken();
            TokenService.removeToken();
            setUser(null);
            setAccessToken(null);
            return;
          }
        }

        if (currentAccessToken) {
          const userDataFetched = await fetchUserData(currentAccessToken);
          if (userDataFetched) {
            setAccessToken(currentAccessToken); // Update the accessToken state

          }
          //Check to make sure we have data
          if (!userDataFetched) {
            console.log("checkAuthStatus: Could not fetch user data with Access Token");
            TokenService.removeRefreshToken();
            TokenService.removeToken();
            setUser(null);
            setAccessToken(null);
          }
        }
      } catch (error) {
        console.error("checkAuthStatus: Global Error", error);
        TokenService.removeRefreshToken();
        TokenService.removeToken();
        setUser(null);
        setAccessToken(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();

    return () => {
      isMounted.current = false;
      if (refreshTimeoutId.current) {
        clearTimeout(refreshTimeoutId.current);
      }
    };
  }, [fetchUserData, refreshAccessToken]);  //Removed accessToken from here, Added it to fetchUserData dependency to avoid a cyclic dependency

  const login = useCallback(async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        const { accessToken: newAccessToken } = response.data.tokens;
        TokenService.setToken(newAccessToken);
        TokenService.setRefreshToken(response.data.refreshToken);
        setAccessToken(newAccessToken);

        const userDataFetched = await fetchUserData(newAccessToken);

        // Move Schedule refresh inside
        const scheduleRefresh = (expiresIn) => {
          if (refreshTimeoutId.current) {
            clearTimeout(refreshTimeoutId.current);
          }

          const timeout = (expiresIn * 1000) - (5 * 60 * 1000); // Refresh 5 minutes before expiry
          if (timeout > 0) {
            refreshTimeoutId.current = setTimeout(async () => {
              console.log('Attempting proactive token refresh...');
              const newToken = await refreshAccessToken();
              if (newToken) {
                console.log('Proactive token refresh successful.');
              } else {
                console.warn('Proactive token refresh failed.');
              }
            }, timeout);
          }
        };

        if (userDataFetched) {
          toast.success("Login successful!");
          const payload = JSON.parse(atob(newAccessToken.split('.')[1]));
          scheduleRefresh(payload.exp - (Date.now() / 1000));
          navigate(response.data.user.role === 'admin' ? '/admin' : '/dashboard');

        } else {
          TokenService.removeRefreshToken();
          TokenService.removeToken();
          setAccessToken(null);
          setUser(null);
          toast.error("Failed to fetch user details.");
        }
      } else {
        toast.error("Login failed.");
      }
    } catch (error) {
      console.error("Login error:", error);
      TokenService.removeRefreshToken();
      TokenService.removeToken();
      setAccessToken(null);
      setUser(null);
      toast.error(error.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  }, [API_BASE_URL, fetchUserData, navigate, refreshAccessToken]);

  const logout = useCallback(() => {
    TokenService.removeRefreshToken();
    TokenService.removeToken();
    setAccessToken(null);
    setUser(null);
    navigate('/');
  }, [navigate]);

  const contextValue = {
    user,
    setUser,
    accessToken,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


// import React, {
//   createContext,
//   useState,
//   useEffect,
//   useContext,
//   useCallback,
//   useRef,
// } from 'react';
// import axios from 'axios';
// import TokenService from '../utils/TokenService';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const AuthContext = createContext();

// // Create axios instance with keepAlive agent
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// let axiosInstance;

// if (import.meta.env.VITE_NODE_ENV === 'development') {
//   const http = await import('http');
//   const https = await import('https');
//   axiosInstance = axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     httpAgent: new http.Agent({ keepAlive: true }),
//     httpsAgent: new https.Agent({ keepAlive: true }),
//   });
// } else {
//   axiosInstance = axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// }

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [accessToken, setAccessToken] = useState(null);
//   const navigate = useNavigate();

//   const refreshTimeoutId = useRef(null);
//   const isMounted = useRef(true);

//   const refreshAccessToken = useCallback(async () => {
//     const refreshToken = TokenService.getRefreshToken();

//     if (!refreshToken) {
//       console.warn("refreshAccessToken: No refresh token found.");
//       setAccessToken(null);
//       setUser(null);
//       return null;
//     }

//     try {
//       const refreshResponse = await axiosInstance.post(  // Use axiosInstance here
//         `/auth/refresh-token`,  // Relative path (baseURL is set in axiosInstance)
//         {},
//         { withCredentials: true }
//       );

//       if (refreshResponse.status === 200) {
//         const newAccessToken = refreshResponse.data.accessToken;
//         TokenService.setToken(newAccessToken);
//         TokenService.setRefreshToken(refreshResponse.data.refreshToken);

//         setAccessToken(newAccessToken);
//         const payload = JSON.parse(atob(newAccessToken.split('.')[1]));

//         const scheduleRefresh = (expiresIn) => {
//           if (refreshTimeoutId.current) {
//             clearTimeout(refreshTimeoutId.current);
//           }

//           const timeout = (expiresIn * 1000) - (5 * 60 * 1000);
//           if (timeout > 0) {
//             refreshTimeoutId.current = setTimeout(async () => {
//               console.log('Attempting proactive token refresh...');
//               const newToken = await refreshAccessToken();
//               if (newToken) {
//                 console.log('Proactive token refresh successful.');
//               } else {
//                 console.warn('Proactive token refresh failed.');
//               }
//             }, timeout);
//           }
//         };

//         scheduleRefresh(payload.exp - (Date.now() / 1000));
//         return newAccessToken;

//       } else {
//         console.error("refreshAccessToken: Token refresh failed. Status:", refreshResponse.status);
//         TokenService.removeRefreshToken();
//         TokenService.removeToken();
//         setAccessToken(null);
//         setUser(null);
//         return null;
//       }
//     } catch (refreshError) {
//       console.error("refreshAccessToken: Token refresh error:", refreshError);
//       TokenService.removeRefreshToken();
//       TokenService.removeToken();
//       setAccessToken(null);
//       setUser(null);
//       return null;
//     }
//   }, []); // Removed API_BASE_URL as it is already in axiosInstance



//   const fetchUserData = useCallback(
//     async (token) => {
//       if (!token) {
//         console.warn("fetchUserData: No token provided.");
//         return false;
//       }

//       try {
//         const headers = { Authorization: `Bearer ${token}` };
//         const response = await axiosInstance.get(`/auth/user`, { headers });  // Use axiosInstance

//         if (response.status === 200) {
//           if (isMounted.current) {
//             setUser(response.data);
//             return true;
//           }
//         } else if (response.status === 401) {
//           console.warn("fetchUserData: Access token expired. Attempting refresh.");
//           const newToken = await refreshAccessToken();
//           if (newToken) {
//             console.log("fetchUserData: Token refreshed successfully. Retrying fetch.");
//             if (isMounted.current) {
//               setAccessToken(newToken);
//             }
//             return true;
//           } else {
//             console.error("fetchUserData: Token refresh failed after 401.");
//             return false;
//           }
//         } else {
//           console.error("fetchUserData: Error fetching user data. Status:", response.status);
//           return false;
//         }
//       } catch (error) {
//         console.error("fetchUserData: Error fetching user data:", error);
//         return false;
//       }
//     },
//     [refreshAccessToken]  // Removed API_BASE_URL
//   );

//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       setLoading(true);
//       try {
//         let currentAccessToken = TokenService.getToken();
//         const initialRefreshToken = TokenService.getRefreshToken();

//         if (!currentAccessToken && !initialRefreshToken) {
//           console.log("checkAuthStatus: No initial tokens found.");
//           setUser(null);
//           setAccessToken(null);
//           return;
//         }

//         if (!currentAccessToken && initialRefreshToken) {
//           currentAccessToken = await refreshAccessToken();
//           if (!currentAccessToken) {
//             console.log("checkAuthStatus: Could not refresh Access Token");
//             TokenService.removeRefreshToken();
//             TokenService.removeToken();
//             setUser(null);
//             setAccessToken(null);
//             return;
//           }
//         }

//         if (currentAccessToken) {
//           const userDataFetched = await fetchUserData(currentAccessToken);
//           if (userDataFetched) {
//             setAccessToken(currentAccessToken);
//           }
//           if (!userDataFetched) {
//             console.log("checkAuthStatus: Could not fetch user data with Access Token");
//             TokenService.removeRefreshToken();
//             TokenService.removeToken();
//             setUser(null);
//             setAccessToken(null);
//           }
//         }
//       } catch (error) {
//         console.error("checkAuthStatus: Global Error", error);
//         TokenService.removeRefreshToken();
//         TokenService.removeToken();
//         setUser(null);
//         setAccessToken(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkAuthStatus();

//     return () => {
//       isMounted.current = false;
//       if (refreshTimeoutId.current) {
//         clearTimeout(refreshTimeoutId.current);
//       }
//     };
//   }, [fetchUserData, refreshAccessToken]);

//   const login = useCallback(async (email, password) => {
//     setLoading(true);
//     try {
//       const response = await axiosInstance.post(  // Use axiosInstance
//         `/auth/login`,
//         { email, password },
//         { withCredentials: true }
//       );

//       if (response.status === 200) {
//         const { accessToken: newAccessToken } = response.data.tokens;
//         TokenService.setToken(newAccessToken);
//         TokenService.setRefreshToken(response.data.refreshToken);
//         setAccessToken(newAccessToken);

//         const userDataFetched = await fetchUserData(newAccessToken);

//         const scheduleRefresh = (expiresIn) => {
//           if (refreshTimeoutId.current) {
//             clearTimeout(refreshTimeoutId.current);
//           }

//           const timeout = (expiresIn * 1000) - (5 * 60 * 1000);
//           if (timeout > 0) {
//             refreshTimeoutId.current = setTimeout(async () => {
//               console.log('Attempting proactive token refresh...');
//               const newToken = await refreshAccessToken();
//               if (newToken) {
//                 console.log('Proactive token refresh successful.');
//               } else {
//                 console.warn('Proactive token refresh failed.');
//               }
//             }, timeout);
//           }
//         };

//         if (userDataFetched) {
//           toast.success("Login successful!");
//           const payload = JSON.parse(atob(newAccessToken.split('.')[1]));
//           scheduleRefresh(payload.exp - (Date.now() / 1000));
//           navigate(response.data.user.role === 'admin' ? '/admin' : '/dashboard');

//         } else {
//           TokenService.removeRefreshToken();
//           TokenService.removeToken();
//           setAccessToken(null);
//           setUser(null);
//           toast.error("Failed to fetch user details.");
//         }
//       } else {
//         toast.error("Login failed.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       TokenService.removeRefreshToken();
//       TokenService.removeToken();
//       setAccessToken(null);
//       setUser(null);
//       toast.error(error.response?.data?.message || "Login failed.");
//     } finally {
//       setLoading(false);
//     }
//   }, [fetchUserData, navigate, refreshAccessToken]); //Removed API_BASE_URL

//   const logout = useCallback(() => {
//     TokenService.removeRefreshToken();
//     TokenService.removeToken();
//     setAccessToken(null);
//     setUser(null);
//     navigate('/');
//   }, [navigate]);

//   const contextValue = {
//     user,
//     setUser,
//     accessToken,
//     login,
//     logout,
//     loading,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);