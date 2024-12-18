import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Account = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [showPasswords, setShowPasswords] = useState({ all: false });
  const [oldPassword, setOldPassword] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const scrollContainerRef = useRef(null); // Ref for scrollable container

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const validatePasswords = () => {
    let isValid = true;
    const newErrors = {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    };

    if (!oldPassword) {
      newErrors.oldPassword = "Old password is required.";
      isValid = false;
    }
    if (!newPassword) {
      newErrors.newPassword = "New password is required.";
      isValid = false;
    } else if (newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters.";
      isValid = false;
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
      isValid = false;
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const initialUserData = {
    email: "rudrasutariya003@gmail.com",
    firstName: "Rudra",
    lastName: "Sutariya",
  };

  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleAllPasswordVisibility = () => {
    setShowPasswords((prevState) => ({
      ...prevState,
      all: !prevState.all,
    }));
  };

  const handleSavePassword = () => {
    // Check if any field is empty
    if (!oldPassword || !newPassword || !confirmPassword) {
      toast.error("All fields are required. Please fill them out.");
      return;
    }

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match. Please try again.");
      return;
    }

    // Proceed with saving
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setOldPassword(""); // Clear the old password field
      setNewPassword(""); // Clear the new password field
      setConfirmPassword(""); // Clear the confirm password field
      toast.success("Password updated successfully!");
    }, 1000);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setUserData(initialUserData);
    setIsEditing(false);
  };

  const handleSaveChanges = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setIsEditing(false);
      toast.success("Changes saved successfully!");
    }, 1000);
  };

  return (
    <>
      <div className="mx-auto container">
        <h1 className="mb-2 font-bold text-sub-color text-basic">Account</h1>
        <div className="flex items-center space-x-4">
          <Breadcrumb
            items={[
              { label: "Dashboard", link: "/dashboard" },
              { label: "Account" },
            ]}
          />
        </div>

        {/* Account Tabs  */}
        <div className="w-full max-w-7xl mx-auto my-5 flex items-center relative">
          {/* Left Icon */}
          <button onClick={scrollLeft} className="p-2 md:hidden flex-shrink-0">
            <FaChevronLeft className="text-sub-color size-3" />
          </button>

          {/* Scrollable Tabs Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-center overflow-x-auto scrollbar-hide whitespace-nowrap gap-8 tabs-scrollable scroll-smooth flex-grow"
          >
            {/* General Tab */}
            <button
              className={`flex gap-2 transition-all duration-300 ${
                activeTab === "general"
                  ? "text-main-color border-b-2 border-main-color"
                  : "text-sub-color border-b-2 border-transparent"
              }`}
              onClick={() => setActiveTab("general")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className={`h-6 transition-colors duration-300 ${
                  activeTab === "general" ? "text-main-color" : "text-sub-color"
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
              className={`flex items-center gap-2 transition-all duration-300 ${
                activeTab === "transactions"
                  ? "text-main-color border-b-2 border-main-color"
                  : "text-sub-color border-b-2 border-transparent"
              }`}
              onClick={() => setActiveTab("transactions")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className={`h-6 transition-colors duration-300 ${
                  activeTab === "transactions"
                    ? "text-main-color"
                    : "text-sub-color"
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
              className={`flex items-center gap-2 transition-all duration-300 ${
                activeTab === "security"
                  ? "text-main-color border-b-2 border-main-color"
                  : "text-sub-color border-b-2 border-transparent"
              }`}
              onClick={() => setActiveTab("security")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className={`h-6 transition-colors duration-300 ${
                  activeTab === "security"
                    ? "text-main-color"
                    : "text-sub-color"
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

          {/* Right Icon */}
          <button onClick={scrollRight} className="p-2 md:hidden flex-shrink-0">
            <FaChevronRight className="text-sub-color size-3" />
          </button>
        </div>

        <div className="w-full border lg:p-10 p-4 shadow-md border-gray-border lg:mt-10 rounded-small">
          {/* General Tab */}
          {activeTab === "general" && (
            <div className="space-y-4 w-full">
              <div>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  disabled={!isEditing}
                  className={`block w-full lg:w-1/2 border-gray-300 rounded-full ${
                    isEditing ? "opacity-50" : "opacity-50"
                  }`}
                />
              </div>
              <div className="flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0">
                <div className="lg:w-1/4 md:w-1/2 w-full">
                  <input
                    type="text"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`block w-full border-gray-300 rounded-full  ${
                      isEditing
                        ? "opacity-100 hover:border-black transition-all ease-in duration-150"
                        : "opacity-50 "
                    }`}
                  />
                  {isEditing && userData.firstName.trim() === "" && (
                    <p className="text-red-500 font-medium text-sm mt-1">
                      First name is required.
                    </p>
                  )}
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full">
                  <input
                    type="text"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`block w-full border-gray-300 rounded-full ${
                      isEditing
                        ? "opacity-100 hover:border-black transition-all ease-in duration-150"
                        : "opacity-50"
                    }`}
                  />
                  {isEditing && userData.lastName.trim() === "" && (
                    <p className="text-red-500 font-medium text-sm mt-1">
                      Last name is required.
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-4 lg:w-1/2 w-full">
                {!isEditing ? (
                  <Button onClick={handleEditClick}>Edit</Button>
                ) : (
                  <>
                    <button
                      className="px-6 py-1 border text-sub-color border-gray-300 font-semibold rounded-full"
                      onClick={handleCancelClick}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveChanges}
                      className={`px-6 py-1 border text-green-500 border-green-500 hover:shadow-newShadow transition-all ease-in duration-150 font-semibold rounded-full ${
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
              <h2 className="text-medium font-semibold text-sub-color">
                Transaction History
              </h2>
              <p className="text-sub-color font-normal">
                You have no transactions.
              </p>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div className="lg:space-y-6 space-y-4">
              <p className="text-sub-color lg:font-medium mb-4">
                If your account was created with Google, you can create an
                account password using the 'forgot password' option on the login
                page.
              </p>
              <div className="lg:w-1/2">
                <div className="relative">
                  <input
                    type={showPasswords.all ? "text" : "password"}
                    className={`block w-full border-gray-300 rounded-full hover:border-black transition-all ease-in duration-150 ${
                      errors.oldPassword ? "border-red-500" : ""
                    }`}
                    placeholder="Old password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                  <span
                    className="absolute right-3 top-3 text-sm cursor-pointer"
                    onClick={toggleAllPasswordVisibility}
                  >
                    {showPasswords.all ? (
                      <IoMdEye className="text-base text-light-gray" />
                    ) : (
                      <IoMdEyeOff className="text-base text-light-gray" />
                    )}
                  </span>
                </div>
                {errors.oldPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.oldPassword}
                  </p>
                )}
              </div>

              <div className="lg:w-1/2">
                <div className="relative">
                  <input
                    type={showPasswords.all ? "text" : "password"}
                    className={`block w-full border-gray-300 rounded-full hover:border-black transition-all ease-in duration-150 ${
                      errors.newPassword ? "border-red-500" : ""
                    }`}
                    placeholder="New password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <span
                    className="absolute right-3 top-3 text-sm cursor-pointer"
                    onClick={toggleAllPasswordVisibility}
                  >
                    {showPasswords.all ? (
                      <IoMdEye className="text-base text-light-gray" />
                    ) : (
                      <IoMdEyeOff className="text-base text-light-gray" />
                    )}
                  </span>
                </div>
                {errors.newPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.newPassword}
                  </p>
                )}
              </div>

              <div className="lg:w-1/2">
                <div className="relative">
                  <input
                    type={showPasswords.all ? "text" : "password"}
                    className={`block w-full border-gray-300 rounded-full hover:border-black transition-all ease-in duration-150 ${
                      errors.confirmPassword ? "border-red-500" : ""
                    }`}
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <span
                    className="absolute right-3 top-3 text-sm cursor-pointer"
                    onClick={toggleAllPasswordVisibility}
                  >
                    {showPasswords.all ? (
                      <IoMdEye className="text-base text-light-gray" />
                    ) : (
                      <IoMdEyeOff className="text-base text-light-gray" />
                    )}
                  </span>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
                <div className="flex justify-end mt-5">
                  <button
                    onClick={handleSavePassword}
                    className={`px-6 py-1 border text-green-500 border-green-500 hover:shadow-newShadow transition-all ease-in duration-150 font-semibold rounded-full ${
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
      {/* Delete button */}
      <div className="text-center mt-4 opacity-50">
        <button className="px-14 py-1.5 bg-slate-300 text-xs cursor-default rounded-full font-bold text-sub-color">
          Delete Account
        </button>
      </div>
    </>
  );
};

export default Account;
