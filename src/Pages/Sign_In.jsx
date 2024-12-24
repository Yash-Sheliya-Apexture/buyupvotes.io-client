import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import google from "../assets/Images/google_logo.png";
import Uparrow from "../assets/Images/logo-mini.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import TokenService from "../utils/TokenService"; // Ensure you have a TokenService for managing tokens

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

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    // Perform client-side validation
    if (!validate()) return;
  
    setLoading(true); // Set loading state to true
  
    try {
      // Send login request to the server
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      });
  
      // Destructure accessToken and refreshToken from the response
      const { accessToken, refreshToken } = response.data;
  
      if (response.status === 200) {
        // Store the tokens securely using TokenService
        TokenService.setToken(accessToken, refreshToken);
  
        // Redirect the user to the dashboard after a successful login
        navigate("/dashboard");
      }
    } catch (error) {
      // Handle potential errors during the login request
      if (error.response) {
        // Server responded with a status code outside the 2xx range
        const statusCode = error.response.status;
  
        if (statusCode === 401) {
          setErrors({
            ...errors,
            general: "Invalid credentials. Please try again.",
          });
        } else if (statusCode === 500) {
          setErrors({
            ...errors,
            general: "Server error. Please try again later.",
          });
        } else {
          setErrors({
            ...errors,
            general: "An unexpected error occurred. Please try again.",
          });
        }
      } else if (error.request) {
        // No response received from the server
        setErrors({
          ...errors,
          general: "Network error. Please check your connection.",
        });
      } else {
        // Error occurred while setting up the request
        setErrors({
          ...errors,
          general: "Unexpected error. Please try again.",
        });
      }
  
      console.error("Login error:", error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Auto-logout on token expiration
  const checkAndLogoutOnExpiration = () => {
    const token = TokenService.getToken();
    if (token && TokenService.isTokenExpired(token)) {
      TokenService.clearToken();
      alert("Session expired. Please log in again.");
      navigate("/login");
    }
  };

  React.useEffect(() => {
    checkAndLogoutOnExpiration();
  }, []);

  return (
    <>
      {/* Main Body with Background Image */}
      <div className="bg-center bg-cover background-image">
        {/* Menubar */}
        <nav className="flex items-center justify-between p-4 lg:px-20">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="hidden h-6 lg:block lg:h-10"
              />
            </Link>
            <Link to="/">
              <img
                src={Uparrow}
                alt="Logo Small"
                className="block h-8 lg:hidden"
              />
            </Link>
          </div>
          <div>
            <a href="#" className="font-medium text-sub-color hover:underline">
              Need help?
            </a>
          </div>
        </nav>

        {/* Content Section */}
        <div className="flex items-center justify-center p-4">
          <div className="lg:w-[30%] h-auto bg-white rounded-small lg:p-6 p-4 pb-10">
            <h1 className="mb-4 text-base font-bold text-center lg:text-basic text-sub-color">
              Welcome to BuyUpvotes!
            </h1>
            <p className="mb-4 text-sm text-center">
              New user?{" "}
              <Link to="/signup" className="font-bold underline text-main-color">
                Create an account
              </Link>
            </p>
            <button className="flex items-center justify-start w-full px-4 py-2 mb-4 text-sm font-medium transition-all duration-200 ease-in border border-gray-300 rounded-full hover:border-sub-color hover:bg-gray-300/50 lg:text-small text-sub-color">
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
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
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
                  <p className="mt-1 text-xs text-red-500">{errors.password}</p>
                )}
              </div>

              <div className="flex items-center justify-end mb-6">
                <a href="#" className="text-sm underline text-sub-color">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full border border-main-color hover:bg-main-color hover:text-[#FFF] text-main-color font-bold py-2 transition-all ease-in duration-200 px-4 rounded-full"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>
            <p className="mt-6 font-normal text-center text-xxs text-sub-color">
              By signing up, I agree to{" "}
              <a href="#" className="underline underline-offset-1 decoration-sub-color">
                Terms and Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline underline-offset-1 decoration-sub-color">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign_In;
