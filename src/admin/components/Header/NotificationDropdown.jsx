// import React from "react";
// import { Link } from "react-router-dom";
// import { FaRegBell  } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// const NotificationDropdown = ({
//   notifications,
//   isOpen,
//   toggleDropdown,
//   dropdownRef,
// }) => {
//   const truncateText = (text, limit = 8) => {
//     const words = text.split(" ");
//     if (words.length > limit) {
//       return words.slice(0, limit).join(" ") + " ...";
//     }
//     return text;
//   };
//   const dropdownVariants = {
//     initial: { opacity: 0, y: -10, scale: 0.95 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.2, ease: "easeInOut" },
//     },
//     exit: {
//       opacity: 0,
//       y: -10,
//       scale: 0.95,
//       transition: { duration: 0.15, ease: "easeInOut" },
//     },
//   };
//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         className="rounded-full h-8 w-8 bg-gray-100 flex items-center justify-center"
//         onClick={toggleDropdown}
//       >
//         <FaRegBell  className="text-gray-700 animate-tada" size={14} />
//         {notifications.length > 0 && (
//           <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-600 text-[10px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-10">
//             {notifications.length}
//           </span>
//         )}
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="absolute top-12 right-0 mt-0.5 w-96 bg-white border border-gray-200 rounded-xl shadow-main z-10"
//             variants={dropdownVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//           >
//             <div className="py-4 px-4 border-b border-gray-200">
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-800 font-semibold">
//                   Notifications
//                 </span>
//                 <Link
//                   to="#"
//                   className="relative text-gray-800 text-sm font-medium after:block after:h-[2px] after:bg-gray-800 after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
//                 >
//                   View all
//                 </Link>
//               </div>
//             </div>
//             <div>
//               {notifications.map((notification) => (
//                 <a
//                   key={notification.id}
//                   href="#"
//                   className="block py-2 px-4 hover:bg-gray-100 border-b last:border-b-0"
//                 >
//                   <div className="flex items-start gap-2">
//                     <img
//                       src={notification.avatar}
//                       alt="Notification Avatar"
//                       className="w-12 h-12 rounded-full object-cover"
//                     />
//                     <div className="w-full">
//                       <p className="text-gray-800 font-semibold">
//                         {truncateText(notification.message)}
//                       </p>
//                       <p className="text-gray-600 text-xs">
//                         {truncateText(notification.details)}
//                       </p>
//                       <p className="text-gray-500 text-xs">
//                         {notification.time}
//                       </p>
//                     </div>
//                     {/* Dot:-  Unread notification */}
//                     {!notification.isRead && (
//                       <div>
//                         <span className="h-[10px] w-[10px] bg-red-500 border border-white dark:border-slate-400 rounded-full inline-block"></span>
//                       </div>
//                     )}
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default NotificationDropdown;


// // NotificationDropdown.js
// import React from "react";
// import { Link } from "react-router-dom";
// import { FaRegBell } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// const NotificationDropdown = ({
//   notifications,
//   isOpen,
//   toggleDropdown,
//   dropdownRef,
//   onNotificationClick, // Add prop to handle notification clicks
// }) => {
//   const truncateText = (text, limit = 8) => {
//     const words = text.split(" ");
//     if (words.length > limit) {
//       return words.slice(0, limit).join(" ") + " ...";
//     }
//     return text;
//   };
//   const dropdownVariants = {
//     initial: { opacity: 0, y: -10, scale: 0.95 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.2, ease: "easeInOut" },
//     },
//     exit: {
//       opacity: 0, y: -10,
//       scale: 0.95,
//       transition: { duration: 0.15, ease: "easeInOut" },
//     },
//   };
//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         className="rounded-full h-8 w-8 bg-gray-100 flex items-center justify-center"
//         onClick={toggleDropdown}
//       >
//         <FaRegBell className="text-gray-700 animate-tada" size={14} />
//         {notifications && Array.isArray(notifications) && notifications.length > 0 ? (  // Check if notifications is an array and not empty
//           <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-600 text-[10px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-10">
//             {notifications.length}
//           </span>
//         ) : null}
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="absolute top-12 right-0 mt-0.5 w-96 bg-white border border-gray-200 rounded-xl shadow-main z-10"
//             variants={dropdownVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//           >
//             <div className="py-4 px-4 border-b border-gray-200">
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-800 font-semibold">
//                   Notifications
//                 </span>
//                 <Link
//                   to="#"
//                   className="relative text-gray-800 text-sm font-medium after:block after:h-[2px] after:bg-gray-800 after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
//                 >
//                   View all
//                 </Link>
//               </div>
//             </div>
//             <div className="max-h-80 overflow-y-auto">  {/* Added max-h and overflow-y-auto for scrolling */}
//               {notifications && Array.isArray(notifications) && notifications.map((notification) => ( // Check if notifications is an array
//                   <Link
//                     to={`/admin/orders/${notification.orderId}`}
//                     key={notification.id}
//                     className="block py-2 px-4 hover:bg-gray-100 border-b last:border-b-0"
//                     onClick={() => onNotificationClick(notification.id)}  // Call onNotificationClick
//                   >
//                     <div className="flex items-start gap-2">
//                       <div className="w-full">
//                         <p className="text-gray-800 font-semibold">
//                           {truncateText(notification.message)}
//                         </p>
//                         <p className="text-gray-600 text-xs">
//                           {truncateText(notification.details)}
//                         </p>
//                         <p className="text-gray-500 text-xs">
//                           {notification.time}
//                         </p>
//                       </div>
//                       {!notification.isRead && (
//                         <div>
//                           <span className="h-[10px] w-[10px] bg-red-500 border border-white dark:border-slate-400 rounded-full inline-block"></span>
//                         </div>
//                       )}
//                     </div>
//                   </Link>
//                 ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default NotificationDropdown;


// // NotificationDropdown.js
// import React from "react";
// import { Link } from "react-router-dom";
// import { FaRegBell } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import moment from 'moment';  // Import moment

// const NotificationDropdown = ({
//   notifications,
//   isOpen,
//   toggleDropdown,
//   dropdownRef,
//   onNotificationClick, // Add prop to handle notification clicks
// }) => {
//   const truncateText = (text, limit = 8) => {
//     const words = text.split(" ");
//     if (words.length > limit) {
//       return words.slice(0, limit).join(" ") + " ...";
//     }
//     return text;
//   };

//   const formatDate = (dateString) => {  // Function to format the date
//     if (!dateString) return "";
//     return moment(dateString).format("MMMM DD, YYYY - h:mm A");
//   };

//   const dropdownVariants = {
//     initial: { opacity: 0, y: -10, scale: 0.95 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.2, ease: "easeInOut" },
//     },
//     exit: {
//       opacity: 0, y: -10,
//       scale: 0.95,
//       transition: { duration: 0.15, ease: "easeInOut" },
//     },
//   };
//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         className="rounded-full h-8 w-8 bg-gray-100 flex items-center justify-center"
//         onClick={toggleDropdown}
//       >
//         <FaRegBell className="text-gray-700 animate-tada" size={14} />
//         {notifications && Array.isArray(notifications) && notifications.length > 0 ? (  // Check if notifications is an array and not empty
//           <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-600 text-[10px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-10">
//             {notifications.length}
//           </span>
//         ) : null}
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="absolute top-12 right-0 mt-0.5 w-96 bg-white border border-gray-200 rounded-xl shadow-main z-10"
//             variants={dropdownVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//           >
//             <div className="py-4 px-4 border-b border-gray-200">
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-800 font-semibold">
//                   Notifications
//                 </span>
//                 <Link
//                   to="/admin/orders"
//                   className="relative text-gray-800 text-sm font-medium after:block after:h-[2px] after:bg-gray-800 after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
//                 >
//                   View all
//                 </Link>
//               </div>
//             </div>
//             <div className="max-h-80 overflow-y-auto">  {/* Added max-h and overflow-y-auto for scrolling */}
//               {notifications && Array.isArray(notifications) && notifications.map((notification) => ( // Check if notifications is an array
//                 <Link
//                   to={`/admin/orders/${notification.orderId}`}
//                   key={notification.id}
//                   className="block py-2 px-4 hover:bg-gray-100 border-b last:border-b-0"
//                   onClick={() => onNotificationClick(notification.id)}  // Call onNotificationClick
//                 >
//                   <div className="flex items-start gap-2">
//                     <div className="w-full">
//                       <p className="text-gray-800 font-semibold">
//                         {truncateText(notification.message)}
//                       </p>
//                       <p className="text-gray-600 text-xs">
//                         {truncateText(notification.details)}
//                       </p>
//                       <p className="text-gray-500 text-xs">
//                         {formatDate(notification.time)} {/* Use formatDate function here */}
//                       </p>
//                     </div>
//                     {!notification.isRead && (
//                       <div>
//                         <span className="h-[10px] w-[10px] bg-red-500 border border-white dark:border-slate-400 rounded-full inline-block"></span>
//                       </div>
//                     )}
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default NotificationDropdown;


import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { FaRegBell } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import moment from 'moment';

const NotificationDropdown = ({
  notifications,
  isOpen,
  toggleDropdown,
  dropdownRef,
  onNotificationClick,
}) => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const truncateText = (text, limit = 8) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ...";
    }
    return text;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return moment(dateString).format("MMMM DD, YYYY - h:mm A");
  };

  const handleNotificationClick = (notificationId, orderId) => {
    onNotificationClick(notificationId);  // Call the mark as read function
    toggleDropdown(); // Close the dropdown after clicking
    navigate(`/admin/orders/${orderId}`);  // Programmatically navigate
  };

  const dropdownVariants = {
    initial: { opacity: 0, y: -10, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="rounded-full h-8 w-8 bg-gray-100 flex items-center justify-center"
        onClick={toggleDropdown}
      >
        <FaRegBell className="text-gray-700 animate-tada" size={14} />
        {notifications && Array.isArray(notifications) && notifications.length > 0 ? (
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-600 text-[10px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-10">
            {notifications.length}
          </span>
        ) : null}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-12 right-0 mt-0.5 w-96 bg-white border border-gray-200 rounded-xl shadow-main z-10"
            variants={dropdownVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="py-4 px-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-gray-800 font-semibold">
                  Notifications
                </span>
                <Link
                  to="/admin/orders"
                  className="relative text-gray-800 text-sm font-medium after:block after:h-[2px] after:bg-gray-800 after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                  onClick={toggleDropdown} // Close the dropdown on "View All" click
                >
                  View all
                </Link>
              </div>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {notifications && Array.isArray(notifications) && notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="block py-2 px-4 hover:bg-gray-100 border-b last:border-b-0 cursor-pointer"
                    onClick={() => handleNotificationClick(notification.id, notification.orderId)}  // Pass orderId
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-full">
                        <p className="text-gray-800 font-semibold">
                          {truncateText(notification.message)}
                        </p>
                        <p className="text-gray-600 text-xs">
                          {truncateText(notification.details)}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {formatDate(notification.time)}
                        </p>
                      </div>
                      {!notification.isRead && (
                        <div>
                          <span className="h-[10px] w-[10px] bg-red-500 border border-white dark:border-slate-400 rounded-full inline-block"></span>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-4 px-4 text-center text-gray-500">
                  No notifications
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationDropdown;