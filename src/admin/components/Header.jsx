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

import React, { useState, useRef, useEffect } from "react";
import {Link} from 'react-router-dom'
import { FaEnvelope, FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [messageDropdownOpen, setMessageDropdownOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);
  const messageDropdownRef = useRef(null);
  const notificationDropdownRef = useRef(null);

  const messages = [
    {
      id: 1,
      name: "Wade Warren",
      message: "Hi! How are you doing?.....",
      time: "3 min ago",
      avatar:
        "https://randomuser.me/api/portraits/women/11.jpg",
      unread: 1,
    },
    {
      id: 2,
      name: "Savannah Nguyen",
      message: "Hi! How are you doing?.....",
      time: "3 min ago",
      avatar:
        "https://randomuser.me/api/portraits/men/18.jpg",
      status: "online",
      unread: 0,
    },
    {
      id: 3,
      name: "Ralph Edwards",
      message: "Hi! How are you doing?.....",
      time: "3 min ago",
      avatar:
        "https://randomuser.me/api/portraits/men/19.jpg",
      unread: 8,
    },
    {
      id: 4,
      name: "Cody Fisher",
      message: "Hi! How are you doing?.....",
      time: "3 min ago",
      avatar:
        "https://randomuser.me/api/portraits/women/26.jpg",
      unread: 0,
    },
  ];

  const notifications = [
    { id: 1, message: "New message from Wade Warren", time: "3 min ago" },
    { id: 2, message: "Someone liked your post", time: "5 min ago" },
  ];

  const toggleMessageDropdown = () => {
    setMessageDropdownOpen(!messageDropdownOpen);
    setNotificationDropdownOpen(false);
  };

  const toggleNotificationDropdown = () => {
    setNotificationDropdownOpen(!notificationDropdownOpen);
    setMessageDropdownOpen(false);
  };

  // Close dropdown when clicking outside
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
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [messageDropdownRef, notificationDropdownRef]);

  return (
    <header className="bg-white shadow p-4">
      <div className="px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-gray-800">
            My App
          </a>
          <div className="flex items-center gap-5">
            {/* Message */}
            <div className="relative" ref={messageDropdownRef}>
              <button
                className="rounded-full h-10 w-10 bg-gray-100 flex items-center justify-center relative"
                onClick={toggleMessageDropdown}
              >
                <FaEnvelope className="text-gray-700" size={18} />
                {messages.filter((message) => message.unread > 0).length >
                  0 && (
                  <span className="absolute -top-2 -right-2 h-6 w-6 bg-red-600 text-[12px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-[99]">
                    {messages.filter((message) => message.unread > 0).length}
                  </span>
                )}
              </button>

              {messageDropdownOpen && (
                <div className="absolute top-12 right-0 mt-2 w-96 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="py-4 px-4 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-semibold">
                        Messages
                      </span>
                      <Link to="#" className="text-gray-800 text-sm">
                        View all
                      </Link>
                    </div>
                  </div>
                  <div>
                    {messages.map((message) => (
                      <a
                        key={message.id}
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 border-b"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            className="w-12 h-12 rounded-full object-cover"
                            src={message.avatar}
                            alt={message.name}
                          />

                          <div className="w-full">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-800 font-semibold">
                                {message.name}
                              </span>
                              {message.unread > 0 && (
                                <span className="h-5 w-5 bg-red-600 text-[12px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-[99]">
                                  {message.unread}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm truncate">
                              {message.message}
                            </p>
                            <p className="text-gray-500 text-xs">
                              {message.time}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Notification */}
            <div className="relative" ref={notificationDropdownRef}>
              <button
                className="rounded-full h-10 w-10 bg-gray-100 flex items-center justify-center"
                onClick={toggleNotificationDropdown}
              >
                <FaBell className="text-gray-700" size={18} />
                {notifications.length > 0 && (
                  <span className="absolute -top-2 -right-2 h-6 w-6 bg-red-600 text-[12px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-[99]">
                    {notifications.length}
                  </span>
                )}
              </button>
              {notificationDropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="py-2 px-4 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-semibold">
                        Notifications
                      </span>
                      <a href="#" className="text-blue-500 text-sm">
                        View all
                      </a>
                    </div>
                  </div>
                  <div>
                    {notifications.map((notification) => (
                      <a
                        key={notification.id}
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100"
                      >
                        <div className="flex items-center space-x-2">
                          <div>
                            <p className="text-gray-800 text-sm">
                              {notification.message}
                            </p>
                            <p className="text-gray-500 text-xs">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="User Avatar"
              />
              <span className="ml-2 text-gray-700">Albert Flores</span>
              <IoIosArrowDown className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
