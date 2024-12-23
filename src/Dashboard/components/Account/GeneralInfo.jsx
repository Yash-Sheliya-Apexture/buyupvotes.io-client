import React, { useState } from "react";

const GeneralInfo = () => {
  const [userData, setUserData] = useState({
    email: "user@example.com",
    firstName: "John",
    lastName: "Doe",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
    // Handle saving user info logic here
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Reset the form if needed
  };

  return (
    <div className="space-y-4">
      <input
        type="email"
        name="email"
        value={userData.email}
        disabled={!isEditing}
        onChange={handleInputChange}
        className="block w-full border-gray-300 rounded-full lg:w-1/2"
      />
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-2 md:space-y-0">
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleInputChange}
          disabled={!isEditing}
          className="block w-full border-gray-300 rounded-full lg:w-1/4"
        />
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleInputChange}
          disabled={!isEditing}
          className="block w-full border-gray-300 rounded-full lg:w-1/4"
        />
      </div>

      <div className="flex justify-end pt-4 space-x-4">
        {!isEditing ? (
          <button onClick={handleEditClick} className="px-6 py-1 border border-gray-300 rounded-full text-sub-color">
            Edit
          </button>
        ) : (
          <>
            <button onClick={handleCancelClick} className="px-6 py-1 border border-gray-300 rounded-full text-sub-color">
              Cancel
            </button>
            <button onClick={handleSaveChanges} className="px-6 py-1 text-white rounded-full bg-main-color">
              Save Changes
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default GeneralInfo;
