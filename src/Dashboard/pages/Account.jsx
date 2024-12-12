import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

const Account = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [showPasswords, setShowPasswords] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const breadcrumbs = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Account" }, // No link for the current page
  ];

  return (
    <div className="container mx-auto">
      {/* Form Content */}
      <div>
        <h1 className="mb-2 font-bold text-sub-color text-basic">Account</h1>
        <div className="flex items-center space-x-4">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Tabs */}
        <div className="flex border-b">
          <button
            className={`px-4 py-2 ${
              activeTab === "general"
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-gray-600 border-b-2 border-transparent hover:text-orange-600"
            }`}
            onClick={() => setActiveTab("general")}
          >
            General
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "transactions"
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-gray-600 border-b-2 border-transparent hover:text-orange-600"
            }`}
            onClick={() => setActiveTab("transactions")}
          >
            Transactions
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "security"
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-gray-600 border-b-2 border-transparent hover:text-orange-600"
            }`}
            onClick={() => setActiveTab("security")}
          >
            Security
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "general" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  value="rudrasutariya003@gmail.com"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  value="Rudra"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  value="Sutariya"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  disabled
                />
              </div>
              <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-md">
                Edit
              </button>
            </div>
          )}

          {activeTab === "transactions" && (
            <div>
              <h2 className="text-lg font-medium text-gray-700">
                Transaction History
              </h2>
              <p className="text-gray-600">You have no transactions.</p>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Old Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.oldPassword ? "text" : "password"}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                  <span
                    className="absolute right-3 top-3 text-sm text-blue-500 cursor-pointer"
                    onClick={() => togglePasswordVisibility("oldPassword")}
                  >
                    {showPasswords.oldPassword ? "Hide" : "Show"}
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.newPassword ? "text" : "password"}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                  <span
                    className="absolute right-3 top-3 text-sm text-blue-500 cursor-pointer"
                    onClick={() => togglePasswordVisibility("newPassword")}
                  >
                    {showPasswords.newPassword ? "Hide" : "Show"}
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.confirmPassword ? "text" : "password"}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                  <span
                    className="absolute right-3 top-3 text-sm text-blue-500 cursor-pointer"
                    onClick={() => togglePasswordVisibility("confirmPassword")}
                  >
                    {showPasswords.confirmPassword ? "Hide" : "Show"}
                  </span>
                </div>
              </div>
              <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-md">
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
