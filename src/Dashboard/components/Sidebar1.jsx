import React, { useState } from "react";
import logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { BsBarChartFill } from "react-icons/bs";
import { PiSpeedometerFill } from "react-icons/pi";
import { IoMdChatboxes } from "react-icons/io";
import { IoIosChatboxes } from "react-icons/io";
import { HiCurrencyEuro } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { MdContactPage } from "react-icons/md";
import { IoTv } from "react-icons/io5";
import { MdContacts } from "react-icons/md";
import { RiAccountBoxFill } from "react-icons/ri";
import { GoFileDirectoryFill } from "react-icons/go";
import { FiMenu, FiX } from "react-icons/fi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard"); // State for active menu
  const [isSidebarExpanded, setSidebarExpanded] = useState(true); // State for sidebar expansion

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
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
      id: "Orders",
      icon: <IoMdChatboxes />,
      label: "Order Comments",
      link: "/dashboard/OrderComment",
    },
    {
      id: "Order messages",
      icon: <IoIosChatboxes />,
      label: "Order Direct Messages",
      link: "/dashboard/notifications",
    },
    {
      id: "Add Funds",
      icon: <HiCurrencyEuro />,
      label: "Add Funds-Princing",
      link: "/dashboard/FundPrice",
    },
    {
      id: "Raddit Accounts",
      icon: <FaCartShopping />,
      label: "Buy Raddit Accounts",
      link: "/signup",
    },
    {
      id: "faqs",
      icon: <MdContactPage />,
      label: "FAQ'S",
      link: "/password",
    },
    { id: "OTP", icon: <GoFileDirectoryFill />, label: "Blogs", link: "/otp" },
    {
      id: "API",
      icon: <IoTv />,
      label: "API (New)",
      link: "/settings",
    },
    {
      id: "Contact",
      icon: <MdContacts />,
      label: "Contact Us",
      link: "/settings",
    },
    {
      id: "Account",
      icon: <RiAccountBoxFill />,
      label: "Account",
      link: "/settings",
    },
  ];

  return (
    <>
      {/* Sidebar */}
      <section
        className={`fixed inset-y-0 left-0 z-50 bg-white border-r border-dashed border-border-color h-screen transition-all duration-300 ${
          isSidebarExpanded ? "w-64" : "w-16"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-2.5">
          <div to="/" className={`${!isSidebarExpanded && "hidden"}`}>
            <img src={logo} alt="Logo" className="h-8" />
          </div>
          <button
            onClick={toggleSidebar}
            className={`relative${isSidebarExpanded ? "" : "ml-auto"}`}
          >
            {isSidebarExpanded ? (
              <FaAngleLeft className="text-gray-500 absolute -top-2 -right-6 p-1 size-7 backdrop-blur-sm lg:block hidden cursor-pointer border rounded-full" />
            ) : (
              <FaAngleRight className="text-gray-500 absolute top-2.5 -right-3 p-1 size-6 backdrop-blur-sm lg:block hidden cursor-pointer border rounded-full" />
            )}
          </button>
        </div>

        {/* Sidebar Menu */}
        <div>
          <ul className="flex flex-col space-y-2.5 mt-5">
            {menuItems.map((item, index) => (
              <li
                key={item.id}
                className={`relative group rounded-base cursor-pointer ${
                  activeMenu === item.id
                    ? "bg-[#FF570014] text-[#FF5700] font-bold" // Active menu styles
                    : "text-[#403633] hover:bg-[rgba(240,240,240,0.6)]" // Inactive menu styles
                }`}
                onClick={() => setActiveMenu(item.id)} // Set active menu on click
              >
                <Link
                  to={item.link}
                  className="w-full px-2.5 py-2.5 flex items-center transition-all duration-200"
                >
                  <span className="mr-4 text-large">{item.icon}</span>
                  {isSidebarExpanded && (
                    <span className="text-small">{item.label}</span>
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
            <div className="py-2">
              <button className="w-full p-1.5 hover:shadow-Sidebar rounded-full border border-[#FF5700]">
                Add Funds
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Sidebar Hover Effect */}
      {!isSidebarExpanded && (
        <div
          className="fixed inset-y-0 left-0 w-16 bg-white border-r-2 border-[#e5e7eb] h-screen hover:w-64 group transition-all duration-300"
          onMouseEnter={() => setSidebarExpanded(true)}
          onMouseLeave={() => setSidebarExpanded(false)}
        >
          <div className="p-1.5">
            <ul className="flex flex-col space-y-2.5">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`relative group rounded-base cursor-pointer ${
                    activeMenu === item.id
                      ? "bg-[#FF570014] text-[#FF5700] font-bold"
                      : "text-[#403633] hover:bg-[rgba(240,240,240,0.6)]"
                  }`}
                >
                  <Link
                    to={item.link}
                    className="w-full px-2.5 py-2.5 flex items-center transition-all duration-200"
                  >
                    <span className="mr-4 text-4xl">{item.icon}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
