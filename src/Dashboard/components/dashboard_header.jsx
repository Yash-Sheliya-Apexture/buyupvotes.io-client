import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import rocket from "../../assets/Images/rocket-1.png";
import { FaAngleDown } from "react-icons/fa6";
import skybackground from "../../assets/Images/blue-background.png";
import axios from "axios";

const Dashboard_header = () => {
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

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    navigate("/signin");
  };

  return (
    <header className="sticky top-0 z-10 bg-white">
      <div className="flex items-center justify-end p-6 space-x-2 lg:space-x-4">
        {/* Dropdown */}
        <div className="relative" ref={dropdownRef}>
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
              className={`text-white ml-2 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          <div
            className={`absolute min-w-80 overflow-hidden top-12 right-0 w-full bg-gradient-to-r from-[#fef2f0af] shadow-md bg-white rounded-[14px] border border-gray-border z-10 transform transition-all duration-300 ease-in-out ${isDropdownOpen
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
                <div className="px-4 py-4 space-y-2 cursor-pointer">
                  <span className="text-sub-color font-medium text-[16px]">
                    {user.firstName || "Guest"}
                  </span>
                  <p className="text-[#403633] font-medium text-[16px]">
                    {user.email || "No email found"}
                  </p>
                </div>
              ) : (
                <span className="px-4 font-medium text-sub-color text-small">
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
                  className="px-4 py-2 hover:bg-[#919eab14] rounded-full transition-all ease-in duration-150 text-[#FF5D3A] font-bold tracking-wide cursor-pointer"
                  onClick={handleSignOut}
                >
                  Sign Out
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Dashboard_header;

