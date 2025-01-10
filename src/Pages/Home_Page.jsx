import React from "react";
import HeroSection from "../Components/HeroSection";
import Pricing from "../Components/Pricing";
import Currency from "../Components/Currency";
import { FaArrowUp } from "react-icons/fa6";
import Contact from "../Components/homeSection/Contact";
import Blogs from "../Components/homeSection/Blogs";
import OurBenefits from "../Components/homeSection/OurBenefits";

const Home_Page = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="scroll-smooth">
      <>
        <HeroSection />
        <Pricing />
        <Currency />
        <OurBenefits />
        <Blogs />
        <Contact />
        <div className="relative z-10">
          <button
            onClick={scrollToTop}
            className="fixed flex items-center justify-center w-8 h-8 rounded-lg md:w-10 md:h-10 bottom- right-5 bg-main-color lg:right-2 md:right-6 md:bottom-6 lg:bottom-6"
          >
            <FaArrowUp className="w-5 h-4 text-white" />
          </button>
        </div>
      </>
    </main>
  );
};

export default Home_Page;
