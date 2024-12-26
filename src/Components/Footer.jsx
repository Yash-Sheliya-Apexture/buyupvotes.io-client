import React from "react";
import logo from "../assets/Images/Logo.png";
import { FaWhatsapp } from "react-icons/fa";

import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-slate-300/50" id="Footer">
      <section className="container mx-auto">
        <div className="bg-white py-2">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
            {/* Left Section - Logo and Socials */}
            <div className="flex flex-col items-center lg:items-start space-y-5">
              <img src={logo} alt="logo" className="h-10" />
              <div className="flex items-center space-x-4">
                <p className="text-sub-color text-small">Chat with us:</p>
                <div className="flex space-x-4">
                  <a href="https://t.me/buyupvotessupport" target="_blank">
                    <FaTelegram className="size-6 text-blue-500" />
                  </a>
                  <a href="https://web.whatsapp.com/" target="_blank">
                    <FaWhatsapp className="size-6 text-green-500" />
                  </a>
                </div>
              </div>
              <p className="text-sub-color text-[14px] hidden lg:block xs:order-1 order-3">
                © 2024 All rights reserved
              </p>
            </div>

            {/* Center Section - Links */}
            <div className="flex flex-col lg:flex-row space-y-0 text-center lg:text-start lg:space-y-0 lg:space-x-28">
              <div>
                <h3 className="text-sub-color font-bold underline text-small hidden lg:block">
                  BuyUpvotes
                </h3>
                <ul className="text-sub-color mt-2 lg:text-medium xs:text-small space-y-2">
                  <li>
                    <Link
                      to="/dashboard/FAQ"
                      className="hover:text-main-color hover:underline underline-offset-1"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/FundPrice"
                      className="hover:text-main-color hover:underline underline-offset-1"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sub-color font-bold underline text-small hidden lg:block">
                  Contact
                </h3>
                <ul className="text-sub-color mt-2 lg:text-medium xs:text-small space-y-2">
                  <li>
                    <Link
                      to="/dashboard/ContactUs"
                      className="hover:text-main-color hover:underline underline-offset-1"
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sub-color font-bold underline text-small hidden lg:block">
                  Legal
                </h3>
                <ul className="text-sub-color mt-2 lg:text-medium xs:text-small space-y-2">
                  <li>
                    <Link
                      to="/TermAndConditions"
                      className="hover:text-main-color hover:underline underline-offset-1"
                    >
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Privacy"
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
