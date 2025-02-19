// // // AuthContext.js
// // import React, { createContext, useState, useEffect, useContext, useCallback, useMemo } from "react";
// // import axios from "axios";
// // import TokenService from "../utils/TokenService"; // Import the TokenService

// // const AuthContext = createContext();

// // const AuthProvider = ({ children }) => {
// //     const [user, setUser] = useState(null);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null); // Add error state
// //     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// //     const fetchUser = useCallback(async () => {
// //         const token = TokenService.getToken();

// //         if (!token) {
// //             setLoading(false);
// //             return;
// //         }

// //         try {
// //              if (TokenService.isTokenExpired(token)){
// //               TokenService.clearToken();
// //               setUser(null)
// //               setLoading(false);
// //               return;
// //             }

// //             const response = await axios.get(`${API_BASE_URL}/auth/user`, {
// //                 headers: { Authorization: `Bearer ${token}` },
// //             });

// //             if (response.status === 200) {
// //               setUser(response.data);
// //               setError(null); // Clear any previous errors
// //             } else {
// //               setUser(null);
// //               setError("Failed to fetch user data."); // Set an error message
// //               TokenService.clearToken(); // Clear token on error
// //             }
// //         } catch (err) {
// //             setUser(null);
// //             setError("An error occurred while fetching user data.");
// //             TokenService.clearToken();
// //         } finally {
// //             setLoading(false);
// //         }
// //     }, [API_BASE_URL]);


// //      useEffect(() => {
// //       fetchUser();
// //     }, [fetchUser]);



// //     const login = useCallback((userData, token) => {
// //         TokenService.setToken(token);
// //         setUser(userData);
// //         setError(null);
// //     }, []);


// //     const logout = useCallback(() => {
// //         TokenService.clearToken();
// //         setUser(null);
// //     }, []);

// //      const value = useMemo(() => ({
// //         user,
// //         loading,
// //         error,
// //         login,
// //         logout,
// //     }), [user, loading, error, login, logout]);

// //     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// // };

// // const useAuth = () => {
// //     return useContext(AuthContext);
// // };

// // export { AuthProvider, useAuth };





// // AuthContext.js
// import React, {
//     createContext,
//     useState,
//     useEffect,
//     useContext,
//     useCallback,
//     useMemo,
//   } from "react";
//   import axios from "axios";
//   import TokenService from "../utils/TokenService"; // Import the TokenService
  
//   const AuthContext = createContext();
  
//   const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(() => {
//       // Load from local storage or null
//       const storedUser = localStorage.getItem("user");
//       return storedUser ? JSON.parse(storedUser) : null;
//     });
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    
  
//     const fetchUser = useCallback(async () => {
//       const token = TokenService.getToken();
  
//       if (!token) {
//         setLoading(false);
//         return;
//       }
  
//       try {
//           if (TokenService.isTokenExpired(token)){
//                 TokenService.clearToken();
//                 localStorage.removeItem('user')
//                 setUser(null)
//                 setLoading(false);
//                 return;
//               }
  
//         const response = await axios.get(`${API_BASE_URL}/auth/user`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
  
//         if (response.status === 200) {
//              localStorage.setItem("user", JSON.stringify(response.data)); // Update local storage
//           setUser(response.data);
//           setError(null);
//         } else {
//           setUser(null);
//           setError("Failed to fetch user data.");
//           TokenService.clearToken();
//            localStorage.removeItem('user')
//         }
//       } catch (err) {
//         setUser(null);
//         setError("An error occurred while fetching user data.");
//           TokenService.clearToken();
//           localStorage.removeItem('user')
//       } finally {
//         setLoading(false);
//       }
//     }, [API_BASE_URL]);
  
//     useEffect(() => {
//       fetchUser();
//     }, [fetchUser]);
      
  
//     const login = useCallback((userData, token) => {
//       TokenService.setToken(token);
//         localStorage.setItem("user", JSON.stringify(userData)); // Update local storage
  
//       setUser(userData);
//       setError(null);
//     }, []);
  
//     const logout = useCallback(() => {
//       TokenService.clearToken();
//       setUser(null);
//          localStorage.removeItem('user')
//     }, []);
  
  
//     const value = useMemo(
//       () => ({
//         user,
//         loading,
//         error,
//         login,
//         logout,
//       }),
//       [user, loading, error, login, logout]
//     );
  
//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
//   };
  
//   const useAuth = () => {
//     return useContext(AuthContext);
//   };
  
//   export { AuthProvider, useAuth };




// // AuthContext.js
// import React, {
//   createContext,
//   useState,
//   useEffect,
//   useContext,
//   useCallback,
//   useMemo,
// } from "react";
// import axios from "axios";
// import TokenService from "../utils/TokenService"; // Import the TokenService

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     // Load from local storage or null
//     const storedUser = localStorage.getItem("user");
//     return storedUser ? JSON.parse(storedUser) : null;
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  

//   const fetchUser = useCallback(async () => {
//     const token = TokenService.getToken();

//     if (!token) {
//       setLoading(false);
//       return;
//     }

//     try {
//         if (TokenService.isTokenExpired(token)){
//               TokenService.removeToken();
//               localStorage.removeItem('user')
//               setUser(null)
//               setLoading(false);
//               return;
//             }

//       const response = await axios.get(`${API_BASE_URL}/auth/user`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (response.status === 200) {
//            localStorage.setItem("user", JSON.stringify(response.data)); // Update local storage
//         setUser(response.data);
//         setError(null);
//       } else {
//         setUser(null);
//         setError("Failed to fetch user data.");
//         TokenService.removeToken();
//          localStorage.removeItem('user')
//       }
//     } catch (err) {
//       setUser(null);
//       setError("An error occurred while fetching user data.");
//         TokenService.removeToken();
//         localStorage.removeItem('user')
//     } finally {
//       setLoading(false);
//     }
//   }, [API_BASE_URL]);

//   useEffect(() => {
//     fetchUser();
//   }, [fetchUser]);
    

//   const login = useCallback((userData, token) => {
//     TokenService.setToken(token);
//       localStorage.setItem("user", JSON.stringify(userData)); // Update local storage

//     setUser(userData);
//     setError(null);
//   }, []);

//   const logout = useCallback(() => {
//     TokenService.removeToken();
//     setUser(null);
//        localStorage.removeItem('user')
//   }, []);


//   const value = useMemo(
//     () => ({
//       user,
//       loading,
//       error,
//       login,
//       logout,
//     }),
//     [user, loading, error, login, logout]
//   );

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// const useAuth = () => {
//   return useContext(AuthContext);
// };

// export { AuthProvider, useAuth };




// // AuthContext.js
// import React, {
//   createContext,
//   useState,
//   useEffect,
//   useContext,
//   useCallback,
//   useMemo,
// } from "react";
// import axios from "axios";
// import TokenService from "../utils/TokenService"; // Import the TokenService
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     // Load from local storage or null
//     const storedUser = localStorage.getItem("user");
//     return storedUser ? JSON.parse(storedUser) : null;
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   const navigate = useNavigate(); // Initialize useNavigate

//   const fetchUser = useCallback(async () => {
//     const token = TokenService.getToken();

//     if (!token) {
//       setLoading(false);
//       return;
//     }

//     try {
//       if (TokenService.isTokenExpired(token)) {
//         TokenService.removeToken();
//         localStorage.removeItem('user')
//         setUser(null)
//         setLoading(false);
//         return;
//       }

//       const response = await axios.get(`${API_BASE_URL}/auth/user`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (response.status === 200) {
//         localStorage.setItem("user", JSON.stringify(response.data)); // Update local storage
//         setUser(response.data);
//         setError(null);
//       } else {
//         setUser(null);
//         setError("Failed to fetch user data.");
//         TokenService.removeToken();
//         localStorage.removeItem('user')
//       }
//     } catch (err) {
//       setUser(null);
//       setError("An error occurred while fetching user data.");
//       TokenService.removeToken();
//       localStorage.removeItem('user')
//     } finally {
//       setLoading(false);
//     }
//   }, [API_BASE_URL]);

//   useEffect(() => {
//     fetchUser();
//   }, [fetchUser]);


//   const login = useCallback((userData, token) => {
//     TokenService.setToken(token);
//     localStorage.setItem("user", JSON.stringify(userData)); // Update local storage

//     setUser(userData);
//     setError(null);
//   }, []);

//   const logout = useCallback(() => {
//     TokenService.removeToken();
//     setUser(null);
//     localStorage.removeItem('user');
//     navigate('/'); // Redirect to the home page after logout
//   }, [navigate]);


//   const value = useMemo(
//     () => ({
//       user,
//       loading,
//       error,
//       login,
//       logout,
//     }),
//     [user, loading, error, login, logout]
//   );

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// const useAuth = () => {
//   return useContext(AuthContext);
// };

// export { AuthProvider, useAuth };











// // AuthContextWeb.jsx (Modified)
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
//             setLoading(true);
//             const accessToken = TokenService.getToken();
//             const refreshToken = TokenService.getRefreshToken();

//             if (!accessToken && !refreshToken) {
//                 setLoading(false);
//                 return;
//             }

//             if (accessToken) {
//                 try {
//                     const headers = { Authorization: `Bearer ${accessToken}` };
//                     const response = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//                     if (response.status === 200) {
//                         setUser(response.data);
//                         setLoading(false);
//                         return;
//                     }
//                 } catch (error) {
//                     console.error("Error fetching user data:", error);
//                 }
//             }

//             if (refreshToken) {
//                 try {
//                     const refreshResponse = await axios.post(`${API_BASE_URL}/auth/refresh-token`, {}, {
//                         withCredentials: true
//                     });

//                     if (refreshResponse.status === 200) {
//                         TokenService.setToken(refreshResponse.data.accessToken);
//                         const headers = { Authorization: `Bearer ${refreshResponse.data.accessToken}` };
//                         const userResponse = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//                         if (userResponse.status === 200) {
//                             setUser(userResponse.data);
//                         } else {
//                             TokenService.removeToken();
//                             TokenService.removeRefreshToken();
//                             setUser(null);
//                         }
//                     } else {
//                         TokenService.removeToken();
//                         TokenService.removeRefreshToken();
//                         setUser(null);
//                     }
//                 } catch (refreshError) {
//                     console.error("Token refresh error:", refreshError);
//                     TokenService.removeToken();
//                     TokenService.removeRefreshToken();
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
//                 TokenService.setRefreshToken(response.data.refreshToken);

//                 // Fetch user data after login to determine the role
//                 const headers = { Authorization: `Bearer ${response.data.tokens.accessToken}` };
//                 const userResponse = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//                 if (userResponse.status === 200) {
//                     setUser(userResponse.data);

//                     // Redirect based on role
//                     if (userResponse.data.role === 'admin') {
//                         navigate('/admin');
//                     } else {
//                         navigate('/dashboard');
//                     }
//                     toast.success("Login successful!");
//                 } else {
//                     TokenService.removeToken();
//                     TokenService.removeRefreshToken();
//                     setUser(null);
//                     toast.error("Failed to fetch user details.");
//                 }
//             } else {
//                 toast.error("Login failed.");
//             }
//         } catch (error) {
//             console.error("Login error:", error);
//             TokenService.removeToken();
//             TokenService.removeRefreshToken();
//             setUser(null);
//             toast.error(error.response?.data?.message || "Login failed.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const logout = () => {
//         TokenService.removeToken();
//         TokenService.removeRefreshToken();
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






// // AuthContextWeb.jsx (Modified)
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
//       setLoading(true);
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
//             setLoading(false);
//             return;
//           }
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//           // Token might be invalid, try refreshing
//           if (refreshToken) {
//             await refreshTokenAndSetUser(refreshToken);
//           } else {
//             TokenService.removeToken();
//             TokenService.removeRefreshToken();
//             setUser(null);
//             setLoading(false);
//           }
//           return; // Important: exit early after handling error or refresh attempt
//         }
//       }

//       if (refreshToken) {
//         await refreshTokenAndSetUser(refreshToken);
//       }

//       setLoading(false);
//     };

//     const refreshTokenAndSetUser = async (refreshToken) => {
//       try {
//         const refreshResponse = await axios.post(`${API_BASE_URL}/auth/refresh-token`, {}, {
//           withCredentials: true
//         });

//         if (refreshResponse.status === 200) {
//           TokenService.setToken(refreshResponse.data.accessToken);
//           TokenService.setRefreshToken(refreshResponse.data.refreshToken);

//           const headers = { Authorization: `Bearer ${refreshResponse.data.accessToken}` };
//           const userResponse = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//           if (userResponse.status === 200) {
//             setUser(userResponse.data);
//           } else {
//             TokenService.removeToken();
//             TokenService.removeRefreshToken();
//             setUser(null);
//           }
//         } else {
//           TokenService.removeToken();
//           TokenService.removeRefreshToken();
//           setUser(null);
//         }
//       } catch (refreshError) {
//         console.error("Token refresh error:", refreshError);
//         TokenService.removeToken();
//         TokenService.removeRefreshToken();
//         setUser(null);
//       }
//     };


//     checkAuthStatus();
//   }, [API_BASE_URL, navigate]);


//   const login = async (email, password) => {
//     setLoading(true); // Set loading to true at the start of the login process
//     try {
//       const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password }, { withCredentials: true });
//       if (response.status === 200) {
//         TokenService.setToken(response.data.tokens.accessToken);
//         TokenService.setRefreshToken(response.data.refreshToken);

//         // Fetch user data immediately after successful login
//         const headers = { Authorization: `Bearer ${response.data.tokens.accessToken}` };
//         const userResponse = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//         if (userResponse.status === 200) {
//           setUser(userResponse.data);
//           const userRole = userResponse.data.role;

//           if (userRole === 'admin') {
//             navigate('/admin');
//           } else {
//             navigate('/dashboard');
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
//       {children} {/*  Remove the loading check here. Let components handle loading. */}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);






// // AuthContextWeb.jsx (Modified)
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

//   // Function to fetch user data
//   const fetchUserData = async (accessToken) => {
//     try {
//       const headers = { Authorization: `Bearer ${accessToken}` };
//       const response = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//       if (response.status === 200) {
//         setUser(response.data);
//         return true;  // Indicate success
//       } else {
//         TokenService.removeToken();
//         TokenService.removeRefreshToken();
//         setUser(null);
//         return false;  // Indicate failure
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       TokenService.removeToken();
//       TokenService.removeRefreshToken();
//       setUser(null);
//       return false;  // Indicate failure
//     }
//   };


//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       setLoading(true);
//       const accessToken = TokenService.getToken();
//       const refreshToken = TokenService.getRefreshToken();

//       if (!accessToken && !refreshToken) {
//         setLoading(false);
//         return;
//       }

//       let userDataFetched = false;

//       if (accessToken) {
//         userDataFetched = await fetchUserData(accessToken);
//       }

//       if (!userDataFetched && refreshToken) {
//         try {
//           const refreshResponse = await axios.post(`${API_BASE_URL}/auth/refresh-token`, {}, {
//             withCredentials: true
//           });

//           if (refreshResponse.status === 200) {
//             TokenService.setToken(refreshResponse.data.accessToken);
//             TokenService.setRefreshToken(refreshResponse.data.refreshToken);
//             userDataFetched = await fetchUserData(refreshResponse.data.accessToken);
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

//       setLoading(false);
//     };

//     checkAuthStatus();

//     const storageChangeListener = async (event) => {
//       if (event.key === 'accessToken' || event.key === 'refreshToken') {
//         console.log("Storage event detected.  Refreshing auth status.");
//         await checkAuthStatus();
//       }
//     };


//     window.addEventListener('storage', storageChangeListener);

//     return () => {
//       window.removeEventListener('storage', storageChangeListener);
//     };

//   }, [API_BASE_URL, navigate]);


//   const login = async (email, password) => {
//     setLoading(true); // Set loading to true at the start of the login process
//     try {
//       const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password }, { withCredentials: true });
//       if (response.status === 200) {
//         TokenService.setToken(response.data.tokens.accessToken);
//         TokenService.setRefreshToken(response.data.refreshToken);

//         // Fetch user data immediately after successful login
//         const userDataFetched = await fetchUserData(response.data.tokens.accessToken);

//         if (userDataFetched) {
//           const userRole = user.role;

//           if (userRole === 'admin') {
//             navigate('/admin');
//           } else {
//             navigate('/dashboard');
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
//       {children} {/*  Remove the loading check here. Let components handle loading. */}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


// // AuthContextWeb.jsx
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

//     const fetchUserData = async (accessToken) => {
//         try {
//             const headers = { Authorization: `Bearer ${accessToken}` };
//             const response = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//             if (response.status === 200) {
//                 setUser(response.data);
//                 return true;
//             } else {
//                 TokenService.removeToken();
//                 TokenService.removeRefreshToken();
//                 setUser(null);
//                 return false;
//             }
//         } catch (error) {
//             console.error("Error fetching user data:", error);
//             TokenService.removeToken();
//             TokenService.removeRefreshToken();
//             setUser(null);
//             return false;
//         }
//     };

//     useEffect(() => {
//         const checkAuthStatus = async () => {
//             setLoading(true);
//             try {
//                 const accessToken = TokenService.getToken();
//                 const refreshToken = TokenService.getRefreshToken();

//                 if (!accessToken && !refreshToken) {
//                     setUser(null); // Ensure user is null if no tokens
//                     return;
//                 }

//                 let accessTokenValid = false;

//                 if (accessToken) {
//                     accessTokenValid = await fetchUserData(accessToken);
//                 }


//                 if (!accessTokenValid && refreshToken) {
//                     try {
//                         const refreshResponse = await axios.post(
//                             `${API_BASE_URL}/auth/refresh-token`,
//                             {},
//                             { withCredentials: true }
//                         );

//                         if (refreshResponse.status === 200) {
//                             TokenService.setToken(refreshResponse.data.accessToken);
//                             TokenService.setRefreshToken(refreshResponse.data.refreshToken);
//                             const userDataFetched = await fetchUserData(refreshResponse.data.accessToken);

//                             if (!userDataFetched) {
//                                 TokenService.removeToken();
//                                 TokenService.removeRefreshToken();
//                                 setUser(null);
//                             }

//                         } else {
//                             TokenService.removeToken();
//                             TokenService.removeRefreshToken();
//                             setUser(null);
//                         }
//                     } catch (refreshError) {
//                         console.error("Token refresh error:", refreshError);
//                         TokenService.removeToken();
//                         TokenService.removeRefreshToken();
//                         setUser(null);
//                     }
//                 }
//             } finally {
//                 setLoading(false);
//             }
//         };

//         checkAuthStatus();

//         const storageChangeListener = async (event) => {
//             if (event.key === 'accessToken' || event.key === 'refreshToken') {
//                 console.log("Storage event detected. Refreshing auth status.");
//                 await checkAuthStatus();
//             }
//         };

//         window.addEventListener('storage', storageChangeListener);

//         return () => {
//             window.removeEventListener('storage', storageChangeListener);
//         };
//     }, [API_BASE_URL, navigate]);


//     const login = async (email, password) => {
//         setLoading(true);
//         try {
//             const response = await axios.post(
//                 `${API_BASE_URL}/auth/login`,
//                 { email, password },
//                 { withCredentials: true }
//             );

//             if (response.status === 200) {
//                 TokenService.setToken(response.data.tokens.accessToken);
//                 TokenService.setRefreshToken(response.data.refreshToken);

//                 const userDataFetched = await fetchUserData(response.data.tokens.accessToken);

//                 if (userDataFetched) {
//                     toast.success("Login successful!");
//                     if (user?.role === 'admin') {
//                         navigate('/admin');
//                     } else {
//                         navigate('/dashboard');
//                     }
//                 } else {
//                     TokenService.removeToken();
//                     TokenService.removeRefreshToken();
//                     setUser(null);
//                     toast.error("Failed to fetch user details.");
//                 }
//             } else {
//                 toast.error("Login failed.");
//             }
//         } catch (error) {
//             console.error("Login error:", error);
//             TokenService.removeToken();
//             TokenService.removeRefreshToken();
//             setUser(null);
//             toast.error(error.response?.data?.message || "Login failed.");
//         } finally {
//             setLoading(false);
//         }
//     };


//     const logout = () => {
//         TokenService.removeToken();
//         TokenService.removeRefreshToken();
//         setUser(null);
//         navigate('/');
//     };

//     const contextValue = {
//         user,
//         setUser,
//         login,
//         logout,
//         loading,
//     };

//     return (
//         <AuthContext.Provider value={contextValue}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);








// // AuthContextWeb.jsx (Modified)
// import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
// import axios from 'axios';
// import TokenService from '../utils/TokenService';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [accessToken, setAccessToken] = useState(null); // Store access token in state
//     const navigate = useNavigate();

//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     // Using useCallback to memoize the function
//     const fetchUserData = useCallback(async (token) => {
//         if (!token) {
//             return false;
//         }

//         try {
//             const headers = { Authorization: `Bearer ${token}` };
//             const response = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//             if (response.status === 200) {
//                 setUser(response.data);
//                 return true;
//             } else {
//                 setUser(null);
//                 return false;
//             }
//         } catch (error) {
//             console.error("Error fetching user data:", error);
//             setUser(null);
//             return false;
//         }
//     }, [API_BASE_URL]);  // API_BASE_URL is a dependency

//     const refreshAccessToken = useCallback(async () => {
//         const refreshToken = TokenService.getRefreshToken();

//         if (!refreshToken) {
//             setAccessToken(null);
//             setUser(null);
//             return false;
//         }

//         try {
//             const refreshResponse = await axios.post(
//                 `${API_BASE_URL}/auth/refresh-token`,
//                 {},
//                 { withCredentials: true }
//             );

//             if (refreshResponse.status === 200) {
//                 const newAccessToken = refreshResponse.data.accessToken;
//                 TokenService.setRefreshToken(refreshResponse.data.refreshToken);
//                 setAccessToken(newAccessToken); // Store the new token in state
//                 return newAccessToken; // Return the new token
//             } else {
//                 TokenService.removeRefreshToken();
//                 setAccessToken(null);
//                 setUser(null);
//                 return false;
//             }
//         } catch (refreshError) {
//             console.error("Token refresh error:", refreshError);
//             TokenService.removeRefreshToken();
//             setAccessToken(null);
//             setUser(null);
//             return false;
//         }
//     }, [API_BASE_URL]);

//     useEffect(() => {
//         const checkAuthStatus = async () => {
//             setLoading(true);
//             try {
//                 const initialRefreshToken = TokenService.getRefreshToken();

//                 if (!initialRefreshToken) {
//                     setUser(null); // Ensure user is null if no tokens
//                     setAccessToken(null);
//                     return;
//                 }

//                 const newAccessToken = await refreshAccessToken();

//                 if (newAccessToken) {
//                     const userDataFetched = await fetchUserData(newAccessToken);
//                     if (!userDataFetched) {
//                         TokenService.removeRefreshToken();
//                         setAccessToken(null);
//                         setUser(null);
//                     }
//                 } else {
//                     TokenService.removeRefreshToken();
//                     setAccessToken(null);
//                     setUser(null);
//                 }


//             } finally {
//                 setLoading(false);
//             }
//         };

//         checkAuthStatus();

//         // Refresh token periodically (e.g., every hour)
//         const intervalId = setInterval(async () => {
//             if (TokenService.getRefreshToken()) {
//                 const newAccessToken = await refreshAccessToken();
//                 if (newAccessToken) {
//                     await fetchUserData(newAccessToken);  // Update user data after refresh
//                 }
//             }
//         }, 3600000); // 1 hour

//         return () => {
//             clearInterval(intervalId);
//         };
//     }, [fetchUserData, refreshAccessToken]);

//     const login = async (email, password) => {
//         setLoading(true);
//         try {
//             const response = await axios.post(
//                 `${API_BASE_URL}/auth/login`,
//                 { email, password },
//                 { withCredentials: true }
//             );

//             if (response.status === 200) {
//                 const { accessToken: newAccessToken, refreshToken } = response.data.tokens;
//                 TokenService.setRefreshToken(refreshToken);
//                 setAccessToken(newAccessToken);

//                 const userDataFetched = await fetchUserData(newAccessToken);

//                 if (userDataFetched) {
//                     toast.success("Login successful!");
//                     if (user?.role === 'admin') {
//                         navigate('/admin');
//                     } else {
//                         navigate('/dashboard');
//                     }
//                 } else {
//                     TokenService.removeRefreshToken();
//                     setAccessToken(null);
//                     setUser(null);
//                     toast.error("Failed to fetch user details.");
//                 }
//             } else {
//                 toast.error("Login failed.");
//             }
//         } catch (error) {
//             console.error("Login error:", error);
//             TokenService.removeRefreshToken();
//             setAccessToken(null);
//             setUser(null);
//             toast.error(error.response?.data?.message || "Login failed.");
//         } finally {
//             setLoading(false);
//         }
//     };


//     const logout = () => {
//         TokenService.removeRefreshToken();
//         setAccessToken(null);
//         setUser(null);
//         navigate('/');
//     };

//     const contextValue = {
//         user,
//         setUser,
//         accessToken,  // Provide the access token
//         login,
//         logout,
//         loading,
//     };

//     return (
//         <AuthContext.Provider value={contextValue}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);



// AuthContextWeb.jsx
import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import TokenService from '../utils/TokenService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [accessToken, setAccessToken] = useState(null); // Store access token in state
    const navigate = useNavigate();

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    // Using useCallback to memoize the function
    const fetchUserData = useCallback(async (token) => {
        if (!token) {
            return false;
        }

        try {
            const headers = { Authorization: `Bearer ${token}` };
            const response = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

            if (response.status === 200) {
                setUser(response.data);
                return true;
            } else {
                setUser(null);
                return false;
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            setUser(null);
            return false;
        }
    }, [API_BASE_URL]);  // API_BASE_URL is a dependency

    const refreshAccessToken = useCallback(async () => {
        const refreshToken = TokenService.getRefreshToken();

        if (!refreshToken) {
            setAccessToken(null);
            setUser(null);
            return false;
        }

        try {
            const refreshResponse = await axios.post(
                `${API_BASE_URL}/auth/refresh-token`,
                {},
                { withCredentials: true }
            );

            if (refreshResponse.status === 200) {
                const newAccessToken = refreshResponse.data.accessToken;
                TokenService.setRefreshToken(refreshResponse.data.refreshToken);
                setAccessToken(newAccessToken); // Store the new token in state
                return newAccessToken; // Return the new token
            } else {
                TokenService.removeRefreshToken();
                setAccessToken(null);
                setUser(null);
                return false;
            }
        } catch (refreshError) {
            console.error("Token refresh error:", refreshError);
            TokenService.removeRefreshToken();
            setAccessToken(null);
            setUser(null);
            return false;
        }
    }, [API_BASE_URL]);

    useEffect(() => {
        const checkAuthStatus = async () => {
            setLoading(true);
            try {
                const initialRefreshToken = TokenService.getRefreshToken();

                if (!initialRefreshToken) {
                    setUser(null); // Ensure user is null if no tokens
                    setAccessToken(null);
                    return;
                }

                const newAccessToken = await refreshAccessToken();

                if (newAccessToken) {
                    const userDataFetched = await fetchUserData(newAccessToken);
                    if (!userDataFetched) {
                        TokenService.removeRefreshToken();
                        setAccessToken(null);
                        setUser(null);
                    }
                } else {
                    TokenService.removeRefreshToken();
                    setAccessToken(null);
                    setUser(null);
                }


            } finally {
                setLoading(false);
            }
        };

        checkAuthStatus();

        // Refresh token periodically (e.g., every hour)
        const intervalId = setInterval(async () => {
            if (TokenService.getRefreshToken()) {
                const newAccessToken = await refreshAccessToken();
                if (newAccessToken) {
                    await fetchUserData(newAccessToken);  // Update user data after refresh
                }
            }
        }, 3600000); // 1 hour

        return () => {
            clearInterval(intervalId);
        };
    }, [fetchUserData, refreshAccessToken]);

    const login = async (email, password) => {
        setLoading(true);
        try {
            const response = await axios.post(
                `${API_BASE_URL}/auth/login`,
                { email, password },
                { withCredentials: true }
            );

            if (response.status === 200) {
                const { accessToken: newAccessToken, refreshToken } = response.data.tokens;
                TokenService.setRefreshToken(refreshToken);
                setAccessToken(newAccessToken);

                const userDataFetched = await fetchUserData(newAccessToken);

                if (userDataFetched) {
                    toast.success("Login successful!");
                    if (user?.role === 'admin') {
                        navigate('/admin');
                    } else {
                        navigate('/dashboard');
                    }
                } else {
                    TokenService.removeRefreshToken();
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
            setAccessToken(null);
            setUser(null);
            toast.error(error.response?.data?.message || "Login failed.");
        } finally {
            setLoading(false);
        }
    };


    const logout = () => {
        TokenService.removeRefreshToken();
        TokenService.removeToken();
        setAccessToken(null);
        setUser(null);
        navigate('/');
    };

    const contextValue = {
        user,
        setUser,
        accessToken,  // Provide the access token
        login,
        logout,
        loading,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);