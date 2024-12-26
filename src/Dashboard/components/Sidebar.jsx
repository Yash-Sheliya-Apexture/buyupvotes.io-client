import React, { useState, useEffect } from "react";
import logo from "../../assets/Images/logo.png";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
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
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  // Get the current location path
  const location = useLocation();

  // Sync activeMenu with location.pathname
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

  const toggleSidebarVisibility = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleMenuItemClick = (menuId) => {
    setActiveMenu(menuId);
    if (window.innerWidth < 992) {
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
      link: "/dashboard/FAQ",
    },
    {
      id: "Blogs Data",
      icon: <GoFileDirectoryFill />,
      label: "Blogs",
      link: "/dashboard/Blog",
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
      link: "/dashboard/Account/",
    },
  ];

  return (
    <>
      <button
        className="absolute top-4 left-4 z-50 xl:hidden rounded-full"
        onClick={toggleSidebarVisibility}
      >
        <CgMenuRightAlt className="text-main-color size-8 rounded-md" />
      </button>

      {isSidebarVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-45 z-40 backdrop-blur-sm xl:hidden"
          onClick={toggleSidebarVisibility}
        ></div>
      )}

      <section
        className={`fixed xl:relative bg-white border-r z-50 border-dashed border-border-color h-screen transition-all duration-300 ${
          isSidebarExpanded ? "w-60" : "w-16"
        } ${isSidebarVisible ? "left-0" : "-left-60 xl:left-0"}`}
      >
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
            <Link to="/">
              <img
                src={logo1}
                alt="Collapsed Logo"
                className="h-8 transition-all duration-300 ease-in-out"
              />
            </Link>
          )}
          <button
            onClick={toggleSidebar}
            className={`relative ${isSidebarExpanded ? "" : "ml-auto"}`}
          >
            {isSidebarExpanded ? (
              <FaAngleLeft className="text-gray-500 absolute top-4 left-0.5 backdrop-blur-sm p-1 size-6 lg:block hidden cursor-pointer border rounded-full" />
            ) : (
              <FaAngleRight className="text-gray-500 absolute top-4 left-0.5 p-1 size-6 backdrop-blur-sm lg:block hidden cursor-pointer border rounded-full" />
            )}
          </button>
        </div>

        <div className="h-[calc(100%-4rem)] overflow-y-auto custom-scroll">
          <ul className="space-y-2.5 mt-5">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`relative group cursor-pointer font-semibold ${
                  activeMenu === item.id
                    ? "bg-[#ff550034] text-main-color"
                    : "text-active hover:bg-[#ff550034] transition-all ease-in duration-150"
                }`}
                onClick={() => handleMenuItemClick(item.id)}
              >
                <Link
                  to={item.link}
                  className="w-full px-2.5 py-2.5 flex items-center transition-all duration-200 relative"
                  data-tooltip-id={!isSidebarExpanded ? item.id : undefined}
                  data-tooltip-content={item.label}
                >
                  <span className="mr-4 text-large">{item.icon}</span>
                  {isSidebarExpanded && (
                    <span className="text-small text-nowrap">{item.label}</span>
                  )}
                </Link>
                {!isSidebarExpanded && (
                  <Tooltip
                    id={item.id}
                    style={{
                      position: "fixed", // Ensure the tooltip stays outside
                      transform: "translateX(0px)", // Move slightly to the right
                      zIndex: 10,
                      backgroundColor: "#ff5700", // Custom background color
                      fontSize: "14px", // Custom font size
                      fontWeight: "bold", // Custom font weight
                      color: "white", // Text color
                      borderRadius: "5px", // Rounded corner
                      textTransform: "capitalize",
                    }}
                  />
                )}
                <div
                  className={`absolute left-0 top-0 h-full w-1.5
                     ${
                       activeMenu === item.id
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
                to="/dashboard/FundPrice"
                className="mybtn"
                style={{
                  padding: "8px 40px", // Custom padding
                }}
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
