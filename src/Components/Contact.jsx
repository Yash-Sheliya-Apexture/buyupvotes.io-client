import React, { useEffect, useState } from "react";
import Rocket from "../assets/Images/rocket.webp";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
            <div className="pt-10">
                <h1 className="text-center text-[24px] font-bold text-[#2D2624]">
                    Have any questions?
                </h1>
                <p className="lg:text-[18px] text-[16px] text-[#403633] mt-3 mb-6 text-center">
                    Contact us and we'll get back to you as soon as possible.
                </p>
                <div className="flex justify-center">
                    <a
                        href="#"
                        className="py-2 px-20 border-2 align-middle border-[#FF5700] text-[#FF5700] hover:text-[#fff] font-bold text-[16px] rounded-full hover:bg-[#FF5700] transition-all ease-in duration-300"
                    >
                        Contact us
                    </a>
                </div>
            </div>

            {/* Contact Form */}
            <section className="mx-auto lg:container xs:p-4" id="FaQ">
                <div className="bg-[#FF4C00] my-10 rounded-[30px] pb-6">
                    <div className="flex flex-wrap items-center lg:flex-nowrap">
                        {/* Left Side: Image */}
                        <div className="w-full lg:w-[40%] flex justify-center lg:justify-start">
                            <img
                                src={Rocket}
                                alt="Rocket"
                                className="max-w-[350px] md:max-w-[500px] lg:max-w-full animate-float"
                            />
                        </div>

                        {/* Right Side: Content */}
                        <div className="w-full lg:w-[60%] text-center lg:text-left mt-10 lg:mt-0">
                            <h1 className="text-white text-[24px] md:text-[32px] lg:text-[50px] font-black leading-tight">
                                Buy upvotes today & <br /> get instant delivery!
                            </h1>
                            {isLoggedIn ? (
                                <div className="flex mt-8">
                                    <Link
                                        to="/dashboard"
                                        className="bg-white text-[#FF5700] font-bold px-20 py-1.5 rounded-full transition-all hover:bg-[#454F5B] hover:text-white"
                                    >
                                        Dashboard
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center mt-8 space-y-4 lg:flex-row lg:items-start md:space-y-0 md:space-x-4">
                                    {/* Sign In Button */}
                                    <Link
                                        to="/signin"
                                        className="bg-white text-[#FF5700] font-bold px-20 py-1.5 rounded-full transition-all hover:bg-[#454F5B] hover:text-white"
                                    >
                                        Sign in
                                    </Link>

                                    {/* Sign Up Button */}
                                    <Link to="/signup" className="text-white font-bold lg:px-20 px-16 py-1.5 rounded-full border-2 border-transparent flex items-center transition-all hover:border-white">
                                        Sign up
                                        <FaUpRightFromSquare className="ml-1" />
                                    </Link>
                                </div>
                            )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
