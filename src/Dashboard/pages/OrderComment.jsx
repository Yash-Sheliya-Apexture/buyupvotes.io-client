import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import bluebackground from "../../assets/Images/cyan-blur.png";
import Dropdown from "../components/Dropdown";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";

const OrderComment = () => {
  const [selectedNumber, setSelectedNumber] = useState(""); // For storing the selected number
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Toggle dropdown visibility
  const [link, setLink] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({ link: "", comment: "" });
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  const [formData, setFormData] = useState({ speed: "", numberOfComments: "" });

  const numbers = Array.from({ length: 50 }, (_, i) => i + 1);

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
        <h1 className="text-sub-color font-bold text-basic mb-2">
          Order Upvotes
        </h1>
        <div className="flex space-x-4 items-center">
          <div className="flex space-x-4 items-center">
            <Breadcrumb items={breadcrumbs} />
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Instructions */}
        <div className="border border-gray-border rounded-md p-4 bg-white shadow-md">
          <h1 className="text-small font-semibold text-light-red underline underline-offset-1 mb-2">
            <u>Please read instructions carefully before placing an order:</u>
          </h1>
          <p className="text-sub-color text-small font-normal leading-6 mb-4">
            This service allows you to generate and automate Reddit comments
            using our extensive network of Reddit accounts. Each automated
            comment will deduct 10 upvotes from your balance.
          </p>
          <div className="flex justify-between items-center mb-4">
            {/* Left Side */}
            <div className="w-1/2">
              <h3 className="font-medium text-small text-sub-color underline underline-offset-1">
                Custom comments:{" "}
              </h3>
              <div className="flex items-center my-2 space-x-20">
                <p className="text-small text-sub-color">
                  Minimum quantity: <span className="font-bold">1</span>
                </p>
                <p className="text-small text-sub-color">
                  Maximum quantity: <span className="font-bold">75</span>
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-1/2">
              <h3 className="font-medium text-small text-sub-color underline underline-offset-1">
                Comment upvotes (per comment):
              </h3>
              <div className="flex items-center my-2 space-x-20">
                <p className="text-small text-sub-color">
                  Minimum quantity: <span className="font-bold">5</span>
                </p>
                <p className="text-small text-sub-color">
                  Maximum quantity: <span className="font-bold">1000</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mb-4">
            <hr className="w-[80%] text-sub-color" />
          </div>

          <div className="flex mb-4">
            <p className="text-sub-color text-small underline underline-offset-1 font-medium">
              Links can be inserted in the following format: &nbsp;
            </p>
            <span className="text-sub-color font-bold">
              [link text](https://yourlink.com)
            </span>
          </div>

          <div className="flex mb-4">
            <p className="text-sub-color text-small underline underline-offset-1 font-medium">
              To make a new line in the comment, include the text: &nbsp;
            </p>
            <span className="text-sub-color font-bold"> [newline]</span>
          </div>

          <p className="text-sub-color text-small font-medium mb-4">
            Comments are made with aged but low-karma accounts and{" "}
            <span className="font-bold">are not guaranteed to go through</span>{" "}
            due to Reddit's spam filters or a subreddit's karma requirements.
          </p>

          <p className="text-sub-color text-small font-medium mb-4">
            Due to the high amount of resources spent on making a comment,{" "}
            <span className="font-bold">we do not provide refunds</span> for
            comment orders that do not go through. Please make sure to test this
            service before ordering in bulk.
          </p>
        </div>

        <form className="">
          <div className="flex items-center gap-4 p-4 border-gray-border rounded-md bg-white shadow-md my-4">
            <div className="flex w-[50%] flex-col relative">
              <Dropdown
                options={numbers}
                selectedValue={formData.numberOfComments}
                onSelect={(value) =>
                  setFormData({ ...formData, numberOfComments: value })
                }
                placeholder="Number of Comments"
                error={errors.numberOfComments}
              />
            </div>

            <div className="flex flex-col w-[50%]">
              <div className="flex relative">
                <input
                  type="text"
                  className="w-full p-2 rounded-full border hover:border-boldfont-bold transition-all ease-in duration-200"
                  placeholder="1 minutes"
                  disabled
                />
                <FaAngleDown className="absolute top-3 right-3" />
              </div>
            </div>
          </div>
        </form>

        <div className="max-w-6xl mx-auto p-4 bg-white shadow-md rounded-lg border border-gray-border py-10">
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
                    ? "border-[#FF5630] placeholder:text-[#FF5630] text-boldfont-bold"
                    : "border-gray-300"
                } rounded-full text-[16px] hover:border-boldfont-bold transition-all ease-in duration-150`}
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
                    ? "border-[#FF5630] placeholder:text-[#FF5630] text-boldfont-bold"
                    : "border-gray-300"
                } rounded-full text-[16px] hover:text-boldfont-bold transition-all ease-in duration-150`}
              />
              {errors.comment && (
                <span className="text-[#FF5630] text-xs mt-1">
                  {errors.comment}
                </span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <Button onClick={handleSubmit}>Submit order</Button>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="mt-4 text-center text-green-500 font-bold">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderComment;
