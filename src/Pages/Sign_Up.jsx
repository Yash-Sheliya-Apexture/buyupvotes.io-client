// import React, { useState } from "react";
// import logo from "../assets/Images/Logo.png";
// import google from "../assets/Images/google_logo.png";
// import Uparrow from "../assets/Images/logo-mini.png";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import axios from "axios"; // Import axios
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";
// import Button from "../Dashboard/components/Button";
// import { FaSpinner } from "react-icons/fa";

// const Sign_Up = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [firstName, setFirstName] = useState(""); // Add state for firstName
//   const [lastName, setLastName] = useState(""); // Add state for lastName
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate(); // Used for navigation after successful registration

//   // Access the API URL using Vite-specific syntax
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Correct way to access Vite environment variables

//   // Validation Function
//   const validate = () => {
//     const validationErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!email) {
//       validationErrors.email = "Email is required.";
//     } else if (!emailRegex.test(email)) {
//       validationErrors.email = "Invalid email address.";
//     }

//     if (!password) {
//       validationErrors.password = "Password is required.";
//     } else if (password.length < 6) {
//       validationErrors.password = "Password must be at least 6 characters.";
//     }

//     if (!confirmPassword) {
//       validationErrors.confirmPassword = "Confirm Password is required.";
//     } else if (password !== confirmPassword) {
//       validationErrors.confirmPassword = "Passwords do not match.";
//     }

//     if (!firstName) {
//       validationErrors.firstName = "First name is required."; // Add validation for firstName
//     }

//     if (!lastName) {
//       validationErrors.lastName = "Last name is required."; // Add validation for lastName
//     }

//     setErrors(validationErrors);
//     return Object.keys(validationErrors).length === 0;
//   };

//   // Form Submission Handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validate()) return;

//     setLoading(true);
//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/auth/register`, // Use the dynamic URL here from the environment variable
//         {
//           firstName,
//           lastName,
//           email,
//           password,
//           confirmPassword,
//         }
//       );

//       // Handle successful registration
//       if (response.status === 201) {
//         // Redirect to login page
//         navigate("/signin");
//       }
//     } catch (error) {
//       setErrors({
//         ...errors,
//         general: "Registration failed. Please try again.",
//       });
//       console.error("Registration error", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Content Section */}
//       <div className="flex items-center justify-center p-4">
//         <div className="lg:w-[30%] h-auto bg-white rounded-small lg:p-6 p-4 pb-10">
//           <h1 className="mb-4 text-base font-bold text-center lg:text-basic text-sub-color">
//             Welcome to BuyUpvotes!
//           </h1>
//           <p className="mb-4 text-sm leading-7 text-center">
//             Already have an account?
//             <Link
//               to="/signin"
//               className="font-bold underline text-main-color underline-offset-1"
//             >
//               &nbsp;Sign in <br />
//             </Link>
//             Or register below
//           </p>
//           <button className="flex items-center justify-start w-full border border-gray-300 hover:bg-[#f8783d] hover:border-sub-color rounded-full px-4 py-2 lg:text-small text-sm font-semibold text-sub-color hover:text-white mb-4 transition-all ease-in duration-300">
//             <img src={google} alt="Google Logo" className="w-6 h-6 mr-12" />
//             Sign in with Google
//           </button>
//           <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-4">
//             <div className="flex space-x-2">
//               <div className="w-1/2">
//                 <input
//                   type="text"
//                   id="First name"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                   className={`mt-1 block w-full px-3.5 py-3 border ${errors.firstName ? "border-red-500" : "border-gray-300"
//                     } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
//                   placeholder="First name"
//                 />
//                 {errors.firstName && (
//                   <p className="mt-1 text-xs text-[#FF0000]">
//                     {errors.firstName}
//                   </p>
//                 )}
//               </div>
//               <div className="w-1/2">
//                 <input
//                   type="text"
//                   id="Last name"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                   className={`mt-1 block w-full px-3.5 py-3 border ${errors.lastName ? "border-red-500" : "border-gray-300"
//                     } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
//                   placeholder="Last name"
//                 />
//                 {errors.lastName && (
//                   <p className="mt-1 text-xs text-[#FF0000]">
//                     {errors.lastName}
//                   </p>
//                 )}
//               </div>
//             </div>
//             {/* Email Input */}
//             <div className="">
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className={`mt-1 block w-full px-3.5 py-3 border ${errors.email ? "border-red-500" : "border-gray-300"
//                   } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
//                 placeholder="Email address"
//               />
//               {errors.email && (
//                 <p className="mt-1 text-xs text-[#FF0000]">{errors.email}</p>
//               )}
//             </div>

//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className={`block w-full px-3.5 py-3 border ${errors.password ? "border-red-500" : "border-gray-300"
//                   } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
//                 placeholder="Password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute text-gray-600 right-3 top-4"
//               >
//                 {showPassword ? <FaEye /> : <FaEyeSlash />}
//               </button>
//               {errors.password && (
//                 <p className="mt-1 text-xs text-[#FF0000]">{errors.password}</p>
//               )}
//             </div>

//             {/* Confirm Password Input */}
//             <div className="relative">
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className={`block w-full px-3.5 py-3 border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
//                   } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
//                 placeholder="Confirm Password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 className="absolute text-gray-600 right-3 top-4"
//               >
//                 {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
//               </button>
//               {errors.confirmPassword && (
//                 <p className="mt-1 text-xs text-[#FF0000]">
//                   {errors.confirmPassword}
//                 </p>
//               )}
//             </div>

//             {/* Submit Button */}
//             <div className="flex items-center justify-center">
//               {loading ? (
//                 <div className="flex items-center justify-center">
//                   <FaSpinner className="text-lg animate-spin" />
//                 </div>
//               ) : (
//                 <Button type="submit" className="w-full">
//                   Sign Up
//                 </Button>
//               )}
//             </div>
//           </form>
//           <p className="text-[12px] text-center font-medium text-sub-color mt-6">
//             By signing up, I agree to{" "}
//             <a href="#" className="underline decoration-[#2d262466]">
//               Terms and Service
//             </a>{" "}
//             and{" "}
//             <a href="#" className="underline decoration-[#2d262466]">
//               Privacy Policy
//             </a>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sign_Up;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa"; // Password toggle and spinner
import Button from "../Dashboard/components/Button"; // Assuming your custom Button component is imported here
import google from "../assets/Images/google_logo.png";

const Sign_Up = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
    firstName: false,
    lastName: false,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Access the API URL using Vite-specific syntax
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Validation Function
  const validateField = (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "Email is required.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Invalid email address.";
        break;
      case "password":
        if (!value) return "Password is required.";
        if (value.length < 8) return "Password must be at least 8 characters.";
        break;
      case "confirmPassword":
        if (!value) return "Confirm Password is required.";
        if (value !== password) return "Passwords do not match.";
        break;
      case "firstName":
        if (!value) return "First name is required.";
        break;
      case "lastName":
        if (!value) return "Last name is required.";
        break;
      default:
        return null;
    }
    return null;
  };

  // Handle blur event for form fields
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Handle change event for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
    if (name === "firstName") setFirstName(value);
    if (name === "lastName") setLastName(value);

    // Real-time validation for fields that are already touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  // Validate the entire form before submitting
  const validateForm = () => {
    const validationErrors = {};
    const fields = [
      "email",
      "password",
      "confirmPassword",
      "firstName",
      "lastName",
    ];

    fields.forEach((field) => {
      const error = validateField(field, eval(field)); // Dynamic validation using eval to access the state values
      if (error) validationErrors[field] = error;
    });

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setTouched({
        email: true,
        password: true,
        confirmPassword: true,
        firstName: true,
        lastName: true,
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });

      if (response.status === 201) {
        navigate("/signin"); // Redirect to login page after successful registration
      }
    } catch (error) {
      console.error("Error during registration:", error);

      if (error.response) {
        const errorMessage =
          error.response.data.message ||
          "Registration failed. Please try again.";
        setErrors((prev) => ({ ...prev, general: errorMessage }));
      } else if (error.request) {
        setErrors((prev) => ({
          ...prev,
          general: "Network error. Please check your connection.",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          general: "Unexpected error. Please try again.",
        }));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="lg:h-[calc(100vh-72px)] layout flex items-center justify-center px-4 pb-6">
        <div className="lg:w-[420px] h-auto bg-white rounded-small lg:p-6 p-4 pb-10">
          <h1 className="mb-4 text-base font-bold text-center lg:text-basic text-sub-color">
            Welcome to BuyUpvotes!
          </h1>
          <div className="mb-4 text-sm leading-7 text-center">
            <p className="flex justify-center gap-1">
              Already have an account?
              <Link
                to="/signin"
                className="font-bold underline text-main-color underline-offset-1"
              >
                Sign in
              </Link>
            </p>
            Or register below
          </div>
          <button className="flex items-center justify-between w-full border border-gray-300 hover:bg-[#2d262414] hover:border-sub-color rounded-full px-2 py-2 lg:text-small text-sm font-semibold text-sub-color mb-4 transition-all ease-in duration-300">
            <img src={google} alt="Google Logo" className="w-6 h-6" />
            <div className="flex justify-center w-full">
              <span className="text-xs">Sign in with Google</span>
            </div>
          </button>
          <form onSubmit={handleSubmit}>
            {/* Display general error message here */}
            {errors.general && (
              <>
                <div className="flex items-center min-h-12 gap-3 px-4 py-2 bg-[#ffe9d5] rounded-xl shadow-box mb-4">
                  <div className="w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="text-xl text-light-orange"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M7.843 3.802C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792zM13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-xs text-[#7a0916]">{errors.general}</p>
                </div>
              </>
            )}

            {/* First Name and Last Name */}
            <div className="flex flex-col lg:flex-row gap-2 mb-4">
              <div className="lg:w-1/2 w-full">
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 block w-full px-3.5 py-2 h-11 border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
                  placeholder="First name"
                />
                {touched.firstName && errors.firstName && (
                  <p className="mt-0.5 text-xs text-[#FF0000]">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="lg:w-1/2 w-full">
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 block w-full px-3.5 py-2 h-11 border ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
                  placeholder="Last name"
                />
                {touched.lastName && errors.lastName && (
                  <p className="mt-1 text-xs text-[#FF0000]">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 block w-full px-3.5 py-2 h-11 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
                  placeholder="Email"
                />
                {touched.email && errors.email && (
                  <p className="mt-0.5 text-xs text-[#FF0000]">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Password */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 block w-full px-3.5 py-2 h-11 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
                  placeholder="Password"
                />
                <div
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              {touched.password && errors.password && (
                <p className="mt-0.5 text-xs text-[#FF0000]">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 block w-full px-3.5 py-2 h-11 border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
                  placeholder="Confirm Password"
                />
                <div
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500"
                >
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="mt-0.5 text-xs text-[#FF0000]">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit Button */}
            {loading ? (
              <div className="flex items-center justify-center">
                <FaSpinner className="text-lg animate-spin" />
              </div>
            ) : (
              <Button type="submit" className="w-full h-10 py-2">
                Create account
              </Button>
            )}

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
          </form>
        </div>
      </div>
    </>
  );
};

export default Sign_Up;
