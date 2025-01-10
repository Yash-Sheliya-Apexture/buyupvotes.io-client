// import React, { useState, useEffect } from "react";
// import google from "../assets/Images/google_logo.png";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios"; // Import axios
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";
// import TokenService from "../utils/TokenService"; // Ensure you have a TokenService for managing tokens
// import Button from "../Dashboard/components/Button";
// import { FaSpinner } from "react-icons/fa";

// // Login Component
// const Sign_In = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({ email: false, password: false });
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   // Validate individual fields
//   const validateField = (name, value) => {
//     switch (name) {
//       case "email":
//         if (!value) return "Email is required.";
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(value)) return "Invalid email address.";
//         break;
//       case "password":
//         if (!value) return "Password is required.";
//         break;
//       default:
//         return null;
//     }
//     return null;
//   };

//   // Handle blur event for form fields
//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     setTouched((prev) => ({ ...prev, [name]: true }));
//     const error = validateField(name, value);
//     setErrors((prev) => ({ ...prev, [name]: error }));
//   };

//   // Handle change event for form fields
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "email") setEmail(value);
//     if (name === "password") setPassword(value);

//     // Real-time validation for fields that are already touched
//     if (touched[name]) {
//       const error = validateField(name, value);
//       setErrors((prev) => ({ ...prev, [name]: error }));
//     }
//   };

//   // Validate the entire form before submitting
//   const validateForm = () => {
//     const validationErrors = {};
//     const emailError = validateField("email", email);
//     const passwordError = validateField("password", password);

//     if (emailError) validationErrors.email = emailError;
//     if (passwordError) validationErrors.password = passwordError;

//     setErrors(validationErrors);
//     return Object.keys(validationErrors).length === 0; // Form is valid if no errors
//   };

//   // Form submission handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // First, validate the form before making the API request
//     if (!validateForm()) {
//       setTouched({ email: true, password: true });
//       return;
//     }

//     setLoading(true);

//     try {
//       // Send login request to the server
//       const response = await axios.post(`${API_BASE_URL}/auth/login`, {
//         email,
//         password,
//       });

//       const { accessToken, refreshToken } = response.data.tokens;
//       TokenService.setToken(accessToken, refreshToken);

//       // Navigate to the dashboard after successful login
//       navigate("/dashboard");
//     } catch (error) {
//       // Handle error returned by the backend
//       if (error.response) {
//         const statusCode = error.response.status;
//         const message = error.response.data.message || "An error occurred";

//         // Handle different error responses
//         if (statusCode === 400) {
//           setErrors((prev) => ({
//             ...prev,
//             general: message, // This will show the error message from the backend (e.g. "Incorrect password.")
//           }));
//         } else if (statusCode === 500) {
//           setErrors((prev) => ({
//             ...prev,
//             general: "Server error. Please try again later.",
//           }));
//         } else {
//           setErrors((prev) => ({
//             ...prev,
//             general: "An unexpected error occurred. Please try again.",
//           }));
//         }
//       } else if (error.request) {
//         setErrors((prev) => ({
//           ...prev,
//           general: "Network error. Please check your connection.",
//         }));
//       } else {
//         setErrors((prev) => ({
//           ...prev,
//           general: "Unexpected error. Please try again.",
//         }));
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="h-[calc(100vh-72px)] layout flex items-center justify-center">
//         <div className="lg:w-[420px] bg-white rounded-small lg:p-6 p-4 pb-10">
//           <h1 className="mb-4 text-base font-bold text-center lg:text-basic text-sub-color">
//             Welcome to BuyUpvotes!
//           </h1>
//           <p className="mb-4 text-sm text-center">
//             New user?{" "}
//             <Link to="/signup" className="font-bold underline text-main-color">
//               Create an account
//             </Link>
//           </p>
//           <button className="flex items-center justify-between w-full border border-gray-300 hover:bg-[#2d262414] hover:border-sub-color rounded-full px-2 py-2 lg:text-small text-sm font-semibold text-sub-color mb-4 transition-all ease-in duration-300">
//             <img src={google} alt="Google Logo" className="w-6 h-6" />
//             <div className="flex justify-center w-full">
//               <span className="text-xs">Sign in with Google</span>
//             </div>
//           </button>
//           <form onSubmit={handleSubmit}>
//             {/* Display general error message here */}
//             {errors.general && (
//               <>
//                 <div className="flex items-center min-h-12 gap-3 px-4 py-2 bg-[#ffe9d5] rounded-xl shadow-box mb-4">
//                   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-xl text-light-orange" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M7.843 3.802C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792zM13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75" clipRule="evenodd"></path></svg>
//                   <p className="text-xs text-[#7a0916]">
//                     {errors.general}
//                   </p>
//                 </div>
//               </>
//             )}
//             <div className="mb-4">
//               <div className="relative">
//                 <input
//                   type="email"
//                   name="email"
//                   value={email}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`mt-1 block w-full px-3.5 py-2 h-11 border ${
//                     errors.email ? "border-red-500" : "border-gray-300"
//                   } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
//                   placeholder="Email address"
//                 />
//               </div>
//               {touched.email && errors.email && (
//                 <p className="mt-0.5 text-xs text-[#FF0000]">{errors.email}</p>
//               )}
//             </div>

//             <div className="mb-2">
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={password}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`mt-1 block w-full px-3.5 py-2 h-11 border ${
//                     errors.password ? "border-red-500" : "border-gray-300"
//                   } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
//                   placeholder="Password"
//                 />
//                 <div
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500"
//                 >
//                   {showPassword ? <FaEye /> : <FaEyeSlash />}
//                 </div>
//               </div>
//               {touched.password && errors.password && (
//                 <p className="mt-0.5 text-xs text-[#FF0000]">
//                   {errors.password}
//                 </p>
//               )}
//             </div>

//             <div className="flex items-center justify-end my-4">
//               <Link
//                 to="/forgot-password"
//                 className="text-sm underline text-sub-color"
//               >
//                 Forgot Password
//               </Link>
//             </div>

//             {loading ? (
//               <div className="flex items-center justify-center">
//                 <FaSpinner className="text-lg animate-spin" />
//               </div>
//             ) : (
//               <Button type="submit" className="w-full h-10 py-2">
//                 Sign In
//               </Button>
//             )}
//           </form>
//           <p className="mt-6 font-normal text-center text-xxs text-sub-color">
//             By signing up, I agree to{" "}
//             <Link
//               to="/terms-and-conditions"
//               className="underline underline-offset-1 decoration-sub-color"
//             >
//               Terms and Service
//             </Link>{" "}
//             and{" "}
//             <Link
//               to="/privacy-policy"
//               className="underline underline-offset-1 decoration-sub-color"
//             >
//               Privacy Policy
//             </Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sign_In;






import React, { useState, useEffect } from "react";
import google from "../assets/Images/google_logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import TokenService from "../utils/TokenService";
import Button from "../Dashboard/components/Button";
import { FaSpinner } from "react-icons/fa";
import InputField from "../Dashboard/components/InputField";

const Sign_In = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({ email: false, password: false });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "Email is required.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Invalid email address.";
        break;
      case "password":
        if (!value) return "Password is required.";
        break;
      default:
        return null;
    }
    return null;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const validateForm = () => {
    const validationErrors = {};
    const emailError = validateField("email", email);
    const passwordError = validateField("password", password);

    if (emailError) validationErrors.email = emailError;
    if (passwordError) validationErrors.password = passwordError;

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setTouched({ email: true, password: true });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      });

      const { accessToken, refreshToken } = response.data.tokens;
      TokenService.setToken(accessToken, refreshToken);

      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;
        const message = error.response.data.message || "An error occurred";

        if (statusCode === 400) {
          setErrors((prev) => ({
            ...prev,
            general: message,
          }));
        } else if (statusCode === 500) {
          setErrors((prev) => ({
            ...prev,
            general: "Server error. Please try again later.",
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            general: "An unexpected error occurred. Please try again.",
          }));
        }
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
      <div className="h-[calc(100vh-72px)] layout flex items-center justify-center">
        <div className="lg:w-[420px] bg-white rounded-small lg:p-6 p-4 pb-10">
          <h1 className="mb-4 text-base font-bold text-center lg:text-basic text-sub-color">
            Welcome to BuyUpvotes!
          </h1>
          <p className="mb-4 text-sm text-center">
            New user?{" "}
            <Link to="/signup" className="font-bold underline text-main-color">
              Create an account
            </Link>
          </p>
          <button className="flex items-center justify-center w-full gap-4 px-8 py-2.5 text-lg font-semibold transition-colors duration-300 bg-white border border-gray-300 rounded-xl text-balck hover:bg-gray-100 hover:border-gray-400 mb-4">
            <img src={google} alt="Google Logo" className="w-6 h-6" />
            <div className="flex justify-center">
              <span className="text-xs">Sign in with Google</span>
            </div>
          </button>
          <form onSubmit={handleSubmit}>
            {errors.general && (
              <>
                <div className="flex items-center min-h-12 gap-3 px-4 py-2 bg-[#ffe9d5] rounded-xl shadow-box mb-4">
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
                  <p className="text-xs text-[#7a0916]">{errors.general}</p>
                </div>
              </>
            )}

            <div className="mb-4">
              <InputField
                type="email"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                inputPadding="p-3"
                labelPosition="top-3.5"
              />
            </div>

            <div className="mb-2">
              <InputField
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password}
                inputPadding="p-3"
                labelPosition="top-3.5"
                togglePasswordVisibility={true} // Enable toggle for password field
              />
            </div>

            <div className="flex items-center justify-end my-4">
              <Link
                to="/forgot-password"
                className="text-sm underline text-sub-color"
              >
                Forgot Password
              </Link>
            </div>

            {loading ? (
              <div className="flex items-center justify-center">
                <FaSpinner className="text-lg animate-spin" />
              </div>
            ) : (
              <button type="submit"  className="flex items-center justify-center gap-2 px-10 py-2.5 text-small font-medium text-white transition-colors duration-300 border-2 bg-main-color rounded-xl hover:bg-orange-600 w-full border-main-color hover:border-orange-600">
                Sign In
              </button>
            )}
          </form>
          <p className="mt-6 font-normal text-center text-xxs text-sub-color">
            By signing up, I agree to{" "}
            <Link
              to="/terms-and-conditions"
              className="underline underline-offset-1 decoration-sub-color"
            >
              Terms and Service
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy-policy"
              className="underline underline-offset-1 decoration-sub-color"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sign_In;
