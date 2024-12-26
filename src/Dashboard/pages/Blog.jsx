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
    fetch("/data.json")
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
    <div className="lg:container mx-auto">
      {/* Blog Logo */}
      <div className="flex justify-center mb-8">
        <img src={logo} alt="Blog_logo" className="h-10" />
      </div>

      {/* Blog Header with Filter */}
      <div className="flex lg:flex-row lg:items-center justify-between flex-col">
        <h1 className="text-sub-color font-medium lg:text-base">
          Interested in guest posting on our blog? Please{" "}
          <span className="text-main-color font-medium underline underline-offset-1 cursor-pointer">
            <Link to="/dashboard/ContactUs">contact us</Link>
          </span>{" "}
          we'd love to hear from you!
        </h1>

        {/* Dropdown Modify */}
        <div className="flex items-center py-2 lg:w-1/4">
          <span className="mr-2 text-nowrap text-sub-color font-medium">
            Sort By:
          </span>
          <Dropdown
            options={filterOptions}
            selectedValue={selectedFilter}
            onSelect={(value) => setSelectedFilter(value)} // Update filter state
            className="w-52"
          />
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedBlogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/dashboard/Blog/${blog.id}`}
            className="bg-white text-sub-color relative shadow-main z-0 cursor-pointer overflow-hidden rounded-small"
          >
            <div className="relative">
              <div className="w-20 h-9 text-white left-2 z-10 -bottom-4 absolute">
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
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <span className="overflow-hidden relative inline-block w-full h-[200px]">
                <img
                  src={blog.coverImage}
                  alt="Background"
                  className="w-full h-full object-cover top-0 left-0 absolute"
                />
              </span>
            </div>

            <div className="pt-9 px-6">
              <div className="space-y-2 font-medium">
                <h1 className="text-sub-color">{blog.author}</h1>
                <p className="text-light-gray">{blog.date}</p>
                <p className="text-sub-color text-small leading-6">
                  {blog.title}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end p-8">
              <div className="flex items-center text-light-gray space-x-4">
                <span className="flex items-center space-x-1">
                  <FaEye className="size-4" />
                  <span className="text-light-gray text-xs">{blog.views}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <IoMdShare className="size-4" />
                  <span className="text-light-gray text-xs">{blog.shares}</span>
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
