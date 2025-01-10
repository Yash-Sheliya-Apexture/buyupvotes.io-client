// AuthContext.js
import React, { createContext, useState, useEffect, useContext, useCallback, useMemo } from "react";
import axios from "axios";
import TokenService from "../utils/TokenService"; // Import the TokenService

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Add error state
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const fetchUser = useCallback(async () => {
        const token = TokenService.getToken();

        if (!token) {
            setLoading(false);
            return;
        }

        try {
             if (TokenService.isTokenExpired(token)){
              TokenService.clearToken();
              setUser(null)
              setLoading(false);
              return;
            }

            const response = await axios.get(`${API_BASE_URL}/auth/user`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
              setUser(response.data);
              setError(null); // Clear any previous errors
            } else {
              setUser(null);
              setError("Failed to fetch user data."); // Set an error message
              TokenService.clearToken(); // Clear token on error
            }
        } catch (err) {
            setUser(null);
            setError("An error occurred while fetching user data.");
            TokenService.clearToken();
        } finally {
            setLoading(false);
        }
    }, [API_BASE_URL]);


     useEffect(() => {
      fetchUser();
    }, [fetchUser]);



    const login = useCallback((userData, token) => {
        TokenService.setToken(token);
        setUser(userData);
        setError(null);
    }, []);


    const logout = useCallback(() => {
        TokenService.clearToken();
        setUser(null);
    }, []);

     const value = useMemo(() => ({
        user,
        loading,
        error,
        login,
        logout,
    }), [user, loading, error, login, logout]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { AuthProvider, useAuth };