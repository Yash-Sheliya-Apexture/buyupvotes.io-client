import React from "react";
import logo from "../../assets/Images/blog-image.png";
import { useState } from "react";
import Men from "../../assets/Images/men.jpg";
import cover from "../../assets/Images/cover_image_13.png";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import cover2 from "../../assets/Images/cover_image_12.jpg";
import girl from "../../assets/Images/profile_image_2.jpg";

const Dropdown = ({ options, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]); // Set first option as default

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Update state when user selects an option
  };

  return (
    <div className="relative">
      <label className="font-medium text-gray-700">{placeholder}</label>
      <select
        value={selectedOption}
        onChange={handleChange}
        className="ml-2 rounded-md p-2 outline-none"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const Blog = () => {
  const speeds = ["Latest", "Popular", "Oldest"];

  return (
    <div className="container mx-auto">
      {/* Blog Logo */}
      <div className="flex justify-center mb-8">
        <img src={logo} alt="Blog_logo" className="h-10" />
      </div>

      {/* Blog Header Section */}
      <div className="flex justify-between items-center">
        <p className="text-[#2D2624] font-medium text-[18px]">
          Interested in guest posting on our blog? Please{" "}
          <span className="text-[#FF5700] underline underline-offset-1 font-bold">
            contact us
          </span>{" "}
          us we'd love to hear from you!
        </p>

        {/* Dropdown for Sorting */}
        <Dropdown options={speeds} placeholder="Sort By:" />
      </div>

      {/* Blog-Card Section */}
      <div className="flex flex-flow gap-6 my-8">
        <div className="bg-[#fff] text-[#2D2624] relative shadow-md border-gray-border z-0 cursor-pointer overflow-hidden rounded-md">
          <div className="relative">
            <svg
              class="w-22 h-9 text-white left-0 z-[9] -bottom-4 absolute"
              fill="none"
              viewBox="0 0 144 62"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m111.34 23.88c-10.62-10.46-18.5-23.88-38.74-23.88h-1.2c-20.24 0-28.12 13.42-38.74 23.88-7.72 9.64-19.44 11.74-32.66 12.12v26h144v-26c-13.22-.38-24.94-2.48-32.66-12.12z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </svg>
            <div className="size-10 rounded-full overflow-hidden select-none left-6 z-[9] -bottom-6 absolute">
              <img
                src={Men}
                alt="blog_men"
                className="w-full h-full text-center object-cover text-transparent"
              />
            </div>
            <span className="overflow-hidden relative align-bottom inline-block w-full h-[200px]">
              <img
                src={cover}
                alt=""
                className="w-full h-full object-cover top-0 left-0 absolute"
              />
            </span>
          </div>

          <div className="pt-9 px-6">
            <div className="space-y-1">
              <h1 className="text-[#2d2624] font-bold">Ethan Young</h1>
              <p className="text-[#919EAB] font-medium">14 Aug 2024</p>
              <p>Decoding Reddit’s Algorithms: Best Practices for Marketers</p>
            </div>
          </div>

          <div className="flex items-center justify-end mt-10 m-4">
            <div className="flex items-center text-gray-500 space-x-4">
              <span className="flex items-center space-x-2">
                <FaEye className="size-5" />
                <span>467</span>
              </span>
              <span className="flex items-center space-x-2">
                <IoMdShare className="size-5" />
                <span>7</span>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] text-[#2D2624] relative shadow-md border-gray-border z-0 cursor-pointer overflow-hidden rounded-md">
          <div className="relative">
            <svg
              class="w-22 h-9 text-white left-0 z-[9] -bottom-4 absolute"
              fill="none"
              viewBox="0 0 144 62"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m111.34 23.88c-10.62-10.46-18.5-23.88-38.74-23.88h-1.2c-20.24 0-28.12 13.42-38.74 23.88-7.72 9.64-19.44 11.74-32.66 12.12v26h144v-26c-13.22-.38-24.94-2.48-32.66-12.12z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </svg>
            <div className="size-10 rounded-full overflow-hidden select-none left-6 z-[9] -bottom-6 absolute">
              <img
                src={girl}
                alt="blog_men"
                className="w-full h-full text-center object-cover text-transparent"
              />
            </div>
            <span className="overflow-hidden relative align-bottom inline-block w-full h-[200px]">
              <img
                src={cover2}
                alt=""
                className="w-full h-full object-cover top-0 left-0 absolute"
              />
            </span>
          </div>

          <div className="pt-9 px-6">
            <div className="space-y-1">
              <h1 className="text-[#2d2624] font-bold">Abigail Moore</h1>
              <p className="text-[#919EAB] font-medium">27 Jul 2024</p>
              <p>The Best Times to Post on Reddit for Optimal Exposure</p>
            </div>
          </div>

          <div className="flex items-center justify-end mt-10 m-4">
            <div className="flex items-center text-gray-500 space-x-4">
              <span className="flex items-center space-x-2">
                <FaEye className="size-5" />
                <span>943</span>
              </span>
              <span className="flex items-center space-x-2">
                <IoMdShare className="size-5" />
                <span>13</span>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] text-[#2D2624] relative shadow-md border-gray-border z-0 cursor-pointer overflow-hidden rounded-md">
          <div className="relative">
            <svg
              class="w-22 h-9 text-white left-0 z-[9] -bottom-4 absolute"
              fill="none"
              viewBox="0 0 144 62"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m111.34 23.88c-10.62-10.46-18.5-23.88-38.74-23.88h-1.2c-20.24 0-28.12 13.42-38.74 23.88-7.72 9.64-19.44 11.74-32.66 12.12v26h144v-26c-13.22-.38-24.94-2.48-32.66-12.12z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </svg>
            <div className="size-10 rounded-full overflow-hidden select-none left-6 z-[9] -bottom-6 absolute">
              <img
                src={girl}
                alt="blog_men"
                className="w-full h-full text-center object-cover text-transparent"
              />
            </div>
            <span className="overflow-hidden relative align-bottom inline-block w-full h-[200px]">
              <img
                src={cover}
                alt=""
                className="w-full h-full object-cover top-0 left-0 absolute"
              />
            </span>
          </div>

          <div className="pt-9 px-6">
            <div className="space-y-1">
              <h1 className="text-[#2d2624] font-bold">Abigail Moore</h1>
              <p className="text-[#919EAB] font-medium">01 Jul 2024</p>
              <p>Beginner Mistakes to Avoid in Reddit Marketing</p>
            </div>
          </div>

          <div className="flex items-center justify-end mt-10 m-4">
            <div className="flex items-center text-gray-500 space-x-4">
              <span className="flex items-center space-x-2">
                <FaEye className="size-5" />
                <span>212</span>
              </span>
              <span className="flex items-center space-x-2">
                <IoMdShare className="size-5" />
                <span>3</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
