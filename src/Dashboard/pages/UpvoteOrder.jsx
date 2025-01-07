// import React, { useState } from "react";
// import Ordertable from "../components/OrderTable/OrderTable";
// import Breadcrumb from "../components/Breadcrumb";
// import Dropdown from "../components/Dropdown"; // Import reusable dropdown
// import Button from "../components/Button"; // Import reusable button
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaSpinner } from "react-icons/fa";
// import InputField from "../components/InputField";
// import { FaCheckCircle } from "react-icons/fa";

// const UpvoteOrder = () => {
//   // Consolidated form state
//   const [formData, setFormData] = useState({
//     service: "",
//     speed: "",
//     link: "",
//     quantity: "",
//   });

//   // Consolidated error state
//   const [errors, setErrors] = useState({
//     service: "",
//     speed: "",
//     link: "",
//     quantity: "",
//   });

//   const [successMessage, setSuccessMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Access the API URL using Vite-specific syntax
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   const validateRedditLink = () => {
//     const redditRegex = /^https:\/\/(www\.)?reddit\.com\/[a-zA-Z0-9_]/;
//     if (!redditRegex.test(formData.link)) {
//       setErrors({
//         ...errors,
//         link: "Please enter a valid Reddit link (e.g., https://www.reddit.com/r/subreddit/)",
//       });
//       return false;
//     }
//     return true;
//   };

//   const handleSubmits = (e) => {
//     e.preventDefault();

//     if (validateRedditLink()) {
//       console.log("Reddit link is valid:", formData.link);
//       // Perform further actions (e.g., send link to an API)
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     if (name === "quantity") {
//       handleQuantityValidation(value);
//     }
//   };

//   const handleQuantityValidation = (value) => {
//     const numericValue = parseInt(value.trim(), 10);
//     if (value && /^\d+$/.test(value)) {
//       if (numericValue < 5) {
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           quantity: "Minimum quantity for posts is 5",
//         }));
//       } else if (numericValue > 1000) {
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           quantity: "Maximum quantity for posts is 1000",
//         }));
//       } else {
//         setErrors((prevErrors) => ({ ...prevErrors, quantity: "" }));
//       }
//     } else if (value === "") {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         quantity: "Quantity is required",
//       }));
//     } else {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         quantity: "Quantity must be a valid number",
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {
//       service: formData.service ? "" : "Service is required", // Check if service is selected
//       speed: formData.speed ? "" : "Speed is required", // Check if speed is selected
//       link: formData.link
//         ? validateRedditLink(formData.link)
//           ? ""
//           : "Invalid Reddit link. Example: https://www.reddit.com/r/subreddit/"
//         : "Link is required",
//       quantity:
//         formData.quantity && /^\d+$/.test(formData.quantity)
//           ? parseInt(formData.quantity, 10) < 5
//             ? "Minimum quantity for posts is 5"
//             : parseInt(formData.quantity, 10) > 1000
//             ? "Maximum quantity for posts is 1000"
//             : ""
//           : "Quantity is required",
//     };

//     setErrors(newErrors); // Update the error state

//     return Object.values(newErrors).every((error) => error === ""); // Return true if no errors
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       setLoading(true); // Show loader

//       const token = localStorage.getItem("authToken");

//       try {
//         const response = await fetch(`${API_BASE_URL}/auth/submit-order`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(formData),
//         });

//         const data = await response.json();
//         if (response.ok) {
//           toast.success(data.message || "Order submitted successfully!");
//         } else {
//           toast.error(
//             data.message || "There was an error submitting the order."
//           );
//         }
//       } catch (error) {
//         console.error("Error submitting order:", error);
//         toast.error("An error occurred. Please try again later.");
//       } finally {
//         setLoading(false); // Hide loader after request
//       }

//       // Reset the form after submission
//       setFormData({
//         service: "",
//         speed: "",
//         link: "",
//         quantity: "",
//       });
//     }
//   };

//   const services = [
//     "Post upvotes",
//     "Post Downvotes",
//     "Comment upvotes",
//     "Comment Downvotes",
//   ];

//   const speeds = [
//     "Slowest (1 vote/6 minutes)",
//     "Ultra Slow (1 vote/5 minutes)",
//     "Very Slow (1 vote/2 minutes)",
//     "Slow (1 vote/minute)",
//     "Normal (2 votes/minute)",
//     "Fast (3 votes/minute)",
//     "Very Fast (4 votes/minute)",
//     "Fastest (5 votes/minute)",
//   ];

//   const breadcrumbs = [
//     { label: "Dashboard", link: "/dashboard" },
//     { label: "Order Upvotes" }, // No link for the current page
//   ];

//   return (
//     <div className="container mx-auto">
//       {/* Form Content */}
//       <div>
//         <h1 className="mb-2 font-semibold text-sub-color text-small lg:text-basic">
//           Order Upvotes
//         </h1>
//         <div className="flex items-center">
//           <Breadcrumb items={breadcrumbs} />
//         </div>
//       </div>

//       <div className="flex flex-col w-full gap-4 mt-6 lg:flex-row lg:gap-y-6">
//         {/* Left Section */}
//         <div className="w-full p-4 lg:w-1/2 shadow-main rounded-large lg:p-6">
//           <form onSubmit={handleSubmits} className="space-y-4">
//             {/* Service Dropdown */}
//             <Dropdown
//               type="text"
//               options={services}
//               selectedValue={formData.service}
//               onSelect={(value) => {
//                 setFormData({ ...formData, service: value });

//                 // Clear the error if the value is valid (non-empty)
//                 if (value) {
//                   setErrors((prevErrors) => ({
//                     ...prevErrors,
//                     service: "", // Clear the 'service' error when a valid option is selected
//                   }));
//                 }
//               }}
//               placeholder="Service"
//               error={errors.service}
//             />
//             {/* Raddit link */}
//             <div>
//               <InputField
//                 name="link"
//                 placeholder="Link"
//                 value={formData.link}
//                 onChange={handleInputChange}
//                 error={errors.link}
//               />
//             </div>

//             {/* Quantity Input */}
//             <div>
//               <InputField
//                 type="text"
//                 name="quantity"
//                 placeholder="Quantity"
//                 value={formData.quantity}
//                 onChange={handleInputChange}
//                 error={errors.quantity}
//               />
//             </div>

//             {/* Speed Dropdown */}
//             <Dropdown
//               options={speeds}
//               selectedValue={formData.speed}
//               onSelect={(value) => {
//                 setFormData({ ...formData, speed: value });

//                 // Clear the error if the value is valid (non-empty)
//                 if (value) {
//                   setErrors((prevErrors) => ({
//                     ...prevErrors,
//                     speed: "", // Clear the 'speed' error when a valid option is selected
//                   }));
//                 }
//               }}
//               placeholder="Select Delivery Speed"
//               error={errors.speed}
//             />

//             {/* Success Message */}
//             {successMessage && (
//               <p className="font-medium text-center text-green-500">
//                 {successMessage}
//               </p>
//             )}

//             {/* Submit Button */}
//             <div className="flex justify-center pt-5 space-x-4">
//               {loading ? (
//                 <div>
//                   <FaSpinner className="text-lg animate-spin" />
//                 </div>
//               ) : (
//                 <Button type="submit" onClick={handleSubmit}>
//                   Submit Order
//                 </Button>
//               )}
//             </div>
//           </form>
//         </div>

//         {/* Right Section */}
//         <div className="w-full lg:w-1/2 shadow-main rounded-large lg:p-10 xs:p-4">
//           <p className="text-[16px] font-medium underline underline-offset-1 text-sub-color mb-2">
//             Upvotes & downvotes:
//           </p>
//           <div className="space-y-4 text-gray-700">
//             <div className="flex space-x-20 text-sub-color">
//               <p>
//                 Minimum quantity: <b className="font-bold">5</b>
//               </p>
//               <p>
//                 Maximum quantity: <b className="font-bold">1000</b>
//               </p>
//             </div>
//             <div className="flex items-center justify-center">
//               <hr className="w-[80%]" />
//             </div>
//             <ul className="space-y-1 list-disc list-inside">
//               <li className="text-xs font-bold text-sub-color">
//                 Mobile links are now accepted
//               </li>
//               <li className="text-[#2d2624] font-medium text-xs">
//                 Links can only contain English characters
//               </li>
//             </ul>
//             <div className="flex items-center justify-center">
//               <hr className="w-[80%]" />
//             </div>
//             <p className="text-sm font-medium leading-6 text-sub-color">
//               Our upvotes/downvotes are the same as organic upvotes/downvotes
//               and will not get your account banned. Unusual activity that
//               results in users or moderators reporting your account can still
//               get you banned. Please choose your order's upvote/downvote
//               quantity wisely so as not to arouse any suspicion.
//             </p>
//             <p className="text-xs font-semibold text-sub-color">
//               *Upvotes on posts/comments older than 24 hours are not guaranteed
//               to go through. Downvotes are similarly not guaranteed regardless
//               of post/comment age.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="my-4">
//         <p className="text-center underline text-light-red underline-offset-1 lg:text-medium text-small">
//           Due to Reddit's updated security measures, upvotes on certain
//           subreddits are temporarily unavailable. If affected, the order will be
//           canceled and refunded.
//         </p>
//       </div>

//       {/* Order Tables Data*/}
//       <Ordertable />
//     </div>
//   );
// };

// export default UpvoteOrder;






// import React, { useState, useEffect } from "react";
// import Ordertable from "../components/OrderTable/OrderTable";
// import Breadcrumb from "../components/Breadcrumb";
// import Dropdown from "../components/Dropdown";
// import Button from "../components/Button";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaSpinner } from "react-icons/fa";
// import InputField from "../components/InputField";

// const UpvoteOrder = () => {
//   const [formData, setFormData] = useState({
//     service: "",
//     speed: "",
//     link: "",
//     quantity: "",
//   });

//   const [touched, setTouched] = useState({
//     service: false,
//     speed: false,
//     link: false,
//     quantity: false,
//   });

//   const [errors, setErrors] = useState({});
//   const [generalError, setGeneralError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [calculatedBalance, setCalculatedBalance] = useState(0);
//   const [balanceError, setBalanceError] = useState("");
//   const [quantityError, setQuantityError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const fetchBalance = async () => {
//       const token = localStorage.getItem("authToken");
//       if (!token) return;

//       try {
//         const headers = { Authorization: `Bearer ${token}` };

//         const ordersResponse = await fetch(`${API_BASE_URL}/auth/orders`, {
//           headers,
//         });
//         const ordersData = await ordersResponse.json();

//         let completedQuantityVotes = 0;
//         if (ordersResponse.ok && ordersData) {
//           completedQuantityVotes = ordersData.reduce(
//             (total, order) => total + parseInt(order.quantity || 0, 10),
//             0
//           );
//         }

//         const paymentsResponse = await fetch(`${API_BASE_URL}/payment`, {
//           headers,
//         });
//         const paymentsData = await paymentsResponse.json();

//         let tokensTotal = 0;
//         if (paymentsResponse.ok && paymentsData) {
//           tokensTotal = paymentsData.tokens || 0;
//         }

//         const balance = tokensTotal - completedQuantityVotes;
//         setCalculatedBalance(balance >= 0 ? balance : 0);
//       } catch (error) {
//         console.error("Error fetching balance:", error);
//         setCalculatedBalance(0);
//         setGeneralError("Failed to load balance.");
//       }
//     };

//     fetchBalance();
//   }, [API_BASE_URL]);

//   const validateRedditLink = (link) => {
//     const redditRegex = /^https:\/\/(www\.)?reddit\.com\/[a-zA-Z0-9_]/;
//     return redditRegex.test(link);
//   };

//   const validateField = (name, value) => {
//     let error = "";
//     switch (name) {
//       case "service":
//         if (!value) error = "Service is required.";
//         break;
//       case "speed":
//         if (!value) error = "Speed is required.";
//         break;
//       case "link":
//         if (!value) error = "Reddit link is required.";
//         else if (!validateRedditLink(value))
//           error =
//             "Please enter a valid Reddit link (e.g., https://www.reddit.com/r/subreddit/)";
//         break;
//       case "quantity":
//         if (!value) error = "Quantity is required.";
//         else {
//           const numericValue = parseInt(value.trim(), 10);
//           if (!/^\d+$/.test(value)) {
//             error = "Quantity must be a valid number";
//           } else if (numericValue < 5) {
//             error = "Minimum quantity for posts is 5";
//           } else if (numericValue > 1000) {
//             error = "Maximum quantity for posts is 1000";
//           } else if (numericValue > calculatedBalance) {
//             error = `Quantity cannot be more than your available balance of ${calculatedBalance}`;
//           }
//         }
//         break;
//       default:
//         error = null;
//     }
//     return error;
//   };

//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     setTouched((prev) => ({ ...prev, [name]: true }));
//     const error = validateField(name, value);
//     setErrors((prev) => ({ ...prev, [name]: error }));
//   };

//     // Updated handleDropdownBlur to avoid unnecessary validation
//     const handleDropdownBlur = (name, value) => {
//         setTouched((prev) => ({ ...prev, [name]: true }));
//         if (value) { // Validate only if a value has been selected
//             const error = validateField(name, value);
//             setErrors((prev) => ({ ...prev, [name]: error }));
//         }
//     };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

//     if (touched[name]) {
//       const error = validateField(name, value);
//       setErrors((prev) => ({ ...prev, [name]: error }));
//     }
//   };

//   const validateForm = () => {
//     const validationErrors = {};
//     for (const key in formData) {
//       const error = validateField(key, formData[key]);
//       if (error) {
//         validationErrors[key] = error;
//       }
//     }
//     setErrors(validationErrors);
//     return Object.keys(validationErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isSubmitting) {
//       return;
//     }
//     setIsSubmitting(true);
//     setGeneralError("");
//     setBalanceError("");

//     const formIsValid = validateForm();
//     setTouched({
//       service: true,
//       speed: true,
//       link: true,
//       quantity: true,
//     });

//     if (!formIsValid) {
//       setIsSubmitting(false);
//       return;
//     }

//     if (calculatedBalance < 5) {
//       setBalanceError(
//         "Insufficient balance. You need at least 5 votes to place an order."
//       );
//       setIsSubmitting(false);
//       return;
//     }

//     setLoading(true);
//     const token = localStorage.getItem("authToken");
//     try {
//       const response = await fetch(`${API_BASE_URL}/auth/submit-order`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         toast.success(data.message || "Order submitted successfully!");
//       } else {
//         if (data.message) {
//           setGeneralError(data.message);
//         } else {
//           setGeneralError("There was an error submitting the order.");
//         }
//       }
//     } catch (error) {
//       console.error("Error during submit order:", error);
//       if (error.response) {
//         setGeneralError(
//           error.response.data.message || "Submit order failed. Please try again."
//         );
//       } else if (error.request) {
//         setGeneralError("Network error. Please check your connection.");
//       } else {
//         setGeneralError("Unexpected error. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//       setIsSubmitting(false);
//     }

//     setFormData({
//       service: "",
//       speed: "",
//       link: "",
//       quantity: "",
//     });

//     setTouched({
//       service: false,
//       speed: false,
//       link: false,
//       quantity: false,
//     });
//     setErrors({});
//   };

//   const services = [
//     "Post upvotes",
//     "Post Downvotes",
//     "Comment upvotes",
//     "Comment Downvotes",
//   ];

//   const speeds = [
//     "Slowest (1 vote/6 minutes)",
//     "Ultra Slow (1 vote/5 minutes)",
//     "Very Slow (1 vote/2 minutes)",
//     "Slow (1 vote/minute)",
//     "Normal (2 votes/minute)",
//     "Fast (3 votes/minute)",
//     "Very Fast (4 votes/minute)",
//     "Fastest (5 votes/minute)",
//   ];

//   const breadcrumbs = [
//     { label: "Dashboard", link: "/dashboard" },
//     { label: "Order Upvotes" },
//   ];

//   return (
//     <div className="container mx-auto">
//       {/* Form Content */}
//       <div>
//         <h1 className="mb-2 font-semibold text-sub-color text-small lg:text-basic">
//           Order Upvotes
//         </h1>
//         <div className="flex items-center">
//           <Breadcrumb items={breadcrumbs} />
//         </div>
//       </div>

//       <div className="flex flex-col w-full gap-4 mt-6 lg:flex-row lg:gap-y-6">
//         {/* Left Section */}
//         <div className="w-full p-4 lg:w-1/2 shadow-main rounded-large lg:p-6">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Display general error message here */}
//             {generalError && (
//               <>
//                 <div className="flex items-center min-h-12 gap-3 px-4 py-2 bg-[#ffe9d5] rounded-xl shadow-box mb-3">
//                   <div className="w-5">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       aria-hidden="true"
//                       role="img"
//                       className="text-xl text-light-orange"
//                       width="1em"
//                       height="1em"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M7.843 3.802C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792zM13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75"
//                       ></path>
//                     </svg>
//                   </div>
//                   <p className="text-xs text-[#7a0916]">{generalError}</p>
//                 </div>
//               </>
//             )}

//             {/* Service Dropdown */}
//             <Dropdown
//               type="text"
//               options={services}
//               selectedValue={formData.service}
//               onSelect={(value) => {
//                 setFormData({ ...formData, service: value });
//                   // Call handleDropdownBlur only when an option is selected
//                 if (touched.service) {
//                   handleDropdownBlur("service", value);
//                 }
//               }}
//               placeholder="Service"
//               error={touched.service && errors.service}
//                 onBlur={() => handleDropdownBlur("service", formData.service)}
//             />

//             {/* Raddit link */}
//             <div>
//               <InputField
//                 name="link"
//                 placeholder="Link"
//                 value={formData.link}
//                 onChange={handleInputChange}
//                 onBlur={handleBlur}
//                 error={touched.link && errors.link}
//               />
//             </div>

//             {/* Quantity Input */}
//             <div>
//               <InputField
//                 type="text"
//                 name="quantity"
//                 placeholder="Quantity"
//                 value={formData.quantity}
//                 onChange={handleInputChange}
//                 onBlur={handleBlur}
//                 error={touched.quantity && errors.quantity}
//               />
//               {quantityError && (
//                 <p className="font-medium text-center text-red-500">
//                   {quantityError}
//                 </p>
//               )}
//             </div>

//             {/* Speed Dropdown */}
//             <Dropdown
//               options={speeds}
//               selectedValue={formData.speed}
//                 onSelect={(value) => {
//                 setFormData({ ...formData, speed: value });
//                     // Call handleDropdownBlur only when an option is selected
//                   if (touched.speed) {
//                     handleDropdownBlur("speed", value);
//                 }

//               }}
//               placeholder="Select Delivery Speed"
//                 onBlur={() => handleDropdownBlur("speed", formData.speed)}
//               error={touched.speed && errors.speed}
//             />

//             {/* Balance Error */}
//             {balanceError && (
//               <p className="font-medium text-center text-red-500">
//                 {balanceError}
//               </p>
//             )}

//             {/* Success Message */}
//             {successMessage && (
//               <p className="font-medium text-center text-green-500">
//                 {successMessage}
//               </p>
//             )}

//             {/* Submit Button */}
//             <div className="flex justify-center pt-5 space-x-4">
//               {loading ? (
//                 <div>
//                   <FaSpinner className="text-lg animate-spin" />
//                 </div>
//               ) : (
//                 <Button type="submit" disabled={isSubmitting}>
//                   Submit Order
//                 </Button>
//               )}
//             </div>
//           </form>
//         </div>

//         {/* Right Section */}
//         <div className="w-full lg:w-1/2 shadow-main rounded-large lg:p-10 xs:p-4">
//           <p className="text-[16px] font-medium underline underline-offset-1 text-sub-color mb-2">
//             Upvotes & downvotes:
//           </p>
//           <div className="space-y-4 text-gray-700">
//             <div className="flex space-x-20 text-sub-color">
//               <p>
//                 Minimum quantity: <b className="font-bold">5</b>
//               </p>
//               <p>
//                 Maximum quantity: <b className="font-bold">1000</b>
//               </p>
//             </div>
//             <div className="flex items-center justify-center">
//               <hr className="w-[80%]" />
//             </div>
//             <ul className="space-y-1 list-disc list-inside">
//               <li className="text-xs font-bold text-sub-color">
//                 Mobile links are now accepted
//               </li>
//               <li className="text-[#2d2624] font-medium text-xs">
//                 Links can only contain English characters
//               </li>
//             </ul>
//             <div className="flex items-center justify-center">
//               <hr className="w-[80%]" />
//             </div>
//             <p className="text-sm font-medium leading-6 text-sub-color">
//               Our upvotes/downvotes are the same as organic upvotes/downvotes and
//               will not get your account banned. Unusual activity that results in
//               users or moderators reporting your account can still get you banned.
//               Please choose your order's upvote/downvote quantity wisely so as
//               not to arouse any suspicion.
//             </p>
//             <p className="text-xs font-semibold text-sub-color">
//               *Upvotes on posts/comments older than 24 hours are not guaranteed to
//               go through. Downvotes are similarly not guaranteed regardless of
//               post/comment age.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="my-4">
//         <p className="text-center underline text-light-red underline-offset-1 lg:text-medium text-small">
//           Due to Reddit's updated security measures, upvotes on certain
//           subreddits are temporarily unavailable. If affected, the order will be
//           canceled and refunded.
//         </p>
//       </div>

//       {/* Order Tables Data*/}
//       <Ordertable />
//     </div>
//   );
// };

// export default UpvoteOrder;




import React, { useState, useEffect } from "react";
import Ordertable from "../components/OrderTable/OrderTable";
import Breadcrumb from "../components/Breadcrumb";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner } from "react-icons/fa";
import InputField from "../components/InputField";
import axios from 'axios'; // Import axios

const UpvoteOrder = () => {
  const [formData, setFormData] = useState({
    service: "",
    speed: "",
    link: "",
    quantity: "",
  });

  const [touched, setTouched] = useState({
    service: false,
    speed: false,
    link: false,
    quantity: false,
  });

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [calculatedBalance, setCalculatedBalance] = useState(0);
  const [balanceError, setBalanceError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchBalance = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) return;

      try {
        const headers = { Authorization: `Bearer ${token}` };

        // Fetch Orders
        const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, {
          headers,
        });


        if (ordersResponse.status !== 200) {
             console.error('Error fetching orders:', ordersResponse.status, ordersResponse.statusText);
            setGeneralError("Failed to load data, please try again later.");
            setCalculatedBalance(0);
            return;
          }

        try {
          const ordersData = ordersResponse.data;
          
          let completedQuantityVotes = 0;
          if (ordersData && Array.isArray(ordersData)) {
            completedQuantityVotes = ordersData.reduce(
              (total, order) => total + parseInt(order.quantity || 0, 10),
              0
            );
          }

          // Fetch Payments
            const paymentsResponse = await axios.get(`${API_BASE_URL}/payment`, {
            headers,
          });


             if (paymentsResponse.status !== 200) {
                console.error('Error fetching payments:', paymentsResponse.status, paymentsResponse.statusText);
                 setGeneralError("Failed to load data, please try again later.");
              setCalculatedBalance(0);
             return;
               }

            const paymentsData = paymentsResponse.data
          let tokensTotal = 0;
          if (paymentsResponse.status === 200 && paymentsData) {
            tokensTotal = paymentsData.tokens || 0;
          }
          const balance = tokensTotal - completedQuantityVotes;
          setCalculatedBalance(balance >= 0 ? balance : 0);
        } catch (jsonError) {
          console.error("Error parsing JSON:", jsonError);
          setGeneralError("Failed to load data, please try again later.");
          setCalculatedBalance(0);
        }
      } catch (error) {
        console.error("Error fetching balance:", error);
        setCalculatedBalance(0);
        setGeneralError("Failed to load balance, please try again later.");
      }
    };

    fetchBalance();
  }, [API_BASE_URL]);

  const validateRedditLink = (link) => {
    const redditRegex = /^https:\/\/(www\.)?reddit\.com\/[a-zA-Z0-9_]/;
    return redditRegex.test(link);
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "service":
        if (!value) error = "Service is required.";
        break;
      case "speed":
        if (!value) error = "Speed is required.";
        break;
      case "link":
        if (!value) error = "Reddit link is required.";
        else if (!validateRedditLink(value))
          error =
            "Please enter a valid Reddit link (e.g., https://www.reddit.com/r/subreddit/)";
        break;
      case "quantity":
        if (!value) error = "Quantity is required.";
        else {
          const numericValue = parseInt(value.trim(), 10);
          if (!/^\d+$/.test(value)) {
            error = "Quantity must be a valid number";
          } else if (numericValue < 5) {
            error = "Minimum quantity for posts is 5";
          } else if (numericValue > 1000) {
            error = "Maximum quantity for posts is 1000";
          } else if (numericValue > calculatedBalance) {
            error = `Quantity cannot be more than your available balance of ${calculatedBalance}`;
          }
        }
        break;
      default:
        error = null;
    }
    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Updated handleDropdownBlur to avoid unnecessary validation
  const handleDropdownBlur = (name, value) => {
      setTouched((prev) => ({ ...prev, [name]: true }));
      if (value) { // Validate only if a value has been selected
          const error = validateField(name, value);
          setErrors((prev) => ({ ...prev, [name]: error }));
      }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const validateForm = () => {
    const validationErrors = {};
    for (const key in formData) {
      const error = validateField(key, formData[key]);
      if (error) {
        validationErrors[key] = error;
      }
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    setGeneralError("");
    setBalanceError("");

    const formIsValid = validateForm();
    setTouched({
      service: true,
      speed: true,
      link: true,
      quantity: true,
    });

    if (!formIsValid) {
      setIsSubmitting(false);
      return;
    }

    if (calculatedBalance < 5) {
      setBalanceError(
        "Insufficient balance. You need at least 5 votes to place an order."
      );
      setIsSubmitting(false);
      return;
    }

    setLoading(true);
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/submit-order`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data;
      if (response.status === 200) {
        toast.success(data.message || "Order submitted successfully!");
      } else {
        if (data.message) {
          setGeneralError(data.message);
        } else {
          setGeneralError("There was an error submitting the order.");
        }
      }
    } catch (error) {
        console.error("Error during submit order:", error);
        if (error.response) {
            setGeneralError(
            error.response.data.message || "Submit order failed. Please try again."
        );
    } else if (error.request) {
        setGeneralError("Network error. Please check your connection.");
    } else {
      setGeneralError("Unexpected error. Please try again.");
    }
    } finally {
      setLoading(false);
      setIsSubmitting(false);
    }

    setFormData({
      service: "",
      speed: "",
      link: "",
      quantity: "",
    });

    setTouched({
      service: false,
      speed: false,
      link: false,
      quantity: false,
    });
    setErrors({});
  };

  const services = [
    "Post upvotes",
    "Post Downvotes",
    "Comment upvotes",
    "Comment Downvotes",
  ];

  const speeds = [
    "Slowest (1 vote/6 minutes)",
    "Ultra Slow (1 vote/5 minutes)",
    "Very Slow (1 vote/2 minutes)",
    "Slow (1 vote/minute)",
    "Normal (2 votes/minute)",
    "Fast (3 votes/minute)",
    "Very Fast (4 votes/minute)",
    "Fastest (5 votes/minute)",
  ];

  const breadcrumbs = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Order Upvotes" },
  ];

  return (
    <div className="container mx-auto">
      {/* Form Content */}
      <div>
        <h1 className="mb-2 font-semibold text-sub-color text-small lg:text-basic">
          Order Upvotes
        </h1>
        <div className="flex items-center">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <div className="flex flex-col w-full gap-4 mt-6 lg:flex-row lg:gap-y-6">
        {/* Left Section */}
        <div className="w-full p-4 lg:w-1/2 shadow-main rounded-large lg:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Display general error message here */}
            {generalError && (
              <>
                <div className="flex items-center min-h-12 gap-3 px-4 py-2 bg-[#ffe9d5] rounded-xl shadow-box mb-3">
                  <div className="w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      className="text-xl text-light-orange"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M7.843 3.802C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792zM13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-xs text-[#7a0916]">{generalError}</p>
                </div>
              </>
            )}

            {/* Service Dropdown */}
            <Dropdown
              type="text"
              options={services}
              selectedValue={formData.service}
             onSelect={(value) => {
                setFormData({ ...formData, service: value });
                  // Call handleDropdownBlur only when an option is selected
                if (touched.service) {
                  handleDropdownBlur("service", value);
                }
              }}
              placeholder="Service"
              error={touched.service && errors.service}
              onBlur={() => handleDropdownBlur("service", formData.service)}
            />

            {/* Raddit link */}
            <div>
              <InputField
                name="link"
                placeholder="Link"
                value={formData.link}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={touched.link && errors.link}
              />
            </div>

            {/* Quantity Input */}
            <div>
              <InputField
                type="text"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={touched.quantity && errors.quantity}
              />
              {quantityError && (
                <p className="font-medium text-center text-red-500">
                  {quantityError}
                </p>
              )}
            </div>

            {/* Speed Dropdown */}
            <Dropdown
              options={speeds}
              selectedValue={formData.speed}
              onSelect={(value) => {
                 setFormData({ ...formData, speed: value });
                    // Call handleDropdownBlur only when an option is selected
                if (touched.speed) {
                    handleDropdownBlur("speed", value);
                }
              }}
              placeholder="Select Delivery Speed"
              onBlur={() => handleDropdownBlur("speed", formData.speed)}
              error={touched.speed && errors.speed}
            />

            {/* Balance Error */}
            {balanceError && (
              <p className="font-medium text-center text-red-500">
                {balanceError}
              </p>
            )}

            {/* Success Message */}
            {successMessage && (
              <p className="font-medium text-center text-green-500">
                {successMessage}
              </p>
            )}

            {/* Submit Button */}
            <div className="flex justify-center pt-5 space-x-4">
              {loading ? (
                <div>
                  <FaSpinner className="text-lg animate-spin" />
                </div>
              ) : (
                <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-3 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600">
                  Submit Order
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 shadow-main rounded-large lg:p-10 xs:p-4">
          <p className="text-[16px] font-medium underline underline-offset-1 text-sub-color mb-2">
            Upvotes & downvotes:
          </p>
          <div className="space-y-4 text-gray-700">
            <div className="flex space-x-20 text-sub-color">
              <p>
                Minimum quantity: <b className="font-bold">5</b>
              </p>
              <p>
                Maximum quantity: <b className="font-bold">1000</b>
              </p>
            </div>
            <div className="flex items-center justify-center">
              <hr className="w-[80%]" />
            </div>
            <ul className="space-y-1 list-disc list-inside">
              <li className="text-xs font-bold text-sub-color">
                Mobile links are now accepted
              </li>
              <li className="text-[#2d2624] font-medium text-xs">
                Links can only contain English characters
              </li>
            </ul>
            <div className="flex items-center justify-center">
              <hr className="w-[80%]" />
            </div>
            <p className="text-sm font-medium leading-6 text-sub-color">
              Our upvotes/downvotes are the same as organic upvotes/downvotes and
              will not get your account banned. Unusual activity that results in
              users or moderators reporting your account can still get you banned.
              Please choose your order's upvote/downvote quantity wisely so as
              not to arouse any suspicion.
            </p>
            <p className="text-xs font-semibold text-sub-color">
              *Upvotes on posts/comments older than 24 hours are not guaranteed to
              go through. Downvotes are similarly not guaranteed regardless of
              post/comment age.
            </p>
          </div>
        </div>
      </div>

      <div className="my-4">
        <p className="text-center underline text-light-red underline-offset-1 lg:text-medium text-small">
          Due to Reddit's updated security measures, upvotes on certain
          subreddits are temporarily unavailable. If affected, the order will be
          canceled and refunded.
        </p>
      </div>

      {/* Order Tables Data*/}
      <Ordertable />
    </div>
  );
};

export default UpvoteOrder;