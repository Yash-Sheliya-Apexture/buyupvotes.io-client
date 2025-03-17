// import React, { useState, useRef, useEffect } from "react";
// import SearchBar from "../Header/SearchBar";
// import MessageDropdown from "../Header/MessageDropdown";
// import NotificationDropdown from "../Header/NotificationDropdown";
// import UserDropdown from "../Header/UserDropdown";
// import {
//   FaRegUser,
//   FaRegCommentDots,
//   FaRegEnvelope,
//   FaRegCircleQuestion,
// } from "react-icons/fa6";
// import { FiCheckSquare } from "react-icons/fi";
// import { IoSettingsOutline } from "react-icons/io5";
// import { PiSignOutBold } from "react-icons/pi";
// import { RiPriceTag3Line } from "react-icons/ri";

// const Header = () => {
//   const [messageDropdownOpen, setMessageDropdownOpen] = useState(false);
//   const [notificationDropdownOpen, setNotificationDropdownOpen] =
//     useState(false);
//   const [userDropdownOpen, setUserDropdownOpen] = useState(false);
//   const messageDropdownRef = useRef(null);
//   const notificationDropdownRef = useRef(null);
//   const userDropdownRef = useRef(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Data (Move to data files or context if needed for larger apps)
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

//   const userMenuItems = [
//     { label: "Profile", icon: <FaRegUser />, path: "/profile" },
//     { label: "Chat", icon: <FaRegCommentDots />, path: "/chat" },
//     { label: "Email", icon: <FaRegEnvelope />, path: "/email" },
//     { label: "Todo", icon: <FiCheckSquare />, path: "/todo" },
//     { label: "Settings", icon: <IoSettingsOutline />, path: "/settings" },
//     { label: "Price", icon: <RiPriceTag3Line />, path: "/price" },
//     { label: "Faq", icon: <FaRegCircleQuestion />, path: "/faq" },
//     {
//       label: "Logout",
//       icon: <PiSignOutBold />,
//       path: "/logout",
//       isLogout: true,
//     },
//   ];

//   // Toggle functions for dropdowns
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

//   // Click outside handler (Move this to a custom hook for reusability)
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

//   return (
//     <header className="bg-white shadow p-4">
//       <div className="px-4">
//         <div className="flex justify-between items-center">
//           <SearchBar
//             searchTerm={searchTerm}
//             onSearchChange={handleSearchChange}
//           />

//           <div className="flex items-center gap-6">
//             <MessageDropdown
//               messages={messages}
//               isOpen={messageDropdownOpen}
//               toggleDropdown={toggleMessageDropdown}
//               dropdownRef={messageDropdownRef}
//             />
//             <NotificationDropdown
//               notifications={notifications}
//               isOpen={notificationDropdownOpen}
//               toggleDropdown={toggleNotificationDropdown}
//               dropdownRef={notificationDropdownRef}
//             />
//             <UserDropdown
//               isOpen={userDropdownOpen}
//               toggleDropdown={toggleUserDropdown}
//               dropdownRef={userDropdownRef}
//               userMenuItems={userMenuItems}
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;






// // Header.js (No changes needed in Header.js)
// import React, { useState, useRef, useEffect } from "react";
// import SearchBar from "../Header/SearchBar";
// import MessageDropdown from "../Header/MessageDropdown";
// import NotificationDropdown from "../Header/NotificationDropdown";
// import UserDropdown from "../Header/UserDropdown";
// import {
//   FaRegUser,
//   FaRegCommentDots,
//   FaRegEnvelope,
//   FaRegCircleQuestion,
// } from "react-icons/fa6";
// import { FiCheckSquare } from "react-icons/fi";
// import { IoSettingsOutline } from "react-icons/io5";
// import { RiPriceTag3Line } from "react-icons/ri";
// import { PiSignOutBold } from "react-icons/pi";
// import { useAuth } from "../../../auth/AuthContext";
// import { RiShoppingBasketLine } from "react-icons/ri";
// import { LuUsers } from "react-icons/lu";


// const Header = () => {
//   const [messageDropdownOpen, setMessageDropdownOpen] = useState(false);
//   const [notificationDropdownOpen, setNotificationDropdownOpen] =
//     useState(false);
//   const [userDropdownOpen, setUserDropdownOpen] = useState(false);
//   const messageDropdownRef = useRef(null);
//   const notificationDropdownRef = useRef(null);
//   const userDropdownRef = useRef(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const { user, loading, logout } = useAuth();

//   // Data (Move to data files or context if needed for larger apps)
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
//       type: "order",
//       message:
//         "Your order is placed. This is also a very long message for demonstration.",
//       details: "Amet minim mollit non deser unt ullamco est sit aliqua.",
//       time: "3 min ago",
//       avatar: "https://randomuser.me/api/portraits/men/1.jpg",
//       isRead: false,
//     },
//     {
//       id: 2,
//       type: "achievement",
//       message:
//         "Congratulations Darlene 🎉.  Another very very long title for demonstrating line truncation.",
//       details: "Won the monthly best seller badge",
//       time: "3 min ago",
//       avatar: "https://randomuser.me/api/portraits/women/2.jpg",
//       isRead: false,
//     },
//     {
//       id: 3,
//       type: "order_update",
//       message: "Revised Order 👋",
//       details: "Won the monthly best seller badge",
//       time: "3 min ago",
//       avatar: "https://randomuser.me/api/portraits/men/3.jpg",
//       isRead: true,
//     },
//     {
//       id: 4,
//       type: "group_invite",
//       message: "Brooklyn Simmons",
//       details: "Added you to Top Secret Project group...",
//       time: "3 min ago",
//       avatar: "https://randomuser.me/api/portraits/women/4.jpg",
//       isRead: false,
//     },
//   ];

//   const userMenuItems = [
//     { label: "All Orders", icon: <RiShoppingBasketLine />, path: "/admin/orders" },
//     { label: "All Users", icon: <LuUsers />, path: "/admin/orders" },
//     // { label: "Chat", icon: <FaRegCommentDots />, path: "/chat" },
//     // { label: "Email", icon: <FaRegEnvelope />, path: "/email" },
//     // { label: "Todo", icon: <FiCheckSquare />, path: "/todo" },
//     // { label: "Settings", icon: <IoSettingsOutline />, path: "/settings" },
//     // { label: "Price", icon: <RiPriceTag3Line />, path: "/price" },
//     // { label: "Faq", icon: <FaRegCircleQuestion />, path: "/faq" },
//   ];

//   const updatedUserMenuItems = user
//     ? [
//         ...userMenuItems,
//         {
//           label: "Logout",
//           icon: <PiSignOutBold />,
//           path: "#",
//           isLogout: true,
//           onClick: () => {
//             logout();
//           },
//         },
//       ]
//     : userMenuItems;

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

//   return (
//     <header className="bg-white shadow p-4">
//       <div className="px-4">
//         <div className="flex justify-between items-center">
//           <SearchBar
//             searchTerm={searchTerm}
//             onSearchChange={handleSearchChange}
//           />

//           <div className="flex items-center gap-6">
//             <MessageDropdown
//               messages={messages}
//               isOpen={messageDropdownOpen}
//               toggleDropdown={toggleMessageDropdown}
//               dropdownRef={messageDropdownRef}
//             />
//             <NotificationDropdown
//               notifications={notifications}
//               isOpen={notificationDropdownOpen}
//               toggleDropdown={toggleNotificationDropdown}
//               dropdownRef={notificationDropdownRef}
//             />
//             <UserDropdown
//               isOpen={userDropdownOpen}
//               toggleDropdown={toggleUserDropdown}
//               dropdownRef={userDropdownRef}
//               userMenuItems={updatedUserMenuItems}
//               user={user}
//               logout={logout}
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// // Header.js
// import React, { useState, useRef, useEffect } from "react";
// import SearchBar from "../Header/SearchBar";
// import MessageDropdown from "../Header/MessageDropdown";
// import NotificationDropdown from "../Header/NotificationDropdown";
// import UserDropdown from "../Header/UserDropdown";
// import {
//   FaRegUser,
//   FaRegCommentDots,
//   FaRegEnvelope,
//   FaRegCircleQuestion,
// } from "react-icons/fa6";
// import { FiCheckSquare } from "react-icons/fi";
// import { IoSettingsOutline } from "react-icons/io5";
// import { PiSignOutBold } from "react-icons/pi";
// import { RiPriceTag3Line } from "react-icons/ri";
// import { useAuth } from "../../../auth/AuthContext";
// import { RiShoppingBasketLine } from "react-icons/ri";
// import { LuUsers } from "react-icons/lu";
// import axios from 'axios'; // Import axios
// import TokenService from "../../../utils/TokenService"; // Import TokenService

// const Header = () => {
//   const [messageDropdownOpen, setMessageDropdownOpen] = useState(false);
//   const [notificationDropdownOpen, setNotificationDropdownOpen] =
//     useState(false);
//   const [userDropdownOpen, setUserDropdownOpen] = useState(false);
//   const messageDropdownRef = useRef(null);
//   const notificationDropdownRef = useRef(null);
//   const userDropdownRef = useRef(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const { user, loading, logout } = useAuth();
//   const [notifications, setNotifications] = useState([]);
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  
//   // Fetch notifications on component mount
//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const token = TokenService.getToken();  // Get token from TokenService
//         const response = await axios.get(`${API_BASE_URL}/admin/notifications`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setNotifications(response.data);
//       } catch (error) {
//         console.error('Error fetching admin notifications:', error);
//       }
//     };

//     if (user && user.role === "admin") {
//       fetchNotifications();
//     }
//   }, [user]);

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
//   ];

//   const userMenuItems = [
//     { label: "All Orders", icon: <RiShoppingBasketLine />, path: "/admin/orders" },
//     { label: "All Users", icon: <LuUsers />, path: "/admin/users" },
//   ];

//   const updatedUserMenuItems = user
//     ? [
//         ...userMenuItems,
//         {
//           label: "Logout",
//           icon: <PiSignOutBold />,
//           path: "#",
//           isLogout: true,
//           onClick: () => {
//             logout();
//           },
//         },
//       ]
//     : userMenuItems;

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

//   const markNotificationAsRead = async (notificationId) => {
//     try {
//       const token = TokenService.getToken(); // Get token from TokenService
//       await axios.put(  // Use PUT request
//         `${API_BASE_URL}/admin/notifications/${notificationId}/mark-as-read`,  // Backend Route
//         {},  // Empty body
//         {
//           headers: { Authorization: `Bearer ${token}` },  // Include token in header
//         }
//       );

//       // Remove the notification from the state
//       setNotifications((prevNotifications) =>
//         prevNotifications.filter((notification) => notification.id !== notificationId)
//       );
//     } catch (error) {
//       console.error("Error marking notification as read:", error);
//       // Handle the error as needed (e.g., show an error message)
//     }
//   };

//   return (
//     <header className="bg-white shadow p-4">
//       <div className="px-4">
//         <div className="flex justify-between items-center">
//           <SearchBar
//             searchTerm={searchTerm}
//             onSearchChange={handleSearchChange}
//           />

//           <div className="flex items-center gap-6">
//             <MessageDropdown
//               messages={messages}
//               isOpen={messageDropdownOpen}
//               toggleDropdown={toggleMessageDropdown}
//               dropdownRef={messageDropdownRef}
//             />
//             <NotificationDropdown
//               notifications={notifications} // Pass the notifications
//               isOpen={notificationDropdownOpen}
//               toggleDropdown={toggleNotificationDropdown}
//               dropdownRef={notificationDropdownRef}
//               onNotificationClick={markNotificationAsRead}  // Pass the handler function
//             />
//             <UserDropdown
//               isOpen={userDropdownOpen}
//               toggleDropdown={toggleUserDropdown}
//               dropdownRef={userDropdownRef}
//               userMenuItems={updatedUserMenuItems}
//               user={user}
//               logout={logout}
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React, { useState, useRef, useEffect } from "react";
// import SearchBar from "../Header/SearchBar";
// import MessageDropdown from "../Header/MessageDropdown";
// import NotificationDropdown from "../Header/NotificationDropdown";
// import UserDropdown from "../Header/UserDropdown";
// import {
//   FaRegUser,
//   FaRegCommentDots,
//   FaRegEnvelope,
//   FaRegCircleQuestion,
// } from "react-icons/fa6";
// import { FiCheckSquare } from "react-icons/fi";
// import { IoSettingsOutline } from "react-icons/io5";
// import { PiSignOutBold } from "react-icons/pi";
// import { RiPriceTag3Line } from "react-icons/ri";
// import { useAuth } from "../../../auth/AuthContext";
// import { RiShoppingBasketLine } from "react-icons/ri";
// import { LuUsers } from "react-icons/lu";
// import axios from 'axios'; // Import axios
// import TokenService from "../../../utils/TokenService"; // Import TokenService

// const Header = () => {
//   const [messageDropdownOpen, setMessageDropdownOpen] = useState(false);
//   const [notificationDropdownOpen, setNotificationDropdownOpen] =
//     useState(false);
//   const [userDropdownOpen, setUserDropdownOpen] = useState(false);
//   const messageDropdownRef = useRef(null);
//   const notificationDropdownRef = useRef(null);
//   const userDropdownRef = useRef(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const { user, loading, logout } = useAuth();
//   const [notifications, setNotifications] = useState([]);
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  
//   // Fetch notifications on component mount
//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const token = TokenService.getToken();  // Get token from TokenService
//         const response = await axios.get(`${API_BASE_URL}/admin/notifications`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setNotifications(response.data);
//       } catch (error) {
//         console.error('Error fetching admin notifications:', error);
//       }
//     };

//     if (user && user.role === "admin") {
//       fetchNotifications();
//     }
//   }, [user]);

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
//   ];

//   const userMenuItems = [
//     { label: "All Orders", icon: <RiShoppingBasketLine />, path: "/admin/orders" },
//     { label: "All Users", icon: <LuUsers />, path: "/admin/users" },
//   ];

//   const updatedUserMenuItems = user
//     ? [
//         ...userMenuItems,
//         {
//           label: "Logout",
//           icon: <PiSignOutBold />,
//           path: "#",
//           isLogout: true,
//           onClick: () => {
//             logout();
//           },
//         },
//       ]
//     : userMenuItems;

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

//   const markNotificationAsRead = async (notificationId) => {
//     try {
//       const token = TokenService.getToken(); // Get token from TokenService
//       await axios.put(  // Use PUT request
//         `${API_BASE_URL}/admin/notifications/${notificationId}/mark-as-read`,  // Backend Route
//         {},  // Empty body
//         {
//           headers: { Authorization: `Bearer ${token}` },  // Include token in header
//         }
//       );

//       // Remove the notification from the state
//       setNotifications((prevNotifications) =>
//         prevNotifications.filter((notification) => notification.id !== notificationId)
//       );
//     } catch (error) {
//       console.error("Error marking notification as read:", error);
//       // Handle the error as needed (e.g., show an error message)
//     }
//   };

//   return (
//     <header className="bg-white shadow p-4">
//       <div className="px-4">
//         <div className="flex justify-between items-center">
//           <SearchBar
//             searchTerm={searchTerm}
//             onSearchChange={handleSearchChange}
//           />

//           <div className="flex items-center gap-6">
//             <MessageDropdown
//               messages={messages}
//               isOpen={messageDropdownOpen}
//               toggleDropdown={toggleMessageDropdown}
//               dropdownRef={messageDropdownRef}
//             />
//             <NotificationDropdown
//               notifications={notifications} // Pass the notifications
//               isOpen={notificationDropdownOpen}
//               toggleDropdown={toggleNotificationDropdown}
//               dropdownRef={notificationDropdownRef}
//               onNotificationClick={markNotificationAsRead}  // Pass the handler function
//             />
//             <UserDropdown
//               isOpen={userDropdownOpen}
//               toggleDropdown={toggleUserDropdown}
//               dropdownRef={userDropdownRef}
//               userMenuItems={updatedUserMenuItems}
//               user={user}
//               logout={logout}
//             />
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
  FaRegCircleQuestion,
} from "react-icons/fa6";
import { FiCheckSquare } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
import { RiPriceTag3Line } from "react-icons/ri";
import { useAuth } from "../../../auth/AuthContext";
import { RiShoppingBasketLine } from "react-icons/ri";
import { LuUsers } from "react-icons/lu";
import axios from 'axios'; // Import axios
import TokenService from "../../../utils/TokenService"; // Import TokenService

const Header = () => {
  const [messageDropdownOpen, setMessageDropdownOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const messageDropdownRef = useRef(null);
  const notificationDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { user, loading, logout } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Fetch notifications on component mount
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = TokenService.getToken();  // Get token from TokenService
        const response = await axios.get(`${API_BASE_URL}/admin/notifications`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching admin notifications:', error);
      }
    };

    if (user && user.role === "admin") {
      fetchNotifications();
    }
  }, [user]);

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
  ];

  const userMenuItems = [
    { label: "All Orders", icon: <RiShoppingBasketLine />, path: "/admin/orders" },
    { label: "All Users", icon: <LuUsers />, path: "/admin/users" },
  ];

  const updatedUserMenuItems = user
    ? [
        ...userMenuItems,
        {
          label: "Logout",
          icon: <PiSignOutBold />,
          path: "#",
          isLogout: true,
          onClick: () => {
            logout();
          },
        },
      ]
    : userMenuItems;

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

  const markNotificationAsRead = async (notificationId) => {
    try {
      const token = TokenService.getToken(); // Get token from TokenService
      await axios.put(  // Use PUT request
        `${API_BASE_URL}/admin/notifications/${notificationId}/mark-as-read`,  // Backend Route
        {},  // Empty body
        {
          headers: { Authorization: `Bearer ${token}` },  // Include token in header
        }
      );

      // Remove the notification from the state
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notification) => notification.id !== notificationId)
      );
    } catch (error) {
      console.error("Error marking notification as read:", error);
      // Handle the error as needed (e.g., show an error message)
    }
  };

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
              notifications={notifications} // Pass the notifications
              isOpen={notificationDropdownOpen}
              toggleDropdown={toggleNotificationDropdown}
              dropdownRef={notificationDropdownRef}
              onNotificationClick={markNotificationAsRead}  // Pass the handler function
            />
            <UserDropdown
              isOpen={userDropdownOpen}
              toggleDropdown={toggleUserDropdown}
              dropdownRef={userDropdownRef}
              userMenuItems={updatedUserMenuItems}
              user={user}
              logout={logout}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;