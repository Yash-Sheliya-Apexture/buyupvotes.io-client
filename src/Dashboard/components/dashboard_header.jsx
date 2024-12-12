import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import rocket from "../../assets/Images/rocket-1.png";
import { FaAngleDown } from "react-icons/fa6";
import skybackground from "../../assets/Images/blue-background.png";
import axios from "axios";

const Dashboard_header = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const dropdownRef = useRef(null); // Ref for the dropdown menu

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          setLoading(true);
          const response = await axios.get(`${API_BASE_URL}/auth/user`, {
            headers: { Authorization: `Bearer ${token}` },
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
  }, [API_BASE_URL]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleTooltip = () => setShowTooltip(!showTooltip);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    navigate("/signin");
  };

  return (
    <section className="container relative flex items-center justify-end p-2 space-x-2 lg:space-x-4 lg:p-4">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute right-80 top-14 bg-[#dceff5] border border-gray-300 rounded-[10px] px-4 py-1.5 z-10">
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

      {/* Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          className="px-6 py-2.5 rounded-full bg-[#FF5700] flex items-center relative focus:outline-none"
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
          className={`absolute min-w-80 overflow-hidden top-12 right-0 w-full bg-gradient-to-r from-[#fef2f0af] shadow-md bg-white rounded-[14px] border border-gray-border z-10 transform transition-all duration-300 ease-in-out ${
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
          <div className="text-sm text-[#2D2624] space-y-1">
            {user ? (
              <div className="px-4 py-2 space-y-2 cursor-pointer">
                <span className="text-sub-color font-medium text-[16px]">
                  {user.firstName || "Guest"}
                </span>
                <p className="text-[#403633] font-medium text-[16px]">
                  {user.email || "No email found"}
                </p>
              </div>
            ) : (
              <span className="text-[#2D2624] font-medium text-small px-4">
                No data found here
              </span>
            )}
            <hr className="border-t border-dashed" />
            <div className="p-2">
              <ul className="space-y-0.5">
                <li>
                  <Link to="/dashboard" className="px-4 py-2 cursor-pointer hover:bg-[#919eab14] rounded-large transition-all ease-in duration-150 block">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard/user/account/" className="px-4 py-2 cursor-pointer hover:bg-[#919eab14] rounded-large transition-all ease-in duration-150 block">Settings</Link>
                </li>
              </ul>
            </div>
            <hr className="border-t border-dashed " />
            <div className="p-2 ">
              <div
                className="px-4 py-2 hover:bg-[#919eab14] rounded-full transition-all ease-in duration-150 text-[#FF5D3A] font-black tracking-wide cursor-pointer"
                onClick={handleSignOut}
              >
                Sign Out
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard_header;
