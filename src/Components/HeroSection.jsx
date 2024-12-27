import React, { useEffect, useState } from "react";
import light1 from "../assets/Images/light1.png";
import light2 from "../assets/images/light2.png";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../Dashboard/components/Button";
import overlay_3 from "../assets/images/overlay_3.jpg";

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
      className="hero-section relative h-[550px] overflow-hidden bg-no-repeat bg-center bg-cover flex items-center justify-center"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${overlay_3})`,
      }}
    >
      <div className="container flex flex-col items-center justify-center px-4 mx-auto lg:flex-row max-w-7xl">
        {/* Leftside */}
        <div className="flex flex-col space-y-8 text-center lg:w-1/2 lg:text-start">
          <h1 className="font-bold tracking-[10px] text-4xl lg:text-6xl text-transparent text-stroke bg-clip-text bg-gradient-to-tl from-main-color to-[#FF9D00] lg:mt-0 -mt-6">
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
                  className="mybtn"
                  style={{ backgroundColor: "#FF5700", color: "#FFF" }}
                >
                  <Link to="/dashboard/FundPrice">Sign in</Link>
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
              <img src={light2} alt="Image 1" className="w-2/3" />
            </div>
            <div className="relative hero-image">
              <img src={light1} alt="Image 2" className="w-3/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
