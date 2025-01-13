import React, { useState, useEffect } from "react";
import logo from "../assets/Images/Logo.png";
import Uparrow from "../assets/Images/logo-mini.png";
import { TbMenu4 } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { useAuth } from "../auth/AuthContextWeb";

const Header = () => {
    const location = useLocation();
    const { user, loading } = useAuth();
    const [showMenu, setShowMenu] = useState(false);
    const isHomePage = location.pathname === "/";
    const [isSticky, setIsSticky] = useState(false);

    const navItems = [
        { name: "Pricing", path: "/pricing" },
        { name: "FAQ", path: "/faqs" },
        { name: "Blog", path: "/post" },
        { name: "Contact", path: "/contact-us" },
    ];

    const navItem = [
        { label: "Pricing", path: "/dashboard/fundprice" },
        { label: "FAQ", path: "/dashboard/faqs" },
        { label: "Blog", path: "/dashboard/post" },
        { label: "Contact", path: "/dashboard/contactus" },
    ];

    const toggleMenu = () => {
        setShowMenu((prev) => !prev);
    };


    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
             <header
                className={`top-0 z-30 relative transition-shadow duration-300 ${
                    isHomePage
                        ? `${isSticky ? "bg-white/60 shadow-header backdrop-blur-[4px] sticky" : ""}`
                        : "bg-white/60 shadow-header backdrop-blur-[2px] "
                }  ${isSticky ? `sticky` : ""}`}
            >
                <div className="container mx-auto">
                    <section className="flex items-center justify-between">
                        <div className="flex items-center my-4">
                            <button className="block md:hidden" onClick={toggleMenu}>
                                <TbMenu4 className="text-large text-main-color" />
                            </button>
                            <button className="block md:hidden">
                                <img src={Uparrow} alt="upArrow" className="h-6 ml-4" />
                            </button>
                            <Link to="/">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="hidden h-6 md:h-8 md:block"
                                />
                            </Link>
                        </div>
                        <div className="flex items-center justify-between space-x-6 md:w-auto">
                            {user ? (
                                <nav className="flex-grow hidden h-full gap-2 cursor-pointer md:flex">
                                    {navItem.map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.path}
                                            className="relative px-4 py-5 text-xl font-normal font-BasierSquare text-small text-sub-color hover:text-main-color group"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </nav>
                            ) : (
                                <nav className="flex-grow hidden h-full gap-2 cursor-pointer md:flex">
                                    {navItems.map((item, index) => {
                                        const isActive = location.pathname === item.path;
                                        return (
                                            <Link
                                                key={index}
                                                to={item.path}
                                                className={`relative font-BasierSquare px-4 py-5 text-lg font-medium transition-all duration-500 ease-in-out group ${isActive ? "text-main-color" : "text-sub-color hover:text-main-color"
                                                    }`}
                                            >
                                                {isActive && (
                                                    <GoDotFill className="inline-block mr-2 text-main-color animate-pop" />
                                                )}
                                                {item.name}
                                                <span
                                                    className={`absolute bottom-0 left-0 transition-all duration-500 ease-in-out ${isActive ? "" : "w-0 bg-transparent h-[2px] group-hover:w-full group-hover:bg-main-color"
                                                        }`}
                                                ></span>
                                            </Link>
                                        );
                                    })}
                                </nav>
                            )}
                            <div className="relative flex items-center space-x-4">
                                {user ? (
                                    <Link to="/dashboard" className="flex items-center justify-center gap-2 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border-2 rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600">Dshboard</Link>
                                ) : (
                                    <>
                                        <button>
                                            <Link
                                                to="/signin"
                                                className="hidden px-4 py-1 text-lg font-medium transition rounded-full lg:px-0 text-main-color border-main-color lg:block"
                                            >
                                                Sign-In
                                            </Link>
                                        </button>
                                        <Link to="/signup" className="flex items-center justify-center gap-2 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border-2 rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600">Sign-Up</Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </header>

            <div
                className={`fixed top-0 left-0 w-64 bg-white  h-full border-r border-gray-300/50 shadow-main transition-transform duration-300 ease-in-out z-40 ${showMenu ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="relative flex justify-end p-4">
                    <button onClick={toggleMenu}>
                        <img src={logo} alt="sidelogo" />
                    </button>
                </div>

                <div className="px-4 py-2 space-y-6">
                    <div className="flex items-center gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            className="size-8 text-main-color"
                        >
                            <path
                                fill="currentColor"
                                d="m17.967 6.558l-1.83-1.83c-1.546-1.545-2.318-2.318-3.321-2.605c-1.003-.288-2.068-.042-4.197.45l-1.228.283c-1.792.413-2.688.62-3.302 1.233S3.27 5.6 2.856 7.391l-.284 1.228c-.491 2.13-.737 3.194-.45 4.197c.288 1.003 1.061 1.775 2.606 3.32l1.83 1.83C9.248 20.657 10.592 22 12.262 22c1.671 0 3.015-1.344 5.704-4.033c2.69-2.69 4.034-4.034 4.034-5.705c0-1.67-1.344-3.015-4.033-5.704"
                                opacity=".5"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M11.147 14.328c-.673-.672-.667-1.638-.265-2.403a.75.75 0 0 1 1.04-1.046c.34-.18.713-.276 1.085-.272a.75.75 0 0 1-.014 1.5a.88.88 0 0 0-.609.277c-.387.387-.285.775-.177.884c.11.109.497.21.884-.177c.784-.784 2.138-1.044 3.006-.177c.673.673.667 1.639.264 2.404a.75.75 0 0 1-1.04 1.045a2.2 2.2 0 0 1-1.472.232a.75.75 0 1 1 .302-1.47c.177.037.463-.021.708-.266c.388-.388.286-.775.177-.884s-.496-.21-.884.177c-.784.784-2.138 1.044-3.005.176m-1.126-4.035a2 2 0 1 0-2.828-2.828a2 2 0 0 0 2.828 2.828"
                            ></path>
                        </svg>
                        <Link
                            to="/dashboard/fundprice"
                            className="block text-lg font-normal transition-all duration-200 ease-linear font-BasierSquare text-sub-color hover:text-main-color"
                        >
                            Pricing
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            className="size-8 text-main-color"
                        >
                            <path
                                fill="currentColor"
                                d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22"
                                opacity=".5"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0a2.625 2.625 0 1 1 4.508 1.829q-.138.142-.264.267a7 7 0 0 0-.571.617c-.22.282-.298.489-.298.662V13a.75.75 0 0 1-1.5 0v-.75c0-.655.305-1.186.614-1.583c.229-.294.516-.58.75-.814q.106-.105.193-.194A1.125 1.125 0 0 0 12 7.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                            ></path>
                        </svg>
                        <Link
                            to="/dashboard/faqs"
                            className="block text-lg font-normal transition-all duration-200 ease-linear font-BasierSquare text-sub-color hover:text-main-color"
                        >
                            FAQ
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            className="size-8 text-main-color"
                        >
                            <path
                                fill="currentColor"
                                d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12"
                                opacity=".5"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M7 16.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm0-3.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zM22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"
                            ></path>
                        </svg>
                        <Link
                            to="/dashboard/post"
                            className="block text-lg font-normal transition-all duration-200 ease-linear font-BasierSquare text-sub-color hover:text-main-color"
                        >
                            Blog
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            className="size-8 text-main-color"
                        >
                            <path
                                fill="currentColor"
                                d="M2 11.25C2 8.35 4.015 6 6.5 6S11 8.35 11 11.25V20H4.233C3 20 2 18.834 2 17.395z"
                                opacity=".5"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M11 11.25V20h8.793C21.012 20 22 18.847 22 17.425V11.25C22 8.35 19.985 6 17.5 6h-11C8.985 6 11 8.35 11 11.25"
                                opacity=".8"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M9.5 20v2a.75.75 0 0 0 1.5 0v-2zm5.5 0h-1.5v2a.75.75 0 0 0 1.5 0z"
                            ></path>
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M4.25 16a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m13.135-9.415l.256-.052a2.2 2.2 0 0 1 1.24.115c.69.277 1.446.328 2.165.148l.061-.015c.524-.131.893-.618.893-1.178v-2.13c0-.738-.664-1.282-1.355-1.109c-.396.1-.812.071-1.193-.081l-.073-.03a3.5 3.5 0 0 0-2-.185l-.449.09c-.54.108-.93.6-.93 1.17v6.953c0 .397.31.719.692.719a.706.706 0 0 0 .693-.72z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <Link
                            to="contactus"
                            href="#contact"
                            className="block text-lg font-normal transition-all duration-200 ease-linear font-BasierSquare text-sub-color hover:text-main-color"
                        >
                            Contact
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaUserCircle className="size-8  text-[#ff8b4c]" />
                        <Link
                            to="/dashboard"
                            className="block text-lg font-normal transition-all duration-200 ease-linear font-BasierSquare text-sub-color hover:text-main-color"
                        >
                            Dashboard
                        </Link>
                    </div>
                </div>
            </div>

            {showMenu && (
                <div
                    className="fixed inset-0 z-30 bg-black bg-opacity-50 backdrop-blur-sm"
                    onClick={toggleMenu}
                ></div>
            )}
        </>
    );
};

export default Header;