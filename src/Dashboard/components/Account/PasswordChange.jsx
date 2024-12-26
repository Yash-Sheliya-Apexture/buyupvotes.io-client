import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const PasswordChange = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswords, setShowPasswords] = useState(false);

  const handlePasswordSave = () => {
    // Handle password save logic here
  };

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="lg:w-1/2">
        <input
          type={showPasswords ? "text" : "password"}
          placeholder="Old password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="block w-full border-gray-300 rounded-full"
        />
        <span onClick={() => setShowPasswords((prevState) => !prevState)} className="absolute cursor-pointer right-3 top-3">
          {showPasswords ? <IoMdEye /> : <IoMdEyeOff />}
        </span>
      </div>

      <div className="lg:w-1/2">
        <input
          type={showPasswords ? "text" : "password"}
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="block w-full border-gray-300 rounded-full"
        />
      </div>

      <div className="lg:w-1/2">
        <input
          type={showPasswords ? "text" : "password"}
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="block w-full border-gray-300 rounded-full"
        />
      </div>

      <div className="pt-4 space-x-6 lg:w-1/2">
        <button onClick={handlePasswordSave} className="px-6 py-1 font-semibold text-white rounded-full bg-main-color">
          Save Password
        </button>
      </div>
    </div>
  );
};

export default PasswordChange;
