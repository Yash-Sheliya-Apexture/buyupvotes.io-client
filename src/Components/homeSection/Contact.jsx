// import React, { useState, useRef } from "react";
// import men from "../assets/Images/contact.svg";
// import "react-toastify/dist/ReactToastify.css";
// import InputField from "../Dashboard/components/InputField";
// import Button from "../Dashboard/components/Button";
// import { GoUpload } from "react-icons/go";

// const ContactUS = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     projectIdea: "",
//     agreeMarketing: false,
//     agreePrivacy: false,
//   });
//   const [errors, setErrors] = useState({});
//   const [fileError, setFileError] = useState("");
//   const [file, setFile] = useState(null);
//   const textareaRef = useRef(null);
//   const [textareaError, setTextareaError] = useState(false);

//   // Validation functions
//   const validateEmail = (email) => {
//     if (!email) return "Email is required.";
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) return "Please enter a valid email address.";
//     if (email.length > 50) return "Email must be 50 characters or less.";
//     return "";
//   };
//   const validatePhone = (phone) => {
//     if (!phone) return "Phone number is required.";
//     if (phone && !/^\d{0,10}$/.test(phone))
//       return "Phone number must be 10 digits only";
//     return "";
//   };
//   const validateRequired = (value, fieldName) => {
//     if (!value) return `${fieldName} is required`;
//     return "";
//   };
//   const validateFile = (file) => {
//     if (!file) return ""; //File is not required
//     if (file.size > 500 * 1024) return "File size must be 500KB or less.";
//     return "";
//   };

//   // Form handlers
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//     // Clear error on input change
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };
//   const handleEmailChange = (e) => {
//     handleChange(e);
//     const error = validateEmail(e.target.value);
//     setErrors((prev) => ({ ...prev, email: error }));
//   };
//   const handlePhoneChange = (e) => {
//     handleChange(e);
//     const error = validatePhone(e.target.value);
//     setErrors((prev) => ({ ...prev, phone: error }));
//   };
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFile(file);
//     const error = validateFile(file);
//     setFileError(error);
//   };

//   const validateForm = () => {
//     let formErrors = {};
//     formErrors.fullName = validateRequired(formData.fullName, "Full name");
//     formErrors.projectIdea = validateRequired(
//       formData.projectIdea,
//       "Project idea"
//     );
//     formErrors.agreePrivacy = !formData.agreePrivacy
//       ? "You must agree to the Privacy Policy"
//       : "";
//     formErrors.email = validateEmail(formData.email);
//     formErrors.phone = validatePhone(formData.phone);
//     setErrors(formErrors);
//     return Object.values(formErrors).every((err) => !err);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       if (!formData.projectIdea.trim()) {
//         setTextareaError(true);
//         if (textareaRef.current) {
//           textareaRef.current.focus();
//         }
//         return;
//       } else {
//         setTextareaError(false);
//         localStorage.setItem("contactFormData", JSON.stringify(formData));
//         alert("Form submitted successfully!");
//         setFormData({
//           fullName: "",
//           email: "",
//           phone: "",
//           projectIdea: "",
//           agreeMarketing: false,
//           agreePrivacy: false,
//         });
//         setFile(null);
//         setFileError("");
//         setErrors({});
//       }
//     } else {
//       if (!formData.projectIdea.trim()) {
//         setTextareaError(true);
//       }
//     }
//   };
//   return (
//     <>
//       <div className="my-4">
//         <h1
//           className="font-bold text-center capitalize text-basic text-sub-color animate__animated animate__fadeInDown"
//           style={{ animationDelay: "0.1s" }}
//         >
//           We're Here to
//           <span className="font-bold text-main-color"> Help?</span>
//         </h1>
//         <p
//           className="lg:text-medium text-small text-sub-color font-medium mt-2 mb-6 text-center animate__animated animate__fadeInDown"
//           style={{ animationDelay: "0.1s" }}
//         >
//           Contact us for support or inquiries.
//         </p>
//       </div>

//       <div className="container mx-auto">
//         <section className="shadow-main p-6 border rounded-small my-10">
//           <h1 className="text-large text-main-color font-bold md:text-4xl mb-4">
//             Contact Us
//           </h1>
//           <p className="text-small md:text-md font-medium mb-8 max-w-2xl text-sub-color">
//             Let our experience be your asset! We’re here to understand your
//             challenge and prepare a strategic recommendation for you.
//           </p>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {/* Left Form */}
//             <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//               {/* Input fields */}
//               <InputField
//                 name="fullName"
//                 label="Full Name"
//                 placeholder="Your Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 error={errors.fullName}
//               />
//               <InputField
//                 type="email"
//                 name="email"
//                 label="Email"
//                 placeholder="Your@email.com"
//                 value={formData.email}
//                 onChange={handleEmailChange}
//                 error={errors.email}
//               />
//               <InputField
//                 type="tel"
//                 name="phone"
//                 label="Phone Number"
//                 placeholder="Enter Your Number"
//                 value={formData.phone}
//                 onChange={handlePhoneChange}
//                 error={errors.phone}
//               />

//               {/* Checkboxes */}
//               <div className="space-y-2 ml-2">
//                 <label className="inline-flex items-center">
//                   <input
//                     type="checkbox"
//                     name="agreeMarketing"
//                     checked={formData.agreeMarketing}
//                     onChange={handleChange}
//                     className="form-checkbox h-4 w-4 outline-none accent-main-color"
//                   />
//                   <span className="ml-2 text-xs">
//                     I agree to receive marketing communication
//                   </span>
//                 </label>
//                 <label className="inline-flex items-center">
//                   <input
//                     type="checkbox"
//                     name="agreePrivacy"
//                     checked={formData.agreePrivacy}
//                     onChange={handleChange}
//                     className="form-checkbox h-4 w-4 outline-none accent-main-color"
//                   />
//                   <span className="ml-2 text-xs">
//                     I've read the &nbsp;
//                     <span className="text-[#ff0000] font-medium relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ff0000] after:transition-all after:duration-500 hover:after:w-full">
//                       Privacy Policy&nbsp;
//                     </span>
//                       and agree to be contacted back *
//                   </span>
//                 </label>

//                 {errors.agreePrivacy && (
//                   <span className="text-[#ff0000] inline-block text-sm mt-1">
//                     {errors.agreePrivacy}
//                   </span>
//                 )}
//               </div>
//             </form>

//             {/* Right Form */}
//             <form
//               className="flex flex-col w-full -mt-1"
//               onSubmit={handleSubmit}
//             >
//               <div className="flex flex-col">
//                 <textarea
//                   name="projectIdea"
//                   value={formData.projectIdea}
//                   onChange={handleChange}
//                   rows={8} // Set the default value for small screens
//                   placeholder="Your Project Idea"
//                   className={`border-1 resize-none border-gray-300/50 rounded-[10px] p-2.5 hover:border-black transition-all duration-150 ease-in w-full ${
//                     textareaError ? "border-red-500" : ""
//                   }`}
//                   ref={textareaRef}
//                   style={{
//                     // Apply the dynamic rows using the media queries
//                     "@media (min-width: 375px)": {
//                       rows: 6,
//                     },
//                   }}
//                 ></textarea>
//                 {errors.projectIdea && (
//                   <span className="text-[#ff0000] text-sm mt-1">
//                     {errors.projectIdea}
//                   </span>
//                 )}
//               </div>

//               {/* Submit Button */}
//               <div className="flex justify-center mt-5">
//                 <Button type="submit">Submit</Button>
//               </div>
//             </form>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default ContactUS;

import React from "react";
import metting from "../../assets/Images/metting.webp";
import Button from "../../Dashboard/components/Button";

const Contact = () => {
  return (
    <div className="contact-main mt-10">
      <section className="relative max-w-full p-0 contact">
        <div className="w-full mx-auto container max-w-[1360px]">
          <div className="sub-content grid md:grid-cols-2">
            <div className="left w-full lg:px-20 md:px-6 px-4 py-4 bg-[#fff1e6] rounded-small lg:-mr-10 flex items-center z-10">
              <div className="space-y-5">
                {/* Leftside */}
                <div className="text-main-color font-bold text-basic lg:text-xlarge">
                  {" "}
                  Let’s get acquainted
                </div>

                <div className="text-para-color text-small lg:text-medium leading-7 max-w-md">
                  {" "}
                  Whether you’re established or fast-growing business, we’re
                  here to help you gain a competitive edge — speak to one of our
                  human agents about how Yellow.ai might work for you.
                </div>
                <div className="button-div">
                  <Button to="/contact-us">Get In Touch</Button>
                </div>
              </div>
            </div>
            {/* Rightside */}
            <div className="right w-full lg:max-w-[450px]">
              <img
                src={metting}
                alt="Image"
                className="w-full h-auto rounded-large md:w-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
