import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import Ordertable from "../pages/ordertable";
import Breadcrumb from "../components/Breadcrumb";
import Dropdown from "../components/Dropdown"; // Import reusable dropdown

const UpvoteOrder = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isSpeedDropdownOpen, setSpeedDropdownOpen] = useState(false);
  const [selectedSpeed, setSelectedSpeed] = useState("");
  const [link, setLink] = useState("");
  const [quantity, setQuantity] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [errors, setErrors] = useState({
    service: "",
    speed: "",
    link: "",
    quantity: "",
  });

  // Validation function for Reddit links
  const validateRedditLink = (url) => {
    const redditRegex =
      /^(https?:\/\/)?(www\.)?(reddit\.com|old\.reddit\.com)\/[a-zA-Z0-9_/.-]+$/;
    return redditRegex.test(url);
  };

  const handleLinkChange = (e) => {
    const value = e.target.value;
    setLink(value);

    if (value && !validateRedditLink(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        link: "Invalid Reddit link. Example: https://www.reddit.com/r/subreddit/",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, link: "" }));
    }
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value.trim();

    if (/^\d+$/.test(value)) {
      const numericValue = parseInt(value, 10);

      if (numericValue < 5) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          quantity: "Minimum quantity for posts is 5",
        }));
      } else if (numericValue > 1000) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          quantity: "Maximum quantity for posts is 1000",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, quantity: "" }));
      }
      setQuantity(value);
    } else if (value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        quantity: "Quantity is required",
      }));
      setQuantity("");
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        quantity: "Quantity must be a valid number",
      }));
      setQuantity("");
    }
  };

  const validateForm = () => {
    const newErrors = {
      service: selectedService ? "" : "Service is required",
      speed: selectedSpeed ? "" : "Speed is required",
      link: link
        ? validateRedditLink(link)
          ? ""
          : "Invalid Reddit link. Example: https://www.reddit.com/r/subreddit/"
        : "Link is required",
      quantity:
        quantity && /^\d+$/.test(quantity)
          ? parseInt(quantity, 10) < 5
            ? "Minimum quantity for posts is 5"
            : parseInt(quantity, 10) > 1000
            ? "Maximum quantity for posts is 1000"
            : ""
          : "Quantity is required",
    };

    setErrors(newErrors);

    // Check if all errors are empty
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Reset form values
      setSelectedService("");
      setSelectedSpeed("");
      setLink("");
      setQuantity("");

      // Reset errors
      setErrors({
        service: "",
        speed: "",
        link: "",
        quantity: "",
      });

      // Display success message
      setSuccessMessage("Data was submitted successfully!");

      // Clear success message after a few seconds
      setTimeout(() => setSuccessMessage(""), 2000);
    }
  };

  const services = [
    "Post upvotes",
    "Post Downvotes",
    "Comment upvotes",
    "Comment Downvotes",
  ];

  const speeds = [
    "Slowest (1 vote/6 minutes)",
    "Ultra Slow (1 vote/5 minutes)",
    "Very Slow (1 vote/2 minutes)",
    "Slow (1 vote/minute)",
    "Normal (2 votes/minute)",
    "Fast (3 votes/minute)",
    "Very Fast (4 votes/minute)",
    "Fastest (5 votes/minute)",
  ];

  const breadcrumbs = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Order Upvotes" }, // No link for the current page
  ];

  return (
    <>
      <div className="container">
        <div className="px-6">
          <h1 className="text-sub-color font-bold text-basic mb-2">
            Order Upvotes
          </h1>
          <div className="flex space-x-4 items-center">
            <Breadcrumb items={breadcrumbs} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex items-center justify-center bg-gray-50 mt-5">
          <div className="flex flex-wrap md:flex-nowrap w-full max-w-5xl md:space-y-0 md:space-x-8">
            <div className="w-full md:w-[50%] bg-white p-6 border-gray-border shadow-md rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Dropdown */}
                <Dropdown
                  options={services}
                  selectedValue={selectedService}
                  onSelect={setSelectedService}
                  placeholder="Service"
                  error={errors.service}
                />

                {/* Link Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Link"
                    value={link}
                    onChange={handleLinkChange}
                    className={`w-full border rounded-full p-2.5 ${
                      errors.link ? "border-red-500" : "border-gray-300"
                    } text-sub-color placeholder:text-sub-color hover:border-black transition-all ease-in duration-150`}
                  />
                  {errors.link && (
                    <p className="text-red-500 text-sm">{errors.link}</p>
                  )}
                </div>

                {/* Quantity Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className={`w-full border rounded-full p-2.5 ${
                      errors.quantity ? "border-red-500" : "border-gray-300"
                    } text-sub-color placeholder:text-sub-color hover:border-black transition-all ease-in duration-150`}
                  />
                  {errors.quantity && (
                    <p className="text-red-500 text-sm">{errors.quantity}</p>
                  )}
                </div>

                {/* Speed Dropdown */}
                <Dropdown
                  options={speeds}
                  selectedValue={selectedSpeed}
                  onSelect={setSelectedSpeed}
                  placeholder="Select Delivery Speed"
                  error={errors.speed}
                />

                {/* Success Message */}
                {successMessage && (
                  <p className="text-green-500 text-center font-medium">
                    {successMessage}
                  </p>
                )}

                {/* Submit Button */}
                <div className="flex justify-center space-x-4">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="border border-main-color text-main-color px-14 py-2.5 hover:shadow-btnShadow transition-all duration-150 ease-in text-[14px] rounded-full font-bold"
                  >
                    Submit Order
                  </button>
                </div>
              </form>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-[50%] bg-white p-4 border-gray-border shadow-md rounded-lg">
              <p className="text-[16px] font-medium underline underline-offset-1 text-[#2D2624] mb-2">
                Upvotes & downvotes:
              </p>
              <div className="space-y-4 text-gray-700">
                <div className="flex space-x-20 text-[#2D2624]">
                  <p>
                    Minimum quantity: <b className="font-black">5</b>
                  </p>
                  <p>
                    Maximum quantity: <b className="font-black">1000</b>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <hr className="w-[80%]" />
                </div>
                <ul className="list-disc list-inside space-y-1">
                  <li className="text-[#2D2624] font-black text-[14px]">
                    Mobile links are now accepted
                  </li>
                  <li className="text-[#2d2624] font-medium text-[14px]">
                    Links can only contain English characters
                  </li>
                </ul>
                <div className="flex justify-center items-center">
                  <hr className="w-[80%]" />
                </div>
                <p className="text-sm text-[#2D2624] font-medium leading-6">
                  Our upvotes/downvotes are the same as organic
                  upvotes/downvotes and will not get your account banned.
                  Unusual activity that results in users or moderators reporting
                  your account can still get you banned. Please choose your
                  order's upvote/downvote quantity wisely so as not to arouse
                  any suspicion.
                </p>
                <p className="text-[14px] text-[#2D2624] font-semibold">
                  *Upvotes on posts/comments older than 24 hours are not
                  guaranteed to go through. Downvotes are similarly not
                  guaranteed regardless of post/comment age.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-5">
          <p className="text-center underline text-light-red underline-offset-1 text-[18px]">
            Due to Reddit's updated security measures, upvotes on certain
            subreddits are temporarily unavailable. If affected, the order will
            be canceled and refunded.
          </p>
        </div>

        {/* Order Tables */}
        <Ordertable />
      </div>
    </>
  );
};

export default UpvoteOrder;
