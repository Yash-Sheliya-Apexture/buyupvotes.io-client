// import React, { useState } from "react";
// import logo from "../assets/Images/logo.png";
// import google from "../assets/Images/google_logo.png";
// import Uparrow from "../assets/Images/logo-mini.png";
// import { Link, NavLink, useNavigate } from "react-router-dom";

// import axios from "axios"; // Import axios

// const Sign_In = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate(); // Used for navigation after successful login


//   // Access the API URL using Vite-specific syntax
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;  // Correct way to access Vite environment variables

//   // Validation function
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
//     }

//     setErrors(validationErrors);
//     return Object.keys(validationErrors).length === 0;
//   };

//   // Form submission handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validate()) return;

//     setLoading(true);
//     try {
//       const response = await axios.post(
//         // `${apiUrl}/auth/login`, // Use the dynamic URL here
//         `${API_BASE_URL}/auth/login`, // Use the dynamic URL here
//         {
//           email,
//           password,
//         }
//       );

//       // Accessing the data directly from the response
//       const data = response.data;

//       // Handle successful login
//       if (response.status === 200) {
//         localStorage.setItem('authToken', data.accessToken); // Store the access token
//         localStorage.setItem('refreshToken', data.refreshToken); // Optionally, store the refresh token

//         // Redirect to the dashboard or protected route
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       setErrors({ ...errors, general: "Login failed. Please check your credentials." });
//       console.error("Login error", error);
//     } finally {
//       setLoading(false);
//     }
//   };



//   return (
//     <>
//       {/* Main Body with Background Image */}
//       <div className="bg-center bg-cover background-image">
//         {/* Menubar */}
//         <nav className="flex items-center justify-between p-4 lg:px-20">
//           {/* Left-side: Logo */}
//           <div className="flex items-center">
//             {/* Tailwind handles the responsive change */}
//             <Link to="/">
//               <img
//                 src={logo}
//                 alt="Logo"
//                 className="hidden h-6 lg:block lg:h-10"
//               />
//             </Link>
//             <Link to="/">
//               <img
//                 src={Uparrow}
//                 alt="Logo Small"
//                 className="block h-8 lg:hidden"
//               />
//             </Link>
//           </div>

//           {/* Right-side: Need help */}
//           <div>
//             <a href="#" className="text-[#2D2624] font-medium hover:underline">
//               Need help?
//             </a>
//           </div>
//         </nav>

//         {/* Content Section */}
//         <div className="flex items-center justify-center p-4">
//           <div className="lg:w-[30%] h-auto bg-white rounded-[25px] lg:p-6 p-4 pb-10">
//             <h1 className="lg:text-[24px] text-[20px] font-bold text-center mb-4 text-[#2D2624]">
//               Welcome to BuyUpvotes!
//             </h1>
//             <p className="mb-4 text-sm text-center">
//               New user?{" "}
//               <Link
//                 to="/signup"
//                 className="text-[#FF5700] font-bold underline"
//               >
//                 Create an account
//               </Link>
//             </p>
//             <button className="flex items-center justify-start w-full border border-gray-300 hover:border-[#2D2426] hover:bg-[#dfdcdc] rounded-full px-4 py-2.5 lg:text-[16px] text-sm font-bold text-[#2d2624] mb-4 transition-all ease-in duration-200">
//               <img src={google} alt="Google Logo" className="w-8 h-8 mr-12" />
//               Sign in with Google
//             </button>
//             <form onSubmit={handleSubmit}>
//               {/* Email Input */}
//               <div className="mb-4">
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className={`mt-1 block w-full px-3.5 py-3 border ${errors.email ? "border-red-500" : "border-gray-300"
//                     } hover:border-[#2D2426] transition-all ease-in duration-200 rounded-full sm:text-sm`}
//                   placeholder="Email address"
//                 />
//                 {errors.email && (
//                   <p className="mt-1 text-xs text-red-500">{errors.email}</p>
//                 )}
//               </div>

//               {/* Password Input */}
//               <div className="relative mb-2">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className={`mt-1 block w-full px-3.5 py-3 border ${errors.password ? "border-red-500" : "border-gray-300"
//                     } hover:border-[#2D2426] transition-all ease-in duration-200 rounded-full sm:text-sm`}
//                   placeholder="Password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       xmlnsXlink="http://www.w3.org/1999/xlink"
//                       aria-hidden="true"
//                       role="img"
//                       viewBox="0 0 24 24"
//                       className="w-6 h-6"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"
//                       ></path>
//                       <path
//                         fill="currentColor"
//                         fillRule="evenodd"
//                         d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>
//                   ) : (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       xmlnsXlink="http://www.w3.org/1999/xlink"
//                       aria-hidden="true"
//                       role="img"
//                       viewBox="0 0 24 24"
//                       className="w-6 h-6"
//                     >
//                       <path
//                         fill="currentColor"
//                         fillRule="evenodd"
//                         d="M1.606 6.08a1 1 0 0 1 1.313.526L2 7l.92-.394v-.001l.003.009l.021.045l.094.194c.086.172.219.424.4.729a13.4 13.4 0 0 0 1.67 2.237a12 12 0 0 0 .59.592C7.18 11.8 9.251 13 12 13a8.7 8.7 0 0 0 3.22-.602c1.227-.483 2.254-1.21 3.096-1.998a13 13 0 0 0 2.733-3.725l.027-.058l.005-.011a1 1 0 0 1 1.838.788L22 7l.92.394l-.003.005l-.004.008l-.011.026l-.04.087a14 14 0 0 1-.741 1.348a15.4 15.4 0 0 1-1.711 2.256l.797.797a1 1 0 0 1-1.414 1.415l-.84-.84a12 12 0 0 1-1.897 1.256l.782 1.202a1 1 0 1 1-1.676 1.091l-.986-1.514c-.679.208-1.404.355-2.176.424V16.5a1 1 0 0 1-2 0v-1.544c-.775-.07-1.5-.217-2.177-.425l-.985 1.514a1 1 0 0 1-1.676-1.09l.782-1.203c-.7-.37-1.332-.8-1.897-1.257l-.84.84a1 1 0 0 1-1.414-1.414l.797-.797a15.4 15.4 0 0 1-1.87-2.519a14 14 0 0 1-.591-1.107l-.033-.072l-.01-.021l-.002-.007l-.001-.002v-.001C1.08 7.395 1.08 7.394 2 7l-.919.395a1 1 0 0 1 .525-1.314"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>
//                   )}
//                 </button>
//                 {errors.password && (
//                   <p className="mt-1 text-xs text-red-500">{errors.password}</p>
//                 )}
//               </div>

//               <div className="flex items-center justify-end mb-6">
//                 <a href="#" className="text-sm text-[#2d2624] underline">
//                   Forgot password?
//                 </a>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full border border-[#FF5700] hover:bg-orange-600 hover:text-[#FFF] text-[#FF5700] font-bold py-2 transition-all ease-in duration-200 px-4 rounded-full"
//                 disabled={loading}
//               >
//                 {loading ? "Signing In..." : "Sign In"}
//               </button>
//             </form>
//             <p className="text-[14px] text-center font-bold text-[#2D2624] mt-6">
//               By signing up, I agree to{" "}
//               <a href="#" className="underline decoration-[#2d262466]">
//                 Terms and Service
//               </a>
//               and{" "}
//               <a href="#" className="underline decoration-[#2d262466]">
//                 Privacy Policy
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sign_In;



import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import google from "../assets/Images/google_logo.png";
import Uparrow from "../assets/Images/logo-mini.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

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
      {/* Main Body with Background Image */}
      <div className="bg-center bg-cover background-image">
        {/* Menubar */}
        <nav className="flex items-center justify-between p-4 lg:px-20">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="hidden h-6 lg:block lg:h-10" />
            </Link>
            <Link to="/">
              <img src={Uparrow} alt="Logo Small" className="block h-8 lg:hidden" />
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
            <p className="mb-4 text-sm text-center">
              New user?{" "}
              <Link to="/signup" className="text-[#FF5700] font-bold underline">
                Create an account
              </Link>
            </p>
            <button className="flex items-center justify-start w-full border border-gray-300 hover:border-[#2D2426] hover:bg-[#dfdcdc] rounded-full px-4 py-2.5 lg:text-[16px] text-sm font-bold text-[#2d2624] mb-4 transition-all ease-in duration-200">
              <img src={google} alt="Google Logo" className="w-8 h-8 mr-12" />
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
                  } hover:border-[#2D2426] transition-all ease-in duration-200 rounded-full sm:text-sm`}
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
                  } hover:border-[#2D2426] transition-all ease-in duration-200 rounded-full sm:text-sm`}
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <svg className="w-6 h-6">...</svg>
                  ) : (
                    <svg className="w-6 h-6">...</svg>
                  )}
                </button>
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">{errors.password}</p>
                )}
              </div>

              <div className="flex items-center justify-end mb-6">
                <a href="#" className="text-sm text-[#2d2624] underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full border border-[#FF5700] hover:bg-orange-600 hover:text-[#FFF] text-[#FF5700] font-bold py-2 transition-all ease-in duration-200 px-4 rounded-full"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
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

export default Sign_In;
