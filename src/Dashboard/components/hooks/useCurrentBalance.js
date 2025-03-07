// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';

// const useCurrentBalance = (API_BASE_URL, token) => {
//   const [currentBalance, setCurrentBalance] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchBalance = useCallback(async () => {
//     if (!token) {
//       setLoading(false);
//       return;
//     }

//     try {
//       setLoading(true);
//       setError(null);

//       const headers = { Authorization: `Bearer ${token}` };

//       // Concurrent requests for Payments and Orders
//       const [paymentsResponse, ordersResponse] = await Promise.all([
//         axios.get(`${API_BASE_URL}/payment`, { headers }),
//         axios.get(`${API_BASE_URL}/auth/orders`, { headers }),
//       ]);

//       // Calculate amountTotal from Payments
//       let amountTotal = 0;
//       if (
//         paymentsResponse.status === 200 &&
//         paymentsResponse.data &&
//         paymentsResponse.data.payments
//       ) {
//         amountTotal = paymentsResponse.data.payments.reduce(
//           (total, payment) => total + parseFloat(payment.amount || 0),
//           0
//         );
//       }

//       // Calculate totalSpent from Orders
//       let totalSpent = 0;
//       if (ordersResponse.status === 200 && Array.isArray(ordersResponse.data)) {
//         totalSpent = ordersResponse.data.reduce((total, order) => {
//           const calculatedPrice = parseFloat(order.calculatedPrice || 0);
//           return total + (["Pending", "In Progress", "Partial", "Completed"].includes(order.status) ? calculatedPrice : 0);
//         }, 0);
//       }

//       const calculatedBalance = amountTotal - totalSpent;
//       setCurrentBalance(calculatedBalance >= 0 ? calculatedBalance : 0);
//     } catch (apiError) {
//       console.error('Error fetching data:', apiError);
//       setError(apiError.message || 'Error fetching current balance');
//       setCurrentBalance(0);
//     } finally {
//       setLoading(false);
//     }
//   }, [API_BASE_URL, token]);

//   useEffect(() => {
//     fetchBalance();
//   }, [fetchBalance]);

//   return { currentBalance, loading, error };
// };

// export default useCurrentBalance;


// Dashboard/hooks/useCurrentBalance.js
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useCurrentBalance = (API_BASE_URL, token) => {
    const [currentBalance, setCurrentBalance] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchBalance = useCallback(async () => {
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const headers = { Authorization: `Bearer ${token}` };

            // Fetch Payments (only necessary data)
            const paymentsResponse = await axios.get(`${API_BASE_URL}/payment`, { headers });
            const payments = paymentsResponse.data?.payments || [];
            const amountTotal = payments.reduce((total, payment) => total + parseFloat(payment.amount || 0), 0);

            // Fetch Orders (only necessary data)
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
    }, [API_BASE_URL, token]);

    useEffect(() => {
        fetchBalance();
    }, [fetchBalance]);

    return { currentBalance, loading, error };
};

export default useCurrentBalance;