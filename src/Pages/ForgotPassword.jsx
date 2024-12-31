// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Link, useNavigate } from "react-router-dom";
// import { FaChevronLeft } from "react-icons/fa";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate(); // Used for navigation

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);

//     // Simulate processing delay
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     if (!email.trim()) {
//       toast.error("Email address is required.");
//       setLoading(false);
//       return;
//     }

//     if (!validateEmail(email)) {
//       toast.error("Please enter a valid email address.");
//       setLoading(false);
//       return;
//     }

//     // Simulate success case
//     toast.success("Verification code sent to your email address!");

//     // Redirect to NewPassword component after 3 seconds
//     setTimeout(() => {
//       navigate("/newpassword");
//     }, 3000);

//     setLoading(false);
//   };

//   return (
//     <>
//       <div className="h-[calc(100vh-72px)] layout flex items-center justify-center px-4">
//         <div className="lg:w-[420px] h-auto bg-white rounded-small lg:p-6 p-4 pb-10">
//           <div className="mb-4">
//             <p className="text-sm font-normal text-center lead-ing-7 text-sub-color">
//               Enter your email address below and we'll email you a verification
//               code to confirm your email and reset your password.
//             </p>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <div className="relative">
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="mt-1 block w-full px-3.5 py-2 h-11 border hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm"
//                   placeholder="Email address"
//                 />
//               </div>
//             </div>

//             <div className="my-2">
//               <button
//                 type="submit"
//                 className="flex items-center justify-center w-full mybtn"
//                 style={{ padding: "8px 40px" }}
//                 disabled={loading}
//               >
//                 {loading ? (
//                   <div className="flex flex-col items-center justify-center w-full gap-4">
//                     <div className="flex items-center justify-center w-5 h-5 text-4xl text-blue-300 border-4 border-transparent rounded-full animate-spin border-t-blue-300">
//                       <div className="flex items-center justify-center w-5 h-5 text-2xl text-red-300 border-4 border-transparent rounded-full animate-spin border-t-red-300"></div>
//                     </div>
//                   </div>
//                 ) : (
//                   "Send Verification Code"
//                 )}
//               </button>
//             </div>


//             <div className="mt-6 text-sm font-normal text-sub-color">
//               <div className="flex items-center gap-1"> 
//               <FaChevronLeft className="size-3"/>
//               <Link
//                 to="/signin"
//                 className="cursor-pointer hover:underline hover:underline-offset-1"
//               >
//                 Return to sign in
//               </Link>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ForgotPassword;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaChevronLeft, FaSpinner } from "react-icons/fa";
// import Button from "../Dashboard/components/Button";
// import axios from 'axios';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({ email: false });
//   const [generalError, setGeneralError] = useState(""); // For general error messages
//   const navigate = useNavigate(); // Used for navigation
  
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   // Validate email
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   // Handle blur event
//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     setTouched((prev) => ({ ...prev, [name]: true }));

//     // Check if the email is empty or invalid when the user clicks outside
//     if (!value.trim()) {
//       setErrors((prev) => ({
//         ...prev,
//         email: "Email address is required."
//       }));
//     } else if (name === "email" && !validateEmail(value)) {
//       setErrors((prev) => ({
//         ...prev,
//         email: "Please enter a valid email address."
//       }));
//     }
//   };

//   // Handle change event
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEmail(value);

//     // Clear error message when the user starts typing
//     if (name === "email") {
//       setErrors((prev) => ({
//         ...prev,
//         email: "" // Clear any errors while typing
//       }));
//     }

//     // Clear general error when user starts typing
//     setGeneralError("");
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Collect errors into a single object
//     let newErrors = {};
//     setGeneralError(""); // Reset general error on submit

//     if (!email.trim()) {
//       newErrors.email = "Email address is required.";
//     } else if (!validateEmail(email)) {
//       newErrors.email = "Please enter a valid email address.";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors); // Update errors if there are validation issues
//       setTouched({ email: true }); // Set touched for the email field
//       return;
//     }

//     setLoading(true);

//     // Make the API request to send OTP
//     try {
//       const response = await axios.post(`${API_BASE_URL}/auth/forgot-password`, {email});
//       // If successful, reset the form and show success message
//       setErrors({});
//       setTouched({});
//       setEmail("");
//       setLoading(false);

//       // Optionally show a success message (you can navigate to a confirmation page if you want)
//       setTimeout(() => {
//         navigate("/newpassword"); // Redirect after a success
//       }, 3000);
//     } catch (error) {
//       setLoading(false);

//       // Handle any error (e.g., user not found, server error)
//       if (error.response && error.response.data) {
//         setGeneralError(error.response.data.message);
//       } else {
//         setGeneralError("Something went wrong. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="h-[calc(100vh-72px)] layout flex items-center justify-center px-4">
//       <div className="lg:w-[420px] h-auto bg-white rounded-small lg:p-6 p-4 pb-10">
//         <div className="mb-4">
//           <p className="text-sm font-normal leading-7 text-center text-sub-color">
//             Enter your email address below and we'll email you a verification code to confirm your email and reset your password.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit}>
//           {/* General error message container */}
//           {generalError && (
//             <div className="flex items-center h-12 gap-3 px-4 py-2 bg-[#ffe9d5] rounded-xl shadow-box mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-xl text-light-orange" width="1em" height="1em" viewBox="0 0 24 24">
//                 <path fill="currentColor" fillRule="evenodd" d="M7.843 3.802C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792zM13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75" clipRule="evenodd"></path>
//               </svg>
//               <div className="text-xs text-[#7a0916]">
//                 {generalError}
//               </div>
//             </div>
//           )}

//           <div className="mb-4">
//             <div className="relative">
//               <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={`mt-1 block w-full px-3.5 py-2 h-11 border ${errors.email ? "border-red-500" : "border-gray-300"} hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
//                 placeholder="Email address"
//               />
//             </div>
//             {touched.email && errors.email && (
//               <p className="mt-0.5 text-xs text-[#FF0000]">{errors.email}</p>
//             )}
//           </div>

//           <div className="my-2">
//             {loading ? (
//               <div className="flex items-center justify-center">
//                 <FaSpinner className="text-lg animate-spin" />
//               </div>
//             ) : (
//               <Button type="submit" className="w-full h-10 py-2">
//                 Send Verification Code
//               </Button>
//             )}
//           </div>

//           <div className="mt-6 text-sm font-normal text-sub-color">
//             <div className="flex items-center gap-1">
//               <FaChevronLeft className="size-3" />
//               <Link to="/signin" className="cursor-pointer hover:underline hover:underline-offset-1">
//                 Return to sign in
//               </Link>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaSpinner } from "react-icons/fa";
import Button from "../Dashboard/components/Button";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({ email: false });
    const [generalError, setGeneralError] = useState(""); // For general error messages
    const navigate = useNavigate();

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    // Validate email
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

     // Validate individual fields
    const validateField = (name, value) => {
       switch (name) {
           case "email":
                if (!value) return "Email address is required.";
               const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
               if (!emailRegex.test(value)) return "Please enter a valid email address.";
               break;
           default:
              return null;
         }
         return null;
     };

    // Handle blur event
    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    // Handle change event
     const handleChange = (e) => {
       const { name, value } = e.target;
        setEmail(value);

        // Real-time validation for fields that are already touched
         if (touched[name]) {
             const error = validateField(name, value);
            setErrors((prev) => ({ ...prev, [name]: error }));
        }
         setGeneralError("");
    };

    // Validate the entire form before submitting
     const validateForm = () => {
       const validationErrors = {};
       const emailError = validateField("email", email);

        if (emailError) validationErrors.email = emailError;

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0; // Form is valid if no errors
     };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // First, validate the form before making the API request
         if (!validateForm()) {
            setTouched({ email: true });
            return;
        }


         setLoading(true);
        // Make the API request to send OTP
        try {
            const response = await axios.post(`${API_BASE_URL}/auth/forgot-password`, {email});
            // If successful, reset the form and show success message
             localStorage.setItem("resetEmail", email);
             setErrors({});
            setTouched({});
             setEmail("");
            setLoading(false);
             toast.success("Verification code sent to your email!");

            // Optionally show a success message (you can navigate to a confirmation page if you want)
             setTimeout(() => {
                navigate("/newpassword"); // Redirect after a success
            });
        } catch (error) {
             setLoading(false);

           // Handle error returned by the backend
           if (error.response) {
             const statusCode = error.response.status;
              const message = error.response.data.message || "An error occurred";

              // Handle different error responses
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
                       general: "Please enter a valid email address.",
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
        }
    };

    return (
        <div className="h-[calc(100vh-72px)] layout flex items-center justify-center px-4">
            <div className="lg:w-[420px] h-auto bg-white rounded-small lg:p-6 p-4 pb-10">
                <div className="mb-4">
                    <p className="text-sm font-normal leading-7 text-center text-sub-color">
                        Enter your email address below and we'll email you a verification code to confirm your email and reset your password.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                   {/* Display general error message here */}
                    {errors.general && (
                        <>
                         <div className="flex items-center h-12 gap-3 px-4 py-2 bg-[#ffe9d5] rounded-xl shadow-box mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-xl text-light-orange" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M7.843 3.802C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792zM13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75" clipRule="evenodd"></path></svg>
                                <p className="text-xs text-[#7a0916]">
                                    {errors.general}
                                </p>
                           </div>
                        </>
                    )}
                    <div className="mb-4">
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`mt-1 block w-full px-3.5 py-2 h-11 border ${errors.email ? "border-red-500" : "border-gray-300"} hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
                                placeholder="Email address"
                            />
                        </div>
                       {touched.email && errors.email && <p className="mt-0.5 text-xs text-[#FF0000]">{errors.email}</p>}
                    </div>

                    <div className="my-2">
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <FaSpinner className="text-lg animate-spin" />
                            </div>
                        ) : (
                            <Button type="submit" className="w-full h-10 py-2">
                                Send Verification Code
                            </Button>
                        )}
                    </div>

                    <div className="mt-6 text-sm font-normal text-sub-color">
                        <div className="flex items-center gap-1">
                            <FaChevronLeft className="size-3" />
                            <Link to="/signin" className="cursor-pointer hover:underline hover:underline-offset-1">
                                Return to sign in
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;