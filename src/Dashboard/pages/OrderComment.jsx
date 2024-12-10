import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import bluebackground from "../../assets/Images/cyan-blur.png";
import Dropdown from "../components/Dropdown";
import Breadcrumb from "../components/Breadcrumb";

const OrderComment = () => {
  const [selectedNumber, setSelectedNumber] = useState(""); // For storing the selected number
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Toggle dropdown visibility
  const [link, setLink] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({ link: "", comment: "" });
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  // Validate URL function
  const validateURL = (url) => {
    const redditRegex = /^https?:\/\/(www\.)?reddit\.com\/.+$/;
    return redditRegex.test(url);
  };

  const handleLinkChange = (e) => {
    const value = e.target.value;
    setLink(value);

    if (!value) {
      setErrors((prevErrors) => ({ ...prevErrors, link: "Link is required" }));
    } else if (!validateURL(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        link: "Invalid Reddit link",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, link: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = { link: "", comment: "" };

    // Validate Link
    if (!link) {
      newErrors.link = "Link is required";
    } else if (!validateURL(link)) {
      newErrors.link = "Invalid Reddit link";
    }

    // Validate Comment
    if (!comment) {
      newErrors.comment = "Comment content is required";
    }

    setErrors(newErrors);

    // Prevent form submission if there are errors
    if (newErrors.link || newErrors.comment) {
      return;
    }

    // Form is valid, proceed with submission
    console.log("Form submitted with:", { link, comment });

    // Reset form
    setLink("");
    setComment("");
    setErrors({ link: "", comment: "" });
    setSuccessMessage("Order submitted successfully!");

    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  };

  // Toggle Dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Handle Dropdown Selection
  const handleSelect = (number) => {
    setSelectedNumber(number);
    setIsDropdownOpen(false);
  };

  const breadcrumbs = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Order Comments" }, // No link for the current page
  ];

  return (
    <div className="container">
      <div className="px-6">
        <h1 className="mb-2 font-bold text-sub-color text-basic">
          Order Upvotes
        </h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <Breadcrumb items={breadcrumbs} />
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Instructions */}
        <div className="p-4 bg-white border rounded-md shadow-md border-gray-border">
          <h1 className="mb-2 font-semibold underline text-small text-light-red underline-offset-1">
            <u>Please read instructions carefully before placing an order:</u>
          </h1>
          <p className="mb-4 font-normal leading-6 text-sub-color text-small">
            This service allows you to generate and automate Reddit comments
            using our extensive network of Reddit accounts. Each automated
            comment will deduct 10 upvotes from your balance.
          </p>
          <div className="flex items-center justify-between mb-4">
            {/* Left Side */}
            <div className="w-1/2">
              <h3 className="font-medium underline text-small text-sub-color underline-offset-1">
                Custom comments:{" "}
              </h3>
              <div className="flex items-center my-2 space-x-20">
                <p className="text-small text-sub-color">
                  Minimum quantity: <span className="font-black">1</span>
                </p>
                <p className="text-small text-sub-color">
                  Maximum quantity: <span className="font-black">75</span>
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-1/2">
              <h3 className="font-medium underline text-small text-sub-color underline-offset-1">
                Comment upvotes (per comment):
              </h3>
              <div className="flex items-center my-2 space-x-20">
                <p className="text-small text-sub-color">
                  Minimum quantity: <span className="font-black">5</span>
                </p>
                <p className="text-small text-sub-color">
                  Maximum quantity: <span className="font-black">1000</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mb-4">
            <hr className="w-[80%] text-sub-color" />
          </div>

          <div className="flex mb-4">
            <p className="font-medium underline text-sub-color text-small underline-offset-1">
              Links can be inserted in the following format: &nbsp;
            </p>
            <span className="font-black text-sub-color">
              [link text](https://yourlink.com)
            </span>
          </div>

          <div className="flex mb-4">
            <p className="font-medium underline text-sub-color text-small underline-offset-1">
              To make a new line in the comment, include the text: &nbsp;
            </p>
            <span className="font-black text-sub-color"> [newline]</span>
          </div>

          <p className="mb-4 font-medium text-sub-color text-small">
            Comments are made with aged but low-karma accounts and{" "}
            <span className="font-black">are not guaranteed to go through</span>{" "}
            due to Reddit's spam filters or a subreddit's karma requirements.
          </p>

          <p className="mb-4 font-medium text-sub-color text-small">
            Due to the high amount of resources spent on making a comment,{" "}
            <span className="font-black">we do not provide refunds</span> for
            comment orders that do not go through. Please make sure to test this
            service before ordering in bulk.
          </p>
        </div>

        <div className="flex items-center gap-4 p-4 my-4 bg-white rounded-md shadow-md border-gray-border">
          {/* Number Input */}
          <div className="flex w-[50%] flex-col relative">
            <div className="relative flex">
              <input
                type="text"
                className="w-full p-2 transition-all duration-200 ease-in border rounded-full hover:border-black"
                placeholder={selectedNumber ? "" : "Number Of Comments"}
                value={selectedNumber}
                readOnly
                onClick={toggleDropdown}
              />
              <FaAngleDown className="absolute cursor-pointer top-3 right-3" />
            </div>

            <div
              className={`absolute top-full left-0 w-full bg-white border-gray-100 z-10 rounded-medium shadow-md transition-all duration-300 ease-in-out ${
                isDropdownOpen
                  ? "scale-y-100 translate-y-0"
                  : "scale-y-0 pointer-events-none"
              }`}
              style={{
                backgroundImage: `url(${bluebackground})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <ul className="py-2 overflow-y-scroll max-h-40 no-scrollbar">
                {Array.from({ length: 50 }, (_, index) => index + 1).map(
                  (number) => (
                    <li
                      key={number}
                      onClick={() => handleSelect(number)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-hover"
                    >
                      {number}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-[50%]">
            {/* Speed Input */}
            <div className="relative flex">
              <input
                type="text"
                className="w-full p-2 transition-all duration-200 ease-in border rounded-full hover:border-black"
                placeholder="Speed"
                disabled
              />
              <FaAngleDown className="absolute top-3 right-3" />
            </div>
          </div>
        </div>

        <div className="max-w-6xl p-4 py-10 mx-auto bg-white border rounded-lg shadow-md border-gray-border">
          <h2 className="text-[20px] font-bold text-center text-[#2D2624] mb-4">
            Comment #1
          </h2>

          {/* Input Fields */}
          <div className="space-y-4">
            {/* Link Input */}
            <div className="relative">
              <input
                type="text"
                value={link}
                onChange={handleLinkChange}
                placeholder="Link"
                className={`w-full px-4 py-2.5 border ${
                  errors.link
                    ? "border-[#FF5630] placeholder:text-[#FF5630] text-black"
                    : "border-gray-300"
                } rounded-full text-[16px] hover:border-black transition-all ease-in duration-150`}
              />
              {errors.link && (
                <span className="text-[#FF5630] text-xs mt-1">
                  {errors.link}
                </span>
              )}
            </div>

            {/* Comment Content Input */}
            <div className="relative">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Comment content"
                className={`w-full px-4 py-2.5 border ${
                  errors.comment
                    ? "border-[#FF5630] placeholder:text-[#FF5630] text-black"
                    : "border-gray-300"
                } rounded-full text-[16px] hover:text-black transition-all ease-in duration-150`}
              />
              {errors.comment && (
                <span className="text-[#FF5630] text-xs mt-1">
                  {errors.comment}
                </span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="border border-main-color text-main-color px-14 py-2.5 hover:shadow-btnShadow transition-all duration-150 ease-in text-[14px] rounded-full font-bold"
            >
              Submit Order
            </button>
          </div>


                  
          {/* Success Message */}
          {successMessage && (
            <div className="mt-4 font-bold text-center text-green-500">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderComment;
