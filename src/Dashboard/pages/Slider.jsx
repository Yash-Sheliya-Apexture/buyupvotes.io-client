import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { FaEye } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

export function Slider() {
  const [blogs, setBlogs] = useState([]); // State to hold blog data

  // Fetch slider data from the public folder
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => console.error("Error fetching blog data:", error));
  }, []);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination]}
      className="w-full mySwiper rounded-small shadow-main"
    >
      {blogs.map((blog, index) => (
        <SwiperSlide key={blog.id}>
          <div className="bg-[#fff] text-sub-color relative z-0 cursor-pointer overflow-hidden rounded-small">
            <div className="relative">
              <div className="w-[88px] h-[36px] text-white left-0 z-[9] -bottom-4 absolute">
                <svg
                  fill="none"
                  viewBox="0 0 144 62"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m111.34 23.88c-10.62-10.46-18.5-23.88-38.74-23.88h-1.2c-20.24 0-28.12 13.42-38.74 23.88-7.72 9.64-19.44 11.74-32.66 12.12v26h144v-26c-13.22-.38-24.94-2.48-32.66-12.12z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-full absolute -bottom-2.5 left-6 z-9">
                  <img
                    src={blog.profileImage}
                    alt="Profile"
                    className="absolute top-0 left-0 object-cover w-full h-full rounded-full"
                  />
                </div>
              </div>
              <span
                className="overflow-hidden relative align-bottom inline-block w-full h-44"
                style={{
                  backgroundImage: `url(${blog.coverImage})`,
                  backgroundSize: "cover", // Ensures the logo fits within the container
                  backgroundRepeat: "no-repeat", // Prevents the image from repeating
                  backgroundPosition: "center", // Centers the logo
                }}
              ></span>
            </div>
            <div className="px-6  mt-8 text-start">
              <div className="space-y-1.5 text-small font-medium">
                <h1 className="text-sub-color">{blog.author}</h1>
                <p className="text-light-gray font-normal">{blog.date}</p>
                <p className="text-sub-color">{blog.title}</p>
              </div>
            </div>
            <div className="flex items-center justify-end p-8">
              <div className="flex items-center text-light-gray font-medium text-xs space-x-4">
                <span className="flex items-center space-x-1">
                  <FaEye className="size-4" />
                  <span>{blog.views}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <IoMdShare className="size-4" />
                  <span>{blog.shares}</span>
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
