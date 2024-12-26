import React, { useEffect, useState } from "react";
import logo from "../assets/Images/Logo.png"; // Replace with your logo image path
import Uparrow from "../assets/Images/logo-mini.png";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Button from "../Dashboard/components/Button";
import { NearMeDisabled } from "@mui/icons-material";

const Header = () => {
  const [showTooltip, setShowTooltip] = useState(false); // Tooltip state
  const [showMenu, setShowMenu] = useState(false); // Menu toggle state for small screens
  const [isLoggedIn, setIsLoggedIn] = useState(false); // User login state

  useEffect(() => {
    // Check if there's a token or user info in localStorage to determine login status
    const authToken = localStorage.getItem("authToken"); // or localStorage.getItem("user");
    if (authToken) {
      setIsLoggedIn(true); // If token exists, user is logged in
    } else {
      setIsLoggedIn(false); // If no token, user is not logged in
    }
  }, []);

  const toggleTooltip = () => {
    setShowTooltip((prev) => !prev); // Toggle tooltip visibility
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev); // Toggle mobile menu
  };

  return (
    <>
      {/* Blue background behind header */}
      <header className="sticky top-0 left-0 z-20 bg-white w-full bg-opacity-95 shadow-main">
        {/* Header */}
        <section className="container mx-auto">
          <div className="flex items-center justify-between py-2.5 relative">
            {/* Left Section: Logo & Small screen icons */}
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button className="block md:hidden" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-main-color"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
              <button className="block md:hidden">
                <img src={Uparrow} alt="upArrow" className="size-6" />
              </button>

              {/* Logo for larger screens */}

              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="hidden h-6 md:h-10 md:block"
                />
              </Link>
            </div>

            {/* Combined Navigation Links and Right Section */}
            <div className="flex items-center justify-between space-x-6 md:w-auto">
              {/* Navigation Links */}
              <nav className="flex-grow hidden h-full space-x-10 cursor-pointer md:flex">
                <Link
                  to="/dashboard/FundPrice"
                  className="text-small text-sub-color hover:opacity-50 transition-all ease-linear duration-150"
                >
                  Pricing
                </Link>
                <Link
                  to="/dashboard/FAQ"
                  href="#FaQ"
                  className="text-small text-sub-color hover:opacity-50 transition-all ease-linear duration-150"
                >
                  FAQ
                </Link>
                <Link
                  to="/dashboard/Blog"
                  className="text-small text-sub-color hover:opacity-50 transition-all ease-linear duration-150"
                >
                  Blog
                </Link>
                <Link
                  to="/dashboard/ContactUs"
                  className="text-small text-sub-color hover:opacity-50 transition-all ease-linear duration-150"
                >
                  Contact
                </Link>
              </nav>

              {/* Right Section */}
              <div className="relative flex items-center space-x-4">
                <div className="relative flex items-center space-x-4">
                  {isLoggedIn ? (
                    // If user is logged in, show Dashboard
                    <Button>
                      <Link to="/dashboard">Dashboard</Link>
                    </Button>
                  ) : (
                    // If user is not logged in, show Sign-In and Sign-Up
                    <>
                      <button>
                        <Link
                          to="/signin"
                          className="px-4 lg:px-0 py-1 text-main-color border-main-color font-medium rounded-full transition lg:block hidden"
                        >
                          Sign-In
                        </Link>
                      </button>

                      <Button>
                        <Link to="/signup">Sign-Up</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar for mobile view */}
          <div
            className={`fixed top-0 left-0 w-56 bg-white h-full border-r border-gray-300/50 shadow-main transition-transform duration-300 ease-in-out ${
              showMenu ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{ zIndex: 1000 }} // Ensure this is above the blur layer
          >
            <div className="relative flex justify-end p-4">
              <button onClick={toggleMenu}>
                <img src={logo} alt="sidelogo" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center space-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="size-6"
                >
                  <path
                    fill="currentColor"
                    d="m17.967 6.558l-1.83-1.83c-1.546-1.545-2.318-2.318-3.321-2.605c-1.003-.288-2.068-.042-4.197.45l-1.228.283c-1.792.413-2.688.62-3.302 1.233S3.27 5.6 2.856 7.391l-.284 1.228c-.491 2.13-.737 3.194-.45 4.197c.288 1.003 1.061 1.775 2.606 3.32l1.83 1.83C9.248 20.657 10.592 22 12.262 22c1.671 0 3.015-1.344 5.704-4.033c2.69-2.69 4.034-4.034 4.034-5.705c0-1.67-1.344-3.015-4.033-5.704"
                    opacity=".5"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M11.147 14.328c-.673-.672-.667-1.638-.265-2.403a.75.75 0 0 1 1.04-1.046c.34-.18.713-.276 1.085-.272a.75.75 0 0 1-.014 1.5a.88.88 0 0 0-.609.277c-.387.387-.285.775-.177.884c.11.109.497.21.884-.177c.784-.784 2.138-1.044 3.006-.177c.673.673.667 1.639.264 2.404a.75.75 0 0 1-1.04 1.045a2.2 2.2 0 0 1-1.472.232a.75.75 0 1 1 .302-1.47c.177.037.463-.021.708-.266c.388-.388.286-.775.177-.884s-.496-.21-.884.177c-.784.784-2.138 1.044-3.005.176m-1.126-4.035a2 2 0 1 0-2.828-2.828a2 2 0 0 0 2.828 2.828"
                  ></path>
                </svg>
                <Link
                  to="/dashboard/FundPrice"
                  className="block text-lg text-sub-color hover:opacity-50 transition-all ease-linear duration-200"
                >
                  Pricing
                </Link>
              </div>

              <div className="flex items-center space-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="size-6"
                >
                  <path
                    fill="currentColor"
                    d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22"
                    opacity=".5"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0a2.625 2.625 0 1 1 4.508 1.829q-.138.142-.264.267a7 7 0 0 0-.571.617c-.22.282-.298.489-.298.662V13a.75.75 0 0 1-1.5 0v-.75c0-.655.305-1.186.614-1.583c.229-.294.516-.58.75-.814q.106-.105.193-.194A1.125 1.125 0 0 0 12 7.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                  ></path>
                </svg>
                <Link
                  to="/dashboard/FAQ"
                  className="block text-lg text-sub-color hover:opacity-50 transition-all ease-linear duration-200"
                >
                  FAQ
                </Link>
              </div>

              <div className="flex items-center space-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="size-6"
                >
                  <path
                    fill="currentColor"
                    d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12"
                    opacity=".5"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M7 16.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm0-3.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zM22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"
                  ></path>
                </svg>
                <Link
                  to="/dashboard/Blog"
                  className="block text-lg text-sub-color hover:opacity-50 transition-all ease-linear duration-200"
                >
                  Blog
                </Link>
              </div>
              <div className="flex items-center space-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="size-6"
                >
                  <path
                    fill="currentColor"
                    d="M2 11.25C2 8.35 4.015 6 6.5 6S11 8.35 11 11.25V20H4.233C3 20 2 18.834 2 17.395z"
                    opacity=".5"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M11 11.25V20h8.793C21.012 20 22 18.847 22 17.425V11.25C22 8.35 19.985 6 17.5 6h-11C8.985 6 11 8.35 11 11.25"
                    opacity=".8"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M9.5 20v2a.75.75 0 0 0 1.5 0v-2zm5.5 0h-1.5v2a.75.75 0 0 0 1.5 0z"
                  ></path>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M4.25 16a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m13.135-9.415l.256-.052a2.2 2.2 0 0 1 1.24.115c.69.277 1.446.328 2.165.148l.061-.015c.524-.131.893-.618.893-1.178v-2.13c0-.738-.664-1.282-1.355-1.109c-.396.1-.812.071-1.193-.081l-.073-.03a3.5 3.5 0 0 0-2-.185l-.449.09c-.54.108-.93.6-.93 1.17v6.953c0 .397.31.719.692.719a.706.706 0 0 0 .693-.72z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <Link
                  to="ContactUs"
                  href="#contact"
                  className="block text-lg text-sub-color hover:opacity-50 transition-all ease-linear duration-200"
                >
                  Contact
                </Link>
              </div>
              <div className="flex space-x-5 items-center">
                <FaUser className="size-6" />
                <Link
                  to="/dashboard"
                  href="#login"
                  className="block text-lg text-sub-color hover:opacity-50 transition-all ease-linear duration-200"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>

          {/* Background blur when menu is open */}
          {showMenu && (
            <div
              className="fixed inset-0 bg-opacity-100 bg-black/50 backdrop-blur-[1.5px]"
              style={{ zIndex: 999 }} // Ensure this is below the menu but above other content
              onClick={toggleMenu}
            ></div>
          )}
        </section>
      </header>
    </>
  );
};

export default Header;
