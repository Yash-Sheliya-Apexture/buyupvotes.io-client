// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Breadcrumb from "../components/Breadcrumb";
// import Button from "../components/Button";
// import { IoMdEye, IoMdEyeOff } from "react-icons/io";
// import { toast } from "react-toastify";
// import axios from "axios";
// import "react-toastify/dist/ReactToastify.css";

// const Account = () => {
//   const [activeTab, setActiveTab] = useState("general");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPasswords, setShowPasswords] = useState({ all: false });
//   const [oldPassword, setOldPassword] = useState("");
//   const [isSaving, setIsSaving] = useState(false);

//   const [errors, setErrors] = useState({
//     oldPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });
//   const [indicatorWidth, setIndicatorWidth] = useState(0);
//   const [indicatorLeft, setIndicatorLeft] = useState(0);
//   const tabRefs = useRef([]);
//   const scrollContainerRef = useRef(null);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     updateIndicator(0);
//   }, []);

//   const updateIndicator = (index) => {
//     const tab = tabRefs.current[index];
//     if (tab) {
//       setIndicatorWidth(tab.offsetWidth);
//       setIndicatorLeft(tab.offsetLeft);
//     }
//   };

//   const handleTabChange = (tabId, index) => {
//     setActiveTab(tabId);
//     updateIndicator(index);
//   };

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({
//         left: -150,
//         behavior: "smooth",
//       });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({
//         left: 150,
//         behavior: "smooth",
//       });
//     }
//   };

//     const [userData, setUserData] = useState({
//         email: null,
//         firstName: null,
//         lastName: null,
//     });


//     const [originalUserData, setOriginalUserData] = useState({
//         email: null,
//         firstName: null,
//         lastName: null,
//     });

//   const [isEditing, setIsEditing] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const toggleAllPasswordVisibility = () => {
//     setShowPasswords((prevState) => ({
//       ...prevState,
//       all: !prevState.all,
//     }));
//   };

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = localStorage.getItem("authToken");
//         if (!token) {
//           throw new Error("No token found");
//         }

//         const response = await axios.get(`${API_BASE_URL}/auth/user`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//           setOriginalUserData(response.data);  // Store original data
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         toast.error("Please log in again.");
//       }
//     };
//     fetchUserData();
//   }, []);

//   const handleSavePassword = async () => {
//     if (!oldPassword || !newPassword || !confirmPassword) {
//       toast.error("All fields are required. Please fill them out.");
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       toast.error("Passwords do not match. Please try again.");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("authToken");
//       if (!token) {
//         toast.error("You are not logged in. Please log in to reset your password.");
//         return;
//       }

//       const response = await axios.post(
//         `${import.meta.env.VITE_API_BASE_URL}/auth/reset-password`,
//         {
//           oldPassword,
//           newPassword,
//           confirmPassword,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       toast.success("Password updated successfully!");
//       setOldPassword("");
//       setNewPassword("");
//       setConfirmPassword("");
//     } catch (error) {
//       if (error.response) {
//         toast.error(error.response.data.message || "An error occurred");
//       } else {
//         toast.error("Network error. Please try again.");
//       }
//     }
//   };

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleCancelClick = () => {
//       setUserData(originalUserData);
//       setIsEditing(false);
//   };

//   const handleSaveChanges = async () => {
//       setIsSaving(true);

//         if (userData.firstName.trim() === userData.lastName.trim()) {
//           setUserData((prevData) => ({
//               ...prevData,
//             lastName: "",
//           }));
//       }

//     try {
//         const token = localStorage.getItem("authToken");

//         if (!token) {
//             toast.error("Authorization token is missing. Please log in again.");
//             setIsSaving(false);
//             return;
//         }

//       await axios.put(
//           `${API_BASE_URL}/auth/user`,
//           {
//           email: userData.email,
//           firstName: userData.firstName,
//           lastName: userData.lastName,
//           },
//           {
//           headers: {
//               Authorization: `Bearer ${token}`,
//           },
//           }
//       );

//       toast.success("Changes saved successfully!");
//       } catch (error) {
//           console.error("Error saving changes:", error);
//           toast.error("Failed to save changes.");
//       }
//       setIsSaving(false);
//     setIsEditing(false);
//   };


//   const tabs = [
//     {
//       id: "general",
//       label: "General",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           aria-hidden="true"
//           role="img"
//           className={`h-6 transition-colors duration-300 ${
//             activeTab === "general" ? "text-main-color" : "text-sub-color"
//           }`}
//           viewBox="0 0 24 24"
//         >
//           <path
//             fill="currentColor"
//             fillRule="evenodd"
//             d="M10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4m3.25 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M11 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2"
//             clipRule="evenodd"
//           ></path>
//         </svg>
//       ),
//     },
//     {
//       id: "transactions",
//       label: "Transactions",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           aria-hidden="true"
//           role="img"
//           className={`h-6 transition-colors duration-300 ${
//             activeTab === "transactions" ? "text-main-color" : "text-sub-color"
//           }`}
//           viewBox="0 0 24 24"
//         >
//           <path
//             fill="currentColor"
//             fillRule="evenodd"
//             d="M7.245 2h9.51c1.159 0 1.738 0 2.206.163a3.05 3.05 0 0 1 1.881 1.936C21 4.581 21 5.177 21 6.37v14.004c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V6.37c0-1.193 0-1.79.158-2.27c.3-.913.995-1.629 1.881-1.937C5.507 2 6.086 2 7.245 2M7 6.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 10.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 13.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5z"
//             clipRule="evenodd"
//           ></path>
//         </svg>
//       ),
//     },
//     {
//       id: "security",
//       label: "Security",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           aria-hidden="true"
//           role="img"
//           className={`h-6 transition-colors duration-300 ${
//             activeTab === "security" ? "text-main-color" : "text-sub-color"
//           }`}
//           viewBox="0 0 24 24"
//         >
//           <path
//             fill="currentColor"
//             d="M12.65 10a6 6 0 0 0-6.88-3.88c-2.29.46-4.15 2.29-4.63 4.58A6.006 6.006 0 0 0 7 18a5.99 5.99 0 0 0 5.65-4H17v2c0 1.1.9 2 2 2s2-.9 2-2v-2c1.1 0 2-.9 2-2s-.9-2-2-2zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"
//           ></path>
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <>
//       <div className="container mx-auto">
//         <h1 className="mb-2 font-bold text-sub-color text-basic">Account</h1>
//         <div className="flex items-center space-x-4">
//           <Breadcrumb
//             items={[
//               { label: "Dashboard", link: "/dashboard" },
//               { label: "Account" },
//             ]}
//           />
//         </div>

//         {/* Account Tabs  */}
//         <div className="relative flex items-center w-full my-5 max-w-7xl">
//           {/* Left Scroll Button */}
//           <button onClick={scrollLeft} className="flex-shrink-0 p-2 md:hidden">
//             <FaChevronLeft className="h-3 text-sub-color" />
//           </button>

//           {/* Tabs Container */}
//           <div
//             ref={scrollContainerRef}
//             className="relative flex items-center flex-grow overflow-x-auto scrollbar-hide whitespace-nowrap lg:gap-6 tabs-scrollable scroll-smooth"
//           >
//             {/* Indicator */}
//             <div
//               className="absolute bottom-0 h-0.5 bg-main-color transition-all duration-300"
//               style={{
//                 width: `${indicatorWidth}px`,
//                 left: `${indicatorLeft}px`,
//               }}
//             ></div>

//             {tabs.map((tab, index) => (
//               <button
//                 key={tab.id}
//                 ref={(el) => (tabRefs.current[index] = el)}
//                 className={`flex items-center gap-2 px-4 py-2 transition-all duration-300 ${
//                   activeTab === tab.id
//                     ? "text-main-color border-b-2 border-main-color"
//                     : "text-sub-color border-b-2 border-transparent"
//                 }`}
//                 onClick={() => handleTabChange(tab.id, index)}
//               >
//                 {tab.icon}
//                 {tab.label}
//               </button>
//             ))}
//           </div>

//           {/* Right Scroll Button */}
//           <button onClick={scrollRight} className="flex-shrink-0 p-2 md:hidden">
//             <FaChevronRight className="h-3 text-sub-color" />
//           </button>
//         </div>

//         <div className="w-full p-4 border shadow-md lg:p-10 border-gray-border lg:mt-10 rounded-small">
//           {/* General Tab */}
//           {activeTab === "general" && (
//             <div className="w-full space-y-4">
//                 <div>
//                     <input
//                         type="email"
//                         name="email"
//                         value={userData.email || ""}
//                         disabled
//                         className={`block w-full lg:w-1/2 border-gray-300 rounded-full opacity-50`}
//                     />
//                 </div>
//                 <div className="flex flex-col space-y-4 md:flex-row md:space-x-2 md:space-y-0">
//                     <div className="w-full lg:w-1/4 md:w-1/2">
//                         <input
//                             type="text"
//                             name="firstName"
//                             value={userData.firstName || ""}
//                             onChange={handleInputChange}
//                             disabled={!isEditing}
//                             className={`block w-full border-gray-300 rounded-full  ${
//                             isEditing
//                                 ? "opacity-100 hover:border-black transition-all ease-in duration-150"
//                                 : "opacity-50 "
//                             }`}
//                         />
//                         {isEditing && !userData.firstName && (
//                             <p className="text-[#FF0000] font-medium text-sm mt-1">
//                                 First name is required.
//                             </p>
//                         )}
//                     </div>
//                     <div className="w-full lg:w-1/4 md:w-1/2">
//                         <input
//                             type="text"
//                             name="lastName"
//                             value={userData.lastName || ""}
//                             onChange={handleInputChange}
//                             disabled={!isEditing}
//                             className={`block w-full border-gray-300 rounded-full ${
//                             isEditing
//                                 ? "opacity-100 hover:border-black transition-all ease-in duration-150"
//                                 : "opacity-50"
//                             }`}
//                         />
//                          {isEditing && !userData.lastName && (
//                             <p className="text-[#FF0000] font-medium text-sm mt-1">
//                                 Last name is required.
//                             </p>
//                          )}
//                     </div>
//                 </div>
//               <div className="flex justify-end w-full pt-4 space-x-4 lg:w-1/2">
//                 {!isEditing ? (
//                   <Button onClick={handleEditClick}>Edit</Button>
//                 ) : (
//                   <>
//                     <button
//                       className="px-6 py-1 font-semibold border border-gray-300 rounded-full text-sub-color"
//                       onClick={handleCancelClick}
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       onClick={handleSaveChanges}
//                       className={`px-6 py-1 border text-green-500 border-green-500 hover:shadow-newShadow transition-all ease-in duration-150 font-semibold rounded-full ${
//                         isSaving ? "opacity-100" : ""
//                       }`}
//                       disabled={isSaving}
//                     >
//                       {isSaving ? "Saving..." : "Save Changes"}
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           )}

//           {activeTab === "transactions" && (
//             <div className="space-y-5">
//               <h2 className="font-semibold text-medium text-sub-color">
//                 Transaction History
//               </h2>
//               <p className="font-normal text-sub-color">
//                 You have no transactions.
//               </p>
//             </div>
//           )}

//           {/* Security Tab */}
//           {activeTab === "security" && (
//             <div className="space-y-4 lg:space-y-6">
//               <p className="mb-4 text-sub-color lg:font-medium">
//                 If your account was created with Google, you can create an
//                 account password using the 'forgot password' option on the login
//                 page.
//               </p>
//               <div className="lg:w-1/2">
//                 <div className="relative">
//                   <input
//                     type={showPasswords.all ? "text" : "password"}
//                     className={`block w-full border-gray-300 rounded-full hover:border-black transition-all ease-in duration-150 ${
//                       errors.oldPassword ? "border-red-500" : ""
//                     }`}
//                     placeholder="Old password"
//                     value={oldPassword}
//                     onChange={(e) => setOldPassword(e.target.value)}
//                   />
//                   <span
//                     className="absolute text-sm cursor-pointer right-3 top-3"
//                     onClick={toggleAllPasswordVisibility}
//                   >
//                     {showPasswords.all ? (
//                       <IoMdEye className="text-base text-light-gray" />
//                     ) : (
//                       <IoMdEyeOff className="text-base text-light-gray" />
//                     )}
//                   </span>
//                 </div>
//                 {errors.oldPassword && (
//                   <p className="text-[#FF0000] text-sm mt-1">
//                     {errors.oldPassword}
//                   </p>
//                 )}
//               </div>

//               <div className="lg:w-1/2">
//                 <div className="relative">
//                   <input
//                     type={showPasswords.all ? "text" : "password"}
//                     className={`block w-full border-gray-300 rounded-full hover:border-black transition-all ease-in duration-150 ${
//                       errors.newPassword ? "border-red-500" : ""
//                     }`}
//                     placeholder="New password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                   />
//                   <span
//                     className="absolute text-sm cursor-pointer right-3 top-3"
//                     onClick={toggleAllPasswordVisibility}
//                   >
//                     {showPasswords.all ? (
//                       <IoMdEye className="text-base text-light-gray" />
//                     ) : (
//                       <IoMdEyeOff className="text-base text-light-gray" />
//                     )}
//                   </span>
//                 </div>
//                 {errors.newPassword && (
//                   <p className="text-[#FF0000] text-sm mt-1">
//                     {errors.newPassword}
//                   </p>
//                 )}
//               </div>

//               <div className="lg:w-1/2">
//                 <div className="relative">
//                   <input
//                     type={showPasswords.all ? "text" : "password"}
//                     className={`block w-full border-gray-300 rounded-full hover:border-black transition-all ease-in duration-150 ${
//                       errors.confirmPassword ? "border-red-500" : ""
//                     }`}
//                     placeholder="Confirm password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                   />
//                   <span
//                     className="absolute text-sm cursor-pointer right-3 top-3"
//                     onClick={toggleAllPasswordVisibility}
//                   >
//                     {showPasswords.all ? (
//                       <IoMdEye className="text-base text-light-gray" />
//                     ) : (
//                       <IoMdEyeOff className="text-base text-light-gray" />
//                     )}
//                   </span>
//                 </div>
//                 {errors.confirmPassword && (
//                   <p className="text-[#FF0000] text-sm mt-1">
//                     {errors.confirmPassword}
//                   </p>
//                 )}
//                 <div className="flex justify-end mt-5">
//                   <button
//                     onClick={handleSavePassword}
//                     className={`px-6 py-1 border text-green-500 border-green-500 hover:shadow-newShadow transition-all ease-in duration-150 font-semibold rounded-full ${
//                       isSaving ? "opacity-100" : ""
//                     }`}
//                     disabled={isSaving}
//                   >
//                     {isSaving ? "Saving..." : "Save Changes"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       {/* Delete button */}
//       <div className="mt-4 text-center opacity-50">
//         <button className="px-14 py-1.5 bg-slate-300 text-xs cursor-default rounded-full font-bold text-sub-color">
//           Delete Account
//         </button>
//       </div>
//     </>
//   );
// };

// export default Account;



// // src/Dashboard/pages/Account.jsx
// import React, { useState, useEffect } from "react";
// import Breadcrumb from "../components/Breadcrumb";
// import { toast } from "react-toastify";
// import axios from "axios";
// import "react-toastify/dist/ReactToastify.css";
// import AccountTabNavigation from "../../Dashboard/components/Account/AccountTabNavigation";
// import AccountGeneralTab from "../../Dashboard/components/Account/AccountGeneralTab";
// import AccountTransactionsTab from "../../Dashboard/components/Account/AccountTransactionsTab";
// import AccountSecurityTab from "../../Dashboard/components/Account/AccountSecurityTab";

// const Account = () => {
//   const [activeTab, setActiveTab] = useState("general");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPasswords, setShowPasswords] = useState({ all: false });
//   const [oldPassword, setOldPassword] = useState("");
//   const [isSaving, setIsSaving] = useState(false);

//   const [errors, setErrors] = useState({
//     oldPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//     const [userData, setUserData] = useState({
//         email: null,
//         firstName: null,
//         lastName: null,
//     });

//     const [originalUserData, setOriginalUserData] = useState({
//         email: null,
//         firstName: null,
//         lastName: null,
//     });
//   const [isEditing, setIsEditing] = useState(false);


//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const toggleAllPasswordVisibility = () => {
//     setShowPasswords((prevState) => ({
//       ...prevState,
//       all: !prevState.all,
//     }));
//   };


//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = localStorage.getItem("authToken");
//         if (!token) {
//           throw new Error("No token found");
//         }

//         const response = await axios.get(`${API_BASE_URL}/auth/user`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setOriginalUserData(response.data);
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         toast.error("Please log in again.");
//       }
//     };
//     fetchUserData();
//   }, []);

//   const handleSavePassword = async () => {
//       if (!oldPassword || !newPassword || !confirmPassword) {
//           toast.error("All fields are required. Please fill them out.");
//           return;
//       }

//       if (newPassword !== confirmPassword) {
//         toast.error("Passwords do not match. Please try again.");
//         return;
//       }

//       try {
//         const token = localStorage.getItem("authToken");
//           if (!token) {
//             toast.error("You are not logged in. Please log in to reset your password.");
//             return;
//           }

//         const response = await axios.post(
//             `${import.meta.env.VITE_API_BASE_URL}/auth/reset-password`,
//             {
//               oldPassword,
//               newPassword,
//               confirmPassword,
//             },
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//         );

//         toast.success("Password updated successfully!");
//         setOldPassword("");
//         setNewPassword("");
//         setConfirmPassword("");
//       } catch (error) {
//         if (error.response) {
//           toast.error(error.response.data.message || "An error occurred");
//         } else {
//           toast.error("Network error. Please try again.");
//         }
//       }
//   };

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };


//   const handleCancelClick = () => {
//       setUserData(originalUserData);
//       setIsEditing(false);
//   };


//   const handleSaveChanges = async () => {
//       setIsSaving(true);

//         if (userData.firstName.trim() === userData.lastName.trim()) {
//           setUserData((prevData) => ({
//               ...prevData,
//             lastName: "",
//           }));
//       }

//       try {
//         const token = localStorage.getItem("authToken");

//           if (!token) {
//               toast.error("Authorization token is missing. Please log in again.");
//               setIsSaving(false);
//               return;
//           }


//         await axios.put(
//             `${API_BASE_URL}/auth/user`,
//             {
//                 email: userData.email,
//                 firstName: userData.firstName,
//                 lastName: userData.lastName,
//             },
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );

//           toast.success("Changes saved successfully!");
//       } catch (error) {
//           console.error("Error saving changes:", error);
//         toast.error("Failed to save changes.");
//       }
//       setIsSaving(false);
//     setIsEditing(false);
//   };

//   const tabs = [
//     {
//       id: "general",
//       label: "General",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           aria-hidden="true"
//           role="img"
//           className={`h-6 transition-colors duration-300 ${
//             activeTab === "general" ? "text-main-color" : "text-sub-color"
//           }`}
//           viewBox="0 0 24 24"
//         >
//           <path
//             fill="currentColor"
//             fillRule="evenodd"
//             d="M10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4m3.25 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M11 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2"
//             clipRule="evenodd"
//           ></path>
//         </svg>
//       ),
//     },
//     {
//       id: "transactions",
//       label: "Transactions",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           aria-hidden="true"
//           role="img"
//           className={`h-6 transition-colors duration-300 ${
//             activeTab === "transactions" ? "text-main-color" : "text-sub-color"
//           }`}
//           viewBox="0 0 24 24"
//         >
//           <path
//             fill="currentColor"
//             fillRule="evenodd"
//             d="M7.245 2h9.51c1.159 0 1.738 0 2.206.163a3.05 3.05 0 0 1 1.881 1.936C21 4.581 21 5.177 21 6.37v14.004c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V6.37c0-1.193 0-1.79.158-2.27c.3-.913.995-1.629 1.881-1.937C5.507 2 6.086 2 7.245 2M7 6.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 10.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 13.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5z"
//             clipRule="evenodd"
//           ></path>
//         </svg>
//       ),
//     },
//     {
//       id: "security",
//       label: "Security",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           aria-hidden="true"
//           role="img"
//           className={`h-6 transition-colors duration-300 ${
//             activeTab === "security" ? "text-main-color" : "text-sub-color"
//           }`}
//           viewBox="0 0 24 24"
//         >
//           <path
//             fill="currentColor"
//             d="M12.65 10a6 6 0 0 0-6.88-3.88c-2.29.46-4.15 2.29-4.63 4.58A6.006 6.006 0 0 0 7 18a5.99 5.99 0 0 0 5.65-4H17v2c0 1.1.9 2 2 2s2-.9 2-2v-2c1.1 0 2-.9 2-2s-.9-2-2-2zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"
//           ></path>
//         </svg>
//       ),
//     },
//   ];


//   return (
//     <>
//       <div className="container mx-auto">
//         <h1 className="mb-2 font-bold text-sub-color text-basic">Account</h1>
//         <div className="flex items-center space-x-4">
//           <Breadcrumb
//             items={[
//               { label: "Dashboard", link: "/dashboard" },
//               { label: "Account" },
//             ]}
//           />
//         </div>  

//         {/* Account Tabs  */}
//         <AccountTabNavigation
//             tabs={tabs}
//             activeTab={activeTab}
//             onTabChange={setActiveTab}
//         />

//         <div className="w-full p-4 border shadow-md lg:p-10 border-gray-border lg:mt-10 rounded-small">
//           {/* General Tab */}
//           {activeTab === "general" && (
//             <AccountGeneralTab
//                 userData={userData}
//                 isEditing={isEditing}
//                 handleInputChange={handleInputChange}
//                 handleEditClick={handleEditClick}
//                 handleCancelClick={handleCancelClick}
//                 handleSaveChanges={handleSaveChanges}
//                 isSaving={isSaving}
//              />
//           )}

//           {activeTab === "transactions" && (
//              <AccountTransactionsTab />
//           )}

//           {/* Security Tab */}
//           {activeTab === "security" && (
//               <AccountSecurityTab
//                 showPasswords={showPasswords}
//                 toggleAllPasswordVisibility={toggleAllPasswordVisibility}
//                 oldPassword={oldPassword}
//                 newPassword={newPassword}
//                 confirmPassword={confirmPassword}
//                 setOldPassword={setOldPassword}
//                 setNewPassword={setNewPassword}
//                 setConfirmPassword={setConfirmPassword}
//                 errors={errors}
//                 isSaving={isSaving}
//                 handleSavePassword={handleSavePassword}
//               />
//           )}
//         </div>
//       </div>
//       {/* Delete button */}
//       <div className="mt-4 text-center opacity-50">
//         <button className="px-14 py-1.5 bg-slate-300 text-xs cursor-default rounded-full font-bold text-sub-color">
//           Delete Account
//         </button>
//       </div>
//     </>
//   );
// };

// export default Account;


// src/Dashboard/pages/Account.jsx
import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import AccountTabNavigation from "../../Dashboard/components/Account/AccountTabNavigation";
import AccountGeneralTab from "../../Dashboard/components/Account/AccountGeneralTab";
import AccountTransactionsTab from "../../Dashboard/components/Account/AccountTransactionsTab";
import AccountSecurityTab from "../../Dashboard/components/Account/AccountSecurityTab";

const Account = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswords, setShowPasswords] = useState({ all: false });
  const [oldPassword, setOldPassword] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const [errors, setErrors] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

    const [userData, setUserData] = useState({
        email: null,
        firstName: null,
        lastName: null,
    });

    const [originalUserData, setOriginalUserData] = useState({
        email: null,
        firstName: null,
        lastName: null,
    });
  const [isEditing, setIsEditing] = useState(false);


  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleAllPasswordVisibility = () => {
    setShowPasswords((prevState) => ({
      ...prevState,
      all: !prevState.all,
    }));
  };


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get(`${API_BASE_URL}/auth/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOriginalUserData(response.data);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Please log in again.");
      }
    };
    fetchUserData();
  }, []);

  const handleSavePassword = async () => {
      if (!oldPassword || !newPassword || !confirmPassword) {
          toast.error("All fields are required. Please fill them out.");
          return;
      }

      if (newPassword !== confirmPassword) {
        toast.error("Passwords do not match. Please try again.");
        return;
      }

      try {
        const token = localStorage.getItem("authToken");
          if (!token) {
            toast.error("You are not logged in. Please log in to reset your password.");
            return;
          }

        const response = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/auth/reset-password`,
            {
              oldPassword,
              newPassword,
              confirmPassword,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
        );

        toast.success("Password updated successfully!");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.message || "An error occurred");
        } else {
          toast.error("Network error. Please try again.");
        }
      }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };


  const handleCancelClick = () => {
      setUserData(originalUserData);
      setIsEditing(false);
  };


  const handleSaveChanges = async () => {
      setIsSaving(true);

        if (userData.firstName.trim() === userData.lastName.trim()) {
          setUserData((prevData) => ({
              ...prevData,
            lastName: "",
          }));
      }

      try {
        const token = localStorage.getItem("authToken");

          if (!token) {
              toast.error("Authorization token is missing. Please log in again.");
              setIsSaving(false);
              return;
          }


        await axios.put(
            `${API_BASE_URL}/auth/user`,
            {
                email: userData.email,
                firstName: userData.firstName,
                lastName: userData.lastName,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

          toast.success("Changes saved successfully!");
      } catch (error) {
          console.error("Error saving changes:", error);
        toast.error("Failed to save changes.");
      }
      setIsSaving(false);
    setIsEditing(false);
  };

  const tabs = [
    {
      id: "general",
      label: "General",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className={`h-6 transition-colors duration-300 ${
            activeTab === "general" ? "text-main-color" : "text-sub-color"
          }`}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4m3.25 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M11 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      id: "transactions",
      label: "Transactions",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className={`h-6 transition-colors duration-300 ${
            activeTab === "transactions" ? "text-main-color" : "text-sub-color"
          }`}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.245 2h9.51c1.159 0 1.738 0 2.206.163a3.05 3.05 0 0 1 1.881 1.936C21 4.581 21 5.177 21 6.37v14.004c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V6.37c0-1.193 0-1.79.158-2.27c.3-.913.995-1.629 1.881-1.937C5.507 2 6.086 2 7.245 2M7 6.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 10.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 13.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      id: "security",
      label: "Security",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className={`h-6 transition-colors duration-300 ${
            activeTab === "security" ? "text-main-color" : "text-sub-color"
          }`}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12.65 10a6 6 0 0 0-6.88-3.88c-2.29.46-4.15 2.29-4.63 4.58A6.006 6.006 0 0 0 7 18a5.99 5.99 0 0 0 5.65-4H17v2c0 1.1.9 2 2 2s2-.9 2-2v-2c1.1 0 2-.9 2-2s-.9-2-2-2zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"
          ></path>
        </svg>
      ),
    },
  ];


  return (
    <>
      <div className="container mx-auto">
        <h1 className="mb-2 font-bold text-sub-color text-basic">Account</h1>
        <div className="flex items-center space-x-4">
          <Breadcrumb
            items={[
              { label: "Dashboard", link: "/dashboard" },
              { label: "Account" },
            ]}
          />
        </div>  

        
        {/* Account Tabs  */}
        <AccountTabNavigation
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
        />

        <div className="w-full p-4 border shadow-md lg:p-10 border-gray-border lg:mt-10 rounded-small">
          {/* General Tab */}
          {activeTab === "general" && (
            <AccountGeneralTab
                userData={userData}
                isEditing={isEditing}
                handleInputChange={handleInputChange}
                handleEditClick={handleEditClick}
                handleCancelClick={handleCancelClick}
                handleSaveChanges={handleSaveChanges}
                isSaving={isSaving}
             />
          )}

          {activeTab === "transactions" && (
             <AccountTransactionsTab />
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
              <AccountSecurityTab
                showPasswords={showPasswords}
                toggleAllPasswordVisibility={toggleAllPasswordVisibility}
                oldPassword={oldPassword}
                newPassword={newPassword}
                confirmPassword={confirmPassword}
                setOldPassword={setOldPassword}
                setNewPassword={setNewPassword}
                setConfirmPassword={setConfirmPassword}
                errors={errors}
                isSaving={isSaving}
                handleSavePassword={handleSavePassword}
              />
          )}
        </div>
      </div>
      {/* Delete button */}
      <div className="mt-4 text-center opacity-50">
        <button className="px-14 py-1.5 bg-slate-300 text-xs cursor-default rounded-full font-bold text-sub-color">
          Delete Account
        </button>
      </div>
    </>
  );
};

export default Account;