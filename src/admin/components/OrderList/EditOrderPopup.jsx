// import React, { useState, useEffect } from 'react';
// import { FaTimes } from 'react-icons/fa';

// const EditOrderPopup = ({ order, onClose, onSave }) => {
//     const [editedStatus, setEditedStatus] = useState(order.status);
//     const [editedCompletedVotes, setEditedCompletedVotes] = useState(order.completedVotes || 0);

//     useEffect(() => {
//         if (order) {
//             setEditedStatus(order.status);
//             setEditedCompletedVotes(order.completedVotes || 0);
//         }
//     }, [order]);

//     const handleStatusChange = (event) => {
//         setEditedStatus(event.target.value);
//     };

//     const handleCompletedVotesChange = (event) => {
//         const parsedValue = parseInt(event.target.value, 10);
//         setEditedCompletedVotes(isNaN(parsedValue) ? 0 : parsedValue);
//     };

//     const handleSave = () => {
//         onSave({
//             status: editedStatus,
//             completedVotes: editedCompletedVotes,
//         });
//     };

//     return (
//         <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
//             <div className="bg-white p-8 rounded shadow-md w-96">
//                 <h2 className="text-2xl font-bold mb-4">Edit Order</h2>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">Status:</label>
//                     <select
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         value={editedStatus}
//                         onChange={handleStatusChange}
//                     >
//                         <option value="Pending">Pending</option>
//                         <option value="In Progress">In Progress</option>
//                         <option value="Completed">Completed</option>
//                         <option value="Partial">Partial</option>
//                         <option value="Canceled">Canceled</option>
//                     </select>
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">Completed Votes:</label>
//                     <input
//                         type="number"
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         value={editedCompletedVotes}
//                         onChange={handleCompletedVotesChange}
//                     />
//                 </div>
//                 <div className="flex justify-end space-x-4">
//                     <button
//                         className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         onClick={onClose}
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         onClick={handleSave}
//                     >
//                         Save
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EditOrderPopup;

// import React, { useState, useEffect } from 'react';
// import { FaTimes } from 'react-icons/fa';

// const EditOrderPopup = ({ order, onClose, onSave }) => {
//     const [editedStatus, setEditedStatus] = useState(order.status);
//     const [editedCompletedVotes, setEditedCompletedVotes] = useState(order.completedVotes || 0);
//     const [editedStarted, setEditedStarted] = useState(order.started);

//     useEffect(() => {
//         if (order) {
//             setEditedStatus(order.status);
//             setEditedCompletedVotes(order.completedVotes || 0);
//             setEditedStarted(order.started);
//         }
//     }, [order]);

//     const handleStatusChange = (event) => {
//         setEditedStatus(event.target.value);
//     };

//     const handleCompletedVotesChange = (event) => {
//         const parsedValue = parseInt(event.target.value, 10);
//         setEditedCompletedVotes(isNaN(parsedValue) ? 0 : parsedValue);
//     };

//     const handleStartedChange = (event) => {
//         setEditedStarted(event.target.value);
//     };

//     const handleSave = () => {
//         onSave({
//             status: editedStatus,
//             completedVotes: editedCompletedVotes,
//             started: editedStarted,
//         });
//     };

//     return (
//         <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
//             <div className="bg-white p-8 rounded shadow-md w-96">
//                 <h2 className="text-2xl font-bold mb-4">Edit Order</h2>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">Status:</label>
//                     <select
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         value={editedStatus}
//                         onChange={handleStatusChange}
//                     >
//                         <option value="Pending">Pending</option>
//                         <option value="In Progress">In Progress</option>
//                         <option value="Completed">Completed</option>
//                         <option value="Partial">Partial</option>
//                         <option value="Canceled">Canceled</option>
//                     </select>
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">Started Votes:</label>
//                     <input
//                         type="text"  // Changed to type="text"
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         value={editedStarted}
//                         onChange={handleStartedChange}
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">Deliver Votes:</label>
//                     <input
//                         type="number"
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         value={editedCompletedVotes}
//                         onChange={handleCompletedVotesChange}
//                     />
//                 </div>
//                 <div className="flex justify-end space-x-4">
//                     <button
//                         className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         onClick={onClose}
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         onClick={handleSave}
//                     >
//                         Save
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EditOrderPopup;

// import ClickAwayListener from "@mui/material/ClickAwayListener";
// import React, { useState, useEffect } from "react";
// import { FaCheck, FaPencilAlt } from "react-icons/fa";

// const EditOrderPopup = ({ order, onClose, onSave }) => {
//   const [editedStatus, setEditedStatus] = useState(order.status);
//   const [editedCompletedVotes, setEditedCompletedVotes] = useState(
//     order.completedVotes || 0
//   );
//   const [editedStarted, setEditedStarted] = useState(order.started);

//   useEffect(() => {
//     if (order) {
//       setEditedStatus(order.status);
//       setEditedCompletedVotes(order.completedVotes || 0);
//       setEditedStarted(order.started);
//     }
//   }, [order]);

//   const handleStatusChange = (event) => {
//     setEditedStatus(event.target.value);
//   };

//   const handleCompletedVotesChange = (event) => {
//     const parsedValue = parseInt(event.target.value, 10);
//     setEditedCompletedVotes(isNaN(parsedValue) ? 0 : parsedValue);
//   };

//   const handleStartedChange = (event) => {
//     setEditedStarted(event.target.value);
//   };

//   const handleSave = () => {
//     onSave({
//       status: editedStatus,
//       completedVotes: editedCompletedVotes,
//       started: editedStarted,
//     });
//   };

//   const handleOutsideClick = () => {
//     onClose();
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
//       <ClickAwayListener onClickAway={handleOutsideClick}>
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md transition-all transform duration-300 ease-in-out scale-100">
//           {/* Header */}
//           <div className="bg-gray-300  px-6 py-5 border-b border-gray-200">
//             <h2 className="text-xl font-semibold tracking-wide flex items-center">
//               <FaPencilAlt className="mr-3 text-lg" />
//               <span className="font-display">Edit Order</span>
//             </h2>
//           </div>

//           {/* Body */}
//           <div className="p-7 space-y-6">
//             <div>
//               <label
//                 htmlFor="status"
//                 className="block font-medium text-gray-700"
//               >
//                 Order Status
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="status"
//                   className="shadow-sm block w-full  border-gray-300 rounded-md py-3 px-4"
//                   value={editedStatus}
//                   onChange={handleStatusChange}
//                 >
//                   <option value="Pending">Pending</option>
//                   <option value="In Progress">In Progress</option>
//                   <option value="Completed">Completed</option>
//                   <option value="Partial">Partial</option>
//                   <option value="Canceled">Canceled</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="startedVotes"
//                 className="block font-medium text-gray-700"
//               >
//                 Started Votes:
//               </label>
//               <div className="mt-2 relative rounded-md shadow-sm">
//                 <input
//                   type="text"
//                   id="startedVotes"
//                   className="block w-full  border-gray-300 rounded-md py-3 px-4"
//                   placeholder="Enter started votes"
//                   value={editedStarted}
//                   onChange={handleStartedChange}
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="completedVotes"
//                 className="block font-medium text-gray-700"
//               >
//                 Deliver Votes
//               </label>
//               <div className="mt-2 relative rounded-md shadow-sm">
//                 <input
//                   type="number"
//                   id="completedVotes"
//                   className="block w-full border-gray-300 rounded-md py-3 px-4"
//                   placeholder="Enter completed votes"
//                   value={editedCompletedVotes}
//                   onChange={handleCompletedVotesChange}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="bg-gray-50 py-3 px-4 flex justify-end items-center gap-4 border-t border-gray-200">
//             <button
//               className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//             <button
//               type="button"
//               className="py-2 px-4 font-medium rounded-lg text-white bg-main-color hover:bg-orange-600 transition-colors duration-200"
//               onClick={handleSave}
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </ClickAwayListener>
//     </div>
//   );
// };

// export default EditOrderPopup;

// import ClickAwayListener from "@mui/material/ClickAwayListener";
// import React, { useState, useEffect } from "react";
// import { FaCheck, FaPencilAlt } from "react-icons/fa";

// const EditOrderPopup = ({ order, onClose, onSave }) => {
//   const [editedStatus, setEditedStatus] = useState(order.status);
//   const [editedCompletedVotes, setEditedCompletedVotes] = useState(
//     order.completedVotes || 0
//   );
//   const [editedStarted, setEditedStarted] = useState(order.started);

//   useEffect(() => {
//     if (order) {
//       setEditedStatus(order.status);
//       setEditedCompletedVotes(order.completedVotes || 0);
//       setEditedStarted(order.started);
//     }
//   }, [order]);

//   const handleStatusChange = (event) => {
//     setEditedStatus(event.target.value);
//   };

//   const handleCompletedVotesChange = (event) => {
//     const parsedValue = parseInt(event.target.value, 10);
//     setEditedCompletedVotes(isNaN(parsedValue) ? 0 : parsedValue);
//   };

//   const handleStartedChange = (event) => {
//     setEditedStarted(event.target.value);
//   };

//   const handleSave = () => {
//     onSave({
//       status: editedStatus,
//       completedVotes: editedCompletedVotes,
//       started: editedStarted,
//     });
//   };

//   const handleOutsideClick = () => {
//     onClose();
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
//       <ClickAwayListener onClickAway={handleOutsideClick}>
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md transition-all transform duration-300 ease-in-out scale-100">
//           {/* Header */}
//           <div className="bg-gray-300  px-6 py-5 border-b border-gray-200">
//             <h2 className="text-xl font-semibold tracking-wide flex items-center">
//               <FaPencilAlt className="mr-3 text-lg" />
//               <span className="font-display">Edit Order</span>
//             </h2>
//           </div>

//           {/* Body */}
//           <div className="p-7 space-y-6">
//             <div>
//               <label
//                 htmlFor="status"
//                 className="block font-medium text-gray-700"
//               >
//                 Order Status
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="status"
//                   className="shadow-sm block w-full  border-gray-300 rounded-md py-3 px-4"
//                   value={editedStatus}
//                   onChange={handleStatusChange}
//                 >
//                   <option value="Pending">Pending</option>
//                   <option value="In Progress">In Progress</option>
//                   <option value="Completed">Completed</option>
//                   <option value="Partial">Partial</option>
//                   <option value="Canceled">Canceled</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="startedVotes"
//                 className="block font-medium text-gray-700"
//               >
//                 Started Votes:
//               </label>
//               <div className="mt-2 relative rounded-md shadow-sm">
//                 <input
//                   type="text"
//                   id="startedVotes"
//                   className="block w-full  border-gray-300 rounded-md py-3 px-4"
//                   placeholder="Enter started votes"
//                   value={editedStarted}
//                   onChange={handleStartedChange}
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="completedVotes"
//                 className="block font-medium text-gray-700"
//               >
//                 Deliver Votes
//               </label>
//               <div className="mt-2 relative rounded-md shadow-sm">
//                 <input
//                   type="number"
//                   id="completedVotes"
//                   className="block w-full border-gray-300 rounded-md py-3 px-4"
//                   placeholder="Enter completed votes"
//                   value={editedCompletedVotes}
//                   onChange={handleCompletedVotesChange}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="bg-gray-50 py-3 px-4 flex justify-end items-center gap-4 border-t border-gray-200">
//             <button
//               className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//             <button
//               type="button"
//               className="py-2 px-4 font-medium rounded-lg text-white bg-main-color hover:bg-orange-600 transition-colors duration-200"
//               onClick={handleSave}
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </ClickAwayListener>
//     </div>
//   );
// };

// export default EditOrderPopup;

// import React, { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FaPencilAlt } from "react-icons/fa";

// const EditOrderPopup = ({ order, onClose, onSave }) => {
//   const [editedStatus, setEditedStatus] = useState(order.status);
//   const [editedCompletedVotes, setEditedCompletedVotes] = useState(
//     order.completedVotes || 0
//   );
//   const [editedStarted, setEditedStarted] = useState(order.started);
//   const modalRef = useRef(null);

//   useEffect(() => {
//     if (order) {
//       setEditedStatus(order.status);
//       setEditedCompletedVotes(order.completedVotes || 0);
//       setEditedStarted(order.started);
//     }
//   }, [order]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         onClose();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [onClose]);

//   const handleStatusChange = (event) => {
//     setEditedStatus(event.target.value);
//   };

//   const handleCompletedVotesChange = (event) => {
//     const parsedValue = parseInt(event.target.value, 10);
//     setEditedCompletedVotes(isNaN(parsedValue) ? 0 : parsedValue);
//   };

//   const handleStartedChange = (event) => {
//     setEditedStarted(event.target.value);
//   };

//   const handleSave = () => {
//     onSave({
//       status: editedStatus,
//       completedVotes: editedCompletedVotes,
//       started: editedStarted,
//     });
//   };

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
//           <h2 className="text-lg font-semibold flex items-center">
//             <FaPencilAlt className="mr-2" /> Edit Order
//           </h2>
//           <button className="text-gray-400 hover:text-gray-600" onClick={onClose}>
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
//         <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-61px)]">
//           <div>
//             <label
//               htmlFor="status"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Order Status
//             </label>
//             <div className="mt-1">
//               <select
//                 id="status"
//                 className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                 value={editedStatus}
//                 onChange={handleStatusChange}
//               >
//                 <option value="Pending">Pending</option>
//                 <option value="In Progress">In Progress</option>
//                 <option value="Completed">Completed</option>
//                 <option value="Partial">Partial</option>
//                 <option value="Canceled">Canceled</option>
//               </select>
//             </div>
//           </div>

//           <div>
//             <label
//               htmlFor="startedVotes"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Started Votes:
//             </label>
//             <div className="mt-1">
//               <input
//                 type="text"
//                 id="startedVotes"
//                 className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                 placeholder="Enter started votes"
//                 value={editedStarted}
//                 onChange={handleStartedChange}
//               />
//             </div>
//           </div>

//           <div>
//             <label
//               htmlFor="completedVotes"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Deliver Votes
//             </label>
//             <div className="mt-1">
//               <input
//                 type="number"
//                 id="completedVotes"
//                 className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                 placeholder="Enter completed votes"
//                 value={editedCompletedVotes}
//                 onChange={handleCompletedVotesChange}
//               />
//             </div>
//           </div>
//         <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//           <button
//             type="button"
//             className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             onClick={handleSave}
//           >
//             Save
//           </button>
//         </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default EditOrderPopup;




import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiEdit2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Dropdown from "../../../Dashboard/components/Dropdown"; // Assuming Dropdown.js is in the same directory
import InputField from "../../../Dashboard/components/InputField"; // Assuming InputField.js is in the same directory

const EditOrderPopup = ({ order, onClose, onSave }) => {
  const [editedStatus, setEditedStatus] = useState(order.status);
  const [editedCompletedVotes, setEditedCompletedVotes] = useState(
    order.completedVotes || 0
  );
  const [editedStarted, setEditedStarted] = useState(order.started);
  const modalRef = useRef(null);
  const [completedVotesError, setCompletedVotesError] = useState("");
  const availableQuantity = order.quantity; // Dynamic quantity from props

  const statusOptions = [
    "Pending",
    "In Progress",
    "Completed",
    "Partial",
    "Canceled",
  ];

  useEffect(() => {
    if (order) {
      setEditedStatus(order.status);
      setEditedCompletedVotes(order.completedVotes || 0);
      setEditedStarted(order.started);
    }
  }, [order]);

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

  const handleStatusChange = (newStatus) => {
    setEditedStatus(newStatus);
  };

  const handleCompletedVotesChange = (value) => {
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)) {
      setEditedCompletedVotes(0);
      setCompletedVotesError("");
    } else if (parsedValue > availableQuantity) {
      setEditedCompletedVotes(parsedValue);
      setCompletedVotesError(
        `Cannot exceed available quantity of ${availableQuantity}`
      );
    } else {
      setEditedCompletedVotes(parsedValue);
      setCompletedVotesError("");
    }
  };

  const handleStartedChange = (value) => {
    setEditedStarted(value);
  };

  const handleSave = () => {
    if (completedVotesError) {
      return; // Prevent saving if there's an error
    }
    onSave({
      status: editedStatus,
      completedVotes: editedCompletedVotes,
      started: editedStarted,
    });
  };

  const variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-50 backdrop-blur-sm">
      <motion.div
        className="bg-white rounded-lg shadow-lg w-full max-w-md text-gray-800 h-[calc(100%-1rem)] m-3 flex flex-col justify-between"
        variants={variants}
        initial="closed"
        animate="open"
        exit="closed"
        ref={modalRef}
      >
        <div>
          <div className="p-6 rounded-t-lg bg-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-semibold flex items-center tracking-wider">
              <RiEdit2Fill className="mr-3 text-blue-500" size={28} />
              Edit Orders
            </h2>
            <button onClick={onClose} className="text-gray-900">
              <IoClose size={24} />
            </button>
          </div>

          <div className="p-6 flex flex-col justify-between">
            <div className="space-y-6 overflow-y-auto">
              <div>
                <label
                  htmlFor="status"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Order Status
                </label>
                <div className="mt-1">
                  <Dropdown
                    options={statusOptions}
                    selectedValue={editedStatus}
                    onSelect={handleStatusChange}
                    placeholder="Select Order Status"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="startedVotes"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Started Votes:
                </label>
                <div>
                  <InputField
                    type="text"
                    name="startedVotes"
                    placeholder="Enter started votes"
                    value={editedStarted}
                    onChange={(e) => handleStartedChange(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="completedVotes"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Deliver Votes
                </label>
                <div>
                  <InputField
                    type="number"
                    name="completedVotes"
                    placeholder="Enter completed votes"
                    value={editedCompletedVotes}
                    onChange={(e) => handleCompletedVotesChange(e.target.value)}
                    error={completedVotesError}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 flex items-center gap-2">
          <button
            type="button"
            className="py-2 px-4 bg-gray-200 font-medium text-gray-700 rounded-lg hover:bg-gray-300 mr-3 focus:outline-none transition-colors duration-200 w-full"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="py-2 px-4 bg-main-color font-medium text-white rounded-lg hover:bg-orange-600 focus:outline-none transition-colors duration-200 w-full"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EditOrderPopup;
