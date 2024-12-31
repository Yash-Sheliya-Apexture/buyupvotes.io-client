// import React, { useEffect, useState } from "react";
// import Breadcrumb from "../Dashboard/components/Breadcrumb";
// import background from "../assets/Images/hero1.jpg";
// import Button from "../Dashboard/components/Button";
// import axios from "axios"; // Import Axios
// import { toast } from "react-toastify"; // Import toastify
// import "react-toastify/dist/ReactToastify.css";
// import { FaSpinner } from "react-icons/fa";

// function ContactUs() {

//     // State for form values, errors, touched status, loading, and error
//     const [formData, setFormData] = useState({
//         subject: "",
//         message: "",
//         name: "", // Initialize with an empty string
//         email: "", // Initialize with an empty string
//     });

//     const [errors, setErrors] = useState({
//         subject: false,
//         message: false,
//     });

//     const [touched, setTouched] = useState({
//         subject: false,
//         message: false,
//     });

//     const [loading, setLoading] = useState(false);  // Loading state for API request
//     const [error, setError] = useState(null);  // Error state for API request

//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     const breadcrumbs = [
//         { label: "Dashboard", link: "/dashboard" },
//         { label: "Contact Us" },
//     ];

//     // Handle input changes
//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData((prev) => ({ ...prev, [id]: value }));
//         setErrors((prev) => ({ ...prev, [id]: false })); // Reset error state on change
//     };

//     // Fetch user data (name and email) on component mount
//     useEffect(() => {
//         const fetchUserData = async () => {
//             const token = localStorage.getItem("authToken");
//             if (token) {
//                 try {
//                     setLoading(true);  // Set loading to true while fetching
//                     const response = await axios.get(`${API_BASE_URL}/auth/user`, {
//                         headers: { Authorization: `Bearer ${token}` },
//                     });
//                     if (response.status === 200) {
//                         setFormData((prev) => ({
//                             ...prev,
//                             name: response.data.firstName || "", // Default to empty string if not found
//                             email: response.data.email || "", // Default to empty string if not found
//                         }));
//                     } else {
//                         setError("Failed to fetch user data");
//                     }
//                 } catch (err) {
//                     setError("Error fetching user data");
//                 } finally {
//                     setLoading(false);  // Set loading to false once fetching is done
//                 }
//             } else {
//                 setLoading(false);  // Set loading to false if no token is found
//             }
//         };

//         fetchUserData();
//     }, [API_BASE_URL]);

//     // Handle blur to mark fields as touched
//     const handleBlur = (e) => {
//         const { id } = e.target;
//         setTouched((prev) => ({ ...prev, [id]: true }));
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Validation logic
//         const newErrors = {
//             subject: formData.subject.trim() === "" ? "Subject is required" : "",
//             message: formData.message.trim() === "" ? "Message is required" : "",
//         };

//         setErrors(newErrors);

//         // If no errors, proceed to submit the form
//         if (!newErrors.subject && !newErrors.message) {
//             setLoading(true);  // Set loading to true when submission starts

//             setTimeout(async () => {
//                 try {
//                     // Simulating delay of 2 seconds
//                     const response = await axios.post(`${API_BASE_URL}/contact`, {
//                         name: formData.name,
//                         email: formData.email,
//                         subject: formData.subject,
//                         message: formData.message,
//                     });
//                     // Show success toast
//                     toast.success("Message sent successfully!");

//                     // Reset form fields (except name and email after submission)
//                     setFormData({
//                         subject: "",
//                         message: "",
//                         name: formData.name,  // Keep name and email as they are from user data
//                         email: formData.email,
//                     });

//                     setTouched({
//                         subject: false,
//                         message: false,
//                     });

//                 } catch (error) {
//                     console.error("Error sending message:", error);
//                     toast.error("There was an error sending the message.");
//                 } finally {
//                     setLoading(false); // Set loading to false once the request completes
//                 }
//             }, 2000); // Delay of 2 seconds (2000 milliseconds)
//         }
//     };
//     return (
//         <>
//             <div className="container mx-auto">
//                 <h1 className="mb-2 font-bold text-sub-color text-basic">Contact Us</h1>
//                 <div className="flex items-center space-x-4">
//                     <Breadcrumb items={breadcrumbs} />
//                 </div>
//                 <div className="flex flex-col gap-10 my-5 bg-white lg:flex-row">
//                     {/* Left Side */}
//                     <div className="relative lg:w-[45%] overflow-hidden rounded-xlarge">
//                         <div
//                             className="absolute inset-0 z-0 w-auto"
//                             style={{
//                                 backgroundImage: `url(${background})`,
//                                 backgroundPosition: "center",
//                                 backgroundSize: "cover",
//                                 backgroundRepeat: "no-repeat",
//                             }}
//                         ></div>
//                         <div className="absolute inset-0 z-0 bg-black/70"></div>
//                         <div className="flex items-center justify-center h-full px-6 py-20 text-center lg:absolute lg:text-left lg:mt-20">
//                             <h1
//                                 className="z-0 font-black leading-10 text-white lg:text-largest text-xlarge lg:leading-20"
//                             >
//                                 <span>Looking to</span> <br />
//                                 <span className="text-main-color">contact</span> <br />
//                                 <span>us?</span>
//                             </h1>
//                         </div>
//                     </div>

//                     {/* Right Side */}
//                     <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
//                         <div className="flex items-center py-4 text-center border-b">
//                             <h2 className="mr-2 font-bold text-nowrap text-medium text-sub-color">
//                                 Chat with us:
//                             </h2>
//                             <div className="flex items-center space-x-2">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                                     aria-hidden="true"
//                                     role="img"
//                                     className="size-5 text-[#24A1DE] "
//                                     viewBox="0 0 496 512"
//                                 >
//                                     <path
//                                         fill="currentColor"
//                                         d="M248 8C111.033 8 0 119.033 0 256s111.033 248 248 248s248-111.033 248-248S384.967 8 248 8m114.952 168.66c-3.732 39.215-19.881 134.378-28.1 178.3c-3.476 18.584-10.322 24.816-16.948 25.425c-14.4 1.326-25.338-9.517-39.287-18.661c-21.827-14.308-34.158-23.215-55.346-37.177c-24.485-16.135-8.612-25 5.342-39.5c3.652-3.793 67.107-61.51 68.335-66.746c.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608 69.142q-14.845 10.194-26.894 9.934c-8.855-.191-25.888-5.006-38.551-9.123c-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7 18.45-13.7q108.446-47.248 144.628-62.3c68.872-28.647 83.183-33.623 92.511-33.789c2.052-.034 6.639.474 9.61 2.885a10.45 10.45 0 0 1 3.53 6.716a43.8 43.8 0 0 1 .417 9.769"
//                                     ></path>
//                                 </svg>
//                                 <a
//                                     href="https://web.telegram.org/a/"
//                                     target="_blank"
//                                     className="mr-4 font-medium text-sub-color hover:underline"
//                                 >
//                                     Telegram
//                                 </a>
//                                 <span>-</span>
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                                     aria-hidden="true"
//                                     role="img"
//                                     className="size-5 text-[#237067]"
//                                     viewBox="0 0 448 512"
//                                 >
//                                     <path
//                                         fill="currentColor"
//                                         d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157m-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6m101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6"
//                                     ></path>
//                                 </svg>
//                                 <a
//                                     href="https://web.whatsapp.com/"
//                                     target="_blank"
//                                     className="ml-4 text-sub-color hover:underline"
//                                 >
//                                     WhatsApp
//                                 </a>
//                             </div>
//                         </div>

//                         <div className="w-full max-w-2xl">
//                             <h2 className="my-5 text-base font-bold text-center text-sub-color">
//                                 Or send us an email below:
//                             </h2>
//                             <form className="space-y-3" onSubmit={handleSubmit}>
//                                 <div>
//                                     <input
//                                         className={`w-full px-4 py-2 border border-gray-300 rounded-full ${formData.name ? "opacity-50" : ""
//                                             }`}
//                                         id="name"
//                                         type="text"
//                                         placeholder={formData.name ? formData.name : "Name"}
//                                         value={formData.name || ""}
//                                         disabled
//                                     />
//                                 </div>
//                                 <div>
//                                     <input
//                                         className={`w-full px-4 py-2 border border-gray-300 rounded-full ${formData.email ? "opacity-50" : ""
//                                             }`}
//                                         id="email"
//                                         type="email"
//                                         placeholder={formData.email ? formData.email : "Enter Your Email"}
//                                         value={formData.email || ""}
//                                         disabled
//                                     />
//                                 </div>
//                                 <div>
//                                     <input
//                                         className={`w-full px-4 py-2 border ${errors.subject ? "border-red-500" : "border-gray-300"} rounded-full hover:border-black transition-all duration-150`}
//                                         id="subject"
//                                         type="text"
//                                         placeholder="Subject"
//                                         value={formData.subject}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                     />
//                                     {errors.subject && (
//                                         <p className="text-[#FF0000] text-sm mt-1">
//                                             {errors.subject}
//                                         </p>
//                                     )}
//                                 </div>
//                                 <div>
//                                     <textarea
//                                         className={`w-full border ${errors.message ? "border-red-500" : "border-gray-300"} hover:border-black transition-all duration-150 ease-in rounded-small resize-none`}
//                                         id="message"
//                                         rows="8"
//                                         cols="20"
//                                         placeholder="Your message"
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                     ></textarea>
//                                     {errors.message && (
//                                         <p className="text-[#FF0000] text-sm mt-1">
//                                             {errors.message}
//                                         </p>
//                                     )}
//                                 </div>

//                                 {/* Submit Button */}
//                                 <div className="text-center">
//                                     {loading ? (
//                                         <div className="flex items-center justify-center">
//                                             <FaSpinner className="text-lg animate-spin" />
//                                         </div>
//                                     ) : (
//                                         <Button type="submit">Send Message</Button>
//                                     )}
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ContactUs




// import React, { useEffect, useState } from "react";
// import Breadcrumb from "../Dashboard/components/Breadcrumb";
// import background from "../assets/Images/hero1.jpg";
// import Button from "../Dashboard/components/Button";
// import axios from "axios"; // Import Axios
// import { toast } from "react-toastify"; // Import toastify
// import "react-toastify/dist/ReactToastify.css";
// import { FaSpinner } from "react-icons/fa";

// function ContactUs() {
//     // State for form values, errors, touched status, loading, error, and isUserDataFetched
//     const [formData, setFormData] = useState({
//         subject: "",
//         message: "",
//         name: "",
//         email: "",
//     });

//     const [errors, setErrors] = useState({
//         subject: false,
//         message: false,
//     });

//     const [touched, setTouched] = useState({
//         subject: false,
//         message: false,
//     });

//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [isUserDataFetched, setIsUserDataFetched] = useState(false); // Added new state

//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     const breadcrumbs = [
//         { label: "Dashboard", link: "/dashboard" },
//         { label: "Contact Us" },
//     ];

//     // Handle input changes
//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData((prev) => ({ ...prev, [id]: value }));
//         setErrors((prev) => ({ ...prev, [id]: false }));
//     };

//     // Fetch user data (name and email) on component mount
//     useEffect(() => {
//         const fetchUserData = async () => {
//             const token = localStorage.getItem("authToken");
//             if (token) {
//                 try {
//                     setLoading(true);
//                     const response = await axios.get(`${API_BASE_URL}/auth/user`, {
//                         headers: { Authorization: `Bearer ${token}` },
//                     });
//                     if (response.status === 200) {
//                         setFormData((prev) => ({
//                             ...prev,
//                             name: response.data.firstName || "",
//                             email: response.data.email || "",
//                         }));
//                         setIsUserDataFetched(true);  // Set to true if fetch is successful
//                     } else {
//                         setError("Failed to fetch user data");
//                         setIsUserDataFetched(false);  // Set to false if there's an error
//                         setFormData((prev) => ({
//                             ...prev,
//                             name: "",
//                             email: "",
//                         })); // Reset name and email if fetch fails
//                     }
//                 } catch (err) {
//                     setError("Error fetching user data");
//                     setIsUserDataFetched(false);  // Set to false if there's an error
//                     setFormData((prev) => ({
//                         ...prev,
//                         name: "",
//                         email: "",
//                     })); // Reset name and email if fetch fails
//                 } finally {
//                     setLoading(false);
//                 }
//             } else {
//                 setLoading(false);
//                 setIsUserDataFetched(false);  // Set to false if there's an error
//                 setFormData((prev) => ({
//                     ...prev,
//                     name: "",
//                     email: "",
//                 })); // Reset name and email if no token
//             }
//         };

//         fetchUserData();
//     }, [API_BASE_URL]);

//     // Handle blur to mark fields as touched
//     const handleBlur = (e) => {
//         const { id } = e.target;
//         setTouched((prev) => ({ ...prev, [id]: true }));
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Validation logic
//         const newErrors = {
//             subject: formData.subject.trim() === "" ? "Subject is required" : "",
//             message: formData.message.trim() === "" ? "Message is required" : "",
//         };

//         setErrors(newErrors);

//         // If no errors, proceed to submit the form
//         if (!newErrors.subject && !newErrors.message) {
//             setLoading(true);

//             setTimeout(async () => {
//                 try {
//                     const response = await axios.post(`${API_BASE_URL}/contact`, {
//                         name: formData.name,
//                         email: formData.email,
//                         subject: formData.subject,
//                         message: formData.message,
//                     });

//                     toast.success("Message sent successfully!");

//                     // Reset form fields (except name and email after submission)
//                     setFormData((prev) => ({
//                         ...prev,
//                         name: "",
//                         email: "",
//                         subject: "",
//                         message: "",
//                     }));


//                     setTouched({
//                         subject: false,
//                         message: false,
//                     });
//                 } catch (error) {
//                     console.error("Error sending message:", error);
//                     toast.error("There was an error sending the message.");
//                 } finally {
//                     setLoading(false);
//                 }
//             }, 2000);
//         }
//     };
//     return (
//         <>
//             <div className="container mx-auto">
//                 <h1 className="mb-2 font-bold text-sub-color text-basic">Contact Us</h1>
//                 <div className="flex items-center space-x-4">
//                     <Breadcrumb items={breadcrumbs} />
//                 </div>
//                 <div className="flex flex-col gap-10 my-5 bg-white lg:flex-row">
//                     {/* Left Side */}
//                     <div className="relative lg:w-[45%] overflow-hidden rounded-xlarge">
//                         <div
//                             className="absolute inset-0 z-0 w-auto"
//                             style={{
//                                 backgroundImage: `url(${background})`,
//                                 backgroundPosition: "center",
//                                 backgroundSize: "cover",
//                                 backgroundRepeat: "no-repeat",
//                             }}
//                         ></div>
//                         <div className="absolute inset-0 z-0 bg-black/70"></div>
//                         <div className="flex items-center justify-center h-full px-6 py-20 text-center lg:absolute lg:text-left lg:mt-20">
//                             <h1
//                                 className="z-0 font-black leading-10 text-white lg:text-largest text-xlarge lg:leading-20"
//                             >
//                                 <span>Looking to</span> <br />
//                                 <span className="text-main-color">contact</span> <br />
//                                 <span>us?</span>
//                             </h1>
//                         </div>
//                     </div>

//                     {/* Right Side */}
//                     <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
//                         <div className="flex items-center py-4 text-center border-b">
//                             <h2 className="mr-2 font-bold text-nowrap text-medium text-sub-color">
//                                 Chat with us:
//                             </h2>
//                             <div className="flex items-center space-x-2">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                                     aria-hidden="true"
//                                     role="img"
//                                     className="size-5 text-[#24A1DE] "
//                                     viewBox="0 0 496 512"
//                                 >
//                                     <path
//                                         fill="currentColor"
//                                         d="M248 8C111.033 8 0 119.033 0 256s111.033 248 248 248s248-111.033 248-248S384.967 8 248 8m114.952 168.66c-3.732 39.215-19.881 134.378-28.1 178.3c-3.476 18.584-10.322 24.816-16.948 25.425c-14.4 1.326-25.338-9.517-39.287-18.661c-21.827-14.308-34.158-23.215-55.346-37.177c-24.485-16.135-8.612-25 5.342-39.5c3.652-3.793 67.107-61.51 68.335-66.746c.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608 69.142q-14.845 10.194-26.894 9.934c-8.855-.191-25.888-5.006-38.551-9.123c-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7 18.45-13.7q108.446-47.248 144.628-62.3c68.872-28.647 83.183-33.623 92.511-33.789c2.052-.034 6.639.474 9.61 2.885a10.45 10.45 0 0 1 3.53 6.716a43.8 43.8 0 0 1 .417 9.769"
//                                     ></path>
//                                 </svg>
//                                 <a
//                                     href="https://web.telegram.org/a/"
//                                     target="_blank"
//                                     className="mr-4 font-medium text-sub-color hover:underline"
//                                 >
//                                     Telegram
//                                 </a>
//                                 <span>-</span>
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                                     aria-hidden="true"
//                                     role="img"
//                                     className="size-5 text-[#237067]"
//                                     viewBox="0 0 448 512"
//                                 >
//                                     <path
//                                         fill="currentColor"
//                                         d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157m-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6m101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6"
//                                     ></path>
//                                 </svg>
//                                 <a
//                                     href="https://web.whatsapp.com/"
//                                     target="_blank"
//                                     className="ml-4 text-sub-color hover:underline"
//                                 >
//                                     WhatsApp
//                                 </a>
//                             </div>
//                         </div>

//                         <div className="w-full max-w-2xl">
//                             <h2 className="my-5 text-base font-bold text-center text-sub-color">
//                                 Or send us an email below:
//                             </h2>
//                             <form className="space-y-3" onSubmit={handleSubmit}>
//                                 <div>
//                                     <input
//                                         className={`w-full px-4 py-2 border border-gray-300 rounded-full ${isUserDataFetched ? "opacity-50 cursor-not-allowed" : ""
//                                             }`}
//                                         id="name"
//                                         type="text"
//                                         placeholder="Name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         disabled={isUserDataFetched}
//                                     />
//                                 </div>
//                                 <div>
//                                     <input
//                                         className={`w-full px-4 py-2 border border-gray-300 rounded-full ${isUserDataFetched ? "opacity-50 cursor-not-allowed" : ""
//                                             }`}
//                                         id="email"
//                                         type="email"
//                                         placeholder="Enter Your Email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         disabled={isUserDataFetched}

//                                     />
//                                 </div>
//                                 <div>
//                                     <input
//                                         className={`w-full px-4 py-2 border ${errors.subject ? "border-red-500" : "border-gray-300"} rounded-full hover:border-black transition-all duration-150`}
//                                         id="subject"
//                                         type="text"
//                                         placeholder="Subject"
//                                         value={formData.subject}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                     />
//                                     {errors.subject && (
//                                         <p className="text-[#FF0000] text-sm mt-1">
//                                             {errors.subject}
//                                         </p>
//                                     )}
//                                 </div>
//                                 <div>
//                                     <textarea
//                                         className={`w-full border ${errors.message ? "border-red-500" : "border-gray-300"} hover:border-black transition-all duration-150 ease-in rounded-small resize-none`}
//                                         id="message"
//                                         rows="8"
//                                         cols="20"
//                                         placeholder="Your message"
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                     ></textarea>
//                                     {errors.message && (
//                                         <p className="text-[#FF0000] text-sm mt-1">
//                                             {errors.message}
//                                         </p>
//                                     )}
//                                 </div>

//                                 {/* Submit Button */}
//                                 <div className="text-center">
//                                     {loading ? (
//                                         <div className="flex items-center justify-center">
//                                             <FaSpinner className="text-lg animate-spin" />
//                                         </div>
//                                     ) : (
//                                         <Button type="submit">Send Message</Button>
//                                     )}
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ContactUs


// import React, { useEffect, useState } from "react";
// import Breadcrumb from "../Dashboard/components/Breadcrumb";
// import background from "../assets/Images/hero1.jpg";
// import Button from "../Dashboard/components/Button";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaSpinner } from "react-icons/fa";

// function ContactUs() {
//     const [formData, setFormData] = useState({
//         subject: "",
//         message: "",
//         name: "",
//         email: "",
//     });

//     const [errors, setErrors] = useState({}); // Changed to object
//     const [touched, setTouched] = useState({
//         subject: false,
//         message: false,
//     });
//     const [loading, setLoading] = useState(false);
//     const [generalError, setGeneralError] = useState(null);
//     const [isUserDataFetched, setIsUserDataFetched] = useState(false);

//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     const breadcrumbs = [
//         { label: "Dashboard", link: "/dashboard" },
//         { label: "Contact Us" },
//     ];

//     const validateField = (name, value) => {
//         switch (name) {
//             case "subject":
//                 if (!value) return "Subject is required.";
//                 break;
//             case "message":
//                 if (!value) return "Message is required.";
//                 break;
//             default:
//                 return null;
//         }
//         return null;
//     };


//     const handleBlur = (e) => {
//         const { id, value } = e.target;
//         setTouched((prev) => ({ ...prev, [id]: true }));
//         const error = validateField(id, value);
//         setErrors((prev) => ({ ...prev, [id]: error }));
//     };


//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData((prev) => ({ ...prev, [id]: value }));

//          // Real-time validation
//          if (touched[id]) {
//             const error = validateField(id, value);
//             setErrors((prev) => ({ ...prev, [id]: error }));
//          } else {
//             setErrors((prev) => ({...prev, [id]: null}))
//          }

//     };


//       // Fetch user data (name and email) on component mount
//       useEffect(() => {
//         const fetchUserData = async () => {
//             const token = localStorage.getItem("authToken");
//             if (token) {
//                 try {
//                     setLoading(true);
//                     const response = await axios.get(`${API_BASE_URL}/auth/user`, {
//                         headers: { Authorization: `Bearer ${token}` },
//                     });
//                     if (response.status === 200) {
//                         setFormData((prev) => ({
//                             ...prev,
//                             name: response.data.firstName || "",
//                             email: response.data.email || "",
//                         }));
//                         setIsUserDataFetched(true);
//                     } else {
//                         setGeneralError("Failed to fetch user data");
//                         setIsUserDataFetched(false);
//                         setFormData((prev) => ({
//                             ...prev,
//                             name: "",
//                             email: "",
//                         }));
//                     }
//                 } catch (err) {
//                     setGeneralError("Error fetching user data");
//                     setIsUserDataFetched(false);
//                     setFormData((prev) => ({
//                         ...prev,
//                         name: "",
//                         email: "",
//                     }));
//                 } finally {
//                     setLoading(false);
//                 }
//             } else {
//                 setLoading(false);
//                 setIsUserDataFetched(false);
//                 setFormData((prev) => ({
//                     ...prev,
//                     name: "",
//                     email: "",
//                 }));
//             }
//         };

//         fetchUserData();
//     }, [API_BASE_URL]);


//     const validateForm = () => {
//         const validationErrors = {};
//         const fields = ["subject", "message"];

//         fields.forEach((field) => {
//           const error = validateField(field, formData[field]);
//           if (error) validationErrors[field] = error;
//         });

//         setErrors(validationErrors);
//         return Object.keys(validationErrors).length === 0;
//       };


//     const handleSubmit = async (e) => {
//         e.preventDefault();

//          if (!validateForm()) {
//             setTouched(prev => ({...prev, subject: true, message: true}));
//           return;
//         }

//         setLoading(true);
//         setGeneralError(null)
//         try {
//                 const response = await axios.post(`${API_BASE_URL}/contact`, {
//                     name: formData.name,
//                     email: formData.email,
//                     subject: formData.subject,
//                     message: formData.message,
//                 });

//                 if(response.status === 200){
//                     toast.success("Message sent successfully!");
//                      setFormData((prev) => ({
//                          ...prev,
//                           subject: "",
//                          message: "",
//                      }));
//                     setTouched({
//                         subject: false,
//                         message: false,
//                     });
//                     setErrors({});
//                 } else {
//                      setGeneralError("Failed to send the message");
//                 }



//         } catch (error) {
//            console.error("Error sending message:", error);
//              if (error.response) {
//                 const errorMessage = error.response.data.message || "There was an error sending the message.";
//                  setGeneralError(errorMessage);
//             } else if (error.request) {
//                 setGeneralError("Network error. Please check your connection.");
//             } else {
//                 setGeneralError("Unexpected error. Please try again.");
//             }

//         } finally {
//             setLoading(false);
//         }
//     };


//     return (
//         <>
//             <div className="container mx-auto">
//                 <h1 className="mb-2 font-bold text-sub-color text-basic">Contact Us</h1>
//                 <div className="flex items-center space-x-4">
//                     <Breadcrumb items={breadcrumbs} />
//                 </div>
//                 <div className="flex flex-col gap-10 my-5 bg-white lg:flex-row">
//                     {/* Left Side */}
//                     <div className="relative lg:w-[45%] overflow-hidden rounded-xlarge">
//                         <div
//                             className="absolute inset-0 z-0 w-auto"
//                             style={{
//                                 backgroundImage: `url(${background})`,
//                                 backgroundPosition: "center",
//                                 backgroundSize: "cover",
//                                 backgroundRepeat: "no-repeat",
//                             }}
//                         ></div>
//                         <div className="absolute inset-0 z-0 bg-black/70"></div>
//                         <div className="flex items-center justify-center h-full px-6 py-20 text-center lg:absolute lg:text-left lg:mt-20">
//                             <h1
//                                 className="z-0 font-black leading-10 text-white lg:text-largest text-xlarge lg:leading-20"
//                             >
//                                 <span>Looking to</span> <br />
//                                 <span className="text-main-color">contact</span> <br />
//                                 <span>us?</span>
//                             </h1>
//                         </div>
//                     </div>

//                     {/* Right Side */}
//                     <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
//                         <div className="flex items-center py-4 text-center border-b">
//                             <h2 className="mr-2 font-bold text-nowrap text-medium text-sub-color">
//                                 Chat with us:
//                             </h2>
//                             <div className="flex items-center space-x-2">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                                     aria-hidden="true"
//                                     role="img"
//                                     className="size-5 text-[#24A1DE] "
//                                     viewBox="0 0 496 512"
//                                 >
//                                     <path
//                                         fill="currentColor"
//                                         d="M248 8C111.033 8 0 119.033 0 256s111.033 248 248 248s248-111.033 248-248S384.967 8 248 8m114.952 168.66c-3.732 39.215-19.881 134.378-28.1 178.3c-3.476 18.584-10.322 24.816-16.948 25.425c-14.4 1.326-25.338-9.517-39.287-18.661c-21.827-14.308-34.158-23.215-55.346-37.177c-24.485-16.135-8.612-25 5.342-39.5c3.652-3.793 67.107-61.51 68.335-66.746c.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608 69.142q-14.845 10.194-26.894 9.934c-8.855-.191-25.888-5.006-38.551-9.123c-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7 18.45-13.7q108.446-47.248 144.628-62.3c68.872-28.647 83.183-33.623 92.511-33.789c2.052-.034 6.639.474 9.61 2.885a10.45 10.45 0 0 1 3.53 6.716a43.8 43.8 0 0 1 .417 9.769"
//                                     ></path>
//                                 </svg>
//                                 <a
//                                     href="https://web.telegram.org/a/"
//                                     target="_blank"
//                                     className="mr-4 font-medium text-sub-color hover:underline"
//                                 >
//                                     Telegram
//                                 </a>
//                                 <span>-</span>
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                                     aria-hidden="true"
//                                     role="img"
//                                     className="size-5 text-[#237067]"
//                                     viewBox="0 0 448 512"
//                                 >
//                                     <path
//                                         fill="currentColor"
//                                         d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157m-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6m101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6"
//                                     ></path>
//                                 </svg>
//                                 <a
//                                     href="https://web.whatsapp.com/"
//                                     target="_blank"
//                                     className="ml-4 text-sub-color hover:underline"
//                                 >
//                                     WhatsApp
//                                 </a>
//                             </div>
//                         </div>

//                         <div className="w-full max-w-2xl">
//                             <h2 className="my-5 text-base font-bold text-center text-sub-color">
//                                 Or send us an email below:
//                             </h2>
//                               {/* Display general error message here */}
//                             {generalError && (
//                                 <>
//                                     <div className="flex items-center min-h-12 gap-3 px-4 py-2 bg-[#ffe9d5] rounded-xl shadow-box mb-4">
//                                          <div className="w-5">
//                                           <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-xl text-light-orange" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M7.843 3.802C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792zM13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75" clipRule="evenodd"></path></svg>
//                                          </div>
//                                          <p className="text-xs text-[#7a0916]">
//                                             {generalError}
//                                          </p>
//                                     </div>
//                                 </>
//                             )}
//                             <form className="space-y-3" onSubmit={handleSubmit}>
//                                 <div>
//                                     <input
//                                         className={`w-full px-4 py-2 border border-gray-300 rounded-full ${isUserDataFetched ? "opacity-50 cursor-not-allowed" : ""
//                                             }`}
//                                         id="name"
//                                         type="text"
//                                         placeholder="Name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         disabled={isUserDataFetched}
//                                     />
//                                 </div>
//                                 <div>
//                                     <input
//                                         className={`w-full px-4 py-2 border border-gray-300 rounded-full ${isUserDataFetched ? "opacity-50 cursor-not-allowed" : ""
//                                             }`}
//                                         id="email"
//                                         type="email"
//                                         placeholder="Enter Your Email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         disabled={isUserDataFetched}

//                                     />
//                                 </div>
//                                 <div>
//                                     <input
//                                         className={`w-full px-4 py-2 border ${errors.subject ? "border-red-500" : "border-gray-300"} rounded-full hover:border-black transition-all duration-150`}
//                                         id="subject"
//                                         type="text"
//                                         placeholder="Subject"
//                                         value={formData.subject}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                     />
//                                     {touched.subject && errors.subject && (
//                                         <p className="text-[#FF0000] text-xs mt-1">
//                                             {errors.subject}
//                                         </p>
//                                     )}
//                                 </div>
//                                 <div>
//                                     <textarea
//                                         className={`w-full border ${errors.message ? "border-red-500" : "border-gray-300"} hover:border-black transition-all duration-150 ease-in rounded-small resize-none`}
//                                         id="message"
//                                         rows="8"
//                                         cols="20"
//                                         placeholder="Your message"
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                     ></textarea>
//                                     {touched.message && errors.message && (
//                                         <p className="text-[#FF0000] text-xs mt-1">
//                                             {errors.message}
//                                         </p>
//                                     )}
//                                 </div>

//                                 {/* Submit Button */}
//                                 <div className="text-center">
//                                     {loading ? (
//                                         <div className="flex items-center justify-center">
//                                             <FaSpinner className="text-lg animate-spin" />
//                                         </div>
//                                     ) : (
//                                         <Button type="submit">Send Message</Button>
//                                     )}
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ContactUs;




// import React, { useEffect, useState } from "react";
// import Breadcrumb from "../Dashboard/components/Breadcrumb";
// import background from "../assets/Images/hero1.jpg";
// import Button from "../Dashboard/components/Button";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaSpinner } from "react-icons/fa";

// function ContactUs() {
//     const [formData, setFormData] = useState({
//         subject: "",
//         message: "",
//         name: "",
//         email: "",
//     });

//     const [errors, setErrors] = useState({}); // Changed to object
//     const [touched, setTouched] = useState({
//         subject: false,
//         message: false,
//          email: false
//     });
//     const [loading, setLoading] = useState(false);
//     const [generalError, setGeneralError] = useState(null);
//     const [isUserDataFetched, setIsUserDataFetched] = useState(false);

//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     const breadcrumbs = [
//         { label: "Dashboard", link: "/dashboard" },
//         { label: "Contact Us" },
//     ];

//       const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/i;

//     const validateField = (name, value) => {
//         switch (name) {
//             case "subject":
//                 if (!value) return "Subject is required.";
//                 break;
//             case "message":
//                 if (!value) return "Message is required.";
//                 break;
//            case "email":
//              if (!value) return "Email is required.";
//                 if (!emailRegex.test(value)) return "Invalid email address.";
//              break;
//             default:
//                 return null;
//         }
//         return null;
//     };


//     const handleBlur = (e) => {
//         const { id, value } = e.target;
//         setTouched((prev) => ({ ...prev, [id]: true }));
//         const error = validateField(id, value);
//         setErrors((prev) => ({ ...prev, [id]: error }));
//     };


//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData((prev) => ({ ...prev, [id]: value }));

//          // Real-time validation
//          if (touched[id]) {
//             const error = validateField(id, value);
//             setErrors((prev) => ({ ...prev, [id]: error }));
//          } else {
//             setErrors((prev) => ({...prev, [id]: null}))
//          }

//     };


//       // Fetch user data (name and email) on component mount
//       useEffect(() => {
//         const fetchUserData = async () => {
//             const token = localStorage.getItem("authToken");
//             if (token) {
//                 try {
//                     setLoading(true);
//                     const response = await axios.get(`${API_BASE_URL}/auth/user`, {
//                         headers: { Authorization: `Bearer ${token}` },
//                     });
//                     if (response.status === 200) {
//                         setFormData((prev) => ({
//                             ...prev,
//                             name: response.data.firstName || "",
//                             email: response.data.email || "",
//                         }));
//                         setIsUserDataFetched(true);
//                     } else {
//                         setGeneralError("Failed to fetch user data");
//                         setIsUserDataFetched(false);
//                         setFormData((prev) => ({
//                             ...prev,
//                             name: "",
//                             email: "",
//                         }));
//                     }
//                 } catch (err) {
//                     setGeneralError("Error fetching user data");
//                     setIsUserDataFetched(false);
//                     setFormData((prev) => ({
//                         ...prev,
//                         name: "",
//                         email: "",
//                     }));
//                 } finally {
//                     setLoading(false);
//                 }
//             } else {
//                 setLoading(false);
//                 setIsUserDataFetched(false);
//                 setFormData((prev) => ({
//                     ...prev,
//                     name: "",
//                     email: "",
//                 }));
//             }
//         };

//         fetchUserData();
//     }, [API_BASE_URL]);


//     const validateForm = () => {
//         const validationErrors = {};
//         const fields = ["subject", "message", "email"];

//         fields.forEach((field) => {
//           const error = validateField(field, formData[field]);
//           if (error) validationErrors[field] = error;
//         });

//         setErrors(validationErrors);
//         return Object.keys(validationErrors).length === 0;
//       };


//       const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!validateForm()) {
//             setTouched(prev => ({ ...prev, subject: true, message: true, email: true }));
//             return;
//         }

//         setLoading(true);
//         setGeneralError(null);

//         try {
//             const response = await axios.post(`${API_BASE_URL}/contact`, {
//                 name: formData.name,
//                 email: formData.email,
//                 subject: formData.subject,
//                 message: formData.message,
//             });

//             if (response.status >= 200 && response.status < 300) {
//                 toast.success("Message sent successfully!");
//                // Reset form data only if user data was not fetched
//                if(!isUserDataFetched) {
//                  setFormData((prev) => ({
//                      ...prev,
//                       subject: "",
//                      message: "",
//                      email: "",
//                  }));
//                } else {
//                  setFormData((prev) => ({
//                      ...prev,
//                       subject: "",
//                      message: "",
//                  }));
//                }


//                 setTouched({
//                     subject: false,
//                     message: false,
//                     email: false,
//                 });
//                 setErrors({});
//             } else {
//                 setGeneralError("Failed to send the message");
//             }
//         } catch (error) {
//             console.error("Error sending message:", error);
//             if (error.response) {
//                 const errorMessage = error.response.data.message || "There was an error sending the message.";
//                 setGeneralError(errorMessage);
//             } else if (error.request) {
//                 setGeneralError("Network error. Please check your connection.");
//             } else {
//                 setGeneralError("Unexpected error. Please try again.");
//             }
//         } finally {
//             setLoading(false);
//         }
//     };


//     return (
//         <>
//             <div className="container mx-auto">
//                 <h1 className="mb-2 font-bold text-sub-color text-basic">Contact Us</h1>
//                 <div className="flex items-center space-x-4">
//                     <Breadcrumb items={breadcrumbs} />
//                 </div>
//                 <div className="flex flex-col gap-10 my-5 bg-white lg:flex-row">
//                     {/* Left Side */}
//                     <div className="relative lg:w-[45%] overflow-hidden rounded-xlarge">
//                         <div
//                             className="absolute inset-0 z-0 w-auto"
//                             style={{
//                                 backgroundImage: `url(${background})`,
//                                 backgroundPosition: "center",
//                                 backgroundSize: "cover",
//                                 backgroundRepeat: "no-repeat",
//                             }}
//                         ></div>
//                         <div className="absolute inset-0 z-0 bg-black/70"></div>
//                         <div className="flex items-center justify-center h-full px-6 py-20 text-center lg:absolute lg:text-left lg:mt-20">
//                             <h1
//                                 className="z-0 font-black leading-10 text-white lg:text-largest text-xlarge lg:leading-20"
//                             >
//                                 <span>Looking to</span> <br />
//                                 <span className="text-main-color">contact</span> <br />
//                                 <span>us?</span>
//                             </h1>
//                         </div>
//                     </div>

//                     {/* Right Side */}
//                     <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
//                         <div className="flex items-center py-4 text-center border-b">
//                             <h2 className="mr-2 font-bold text-nowrap text-medium text-sub-color">
//                                 Chat with us:
//                             </h2>
//                             <div className="flex items-center space-x-2">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                                     aria-hidden="true"
//                                     role="img"
//                                     className="size-5 text-[#24A1DE] "
//                                     viewBox="0 0 496 512"
//                                 >
//                                     <path
//                                         fill="currentColor"
//                                         d="M248 8C111.033 8 0 119.033 0 256s111.033 248 248 248s248-111.033 248-248S384.967 8 248 8m114.952 168.66c-3.732 39.215-19.881 134.378-28.1 178.3c-3.476 18.584-10.322 24.816-16.948 25.425c-14.4 1.326-25.338-9.517-39.287-18.661c-21.827-14.308-34.158-23.215-55.346-37.177c-24.485-16.135-8.612-25 5.342-39.5c3.652-3.793 67.107-61.51 68.335-66.746c.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608 69.142q-14.845 10.194-26.894 9.934c-8.855-.191-25.888-5.006-38.551-9.123c-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7 18.45-13.7q108.446-47.248 144.628-62.3c68.872-28.647 83.183-33.623 92.511-33.789c2.052-.034 6.639.474 9.61 2.885a10.45 10.45 0 0 1 3.53 6.716a43.8 43.8 0 0 1 .417 9.769"
//                                     ></path>
//                                 </svg>
//                                 <a
//                                     href="https://web.telegram.org/a/"
//                                     target="_blank"
//                                     className="mr-4 font-medium text-sub-color hover:underline"
//                                 >
//                                     Telegram
//                                 </a>
//                                 <span>-</span>
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                                     aria-hidden="true"
//                                     role="img"
//                                     className="size-5 text-[#237067]"
//                                     viewBox="0 0 448 512"
//                                 >
//                                     <path
//                                         fill="currentColor"
//                                         d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157m-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6m101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6"
//                                     ></path>
//                                 </svg>
//                                 <a
//                                     href="https://web.whatsapp.com/"
//                                     target="_blank"
//                                     className="ml-4 text-sub-color hover:underline"
//                                 >
//                                     WhatsApp
//                                 </a>
//                             </div>
//                         </div>

//                         <div className="w-full max-w-2xl">
//                             <h2 className="my-5 text-base font-bold text-center text-sub-color">
//                                 Or send us an email below:
//                             </h2>
//                             <form className="space-y-3" onSubmit={handleSubmit}>
//                               {/* Display general error message here */}
//                             {generalError && (
//                                 <>
//                                     <div className="flex items-center min-h-12 gap-3 px-4 py-2 bg-[#ffe9d5] rounded-xl shadow-box mb-4">
//                                          <div className="w-5">
//                                           <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-xl text-light-orange" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M7.843 3.802C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792zM13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75" clipRule="evenodd"></path></svg>
//                                          </div>
//                                          <p className="text-xs text-[#7a0916]">
//                                             {generalError}
//                                          </p>
//                                     </div>
//                                 </>
//                             )}
//                                 <div>
//                                     <input
//                                         className={`w-full px-4 py-2 border border-gray-300 rounded-full ${isUserDataFetched ? "opacity-50 cursor-not-allowed" : ""
//                                             }`}
//                                         id="name"
//                                         type="text"
//                                         placeholder="Name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         disabled={isUserDataFetched}
//                                     />
//                                 </div>
//                                 <div>
//                                     <input
//                                         className={`w-full px-4 py-2 border ${isUserDataFetched ? "opacity-50 cursor-not-allowed" : ""
//                                             } ${errors.email ? "border-red-500" : "border-gray-300"} rounded-full hover:border-black transition-all duration-150`}
//                                         id="email"
//                                         type="email"
//                                         placeholder="Enter Your Email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         disabled={isUserDataFetched}
//                                         onBlur={handleBlur}
//                                     />
//                                      {touched.email && errors.email && (
//                                         <p className="text-[#FF0000] text-xs mt-1">
//                                             {errors.email}
//                                         </p>
//                                     )}
//                                 </div>
//                                 <div>
//                                     <input
//                                         className={`w-full px-4 py-2 border ${errors.subject ? "border-red-500" : "border-gray-300"} rounded-full hover:border-black transition-all duration-150`}
//                                         id="subject"
//                                         type="text"
//                                         placeholder="Subject"
//                                         value={formData.subject}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                     />
//                                     {touched.subject && errors.subject && (
//                                         <p className="text-[#FF0000] text-xs mt-1">
//                                             {errors.subject}
//                                         </p>
//                                     )}
//                                 </div>
//                                 <div>
//                                     <textarea
//                                         className={`w-full border ${errors.message ? "border-red-500" : "border-gray-300"} hover:border-black transition-all duration-150 ease-in rounded-small resize-none`}
//                                         id="message"
//                                         rows="8"
//                                         cols="20"
//                                         placeholder="Your message"
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                     ></textarea>
//                                     {touched.message && errors.message && (
//                                         <p className="text-[#FF0000] text-xs mt-1">
//                                             {errors.message}
//                                         </p>
//                                     )}
//                                 </div>

//                                 {/* Submit Button */}
//                                 <div className="text-center">
//                                     {loading ? (
//                                         <div className="flex items-center justify-center">
//                                             <FaSpinner className="text-lg animate-spin" />
//                                         </div>
//                                     ) : (
//                                         <Button type="submit">Send Message</Button>
//                                     )}
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ContactUs;


import React from "react";
import Breadcrumb from "../Dashboard/components/Breadcrumb";
import ContactInfo from "../Components/ContactUs/ContactInfo";
import ContactForm from "../Components/ContactUs/ContactForm";

function ContactUs() {
    const breadcrumbs = [
        { label: "Dashboard", link: "/dashboard" },
        { label: "Contact Us" },
    ];

    return (
        <>
            <section className="contact-us py-7">
                <div className="container mx-auto">
                    <h1 className="mb-2 font-bold text-sub-color text-basic">Contact Us</h1>
                    <div className="flex items-center space-x-4">
                        <Breadcrumb items={breadcrumbs} />
                    </div>
                    <div className="flex flex-col gap-10 my-5 bg-white lg:flex-row">
                        {/* Left Side */}
                        <ContactInfo />

                        {/* Right Side */}
                        <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
                            <div className="flex items-center py-4 text-center border-b">
                                <h2 className="mr-2 font-bold text-nowrap text-medium text-sub-color">
                                    Chat with us:
                                </h2>
                                <div className="flex items-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        className="size-5 text-[#24A1DE] "
                                        viewBox="0 0 496 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M248 8C111.033 8 0 119.033 0 256s111.033 248 248 248s248-111.033 248-248S384.967 8 248 8m114.952 168.66c-3.732 39.215-19.881 134.378-28.1 178.3c-3.476 18.584-10.322 24.816-16.948 25.425c-14.4 1.326-25.338-9.517-39.287-18.661c-21.827-14.308-34.158-23.215-55.346-37.177c-24.485-16.135-8.612-25 5.342-39.5c3.652-3.793 67.107-61.51 68.335-66.746c.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608 69.142q-14.845 10.194-26.894 9.934c-8.855-.191-25.888-5.006-38.551-9.123c-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7 18.45-13.7q108.446-47.248 144.628-62.3c68.872-28.647 83.183-33.623 92.511-33.789c2.052-.034 6.639.474 9.61 2.885a10.45 10.45 0 0 1 3.53 6.716a43.8 43.8 0 0 1 .417 9.769"
                                        ></path>
                                    </svg>
                                    <a
                                        href="https://web.telegram.org/a/"
                                        target="_blank"
                                        className="mr-4 font-medium text-sub-color hover:underline"
                                    >
                                        Telegram
                                    </a>
                                    <span>-</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        className="size-5 text-[#237067]"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157m-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6m101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6"
                                        ></path>
                                    </svg>
                                    <a
                                        href="https://web.whatsapp.com/"
                                        target="_blank"
                                        className="ml-4 text-sub-color hover:underline"
                                    >
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactUs;