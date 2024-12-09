import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import blog from "../../assets/Images/blog-image.png";
import men from "../../assets/Images/men.jpg";
import "../../index.css";
import YellowGirl from "../../assets/Images/Yellowgirl.jpg";

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
          <div className="bg-light-brown flex flex-col items-end justify-end h-36 pb-1 pl-14 pr-2">
            <img src={blog} alt="upvotes-blog" className="h-8" />
          </div>
          <div className="p-2.5 space-y-4 text-start">
            <div className="flex space-x-3">
              <img
                src={men}
                alt="Author Image"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-normal text-sub-color">Ethan Young</p>
              <p className="text-xxs text-light-gray">14 Aug 2024</p>
            </div>

            <h2 className="text-xs font-normal text-sub-color hover:underline">
              Decoding Reddit’s Algorithms: Best Practices for Marketers
            </h2>
          </div>
          <div className="flex items-center justify-end px-4 py-2">
            <div className="flex items-center text-gray-500 space-x-4">
              <span className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="component-iconify MuiBox-root css-bla85z iconify iconify--solar"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"
                  ></path>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-xxs">467</span>
              </span>
              <span className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="component-iconify MuiBox-root css-bla85z iconify iconify--solar"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M13.803 5.333c0-1.84 1.5-3.333 3.348-3.333A3.34 3.34 0 0 1 20.5 5.333c0 1.841-1.5 3.334-3.349 3.334a3.35 3.35 0 0 1-2.384-.994l-4.635 3.156a3.34 3.34 0 0 1-.182 1.917l5.082 3.34a3.35 3.35 0 0 1 2.12-.753a3.34 3.34 0 0 1 3.348 3.334C20.5 20.507 19 22 17.151 22a3.34 3.34 0 0 1-3.348-3.333a3.3 3.3 0 0 1 .289-1.356L9.05 14a3.35 3.35 0 0 1-2.202.821A3.34 3.34 0 0 1 3.5 11.487a3.34 3.34 0 0 1 3.348-3.333c1.064 0 2.01.493 2.623 1.261l4.493-3.059a3.3 3.3 0 0 1-.161-1.023"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-xxs">7</span>
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-light-brown flex flex-col items-end justify-end h-36 pb-1 pl-14 pr-2">
            <img src={blog} alt="upvotes-blog" className="h-8" />
          </div>
          <div className="p-2.5 space-y-4 text-start">
            <div className="flex space-x-3">
              <img
                src={YellowGirl}
                alt="Author Image"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-normal text-sub-color">
                Abigail Moore
              </p>
              <p className="text-xxs text-light-gray">27 Jul 2024</p>
            </div>

            <h2 className="text-xs font-normal text-sub-color hover:underline">
              The Best Times to Post on Reddit for Optimal Exposure
            </h2>
          </div>
          <div className="flex items-center justify-end px-4 py-2">
            <div className="flex items-center text-gray-500 space-x-4">
              <span className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="component-iconify MuiBox-root css-bla85z iconify iconify--solar"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"
                  ></path>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-xxs">467</span>
              </span>
              <span className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="component-iconify MuiBox-root css-bla85z iconify iconify--solar"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M13.803 5.333c0-1.84 1.5-3.333 3.348-3.333A3.34 3.34 0 0 1 20.5 5.333c0 1.841-1.5 3.334-3.349 3.334a3.35 3.35 0 0 1-2.384-.994l-4.635 3.156a3.34 3.34 0 0 1-.182 1.917l5.082 3.34a3.35 3.35 0 0 1 2.12-.753a3.34 3.34 0 0 1 3.348 3.334C20.5 20.507 19 22 17.151 22a3.34 3.34 0 0 1-3.348-3.333a3.3 3.3 0 0 1 .289-1.356L9.05 14a3.35 3.35 0 0 1-2.202.821A3.34 3.34 0 0 1 3.5 11.487a3.34 3.34 0 0 1 3.348-3.333c1.064 0 2.01.493 2.623 1.261l4.493-3.059a3.3 3.3 0 0 1-.161-1.023"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-xxs">7</span>
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-light-brown flex flex-col items-end justify-end h-36 pb-1 pl-14 pr-2">
            <img src={blog} alt="upvotes-blog" className="h-8" />
          </div>
          <div className="p-2.5 space-y-4 text-start">
            <div className="flex space-x-3">
              <img
                src={YellowGirl}
                alt="Author Image"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-normal text-sub-color">
                Abigail Moore
              </p>
              <p className="text-xxs text-light-gray">01 Jul 2024</p>
            </div>

            <h2 className="text-xs font-normal text-sub-color hover:underline">
              Beginner Mistakes to this code Avoid in Reddit Marketing
            </h2>
          </div>
          <div className="flex items-center justify-end px-4 py-2">
            <div className="flex items-center text-light-gray space-x-4">
              <span className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="component-iconify MuiBox-root css-bla85z iconify iconify--solar"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"
                  ></path>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-xxs">467</span>
              </span>
              <span className="flex items-center space-x-1 text-light-gray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="component-iconify MuiBox-root css-bla85z iconify iconify--solar"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M13.803 5.333c0-1.84 1.5-3.333 3.348-3.333A3.34 3.34 0 0 1 20.5 5.333c0 1.841-1.5 3.334-3.349 3.334a3.35 3.35 0 0 1-2.384-.994l-4.635 3.156a3.34 3.34 0 0 1-.182 1.917l5.082 3.34a3.35 3.35 0 0 1 2.12-.753a3.34 3.34 0 0 1 3.348 3.334C20.5 20.507 19 22 17.151 22a3.34 3.34 0 0 1-3.348-3.333a3.3 3.3 0 0 1 .289-1.356L9.05 14a3.35 3.35 0 0 1-2.202.821A3.34 3.34 0 0 1 3.5 11.487a3.34 3.34 0 0 1 3.348-3.333c1.064 0 2.01.493 2.623 1.261l4.493-3.059a3.3 3.3 0 0 1-.161-1.023"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-xxs">7</span>
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
