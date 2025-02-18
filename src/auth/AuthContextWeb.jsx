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
            setLoading(true);
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
                        setLoading(false);
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

            setLoading(false);
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
                        navigate('/admin');
                    } else {
                        navigate('/dashboard');
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