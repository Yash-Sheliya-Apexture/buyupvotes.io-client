import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/blog-image.png";
import { FaEye } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import Dropdown from "../components/Dropdown";

const Blog = () => {
  const [blogs, setBlogs] = useState([]); // State to hold blog data
  const [selectedFilter, setSelectedFilter] = useState("Latest"); // State to manage filter

  const filterOptions = ["Latest", "Popular", "Oldest"];

  // Fetch blogs data
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => console.error("Error fetching blog data:", error));
  }, []);

  // Sort blogs dynamically based on the selected filter
  const sortedBlogs = [...blogs].sort((a, b) => {
    if (selectedFilter === "Latest") {
      return new Date(b.date) - new Date(a.date); // Sort by newest date
    }
    if (selectedFilter === "Popular") {
      return b.views - a.views; // Sort by views
    }
    if (selectedFilter === "Oldest") {
      return new Date(a.date) - new Date(b.date); // Sort by oldest date
    }
    return 0;
  });

  return (
    <div className="container mx-auto">
      {/* Blog Logo */}
      <div className="flex justify-center mb-8">
        <img src={logo} alt="Blog_logo" className="h-10" />
      </div>

      {/* Blog Header with Filter */}
      <div className="flex flex-col justify-between lg:flex-row lg:items-center">
        <h1 className="font-medium text-sub-color lg:text-base">
          Interested in guest posting on our blog? Please{" "}
          <span className="font-medium underline cursor-pointer text-main-color underline-offset-1">
            <Link to="/dashboard/ContactUs">contact us</Link>
          </span>{" "}
          we'd love to hear from you!
        </h1>

        {/* Dropdown for sorting */}
        <div className="flex items-center py-2">
          <span className="mr-2 font-medium text-sub-color">Sort By:</span>
          <Dropdown
            options={filterOptions}
            selectedValue={selectedFilter}
            onSelect={(value) => setSelectedFilter(value)} // Update filter state
          />
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedBlogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/dashboard/blogjson/${blog.id}`}
            className="relative z-0 overflow-hidden bg-white cursor-pointer text-sub-color shadow-main rounded-small"
          >
            <div className="relative">
              <div className="absolute z-10 w-20 text-white h-9 left-2 -bottom-4">
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
                <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-full absolute -bottom-2.5 left-5">
                  <img
                    src={blog.profileImage}
                    alt="profile"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </div>
              <span className="overflow-hidden relative inline-block w-full h-[200px]">
                <img
                  src={blog.coverImage}
                  alt="Background"
                  className="absolute top-0 left-0 object-cover w-full h-full"
                />
              </span>
            </div>

            <div className="px-6 pt-9">
              <div className="space-y-2 font-medium">
                <h1 className="text-sub-color">{blog.author}</h1>
                <p className="text-light-gray">{blog.date}</p>
                <p className="leading-6 text-sub-color text-small">
                  {blog.title}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end p-8">
              <div className="flex items-center space-x-4 text-light-gray">
                <span className="flex items-center space-x-1">
                  <FaEye className="size-4" />
                  <span className="text-xs text-light-gray">{blog.views}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <IoMdShare className="size-4" />
                  <span className="text-xs text-light-gray">{blog.shares}</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};



export default Blog;


