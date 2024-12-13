// import React, { useRef, useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import blog from "../../assets/Images/blog-image.png";
// import men from "../../assets/Images/men.jpg";
// import "../../index.css";
// import YellowGirl from "../../assets/Images/Yellowgirl.jpg";
// import { Link } from "react-router-dom"; // Import Link component
// import { FaEye } from "react-icons/fa";
// import { IoMdShare } from "react-icons/io";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// export function Slider() {
//   return (
//     <>
//       <Swiper
//         spaceBetween={0}
//         centeredSlides={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={false}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="!w-full shadow-md mySwiper rounded-small"
//       >
//         <SwiperSlide>
//           <div className="bg-[#fff] text-[#2D2624] relative border-gray-border z-0 cursor-pointer overflow-hidden">
//             <div className="relative">
//               <div className="size-12 rounded-full overflow-hidden select-none left-3 z-[9] -bottom-6 absolute border-4 border-white">
//                 <img
//                   src={men}
//                   alt="Background"
//                   className="absolute top-0 left-0 object-cover w-full h-full"
//                 />
//               </div>
//               <span className="overflow-hidden relative align-bottom inline-block w-full h-40 bg-[#FDE6D9]">
//                 <img
//                   src={blog}
//                   alt=""
//                   className="absolute bottom-0 h-8 right-4"
//                 />
//               </span>
//             </div>
//             <div className="px-4 mt-8 text-start">
//               <div className="space-y-1 text-xs">
//                 <h1 className="text-[#2d2624]">Ethan Young</h1>
//                 <p className="text-[#919EAB]">14 Aug 2024</p>
//                 <p className="text-[#2D2624] leading-6">
//                   Decoding Reddit’s Algorithms: Best Practices for Marketers
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center justify-end p-8">
//               <div className="flex items-center text-[#919EAB] space-x-4">
//                 <span className="flex items-center space-x-1">
//                   <FaEye className="size-4" />
//                   <span className="text-[#919EAB] text-xs">467</span>
//                 </span>
//                 <span className="flex items-center space-x-1">
//                   <IoMdShare className="size-4" />
//                   <span className="text-[#919EAB] text-xs">7</span>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="bg-[#fff] text-[#2D2624] relative border-gray-border z-0 cursor-pointer overflow-hidden">
//             <div className="relative">
//               <div className="size-12 rounded-full overflow-hidden select-none left-3 z-[9] -bottom-6 absolute border-4 border-white">
//                 <img
//                   src={YellowGirl}
//                   alt="Background"
//                   className="absolute top-0 left-0 object-cover w-full h-full"
//                 />
//               </div>
//               <span className="overflow-hidden relative align-bottom inline-block w-full h-40 bg-[#FDE6D9]">
//                 <img
//                   src={blog}
//                   alt=""
//                   className="absolute bottom-0 h-8 right-4"
//                 />
//               </span>
//             </div>
//             <div className="px-4 mt-8 text-start">
//               <div className="space-y-1 text-xs">
//                 <h1 className="text-[#2d2624]">Abigail Moore</h1>
//                 <p className="text-[#919EAB]">01 Jul 2024</p>
//                 <p className="text-[#2D2624] leading-6">
//                   Beginner Mistakes to Avoid in most data Reddit Marketing
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center justify-end p-8">
//               <div className="flex items-center text-[#919EAB] space-x-4">
//                 <span className="flex items-center space-x-1">
//                   <FaEye className="size-4" />
//                   <span className="text-[#919EAB] text-xs">943</span>
//                 </span>
//                 <span className="flex items-center space-x-1">
//                   <IoMdShare className="size-4" />
//                   <span className="text-[#919EAB] text-xs">13</span>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="bg-[#fff] text-[#2D2624] relative border-gray-border z-0 cursor-pointer overflow-hidden">
//             <div className="relative">
//               <div className="size-12 rounded-full overflow-hidden select-none left-3 z-[9] -bottom-6 absolute border-4 border-white">
//                 <img
//                   src={YellowGirl}
//                   alt="Background"
//                   className="absolute top-0 left-0 object-cover w-full h-full"
//                 />
//               </div>
//               <span className="overflow-hidden relative align-bottom inline-block w-full h-40 bg-[#FDE6D9]">
//                 <img
//                   src={blog}
//                   alt=""
//                   className="absolute bottom-0 h-8 right-4"
//                 />
//               </span>
//             </div>
//             <div className="px-4 mt-8 text-start">
//               <div className="space-y-1 text-xs">
//                 <h1 className="text-[#2d2624]">Abigail Moore</h1>
//                 <p className="text-[#919EAB]">05 Jul 2024</p>
//                 <p className="text-[#2D2624] leading-6">
//                   Beginner Mistakes to Avoid in most user Reddit Marketing
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center justify-end p-8">
//               <div className="flex items-center text-[#919EAB] space-x-4">
//                 <span className="flex items-center space-x-1">
//                   <FaEye className="size-4" />
//                   <span className="text-[#919EAB] text-xs">522</span>
//                 </span>
//                 <span className="flex items-center space-x-1">
//                   <IoMdShare className="size-4" />
//                   <span className="text-[#919EAB] text-xs">10</span>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

// export default Slider;



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { FaEye } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import men from "../../assets/Images/men.jpg";
import YellowGirl from "../../assets/Images/Yellowgirl.jpg";
import blog from "../../assets/Images/blog-image.png";
// Sample slide data
const slideData = [
  {
    imgSrc: men,
    profileSrc: blog,
    name: "Ethan Young",
    date: "14 Aug 2024",
    description: "Decoding Reddit’s Algorithms: Best Practices for Marketers",
    views: 467,
    shares: 7,
  },
  {
    imgSrc: YellowGirl,
    profileSrc: blog,
    name: "Abigail Moore",
    date: "01 Jul 2024",
    description: "Beginner Mistakes to Avoid in most data Reddit Marketing",
    views: 943,
    shares: 13,
  },
];

export function Slider() {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination]}
      className="!w-full shadow-md mySwiper rounded-small"
    >
      {slideData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[#fff] text-[#2D2624] relative border-gray-border z-0 cursor-pointer overflow-hidden">
            <div className="relative">
              <div className="size-12 rounded-full overflow-hidden select-none left-3 z-[9] -bottom-6 absolute border-4 border-white">
                <img
                  src={slide.imgSrc}
                  alt="Profile"
                  className="absolute top-0 left-0 object-cover w-full h-full"
                />
              </div>
              <span className="overflow-hidden relative align-bottom inline-block w-full h-40 bg-[#FDE6D9]">
                <img
                  src={slide.profileSrc}
                  alt="Blog"
                  className="absolute bottom-0 h-8 right-4"
                />
              </span>
            </div>
            <div className="px-4 mt-8 text-start">
              <div className="space-y-1 text-xs">
                <h1 className="text-[#2d2624]">{slide.name}</h1>
                <p className="text-[#919EAB]">{slide.date}</p>
                <p className="text-[#2D2624] leading-6">{slide.description}</p>
              </div>
            </div>
            <div className="flex items-center justify-end p-8">
              <div className="flex items-center text-[#919EAB] space-x-4">
                <span className="flex items-center space-x-1">
                  <FaEye className="size-4" />
                  <span className="text-[#919EAB] text-xs">{slide.views}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <IoMdShare className="size-4" />
                  <span className="text-[#919EAB] text-xs">{slide.shares}</span>
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
