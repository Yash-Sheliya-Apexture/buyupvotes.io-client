"use client";
import React, { useState, useEffect, useRef } from "react";
import { Tooltip } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import gsap from "gsap";
import { FaShareAlt } from "react-icons/fa";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [showIcons, setShowIcons] = useState(false);
  const iconRefs = useRef([]);

  // Fetch blog data from JSON file
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((response) => response.json())
      .then((data) => {
        const foundBlog = data.find((b) => b.id === parseInt(id, 10));
        setBlog(foundBlog);
      });
  }, [id]);

  const handleMouseEnter = () => {
    setShowIcons(true);
    gsap.timeline().to(iconRefs.current, {
      scale: 1,
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "bounce.out",
    });
  };

  const handleMouseLeave = () => {
    setShowIcons(false);
    gsap.timeline().to(iconRefs.current.reverse(), {
      scale: 0,
      y: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power1.in",
    });
  };

  if (!blog) return <div className="text-base">Data Fetching...</div>;

  return (
    <>
      {/* Blog Cover Section */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center rounded-small overflow-hidden container"
        style={{ backgroundImage: `url(${blog.coverImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
          <h1 className="font-bold leading-tight text-center lg:text-4xl sm:text-basic">
            {blog.title}
          </h1>
          <div className="flex items-center space-x-4">
            <img
              src={blog.profileImage}
              alt="Author"
              className="object-cover rounded-full w-14 h-14"
            />
            <div>
              <p className="text-sm">{blog.author}</p>
              <p className="text-sm opacity-60">{blog.date}</p>
            </div>
          </div>
        </div>

        {/* Share Button */}
        <div
          className="absolute flex items-center bottom-6 right-6 "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Floating Icons */}
          <div
            className="relative flex mr-2 space-x-3"
            style={{
              display: showIcons ? "flex" : "none", // Hide icons initially
            }}
          >
            <Tooltip content="Twitter" arrow={false}>
              <button
                className="bg-white text-white p-3.5 rounded-full shadow-lg transform scale-0 opacity-0"
                ref={(el) => (iconRefs.current[0] = el)}
              >
                <FaTwitter className="text-blue-500 text-medium" />
              </button>
            </Tooltip>
            <Tooltip content="LinkedIn" arrow={false}>
              <button
                className="bg-white text-white p-3.5 rounded-full shadow-lg transform scale-0 opacity-0"
                ref={(el) => (iconRefs.current[1] = el)}
              >
                <FaLinkedinIn className="text-blue-500 text-medium" />
              </button>
            </Tooltip>
            <Tooltip content="Facebook" arrow={false}>
              <button
                className="bg-white text-white p-3.5 rounded-full shadow-lg transform scale-0 opacity-0"
                ref={(el) => (iconRefs.current[2] = el)}
              >
                <FaFacebookF className="text-blue-500 text-medium" />
              </button>
            </Tooltip>
          </div>

          {/* Main Share Button */}
          <button className="p-3 rounded-full shadow-lg bg-main-color hover:bg-orange-600">
            <FaShareAlt  className="text-white size-6"/>
          </button>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="mt-4 text-center text-small">
        <a
          href="/dashboard"
          className="font-bold hover:underline text-sub-color"
        >
          Dashboard
        </a>
        <span className="px-3 text-gray-300">•</span>
        <Link
          to="/dashboard/BlogJson"
          className="font-bold hover:underline text-sub-color"
        >
          Blog
        </Link>
        <span className="px-3 text-gray-300">•</span>
        <span className="text-[#929191] lg:font-medium">{blog.title}</span>
      </div>

      {/* Blog Content */}
      <div className="w-full max-w-[720px] mx-auto mt-6">
        {blog.content.map((section, index) => {
          if (section.type === "h4") {
            return (
              <h4
                key={index}
                className="mt-6 text-base font-semibold text-sub-color"
              >
                {section.text}
              </h4>
            );
          } else if (section.type === "p") {
            return (
              <p
                key={index}
                className="mt-4 leading-6 text-sub-color text-small"
              >
                {section.text}
              </p>
            );
          } else if (section.type === "image") {
            return (
              <div key={index} className="mt-4">
                <img
                  src={section.url}
                  alt="Blog Section"
                  className="w-full rounded"
                />
              </div>
            );
          } else if (section.type === "table") {
            return (
              <div key={index} className="mt-6 overflow-x-auto">
                <table className="min-w-full border border-collapse border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      {section.columns.map((col, idx) => (
                        <th
                          key={idx}
                          className="px-4 py-2 font-medium text-center border border-gray-300 lg:text-small"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="odd:bg-[#F4F6F8]">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="px-4 py-2 border border-gray-300 text-sub-color"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          return null;
        })}

        {/* Blog Tags */}
        <div className="flex mt-4 space-x-2">
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
    </>
  );
};

export default BlogDetails;
