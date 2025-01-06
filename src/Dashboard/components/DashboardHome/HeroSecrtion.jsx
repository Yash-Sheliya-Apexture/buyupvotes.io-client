// import React, { useEffect, useState } from "react";
// import girl from "../../../assets/Images/girl.png";
// import Slider from "../../pages/Slider";
// import { Link } from "react-router-dom";
// import axios from "axios"; // Make sure axios is imported
// import Button from "../Button";
// import heroimage from "../../../assets/Images/Hero.svg";
// import { FaSpinner } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
// import { FiShoppingCart } from "react-icons/fi";

// const HeroSection = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false); // Loading state
//   const [error, setError] = useState(null); // Error state
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   // Fetch user data

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const token = localStorage.getItem("authToken");
//       if (token) {
//         try {
//           setLoading(true);
//           const response = await axios.get(`${API_BASE_URL}/auth/user`, {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           if (response.status === 200) {
//             setUser(response.data);
//           } else {
//             setError("Failed to fetch user data");
//           }
//         } catch (err) {
//           setError("Error fetching user data");
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setLoading(false);
//       }
//     };
//     fetchUserData();
//   }, [API_BASE_URL]);
//   return (
//     <>
//       <div className="flex flex-col gap-4 lg:flex-row">
//         {/* HeroCard Components */}
//         <div className="relative flex flex-col w-full p-4 overflow-hidden lg:flex-row lg:w-full bg-light-brown rounded-small lg:p-6">
//           {/* Left Side - Text */}
//           <div className="flex justify-center w-full lg:w-1/2">
//             <div className="mb-20 text-center space-y-5 lg:text-start max-w-[400px]">
//               {loading ? (
//                 <h2 className="font-bold text-dark-green lg:text-large text-[26px]">
//                   Loading...
//                 </h2>
//               ) : error ? (
//                 <h2 className="font-bold text-[#FF0000] text-large">{error}</h2>
//               ) : user ? (
//                 <>
//                   <h2 className="mb-6 text-5xl font-bold tracking-[-3px] md:text-7xl lg:text-5xl font-BasierSquare">
//                   Welcome back, <br />
//                     <span className="pe-3 tracking-[-3px] text-transparent bg-clip-text bg-gradient-to-r from-[#ffb087] via-[#ff6518] to-main-color">{user.firstName}.
//                     </span><icon className="text-3xl">👋</icon>
//                   </h2>
//                 </>
//               ) : (
//                 <h2 className="font-bold text-dark-green lg:text-large text-[26px]">
//                   Welcome back, Guest 👋
//                 </h2>
//               )}
//               <p className="text-[#333b52] max-w-[350px] text-lg font-BasierSquare">
//                 You have 100 upvotes remaining on your balance. Continue
//                 boosting your Reddit experience by placing an order!
//               </p>
//               <div className="flex justify-center lg:justify-start">
//                 <Link to="/dashboard/upvoteorder" className="flex items-center justify-center gap-2 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border-2 rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600">Order Now</Link>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Image */}
//           <div className="flex items-center justify-center w-full lg:w-1/2">
//             <div className="relative flex items-center justify-center w-auto">
//               <img src={heroimage} alt="HeroImage" className="h-56" />
//               <img
//                 src={girl}
//                 alt="Girl Image"
//                 className="absolute top-0 h-56 md:h-64 right-2 md:relative md:top-auto md:right-1/4"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Slider Components */}
//         <div className="w-full lg:w-1/3">
//           <Slider />
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroSection;



import React, { useEffect, useState } from "react";
import girl from "../../../assets/Images/girl.png";
import Slider from "../../pages/Slider";
import { Link } from "react-router-dom";
import axios from "axios";
import heroimage from "../../../assets/Images/Hero.svg";


const HeroSection = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
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
        console.error("Error fetching user data:", err); // Log the error
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [API_BASE_URL]);
  
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row">
        {/* HeroCard Components */}
        <div className="relative flex flex-col w-full p-4 overflow-hidden lg:flex-row lg:w-full bg-light-brown rounded-small lg:p-6">
          {/* Left Side - Text */}
          <div className="flex justify-center w-full lg:w-1/2">
            <div className="mb-20 text-center space-y-5 lg:text-start max-w-[400px]">
              {loading ? (
                <h2 className="font-bold text-dark-green lg:text-large text-[26px] flex items-center gap-2">
                  Loading...
                </h2>
              ) : error ? (
                <h2 className="font-bold text-[#FF0000] text-large">{error}</h2>
              ) : user ? (
                <>
                  <h2 className="mb-6 text-5xl font-bold tracking-[-3px] md:text-7xl lg:text-5xl font-BasierSquare">
                    Welcome back, <br />
                    <span className="pe-3 tracking-[-3px] text-transparent bg-clip-text bg-gradient-to-r from-[#ffb087] via-[#ff6518] to-main-color">
                      {user.firstName}.
                    </span>
                    <span className="text-3xl">👋</span> 
                  </h2>
                </>
              ) : (
                <h2 className="font-bold text-dark-green lg:text-large text-[26px]">
                  Welcome back, Guest 👋
                </h2>
              )}
              <p className="text-[#333b52] max-w-[350px] text-lg font-BasierSquare">
                You have 100 upvotes remaining on your balance. Continue
                boosting your Reddit experience by placing an order!
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link
                  to="/dashboard/upvoteorder"
                  className="flex items-center justify-center gap-2 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border-2 rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="relative flex items-center justify-center w-auto">
              <img src={heroimage} alt="HeroImage" className="h-56" />
              <img
                src={girl}
                alt="Girl Image"
                className="absolute top-0 h-56 md:h-64 right-2 md:relative md:top-auto md:right-1/4"
              />
            </div>
          </div>
        </div>

        {/* Slider Components */}
        <div className="w-full lg:w-1/3">
          <Slider />
        </div>
      </div>
    </>
  );
};

export default HeroSection;