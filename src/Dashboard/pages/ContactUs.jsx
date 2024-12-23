// // Updated ContactUs Component
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import Breadcrumb from "../../Dashboard/components/Breadcrumb";
// import background from "../../assets/Images/hero1.jpg";
// import Button from "../components/Button";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

// const ContactUs = () => {
//   const textRef = useRef(null);

//   // State for form values, errors, and touched status
//   const [formData, setFormData] = useState({
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({
//     subject: false,
//     message: false,
//   });

//   const [touched, setTouched] = useState({
//     subject: false,
//     message: false,
//   });

//   useEffect(() => {
//     const el = textRef.current;
//     gsap.fromTo(
//       el.querySelectorAll("span"),
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, stagger: 0.5, ease: "power3.out" }
//     );
//   }, []);

//   const breadcrumbs = [
//     { label: "Dashboard", link: "/dashboard" },
//     { label: "Contact Us" },
//   ];

//   // Handle input changes
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//     setErrors((prev) => ({ ...prev, [id]: false })); // Reset error state on change
//   };

//   // Handle blur to mark fields as touched
//   const handleBlur = (e) => {
//     const { id } = e.target;
//     setTouched((prev) => ({ ...prev, [id]: true }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validation logic
//     const newErrors = {
//       subject: !formData.subject.trim(), // Check if subject is empty
//       message: !formData.message.trim(), // Check if message is empty
//     };

//     setErrors(newErrors);

//     // If no errors, proceed
//     if (!newErrors.subject && !newErrors.message) {
//       toast.success("Message sent successfully!", {
//         position: "top-right",
//         autoClose: 2500, // 3 seconds
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored", // Use colored theme
//       });

//       // Reset form fields
//       setFormData({
//         subject: "",
//         message: "",
//       });

//       // Reset touched status
//       setTouched({
//         subject: false,
//         message: false,
//       });
//     }
//   };

//   return (
//     <>
//       <div className="container mx-auto">
//         <h1 className="mb-2 font-bold text-sub-color text-basic">Contact Us</h1>
//         <div className="flex items-center space-x-4">
//           <Breadcrumb items={breadcrumbs} />
//         </div>
//         <div className="flex flex-col gap-10 my-5 bg-white lg:flex-row">
//           {/* Left Side */}
//           <div className="relative lg:w-[45%] overflow-hidden rounded-xlarge">
//             {/* Background Image */}
//             <div
//               className="absolute inset-0 z-0 w-auto"
//               style={{
//                 backgroundImage: `url(${background})`,
//                 backgroundPosition: "center",
//                 backgroundSize: "cover",
//                 backgroundRepeat: "no-repeat",
//               }}
//             ></div>

//             {/* Background Overlay */}
//             <div className="absolute inset-0 z-0 bg-black/70"></div>

//             {/* Text Content */}
//             <div className="flex items-center justify-center h-full px-6 py-20 text-center lg:absolute lg:text-left lg:mt-20">
//               <h1
//                 ref={textRef}
//                 className="z-0 font-black leading-10 text-white lg:text-largest text-xlarge lg:leading-20"
//               >
//                 <span>Looking to</span> <br />
//                 <span className="text-main-color">contact</span> <br />
//                 <span>us?</span>
//               </h1>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="w-full lg:w-[55%] flex flex-col">
//             <div className="flex items-center py-2 border-b">
//               <h2 className="mr-2 font-semibold text-center lg:text-base text-sub-color">
//                 Chat with us:
//               </h2>
//               <div className="flex items-center space-x-2">
//                 {/* Chat Links */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   aria-hidden="true"
//                   role="img"
//                   className="text-blue-500 size-5"
//                   viewBox="0 0 496 512"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="M248 8C111.033 8 0 119.033 0 256s111.033 248 248 248s248-111.033 248-248S384.967 8 248 8m114.952 168.66c-3.732 39.215-19.881 134.378-28.1 178.3c-3.476 18.584-10.322 24.816-16.948 25.425c-14.4 1.326-25.338-9.517-39.287-18.661c-21.827-14.308-34.158-23.215-55.346-37.177c-24.485-16.135-8.612-25 5.342-39.5c3.652-3.793 67.107-61.51 68.335-66.746c.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608 69.142q-14.845 10.194-26.894 9.934c-8.855-.191-25.888-5.006-38.551-9.123c-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7 18.45-13.7q108.446-47.248 144.628-62.3c68.872-28.647 83.183-33.623 92.511-33.789c2.052-.034 6.639.474 9.61 2.885a10.45 10.45 0 0 1 3.53 6.716a43.8 43.8 0 0 1 .417 9.769"
//                   ></path>
//                 </svg>
//                 <a
//                   href="https://web.telegram.org/a/"
//                   target="_blank"
//                   className="mr-4 font-medium text-sub-color hover:underline"
//                 >
//                   Telegram
//                 </a>
//                 <span>-</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   xmlnsXlink="http://www.w3.org/1999/xlink"
//                   aria-hidden="true"
//                   role="img"
//                   className="text-green-500 size-5"
//                   viewBox="0 0 448 512"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157m-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6m101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6"
//                   ></path>
//                 </svg>
//                 <a
//                   href="https://web.whatsapp.com/"
//                   target="_blank"
//                   className="ml-4 text-sub-color hover:underline"
//                 >
//                   WhatsApp
//                 </a>
//               </div>
//             </div>

//             <div className="w-full max-w-3xl lg:max-w-lg">
//               <h2 className="my-5 text-base font-medium text-center text-sub-color">
//                 Or send us an email below:
//               </h2>
//               <form className="space-y-3" onSubmit={handleSubmit}>
//                 <div>
//                   <input
//                     className="w-full px-4 py-2 border border-gray-300 rounded-full"
//                     id="name"
//                     type="text"
//                     placeholder="Rudra Sutariya"
//                     disabled
//                   />
//                 </div>
//                 <div>
//                   <input
//                     className="w-full px-4 py-2 border border-gray-300 rounded-full"
//                     id="email"
//                     type="email"
//                     placeholder="rudrasutariya003@gmail.com"
//                     disabled
//                   />
//                 </div>
//                 <div>
//                   <input
//                     className={`w-full px-4 py-2 border ${
//                       errors.subject && touched.subject
//                         ? "border-red-500"
//                         : "border-gray-300"
//                     } rounded-full hover:border-black transition-all duration-150`}
//                     id="subject"
//                     type="text"
//                     placeholder="Subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                   />
//                   {errors.subject && touched.subject && (
//                     <p className="text-sm text-red-500">Subject is required.</p>
//                   )}
//                 </div>
//                 <div>
//                   <textarea
//                     className={`w-full border ${
//                       errors.message && touched.message
//                         ? "border-red-500"
//                         : "border-gray-300"
//                     } hover:border-black transition-all duration-150 ease-in rounded-small resize-none`}
//                     id="message"
//                     rows="8"
//                     cols="20"
//                     placeholder="Your message"
//                     value={formData.message}
//                     onChange={handleChange}
//                   ></textarea>
//                   {errors.message && touched.message && (
//                     <p className="text-sm text-red-500">Message is required.</p>
//                   )}
//                 </div>

//                 {/* Submit Button */}
//                 <div className="text-center">
//                   <Button type="submit">Send Message</Button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactUs;



// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import Breadcrumb from "../../Dashboard/components/Breadcrumb";
// import background from "../../assets/Images/hero1.jpg";
// import Button from "../components/Button";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
// import axios from "axios";  // Import Axios

// const ContactUs = () => {
//   const textRef = useRef(null);

//   // State for form values, errors, and touched status
//   const [formData, setFormData] = useState({
//     subject: "",
//     message: "",
//     name: "",
//     email: "",
//   });

//   const [errors, setErrors] = useState({
//     subject: false,
//     message: false,
//   });

//   const [touched, setTouched] = useState({
//     subject: false,
//     message: false,
//   });
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   useEffect(() => {
//     const el = textRef.current;
//     gsap.fromTo(
//       el.querySelectorAll("span"),
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, stagger: 0.5, ease: "power3.out" }
//     );
//   }, []);

//   const breadcrumbs = [
//     { label: "Dashboard", link: "/dashboard" },
//     { label: "Contact Us" },
//   ];

//   // Fetch user data (name and email) on component mount
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         // Assuming you have a function to get user data
//         const response = await axios.get(`${API_BASE_URL}/auth/user`); // Replace with your API endpoint
//         if (response.status === 200) {
//           setFormData((prev) => ({
//             ...prev,
//             name: response.data.name,
//             email: response.data.email,
//           }));
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         toast.error("Failed to fetch user data.", {
//           position: "top-right",
//           autoClose: 2500,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//         });
//       }
//     };

//     fetchUserData();
//   }, []);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//     setErrors((prev) => ({ ...prev, [id]: false })); // Reset error state on change
//   };

//   // Handle blur to mark fields as touched
//   const handleBlur = (e) => {
//     const { id } = e.target;
//     setTouched((prev) => ({ ...prev, [id]: true }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validation logic
//     const newErrors = {
//       subject: !formData.subject.trim(), // Check if subject is empty
//       message: !formData.message.trim(), // Check if message is empty
//     };

//     setErrors(newErrors);

//     // If no errors, proceed
//     if (!newErrors.subject && !newErrors.message) {
//       try {
//         // Send data to the backend API
//         const response = await axios.post(`${API_BASE_URL}/contact`, {
//           subject: formData.subject,
//           message: formData.message,
//         });

//         if (response.status === 200) {
//           toast.success("Message sent successfully!", {
//             position: "top-right",
//             autoClose: 2500, // 3 seconds
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "colored", // Use colored theme
//           });

//           // Reset form fields
//           setFormData({
//             subject: "",
//             message: "",
//             name: formData.name, // Keep the name from user data
//             email: formData.email, // Keep the email from user data
//           });

//           // Reset touched status
//           setTouched({
//             subject: false,
//             message: false,
//           });
//         }
//       } catch (error) {
//         console.error("Error sending message:", error);
//         toast.error("There was an error sending the message.", {
//           position: "top-right",
//           autoClose: 2500,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//         });
//       }
//     }
//   };

//   return (
//     <>
//       <div className="container mx-auto">
//         <h1 className="mb-2 font-bold text-sub-color text-basic">Contact Us</h1>
//         <div className="flex items-center space-x-4">
//           <Breadcrumb items={breadcrumbs} />
//         </div>
//         <div className="flex flex-col gap-10 my-5 bg-white lg:flex-row">
//           {/* Left Side */}
//           <div className="relative lg:w-[45%] overflow-hidden rounded-xlarge">
//             {/* Background Image */}
//             <div
//               className="absolute inset-0 z-0 w-auto"
//               style={{
//                 backgroundImage: `url(${background})`,
//                 backgroundPosition: "center",
//                 backgroundSize: "cover",
//                 backgroundRepeat: "no-repeat",
//               }}
//             ></div>

//             {/* Background Overlay */}
//             <div className="absolute inset-0 z-0 bg-black/70"></div>

//             {/* Text Content */}
//             <div className="flex items-center justify-center h-full px-6 py-20 text-center lg:absolute lg:text-left lg:mt-20">
//               <h1
//                 ref={textRef}
//                 className="z-0 font-black leading-10 text-white lg:text-largest text-xlarge lg:leading-20"
//               >
//                 <span>Looking to</span> <br />
//                 <span className="text-main-color">contact</span> <br />
//                 <span>us?</span>
//               </h1>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="w-full lg:w-[55%] flex flex-col">
//             <div className="flex items-center py-2 border-b">
//               <h2 className="mr-2 font-semibold text-center lg:text-base text-sub-color">
//                 Chat with us:
//               </h2>
//               <div className="flex items-center space-x-2">
//                 {/* Chat Links */} {/* Add your chat service links here */}
//               </div>
//             </div>

//             <div className="w-full max-w-3xl lg:max-w-lg">
//               <h2 className="my-5 text-base font-medium text-center text-sub-color">
//                 Or send us an email below:
//               </h2>
//               <form className="space-y-3" onSubmit={handleSubmit}>
//                 <div>
//                   <input
//                     className="w-full px-4 py-2 border border-gray-300 rounded-full"
//                     id="name"
//                     type="text"
//                     placeholder="Rudra Sutariya"
//                     value={formData.name} // Dynamically filled
//                     disabled
//                   />
//                 </div>
//                 <div>
//                   <input
//                     className="w-full px-4 py-2 border border-gray-300 rounded-full"
//                     id="email"
//                     type="email"
//                     placeholder="rudrasutariya003@gmail.com"
//                     value={formData.email} // Dynamically filled
//                     disabled
//                   />
//                 </div>
//                 <div>
//                   <input
//                     className={`w-full px-4 py-2 border ${
//                       errors.subject && touched.subject
//                         ? "border-red-500"
//                         : "border-gray-300"
//                     } rounded-full hover:border-black transition-all duration-150`}
//                     id="subject"
//                     type="text"
//                     placeholder="Subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   {errors.subject && touched.subject && (
//                     <p className="text-sm text-red-500">Subject is required.</p>
//                   )}
//                 </div>
//                 <div>
//                   <textarea
//                     className={`w-full border ${
//                       errors.message && touched.message
//                         ? "border-red-500"
//                         : "border-gray-300"
//                     } hover:border-black transition-all duration-150 ease-in rounded-small resize-none`}
//                     id="message"
//                     rows="8"
//                     cols="20"
//                     placeholder="Your message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   ></textarea>
//                   {errors.message && touched.message && (
//                     <p className="text-sm text-red-500">Message is required.</p>
//                   )}
//                 </div>

//                 {/* Submit Button */}
//                 <div className="text-center">
//                   <Button type="submit">Send Message</Button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default ContactUs;












import React, { useEffect, useState } from "react";
import Breadcrumb from "../../Dashboard/components/Breadcrumb";
import background from "../../assets/Images/hero1.jpg";
import Button from "../components/Button";
import axios from "axios"; // Import Axios
import { toast } from "react-toastify"; // Import toastify
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner } from "react-icons/fa";

const ContactUs = () => {

  // State for form values, errors, touched status, loading, and error
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    name: "", // Initialize with an empty string
    email: "", // Initialize with an empty string
  });

  const [errors, setErrors] = useState({
    subject: false,
    message: false,
  });

  const [touched, setTouched] = useState({
    subject: false,
    message: false,
  });

  const [loading, setLoading] = useState(false);  // Loading state for API request
  const [error, setError] = useState(null);  // Error state for API request

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const breadcrumbs = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Contact Us" },
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: false })); // Reset error state on change
  };

  // Fetch user data (name and email) on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          setLoading(true);  // Set loading to true while fetching
          const response = await axios.get(`${API_BASE_URL}/auth/user`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.status === 200) {
            setFormData((prev) => ({
              ...prev,
              name: response.data.firstName || "", // Default to empty string if not found
              email: response.data.email || "", // Default to empty string if not found
            }));
          } else {
            setError("Failed to fetch user data");
          }
        } catch (err) {
          setError("Error fetching user data");
        } finally {
          setLoading(false);  // Set loading to false once fetching is done
        }
      } else {
        setLoading(false);  // Set loading to false if no token is found
      }
    };

    fetchUserData();
  }, [API_BASE_URL]);

  // Handle blur to mark fields as touched
  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched((prev) => ({ ...prev, [id]: true }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {
      subject: formData.subject.trim() === "" ? "Subject is required" : "",
      message: formData.message.trim() === "" ? "Message is required" : "",
    };

    setErrors(newErrors);

    // If no errors, proceed to submit the form
    if (!newErrors.subject && !newErrors.message) {
      setLoading(true);  // Set loading to true when submission starts

      setTimeout(async () => {
        try {
          // Simulating delay of 2 seconds
          const response = await axios.post(`${API_BASE_URL}/contact`, {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          });
          // Show success toast
          toast.success("Message sent successfully!");

          // Reset form fields (except name and email after submission)
          setFormData({
            subject: "",
            message: "",
            name: formData.name,  // Keep name and email as they are from user data
            email: formData.email,
          });

          setTouched({
            subject: false,
            message: false,
          });

        } catch (error) {
          console.error("Error sending message:", error);
          toast.error("There was an error sending the message.");
        } finally {
          setLoading(false); // Set loading to false once the request completes
        }
      }, 2000); // Delay of 2 seconds (2000 milliseconds)
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="mb-2 font-bold text-sub-color text-basic">Contact Us</h1>
        <div className="flex items-center space-x-4">
          <Breadcrumb items={breadcrumbs} />
        </div>
        <div className="flex flex-col gap-10 my-5 bg-white lg:flex-row">
          {/* Left Side */}
          <div className="relative lg:w-[45%] overflow-hidden rounded-xlarge">
            {/* Background Image */}
            <div
              className="absolute inset-0 z-0 w-auto"
              style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Background Overlay */}
            <div className="absolute inset-0 z-0 bg-black/70"></div>

            {/* Text Content */}
            <div className="flex items-center justify-center h-full px-6 py-20 text-center lg:absolute lg:text-left lg:mt-20">
              <h1
                className="z-0 font-black leading-10 text-white lg:text-largest text-xlarge lg:leading-20"
              >
                <span>Looking to</span> <br />
                <span className="text-main-color">contact</span> <br />
                <span>us?</span>
              </h1>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[55%] flex flex-col">
            <div className="w-full max-w-3xl lg:max-w-lg">
            <div className="flex items-center justify-center py-4 text-center border-b">
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
              <h2 className="my-5 text-base font-medium text-center text-sub-color">
                Or send us an email below:
              </h2>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-full"
                    id="name"
                    type="text"
                    placeholder={formData.name ? formData.name : "Name"}
                    value={formData.name || ""}  // Name will only appear after message is sent
                    disabled
                  />
                </div>
                <div>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-full"
                    id="email"
                    type="email"
                    placeholder={formData.email ? formData.email : "Enter Your Email"}
                    value={formData.email || ""}  // Email will only appear after message is sent
                    disabled
                  />
                </div>
                <div>
                  <input
                    className={`w-full px-4 py-2 border ${errors.subject ? "border-red-500" : "border-gray-300"} rounded-full hover:border-black transition-all duration-150`}
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>
                <div>
                  <textarea
                    className={`w-full border ${errors.message ? "border-red-500" : "border-gray-300"} hover:border-black transition-all duration-150 ease-in rounded-small resize-none`}
                    id="message"
                    rows="8"
                    cols="20"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <FaSpinner className="text-lg animate-spin" />
                    </div>
                  ) : (
                    <Button type="submit">Send Message</Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
