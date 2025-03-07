// import React from "react";
// import girl from "../../../assets/Images/girl.png";
// import Slider from "../../pages/Slider";
// import { Link } from "react-router-dom";
// import heroimage from "../../../assets/Images/Hero.svg";
// import { useAuth } from "../../../auth/AuthContext"; // Import AuthContext
// import useCurrentBalance from "../hooks/useCurrentBalance";
// import TokenService from "../../../utils/TokenService";

// const HeroSection = () => {
//   const { user, loading: authLoading } = useAuth(); // Access auth context correctly
//   const token = TokenService.getToken();

//   // Retrieve API_BASE_URL from environment variables
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   const {
//     currentBalance,
//     loading: balanceLoading,
//     error,
//   } = useCurrentBalance(API_BASE_URL, token);

//   // Combine loading states for a better user experience
//   const isLoading = authLoading || balanceLoading;

//   return (
//     <>
//       <section className="Hero-Image flex flex-col gap-4 lg:flex-row">
//         {/* HeroCard Components */}
//         <div className="relative flex flex-col w-full p-4 overflow-hidden lg:flex-row lg:w-full bg-light-brown rounded-small lg:p-6">
//           {/* Left Side - Text */}
//           <div className="flex justify-center w-full lg:w-1/2 lg:mt-5">
//             <div className="mb-10 text-center space-y-5 lg:text-start">
//               {isLoading ? (
//                 <h2 className="font-bold text-black lg:text-large text-2xl flex items-center gap-2">
//                   Loading...
//                 </h2>
//               ) : !user ? (
//                 <h2 className="font-bold text-main-color lg:text-large text-[26px]">
//                   Welcome back, Guest 👋
//                 </h2>
//               ) : (
//                 <>
//                   <h2 className="mb-6 text-3xl font-bold md:text-5xl font-BasierSquare">
//                     Welcome back, <br />
//                     <span className="pe-3 text-transparent bg-clip-text bg-gradient-to-r from-[#ffb087] via-[#ff6518] to-main-color">
//                       {user?.firstName}.
//                     </span>
//                     <span className="text-3xl">👋</span>
//                   </h2>
//                 </>
//               )}

//               {/* Display balance or error messages */}
//               {error ? (
//                 <p className="text-red-500">Error: {error}</p>
//               ) : (
//                 <p className="text-sub-color leading-7 text-center lg:text-left text-lg font-BasierSquare">
//                   {user ? `You have ${currentBalance || 0} on your balance. Continue
//                   boosting your Reddit experience by placing an order now !` : "Continue boosting your Reddit experience by placing an order now !"}
//                 </p>
//               )}

//               <div className="flex justify-center lg:justify-start lg:pt-4">
//                 <Link
//                   to="/dashboard/upvoteorder"
//                   className="flex items-center justify-center gap-2 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border-2 rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
//                 >
//                   Order Now
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Image */}
//           <div className="relative flex items-center justify-center w-full lg:w-1/2">
//             <img
//               src={heroimage}
//               alt="HeroImage"
//               className="md:h-56 h-52 lg:ml-20"
//             />
//             <img
//               src={girl}
//               alt="Girl Image"
//               className="absolute -top-4 h-56 md:h-72 right-4 md:top-auto md:relative md:right-24"
//             />
//           </div>
//         </div>

//         {/* Slider Components */}
//         <div className="w-full lg:w-1/3 hidden sm:block">
//           <Slider />
//         </div>
//       </section>
//     </>
//   );
// };

// export default HeroSection;



// import React from "react";
// import girl from "../../../assets/Images/girl.png";
// import Slider from "../../pages/Slider";
// import { Link } from "react-router-dom";
// import heroimage from "../../../assets/Images/Hero.svg";
// import { useAuth } from "../../../auth/AuthContext";
// import useCurrentBalance from "../hooks/useCurrentBalance";
// import TokenService from "../../../utils/TokenService";

// const HeroSection = () => {
//   const { user, loading: authLoading } = useAuth();
//   const token = TokenService.getToken();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   const {
//     currentBalance,
//     loading: balanceLoading, // We still need this for error handling, even if we don't show a "Loading..." message
//     error,
//   } = useCurrentBalance(API_BASE_URL, token);

//   return (
//     <>
//       <section className="Hero-Image flex flex-col gap-4 lg:flex-row">
//         <div className="relative flex flex-col w-full p-4 overflow-hidden lg:flex-row lg:w-full bg-light-brown rounded-small lg:p-6">
//           {/* Left Side - Text */}
//           <div className="flex justify-center w-full lg:w-1/2 lg:mt-5">
//             <div className="mb-10 text-center space-y-5 lg:text-start">
//               {/* Welcome Message (Prioritize User's Name) */}
//               {authLoading ? (
//                 <h2 className="font-bold text-black lg:text-large text-2xl flex items-center gap-2">
//                   Loading...
//                 </h2>
//               ) : !user ? (
//                 <h2 className="font-bold text-main-color lg:text-large text-[26px]">
//                   Welcome back, Guest 👋
//                 </h2>
//               ) : (
//                 <>
//                   <h2 className="mb-6 text-3xl font-bold md:text-5xl font-BasierSquare">
//                     Welcome back, <br />
//                     <span className="pe-3 text-transparent bg-clip-text bg-gradient-to-r from-[#ffb087] via-[#ff6518] to-main-color">
//                       {user?.firstName}.
//                     </span>
//                     <span className="text-3xl">👋</span>
//                   </h2>
//                 </>
//               )}

//               {/* Display balance or error messages */}
//               {error ? (
//                 <p className="text-red-500">Error: {error}</p>
//               ) : (
//                 user && (
//                   <p className="text-sub-color leading-7 text-center lg:text-left text-lg font-BasierSquare">
//                     You have {currentBalance || 0} on your balance. Continue
//                     boosting your Reddit experience by placing an order now!
//                   </p>
//                 )
//               )}

//               <div className="flex justify-center lg:justify-start lg:pt-4">
//                 <Link
//                   to="/dashboard/upvoteorder"
//                   className="flex items-center justify-center gap-2 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border-2 rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
//                 >
//                   Order Now
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Image */}
//           <div className="relative flex items-center justify-center w-full lg:w-1/2">
//             <img
//               src={heroimage}
//               alt="HeroImage"
//               className="md:h-56 h-52 lg:ml-20"
//             />
//             <img
//               src={girl}
//               alt="Girl Image"
//               className="absolute -top-4 h-56 md:h-72 right-4 md:top-auto md:relative md:right-24"
//             />
//           </div>
//         </div>

//         {/* Slider Components */}
//         <div className="w-full lg:w-1/3 hidden sm:block">
//           <Slider />
//         </div>
//       </section>
//     </>
//   );
// };

// export default HeroSection;


// HeroSection.jsx
import React from "react";
import girl from "../../../assets/Images/girl.png";
import Slider from "../../pages/Slider";
import { Link } from "react-router-dom";
import heroimage from "../../../assets/Images/Hero.svg";
import { useAuth } from "../../../auth/AuthContext";
import { useBalance } from "../../../context/BalanceContext"; // Import useBalance
import TokenService from "../../../utils/TokenService";

const HeroSection = () => {
  const { user, loading: authLoading } = useAuth();
  const token = TokenService.getToken();
  const {
    currentBalance,
    loading: balanceLoading, // We still need this for error handling, even if we don't show a "Loading..." message
    error,
  } = useBalance(); // Use useBalance

  return (
    <>
      <section className="Hero-Image flex flex-col gap-4 lg:flex-row">
        <div className="relative flex flex-col w-full p-4 overflow-hidden lg:flex-row lg:w-full bg-light-brown rounded-small lg:p-6">
          {/* Left Side - Text */}
          <div className="flex justify-center w-full lg:w-1/2 lg:mt-5">
            <div className="mb-10 text-center space-y-5 lg:text-start">
              {/* Welcome Message (Prioritize User's Name) */}
              {authLoading ? (
                <h2 className="font-bold text-black lg:text-large text-2xl flex items-center gap-2">
                  Loading...
                </h2>
              ) : !user ? (
                <h2 className="font-bold text-main-color lg:text-large text-[26px]">
                  Welcome back, Guest 👋
                </h2>
              ) : (
                <>
                  <h2 className="mb-6 text-3xl font-bold md:text-5xl font-BasierSquare">
                    Welcome back, <br />
                    <span className="pe-3 text-transparent bg-clip-text bg-gradient-to-r from-[#ffb087] via-[#ff6518] to-main-color">
                      {user?.firstName}.
                    </span>
                    <span className="text-3xl">👋</span>
                  </h2>
                </>
              )}

              {/* Display balance or error messages */}
              {error ? (
                <p className="text-red-500">Error: {error}</p>
              ) : (
                user && (
                  <p className="text-sub-color leading-7 text-center lg:text-left text-lg font-BasierSquare">
                    You have {currentBalance || 0} on your balance. Continue
                    boosting your Reddit experience by placing an order now!
                  </p>
                )
              )}

              <div className="flex justify-center lg:justify-start lg:pt-4">
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
          <div className="relative flex items-center justify-center w-full lg:w-1/2">
            <img
              src={heroimage}
              alt="HeroImage"
              className="md:h-56 h-52 lg:ml-20"
            />
            <img
              src={girl}
              alt="Girl Image"
              className="absolute -top-4 h-56 md:h-72 right-4 md:top-auto md:relative md:right-24"
            />
          </div>
        </div>

        {/* Slider Components */}
        <div className="w-full lg:w-1/3 hidden sm:block">
          <Slider />
        </div>
      </section>
    </>
  );
};

export default HeroSection;