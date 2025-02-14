import { useState, useEffect } from 'react';
import axios from 'axios';

const useCurrentBalance = (API_BASE_URL, token) => {
    const [currentBalance, setCurrentBalance] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Add error state

    useEffect(() => {
        const fetchBalance = async () => {
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null); // Clear any previous errors

                const headers = { Authorization: `Bearer ${token}` };

                // Fetch Orders
                const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });
                console.log("Orders Response:", ordersResponse);

                let completedAmount = 0;

                if (ordersResponse.status === 200 && Array.isArray(ordersResponse.data)) {
                    const ordersData = ordersResponse.data;

                    completedAmount = ordersData.reduce((total, order) => {
                        const calculatedPrice = parseFloat(order.calculatedPrice || 0);

                        if (order.status === "Pending"  || order.status === "In Progress" || order.status === "Completed" || order.status === "Partial") {
                            return total + calculatedPrice;  // Completed and In-progress are subtractions.
                        } else if (order.status === "Canceled") {
                            return total - calculatedPrice; // Canceled means return fund back
                        } else {
                            return total;
                        }
                    }, 0);
                }

                // Fetch Payments
                const paymentsResponse = await axios.get(`${API_BASE_URL}/payment`, { headers });
                console.log("Payments Response:", paymentsResponse);

                let amountTotal = 0;
                if (paymentsResponse.status === 200 && paymentsResponse.data && paymentsResponse.data.payments) {
                    // Sum all payment amounts
                    amountTotal = paymentsResponse.data.payments.reduce((total, payment) => {
                        return total + parseFloat(payment.amount || 0); // Ensure 'amount' is a number
                    }, 0);
                }

                const calculatedBalance = amountTotal - completedAmount;

                setCurrentBalance(calculatedBalance >= 0 ? calculatedBalance : 0);

            } catch (apiError) {
                console.error("Error fetching data:", apiError);
                setError(apiError.message || "Error fetching current balance"); // Set error message

                setCurrentBalance(0); // Reset to 0 if there's an error
            } finally {
                setLoading(false);
            }
        };

        fetchBalance();
    }, [API_BASE_URL, token]);

    return { currentBalance, loading, error };
};

export default useCurrentBalance;