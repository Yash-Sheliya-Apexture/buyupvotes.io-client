import React from "react";
import logo from "../assets/Images/Logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import MasterCard from "../assets/Images/MasterCard.png";
import Bitcoin from "../assets/Images/Bitcoin.png";

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
          <div className="flex flex-col items-center justify-between lg:flex-row lg:items-start lg:space-y-0">
            {/* Left Section - Logo and Socials */}
            <div className="flex flex-col items-center space-y-5 lg:items-start">
              <Link to="/">
                <img src={logo} alt="logo" className="h-10" />
              </Link>
              <div className="flex items-center space-x-4">
                <p className={`${textColorClass} text-small`}>Chat with us: </p>
                <div className="flex space-x-2">
                  <div className="size-8 bg-blue-500 rounded-md flex items-center justify-center">
                    <a href="https://t.me/buyupvotessupport" target="_blank">
                      <FaTelegram className="text-white size-4" />
                    </a>
                  </div>
                  <div className="size-8 bg-green-500 rounded-md flex items-center justify-center">
                    <a href="https://web.whatsapp.com/" target="_blank">
                      <FaWhatsapp className="text-white size-4" />
                    </a>
                  </div>
                </div>
              </div>
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

          <div className="flex items-center justify-between py-4 mt-4 border-t border-white">
            <div className="text-white">
              <p
                className={`${textColorClass}  lg:text-medium text-small font-medium`}
              >
                © 2024 All rights reserved
              </p>
            </div>

            <div className="flex gap-2">
              <img
                src={MasterCard}
                alt="mastercard"
                className="h-6"
              />
              <img
                src={Bitcoin}
                alt="bitcoin"
                className="h-6"
              />
            </div>
          </div>

        </div>
      </section>
    </footer >
  );
};

export default Footer;
