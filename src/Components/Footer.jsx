import React from "react";
import logo from "../assets/Images/Logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const textColorClass = isHomePage ? "text-white" : "text-sub-color";
  return (
    <footer
      className={
        !isHomePage
          ? " bg-[#fff] border border-gray-200"
          : "bg-[#110f0f] border-t border-none pt-24 -mt-[70px]"
      }
    >
      <section className="container mx-auto">
        <div className="py-5">
          <div className="flex flex-col items-center justify-between space-y-8 lg:flex-row lg:items-start lg:space-y-0">
            {/* Left Section - Logo and Socials */}
            <div className="flex flex-col items-center space-y-5 lg:items-start">
              <Link to="/">
                <img src={logo} alt="logo" className="h-10" />
              </Link>
              <div className="flex items-center space-x-4">
                <p className={`${textColorClass} text-small`}>Chat with us:</p>
                <div className="flex space-x-4">
                  <a href="https://t.me/buyupvotessupport" target="_blank">
                    <FaTelegram className="text-blue-500 size-6" />
                  </a>
                  <a href="https://web.whatsapp.com/" target="_blank">
                    <FaWhatsapp className="text-green-500 size-6" />
                  </a>
                </div>
              </div>
              <p
                className={`${textColorClass} text-[14px] hidden lg:block xs:order-1 order-3`}
              >
                © 2024 All rights reserved
              </p>
            </div>

            {/* Center Section - Links */}
            <div className="flex flex-col space-y-0 text-center lg:flex-row lg:text-start lg:space-y-0 lg:space-x-28">
              <div>
                <h3
                  className={`hidden font-bold underline ${textColorClass} text-small lg:block`}
                >
                  BuyUpvotes
                </h3>
                <ul className="mt-2 space-y-2 lg:text-medium xs:text-small">
                  <li>
                    <Link
                      to="/faqs"
                      className={`hover:text-main-color hover:underline underline-offset-1 ${textColorClass}`}
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pricing"
                      className={`hover:text-main-color hover:underline underline-offset-1 ${textColorClass}`}
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3
                  className={`hidden font-bold underline ${textColorClass} text-small lg:block`}
                >
                  Contact
                </h3>
                <ul className="mt-2 space-y-2 lg:text-medium xs:text-small">
                  <li>
                    <Link
                      to="/contact-us"
                      className={`hover:text-main-color hover:underline underline-offset-1 ${textColorClass}`}
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3
                  className={`hidden font-bold underline ${textColorClass} text-small lg:block`}
                >
                  Legal
                </h3>
                <ul className="mt-2 space-y-2 lg:text-medium xs:text-small">
                  <li>
                    <Link
                      to="/terms-and-conditions"
                      className={`hover:text-main-color hover:underline underline-offset-1 ${textColorClass}`}
                    >
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy-policy"
                      className={`hover:text-main-color hover:underline underline-offset-1 ${textColorClass}`}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
