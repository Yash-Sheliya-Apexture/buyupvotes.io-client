// // Dashboard/hooks/useMySpent.js
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useMySpent = (API_BASE_URL, token) => {
//     const [mySpent, setMySpent] = useState(0);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchMySpent = async () => {
//             if (!token) {
//                 setLoading(false);
//                 return;
//             }

//             try {
//                 setLoading(true);
//                 setError(null);

//                 const headers = { Authorization: `Bearer ${token}` };
//                 const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });
//                 let totalSpent = 0;
//                 if (ordersResponse.status === 200 && Array.isArray(ordersResponse.data)) {
//                     ordersResponse.data.forEach(order => {
//                         const calculatedPrice = parseFloat(order.calculatedPrice || 0);
//                         switch (order.status) {
//                             case "Pending":
//                             case "In Progress":
//                             case "Partial":
//                             case "Completed":
//                                 totalSpent += calculatedPrice;
//                                 break;
//                             case "Canceled":
//                                 break;
//                             default:
//                                 break;
//                         }
//                     });
//                 }
//                 setMySpent(totalSpent >= 0 ? totalSpent : 0);
//             } catch (apiError) {
//                 console.error("Error fetching My Spent:", apiError);
//                 setError(apiError.message || "Error fetching My Spent");
//                 setMySpent(0);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchMySpent();
//     }, [API_BASE_URL, token]);

//     return { mySpent, loading, error };
// };

// export default useMySpent;



// Dashboard/hooks/useMySpent.js
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useMySpent = (API_BASE_URL, token) => {
    const [mySpent, setMySpent] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMySpent = useCallback(async () => {
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const headers = { Authorization: `Bearer ${token}` };
            const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });
            const orders = ordersResponse.data || [];

            const totalSpent = orders.reduce((total, order) => {
                if (["Pending", "In Progress", "Partial", "Completed"].includes(order.status)) {
                    return total + parseFloat(order.calculatedPrice || 0);
                }
                return total;
            }, 0);

            setMySpent(totalSpent >= 0 ? totalSpent : 0);

        } catch (apiError) {
            console.error("Error fetching My Spent:", apiError);
            setError(apiError.message || "Error fetching My Spent");
            setMySpent(0);
        } finally {
            setLoading(false);
        }
    }, [API_BASE_URL, token]);

    useEffect(() => {
        fetchMySpent();
    }, [fetchMySpent]);

    return { mySpent, loading, error };
};

export default useMySpent;