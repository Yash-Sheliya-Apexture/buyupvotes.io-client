import React, { useEffect, useState } from "react";
import light_1 from "../assets/images/light_1 (1).png";
import light_2 from "../assets/images/light_2.png";
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
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl px-4 container mx-auto">
        {/* Leftside */}
        <div className="lg:w-1/2 space-y-8 text-center lg:text-start flex flex-col">
          <h1 className="font-bold tracking-[10px] text-4xl lg:text-6xl text-transparent text-stroke bg-clip-text bg-gradient-to-tl from-main-color to-[#FF9D00] lg:mt-0 -mt-6">
            Buy Reddit Upvotes
          </h1>
          <p className="text-base text-main-color font-medium">
            Boost your posts, dominate your conversion
          </p>
          <div className="flex flex-col text-start space-y-2">
            <p className="flex items-center text-xs lg:text-small font-medium text-sub-color">
              <span className="text-main-color text-base mr-2">✔</span>
              Get trending by sending instant upvotes too any post or comments.
            </p>
            <p className="flex items-center text-xs lg:text-small font-medium text-sub-color">
              <span className="text-main-color text-base mr-2">✔</span>
              Take control of comments on your posts by upvotes and downvotes
            </p>
          </div>
          <div className="flex flex-row items-center justify-center lg:justify-start space-x-2">
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
        <div className="lg:w-1/2 lg:mt-0 relative hidden lg:flex items-center justify-center">
          <div className="hero-image-wrap absolute flex -skew-x-[20deg] -space-x-10">
            <div className="hero-image relative flex justify-center items-center">
              <img src={light_2} alt="Image 1" className="w-2/3" />
            </div>
            <div className="hero-image relative">
              <img src={light_1} alt="Image 2" className="w-3/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
