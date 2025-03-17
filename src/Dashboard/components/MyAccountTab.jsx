// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import { BiSolidChevronDown } from "react-icons/bi";
// import { IoWalletOutline } from "react-icons/io5";
// import { CgProfile } from "react-icons/cg";
// import { TbLogout } from "react-icons/tb";
// import { ClickAwayListener } from "@mui/material";

// const MyAccountTab = ({ isSidebarExpanded }) => {
//   const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
//   const accountDropdownRef = useRef(null);
//   const [isBalanceHovered, setIsBalanceHovered] = useState(false);

//   const toggleAccountDropdown = () => {
//     setIsAccountDropdownOpen(!isAccountDropdownOpen);
//   };

//   const handleAccountDropdownClose = () => {
//     setIsAccountDropdownOpen(false);
//     setIsBalanceHovered(false);
//   };

//   const handleBalanceHover = () => {
//     setIsBalanceHovered(true);
//   };

//   const handleBalanceLeave = () => {
//     setIsBalanceHovered(false);
//   };

//   return (
//     <div className="relative px-1">
//       <ClickAwayListener onClickAway={handleAccountDropdownClose}>
//         <div
//           ref={accountDropdownRef}
//           className="rounded-xl flex items-center justify-between px-3 py-2 border border-border-color cursor-pointer relative"
//           onClick={toggleAccountDropdown}
//         >
//           <div className="flex items-center">
//             <div className="bg-main-color rounded-md flex items-center justify-center w-9 h-9 text-white text-xl font-bold">
//               <span>K</span>
//             </div>
//             {isSidebarExpanded && (
//               <div className="ml-3 flex flex-col">
//                 <span className="text-sm font-medium">My Account</span>
//                 <span className="text-xs font-normal">kartavya</span>
//               </div>
//             )}
//           </div>
//           {isSidebarExpanded && (
//             <div className="bg-sub-color rounded-md p-1.5">
//               <BiSolidChevronDown
//                 className={`text-white transition-transform duration-200 ${
//                   isAccountDropdownOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </div>
//           )}
//           <div
//             className={`absolute top-full left-0 z-50 bg-white w-full p-1 rounded-xl border border-border-color overflow-hidden transition-all duration-300 ease-in-out transform origin-top mt-2
//               ${
//                 isAccountDropdownOpen
//                   ? "opacity-100 scale-y-100 "
//                   : "opacity-0 scale-y-0"
//               }`}
//           >
//             <div className="overflow-hidden">
//               <div
//                 className="px-3 py-2 flex items-center gap-4 transition-colors duration-300 text-sub-color border-b relative overflow-hidden flex-col cursor-pointer"
//                 onMouseEnter={handleBalanceHover}
//                 onMouseLeave={handleBalanceLeave}
//               >
//                 <div
//                   className={`flex items-center justify-between w-full transition-transform duration-300 ${
//                     isBalanceHovered
//                       ? "-translate-y-full opacity-0"
//                       : "translate-y-0 opacity-100"
//                   }`}
//                 >
//                   <div className="flex items-center gap-4">
//                     <IoWalletOutline className="w-6 h-6" />
//                     {isSidebarExpanded && (
//                       <div className="text-small flex flex-col">
//                         <span className="text-main-color font-bold">$0</span>
//                         <span className="text-sm font-medium">
//                           Available Balance
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {isSidebarExpanded && (
//                   <Link
//                     to="/dashboard/pricing"
//                     className={`w-full absolute left-0 bottom-0 flex items-center justify-center py-4 rounded-lg text-sm font-medium text-white bg-main-color transition-transform duration-300 transform ${
//                       isBalanceHovered ? "translate-y-0 mb-1.5" : "translate-y-full"
//                     }`}
//                   >
//                     Add Funds
//                   </Link>
//                 )}
//               </div>

//               <div className="px-3 py-2 flex items-center gap-4 transition-colors duration-150 border-b">
//                 <CgProfile className="w-6 h-6" />
//                 {isSidebarExpanded && (
//                   <span className="text-small font-semibold">
//                     Profile Settings
//                   </span>
//                 )}
//               </div>
//               <div className="px-3 py-2 flex items-center gap-4 transition-colors duration-150 text-red-600">
//                 <TbLogout className="w-6 h-6" />
//                 {isSidebarExpanded && (
//                   <span className="text-small font-semibold">Log out</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </ClickAwayListener>
//     </div>
//   );
// };

// export default MyAccountTab;

// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import { BiSolidChevronDown } from "react-icons/bi";
// import { IoWalletOutline } from "react-icons/io5";
// import { CgProfile } from "react-icons/cg";
// import { TbLogout } from "react-icons/tb";
// import { ClickAwayListener } from "@mui/material";

// const MyAccountTab = () => {
//   const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
//   const accountDropdownRef = useRef(null);
//   const [isBalanceHovered, setIsBalanceHovered] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(true); // Local state for expansion

//   const toggleAccountDropdown = () => {
//     setIsAccountDropdownOpen(!isAccountDropdownOpen);
//   };

//   const handleAccountDropdownClose = () => {
//     setIsAccountDropdownOpen(false);
//     setIsBalanceHovered(false);
//   };

//   const handleBalanceHover = () => {
//     setIsBalanceHovered(true);
//   };

//   const handleBalanceLeave = () => {
//     setIsBalanceHovered(false);
//   };

//   return (
//     <div className="relative w-1/6">
//       <ClickAwayListener onClickAway={handleAccountDropdownClose}>
//         <div
//           ref={accountDropdownRef}
//           className="rounded-xl flex items-center justify-between px-3 py-2 border border-border-color cursor-pointer relative"
//           onClick={toggleAccountDropdown}
//         >
//           <div className="flex items-center">
//             <div className="bg-main-color rounded-md flex items-center justify-center w-9 h-9 text-white text-xl font-bold">
//               <span>K</span>
//             </div>
//             {isExpanded && ( // Use local isExpanded state
//               <div className="ml-3 flex flex-col">
//                 <span className="text-sm font-medium">My Account</span>
//                 <span className="text-xs font-normal">kartavya</span>
//               </div>
//             )}
//           </div>
//           {isExpanded && (  // Use local isExpanded state
//             <div className="bg-sub-color rounded-md p-1.5">
//               <BiSolidChevronDown
//                 className={`text-white transition-transform duration-200 ${
//                   isAccountDropdownOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </div>
//           )}
//           <div
//             className={`absolute top-14 left-0 z-50 bg-white w-full rounded-xl border border-border-color overflow-hidden transition-all duration-300 ease-in-out transform origin-top mt-0.5
//               ${
//                 isAccountDropdownOpen
//                   ? "opacity-100 scale-y-100 "
//                   : "opacity-0 scale-y-0"
//               }`}
//           >
//             <div className="overflow-hidden p-1">
//               <div
//                 className=" p-3 flex items-center gap-4 transition-colors duration-300 text-sub-color border-b relative overflow-hidden flex-col cursor-pointer"
//                 onMouseEnter={handleBalanceHover}
//                 onMouseLeave={handleBalanceLeave}
//               >
//                 <div
//                   className={`flex items-center justify-between w-full transition-transform duration-300 ${
//                     isBalanceHovered
//                       ? "-translate-y-full opacity-0"
//                       : "translate-y-0 opacity-100"
//                   }`}
//                 >
//                   <div className="flex items-center gap-4">
//                     <IoWalletOutline className="w-6 h-6" />
//                     {isExpanded && (  // Use local isExpanded state
//                       <div className="text-small flex flex-col">
//                         <span className="text-main-color font-bold">$0</span>
//                         <span className="text-sm font-medium">
//                           Available Balance
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {isExpanded && (  // Use local isExpanded state
//                   <Link
//                     to="/dashboard/pricing"
//                     className={`w-full absolute left-0 bottom-0 flex items-center justify-center py-4 rounded-lg text-sm font-medium text-white bg-main-color transition-transform duration-300 transform ${
//                       isBalanceHovered ? "translate-y-0 mb-1.5" : "translate-y-full"
//                     }`}
//                   >
//                     Add Funds
//                   </Link>
//                 )}
//               </div>

//               <div className="p-3 flex items-center gap-4 transition-colors duration-150 border-b">
//                 <CgProfile className="w-6 h-6 text-sub-color" />
//                 {isExpanded && (  // Use local isExpanded state
//                   <span className="text-small font-medium text-sub-color">
//                     Profile Settings
//                   </span>
//                 )}
//               </div>
//               <div className="p-3 flex items-center gap-4 transition-colors duration-150 text-red-500">
//                 <TbLogout className="w-6 h-6" />
//                 {isExpanded && (  // Use local isExpanded state
//                   <span className="text-small font-semibold">Log out</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </ClickAwayListener>
//     </div>
//   );
// };

// export default MyAccountTab;




// import React, { useState, useRef, useEffect } from "react";
// import { FaRegUser, FaRegCreditCard } from "react-icons/fa6";
// import { PiSignOutBold } from "react-icons/pi";
// import { BiSolidChevronDown } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiPlus } from "react-icons/fi";

// const MyAccountTab = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownRef]);

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
//     { label: "Profile", path: "/dashboard/account", icon: <FaRegUser /> },
//     {
//       label: "Add Fund",
//       path: "/dashboard/pricing",
//       icon: <FaRegCreditCard />,
//     },
//     {
//       label: "Log Out",
//       path: "/logout",
//       icon: <PiSignOutBold />,
//       isLogout: true,
//     },
//   ];

//   return (
//     <div className="relative bg-white" ref={dropdownRef}>
//       <div
//         className="rounded-xl flex items-center justify-between gap-8 px-3 py-2 border border-border-color cursor-pointer relative"
//         onClick={toggleDropdown}
//       >
//         <div className="flex items-center gap-3">
//           <div className="bg-main-color rounded-md flex items-center justify-center w-9 h-9 text-white text-xl font-bold">
//             <span>K</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-sm font-medium">My Account</span>
//             {/* First Name */}
//             <span className="text-xs font-normal">kartavya</span>
//           </div>
//         </div>
//         <div className="bg-sub-color rounded-md p-1.5">
//           <BiSolidChevronDown
//             className={`text-white ${
//               isOpen ? "-rotate-180" : ""
//             } transition-transform duration-200`}
//           />
//         </div>
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="absolute top-14 mt-0.5 right-0 w-52 bg-white border border-gray-200 rounded-xl shadow-main z-10 p-2 "
//             variants={dropdownVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//           >
//             <div className="border-b pb-2 ">

//             <div className="relative group overflow-hidden">
//               <div className="flex items-center flex-col gap-1 px-4 py-2">
//                 {/* current Balance */}
//                 <span className="text-main-color font-bold">$0</span>
//                 <span className="text-sm font-medium">Available Balance</span>
//               </div>
//               <motion.div
//                 className="absolute w-full h-full bottom-[-100%] left-0 right-0 flex justify-center gap-2 items-center bg-slate-200 rounded-xl transition ease-linear duration-300 group-hover:bottom-0"
//                 style={{transition: "bottom 0.3s ease-in-out"}}
//               >
//                 <FiPlus />
//                 Add Funds
//               </motion.div>
//             </div>
//             </div>
//             <nav className="mt-3">
//               {userMenuItems.map((item) => (
//                 <Link
//                   to={item.path}
//                   key={item.label}
//                   className={`flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg ${
//                     item.isLogout ? "text-red-600 hover:bg-red-100" : ""
//                   }`}
//                   onClick={() => setIsOpen(false)} // Close dropdown on item click
//                 >
//                   <span className="mr-3">{item.icon}</span>
//                   {item.label}
//                 </Link>
//               ))}
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MyAccountTab;





// // MyAccountTab.js (UI Component)
// import React from "react";
// import { FaRegUser, FaRegCreditCard } from "react-icons/fa6";
// import { PiSignOutBold } from "react-icons/pi";
// import { BiSolidChevronDown } from "react-icons/bi";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiPlus } from "react-icons/fi";
// import { Link } from 'react-router-dom';

// const MyAccountTab = ({
//   isOpen,
//   toggleDropdown,
//   dropdownRef,
//   dropdownVariants,
//   user,
//   currentBalance,
//   loading,
//   handleSignOut,
//   handleAddFundsClick,
//   onMenuItemClick // NEW PROP: Function to handle menu item clicks
// }) => {

//   const userMenuItems = [
//     { label: "Profile", path: "/dashboard/account", icon: <FaRegUser /> },
//     {
//       label: "Add Fund",
//       path: "/dashboard/pricing",
//       icon: <FaRegCreditCard />,
//     },
//     {
//       label: "Log Out",
//       path: null, // Remove the path as we are handling navigation with onClick
//       icon: <PiSignOutBold />,
//       isLogout: true,
//       onClick: handleSignOut,
//     },
//   ];

//   return (
//     <div className="relative bg-white" ref={dropdownRef}>
//       <div
//         className="rounded-xl flex items-center justify-between gap-8 px-3 py-2 border border-border-color cursor-pointer relative"
//         onClick={toggleDropdown}
//       >
//         <div className="flex items-center gap-3">
//           <div className="bg-main-color rounded-md flex items-center justify-center w-9 h-9 text-white text-xl font-bold">
//             <span>
//               {user?.firstName ? user.firstName.charAt(0).toUpperCase() : "G"}
//             </span>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-sm font-medium">My Account</span>
//             <span className="text-xs font-normal">
//               {user?.firstName || "Guest"}
//             </span>
//           </div>
//         </div>
//         <div className="bg-sub-color rounded-md p-1.5">
//           <BiSolidChevronDown
//             className={`text-white ${
//               isOpen ? "-rotate-180" : ""
//             } transition-transform duration-200`}
//           />
//         </div>
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="absolute  top-16 mt-2 right-0 w-52 bg-white border border-gray-200 rounded-xl shadow-main z-10 p-3 "
//             variants={dropdownVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//           >
//             <div className="border-b pb-2 ">
//               <div className="relative group rounded-xl overflow-hidden cursor-pointer" onClick={handleAddFundsClick}>
//                 <div className="flex items-center flex-col gap-1 px-4 py-2">
//                   <span className="text-main-color font-bold">
//                     {loading ? "Loading..." : `${currentBalance || 0} $`}
//                   </span>
//                   <span className="text-sm font-medium">
//                     Available Balance
//                   </span>
//                 </div>
//                 <motion.div
//                   className="absolute w-full h-full bottom-[-100%] left-0 right-0 flex justify-center gap-2 items-center bg-main-color text-white rounded-xl transition ease-linear duration-300 group-hover:bottom-0"
//                   style={{ transition: "bottom 0.3s ease-in-out" }}
//                 >
//                   <FiPlus />
//                   Add Funds
//                 </motion.div>
//               </div>
//             </div>
//             <nav className="mt-3">
//               {userMenuItems.map((item) => {
//                 if (item.path === null) {
//                   return (
//                     <div // Use a div instead of Link
//                       key={item.label}
//                       className={`flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg ${
//                         item.isLogout ? "text-red-600 hover:bg-red-100 cursor-pointer" : ""
//                       }`}
//                       onClick={() => {
//                         onMenuItemClick(); // Call the function to close the menu
//                         if (item.onClick) {
//                           item.onClick();
//                         }
//                       }}
//                     >
//                       <span className="mr-3">{item.icon}</span>
//                       {item.label}
//                     </div>
//                   );
//                 }

//                 return (
//                   <Link
//                     to={item.path}
//                     key={item.label}
//                     className={`flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg ${
//                       item.isLogout ? "text-red-600 hover:bg-red-100" : ""
//                     }`}
//                     onClick={onMenuItemClick} //Call the function to close the menu
//                   >
//                     <span className="mr-3">{item.icon}</span>
//                     {item.label}
//                   </Link>
//                 );
//               })}
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MyAccountTab;







// MyAccountTab.js (UI Component)
// import React from "react";
// import { FaRegUser, FaRegCreditCard } from "react-icons/fa6";
// import { PiSignOutBold } from "react-icons/pi";
// import { BiSolidChevronDown } from "react-icons/bi";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiPlus } from "react-icons/fi";
// import { Link } from 'react-router-dom';

// const MyAccountTab = ({
//   isOpen,
//   toggleDropdown,
//   dropdownRef,
//   dropdownVariants,
//   user,
//   currentBalance,
//   loading,
//   handleSignOut,
//   handleAddFundsClick,
//   onMenuItemClick
// }) => {

//   const userMenuItems = [
//     { label: "Profile", path: "/dashboard/account", icon: <FaRegUser /> },
//     {
//       label: "Add Fund",
//       path: "/dashboard/pricing",
//       icon: <FaRegCreditCard />,
//     },

//   ];

//   return (
//     <div className="relative bg-white" ref={dropdownRef}>
//       <div
//         className="rounded-xl flex items-center justify-between gap-8 px-3 py-2 border border-border-color cursor-pointer relative"
//         onClick={toggleDropdown}
//       >
//         <div className="flex items-center gap-3">
//           <div className="bg-main-color rounded-md flex items-center justify-center w-9 h-9 text-white text-xl font-bold">
//             <span>
//               {user?.firstName ? user.firstName.charAt(0).toUpperCase() : "G"}
//             </span>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-sm font-medium">My Account</span>
//             <span className="text-xs font-normal">
//               {user?.firstName || "Guest"}
//             </span>
//           </div>
//         </div>
//         <div className="bg-sub-color rounded-md p-1.5">
//           <BiSolidChevronDown
//             className={`text-white ${
//               isOpen ? "-rotate-180" : ""
//             } transition-transform duration-200`}
//           />
//         </div>
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="absolute  top-16 mt-2 right-0 w-52 bg-white border border-gray-200 rounded-xl shadow-main z-10 p-3 "
//             variants={dropdownVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//           >
//             <div className="border-b pb-2 ">
//               <div className="relative group rounded-xl overflow-hidden cursor-pointer" onClick={handleAddFundsClick}>
//                 <div className="flex items-center flex-col gap-1 px-4 py-2">
//                   <span className="text-main-color font-bold">
//                     {loading ? "Loading..." : `${currentBalance || 0} $`}
//                   </span>
//                   <span className="text-sm font-medium">
//                     Available Balance
//                   </span>
//                 </div>
//                 <motion.div
//                   className="absolute w-full h-full bottom-[-100%] left-0 right-0 flex justify-center gap-2 items-center bg-main-color text-white rounded-xl transition ease-linear duration-300 group-hover:bottom-0"
//                   style={{ transition: "bottom 0.3s ease-in-out" }}
//                 >
//                   <FiPlus />
//                   Add Funds
//                 </motion.div>
//               </div>
//             </div>
//             <nav className="my-3 space-y-2">
//               {userMenuItems.map((item) => (
//                 <Link
//                   to={item.path}
//                   key={item.label}
//                   className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
//                   onClick={onMenuItemClick}
//                 >
//                   <span className="mr-3">{item.icon}</span>
//                   {item.label}
//                 </Link>
//               ))}
//                 </nav>
//              <div className="border-t">
//              <button
//                 className="mt-3 flex items-center px-4 py-2 text-red-600 hover:bg-red-100 rounded-lg w-full text-left"
//                 onClick={() => {
//                   onMenuItemClick(); // Close the menu
//                   handleSignOut();       // Perform the sign-out action
//                 }}
//               >
//                 <span className="mr-3"><PiSignOutBold /></span>
//                 Log Out
//               </button>
//              </div>
          
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MyAccountTab;




// MyAccountTab.js (UI Component)
import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { FaRegUser, FaRegCreditCard } from "react-icons/fa6";
import { PiSignOutBold } from "react-icons/pi";
import { BiSolidChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { Link } from 'react-router-dom';

const MyAccountTab = ({
    isOpen,
    toggleDropdown,
    dropdownRef,
    dropdownVariants,
    user,
    currentBalance,
    loading,
    handleSignOut,
    handleAddFundsClick,
    onMenuItemClick
}) => {

    const [localLoading, setLocalLoading] = useState(true);  // Local loading state

    useEffect(() => {
        // Simulate loading by checking if user data is available
        if (user?.firstName) {
            setLocalLoading(false); // User data is available, stop local loading
        } else {
            //Keep loading till the user data is available
            setLocalLoading(true);
        }

    }, [user]); // Run this effect whenever the 'user' prop changes

    const userMenuItems = [
        { label: "Profile", path: "/dashboard/account", icon: <FaRegUser /> },
        {
            label: "Add Fund",
            path: "/dashboard/pricing",
            icon: <FaRegCreditCard />,
        },

    ];

    return (
        <div className="relative bg-white" ref={dropdownRef}>
            <div
                className="rounded-xl flex items-center justify-between gap-8 px-3 py-2 border border-border-color cursor-pointer relative"
                onClick={toggleDropdown}
            >
                <div className="flex items-center gap-3">
                    <div className="bg-main-color rounded-md flex items-center justify-center w-9 h-9 text-white text-xl font-bold">
                        <span>
                            {localLoading ? 'L' : user?.firstName ? user.firstName.charAt(0).toUpperCase() : "G"}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">My Account</span>
                        <span className="text-xs font-normal">
                            {localLoading ? "Loading..." : (user?.firstName || "Guest")}
                        </span>
                    </div>
                </div>
                <div className="bg-sub-color rounded-md p-1.5">
                    <BiSolidChevronDown
                        className={`text-white ${isOpen ? "-rotate-180" : ""} transition-transform duration-200`}
                    />
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute  top-16 mt-2 right-0 w-52 bg-white border border-gray-200 rounded-xl shadow-main z-50 p-3 "
                        variants={dropdownVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <div className="border-b pb-2 ">
                            <div className="relative group rounded-xl overflow-hidden cursor-pointer" onClick={handleAddFundsClick}>
                                <div className="flex items-center flex-col gap-1 px-4 py-2">
                                    <span className="text-main-color font-bold">
                                        {loading ? "Loading..." : `${currentBalance || 0} $`}
                                    </span>
                                    <span className="text-sm font-medium">
                                        Available Balance
                                    </span>
                                </div>
                                <motion.div
                                    className="absolute w-full h-full bottom-[-100%] left-0 right-0 flex justify-center gap-2 items-center bg-main-color text-white rounded-xl transition ease-linear duration-300 group-hover:bottom-0"
                                    style={{ transition: "bottom 0.3s ease-in-out" }}
                                >
                                    <FiPlus />
                                    Add Funds
                                </motion.div>
                            </div>
                        </div>
                        <nav className="my-3 space-y-2">
                            {userMenuItems.map((item) => (
                                <Link
                                    to={item.path}
                                    key={item.label}
                                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
                                    onClick={onMenuItemClick}
                                >
                                    <span className="mr-3">{item.icon}</span>
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                        <div className="border-t">
                            <button
                                className="mt-3 flex items-center px-4 py-2 text-red-600 hover:bg-red-100 rounded-lg w-full text-left"
                                onClick={() => {
                                    onMenuItemClick(); // Close the menu
                                    handleSignOut();       // Perform the sign-out action
                                }}
                            >
                                <span className="mr-3"><PiSignOutBold /></span>
                                Log Out
                            </button>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MyAccountTab;