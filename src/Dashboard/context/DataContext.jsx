// DataContext.jsx
import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    // In-Memory Cache for Orders
    const [cachedOrders, setCachedOrders] = useState(null);
    const [cacheExpiration, setCacheExpiration] = useState(null);

    const invalidateCache = useCallback(() => {
        setCachedOrders(null);
        setCacheExpiration(null);
    }, []);

    // Cache Duration (e.g., 5 minutes)
    const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("authToken");
            if (!token) {
                setLoading(false);
                return;
            }

            setLoading(true);
            setError(null);
            try {
                // Fetch user data
                const userResponse = await axios.get(`${API_BASE_URL}/auth/user`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUserData(userResponse.data);

            } catch (error) {
                setError(error.message || "Error fetching user data");
            } finally {
                setLoading(false);
            }
        };
        fetchUserData();
    }, [API_BASE_URL]);

    const fetchOrders = useCallback(async () => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            console.warn("Authentication token missing.  Orders not fetched.");
            return;
        }

        setLoading(true);
        setError(null);
        try {
            // Check if orders are cached and cache is still valid
            if (cachedOrders && cacheExpiration && cacheExpiration > Date.now()) {
                setOrders(cachedOrders);
                return;
            }
            // Fetch order data
            const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setOrders(ordersResponse.data);
            // Update cache
            setCachedOrders(ordersResponse.data);
            setCacheExpiration(Date.now() + CACHE_DURATION);
        } catch (error) {
            setError(error.message || "Error fetching orders");
        } finally {
            setLoading(false);
        }
    }, [API_BASE_URL, cachedOrders, cacheExpiration]);

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders]);

    const value = {
        userData,
        orders,
        loading,
        error,
        fetchOrders, // Expose fetchOrders function
        invalidateCache // Expose invalidateCache function
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    return useContext(DataContext);
};