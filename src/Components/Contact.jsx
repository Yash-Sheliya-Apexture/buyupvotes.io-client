import React, { useEffect, useState } from "react";
import Rocket from "../assets/Images/rocket.png";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../Dashboard/components/Button";

const Contact = () => {
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
    <>
      <section className="container py-5 mx-auto mix-blend-overlay bg-white">
        <h1 className="text-center text-[24px] font-bold text-[#2D2624]">
          Have any questions?
        </h1>
        <p className="lg:text-[18px] text-[16px] text-[#403633] mt-3 mb-6 text-center">
          Contact us and we'll get back to you as soon as possible.
        </p>
        <div className="flex justify-center">
          <Button to="/contactus">Contact us</Button>
        </div>

        {/* Contact Form */}
        <div className="bg-[#FF4C00] my-10 rounded-large pb-6">
          <div className="flex flex-wrap items-center lg:flex-nowrap">
            {/* Left Side: Image */}
            <div className="flex justify-center w-full lg:w-1/3 lg:justify-start">
              <img
                src={Rocket}
                alt="Rocket"
                className="max-w-[350px] md:max-w-[500px] lg:max-w-full animate-float"
              />
            </div>

            {/* Right Side: Content */}
            <div className="w-full mt-10 text-center lg:w-2/3 lg:text-left lg:mt-0">
              <h1
                className="text-white text-[24px] md:text-[32px] lg:text-[50px] font-black leading-tight animate__animated animate__bounceInDown"
                style={{ animationDuration: "1s", animationDelay: "0.3s" }}
              >
                Buy upvotes today & <br /> get instant delivery!
              </h1>
              {isLoggedIn ? (
                <div className="flex">
                  <Link
                    to="/dashboard"
                    className="bg-white text-[#FF5700] font-bold px-20 py-1.5 rounded-full transition-all hover:bg-[#454F5B] hover:text-white"
                  >
                    Dashboard
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col items-center mt-8 space-y-4 lg:flex-row lg:items-start md:space-y-0 md:space-x-4 ">
                  {/* Sign In Button */}

                  <Link
                    to="/signin"
                    className="font-medium lg:px-20 px-16 py-1.5 rounded-full border-2 border-transparent flex items-center bg-white text-main-color transition-all  duration-200 ease-in"
                  >
                    Sign in
                  </Link>

                  {/* Sign Up Button */}
                  <Link
                    to="/signup"
                    className="text-white font-medium lg:px-20 px-16 py-1.5 rounded-full border-2 border-transparent flex items-center hover:border-white transition-all duration-200 ease-in"
                  >
                    Sign up
                    <FaUpRightFromSquare className="ml-1" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
