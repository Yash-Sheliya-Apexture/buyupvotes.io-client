import React, { useState, useEffect } from "react";
import logo from "../../assets/Images/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaListCheck } from "react-icons/fa6";
import { IoIosChatboxes } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import logo1 from "../../assets/Images/logo-mini.png";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const SideBar = ({ isSidebarVisible, toggleSidebarVisibility }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);
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

  const menuItems = [
    {
      id: "Dashboard",
      icon: <LuLayoutDashboard />,
      label: "Dashboard",
      link: "/dashboard",
    },
    {
      id: "Order Upvotes",
      icon: <FaListCheck />,
      label: "New Order",
      link: "/dashboard/upvoteorder",
    },
    {
      id: "Add Funds",
      icon: <IoWalletOutline />,
      label: "Add Funds",
      link: "/dashboard/pricing",
    },
    {
      id: "FAQs",
      icon: <IoDocumentTextOutline />,
      label: "FAQs",
      link: "/dashboard/faqs",
    },
    {
      id: "Blogs Data",
      icon: <IoDocumentTextOutline />,
      label: "Blogs",
      link: "/dashboard/post",
    },
    {
      id: "Contact",
      icon: <IoCallOutline />,
      label: "Contact Us",
      link: "/dashboard/contactus",
    },
    {
      id: "Account",
      icon: <IoSettingsOutline />,
      label: "Account Settings",
      link: "/dashboard/account",
    },
  ];

  const sidebarClasses = `fixed xl:relative z-50 h-screen transition-all duration-300 bg-white border-r border-gray-100
                           ${isSidebarExpanded ? 'w-72' : 'w-20'}
                           ${isSidebarVisible ? 'left-0' : '-left-72 xl:left-0'}`;

  return (
    <>
      {isSidebarVisible && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-45 backdrop-blur-sm xl:hidden" onClick={toggleSidebarVisibility}></div>
      )}

      <section className={sidebarClasses}>
        <div className="relative">
          <div className={`flex items-center h-[82.6px] border-b p-4  ${isSidebarExpanded ? 'justify-between' : 'justify-center'}`}>
            <Link to="/" className="flex items-center">
              {isSidebarExpanded ? (
                <img src={logo} alt="Expanded Logo" className="h-8 transition-all duration-300" />
              ) : (
                <img src={logo1} alt="Collapsed Logo" className="h-10 transition-all duration-300" />
              )}

            </Link>
          </div>
          <button
            onClick={toggleSidebar}
            className="absolute top-1/2 -right-3 bg-white p-1 -translate-y-1/2 size-7 hidden cursor-pointer border rounded-full xl:block"
          >
            {isSidebarExpanded ? (
              <FaAngleLeft className="text-gray-500" />
            ) : (
              <FaAngleRight className="text-gray-500" />
            )}
          </button>
        </div>

        <div className="h-[calc(100%-82.59px)] overflow-y-auto custom-scroll flex flex-col justify-between">
          <ul className="space-y-3 p-4 ">
            {menuItems.map(item => (
              <li
                key={item.id}
                className={`group cursor-pointer rounded-xl  flex items-center ${activeMenu === item.id ? 'bg-main-color text-white' : 'text-gray-700 hover:bg-main-color/15 hover:text-main-color'} transition-colors duration-200`} onClick={() => handleMenuItemClick(item.id)}
              >
                <Link to={item.link} className={`w-full flex items-center gap-4 py-3 h-12 px-4 ${isSidebarExpanded ? "" : "justify-center"}`} data-tooltip-id={`${item.id}-tooltip`} data-tooltip-content={item.label}>
                  <span className="text-2xl">{item.icon}</span>
                  {isSidebarExpanded && <span className="text-lg font-medium text-nowrap">{item.label}</span>}
                </Link>
                {
                  !isSidebarExpanded && (
                    <Tooltip
                        id={`${item.id}-tooltip`}
                        place="right"
                        effect="solid"
                        className="custom-tooltip"
                    />
                  )
                }

              </li>
            ))}
          </ul>

          {isSidebarExpanded && (
            <div className="p-5 mt-4 border-t">
              <Link
                to="/dashboard/pricing"
                className="block px-5 py-3 bg-[#FF5500] text-white rounded-xl font-medium text-center hover:bg-[#D64100] transition-colors duration-200"
              >
                Add Funds
              </Link>
            </div>
          )}
        </div>
      </section>
       <style>
        {`
          .custom-tooltip {
            border-radius: 0.5rem; /* Example rounded corners */
            font-size: 12px; /* Example text size - 14px */
            padding: 0.5rem 0.75rem; /* Example padding - 8px top/bottom, 12px left/right */
            background-color: #333; /* Example background color */
            color: #fff; /* Example text color */
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
};

export default SideBar;