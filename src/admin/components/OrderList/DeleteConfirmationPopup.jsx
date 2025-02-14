// import React from 'react';
// import { FaTimes, FaCheck } from 'react-icons/fa';

// const DeleteConfirmationPopup = ({ onCancel, onConfirm, setShowDeleteConfirmation }) => {
//     return (
//         <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
//             <div className="bg-white p-8 rounded shadow-md">
//                 <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
//                 <p className="mb-4">Are you sure you want to delete this order?</p>
//                 <div className="flex justify-end space-x-4">
//                     <button
//                         className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         onClick={() => setShowDeleteConfirmation(false)}
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         onClick={onConfirm}
//                     >
//                         Delete
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DeleteConfirmationPopup;

// import React from "react";
// import { MdDeleteForever} from "react-icons/md";

// const DeleteConfirmationPopup = ({
//   onCancel,
//   onConfirm,
//   setShowDeleteConfirmation,
// }) => {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-md">
//         <div className="px-6 py-4 border-b border-gray-200">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Confirm Deletion
//           </h2>
//         </div>
//         <div className="px-6 py-4">
//           <p className="text-gray-700">
//             Are you sure you want to delete this order?
//           </p>
//         </div>
//         <div className="px-6 py-4 bg-gray-50 flex justify-start items-center space-x-4">
//           <button
//             className="bg-main-color hover:bg-orange-600 text-white font-medium py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transition-colors duration-200"
//             onClick={onConfirm}
//           >
//             <div className="flex items-center gap-2">
//               <MdDeleteForever  className="w-5 h-5" />
//               Delete
//             </div>
//           </button>
//           <button
//             className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-colors duration-200"
//             onClick={() => setShowDeleteConfirmation(false)}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeleteConfirmationPopup;

// import React from "react";
// import { MdDeleteForever, MdOutlineErrorOutline  } from "react-icons/md";

// const DeleteConfirmationPopup = ({
//   onCancel,
//   onConfirm,
//   setShowDeleteConfirmation,
// }) => {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-md p-6">
//         <div className="flex flex-col items-center justify-center mb-4">
//           <div className="relative">
//             <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
//               <MdOutlineErrorOutline  className="text-red-600 text-3xl" />
//             </div>
//           </div>
//         </div>
//         <div className="px-6 py-2">
//           <h2 className="text-lg font-semibold text-gray-800 text-center">
//             Confirm Deletion
//           </h2>
//           <p className="text-gray-700 text-center">
//             Are you sure you want to delete this order?
//           </p>
//         </div>
//         <div className="px-6 py-4 flex justify-center items-center space-x-4">
//           <button
//             className="bg-main-color hover:bg-orange-600 text-white font-medium py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transition-colors duration-200"
//             onClick={onConfirm}
//           >
//             <div className="flex items-center gap-2">
//               <MdDeleteForever className="w-5 h-5" />
//               Delete
//             </div>
//           </button>
//           <button
//             className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-colors duration-200"
//             onClick={() => setShowDeleteConfirmation(false)}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeleteConfirmationPopup;

import React from "react";
import { MdDeleteForever, MdOutlineErrorOutline } from "react-icons/md";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const DeleteConfirmationPopup = ({
  onCancel,
  onConfirm,
  setShowDeleteConfirmation,
}) => {
  const handleOutsideClick = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <ClickAwayListener onClickAway={handleOutsideClick}>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-md p-6">
          <div className="flex flex-col items-center justify-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                <MdOutlineErrorOutline className="text-red-600 text-3xl" />
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-lg font-semibold text-gray-800 text-center">
              Confirm Deletion
            </h2>
            <p className="text-gray-700 text-center">
              Are you sure you want to delete this order?
            </p>
          </div>
          <div className="mt-6 flex justify-center items-center space-x-4">
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors duration-200"
              onClick={() => setShowDeleteConfirmation(false)}
            >
              Cancel
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-3 rounded-md transition-colors duration-200"
              onClick={onConfirm}
            >
              <div className="flex items-center gap-2">
                <MdDeleteForever className="w-5 h-5" />
                Delete
              </div>
            </button>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default DeleteConfirmationPopup;
