import React, { useEffect, useState } from "react";
import image1 from "../assets/Images/slide13.png";
import image2 from "../assets/Images/slide2.png";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
    <section className="">
      <div className="flex items-center justify-center h-screen p-6 bg-gradient-to-b from-white to-gray-100 lg:pb-0 pb-60">
        <div className="flex flex-col items-center lg:flex-row max-w-7xl lg:items-start">
          <div className="lg:w-[50%] space-y-8 mt-56 lg:mt-28">
            <h1 className="font-black tracking-[12px] text-4xl text-center lg:text-6xl text-transparent text-stroke bg-clip-text bg-gradient-to-tl from-[#FF5E00] to-[#FF9D00]">
              Buy Reddit Upvotes
            </h1>
            <p className="text-[20px] text-[#FF5A04] font-bold text-center">
              Boost your posts, dominate your conversion
            </p>
            <div className="flex flex-col items-center space-y-2">
              <p className="flex items-center text-[14px] lg:text-[16px] font-medium text-[#2d2624]">
                <span className="lg:w-2 lg:h-2 h-1.5 w-1.5 bg-[#2d2624] rounded-full mr-3"></span>
                Get trending by sending instant upvotes to any post or comments.
              </p>
              <p className="flex items-center text-[14px] lg:text-[16px] font-medium text-[#2d2624]">
                <span className="lg:w-2 lg:h-2 h-1.5 w-1.5 bg-[#2d2624] rounded-full mr-3"></span>
                Take control of comments on your posts by upvotes and downvotes
              </p>
            </div>
            <div className="flex flex-col items-center justify-center pt-5 space-y-1">
              {isLoggedIn ? (
                // If user is logged in, show Dashboard
                <Link
                  to="/dashboard"
                  className="px-8 py-1.5 text-[rgb(255,87,0)] border border-solid font-bold border-[rgb(255,87,0)] rounded-full hover:bg-orange-500 hover:text-white transition"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="px-20 py-1.5 text-[rgb(255,87,0)] border border-solid font-bold border-[rgb(255,87,0)] rounded-full hover:bg-orange-500 hover:text-white transition"
                  >
                    Sign-In
                  </Link>
                  <Link
                    to="/signup"
                    className="text-[#2d2624] font-bold rounded-full flex items-center transition-all hover:border-white"
                  >
                    Sign up
                    <FaUpRightFromSquare className="ml-1" />
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="lg:w-[50%] lg:mt-0 relative hidden lg:block">
            <div className="flex flex-row space-y-6">
              <div className="flex mt-10">
                <img
                  src={image1}
                  alt="Example 1"
                  className="w-[20%] -skew-x-[26deg]"
                />
                <img
                  src={image2}
                  alt="Example 2"
                  className="w-[40%] h-auto -skew-x-[26deg]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
