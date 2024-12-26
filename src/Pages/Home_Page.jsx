import React from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import Pricing from "../Components/Pricing";
import Currency from "../Components/Currency";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import ScrollBorder from "../Components/ScrollBorder";
import { FaArrowUp } from "react-icons/fa6";

const Home_Page = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <React.Fragment>
        <div className="scroll-smooth">
          <Header />
          <HeroSection />
          <Pricing />
          <Currency />
          <Contact />
          <Footer />
          <div className="relative z-10">
            <button
              onClick={scrollToTop}
              className="lg:w-10 lg:h-10 w-8 h-8 bottom-12 right-5 bg-main-color flex justify-center items-center lg:right-6 rounded-full lg:bottom-10 fixed"
            >
              <FaArrowUp className="h-4 w-5 text-white" />
            </button>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Home_Page;
