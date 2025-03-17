"use client";
import React from "react";
import { FaBolt, FaKey, FaDollarSign } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import { Link } from "react-router-dom";
import GradientHeading from "../GradientHeading";

const OurBenefits = () => {
  const icons = [
    {
      id: 1,
      title: "Instant Results",
      icon: <FaBolt />, // Using FaBolt
      detail: `With our instant results, you'll be able to quickly analyze data, track your progress, and make changes in real-time for optimal performance.`,
    },
    {
      id: 2,
      title: "Safe & Secure",
      icon: <FaKey />, // Using FaKey
      detail: `We continuously monitor and update our security measures to ensure the highest level of protection.`,
    },
    {
      id: 3,
      title: "Affordable Plans",
      icon: <FaDollarSign />, // Using FaDollarSign
      detail: `Choose from a variety of plans with different feature sets to meet your needs, all at affordable price points`,
    },
    {
      id: 4,
      title: "Global Reach",
      icon: <IoEarth />, // Using IoEarth
      detail: `Our platform is designed to provide you with seamless access to a global audience, helping you expand your reach beyond borders`,
    },
  ];

  return (
    // <section className="Benefits-Cards bg-[#ffeee5] lg:py-10 py-5">
    //   <div className="container mx-auto">
    //     <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-14">
    //       <div className="Heading-Wrap">
    //         <GradientHeading
    //           tag="h2"
    //           beforeText="Boost your online presence "
    //           gradientText="with to ease! "
    //           beforeSpanClassName="font-bold"
    //           textSize="lg:text-4xl md:text-3xl text-2xl"
    //           className="mb-5"
    //         />
    //         <p className="mb-6 lg:text-xl text-medium font-normal text-primary">
    //           Whether you're looking to rank higher on Reddit, Quora, YouTube,
    //           or other platforms, our upvote services are here to help you
    //           shine. With real engagement from verified users, we ensure your
    //           content gets the visibility it deserves.
    //         </p>
    //         <Link
    //           className="inline-flex items-center gap-3 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
    //           to="/contact-us"
    //         >
    //           Learn more
    //         </Link>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="container mx-auto">
    //     <div className="grid grid-cols-1 md:gap-4 gap-10 sm:grid-cols-2 lg:grid-cols-4">
    //       {icons.map((icon) => (
    //         <div
    //           key={icon.id}
    //           className="relative p-6 bg-white border border-gray-300 rounded-2xl"
    //           style={{
    //             boxShadow: "",
    //           }}
    //         >
    //           <div
    //             className={`absolute -top-7 left-6 rounded-full max-w-fit p-3 bg-white border border-gray-300`}
    //           >
    //             {React.cloneElement(icon.icon, {
    //               className: `w-5 h-5 text-main-color `,
    //             })}
    //           </div>
    //           <h3 className="mt-3 text-xl font-semibold text-black">{icon.title}</h3>
    //           <p className="mt-3 font-medium text-gray-700 text-small">
    //             {icon.detail}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section >


    <section className="Benefits-Cards bg-gradient-to-r from-[#ffeee5] to-[#ffd8c5] lg:py-10 py-5">
      <div className="container mx-auto">
        {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-14">
          <div className="Heading-Wrap">
            <GradientHeading
              tag="h2"
              beforeText="Boost your online presence "
              gradientText="with to ease! "
              beforeSpanClassName="font-bold"
              textSize="lg:text-4xl md:text-3xl text-2xl"
              className="mb-5"
            />
            <p className="mb-6 lg:text-xl text-medium font-normal text-primary">
              Whether you're looking to rank higher on Reddit, Quora, YouTube, or
              other platforms, our upvote services are here to help you shine. With
              real engagement from verified users, we ensure your content gets the
              visibility it deserves.
            </p>
            <Link
              className="inline-flex items-center gap-3 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
              to="/contact-us"
            >
              Learn more
            </Link>
          </div>
        </div> */}
        <div className="grid grid-cols-1 lg:gap-6 lg:grid-cols-2 mb-14">
          <GradientHeading
            tag="h2"
            beforeText="Boost your online presence "
            gradientText="with to ease! "
            beforeSpanClassName="font-bold"
            textSize="lg:text-4xl md:text-3xl text-2xl"
            className="mb-5"
          />
          <div className="content-wrap">
            <p className="mb-6 lg:text-xl text-medium font-medium text-para-color">
              Whether you're looking to rank higher on Reddit, Quora, YouTube,
              or other platforms, our upvote services are here to help you
              shine. With real engagement from verified users, we ensure your
              content gets the visibility it deserves.
            </p>
            <Link
              className="inline-flex items-center gap-3 px-8 py-2 lg:text-lg text-small font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
              to="/contact-us"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:gap-4 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {icons.map((icon) => (
            <div
              key={icon.id}
              className="group relative p-6 bg-white border border-gray-300 rounded-2xl  hover:border-main-color transition-all ease-in duration-300"
            >
              {/* Icon */}
              <div
                className={`absolute -top-7 left-6 rounded-full max-w-fit p-3 bg-white border border-gray-300 group-hover:bg-main-color transition-all ease-in duration-300`}
              >
                {React.cloneElement(icon.icon, {
                  className: `w-5 h-5 text-main-color group-hover:text-white transition-all ease-in duration-300`,
                })}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-black group-hover:text-main-color ease-in transition-all duration-300">
                {icon.title}
              </h3>
              <p className="mt-3 text-active text-small font-medium">
                {icon.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default OurBenefits;