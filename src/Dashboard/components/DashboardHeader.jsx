// // DashboardHeader.js (Logic and Data Fetching)
// import React, { useState, useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { CgMenuLeftAlt } from "react-icons/cg";
// import logo1 from "../../assets/Images/logo-mini.png";
// import MyAccountTab from "../components/MyAccountTab";
// import useCurrentBalance from "../components/hooks/useCurrentBalance";
// import TokenService from "../../utils/TokenService";
// import axios from "axios";

// const DashboardHeader = ({ toggleSidebarVisibility }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   const token = TokenService.getToken();
//   const { currentBalance, loading, error } = useCurrentBalance(
//     API_BASE_URL,
//     token
//   );
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (!token) {
//         return;
//       }

//       try {
//         const headers = { Authorization: `Bearer ${token}` };

//         // Fetch User Data
//         const userResponse = await axios.get(`${API_BASE_URL}/auth/user`, {
//           headers,
//         });
//         console.log("/auth/user 3")
//         if (userResponse.status !== 200) {
//           console.error("Failed to fetch user data");
//           return;
//         }
//         setUser(userResponse.data);
//       } catch (userDataError) {
//         console.error("Error fetching user data:", userDataError);
//       }
//     };

//     fetchUserData();
//   }, [API_BASE_URL, token]);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownRef]);

//   const dropdownVariants = {
//     initial: { opacity: 0, y: -10, scale: 0.95 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.2, ease: "easeInOut" },
//     },
//     exit: {
//       opacity: 0,
//       y: -10,
//       scale: 0.95,
//       transition: { duration: 0.15, ease: "easeInOut" },
//     },
//   };

//   const handleSignOut = () => {
//     TokenService.removeToken();
//     navigate("/signin");
//     setIsOpen(false);
//   };

//   const handleAddFundsClick = () => {
//     setIsOpen(false); // Close the dropdown
//     navigate("/dashboard/pricing");
//   };

//   const handleMenuItemClick = () => {
//     // Function to close the dropdown
//     setIsOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-10 w-full bg-white border-b drop-shadow-md">
//       <div className="flex items-center justify-between p-3 xl:justify-end gap-4">
//         <div className="block xl:hidden">
//           <div className="flex items-center gap-4">
//             <button
//               className="z-50 rounded-full"
//               onClick={toggleSidebarVisibility}
//             >
//               <CgMenuLeftAlt className="rounded-md cursor-pointer text-main-color size-8" />
//             </button>
//             <Link to="/">
//               <img
//                 src={logo1}
//                 alt="Collapsed Logo"
//                 className="h-6 transition-all duration-300 ease-in-out"
//               />
//             </Link>
//           </div>
//         </div>

//         {/* Account tab */}
//         <MyAccountTab
//           isOpen={isOpen}
//           toggleDropdown={toggleDropdown}
//           dropdownRef={dropdownRef}
//           dropdownVariants={dropdownVariants}
//           user={user}
//           currentBalance={currentBalance}
//           loading={loading}
//           handleSignOut={handleSignOut}
//           handleAddFundsClick={handleAddFundsClick}
//           onMenuItemClick={handleMenuItemClick} // Pass the new function
//         />
//       </div>
//     </header>
//   );
// };

// export default DashboardHeader;


import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgMenuLeftAlt } from "react-icons/cg";
import logo1 from "../../assets/Images/logo-mini.png";
import MyAccountTab from "../components/MyAccountTab";
import useCurrentBalance from "../components/hooks/useCurrentBalance";
import TokenService from "../../utils/TokenService";
import { useAuth } from "../../auth/AuthContext"; // Import AuthContext

const DashboardHeader = ({ toggleSidebarVisibility }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const token = TokenService.getToken();
  const { currentBalance, loading, error } = useCurrentBalance(
    API_BASE_URL,
    token
  );
  const { user } = useAuth(); // Access user from AuthContext

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const dropdownVariants = {
    initial: { opacity: 0, y: -10, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeInOut" },
    },
  };

  const handleSignOut = () => {
    TokenService.removeToken();
    navigate("/signin");
    setIsOpen(false);
  };

  const handleAddFundsClick = () => {
    setIsOpen(false); // Close the dropdown
    navigate("/dashboard/pricing");
  };

  const handleMenuItemClick = () => {
    // Function to close the dropdown
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-10 w-full bg-white border-b drop-shadow-md">
      <div className="flex items-center justify-between p-3 xl:justify-end gap-4">
        <div className="block xl:hidden">
          <div className="flex items-center gap-4">
            <button
              className="z-50 rounded-full"
              onClick={toggleSidebarVisibility}
            >
              <CgMenuLeftAlt className="rounded-md cursor-pointer text-main-color size-8" />
            </button>
            <Link to="/">
              <img
                src={logo1}
                alt="Collapsed Logo"
                className="h-6 transition-all duration-300 ease-in-out"
              />
            </Link>
          </div>
        </div>

        {/* Account tab */}
        <MyAccountTab
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
          dropdownRef={dropdownRef}
          dropdownVariants={dropdownVariants}
          user={user}
          currentBalance={currentBalance}
          loading={loading}
          handleSignOut={handleSignOut}
          handleAddFundsClick={handleAddFundsClick}
          onMenuItemClick={handleMenuItemClick} // Pass the new function
        />
      </div>
    </header>
  );
};

export default DashboardHeader;