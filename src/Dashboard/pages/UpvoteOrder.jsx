// import React, { useState, useEffect } from "react";
// import Ordertable from "../components/OrderTable/OrderTable";
// import Breadcrumb from "../components/Breadcrumb";
// import DropdownField from "../components/DropdownField";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaSpinner } from "react-icons/fa";
// import InputField from "../components/InputField";
// import axios from "axios";

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

//         // Fetch Orders
//         const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, {
//           headers,
//         });

//         if (ordersResponse.status !== 200) {
//           console.error(
//             "Error fetching orders:",
//             ordersResponse.status,
//             ordersResponse.statusText
//           );
//           setGeneralError("Failed to load data, please try again later.");
//           setCalculatedBalance(0);
//           return;
//         }

//         try {
//           const ordersData = ordersResponse.data;

//           let completedQuantityVotes = 0;
//           if (ordersData && Array.isArray(ordersData)) {
//             completedQuantityVotes = ordersData.reduce(
//               (total, order) => total + parseInt(order.quantity || 0, 10),
//               0
//             );
//           }

//           // Fetch Payments
//           const paymentsResponse = await axios.get(`${API_BASE_URL}/payment`, {
//             headers,
//           });

//           if (paymentsResponse.status !== 200) {
//             console.error(
//               "Error fetching payments:",
//               paymentsResponse.status,
//               paymentsResponse.statusText
//             );
//             setGeneralError("Failed to load data, please try again later.");
//             setCalculatedBalance(0);
//             return;
//           }

//           const paymentsData = paymentsResponse.data;
//           let tokensTotal = 0;
//           if (paymentsResponse.status === 200 && paymentsData) {
//             tokensTotal = paymentsData.tokens || 0;
//           }
//           const balance = tokensTotal - completedQuantityVotes;
//           setCalculatedBalance(balance >= 0 ? balance : 0);
//         } catch (jsonError) {
//           console.error("Error parsing JSON:", jsonError);
//           setGeneralError("Failed to load data, please try again later.");
//           setCalculatedBalance(0);
//         }
//       } catch (error) {
//         console.error("Error fetching balance:", error);
//         setCalculatedBalance(0);
//         setGeneralError("Failed to load balance, please try again later.");
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

//   // Updated handleDropdownBlur to avoid unnecessary validation
//   const handleDropdownBlur = (name, value) => {
//     setTouched((prev) => ({ ...prev, [name]: true }));
//     if (value) {
//       // Validate only if a value has been selected
//       const error = validateField(name, value);
//       setErrors((prev) => ({ ...prev, [name]: error }));
//     }
//   };

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
//       const response = await axios.post(
//         `${API_BASE_URL}/auth/submit-order`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const data = response.data;
//       if (response.status === 200) {
//         toast.success(data.message || "Order submitted successfully!");
//       } else {
//         if (data.message) {
//           setGeneralError(data.message);
//         } else {
//           setGeneralError("There was an error submitting the order.");
//         }
//       }
//     } catch (error) {
//       console.error("Error during Place Order:", error);
//       if (error.response) {
//         setGeneralError(
//           error.response.data.message ||
//           "Place Order failed. Please try again."
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
//     <>
//       <section className="Upvotes-service">
//         <div className="container mx-auto">
//           {/* Form Content */}
//           <div>
//             <h1 className="mb-2 font-semibold text-sub-color text-small lg:text-basic">
//               Order Upvotes
//             </h1>
//             <div className="flex items-center">
//               <Breadcrumb items={breadcrumbs} />
//             </div>
//           </div>

//           <div className="flex flex-col w-full gap-4 mt-6 lg:flex-row lg:gap-y-6">
//             {/* Left Section */}
//             <div className="w-full p-4 border border-gray-300 lg:w-1/2 rounded-small lg:p-6 shadow-main">
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 {/* Display general error message here */}
//                 {generalError && (
//                   <>
//                     <div className="flex items-center min-h-12 gap-3 px-4 py-2 bg-[#ffe9d5] rounded-xl shadow-box mb-3">
//                       <div className="w-5">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           aria-hidden="true"
//                           role="img"
//                           className="text-xl text-light-orange"
//                           width="1em"
//                           height="1em"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             fill="currentColor"
//                             d="M7.843 3.802C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792zM13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75"
//                           ></path>
//                         </svg>
//                       </div>
//                       <p className="text-xs text-[#7a0916]">{generalError}</p>
//                     </div>
//                   </>
//                 )}

//                 {/* Service Dropdown */}
//                 <DropdownField
//                   type="text"
//                   options={services}
//                   selectedValue={formData.service}
//                   onSelect={(value) => {
//                     setFormData({ ...formData, service: value });
//                     setErrors((prevErrors) => ({ ...prevErrors, service: '' })); // Clear error on selection
//                   }}
//                   placeholder="Service"
//                   error={errors.service}
//                   setError={(error) => setErrors((prevErrors) => ({ ...prevErrors, service: error }))}
//                   onBlur={() => handleDropdownBlur("service", formData.service)}
//                   isRequired={true}
//                 />

//                 {/* Raddit link */}
//                 <div className="Input-link">
//                   <InputField
//                     name="link"
//                     placeholder="Link"
//                     value={formData.link}
//                     onChange={handleInputChange}
//                     onBlur={handleBlur}
//                     error={touched.link && errors.link}
//                   />
//                 </div>

//                 {/* Quantity Input */}
//                 <div className="Input-quantity">
//                   <InputField
//                     type="text"
//                     name="quantity"
//                     placeholder="Quantity"
//                     value={formData.quantity}
//                     onChange={handleInputChange}
//                     onBlur={handleBlur}
//                     error={touched.quantity && errors.quantity}
//                   />
//                   {quantityError && (
//                     <p className="font-medium text-center text-red-500">
//                       {quantityError}
//                     </p>
//                   )}
//                 </div>

//                 {/* Speed Dropdown */}
//                 <DropdownField
//                   options={speeds}
//                   selectedValue={formData.speed}
//                   onSelect={(value) => {
//                     setFormData({ ...formData, speed: value });
//                     setErrors((prevErrors) => ({ ...prevErrors, speed: '' }));
//                   }}
//                   placeholder="Select Delivery Speed"
//                   onBlur={() => handleDropdownBlur("speed", formData.speed)}
//                   error={errors.speed}
//                   setError={(error) => setErrors((prevErrors) => ({ ...prevErrors, speed: error }))}
//                   isRequired={true}
//                 />

//                 {/* Balance Error */}
//                 {balanceError && (
//                   <p className="font-medium text-center text-red-500">
//                     {balanceError}
//                   </p>
//                 )}

//                 {/* Success Message */}
//                 {successMessage && (
//                   <p className="font-medium text-center text-green-500">
//                     {successMessage}
//                   </p>
//                 )}

//                 {/* Submit Button */}
//                 <div className="flex justify-center pt-5 space-x-4">
//                   {loading ? (
//                     <div>
//                       <FaSpinner className="text-lg animate-spin" />
//                     </div>
//                   ) : (
//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="inline-flex items-center gap-3 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
//                     >
//                       Place Order
//                     </button>
//                   )}
//                 </div>
//               </form>
//             </div>

//             {/* Right Section */}
//             <div className="w-full p-4 border border-gray-300 lg:w-1/2 shadow-main rounded-small lg:p-6">
//               <p className="text-[16px] font-medium underline underline-offset-1 text-sub-color mb-2">
//                 Upvotes & downvotes:
//               </p>
//               <div className="space-y-4 text-gray-700">
//                 <div className="flex space-x-20 text-sub-color">
//                   <p>
//                     Minimum quantity: <b className="font-bold">5</b>
//                   </p>
//                   <p>
//                     Maximum quantity: <b className="font-bold">1000</b>
//                   </p>
//                 </div>
//                 <div className="flex items-center justify-center">
//                   <hr className="w-[80%]" />
//                 </div>
//                 <ul className="space-y-1 list-disc list-inside">
//                   <li className="text-xs font-bold text-sub-color">
//                     Mobile links are now accepted
//                   </li>
//                   <li className="text-[#2d2624] font-medium text-xs">
//                     Links can only contain English characters
//                   </li>
//                 </ul>
//                 <div className="flex items-center justify-center">
//                   <hr className="w-[80%]" />
//                 </div>
//                 <p className="text-sm font-medium leading-6 text-sub-color">
//                   Our upvotes/downvotes are the same as organic
//                   upvotes/downvotes and will not get your account banned.
//                   Unusual activity that results in users or moderators reporting
//                   your account can still get you banned. Please choose your
//                   order's upvote/downvote quantity wisely so as not to arouse
//                   any suspicion.
//                 </p>
//                 <p className="text-xs font-semibold text-sub-color">
//                   *Upvotes on posts/comments older than 24 hours are not
//                   guaranteed to go through. Downvotes are similarly not
//                   guaranteed regardless of post/comment age.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="my-4">
//             <p className="text-center underline text-light-red underline-offset-1 lg:text-medium text-small">
//               Due to Reddit's updated security measures, upvotes on certain
//               subreddits are temporarily unavailable. If affected, the order
//               will be canceled and refunded.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="Upvotes-table">
//         <div className="container mx-auto">
//           {/* Order Tables Data*/}
//           <Ordertable />
//         </div>
//       </section>
//     </>
//   );
// };

// export default UpvoteOrder;


// wrong code up

















































// import React, { useState, useEffect } from "react";
// import Ordertable from "../components/OrderTable/OrderTable";
// import Breadcrumb from "../components/Breadcrumb";
// import Dropdown from "../components/Dropdown";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaSpinner } from "react-icons/fa";
// import InputField from "../components/InputField";
// import axios from "axios";
// import DropdownWithPrices from "../components/DropdownWithPrices";

// const UpvoteOrder = () => {
//   const [formData, setFormData] = useState({
//     category: "Post", // Default Category
//     service: "",
//     link: "",
//     quantity: "",
//     comments: "", // New field for comments
//     calculatedPrice: 0, // To store the calculated price
//   });

//   const [touched, setTouched] = useState({
//     category: false,
//     service: false,
//     link: false,
//     quantity: false,
//     comments: false, // Touch for comments
//   });

//   const [errors, setErrors] = useState({
//     comments: "", // Initialize comments error
//   });

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

//         // Fetch Orders
//         const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, {
//           headers,
//         });

//         if (ordersResponse.status !== 200) {
//           console.error(
//             "Error fetching orders:",
//             ordersResponse.status,
//             ordersResponse.statusText
//           );
//           setGeneralError("Failed to load data, please try again later.");
//           setCalculatedBalance(0);
//           return;
//         }

//         try {
//           const ordersData = ordersResponse.data;

//           let completedQuantityVotes = 0;
//           if (ordersData && Array.isArray(ordersData)) {
//             completedQuantityVotes = ordersData.reduce(
//               (total, order) => total + parseInt(order.quantity || 0, 10),
//               0
//             );
//           }

//           // Fetch Payments
//           const paymentsResponse = await axios.get(`${API_BASE_URL}/payment`, {
//             headers,
//           });

//           if (paymentsResponse.status !== 200) {
//             console.error(
//               "Error fetching payments:",
//               ordersResponse.status,
//               ordersResponse.statusText
//             );
//             setGeneralError("Failed to load data, please try again later.");
//             setCalculatedBalance(0);
//             return;
//           }

//           const paymentsData = paymentsResponse.data;
//           let tokensTotal = 0;
//           if (paymentsResponse.status === 200 && paymentsData) {
//             tokensTotal = paymentsData.tokens || 0;
//           }
//           const balance = tokensTotal - completedQuantityVotes;
//           setCalculatedBalance(balance >= 0 ? balance : 0);
//         } catch (jsonError) {
//           console.error("Error parsing JSON:", jsonError);
//           setGeneralError("Failed to load data, please try again later.");
//           setCalculatedBalance(0);
//         }
//       } catch (error) {
//         console.error("Error fetching balance:", error);
//         setCalculatedBalance(0);
//         setGeneralError("Failed to load balance, please try again later.");
//       }
//     };

//     fetchBalance();
//   }, [API_BASE_URL]);

//   useEffect(() => {
//     calculatePrice();
//   }, [formData.category, formData.service, formData.quantity]);

//   const validateRedditLink = (link) => {
//     const redditRegex = /^https:\/\/(www\.)?reddit\.com\/[a-zA-Z0-9_]/;
//     return redditRegex.test(link);
//   };

//   const getServiceOptions = () => {
//     switch (formData.category) {
//       case "Post":
//         return ["Random Post", "Custom Post"];
//       case "Comment":
//         return ["Random Comments", "Custom Comments"];
//       case "Upvotes":
//         return ["Post Upvotes", "Comments Upvotes"];
//       default:
//         return [];
//     }
//   };

//   const getServicePrices = () => {
//     switch (formData.category) {
//       case "Post":
//         return { "Random Post": 3, "Custom Post": 5 };
//       case "Comment":
//         return { "Random Comments": 1, "Custom Comments": 2 };
//       case "Upvotes":
//         return { "Post Upvotes": 0.05, "Comments Upvotes": 0.05 };
//       default:
//         return {};
//     }
//   };

//   const calculatePrice = () => {
//     let price = 0;
//     const quantity = parseInt(formData.quantity || 0, 10);
//     if (isNaN(quantity) || quantity <= 0) {
//       setFormData({ ...formData, calculatedPrice: 0 }); // reset calculated price
//       return;
//     }

//     const servicePrices = getServicePrices();
//     if (formData.category === "Post") {
//       if (formData.service === "Random Post") {
//         price = servicePrices["Random Post"] * quantity;
//       } else if (formData.service === "Custom Post") {
//         price = servicePrices["Custom Post"] * quantity;
//       }
//     } else if (formData.category === "Comment") {
//       if (formData.service === "Random Comments") {
//         price = servicePrices["Random Comments"] * quantity;
//       } else if (formData.service === "Custom Comments") {
//         price = servicePrices["Custom Comments"] * quantity;
//       }
//     } else if (formData.category === "Upvotes") {
//       if (formData.service === "Post Upvotes") {
//         price = servicePrices["Post Upvotes"] * quantity;
//       } else if (formData.service === "Comments Upvotes") {
//         price = servicePrices["Comments Upvotes"] * quantity;
//       }
//     }
//     setFormData({ ...formData, calculatedPrice: price });
//   };

//   const validateField = (name, value) => {
//     let error = "";
//     switch (name) {
//       case "category":
//         if (!value) error = "Category is required.";
//         break;
//       case "service":
//         if (!value) error = "Service is required.";
//         break;
//       case "link":
//           if (!value) error = "Reddit link is required.";
//           else if (!validateRedditLink(value))
//             error =
//               "Please enter a valid Reddit link (e.g., https://www.reddit.com/r/subreddit/)";
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
//       case "comments":
//         if (formData.category === "Comment" && !value) {
//           error = "Comments are required for the Comment category.";
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

//   // Updated handleDropdownBlur to avoid unnecessary validation
//   const handleDropdownBlur = (name, value) => {
//     setTouched((prev) => ({ ...prev, [name]: true }));
//     if (value) {
//       // Validate only if a value has been selected
//       const error = validateField(name, value);
//       setErrors((prev) => ({ ...prev, [name]: error }));
//     }
//   };

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
//       category: true,
//       service: true,
//       link: true,
//       quantity: true,
//       comments: true, // Touch comment submit
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
//       const response = await axios.post(
//         `${API_BASE_URL}/auth/submit-order`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const data = response.data;
//       if (response.status === 200) {
//         toast.success(data.message || "Order submitted successfully!");
//       } else {
//         if (data.message) {
//           setGeneralError(data.message);
//         } else {
//           setGeneralError("There was an error submitting the order.");
//         }
//       }
//     } catch (error) {
//       console.error("Error during Place Order:", error);
//       if (error.response) {
//         setGeneralError(
//           error.response.data.message ||
//           "Place Order failed. Please try again."
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
//       category: "Post",
//       service: "",
//       link: "",
//       quantity: "",
//       comments: "", // Reset comments
//       calculatedPrice: 0,
//     });

//     setTouched({
//       category: false,
//       service: false,
//       link: false,
//       quantity: false,
//       comments: false, // Reset touch
//     });
//     setErrors({});
//   };

//   const categories = ["Post", "Comment", "Upvotes"];

//   const breadcrumbs = [
//     { label: "Dashboard", link: "/dashboard" },
//     { label: "Order Upvotes" },
//   ];

//   const serviceOptions = getServiceOptions();
//   const servicePrices = getServicePrices();

//   return (
//     <>
//       <section className="Upvotes-service">
//         <div className="container mx-auto">
//           {/* Form Content */}
//           <div>
//             <h1 className="mb-2 font-semibold text-sub-color text-small lg:text-basic">
//               Order Upvotes
//             </h1>
//             <div className="flex items-center">
//               <Breadcrumb items={breadcrumbs} />
//             </div>
//           </div>

//           <div className="flex flex-col w-full gap-4 mt-6 lg:flex-row lg:gap-y-6">
//             {/* Left Section */}
//             <div className="w-full p-4 border border-gray-300 lg:w-1/2 rounded-small lg:p-6 shadow-main">
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 {/* Display general error message here */}
//                 {generalError && (
//                   <>
//                     <div className="flex items-center min-h-12 gap-3 px-4 py-2 bg-[#ffe9d5] rounded-xl shadow-box mb-3">
//                       <div className="w-5">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           aria-hidden="true"
//                           role="img"
//                           className="text-xl text-light-orange"
//                           width="1em"
//                           height="1em"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             fill="currentColor"
//                             d="M7.843 3.802C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792zM13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75"
//                           ></path>
//                         </svg>
//                       </div>
//                       <p className="text-xs text-[#7a0916]">{generalError}</p>
//                     </div>
//                   </>
//                 )}

//                 {/* Category Dropdown */}
//                 <Dropdown
//                   type="text"
//                   options={categories}
//                   selectedValue={formData.category}
//                   onSelect={(value) => {
//                     setFormData({
//                       ...formData,
//                       category: value,
//                       service: "",
//                       comments: "", // Reset comments
//                     }); // Reset service when category changes
//                     if (touched.category) {
//                       handleDropdownBlur("category", value);
//                     }
//                   }}
//                   placeholder="Category"
//                   error={touched.category && errors.category}
//                   onBlur={() =>
//                     handleDropdownBlur("category", formData.category)
//                   }
//                 />

//                 {/* Service Dropdown */}
//                 <DropdownWithPrices
//                   options={serviceOptions}
//                   selectedValue={formData.service}
//                   onSelect={(value) => {
//                     setFormData({ ...formData, service: value });
//                     if (touched.service) {
//                       handleDropdownBlur("service", value);
//                     }
//                   }}
//                   placeholder="Service"
//                   error={touched.service && errors.service}
//                   onBlur={() =>
//                     handleDropdownBlur("service", formData.service)
//                   }
//                   disabled={!formData.category}
//                   prices={servicePrices}
//                 />

//                 {/* Raddit link */}
//                   <div className="Input-link">
//                     <InputField
//                       name="link"
//                       placeholder="Link"
//                       value={formData.link}
//                       onChange={handleInputChange}
//                       onBlur={handleBlur}
//                       error={touched.link && errors.link}
//                     />
//                   </div>

//                 {/* Quantity Input */}
//                 <div className="Input-quantity">
//                   <InputField
//                     type="text"
//                     name="quantity"
//                     placeholder="Quantity"
//                     value={formData.quantity}
//                     onChange={handleInputChange}
//                     onBlur={handleBlur}
//                     error={touched.quantity && errors.quantity}
//                   />
//                   {quantityError && (
//                     <p className="font-medium text-center text-red-500">
//                       {quantityError}
//                     </p>
//                   )}
//                 </div>

//                 {/* Comments Textarea (Conditionally Rendered) */}
//                 {formData.category === "Comment" && (
//                   <div className="Comments-section">
//                     <InputField
//                       as="textarea"
//                       name="comments"
//                       placeholder="Comments (1 per line)"
//                       value={formData.comments}
//                       onChange={handleInputChange}
//                       onBlur={handleBlur}
//                       error={errors.comments}
//                       rows={4} // Added rows prop here
//                       inputPadding="p-2.5" // Adjust inputPadding if needed
//                       labelPosition="top-2.5" // Adjust labelPosition if needed
//                     />
//                   </div>
//                 )}

//                 {/* Display the calculated price */}
//                 <div className="calculated-price">
//                   <p>
//                     Calculated Price: ${formData.calculatedPrice.toFixed(2)}
//                   </p>
//                 </div>

//                 {/* Balance Error */}
//                 {balanceError && (
//                   <p className="font-medium text-center text-red-500">
//                     {balanceError}
//                   </p>
//                 )}

//                 {/* Success Message */}
//                 {successMessage && (
//                   <p className="font-medium text-center text-green-500">
//                     {successMessage}
//                   </p>
//                 )}

//                 {/* Submit Button */}
//                 <div className="flex justify-center pt-5 space-x-4">
//                   {loading ? (
//                     <div>
//                       <FaSpinner className="text-lg animate-spin" />
//                     </div>
//                   ) : (
//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="inline-flex items-center gap-3 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
//                     >
//                       Place Order
//                     </button>
//                   )}
//                 </div>
//               </form>
//             </div>

//             {/* Right Section */}
//             <div className="w-full p-4 border border-gray-300 lg:w-1/2 shadow-main rounded-small lg:p-6">
//               <p className="text-[16px] font-medium underline underline-offset-1 text-sub-color mb-2">
//                 Upvotes & downvotes:
//               </p>
//               <div className="space-y-4 text-gray-700">
//                 <div className="flex space-x-20 text-sub-color">
//                   <p>
//                     Minimum quantity: <b className="font-bold">5</b>
//                   </p>
//                   <p>
//                     Maximum quantity: <b className="font-bold">1000</b>
//                   </p>
//                 </div>
//                 <div className="flex items-center justify-center">
//                   <hr className="w-[80%]" />
//                 </div>
//                 <ul className="space-y-1 list-disc list-inside">
//                   <li className="text-xs font-bold text-sub-color">
//                     Mobile links are now accepted
//                   </li>
//                   <li className="text-[#2d2624] font-medium text-xs">
//                     Links can only contain English characters
//                   </li>
//                 </ul>
//                 <div className="flex items-center justify-center">
//                   <hr className="w-[80%]" />
//                 </div>
//                 <p className="text-sm font-medium leading-6 text-sub-color">
//                   Our upvotes/downvotes are the same as organic
//                   upvotes/downvotes and will not get your account banned.
//                   Unusual activity that results in users or moderators reporting
//                   your account can still get you banned. Please choose your
//                   order's upvote/downvote quantity wisely so as not to arouse
//                   any suspicion.
//                 </p>
//                 <p className="text-xs font-semibold text-sub-color">
//                   *Upvotes on posts/comments older than 24 hours are not
//                   guaranteed to go through. Downvotes are similarly not
//                   guaranteed regardless of post/comment age.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="my-4">
//             <p className="text-center underline text-light-red underline-offset-1 lg:text-medium text-small">
//               Due to Reddit's updated security measures, upvotes on certain
//               subreddits are temporarily unavailable. If affected, the order
//               will be canceled and refunded.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="Upvotes-table">
//         <div className="container mx-auto">
//           {/* Order Tables Data*/}
//           <Ordertable />
//         </div>
//       </section>
//     </>
//   );
// };

// export default UpvoteOrder;





import React, { useState, useEffect, useCallback } from "react";
import Ordertable from "../components/OrderTable/OrderTable";
import Breadcrumb from "../components/Breadcrumb";
import Dropdown from "../components/Dropdown";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner } from "react-icons/fa";
import InputField from "../components/InputField";
import axios from "axios";
import DropdownWithPrices from "../components/DropdownWithPrices";
import { TbMessageFilled } from "react-icons/tb";

const UpvoteOrder = () => {
  const [formData, setFormData] = useState({
    category: "Post", // Default Category
    service: "",
    link: "",
    quantity: "",
    comments: "", // New field for comments
    calculatedPrice: 0, // To store the calculated price
  });

  const [touched, setTouched] = useState({
    category: false,
    service: false,
    link: false,
    quantity: false,
    comments: false, // Touch for comments
  });

  const [errors, setErrors] = useState({
    comments: "", // Initialize comments error
  });

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
          console.error(
            "Error fetching orders:",
            ordersResponse.status,
            ordersResponse.statusText
          );
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
            console.error(
              "Error fetching payments:",
              ordersResponse.status,
              ordersResponse.statusText
            );
            setGeneralError("Failed to load data, please try again later.");
            setCalculatedBalance(0);
            return;
          }

          const paymentsData = paymentsResponse.data;
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

  useEffect(() => {
    calculatePrice();
  }, [formData.category, formData.service, formData.quantity]);

  const validateRedditLink = (link) => {
    const redditRegex = /^https:\/\/(www\.)?reddit\.com\/[a-zA-Z0-9_]/;
    return redditRegex.test(link);
  };

  const getServiceOptions = () => {
    switch (formData.category) {
      case "Post":
        return ["Random Post", "Custom Post"];
      case "Comment":
        return ["Random Comments", "Custom Comments"];
      case "Upvotes":
        return ["Post Upvotes", "Comments Upvotes"];
      default:
        return [];
    }
  };

  const getServicePrices = () => {
    switch (formData.category) {
      case "Post":
        return { "Random Post": 3, "Custom Post": 5 };
      case "Comment":
        return { "Random Comments": 1, "Custom Comments": 2 };
      case "Upvotes":
        return { "Post Upvotes": 0.05, "Comments Upvotes": 0.05 };
      default:
        return {};
    }
  };

  // Add serviceDescriptions
  const getServiceDescriptions = () => {
    return {
      "Random Post": {
        description:
          "<b>Quality:</b> Very HQ<br>Details:<br>🚀 Exclusive server, fastest on the market!<br>⚠ Only Subreddit posts are accepted<br>✅ Daily database refresh!<br>✅ Real Accounts<br>✅ Old accounts with high karma will upvote!<br>✏ Example link: https://www.reddit.com/r/FREE/comments/14e21zd/free_20_giftcard/<br>🔊 Notice link contains comments and 1 post id 14e21zd<br>✅ Upvotes sent manually from aged Accounts with High Karma.",
      },
      "Custom Post": {
        description:
          "Quality: Very HQ<br><br>Details:<br>🚀 Exclusive server, fastest on the market!<br><br>⚠ Only Subreddit posts are accepted<br><br>✅ Daily database refresh!<br><br>✅ Real Accounts<br><br>✅ Old accounts with high karma will upvote!<br><br>-Example link: https://www.reddit.com/r/FREE/comments/14e21zd/free_20_giftcard/<br><br>🔊 Notice link contains comments and 1 post id 14e21zd<br><br>✅ Upvotes sent manually from aged Accounts with High Karma.",
      },
      "Random Comments": {
        description: "Details for Random Comments service...",
      },
      "Custom Comments": {
        description: "Details for Custom Comments service...",
      },
      "Post Upvotes": {
        description: "Details for Post Upvotes service...",
      },
      "Comments Upvotes": {
        description: "Details for Comments Upvotes service...",
      },
    };
  };

  const calculatePrice = () => {
    let price = 0;
    const quantity = parseInt(formData.quantity || 0, 10);
    if (isNaN(quantity) || quantity <= 0) {
      setFormData({ ...formData, calculatedPrice: 0 }); // reset calculated price
      return;
    }

    const servicePrices = getServicePrices();
    if (formData.category === "Post") {
      if (formData.service === "Random Post") {
        price = servicePrices["Random Post"] * quantity;
      } else if (formData.service === "Custom Post") {
        price = servicePrices["Custom Post"] * quantity;
      }
    } else if (formData.category === "Comment") {
      if (formData.service === "Random Comments") {
        price = servicePrices["Random Comments"] * quantity;
      } else if (formData.service === "Custom Comments") {
        price = servicePrices["Custom Comments"] * quantity;
      }
    } else if (formData.category === "Upvotes") {
      if (formData.service === "Post Upvotes") {
        price = servicePrices["Post Upvotes"] * quantity;
      } else if (formData.service === "Comments Upvotes") {
        price = servicePrices["Comments Upvotes"] * quantity;
      }
    }
    setFormData({ ...formData, calculatedPrice: price });
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "category":
        if (!value) error = "Category is required.";
        break;
      case "service":
        if (!value) error = "Service is required.";
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
      case "comments":
        if (formData.category === "Comment" && !value) {
          error = "Comments are required for the Comment category.";
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
    if (value) {
      // Validate only if a value has been selected
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
      category: true,
      service: true,
      link: true,
      quantity: true,
      comments: true, // Touch comment submit
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
      console.error("Error during Place Order:", error);
      if (error.response) {
        setGeneralError(
          error.response.data.message ||
          "Place Order failed. Please try again."
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
      category: "Post",
      service: "",
      link: "",
      quantity: "",
      comments: "", // Reset comments
      calculatedPrice: 0,
    });

    setTouched({
      category: false,
      service: false,
      link: false,
      quantity: false,
      comments: false, // Reset touch
    });
    setErrors({});
  };

  const categories = ["Post", "Comment", "Upvotes"];

  const breadcrumbs = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Order Upvotes" },
  ];

  const serviceOptions = getServiceOptions();
  const servicePrices = getServicePrices();
  const serviceDescriptions = getServiceDescriptions();

  const onCategorySelect = useCallback(
    (value) => {
      let defaultService = "";
      switch (value) {
        case "Post":
          defaultService = "Random Post";
          break;
        case "Comment":
          defaultService = "Random Comments";
          break;
        case "Upvotes":
          defaultService = "Post Upvotes";
          break;
        default:
          defaultService = "";
      }

      setFormData((prevFormData) => ({  // Update formData with a functional update
        ...prevFormData,
        category: value,
        service: defaultService,
        comments: "", // Reset comments
      })); // Reset service when category changes

      if (touched.category) {
        handleDropdownBlur("category", value);
      }
    },
    [formData, handleDropdownBlur, setFormData, touched.category]
  );

  // Initialize service when category is 'Post' on initial load
  useEffect(() => {
    if (formData.category === "Post" && !formData.service) {
      onCategorySelect("Post"); // Select 'Post' category to initialize service
    }
  }, [formData.category, formData.service, onCategorySelect]);

  const selectedServiceDescription = serviceDescriptions[formData.service] || {};

  return (
    <>
      <section className="Upvotes-service">
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

          <div className="flex flex-col w-full gap-6 mt-6 lg:flex-row lg:gap-y-6">
            {/* Left Section */}
            <div className="w-full p-4 border border-gray-300 lg:w-1/2 rounded-small lg:p-6 shadow-main">
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

                {/* Category Dropdown */}
                <Dropdown
                  type="text"
                  options={categories}
                  selectedValue={formData.category}
                  onSelect={onCategorySelect} // Use new handler
                  placeholder="Category"
                  error={touched.category && errors.category}
                  onBlur={() =>
                    handleDropdownBlur("category", formData.category)
                  }
                />

                {/* Service Dropdown */}
                <DropdownWithPrices
                  options={serviceOptions}
                  selectedValue={formData.service}
                  onSelect={(value) => {
                    setFormData({ ...formData, service: value });
                    if (touched.service) {
                      handleDropdownBlur("service", value);
                    }
                  }}
                  placeholder="Service"
                  error={touched.service && errors.service}
                  onBlur={() =>
                    handleDropdownBlur("service", formData.service)
                  }
                  disabled={!formData.category}
                  prices={servicePrices}
                  setError={setErrors} // Pass setErrors to DropdownWithPrices
                />

                {/* Raddit link */}
                <div className="Input-link">
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
                <div className="Input-quantity">
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

                {/* Comments Textarea (Conditionally Rendered) */}
                {formData.category === "Comment" && (
                  <div className="Comments-section">
                    <InputField
                      as="textarea"
                      name="comments"
                      placeholder="Comments (1 per line)"
                      value={formData.comments}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      error={errors.comments}
                      rows={4} // Added rows prop here
                      inputPadding="p-2.5" // Adjust inputPadding if needed
                      labelPosition="top-2.5" // Adjust labelPosition if needed
                    />
                  </div>
                )}

                {/* Display the calculated price */}
                <div className="calculated-price">
                  <p>
                    Calculated Price: ${formData.calculatedPrice.toFixed(2)}
                  </p>
                </div>

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
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-3 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
                    >
                      Place Order
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Right Section */}
            <div className="w-full border border-gray-300 lg:w-1/2 shadow-main rounded-small">
              <div className="p-3 border-b border-gray-300 flex items-center gap-3 mb-2">
                <div className="bg-gray-100 w-10 h-10 flex justify-center items-center rounded-full border border-gray-300">
                  <TbMessageFilled className="text-main-color text-lg" />
                </div>
                <span className="text-xl font-semibold">Service Description</span>
              </div>
              <div className="p-3">
                <div className="border border-gray-300 rounded-xl flex justify-between p-3 mb-3">
                  <span>{formData.service}</span>
                  <span>${servicePrices[formData.service] || 0}</span>
                </div>
                <div className="Service-details leading-7" dangerouslySetInnerHTML={{ __html: selectedServiceDescription.description || "" }}>
                </div>
              </div>
            </div>
          </div>

          <div className="my-4">
            <p className="text-center underline text-light-red underline-offset-1 lg:text-medium text-small">
              Due to Reddit's updated security measures, upvotes on certain
              subreddits are temporarily unavailable. If affected, the order
              will be canceled and refunded.
            </p>
          </div>
        </div>
      </section>

      <section className="Upvotes-table">
        <div className="container mx-auto">
          {/* Order Tables Data*/}
          <Ordertable />
        </div>
      </section>
    </>
  );
};

export default UpvoteOrder;