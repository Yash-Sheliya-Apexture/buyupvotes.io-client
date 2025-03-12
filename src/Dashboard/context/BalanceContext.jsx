// // BalanceContext.jsx
// import React, {
//     createContext,
//     useState,
//     useEffect,
//     useCallback,
//     useContext,
// } from 'react';
// import axios from 'axios';
// import TokenService from '../utils/TokenService'; // Import TokenService

// const BalanceContext = createContext();

// export const BalanceProvider = ({ children }) => {
//     const [currentBalance, setCurrentBalance] = useState(0);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [refresh, setRefresh] = useState(false);
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     // Use TokenService to get the token
//     const token = () => TokenService.getToken();

//     const fetchBalance = useCallback(async () => {
//         const currentToken = token(); // Get token inside useCallback
//         if (!currentToken) {
//             console.log("Token not found, or user is not logged in.");
//             setLoading(false);
//             return;
//         }

//         try {
//             setLoading(true);
//             setError(null);

//             const headers = { Authorization: `Bearer ${currentToken}` };

//             const paymentsResponse = await axios.get(`${API_BASE_URL}/payment`, { headers });
//             const payments = paymentsResponse.data?.payments || [];
//             const amountTotal = payments.reduce((total, payment) => total + parseFloat(payment.amount || 0), 0);

//             const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });
//             const orders = ordersResponse.data || [];
//             const totalSpent = orders.reduce((total, order) => {
//                 if (["Pending", "In Progress", "Partial", "Completed"].includes(order.status)) {
//                     return total + parseFloat(order.calculatedPrice || 0);
//                 }
//                 return total;
//             }, 0);

//             const calculatedBalance = amountTotal - totalSpent;
//             setCurrentBalance(calculatedBalance >= 0 ? calculatedBalance : 0);

//         } catch (apiError) {
//             console.error('Error fetching data:', apiError);
//             setError(apiError.message || 'Error fetching current balance');
//             setCurrentBalance(0);
//         } finally {
//             setLoading(false);
//         }
//     }, [API_BASE_URL]);

//     useEffect(() => {
//         fetchBalance();
//     }, [fetchBalance, refresh]);

//     const refreshBalance = () => {
//         setRefresh(prev => !prev);
//     };

//     const value = {
//         currentBalance,
//         loading,
//         error,
//         refreshBalance,
//     };

//     return (
//         <BalanceContext.Provider value={value}>
//             {children}
//         </BalanceContext.Provider>
//     );
// };

// export const useBalance = () => {
//     return useContext(BalanceContext);
// };


// // BalanceContext.jsx
// import React, {
//     createContext,
//     useState,
//     useEffect,
//     useCallback,
//     useContext,
// } from 'react';
// import axios from 'axios';
// import TokenService from '../utils/TokenService'; // Import TokenService

// const BalanceContext = createContext();

// export const BalanceProvider = ({ children }) => {
//     const [currentBalance, setCurrentBalance] = useState(0);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [refresh, setRefresh] = useState(false);
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     // Use TokenService to get the token
//     const token = () => TokenService.getToken();

//     const fetchBalance = useCallback(async () => {
//         const currentToken = token(); // Get token inside useCallback
//         if (!currentToken) {
//             console.log("Token not found, or user is not logged in.");
//             setLoading(false);
//             return;
//         }

//         try {
//             setLoading(true);
//             setError(null);

//             const headers = { Authorization: `Bearer ${currentToken}` };

//             // Fetch payments from your backend's /payment endpoint
//            const paymentsResponse = await axios.get(`${API_BASE_URL}/payment`, { headers });
//             const payments = paymentsResponse.data?.payments || [];

//             // Calculate total amount from successful payments (status "paid")
//             const amountTotal = payments.reduce((total, payment) => {
//                 if ( payment.status === "paid") {
//                   return total + parseFloat(payment.amount || 0);
//               }
//                 return total;
//             }, 0);
//               // Fetch orders from your backend's /auth/orders endpoint
//             const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });
//             const orders = ordersResponse.data || [];

//             // Calculate total spent on orders with statuses "Pending", "In Progress", "Partial", or "Completed"
//             const totalSpent = orders.reduce((total, order) => {
//                  if (["Pending", "In Progress", "Partial", "Completed"].includes(order.status)) {
//                     return total + parseFloat(order.calculatedPrice || 0);
//                 }
//                 return total;
//             }, 0);
//            // Calculate the balance by subtracting total spent from total amount
//             const calculatedBalance = amountTotal - totalSpent;
//             setCurrentBalance(calculatedBalance >= 0 ? calculatedBalance : 0);

//         } catch (apiError) {
//             console.error('Error fetching data:', apiError);
//             setError(apiError.message || 'Error fetching current balance');
//             setCurrentBalance(0);
//         } finally {
//             setLoading(false);
//         }
//     }, [API_BASE_URL]);

//     useEffect(() => {
//         fetchBalance();
//     }, [fetchBalance, refresh]);

//     const refreshBalance = () => {
//         setRefresh(prev => !prev);
//     };

//     const value = {
//         currentBalance,
//         loading,
//         error,
//         refreshBalance,
//     };

//     return (
//         <BalanceContext.Provider value={value}>
//             {children}
//         </BalanceContext.Provider>
//     );
// };

// export const useBalance = () => {
//     return useContext(BalanceContext);
// };

// import React, {
//     createContext,
//     useState,
//     useEffect,
//     useCallback,
//     useContext,
// } from 'react';
// import axios from 'axios';
// import TokenService from '../utils/TokenService';

// const BalanceContext = createContext();

// export const BalanceProvider = ({ children }) => {
//     const [currentBalance, setCurrentBalance] = useState(0);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [refresh, setRefresh] = useState(false);
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     const token = () => TokenService.getToken();

//     const fetchBalance = useCallback(async () => {
//         const currentToken = token();
//         if (!currentToken) {
//             console.log("Token not found, or user is not logged in.");
//             setLoading(false);
//             return;
//         }

//         try {
//             setLoading(true);
//             setError(null);

//             const headers = { Authorization: `Bearer ${currentToken}` };

//             // **1. Fetch local and Cryptomus payments (history)**
//             const paymentHistoryResponse = await axios.get(`${API_BASE_URL}/payment/history`, { headers });
//             const payments = paymentHistoryResponse.data || [];  // payments already reconciled on the backend
//             console.log(payments)
//             const totalPayments = payments.reduce((total, payment) => {
//                 if ( payment.status === "paid") {
//                   return total + parseFloat(payment.amount || 0);
//               }
//                 return total;
//             }, 0);

//             // **2. Fetch orders**
//             const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });
//              const orders = ordersResponse.data?.orders || []; // Access the array inside `data` object, set to empty array if response data or orders is null
//             const totalSpent = orders.reduce((total, order) => {
//                 if (["Pending", "In Progress", "Partial", "Completed"].includes(order.status)) { // removed "Partial"
//                     return total + parseFloat(order.calculatedPrice || 0);
//                 }
//                 return total;
//             }, 0);

//             // **3. Calculate balance**
//             const calculatedBalance = totalPayments - totalSpent; // Use totalPayments instead
//             setCurrentBalance(calculatedBalance >= 0 ? calculatedBalance : 0);

//         } catch (apiError) {
//             console.error('Error fetching data:', apiError);
//             setError(apiError.message || 'Error fetching current balance');
//             setCurrentBalance(0);
//         } finally {
//             setLoading(false);
//         }
//     }, [API_BASE_URL]);

//     useEffect(() => {
//         fetchBalance();
//     }, [fetchBalance, refresh]);

//     const refreshBalance = () => {
//         setRefresh(prev => !prev);
//     };

//     const value = {
//         currentBalance,
//         loading,
//         error,
//         refreshBalance,
//     };

//     return (
//         <BalanceContext.Provider value={value}>
//             {children}
//         </BalanceContext.Provider>
//     );
// };

// export const useBalance = () => {
//     return useContext(BalanceContext);
// };


// import React, {
//     createContext,
//     useState,
//     useEffect,
//     useCallback,
//     useContext,
// } from 'react';
// import axios from 'axios';
// import TokenService from '../utils/TokenService';

// const BalanceContext = createContext();

// export const BalanceProvider = ({ children }) => {
//     const [currentBalance, setCurrentBalance] = useState(0);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [refresh, setRefresh] = useState(false);
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     const token = () => TokenService.getToken();

//     const fetchBalance = useCallback(async () => {
//         const currentToken = token();
//         if (!currentToken) {
//             console.log("Token not found, or user is not logged in.");
//             setLoading(false);
//             return;
//         }

//         try {
//             setLoading(true);
//             setError(null);

//             const headers = { Authorization: `Bearer ${currentToken}` };

//             // **1. Fetch local and Cryptomus payments (history)**
//             const paymentHistoryResponse = await axios.get(`${API_BASE_URL}/payment/history`, { headers });
//             const payments = paymentHistoryResponse.data || [];  // payments already reconciled on the backend
//             console.log(payments)
//             const totalPayments = payments.reduce((total, payment) => {
//                 if ( payment.status === "paid") {
//                   return total + parseFloat(payment.amount || 0);
//               }
//                 return total;
//             }, 0);

//             // **2. Fetch orders**
//             const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });
//              const orders = ordersResponse.data?.orders || []; // Access the array inside `data` object, set to empty array if response data or orders is null
//             const totalSpent = orders.reduce((total, order) => {
//                 if (["Pending", "In Progress", "Partial", "Completed"].includes(order.status)) { // removed "Partial"
//                     return total + parseFloat(order.calculatedPrice || 0);
//                 }
//                 return total;
//             }, 0);

//             // **3. Calculate balance**
//             const calculatedBalance = totalPayments - totalSpent; // Use totalPayments instead
//             setCurrentBalance(calculatedBalance >= 0 ? calculatedBalance : 0);

//         } catch (apiError) {
//             console.error('Error fetching data:', apiError);
//             setError(apiError.message || 'Error fetching current balance');
//             setCurrentBalance(0);
//         } finally {
//             setLoading(false);
//         }
//     }, [API_BASE_URL]);

//     useEffect(() => {
//         fetchBalance();
//     }, [fetchBalance, refresh]);

//     const refreshBalance = () => {
//         setRefresh(prev => !prev);
//     };

//     const value = {
//         currentBalance,
//         setCurrentBalance,
//         loading,
//         error,
//         refreshBalance,
//     };

//     return (
//         <BalanceContext.Provider value={value}>
//             {children}
//         </BalanceContext.Provider>
//     );
// };

// export const useBalance = () => {
//     return useContext(BalanceContext);
// };

// // Balance/context/BalanceContext.jsx
// import React, {
//     createContext,
//     useState,
//     useEffect,
//     useCallback,
//     useContext,
//   } from 'react';
//   import axios from 'axios';
//   import TokenService from '../utils/TokenService';

//   const BalanceContext = createContext();

//   export const BalanceProvider = ({ children }) => {
//     const [currentBalance, setCurrentBalance] = useState(0);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [refresh, setRefresh] = useState(false);
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     const token = () => TokenService.getToken();

//     const fetchBalance = useCallback(async () => {
//       const currentToken = token();
//       if (!currentToken) {
//         console.log("Token not found, or user is not logged in.");
//         setLoading(false);
//         return;
//       }

//       try {
//         setLoading(true);
//         setError(null);

//         const headers = { Authorization: `Bearer ${currentToken}` };

//         // **1. Fetch local and Cryptomus payments (history)**
//         const paymentHistoryResponse = await axios.get(
//           `${API_BASE_URL}/payment/history`,
//           { headers }
//         );
//         const payments = paymentHistoryResponse.data || []; // payments already reconciled on the backend
//         console.log("Payments history", payments);
//         const totalPayments = payments.reduce((total, payment) => {
//           if (payment.status === "paid") {
//             return total + parseFloat(payment.amount || 0);
//           }
//           return total;
//         }, 0);

//         console.log("Total payments: ", totalPayments);

//         // **2. Fetch orders**
//         const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, {
//           headers,
//         });
//         const orders = ordersResponse.data?.orders || []; // Access the array inside `data` object, set to empty array if response data or orders is null
//         console.log("Orders: ", orders);
//         const totalSpent = orders.reduce((total, order) => {
//           if (
//             ["Pending", "In Progress", "Partial", "Completed"].includes(
//               order.status
//             )
//           ) {
//             // removed "Partial"
//             return total + parseFloat(order.calculatedPrice || 0);
//           }
//           return total;
//         }, 0);
//         console.log("Total spent: ", totalSpent);

//         // **3. Calculate balance**
//         const calculatedBalance = totalPayments - totalSpent; // Use totalPayments instead
//         console.log("Calculated balance:", calculatedBalance);
//         setCurrentBalance(calculatedBalance >= 0 ? calculatedBalance : 0);
//       } catch (apiError) {
//         console.error("Error fetching data:", apiError);
//         setError(apiError.message || "Error fetching current balance");
//         setCurrentBalance(0);
//       } finally {
//         setLoading(false);
//       }
//     }, [API_BASE_URL]);

//     useEffect(() => {
//       fetchBalance();
//     }, [fetchBalance, refresh]);

//     const refreshBalance = () => {
//       setRefresh((prev) => !prev);
//     };

//     const value = {
//       currentBalance,
//       setCurrentBalance,
//       loading,
//       error,
//       refreshBalance,
//     };

//     return (
//       <BalanceContext.Provider value={value}>{children}</BalanceContext.Provider>
//     );
//   };

//   export const useBalance = () => {
//     return useContext(BalanceContext);
//   };


// import React, {
//     createContext,
//     useState,
//     useEffect,
//     useCallback,
//     useContext,
// } from 'react';
// import axios from 'axios';
// import TokenService from '../utils/TokenService';

// const BalanceContext = createContext();

// export const BalanceProvider = ({ children }) => {
//     const [currentBalance, setCurrentBalance] = useState(0);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [refresh, setRefresh] = useState(false);
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     const token = () => TokenService.getToken();

//     const fetchBalance = useCallback(async () => {
//         const currentToken = token();
//         if (!currentToken) {
//             console.log("Token not found, or user is not logged in.");
//             setLoading(false);
//             return;
//         }

//         try {
//             setLoading(true);
//             setError(null);

//             const headers = { Authorization: `Bearer ${currentToken}` };

//             // **1. Fetch local and Cryptomus payments (history)**
//             const paymentHistoryResponse = await axios.get(`${API_BASE_URL}/payment/history`, { headers });
//             const payments = paymentHistoryResponse.data || [];
//             console.log("Payments Data:", payments);

//             const totalPayments = payments.reduce((total, payment) => {
//                 if (payment.status === "paid") {
//                     const amount = parseFloat(payment.amount || 0);
//                     console.log(`Payment Amount: ${amount}`); // Log each payment amount
//                     return total + amount;
//                 }
//                 return total;
//             }, 0);
//             console.log("Total Payments:", totalPayments); // Log the calculated total payments

//             // **2. Fetch orders**
//             const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });
//             const orders = ordersResponse.data?.orders || []; // Access the array inside `data` object, set to empty array if response data or orders is null
//             console.log("Orders Data:", orders);

//             const totalSpent = orders.reduce((total, order) => {
//                 if (["Pending", "In Progress", "Partial", "Completed"].includes(order.status)) { // includes partial
//                     const calculatedPrice = parseFloat(order.calculatedPrice || 0);
//                     console.log(`Order Price: ${calculatedPrice}, Status: ${order.status}`); //Log order price and status
//                     return total + calculatedPrice;
//                 }
//                 return total;
//             }, 0);

//             console.log("Total Spent:", totalSpent); // Log the calculated total spent

//             // **3. Calculate balance**
//             const calculatedBalance = totalPayments - totalSpent;
//             console.log("Calculated Balance:", calculatedBalance); // Log the calculated balance

//             setCurrentBalance(calculatedBalance >= 0 ? calculatedBalance : 0);

//         } catch (apiError) {
//             console.error('Error fetching data:', apiError);
//             setError(apiError.message || 'Error fetching current balance');
//             setCurrentBalance(0);
//         } finally {
//             setLoading(false);
//         }
//     }, [API_BASE_URL]);

//     useEffect(() => {
//         fetchBalance();
//     }, [fetchBalance, refresh]);

//     const refreshBalance = () => {
//         setRefresh(prev => !prev);
//     };

//     const value = {
//         currentBalance,
//         setCurrentBalance,
//         loading,
//         error,
//         refreshBalance,
//     };

//     return (
//         <BalanceContext.Provider value={value}>
//             {children}
//         </BalanceContext.Provider>
//     );
// };

// export const useBalance = () => {
//     return useContext(BalanceContext);
// };



// import React, {
//     createContext,
//     useState,
//     useEffect,
//     useCallback,
//     useContext,
// } from 'react';
// import axios from 'axios';
// import TokenService from '../utils/TokenService';

// const BalanceContext = createContext();

// export const BalanceProvider = ({ children }) => {
//     const [currentBalance, setCurrentBalance] = useState(0);
//     const [totalSpent, setTotalSpent] = useState(0); // Add totalSpent state
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [refresh, setRefresh] = useState(false);
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     const token = () => TokenService.getToken();

//     const fetchBalance = useCallback(async () => {
//         const currentToken = token();
//         if (!currentToken) {
//             console.log("Token not found, or user is not logged in.");
//             setLoading(false);
//             return;
//         }

//         try {
//             setLoading(true);
//             setError(null);

//             const headers = { Authorization: `Bearer ${currentToken}` };

//             // **1. Fetch local and Cryptomus payments (history)**
//             const paymentHistoryResponse = await axios.get(`${API_BASE_URL}/payment/history`, { headers });
//             const payments = paymentHistoryResponse.data || [];
//             console.log(payments)
//             const totalPayments = payments.reduce((total, payment) => {
//                 if (payment.status === "paid") {
//                     const amount = parseFloat(payment.amount || 0);
//                     return total + amount;
//                 }
//                 return total;
//             }, 0);

//             // **2. Fetch orders**
//             const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });
//             const orders = ordersResponse.data || [];

//             const calculatedTotalSpent = orders.reduce((total, order) => { // Calculate totalSpent here
//                 if (["Pending", "In Progress", "Partial", "Completed"].includes(order.status)) {
//                     return total + parseFloat(order.calculatedPrice || 0);
//                 }
//                 return total;
//             }, 0);

//             setTotalSpent(calculatedTotalSpent >= 0 ? calculatedTotalSpent : 0); // Set totalSpent state

//             // **3. Calculate balance**
//             const calculatedBalance = totalPayments - calculatedTotalSpent;

//             setCurrentBalance(calculatedBalance >= 0 ? calculatedBalance : 0);

//         } catch (apiError) {
//             console.error('Error fetching data:', apiError);
//             setError(apiError.message || 'Error fetching current balance');
//             setCurrentBalance(0);
//             setTotalSpent(0); // Reset totalSpent on error as well.
//         } finally {
//             setLoading(false);
//         }
//     }, [API_BASE_URL]);

//     useEffect(() => {
//         fetchBalance();
//     }, [fetchBalance, refresh]);

//     const refreshBalance = () => {
//         setRefresh(prev => !prev);
//     };

//     const value = {
//         currentBalance,
//         setCurrentBalance,
//         totalSpent, // Include totalSpent in the context value
//         loading,
//         error,
//         refreshBalance,
//     };

//     return (
//         <BalanceContext.Provider value={value}>
//             {children}
//         </BalanceContext.Provider>
//     );
// };

// export const useBalance = () => {
//     return useContext(BalanceContext);
// };


// // BalanceContext.jsx
// import React, {
//     createContext,
//     useState,
//     useEffect,
//     useCallback,
//     useContext,
// } from 'react';
// import axios from 'axios';
// import { useAuth } from '../../auth/AuthContext'; // Import the auth context


// const BalanceContext = createContext();

// export const BalanceProvider = ({ children }) => {
//     const [currentBalance, setCurrentBalance] = useState(0);
//     const [totalSpent, setTotalSpent] = useState(0); // Add totalSpent state
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [refresh, setRefresh] = useState(false);
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     const { accessToken } = useAuth(); // Access the accessToken from AuthContext


//     const fetchBalance = useCallback(async () => {
//         if (!accessToken) {
//             console.log("Token not found, or user is not logged in.");
//             setLoading(false);
//             return;
//         }

//         try {
//             setLoading(true);
//             setError(null);

//             const headers = { Authorization: `Bearer ${accessToken}` };

//             // **1. Fetch local and Cryptomus payments (history)**
//             const paymentHistoryResponse = await axios.get(`${API_BASE_URL}/payment/history`, { headers });
//             const payments = paymentHistoryResponse.data || [];
//             const totalPayments = payments.reduce((total, payment) => {
//                 if (payment.status === "paid") {
//                     const amount = parseFloat(payment.amount || 0);
//                     return total + amount;
//                 }
//                 return total;
//             }, 0);
//             console.log(paymentHistoryResponse)
//             // **2. Fetch orders**
//             const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });
//             const orders = ordersResponse.data || [];

//             const calculatedTotalSpent = orders.reduce((total, order) => { // Calculate totalSpent here
//                 if (["Pending", "In Progress", "Partial", "Completed"].includes(order.status)) {
//                     return total + parseFloat(order.calculatedPrice || 0);
//                 }
//                 return total;
//             }, 0);

//             setTotalSpent(calculatedTotalSpent >= 0 ? calculatedTotalSpent : 0); // Set totalSpent state

//             // **3. Calculate balance**
//             const calculatedBalance = totalPayments - calculatedTotalSpent;

//             setCurrentBalance(calculatedBalance >= 0 ? calculatedBalance : 0);

//         } catch (apiError) {
//             console.error('Error fetching data:', apiError);
//             setError(apiError.message || 'Error fetching current balance');
//             setCurrentBalance(0);
//             setTotalSpent(0); // Reset totalSpent on error as well.
//         } finally {
//             setLoading(false);
//         }
//     }, [API_BASE_URL, accessToken]);

//     useEffect(() => {
//         if (accessToken) { // Only fetch when accessToken is available
//             fetchBalance();
//         } else {
//             // Possibly reset balance if token is removed (logout scenario)
//             setCurrentBalance(0);
//             setTotalSpent(0);
//             setLoading(false);
//             setError(null);
//         }
//     }, [accessToken, fetchBalance]); // accessToken is now a dependency

//     const refreshBalance = () => {
//         setRefresh(prev => !prev);
//     };

//     const value = {
//         currentBalance,
//         setCurrentBalance,
//         totalSpent, // Include totalSpent in the context value
//         loading,
//         error,
//         refreshBalance,
//     };

//     return (
//         <BalanceContext.Provider value={value}>
//             {children}
//         </BalanceContext.Provider>
//     );
// };

// export const useBalance = () => {
//     return useContext(BalanceContext);
// };

// BalanceContext.jsx
import React, {
    createContext,
    useState,
    useEffect,
    useCallback,
    useContext,
} from 'react';
import axios from 'axios';
import { useAuth } from '../../auth/AuthContext'; // Import the auth context


const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
    const [currentBalance, setCurrentBalance] = useState(0);
    const [totalSpent, setTotalSpent] = useState(0); // Add totalSpent state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshCount, setRefreshCount] = useState(0); // Use a counter
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const { accessToken } = useAuth(); // Access the accessToken from AuthContext


    const fetchBalance = useCallback(async () => {
        if (!accessToken) {
            console.log("Token not found, or user is not logged in.");
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const headers = { Authorization: `Bearer ${accessToken}` };

            // **1. Fetch local and Cryptomus payments (history)**
            const paymentHistoryResponse = await axios.get(`${API_BASE_URL}/payment/history`, { headers });
            // Handle cases where paymentHistoryResponse.data is not an array
            const payments = Array.isArray(paymentHistoryResponse.data) ? paymentHistoryResponse.data : [];
            const totalPayments = payments.reduce((total, payment) => {
                if (payment.status === "paid") {
                    const amount = parseFloat(payment.amount || 0);
                    return total + amount;
                }
                return total;
            }, 0);
            // **2. Fetch orders**
            const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });
            // Handle cases where ordersResponse.data is not an array
            const orders = Array.isArray(ordersResponse.data) ? ordersResponse.data : [];

            const calculatedTotalSpent = orders.reduce((total, order) => { // Calculate totalSpent here
                if (["Pending", "In Progress", "Partial", "Completed"].includes(order.status)) {
                    return total + parseFloat(order.calculatedPrice || 0);
                }
                return total;
            }, 0);

            setTotalSpent(calculatedTotalSpent >= 0 ? calculatedTotalSpent : 0); // Set totalSpent state

            // **3. Calculate balance**
            const calculatedBalance = totalPayments - calculatedTotalSpent;

            setCurrentBalance(calculatedBalance >= 0 ? calculatedBalance : 0);

        } catch (apiError) {
            console.error('Error fetching data:', apiError);
            setError(apiError.message || 'Error fetching current balance');
            setCurrentBalance(0);
            setTotalSpent(0); // Reset totalSpent on error as well.
        } finally {
            setLoading(false);
        }
    }, [API_BASE_URL, accessToken]);

    useEffect(() => {
        if (accessToken) { // Only fetch when accessToken is available
            fetchBalance();
        } else {
            // Possibly reset balance if token is removed (logout scenario)
            setCurrentBalance(0);
            setTotalSpent(0);
            setLoading(false);
            setError(null);
        }
    }, [accessToken, fetchBalance, refreshCount]); // Include refreshCount

    const refreshBalance = () => {
        setRefreshCount(prev => prev + 1); // Increment the counter
    };

    const value = {
        currentBalance,
        setCurrentBalance,
        totalSpent, // Include totalSpent in the context value
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