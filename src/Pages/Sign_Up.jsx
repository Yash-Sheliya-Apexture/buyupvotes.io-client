import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import google from "../assets/Images/google_logo.png";
import Uparrow from "../assets/Images/logo-mini.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Sign_Up = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState(""); // Add state for firstName
  const [lastName, setLastName] = useState(""); // Add state for lastName
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Used for navigation after successful registration

  // Access the API URL using Vite-specific syntax
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Correct way to access Vite environment variables

  // Validation Function
  const validate = () => {
    const validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      validationErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      validationErrors.email = "Invalid email address.";
    }

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

    if (!firstName) {
      validationErrors.firstName = "First name is required."; // Add validation for firstName
    }

    if (!lastName) {
      validationErrors.lastName = "Last name is required."; // Add validation for lastName
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Form Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/register`, // Use the dynamic URL here from the environment variable
        {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        }
      );

      // Handle successful registration
      if (response.status === 201) {
        // Redirect to login page
        navigate("/signin");
      }
    } catch (error) {
      setErrors({
        ...errors,
        general: "Registration failed. Please try again.",
      });
      console.error("Registration error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Content Section */}
      <div className="flex items-center justify-center p-4">
        <div className="lg:w-[30%] h-auto bg-white rounded-small lg:p-6 p-4 pb-10">
          <h1 className="lg:text-basic text-base font-bold text-center mb-4 text-sub-color">
            Welcome to BuyUpvotes!
          </h1>
          <p className="mb-4 text-sm leading-7 text-center">
            Already have an account?
            <Link
              to="/signin"
              className="text-main-color font-bold underline underline-offset-1"
            >
              &nbsp;Sign in <br />
            </Link>
            Or register below
          </p>
          <button className="flex items-center justify-start w-full border border-gray-300 hover:bg-[#f8783d] hover:border-sub-color rounded-full px-4 py-2 lg:text-small text-sm font-semibold text-sub-color hover:text-white mb-4 transition-all ease-in duration-300">
            <img src={google} alt="Google Logo" className="w-6 h-6 mr-12" />
            Sign in with Google
          </button>
          <form onSubmit={handleSubmit} className="lg:space-y-4 space-y-3">
            <div className="flex space-x-2">
              <div className="w-1/2">
                <input
                  type="text"
                  id="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`mt-1 block w-full px-3.5 py-3 border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
                  placeholder="First name"
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs text-[#FF0000]">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  id="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={`mt-1 block w-full px-3.5 py-3 border ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
                  placeholder="Last name"
                />
                {errors.lastName && (
                  <p className="mt-1 text-xs text-[#FF0000]">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>
            {/* Email Input */}
            <div className="">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 block w-full px-3.5 py-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
                placeholder="Email address"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-[#FF0000]">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`block w-full px-3.5 py-3 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-gray-600 right-3 top-4"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
              {errors.password && (
                <p className="mt-1 text-xs text-[#FF0000]">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`block w-full px-3.5 py-3 border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
                placeholder="Confirm Password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute text-gray-600 right-3 top-4"
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-[#FF0000]">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="">
              <button
                type="submit"
                className={`mybtn w-full${
                  loading
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : " border border-main-color hover:bg-main-color text-sub-color"
                }`}
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>
            </div>
          </form>
          <p className="text-[12px] text-center font-medium text-sub-color mt-6">
            By signing up, I agree to{" "}
            <a href="#" className="underline decoration-[#2d262466]">
              Terms and Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline decoration-[#2d262466]">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sign_Up;
