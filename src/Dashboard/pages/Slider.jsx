// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, Pagination } from "swiper/modules";
// import { FaEye } from "react-icons/fa";
// import { IoMdShare } from "react-icons/io";

// export function Slider() {
//   const [blogs, setBlogs] = useState([]); // State to hold blog data

//   // Fetch slider data from the public folder
//   useEffect(() => {
//     fetch(`${import.meta.env.BASE_URL}data.json`)
//       .then((response) => response.json())
//       .then((data) => {
//         setBlogs(data);
//       })
//       .catch((error) => console.error("Error fetching blog data:", error));
//   }, []);

//   return (
//     <Swiper
//       spaceBetween={30}
//       centeredSlides={true}
//       autoplay={{
//         delay: 3000,
//         disableOnInteraction: false,
//       }}
//       pagination={{
//         clickable: true,
//         dynamicBullets: true,
//       }}
//       navigation={false}
//       modules={[Autoplay, Pagination]}
//       className="w-full border border-gray-300 mySwiper rounded-small shadow-main"
//     >
//       {blogs.map((blog, index) => (
//         <SwiperSlide key={blog.id}>
//           <div className="bg-[#fff] text-sub-color relative z-0 cursor-pointer overflow-hidden rounded-small">
//             <div className="relative">
//               <div className="w-[88px] h-[36px] text-white left-0 z-[9] -bottom-4 absolute">
//                 <svg
//                   fill="none"
//                   viewBox="0 0 144 62"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="m111.34 23.88c-10.62-10.46-18.5-23.88-38.74-23.88h-1.2c-20.24 0-28.12 13.42-38.74 23.88-7.72 9.64-19.44 11.74-32.66 12.12v26h144v-26c-13.22-.38-24.94-2.48-32.66-12.12z"
//                     fill="currentColor"
//                     fillRule="evenodd"
//                   ></path>
//                 </svg>
//                 <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-full absolute -bottom-2.5 left-6 z-9">
//                   <img
//                     src={blog.profileImage}
//                     alt="Profile"
//                     className="absolute top-0 left-0 object-cover w-full h-full rounded-full"
//                   />
//                 </div>
//               </div>
//               <span
//                 className="relative inline-block w-full overflow-hidden align-bottom h-44"
//                 style={{
//                   backgroundImage: `url(${blog.coverImage})`,
//                   backgroundSize: "cover",
//                   backgroundRepeat: "no-repeat",
//                   backgroundPosition: "center",
//                 }}
//               ></span>
//             </div>
//             <div className="px-6 mt-8 text-start">
//               <div className="space-y-1.5 text-small font-medium">
//                 <h1 className="text-sub-color">{blog.author}</h1>
//                 <p className="font-normal text-light-gray">{blog.date}</p>
//                 <p className="text-sub-color">{blog.title}</p>
//               </div>
//             </div>
//             <div className="flex items-center justify-end p-6 mt-2.5">
//               <div className="flex items-center space-x-4 text-xs font-medium text-light-gray">
//                 <span className="flex items-center space-x-1">
//                   <FaEye className="size-4" />
//                   <span>{blog.views}</span>
//                 </span>
//                 <span className="flex items-center space-x-1">
//                   <IoMdShare className="size-4" />
//                   <span>{blog.shares}</span>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

// export default Slider;



// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, Pagination } from "swiper/modules";
// import { FaEye } from "react-icons/fa";
// import { IoMdShare } from "react-icons/io";
// import { Link } from "react-router-dom";

// export function Slider() {
//     const [blogs, setBlogs] = useState([]); // State to hold blog data
//   const sanitizeTitle = (title) => {
//       return title
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/^-|-$/g, "");
//   };
//   // Fetch slider data from the public folder
//   useEffect(() => {
//     fetch(`${import.meta.env.BASE_URL}data.json`)
//       .then((response) => response.json())
//       .then((data) => {
//         setBlogs(data);
//       })
//       .catch((error) => console.error("Error fetching blog data:", error));
//   }, []);

//   return (
//     <Swiper
//       spaceBetween={30}
//       centeredSlides={true}
//       autoplay={{
//         delay: 3000,
//         disableOnInteraction: false,
//       }}
//       pagination={{
//         clickable: true,
//         dynamicBullets: true,
//       }}
//       navigation={false}
//       modules={[Autoplay, Pagination]}
//       className="w-full border border-gray-300 mySwiper rounded-small shadow-main"
//     >
//       {blogs.map((blog) => (
//         <SwiperSlide key={blog.id}>
//             <Link to={`/post/${sanitizeTitle(blog.title)}`} className="bg-[#fff] text-sub-color relative z-0 cursor-pointer overflow-hidden rounded-small">
//           <div >
//             <div className="relative">
//               <div className="w-[88px] h-[36px] text-white left-0 z-[9] -bottom-4 absolute">
//                 <svg
//                   fill="none"
//                   viewBox="0 0 144 62"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="m111.34 23.88c-10.62-10.46-18.5-23.88-38.74-23.88h-1.2c-20.24 0-28.12 13.42-38.74 23.88-7.72 9.64-19.44 11.74-32.66 12.12v26h144v-26c-13.22-.38-24.94-2.48-32.66-12.12z"
//                     fill="currentColor"
//                     fillRule="evenodd"
//                   ></path>
//                 </svg>
//                 <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-full absolute -bottom-2.5 left-6 z-9">
//                   <img
//                     src={blog.profileImage}
//                     alt="Profile"
//                     className="absolute top-0 left-0 object-cover w-full h-full rounded-full"
//                   />
//                 </div>
//               </div>
//               <span
//                 className="relative inline-block w-full overflow-hidden align-bottom h-44"
//                 style={{
//                   backgroundImage: `url(${blog.coverImage})`,
//                   backgroundSize: "cover",
//                   backgroundRepeat: "no-repeat",
//                   backgroundPosition: "center",
//                 }}
//               ></span>
//             </div>
//             <div className="px-6 mt-8 text-start">
//               <div className="space-y-1.5 text-small font-medium">
//                 <h1 className="text-sub-color">{blog.author}</h1>
//                 <p className="font-normal text-light-gray">{blog.date}</p>
//                 <p className="text-sub-color">{blog.title}</p>
//               </div>
//             </div>
//             <div className="flex items-center justify-end p-6 mt-2.5">
//               <div className="flex items-center space-x-4 text-xs font-medium text-light-gray">
//                 <span className="flex items-center space-x-1">
//                   <FaEye className="size-4" />
//                   <span>{blog.views}</span>
//                 </span>
//                 <span className="flex items-center space-x-1">
//                   <IoMdShare className="size-4" />
//                   <span>{blog.shares}</span>
//                 </span>
//               </div>
//             </div>
//           </div>
//          </Link>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

// export default Slider;


import React, { useEffect, useState, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { FaEye } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export const Slider = memo(() => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const sanitizeTitle = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  };

  useEffect(() => {
    setLoading(true); // Set loading to true when fetching starts
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
        setLoading(false); // Set loading to false even on error
      });
  }, []);

  if (loading) {
    return ( // Render skeleton loading when loading is true
      <div className="w-[348px] h-[395px] border border-gray-300 mySwiper rounded-small overflow-hidden shadow-main">
        {/* Render only one skeleton slide as placeholder */}
        <div
          className={`bg-white text-sub-color relative z-0 overflow-hidden`}
        >
          <div className="relative">
            <span className="overflow-hidden relative inline-block w-full h-[200px]">
              <Skeleton
                height={200}
                className="w-full h-full block"
              />
            </span>
          </div>
          <div className="px-6 pt-9">
            <div className="space-y-2 font-medium">
              <Skeleton width={100} />
              <Skeleton width={80} />
              <Skeleton count={2} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return ( // Render Swiper slider when not loading
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
      className="w-full border border-gray-300 mySwiper rounded-small shadow-main"
    >
      {blogs.map((blog) => (
        <SwiperSlide key={blog.id}>
          <Link to={`/post/${sanitizeTitle(blog.title)}`} className="bg-[#fff] text-sub-color relative z-0 cursor-pointer overflow-hidden rounded-small block"> {/* Added block display for Link */}
            <div>
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
                      loading="lazy" // Added lazy loading for profile image
                    />
                  </div>
                </div>
                <span
                  className="relative inline-block w-full overflow-hidden align-bottom h-44"
                  style={{
                    backgroundImage: `url(${blog.coverImage})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src={blog.coverImage} // Preload cover image - hidden but browser will cache it
                    alt=""
                    style={{ display: 'none' }}
                    loading="preload"
                  />
                </span>
              </div>
              <div className="px-6 mt-8 text-start">
                <div className="space-y-1.5 text-small font-medium">
                  <h1 className="text-sub-color">{blog.author}</h1>
                  <p className="font-normal text-light-gray">{blog.date}</p>
                  <p className="text-sub-color">{blog.title}</p>
                </div>
              </div>
              <div className="flex items-center justify-end p-6 mt-2.5">
                <div className="flex items-center space-x-4 text-xs font-medium text-light-gray">
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
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

Slider.displayName = 'Slider'; // Set display name for memoized component

export default Slider;