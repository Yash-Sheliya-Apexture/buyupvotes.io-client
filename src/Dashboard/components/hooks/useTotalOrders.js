// Dashboard/components/hooks/useTotalOrders.js

import { useState, useEffect } from 'react';
import axios from 'axios';

const useTotalOrders = (API_BASE_URL, token) => {
    const [totalOrders, setTotalOrders] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTotalOrders = async () => {
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                const headers = { Authorization: `Bearer ${token}` };
                const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });

                if (ordersResponse.status === 200 && Array.isArray(ordersResponse.data)) {
                    setTotalOrders(ordersResponse.data.length);
                } else {
                    setTotalOrders(0); // Or handle the error appropriately
                }
            } catch (apiError) {
                console.error("Error fetching total orders:", apiError);
                setError(apiError.message || "Error fetching total orders");
                setTotalOrders(0);
            } finally {
                setLoading(false);
            }
        };

        fetchTotalOrders();
    }, [API_BASE_URL, token]);

    return { totalOrders, loading, error };
};

export default useTotalOrders;