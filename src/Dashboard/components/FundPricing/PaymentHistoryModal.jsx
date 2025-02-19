// import React, { useRef, useEffect } from "react";
// import { motion } from "framer-motion";

// const PaymentHistoryModal = ({ closeModal }) => {
//   const paymentHistory = [
//     {
//       type: "Bonus",
//       date: "2022-10-13 06:05:07",
//       amount: "0.05",
//       id: "1462",
//     },
//     {
//       type: "Crypto via Coinbase",
//       date: "2022-10-13 06:05:05",
//       amount: "1.00",
//       id: "1460",
//     },
//     // Add more payment history items here
//   ];

//   const modalRef = useRef(null);

//   // Close the modal when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         closeModal();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [closeModal]);

//   const variants = {
//     open: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
//     closed: { x: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-50 backdrop-blur-sm">
//       <motion.div
//         className="bg-white rounded-lg shadow-lg w-full max-w-md text-gray-800 h-[calc(100%-1rem)] m-3"
//         variants={variants}
//         initial="closed"
//         animate="open"
//         exit="closed"
//         ref={modalRef}
//       >
//         <div className="flex items-center justify-between p-4 border-b border-gray-200">
//           <h2 className="text-lg font-semibold">Payment History</h2>
//           <button className="text-gray-400 hover:text-gray-600" onClick={closeModal}>
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-61px)] ">
//           {paymentHistory.map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between p-3 border border-gray-300 rounded-xl hover:bg-gray-100"
//             >
//               <div className="left-part space-y-3">
//                 <div className="font-medium ">{item.type}</div>
//                 <div className="text-sm text-gray-500">{item.date}</div>
//               </div>
//               <div className="text-right space-y-3">
//                 <div className="font-medium border border-green-950 bg-green-100 inline-block px-3 py-1 rounded-full text-sm">{item.amount}</div>
//                 <div className="text-sm text-gray-500">ID: {item.id}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default PaymentHistoryModal;





// import React, { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";

// const PaymentHistoryModal = ({ closeModal }) => {
//   const [paymentHistory, setPaymentHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const modalRef = useRef(null);

//     // Access the API URL using Vite-specific syntax
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     const token = localStorage.getItem("authToken");

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         closeModal();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [closeModal]);


//   useEffect(() => {
//       const fetchPaymentHistory = async () => {
//           setLoading(true);
//           setError(null);
//           try {
//               const config = {
//                   headers: {
//                       Authorization: `Bearer ${token}`,
//                   },
//               };
//               const response = await axios.get(`${API_BASE_URL}/payment`, config);
//               setPaymentHistory(response.data.payments); // Assuming API returns { payments: [...] }
//           } catch (err) {
//               setError(err.message || "Failed to fetch payment history");
//               console.error("Error fetching payment history:", err);
//           } finally {
//               setLoading(false);
//           }
//       };

//       fetchPaymentHistory();
//   }, [token]);  // Fetch payment history when modal opens and token is available


//   const variants = {
//     open: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
//     closed: { x: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-50 backdrop-blur-sm">
//       <motion.div
//         className="bg-white rounded-lg shadow-lg w-full max-w-md text-gray-800 h-[calc(100%-1rem)] m-3"
//         variants={variants}
//         initial="closed"
//         animate="open"
//         exit="closed"
//         ref={modalRef}
//       >
//         <div className="flex items-center justify-between p-4 border-b border-gray-200">
//           <h2 className="text-lg font-semibold">Payment History</h2>
//           <button className="text-gray-400 hover:text-gray-600" onClick={closeModal}>
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-61px)] ">
//           {loading && <div className="text-center">Loading payment history...</div>}
//           {error && <div className="text-red-500 text-center">Error: {error}</div>}
//           {!loading && !error && paymentHistory.map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between p-3 border border-gray-300 rounded-xl hover:bg-gray-100"
//             >
//               <div className="left-part space-y-3">
//                 <div className="font-medium ">{item.type}</div>
//                 <div className="text-sm text-gray-500">{item.createdAt}</div> {/* Changed item.date to item.createdAt */}
//               </div>
//               <div className="text-right space-y-3">
//                 <div className="font-medium border border-green-950 bg-green-100 inline-block px-3 py-1 rounded-full text-sm">{item.amount}</div>
//                 <div className="text-sm text-gray-500">ID: {item._id.substring(0, 4)}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default PaymentHistoryModal;

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import TokenService from "../../../utils/TokenService"; // Import TokenService
import moment from 'moment';

const PaymentHistoryModal = ({ closeModal }) => {
    const [paymentHistory, setPaymentHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const modalRef = useRef(null);

    // Access the API URL using Vite-specific syntax
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const token = TokenService.getToken();  // Get token from TokenService


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [closeModal]);


    useEffect(() => {
        const fetchPaymentHistory = async () => {
            setLoading(true);
            setError(null);
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
                const response = await axios.get(`${API_BASE_URL}/payment`, config);
                setPaymentHistory(response.data.payments); // Assuming API returns { payments: [...] }
            } catch (err) {
                setError(err.message || "Failed to fetch payment history");
                console.error("Error fetching payment history:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPaymentHistory();
    }, [token]);  // Fetch payment history when modal opens and token is available


    const variants = {
        open: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
        closed: { x: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    };


      const formatDate = (dateString) => {
        if (!dateString) return "";
        return moment(dateString).format("MMMM DD, YYYY - h:mm A"); // More readable format
      };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-50 backdrop-blur-sm">
            <motion.div
                className="bg-white rounded-lg shadow-lg w-full max-w-md text-gray-800 h-[calc(100%-1rem)] m-3"
                variants={variants}
                initial="closed"
                animate="open"
                exit="closed"
                ref={modalRef}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold">Payment History</h2>
                    <button className="text-gray-400 hover:text-gray-600" onClick={closeModal}>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-61px)] ">
                    {loading && <div className="text-center">Loading payment history...</div>}
                    {error && <div className="text-red-500 text-center">Error: {error}</div>}
                    {!loading && !error && paymentHistory.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-3 border border-gray-300 rounded-xl hover:bg-gray-100"
                        >
                            <div className="left-part space-y-3">
                                <div className="font-medium ">{item.type}</div>
                                <div className="text-sm text-gray-500">{formatDate(item.createdAt)}</div> {/* Changed item.date to item.createdAt */}
                            </div>
                            <div className="text-right space-y-3">
                                <div className="font-medium border border-green-950 bg-green-100 inline-block px-3 py-1 rounded-full text-sm">{item.amount}</div>
                                <div className="text-sm text-gray-500">ID: {item._id.substring(0, 4)}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default PaymentHistoryModal;