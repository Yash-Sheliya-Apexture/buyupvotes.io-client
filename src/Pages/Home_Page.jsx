// import React from "react";
// import HeroSection from "../Components/HeroSection";
// import Pricing from "../Components/Pricing";
// import Currency from "../Components/Currency";
// import { FaArrowUp } from "react-icons/fa6";
// import Contact from "../Components/homeSection/Contact";
// import Blogs from "../Components/homeSection/Blogs";
// import OurBenefits from "../Components/homeSection/OurBenefits";
// import Compare from "./Compare";

// const Home_Page = () => {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <main className="scroll-smooth">
//       <>
//         <HeroSection />
//         <Pricing />
//         <Currency />
//         <OurBenefits />
//         <Compare />
//         <Blogs />
//         <Contact />

//         {/* Uparrow */}
//         <div className="sticky z-10">
//           <button
//             onClick={scrollToTop}
//             className="fixed flex items-center justify-center w-8 h-8 rounded-lg md:w-10 md:h-10 bottom- right-5 bg-main-color lg:right-2 md:right-6 md:bottom-6 lg:bottom-6"
//           >
//             <FaArrowUp className="w-5 h-4 text-white" />
//           </button>
//         </div>
//       </>
//     </main>
//   );
// };

// export default Home_Page;

// import React, { useState, useEffect } from "react";
// import HeroSection from "../Components/HeroSection";
// import Pricing from "../Components/Pricing";
// import Currency from "../Components/Currency";
// import { FaArrowUp } from "react-icons/fa6";
// import Contact from "../Components/homeSection/Contact";
// import Blogs from "../Components/homeSection/Blogs";
// import OurBenefits from "../Components/homeSection/OurBenefits";
// import Compare from "./Compare";

// const HomePage = () => {
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > window.innerHeight / 2) {
//         setShowScrollTop(true);
//       } else {
//         setShowScrollTop(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <main className="scroll-smooth">
//       <>
//         <HeroSection />
//         <Pricing />
//         <Currency />
//         <OurBenefits />
//         <Compare />
//         <Blogs />
//         <Contact />
//         {showScrollTop && (
//           <div className="sticky z-10">
//             <button
//               onClick={scrollToTop}
//               className="fixed flex items-center justify-center rounded-lg size-8 bottom-10 right-4  bg-main-color"
//             >
//               <FaArrowUp className=" text-white" />
//             </button>
//           </div>
//         )}
//       </>
//     </main>
//   );
// };

// export default HomePage;


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "../Components/HeroSection";
import Post from "./Post";
import Upvotes from "./Upvotes";
// import Currency from "../Components/Currency";
import { FaArrowUp } from "react-icons/fa6";
import Contact from "../Components/homeSection/Contact";
import Blogs from "../Components/homeSection/Blogs";
import OurBenefits from "../Components/homeSection/OurBenefits";
import Compare from "./Compare";
import Trusted from "./Trusted";
// import Service from "./Service";

const HomePage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight / 8 );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="scroll-smooth">
      <HeroSection />
      <Post />
      <Upvotes />
      <OurBenefits />
      <Trusted />
      <Compare />
      {/* <Service /> */}
      <Blogs />
      {/* <Pricing /> */}
      <Contact />

      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed flex items-center justify-center size-8 bottom-10 right-4 rounded-lg backdrop-blur-md bg-black z-20"
        >
          <FaArrowUp className="text-white" />
        </motion.button>
      )
      }
    </main >
  );
};

export default HomePage;
