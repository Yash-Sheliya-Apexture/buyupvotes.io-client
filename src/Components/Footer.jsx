import React from "react";
import logo from "../assets/Images/Logo.png";

const Footer = () => {
  return (
    <div className="border-t border-slate-300/50" id="Footer">
      <section className="lg:container mx-auto xs:p-4">
        <footer className="bg-white py-2">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
            {/* Left Section - Logo and Socials */}
            <div className="flex flex-col items-center lg:items-start space-y-5">
              <img src={logo} alt="logo" className="h-10" />
              <div className="flex items-center space-x-4">
                <p className="text-[#2D2624] text-[16px]">Chat with us:</p>
                <div className="flex space-x-4">
                  <a href="https://t.me/buyupvotessupport">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      viewBox="0 0 496 512"
                      className="h-6 text-[#24A1DE]"
                    >
                      <path
                        fill="currentColor"
                        d="M248 8C111.033 8 0 119.033 0 256s111.033 248 248 248s248-111.033 248-248S384.967 8 248 8m114.952 168.66c-3.732 39.215-19.881 134.378-28.1 178.3c-3.476 18.584-10.322 24.816-16.948 25.425c-14.4 1.326-25.338-9.517-39.287-18.661c-21.827-14.308-34.158-23.215-55.346-37.177c-24.485-16.135-8.612-25 5.342-39.5c3.652-3.793 67.107-61.51 68.335-66.746c.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608 69.142q-14.845 10.194-26.894 9.934c-8.855-.191-25.888-5.006-38.551-9.123c-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7 18.45-13.7q108.446-47.248 144.628-62.3c68.872-28.647 83.183-33.623 92.511-33.789c2.052-.034 6.639.474 9.61 2.885a10.45 10.45 0 0 1 3.53 6.716a43.8 43.8 0 0 1 .417 9.769"
                      ></path>
                    </svg>
                  </a>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      viewBox="0 0 448 512"
                      className="h-6 text-[#075E54]"
                    >
                      <path
                        fill="currentColor"
                        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157m-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6m101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <p className="text-[#2D2624] text-[14px] hidden lg:block xs:order-1 order-3">
                © 2024 All rights reserved
              </p>
            </div>

            {/* Center Section - Links */}
            <div className="flex flex-col lg:flex-row space-y-0 text-center lg:text-start lg:space-y-0 lg:space-x-28">
              <div>
                <h3 className="text-[#2D2624] font-black underline text-[16px] hidden lg:block">
                  BuyUpvotes
                </h3>
                <ul className="text-gray-600 mt-2 lg:text-[18px] xs:text-[16px] space-y-2">
                  <li>
                    <a href="#" className="hover:text-[#FF5700]">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#FF5700]">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2D2624] font-black underline text-[16px] hidden lg:block">
                  Contact
                </h3>
                <ul className="text-gray-600 mt-2 lg:text-[18px] xs:text-[16px] space-y-2">
                  <li>
                    <a href="#" className="hover:text-[#FF5700]">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2D2624] font-black underline text-[16px] hidden lg:block">
                  Legal
                </h3>
                <ul className="text-gray-600 mt-2 lg:text-[18px] xs:text-[16px] space-y-2">
                  <li>
                    <a href="#" className="hover:text-[#FF5700]">
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#FF5700]">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
