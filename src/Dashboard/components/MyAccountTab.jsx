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





import React from "react";
import { Link } from "react-router-dom";
import { IoWalletOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";

const MyAccountTab = () => {

  return (
    <div className="relative w-1/6">
      <div className="rounded-xl flex items-center justify-between px-3 py-2 border border-border-color cursor-pointer relative">
        <div className="flex items-center">
          <div className="bg-main-color rounded-md flex items-center justify-center w-9 h-9 text-white text-xl font-bold">
            <span>K</span>
          </div>
          <div className="ml-3 flex flex-col">
            <span className="text-sm font-medium">My Account</span>
            <span className="text-xs font-normal">kartavya</span>
          </div>
        </div>
      </div>

      <div className="absolute top-14 left-0 z-50 bg-white w-full rounded-xl border border-border-color overflow-hidden mt-0.5">
        <div className="overflow-hidden">
          <div className=" p-3 flex items-center gap-4 text-sub-color border-b relative overflow-hidden flex-col">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <IoWalletOutline className="w-6 h-6" />
                <div className="text-small flex flex-col">
                  <span className="text-main-color font-bold">$0</span>
                  <span className="text-sm font-medium">
                    Available Balance
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 flex items-center gap-4 border-b">
            <CgProfile className="w-6 h-6 text-sub-color" />
            <span className="text-small font-medium text-sub-color">
              Profile Settings
            </span>
          </div>
          <div className="p-3 flex items-center gap-4 text-red-500">
            <TbLogout className="w-6 h-6" />
            <span className="text-small font-semibold">Log out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountTab;