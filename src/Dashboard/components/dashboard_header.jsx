import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import rocket from "../../assets/Images/rocket-1.png";
import { FaAngleDown } from "react-icons/fa6";
import skybackground from "../../assets/Images/blue-background.png";
// import axios from "axios"; // Import Axios

const Dashboard_header = () => {
  const [showTooltip, setShowTooltip] = useState(false); // Tooltip state
  const [showMenu, setShowMenu] = useState(false); // Menu toggle state for small screens
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [error, setError] = useState(null); // Define error state
  const [user, setUser] = useState(null); // User state to store the user's data
  const [loading, setLoading] = useState(true); // Add loading state to manage loading status

  const navigate = useNavigate(); // Initialize navigate hook

  // Access the API URL using Vite-specific syntax
  const apiUrl = import.meta.env.VITE_API_BASE_URL; // Correct way to access Vite environment variables

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          setLoading(true); // Set loading to true when starting to fetch user data
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
          setLoading(false); // Set loading to false after fetching is done
        }
      } else {
        setLoading(false); // Set loading to false if there is no token
      }
    };

    fetchUserData();
  }, [apiUrl]);

  const toggleTooltip = () => {
    setShowTooltip((prev) => !prev); // Toggle tooltip visibility
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev); // Toggle mobile menu
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle Sign Out
  const handleSignOut = () => {
    // Clear the authentication token and user data from localStorage
    localStorage.removeItem("authToken");

    // Redirect user to the login page after signing out
    navigate("/signin");
  };

  return (
    /* Header Part Start */
    <section className="container relative flex items-center justify-end p-2 space-x-2 lg:space-x-4 lg:p-4">
      {/* Country Icon */}
      <button className="relative" onClick={toggleTooltip}>
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

      {/* Icon Day */}
      <span className="svg-color icon-set"></span>

      <div className="relative">
        {/* Dropdown Button */}
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

        {/* Dropdown Menu */}

        <div
          className={`absolute overflow-hidden top-12 right-0 w-[100%] bg-gradient-to-t from-pink-100/50 bg-white rounded-[12px] border border-gray-200 z-10 transform transition-all duration-300 ease-in-out ${
            isDropdownOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-10 pointer-events-none"
          }`}
          style={{
            backgroundImage: `${skybackground}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <ul className="text-sm text-[#2D2624]">
            {/* Display User Info if Available */}
            {user ? (
              <li className="px-4 py-2 cursor-pointer">
                <span>{user.firstName}</span>
                <p>{user.email}</p>
              </li>
            ) : (
              <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                <span className="">firstName</span>
                <p>email</p>
              </li>
            )}
            <hr className="border-t border-dashed " />
            <li className="px-4 py-2 cursor-pointer hover:bg-[#919eab14] rounded-full">
              <Link to="/" className="block">
                Home
              </Link>
            </li>
            <li
              className="px-4 py-2 cursor-pointer hover:bg-[#919eab14] rounded-full"
              onClick={() => alert("Setting Menu")}
            >
              Settings
            </li>
            <hr className="border-t border-dashed " />
            <li
              className="px-4 py-2 hover:bg-gray-100 text-[#FF5630] font-bold cursor-pointer"
              onClick={handleSignOut} // Handle sign out on click
            >
              Sign Out
            </li>
          </ul>
        </div>
      </div>
    </section>
    /* Header Part End */
  );
};

export default Dashboard_header;
