import React, { useEffect, useState } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { MdCurrencyBitcoin } from "react-icons/md";
import { Link } from "react-router-dom";
import payment_logos from '../assets/Images/payment_logo.png'

const Currency = () => {
    const [selectedTab, setSelectedTab] = useState("creditCard");
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
        <div className="container mx-auto mt-10">
            {
                !isLoggedIn ? (
                    <div className="tujghvcbxfvdsf">
                        <div className="flex items-center justify-center mb-7">
                            <img src={payment_logos} alt="" className="lg:max-w-screen-md" />
                        </div>
                        <div className="relative flex items-center justify-center space-x-4">
                            <Link className="px-4 py-1 text-[rgb(255,87,0)] border font-bold border-[rgb(255,87,0)] rounded-full hover:bg-orange-500 hover:text-white transition hidden lg:block" to="/signin" >Sign-In</Link>
                            <Link className="px-4 py-1 text-[rgb(255,87,0)] border font-bold border-[rgb(255,87,0)] rounded-full hover:bg-orange-500 hover:text-white transition hidden lg:block" to="/signup" data-discover="true">Sign-Up</Link>
                        </div>
                        <div className="flex justify-center">
                            <hr className="mt-10 w-[80%]" />
                        </div>
                    </div>
                ) : (
                    <div className="18e23dssedrfer">
                        {/* Tabs Section */}
                        <div className="flex justify-center pb-4 space-x-8">
                            <button
                                className={`flex items-center font-bold lg:text-[16px] text-[12px] lg:px-4 px-0 py-2 ${selectedTab === "creditCard"
                                    ? "text-[#FF5700] border-b-2 border-[#FF5700]"
                                    : "text-gray-600 hover:text-[#FF5700]"
                                    }`}
                                onClick={() => setSelectedTab("creditCard")}
                            >
                                <span className="mr-2">
                                    <CiCreditCard1 className="size-8" />
                                </span>
                                Credit Card
                            </button>
                            <button
                                className={`flex items-center font-bold lg:text-[16px] text-[14px] lg:px-4 px-0 py-2 ${selectedTab === "crypto"
                                    ? "text-[#FF5700] border-b-2 border-[#FF5700]"
                                    : "text-gray-600 hover:text-[#FF5700]"
                                    }`}
                                onClick={() => setSelectedTab("crypto")}
                            >
                                <span className="mr-2">
                                    <MdCurrencyBitcoin className="size-8" />
                                </span>{" "}
                                Cryptocurrency
                            </button>
                        </div>

                        {/* Animated Content Section */}
                        <div
                            className={`transition-all duration-300 ${selectedTab === "creditCard" ? "opacity-100" : "opacity-0"
                                }`}
                            style={{
                                transform:
                                    selectedTab === "creditCard" ? "translateY(0)" : "translateY(20px)",
                                display: selectedTab === "creditCard" ? "block" : "none",
                            }}
                        >
                            {/* Credit Card Content */}
                            <div className="flex items-center justify-center mt-4 text-center">
                                <p className="text-[#403633] lg:text-[20px] max-w-[400px]">
                                    Enter your{" "}
                                    <span className="text-[#FF5700] font-medium leading-10">
                                        deposit amount
                                    </span>{" "}
                                    using to Credit-Card many upvotes it will convert into:
                                </p>
                            </div>
                        </div>

                        <div
                            className={`transition-all duration-500 ${selectedTab === "crypto" ? "opacity-100" : "opacity-0"
                                }`}
                            style={{
                                transform:
                                    selectedTab === "crypto" ? "translateY(0)" : "translateY(60px)",
                                display: selectedTab === "crypto" ? "block" : "none",
                            }}
                        >
                            {/* Cryptocurrency Content */}
                            <div className="flex items-center justify-center mt-4 text-center">
                                <p className="text-[#403633] lg:text-[20px] max-w-[400px]">
                                    Enter your{" "}
                                    <span className="text-[#FF5700] font-medium leading-10">
                                        deposit amount
                                    </span>{" "}
                                    using to Cryptocurrency upvotes it will convert into:
                                </p>
                            </div>
                        </div>

                        {/* Input and Calculate Section */}
                        <div className="flex items-center justify-center mt-8">
                            {/* Input Section */}
                            <div className="relative">
                                <span className="text-black text-[24px] mr-2">$</span>
                                <input
                                    placeholder="Deposit amount"
                                    className="p-2 py-2 border-t border-b border-l border-black rounded-l-full focus:outline-none"
                                />
                            </div>

                            {/* Button Section */}
                            <button className="px-4 py-2 bg-transparent border-2 border-[#FF5700] text-[#FF5700] font-bold rounded-r-full transition-all">
                                Calculate
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <hr className="mt-10 w-[80%]" />
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Currency;
