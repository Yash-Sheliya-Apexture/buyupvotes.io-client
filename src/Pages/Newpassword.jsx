import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash, FaChevronLeft } from "react-icons/fa";
import { ToastContainer } from "react-toastify";

const Newpassword = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswords, setShowPasswords] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const otpRefs = useRef([]);
  const navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleOtpChange = (index, value) => {
    if (isNaN(value) || value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      otpRefs.current[index + 1].focus();
    }
    if (errors.otp) {
      setErrors((prevErrors) => ({ ...prevErrors, otp: null }));
    }
  };

  const handleBackspace = (index) => {
    if (index > 0 && !otp[index]) {
      otpRefs.current[index - 1].focus();
    }
  };

  const validateOtp = () => {
    const isEmptyField = otp.some((digit) => digit.trim() === "");
    if (isEmptyField) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        otp: "Code is required",
      }));
      return false;
    }
    return true;
  };

  const validatePasswords = () => {
    const validationErrors = {};

    if (!password) {
      validationErrors.password = "Password is required.";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters.";
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = "Confirm Password is required.";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear all field-specific errors before validation
    setErrors({});

    if (!validateOtp() || !validatePasswords()) return;

    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/reset-password`, {
        otp: otp.join(""),
        password,
      });

      if (response.status === 200) {
        setSuccessMessage("Password was successfully created!");
        setTimeout(() => {
          setOtp(Array(6).fill(""));
          setPassword("");
          setConfirmPassword("");
          setShowPasswords(false);
          setSuccessMessage("");
        }, 1000);
      }
    } catch (error) {
      setErrors({
        ...errors,
        general: "Reset password failed. Please try again.",
      });
      console.error("Reset password error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="lg:h-[calc(100vh-50px)] layout flex items-center justify-center px-4 pb-6">
        <div className="lg:w-[420px] h-auto bg-white rounded-small lg:p-6 p-4 pb-10">
          {successMessage && (
            <p className="text-green-500 text-center mb-4">{successMessage}</p>
          )}
          {errors.general && (
            <p className="text-red-500 text-center mb-4">{errors.general}</p>
          )}
          <div className="flex justify-center">
            <svg
              className="h-20"
              fill="none"
              viewBox="0 0 96 97"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FF4500"
                d="M80.476 16.01c-2-2-48.544 35.833-52.269 43.652 0 0-.155 29.249 5.21 30.093 2.904 0 8.228-15.41 9.35-18.755.143-.428.339-.805.612-1.163 11.697-15.343 39.074-51.85 37.097-53.827z"
              ></path>
              <path
                fill="#FF5700"
                d="M11.167 39.109c-2.51 1.716-2.606 4.943-.319 6.946 3.06 2.68 8.372 7.018 17.359 13.62v-.013c3.724-7.82 50.269-45.652 52.269-43.652 1.977 1.977-25.4 38.484-37.097 53.826-.273.36-.47.736-.613 1.163-1.082 3.227-6.071 17.672-9.03 18.699 6.326-1.22 12.623-6.279 18.458-13.265 7.403 4.887 12.643 8.034 15.829 9.86 2.228 1.279 4.962.804 6.134-1.482 6.764-13.202 14.387-52.323 15.821-72.819.231-3.305-2.447-5.951-5.707-5.355-20.295 3.714-59.214 22.977-73.104 32.472zM33.417 89.755z"
              ></path>
              <defs>
                <filter
                  id="filter0_i_1870_134242"
                  width="82.787"
                  height="85.202"
                  x="7.205"
                  y="4.553"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset dx="-2" dy="-2"></feOffset>
                  <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  ></feComposite>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"></feColorMatrix>
                  <feBlend
                    in2="shape"
                    result="effect1_innerShadow_1870_134242"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
          <p className="text-sub-color font-normal text-center text-xs my-4">
            We've sent a 6-digit confirmation code to your email. Please enter
            the code below to verify your email. The code will{" "}
            <span className="font-bold">expire</span> after{" "}
            <span className="font-bold">10 minutes</span>.
          </p>
          <form onSubmit={handleSubmit}>
            {/* OTP Fields */}
            <div className="flex space-x-5 my-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Backspace" && handleBackspace(index)
                  }
                  onPaste={(e) => {
                    const pastedData = e.clipboardData.getData("Text").trim();
                    if (/^\d{6}$/.test(pastedData)) {
                      const newOtp = pastedData.split("");
                      setOtp(newOtp);
                      otpRefs.current[0].focus();
                    }
                  }}
                  ref={(el) => (otpRefs.current[index] = el)}
                  className={`p-2.5 w-full text-center rounded-md border ${
                    otpRefs.current[index] === document.activeElement
                      ? "border-blue-500"
                      : errors.otp && digit.trim() === ""
                      ? "border-red-300"
                      : "border-gray-300/50"
                  } hover:border-main-color transition-all ease-in duration-200`}
                  maxLength={1}
                />
              ))}
            </div>
            {errors.otp && (
              <p className="my-2 text-xs text-red-500">{errors.otp}</p>
            )}

            {/* Password Fields */}
            <div className="relative mb-4">
              <input
                type={showPasswords ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`block w-full px-3.5 py-3 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
                placeholder="New Password"
              />
              <button
                type="button"
                onClick={() => setShowPasswords(!showPasswords)}
                className="absolute text-gray-600 right-3 top-4"
              >
                {showPasswords ? <FaEye /> : <FaEyeSlash />}
              </button>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">{errors.password}</p>
              )}
            </div>

            <div className="relative mb-4">
              <input
                type={showPasswords ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`block w-full px-3.5 py-3 border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
                placeholder="Confirm Password"
              />
              <button
                type="button"
                onClick={() => setShowPasswords(!showPasswords)}
                className="absolute text-gray-600 right-3 top-4"
              >
                {showPasswords ? <FaEye /> : <FaEyeSlash />}
              </button>
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className={`mybtn w-full ${
                loading
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "border border-main-color hover:bg-main-color text-sub-color"
              }`}
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Password"}
            </button>
          </form>
          <div className="my-4 text-center">
            <p className="text-sub-color font-medium">
              Didn’t receive a code?{" "}
              <span className="text-main-color underline cursor-pointer">
                Resend code
              </span>
            </p>
          </div>
          <div className="flex items-center text-sub-color font-medium text-small space-x-1 py-2">
            <FaChevronLeft className="size-4" />
            <Link
              to="/signin"
              className="hover:underline hover:underline-offset-1 cursor-pointer"
            >
              Return to sign in
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Newpassword;
