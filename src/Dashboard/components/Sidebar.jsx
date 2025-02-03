import React, { useState, useEffect } from "react";
import logo from "../../assets/Images/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { BsBarChartFill } from "react-icons/bs";
import { PiSpeedometerFill } from "react-icons/pi";
import { HiCurrencyEuro } from "react-icons/hi";
import { MdContactPage } from "react-icons/md";
import { GoFileDirectoryFill } from "react-icons/go";
import { MdContacts } from "react-icons/md";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import logo1 from "../../assets/Images/logo-mini.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const SideBar = ({ isSidebarVisible, toggleSidebarVisibility }) => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
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
          <div className={`flex items-center p-3.5 ${isSidebarExpanded ? "justify-between" : "justify-center"} `}>
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
          <button
            onClick={toggleSidebar}
            className={`absolute top-2/4 -right-3 bg-white p-1 size-6 hidden cursor-pointer border rounded-full ${isSidebarExpanded ? "" : "ml-auto"
              }  xl:block hidden`}
          >
            {isSidebarExpanded ? (
              <FaAngleLeft className="text-gray-500"/>
            ) : (
              <FaAngleRight className="text-gray-500"/>
            )}
          </button>
        </div>

        <div className="h-[calc(100%-4rem)] overflow-y-auto custom-scroll relative">
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
