import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import Ordertable from "./Ordertable";
import Breadcrumb from "../components/Breadcrumb";
import Dropdown from "../components/Dropdown"; // Import reusable dropdown
import Button from "../components/Button"; // Import reusable button
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner } from "react-icons/fa";
import InputField from "../components/InputField";
// import FloatingLabelInputField from "../components/FloatingLabelInputField";

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
  const [loading, setLoading] = useState(false);

  // Access the API URL using Vite-specific syntax
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const validateRedditLink = () => {
    const redditRegex = /^https:\/\/(www\.)?reddit\.com\/[a-zA-Z0-9_]/;
    if (!redditRegex.test(formData.link)) {
      setErrors({
        ...errors,
        link: "Please enter a valid Reddit link (e.g., https://www.reddit.com/r/subreddit/)",
      });
      return false;
    }
    return true;
  };

  const handleSubmits = (e) => {
    e.preventDefault();

    if (validateRedditLink()) {
      console.log("Reddit link is valid:", formData.link);
      // Perform further actions (e.g., send link to an API)
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
      service: formData.service ? "" : "Service is required", // Check if service is selected
      speed: formData.speed ? "" : "Speed is required", // Check if speed is selected
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

    setErrors(newErrors); // Update the error state

    return Object.values(newErrors).every((error) => error === ""); // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true); // Show loader

      const token = localStorage.getItem("authToken");

      try {
        const response = await fetch(`${apiUrl}/auth/submit-order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          toast.success(data.message || "Order submitted successfully!");
        } else {
          toast.error(
            data.message || "There was an error submitting the order."
          );
        }
      } catch (error) {
        console.error("Error submitting order:", error);
        toast.error("An error occurred. Please try again later.");
      } finally {
        setLoading(false); // Hide loader after request
      }

      // Reset the form after submission
      setFormData({
        service: "",
        speed: "",
        link: "",
        quantity: "",
      });
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
    <div className="container mx-auto">
      {/* Form Content */}
      <div>
        <h1 className="mb-2 font-semibold text-sub-color text-small lg:text-basic">
          Order Upvotes
        </h1>
        <div className="flex items-center space-x-4">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <div className="flex flex-col w-full gap-4 mt-6 lg:flex-row lg:gap-y-6">
        {/* Left Section */}
        <div className="w-full p-4 lg:w-1/2 shadow-main rounded-large lg:p-6">
          <form onSubmit={handleSubmits} className="space-y-4 lg:space-y-6">
            {/* Service Dropdown */}
            <Dropdown
              type="text"
              options={services}
              selectedValue={formData.service}
              onSelect={(value) => {
                setFormData({ ...formData, service: value });

                // Clear the error if the value is valid (non-empty)
                if (value) {
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    service: "", // Clear the 'service' error when a valid option is selected
                  }));
                }
              }}
              placeholder="Service"
              error={errors.service}
            />
            {/* Raddit link */}
            <div>
              <InputField
                name="link"
                placeholder="Link"
                value={formData.link}
                onChange={handleInputChange}
                error={errors.link}
              />
            </div>

            {/* Quantity Input */}
            <div>
              <InputField
                type="text"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                error={errors.quantity}
              />
            </div>

            {/* Speed Dropdown */}
            <Dropdown
              options={speeds}
              selectedValue={formData.speed}
              onSelect={(value) => {
                setFormData({ ...formData, speed: value });

                // Clear the error if the value is valid (non-empty)
                if (value) {
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    speed: "", // Clear the 'speed' error when a valid option is selected
                  }));
                }
              }}
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
              {loading ? (
                <div className="flex items-center">
                  <FaSpinner className="text-lg animate-spin" />
                </div>
              ) : (
                <Button type="submit" onClick={handleSubmit}>
                  Submit Order
                </Button>
              )}
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 shadow-main rounded-large lg:p-10 xs:p-4">
          <p className="text-[16px] font-medium underline underline-offset-1 text-sub-color mb-2">
            Upvotes & downvotes:
          </p>
          <div className="space-y-4 text-gray-700">
            <div className="flex space-x-20 text-sub-color">
              <p>
                Minimum quantity: <b className="font-bold">5</b>
              </p>
              <p>
                Maximum quantity: <b className="font-bold">1000</b>
              </p>
            </div>
            <div className="flex items-center justify-center">
              <hr className="w-[80%]" />
            </div>
            <ul className="space-y-1 list-disc list-inside">
              <li className="text-xs font-bold text-sub-color">
                Mobile links are now accepted
              </li>
              <li className="text-[#2d2624] font-medium text-xs">
                Links can only contain English characters
              </li>
            </ul>
            <div className="flex items-center justify-center">
              <hr className="w-[80%]" />
            </div>
            <p className="text-sm font-medium leading-6 text-sub-color">
              Our upvotes/downvotes are the same as organic upvotes/downvotes
              and will not get your account banned. Unusual activity that
              results in users or moderators reporting your account can still
              get you banned. Please choose your order's upvote/downvote
              quantity wisely so as not to arouse any suspicion.
            </p>
            <p className="text-xs font-semibold text-sub-color">
              *Upvotes on posts/comments older than 24 hours are not guaranteed
              to go through. Downvotes are similarly not guaranteed regardless
              of post/comment age.
            </p>
          </div>
        </div>
      </div>

      <div className="my-4">
        <p className="text-center underline text-light-red underline-offset-1 lg:text-medium text-small">
          Due to Reddit's updated security measures, upvotes on certain
          subreddits are temporarily unavailable. If affected, the order will be
          canceled and refunded.
        </p>
      </div>

      {/* Order Tables Data*/}
      <Ordertable />
    </div>
  );
};

export default UpvoteOrder;
