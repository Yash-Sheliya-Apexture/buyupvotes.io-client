import React, { useState, useEffect } from "react";
import { Tooltip } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const BlogDetails = () => {
  const { title } = useParams(); // Get the title from the URL
  const [blog, setBlog] = useState(null);
  const [showIcons, setShowIcons] = useState(false);
  const [placement, setPlacement] = useState("top");
  let leaveTimeout;

  // Clear timeout when mouse enters again
  const handleMouseEnter = () => {
    clearTimeout(leaveTimeout);
    setShowIcons(true);
  };

  // Delay hiding icons for 1 seconds
  const handleMouseLeave = () => {
    leaveTimeout = setTimeout(() => setShowIcons(false), 500);
  };

  useEffect(() => {
    return () => clearTimeout(leaveTimeout); // Cleanup timeout on unmount
  }, []);

  // Fetch blog by title
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((response) => response.json())
      .then((data) => {
        const sanitizedTitle = title.toLowerCase();
        const foundBlog = data.find(
          (b) =>
            b.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "") === sanitizedTitle
        );
        setBlog(foundBlog);
      });
  }, [title]);

  // Update placement based on screen size
  useEffect(() => {
    const updatePlacement = () => {
      setPlacement(window.innerWidth >= 1024 ? "top" : "left");
    };

    // Initial check
    updatePlacement();

    // Add event listener for resizing
    window.addEventListener("resize", updatePlacement);

    // Cleanup event listener
    return () => window.removeEventListener("resize", updatePlacement);
  }, []);

  if (!blog) return <div className="text-base">Data Fetching...</div>;

  return (
    <>
      <div className="container mx-auto">
        {/* Blog Cover Section */}
        <div
          className="relative w-full h-[400px] bg-cover bg-center rounded-small overflow-hidden"
          style={{ backgroundImage: `url(${blog.coverImage})` }}
        >
          {/* This container wraps the background image */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
            <h1 className="lg:text-4xl text-basic text-center font-bold leading-8">
              {blog.title}
            </h1>
            <div className="flex items-center space-x-4">
              <img
                src={blog.profileImage}
                alt="Author"
                className="lg:w-14 lg:h-14 w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm">{blog.author}</p>
                <p className="text-sm opacity-60">{blog.date}</p>
              </div>
            </div>
          </div>

          {/* Share Button */}
          <div
            className="absolute bottom-6 right-4 flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Social Media Icons */}
            <div
              className={`absolute flex transition-all duration-[0.5s] gap-3 lg:right-14 right-1.5 ${
                showIcons
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              style={{
                flexDirection: window.innerWidth <= 768 ? "column" : "row",
                bottom: window.innerWidth <= 768 ? "auto" : "0",
                top: window.innerWidth <= 768 ? "-160px" : "auto",
              }}
            >
              {/* Twitter */}
              <Tooltip placement={placement} arrow content="Twitter">
                <a
                  href="https://x.com/intent/post?text=How+to+Successfully+Transfer+a+Purchased+Reddit+Account&url=https%3A%2F%2Fbuyupvotes.io%2Fpost%2Fhow-to-successfully-transfer-a-purchased-reddit-account%2F"
                  target="_blank"
                  className={`w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1DA1F2] ${
                    showIcons
                      ? "scale-100 opacity-100 transform transition-all duration-200"
                      : "scale-0 opacity-0 duration-100"
                  }`}
                  style={{ transitionDelay: showIcons ? "0.1s" : "0s" }}
                >
                  <FaTwitter />
                </a>
              </Tooltip>
              {/* LinkedIn */}
              <Tooltip placement={placement} arrow content="LinkedIn">
                <a
                  href="https://www.linkedin.com/feed/?shareActive=true&shareUrl=https%3A%2F%2Fbuyupvotes.io%2Fpost%2Fhow-to-successfully-transfer-a-purchased-reddit-account%2F"
                  target="_blank"
                  className={`w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#0077B5] transform transition-all ${
                    showIcons
                      ? "scale-100 opacity-100 transform transition-all duration-150"
                      : "scale-0 opacity-0 duration-300"
                  }`}
                  style={{ transitionDelay: showIcons ? "0.1s" : "0s" }}
                >
                  <FaLinkedinIn />
                </a>
              </Tooltip>
              {/* Facebook */}
              <Tooltip placement={placement} arrow content="Facebook">
                <a
                  href="https://www.facebook.com/share_channel/#"
                  target="_blank"
                  className={`w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1DA1F2] transform transition-all ${
                    showIcons
                      ? "scale-100 opacity-100 transform transition-all duration-100"
                      : "scale-0 opacity-0 duration-500"
                  }`}
                  style={{ transitionDelay: showIcons ? "0.1s" : "0s" }}
                >
                  <FaFacebookF />
                </a>
              </Tooltip>
            </div>

            {/* Main Share Button */}
            <div className="bg-main-color p-4 rounded-full cursor-pointer hover:bg-orange-600 transition-all duration-300">
              <FaShareAlt className="text-white" />
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="lg:text-small text-xs mt-4 lg:space-x-44 space-x-6 flex">
          <div className="flex items-center">
            <Link to="/dashboard/post">
              <FaChevronLeft className="text-sub-color p-1 size-6 cursor-pointer border border-sub-color rounded-full" />
            </Link>
          </div>
          <div>
            <a
              href="/dashboard"
              className="hover:underline text-sub-color font-medium"
            >
              Dashboard
            </a>
            <span className="px-3 text-gray-300">•</span>
            <Link
              to="/dashboard/post"
              className="hover:underline text-sub-color font-medium"
            >
              Blog
            </Link>
            <span className="px-3 text-gray-300">•</span>
            <span className="text-[#929191] lg:font-medium">{blog.title}</span>
          </div>
        </div>

        {/* Blog Content */}
        <div className="w-full max-w-[680px] mx-auto mt-6">
          {blog.content.map((section, index) => {
            if (section.type === "h4") {
              return (
                <h4
                  key={index}
                  className="text-sub-color font-semibold text-base mt-6"
                >
                  {section.text}
                </h4>
              );
            } else if (section.type === "p") {
              return (
                <p
                  key={index}
                  className="text-sub-color text-small leading-6 mt-4"
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
                <div key={index} className="overflow-x-auto mt-6">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        {section.columns.map((col, idx) => (
                          <th
                            key={idx}
                            className="border border-gray-300 px-4 py-2 text-center lg:text-small font-medium"
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
                              className="border border-gray-300 px-4 py-2 text-sub-color"
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
          <div className="flex space-x-2 my-6">
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
    </>
  );
};

export default BlogDetails;
