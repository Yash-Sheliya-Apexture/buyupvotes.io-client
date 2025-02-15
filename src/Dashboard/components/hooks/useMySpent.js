// Dashboard/components/hooks/useMySpent.js

import { useState, useEffect } from 'react';
import axios from 'axios';

const useMySpent = (API_BASE_URL, token, currentBalance) => {
    const [mySpent, setMySpent] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMySpent = async () => {
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                const headers = { Authorization: `Bearer ${token}` };

                // Fetch Payments
                const paymentsResponse = await axios.get(`${API_BASE_URL}/payment`, { headers });

                let amountTotal = 0;
                if (paymentsResponse.status === 200 && paymentsResponse.data && paymentsResponse.data.payments) {
                    // Sum all payment amounts
                    amountTotal = paymentsResponse.data.payments.reduce((total, payment) => {
                        return total + parseFloat(payment.amount || 0); // Ensure 'amount' is a number
                    }, 0);
                }

                // My Spent calculation (Total Paid - Current Balance)
                const spent = amountTotal - currentBalance;
                setMySpent(spent >= 0 ? spent : 0);  // Ensure it's not negative

            } catch (apiError) {
                console.error("Error fetching My Spent:", apiError);
                setError(apiError.message || "Error fetching My Spent");
                setMySpent(0);
            } finally {
                setLoading(false);
            }
        };

        fetchMySpent();
    }, [API_BASE_URL, token, currentBalance]); // Dependency array includes currentBalance

    return { mySpent, loading, error };
};

export default useMySpent;