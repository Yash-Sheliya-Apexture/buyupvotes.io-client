import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import Ordertable from "./Ordertable";
import Breadcrumb from "../components/Breadcrumb";
import Dropdown from "../components/Dropdown"; // Import reusable dropdown

const UpvoteOrder = () => {
  // Consolidated form state
  const [formData, setFormData] = useState({
    service: "",
    speed: "",
    link: "",
    quantity: "",
  });

  // Consolidated error state
  const [errors, setErrors] = useState({
    service: "",
    speed: "",
    link: "",
    quantity: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  // Access the API URL using Vite-specific syntax
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const validateRedditLink = (url) => {
    const redditRegex =
      /^(https?:\/\/)?(www\.)?(reddit\.com|old\.reddit\.com)\/[a-zA-Z0-9_/.-]+$/;
    return redditRegex.test(url);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "link" && value && !validateRedditLink(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        link: "Invalid Reddit link. Example: https://www.reddit.com/r/subreddit/",
      }));
    } else if (name === "link") {
      setErrors((prevErrors) => ({ ...prevErrors, link: "" }));
    }

    if (name === "quantity") {
      handleQuantityValidation(value);
    }
  };

  const handleQuantityValidation = (value) => {
    const numericValue = parseInt(value.trim(), 10);
    if (value && /^\d+$/.test(value)) {
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
    } else if (value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        quantity: "Quantity is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        quantity: "Quantity must be a valid number",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      service: formData.service ? "" : "Service is required",
      speed: formData.speed ? "" : "Speed is required",
      link: formData.link
        ? validateRedditLink(formData.link)
          ? ""
          : "Invalid Reddit link. Example: https://www.reddit.com/r/subreddit/"
        : "Link is required",
      quantity:
        formData.quantity && /^\d+$/.test(formData.quantity)
          ? parseInt(formData.quantity, 10) < 5
            ? "Minimum quantity for posts is 5"
            : parseInt(formData.quantity, 10) > 1000
            ? "Maximum quantity for posts is 1000"
            : ""
          : "Quantity is required",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Reset form values
      setFormData({
        service: "",
        speed: "",
        link: "",
        quantity: "",
      });

      // Reset errors
      setErrors({
        service: "",
        speed: "",
        link: "",
        quantity: "",
      });

      try {
        // Send form data to backend to save to Google Sheets
        const response = await fetch(`${apiUrl}/api/auth/submit-order`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          setSuccessMessage(data.message); // Set success message
        } else {
          setSuccessMessage("There was an error submitting the order.");
        }
      } catch (error) {
        console.error('Error submitting order:', error);
        setSuccessMessage("There was an error submitting the order.");
      }

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
    <div className="container">
      {/* Form Content */}
      <div className="px-6">
        <h1 className="mb-2 font-bold text-sub-color text-basic">
          Order Upvotes
        </h1>
        <div className="flex items-center space-x-4">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <div className="flex items-center justify-center mt-5 bg-gray-50">
        <div className="flex flex-wrap w-full max-w-5xl md:flex-nowrap md:space-y-0 md:space-x-8">
          <div className="w-full md:w-[50%] bg-white p-6 border-gray-border shadow-md rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Dropdown */}
              <Dropdown
                options={services}
                selectedValue={formData.service}
                onSelect={(value) => setFormData({ ...formData, service: value })}
                placeholder="Service"
                error={errors.service}
              />

              {/* Link Input */}
              <div>
                <input
                  type="text"
                  name="link"
                  placeholder="Link"
                  value={formData.link}
                  onChange={handleInputChange}
                  className={`w-full border rounded-full p-2.5 ${errors.link ? "border-red-500" : "border-gray-300"
                    } text-sub-color placeholder:text-sub-color hover:border-black transition-all ease-in duration-150`}
                />
                {errors.link && (
                  <p className="text-sm text-red-500">{errors.link}</p>
                )}
              </div>

              {/* Quantity Input */}
              <div>
                <input
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className={`w-full border rounded-full p-2.5 ${errors.quantity ? "border-red-500" : "border-gray-300"
                    } text-sub-color placeholder:text-sub-color hover:border-black transition-all ease-in duration-150`}
                />
                {errors.quantity && (
                  <p className="text-sm text-red-500">{errors.quantity}</p>
                )}
              </div>

              {/* Speed Dropdown */}
              <Dropdown
                options={speeds}
                selectedValue={formData.speed}
                onSelect={(value) => setFormData({ ...formData, speed: value })}
                placeholder="Select Delivery Speed"
                error={errors.speed}
              />

              {/* Success Message */}
              {successMessage && (
                <p className="font-medium text-center text-green-500">
                  {successMessage}
                </p>
              )}

              {/* Submit Button */}
              <div className="flex justify-center space-x-4">
                <button
                  type="submit"
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
              <div className="flex items-center justify-center">
                <hr className="w-[80%]" />
              </div>
              <ul className="space-y-1 list-disc list-inside">
                <li className="text-[#2D2624] font-black text-[14px]">
                  Mobile links are now accepted
                </li>
                <li className="text-[#2d2624] font-medium text-[14px]">
                  Links can only contain English characters
                </li>
              </ul>
              <div className="flex items-center justify-center">
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
  );
};

export default UpvoteOrder;
