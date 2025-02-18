// // components/PaymentHistoryPopup.js

// import React from 'react';
// import { motion } from 'framer-motion';

// const PaymentHistoryPopup = ({ payments, onClose, formatDate }) => {
//     const backdropVariants = {
//         hidden: { opacity: 0 },
//         visible: { opacity: 1 },
//     };

//     const modalVariants = {
//         hidden: { y: "100vh", opacity: 0 },
//         visible: {
//             y: "0",
//             opacity: 1,
//             transition: { delay: 0.1, duration: 0.4, type: "spring", stiffness: 100 },
//         },
//         exit: { y: "100vh", opacity: 0 },
//     };

//     return (
//         <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-50 backdrop-blur-sm"
//             variants={backdropVariants}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//         >
//             <motion.div
//                 className="relative bg-white rounded-xl shadow-lg overflow-hidden max-w-md w-full"
//                 variants={modalVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//             >
//                 {/* Header */}
//                 <div className="bg-gray-100 py-4 px-6 border-b border-gray-200 flex items-center justify-between">
//                     <h2 className="text-lg font-semibold text-gray-800">Payment History</h2>
//                     <button
//                         onClick={onClose}
//                         className="text-gray-500 hover:text-gray-700 focus:outline-none"
//                     >
//                         <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                     {payments.length > 0 ? (
//                         <div className="overflow-y-auto max-h-80">
//                             <table className="min-w-full">
//                                 <thead>
//                                     <tr className="text-left">
//                                         <th className="py-2 font-semibold text-sm text-gray-700">Payment ID</th>
//                                         <th className="py-2 font-semibold text-sm text-gray-700">Amount</th>
//                                         <th className="py-2 font-semibold text-sm text-gray-700">Date</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {payments.map((payment) => (
//                                         <tr key={payment._id} className="border-b border-gray-200">
//                                             <td className="py-3 text-sm text-gray-600">{payment._id.substring(0, 8)}</td>
//                                             <td className="py-3 text-sm text-gray-600">${payment.amount.toFixed(2)}</td>
//                                             <td className="py-3 text-sm text-gray-600">{formatDate(payment.createdAt)}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     ) : (
//                         <p className="text-gray-500">No payment history available.</p>
//                     )}
//                 </div>

//                 {/* Footer */}
//                 <div className="bg-gray-100 py-3 px-6 border-t border-gray-200 text-right">
//                     <button
//                         onClick={onClose}
//                         className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//                     >
//                         Close
//                     </button>
//                 </div>
//             </motion.div>
//         </motion.div>
//     );
// };

// export default PaymentHistoryPopup;

// components/PaymentHistoryPopup.js

// import React from 'react';
// import { motion } from 'framer-motion';
// import moment from 'moment';

// const PaymentHistoryPopup = ({ payments, onClose }) => {
//   const backdropVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.3 } },
//     exit: { opacity: 0, transition: { duration: 0.3 } },
//   };

//   const modalVariants = {
//     hidden: { x: "100%", opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: { duration: 0.4, ease: "easeInOut" },
//     },
//     exit: { x: "100%", opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } },
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return "";
//     return moment(dateString).format("MMMM DD, YYYY - h:mm A"); // More readable format
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-50 backdrop-blur-sm"
//       variants={backdropVariants}
//       initial="hidden"
//       animate="visible"
//       exit="exit"
//     >
//       <motion.div
//         className="bg-white rounded-lg shadow-xl w-full max-w-md h-[calc(100%-2rem)] m-4 overflow-hidden"
//         variants={modalVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between bg-gray-100 py-3 px-4 border-b border-gray-200">
//           <h2 className="text-lg font-semibold text-gray-800">Payment History</h2>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-600 focus:outline-none">
//             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         {/* Content */}
//         <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
//           {payments.length > 0 ? (
//             <div className="space-y-4">
//               {payments.map((payment) => (
//                 <div key={payment._id} className="flex items-center justify-between hover:bg-gray-100 border border-gray-200 rounded-xl p-3">
//                   {/* Left Side - Details */}
//                   <div>
//                     <p className="text-sm font-semibold text-gray-700">{payment.type || 'Payment'}</p> {/* Display the type of payment */}
//                     <p className="text-xs text-gray-500">
//                       {formatDate(payment.createdAt)}
//                     </p>
//                   </div>

//                   {/* Right Side - Amount & ID */}
//                   <div className="text-right">
//                     <p className="font-medium border border-green-950 bg-green-100 inline-block px-3 py-1 rounded-full text-sm">${payment.amount}</p>
//                     <p className="text-xs text-gray-500">ID: {payment._id.substring(0, 4)}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500">No payment history available.</p>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default PaymentHistoryPopup;

import React, { useRef, useEffect } from "react"; // Import useRef and useEffect
import { motion } from "framer-motion";
import moment from "moment";
import { IoClose } from "react-icons/io5";
import Data from "../../assets/Images/nodata.svg";


const PaymentHistoryPopup = ({ payments, onClose }) => {
  const modalRef = useRef(null);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const modalVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return moment(dateString).format("MMMM DD, YYYY - h:mm A"); // More readable format
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-50 backdrop-blur-sm"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="bg-white rounded-lg shadow-xl w-full max-w-md h-[calc(100%-2rem)] m-4 overflow-hidden"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        ref={modalRef} // Attach the ref to the modal
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-gray-100 py-3 px-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            Payment History
          </h2>
          <button onClick={onClose} className="text-gray-900">
            <IoClose size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
          {payments.length > 0 ? (
            <div className="space-y-4">
              {payments.map((payment) => (
                <div
                  key={payment._id}
                  className="flex items-center justify-between hover:bg-gray-100 border border-gray-200 rounded-xl p-3"
                >
                  {/* Left Side - Details */}
                  <div>
                    <p className="text-sm font-semibold text-gray-700">
                      {payment.type || "Payment"}
                    </p>{" "}
                    {/* Display the type of payment */}
                    <p className="text-xs text-gray-500">
                      {formatDate(payment.createdAt)}
                    </p>
                  </div>

                  {/* Right Side - Amount & ID */}
                  <div className="text-right">
                    <p className="font-medium border border-green-950 bg-green-100 inline-block px-3 py-1 rounded-full text-sm">
                      ${payment.amount}
                    </p>
                    <p className="text-xs text-gray-500">
                      ID: {payment._id.substring(0, 4)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="px-4 py-4 flex justify-center items-center h-full">
              <div className="flex flex-col items-center">
                <img src={Data} alt="No Data" className="h-40" />
                <p className="mt-4 text-xl font-semibold text-gray-700 capitalize">
                  No users payment found
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PaymentHistoryPopup;
