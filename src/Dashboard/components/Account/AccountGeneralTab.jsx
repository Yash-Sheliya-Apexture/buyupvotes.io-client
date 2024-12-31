// src/Dashboard/components/Account/AccountGeneralTab.jsx
import React from "react";
import Button from "../Button";

const AccountGeneralTab = ({
  userData,
  isEditing,
  handleInputChange,
  handleEditClick,
  handleCancelClick,
  handleSaveChanges,
  isSaving,
}) => {
  return (
    <div className="w-full space-y-4">
      <div>
        <input
          type="email"
          name="email"
          value={userData.email || ""}
          disabled
          className={`block w-full lg:w-1/2 border-gray-300 rounded-full opacity-50`}
          placeholder="Your Email"
        />
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-2 md:space-y-0">
        <div className="w-full lg:w-1/4 md:w-1/2">
          <input
            type="text"
            name="firstName"
            value={userData.firstName || ""}
            onChange={handleInputChange}
            disabled={!isEditing}
            placeholder="First Name"
            className={`block w-full border-gray-300 rounded-full  ${
              isEditing
                ? "opacity-100 hover:border-black transition-all ease-in duration-150"
                : "opacity-50 "
            }`}
          />
          {isEditing && !userData.firstName && (
            <p className="text-[#FF0000] font-medium text-sm mt-1">
              First name is required.
            </p>
          )}
        </div>
        <div className="w-full lg:w-1/4 md:w-1/2">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={userData.lastName || ""}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`block w-full border-gray-300 rounded-full ${
              isEditing
                ? "opacity-100 hover:border-black transition-all ease-in duration-150"
                : "opacity-50"
            }`}
          />
          {isEditing && !userData.lastName && (
            <p className="text-[#FF0000] font-medium text-sm mt-1">
              Last name is required.
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-end w-full pt-4 space-x-4 lg:w-1/2">
        {!isEditing ? (
          <Button onClick={handleEditClick}>Edit</Button>
        ) : (
          <>
            <button
              className="px-6 py-1 font-semibold border border-gray-300 rounded-full text-sub-color"
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
  );
};

export default AccountGeneralTab;
