// BalanceContext.jsx
import React, {
    createContext,
    useState,
    useEffect,
    useCallback,
    useContext,
} from 'react';
import axios from 'axios';
import TokenService from '../utils/TokenService'; // Import TokenService

const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
    const [currentBalance, setCurrentBalance] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    // Use TokenService to get the token
    const token = () => TokenService.getToken();

    const fetchBalance = useCallback(async () => {
        const currentToken = token(); // Get token inside useCallback
        if (!currentToken) {
            console.log("Token not found, or user is not logged in.");
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const headers = { Authorization: `Bearer ${currentToken}` };

            const paymentsResponse = await axios.get(`${API_BASE_URL}/payment`, { headers });
            const payments = paymentsResponse.data?.payments || [];
            const amountTotal = payments.reduce((total, payment) => total + parseFloat(payment.amount || 0), 0);

            const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });
            const orders = ordersResponse.data || [];
            const totalSpent = orders.reduce((total, order) => {
                if (["Pending", "In Progress", "Partial", "Completed"].includes(order.status)) {
                    return total + parseFloat(order.calculatedPrice || 0);
                }
                return total;
            }, 0);

            const calculatedBalance = amountTotal - totalSpent;
            setCurrentBalance(calculatedBalance >= 0 ? calculatedBalance : 0);

        } catch (apiError) {
            console.error('Error fetching data:', apiError);
            setError(apiError.message || 'Error fetching current balance');
            setCurrentBalance(0);
        } finally {
            setLoading(false);
        }
    }, [API_BASE_URL]);

    useEffect(() => {
        fetchBalance();
    }, [fetchBalance, refresh]);

    const refreshBalance = () => {
        setRefresh(prev => !prev);
    };

    const value = {
        currentBalance,
        loading,
        error,
        refreshBalance,
    };

    return (
        <BalanceContext.Provider value={value}>
            {children}
        </BalanceContext.Provider>
    );
};

export const useBalance = () => {
    return useContext(BalanceContext);
};