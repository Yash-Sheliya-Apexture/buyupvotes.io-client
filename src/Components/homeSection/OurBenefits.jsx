// IconSection.jsx
"use client";
import React from "react";
import { FaBolt, FaKey, FaDollarSign } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";

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
    <section className="bg-[#ffeee5] lg:py-16 py-5">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-14">
          <div className="lg:max-w-md">
            <h3 className="font-semibold font-BasierSquare md:text-large text-basic lg:text-[40px] lg:leading-[45px] text-center md:text-left tracking-normal">
              <span className="font-bold">Boost your online presence </span>
              <span className="pe-3 text-transparent bg-clip-text bg-gradient-to-r from-[#ffb087] via-[#ff6518] to-main-color">
                with to ease!
              </span>
            </h3>
          </div>
          <div className="content-wrap">
            <p className="mb-6 text-xl text-sub-color font-medium">
              Whether you're looking to rank higher on Reddit, Quora, YouTube,
              or other platforms, our upvote services are here to help you
              shine. With real engagement from verified users, we ensure your
              content gets the visibility it deserves.
            </p>
            <a
              className="inline-flex items-center gap-3 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
              href="/signup"
              data-discover="true"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {icons.map((icon) => (
          <div
            key={icon.id}
            className="relative bg-white p-6 rounded-2xl border border-gray-300"
            style={{
              boxShadow: "",
            }}
          >
            <div
              className={`absolute -top-7 left-6 rounded-full max-w-fit p-3 bg-white border border-gray-300`}
            >
              {React.cloneElement(icon.icon, {
                className: `w-5 h-5 text-main-color `,
              })}
            </div>
            <h3 className="text-xl font-semibold mt-3">{icon.title}</h3>
            <p className="mt-3 text-small font-medium text-gray-700">
              {icon.detail}
            </p>
          </div>
        ))}
      </div>
      </div>

    </section>
  );
};

export default OurBenefits;
