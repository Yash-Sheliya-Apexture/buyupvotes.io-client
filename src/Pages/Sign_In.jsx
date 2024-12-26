import React, { useState, useEffect } from "react";
import logo from "../assets/Images/logo.png";
import Uparrow from "../assets/Images/logo-mini.png";
import google from "../assets/Images/google_logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import TokenService from "../utils/TokenService"; // Ensure you have a TokenService for managing tokens
import { toast } from "react-toastify"; // Import toast from react-toastify

// Login Component
const Sign_In = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Used for navigation after successful login

  // Access the API URL using Vite-specific syntax
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Validation function
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
    }

    return validationErrors;
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      Object.values(validationErrors).forEach((error) => toast.error(error));
      return;
    }

    setLoading(true); // Set loading state to true

    try {
      // Send login request to the server
      const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });

      // Destructure accessToken and refreshToken from the response
      const { accessToken, refreshToken } = response.data;

      // Store the tokens securely using TokenService
      TokenService.setToken(accessToken, refreshToken);

      // Redirect the user to the dashboard after a successful login
      toast.success("Login successful!"); // Show success notification
      navigate("/dashboard");

    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;
        const message = error.response.data.message || "An error occurred";

        // Log the error to the console for debugging purposes
        console.error("Login error:", error.response.data);

        // Handle different error responses
        if (statusCode === 401) {
          // Differentiate between invalid email and invalid password
          if (message === "Invalid email.") {
            toast.error("Email not found. Please check your email.");
          } else if (message === "Invalid password.") {
            toast.error("Incorrect password. Please try again.");
          } else {
            toast.error("Invalid email or password.");
          }
        } else if (statusCode === 400) {
          toast.error(message); // Display specific validation errors from the backend
        } else if (statusCode === 500) {
          toast.error("Server error. Please try again later.");
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
      } else if (error.request) {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error("Unexpected error. Please try again.");
      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Auto-logout on token expiration
  const checkAndLogoutOnExpiration = () => {
    const token = TokenService.getToken();
    if (token && TokenService.isTokenExpired(token)) {
      TokenService.clearToken();
      toast.info("Session expired. Please log in again."); // Notify about token expiration
      navigate("/login");
    }
  };

  useEffect(() => {
    checkAndLogoutOnExpiration();
  }, []);


  return (
    <>
      {/* Content Section */}
      <div className="flex items-center justify-center p-4">
        <div className="lg:w-[30%] h-auto bg-white rounded-small lg:p-6 p-4 pb-10">
          <h1 className="lg:text-basic text-base font-bold text-center mb-4 text-sub-color">
            Welcome to BuyUpvotes!
          </h1>
          <p className="mb-4 text-sm text-center">
            New user?{" "}
            <Link to="/signup" className="text-main-color font-bold underline">
              Create an account
            </Link>
          </p>
          <button className="flex items-center justify-start w-full border border-gray-300 hover:bg-[#f8783d] hover:border-sub-color rounded-full px-4 py-2 lg:text-small text-sm font-semibold text-sub-color hover:text-white mb-4 transition-all ease-in duration-300">
            <img src={google} alt="Google Logo" className="w-6 h-6 mr-16" />
            Sign in with Google
          </button>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
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

            <div className="relative mb-2">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 block w-full px-3.5 py-3 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
              {errors.password && (
                <p className="mt-1 text-xs text-[#FF0000]">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-end my-4">
              <Link
                to="/ForgotPassword"
                className="text-sm text-sub-color underline"
              >
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="mybtn w-full" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <p className="text-xxs text-center font-normal text-sub-color mt-6">
            By signing up, I agree to{" "}
            <a
              href="#"
              className="underline underline-offset-1 decoration-sub-color"
            >
              Terms and Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="underline underline-offset-1 decoration-sub-color"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sign_In;
