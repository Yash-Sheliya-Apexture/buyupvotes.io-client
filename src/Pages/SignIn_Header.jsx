import React from "react";
import logo from "../assets/Images/logo.png";
import Uparrow from "../assets/Images/logo-mini.png";
import { Link } from "react-router-dom";

const SignIn_Header = () => {
  return (
    <>
      {/* Menubar */}
      <nav className="flex items-center justify-between p-4 lg:px-20">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="hidden h-6 lg:block lg:h-10"
            />
          </Link>
          <Link to="/">
            <img
              src={Uparrow}
              alt="Logo Small"
              className="block h-8 lg:hidden"
            />
          </Link>
        </div>
        <div>
          <a href="#" className="text-sub-color font-medium hover:underline">
            Need help?
          </a>
        </div>
      </nav>
    </>
  );
};

export default SignIn_Header;
