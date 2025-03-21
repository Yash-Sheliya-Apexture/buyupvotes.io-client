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
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import logo1 from "../../assets/Images/logo-mini.png";

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);

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
      link: "/dashboard/DirectMassage",
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
      link: "/dashboard/RabbitAcc",
    },
    { id: "faqs", icon: <MdContactPage />, label: "FAQ'S", link: "/" },
    { id: "OTP", icon: <GoFileDirectoryFill />, label: "Blogs", link: "/" },
    { id: "API", icon: <IoTv />, label: "API (New)", link: "/" },
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
      link: "/settings",
    },
  ];

  return (
    <>
      {/* Sidebar */}
      <section
        className={`fixed bg-white border-r border-dashed border-border-color h-screen transition-all duration-300 ${
          isSidebarExpanded ? "w-60" : "w-16"
        }`}
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
        <div className="h-[calc(100%-4rem)] overflow-y-auto scroll-smooth scrollbar-thin custom-scrollbar">
          <ul className="space-y-2.5 mt-5">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`relative group rounded-base cursor-pointer ${
                  activeMenu === item.id
                    ? "bg-[#FF570014] text-[#FF5700] font-bold"
                    : "text-[#403633] hover:bg-[rgba(240,240,240,0.6)]"
                }`}
                onClick={() => setActiveMenu(item.id)}
              >
                <Link
                  to={item.link}
                  className="w-full px-2.5 py-2.5 flex items-center transition-all duration-200 relative"
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
    </>
  );
};

export default SideBar;
