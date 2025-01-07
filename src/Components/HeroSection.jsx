// import React from "react";
// import { Link } from "react-router-dom";
// import images from "../assets/websiteImages/index";
// import { useAuth } from "../auth/AuthContextWeb";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./HeroSection.css";
// import { FaReddit } from 'react-icons/fa'; // Import React Icon


// const HeroSection = () => {
//   const { user, loading } = useAuth();

//   // if (loading) {
//   //   return <p>Loading...</p>;
//   // }

//   const listItems = [
//     <span key="redditIcon" className="text-gray-600"><FaReddit size={40} className="mx-3 text-main-color" /></span>, // Insert the icon as a list item
//     "Get trending by sending instant upvotes to any post or comment",
//     <span key="redditIcon" className="text-gray-600"><FaReddit size={40} className="mx-3 text-main-color" /></span>, // Insert the icon as a list item
//     "Take control of comments on your posts by sending upvotes and downvotes",
//   ];

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 6000,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0,
//     cssEase: 'linear',
//     arrows: false,
//     pauseOnHover: false,
//     variableWidth: true,
//     centerMode: true,
//     centerPadding: '0px',
//     ltl: true
//   };

//   return (
//     <section className="relative -mt-24 overflow-hidden">
//       <div className="pt-20 pb-14">
//         <div className="absolute inset-0">
//           <img src={images.overlay_1} className="object-cover w-full min-w-full min-h-full" alt="" />
//         </div>
//         {/* Hero Content */}
//         <div className="container">
//           <div className="pt-[100px] z-10 relative">
//             <div className="flex justify-center">
//               <div className="flex flex-col items-center justify-center max-w-full lg:w-[750px]  text-center">
//                 <h1 className="mb-6 text-5xl font-semibold tracking-[-3px] md:text-7xl lg:text-[100px] font-BasierSquare">
//                   Boost Your Reddit
//                   <span className="px-3 tracking-[-3px] text-transparent bg-clip-text bg-gradient-to-r from-[#ffb087] via-[#ff6518] to-main-color">
//                     Upvotes.
//                   </span>
//                 </h1>
//                 <p className="mb-8 w- font-BasierSquare text-[#333b52] md:text-lg lg:text-2xl">
//                   Gain real engagement and grow your online audience quickly with
//                   our proven strategies and tools.
//                 </p>

//                 <div className="flex flex-row items-center justify-center gap-5 lg:justify-start">
//                   {user ? (
//                     <Link to="/dashboard">
//                       <button className="flex items-center justify-center gap-2 px-10 py-4 text-xl font-medium text-white transition-colors duration-300 border-2 bg-main-color rounded-xl hover:bg-orange-600 w-60 border-main-color hover:border-orange-600">
//                         Get Started Now
//                       </button>
//                     </Link>
//                   ) : (
//                     <>
//                       <Link to="/signin">
//                         <button className="flex items-center justify-center gap-2 px-10 py-4 text-xl font-medium text-white transition-colors duration-300 border-2 bg-main-color rounded-xl hover:bg-orange-600 w-60 border-main-color hover:border-orange-600">
//                           Get Started Now
//                         </button>
//                       </Link>
//                     </>
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
//                   <div className="flex gap-3 text-3xl font-BasierSquare flex-nowrap">
//                     {typeof item === 'string' ? (<li className="list-none">{item}</li>) : item}
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
import { useAuth } from "../auth/AuthContextWeb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSection.css";
import { FaReddit } from "react-icons/fa"; // Import React Icon
import GradientHeading from "./GradientHeading";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 6000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  arrows: false,
  pauseOnHover: false,
  variableWidth: true,
  centerMode: true,
  centerPadding: '0px',
  ltl: true,
};

const HeroSection = () => {
  const { user, loading } = useAuth();

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  const listItems = useMemo(() => [
    <span key="redditIcon1" className="text-gray-600"><FaReddit size={40} className="mx-3 text-main-color" /></span>,
    "Get trending by sending instant upvotes to any post or comment",
    <span key="redditIcon2" className="text-gray-600"><FaReddit size={40} className="mx-3 text-main-color" /></span>,
    "Take control of comments on your posts by sending upvotes and downvotes",
  ], []);


  return (
    <section className="relative -mt-24 overflow-hidden">
      <div className="pt-20 pb-14">
        <div className="absolute inset-0">
          <img src={images.overlay_1} className="object-cover w-full min-w-full min-h-full" alt="" />
        </div>
        {/* Hero Content */}
        <div className="container">
          <div className="pt-[100px] z-10 relative">
            <div className="flex justify-center">
              <div className="flex flex-col items-center justify-center max-w-full lg:w-[750px] text-center">
                {/* <h1 className="mb-6 text-5xl font-semibold tracking-[-3px] md:text-7xl lg:text-[100px] font-BasierSquare">
                  Boost Your Reddit
                  <span className="px-3 tracking-[-3px] text-transparent bg-clip-text bg-gradient-to-r from-[#ffb087] via-[#ff6518] to-main-color">
                    Upvotes.
                  </span>
                </h1> */}

                <GradientHeading
                  tag="h1"
                  beforeText="Boost Your Reddit"
                  gradientText="Upvotes."
                  beforeSpanClassName="font-bold"
                  textSize="text-5xl md:text-7xl lg:text-[100px]"
                  tracking="tracking-[-3px]"
                  className="mb-10"
                />

                <p className="mb-8 w- font-BasierSquare text-[#333b52] md:text-lg lg:text-2xl">
                  Gain real engagement and grow your online audience quickly with
                  our proven strategies and tools.
                </p>

                <div className="flex flex-row items-center justify-center gap-5 lg:justify-start">
                  {user ? (
                    <Link to="/dashboard">
                      <button className="flex items-center justify-center gap-2 px-10 py-4 text-xl font-medium text-white transition-colors duration-300 border-2 bg-main-color rounded-xl hover:bg-orange-600 w-60 border-main-color hover:border-orange-600">
                        Get Started Now
                      </button>
                    </Link>
                  ) : (
                    <Link to="/signin">
                      <button className="flex items-center justify-center gap-2 px-10 py-4 text-xl font-medium text-white transition-colors duration-300 border-2 bg-main-color rounded-xl hover:bg-orange-600 w-60 border-main-color hover:border-orange-600">
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
                  <div className="flex gap-3 text-3xl font-BasierSquare flex-nowrap">
                    {typeof item === 'string' ? (<li className="list-none">{item}</li>) : item}
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