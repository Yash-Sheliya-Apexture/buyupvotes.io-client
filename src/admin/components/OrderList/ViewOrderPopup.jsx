// import React from 'react';
// import moment from 'moment';

// const ViewOrderPopup = ({ order, onClose }) => {

//     const formatDate = (dateString) => {
//         if (!dateString) return '';
//         return moment(dateString).format('MMMM D, YYYY');
//     };

//     const formatComments = (text) => {
//         if (!text) return '';
//         return text.split('\n').map((line, index) => (
//             <React.Fragment key={index}>
//                 {line}
//                 {index < text.split('\n').length - 1 && <br />}
//             </React.Fragment>
//         ));
//     };

//     const getStatusColorClass = (status) => {
//         switch (status) {
//             case 'Pending':
//                 return 'bg-orange-500';
//             case 'In Progress':
//                 return 'bg-blue-500';
//             case 'Completed':
//                 return 'bg-green-500';
//             case 'Partial':
//                 return 'bg-yellow-500';
//             case 'Canceled':
//                 return 'bg-red-500';
//             default:
//                 return 'bg-gray-500'; // Default color
//         }
//     };

//     const statusColorClass = getStatusColorClass(order.status);

//     return (
//         <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
//             <div className="bg-white p-8 rounded shadow-md w-96">
//                 <h2 className="text-2xl font-bold mb-4">View Order</h2>

//                 {/* Status with colored background */}
//                 <div className="mb-4">
//                     <p className="font-bold">Status:</p>
//                     <div className={`inline-block px-4 py-2 rounded-full text-white ${statusColorClass}`}>
//                         {order.status}
//                     </div>
//                 </div>

//                 <div className="mb-2">
//                     <p><span className="font-bold">Order ID:</span> {order.orderId.substring(0, 4)}</p>
//                 </div>
//                 <div className="mb-2">
//                     <p><span className="font-bold">User ID:</span> {order.userId.substring(0, 4)}</p>
//                 </div>
//                 <div className="mb-2">
//                     <p><span className="font-bold">Category:</span> {order.category}</p>
//                 </div>
//                 <div className="mb-2">
//                     <p><span className="font-bold">Service:</span> {order.service}</p>
//                 </div>
//                 <div className="mb-2">
//                     <p><span className="font-bold">Quantity:</span> {order.quantity}</p>
//                 </div>

//                 <div className="mb-2">
//                     <p><span className="font-bold">Completed Votes:</span> {order.completedVotes}</p>
//                 </div>
//                 <div className="mb-2">
//                     <p><span className="font-bold">Order Date:</span> {formatDate(order.createdAt)}</p>
//                 </div>
//                 {order.comments && (
//                     <div className="mb-2">
//                         <p><span className="font-bold">Comments:</span> {formatComments(order.comments)}</p>
//                     </div>
//                 )}
//                 <div className="mb-2">
//                     <div className='flex gap-1'>
//                         <span className="font-bold">Link:</span>
//                         <a href={order.link} target="_blank" rel="noopener noreferrer" className='truncate'>
//                             {order.link}
//                         </a>
//                     </div>
//                 </div>
//                 <div className="flex justify-end">
//                     <button
//                         className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         onClick={onClose}
//                     >
//                         Close
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ViewOrderPopup;

// import React from 'react';
// import moment from 'moment';
// import { IoClose } from 'react-icons/io5';  // Import close icon from react-icons

// const ViewOrderPopup = ({ order, onClose }) => {
//     const formatDate = (dateString) => {
//         if (!dateString) return '';
//         return moment(dateString).format('MMMM D, YYYY, h:mm A');
//     };

//     const formatComments = (text) => {
//         if (!text) return '';
//         return text.split('\n').map((line, index) => (
//             <React.Fragment key={index}>
//                 {line}
//                 {index < text.split('\n').length - 1 && <br />}
//             </React.Fragment>
//         ));
//     };

//     const getStatusColorClass = (status) => {
//         switch (status) {
//             case 'Pending':
//                 return 'bg-orange-100 text-orange-700 ring-orange-700/10';
//             case 'In Progress':
//                 return 'bg-blue-100 text-blue-700 ring-blue-700/10';
//             case 'Completed':
//                 return 'bg-green-100 text-green-700 ring-green-700/10';
//             case 'Partial':
//                 return 'bg-yellow-100 text-yellow-700 ring-yellow-700/10';
//             case 'Canceled':
//                 return 'bg-red-100 text-red-700 ring-red-700/10';
//             default:
//                 return 'bg-gray-100 text-gray-700 ring-gray-700/10';
//         }
//     };

//     const statusColorClass = getStatusColorClass(order.status);

//     return (
//         <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center p-4 z-50">
//             <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden">
//                 <div className="p-6">
//                     <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Details</h2>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {/* Status */}
//                         <div className='flex items-center gap-2'>
//                             <label className="font-bold block">Status:</label>
//                             <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium  ${statusColorClass}`}>
//                                 {order.status}
//                             </div>
//                         </div>

//                         {/* Order ID */}
//                         <div>
//                             <label className="font-bold block">Order ID</label>
//                             <p className="mt-1 text-sm text-gray-500">{order.orderId.substring(0, 8)}</p>
//                         </div>

//                         {/* User ID */}
//                         <div>
//                             <label className="font-bold block">User ID</label>
//                             <p className="mt-1 text-sm text-gray-500">{order.userId.substring(0, 8)}</p>
//                         </div>

//                         {/* Category */}
//                         <div>
//                             <label className="font-bold block">Category</label>
//                             <p className="mt-1 text-sm text-gray-500">{order.category}</p>
//                         </div>

//                         {/* Service */}
//                         <div>
//                             <label className="font-bold block">Service</label>
//                             <p className="mt-1 text-sm text-gray-500">{order.service}</p>
//                         </div>

//                         {/* Quantity */}
//                         <div>
//                             <label className="font-bold block">Quantity</label>
//                             <p className="mt-1 text-sm text-gray-500">{order.quantity}</p>
//                         </div>

//                         {/* Completed Votes */}
//                         <div>
//                             <label className="font-bold block">Completed Votes</label>
//                             <p className="mt-1 text-sm text-gray-500">{order.completedVotes}</p>
//                         </div>

//                         {/* Order Date */}
//                         <div>
//                             <label className="font-bold block">Order Date</label>
//                             <p className="mt-1 text-sm text-gray-500">{formatDate(order.createdAt)}</p>
//                         </div>

//                     </div>
//                     {/* Link */}
//                     <div className='mt-4'>
//                             <label className="font-bold block">Link</label>
//                             <a
//                                 href={order.link}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="mt-1 text-sm text-blue-600 hover:underline break-all"
//                             >
//                                 {order.link}
//                             </a>
//                         </div>

//                     {/* Comments */}
//                     {order.comments && (
//                         <div className="mt-4 h-40 overflow-hidden">
//                             <label className="font-bold block">Comments</label>
//                             <div className="mt-1 text-sm text-gray-500 whitespace-pre-line h-full overflow-y-auto">
//                                 {formatComments(order.comments)}
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//                     <button
//                         type="button"
//                         className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-colors duration-200"
//                         onClick={onClose}
//                     >
//                         Close
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ViewOrderPopup;

import React from "react";
import moment from "moment";
import {
  IoClose,
  IoCheckmarkCircle,
  IoAlertCircle,
  IoInformationCircle,
  IoTimeOutline,
} from "react-icons/io5";

const ViewOrderPopup = ({ order, onClose }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return moment(dateString).format("MMMM D, YYYY, h:mm A");
  };

  const formatComments = (text) => {
    if (!text) return "";
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split("\n").length - 1 && (
          <>
            <br /> <br />
          </>
        )}
      </React.Fragment>
    ));
  };

  const getStatusDetails = (status) => {
    switch (status) {
      case "Pending":
        return {
          color: "yellow",
          icon: IoTimeOutline,
          message: "Order is awaiting processing.",
        };
      case "In Progress":
        return {
          color: "blue",
          icon: IoInformationCircle,
          message: "Order is currently being processed.",
        };
      case "Completed":
        return {
          color: "green",
          icon: IoCheckmarkCircle,
          message: "Order has been completed.",
        };
      case "Partial":
        return {
          color: "orange",
          icon: IoAlertCircle,
          message: "Order was partially completed.",
        };
      case "Canceled":
        return {
          color: "red",
          icon: IoAlertCircle,
          message: "Order has been canceled.",
        };
      default:
        return {
          color: "gray",
          icon: IoInformationCircle,
          message: "Unknown order status.",
        };
    }
  };

  const { color, icon: StatusIcon, message } = getStatusDetails(order.status);
  const statusColorClass = `text-${color}-400`;

  const linkStyle = {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="relative rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden bg-white ">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Order Details
            </h2>
            <div
              className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-gray-500 ${statusColorClass}`}
            >
              <StatusIcon className="h-5 w-5 mr-2" aria-hidden="true" />
              {order.status}
            </div>
          </div>
          <p className="text-sm text-gray-400 italic mb-4">{message}</p>

          <div className="grid grid-cols-3 gap-6">
            {/* Order ID */}
            <div className="rounded-2xl p-4 shadow-lg">
              <label className="block text-xs font-bold  uppercase tracking-wide mb-2">
                Order ID
              </label>
              <p className="font-medium text-gray-500">
                {order.orderId.substring(0, 4)}
              </p>
            </div>

            {/* User ID */}
            <div className="rounded-2xl p-4 shadow-lg">
              <label className="block text-xs font-bold  uppercase tracking-wide mb-2">
                User ID
              </label>
              <p className="font-medium text-gray-500">
                {order.userId.substring(0, 4)}
              </p>
            </div>

            {/* Category */}
            <div className="rounded-2xl p-4 shadow-lg">
              <label className="block text-xs font-bold  uppercase tracking-wide mb-2">
                Category
              </label>
              <p className="font-medium text-gray-500">{order.category}</p>
            </div>

            {/* Service */}
            <div className="rounded-2xl p-4 shadow-lg">
              <label className="block text-xs font-bold  uppercase tracking-wide mb-2">
                Service
              </label>
              <p className="font-medium text-gray-500">{order.service}</p>
            </div>

            {/* Quantity */}
            <div className="rounded-2xl p-4 shadow-lg">
              <label className="block text-xs font-bold  uppercase tracking-wide mb-2">
                Quantity
              </label>
              <p className="font-medium text-gray-500">{order.quantity}</p>
            </div>

            {/* Completed Votes */}
            <div className="rounded-2xl p-4 shadow-lg">
              <label className="block text-xs font-bold  uppercase tracking-wide mb-2">
                Completed Votes
              </label>
              <p className="font-medium text-gray-500">
                {order.completedVotes}
              </p>
            </div>

            {/* Order Date */}
            <div className="rounded-2xl p-4 shadow-lg">
              <label className="block text-xs font-bold  uppercase tracking-wide mb-2">
                Order Date
              </label>
              <p className="font-medium text-gray-500">
                {formatDate(order.createdAt)}
              </p>
            </div>

            {/* Link */}
            <div className="rounded-2xl p-4 shadow-lg col-span-full lg:col-span-1">
              <label className="block text-xs font-bold  uppercase tracking-wide mb-2">
                Link
              </label>
              <a
                href={order.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline break-all font-medium"
                style={linkStyle}
              >
                {order.link}
              </a>
            </div>
          </div>

          {/* Comments */}
          {order.comments && (
            <div className="mt-8 h-[200px] overflow-hidden">
              <label className="block text-xs font-bold  uppercase tracking-wide mb-2">
                Comments
              </label>
              <div className="rounded-2xl p-4 shadow-lg whitespace-pre-line h-full overflow-y-auto">
                <p className="text-small font-medium text-gray-500">
                  {formatComments(order.comments)}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="px-8 py-4 flex justify-end">
          <button
            type="button"
            className="rounded-lg px-6 py-3 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewOrderPopup;
