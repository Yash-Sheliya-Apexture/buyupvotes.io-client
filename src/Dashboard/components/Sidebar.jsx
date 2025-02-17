// import React, { useState, useEffect } from "react";
// import logo from "../../assets/Images/Logo.png";
// import { Link, useLocation } from "react-router-dom";
// import { BsBarChartFill } from "react-icons/bs";
// import { PiSpeedometerFill } from "react-icons/pi";
// import { HiCurrencyEuro } from "react-icons/hi";
// import { MdContactPage } from "react-icons/md";
// import { GoFileDirectoryFill } from "react-icons/go";
// import { MdContacts } from "react-icons/md";
// import { RiAccountBoxFill } from "react-icons/ri";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// import logo1 from "../../assets/Images/logo-mini.png";
// import { Tooltip } from "react-tooltip";
// import "react-tooltip/dist/react-tooltip.css";

// const SideBar = ({ isSidebarVisible, toggleSidebarVisibility }) => {
//   const [activeMenu, setActiveMenu] = useState("Dashboard");
//   const [isSidebarExpanded, setSidebarExpanded] = useState(true);

//   const location = useLocation();

//   useEffect(() => {
//     const currentMenu = menuItems.find(
//       (item) => item.link === location.pathname
//     );
//     if (currentMenu) {
//       setActiveMenu(currentMenu.id);
//     }
//   }, [location.pathname]);

//   const toggleSidebar = () => {
//     setSidebarExpanded(!isSidebarExpanded);
//   };

//   const handleMenuItemClick = (menuId) => {
//     setActiveMenu(menuId);
//     if (window.innerWidth < 992) {
//       toggleSidebarVisibility(false);
//     }
//   };

//   const menuItems = [
//     {
//       id: "Dashboard",
//       icon: <PiSpeedometerFill />,
//       label: "Dashboard",
//       link: "/dashboard",
//     },
//     {
//       id: "Order Upvotes",
//       icon: <BsBarChartFill />,
//       label: "Order Upvotes",
//       link: "/dashboard/upvoteorder",
//     },
//     {
//       id: "Add Funds",
//       icon: <HiCurrencyEuro />,
//       label: "Add Funds-Princing",
//       link: "/dashboard/pricing",
//     },
//     {
//       id: "FAQs",
//       icon: <MdContactPage />,
//       label: "FAQ'S",
//       link: "/dashboard/faqs",
//     },
//     {
//       id: "Blogs Data",
//       icon: <GoFileDirectoryFill />,
//       label: "Blogs",
//       link: "/dashboard/post",
//     },
//     {
//       id: "Contact",
//       icon: <MdContacts />,
//       label: "Contact Us",
//       link: "/dashboard/contactus",
//     },
//     {
//       id: "Account",
//       icon: <RiAccountBoxFill />,
//       label: "Account",
//       link: "/dashboard/account/",
//     },
//   ];

//   return (
//     <>
//       {isSidebarVisible && (
//         <div
//           className="fixed inset-0 z-40 bg-black bg-opacity-45 backdrop-blur-sm xl:hidden"
//           onClick={toggleSidebarVisibility}
//         ></div>
//       )}

//       <section
//         className={`fixed xl:relative bg-white border-r z-50 border-dashed border-border-color h-screen transition-all duration-300 ${isSidebarExpanded ? "w-60" : "w-16"
//           } ${isSidebarVisible ? "left-0" : "-left-60 xl:left-0"}`}
//       >
//         <div className="relative">
//           <div className={`flex items-center p-3.5 ${isSidebarExpanded ? "justify-between" : "justify-center"} `}>
//             {isSidebarExpanded ? (
//               <Link to="/">
//                 <img
//                   src={logo}
//                   alt="Expanded Logo"
//                   className="h-8 transition-all duration-300 ease-in-out"
//                 />
//               </Link>
//             ) : (
//               <Link to="/">
//                 <img
//                   src={logo1}
//                   alt="Collapsed Logo"
//                   className="h-8 transition-all duration-300 ease-in-out"
//                 />
//               </Link>
//             )}

//           </div>
//           <button
//             onClick={toggleSidebar}
//             className={`absolute top-2/4 -right-3 bg-white p-1 size-6 hidden cursor-pointer border rounded-full ${isSidebarExpanded ? "" : "ml-auto"
//               }  xl:block hidden`}
//           >
//             {isSidebarExpanded ? (
//               <FaAngleLeft className="text-gray-500"/>
//             ) : (
//               <FaAngleRight className="text-gray-500"/>
//             )}
//           </button>
//         </div>

//         <div className="h-[100%-4rem)] overflow-y-auto custom-scroll relative">
//           <ul className="space-y-2.5 mt-2.5">
//             {menuItems.map((item) => (
//               <li
//                 key={item.id}
//                 className={`relative group cursor-pointer font-semibold ${activeMenu === item.id
//                     ? "bg-[#ff550034] text-main-color"
//                     : "text-active hover:bg-[#ff550034] transition-all ease-in duration-150"
//                   }`}
//                 onClick={() => handleMenuItemClick(item.id)}
//               >
//                 <Link
//                   to={item.link}
//                   className="w-full px-2.5 py-2.5 flex items-center transition-all duration-200"
//                   data-tooltip-id={!isSidebarExpanded ? item.id : undefined}
//                   data-tooltip-content={item.label}
//                 >
//                   <span className="ml-[6px] me-2 text-large">{item.icon}</span>
//                   {isSidebarExpanded && (
//                     <span className="text-small text-nowrap">{item.label}</span>
//                   )}
//                 </Link>
//                 {!isSidebarExpanded && (
//                   <Tooltip
//                     id={item.id}
//                     className="tooltip-custom"
//                     style={{
//                       position: "fixed",
//                       zIndex: 10,
//                     }}
//                   />
//                 )}
//                 <div
//                   className={`absolute left-0 top-0 h-full w-1.5
//                      ${activeMenu === item.id
//                       ? "bg-main-color scale-y-100"
//                       : "bg-transparent scale-y-0"
//                     } transition-all duration-300`}
//                 ></div>
//               </li>
//             ))}
//           </ul>
//           {isSidebarExpanded && (
//             <div className="p-2 mt-4">
//               <Link
//                 to="/dashboard/pricing"
//                 className="flex items-center justify-center gap-2 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border-2 rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
//               >
//                 Add Funds
//               </Link>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default SideBar;

// import React, { useState, useEffect } from "react";
// import logo from "../../assets/Images/Logo.png";
// import { Link, useLocation } from "react-router-dom";
// import { BsBarChartFill } from "react-icons/bs";
// import { PiSpeedometerFill } from "react-icons/pi";
// import { HiCurrencyEuro } from "react-icons/hi";
// import { MdContactPage } from "react-icons/md";
// import { GoFileDirectoryFill } from "react-icons/go";
// import { MdContacts } from "react-icons/md";
// import { RiAccountBoxFill } from "react-icons/ri";
// import { BiSolidCommentDetail } from "react-icons/bi";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// import logo1 from "../../assets/Images/logo-mini.png";
// import { Tooltip } from "react-tooltip";
// import "react-tooltip/dist/react-tooltip.css";

// const SideBar = ({ isSidebarVisible, toggleSidebarVisibility }) => {
//   const [activeMenu, setActiveMenu] = useState("Dashboard");
//   const [isSidebarExpanded, setSidebarExpanded] = useState(true);

//   const location = useLocation();

//   useEffect(() => {
//     const currentMenu = menuItems.find(
//       (item) => item.link === location.pathname
//     );
//     if (currentMenu) {
//       setActiveMenu(currentMenu.id);
//     }
//   }, [location.pathname]);

//   const toggleSidebar = () => {
//     setSidebarExpanded(!isSidebarExpanded);
//   };

//   const handleMenuItemClick = (menuId) => {
//     setActiveMenu(menuId);
//     if (window.innerWidth < 992) {
//       toggleSidebarVisibility(false);
//     }
//   };

//   const menuItems = [
//     {
//       id: "Dashboard",
//       icon: <PiSpeedometerFill />,
//       label: "Dashboard",
//       link: "/dashboard",
//     },
//     {
//       id: "Order Upvotes",
//       icon: <BsBarChartFill />,
//       label: "Order Upvotes",
//       link: "/dashboard/upvoteorder",
//     },
//     {
//       id: "Order Comment",
//       icon: <BiSolidCommentDetail />,
//       label: "Order Comment",
//       link: "/dashboard/ordercomment",
//     },
//     {
//       id: "Add Funds",
//       icon: <HiCurrencyEuro />,
//       label: "Add Funds-Princing",
//       link: "/dashboard/pricing",
//     },
//     {
//       id: "FAQs",
//       icon: <MdContactPage />,
//       label: "FAQ'S",
//       link: "/dashboard/faqs",
//     },
//     {
//       id: "Blogs Data",
//       icon: <GoFileDirectoryFill />,
//       label: "Blogs",
//       link: "/dashboard/post",
//     },
//     {
//       id: "Contact",
//       icon: <MdContacts />,
//       label: "Contact Us",
//       link: "/dashboard/contactus",
//     },
//     {
//       id: "Account",
//       icon: <RiAccountBoxFill />,
//       label: "Account",
//       link: "/dashboard/account/",
//     },
//   ];

//   return (
//     <>
//       {isSidebarVisible && (
//         <div
//           className="fixed inset-0 z-40 bg-black bg-opacity-45 backdrop-blur-sm xl:hidden"
//           onClick={toggleSidebarVisibility}
//         ></div>
//       )}

//       <section
//         className={`fixed xl:relative bg-white border-r z-50 border-dashed border-border-color h-screen transition-all duration-300 ${isSidebarExpanded ? "w-60" : "w-16"
//           } ${isSidebarVisible ? "left-0" : "-left-60 xl:left-0"}`}
//       >
//         <div className="relative">
//           <div className={`flex items-center p-3.5 ${isSidebarExpanded ? "justify-between" : "justify-center"} `}>
//             {isSidebarExpanded ? (
//               <Link to="/">
//                 <img
//                   src={logo}
//                   alt="Expanded Logo"
//                   className="h-8 transition-all duration-300 ease-in-out"
//                 />
//               </Link>
//             ) : (
//               <Link to="/">
//                 <img
//                   src={logo1}
//                   alt="Collapsed Logo"
//                   className="h-8 transition-all duration-300 ease-in-out"
//                 />
//               </Link>
//             )}

//           </div>
//           <button
//             onClick={toggleSidebar}
//             className={`absolute top-2/4 -right-3 bg-white p-1 size-6 hidden cursor-pointer border rounded-full ${isSidebarExpanded ? "" : "ml-auto"
//               }  xl:block hidden`}
//           >
//             {isSidebarExpanded ? (
//               <FaAngleLeft className="text-gray-500"/>
//             ) : (
//               <FaAngleRight className="text-gray-500"/>
//             )}
//           </button>
//         </div>

//         <div className="h-[calc(100%-4rem)] overflow-y-auto custom-scroll relative">
//           <ul className="space-y-2.5 mt-2.5">
//             {menuItems.map((item) => (
//               <li
//                 key={item.id}
//                 className={`relative group cursor-pointer font-semibold ${activeMenu === item.id
//                     ? "bg-[#ff550034] text-main-color"
//                     : "text-active hover:bg-[#ff550034] transition-all ease-in duration-150"
//                   }`}
//                 onClick={() => handleMenuItemClick(item.id)}
//               >
//                 <Link
//                   to={item.link}
//                   className="w-full px-2.5 py-2.5 flex items-center transition-all duration-200"
//                   data-tooltip-id={!isSidebarExpanded ? item.id : undefined}
//                   data-tooltip-content={item.label}
//                 >
//                   <span className="ml-[6px] me-2 text-large">{item.icon}</span>
//                   {isSidebarExpanded && (
//                     <span className="text-small text-nowrap">{item.label}</span>
//                   )}
//                 </Link>
//                 {!isSidebarExpanded && (
//                   <Tooltip
//                     id={item.id}
//                     className="tooltip-custom"
//                     style={{
//                       position: "fixed",
//                       zIndex: 10,
//                     }}
//                   />
//                 )}
//                 <div
//                   className={`absolute left-0 top-0 h-full w-1.5
//                      ${activeMenu === item.id
//                       ? "bg-main-color scale-y-100"
//                       : "bg-transparent scale-y-0"
//                     } transition-all duration-300`}
//                 ></div>
//               </li>
//             ))}
//           </ul>
//           {isSidebarExpanded && (
//             <div className="p-2 mt-4">
//               <Link
//                 to="/dashboard/pricing"
//                 className="flex items-center justify-center gap-2 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border-2 rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
//               >
//                 Add Funds
//               </Link>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default SideBar;

import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/Images/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { BsBarChartFill } from "react-icons/bs";
import { PiSpeedometerFill } from "react-icons/pi";
import { HiCurrencyEuro } from "react-icons/hi";
import { MdContactPage } from "react-icons/md";
import { GoFileDirectoryFill } from "react-icons/go";
import { MdContacts } from "react-icons/md";
import { RiAccountBoxFill } from "react-icons/ri";
import { BiSolidCommentDetail } from "react-icons/bi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import logo1 from "../../assets/Images/logo-mini.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { BiSolidChevronDown } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { ClickAwayListener } from "@mui/material";

const SideBar = ({ isSidebarVisible, toggleSidebarVisibility }) => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const accountDropdownRef = useRef(null);
  const [isBalanceHovered, setIsBalanceHovered] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const currentMenu = menuItems.find(
      (item) => item.link === location.pathname
    );
    if (currentMenu) {
      setActiveMenu(currentMenu.id);
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  const handleMenuItemClick = (menuId) => {
    setActiveMenu(menuId);
    if (window.innerWidth < 992) {
      toggleSidebarVisibility(false);
    }
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  const handleAccountDropdownClose = () => {
    setIsAccountDropdownOpen(false);
    setIsBalanceHovered(false);
  };

  const handleBalanceHover = () => {
    setIsBalanceHovered(true);
  };

  const handleBalanceLeave = () => {
    setIsBalanceHovered(false);
  };

  const menuItems = [
    {
      id: "Dashboard",
      icon: <PiSpeedometerFill />,
      label: "Dashboard",
      link: "/dashboard",
    },
    {
      id: "Order Upvotes",
      icon: <BsBarChartFill />,
      label: "Order Upvotes",
      link: "/dashboard/upvoteorder",
    },
    {
      id: "Order Comment",
      icon: <BiSolidCommentDetail />,
      label: "Order Comment",
      link: "/dashboard/ordercomment",
    },
    {
      id: "Add Funds",
      icon: <HiCurrencyEuro />,
      label: "Add Funds-Princing",
      link: "/dashboard/pricing",
    },
    {
      id: "FAQs",
      icon: <MdContactPage />,
      label: "FAQ'S",
      link: "/dashboard/faqs",
    },
    {
      id: "Blogs Data",
      icon: <GoFileDirectoryFill />,
      label: "Blogs",
      link: "/dashboard/post",
    },
    {
      id: "Contact",
      icon: <MdContacts />,
      label: "Contact Us",
      link: "/dashboard/contactus",
    },
    {
      id: "Account",
      icon: <RiAccountBoxFill />,
      label: "Account",
      link: "/dashboard/account/",
    },
  ];

  return (
    <>
      {isSidebarVisible && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-45 backdrop-blur-sm xl:hidden"
          onClick={toggleSidebarVisibility}
        ></div>
      )}

      <section
        className={`fixed xl:relative bg-white border-r z-50 border-dashed border-border-color h-screen transition-all duration-300 ${isSidebarExpanded ? "w-60" : "w-16"
          } ${isSidebarVisible ? "left-0" : "-left-60 xl:left-0"}`}
      >
        <div className="relative">
          <div
            className={`flex items-center p-3.5 ${isSidebarExpanded ? "justify-between" : "justify-center"
              } `}
          >
            {isSidebarExpanded ? (
              <Link to="/">
                <img
                  src={logo}
                  alt="Expanded Logo"
                  className="h-8 transition-all duration-300 ease-in-out"
                />
              </Link>
            ) : (
              <Link to="/">
                <img
                  src={logo1}
                  alt="Collapsed Logo"
                  className="h-8 transition-all duration-300 ease-in-out"
                />
              </Link>
            )}
          </div>

          {/* My Account tab */}
          <div className="relative px-1">
            <ClickAwayListener onClickAway={handleAccountDropdownClose}>
              <div
                ref={accountDropdownRef}
                className="rounded-xl flex items-center justify-between px-3 py-2 border border-border-color cursor-pointer relative"
                onClick={toggleAccountDropdown}
              >
                <div className="flex items-center">
                  <div className="bg-main-color rounded-md flex items-center justify-center w-9 h-9 text-white text-xl font-bold">
                    <span>K</span>
                  </div>
                  {isSidebarExpanded && (
                    <div className="ml-3 flex flex-col">
                      <span className="text-sm font-medium">My Account</span>
                      <span className="text-xs font-normal">kartavya</span>
                    </div>
                  )}
                </div>
                {isSidebarExpanded && (
                  <div className="bg-sub-color rounded-md p-1.5">
                    <BiSolidChevronDown
                      className={`text-white transition-transform duration-200 ${isAccountDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                )}
                <div
                  className={`absolute top-full left-0 z-50 bg-white w-full p-1 rounded-xl border border-border-color overflow-hidden transition-all duration-300 ease-in-out transform origin-top mt-2
                  ${isAccountDropdownOpen
                      ? "opacity-100 scale-y-100 "
                      : "opacity-0 scale-y-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className="px-3 py-2 flex items-center gap-4 transition-colors duration-300 text-sub-color border-b relative overflow-hidden flex-col cursor-pointer"
                      onMouseEnter={handleBalanceHover}
                      onMouseLeave={handleBalanceLeave}
                    >
                      <div
                        className={`flex items-center justify-between w-full transition-transform duration-300 ${isBalanceHovered
                            ? "-translate-y-full opacity-0"
                            : "translate-y-0 opacity-100"
                          }`}
                      >
                        <div className="flex items-center gap-4">
                          <IoWalletOutline className="w-6 h-6" />
                          {isSidebarExpanded && (
                            <div className="text-small flex flex-col">
                              <span className="text-main-color font-bold">
                                $0
                              </span>
                              <span className="text-sm font-medium">
                                Available Balance
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {isSidebarExpanded && (
                        <Link
                          to="/dashboard/pricing"
                          className={`w-full absolute left-0 bottom-0 flex items-center justify-center py-4 rounded-lg text-sm font-medium text-white bg-main-color transition-transform duration-300 transform ${isBalanceHovered
                              ? "translate-y-0 mb-1.5"
                              : "translate-y-full"
                            }`}
                        >
                          Add Funds
                        </Link>
                      )}
                    </div>

                    <div className="px-3 py-2 flex items-center gap-4 transition-colors duration-150 border-b">
                      <CgProfile className="w-6 h-6" />
                      {isSidebarExpanded && (
                        <span className="text-small font-semibold">
                          Profile Settings
                        </span>
                      )}
                    </div>
                    <div className="px-3 py-2 flex items-center gap-4 transition-colors duration-150 text-red-600">
                      <TbLogout className="w-6 h-6" />
                      {isSidebarExpanded && (
                        <span className="text-small font-semibold">
                          Log out
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ClickAwayListener>
          </div>

          <button
            onClick={toggleSidebar}
            className={`absolute top-1/4 -right-3 bg-white p-1 size-6 hidden cursor-pointer border rounded-full ${isSidebarExpanded ? "" : "ml-auto"
              }  xl:block hidden`}
          >
            {isSidebarExpanded ? (
              <FaAngleLeft className="text-gray-500" />
            ) : (
              <FaAngleRight className="text-gray-500" />
            )}
          </button>
        </div>

        <div className="h-[calc(100%-143px)] overflow-y-auto custom-scroll relative">
          <ul className="space-y-2.5 mt-2.5">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`relative group cursor-pointer font-semibold ${activeMenu === item.id
                    ? "bg-[#ff550034] text-main-color"
                    : "text-active hover:bg-[#ff550034] transition-all ease-in duration-150"
                  }`}
                onClick={() => handleMenuItemClick(item.id)}
              >
                <Link
                  to={item.link}
                  className="w-full px-2.5 py-2.5 flex items-center transition-all duration-200"
                  data-tooltip-id={!isSidebarExpanded ? item.id : undefined}
                  data-tooltip-content={item.label}
                >
                  <span className="ml-[6px] me-2 text-large">{item.icon}</span>
                  {isSidebarExpanded && (
                    <span className="text-small text-nowrap">{item.label}</span>
                  )}
                </Link>
                {!isSidebarExpanded && (
                  <Tooltip
                    id={item.id}
                    className="tooltip-custom"
                    style={{
                      position: "fixed",
                      zIndex: 10,
                    }}
                  />
                )}
                <div
                  className={`absolute left-0 top-0 h-full w-1.5
                     ${activeMenu === item.id
                      ? "bg-main-color scale-y-100"
                      : "bg-transparent scale-y-0"
                    } transition-all duration-300`}
                ></div>
              </li>
            ))}
          </ul>
          {isSidebarExpanded && (
            <div className="p-2 mt-4">
              <Link
                to="/dashboard/pricing"
                className="flex items-center justify-center gap-2 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border-2 rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
              >
                Add Funds
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SideBar;

// import React, { useState, useEffect, useRef } from "react";
// import logo from "../../assets/Images/Logo.png";
// import { Link, useLocation } from "react-router-dom";
// import { BsBarChartFill } from "react-icons/bs";
// import { PiSpeedometerFill } from "react-icons/pi";
// import { HiCurrencyEuro } from "react-icons/hi";
// import { MdContactPage } from "react-icons/md";
// import { GoFileDirectoryFill } from "react-icons/go";
// import { MdContacts } from "react-icons/md";
// import { RiAccountBoxFill } from "react-icons/ri";
// import { BiSolidCommentDetail } from "react-icons/bi";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// import logo1 from "../../assets/Images/logo-mini.png";
// import { Tooltip } from "react-tooltip";
// import "react-tooltip/dist/react-tooltip.css";
// import { BiSolidChevronDown } from "react-icons/bi";
// import { IoWalletOutline } from "react-icons/io5";
// import { CgProfile } from "react-icons/cg";
// import { TbLogout } from "react-icons/tb";
// import { ClickAwayListener } from "@mui/material";

// const SideBar = ({ isSidebarVisible, toggleSidebarVisibility }) => {
//     const [activeMenu, setActiveMenu] = useState("Dashboard");
//     const [isSidebarExpanded, setSidebarExpanded] = useState(true);
//     const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
//     const accountDropdownRef = useRef(null);
//     const [isBalanceHovered, setIsBalanceHovered] = useState(false);

//     const location = useLocation();

//     useEffect(() => {
//         const currentMenu = menuItems.find(
//             (item) => item.link === location.pathname
//         );
//         if (currentMenu) {
//             setActiveMenu(currentMenu.id);
//         }
//     }, [location.pathname]);

//     const toggleSidebar = () => {
//         setSidebarExpanded(!isSidebarExpanded);
//     };

//     const handleMenuItemClick = (menuId) => {
//         setActiveMenu(menuId);
//         if (window.innerWidth < 992) {
//             toggleSidebarVisibility(false);
//         }
//     };

//     const toggleAccountDropdown = () => {
//         setIsAccountDropdownOpen(!isAccountDropdownOpen);
//     };

//     const handleAccountDropdownClose = () => {
//         setIsAccountDropdownOpen(false);
//         setIsBalanceHovered(false);
//     };

//     const handleBalanceHover = () => {
//         setIsBalanceHovered(true);
//     };

//     const handleBalanceLeave = () => {
//         setIsBalanceHovered(false);
//     };

//     const menuItems = [
//         {
//             id: "Dashboard",
//             icon: <PiSpeedometerFill />,
//             label: "Dashboard",
//             link: "/dashboard",
//         },
//         {
//             id: "Order Upvotes",
//             icon: <BsBarChartFill />,
//             label: "Order Upvotes",
//             link: "/dashboard/upvoteorder",
//         },
//         {
//             id: "Order Comment",
//             icon: <BiSolidCommentDetail />,
//             label: "Order Comment",
//             link: "/dashboard/ordercomment",
//         },
//         {
//             id: "Add Funds",
//             icon: <HiCurrencyEuro />,
//             label: "Add Funds-Princing",
//             link: "/dashboard/pricing",
//         },
//         {
//             id: "FAQs",
//             icon: <MdContactPage />,
//             label: "FAQ'S",
//             link: "/dashboard/faqs",
//         },
//         {
//             id: "Blogs Data",
//             icon: <GoFileDirectoryFill />,
//             label: "Blogs",
//             link: "/dashboard/post",
//         },
//         {
//             id: "Contact",
//             icon: <MdContacts />,
//             label: "Contact Us",
//             link: "/dashboard/contactus",
//         },
//         {
//             id: "Account",
//             icon: <RiAccountBoxFill />,
//             label: "Account",
//             link: "/dashboard/account/",
//         },
//     ];

//     return (
//         <>
//             {isSidebarVisible && (
//                 <div
//                     className="fixed inset-0 z-40 bg-black bg-opacity-45 backdrop-blur-sm xl:hidden"
//                     onClick={toggleSidebarVisibility}
//                 ></div>
//             )}

//             <section
//                 className={`fixed xl:relative bg-white border-r z-50 border-dashed border-border-color h-screen transition-all duration-300 ${isSidebarExpanded ? "w-60" : "w-16"
//                     } ${isSidebarVisible ? "left-0" : "-left-60 xl:left-0"}`}
//             >
//                 <div className="relative">
//                     <div
//                         className={`flex items-center p-3.5 ${isSidebarExpanded ? "justify-between" : "justify-center"
//                             } `}
//                     >
//                         {isSidebarExpanded ? (
//                             <Link to="/">
//                                 <img
//                                     src={logo}
//                                     alt="Expanded Logo"
//                                     className="h-8 transition-all duration-300 ease-in-out"
//                                 />
//                             </Link>
//                         ) : (
//                             <Link to="/">
//                                 <img
//                                     src={logo1}
//                                     alt="Collapsed Logo"
//                                     className="h-8 transition-all duration-300 ease-in-out"
//                                 />
//                             </Link>
//                         )}
//                     </div>

//                     {/* My Account tab */}
//                     <div className="my-3 px-2 relative">
//                         <ClickAwayListener onClickAway={handleAccountDropdownClose}>
//                             <div
//                                 ref={accountDropdownRef}
//                                 className={`rounded-xl   px-3 py-2 border border-border-color cursor-pointer relative ${!isSidebarExpanded ? "grid place-items-center" : "justify-between flex items-center"
//                                     }`}
//                                 onClick={toggleAccountDropdown}
//                             >
//                                 {!isSidebarExpanded ? (
//                                     <div className="bg-main-color rounded-md flex items-center justify-center w-9 h-9 text-white text-xl font-bold">
//                                         <span>K</span>
//                                     </div>
//                                 ) : (
//                                     <>
//                                         <div className="flex items-center">
//                                             <div className="bg-main-color rounded-md flex items-center justify-center w-9 h-9 text-white text-xl font-bold">
//                                                 <span>K</span>
//                                             </div>
//                                             {isSidebarExpanded && (
//                                                 <div className="ml-3 flex flex-col">
//                                                     <span className="text-sm font-medium">My Account</span>
//                                                     <span className="text-xs font-normal">kartavya</span>
//                                                 </div>
//                                             )}
//                                         </div>
//                                         {isSidebarExpanded && (
//                                             <div className="bg-sub-color rounded-md p-1.5">
//                                                 <BiSolidChevronDown
//                                                     className={`text-white transition-transform duration-200 ${isAccountDropdownOpen ? "rotate-180" : ""
//                                                         }`}
//                                             />
//                                             </div>
//                                         )}
//                                     </>
//                                 )}
//                                 <div
//                                     className={`absolute top-full left-0 z-50 bg-white  rounded-xl border border-border-color overflow-hidden transition-all duration-300 ease-in-out transform origin-top mt-2 shadow-lg ${isAccountDropdownOpen
//                                             ? "opacity-100 scale-y-100 "
//                                             : "opacity-0 scale-y-0"
//                                         }`} // Always render dropdown with base styles
//                                     style={{
//                                         left: !isSidebarExpanded && isAccountDropdownOpen ? "16px" : "0", // Reposition when collapsed and open
//                                         width: !isSidebarExpanded && isAccountDropdownOpen ? "250px" : "100%", // Wider when collapsed and open
//                                     }}
//                                 >
//                                     <div className="overflow-hidden">
//                                         <div
//                                             className="px-3 py-2 flex items-center gap-4 transition-colors duration-300 text-sub-color border-b relative overflow-hidden flex-col cursor-pointer"
//                                             onMouseEnter={handleBalanceHover}
//                                             onMouseLeave={handleBalanceLeave}
//                                         >
//                                             <div
//                                                 className={`flex items-center justify-between w-full transition-transform duration-300 ${isBalanceHovered
//                                                         ? "-translate-y-full opacity-0"
//                                                         : "translate-y-0 opacity-100"
//                                                     }`}
//                                             >
//                                                 <div className="flex items-center gap-4">
//                                                     <IoWalletOutline className="w-6 h-6" />
//                                                     <div className="text-small flex flex-col">
//                                                         <span className="text-main-color font-bold">$0</span>
//                                                         <span className="text-sm font-medium">
//                                                             Available Balance
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                             <Link
//                                                 to="/dashboard/pricing"
//                                                 className={`w-full absolute left-0 bottom-0 flex items-center justify-center py-4 rounded-lg text-sm font-medium text-white bg-main-color transition-transform duration-300 transform ${isBalanceHovered
//                                                         ? "translate-y-0 mb-1.5"
//                                                         : "translate-y-full"
//                                                     } px-4`} // Add horizontal padding here
//                                             >
//                                                 Add Funds
//                                             </Link>
//                                         </div>

//                                         <div className="px-3 py-2 flex items-center gap-4 transition-colors duration-150 border-b">
//                                             <CgProfile className="w-6 h-6" />
//                                             <span className="text-small font-semibold">
//                                                 Profile Settings
//                                             </span>
//                                         </div>
//                                         <div className="px-3 py-2 flex items-center gap-4 transition-colors duration-150 text-red-600">
//                                             <TbLogout className="w-6 h-6" />
//                                             <span className="text-small font-semibold">Log out</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </ClickAwayListener>
//                     </div>

//                     <button
//                         onClick={toggleSidebar}
//                         className={`absolute top-1/4 -right-3 bg-white p-1 size-6 hidden cursor-pointer border rounded-full ${isSidebarExpanded ? "" : "ml-auto"
//                             }  xl:block hidden`}
//                     >
//                         {isSidebarExpanded ? (
//                             <FaAngleLeft className="text-gray-500" />
//                         ) : (
//                             <FaAngleRight className="text-gray-500" />
//                         )}
//                     </button>
//                 </div>

//                 <div className="h-[calc(100%-4rem)] overflow-y-auto custom-scroll relative">
//                     <ul className="space-y-2.5 mt-2.5">
//                         {menuItems.map((item) => (
//                             <li
//                                 key={item.id}
//                                 className={`relative group cursor-pointer font-semibold ${activeMenu === item.id
//                                     ? "bg-[#ff550034] text-main-color"
//                                     : "text-active hover:bg-[#ff550034] transition-all ease-in duration-150"
//                                     }`}
//                                 onClick={() => handleMenuItemClick(item.id)}
//                             >
//                                 <Link
//                                     to={item.link}
//                                     className="w-full px-2.5 py-2.5 flex items-center transition-all duration-200"
//                                     data-tooltip-id={!isSidebarExpanded ? item.id : undefined}
//                                     data-tooltip-content={item.label}
//                                 >
//                                     <span className="ml-[6px] me-2 text-large">{item.icon}</span>
//                                     {isSidebarExpanded && (
//                                         <span className="text-small text-nowrap">{item.label}</span>
//                                     )}
//                                 </Link>
//                                 {!isSidebarExpanded && (
//                                     <Tooltip
//                                         id={item.id}
//                                         className="tooltip-custom"
//                                         style={{
//                                             position: "fixed",
//                                             zIndex: 10,
//                                         }}
//                                     />
//                                 )}
//                                 <div
//                                     className={`absolute left-0 top-0 h-full w-1.5
//                      ${activeMenu === item.id
//                                             ? "bg-main-color scale-y-100"
//                                             : "bg-transparent scale-y-0"
//                                         } transition-all duration-300`}
//                                 ></div>
//                             </li>
//                         ))}
//                     </ul>
//                     {isSidebarExpanded && (
//                         <div className="p-2 mt-4">
//                             <Link
//                                 to="/dashboard/pricing"
//                                 className="flex items-center justify-center gap-2 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border-2 rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
//                             >
//                                 Add Funds
//                             </Link>
//                         </div>
//                     )}
//                 </div>
//             </section>
//         </>
//     );
// };

// export default SideBar;
