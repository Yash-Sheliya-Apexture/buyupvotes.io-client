"use client";

import { Tooltip } from "flowbite-react";

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { BsDash } from "react-icons/bs";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [showIcons, setShowIcons] = useState(false); // State for showing icons

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundBlog = data.find((b) => b.id === parseInt(id, 10));
        setBlog(foundBlog);
      });
  }, [id]);

  if (!blog) return <div className="text-base">Data Fetching...</div>;

  return (
    <>
      <div className="container mx-auto px-5">
        <div
          className="relative w-full h-[400px] bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: `url(${blog.coverImage})` }}
        >
          {/* Overlay for slight dark tint */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
            {/* Blog Title */}
            <h1 className="text-4xl text-center font-bold leading-tight">
              {blog.title}
            </h1>

            {/* Author & Date */}
            <div className="flex items-center space-x-4">
              <img
                src={blog.profileImage}
                alt="Author"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-sm">{blog.author}</p>
                <p className="text-sm opacity-60">{blog.date}</p>
              </div>
            </div>
          </div>

          {/* Share Button */}
          <div
            className="absolute bottom-6 right-6 flex items-center"
            onMouseEnter={() => setShowIcons(true)}
            onMouseLeave={() => setShowIcons(false)}
          >
            {/* Floating Icons */}
            <div
              className={`flex space-x-3 mr-2 transform transition-transform ease-in-out duration-300 ${
                showIcons ? "scale-100" : "scale-0"
              }`}
            >
              <Tooltip content="Twitter" arrow={false}>
                <button className="bg-white text-white p-3.5 rounded-full shadow-lg">
                  <FaTwitter className="text-blue-500 text-medium" />
                </button>
              </Tooltip>
              <Tooltip content="LinkedIn" arrow={false}>
                <button className="bg-white text-white p-3.5 rounded-full shadow-lg">
                  <FaLinkedinIn className="text-blue-500 text-medium" />
                </button>
              </Tooltip>
              <Tooltip content="Facebook" arrow={false}>
                <button className="bg-white text-white p-3.5 rounded-full shadow-lg">
                  <FaFacebookF className="text-blue-500 text-medium" />
                </button>
              </Tooltip>
            </div>

            {/* Main Share Button */}
            <button className="bg-main-color p-3 rounded-full shadow-lg hover:bg-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                viewBox="0 0 24 24"
                className="h-6 text-white"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M13.803 5.333c0-1.84 1.5-3.333 3.348-3.333A3.34 3.34 0 0 1 20.5 5.333c0 1.841-1.5 3.334-3.349 3.334a3.35 3.35 0 0 1-2.384-.994l-4.635 3.156a3.34 3.34 0 0 1-.182 1.917l5.082 3.34a3.35 3.35 0 0 1 2.12-.753a3.34 3.34 0 0 1 3.348 3.334C20.5 20.507 19 22 17.151 22a3.34 3.34 0 0 1-3.348-3.333a3.3 3.3 0 0 1 .289-1.356L9.05 14a3.35 3.35 0 0 1-2.202.821A3.34 3.34 0 0 1 3.5 11.487a3.34 3.34 0 0 1 3.348-3.333c1.064 0 2.01.493 2.623 1.261l4.493-3.059a3.3 3.3 0 0 1-.161-1.023"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="text-small mt-4 text-center">
          <a
            href="/dashboard"
            className="hover:underline text-sub-color font-bold"
          >
            Dashboard
          </a>
          <span className="px-3 text-gray-300">•</span>
          <Link
            to="/dashboard/BlogJson"
            className="hover:underline text-sub-color font-bold"
          >
            Blog
          </Link>
          <span className="px-3 text-gray-300">•</span>
          <span className="text-[#929191] font-medium">{blog.title}</span>
        </div>

        <hr className="my-5" />

        <div className="w-full">
          <div className="flex flex-col max-w-[720px] mx-auto border-b-2 border-dashed py-2">
            {blog.content.map((section, index) => {
              if (section.type === "h4") {
                return (
                  <h4
                    key={index}
                    className="text-sub-color font-bold text-basic"
                  >
                    <br />
                    {section.text}
                  </h4>
                );
              } else if (section.type === "p") {
                return (
                  <p
                    key={index}
                    className="text-sub-color text-small leading-6"
                  >
                    <br />
                    {section.text}
                  </p>
                );
              }
              return null;
            })}

            {/* Blog Tags */}
            <div className="flex space-x-2 mt-2">
              <a
                href="#"
                className="border border-sub-color text-sub-color px-6 py-0.5  rounded-full"
              >
                Reddit
              </a>
              <a
                href="#"
                className="border border-sub-color text-sub-color px-6 py-0.5  rounded-full"
              >
                Marketing
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
