import React, { useState, useEffect } from "react";
import logo from "../../assets/Images/blog-image.png";
import { FaEye } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

const Blog = () => {
  const [blogs, setBlogs] = useState([]); // State to hold blog data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch the data from public/data.json
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching blog data:", error));
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  return (
    <div className="container mx-auto">
      {/* Blog Logo */}
      <div className="flex justify-center mb-8">
        <img src={logo} alt="Blog_logo" className="h-10" />
      </div>

      {/* Blog-Card Section */}
      <div className="flex flex-wrap gap-6 my-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#fff] text-[#2D2624] relative shadow-md border-gray-border z-0 cursor-pointer overflow-hidden rounded-md"
          >
            <div className="relative">
              <svg
                className="w-22 h-9 text-white left-0 z-[9] -bottom-4 absolute"
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
              <div className="size-10 rounded-full overflow-hidden select-none left-6 z-[9] -bottom-6 absolute">
                <img
                  src={blog.profileImage}
                  alt="profile"
                  className="w-full h-full text-center object-cover text-transparent"
                />
              </div>
              <span className="overflow-hidden relative align-bottom inline-block w-full h-[200px]">
                <img
                  src={blog.coverImage}
                  alt="Background"
                  className="w-full h-full object-cover top-0 left-0 absolute"
                />
              </span>
            </div>

            <div className="pt-9 px-6">
              <div className="space-y-1">
                <h1 className="text-[#2d2624] font-bold">{blog.author}</h1>
                <p className="text-[#919EAB] font-medium">{blog.date}</p>
                <p>{blog.title}</p>
              </div>
            </div>

            <div className="flex items-center justify-end mt-10 m-4">
              <div className="flex items-center text-gray-500 space-x-4">
                <span className="flex items-center space-x-2">
                  <FaEye className="size-5" />
                  <span>{blog.views}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <IoMdShare className="size-5" />
                  <span>{blog.shares}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
