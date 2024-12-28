// src/Dashboard/components/Account/AccountSecurityTab.jsx
import React from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const AccountSecurityTab = ({ showPasswords, toggleAllPasswordVisibility, oldPassword, newPassword, confirmPassword, setOldPassword, setNewPassword, setConfirmPassword, errors, isSaving, handleSavePassword }) => {
  return (
    <div className="space-y-4 lg:space-y-6">
        <p className="mb-4 text-sub-color lg:font-medium">
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
                className="absolute text-sm cursor-pointer right-3 top-3"
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
            <p className="text-[#FF0000] text-sm mt-1">
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
                className="absolute text-sm cursor-pointer right-3 top-3"
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
            <p className="text-[#FF0000] text-sm mt-1">
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
                className="absolute text-sm cursor-pointer right-3 top-3"
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
                <p className="text-[#FF0000] text-sm mt-1">
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
  );
};

export default AccountSecurityTab;