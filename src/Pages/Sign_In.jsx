import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import Uparrow from "../assets/Images/logo-mini.png";
import google from "../assets/Images/google_logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

// Token Management Utilities
const TokenService = {
  setToken: (accessToken, refreshToken) => {
    localStorage.setItem("authToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  },
  getToken: () => localStorage.getItem("authToken"),
  getRefreshToken: () => localStorage.getItem("refreshToken"),
  clearToken: () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
  },
  isTokenExpired: (token) => {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.exp * 1000 < Date.now();
    } catch (e) {
      return true; // If token is invalid or parsing fails, treat it as expired
    }
  },
};

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
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      });

      const { accessToken, refreshToken } = response.data;

      // Handle successful login
      if (response.status === 200) {
        TokenService.setToken(accessToken, refreshToken);
        navigate("/dashboard"); // Redirect to dashboard
      }
    } catch (error) {
      setErrors({
        ...errors,
        general: "Login failed. Please check your credentials.",
      });
      console.error("Login error", error);
    } finally {
      setLoading(false);
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
