import React, { useState } from "react";
import logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { BsBarChartFill } from "react-icons/bs";
import { PiSpeedometerFill } from "react-icons/pi";
import { HiCurrencyEuro } from "react-icons/hi";
import { MdContactPage } from "react-icons/md";
import { GoFileDirectoryFill } from "react-icons/go";
import { MdContacts } from "react-icons/md";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import logo1 from "../../assets/Images/logo-mini.png";
import { CgMenuRightAlt } from "react-icons/cg";

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  const toggleSidebarVisibility = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleMenuItemClick = (menuId) => {
    setActiveMenu(menuId);
    if (window.innerWidth < 992) {
      // Close sidebar on smaller screens when a menu item is clicked
      setSidebarVisible(false);
    }
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
      link: "/dashboard/UpvoteOrder",
    },
    {
      id: "Add Funds",
      icon: <HiCurrencyEuro />,
      label: "Add Funds-Princing",
      link: "/dashboard/FundPrice",
    },
    {
      id: "FAQs",
      icon: <MdContactPage />,
      label: "FAQ'S",
      link: "/dashboard/FaQ",
    },
    {
      id: "Blogs Data",
      icon: <GoFileDirectoryFill />,
      label: "Blogs",
      link: "/dashboard/BlogJson",
    },
    {
      id: "Contact",
      icon: <MdContacts />,
      label: "Contact Us",
      link: "/dashboard/ContactUs",
    },
    {
      id: "Account",
      icon: <RiAccountBoxFill />,
      label: "Account",
      link: "/dashboard/Account",
    },
  ];

  return (
    <>
      {/* Toggle Button for Small Screens */}
      <button
        className="absolute top-4 left-4 z-50 xl:hidden rounded-full"
        onClick={toggleSidebarVisibility}
      >
        <CgMenuRightAlt className="text-main-color size-8 rounded-md" />
      </button>

      {/* Backdrop Overlay */}
      {isSidebarVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-45 z-40 backdrop-blur-sm xl:hidden"
          onClick={toggleSidebarVisibility}
        ></div>
      )}

      {/* Sidebar Desktop */}
      <section
        className={`fixed xl:relative bg-white border-r z-50 border-dashed border-border-color h-screen transition-all duration-300 ${
          isSidebarExpanded ? "w-60" : "w-16"
        } ${isSidebarVisible ? "left-0" : "-left-60 xl:left-0"} :left-0`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-3.5">
          {isSidebarExpanded ? (
            <Link to="/">
              <img
                src={logo}
                alt="Expanded Logo"
                className="h-8 transition-all duration-300 ease-in-out"
              />
            </Link>
          ) : (
            <img
              src={logo1}
              alt="Collapsed Logo"
              className="h-8 transition-all duration-300 ease-in-out"
            />
          )}
          <button
            onClick={toggleSidebar}
            className={`relative ${isSidebarExpanded ? "" : "ml-auto"}`}
          >
            {isSidebarExpanded ? (
              <FaAngleLeft className="text-gray-500 absolute top-0 left-0.5 backdrop-blur-sm p-1 size-6 lg:block hidden cursor-pointer border rounded-full" />
            ) : (
              <FaAngleRight className="text-gray-500 absolute top-0 left-0.5 p-1 size-6 backdrop-blur-sm lg:block hidden cursor-pointer border rounded-full" />
            )}
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className="h-[calc(100%-4rem)] overflow-y-auto custom-scroll">
          <ul className="space-y-2.5 mt-5">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`relative group rounded-base cursor-pointer ${
                  activeMenu === item.id
                    ? "bg-[#FF570014] text-main-color font-bold"
                    : "text-active hover:bg-[rgba(240,240,240,0.6)]"
                }`}
                onClick={() => handleMenuItemClick(item.id)}
              >
                <Link
                  to={item.link}
                  className="w-full px-2.5 py-2.5 flex items-center transition-all duration-200 relative"
                >
                  <span className="mr-4 text-large">{item.icon}</span>
                  {isSidebarExpanded && (
                    <span className="text-small text-nowrap">{item.label}</span>
                  )}
                </Link>
                <div
                  className={`absolute left-0 top-0 h-full w-1 ${
                    activeMenu === item.id
                      ? "bg-main-color scale-y-100"
                      : "bg-transparent scale-y-0"
                  } transition-all duration-300`}
                ></div>
              </li>
            ))}
          </ul>
          {isSidebarExpanded && (
            <div className="p-4">
              <button className="mybtn w-full">Add Funds</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SideBar;
