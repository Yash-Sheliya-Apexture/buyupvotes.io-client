// import React, { useMemo } from "react";
// import { Link } from "react-router-dom";
// import images from "../assets/websiteImages/index";
// import { useAuth } from "../auth/AuthContextWeb";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./HeroSection.css";
// import { FaReddit } from "react-icons/fa";
// import GradientHeading from "./GradientHeading";

// const sliderSettings = {
//   dots: false,
//   infinite: true,
//   speed: 6000,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 0,
//   cssEase: "linear",
//   arrows: false,
//   pauseOnHover: false,
//   variableWidth: true,
//   centerMode: true,
//   centerPadding: "0px",
//   ltl: true,
// };

// const HeroSection = () => {
//   const { user, loading } = useAuth();

//   const listItems = useMemo(
//     () => [
//       <span key="redditIcon1" className="text-gray-600">
//         <FaReddit className="mx-3 lg:size-12 size-8 text-main-color" />
//       </span>,
//       "Get trending by sending instant upvotes to any post or comment",
//       <span key="redditIcon2" className="text-gray-600">
//         <FaReddit className="mx-3 lg:size-12 size-8 text-main-color" />
//       </span>,
//       "Take control of comments on your posts by sending upvotes and downvotes",
//     ],
//     []
//   );

//   return (
//     <section className="hero-section relative -mt-24 overflow-hidden">
//       <div className="pt-20 pb-14">
//         <div className="absolute inset-0">
//           <img
//             src={images.overlay_1}
//             className="object-cover w-full min-w-full min-h-full"
//             alt=""
//           />
//         </div>
//         {/* Hero Content */}
//         <div className="container">
//           <div className="pt-[100px] z-10 relative">
//             <div className="flex justify-center">
//               <div className="flex flex-col items-center justify-center max-w-full lg:w-[750px] text-center">
//                 <GradientHeading
//                   tag="h1"
//                   beforeText="Boost Your Reddit"
//                   gradientText="Upvotes."
//                   beforeSpanClassName="font-bold"
//                   textSize="text-5xl md:text-7xl lg:text-[100px]"
//                   tracking="tracking-[-3px]"
//                   className="mb-10"
//                 />

//                 <p className="mb-8 font-BasierSquare text-sub-color font-medium text-lg lg:text-2xl">
//                   Gain real engagement and grow your online audience quickly
//                   with our proven strategies and tools.
//                 </p>

//                 <div className="flex flex-row items-center justify-center gap-5 lg:justify-start">
//                   {user ? (
//                     <Link to="/dashboard">
//                       <button className="flex items-center justify-center gap-2 px-10 md:py-4 py-2 text-xl font-medium text-white transition-colors duration-300 border-2 bg-main-color rounded-xl hover:bg-orange-600 w-60 border-main-color hover:border-orange-600">
//                         Dashboard
//                       </button>
//                     </Link>
//                   ) : (
//                     <Link to="/signin">
//                       <button className="flex items-center justify-center gap-2 px-10 md:py-4 py-2 text-xl font-medium text-white transition-colors duration-300 border-2 bg-main-color rounded-xl hover:bg-orange-600 w-60 border-main-color hover:border-orange-600">
//                         Get Started Now
//                       </button>
//                     </Link>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="pt-4 lg:pt-14">
//           <div className="p-8 overflow-hidden bg-white rounded-3xl">
//             <Slider {...sliderSettings}>
//               {listItems.map((item, index) => (
//                 <div key={index}>
//                   <div className="flex gap-3 lg:text-2xl text-basic font-BasierSquare font-medium flex-nowrap">
//                     {typeof item === "string" ? (
//                       <li className="list-none">{item}</li>
//                     ) : (
//                       item
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import images from "../assets/websiteImages/index";
import { useAuth } from "../auth/AuthContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSection.css";
import { FaReddit } from "react-icons/fa";
import GradientHeading from "./GradientHeading";

const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    variableWidth: true,
    centerMode: true,
    centerPadding: "0px",
    ltl: true,
};

const HeroSection = () => {
    const { user, loading } = useAuth();

    const listItems = useMemo(
        () => [
            <span key="redditIcon1" className="text-gray-600">
                <FaReddit className="mx-3 lg:size-12 size-8 text-main-color" />
            </span>,
            "Get trending by sending instant upvotes to any post or comment",
            <span key="redditIcon2" className="text-gray-600">
                <FaReddit className="mx-3 lg:size-12 size-8 text-main-color" />
            </span>,
            "Take control of comments on your posts by sending upvotes and downvotes",
        ],
        []
    );

    return (
        <section className="hero-section relative -mt-24 overflow-hidden">
            <div className="pt-20 pb-14">
                <div className="absolute inset-0">
                    <img
                        src={images.overlay_1}
                        className="object-cover w-full min-w-full min-h-full"
                        alt=""
                    />
                </div>
                {/* Hero Content */}
                <div className="container">
                    <div className="pt-[100px] z-10 relative">
                        <div className="flex justify-center">
                            <div className="flex flex-col items-center justify-center max-w-full lg:w-[750px] text-center">
                                <GradientHeading
                                    tag="h1"
                                    beforeText="Boost Your Reddit"
                                    gradientText="Upvotes."
                                    beforeSpanClassName="font-bold"
                                    textSize="text-5xl md:text-7xl lg:text-[100px]"
                                    tracking="tracking-[-3px]"
                                    className="mb-10"
                                />

                                <p className="mb-8 font-BasierSquare text-sub-color font-medium text-lg lg:text-2xl">
                                    Gain real engagement and grow your online audience quickly
                                    with our proven strategies and tools.
                                </p>

                                <div className="flex flex-row items-center justify-center gap-5 lg:justify-start">
                                    {user ? (
                                        <Link to="/dashboard">
                                            <button className="flex items-center justify-center gap-2 px-10 md:py-4 py-2 text-xl font-medium text-white transition-colors duration-300 border-2 bg-main-color rounded-xl hover:bg-orange-600 w-60 border-main-color hover:border-orange-600">
                                                Dashboard
                                            </button>
                                        </Link>
                                    ) : (
                                        <Link to="/signin">
                                            <button className="flex items-center justify-center gap-2 px-10 md:py-4 py-2 text-xl font-medium text-white transition-colors duration-300 border-2 bg-main-color rounded-xl hover:bg-orange-600 w-60 border-main-color hover:border-orange-600">
                                                Get Started Now
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-4 lg:pt-14">
                    <div className="p-8 overflow-hidden bg-white rounded-3xl">
                        <Slider {...sliderSettings}>
                            {listItems.map((item, index) => (
                                <div key={index}>
                                    <div className="flex gap-3 lg:text-2xl text-basic font-BasierSquare font-medium flex-nowrap">
                                        {typeof item === "string" ? (
                                            <li className="list-none">{item}</li>
                                        ) : (
                                            item
                                        )}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;