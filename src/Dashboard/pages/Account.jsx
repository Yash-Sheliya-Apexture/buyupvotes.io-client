import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const Account = () => {
  const [activeTab, setActiveTab] = useState("general"); // Default active tab
  const [showPasswords, setShowPasswords] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const [isEditing, setIsEditing] = useState(false); // Track edit mode
  const [userData, setUserData] = useState({
    email: "rudrasutariya003@gmail.com",
    firstName: "Rudra",
    lastName: "Sutariya",
  });

  const [isSaving, setIsSaving] = useState(false); // Track if changes are being saved
  const [showMessage, setShowMessage] = useState(false); // Track if popup message is visible

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Reset the user data if needed, or keep it unchanged
    setUserData({
      email: "rudrasutariya003@gmail.com",
      firstName: "Rudra",
      lastName: "Sutariya",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    setIsSaving(true);
    // Simulate a delay for the save operation
    setTimeout(() => {
      setIsEditing(false);
      setIsSaving(false); // Reset saving state after the "Save" is complete
      setShowMessage(true); // Show the success message
      setTimeout(() => setShowMessage(false), 3000); // Hide the message after 3 seconds
    }, 1000); // Simulate a save duration (1 second)
  };

  const breadcrumbs = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Account" }, // No link for the current page
  ];

  return (
    <div className="container mx-auto">
      {/* Form Content */}
      <div className="mx-6">
        <h1 className="mb-2 font-bold text-sub-color text-basic">Account</h1>
        <div className="flex items-center space-x-4">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Tabs */}
        <div className="flex items-start space-x-5">
          {/* General Tab */}
          <button
            className={`flex space-x-3 py-2 ${
              activeTab === "general"
                ? "text-main-color border-b-2 border-main-color"
                : "text-[#2d2624] border-b-2 border-transparent"
            }`}
            onClick={() => setActiveTab("general")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className={`h-6 ${
                activeTab === "general" ? "text-main-color" : "text-[#2d2624]"
              }`}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4m3.25 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M11 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="font-bold">General</span>
          </button>

          {/* Transactions Tab */}
          <button
            className={`flex items-center space-x-2 px-4 py-2 ${
              activeTab === "transactions"
                ? "text-main-color border-b-2 border-main-color"
                : "text-[#2d2624] border-b-2 border-transparent "
            }`}
            onClick={() => setActiveTab("transactions")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className={`h-6 ${
                activeTab === "transactions"
                  ? "text-main-color"
                  : "text-[#2d2624]"
              }`}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M7.245 2h9.51c1.159 0 1.738 0 2.206.163a3.05 3.05 0 0 1 1.881 1.936C21 4.581 21 5.177 21 6.37v14.004c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V6.37c0-1.193 0-1.79.158-2.27c.3-.913.995-1.629 1.881-1.937C5.507 2 6.086 2 7.245 2M7 6.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 10.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 13.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="font-bold">Transactions</span>
          </button>

          {/* Security Tab */}
          <button
            className={`flex items-center space-x-2 px-4 py-2 ${
              activeTab === "security"
                ? "text-main-color border-b-2 border-main-color"
                : "text-[#2d2624] border-b-2 border-transparent"
            }`}
            onClick={() => setActiveTab("security")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className={`h-6 ${
                activeTab === "security" ? "text-main-color" : "text-[#2d2624]"
              }`}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.65 10a6 6 0 0 0-6.88-3.88c-2.29.46-4.15 2.29-4.63 4.58A6.006 6.006 0 0 0 7 18a5.99 5.99 0 0 0 5.65-4H17v2c0 1.1.9 2 2 2s2-.9 2-2v-2c1.1 0 2-.9 2-2s-.9-2-2-2zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"
              ></path>
            </svg>
            <span className="font-bold">Security</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="w-full border p-10 shadow-md border-gray-border mt-10 rounded-small">
          {/* Tab Content */}
          {activeTab === "general" && (
            <div className="space-y-4 w-1/2">
              <div>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  disabled={!isEditing} // Disable field when not editing
                  className={`block w-full border-gray-300 rounded-full ${
                    isEditing ? "opacity-50" : "opacity-50"
                  }`}
                />
              </div>
              <div className="flex space-x-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleInputChange} // Handle input changes
                    disabled={!isEditing} // Disable field when not editing
                    className={`block w-full border-gray-300 rounded-full  ${
                      isEditing
                        ? "opacity-100 hover:border-black transition-all ease-in duration-150"
                        : "opacity-50"
                    }`}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleInputChange} // Handle input changes
                    disabled={!isEditing} // Disable field when not editing
                    className={`block w-full border-gray-300 rounded-full  ${
                      isEditing
                        ? "opacity-100 hover:border-black transition-all ease-in duration-150"
                        : "opacity-50"
                    }`}
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                {!isEditing ? (
                  <Button onClick={handleEditClick}>Edit</Button>
                ) : (
                  <>
                    <button
                      className="px-6 py-1 border text-[#2D2624] border-gray-300 font-semibold rounded-full"
                      onClick={handleCancelClick}
                    >
                      Cancel
                    </button>
                    {/* Submit */}
                    <button
                      onClick={handleSaveChanges}
                      className={`px-6 py-1 border text-[#22C55E] border-[#22C55E] hover:shadow-newShadow font-semibold rounded-full ${
                        isSaving ? "opacity-100" : ""
                      }`}
                      disabled={isSaving}
                    >
                      {isSaving ? "Saving..." : "Save Changes"}
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          {activeTab === "transactions" && (
            <div className="space-y-5">
              <h2 className="text-[18px] font-semibold text-[#2D2624]">
                Transaction History
              </h2>
              <p className="text-[#2D2624] font-normal">
                You have no transactions.
              </p>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-6">
              <p className="text-[#2D2624] font-medium mb-4">
                If your account was created with Google, you can create an
                account password the 'forgot password' option on the login page.
              </p>
              <div className="w-1/2">
                <div className="relative">
                  <input
                    type={showPasswords.oldPassword ? "text" : "password"}
                    className="mt-1 block w-full border-gray-300 rounded-full hover:border-black transition-all ease-in duration-150"
                    placeholder="Old password"
                  />
                  <span
                    className="absolute right-3 top-3 text-smcursor-pointer"
                    onClick={() => togglePasswordVisibility("oldPassword")}
                  >
                    {showPasswords.oldPassword ? (
                      <IoMdEye className="text-[20px] text-light-gray" />
                    ) : (
                      <IoMdEyeOff className="text-[20px] text-light-gray" />
                    )}
                  </span>
                </div>
              </div>
              <div className="w-1/2">
                <div className="relative">
                  <input
                    type={showPasswords.newPassword ? "text" : "password"}
                    className="mt-1 block w-full border-gray-300 rounded-full hover:border-black transition-all ease-in duration-150"
                    placeholder="New password"
                  />
                  <span
                    className="absolute right-3 top-3 text-sm cursor-pointer"
                    onClick={() => togglePasswordVisibility("newPassword")}
                  >
                    {showPasswords.oldPassword ? (
                      <IoMdEye className="text-[20px] text-light-gray" />
                    ) : (
                      <IoMdEyeOff className="text-[20px] text-light-gray" />
                    )}
                  </span>
                </div>
              </div>
              <div className="w-1/2">
                <div className="relative">
                  <input
                    type={showPasswords.confirmPassword ? "text" : "password"}
                    className="mt-1 block w-full border-gray-300 rounded-full hover:border-black transition-all ease-in duration-150"
                    placeholder="New confirm password"
                  />
                  <span
                    className="absolute right-3 top-3 text-sm cursor-pointer"
                    onClick={() => togglePasswordVisibility("confirmPassword")}
                  >
                    {showPasswords.oldPassword ? (
                      <IoMdEye className="text-[20px] text-light-gray" />
                    ) : (
                      <IoMdEyeOff className="text-[20px] text-light-gray" />
                    )}
                  </span>
                </div>
                <div className="flex justify-end mt-5">
                  <button
                    onClick={handleSaveChanges}
                    className={`px-6 py-1 border text-[#22C55E] border-[#22C55E] hover:shadow-newShadow font-semibold rounded-full ${
                      isSaving ? "opacity-100" : ""
                    }`}
                    disabled={isSaving}
                  >
                    {isSaving ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
