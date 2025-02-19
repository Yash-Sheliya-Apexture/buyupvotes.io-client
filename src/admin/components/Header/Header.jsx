// // // src/admin/components/Header.jsx

// import React from 'react';
// import UserAvatar from './UserAvatar';
// import { CiSearch } from "react-icons/ci";
// import { BsCart3 } from "react-icons/bs";
// import { HiOutlineBellAlert } from "react-icons/hi2";
// import { BsArrowsFullscreen } from "react-icons/bs";
// import { IoSettingsOutline } from "react-icons/io5";

// const Header = () => {
//     return (
//         <header className="bg-white py-4 shadow-md sticky top-0 z-10 px-4">
//             <div className="container mx-auto flex items-center justify-between">
//                 {/* Left Side: Search Field */}
//                 <div className="w-1/2">
//                     <div className="relative">
//                         <input
//                             type="text"
//                             placeholder="Search for Results..."
//                             className="py-2 pl-10 pr-4 w-3/5 rounded-md border text-[#61748f] text-sm border-[#e2e6f1] focus:outline-none hover:border-black transition-colors duration-200 ease-in"
//                         />
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <CiSearch className="size-5 text-gray-700" aria-hidden="true" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Side: Buttons */}
//                 <div className="flex items-center space-x-3 cursor-pointer">
//                     <a className="relative rounded-md p-1.5 border border-[#e2e6f1]">
//                         <BsCart3 className='h-6 w-6 text-gray-700' />
//                         <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white rounded-full text-xxs px-1.5 font-normal">
//                             5
//                         </span>
//                     </a>
//                     <a className="relative rounded-md p-1.5 border border-[#e2e6f1]">
//                         <HiOutlineBellAlert className="h-6 w-6 text-gray-700" />
//                         <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-pink-500 text-white rounded-full text-xxs px-1.5 font-normal">
//                             3
//                         </span>
//                     </a>
//                     {/* FullScreen-Icon */}
//                     <a className="rounded-md p-1.5 border border-[#e2e6f1]">
//                         <BsArrowsFullscreen className="h-6 w-6 p-0.5 text-gray-700" />
//                     </a>
//                     <UserAvatar /> {/*  Assume UserAvatar component displays the user avatar  */}

//                     <a className="rounded-md p-1.5 border border-[#e2e6f1]">
//                         <IoSettingsOutline className="h-6 w-6 text-gray-700" />
//                     </a>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;

// import React, { useState, useEffect, useRef } from 'react';
// import UserAvatar from './UserAvatar';
// import { CiSearch } from "react-icons/ci";
// import { BsCart3 } from "react-icons/bs";
// import { HiOutlineBellAlert } from "react-icons/hi2";
// import { BsArrowsFullscreen, BsArrowsAngleContract } from "react-icons/bs"; // Import contract icon
// import { IoSettingsOutline } from "react-icons/io5";
// const Header = () => {
//     const [isFullscreen, setIsFullscreen] = useState(false);
//     const fullscreenRef = useRef(null);
//     const handleFullscreen = () => {
//         if (!isFullscreen) {
//             if (document.documentElement.requestFullscreen) {
//                 document.documentElement.requestFullscreen();
//             } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
//                 document.documentElement.mozRequestFullScreen();
//             } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
//                 document.documentElement.webkitRequestFullscreen();
//             } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
//                 document.documentElement.msRequestFullscreen();
//             }
//         } else {
//             if (document.exitFullscreen) {
//                 document.exitFullscreen();
//             } else if (document.mozCancelFullScreen) { /* Firefox */
//                 document.mozCancelFullScreen();
//             } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
//                 document.webkitExitFullscreen();
//             } else if (document.msExitFullscreen) { /* IE/Edge */
//                 document.msExitFullscreen();
//             }
//         }
//     };
//     useEffect(() => {
//         const handleFullscreenChange = () => {
//             setIsFullscreen(!!document.fullscreenElement || !!document.mozFullScreenElement || !!document.webkitFullscreenElement || !!document.msFullscreenElement);
//         };

//         document.addEventListener('fullscreenchange', handleFullscreenChange);
//         document.addEventListener('mozfullscreenchange', handleFullscreenChange);
//         document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
//         document.addEventListener('msfullscreenchange', handleFullscreenChange);
//         return () => {
//             document.removeEventListener('fullscreenchange', handleFullscreenChange);
//             document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
//             document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
//             document.removeEventListener('msfullscreenchange', handleFullscreenChange);
//         };
//     }, []);
//     const IconButton = ({ icon: Icon, count, color = "bg-indigo-500" }) => (
//         <button
//             className="relative p-2 rounded-lg transition-all duration-300 bg-gray-100
//                  group"
//         >
//             <Icon className="w-5 h-5 text-gray-600 group-hover:text-gray-900
//                       transition-transform duration-300" />
//             {count && (
//                 <span className={`absolute -top-1.5 -right-1.5 ${color} size-4 rounded-full
//                          flex items-center justify-center text-xxs text-white
//                          animate-bounce`}>
//                     {count}
//                 </span>
//             )}
//         </button>
//     );
//     return (
//         <header className="bg-white py-4 shadow-md sticky top-0 z-10 px-4" ref={fullscreenRef}>
//             <div className="container mx-auto flex items-center justify-between">
//                 {/* Left Side: Search Field */}
//                 <div className="w-1/2">
//                     <div className="relative">
//                         <input
//                             type="text"
//                             placeholder="Search for Results..."
//                             className="py-2 pl-10 pr-4 w-3/5 rounded-full border text-[#61748f] text-sm border-gray-500 focus:outline-none hover:border-black transition-colors duration-200 ease-in"
//                         />
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <CiSearch className="size-5 text-gray-700" aria-hidden="true" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                     <IconButton icon={BsCart3} count={5} color="bg-indigo-500" />
//                     <IconButton icon={HiOutlineBellAlert} count={3} color="bg-pink-500" />
//                     <div className="rounded-lg bg-gray-100 p-1.5 cursor-pointer" onClick={handleFullscreen}>
//                         {isFullscreen ? (
//                             <BsArrowsAngleContract className="h-6 w-6 p-0.5 text-gray-500 hover:text-gray-900" />
//                         ) : (
//                             <BsArrowsFullscreen className="h-6 w-6 p-0.5 text-gray-500 hover:text-gray-900" />
//                         )}
//                     </div>
//                     {/* User Avatar */}
//                     <UserAvatar />
//                     <IconButton icon={IoSettingsOutline} />
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;

// import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaEnvelope, FaBell, FaSearch } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaUserAlt,
//   FaCommentDots,
//   FaEnvelopeOpen,
//   FaCheckSquare,
//   FaCog,
//   FaTags,
//   FaQuestionCircle,
//   FaSignOutAlt,
// } from "react-icons/fa";

// const Header = () => {
//   const [messageDropdownOpen, setMessageDropdownOpen] = useState(false);
//   const [notificationDropdownOpen, setNotificationDropdownOpen] =
//     useState(false);
//   const [userDropdownOpen, setUserDropdownOpen] = useState(false); // New state for user dropdown
//   const messageDropdownRef = useRef(null);
//   const notificationDropdownRef = useRef(null);
//   const userDropdownRef = useRef(null); // Ref for user dropdown
//   const [searchTerm, setSearchTerm] = useState(""); // For search input

//   const messages = [
//     {
//       id: 1,
//       name: "Wade Warren",
//       message:
//         "Hi! How are you doing?..... This is a really long message to demonstrate the truncation functionality. I hope it works well!",
//       time: "3 min ago",
//       avatar: "https://randomuser.me/api/portraits/women/11.jpg",
//       unread: 1,
//     },
//     {
//       id: 2,
//       name: "Savannah Nguyen",
//       message: "Hi! How are you doing?.....",
//       time: "3 min ago",
//       avatar: "https://randomuser.me/api/portraits/men/18.jpg",
//       status: "online",
//       unread: 0,
//     },
//     {
//       id: 3,
//       name: "Ralph Edwards",
//       message: "Hi! How are you doing?.....",
//       time: "3 min ago",
//       avatar: "https://randomuser.me/api/portraits/men/19.jpg",
//       unread: 8,
//     },
//     {
//       id: 4,
//       name: "Cody Fisher",
//       message: "Hi! How are you doing?.....",
//       time: "3 min ago",
//       avatar: "https://randomuser.me/api/portraits/women/26.jpg",
//       unread: 0,
//     },
//   ];

//   const notifications = [
//     {
//       id: 1,
//       type: "order", // You might categorize notifications
//       message:
//         "Your order is placed. This is also a very long message for demonstration.",
//       details: "Amet minim mollit non deser unt ullamco est sit aliqua.",
//       time: "3 min ago",
//       avatar: "https://randomuser.me/api/portraits/men/1.jpg", // From the provided image
//       isRead: false,
//     },
//     {
//       id: 2,
//       type: "achievement",
//       message:
//         "Congratulations Darlene 🎉.  Another very very long title for demonstrating line truncation.",
//       details: "Won the monthly best seller badge",
//       time: "3 min ago",
//       avatar: "https://randomuser.me/api/portraits/women/2.jpg", // From the provided image, but you'll need to get the actual URL
//       isRead: false, // Important for marking as seen
//     },
//     {
//       id: 3,
//       type: "order_update",
//       message: "Revised Order 👋",
//       details: "Won the monthly best seller badge",
//       time: "3 min ago",
//       avatar: "https://randomuser.me/api/portraits/men/3.jpg", // From the provided image, but you'll need to get the actual URL
//       isRead: true,
//     },
//     {
//       id: 4,
//       type: "group_invite",
//       message: "Brooklyn Simmons",
//       details: "Added you to Top Secret Project group...",
//       time: "3 min ago",
//       avatar: "https://randomuser.me/api/portraits/women/4.jpg", // From the provided image, but you'll need to get the actual URL
//       isRead: false,
//     },
//   ];

//   const toggleMessageDropdown = () => {
//     setMessageDropdownOpen(!messageDropdownOpen);
//     setNotificationDropdownOpen(false);
//     setUserDropdownOpen(false);
//   };

//   const toggleNotificationDropdown = () => {
//     setNotificationDropdownOpen(!notificationDropdownOpen);
//     setMessageDropdownOpen(false);
//     setUserDropdownOpen(false);
//   };

//   const toggleUserDropdown = () => {
//     setUserDropdownOpen(!userDropdownOpen);
//     setMessageDropdownOpen(false);
//     setNotificationDropdownOpen(false);
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         messageDropdownRef.current &&
//         !messageDropdownRef.current.contains(event.target)
//       ) {
//         setMessageDropdownOpen(false);
//       }
//       if (
//         notificationDropdownRef.current &&
//         !notificationDropdownRef.current.contains(event.target)
//       ) {
//         setNotificationDropdownOpen(false);
//       }
//       if (
//         userDropdownRef.current &&
//         !userDropdownRef.current.contains(event.target)
//       ) {
//         setUserDropdownOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [messageDropdownRef, notificationDropdownRef, userDropdownRef]);

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

//   const userMenuItems = [
//     { label: "Profile", icon: <FaUserAlt />, path: "/profile" },
//     { label: "Chat", icon: <FaCommentDots />, path: "/chat" },
//     { label: "Email", icon: <FaEnvelopeOpen />, path: "/email" },
//     { label: "Todo", icon: <FaCheckSquare />, path: "/todo" },
//     { label: "Settings", icon: <FaCog />, path: "/settings" },
//     { label: "Price", icon: <FaTags />, path: "/price" },
//     { label: "Faq", icon: <FaQuestionCircle />, path: "/faq" },
//     {
//       label: "Logout",
//       icon: <FaSignOutAlt />,
//       path: "/logout",
//       isLogout: true,
//     },
//   ];

//   return (
//     <header className="bg-white shadow p-4">
//       <div className="px-4">
//         <div className="flex justify-between items-center">
//           {/* Search Input */}
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <FaSearch size={12} className="text-gray-400" />
//             </div>
//             <input
//               type="search"
//               placeholder="Search..."
//               className="block w-full pl-10 text-sm text-gray-900 rounded-full search-input border-none"
//               value={searchTerm}
//               onChange={handleSearchChange}
//             />
//           </div>

//           <div className="flex items-center gap-8">
//             {/* Message */}
//             <div className="relative" ref={messageDropdownRef}>
//               <button
//                 className="rounded-full h-10 w-10 bg-gray-100 flex items-center justify-center relative"
//                 onClick={toggleMessageDropdown}
//               >
//                 <FaEnvelope className="text-gray-700" size={18} />
//                 {messages.filter((message) => message.unread > 0).length >
//                   0 && (
//                   <span className="absolute -top-2 -right-2 h-5 w-5 bg-red-600 text-[12px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-[99]">
//                     {messages.filter((message) => message.unread > 0).length}
//                   </span>
//                 )}
//               </button>

//               <AnimatePresence>
//                 {messageDropdownOpen && (
//                   <motion.div
//                     className="absolute top-12 right-0 mt-2 w-96 bg-white border border-gray-200 rounded-xl shadow-lg z-10"
//                     variants={dropdownVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                   >
//                     <div className="py-4 px-4 border-b border-gray-200">
//                       <div className="flex justify-between items-center">
//                         <span className="text-gray-800 font-semibold">
//                           Messages
//                         </span>
//                         <Link
//                           to="#"
//                           className="relative text-gray-800 text-sm font-medium after:block after:h-[2px] after:bg-gray-800 after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
//                         >
//                           View all
//                         </Link>
//                       </div>
//                     </div>
//                     <div>
//                       {messages.map((message) => (
//                         <a
//                           key={message.id}
//                           href="#"
//                           className="block py-2 px-4 hover:bg-gray-100 border-b"
//                         >
//                           <div className="flex items-start gap-2">
//                             <img
//                               className="w-12 h-12 rounded-full object-cover"
//                               src={message.avatar}
//                               alt={message.name}
//                             />

//                             <div className="w-full">
//                               <div className="flex items-center justify-between">
//                                 <span className="text-gray-800 font-semibold">
//                                   {message.name}
//                                 </span>
//                                 {message.unread > 0 && (
//                                   <span className="h-4 w-4 bg-red-600 text-[12px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-[99]">
//                                     {message.unread}
//                                   </span>
//                                 )}
//                               </div>
//                               <p className="text-gray-600 text-sm">
//                                 {truncateText(message.message)}
//                               </p>
//                               <p className="text-gray-500 text-xs">
//                                 {message.time}
//                               </p>
//                             </div>
//                           </div>
//                         </a>
//                       ))}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Notification */}
//             <div className="relative" ref={notificationDropdownRef}>
//               <button
//                 className="rounded-full h-10 w-10 bg-gray-100 flex items-center justify-center"
//                 onClick={toggleNotificationDropdown}
//               >
//                 <FaBell className="text-gray-700" size={18} />
//                 {notifications.length > 0 && (
//                   <span className="absolute -top-2 -right-2 h-5 w-5 bg-red-600 text-[12px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-[99]">
//                     {notifications.length}
//                   </span>
//                 )}
//               </button>
//               <AnimatePresence>
//                 {notificationDropdownOpen && (
//                   <motion.div
//                     className="absolute top-12 right-0 mt-2 w-96 bg-white border border-gray-200 rounded-xl shadow-lg z-10"
//                     variants={dropdownVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                   >
//                     <div className="py-4 px-4 border-b border-gray-200">
//                       <div className="flex justify-between items-center">
//                         <span className="text-gray-800 font-semibold">
//                           Notifications
//                         </span>
//                         <Link
//                           to="#"
//                           className="relative text-gray-800 text-sm font-medium after:block after:h-[2px] after:bg-gray-800 after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
//                         >
//                           View all
//                         </Link>
//                       </div>
//                     </div>
//                     <div>
//                       {notifications.map((notification) => (
//                         <a
//                           key={notification.id}
//                           href="#"
//                           className="block py-2 px-4 hover:bg-gray-100 border-b"
//                         >
//                           <div className="flex items-start gap-2">
//                             <img
//                               src={notification.avatar}
//                               alt="Notification Avatar"
//                               className="w-12 h-12 rounded-full object-cover"
//                             />
//                             <div className="w-full">
//                               <p className="text-gray-800 font-semibold">
//                                 {truncateText(notification.message)}
//                               </p>
//                               <p className="text-gray-600 text-xs">
//                                 {truncateText(notification.details)}
//                               </p>
//                               <p className="text-gray-500 text-xs">
//                                 {notification.time}
//                               </p>
//                             </div>
//                             {/* Dot:-  Unread notification */}
//                             {!notification.isRead && (
//                               <div>
//                                 <span className="h-[10px] w-[10px] bg-red-500 border border-white dark:border-slate-400 rounded-full inline-block"></span>
//                               </div>
//                             )}
//                           </div>
//                         </a>
//                       ))}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/*User Account  */}
//             <div className="relative" ref={userDropdownRef}>
//               <button
//                 className="flex items-center gap-1"
//                 onClick={toggleUserDropdown}
//               >
//                 <img
//                   className="h-8 w-8 rounded-full object-cover"
//                   src="https://randomuser.me/api/portraits/men/3.jpg"
//                   alt="User Avatar"
//                 />
//                 <span className="ml-2 text-gray-700">Albert Flores</span>
//                 <motion.div
//                   animate={{ rotate: userDropdownOpen ? 180 : 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <IoIosArrowDown className="w-4 h-4" />
//                 </motion.div>
//               </button>

//               <AnimatePresence>
//                 {userDropdownOpen && (
//                   <motion.div
//                     className="absolute top-12 right-0 mt-1 w-52 bg-white border border-gray-200 rounded-xl shadow-lg z-10 p-2"
//                     variants={dropdownVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                   >
//                     <nav>
//                       {userMenuItems.map((item) => (
//                         <Link
//                           to={item.path}
//                           key={item.label}
//                           className={`flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 ${
//                             item.isLogout ? "text-red-600" : ""
//                           }`}
//                         >
//                           <span className="mr-3">{item.icon}</span>
//                           {item.label}
//                         </Link>
//                       ))}
//                     </nav>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useRef, useEffect } from "react";
import SearchBar from "../Header/SearchBar";
import MessageDropdown from "../Header/MessageDropdown";
import NotificationDropdown from "../Header/NotificationDropdown";
import UserDropdown from "../Header/UserDropdown";
import {
  FaRegUser,
  FaRegCommentDots,
  FaRegEnvelope,
  FaRegCreditCard,
  FaRegCircleQuestion,
} from "react-icons/fa6";
import { FiCheckSquare } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
import { RiPriceTag3Line } from "react-icons/ri";

const Header = () => {
  const [messageDropdownOpen, setMessageDropdownOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const messageDropdownRef = useRef(null);
  const notificationDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Data (Move to data files or context if needed for larger apps)
  const messages = [
    {
      id: 1,
      name: "Wade Warren",
      message:
        "Hi! How are you doing?..... This is a really long message to demonstrate the truncation functionality. I hope it works well!",
      time: "3 min ago",
      avatar: "https://randomuser.me/api/portraits/women/11.jpg",
      unread: 1,
    },
    {
      id: 2,
      name: "Savannah Nguyen",
      message: "Hi! How are you doing?.....",
      time: "3 min ago",
      avatar: "https://randomuser.me/api/portraits/men/18.jpg",
      status: "online",
      unread: 0,
    },
    {
      id: 3,
      name: "Ralph Edwards",
      message: "Hi! How are you doing?.....",
      time: "3 min ago",
      avatar: "https://randomuser.me/api/portraits/men/19.jpg",
      unread: 8,
    },
    {
      id: 4,
      name: "Cody Fisher",
      message: "Hi! How are you doing?.....",
      time: "3 min ago",
      avatar: "https://randomuser.me/api/portraits/women/26.jpg",
      unread: 0,
    },
  ];

  const notifications = [
    {
      id: 1,
      type: "order", // You might categorize notifications
      message:
        "Your order is placed. This is also a very long message for demonstration.",
      details: "Amet minim mollit non deser unt ullamco est sit aliqua.",
      time: "3 min ago",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg", // From the provided image
      isRead: false,
    },
    {
      id: 2,
      type: "achievement",
      message:
        "Congratulations Darlene 🎉.  Another very very long title for demonstrating line truncation.",
      details: "Won the monthly best seller badge",
      time: "3 min ago",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg", // From the provided image, but you'll need to get the actual URL
      isRead: false, // Important for marking as seen
    },
    {
      id: 3,
      type: "order_update",
      message: "Revised Order 👋",
      details: "Won the monthly best seller badge",
      time: "3 min ago",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg", // From the provided image, but you'll need to get the actual URL
      isRead: true,
    },
    {
      id: 4,
      type: "group_invite",
      message: "Brooklyn Simmons",
      details: "Added you to Top Secret Project group...",
      time: "3 min ago",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg", // From the provided image, but you'll need to get the actual URL
      isRead: false,
    },
  ];

  const userMenuItems = [
    { label: "Profile", icon: <FaRegUser />, path: "/profile" },
    { label: "Chat", icon: <FaRegCommentDots />, path: "/chat" },
    { label: "Email", icon: <FaRegEnvelope />, path: "/email" },
    { label: "Todo", icon: <FiCheckSquare />, path: "/todo" },
    { label: "Settings", icon: <IoSettingsOutline />, path: "/settings" },
    { label: "Price", icon: <RiPriceTag3Line />, path: "/price" },
    { label: "Faq", icon: <FaRegCircleQuestion />, path: "/faq" },
    {
      label: "Logout",
      icon: <PiSignOutBold />,
      path: "/logout",
      isLogout: true,
    },
  ];

  // Toggle functions for dropdowns
  const toggleMessageDropdown = () => {
    setMessageDropdownOpen(!messageDropdownOpen);
    setNotificationDropdownOpen(false);
    setUserDropdownOpen(false);
  };

  const toggleNotificationDropdown = () => {
    setNotificationDropdownOpen(!notificationDropdownOpen);
    setMessageDropdownOpen(false);
    setUserDropdownOpen(false);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
    setMessageDropdownOpen(false);
    setNotificationDropdownOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Click outside handler (Move this to a custom hook for reusability)
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        messageDropdownRef.current &&
        !messageDropdownRef.current.contains(event.target)
      ) {
        setMessageDropdownOpen(false);
      }
      if (
        notificationDropdownRef.current &&
        !notificationDropdownRef.current.contains(event.target)
      ) {
        setNotificationDropdownOpen(false);
      }
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setUserDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [messageDropdownRef, notificationDropdownRef, userDropdownRef]);

  return (
    <header className="bg-white shadow p-4">
      <div className="px-4">
        <div className="flex justify-between items-center">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />

          <div className="flex items-center gap-6">
            <MessageDropdown
              messages={messages}
              isOpen={messageDropdownOpen}
              toggleDropdown={toggleMessageDropdown}
              dropdownRef={messageDropdownRef}
            />
            <NotificationDropdown
              notifications={notifications}
              isOpen={notificationDropdownOpen}
              toggleDropdown={toggleNotificationDropdown}
              dropdownRef={notificationDropdownRef}
            />
            <UserDropdown
              isOpen={userDropdownOpen}
              toggleDropdown={toggleUserDropdown}
              dropdownRef={userDropdownRef}
              userMenuItems={userMenuItems}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
