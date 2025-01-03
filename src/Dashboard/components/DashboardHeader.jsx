// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import rocket from "../../assets/Images/rocket-1.png";
// import { FaAngleDown } from "react-icons/fa6";
// import skybackground from "../../assets/Images/blue-background.png";
// import axios from "axios";
// import { TbMenu4 } from "react-icons/tb";

// const Dashboard_header = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [error, setError] = useState(null);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   const dropdownRef = useRef(null); // Ref for the dropdown menu
//   // Fetch user data
//   useEffect(() => {
//     const fetchUserData = async () => {
//       const token = localStorage.getItem("authToken");
//       if (token) {
//         try {
//           setLoading(true);
//           const response = await axios.get(`${API_BASE_URL}/auth/user`, {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           if (response.status === 200) {
//             setUser(response.data);
//           } else {
//             setError("Failed to fetch user data");
//           }
//         } catch (err) {
//           setError("Error fetching user data");
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setLoading(false);
//       }
//     };
//     fetchUserData();
//   }, [API_BASE_URL]);
//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
//   const handleSignOut = () => {
//     localStorage.removeItem("authToken");
//     navigate("/signin");
//   };
//   return (
//     <>
//       {/* Header Section Start  */}
//       <header className="sticky top-0 z-10 w-full backdrop-blur-[2px] bg-white/50">
//         <div className="flex items-center justify-between p-3">
//           <div className="block lg:hidden">
//             <TbMenu4 />
//           </div>
//           <div className="relative" ref={dropdownRef}>
//             <button
//               className="px-6 py-2.5 rounded-full bg-main-color flex items-center relative focus:outline-none"
//               onClick={toggleDropdown}
//             >
//               <img
//                 src={rocket}
//                 alt="Rocket Icon"
//                 className="absolute top-0 left-0 h-10 animate-rocket"
//               />
//               <p className="ml-6 font-bold text-white">
//                 Balance:{" "}
//                 <span className="underline underline-offset-1">100 Votes</span>
//               </p>
//               <FaAngleDown
//                 className={`text-white ml-2 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""
//                   }`}
//               />
//             </button>
//             <div
//               className={`absolute min-w-60 overflow-hidden top-12 right-0 w-full bg-gradient-to-r from-[#fef2f0af] shadow-main bg-white rounded-[14px] border border-gray-border z-10 transform transition-all duration-300 ease-in-out ${isDropdownOpen
//                   ? "opacity-100 scale-100 translate-y-0"
//                   : "opacity-0 scale-95 -translate-y-10 pointer-events-none"
//                 }`}
//               style={{
//                 backgroundImage: `url(${skybackground})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//                 width: "auto",
//               }}
//             >
//               <div className="text-sm text-[#2D2624] space-y-3 p-2">
//                 {user ? (
//                   <div className="px-2 space-y-4 cursor-pointer lg:px-4">
//                     <span className="font-medium text-sub-color text-small">
//                       {user.firstName || "Guest"}
//                     </span>
//                     <p className="font-medium text-sub-color text-small">
//                       {user.email || "No email found"}
//                     </p>
//                   </div>
//                 ) : (
//                   <span className="px-2 font-medium lg:px-4 text-sub-color text-small">
//                     No data found here
//                   </span>
//                 )}
//                 <hr className="border-t border-dashed" />
//                 <div>
//                   <ul className="space-y-2">
//                     <li>
//                       <Link
//                         to="/"
//                         className="lg:px-4 px-2 py-2 cursor-pointer hover:bg-[#919eab14] rounded-large transition-all ease-in duration-150 block"
//                       >
//                         Home
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/dashboard/user/account/"
//                         className="lg:px-4 px-2 py-2 cursor-pointer hover:bg-[#919eab14] rounded-large transition-all ease-in duration-150 block"
//                       >
//                         Settings
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//                 <hr className="border-t border-dashed " />
//                 <div
//                   className="lg:px-4 px-2 py-2 hover:bg-[#919eab14] rounded-full transition-all ease-in duration-150 text-[#FF5D3A] font-bold tracking-wide cursor-pointer"
//                   onClick={handleSignOut}
//                 >
//                   Sign Out
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       {/* Header Section End  */}
//     </>
//   );
// };
// export default Dashboard_header;






// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import rocket from "../../assets/Images/rocket-1.png";
// import { FaAngleDown } from "react-icons/fa6";
// import skybackground from "../../assets/Images/blue-background.png";
// import axios from "axios";
// import { CgMenuRightAlt } from "react-icons/cg";

// const Dashboard_header = ({ toggleSidebarVisibility }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [error, setError] = useState(null);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const token = localStorage.getItem("authToken");
//       if (token) {
//         try {
//           setLoading(true);
//           const response = await axios.get(`${API_BASE_URL}/auth/user`, {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           if (response.status === 200) {
//             setUser(response.data);
//           } else {
//             setError("Failed to fetch user data");
//           }
//         } catch (err) {
//           setError("Error fetching user data");
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setLoading(false);
//       }
//     };
//     fetchUserData();
//   }, [API_BASE_URL]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   const handleSignOut = () => {
//     localStorage.removeItem("authToken");
//     navigate("/signin");
//   };

//   return (
//     <header className="sticky top-0 z-10 w-full backdrop-blur-[2px] bg-white/50">
//       <div className="flex items-center justify-between p-3 xl:justify-end">
//         <div className="block xl:hidden">
//           <button
//             className="z-50 rounded-full"
//             onClick={toggleSidebarVisibility}
//           >
//             <CgMenuRightAlt className="rounded-md cursor-pointer text-main-color size-8" />
//           </button>
//         </div>
//         <div className="relative" ref={dropdownRef}>
//           <button
//             className="px-6 py-2.5 rounded-full bg-main-color flex items-center relative focus:outline-none"
//             onClick={toggleDropdown}
//           >
//             <img
//               src={rocket}
//               alt="Rocket Icon"
//               className="absolute top-0 left-0 h-10 animate-rocket"
//             />
//             <p className="ml-6 font-bold text-white">
//               Balance:
//               <span className="underline underline-offset-1">100 Votes</span>
//             </p>
//             <FaAngleDown
//               className={`text-white ml-2 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""
//                 }`}
//             />
//           </button>
//           <div
//             className={`absolute min-w-60 overflow-hidden top-12 right-0 w-full bg-gradient-to-r from-[#fef2f0af] shadow-main bg-white rounded-[14px] border border-gray-border z-10 transform transition-all duration-300 ease-in-out ${isDropdownOpen
//               ? "opacity-100 scale-100 translate-y-0"
//               : "opacity-0 scale-95 -translate-y-10 pointer-events-none"
//               }`}
//             style={{
//               backgroundImage: `url(${skybackground})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//               width: "auto",
//             }}
//           >
//             <div className="text-sm text-[#2D2624] space-y-3 p-2">
//               {user ? (
//                 <div className="px-2 space-y-4 cursor-pointer lg:px-4">
//                   <span className="font-medium text-sub-color text-small">
//                     {user.firstName || "Guest"}
//                   </span>
//                   <p className="font-medium text-sub-color text-small">
//                     {user.email || "No email found"}
//                   </p>
//                 </div>
//               ) : (
//                 <span className="px-2 font-medium lg:px-4 text-sub-color text-small">
//                   No data found here
//                 </span>
//               )}
//               <hr className="border-t border-dashed" />
//               <div>
//                 <ul className="space-y-2">
//                   <li>
//                     <Link
//                       to="/"
//                       className="lg:px-4 px-2 py-2 cursor-pointer hover:bg-[#919eab14] rounded-large transition-all ease-in duration-150 block"
//                     >
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/dashboard/user/account/"
//                       className="lg:px-4 px-2 py-2 cursor-pointer hover:bg-[#919eab14] rounded-large transition-all ease-in duration-150 block"
//                     >
//                       Settings
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <hr className="border-t border-dashed " />
//               <div
//                 className="lg:px-4 px-2 py-2 hover:bg-[#919eab14] rounded-full transition-all ease-in duration-150 text-[#FF5D3A] font-bold tracking-wide cursor-pointer"
//                 onClick={handleSignOut}
//               >
//                 Sign Out
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Dashboard_header;




// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import rocket from "../../assets/Images/rocket-1.png";
// import { FaAngleDown } from "react-icons/fa6";
// import skybackground from "../../assets/Images/blue-background.png";
// import axios from "axios";
// import { CgMenuRightAlt } from "react-icons/cg";

// const Dashboard_header = ({ toggleSidebarVisibility }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [error, setError] = useState(null);
//   const [user, setUser] = useState(null);
//   const [voteBalance, setVoteBalance] = useState(0); //New state for vote balance
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   const dropdownRef = useRef(null);

//    useEffect(() => {
//         const fetchData = async () => {
//             const token = localStorage.getItem("authToken");
//             if (!token) {
//               console.error("Token missing or invalid.");
//                 setLoading(false);
//                 return;
//               }
//             try {
//               setLoading(true)
//               const response = await axios.get(
//                   `${API_BASE_URL}/auth/orders?timestamp=${new Date().getTime()}`,
//                   {
//                       headers: { Authorization: `Bearer ${token}` },
//                   }
//               );


//               if (!Array.isArray(response.data)) {
//                 console.error("Invalid order data format.");
//                 setLoading(false);
//                   return
//               }


//               const allOrders = response.data;
//                 let totalCompletedVotes = 0;
//               if(Array.isArray(allOrders)){
//                     allOrders.forEach(order => {
//                        const completedVotes = Number(order.completedVotes);
//                         if(!isNaN(completedVotes)){
//                            totalCompletedVotes += completedVotes
//                       }
//                   });
//               }

//                 let totalTokens = 0;
//               try {
//                  const paymentResponse = await axios.get(`${API_BASE_URL}/payment`, {
//                     headers: { Authorization: `Bearer ${token}` }
//                   });
//                    if (Array.isArray(paymentResponse.data)) {
//                           paymentResponse.data.forEach(transaction => {
//                             const tokens = Number(transaction.tokens)
//                             if(!isNaN(tokens)){
//                                 totalTokens += tokens;
//                            }
//                      });
//                   }
//                } catch (error) {
//                     console.error("Error fetching payment:", error)
//                 }
//                 console.log(totalTokens)
//                 console.log(totalCompletedVotes)
//               const calculatedBalance = (totalTokens - totalCompletedVotes);
//               setVoteBalance(calculatedBalance);



//               // Set user info
//                 try {
//                   const userResponse = await axios.get(`${API_BASE_URL}/auth/user`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                   });
//                    if (userResponse.status === 200) {
//                     setUser(userResponse.data);
//                   } else {
//                     setError("Failed to fetch user data");
//                   }
//                } catch (err) {
//                   setError("Error fetching user data");
//                 }

//           } catch (error) {
//               setError("Error fetching data")
//           }finally {
//                setLoading(false);
//           }

//         };
//         fetchData();
//     }, [API_BASE_URL]);


//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   const handleSignOut = () => {
//     localStorage.removeItem("authToken");
//     navigate("/signin");
//   };


//   return (
//     <header className="sticky top-0 z-10 w-full backdrop-blur-[2px] bg-white/50">
//       <div className="flex items-center justify-between p-3 xl:justify-end">
//         <div className="block xl:hidden">
//           <button
//             className="z-50 rounded-full"
//             onClick={toggleSidebarVisibility}
//           >
//             <CgMenuRightAlt className="rounded-md cursor-pointer text-main-color size-8" />
//           </button>
//         </div>
//         <div className="relative" ref={dropdownRef}>
//           <button
//             className="px-6 py-2.5 rounded-full bg-main-color flex items-center relative focus:outline-none"
//             onClick={toggleDropdown}
//           >
//             <img
//               src={rocket}
//               alt="Rocket Icon"
//               className="absolute top-0 left-0 h-10 animate-rocket"
//             />
//             <p className="ml-6 font-bold text-white">
//               Balance:
//               <span className="underline underline-offset-1">{voteBalance} Votes</span>
//             </p>
//             <FaAngleDown
//               className={`text-white ml-2 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""
//                 }`}
//             />
//           </button>
//           <div
//             className={`absolute min-w-60 overflow-hidden top-12 right-0 w-full bg-gradient-to-r from-[#fef2f0af] shadow-main bg-white rounded-[14px] border border-gray-border z-10 transform transition-all duration-300 ease-in-out ${isDropdownOpen
//               ? "opacity-100 scale-100 translate-y-0"
//               : "opacity-0 scale-95 -translate-y-10 pointer-events-none"
//               }`}
//             style={{
//               backgroundImage: `url(${skybackground})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//               width: "auto",
//             }}
//           >
//             <div className="text-sm text-[#2D2624] space-y-3 p-2">
//               {user ? (
//                 <div className="px-2 space-y-4 cursor-pointer lg:px-4">
//                   <span className="font-medium text-sub-color text-small">
//                     {user.firstName || "Guest"}
//                   </span>
//                   <p className="font-medium text-sub-color text-small">
//                     {user.email || "No email found"}
//                   </p>
//                 </div>
//               ) : (
//                 <span className="px-2 font-medium lg:px-4 text-sub-color text-small">
//                   No data found here
//                 </span>
//               )}
//               <hr className="border-t border-dashed" />
//               <div>
//                 <ul className="space-y-2">
//                   <li>
//                     <Link
//                       to="/"
//                       className="lg:px-4 px-2 py-2 cursor-pointer hover:bg-[#919eab14] rounded-large transition-all ease-in duration-150 block"
//                     >
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/dashboard/user/account/"
//                       className="lg:px-4 px-2 py-2 cursor-pointer hover:bg-[#919eab14] rounded-large transition-all ease-in duration-150 block"
//                     >
//                       Settings
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <hr className="border-t border-dashed " />
//               <div
//                 className="lg:px-4 px-2 py-2 hover:bg-[#919eab14] rounded-full transition-all ease-in duration-150 text-[#FF5D3A] font-bold tracking-wide cursor-pointer"
//                 onClick={handleSignOut}
//               >
//                 Sign Out
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Dashboard_header;




// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import rocket from "../../assets/Images/rocket-1.png";
// import { FaAngleDown } from "react-icons/fa6";
// import skybackground from "../../assets/Images/blue-background.png";
// import axios from "axios";
// import { CgMenuRightAlt } from "react-icons/cg";

// const DashboardHeader = ({ toggleSidebarVisibility }) => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [error, setError] = useState(null);
//     const [user, setUser] = useState(null);
//     const [voteBalance, setVoteBalance] = useState(0); //New state for vote balance
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     const dropdownRef = useRef(null);


//     useEffect(() => {
//         const fetchData = async () => {
//             const token = localStorage.getItem("authToken");
//              if (!token) {
//                  console.error("Token missing or invalid.");
//                 setLoading(false);
//                  return;
//             }
//              setLoading(true);
//             try {

//               const [ordersResponse, paymentResponse, userResponse] = await Promise.all([
//                     axios.get(
//                         `${API_BASE_URL}/auth/orders?timestamp=${new Date().getTime()}`,
//                         {
//                             headers: { Authorization: `Bearer ${token}` },
//                        }
//                     ),
//                     axios.get(`${API_BASE_URL}/payment`, {
//                       headers: { Authorization: `Bearer ${token}` }
//                   }),
//                     axios.get(`${API_BASE_URL}/auth/user`, {
//                         headers: { Authorization: `Bearer ${token}` },
//                     }),
//                  ])

//                 // Process order data
//                 if (!Array.isArray(ordersResponse.data)) {
//                    console.error("Invalid order data format.");
//                   return
//                 }

//                   const allOrders = ordersResponse.data;
//                  let totalCompletedVotes = 0;
//                  if(Array.isArray(allOrders)){
//                       allOrders.forEach(order => {
//                         const completedVotes = Number(order.completedVotes);
//                          if(!isNaN(completedVotes)){
//                              totalCompletedVotes += completedVotes
//                           }
//                        });
//                    }

//                 // Process payment data
//                let totalTokens = 0;
//                if (Array.isArray(paymentResponse.data)) {
//                      paymentResponse.data.forEach(transaction => {
//                           const tokens = Number(transaction.tokens)
//                            if(!isNaN(tokens)){
//                                 totalTokens += tokens;
//                              }
//                        });
//                   }



//                 // Set vote balance
//                 const calculatedBalance = (totalTokens - totalCompletedVotes);
//                 setVoteBalance(calculatedBalance);

//                   //Set user info
//                   if (userResponse.status === 200) {
//                        setUser(userResponse.data);
//                   } else {
//                      setError("Failed to fetch user data");
//                     }


//            } catch (error) {
//                 setError("Error fetching data");
//                  console.error("Error fetching data:", error);
//           } finally {
//              setLoading(false);
//           }
//         };

//         fetchData();
//     }, [API_BASE_URL]);


//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsDropdownOpen(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//     const handleSignOut = () => {
//         localStorage.removeItem("authToken");
//         navigate("/signin");
//     };


//     return (
//         <header className="sticky top-0 z-10 w-full backdrop-blur-[2px] bg-white/50">
//             <div className="flex items-center justify-between p-3 xl:justify-end">
//                 <div className="block xl:hidden">
//                     <button
//                         className="z-50 rounded-full"
//                         onClick={toggleSidebarVisibility}
//                     >
//                         <CgMenuRightAlt className="rounded-md cursor-pointer text-main-color size-8" />
//                     </button>
//                 </div>
//                 <div className="relative" ref={dropdownRef}>
//                     <button
//                         className="px-6 py-2.5 rounded-full bg-main-color flex items-center relative focus:outline-none"
//                         onClick={toggleDropdown}
//                     >
//                         <img
//                             src={rocket}
//                             alt="Rocket Icon"
//                             className="absolute top-0 left-0 h-10 animate-rocket"
//                         />
//                         <p className="ml-6 font-bold text-white">
//                             Balance:
//                             <span className="underline underline-offset-1">{voteBalance} Votes</span>
//                         </p>
//                         <FaAngleDown
//                             className={`text-white ml-2 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""
//                                 }`}
//                         />
//                     </button>
//                     <div
//                         className={`absolute min-w-60 overflow-hidden top-12 right-0 w-full bg-gradient-to-r from-[#fef2f0af] shadow-main bg-white rounded-[14px] border border-gray-border z-10 transform transition-all duration-300 ease-in-out ${isDropdownOpen
//                             ? "opacity-100 scale-100 translate-y-0"
//                             : "opacity-0 scale-95 -translate-y-10 pointer-events-none"
//                             }`}
//                         style={{
//                             backgroundImage: `url(${skybackground})`,
//                             backgroundSize: "cover",
//                             backgroundPosition: "center",
//                             backgroundRepeat: "no-repeat",
//                             width: "auto",
//                         }}
//                     >
//                         <div className="text-sm text-[#2D2624] space-y-3 p-2">
//                             {user ? (
//                                 <div className="px-2 space-y-4 cursor-pointer lg:px-4">
//                                     <span className="font-medium text-sub-color text-small">
//                                         {user.firstName || "Guest"}
//                                     </span>
//                                     <p className="font-medium text-sub-color text-small">
//                                         {user.email || "No email found"}
//                                     </p>
//                                 </div>
//                             ) : (
//                                 <span className="px-2 font-medium lg:px-4 text-sub-color text-small">
//                                     No data found here
//                                 </span>
//                             )}
//                             <hr className="border-t border-dashed" />
//                             <div>
//                                 <ul className="space-y-2">
//                                     <li>
//                                         <Link
//                                             to="/"
//                                             className="lg:px-4 px-2 py-2 cursor-pointer hover:bg-[#919eab14] rounded-large transition-all ease-in duration-150 block"
//                                         >
//                                             Home
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link
//                                             to="/dashboard/user/account/"
//                                             className="lg:px-4 px-2 py-2 cursor-pointer hover:bg-[#919eab14] rounded-large transition-all ease-in duration-150 block"
//                                         >
//                                             Settings
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <hr className="border-t border-dashed " />
//                             <div
//                                 className="lg:px-4 px-2 py-2 hover:bg-[#919eab14] rounded-full transition-all ease-in duration-150 text-[#FF5D3A] font-bold tracking-wide cursor-pointer"
//                                 onClick={handleSignOut}
//                             >
//                                 Sign Out
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };
// export default DashboardHeader;




// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import rocket from "../../assets/Images/rocket-1.png";
// import { FaAngleDown } from "react-icons/fa6";
// import skybackground from "../../assets/Images/blue-background.png";
// import axios from "axios";
// import { CgMenuRightAlt } from "react-icons/cg";

// const DashboardHeader = ({ toggleSidebarVisibility }) => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [error, setError] = useState(null);
//     const [user, setUser] = useState(null);
//     const [voteBalance, setVoteBalance] = useState(0);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     const dropdownRef = useRef(null);


//    useEffect(() => {
//         const fetchData = async () => {
//              const token = localStorage.getItem("authToken");
//             if (!token) {
//               console.error("Token missing or invalid.");
//                 setLoading(false);
//                 return;
//             }
//             setLoading(true);

//             try {
//               const [ordersResponse, paymentResponse, userResponse] = await Promise.all([
//                  axios.get(
//                       `${API_BASE_URL}/auth/orders?timestamp=${new Date().getTime()}`,
//                       {
//                          headers: { Authorization: `Bearer ${token}` },
//                         }
//                    ),
//                   axios.get(`${API_BASE_URL}/payment`, {
//                       headers: { Authorization: `Bearer ${token}` },
//                         }
//                     ),
//                   axios.get(`${API_BASE_URL}/auth/user`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                    }),
//               ])

//                let totalCompletedVotes = 0;
//                let totalTokens = 0;
//                 if(Array.isArray(ordersResponse?.data)){
//                     const allOrders = ordersResponse.data;
//                     if(Array.isArray(allOrders)){
//                      allOrders.forEach(order => {
//                             const completedVotes = Number(order.completedVotes);
//                             if(!isNaN(completedVotes)){
//                                totalCompletedVotes += completedVotes
//                              }
//                          });
//                     }
//                   }


//                 if (Array.isArray(paymentResponse?.data)) {
//                       paymentResponse.data.forEach(transaction => {
//                           const tokens = Number(transaction.tokens)
//                             if(!isNaN(tokens)){
//                                totalTokens += tokens;
//                              }
//                        });
//                   }
                 
//                 // Set vote balance
//                 const calculatedBalance = (totalTokens - totalCompletedVotes);
//                    setVoteBalance(calculatedBalance);

//                  console.log("Total Tokens:", totalTokens)
//                  console.log("Total Completed Votes:", totalCompletedVotes)
//                 console.log("Calculated Balance:", calculatedBalance)


//                   //Set user info
//                   if (userResponse.status === 200) {
//                     setUser(userResponse.data);
//                     console.log("user data:", userResponse.data);
//                   } else {
//                     setError("Failed to fetch user data");
//                  }


//             } catch (error) {
//                 setError("Error fetching data");
//                  console.error("Error fetching data:", error);
//                  setVoteBalance(0);
//           } finally {
//             setLoading(false);
//           }
//         };
//         fetchData();


//     }, [API_BASE_URL]);


//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsDropdownOpen(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//     const handleSignOut = () => {
//         localStorage.removeItem("authToken");
//         navigate("/signin");
//     };


//     return (
//         <header className="sticky top-0 z-10 w-full backdrop-blur-[2px] bg-white/50">
//             <div className="flex items-center justify-between p-3 xl:justify-end">
//                 <div className="block xl:hidden">
//                     <button
//                         className="z-50 rounded-full"
//                         onClick={toggleSidebarVisibility}
//                     >
//                         <CgMenuRightAlt className="rounded-md cursor-pointer text-main-color size-8" />
//                     </button>
//                 </div>
//                 <div className="relative" ref={dropdownRef}>
//                     <button
//                         className="px-6 py-2.5 rounded-full bg-main-color flex items-center relative focus:outline-none"
//                         onClick={toggleDropdown}
//                     >
//                         <img
//                             src={rocket}
//                             alt="Rocket Icon"
//                             className="absolute top-0 left-0 h-10 animate-rocket"
//                         />
//                         <p className="ml-6 font-bold text-white">
//                             Balance:
//                             <span className="underline underline-offset-1">{voteBalance} Votes</span>
//                         </p>
//                         <FaAngleDown
//                             className={`text-white ml-2 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""
//                                 }`}
//                         />
//                     </button>
//                     <div
//                         className={`absolute min-w-60 overflow-hidden top-12 right-0 w-full bg-gradient-to-r from-[#fef2f0af] shadow-main bg-white rounded-[14px] border border-gray-border z-10 transform transition-all duration-300 ease-in-out ${isDropdownOpen
//                             ? "opacity-100 scale-100 translate-y-0"
//                             : "opacity-0 scale-95 -translate-y-10 pointer-events-none"
//                             }`}
//                         style={{
//                             backgroundImage: `url(${skybackground})`,
//                             backgroundSize: "cover",
//                             backgroundPosition: "center",
//                             backgroundRepeat: "no-repeat",
//                             width: "auto",
//                         }}
//                     >
//                         <div className="text-sm text-[#2D2624] space-y-3 p-2">
//                             {user ? (
//                                 <div className="px-2 space-y-4 cursor-pointer lg:px-4">
//                                     <span className="font-medium text-sub-color text-small">
//                                         {user.firstName || "Guest"}
//                                     </span>
//                                     <p className="font-medium text-sub-color text-small">
//                                         {user.email || "No email found"}
//                                     </p>
//                                 </div>
//                             ) : (
//                                 <span className="px-2 font-medium lg:px-4 text-sub-color text-small">
//                                     No data found here
//                                 </span>
//                             )}
//                             <hr className="border-t border-dashed" />
//                             <div>
//                                 <ul className="space-y-2">
//                                     <li>
//                                         <Link
//                                             to="/"
//                                             className="lg:px-4 px-2 py-2 cursor-pointer hover:bg-[#919eab14] rounded-large transition-all ease-in duration-150 block"
//                                         >
//                                             Home
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link
//                                             to="/dashboard/user/account/"
//                                             className="lg:px-4 px-2 py-2 cursor-pointer hover:bg-[#919eab14] rounded-large transition-all ease-in duration-150 block"
//                                         >
//                                             Settings
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <hr className="border-t border-dashed " />
//                             <div
//                                 className="lg:px-4 px-2 py-2 hover:bg-[#919eab14] rounded-full transition-all ease-in duration-150 text-[#FF5D3A] font-bold tracking-wide cursor-pointer"
//                                 onClick={handleSignOut}
//                             >
//                                 Sign Out
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };
// export default DashboardHeader;



// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import rocket from "../../assets/Images/rocket-1.png";
// import { FaAngleDown } from "react-icons/fa6";
// import skybackground from "../../assets/Images/blue-background.png";
// import axios from "axios";
// import { CgMenuRightAlt } from "react-icons/cg";

// const DashboardHeader = ({ toggleSidebarVisibility }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [error, setError] = useState(null);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const token = localStorage.getItem("authToken");
//       if (token) {
//         try {
//           setLoading(true);
//           const response = await axios.get(`${API_BASE_URL}/auth/user`, {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           if (response.status === 200) {
//             setUser(response.data);
//           } else {
//             setError("Failed to fetch user data");
//           }
//         } catch (err) {
//           setError("Error fetching user data");
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setLoading(false);
//       }
//     };
//     fetchUserData();
//   }, [API_BASE_URL]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   const handleSignOut = () => {
//     localStorage.removeItem("authToken");
//     navigate("/signin");
//   };

//   return (
//     <header className="sticky top-0 z-10 w-full backdrop-blur-[2px] bg-white/50">
//       <div className="flex items-center justify-between p-3 xl:justify-end">
//         <div className="block xl:hidden">
//           <button
//             className="z-50 rounded-full"
//             onClick={toggleSidebarVisibility}
//           >
//             <CgMenuRightAlt className="rounded-md cursor-pointer text-main-color size-8" />
//           </button>
//         </div>
//         <div className="relative" ref={dropdownRef}>
//           <button
//             className="px-6 py-2.5 rounded-full bg-main-color flex items-center relative focus:outline-none"
//             onClick={toggleDropdown}
//           >
//             <img
//               src={rocket}
//               alt="Rocket Icon"
//               className="absolute top-0 left-0 h-10 animate-rocket"
//             />
//             <p className="ml-6 font-bold text-white">
//               Balance:
//               <span className="underline underline-offset-1">100 Votes</span>
//             </p>
//             <FaAngleDown
//               className={`text-white ml-2 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""
//                 }`}
//             />
//           </button>
//           <div
//             className={`absolute min-w-60 overflow-hidden top-12 right-0 w-full bg-gradient-to-r from-[#fef2f0af] shadow-main bg-white rounded-[14px] border border-gray-border z-10 transform transition-all duration-300 ease-in-out ${isDropdownOpen
//               ? "opacity-100 scale-100 translate-y-0"
//               : "opacity-0 scale-95 -translate-y-10 pointer-events-none"
//               }`}
//             style={{
//               backgroundImage: `url(${skybackground})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//               width: "auto",
//             }}
//           >
//             <div className="text-sm text-[#2D2624] space-y-3 p-2">
//               {user ? (
//                 <div className="px-2 space-y-4 cursor-pointer lg:px-4">
//                   <span className="font-medium text-sub-color text-small">
//                     {user.firstName || "Guest"}
//                   </span>
//                   <p className="font-medium text-sub-color text-small">
//                     {user.email || "No email found"}
//                   </p>
//                 </div>
//               ) : (
//                 <span className="px-2 font-medium lg:px-4 text-sub-color text-small">
//                   No data found here
//                 </span>
//               )}
//               <hr className="border-t border-dashed" />
//               <div>
//                 <ul className="space-y-2">
//                   <li>
//                     <Link
//                       to="/"
//                       className="lg:px-4 px-2 py-2 cursor-pointer hover:bg-[#919eab14] rounded-large transition-all ease-in duration-150 block"
//                     >
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/dashboard/user/account/"
//                       className="lg:px-4 px-2 py-2 cursor-pointer hover:bg-[#919eab14] rounded-large transition-all ease-in duration-150 block"
//                     >
//                       Settings
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <hr className="border-t border-dashed " />
//               <div
//                 className="lg:px-4 px-2 py-2 hover:bg-[#919eab14] rounded-full transition-all ease-in duration-150 text-[#FF5D3A] font-bold tracking-wide cursor-pointer"
//                 onClick={handleSignOut}
//               >
//                 Sign Out
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default DashboardHeader;


// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import rocket from "../../assets/Images/rocket-1.png";
// import { FaAngleDown } from "react-icons/fa6";
// import skybackground from "../../assets/Images/blue-background.png";
// import axios from "axios";
// import { CgMenuRightAlt } from "react-icons/cg";

// const DashboardHeader = ({ toggleSidebarVisibility }) => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [error, setError] = useState(null);
//     const [user, setUser] = useState(null);
//     const [votesBalance, setVotesBalance] = useState(0);
//     const [loading, setLoading] = useState(true);

//     const navigate = useNavigate();
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     const dropdownRef = useRef(null);

//     useEffect(() => {
//         const fetchUserDataAndBalances = async () => {
//             const token = localStorage.getItem("authToken");
//             if (!token) {
//                 setLoading(false);
//                 return;
//             }
//             try {
//                 setLoading(true);
//                 // Fetch user data
//                 const userResponse = await axios.get(`${API_BASE_URL}/auth/user`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });

//                 if (userResponse.status !== 200) {
//                     setError("Failed to fetch user data");
//                     return;
//                 }
//                 setUser(userResponse.data);

//                 // Fetch completed votes from /auth/orders
//                 const ordersResponse = await axios.get(`${API_BASE_URL}/auth/orders`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });

//                 let completedTotalVotes = 0;
//                  if (ordersResponse.status === 200 && ordersResponse.data) {
//                    for (const order of ordersResponse.data) {
//                      completedTotalVotes += parseInt(order.completedVotes || 0, 10)
//                    }
//                 }

//                 // Fetch tokens from /payment
//                 const paymentsResponse = await axios.get(`${API_BASE_URL}/payment`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });

//                 let tokensTotal = 0;
//                 if (paymentsResponse.status === 200 && paymentsResponse.data && paymentsResponse.data.tokens) {
//                     tokensTotal = paymentsResponse.data.tokens
//                 }

//                 // Calculate VotesBalance
//                 const calculatedBalance = tokensTotal - completedTotalVotes;
//                 setVotesBalance(calculatedBalance >= 0 ? calculatedBalance : 0);

//             } catch (err) {
//                 console.error("Error fetching data:", err);
//                 setError("Error fetching user data and balances");
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchUserDataAndBalances();
//     }, [API_BASE_URL]);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsDropdownOpen(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//     const handleSignOut = () => {
//         localStorage.removeItem("authToken");
//         navigate("/signin");
//     };


//     return (
//         <header className="sticky top-0 z-10 w-full backdrop-blur-[2px] bg-white/50">
//             <div className="flex items-center justify-between p-3 xl:justify-end">
//                 <div className="block xl:hidden">
//                     <button
//                         className="z-50 rounded-full"
//                         onClick={toggleSidebarVisibility}
//                     >
//                         <CgMenuRightAlt className="rounded-md cursor-pointer text-main-color size-8" />
//                     </button>
//                 </div>
//                 <div className="relative" ref={dropdownRef}>
//                     <button
//                         className="px-6 py-2.5 rounded-full bg-main-color flex items-center relative focus:outline-none"
//                         onClick={toggleDropdown}
//                     >
//                         <img
//                             src={rocket}
//                             alt="Rocket Icon"
//                             className="absolute top-0 left-0 h-10 animate-rocket"
//                         />
//                         <p className="ml-6 font-bold text-white">
//                             Balance:
//                             <span className="underline underline-offset-1">
//                                 {loading ? "Loading..." : `${votesBalance} Votes`}
//                             </span>
//                         </p>
//                         <FaAngleDown
//                             className={`text-white ml-2 transform transition-transform ${
//                                 isDropdownOpen ? "rotate-180" : ""
//                             }`}
//                         />
//                     </button>
//                     <div
//                         className={`absolute min-w-60 overflow-hidden top-12 right-0 w-full bg-gradient-to-r from-[#fef2f0af] shadow-main bg-white rounded-[14px] border border-gray-border z-10 transform transition-all duration-300 ease-in-out ${
//                             isDropdownOpen
//                                 ? "opacity-100 scale-100 translate-y-0"
//                                 : "opacity-0 scale-95 -translate-y-10 pointer-events-none"
//                         }`}
//                         style={{
//                             backgroundImage: `url(${skybackground})`,
//                             backgroundSize: "cover",
//                             backgroundPosition: "center",
//                             backgroundRepeat: "no-repeat",
//                             width: "auto",
//                         }}
//                     >
//                         <div className="text-sm text-[#2D2624] space-y-3 p-2">
//                             {user ? (
//                                 <div className="px-2 space-y-4 cursor-pointer lg:px-4">
//                                     <span className="font-medium text-sub-color text-small">
//                                         {user.firstName || "Guest"}
//                                     </span>
//                                     <p className="font-medium text-sub-color text-small">
//                                         {user.email || "No email found"}
//                                     </p>
//                                 </div>
//                             ) : (
//                                 <span className="px-2 font-medium lg:px-4 text-sub-color text-small">
//                                     No data found here
//                                 </span>
//                             )}
//                             <hr className="border-t border-dashed" />
//                             <div>
//                                 <ul className="space-y-2">
//                                     <li>
//                                         <Link
//                                             to="/"
//                                             className="lg:px-4 px-2 py-2 cursor-pointer hover:bg-[#919eab14] rounded-large transition-all ease-in duration-150 block"
//                                         >
//                                             Home
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link
//                                             to="/dashboard/user/account/"
//                                             className="lg:px-4 px-2 py-2 cursor-pointer hover:bg-[#919eab14] rounded-large transition-all ease-in duration-150 block"
//                                         >
//                                             Settings
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <hr className="border-t border-dashed " />
//                             <div
//                                 className="lg:px-4 px-2 py-2 hover:bg-[#919eab14] rounded-full transition-all ease-in duration-150 text-[#FF5D3A] font-bold tracking-wide cursor-pointer"
//                                 onClick={handleSignOut}
//                             >
//                                 Sign Out
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default DashboardHeader;


import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import rocket from "../../assets/Images/rocket-1.png";
import { FaAngleDown } from "react-icons/fa6";
import skybackground from "../../assets/Images/blue-background.png";
import axios from "axios";
import { CgMenuRightAlt } from "react-icons/cg";

const DashboardHeader = ({ toggleSidebarVisibility }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [votesBalance, setVotesBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchUserDataAndBalances = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const headers = { Authorization: `Bearer ${token}` };

        // Fetch User Data
        const userResponse = await axios.get(`${API_BASE_URL}/auth/user`, {
          headers,
        });
        if (userResponse.status !== 200) {
          console.error("Failed to fetch user data");
          return;
        }
        setUser(userResponse.data);

        // Fetch Orders
        const ordersResponse = await axios.get(
          `${API_BASE_URL}/auth/orders`,
          { headers }
        );
        let completedTotalVotes = 0;
        if (ordersResponse.status === 200 && ordersResponse.data) {
          for (const order of ordersResponse.data) {
            completedTotalVotes += parseInt(order.completedVotes || 0, 10);
          }
        }

        // Fetch Payments
        const paymentsResponse = await axios.get(`${API_BASE_URL}/payment`, {
          headers,
        });
        let tokensTotal = 0;
        if (paymentsResponse.status === 200 && paymentsResponse.data) {
          tokensTotal = paymentsResponse.data.tokens || 0;
        }

        // Calculate VotesBalance
        const calculatedBalance = tokensTotal - completedTotalVotes;
        setVotesBalance(calculatedBalance >= 0 ? calculatedBalance : 0);
      } catch (error) {
        // Check if the error is a 404, if so, set the balance to 0
        if (error.response && error.response.status === 404) {
          setVotesBalance(0);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserDataAndBalances();
  }, [API_BASE_URL]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    navigate("/signin");
  };

  return (
    <header className="sticky top-0 z-10 w-full backdrop-blur-[2px] bg-white/50">
      <div className="flex items-center justify-between p-3 xl:justify-end">
        <div className="block xl:hidden">
          <button
            className="z-50 rounded-full"
            onClick={toggleSidebarVisibility}
          >
            <CgMenuRightAlt className="rounded-md cursor-pointer text-main-color size-8" />
          </button>
        </div>
        <div className="relative" ref={dropdownRef}>
          <button
            className="px-6 py-2.5 rounded-full bg-main-color flex items-center relative focus:outline-none"
            onClick={toggleDropdown}
          >
            <img
              src={rocket}
              alt="Rocket Icon"
              className="absolute top-0 left-0 h-10 animate-rocket"
            />
            <p className="ml-6 font-bold text-white">
              Balance:
              <span className="underline underline-offset-1">
                {loading ? "Loading..." : `${votesBalance} Votes`}
              </span>
            </p>
            <FaAngleDown
              className={`text-white ml-2 transform transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`absolute min-w-60 overflow-hidden top-12 right-0 w-full bg-gradient-to-r from-[#fef2f0af] shadow-main bg-white rounded-[14px] border border-gray-border z-10 transform transition-all duration-300 ease-in-out ${
              isDropdownOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-10 pointer-events-none"
            }`}
            style={{
              backgroundImage: `url(${skybackground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "auto",
            }}
          >
            <div className="text-sm text-[#2D2624] space-y-3 p-2">
              {user ? (
                <div className="px-2 space-y-4 cursor-pointer lg:px-4">
                  <span className="font-medium text-sub-color text-small">
                    {user.firstName || "Guest"}
                  </span>
                  <p className="font-medium text-sub-color text-small">
                    {user.email || "No email found"}
                  </p>
                </div>
              ) : (
                <span className="px-2 font-medium lg:px-4 text-sub-color text-small">
                  No data found here
                </span>
              )}
              <hr className="border-t border-dashed" />
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/"
                      className="lg:px-4 px-2 py-2 cursor-pointer hover:bg-[#919eab14] rounded-large transition-all ease-in duration-150 block"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/user/account/"
                      className="lg:px-4 px-2 py-2 cursor-pointer hover:bg-[#919eab14] rounded-large transition-all ease-in duration-150 block"
                    >
                      Settings
                    </Link>
                  </li>
                </ul>
              </div>
              <hr className="border-t border-dashed " />
              <div
                className="lg:px-4 px-2 py-2 hover:bg-[#919eab14] rounded-full transition-all ease-in duration-150 text-[#FF5D3A] font-bold tracking-wide cursor-pointer"
                onClick={handleSignOut}
              >
                Sign Out
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;