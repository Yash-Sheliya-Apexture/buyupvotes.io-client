// import React, {
//     createContext,
//     useState,
//     useEffect,
//     useContext,
//     useCallback,
//     useRef,
// } from 'react';
// import axios from 'axios';
// import TokenService from '../utils/TokenService';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [accessToken, setAccessToken] = useState(null);
//     const navigate = useNavigate();

//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     const refreshTimeoutId = useRef(null); // useRef to hold the timeout id

//     const refreshAccessToken = useCallback(async () => {
//         const refreshToken = TokenService.getRefreshToken();

//         if (!refreshToken) {
//             console.warn("refreshAccessToken: No refresh token found.");
//             setAccessToken(null);
//             setUser(null);
//             return null;
//         }

//         try {
//             const refreshResponse = await axios.post(
//                 `${API_BASE_URL}/auth/refresh-token`,
//                 {},
//                 { withCredentials: true }
//             );

//             if (refreshResponse.status === 200) {
//                 const newAccessToken = refreshResponse.data.accessToken;
//                 TokenService.setToken(newAccessToken);
//                 TokenService.setRefreshToken(refreshResponse.data.refreshToken);

//                 setAccessToken(newAccessToken);
//                 const payload = JSON.parse(atob(newAccessToken.split('.')[1])); // Decode JWT payload
//                 scheduleRefresh(payload.exp - (Date.now() / 1000)); // Schedule refresh
//                 return newAccessToken;

//             } else {
//                 console.error("refreshAccessToken: Token refresh failed. Status:", refreshResponse.status);
//                 TokenService.removeRefreshToken();
//                 TokenService.removeToken();
//                 setAccessToken(null);
//                 setUser(null);
//                 return null;
//             }
//         } catch (refreshError) {
//             console.error("refreshAccessToken: Token refresh error:", refreshError);
//             TokenService.removeRefreshToken();
//             TokenService.removeToken();
//             setAccessToken(null);
//             setUser(null);
//             return null;
//         }
//     }, [API_BASE_URL]);

//     const scheduleRefresh = useCallback((expiresIn) => {
//         if (refreshTimeoutId.current) {
//             clearTimeout(refreshTimeoutId.current);
//         }

//         const timeout = (expiresIn * 1000) - (5 * 60 * 1000); // Refresh 5 minutes before expiry
//         if (timeout > 0) {
//             refreshTimeoutId.current = setTimeout(async () => {
//                 console.log('Attempting proactive token refresh...');
//                 const newToken = await refreshAccessToken();
//                 if (newToken) {
//                     console.log('Proactive token refresh successful.');
//                 } else {
//                     console.warn('Proactive token refresh failed.');
//                 }
//             }, timeout);
//         }
//     }, [refreshAccessToken]);

//     const fetchUserData = useCallback(
//         async (token) => {
//             if (!token) {
//                 console.warn("fetchUserData: No token provided.");
//                 return null; // Return null when no token is available
//             }

//             try {
//                 const headers = { Authorization: `Bearer ${token}` };
//                 const response = await axios.get(`${API_BASE_URL}/auth/user`, { headers });
//                 console.log("/auth/user 1");
//                 if (response.status === 200) {
//                     setUser(response.data);
//                     return response.data;  //Return User Data
//                 } else if (response.status === 401) {
//                     console.warn("fetchUserData: Access token expired. Attempting refresh.");
//                     const newToken = await refreshAccessToken();
//                     if (newToken) {
//                         console.log("fetchUserData: Token refreshed successfully. Retrying fetch.");
//                         // Retry the fetch by updating accessToken state, which triggers re-render
//                         setAccessToken(newToken);
//                         const userData = await fetchUserData(newToken); // Fetch user data again
//                         return userData; // Return the new user data
//                     } else {
//                         console.error("fetchUserData: Token refresh failed after 401.");
//                         return null;
//                     }
//                 } else {
//                     console.error("fetchUserData: Error fetching user data. Status:", response.status);
//                     return null;
//                 }
//             } catch (error) {
//                 console.error("fetchUserData: Error fetching user data:", error);
//                 return null;
//             }
//         },
//         [API_BASE_URL, refreshAccessToken, setAccessToken] // added setAccessToken to dependencies
//     );

//     useEffect(() => {
//         const checkAuthStatus = async () => {
//             setLoading(true);
//             try {
//                 let currentAccessToken = TokenService.getToken();
//                 const initialRefreshToken = TokenService.getRefreshToken();

//                 if (!currentAccessToken && !initialRefreshToken) {
//                     console.log("checkAuthStatus: No initial tokens found.");
//                     setUser(null);
//                     setAccessToken(null);
//                     return;
//                 }

//                 if (!currentAccessToken && initialRefreshToken) {
//                     currentAccessToken = await refreshAccessToken();
//                     if (!currentAccessToken) {
//                         console.log("checkAuthStatus: Could not refresh Access Token");
//                         TokenService.removeRefreshToken();
//                         TokenService.removeToken();
//                         setUser(null);
//                         setAccessToken(null);
//                         return;
//                     }
//                 }

//                 if (currentAccessToken) {
//                     const userData = await fetchUserData(currentAccessToken);
//                     if (userData) {
//                         setAccessToken(currentAccessToken); // Update the accessToken state
//                         const payload = JSON.parse(atob(currentAccessToken.split('.')[1]));
//                         scheduleRefresh(payload.exp - (Date.now() / 1000));
//                     }
//                     //Check to make sure we have data
//                     if (!userData) {
//                         console.log("checkAuthStatus: Could not fetch user data with Access Token");
//                         TokenService.removeRefreshToken();
//                         TokenService.removeToken();
//                         setUser(null);
//                         setAccessToken(null);
//                     }
//                 }
//             } finally {
//                 setLoading(false);
//             }
//         };

//         checkAuthStatus();

//         return () => {
//             if (refreshTimeoutId.current) {
//                 clearTimeout(refreshTimeoutId.current);
//             }
//         };
//     }, [fetchUserData, refreshAccessToken, scheduleRefresh]);  //Removed accessToken from here, Added it to fetchUserData dependency to avoid a cyclic dependency

//     const login = async (email, password) => {
//         setLoading(true);
//         try {
//             const response = await axios.post(
//                 `${API_BASE_URL}/auth/login`,
//                 { email, password },
//                 { withCredentials: true }
//             );

//             if (response.status === 200) {
//                 const { accessToken: newAccessToken } = response.data.tokens;
//                 TokenService.setToken(newAccessToken);
//                 TokenService.setRefreshToken(response.data.refreshToken);
//                 setAccessToken(newAccessToken);

//                 const userData = await fetchUserData(newAccessToken);

//                 if (userData) {
//                     toast.success("Login successful!");
//                     const payload = JSON.parse(atob(newAccessToken.split('.')[1]));
//                     scheduleRefresh(payload.exp - (Date.now() / 1000));
//                     if (response.data.user.role === 'admin') {
//                         navigate('/admin');
//                     } else {
//                         navigate('/dashboard');
//                     }
//                 } else {
//                     TokenService.removeRefreshToken();
//                     TokenService.removeToken();
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
//             TokenService.removeToken();
//             setAccessToken(null);
//             setUser(null);
//             toast.error(error.response?.data?.message || "Login failed.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const logout = () => {
//         TokenService.removeRefreshToken();
//         TokenService.removeToken();
//         setAccessToken(null);
//         setUser(null);
//         navigate('/');
//     };

//     const contextValue = {
//         user,
//         setUser,
//         accessToken,
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



// import React, {
//     createContext,
//     useState,
//     useEffect,
//     useContext,
//     useCallback,
//     useRef,
// } from 'react';
// import axios from 'axios';
// import TokenService from '../utils/TokenService';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [accessToken, setAccessToken] = useState(null);
//     const navigate = useNavigate();

//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     const refreshTimeoutId = useRef(null);

//     const refreshAccessToken = useCallback(async () => {
//         const refreshToken = TokenService.getRefreshToken();

//         if (!refreshToken) {
//             console.warn("refreshAccessToken: No refresh token found.");
//             setAccessToken(null);
//             setUser(null);
//             return null;
//         }

//         try {
//             const refreshResponse = await axios.post(
//                 `${API_BASE_URL}/auth/refresh-token`,
//                 {},
//                 { withCredentials: true }
//             );

//             if (refreshResponse.status === 200) {
//                 const newAccessToken = refreshResponse.data.accessToken;
//                 TokenService.setToken(newAccessToken);
//                 TokenService.setRefreshToken(refreshResponse.data.refreshToken);

//                 setAccessToken(newAccessToken);
//                 const payload = JSON.parse(atob(newAccessToken.split('.')[1]));
//                 scheduleRefresh(payload.exp - (Date.now() / 1000));
//                 return newAccessToken;

//             } else {
//                 console.error("refreshAccessToken: Token refresh failed. Status:", refreshResponse.status);
//                 TokenService.removeRefreshToken();
//                 TokenService.removeToken();
//                 setAccessToken(null);
//                 setUser(null);
//                 return null;
//             }
//         } catch (refreshError) {
//             console.error("refreshAccessToken: Token refresh error:", refreshError);
//             TokenService.removeRefreshToken();
//             TokenService.removeToken();
//             setAccessToken(null);
//             setUser(null);
//             return null;
//         }
//     }, [API_BASE_URL]);

//     const scheduleRefresh = useCallback((expiresIn) => {
//         if (refreshTimeoutId.current) {
//             clearTimeout(refreshTimeoutId.current);
//         }

//         const timeout = (expiresIn * 1000) - (5 * 60 * 1000);
//         if (timeout > 0) {
//             refreshTimeoutId.current = setTimeout(async () => {
//                 console.log('Attempting proactive token refresh...');
//                 const newToken = await refreshAccessToken();
//                 if (newToken) {
//                     console.log('Proactive token refresh successful.');
//                 } else {
//                     console.warn('Proactive token refresh failed.');
//                 }
//             }, timeout);
//         }
//     }, [refreshAccessToken]);

//     const fetchUserData = useCallback(
//         async (token) => {
//             if (!token) {
//                 console.warn("fetchUserData: No token provided.");
//                 return null;
//             }

//             try {
//                 const headers = { Authorization: `Bearer ${token}` };
//                 const response = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

//                 if (response.status === 200) {
//                     setUser(response.data);
//                     return response.data;
//                 } else if (response.status === 401) {
//                     console.warn("fetchUserData: Access token expired. Attempting refresh.");
//                     const newToken = await refreshAccessToken();
//                     if (newToken) {
//                         console.log("fetchUserData: Token refreshed successfully. Retrying fetch.");
//                         //IMPORTANT:  Update the accessToken state here, to make sure `AuthContext` is reactive!
//                         setAccessToken(newToken);
//                         const newUserData = await fetchUserData(newToken);
//                         return newUserData;
//                     } else {
//                         console.error("fetchUserData: Token refresh failed after 401.");
//                         return null;
//                     }
//                 } else {
//                     console.error("fetchUserData: Error fetching user data. Status:", response.status);
//                     return null;
//                 }
//             } catch (error) {
//                 console.error("fetchUserData: Error fetching user data:", error);
//                 return null;
//             }
//         },
//         [API_BASE_URL, refreshAccessToken, setAccessToken]
//     );

//     useEffect(() => {
//         const checkAuthStatus = async () => {
//             setLoading(true);
//             try {
//                 let currentAccessToken = TokenService.getToken();
//                 const initialRefreshToken = TokenService.getRefreshToken();

//                 //Simplified logic for initial check
//                 if (!currentAccessToken && !initialRefreshToken) {
//                     console.log("checkAuthStatus: No initial tokens found.");
//                     setUser(null);
//                     setAccessToken(null);
//                     setLoading(false); // Ensure loading is set to false here
//                     return;
//                 }

//                 //Attempt to get a new access token from refresh if we don't have one
//                 if (!currentAccessToken && initialRefreshToken) {
//                     console.log("checkAuthStatus: Attempting refresh with initial refresh token");
//                     currentAccessToken = await refreshAccessToken();
//                     if (!currentAccessToken) {
//                         console.log("checkAuthStatus: Could not refresh Access Token");
//                         TokenService.removeRefreshToken();
//                         TokenService.removeToken();
//                         setUser(null);
//                         setAccessToken(null);
//                         setLoading(false); // Ensure loading is set to false here
//                         return;
//                     }
//                 }

//                 //Fetch the user data if we either had an access token OR got one from the refresh flow.
//                 if (currentAccessToken) {
//                     const userData = await fetchUserData(currentAccessToken);
//                     if (userData) {
//                         setAccessToken(currentAccessToken);
//                         const payload = JSON.parse(atob(currentAccessToken.split('.')[1]));
//                         scheduleRefresh(payload.exp - (Date.now() / 1000));
//                     } else {
//                         console.warn("checkAuthStatus: Could not fetch user data with Access Token.");
//                         TokenService.removeRefreshToken();
//                         TokenService.removeToken();
//                         setUser(null);
//                         setAccessToken(null);
//                     }
//                 }


//             } finally {
//                 setLoading(false);
//             }
//         };

//         checkAuthStatus();

//         return () => {
//             if (refreshTimeoutId.current) {
//                 clearTimeout(refreshTimeoutId.current);
//             }
//         };
//     }, [fetchUserData, refreshAccessToken, scheduleRefresh]);  //Removed accessToken from here, Added it to fetchUserData dependency to avoid a cyclic dependency

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

//                 TokenService.setToken(newAccessToken);
//                 TokenService.setRefreshToken(refreshToken);
//                 setAccessToken(newAccessToken); // Make sure to setAccessToken after setting in TokenService

//                 const userData = await fetchUserData(newAccessToken);

//                 if (userData) {
//                     toast.success("Login successful!");
//                     const payload = JSON.parse(atob(newAccessToken.split('.')[1]));
//                     scheduleRefresh(payload.exp - (Date.now() / 1000));
//                     if (response.data.user.role === 'admin') {
//                         navigate('/admin');
//                     } else {
//                         navigate('/dashboard');
//                     }
//                 } else {
//                     TokenService.removeRefreshToken();
//                     TokenService.removeToken();
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
//             TokenService.removeToken();
//             setAccessToken(null);
//             setUser(null);
//             toast.error(error.response?.data?.message || "Login failed.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const logout = () => {
//         TokenService.removeRefreshToken();
//         TokenService.removeToken();
//         setAccessToken(null);
//         setUser(null);
//         navigate('/');
//     };

//     const contextValue = {
//         user,
//         setUser,
//         accessToken,
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
    const refreshTimeoutId = useRef(null);

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

                // Decode the payload correctly to get the expiration time
                try {
                    const payload = JSON.parse(atob(newAccessToken.split('.')[1]));
                    scheduleRefresh(payload.exp - (Date.now() / 1000));
                } catch (e) {
                    console.error("Error decoding payload:", e);
                    // Handle the error appropriately, possibly by skipping the refresh scheduling
                }
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

    const scheduleRefresh = useCallback((expiresIn) => {
        if (refreshTimeoutId.current) {
            clearTimeout(refreshTimeoutId.current);
        }

        const timeout = (expiresIn * 1000) - (5 * 60 * 1000);
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
    }, [refreshAccessToken]);

     const fetchUserData = useCallback(
        async (token) => {
            if (!token) {
                console.warn("fetchUserData: No token provided.");
                return null;
            }

            try {
                const headers = { Authorization: `Bearer ${token}` };
                const response = await axios.get(`${API_BASE_URL}/auth/user`, { headers });

                if (response.status === 200) {
                    setUser(response.data);
                    return response.data;
                } else if (response.status === 401) {
                    console.warn("fetchUserData: Access token expired. Attempting refresh.");
                    const newToken = await refreshAccessToken();
                    if (newToken) {
                        console.log("fetchUserData: Token refreshed successfully. Retrying fetch.");
                        //IMPORTANT:  Update the accessToken state here, to make sure `AuthContext` is reactive!
                        setAccessToken(newToken);
                        const newUserData = await fetchUserData(newToken);
                        return newUserData;
                    } else {
                        console.error("fetchUserData: Token refresh failed after 401.");
                        return null;
                    }
                } else {
                    console.error("fetchUserData: Error fetching user data. Status:", response.status);
                    return null;
                }
            } catch (error) {
                console.error("fetchUserData: Error fetching user data:", error);
                return null;
            }
        },
        [API_BASE_URL, refreshAccessToken, setAccessToken]
    );
    useEffect(() => {
        const checkAuthStatus = async () => {
            setLoading(true);
            try {
                let currentAccessToken = TokenService.getToken();
                const initialRefreshToken = TokenService.getRefreshToken();

                //Simplified logic for initial check
                if (!currentAccessToken && !initialRefreshToken) {
                    console.log("checkAuthStatus: No initial tokens found.");
                    setUser(null);
                    setAccessToken(null);
                    setLoading(false); // Ensure loading is set to false here
                    return;
                }

                //Attempt to get a new access token from refresh if we don't have one
                if (!currentAccessToken && initialRefreshToken) {
                    console.log("checkAuthStatus: Attempting refresh with initial refresh token");
                    currentAccessToken = await refreshAccessToken();
                    if (!currentAccessToken) {
                        console.log("checkAuthStatus: Could not refresh Access Token");
                        TokenService.removeRefreshToken();
                        TokenService.removeToken();
                        setUser(null);
                        setAccessToken(null);
                        setLoading(false); // Ensure loading is set to false here
                        return;
                    }
                }

                //Fetch the user data if we either had an access token OR got one from the refresh flow.
                if (currentAccessToken) {
                    const userData = await fetchUserData(currentAccessToken);
                    if (userData) {
                        setUser(userData); // Set user data immediately upon successful fetch
                        setAccessToken(currentAccessToken);
                        // Schedule token refresh
                         try {
                            const payload = JSON.parse(atob(currentAccessToken.split('.')[1]));
                            scheduleRefresh(payload.exp - (Date.now() / 1000));
                         } catch (e) {
                            console.error("Error decoding payload:", e);
                            // Handle the error appropriately, possibly by skipping the refresh scheduling
                         }
                    } else {
                        console.warn("checkAuthStatus: Could not fetch user data with Access Token.");
                        TokenService.removeRefreshToken();
                        TokenService.removeToken();
                        setUser(null);
                        setAccessToken(null);
                    }
                }


            } finally {
                setLoading(false);
            }
        };

        checkAuthStatus();

        return () => {
            if (refreshTimeoutId.current) {
                clearTimeout(refreshTimeoutId.current);
            }
        };
    }, [fetchUserData, refreshAccessToken, scheduleRefresh]);  //Removed accessToken from here, Added it to fetchUserData dependency to avoid a cyclic dependency

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

                TokenService.setToken(newAccessToken);
                TokenService.setRefreshToken(refreshToken);
                setAccessToken(newAccessToken); // Make sure to setAccessToken after setting in TokenService

                const userData = await fetchUserData(newAccessToken);

                if (userData) {
                    setUser(userData);  //SET THE USER DATA
                    toast.success("Login successful!");
                     try {
                            const payload = JSON.parse(atob(newAccessToken.split('.')[1]));
                            scheduleRefresh(payload.exp - (Date.now() / 1000));
                        } catch (e) {
                            console.error("Error decoding payload:", e);
                            // Handle the error appropriately, possibly by skipping the refresh scheduling
                        }
                    if (response.data.user.role === 'admin') {
                        navigate('/admin');
                    } else {
                        navigate('/dashboard');
                    }
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