import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import google from "../assets/Images/google_logo.png";
import Uparrow from "../assets/Images/logo-mini.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

const Sign_Up = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");  // Add state for firstName
  const [lastName, setLastName] = useState("");    // Add state for lastName
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Used for navigation after successful registration

  // Access the API URL using Vite-specific syntax
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

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
      validationErrors.firstName = "First name is required.";  // Add validation for firstName
    }

    if (!lastName) {
      validationErrors.lastName = "Last name is required.";    // Add validation for lastName
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
        `${apiUrl}/auth/register`,  // Use the dynamic URL here from the environment variable
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
      setErrors({ ...errors, general: "Registration failed. Please try again." });
      console.error("Registration error", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
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
            <a href="#" className="text-[#2D2624] font-medium hover:underline">
              Need help?
            </a>
          </div>
        </nav>

        {/* Content Section */}
        <div className="flex items-center justify-center p-4">
          <div className="lg:w-[30%] h-auto bg-white rounded-[25px] lg:p-6 p-4 pb-10">
            <h1 className="lg:text-[24px] text-[20px] font-bold text-center mb-4 text-[#2D2624]">
              Welcome to BuyUpvotes!
            </h1>
            <p className="mb-4 text-sm leading-7 text-center">
              Already have an account?
              <Link
                to="/signin"
                className="text-[#FF5700] font-bold underline"
              >
                &nbsp;&nbsp;Sign in <br />
              </Link>
              Or register below
            </p>
            <button className="flex items-center justify-start w-full border border-gray-300 hover:border-[#2D2426] hover:bg-[#dfdcdc] rounded-full px-4 py-2.5 lg:text-[16px] text-sm font-bold text-[#2d2624] mb-4 transition-all ease-in duration-200">
              <img src={google} alt="Google Logo" className="w-8 h-8 mr-12" />
              Sign in with Google
            </button>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-4">
                {/* <input
                  type="text"
                  placeholder="First name"
                  className="w-1/2 px-3.5 py-2.5 border rounded-full hover:border-[#2D2426] transition-all ease-in duration-200"
                /> */}
                <div className="w-1/2 mb-6">
                  <input
                    type="text"
                    id="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={`mt-1 block w-full px-3.5 py-3 border ${errors.firstName ? "border-red-500" : "border-gray-300"
                      } hover:border-[#2D2426] transition-all ease-in duration-200 rounded-full sm:text-sm`}
                    placeholder="First name"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                  )}
                </div>
                {/* <input
                  type="text"
                  placeholder="Last name"
                  className="w-1/2 px-3.5 py-2.5 border rounded-full hover:border-[#2D2426] transition-all ease-in duration-200"
                /> */}
                <div className="w-1/2 mb-6">
                  <input
                    type="text"
                    id="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={`mt-1 block w-full px-3.5 py-3 border ${errors.lastName ? "border-red-500" : "border-gray-300"
                      } hover:border-[#2D2426] transition-all ease-in duration-200 rounded-full sm:text-sm`}
                    placeholder="Last name"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                  )}
                </div>
              </div>
              {/* Email Input */}
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-1 block w-full px-3.5 py-3 border ${errors.email ? "border-red-500" : "border-gray-300"
                    } hover:border-[#2D2426] transition-all ease-in duration-200 rounded-full sm:text-sm`}
                  placeholder="Email address"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="relative mb-6">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`block w-full px-3.5 py-3 border ${errors.password ? "border-red-500" : "border-gray-300"
                    } hover:border-[#2D2426] transition-all ease-in duration-200 rounded-full sm:text-sm`}
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute text-gray-600 right-4 top-3"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path
                        fill="currentColor"
                        d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M1.606 6.08a1 1 0 0 1 1.313.526L2 7l.92-.394v-.001l.003.009l.021.045l.094.194c.086.172.219.424.4.729a13.4 13.4 0 0 0 1.67 2.237a12 12 0 0 0 .59.592C7.18 11.8 9.251 13 12 13a8.7 8.7 0 0 0 3.22-.602c1.227-.483 2.254-1.21 3.096-1.998a13 13 0 0 0 2.733-3.725l.027-.058l.005-.011a1 1 0 0 1 1.838.788L22 7l.92.394l-.003.005l-.004.008l-.011.026l-.04.087a14 14 0 0 1-.741 1.348a15.4 15.4 0 0 1-1.711 2.256l.797.797a1 1 0 0 1-1.414 1.415l-.84-.84a12 12 0 0 1-1.897 1.256l.782 1.202a1 1 0 1 1-1.676 1.091l-.986-1.514c-.679.208-1.404.355-2.176.424V16.5a1 1 0 0 1-2 0v-1.544c-.775-.07-1.5-.217-2.177-.425l-.985 1.514a1 1 0 0 1-1.676-1.09l.782-1.203c-.7-.37-1.332-.8-1.897-1.257l-.84.84a1 1 0 0 1-1.414-1.414l.797-.797a15.4 15.4 0 0 1-1.87-2.519a14 14 0 0 1-.591-1.107l-.033-.072l-.01-.021l-.002-.007l-.001-.002v-.001C1.08 7.395 1.08 7.394 2 7l-.919.395a1 1 0 0 1 .525-1.314"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  )}
                </button>
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password Input */}
              <div className="relative mb-6">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`block w-full px-3.5 py-3 border ${errors.confirmPassword
                    ? "border-red-500"
                    : "border-gray-300"
                    } hover:border-[#2D2426] transition-all ease-in duration-200 rounded-full sm:text-sm`}
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute text-gray-600 right-4 top-3"
                >
                  {showConfirmPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"
                      ></path>
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M1.606 6.08a1 1 0 0 1 1.313.526L2 7l.92-.394v-.001l.003.009l.021.045l.094.194c.086.172.219.424.4.729a13.4 13.4 0 0 0 1.67 2.237a12 12 0 0 0 .59.592C7.18 11.8 9.251 13 12 13a8.7 8.7 0 0 0 3.22-.602c1.227-.483 2.254-1.21 3.096-1.998a13 13 0 0 0 2.733-3.725l.027-.058l.005-.011a1 1 0 0 1 1.838.788L22 7l.92.394l-.003.005l-.004.008l-.011.026l-.04.087a14 14 0 0 1-.741 1.348a15.4 15.4 0 0 1-1.711 2.256l.797.797a1 1 0 0 1-1.414 1.415l-.84-.84a12 12 0 0 1-1.897 1.256l.782 1.202a1 1 0 1 1-1.676 1.091l-.986-1.514c-.679.208-1.404.355-2.176.424V16.5a1 1 0 0 1-2 0v-1.544c-.775-.07-1.5-.217-2.177-.425l-.985 1.514a1 1 0 0 1-1.676-1.09l.782-1.203c-.7-.37-1.332-.8-1.897-1.257l-.84.84a1 1 0 0 1-1.414-1.414l.797-.797a15.4 15.4 0 0 1-1.87-2.519a14 14 0 0 1-.591-1.107l-.033-.072l-.01-.021l-.002-.007l-.001-.002v-.001C1.08 7.395 1.08 7.394 2 7l-.919.395a1 1 0 0 1 .525-1.314"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  )}
                </button>
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="w-full mb-6">
                <button
                  type="submit"
                  className={`w-full py-2 rounded-full font-semibold transition-all ease-in duration-200 ${loading
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[#FF5700] text-white hover:bg-[#ff6a0d]"
                    }`}
                  disabled={loading}
                >
                  {loading ? "Signing up..." : "Sign Up"}
                </button>
              </div>
            </form>
            <p className="text-[14px] text-center font-bold text-[#2D2624] mt-6">
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
      </div>
    </>
  );
};

export default Sign_Up;
