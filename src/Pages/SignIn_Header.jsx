import React from "react";
import logo from "../assets/Images/Logo.png";
import Uparrow from "../assets/Images/logo-mini.png";
import { Link } from "react-router-dom";

const SignIn_Header = () => {
  return (
    <>
      {/* Menubar */}
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-4">
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
            <Link
              to="/dashboard/faqs"
              className="text-sub-color font-medium hover:underline"
            >
              Need help?
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SignIn_Header;
