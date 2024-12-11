import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import rocket from "../../assets/Images/rocket-1.png";
import { FaAngleDown } from "react-icons/fa6";
import skybackground from "../../assets/Images/blue-background.png";
import { space } from "postcss/lib/list";

const Dashboard_header = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const dropdownRef = useRef(null); // Ref for the dropdown menu

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          setLoading(true);
          const response = await axios.get(`${apiUrl}/auth/user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.status === 200) {
            setUser(response.data);
          } else {
            setError("Failed to fetch user data");
          }
        } catch (err) {
          setError("Error fetching user data");
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUserData();

    // Add a click listener to close the dropdown if clicked outside
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [apiUrl]);

  const toggleTooltip = () => setShowTooltip(!showTooltip);
  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    navigate("/signin");
  };

  return (
    <section className="relative flex items-center justify-end p-2 space-x-2 lg:space-x-4 lg:p-4">
      {/* Country Icon */}
      <button className="relative hidden  " onClick={toggleTooltip}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className="rounded-md hover:blur-[1px] hover:scale-110 transition-all ease-linear duration-200"
          width="24"
          height="24"
          viewBox="0 0 32 24"
        >
          <g fill="none">
            <path fill="#F7FCFF" d="M0 0h32v24H0z"></path>
            <path
              fill="#E31D1C"
              d="M0 14.667v2h32v-2zm0 3.666v2h32v-2zm0-11v2h32v-2zM0 22v2h32v-2zm0-11v2h32v-2zM0 0v2h32V0zm0 3.667v2h32v-2z"
            ></path>
            <path fill="#2E42A5" d="M0 0h20v13H0z"></path>
          </g>
        </svg>
      </button>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute right-80 top-14 bg-[#dceff5] border border-gray-300 rounded-medium px-4 py-1.5 z-10">
          <div className="flex justify-between ap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="rounded-md"
              width="24"
              height="24"
              viewBox="0 0 32 24"
            >
              <g fill="none">
                <path fill="#F7FCFF" d="M0 0h32v24H0z"></path>
                <path
                  fill="#E31D1C"
                  d="M0 14.667v2h32v-2zm0 3.666v2h32v-2zm0-11v2h32v-2zM0 22v2h32v-2zm0-11v2h32v-2zM0 0v2h32V0zm0 3.667v2h32v-2z"
                ></path>
                <path fill="#2E42A5" d="M0 0h20v13H0z"></path>
              </g>
            </svg>
            <p className="text-sm text-black">English</p>
          </div>
        </div>
      )}

      {/* Icon Day */}
      {/* <span className="svg-color icon-set"></span> */}

      <div className="relative" ref={dropdownRef}>
        {/* Dropdown Button */}
        <button
          className="px-6 py-2.5 rounded-full bg-main-color flex items-center relative focus:outline-none"
          onClick={toggleDropdown}
        >
          <img
            src={rocket}
            alt="Rocket Icon"
            className="absolute top-0 left-0 h-10 animate-rocket"
          />
          <p className="ml-6 font-bold text-white">
            Balance:{" "}
            <span className="underline underline-offset-1">100 Votes</span>
          </p>
          <FaAngleDown
            className={`text-white ml-2 transform transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`absolute overflow-hidden top-12 pb-2 right-0 w-full shadow-md bg-white rounded-[14px] border border-gray-border z-10 transform transition-all duration-300 ease-in-out ${
            isDropdownOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-10 pointer-events-none"
          }`}
          style={{
            backgroundImage: `url(${skybackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <ul className="text-sm text-sub-color space-y-1">
            {user ? (
              <li className="px-4 py-2 cursor-pointer space-y-2">
                <span className="text-sub-color font-medium text-small">
                  {user.firstName}
                </span>
                <p className="text-active font-medium text-small">
                  {user.email}
                </p>
              </li>
            ) : (
              <span className="text-sub-color font-medium text-small px-4">
                No data found here
              </span>
            )}
            <hr className="border-t border-dashed" />

            <li className="px-4 py-2 cursor-pointer hover:bg-brown-hover rounded-large transition-all ease-in duration-150">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-brown-hover rounded-large transition-all ease-in duration-150">
              Settings
            </li>

            <hr className="border-t border-dashed " />
            <li
              className="px-4 py-2 hover:bg-brown-hover rounded-full transition-all ease-in duration-150 text-main-color font-black tracking-wide cursor-pointer"
              onClick={handleSignOut}
            >
              Sign Out
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard_header;
