import React, { useEffect, useState } from "react";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../Dashboard/components/Button";
import images from "../assets/websiteImages/index"; // Import the central images file

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
    <section
      className="hero-section relative h-[550px] overflow-hidden bg-no-repeat bg-center bg-cover flex items-center justify-center z-0"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${images.overlay_3})`,
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center container mx-auto">
        {/* Leftside */}
        <div className="lg:w-1/2 space-y-8 text-center lg:text-start flex flex-col">
          <h1 className="font-bold tracking-[10px] text-xlarge md:text-5xl lg:text-6xl text-transparent text-stroke bg-clip-text bg-gradient-to-tl from-main-color to-[#FF9D00] lg:mt-0 -mt-20">
            Buy Reddit Upvotes
          </h1>
          <p className="text-base font-medium text-main-color">
            Boost your posts, dominate your conversion
          </p>
          <div className="flex flex-col space-y-2 text-start">
            <p className="flex items-center text-xs font-medium lg:text-small text-sub-color">
              <span className="mr-2 text-base text-main-color">✔</span>
              Get trending by sending instant upvotes too any post or comments.
            </p>
            <p className="flex items-center text-xs font-medium lg:text-small text-sub-color">
              <span className="mr-2 text-base text-main-color">✔</span>
              Take control of comments on your posts by upvotes and downvotes
            </p>
          </div>
          <div className="flex flex-row items-center justify-center space-x-2 lg:justify-start">
            {isLoggedIn ? (
              // If user is logged in, show Dashboard
              <Link to="/dashboard">
                <Button>dashboard</Button>
              </Link>
            ) : (
              <>
                {/* SignIn And SignUp */}
                <button
                  style={{ backgroundColor: "#FF5700", color: "#fff" }}
                  className="mybtn"
                >
                  <Link to="/signin">Sign in</Link>
                </button>
                <Button>
                  <Link to="/signup">
                    Sign up
                    <FaUpRightFromSquare className="ml-1 absolute right-2.5 top-2.5" />
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>

        {/* RightSide */}
        <div className="relative items-center justify-center hidden lg:w-1/2 lg:mt-0 lg:flex">
          <div className="hero-image-wrap absolute flex -skew-x-[20deg] -space-x-10">
            <div className="relative flex items-center justify-center hero-image">
              <img src={images.light2} alt="Image 1" className="w-2/3" />
            </div>
            <div className="hero-image relative">
              <img src={images.light1} alt="Image 2" className="w-3/4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
