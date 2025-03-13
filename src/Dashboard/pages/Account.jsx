// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";
// import "react-toastify/dist/ReactToastify.css";
// import AccountTabNavigation from "../../Dashboard/components/Account/AccountTabNavigation";
// import AccountGeneralTab from "../../Dashboard/components/Account/AccountGeneralTab";
// import AccountTransactionsTab from "../../Dashboard/components/Account/AccountTransactionsTab";
// import AccountSecurityTab from "../../Dashboard/components/Account/AccountSecurityTab";
// import BreadcrumbHeader from "../../Components/BreadcrumbHeader";

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

//   const [userData, setUserData] = useState({
//     email: null,
//     firstName: null,
//     lastName: null,
//   });

//   const [originalUserData, setOriginalUserData] = useState({
//     email: null,
//     firstName: null,
//     lastName: null,
//   });
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
//         toast.error(
//           "You are not logged in. Please log in to reset your password."
//         );
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
//     setUserData(originalUserData);
//     setIsEditing(false);
//   };

//   const handleSaveChanges = async () => {
//     setIsSaving(true);

//     if (userData.firstName.trim() === userData.lastName.trim()) {
//       setUserData((prevData) => ({
//         ...prevData,
//         lastName: "",
//       }));
//     }

//     try {
//       const token = localStorage.getItem("authToken");

//       if (!token) {
//         toast.error("Authorization token is missing. Please log in again.");
//         setIsSaving(false);
//         return;
//       }

//       await axios.put(
//         `${API_BASE_URL}/auth/user`,
//         {
//           email: userData.email,
//           firstName: userData.firstName,
//           lastName: userData.lastName,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       toast.success("Changes saved successfully!");
//     } catch (error) {
//       console.error("Error saving changes:", error);
//       toast.error("Failed to save changes.");
//     }
//     setIsSaving(false);
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

//   const breadcrumbs = [
//     { label: "Dashboard", link: "/dashboard" },
//     { label: "Account" },
//   ];

//   return (
//     <>
//       <BreadcrumbHeader title="Account" breadcrumbs={breadcrumbs} />
//       <section className="Account-Reddit">
//         <div className="container mx-auto">
//           {/* Account Tabs  */}

//           <AccountTabNavigation
//             tabs={tabs}
//             activeTab={activeTab}
//             onTabChange={setActiveTab}
//           />

//           <div className="w-full p-4 border border-gray-300/50 shadow-main lg:p-6 rounded-small">
//             {/* General Tab */}
//             {activeTab === "general" && (
//               <AccountGeneralTab
//                 userData={userData}
//                 isEditing={isEditing}
//                 handleInputChange={handleInputChange}
//                 handleEditClick={handleEditClick}
//                 handleCancelClick={handleCancelClick}
//                 handleSaveChanges={handleSaveChanges}
//                 isSaving={isSaving}
//               />
//             )}

//             {activeTab === "transactions" && <AccountTransactionsTab />}

//             {/* Security Tab */}
//             {activeTab === "security" && (
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
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Account;


// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";
// import "react-toastify/dist/ReactToastify.css";
// import AccountTabNavigation from "../../Dashboard/components/Account/AccountTabNavigation";
// import AccountGeneralTab from "../../Dashboard/components/Account/AccountGeneralTab";
// import AccountSecurityTab from "../../Dashboard/components/Account/AccountSecurityTab";
// import BreadcrumbHeader from "../../Components/BreadcrumbHeader";

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

//   const [userData, setUserData] = useState({
//     email: null,
//     firstName: null,
//     lastName: null,
//   });

//   const [originalUserData, setOriginalUserData] = useState({
//     email: null,
//     firstName: null,
//     lastName: null,
//   });
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
//         toast.error(
//           "You are not logged in. Please log in to reset your password."
//         );
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
//     setUserData(originalUserData);
//     setIsEditing(false);
//   };

//   const handleSaveChanges = async () => {
//     setIsSaving(true);

//     if (userData.firstName.trim() === userData.lastName.trim()) {
//       setUserData((prevData) => ({
//         ...prevData,
//         lastName: "",
//       }));
//     }

//     try {
//       const token = localStorage.getItem("authToken");

//       if (!token) {
//         toast.error("Authorization token is missing. Please log in again.");
//         setIsSaving(false);
//         return;
//       }

//       await axios.put(
//         `${API_BASE_URL}/auth/user`,
//         {
//           email: userData.email,
//           firstName: userData.firstName,
//           lastName: userData.lastName,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       toast.success("Changes saved successfully!");
//     } catch (error) {
//       console.error("Error saving changes:", error);
//       toast.error("Failed to save changes.");
//     }
//     setIsSaving(false);
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

//   const breadcrumbs = [
//     { label: "Dashboard", link: "/dashboard" },
//     { label: "Account" },
//   ];

//   return (
//     <>
//       <BreadcrumbHeader title="Account" breadcrumbs={breadcrumbs} />
//       <section className="Account-Reddit">
//         <div className="container mx-auto">
//           {/* Account Tabs  */}

//           <AccountTabNavigation
//             tabs={tabs}
//             activeTab={activeTab}
//             onTabChange={setActiveTab}
//           />

//           <div className="w-full p-4 border border-gray-300/50 shadow-main lg:p-6 rounded-small">
//             {/* General Tab */}
//             {activeTab === "general" && (
//               <AccountGeneralTab
//                 userData={userData}
//                 isEditing={isEditing}
//                 handleInputChange={handleInputChange}
//                 handleEditClick={handleEditClick}
//                 handleCancelClick={handleCancelClick}
//                 handleSaveChanges={handleSaveChanges}
//                 isSaving={isSaving}
//               />
//             )}

//             {/* Security Tab */}
//             {activeTab === "security" && (
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
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Account;




// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";
// import "react-toastify/dist/ReactToastify.css";
// import AccountTabNavigation from "../../Dashboard/components/Account/AccountTabNavigation";
// import AccountGeneralTab from "../../Dashboard/components/Account/AccountGeneralTab";
// import AccountSecurityTab from "../../Dashboard/components/Account/AccountSecurityTab";
// import BreadcrumbHeader from "../../Components/BreadcrumbHeader";
// import TokenService from "../../utils/TokenService";  // Import TokenService

// const Account = () => {
//     const [activeTab, setActiveTab] = useState("general");
//     const [newPassword, setNewPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [showPasswords, setShowPasswords] = useState({ all: false });
//     const [oldPassword, setOldPassword] = useState("");
//     const [isSaving, setIsSaving] = useState(false);

//     const [errors, setErrors] = useState({
//         oldPassword: "",
//         newPassword: "",
//         confirmPassword: "",
//     });

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
//     const [isEditing, setIsEditing] = useState(false);

//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     const token = TokenService.getToken();  // Get token from TokenService


//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setUserData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const toggleAllPasswordVisibility = () => {
//         setShowPasswords((prevState) => ({
//             ...prevState,
//             all: !prevState.all,
//         }));
//     };

//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 if (!token) {
//                     throw new Error("No token found");
//                 }

//                 const response = await axios.get(`${API_BASE_URL}/auth/user`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//                 setOriginalUserData(response.data);
//                 setUserData(response.data);
//             } catch (error) {
//                 console.error("Error fetching user data:", error);
//                 toast.error("Please log in again.");
//             }
//         };
//         fetchUserData();
//     }, [token, API_BASE_URL]);

//     const handleSavePassword = async () => {
//         if (!oldPassword || !newPassword || !confirmPassword) {
//             toast.error("All fields are required. Please fill them out.");
//             return;
//         }

//         if (newPassword !== confirmPassword) {
//             toast.error("Passwords do not match. Please try again.");
//             return;
//         }

//         try {
//             if (!token) {
//                 toast.error(
//                     "You are not logged in. Please log in to reset your password."
//                 );
//                 return;
//             }

//             const response = await axios.post(
//                 `${API_BASE_URL}/auth/reset-password`,
//                 {
//                     oldPassword,
//                     newPassword,
//                     confirmPassword,
//                 },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );

//             toast.success("Password updated successfully!");
//             setOldPassword("");
//             setNewPassword("");
//             setConfirmPassword("");
//         } catch (error) {
//             if (error.response) {
//                 toast.error(error.response.data.message || "An error occurred");
//             } else {
//                 toast.error("Network error. Please try again.");
//             }
//         }
//     };

//     const handleEditClick = () => {
//         setIsEditing(true);
//     };

//     const handleCancelClick = () => {
//         setUserData(originalUserData);
//         setIsEditing(false);
//     };

//     const handleSaveChanges = async () => {
//         setIsSaving(true);

//         if (userData.firstName.trim() === userData.lastName.trim()) {
//             setUserData((prevData) => ({
//                 ...prevData,
//                 lastName: "",
//             }));
//         }

//         try {
//             if (!token) {
//                 toast.error("Authorization token is missing. Please log in again.");
//                 setIsSaving(false);
//                 return;
//             }

//             await axios.put(
//                 `${API_BASE_URL}/auth/user`,
//                 {
//                     email: userData.email,
//                     firstName: userData.firstName,
//                     lastName: userData.lastName,
//                 },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );

//             toast.success("Changes saved successfully!");
//         } catch (error) {
//             console.error("Error saving changes:", error);
//             toast.error("Failed to save changes.");
//         }
//         setIsSaving(false);
//         setIsEditing(false);
//     };

//     const tabs = [
//         {
//             id: "general",
//             label: "General",
//             icon: (
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     aria-hidden="true"
//                     role="img"
//                     className={`h-6 transition-colors duration-300 ${activeTab === "general" ? "text-main-color" : "text-sub-color"
//                         }`}
//                     viewBox="0 0 24 24"
//                 >
//                     <path
//                         fill="currentColor"
//                         fillRule="evenodd"
//                         d="M10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4m3.25 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M11 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2"
//                         clipRule="evenodd"
//                     ></path>
//                 </svg>
//             ),
//         },

//         {
//             id: "security",
//             label: "Security",
//             icon: (
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     aria-hidden="true"
//                     role="img"
//                     className={`h-6 transition-colors duration-300 ${activeTab === "security" ? "text-main-color" : "text-sub-color"
//                         }`}
//                     viewBox="0 0 24 24"
//                 >
//                     <path
//                         fill="currentColor"
//                         d="M12.65 10a6 6 0 0 0-6.88-3.88c-2.29.46-4.15 2.29-4.63 4.58A6.006 6.006 0 0 0 7 18a5.99 5.99 0 0 0 5.65-4H17v2c0 1.1.9 2 2 2s2-.9 2-2v-2c1.1 0 2-.9 2-2s-.9-2-2-2zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"
//                     ></path>
//                 </svg>
//             ),
//         },
//     ];

//     const breadcrumbs = [
//         { label: "Dashboard", link: "/dashboard" },
//         { label: "Account" },
//     ];

//     return (
//         <>
//             <BreadcrumbHeader title="Account" breadcrumbs={breadcrumbs} />
//             <section className="Account-Reddit">
//                 <div className="container mx-auto">
//                     {/* Account Tabs  */}

//                     <AccountTabNavigation
//                         tabs={tabs}
//                         activeTab={activeTab}
//                         onTabChange={setActiveTab}
//                     />

//                     <div className="w-full p-4 border border-gray-300/50 shadow-main lg:p-6 rounded-small">
//                         {/* General Tab */}
//                         {activeTab === "general" && (
//                             <AccountGeneralTab
//                                 userData={userData}
//                                 isEditing={isEditing}
//                                 handleInputChange={handleInputChange}
//                                 handleEditClick={handleEditClick}
//                                 handleCancelClick={handleCancelClick}
//                                 handleSaveChanges={handleSaveChanges}
//                                 isSaving={isSaving}
//                             />
//                         )}

//                         {/* Security Tab */}
//                         {activeTab === "security" && (
//                             <AccountSecurityTab
//                                 showPasswords={showPasswords}
//                                 toggleAllPasswordVisibility={toggleAllPasswordVisibility}
//                                 oldPassword={oldPassword}
//                                 newPassword={newPassword}
//                                 confirmPassword={confirmPassword}
//                                 setOldPassword={setOldPassword}
//                                 setNewPassword={setNewPassword}
//                                 setConfirmPassword={setConfirmPassword}
//                                 errors={errors}
//                                 isSaving={isSaving}
//                                 handleSavePassword={handleSavePassword}
//                             />
//                         )}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Account;


// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";
// import "react-toastify/dist/ReactToastify.css";
// import AccountTabNavigation from "../../Dashboard/components/Account/AccountTabNavigation";
// import AccountGeneralTab from "../../Dashboard/components/Account/AccountGeneralTab";
// import AccountSecurityTab from "../../Dashboard/components/Account/AccountSecurityTab";
// import BreadcrumbHeader from "../../Components/BreadcrumbHeader";
// import TokenService from "../../utils/TokenService";  // Import TokenService

// const Account = () => {
//     const [activeTab, setActiveTab] = useState("general");
//     const [newPassword, setNewPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [showPasswords, setShowPasswords] = useState({ all: false });
//     const [oldPassword, setOldPassword] = useState("");
//     const [isSaving, setIsSaving] = useState(false);

//     const [errors, setErrors] = useState({
//         oldPassword: "",
//         newPassword: "",
//         confirmPassword: "",
//     });

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
//     const [isEditing, setIsEditing] = useState(false);

//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     const token = TokenService.getToken();  // Get token from TokenService


//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setUserData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const toggleAllPasswordVisibility = () => {
//         setShowPasswords((prevState) => ({
//             ...prevState,
//             all: !prevState.all,
//         }));
//     };

//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 if (!token) {
//                     throw new Error("No token found");
//                 }

//                 const response = await axios.get(`${API_BASE_URL}/auth/user`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//                 console.log("/auth/user 4")
//                 setOriginalUserData(response.data);
//                 setUserData(response.data);
//             } catch (error) {
//                 console.error("Error fetching user data:", error);
//                 toast.error("Please log in again.");
//             }
//         };
//         fetchUserData();
//     }, [token, API_BASE_URL]);

//     const handleSavePassword = async () => {
//         if (!oldPassword || !newPassword || !confirmPassword) {
//             toast.error("All fields are required. Please fill them out.");
//             return;
//         }

//         if (newPassword !== confirmPassword) {
//             toast.error("Passwords do not match. Please try again.");
//             return;
//         }

//         try {
//             if (!token) {
//                 toast.error(
//                     "You are not logged in. Please log in to reset your password."
//                 );
//                 return;
//             }

//             const response = await axios.post(
//                 `${API_BASE_URL}/auth/reset-password`,
//                 {
//                     oldPassword,
//                     newPassword,
//                     confirmPassword,
//                 },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );

//             toast.success("Password updated successfully!");
//             setOldPassword("");
//             setNewPassword("");
//             setConfirmPassword("");
//         } catch (error) {
//             if (error.response) {
//                 toast.error(error.response.data.message || "An error occurred");
//             } else {
//                 toast.error("Network error. Please try again.");
//             }
//         }
//     };

//     const handleEditClick = () => {
//         setIsEditing(true);
//     };

//     const handleCancelClick = () => {
//         setUserData(originalUserData);
//         setIsEditing(false);
//     };

//     // const handleSaveChanges = async () => {
//     //     setIsSaving(true);

//     //     if (userData.firstName.trim() === userData.lastName.trim()) {
//     //         setUserData((prevData) => ({
//     //             ...prevData,
//     //             lastName: "",
//     //         }));
//     //     }

//     //     try {
//     //         if (!token) {
//     //             toast.error("Authorization token is missing. Please log in again.");
//     //             setIsSaving(false);
//     //             return;
//     //         }

//     //         await axios.put(
//     //             `${API_BASE_URL}/auth/user`,
//     //             {
//     //                 email: userData.email,
//     //                 firstName: userData.firstName,
//     //                 lastName: userData.lastName,
//     //             },
//     //             {
//     //                 headers: {
//     //                     Authorization: `Bearer ${token}`,
//     //                 },
//     //             }
//     //         );

//     //         toast.success("Changes saved successfully!");
//     //         setOriginalUserData(userData); // Update originalUserData after successful save
//     //     } catch (error) {
//     //         console.error("Error saving changes:", error);
//     //         toast.error("Failed to save changes.");
//     //     }
//     //     setIsSaving(false);
//     //     setIsEditing(false);
//     // };
//     // In Account.jsx (handleSaveChanges function)

//     // In Account.jsx (handleSaveChanges function)

//     const handleSaveChanges = async () => {
//         setIsSaving(true);

//         if (userData.firstName.trim() === userData.lastName.trim()) {
//             setUserData((prevData) => ({
//                 ...prevData,
//                 lastName: "",
//             }));
//         }

//         try {
//             if (!token) {
//                 toast.error("Authorization token is missing. Please log in again.");
//                 setIsSaving(false);
//                 return;
//             }

//             await axios.put(
//                 `${API_BASE_URL}/auth/user`,
//                 {
//                     email: userData.email,
//                     firstName: userData.firstName,
//                     lastName: userData.lastName,
//                 },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }

//             );
//             console.log("/auth/user 5")
//             toast.success("Changes saved successfully!");

//             // Update both userData and originalUserData state:
//             setOriginalUserData(userData);  // Update originalUserData

//         } catch (error) {
//             console.error("Error saving changes:", error);
//             toast.error("Failed to save changes.");
//         } finally {
//             setIsSaving(false);
//             setIsEditing(false);
//         }
//     };
//     const tabs = [
//         {
//             id: "general",
//             label: "General",
//             icon: (
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     aria-hidden="true"
//                     role="img"
//                     className={`h-6 transition-colors duration-300 ${activeTab === "general" ? "text-main-color" : "text-sub-color"
//                         }`}
//                     viewBox="0 0 24 24"
//                 >
//                     <path
//                         fill="currentColor"
//                         fillRule="evenodd"
//                         d="M10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4m3.25 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M11 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2"
//                         clipRule="evenodd"
//                     ></path>
//                 </svg>
//             ),
//         },

//         {
//             id: "security",
//             label: "Security",
//             icon: (
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     aria-hidden="true"
//                     role="img"
//                     className={`h-6 transition-colors duration-300 ${activeTab === "security" ? "text-main-color" : "text-sub-color"
//                         }`}
//                     viewBox="0 0 24 24"
//                 >
//                     <path
//                         fill="currentColor"
//                         d="M12.65 10a6 6 0 0 0-6.88-3.88c-2.29.46-4.15 2.29-4.63 4.58A6.006 6.006 0 0 0 7 18a5.99 5.99 0 0 0 5.65-4H17v2c0 1.1.9 2 2 2s2-.9 2-2v-2c1.1 0 2-.9 2-2s-.9-2-2-2zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"
//                     ></path>
//                 </svg>
//             ),
//         },
//     ];

//     const breadcrumbs = [
//         { label: "Dashboard", link: "/dashboard" },
//         { label: "Account" },
//     ];

//     return (
//         <>
//             <BreadcrumbHeader title="Account" breadcrumbs={breadcrumbs} />
//             <section className="Account-Reddit">
//                 <div className="container mx-auto">
//                     {/* Account Tabs  */}

//                     <AccountTabNavigation
//                         tabs={tabs}
//                         activeTab={activeTab}
//                         onTabChange={setActiveTab}
//                     />

//                     <div className="w-full p-4 border border-gray-300/50 shadow-main lg:p-6 rounded-small">
//                         {/* General Tab */}
//                         {activeTab === "general" && (
//                             <AccountGeneralTab
//                                 userData={userData}
//                                 isEditing={isEditing}
//                                 handleInputChange={handleInputChange}
//                                 handleEditClick={handleEditClick}
//                                 handleCancelClick={handleCancelClick}
//                                 handleSaveChanges={handleSaveChanges}
//                                 isSaving={isSaving}
//                             />
//                         )}

//                         {/* Security Tab */}
//                         {activeTab === "security" && (
//                             <AccountSecurityTab
//                                 showPasswords={showPasswords}
//                                 toggleAllPasswordVisibility={toggleAllPasswordVisibility}
//                                 oldPassword={oldPassword}
//                                 newPassword={newPassword}
//                                 confirmPassword={confirmPassword}
//                                 setOldPassword={setOldPassword}
//                                 setNewPassword={setNewPassword}
//                                 setConfirmPassword={setConfirmPassword}
//                                 errors={errors}
//                                 isSaving={isSaving}
//                                 handleSavePassword={handleSavePassword}
//                             />
//                         )}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Account;



import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AccountTabNavigation from "../../Dashboard/components/Account/AccountTabNavigation";
import AccountGeneralTab from "../../Dashboard/components/Account/AccountGeneralTab";
import AccountSecurityTab from "../../Dashboard/components/Account/AccountSecurityTab";
import BreadcrumbHeader from "../../Components/BreadcrumbHeader";
import TokenService from "../../utils/TokenService";  // Import TokenService

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
    const token = TokenService.getToken();  // Get token from TokenService

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

   const fetchUserData = useCallback(async () => {
        try {
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
    }, [token, API_BASE_URL]);

    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);

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
            if (!token) {
                toast.error(
                    "You are not logged in. Please log in to reset your password."
                );
                return;
            }

            const response = await axios.post(
                `${API_BASE_URL}/auth/reset-password`,
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
    // In Account.jsx (handleSaveChanges function)

    const handleSaveChanges = async () => {
        setIsSaving(true);

        if (userData.firstName.trim() === userData.lastName.trim()) {
            setUserData((prevData) => ({
                ...prevData,
                lastName: "",
            }));
        }

        try {
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
            // Update both userData and originalUserData state:
             fetchUserData();

        } catch (error) {
            console.error("Error saving changes:", error);
            toast.error("Failed to save changes.");
        } finally {
            setIsSaving(false);
            setIsEditing(false);
        }
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
                    className={`h-6 transition-colors duration-300 ${activeTab === "general" ? "text-main-color" : "text-sub-color"
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
            id: "security",
            label: "Security",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className={`h-6 transition-colors duration-300 ${activeTab === "security" ? "text-main-color" : "text-sub-color"
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

    const breadcrumbs = [
        { label: "Dashboard", link: "/dashboard" },
        { label: "Account" },
    ];

    return (
        <>
            <BreadcrumbHeader title="Account" breadcrumbs={breadcrumbs} />
            <section className="Account-Reddit">
                <div className="container mx-auto">
                    {/* Account Tabs  */}

                    <AccountTabNavigation
                        tabs={tabs}
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                    />

                    <div className="w-full p-4 border border-gray-300/50 shadow-main lg:p-6 rounded-small">
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
            </section>
        </>
    );
};

export default Account;