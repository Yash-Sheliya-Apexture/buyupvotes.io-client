import React from "react";
import logo from "../assets/Images/Logo.png";
import { FaWhatsapp } from "react-icons/fa";

import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-5 border-t border-slate-300/50" id="Footer">
      <section className="container mx-auto">
        <div className="py-2 bg-white">
          <div className="flex flex-col items-center justify-between space-y-8 lg:flex-row lg:items-start lg:space-y-0">
            {/* Left Section - Logo and Socials */}
            <div className="flex flex-col items-center space-y-5 lg:items-start">
              <img src={logo} alt="logo" className="h-10" />
              <div className="flex items-center space-x-4">
                <p className="text-sub-color text-small">Chat with us:</p>
                <div className="flex space-x-4">
                  <a href="https://t.me/buyupvotessupport" target="_blank">
                    <FaTelegram className="text-blue-500 size-6" />
                  </a>
                  <a href="https://web.whatsapp.com/" target="_blank">
                    <FaWhatsapp className="text-green-500 size-6" />
                  </a>
                </div>
              </div>
              <p className="text-sub-color text-[14px] hidden lg:block xs:order-1 order-3">
                © 2024 All rights reserved
              </p>
            </div>

            {/* Center Section - Links */}
            <div className="flex flex-col space-y-0 text-center lg:flex-row lg:text-start lg:space-y-0 lg:space-x-28">
              <div>
                <h3 className="hidden font-bold underline text-sub-color text-small lg:block">
                  BuyUpvotes
                </h3>
                <ul className="mt-2 space-y-2 text-sub-color lg:text-medium xs:text-small">
                  <li>
                    <Link
                      to="/dashboard/faqs"
                      className="hover:text-main-color hover:underline underline-offset-1"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/fundprice"
                      className="hover:text-main-color hover:underline underline-offset-1"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="hidden font-bold underline text-sub-color text-small lg:block">
                  Contact
                </h3>
                <ul className="mt-2 space-y-2 text-sub-color lg:text-medium xs:text-small">
                  <li>
                    <Link
                      to="/dashboard/contactus"
                      className="hover:text-main-color hover:underline underline-offset-1"
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="hidden font-bold underline text-sub-color text-small lg:block">
                  Legal
                </h3>
                <ul className="mt-2 space-y-2 text-sub-color lg:text-medium xs:text-small">
                  <li>
                    <Link
                      to="/terms-and-conditions"
                      className="hover:text-main-color hover:underline underline-offset-1"
                    >
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy-policy"
                      className="hover:text-main-color hover:underline underline-offset-1"
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
