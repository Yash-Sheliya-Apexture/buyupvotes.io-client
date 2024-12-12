import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import blog from "../../assets/Images/blog-image.png";
import men from "../../assets/Images/men.jpg";
import "../../index.css";
import YellowGirl from "../../assets/Images/Yellowgirl.jpg";
import { Link } from "react-router-dom"; // Import Link component
import { FaEye } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-small shadow-md"
      >
        <SwiperSlide>
          <div className="bg-[#fff] text-[#2D2624] relative shadow-md border-gray-border z-0 cursor-pointer overflow-hidden rounded-small">
            <div className="relative">
              <div className="size-10 rounded-full overflow-hidden select-none left-3 z-[9] -bottom-6 absolute">
                <img
                  src={men}
                  alt="Background"
                  className="w-full h-full object-cover top-0 left-0 absolute"
                />
              </div>
              <span className="overflow-hidden relative align-bottom inline-block w-full h-40 bg-[#FDE6D9]">
                <img
                  src={blog}
                  alt=""
                  className="absolute h-8 bottom-0 right-4"
                />
              </span>
            </div>
            <div className="text-start mt-8 px-4">
              <div className="space-y-1 text-xs">
                <h1 className="text-[#2d2624]">Ethan Young</h1>
                <p className="text-[#919EAB]">14 Aug 2024</p>
                <p className="text-[#2D2624] leading-6">
                  Decoding Reddit’s Algorithms: Best Practices for Marketers
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end p-8">
              <div className="flex items-center text-[#919EAB] space-x-4">
                <span className="flex items-center space-x-1">
                  <FaEye className="size-4" />
                  <span className="text-[#919EAB] text-xs">467</span>
                </span>
                <span className="flex items-center space-x-1">
                  <IoMdShare className="size-4" />
                  <span className="text-[#919EAB] text-xs">7</span>
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#fff] text-[#2D2624] relative shadow-md border-gray-border z-0 cursor-pointer overflow-hidden rounded-small">
            <div className="relative">
              <div className="size-10 rounded-full overflow-hidden select-none left-3 z-[9] -bottom-6 absolute">
                <img
                  src={YellowGirl}
                  alt="Background"
                  className="w-full h-full object-cover top-0 left-0 absolute"
                />
              </div>
              <span className="overflow-hidden relative align-bottom inline-block w-full h-40 bg-[#FDE6D9]">
                <img
                  src={blog}
                  alt=""
                  className="absolute h-8 bottom-0 right-4"
                />
              </span>
            </div>
            <div className="text-start mt-8 px-4">
              <div className="space-y-1 text-xs">
                <h1 className="text-[#2d2624]">Abigail Moore</h1>
                <p className="text-[#919EAB]">01 Jul 2024</p>
                <p className="text-[#2D2624] leading-6">
                  Beginner Mistakes to Avoid in most data Reddit Marketing
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end p-8">
              <div className="flex items-center text-[#919EAB] space-x-4">
                <span className="flex items-center space-x-1">
                  <FaEye className="size-4" />
                  <span className="text-[#919EAB] text-xs">943</span>
                </span>
                <span className="flex items-center space-x-1">
                  <IoMdShare className="size-4" />
                  <span className="text-[#919EAB] text-xs">13</span>
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#fff] text-[#2D2624] relative shadow-md border-gray-border z-0 cursor-pointer overflow-hidden rounded-small">
            <div className="relative">
              <div className="size-10 rounded-full overflow-hidden select-none left-3 z-[9] -bottom-6 absolute">
                <img
                  src={YellowGirl}
                  alt="Background"
                  className="w-full h-full object-cover top-0 left-0 absolute"
                />
              </div>
              <span className="overflow-hidden relative align-bottom inline-block w-full h-40 bg-[#FDE6D9]">
                <img
                  src={blog}
                  alt=""
                  className="absolute h-8 bottom-0 right-4"
                />
              </span>
            </div>
            <div className="text-start mt-8 px-4">
              <div className="space-y-1 text-xs">
                <h1 className="text-[#2d2624]">Abigail Moore</h1>
                <p className="text-[#919EAB]">05 Jul 2024</p>
                <p className="text-[#2D2624] leading-6">
                  Beginner Mistakes to Avoid in most user Reddit Marketing
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end p-8">
              <div className="flex items-center text-[#919EAB] space-x-4">
                <span className="flex items-center space-x-1">
                  <FaEye className="size-4" />
                  <span className="text-[#919EAB] text-xs">522</span>
                </span>
                <span className="flex items-center space-x-1">
                  <IoMdShare className="size-4" />
                  <span className="text-[#919EAB] text-xs">10</span>
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
