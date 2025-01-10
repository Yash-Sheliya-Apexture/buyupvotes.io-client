import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import Dropdown from "../components/Dropdown";
import Skeleton from "react-loading-skeleton";
import Breadcrumb from "../../Dashboard/components/Breadcrumb";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("Latest");
  const filterOptions = ["Latest", "Popular", "Oldest"];
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const sanitizeTitle = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  };

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => console.error("Error fetching blog data:", error))
      .finally(() => setLoading(false));
  }, []);

  const sortedBlogs = [...blogs].sort((a, b) => {
    if (selectedFilter === "Latest") {
      return new Date(b.date) - new Date(a.date);
    }
    if (selectedFilter === "Popular") {
      return b.views - a.views;
    }
    if (selectedFilter === "Oldest") {
      return new Date(a.date) - new Date(b.date);
    }
    return 0;
  });

  const breadcrumbs = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Blogs" },
  ];

  return (
    <section>
      <div className="container mx-auto">
        {/* Blog Logo */}
        {!isHomePage && (
          <div className="bg-white">
            <h1 className="mb-2 font-bold text-sub-color text-basic">Blogs</h1>
            <div className="flex items-center space-x-4">
              <Breadcrumb items={breadcrumbs} />
            </div>
          </div>
        )}

        {/* Blog Header with Filter */}
        {!isHomePage && (
          <div className="bg-white my-5 lg:my-0 lg:mt-0">
            <div className="flex flex-col justify-between lg:flex-row lg:items-center lg:space-y-0 space-y-2">
              <h1 className="font-medium text-sub-color lg:text-base text-medium">
                Interested in guest posting on our blog?
                <span className="font-medium underline cursor-pointer text-main-color underline-offset-1">
                  <Link to="/dashboard/contactus">contact us</Link>
                </span>{" "}
                we'd love from you! can want
              </h1>

              {/* Dropdown Blog */}
              <div className="flex items-center py-2 lg:w-60 z-20">
                <span className="mr-2 text-nowrap text-sub-color font-medium">
                  Sort By:
                </span>
                <Dropdown
                  type="text"
                  options={filterOptions}
                  selectedValue={selectedFilter}
                  onSelect={(value) => setSelectedFilter(value)}
                  className="w-full"
                  placeholder="Select Feature"
                  dropdownPadding="p-2.5"
                  listPadding="p-1.5 my-1.5 -mt-0"
                />
              </div>
            </div>
          </div>
        )}

        {/* Blog Cards-Main */}
        <div className="flex flex-wrap gap-4 mb-5">
          {loading
            ? Array(3)
                .fill()
                .map((_, index) => (
                  <div
                    key={index}
                    className={`bg-white text-sub-color relative shadow-main rounded-small z-0  overflow-hidden ${
                      index === 0
                        ? "lg:w-[550px] w-full z-10"
                        : "flex-0 md:flex-1"
                    }`}
                  >
                    <div className="relative">
                      <span className="overflow-hidden relative inline-block w-full h-[200px]">
                        <Skeleton
                          height={200}
                          className="absolute top-0 left-0 w-full h-full"
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
                    <div className="flex items-center justify-end p-8">
                      <div className="flex items-center space-x-4 text-light-gray">
                        <Skeleton width={40} />
                        <Skeleton width={40} />
                      </div>
                    </div>
                  </div>
                ))
            : sortedBlogs.map((blog, index) => (
                  <Link
                    key={blog.id}
                    to={`/post/${sanitizeTitle(blog.title)}`}
                    className={`bg-[#fff] text-sub-color border border-gray-300 relative shadow-main rounded-small z-0 cursor-pointer overflow-hidden ${
                      index === 0
                        ? "lg:w-[550px] w-full z-10"
                        : "flex-0 md:flex-1"
                    }`}
                  >
                    <div className="relative">
                      <div className="absolute z-10 w-20 text-[#fff] h-9 left-2 -bottom-4">
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
                      <div className="space-y-1 font-medium">
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
                          <span className="text-xs text-light-gray">
                            {blog.views}
                          </span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <IoMdShare className="size-4" />
                          <span className="text-xs text-light-gray">
                            {blog.shares}
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
