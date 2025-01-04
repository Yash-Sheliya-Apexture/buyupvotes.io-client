// import React, { useEffect, useState } from "react";
// import { FaUpRightFromSquare } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import Button from "../Dashboard/components/Button";
// import images from "../assets/websiteImages/index"; // Import the central images file

// const HeroSection = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // User login state

//   useEffect(() => {
//     // Check if there's a token or user info in localStorage to determine login status
//     const authToken = localStorage.getItem("authToken"); // or localStorage.getItem("user");
//     if (authToken) {
//       setIsLoggedIn(true); // If token exists, user is logged in
//     } else {
//       setIsLoggedIn(false); // If no token, user is not logged in
//     }
//   }, []);

//   return (
//     <section
//       className="hero-section relative h-[550px] overflow-hidden bg-no-repeat bg-center bg-cover flex items-center justify-center z-0"
//       style={{
//         background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${images.overlay_3})`,
//       }}
//     >
//       <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row">
//         {/* Leftside */}
//         <div className="flex flex-col space-y-8 text-center lg:w-1/2 lg:text-start">
//           <h1 className="font-bold tracking-[10px] text-xlarge md:text-5xl lg:text-6xl text-transparent text-stroke bg-clip-text bg-gradient-to-tl from-main-color to-[#FF9D00] lg:mt-0 -mt-20">
//             Buy Reddit Upvotes
//           </h1>
//           <p className="text-base font-medium text-main-color">
//             Boost your posts, dominate your conversion
//           </p>
//           <div className="flex flex-col space-y-2 text-start">
//             <p className="flex items-center text-xs font-medium lg:text-small text-sub-color">
//               <span className="mr-2 text-base text-main-color">✔</span>
//               Get trending by sending instant upvotes too any post or comments.
//             </p>
//             <p className="flex items-center text-xs font-medium lg:text-small text-sub-color">
//               <span className="mr-2 text-base text-main-color">✔</span>
//               Take control of comments on your posts by upvotes and downvotes
//             </p>
//           </div>
//           <div className="flex flex-row items-center justify-center space-x-2 lg:justify-start">
//             {isLoggedIn ? (
//               // If user is logged in, show Dashboard
//               <Link to="/dashboard">
//                 <Button>dashboard</Button>
//               </Link>
//             ) : (
//               <>
//                 <Button to="/signin">Sign in</Button>
//                 <Button to="/signup">
//                   Sign up
//                   <FaUpRightFromSquare className="ml-1 absolute right-2.5 top-2.5" />
//                 </Button>
//               </>
//             )}
//           </div>
//         </div>

//         {/* RightSide */}
//         <div className="relative items-center justify-center hidden lg:w-1/2 lg:mt-0 lg:flex">
//           <div className="hero-image-wrap absolute flex -skew-x-[20deg] -space-x-10">
//             <div className="relative flex items-center justify-center hero-image">
//               <img src={images.light2} alt="Image 1" className="w-2/3" />
//             </div>
//             <div className="relative hero-image">
//               <img src={images.light1} alt="Image 2" className="w-3/4" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import images from "../assets/websiteImages/index"; // Import the central images file
import dashboard from '../assets/Images/dashboard.png'
const HeroSection = () => {
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
  return (
    <section className="relative overflow-hidden">
      <div className="px-14">
            <div className="absolute inset-0 ">
              <img src={images.overlay_1} className="w-full" alt="" />
            </div>
          {/* Hero Content */}
        <div className="container">
          <div className="py-[100px] z-10 relative">
            <div className="flex justify-center">
              <div className="max-w-[750px] text-center flex justify-center flex-col items-center">
                <h1 className="mb-6 text-4xl font-semibold md:text-5xl lg:text-[100px] font-BasierSquare tracking-[-3px]">
                  Boost Your Reddit
                  <span className="tracking-[-3px] text-transparent bg-clip-text bg-gradient-to-r from-[#ffb087] via-[#ff6518] to-main-color px-3">
                    Upvotes.
                  </span>
                </h1>
                <p className="mb-8 md:text-lg lg:text-2xl font-BasierSquare text-[#333b52] w-">
                  Gain real engagement and grow your online audience quickly with our
                  proven strategies and tools.
                </p>

                <div className="flex flex-row items-center justify-center gap-5 lg:justify-start">
                  {isLoggedIn ? (
                    // If user is logged in, show Dashboard
                    <Link to="/dashboard">
                      <button className="flex items-center justify-center gap-2 px-10 py-4 text-xl font-medium text-white transition-colors duration-300 border-2 bg-main-color rounded-xl hover:bg-orange-600 w-60 border-main-color hover:border-orange-600">
                        Get Started Now
                      </button>
                    </Link>
                  ) : (
                    <>
                      <Link to="/signin">
                        <button className="flex items-center justify-center gap-2 px-10 py-4 text-xl font-medium text-white transition-colors duration-300 border-2 bg-main-color rounded-xl hover:bg-orange-600 w-60 border-main-color hover:border-orange-600">
                          Get Started Now
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;