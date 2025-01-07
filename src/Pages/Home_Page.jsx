import React from "react";
import HeroSection from "../Components/HeroSection";
import Pricing from "../Components/Pricing";
import Currency from "../Components/Currency";
import { FaArrowUp } from "react-icons/fa6";
import Contact_New from "../Components/Contact_New";

const Home_Page = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* <React.Fragment> */}
      <div className="scroll-smooth">
        <HeroSection />
        <Pricing />
        <Currency />
        <Contact_New />
        <div className="relative z-10">
          <button
            onClick={scrollToTop}
            className="fixed flex items-center justify-center w-8 h-8 rounded-full lg:w-10 lg:h-10 bottom-16 right-5 bg-main-color lg:right-6 lg:bottom-6"
          >
            <FaArrowUp className="w-5 h-4 text-white" />
          </button>
        </div>
      </div>
      {/* </React.Fragment> */}
    </div>
  );
};

export default Home_Page;
