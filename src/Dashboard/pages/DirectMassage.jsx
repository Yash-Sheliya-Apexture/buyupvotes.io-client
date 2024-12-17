import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import CommentTable from "./CommentTable";
import Button from "../components/Button";

const DirectMassage = () => {
  const breadcrumbs = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Order Direct Messages" }, // No link for the current page
  ];

  // State for textarea and input
  const [messageContent, setMessageContent] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({ messageContent: "", username: "" });
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup visibility state

  const handleSubmit = () => {
    let validationErrors = {};

    // Check if the textarea is empty
    if (!messageContent.trim()) {
      validationErrors.messageContent = "Direct message content is required.";
    }

    // Check if the username input is empty
    if (!username.trim()) {
      validationErrors.username = "* Username is required.";
    }

    // Set errors if any exist
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Clear errors, reset fields, and show popup
      setErrors({});
      setMessageContent("");
      setUsername("");
      setIsPopupVisible(true); // Show the popup

      // Hide popup after 3 seconds
      setTimeout(() => {
        setIsPopupVisible(false);
      }, 2000);

      console.log("Form Submitted:", { messageContent, username });
      // Add your form submission logic here
    }
  };

  return (
    <section className="container">
      <div className="px-6">
        <h1 className="text-sub-color font-bold text-basic mb-2">
          Order Direct Messages (New)
        </h1>
        <div className="flex space-x-4 items-center">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap w-full gap-8 bg-white mt-10 px-6">
        {/* Left-Side Content */}
        <div className="w-full md:w-1/2 flex flex-col space-y-4 border-gray-border shadow-md rounded-small">
          {/* Textarea for Message Content */}
          <textarea
            className={`w-full border p-2 h-40 resize-none rounded-medium transition-all duration-150 ease-in ${
              errors.messageContent
                ? "border-red-500"
                : "border-gray-300 hover:border-bold"
            }`}
            placeholder="Message content"
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
          ></textarea>
          {errors.messageContent && (
            <p className="text-red-500 text-sm">{errors.messageContent}</p>
          )}

          {/* Input for Username */}
          <input
            type="text"
            className={`w-full border p-3 rounded-full transition-all duration-150 ease-in ${
              errors.username
                ? "border-red-500"
                : "border-gray-300 hover:border-bold"
            }`}
            placeholder="Recipient username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )}

          {/* Submit Button */}
          <div className="flex justify-center items-center">
            <Button onClick={handleSubmit}>Submit Order</Button>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 border border-gray-border p-4 bg-white shadow-md rounded-small">
          <h3 className="text-[16px] font-medium underline underline-offset-1 mb-4 text-sub-color">
            Direct Messages:
          </h3>
          <div className="flex items-center my-2 space-x-20">
            <p className="text-small text-sub-color">
              Minimum quantity: <span className="font-bold">1</span>
            </p>
            <p className="text-small text-sub-color">
              Maximum quantity: <b className="font-bold">1</b> (will be updated
              to <b className="font-bold">500</b> soon)
            </p>
          </div>

          <div className="flex justify-center items-center py-3">
            <hr className="w-4/5" />
          </div>

          <p className="text-[14px] text-sub-color mb-4 font-medium">
            This service allows you to send Reddit DMs using our extensive
            network of Reddit accounts. Each message will deduct{" "}
            <span className="font-bold underline underline-offset-1">
              50 Upvotes
            </span>{" "}
            from your balance.
          </p>
          <ul className="list-disc ml-6 text-sm space-y-1.5">
            <li>Messages that contain links might be blocked by Reddit</li>
            <li>Message size limit is 10,000 characters</li>
            <li>
              Only one username is allowed per order (Mass DMs will be available
              soon)
            </li>
            <li>
              Orders including invalid usernames will be canceled by the system
            </li>
          </ul>
          <p className="text-sm mt-4 text-sub-color font-bold leading-5">
            *This service has a{" "}
            <span className="underline underline-offset-1 cursor-pointer">
              high success rate
            </span>{" "}
            but is not{" "}
            <span className="underline underline-offset-1">guaranteed</span>.
            Due to the high amount of resources spent on sending DMs, we{" "}
            <span className="underline underline-offset-1">
              do not provide refunds
            </span>{" "}
            for DMs that do not get delivered.
          </p>
        </div>
      </div>

      {/* Popup Message */}
      {isPopupVisible && (
        <div
          className="fixed top-[15%] right-[50px] transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white font-bold py-3 px-6 rounded-medium  animate-bounce"
          role="alert"
        >
          Your order has been submitted successfully!
        </div>
      )}

      {/* Comment Tables */}
      <CommentTable />
    </section>
  );
};

export default DirectMassage;
