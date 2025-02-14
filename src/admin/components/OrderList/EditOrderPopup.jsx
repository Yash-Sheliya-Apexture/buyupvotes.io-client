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

import ClickAwayListener from "@mui/material/ClickAwayListener";
import React, { useState, useEffect } from "react";
import { FaCheck, FaPencilAlt } from "react-icons/fa";


const EditOrderPopup = ({ order, onClose, onSave }) => {
  const [editedStatus, setEditedStatus] = useState(order.status);
  const [editedCompletedVotes, setEditedCompletedVotes] = useState(
    order.completedVotes || 0
  );
  const [editedStarted, setEditedStarted] = useState(order.started);

  useEffect(() => {
    if (order) {
      setEditedStatus(order.status);
      setEditedCompletedVotes(order.completedVotes || 0);
      setEditedStarted(order.started);
    }
  }, [order]);

  const handleStatusChange = (event) => {
    setEditedStatus(event.target.value);
  };

  const handleCompletedVotesChange = (event) => {
    const parsedValue = parseInt(event.target.value, 10);
    setEditedCompletedVotes(isNaN(parsedValue) ? 0 : parsedValue);
  };

  const handleStartedChange = (event) => {
    setEditedStarted(event.target.value);
  };

  const handleSave = () => {
    onSave({
      status: editedStatus,
      completedVotes: editedCompletedVotes,
      started: editedStarted,
    });
  };

  const handleOutsideClick = () =>{
    onClose();
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <ClickAwayListener onClickAway={handleOutsideClick}>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md transition-all transform duration-300 ease-in-out scale-100">
        {/* Header */}
        <div className="bg-gray-300  px-6 py-5 border-b border-gray-200">
          <h2 className="text-xl font-semibold tracking-wide flex items-center">
            <FaPencilAlt className="mr-3 text-lg" />
            <span className="font-display">Edit Order</span>
          </h2>
        </div>

        {/* Body */}
        <div className="p-7 space-y-6">
          <div>
            <label
              htmlFor="status"
              className="block font-medium text-gray-700"
            >
              Order Status
            </label>
            <div className="mt-2">
              <select
                id="status"
                className="shadow-sm block w-full  border-gray-300 rounded-md py-3 px-4"
                value={editedStatus}
                onChange={handleStatusChange}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Partial">Partial</option>
                <option value="Canceled">Canceled</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="startedVotes"
              className="block font-medium text-gray-700"
            >
              Started Votes:
            </label>
            <div className="mt-2 relative rounded-md shadow-sm">
              <input
                type="text"
                id="startedVotes"
                className="block w-full  border-gray-300 rounded-md py-3 px-4"
                placeholder="Enter started votes"
                value={editedStarted}
                onChange={handleStartedChange}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="completedVotes"
              className="block font-medium text-gray-700"
            >
              Deliver Votes
            </label>
            <div className="mt-2 relative rounded-md shadow-sm">
              <input
                type="number"
                id="completedVotes"
                className="block w-full border-gray-300 rounded-md py-3 px-4"
                placeholder="Enter completed votes"
                value={editedCompletedVotes}
                onChange={handleCompletedVotesChange}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 py-3 px-4 flex justify-end items-center gap-4 border-t border-gray-200">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-colors duration-200"
            onClick={onClose}
          >
           
              Cancel
        
          </button>
          <button
            type="button"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm font-medium rounded-lg text-white bg-main-color hover:bg-orange-600 transition-colors duration-200"
            onClick={handleSave}
          >
            <div className="flex items-center gap-2">
              <FaCheck className="w-5 h-5" />
              Save
            </div>
          </button>
        </div>
      </div>
      </ClickAwayListener>
    </div>
  );
};

export default EditOrderPopup;