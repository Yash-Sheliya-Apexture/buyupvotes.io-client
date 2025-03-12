// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaWallet, FaMoneyBillWave } from "react-icons/fa";
// import axios from "axios";
// import Skeleton from "react-loading-skeleton";
// import { FaClock } from "react-icons/fa6";
// import { BsCartCheckFill } from "react-icons/bs";
// import useCurrentBalance from '../hooks/useCurrentBalance';
// import useMySpent from '../hooks/useMySpent';
// import TokenService from "../../../utils/TokenService";  // Import TokenService
// import { useParams } from "react-router-dom";

// const data = [
//     {
//         id: 1,
//         label: "Total Orders",
//         icon: <BsCartCheckFill />,
//     },
//     {
//         id: 2,
//         label: "Current Balance",
//         icon: <FaWallet />,
//     },
//     {
//         id: 3,
//         label: "My Spent",
//         icon: <FaMoneyBillWave />,
//     },
//     {
//         id: 4,
//         label: "Order in Progress",
//         icon: <FaClock />,
//     },

// ];

// const DataSection = () => {
//     const [dataList, setDataList] = useState(data);
//     const [loadingOthers, setLoadingOthers] = useState(true);
//     const navigate = useNavigate();
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     const token = TokenService.getToken();  // Get token from TokenService
//     const { userId } = useParams();  // Access userId from URL

//     const { currentBalance, loading: balanceLoading, error: balanceError } = useCurrentBalance(API_BASE_URL, token, userId); // pass userId
//     const { mySpent, loading: spentLoading, error: spentError } = useMySpent(API_BASE_URL, token, userId, currentBalance); // pass userId

//     useEffect(() => {
//         const fetchData = async () => {
//             if (!token) {
//                 setLoadingOthers(false);
//                 return;
//             }

//             try {
//                 setLoadingOthers(true);
//                 const headers = { Authorization: `Bearer ${token}` };

//                 // Fetch Orders
//                 const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });

//                 let totalOrders = 0;
//                 let ordersInProgress = 0;

//                 if (ordersResponse.status === 200 && Array.isArray(ordersResponse.data)) {
//                     const ordersData = ordersResponse.data;
//                     totalOrders = ordersData.length;
//                     ordersInProgress = ordersData.filter(order => order.status === "In Progress").length;
//                 }

//                 const updatedData = data.map((item) => {
//                     if (item.id === 1) {
//                         return {
//                             ...item,
//                             remainingVotes: totalOrders,
//                         };
//                     }
//                     if (item.id === 4) {
//                         return { ...item, remainingVotes: ordersInProgress };
//                     }
//                     return item;
//                 });

//                 setDataList(updatedData);
//             } catch (apiError) {
//                 console.error("Error fetching data:", apiError);
//             } finally {
//                 setLoadingOthers(false);
//             }
//         };

//         fetchData();
//     }, [API_BASE_URL, token]);


//     const isLoadingValues = balanceLoading || spentLoading;
//     const hasErrorValues = balanceError || spentError;

//     return (
//         <section className="w-full my-5 Data-Section">
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
//                 {dataList.map((item) => (
//                     <div
//                         key={item.id}
//                         className="w-full h-full"

//                     >
//                         <div
//                             className="flex items-center justify-between w-full h-full p-4 bg-white border border-gray-300 shadow-main rounded-small"
//                             style={{ minHeight: "100px" }}
//                         >
//                             {/* Left Section */}
//                             <div className="">
//                                 {/* Conditional rendering for the data values */}
//                                 {item.id === 2 ? ( //Current balance
//                                     isLoadingValues ? (
//                                         <Skeleton height={25} width={70} />
//                                     ) : hasErrorValues ? (
//                                         <p className="text-red-500">Error: {balanceError || spentError}</p>
//                                     ) : (
//                                         <p className="mb-1 font-bold lg:text-large text-sub-color">
//                                             ${currentBalance ? currentBalance : '0'}
//                                         </p>
//                                     )
//                                 ) : item.id === 3 ? ( //My spent
//                                     isLoadingValues ? (
//                                         <Skeleton height={25} width={70} />
//                                     ) : hasErrorValues ? (
//                                         <p className="text-red-500">Error: {balanceError || spentError}</p>
//                                     ) : (
//                                         <p className="mb-1 font-bold lg:text-large text-sub-color">
//                                             ${mySpent ? mySpent : '0'}
//                                         </p>
//                                     )
//                                 ) : (
//                                     loadingOthers ? (
//                                         <Skeleton height={25} width={70} />
//                                     ) : (
//                                         <p className="mb-1 font-bold lg:text-large text-sub-color">
//                                             {item.remainingVotes}
//                                         </p>
//                                     )
//                                 )}



//                                 <p className="text-gray-900">
//                                     {item.label}
//                                 </p>
//                             </div>

//                             {/* Icon Section */}
//                             <div className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 text-xl text-main-color">
//                                 {item.icon}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default DataSection;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaWallet, FaMoneyBillWave } from "react-icons/fa";
// import axios from "axios";
// import Skeleton from "react-loading-skeleton";
// import { FaClock } from "react-icons/fa6";
// import { BsCartCheckFill } from "react-icons/bs";
// import useCurrentBalance from '../hooks/useCurrentBalance';
// import useMySpent from '../hooks/useMySpent';
// import TokenService from "../../../utils/TokenService";
// import { useParams } from "react-router-dom";

// const data = [
//     {
//         id: 1,
//         label: "Total Orders",
//         icon: <BsCartCheckFill />,
//         dataKey: "totalOrders", // Key for data from API (orders)
//     },
//     {
//         id: 2,
//         label: "Current Balance",
//         icon: <FaWallet />,
//         hookKey: "currentBalance", // Key for hook data
//     },
//     {
//         id: 3,
//         label: "My Spent",
//         icon: <FaMoneyBillWave />,
//         hookKey: "mySpent", // Key for hook data
//     },
//     {
//         id: 4,
//         label: "Order in Progress",
//         icon: <FaClock />,
//         dataKey: "ordersInProgress", // Key for data from API (orders)
//     },
// ];

// const DataSection = () => {
//     const [apiData, setApiData] = useState({}); // Stores API data (totalOrders, ordersInProgress)
//     const [loadingApi, setLoadingApi] = useState(true); // Loading state for API
//     const navigate = useNavigate();
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     const token = TokenService.getToken();
//     const { userId } = useParams();

//     const { currentBalance, loading: balanceLoading, error: balanceError } = useCurrentBalance(API_BASE_URL, token); // removed userId. Don't need it.
//     const { mySpent, loading: spentLoading, error: spentError } = useMySpent(API_BASE_URL, token);  // removed userId. Don't need it.

//     useEffect(() => {
//         const fetchData = async () => {
//             if (!token) {
//                 setLoadingApi(false); // Only API related loading
//                 return;
//             }

//             try {
//                 setLoadingApi(true);
//                 const headers = { Authorization: `Bearer ${token}` };
//                 const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });

//                 if (ordersResponse.status === 200 && Array.isArray(ordersResponse.data)) {
//                     const ordersData = ordersResponse.data;
//                     const totalOrders = ordersData.length;
//                     const ordersInProgress = ordersData.filter(order => order.status === "In Progress").length;

//                     // Store results in the state
//                     setApiData({
//                         totalOrders,
//                         ordersInProgress,
//                     });
//                 } else {
//                     console.warn("Unexpected orders API response:", ordersResponse);
//                 }
//             } catch (apiError) {
//                 console.error("Error fetching orders data:", apiError);
//             } finally {
//                 setLoadingApi(false);
//             }
//         };

//         fetchData();
//     }, [API_BASE_URL, token]);


//     const isLoadingValues = balanceLoading || spentLoading;
//     const hasErrorValues = balanceError || spentError;

//     //Hook data
//     const hookData = {
//         currentBalance,
//         mySpent
//     };

//     return (
//         <section className="w-full my-5 Data-Section">
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
//                 {data.map((item) => (
//                     <div
//                         key={item.id}
//                         className="w-full h-full"

//                     >
//                         <div
//                             className="flex items-center justify-between w-full h-full p-4 bg-white border border-gray-300 shadow-main rounded-small"
//                             style={{ minHeight: "100px" }}
//                         >
//                             {/* Left Section */}
//                             <div className="">
//                                 {item.hookKey ? ( // check if data from hooks
//                                     isLoadingValues ? (
//                                         <Skeleton height={25} width={70} />
//                                     ) : hasErrorValues ? (
//                                         <p className="text-red-500">Error: {balanceError || spentError}</p>
//                                     ) : (
//                                         <p className="mb-1 font-bold lg:text-large text-sub-color">
//                                             ${hookData[item.hookKey] ? hookData[item.hookKey] : '0'}
//                                         </p>
//                                     )
//                                 ) : ( // data from API
//                                     loadingApi ? (
//                                         <Skeleton height={25} width={70} />
//                                     ) : (
//                                         <p className="mb-1 font-bold lg:text-large text-sub-color">
//                                             {apiData[item.dataKey] !== undefined ? apiData[item.dataKey] : '0'}
//                                         </p>
//                                     )
//                                 )}


//                                 <p className="text-gray-900">
//                                     {item.label}
//                                 </p>
//                             </div>

//                             {/* Icon Section */}
//                             <div className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 text-xl text-main-color">
//                                 {item.icon}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default DataSection;


// // DataSection.jsx
// import React, { useState, useEffect, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaWallet, FaMoneyBillWave } from "react-icons/fa";
// import axios from "axios";
// import Skeleton from "react-loading-skeleton";
// import { FaClock } from "react-icons/fa6";
// import { BsCartCheckFill } from "react-icons/bs";
// import { useBalance } from '../../../context/BalanceContext'; // Import useBalance
// import useMySpent from '../hooks/useMySpent';
// import TokenService from "../../../utils/TokenService";
// import { useParams } from "react-router-dom";

// const data = [
//     {
//         id: 1,
//         label: "Total Orders",
//         icon: <BsCartCheckFill />,
//         dataKey: "totalOrders", // Key for data from API (orders)
//     },
//     {
//         id: 2,
//         label: "Current Balance",
//         icon: <FaWallet />,
//         hookKey: "currentBalance", // Key for hook data
//     },
//     {
//         id: 3,
//         label: "My Spent",
//         icon: <FaMoneyBillWave />,
//         hookKey: "mySpent", // Key for hook data
//     },
//     {
//         id: 4,
//         label: "Order in Progress",
//         icon: <FaClock />,
//         dataKey: "ordersInProgress", // Key for data from API (orders)
//     },
// ];

// const DataSection = () => {
//     const [apiData, setApiData] = useState({}); // Stores API data (totalOrders, ordersInProgress)
//     const [loadingApi, setLoadingApi] = useState(true); // Loading state for API
//     const navigate = useNavigate();
//     const token = TokenService.getToken();
//     const { userId } = useParams();
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     const { currentBalance, loading: balanceLoading, error: balanceError } = useBalance(); // Use useBalance
//     const { mySpent, loading: spentLoading, error: spentError } = useMySpent(API_BASE_URL, token);

//     useEffect(() => {
//         const fetchData = async () => {
//             if (!token) {
//                 setLoadingApi(false); // Only API related loading
//                 return;
//             }

//             try {
//                 setLoadingApi(true);
//                 const headers = { Authorization: `Bearer ${token}` };
//                 const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });

//                 if (ordersResponse.status === 200 && Array.isArray(ordersResponse.data)) {
//                     const ordersData = ordersResponse.data;
//                     const totalOrders = ordersData.length;
//                     const ordersInProgress = ordersData.filter(order => order.status === "In Progress").length;

//                     // Store results in the state
//                     setApiData({
//                         totalOrders,
//                         ordersInProgress,
//                     });
//                 } else {
//                     console.warn("Unexpected orders API response:", ordersResponse);
//                 }
//             } catch (apiError) {
//                 console.error("Error fetching orders data:", apiError);
//             } finally {
//                 setLoadingApi(false);
//             }
//         };

//         fetchData();
//     }, [API_BASE_URL, token]);


//     const isLoadingValues = balanceLoading || spentLoading;
//     const hasErrorValues = balanceError || spentError;

//     //Hook data
//     const hookData = {
//         currentBalance,
//         mySpent
//     };

//     return (
//         <section className="w-full my-5 Data-Section">
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
//                 {data.map((item) => (
//                     <div
//                         key={item.id}
//                         className="w-full h-full"

//                     >
//                         <div
//                             className="flex items-center justify-between w-full h-full p-4 bg-white border border-gray-300 shadow-main rounded-small"
//                             style={{ minHeight: "100px" }}
//                         >
//                             {/* Left Section */}
//                             <div className="">
//                                 {item.hookKey ? ( // check if data from hooks
//                                     isLoadingValues ? (
//                                         <Skeleton height={25} width={70} />
//                                     ) : hasErrorValues ? (
//                                         <p className="text-red-500">Error: {balanceError || spentError}</p>
//                                     ) : (
//                                         <p className="mb-1 font-bold lg:text-large text-sub-color">
//                                             ${hookData[item.hookKey] ? hookData[item.hookKey] : '0'}
//                                         </p>
//                                     )
//                                 ) : ( // data from API
//                                     loadingApi ? (
//                                         <Skeleton height={25} width={70} />
//                                     ) : (
//                                         <p className="mb-1 font-bold lg:text-large text-sub-color">
//                                             {apiData[item.dataKey] !== undefined ? apiData[item.dataKey] : '0'}
//                                         </p>
//                                     )
//                                 )}


//                                 <p className="text-gray-900">
//                                     {item.label}
//                                 </p>
//                             </div>

//                             {/* Icon Section */}
//                             <div className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 text-xl text-main-color">
//                                 {item.icon}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default DataSection;



// import React, { useState, useEffect, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaWallet, FaMoneyBillWave } from "react-icons/fa";
// import axios from "axios";
// import Skeleton from "react-loading-skeleton";
// import { FaClock } from "react-icons/fa6";
// import { BsCartCheckFill } from "react-icons/bs";
// import { useBalance } from '../../context/BalanceContext'; // Import useBalance
// import useMySpent from '../../context/useMySpent';
// import TokenService from "../../../utils/TokenService";
// import { useParams } from "react-router-dom";

// const data = [
//     {
//         id: 1,
//         label: "Total Orders",
//         icon: <BsCartCheckFill />,
//         dataKey: "totalOrders", // Key for data from API (orders)
//     },
//     {
//         id: 2,
//         label: "Current Balance",
//         icon: <FaWallet />,
//         hookKey: "currentBalance", // Key for hook data
//     },
//     {
//         id: 3,
//         label: "My Spent",
//         icon: <FaMoneyBillWave />,
//         hookKey: "mySpent", // Key for hook data
//     },
//     {
//         id: 4,
//         label: "Order in Progress",
//         icon: <FaClock />,
//         dataKey: "ordersInProgress", // Key for data from API (orders)
//     },
// ];

// const DataSection = () => {
//     const [apiData, setApiData] = useState({}); // Stores API data (totalOrders, ordersInProgress)
//     const [loadingApi, setLoadingApi] = useState(true); // Loading state for API
//     const navigate = useNavigate();
//     const token = TokenService.getToken();
//     const { userId } = useParams();
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     const { currentBalance, loading: balanceLoading, error: balanceError , refreshBalance} = useBalance(); // Use useBalance
//     const { mySpent, loading: spentLoading, error: spentError } = useMySpent(API_BASE_URL, token);

//     //UseEffect to fetch Total Orders, Orders In Progress on reload
//     useEffect(() => {
//         const fetchData = async () => {
//             if (!token) {
//                 setLoadingApi(false); // Only API related loading
//                 return;
//             }

//             try {
//                 setLoadingApi(true);
//                 const headers = { Authorization: `Bearer ${token}` };
//                 const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });

//                 if (ordersResponse.status === 200 && Array.isArray(ordersResponse.data)) {
//                     const ordersData = ordersResponse.data;
//                     const totalOrders = ordersData.length;
//                     const ordersInProgress = ordersData.filter(order => order.status === "In Progress").length;

//                     // Store results in the state
//                     setApiData({
//                         totalOrders,
//                         ordersInProgress,
//                     });
//                 } else {
//                     console.warn("Unexpected orders API response:", ordersResponse);
//                 }
//             } catch (apiError) {
//                 console.error("Error fetching orders data:", apiError);
//             } finally {
//                 setLoadingApi(false);
//             }
//         };

//         fetchData();
//     }, [API_BASE_URL, token]);


//     const isLoadingValues = balanceLoading || spentLoading;
//     const hasErrorValues = balanceError || spentError;

//     //Hook data
//     const hookData = {
//         currentBalance,
//         mySpent
//     };

//     return (
//         <section className="w-full my-5 Data-Section">
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
//                 {data.map((item) => (
//                     <div
//                         key={item.id}
//                         className="w-full h-full"

//                     >
//                         <div
//                             className="flex items-center justify-between w-full h-full p-4 bg-white border border-gray-300 shadow-main rounded-small"
//                             style={{ minHeight: "100px" }}
//                         >
//                             {/* Left Section */}
//                             <div className="">
//                                 {item.hookKey ? ( // check if data from hooks
//                                     isLoadingValues ? (
//                                         <Skeleton height={25} width={70} />
//                                     ) : hasErrorValues ? (
//                                         <p className="text-red-500">Error: {balanceError || spentError}</p>
//                                     ) : (
//                                         <p className="mb-1 font-bold lg:text-large text-sub-color">
//                                             ${hookData[item.hookKey] ? hookData[item.hookKey] : '0'}
//                                         </p>
//                                     )
//                                 ) : ( // data from API
//                                     loadingApi ? (
//                                         <Skeleton height={25} width={70} />
//                                     ) : (
//                                         <p className="mb-1 font-bold lg:text-large text-sub-color">
//                                             {apiData[item.dataKey] !== undefined ? apiData[item.dataKey] : '0'}
//                                         </p>
//                                     )
//                                 )}


//                                 <p className="text-gray-900">
//                                     {item.label}
//                                 </p>
//                             </div>

//                             {/* Icon Section */}
//                             <div className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 text-xl text-main-color">
//                                 {item.icon}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default DataSection;

// Dashboard/DataSection.jsx
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FaWallet, FaMoneyBillWave } from "react-icons/fa";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { FaClock } from "react-icons/fa6";
import { BsCartCheckFill } from "react-icons/bs";
import { useBalance } from '../../context/BalanceContext'; // Import useBalance
import useMySpent from '../../context/useMySpent';
import TokenService from "../../../utils/TokenService";
import { useParams } from "react-router-dom";

const data = [
    {
        id: 1,
        label: "Total Orders",
        icon: <BsCartCheckFill />,
        dataKey: "totalOrders", // Key for data from API (orders)
    },
    {
        id: 2,
        label: "Current Balance",
        icon: <FaWallet />,
        hookKey: "currentBalance", // Key for hook data
    },
    {
        id: 3,
        label: "My Spent",
        icon: <FaMoneyBillWave />,
        hookKey: "mySpent", // Key for hook data
    },
    {
        id: 4,
        label: "Order in Progress",
        icon: <FaClock />,
        dataKey: "ordersInProgress", // Key for data from API (orders)
    },
];

const DataSection = () => {
    const [apiData, setApiData] = useState({}); // Stores API data (totalOrders, ordersInProgress)
    const [loadingApi, setLoadingApi] = useState(true); // Loading state for API
    const navigate = useNavigate();
    const token = TokenService.getToken();
    const { userId } = useParams();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const { currentBalance, loading: balanceLoading, error: balanceError } = useBalance(); // Use useBalance
    const { mySpent, loading: spentLoading, error: spentError, refreshSpent } = useMySpent(API_BASE_URL, token); // Destructure refreshSpent

    //UseEffect to fetch Total Orders, Orders In Progress on reload
    useEffect(() => {
        const fetchData = async () => {
            if (!token) {
                setLoadingApi(false); // Only API related loading
                return;
            }

            try {
                setLoadingApi(true);
                const headers = { Authorization: `Bearer ${token}` };
                const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });

                // Check if the response is an array before processing
                if (ordersResponse.status === 200 && Array.isArray(ordersResponse.data)) {
                    const ordersData = ordersResponse.data;
                    const totalOrders = ordersData.length;
                    const ordersInProgress = ordersData.filter(order => order.status === "In Progress").length;

                    // Store results in the state
                    setApiData({
                        totalOrders,
                        ordersInProgress,
                    });
                } else {
                    // Handle the case where it's not an array (e.g., no orders)
                    setApiData({
                        totalOrders: 0,
                        ordersInProgress: 0,
                    });
                    console.warn("Unexpected orders API response:", ordersResponse);
                }
            } catch (apiError) {
                console.error("Error fetching orders data:", apiError);
            } finally {
                setLoadingApi(false);
            }
        };

        fetchData();
    }, [API_BASE_URL, token]);


    const isLoadingValues = balanceLoading || spentLoading;
    const hasErrorValues = balanceError || spentError;

    //Hook data
    const hookData = {
        currentBalance,
        mySpent
    };

    return (
        <section className="w-full my-5 Data-Section">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="w-full h-full"

                    >
                        <div
                            className="flex items-center justify-between w-full h-full p-4 bg-white border border-gray-300 shadow-main rounded-small"
                            style={{ minHeight: "100px" }}
                        >
                            {/* Left Section */}
                            <div className="">
                                {item.hookKey ? ( // check if data from hooks
                                    isLoadingValues ? (
                                        <Skeleton height={25} width={70} />
                                    ) : hasErrorValues ? (
                                        <p className="text-red-500">Error: {balanceError || spentError}</p>
                                    ) : (
                                        <p className="mb-1 font-bold lg:text-large text-sub-color">
                                            ${hookData[item.hookKey] ? hookData[item.hookKey] : '0'}
                                        </p>
                                    )
                                ) : ( // data from API
                                    loadingApi ? (
                                        <Skeleton height={25} width={70} />
                                    ) : (
                                        <p className="mb-1 font-bold lg:text-large text-sub-color">
                                            {apiData[item.dataKey] !== undefined ? apiData[item.dataKey] : '0'}
                                        </p>
                                    )
                                )}


                                <p className="text-gray-900">
                                    {item.label}
                                </p>
                            </div>

                            {/* Icon Section */}
                            <div className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 text-xl text-main-color">
                                {item.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DataSection;
