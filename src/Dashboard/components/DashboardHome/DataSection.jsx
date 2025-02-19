// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaWallet } from "react-icons/fa";
// import axios from "axios";
// import Skeleton from "react-loading-skeleton";
// import { FaClock } from "react-icons/fa6";
// import { FaSquarePlus } from "react-icons/fa6";
// import { FaReddit } from "react-icons/fa6";
// import { FaFileCode } from "react-icons/fa6";
// import { BsCartCheckFill } from "react-icons/bs";

// const data = [
//   {
//     id: 1,
//     remainingVotes: 0,
//     label: "Votes remaining",
//     link: "dashboard/pricing",
//     icon: <FaWallet />,
//   },
//   {
//     id: 2,
//     remainingVotes: 0,
//     label: "Total Orders",
//     link: "dashboard/upvoteorder",
//     icon: <BsCartCheckFill />,
//   },
//   {
//     id: 3,
//     remainingVotes: 0,
//     label: "Order in Progress",
//     link: "dashboard/upvoteorder",
//     icon: <FaClock />,
//   },
// ];

// const DataSection = () => {
//   const [dataList, setDataList] = useState(data);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const fetchData = async () => {
//       const token = localStorage.getItem("authToken");
//       if (!token) {
//         setLoading(false);
//         return;
//       }

//       try {
//         setLoading(true);
//         const headers = { Authorization: `Bearer ${token}` };

//         const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, {
//           headers,
//         });

//         let completedAmount = 0;
//         // Check if ordersResponse.data is an array before using reduce
//         if (
//           ordersResponse.status === 200 &&
//           Array.isArray(ordersResponse.data)
//         ) {
//           completedAmount = ordersResponse.data.reduce(
//             (total, order) => total + parseInt(order.quantity || 0, 10),
//             0
//           );
//         }

//         const ordersInProgress =
//           ordersResponse.status === 200 && Array.isArray(ordersResponse.data)
//             ? ordersResponse.data.filter(
//                 (order) => order.status === "In Progress"
//               ).length
//             : 0;

//         // Fetch Payments
//         const paymentsResponse = await axios.get(`${API_BASE_URL}/payment`, {
//           headers,
//         });

//         let amountTotal = 0;
//         if (paymentsResponse.status === 200 && paymentsResponse.data) {
//           amountTotal = paymentsResponse.data.tokens || 0;
//         }

//         const calculatedBalance = amountTotal - completedAmount;

//         const updatedData = data.map((item) => {
//           if (item.id === 1) {
//             return {
//               ...item,
//               remainingVotes: calculatedBalance >= 0 ? calculatedBalance : 0,
//             };
//           }
//           if (item.id === 2) {
//             return {
//               ...item,
//               remainingVotes:
//                 ordersResponse.status === 200 &&
//                 Array.isArray(ordersResponse.data)
//                   ? ordersResponse.data.length
//                   : 0,
//             };
//           }
//           if (item.id === 3) {
//             return { ...item, remainingVotes: ordersInProgress };
//           }
//           return item;
//         });

//         setDataList(updatedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setDataList(
//           data.map((item) => {
//             if (item.id === 1 || item.id === 2 || item.id === 3) {
//               return { ...item, remainingVotes: 0 };
//             }
//             return item;
//           })
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [API_BASE_URL]);

//   const handleCardClick = (link) => {
//     if (link) navigate(`/${link}`);
//   };

//   return (
//     <section className="w-full my-5 Data-Section">
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {loading
//           ? Array.from({ length: 3 }).map((_, index) => (
//               <div key={index} className="w-full h-full">
//                 <div
//                   className="flex items-center justify-between w-full h-full p-4 bg-white shadow-main rounded-small"
//                   style={{ minHeight: "100px" }}
//                 >
//                   <div>
//                     <Skeleton height={25} width={70} />
//                     <Skeleton height={20} width={100} />
//                   </div>
//                   <div className="p-4 text-main-color lg:text-large text-basic">
//                     <Skeleton height={30} width={30} />
//                   </div>
//                 </div>
//               </div>
//             ))
//           : dataList.map((item) => (
//               <div
//                 key={item.id}
//                 className="w-full h-full cursor-pointer"
//                 onClick={() => handleCardClick(item.link)}
//               >
//                 <div
//                   className="flex items-center justify-between w-full h-full p-4 bg-white border border-gray-300 shadow-main rounded-small"
//                   style={{ minHeight: "100px" }}
//                 >
//                   {/* Left Section */}
//                   <div className="">
//                     {item.remainingVotes !== undefined && (
//                       <p className="mb-2 font-bold lg:text-large text-sub-color">
//                         {item.remainingVotes}
//                       </p>
//                     )}
//                     <p className="font-medium lg:text-base text-para-color">
//                       {item.label}
//                     </p>
//                   </div>

//                   {/* Icon Section */}
//                   <div className="p-4 text-main-color lg:text-large text-basic">
//                     {item.icon}
//                   </div>
//                 </div>
//               </div>
//             ))}
//       </div>
//     </section>
//   );
// };

// export default DataSection;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaWallet } from "react-icons/fa";
// import axios from "axios";
// import Skeleton from "react-loading-skeleton";
// import { FaClock } from "react-icons/fa6";
// import { BsCartCheckFill } from "react-icons/bs";

// const data = [
//   {
//     id: 1,
//     remainingVotes: 0,
//     label: "Votes remaining",
//     link: "dashboard/pricing",
//     icon: <FaWallet />,
//   },
//   {
//     id: 2,
//     remainingVotes: 0,
//     label: "Total Orders",
//     link: "dashboard/upvoteorder",
//     icon: <BsCartCheckFill />,
//   },
//   {
//     id: 3,
//     remainingVotes: 0,
//     label: "Order in Progress",
//     link: "dashboard/upvoteorder",
//     icon: <FaClock />,
//   },
// ];

// const DataSection = () => {
//   const [dataList, setDataList] = useState(data);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const fetchData = async () => {
//       const token = localStorage.getItem("authToken");
//       if (!token) {
//         setLoading(false);
//         return;
//       }

//       try {
//         setLoading(true);
//         const headers = { Authorization: `Bearer ${token}` };

//         const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, {
//           headers,
//         });
//         console.log(ordersResponse)
//         let completedAmount = 0;
//         let totalOrders = 0;
//         let ordersInProgress = 0;

//         if (
//           ordersResponse.status === 200 &&
//           Array.isArray(ordersResponse.data)
//         ) {
//           const ordersData = ordersResponse.data;

//           // Calculate total orders
//           totalOrders = ordersData.length;

//           // Calculate orders in progress
//           ordersInProgress = ordersData.filter(
//             (order) => order.status === "In Progress"
//           ).length;

//           // Calculate completed quantity votes, considering "Cancelled" orders
//           completedAmount = ordersData.reduce((total, order) => {
//             if (order.status !== "Canceled") {
//               return total + parseInt(order.calculatedPrice || 0, 10);
//             }
//             return total;
//           }, 0);
//           console.log(completedAmount)
//         }

//         // Fetch Payments
//         const paymentsResponse = await axios.get(`${API_BASE_URL}/payment`, {
//           headers,
//         });

//         let amountTotal = 0;
//         if (paymentsResponse.status === 200 && paymentsResponse.data) {
//           console.log(paymentsResponse.data);
//           amountTotal = paymentsResponse.data.amount || 0;
//           console.log(paymentsResponse.data.amount)
//         }
//         // console.log(amountTotal)
//         const calculatedBalance = amountTotal - completedAmount;
//         const updatedData = data.map((item) => {
//           if (item.id === 1) {
//             return {
//               ...item,
//               remainingVotes: calculatedBalance >= 0 ? calculatedBalance : 0,
//             };
//           }
//           if (item.id === 2) {
//             return {
//               ...item,
//               remainingVotes: totalOrders,
//             };
//           }
//           if (item.id === 3) {
//             return { ...item, remainingVotes: ordersInProgress };
//           }
//           return item;
//         });

//         setDataList(updatedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setDataList(
//           data.map((item) => {
//             if (item.id === 1 || item.id === 2 || item.id === 3) {
//               return { ...item, remainingVotes: 0 };
//             }
//             return item;
//           })
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [API_BASE_URL]);

//   const handleCardClick = (link) => {
//     if (link) navigate(`/${link}`);
//   };

//   return (
//     <section className="w-full my-5 Data-Section">
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {loading
//           ? Array.from({ length: 3 }).map((_, index) => (
//               <div key={index} className="w-full h-full">
//                 <div
//                   className="flex items-center justify-between w-full h-full p-4 bg-white shadow-main rounded-small"
//                   style={{ minHeight: "100px" }}
//                 >
//                   <div>
//                     <Skeleton height={25} width={70} />
//                     <Skeleton height={20} width={100} />
//                   </div>
//                   <div className="p-4 text-main-color lg:text-large text-basic">
//                     <Skeleton height={30} width={30} />
//                   </div>
//                 </div>
//               </div>
//             ))
//           : dataList.map((item) => (
//               <div
//                 key={item.id}
//                 className="w-full h-full cursor-pointer"
//                 onClick={() => handleCardClick(item.link)}
//               >
//                 <div
//                   className="flex items-center justify-between w-full h-full p-4 bg-white border border-gray-300 shadow-main rounded-small"
//                   style={{ minHeight: "100px" }}
//                 >
//                   {/* Left Section */}
//                   <div className="">
//                     {item.remainingVotes !== undefined && (
//                       <p className="mb-2 font-bold lg:text-large text-sub-color">
//                         {item.remainingVotes}
//                       </p>
//                     )}
//                     <p className="font-medium lg:text-base text-para-color">
//                       {item.label}
//                     </p>
//                   </div>

//                   {/* Icon Section */}
//                   <div className="p-4 text-main-color lg:text-large text-basic">
//                     {item.icon}
//                   </div>
//                 </div>
//               </div>
//             ))}
//       </div>
//     </section>
//   );
// };

// export default DataSection;





// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaWallet } from "react-icons/fa";
// import axios from "axios";
// import Skeleton from "react-loading-skeleton";
// import { FaClock } from "react-icons/fa6";
// import { BsCartCheckFill } from "react-icons/bs";

// const data = [
//   {
//     id: 1,
//     label: "Current Balance",
//     link: "dashboard/pricing",
//     icon: <FaWallet />,
//   },
//   {
//     id: 2,
//     label: "Total Orders",
//     link: "dashboard/upvoteorder",
//     icon: <BsCartCheckFill />,
//   },
//   {
//     id: 3,
//     label: "Order in Progress",
//     link: "dashboard/upvoteorder",
//     icon: <FaClock />,
//   },
// ];

// const DataSection = () => {
//   const [dataList, setDataList] = useState(data);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const fetchData = async () => {
//       const token = localStorage.getItem("authToken");
//       if (!token) {
//         setLoading(false);
//         return;
//       }

//       try {
//         setLoading(true);
//         const headers = { Authorization: `Bearer ${token}` };

//         // Fetch Orders
//         const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });
//         console.log("Orders Response:", ordersResponse); // Inspect the response

//         let totalOrders = 0;
//         let ordersInProgress = 0;
//         let completedAmount = 0;

//         if (ordersResponse.status === 200 && Array.isArray(ordersResponse.data)) {
//           const ordersData = ordersResponse.data;
//           totalOrders = ordersData.length;
//           ordersInProgress = ordersData.filter(order => order.status === "In Progress").length;

//           // Sum of calculated prices, subtracting "Completed" and adding "Canceled"
//           completedAmount = ordersData.reduce((total, order) => {
//             const calculatedPrice = parseFloat(order.calculatedPrice || 0);

//             if (order.status === "Completed" || order.status === "In Progress") {
//               return total + calculatedPrice;  // Subtracts price for these status
//             } else if (order.status === "Canceled") {
//               return total - calculatedPrice; // Adds Price for this status
//             } else {
//               return total
//             }
//           }, 0);
//         }

//         // Fetch Payments
//         const paymentsResponse = await axios.get(`${API_BASE_URL}/payment`, { headers });
//         console.log("Payments Response:", paymentsResponse); // Inspect the response

//         let amountTotal = 0;
//         if (paymentsResponse.status === 200 && paymentsResponse.data && paymentsResponse.data.payments) {
//             // Sum all payment amounts
//             amountTotal = paymentsResponse.data.payments.reduce((total, payment) => {
//                 return total + parseFloat(payment.amount || 0); // Ensure 'amount' is a number
//             }, 0);
//         }


//         const calculatedBalance = amountTotal - completedAmount;

//         const updatedData = data.map((item) => {
//           if (item.id === 1) {
//             return {
//               ...item,
//               remainingVotes: calculatedBalance >= 0 ? calculatedBalance : 0,
//             };
//           }
//           if (item.id === 2) {
//             return {
//               ...item,
//               remainingVotes: totalOrders,
//             };
//           }
//           if (item.id === 3) {
//             return { ...item, remainingVotes: ordersInProgress };
//           }
//           return item;
//         });

//         setDataList(updatedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setDataList(
//           data.map((item) => {
//             if (item.id === 1 || item.id === 2 || item.id === 3) {
//               return { ...item, remainingVotes: 0 };
//             }
//             return item;
//           })
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [API_BASE_URL]);

//   const handleCardClick = (link) => {
//     if (link) navigate(`/${link}`);
//   };

//   return (
//     <section className="w-full my-5 Data-Section">
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {loading
//           ? Array.from({ length: 3 }).map((_, index) => (
//               <div key={index} className="w-full h-full">
//                 <div
//                   className="flex items-center justify-between w-full h-full p-4 bg-white shadow-main rounded-small"
//                   style={{ minHeight: "100px" }}
//                 >
//                   <div>
//                     <Skeleton height={25} width={70} />
//                     <Skeleton height={20} width={100} />
//                   </div>
//                   <div className="p-4 text-main-color lg:text-large text-basic">
//                     <Skeleton height={30} width={30} />
//                   </div>
//                 </div>
//               </div>
//             ))
//           : dataList.map((item) => (
//               <div
//                 key={item.id}
//                 className="w-full h-full cursor-pointer"
//                 onClick={() => handleCardClick(item.link)}
//               >
//                 <div
//                   className="flex items-center justify-between w-full h-full p-4 bg-white border border-gray-300 shadow-main rounded-small"
//                   style={{ minHeight: "100px" }}
//                 >
//                   {/* Left Section */}
//                   <div className="">
//                     {item.remainingVotes !== undefined && (
//                       <p className="mb-2 font-bold lg:text-large text-sub-color">
//                         {item.remainingVotes}
//                       </p>
//                     )}
//                     <p className="font-medium lg:text-base text-para-color">
//                       {item.label}
//                     </p>
//                   </div>

//                   {/* Icon Section */}
//                   <div className="p-4 text-main-color lg:text-large text-basic">
//                     {item.icon}
//                   </div>
//                 </div>
//               </div>
//             ))}
//       </div>
//     </section>
//   );
// };

// export default DataSection;




// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaWallet } from "react-icons/fa";
// import axios from "axios";
// import Skeleton from "react-loading-skeleton";
// import { FaClock } from "react-icons/fa6";
// import { BsCartCheckFill } from "react-icons/bs";
// import useCurrentBalance from '../hooks/useCurrentBalance'; // Import the hook

// const data = [
//   {
//     id: 1,
//     label: "Current Balance",
//     link: "dashboard/pricing",
//     icon: <FaWallet />,
//   },
//   {
//     id: 2,
//     label: "Total Orders",
//     link: "dashboard/upvoteorder",
//     icon: <BsCartCheckFill />,
//   },
//   {
//     id: 3,
//     label: "Order in Progress",
//     link: "dashboard/upvoteorder",
//     icon: <FaClock />,
//   },
// ];

// const DataSection = () => {
//   const [dataList, setDataList] = useState(data);
//   const [loadingOthers, setLoadingOthers] = useState(true);
//   const navigate = useNavigate();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   const token = localStorage.getItem("authToken");

//   const { currentBalance, loading, error } = useCurrentBalance(API_BASE_URL, token);  // Use the hook
//   useEffect(() => {
//     const fetchData = async () => {
//      if (!token) {
//         setLoadingOthers(false);
//         return;
//       }

//       try {

//          setLoadingOthers(true);
//         const headers = { Authorization: `Bearer ${token}` };

//         // Fetch Orders
//         const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });
//         console.log("Orders Response:", ordersResponse); // Inspect the response

//         let totalOrders = 0;
//         let ordersInProgress = 0;


//         if (ordersResponse.status === 200 && Array.isArray(ordersResponse.data)) {
//           const ordersData = ordersResponse.data;
//           totalOrders = ordersData.length;
//           ordersInProgress = ordersData.filter(order => order.status === "In Progress").length;


//         }



//         const updatedData = data.map((item) => {
//           if (item.id === 2) {
//             return {
//               ...item,
//               remainingVotes: totalOrders,
//             };
//           }
//           if (item.id === 3) {
//             return { ...item, remainingVotes: ordersInProgress };
//           }
//           return item;
//         });

//         setDataList(updatedData);
//       } catch (apiError) {
//         console.error("Error fetching data:", apiError);


//       } finally {
//          setLoadingOthers(false);
//       }
//     };

//     fetchData();
//   }, [API_BASE_URL,token]);

//   const handleCardClick = (link) => {
//     if (link) navigate(`/${link}`);
//   };

//   return (
//     <section className="w-full my-5 Data-Section">
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {dataList.map((item) => (
//               <div
//                 key={item.id}
//                 className="w-full h-full cursor-pointer"
//                 onClick={() => handleCardClick(item.link)}
//               >
//                 <div
//                   className="flex items-center justify-between w-full h-full p-4 bg-white border border-gray-300 shadow-main rounded-small"
//                   style={{ minHeight: "100px" }}
//                 >
//                    {/* Left Section */}
//                   <div className="">
//                       {item.id === 1 ? (
//                           loading ? (
//                               <Skeleton height={25} width={70} />
//                           ) : error ? (
//                               <p className="text-red-500">Error: {error}</p>
//                           ) : (
//                               <p className="mb-2 font-bold lg:text-large text-sub-color">
//                                   {currentBalance}
//                               </p>
//                           )
//                       ) : loadingOthers ? (
//                         <Skeleton height={25} width={70} />
//                          ) :( <p className="mb-2 font-bold lg:text-large text-sub-color">
//                                   {item.remainingVotes}
//                                    </p> )

//                       }

//                      <p className="font-medium lg:text-base text-para-color">
//                       {item.label}
//                     </p>
//                   </div>

//                   {/* Icon Section */}
//                   <div className="p-4 text-main-color lg:text-large text-basic">
//                     {item.icon}
//                   </div>
//                 </div>
//               </div>
//             ))}
//       </div>
//     </section>
//   );
// };

// export default DataSection;






// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaWallet, FaMoneyBillWave } from "react-icons/fa"; // Import FaMoneyBillWave
// import axios from "axios";
// import Skeleton from "react-loading-skeleton";
// import { FaClock } from "react-icons/fa6";
// import { BsCartCheckFill } from "react-icons/bs";
// import useCurrentBalance from '../hooks/useCurrentBalance';
// import useMySpent from '../hooks/useMySpent';// Import the hook

// const data = [
//   {
//     id: 1,
//     label: "Current Balance",
//     link: "dashboard/pricing",
//     icon: <FaWallet />,
//   },
//   {
//     id: 2,
//     label: "Total Orders",
//     link: "dashboard/upvoteorder",
//     icon: <BsCartCheckFill />,
//   },
//   {
//     id: 3,
//     label: "Order in Progress",
//     link: "dashboard/upvoteorder",
//     icon: <FaClock />,
//   },
//   {
//     id: 4,  // Add My Spent
//     label: "My Spent",
//     link: "dashboard/history",
//     icon: <FaMoneyBillWave />,
//   }
// ];

// const DataSection = () => {
//   const [dataList, setDataList] = useState(data);
//   const [loadingOthers, setLoadingOthers] = useState(true);
//   const navigate = useNavigate();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   const token = localStorage.getItem("authToken");

//   const { currentBalance, loading: balanceLoading, error: balanceError } = useCurrentBalance(API_BASE_URL, token);  // Use the hook
//   const { mySpent, loading: spentLoading, error: spentError } = useMySpent(API_BASE_URL, token, currentBalance); // Use useMySpent

//   useEffect(() => {
//     const fetchData = async () => {
//      if (!token) {
//         setLoadingOthers(false);
//         return;
//       }

//       try {

//          setLoadingOthers(true);
//         const headers = { Authorization: `Bearer ${token}` };

//         // Fetch Orders
//         const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });
//         console.log("Orders Response:", ordersResponse); // Inspect the response

//         let totalOrders = 0;
//         let ordersInProgress = 0;


//         if (ordersResponse.status === 200 && Array.isArray(ordersResponse.data)) {
//           const ordersData = ordersResponse.data;
//           totalOrders = ordersData.length;
//           ordersInProgress = ordersData.filter(order => order.status === "In Progress").length;


//         }



//         const updatedData = data.map((item) => {
//           if (item.id === 2) {
//             return {
//               ...item,
//               remainingVotes: totalOrders,
//             };
//           }
//           if (item.id === 3) {
//             return { ...item, remainingVotes: ordersInProgress };
//           }
//           return item;
//         });

//         setDataList(updatedData);
//       } catch (apiError) {
//         console.error("Error fetching data:", apiError);


//       } finally {
//          setLoadingOthers(false);
//       }
//     };

//     fetchData();
//   }, [API_BASE_URL,token]);

//   const handleCardClick = (link) => {
//     if (link) navigate(`/${link}`);
//   };

//     // Combine loading and error checks for Current Balance and My Spent
//     const isLoadingValues = balanceLoading || spentLoading;
//     const hasErrorValues = balanceError || spentError;

//   return (
//     <section className="w-full my-5 Data-Section">
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
//         {dataList.map((item) => (
//               <div
//                 key={item.id}
//                 className="w-full h-full cursor-pointer"
//                 onClick={() => handleCardClick(item.link)}
//               >
//                 <div
//                   className="flex items-center justify-between w-full h-full p-4 bg-white border border-gray-300 shadow-main rounded-small"
//                   style={{ minHeight: "100px" }}
//                 >
//                    {/* Left Section */}
//                   <div className="">
//                        {/* Conditional rendering for the data values */}
//                        {item.id === 1 ? (
//                             isLoadingValues ? (
//                                 <Skeleton height={25} width={70} />
//                             ) : hasErrorValues ? (
//                                 <p className="text-red-500">Error: {balanceError || spentError}</p>
//                             ) : (
//                                 <p className="mb-2 font-bold lg:text-large text-sub-color">
//                                     ${currentBalance ? currentBalance.toFixed(2) : '0.00'}
//                                 </p>
//                             )
//                         ) : item.id === 4 ? (  // My Spent
//                             isLoadingValues ? (
//                                 <Skeleton height={25} width={70} />
//                             ) : hasErrorValues ? (
//                                 <p className="text-red-500">Error: {balanceError || spentError}</p>
//                             ) : (
//                                 <p className="mb-2 font-bold lg:text-large text-sub-color">
//                                     ${mySpent ? mySpent.toFixed(2) : '0.00'}
//                                 </p>
//                             )
//                         ) : loadingOthers ? (
//                             <Skeleton height={25} width={70} />
//                         ) : (
//                             <p className="mb-2 font-bold lg:text-large text-sub-color">
//                                 {item.remainingVotes}
//                             </p>
//                         )}

//                      <p className="font-medium lg:text-base text-para-color">
//                       {item.label}
//                     </p>
//                   </div>

//                   {/* Icon Section */}
//                   <div className="p-4 text-main-color lg:text-large text-basic">
//                     {item.icon}
//                   </div>
//                 </div>
//               </div>
//             ))}
//       </div>
//     </section>
//   );
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

// const data = [
//   {
//     id: 1,
//     label: "Total Orders",
//     icon: <BsCartCheckFill />,
//   },
//   {
//     id: 2,
//     label: "Current Balance",
//     icon: <FaWallet />,
//   },
//   {
//     id: 3,
//     label: "My Spent",
//     icon: <FaMoneyBillWave />,
//   },
//   {
//     id: 4,
//     label: "Order in Progress",
//     icon: <FaClock />,
//   },

// ];

// const DataSection = () => {
//   const [dataList, setDataList] = useState(data);
//   const [loadingOthers, setLoadingOthers] = useState(true);
//   const navigate = useNavigate();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   const token = localStorage.getItem("authToken");

//   const { currentBalance, loading: balanceLoading, error: balanceError } = useCurrentBalance(API_BASE_URL, token);
//   const { mySpent, loading: spentLoading, error: spentError } = useMySpent(API_BASE_URL, token, currentBalance);
//   useEffect(() => {
//     const fetchData = async () => {
//      if (!token) {
//         setLoadingOthers(false);
//         return;
//       }

//       try {

//          setLoadingOthers(true);
//         const headers = { Authorization: `Bearer ${token}` };

//         // Fetch Orders
//         const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });

//         let totalOrders = 0;
//         let ordersInProgress = 0;


//         if (ordersResponse.status === 200 && Array.isArray(ordersResponse.data)) {
//           const ordersData = ordersResponse.data;
//           totalOrders = ordersData.length;
//           ordersInProgress = ordersData.filter(order => order.status === "In Progress").length;


//         }



//         const updatedData = data.map((item) => {
//           if (item.id === 1) {
//             return {
//               ...item,
//               remainingVotes: totalOrders,
//             };
//           }
//           if (item.id === 4) {
//             return { ...item, remainingVotes: ordersInProgress };
//           }
//           return item;
//         });

//         setDataList(updatedData);
//       } catch (apiError) {
//         console.error("Error fetching data:", apiError);


//       } finally {
//          setLoadingOthers(false);
//       }
//     };

//     fetchData();
//   }, [API_BASE_URL,token]);



//     const isLoadingValues = balanceLoading || spentLoading;
//     const hasErrorValues = balanceError || spentError;

//   return (
//     <section className="w-full my-5 Data-Section">
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
//         {dataList.map((item) => (
//               <div
//                 key={item.id}
//                 className="w-full h-full"

//               >
//                 <div
//                   className="flex items-center justify-between w-full h-full p-4 bg-white border border-gray-300 shadow-main rounded-small"
//                   style={{ minHeight: "100px" }}
//                 >
//                    {/* Left Section */}
//                   <div className="">
//                        {/* Conditional rendering for the data values */}
//                       {item.id === 2 ? ( //Current balance
//                           isLoadingValues ? (
//                               <Skeleton height={25} width={70} />
//                           ) : hasErrorValues ? (
//                               <p className="text-red-500">Error: {balanceError || spentError}</p>
//                           ) : (
//                               <p className="mb-1 font-bold lg:text-large text-sub-color">
//                                   ${currentBalance ? currentBalance : '0'}
//                               </p>
//                           )
//                       ) : item.id === 3 ? ( //My spent
//                               isLoadingValues ? (
//                                   <Skeleton height={25} width={70} />
//                               ) : hasErrorValues ? (
//                                   <p className="text-red-500">Error: {balanceError || spentError}</p>
//                               ) : (
//                                   <p className="mb-1 font-bold lg:text-large text-sub-color">
//                                       ${mySpent ? mySpent : '0'}
//                                   </p>
//                               )
//                           ) :  (
//                               loadingOthers ? (
//                                   <Skeleton height={25} width={70} />
//                               ) : (
//                                   <p className="mb-1 font-bold lg:text-large text-sub-color">
//                                       {item.remainingVotes}
//                                   </p>
//                               )
//                           )}



//                      <p className="text-gray-900">
//                       {item.label}
//                     </p>
//                   </div>

//                   {/* Icon Section */}
//                   <div className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 text-xl text-main-color">
//                     {item.icon}
//                   </div>
//                 </div>
//               </div>
//             ))}
//       </div>
//     </section>
//   );
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
// import TokenService from "../../../utils/TokenService";  // Import TokenService

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

//     const { currentBalance, loading: balanceLoading, error: balanceError } = useCurrentBalance(API_BASE_URL, token);
//     const { mySpent, loading: spentLoading, error: spentError } = useMySpent(API_BASE_URL, token, currentBalance);

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


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaWallet, FaMoneyBillWave } from "react-icons/fa";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { FaClock } from "react-icons/fa6";
import { BsCartCheckFill } from "react-icons/bs";
import useCurrentBalance from '../hooks/useCurrentBalance';
import useMySpent from '../hooks/useMySpent';
import TokenService from "../../../utils/TokenService";  // Import TokenService
import { useParams } from "react-router-dom";

const data = [
    {
        id: 1,
        label: "Total Orders",
        icon: <BsCartCheckFill />,
    },
    {
        id: 2,
        label: "Current Balance",
        icon: <FaWallet />,
    },
    {
        id: 3,
        label: "My Spent",
        icon: <FaMoneyBillWave />,
    },
    {
        id: 4,
        label: "Order in Progress",
        icon: <FaClock />,
    },

];

const DataSection = () => {
    const [dataList, setDataList] = useState(data);
    const [loadingOthers, setLoadingOthers] = useState(true);
    const navigate = useNavigate();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const token = TokenService.getToken();  // Get token from TokenService
    const { userId } = useParams();  // Access userId from URL

    const { currentBalance, loading: balanceLoading, error: balanceError } = useCurrentBalance(API_BASE_URL, token, userId); // pass userId
    const { mySpent, loading: spentLoading, error: spentError } = useMySpent(API_BASE_URL, token, userId, currentBalance); // pass userId

    useEffect(() => {
        const fetchData = async () => {
            if (!token) {
                setLoadingOthers(false);
                return;
            }

            try {
                setLoadingOthers(true);
                const headers = { Authorization: `Bearer ${token}` };

                // Fetch Orders
                const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, { headers });

                let totalOrders = 0;
                let ordersInProgress = 0;

                if (ordersResponse.status === 200 && Array.isArray(ordersResponse.data)) {
                    const ordersData = ordersResponse.data;
                    totalOrders = ordersData.length;
                    ordersInProgress = ordersData.filter(order => order.status === "In Progress").length;
                }

                const updatedData = data.map((item) => {
                    if (item.id === 1) {
                        return {
                            ...item,
                            remainingVotes: totalOrders,
                        };
                    }
                    if (item.id === 4) {
                        return { ...item, remainingVotes: ordersInProgress };
                    }
                    return item;
                });

                setDataList(updatedData);
            } catch (apiError) {
                console.error("Error fetching data:", apiError);
            } finally {
                setLoadingOthers(false);
            }
        };

        fetchData();
    }, [API_BASE_URL, token]);


    const isLoadingValues = balanceLoading || spentLoading;
    const hasErrorValues = balanceError || spentError;

    return (
        <section className="w-full my-5 Data-Section">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {dataList.map((item) => (
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
                                {/* Conditional rendering for the data values */}
                                {item.id === 2 ? ( //Current balance
                                    isLoadingValues ? (
                                        <Skeleton height={25} width={70} />
                                    ) : hasErrorValues ? (
                                        <p className="text-red-500">Error: {balanceError || spentError}</p>
                                    ) : (
                                        <p className="mb-1 font-bold lg:text-large text-sub-color">
                                            ${currentBalance ? currentBalance : '0'}
                                        </p>
                                    )
                                ) : item.id === 3 ? ( //My spent
                                    isLoadingValues ? (
                                        <Skeleton height={25} width={70} />
                                    ) : hasErrorValues ? (
                                        <p className="text-red-500">Error: {balanceError || spentError}</p>
                                    ) : (
                                        <p className="mb-1 font-bold lg:text-large text-sub-color">
                                            ${mySpent ? mySpent : '0'}
                                        </p>
                                    )
                                ) : (
                                    loadingOthers ? (
                                        <Skeleton height={25} width={70} />
                                    ) : (
                                        <p className="mb-1 font-bold lg:text-large text-sub-color">
                                            {item.remainingVotes}
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