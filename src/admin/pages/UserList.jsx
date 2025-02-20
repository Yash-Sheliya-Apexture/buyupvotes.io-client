// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Use API base URL from environment variable
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       setError(null); // Reset error on new fetch
//       try {
//         const token = localStorage.getItem("authToken");
//         if (!token) {
//           setError("Token missing or invalid.");
//           setLoading(false);
//           return;
//         }

//         const response = await axios.get(
//           `${API_BASE_URL}/admin/users`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (response.status !== 200) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = response.data;

//         if (Array.isArray(data)) {
//           setUsers(data);
//         } else {
//           console.error("Unexpected data format:", data);
//           setError("Unexpected data format from the server.");
//         }
//       } catch (err) {
//         console.error("Error fetching users:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-48">
//         <span className="ml-2 text-gray-700">Loading users...</span>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-red-500">Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h4 className="text-2xl font-semibold mb-4">User List</h4>
//       {users.length > 0 ? (
//         <ul className="list-none p-0">
//           {users.map((user) => (
//             <li key={user._id} className="mb-2 p-3 bg-gray-100 rounded-md shadow-sm">
//               <p className="font-medium">{user.firstName} {user.lastName}</p>
//               <p className="text-gray-600">Email: {user.email}</p>
//               <p className="text-gray-600">Role: {user.role}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No users found.</p>
//       )}
//     </div>
//   );
// };

// export default UserList;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import axios from 'axios';
// import { FiEye } from 'react-icons/fi'; // Import an eye icon
// import Skeleton from "react-loading-skeleton";

// const UserList = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate(); // Initialize useNavigate

//     // Use API base URL from environment variable
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     useEffect(() => {
//         const fetchUsers = async () => {
//             setLoading(true);
//             setError(null); // Reset error on new fetch
//             try {
//                 const token = localStorage.getItem("authToken");
//                 if (!token) {
//                     setError("Token missing or invalid.");
//                     setLoading(false);
//                     return;
//                 }

//                 const response = await axios.get(
//                     `${API_BASE_URL}/admin/users`,
//                     {
//                         headers: {
//                             Authorization: `Bearer ${token}`,
//                         },
//                     }
//                 );

//                 if (response.status !== 200) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }

//                 const data = response.data;

//                 if (Array.isArray(data)) {
//                     setUsers(data);
//                 } else {
//                     console.error("Unexpected data format:", data);
//                     setError("Unexpected data format from the server.");
//                 }
//             } catch (err) {
//                 console.error("Error fetching users:", err);
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUsers();
//     }, []);

//     const handleViewDetails = (userId) => {
//         // Use navigate to go to the detail page
//         navigate(`/admin/users/${userId}`);
//     };

//     if (loading) {
//         return (
//            <div className="flex justify-center items-center h-48">
//                 <span className="ml-2 text-gray-700">Loading users...</span>
//             </div>
//         );
//     }

//     if (error) {
//         return <div className="text-red-500">Error: {error}</div>;
//     }

//     return (
//         <div>
//             <h4 className="text-2xl font-semibold mb-4">User List</h4>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
//                     <thead>
//                         <tr className="bg-gray-50">
//                             <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700">Name</th>
//                             <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700">Email</th>
//                             <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700">Role</th>
//                             <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user) => (
//                             <tr key={user._id} className="hover:bg-gray-50 transition-colors duration-200">
//                                 <td className="py-3 px-4 border-b text-sm text-gray-700">{user.firstName} {user.lastName}</td>
//                                 <td className="py-3 px-4 border-b text-sm text-gray-700">{user.email}</td>
//                                 <td className="py-3 px-4 border-b text-sm text-gray-700">{user.role}</td>
//                                 <td className="py-3 px-4 border-b text-sm text-gray-700">
//                                     <button
//                                         onClick={() => handleViewDetails(user._id)}
//                                         className="text-blue-500 hover:text-blue-700 transition-colors duration-200 focus:outline-none"
//                                         aria-label="View Details"
//                                     >
//                                         <FiEye className="h-5 w-5" />
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             {users.length === 0 && !loading && !error && (
//                 <p className="mt-4 text-gray-600">No users found.</p>
//             )}
//         </div>
//     );
// };

// export default UserList;

// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import {
//   FiEye,
//   FiSearch,
//   FiFilter,
//   FiChevronDown,
//   FiX,
// } from "react-icons/fi";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [sortLabel, setSortLabel] = useState("Sort");

//   const navigate = useNavigate();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const token = localStorage.getItem("authToken");
//         if (!token) {
//           setError("Token missing or invalid.");
//           setLoading(false);
//           return;
//         }

//         const response = await axios.get(`${API_BASE_URL}/admin/users`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (response.status !== 200) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = response.data;
//         if (Array.isArray(data)) {
//           setUsers(data);
//         } else {
//           console.error("Unexpected data format:", data);
//           setError("Unexpected data format from the server.");
//         }
//       } catch (err) {
//         console.error("Error fetching users:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, [API_BASE_URL]);

//   const handleViewDetails = (userId) => {
//     navigate(`/admin/users/${userId}`);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSortChange = (order, label) => {
//     setSortOrder(order);
//     setSortLabel(label);
//     setIsDropdownOpen(false);
//   };

//   const handleClearSort = () => {
//     setSortOrder("");
//     setSortLabel("Sort");
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

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
//   }, [dropdownRef]);

//   const sortedUsers = React.useMemo(() => {
//     //Apply sort to users array
//     let sortUsers = [...users];
//     if (sortOrder === "admin") {
//       sortUsers = sortUsers.filter((user) => user.role === "admin");
//     } else if (sortOrder === "user") {
//       sortUsers = sortUsers.filter((user) => user.role === "user");
//     }

//     const sortFn = (a, b) => {
//       const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
//       const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();

//       if (sortOrder === "AtoZ") {
//         return nameA.localeCompare(nameB);
//       } else if (sortOrder === "ZtoA") {
//         return nameB.localeCompare(nameA);
//       }
//       return 0; // No sorting if no sortOrder is selected
//     };

//     return sortUsers.sort(sortFn);
//   }, [users, sortOrder]);

//   const filteredUsers = React.useMemo(() => {
//     const filterFn = (user) => {
//       const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
//       return (
//         fullName.includes(searchTerm.toLowerCase()) ||
//         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.role.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     };

//     return sortedUsers.filter(filterFn);
//   }, [sortedUsers, searchTerm]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-48">
//         <span className="ml-2 text-gray-700">Loading users...</span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-red-500 container mx-auto p-4">
//         Error: {error}
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
//             User List
//           </h1>
//           <div className="flex items-center gap-4">
//             {/* Custom Filter Dropdown */}
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 type="button"
//                 onClick={toggleDropdown}
//                 className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition duration-150"
//               >
//                 <FiFilter className="mr-2 w-5 h-5" />
//                 {sortLabel}
//                 {sortOrder ? (
//                   <FiX
//                     className="ml-2 w-5 h-5 cursor-pointer"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleClearSort();
//                     }}
//                   />
//                 ) : (
//                   <FiChevronDown
//                     className={`ml-2 w-5 h-5 transition-transform duration-200 ${
//                       isDropdownOpen ? "transform rotate-180" : ""
//                     }`}
//                   />
//                 )}
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
//                   <div className="p-2">
//                     <button
//                       onClick={() => handleSortChange("admin", "Admin")}
//                       className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
//                     >
//                       Admin
//                     </button>
//                     <button
//                       onClick={() => handleSortChange("user", "User")}
//                       className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
//                     >
//                       User
//                     </button>
//                     <button
//                       onClick={() => handleSortChange("AtoZ", "A to Z")}
//                       className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
//                     >
//                       A to Z
//                     </button>
//                     <button
//                       onClick={() => handleSortChange("ZtoA", "Z to A")}
//                       className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
//                     >
//                       Z to A
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Search Input */}
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FiSearch className="w-5 h-5 text-gray-400" />
//               </div>
//               <input
//                 type="search"
//                 placeholder="Search users..."
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Users Table */}
//         <div className="bg-white shadow-lg border border-gray-200 rounded-xl overflow-hidden">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-200">
//               <tr>
//                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                   Name
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                   Email
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                   Role
//                 </th>
//                 <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-100">
//               {filteredUsers.map((user) => (
//                 <tr key={user._id} className="hover:bg-gray-50 transition-colors">
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
//                     {user.firstName} {user.lastName}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
//                     {user.email}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm">
//                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
//                       user.role === 'admin' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
//                     }`}>
//                       {user.role}
//                     </span>
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-center text-sm">
//                     <button
//                       onClick={() => handleViewDetails(user._id)}
//                       className="inline-flex items-center px-3 py-2 border border-indigo-500 text-indigo-500 rounded-md hover:bg-indigo-500 hover:text-white transition duration-150 focus:outline-none"
//                     >
//                       <FiEye className="mr-1 w-5 h-5" />
//                       View
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {filteredUsers.length === 0 && (
//           <p className="mt-6 text-center text-gray-600">
//             No users found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserList;

// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import {
//   FiEye,
//   FiSearch,
//   FiFilter,
//   FiChevronDown,
//   FiX,
// } from "react-icons/fi";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [sortLabel, setSortLabel] = useState("Sort");

//   const navigate = useNavigate();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const token = localStorage.getItem("authToken");
//         if (!token) {
//           setError("Token missing or invalid.");
//           setLoading(false);
//           return;
//         }

//         const response = await axios.get(`${API_BASE_URL}/admin/users`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (response.status !== 200) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = response.data;
//         if (Array.isArray(data)) {
//           setUsers(data);
//         } else {
//           console.error("Unexpected data format:", data);
//           setError("Unexpected data format from the server.");
//         }
//       } catch (err) {
//         console.error("Error fetching users:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, [API_BASE_URL]);

//   const handleViewDetails = (userId) => {
//     navigate(`/admin/users/${userId}`);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSortChange = (order, label) => {
//     setSortOrder(order);
//     setSortLabel(label);
//     setIsDropdownOpen(false);
//   };

//   const handleClearSort = () => {
//     setSortOrder("");
//     setSortLabel("Sort");
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

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
//   }, [dropdownRef]);

//   const sortedUsers = React.useMemo(() => {
//     //Apply sort to users array
//     let sortUsers = [...users];
//     if (sortOrder === "admin") {
//       sortUsers = sortUsers.filter((user) => user.role === "admin");
//     } else if (sortOrder === "user") {
//       sortUsers = sortUsers.filter((user) => user.role === "user");
//     }

//     const sortFn = (a, b) => {
//       const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
//       const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();

//       if (sortOrder === "AtoZ") {
//         return nameA.localeCompare(nameB);
//       } else if (sortOrder === "ZtoA") {
//         return nameB.localeCompare(nameA);
//       }
//       return 0; // No sorting if no sortOrder is selected
//     };

//     return sortUsers.sort(sortFn);
//   }, [users, sortOrder]);

//   const filteredUsers = React.useMemo(() => {
//     const filterFn = (user) => {
//       const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
//       return (
//         fullName.includes(searchTerm.toLowerCase()) ||
//         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.role.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     };

//     return sortedUsers.filter(filterFn);
//   }, [sortedUsers, searchTerm]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-48">
//         <span className="ml-2 text-gray-700">Loading users...</span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-red-500 container mx-auto p-4">
//         Error: {error}
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
//             User List
//           </h1>
//           <div className="flex items-center gap-4">
//             {/* Custom Filter Dropdown */}
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 type="button"
//                 onClick={toggleDropdown}
//                 className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition duration-150"
//               >
//                 <FiFilter className="mr-2 w-5 h-5" />
//                 {sortLabel}
//                 {sortOrder ? (
//                   <FiX
//                     className="ml-2 w-5 h-5 cursor-pointer"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleClearSort();
//                     }}
//                   />
//                 ) : (
//                   <FiChevronDown
//                     className={`ml-2 w-5 h-5 transition-transform duration-200 ${
//                       isDropdownOpen ? "transform rotate-180" : ""
//                     }`}
//                   />
//                 )}
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
//                   <div className="p-2">
//                     <button
//                       onClick={() => handleSortChange("admin", "Admin")}
//                       className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
//                     >
//                       Admin
//                     </button>
//                     <button
//                       onClick={() => handleSortChange("user", "User")}
//                       className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
//                     >
//                       User
//                     </button>
//                     <button
//                       onClick={() => handleSortChange("AtoZ", "A to Z")}
//                       className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
//                     >
//                       A to Z
//                     </button>
//                     <button
//                       onClick={() => handleSortChange("ZtoA", "Z to A")}
//                       className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
//                     >
//                       Z to A
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Search Input */}
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FiSearch className="w-5 h-5 text-gray-400" />
//               </div>
//               <input
//                 type="search"
//                 placeholder="Search users..."
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Users Table */}
//         <div className="bg-white shadow-lg border border-gray-200 rounded-xl overflow-hidden">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-200">
//               <tr>
//                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                   Name
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                   Email
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                   Role
//                 </th>
//                 <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-100">
//               {filteredUsers.map((user) => (
//                 <tr key={user._id} className="hover:bg-gray-50 transition-colors">
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
//                     {user.firstName} {user.lastName}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
//                     {user.email}
//                   </td>
//                  <td className="px-4 py-2 whitespace-nowrap text-sm">
//                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
//                       user.role === 'admin' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
//                     }`}>
//                       {user.role}
//                     </span>
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-center text-sm">
//                     <button
//                       onClick={() => handleViewDetails(user._id)}
//                       className="inline-flex items-center px-3 py-2 border border-indigo-500 text-indigo-500 rounded-md hover:bg-indigo-500 hover:text-white transition duration-150 focus:outline-none"
//                     >
//                       <FiEye className="mr-1 w-5 h-5" />
//                       View
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {filteredUsers.length === 0 && (
//           <p className="mt-6 text-center text-gray-600">
//             No users found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserList;

// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import {
//   FiEye,
//   FiSearch,
//   FiFilter,
//   FiChevronDown,
//   FiX,
// } from "react-icons/fi";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [sortLabel, setSortLabel] = useState("Sort");

//   const navigate = useNavigate();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const token = localStorage.getItem("authToken");
//         if (!token) {
//           setError("Token missing or invalid.");
//           setLoading(false);
//           return;
//         }

//         const response = await axios.get(`${API_BASE_URL}/admin/users`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (response.status !== 200) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = response.data;
//         if (Array.isArray(data)) {
//           setUsers(data);
//         } else {
//           console.error("Unexpected data format:", data);
//           setError("Unexpected data format from the server.");
//         }
//       } catch (err) {
//         console.error("Error fetching users:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, [API_BASE_URL]);

//   const handleViewDetails = (userId) => {
//     navigate(`/admin/users/${userId}`);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSortChange = (order, label) => {
//     setSortOrder(order);
//     setSortLabel(label);
//     setIsDropdownOpen(false);
//   };

//   const handleClearSort = () => {
//     setSortOrder("");
//     setSortLabel("Sort");
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

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
//   }, [dropdownRef]);

//   const sortedUsers = React.useMemo(() => {
//     //Apply sort to users array
//     let sortUsers = [...users];
//     if (sortOrder === "admin") {
//       sortUsers = sortUsers.filter((user) => user.role === "admin");
//     } else if (sortOrder === "user") {
//       sortUsers = sortUsers.filter((user) => user.role === "user");
//     }

//     const sortFn = (a, b) => {
//       const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
//       const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();

//       if (sortOrder === "AtoZ") {
//         return nameA.localeCompare(nameB);
//       } else if (sortOrder === "ZtoA") {
//         return nameB.localeCompare(nameA);
//       }
//       return 0; // No sorting if no sortOrder is selected
//     };

//     return sortUsers.sort(sortFn);
//   }, [users, sortOrder]);

//   const filteredUsers = React.useMemo(() => {
//     const filterFn = (user) => {
//       const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
//       return (
//         fullName.includes(searchTerm.toLowerCase()) ||
//         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.role.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     };

//     return sortedUsers.filter(filterFn);
//   }, [sortedUsers, searchTerm]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-48">
//         <span className="ml-2 text-gray-700">Loading users...</span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-red-500 container mx-auto p-4">
//         Error: {error}
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
//             User List
//           </h1>
//           <div className="flex items-center gap-4">
//             {/* Custom Filter Dropdown */}
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 type="button"
//                 onClick={toggleDropdown}
//                 className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition duration-150"
//               >
//                 <FiFilter className="mr-2 w-5 h-5" />
//                 {sortLabel}
//                 {sortOrder ? (
//                   <FiX
//                     className="ml-2 w-5 h-5 cursor-pointer"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleClearSort();
//                     }}
//                   />
//                 ) : (
//                   <FiChevronDown
//                     className={`ml-2 w-5 h-5 transition-transform duration-200 ${
//                       isDropdownOpen ? "transform rotate-180" : ""
//                     }`}
//                   />
//                 )}
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
//                   <div className="p-2">
//                     <button
//                       onClick={() => handleSortChange("admin", "Admin")}
//                       className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
//                     >
//                       Admin
//                     </button>
//                     <button
//                       onClick={() => handleSortChange("user", "User")}
//                       className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
//                     >
//                       User
//                     </button>
//                     <button
//                       onClick={() => handleSortChange("AtoZ", "A to Z")}
//                       className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
//                     >
//                       A to Z
//                     </button>
//                     <button
//                       onClick={() => handleSortChange("ZtoA", "Z to A")}
//                       className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
//                     >
//                       Z to A
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Search Input */}
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FiSearch className="w-5 h-5 text-gray-400" />
//               </div>
//               <input
//                 type="search"
//                 placeholder="Search users..."
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Users Table */}
//         <div className="bg-white shadow-lg border border-gray-200 rounded-xl overflow-hidden">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-200">
//               <tr>
//                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                   Name
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                   Email
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                   Role
//                 </th>
//                 <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-100">
//               {filteredUsers.map((user) => (
//                 <tr key={user._id} className="hover:bg-gray-50 transition-colors">
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
//                     {user.firstName} {user.lastName}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
//                     {user.email}
//                   </td>
//                  <td className="px-4 py-2 whitespace-nowrap text-sm">
//                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
//                       user.role === 'admin' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
//                     }`}>
//                       {user.role}
//                     </span>
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-center text-sm">
//                     <button
//                       onClick={() => handleViewDetails(user._id)}
//                       className="inline-flex items-center px-3 py-2 border border-light-orange text-main-color rounded-md hover:bg-main-color hover:text-white transition duration-150 focus:outline-none"
//                     >
//                       <FiEye className="mr-1 w-5 h-5" />
//                       View
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {filteredUsers.length === 0 && (
//           <p className="mt-6 text-center text-gray-600">
//             No users found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserList;

// import React, { useState, useEffect, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { IoEyeSharp } from "react-icons/io5";
// import FilterAndSearch from "../components/FilterAndSearch"; // Import the reusable component
// import Data from "../../assets/Images/nodata.svg";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("");

//   const navigate = useNavigate();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   const sortOptions = [
//     { value: "admin", label: "Admin" },
//     { value: "user", label: "User" },
//     { value: "AtoZ", label: "A to Z" },
//     { value: "ZtoA", label: "Z to A" },
//   ];

//     useEffect(() => {
//         const fetchUsers = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const token = TokenService.getToken();  // Get token from TokenService
//                 if (!token) {
//                     setError("Token missing or invalid.");
//                     setLoading(false);
//                     return;
//                 }

//                 const response = await axios.get(`${API_BASE_URL}/admin/users`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });

//                 if (response.status !== 200) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }

//                 const data = response.data;
//                 if (Array.isArray(data)) {
//                     setUsers(data);
//                 } else {
//                     console.error("Unexpected data format:", data);
//                     setError("Unexpected data format from the server.");
//                 }
//             } catch (err) {
//                 console.error("Error fetching users:", err);
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUsers();
//     }, [API_BASE_URL]);

//     const handleViewDetails = (userId) => {
//         navigate(`/admin/users/${userId}`);
//     };

//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value);
//     };

//   const handleViewDetails = (userId) => {
//     navigate(`/admin/users/${userId}`);
//   };

//   const handleSearchChange = (term) => {
//     setSearchTerm(term); // Update the state
//   };

//   const handleSortChange = (order, label) => {
//     setSortOrder(order);
//   };

//   const handleResetFilters = () => {
//     setSearchTerm(""); // Clear search term
//     setSortOrder(""); // Clear sort order
//   };

//   const sortedUsers = useMemo(() => {
//     let sortUsers = [...users];
//     if (sortOrder === "admin") {
//       sortUsers = sortUsers.filter((user) => user.role === "admin");
//     } else if (sortOrder === "user") {
//       sortUsers = sortUsers.filter((user) => user.role === "user");
//     }

//     if (error) {
//         return (
//             <div className="text-red-500 container mx-auto p-4">
//                 Error: {error}
//             </div>
//         );
//     }

//       if (sortOrder === "AtoZ") {
//         return nameA.localeCompare(nameB);
//       } else if (sortOrder === "ZtoA") {
//         return nameB.localeCompare(nameA);
//       }
//       return 0;
//     };

//     return sortUsers.sort(sortFn);
//   }, [users, sortOrder]);

//   const filteredUsers = useMemo(() => {
//     const filterFn = (user) => {
//       const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
//       return (
//         fullName.includes(searchTerm.toLowerCase()) ||
//         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.role.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     };

//     return sortedUsers.filter(filterFn);
//   }, [sortedUsers, searchTerm]);

//   if (loading) {
//     return (
//         <div className="min-h-screen bg-gray-50">
//             <div className="container mx-auto px-4">
//                 <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//                     <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
//                         User List
//                     </h1>
//                     <div className="flex items-center gap-4">
//                         {/* Custom Filter Dropdown */}
//                         <div className="relative" ref={dropdownRef}>
//                             <button
//                                 type="button"
//                                 onClick={toggleDropdown}
//                                 className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition duration-150"
//                             >
//                                 <FiFilter className="mr-2 w-5 h-5" />
//                                 {sortLabel}
//                                 {sortOrder ? (
//                                     <FiX
//                                         className="ml-2 w-5 h-5 cursor-pointer"
//                                         onClick={(e) => {
//                                             e.stopPropagation();
//                                             handleClearSort();
//                                         }}
//                                     />
//                                 ) : (
//                                     <FiChevronDown
//                                         className={`ml-2 w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? "transform rotate-180" : ""
//                                             }`}
//                                     />
//                                 )}
//                             </button>
//                             {isDropdownOpen && (
//                                 <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
//                                     <div className="p-2">
//                                         <button
//                                             onClick={() => handleSortChange("admin", "Admin")}
//                                             className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
//                                         >
//                                             Admin
//                                         </button>
//                                         <button
//                                             onClick={() => handleSortChange("user", "User")}
//                                             className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
//                                         >
//                                             User
//                                         </button>
//                                         <button
//                                             onClick={() => handleSortChange("AtoZ", "A to Z")}
//                                             className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
//                                         >
//                                             A to Z
//                                         </button>
//                                         <button
//                                             onClick={() => handleSortChange("ZtoA", "Z to A")}
//                                             className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
//                                         >
//                                             Z to A
//                                         </button>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>

//   if (error) {
//     return (
//       <div className="text-red-500 container mx-auto p-4">Error: {error}</div>
//     );
//   }

//   return (
//     <div className="user-list px-4">
//       <div>
//         <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//           <h1 className="text-2xl font-bold">User List</h1>
//           <FilterAndSearch
//             onSearch={handleSearchChange}
//             onSort={handleSortChange}
//             sortOptions={sortOptions}
//             defaultSortLabel="Sort"
//             onReset={handleResetFilters} // Pass the reset function
//           />
//         </div>

//         {/* Users Table */}
//         <div className="overflow-x-auto rounded-2xl border border-gray-300 shadow-main">
//           <table className="min-w-full bg-white">
//             <thead className="bg-gray-light text-sub-color font-bold">
//               <tr>
//                 <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                   Name
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                   Email
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                   Role
//                 </th>
//                 <th className="px-4 py-3 text-center text-xs uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredUsers.length > 0 ? (
//                 filteredUsers.map((user) => (
//                   <tr
//                     key={user._id}
//                     className="hover:bg-gray-50 transition-colors"
//                   >
//                     <td className="px-4 py-2 whitespace-nowrap text-sm">
//                       {user.firstName} {user.lastName}
//                     </td>
//                     <td className="px-4 py-2 whitespace-nowrap text-sm">
//                       {user.email}
//                     </td>
//                     <td className="px-4 py-2 whitespace-nowrap text-sm">
//                       <span
//                         className={`inline-flex items-center px-4 py-2 rounded-lg text-xs font-medium ${
//                           user.role === "admin"
//                             ? "bg-red-100 text-red-800"
//                             : "bg-green-100 text-green-800"
//                         }`}
//                       >
//                         {user.role}
//                       </span>
//                     </td>
//                     <td className="px-4 py-2 whitespace-nowrap text-center text-sm">
//                       <button
//                         onClick={() => handleViewDetails(user._id)}
//                         className="px-2 py-2 rounded-md bg-gray-200 text-gray-500 hover:text-white hover:bg-gray-500 transition-colors duration-200"
//                       >
//                         <IoEyeSharp className="w-5 h-5" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="4" className="px-4 py-4 text-center">
//                     <div className="flex flex-col">
//                       <img src={Data} alt="No Data" className="h-40" />
//                       <p className="mt-4 text-xl font-semibold text-gray-700 capitalize">
//                         No users found
//                       </p>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserList;

// import React, { useState, useEffect, useMemo, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { IoEyeSharp } from "react-icons/io5";
// import { FiFilter, FiChevronDown, FiX, FiSearch } from "react-icons/fi";
// import FilterAndSearch from "../components/FilterAndSearch"; // Import the reusable component
// import Data from "../../assets/Images/nodata.svg";
// import TokenService from "../../utils/TokenService";  // Import TokenService

// const UserList = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [sortOrder, setSortOrder] = useState("");
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for controlling the visibility of the filter dropdown
//     const [sortLabel, setSortLabel] = useState("Sort");
//     const dropdownRef = useRef(null);

//     const navigate = useNavigate();
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     const token = TokenService.getToken();  // Get token from TokenService

//     const sortOptions = [
//         { value: "admin", label: "Admin" },
//         { value: "user", label: "User" },
//         { value: "AtoZ", label: "A to Z" },
//         { value: "ZtoA", label: "Z to A" },
//     ];

//     useEffect(() => {
//         const fetchUsers = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 if (!token) {
//                     setError("Token missing or invalid.");
//                     setLoading(false);
//                     return;
//                 }

//                 const response = await axios.get(`${API_BASE_URL}/admin/users`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });

//                 if (response.status !== 200) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }

//                 const data = response.data;
//                 if (Array.isArray(data)) {
//                     setUsers(data);
//                 } else {
//                     console.error("Unexpected data format:", data);
//                     setError("Unexpected data format from the server.");
//                 }
//             } catch (err) {
//                 console.error("Error fetching users:", err);
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUsers();
//     }, [API_BASE_URL]);

//     const handleViewDetails = (userId) => {
//         navigate(`/admin/users/${userId}`);
//     };

//     const handleSearchChange = (term) => {
//         setSearchTerm(term);
//     };

//     const handleSortChange = (order, label) => {
//         setSortOrder(order);
//         setSortLabel(label);
//         setIsDropdownOpen(false);
//     };

//     const handleResetFilters = () => {
//         setSearchTerm("");
//         setSortOrder("");
//         setSortLabel("Sort");
//     };

//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };

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
//     }, [dropdownRef]);

//     const sortedUsers = useMemo(() => {
//         //Apply sort to users array
//         let sortUsers = [...users];
//         if (sortOrder === "admin") {
//             sortUsers = sortUsers.filter((user) => user.role === "admin");
//         } else if (sortOrder === "user") {
//             sortUsers = sortUsers.filter((user) => user.role === "user");
//         }

//         const sortFn = (a, b) => {
//             const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
//             const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();

//             if (sortOrder === "AtoZ") {
//                 return nameA.localeCompare(nameB);
//             } else if (sortOrder === "ZtoA") {
//                 return nameB.localeCompare(nameA);
//             }
//             return 0; // No sorting if no sortOrder is selected
//         };

//         return sortUsers.sort(sortFn);
//     }, [users, sortOrder]);

//     const filteredUsers = useMemo(() => {
//         const filterFn = (user) => {
//             const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
//             return (
//                 fullName.includes(searchTerm.toLowerCase()) ||
//                 user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                 user.role.toLowerCase().includes(searchTerm.toLowerCase())
//             );
//         };

//         return sortedUsers.filter(filterFn);
//     }, [sortedUsers, searchTerm]);

//     if (loading) {
//         return <div className="text-center py-4">Loading users...</div>;
//     }

//     if (error) {
//         return <div className="text-red-500">Error: {error}</div>;
//     }

//     return (
//         <div className="user-list px-4">
//             <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//                 <h1 className="text-2xl font-bold">User List</h1>
//                 <FilterAndSearch
//                     onSearch={handleSearchChange}
//                     onSort={handleSortChange}
//                     sortOptions={sortOptions}
//                     defaultSortLabel={sortLabel}
//                     onReset={handleResetFilters}
//                 />
//             </div>

//             {/* Users Table */}
//             <div className="overflow-x-auto rounded-2xl border border-gray-300 shadow-main">
//                 <table className="min-w-full bg-white">
//                     <thead className="bg-gray-light text-sub-color font-bold">
//                         <tr>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Name
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Email
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Role
//                             </th>
//                             <th className="px-4 py-3 text-center text-xs uppercase tracking-wider">
//                                 Actions
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredUsers.length > 0 ? (
//                             filteredUsers.map((user) => (
//                                 <tr
//                                     key={user._id}
//                                     className="hover:bg-gray-50 transition-colors"
//                                 >
//                                     <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                         {user.firstName} {user.lastName}
//                                     </td>
//                                     <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                         {user.email}
//                                     </td>
//                                     <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                         <span
//                                             className={`inline-flex items-center px-4 py-2 rounded-lg text-xs font-medium ${user.role === "admin"
//                                                 ? "bg-red-100 text-red-800"
//                                                 : "bg-green-100 text-green-800"
//                                                 }`}
//                                         >
//                                             {user.role}
//                                         </span>
//                                     </td>
//                                     <td className="px-4 py-2 whitespace-nowrap text-center text-sm">
//                                         <button
//                                             onClick={() => handleViewDetails(user._id)}
//                                             className="px-2 py-2 rounded-md bg-gray-200 text-gray-500 hover:text-white hover:bg-gray-500 transition-colors duration-200"
//                                         >
//                                             <IoEyeSharp className="w-5 h-5" />
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="4" className="px-4 py-4 text-center">
//                                     <div className="flex flex-col">
//                                         <img src={Data} alt="No Data" className="h-40" />
//                                         <p className="mt-4 text-xl font-semibold text-gray-700 capitalize">
//                                             No users found
//                                         </p>
//                                     </div>
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default UserList;

// import React, { useState, useEffect, useMemo, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { IoEyeSharp } from "react-icons/io5";
// import FilterAndSearch from "../components/FilterAndSearch"; // Import the reusable component
// import Data from "../../assets/Images/nodata.svg";
// import TokenService from "../../utils/TokenService"; // Import TokenService
// import { FaUserShield, FaUser } from "react-icons/fa"; // Import icons for roles
// import Pagination from "../components/Pagination"; // Import the Pagination component

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [sortLabel, setSortLabel] = useState("Sort");
//   const [rowsPerPage, setRowsPerPage] = useState(12); // Start as 12
//   const [currentPage, setCurrentPage] = useState(1); // Current page number

//   const navigate = useNavigate();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   const token = TokenService.getToken(); // Get token from TokenService

//   const sortOptions = [
//     { value: "admin", label: "Admin" },
//     { value: "user", label: "User" },
//     { value: "AtoZ", label: "A to Z" },
//     { value: "ZtoA", label: "Z to A" },
//   ];

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         if (!token) {
//           setError("Token missing or invalid.");
//           setLoading(false);
//           return;
//         }

//         const response = await axios.get(`${API_BASE_URL}/admin/users`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (response.status !== 200) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = response.data;
//         if (Array.isArray(data)) {
//           setUsers(data);
//         } else {
//           console.error("Unexpected data format:", data);
//           setError("Unexpected data format from the server.");
//         }
//       } catch (err) {
//         console.error("Error fetching users:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, [API_BASE_URL, token]);

//   const handleViewDetails = (userId) => {
//     navigate(`/admin/users/${userId}`);
//   };

//   const handleSearchChange = (term) => {
//     setSearchTerm(term);
//     setCurrentPage(1); //reset current page after search
//   };

//   const handleSortChange = (order, label) => {
//     setSortOrder(order);
//     setSortLabel(label);
//     setCurrentPage(1); //reset current page after sort
//   };

//   const handleResetFilters = () => {
//     setSearchTerm("");
//     setSortOrder("");
//     setSortLabel("Sort");
//     setRowsPerPage(12); //reset row per page
//     setCurrentPage(1); // Reset current page after reset
//   };

//   const handleRowsPerPageChange = (newRowsPerPage) => {
//     setRowsPerPage(newRowsPerPage);
//     setCurrentPage(1); // Reset to first page when rows per page changes
//   };

//   const sortedUsers = useMemo(() => {
//     //Apply sort to users array
//     let sortUsers = [...users];
//     if (sortOrder === "admin") {
//       sortUsers = sortUsers.filter((user) => user.role === "admin");
//     } else if (sortOrder === "user") {
//       sortUsers = sortUsers.filter((user) => user.role === "user");
//     }

//     const sortFn = (a, b) => {
//       const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
//       const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();

//       if (sortOrder === "AtoZ") {
//         return nameA.localeCompare(nameB);
//       } else if (sortOrder === "ZtoA") {
//         return nameB.localeCompare(nameA);
//       }
//       return 0; // No sorting if no sortOrder is selected
//     };

//     return sortUsers.sort(sortFn);
//   }, [users, sortOrder]);

//   const filteredUsers = useMemo(() => {
//     const filterFn = (user) => {
//       const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
//       return (
//         fullName.includes(searchTerm.toLowerCase()) ||
//         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.role.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     };

//     return sortedUsers.filter(filterFn);
//   }, [sortedUsers, searchTerm]);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const paginatedUsers = useMemo(() => {
//     const itemsPerPage = rowsPerPage || 12; // Local Variable For readability
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;

//     return filteredUsers.length === 0
//       ? []
//       : filteredUsers.slice(startIndex, endIndex); // return empty [] in case it is empty
//   }, [filteredUsers, rowsPerPage, currentPage]);

//   const totalOrders = filteredUsers.length; // For pagination
//   const noDataFound = filteredUsers.length === 0;

//   const isFilterApplied = searchTerm || sortOrder || rowsPerPage !== 12; //determine it there is any filter is applied

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-full">
//         <div className="py-20 text-center text-gray-400">
//           <div className="flex flex-col items-center">
//             <div className="w-16 h-16 border-t-4 border-solid rounded-full border-main-color animate-spin"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-red-500">Error: {error}</div>;
//   }

//   return (
//     <div className="user-list px-4">
//       {/* Improved Header Section */}
//       <div className="mb-4">
//         <h1 className="text-3xl font-bold mb-2">Users List</h1>
//       </div>

//       <div className="flex items-center justify-between gap-4 mb-4">
//         <FilterAndSearch
//           searchTerm={searchTerm}
//           sortOrder={sortOrder}
//           sortLabel={sortLabel}
//           rowsPerPage={rowsPerPage}
//           onSearch={handleSearchChange}
//           onSort={handleSortChange}
//           sortOptions={sortOptions}
//           onRowsPerPageChange={handleRowsPerPageChange}
//           showSearch={true} // Show the search input
//           showSort={true} // Show the sorting dropdown
//           showRowsPerPage={true} // Show the rows per page dropdown
//         />

//         {isFilterApplied && (
//           <button
//             onClick={handleResetFilters}
//             className="py-4 px-6 bg-gray-200 hover:bg-gray-300 rounded-xl text-sm font-bold text-gray-800 border transition-colors duration-300"
//           >
//             Reset
//           </button>
//         )}
//       </div>

//       {/* Users Table */}
//       <div className="overflow-x-auto rounded-2xl border border-gray-300 shadow-main">
//         <table className="min-w-full bg-white">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
//                 Role
//               </th>
//               <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {paginatedUsers.length > 0 ? (
//               paginatedUsers.map((user) => (
//                 <tr
//                   key={user._id}
//                   className="hover:bg-gray-50 transition-colors"
//                 >
//                   <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
//                     {user.firstName} {user.lastName}
//                   </td>
//                   <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
//                     {user.email}
//                   </td>
//                   <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700">
//                     <div className="flex items-center">
//                       {user.role === "admin" ? (
//                         <>
//                           <FaUserShield
//                             size={20}
//                             className="text-red-500 mr-2"
//                           />
//                           <span className="font-semibold text-red-600">
//                             Admin
//                           </span>
//                         </>
//                       ) : (
//                         <>
//                           <FaUser size={16} className="text-green-500 mr-2" />
//                           <span className="font-semibold text-green-600">
//                             User
//                           </span>
//                         </>
//                       )}
//                     </div>
//                   </td>
//                   <td className="px-6 py-2 whitespace-nowrap text-center text-sm">
//                     <button
//                       onClick={() => handleViewDetails(user._id)}
//                       className="px-2 py-2 rounded-md bg-gray-200 text-gray-500 hover:text-white hover:bg-gray-500 transition-colors duration-200"
//                     >
//                       <IoEyeSharp className="w-5 h-5" />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="px-4 py-4 text-center">
//                   <div className="flex flex-col items-center justify-center">
//                     <img src={Data} alt="No Data" className="h-40 opacity-70" />
//                     <p className="mt-4 text-xl font-semibold text-gray-700 capitalize">
//                       No users found
//                     </p>
//                   </div>
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//       {/* Pagination component */}
//       <Pagination
//         ordersPerPage={rowsPerPage || 12} // Use total count when rowsPerPage is null
//         totalOrders={filteredUsers.length} // Pass total number of filtered orders
//         paginate={paginate} // Pass the pagination function
//         currentPage={currentPage} // Pass the current page
//         noDataFound={noDataFound}
//       />
//     </div>
//   );
// };

// export default UserList;




import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoEyeSharp } from "react-icons/io5";
import FilterAndSearch from "../components/FilterAndSearch"; // Import the reusable component
import Data from "../../assets/Images/nodata.svg";
import TokenService from "../../utils/TokenService"; // Import TokenService
import { FaUserShield, FaUser } from "react-icons/fa"; // Import icons for roles
import Pagination from "../components/Pagination"; // Import the Pagination component

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [sortLabel, setSortLabel] = useState("Sort");
  const [rowsPerPage, setRowsPerPage] = useState(12); // Start as 12
  const [currentPage, setCurrentPage] = useState(1); // Current page number

  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const token = TokenService.getToken(); // Get token from TokenService

  const sortOptions = [
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },
    { value: "AtoZ", label: "A to Z" },
    { value: "ZtoA", label: "Z to A" },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        if (!token) {
          setError("Token missing or invalid.");
          setLoading(false);
          return;
        }

        const response = await axios.get(`${API_BASE_URL}/admin/users`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status !== 200) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = response.data;
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error("Unexpected data format:", data);
          setError("Unexpected data format from the server.");
        }
      } catch (err) {
        console.error("Error fetching users:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [API_BASE_URL, token]);

  const handleViewDetails = (userId) => {
    navigate(`/admin/users/${userId}`);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); //reset current page after search
  };

  const handleSortChange = (order, label) => {
    setSortOrder(order);
    setSortLabel(label);
    setCurrentPage(1); //reset current page after sort
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setSortOrder("");
    setSortLabel("Sort");
    setRowsPerPage(12); //reset row per page
    setCurrentPage(1); // Reset current page after reset
  };

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page when rows per page changes
  };

  const sortedUsers = useMemo(() => {
    //Apply sort to users array
    let sortUsers = [...users];
    if (sortOrder === "admin") {
      sortUsers = sortUsers.filter((user) => user.role === "admin");
    } else if (sortOrder === "user") {
      sortUsers = sortUsers.filter((user) => user.role === "user");
    }

    const sortFn = (a, b) => {
      const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
      const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();

      if (sortOrder === "AtoZ") {
        return nameA.localeCompare(nameB);
      } else if (sortOrder === "ZtoA") {
        return nameB.localeCompare(nameA);
      }
      return 0; // No sorting if no sortOrder is selected
    };

    return sortUsers.sort(sortFn);
  }, [users, sortOrder]);

  const filteredUsers = useMemo(() => {
    const filterFn = (user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      return (
        fullName.includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
      );
    };

    return sortedUsers.filter(filterFn);
  }, [sortedUsers, searchTerm]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedUsers = useMemo(() => {
    const itemsPerPage = rowsPerPage || 12; // Local Variable For readability
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return filteredUsers.length === 0
      ? []
      : filteredUsers.slice(startIndex, endIndex); // return empty [] in case it is empty
  }, [filteredUsers, rowsPerPage, currentPage]);

  const totalOrders = filteredUsers.length; // For pagination
  const noDataFound = filteredUsers.length === 0;

  const isFilterApplied = searchTerm || sortOrder || rowsPerPage !== 12; //determine it there is any filter is applied

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="py-20 text-center text-gray-400">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-t-4 border-solid rounded-full border-main-color animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="user-list px-4">
      {/* Improved Header Section */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-2">Users List</h1>
      </div>

      <div className="flex items-center justify-between gap-4 mb-4">
        <FilterAndSearch
          searchTerm={searchTerm}
          sortOrder={sortOrder}
          sortLabel={sortLabel}
          rowsPerPage={rowsPerPage}
          onSearch={handleSearchChange}
          onSort={handleSortChange}
          sortOptions={sortOptions}
          onRowsPerPageChange={handleRowsPerPageChange}
          showSearch={true} // Show the search input
          showSort={true} // Show the sorting dropdown
          showRowsPerPage={true} // Show the rows per page dropdown
        />

        {isFilterApplied && (
          <button
            onClick={handleResetFilters}
            className="py-4 px-6 bg-gray-200 hover:bg-gray-300 rounded-xl text-sm font-bold text-gray-800 border transition-colors duration-300"
          >
            Reset
          </button>
        )}
      </div>

      {/* Users Table */}
      <div className="overflow-hidden  rounded-2xl border border-gray-300 shadow-main">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 text-nowrap">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedUsers.length > 0 ? (
                paginatedUsers.map((user) => (
                  <tr
                    key={user._id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                      {user.firstName} {user.lastName}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                      {user.email}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700">
                      <div className="flex items-center">
                        {user.role === "admin" ? (
                          <>
                            <FaUserShield
                              size={20}
                              className="text-red-500 mr-2"
                            />
                            <span className="font-semibold text-red-600">
                              Admin
                            </span>
                          </>
                        ) : (
                          <>
                            <FaUser size={16} className="text-green-500 mr-2" />
                            <span className="font-semibold text-green-600">
                              User
                            </span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-center text-sm">
                      <button
                        onClick={() => handleViewDetails(user._id)}
                        className="px-2 py-2 rounded-md bg-gray-200 text-gray-500 hover:text-white hover:bg-gray-500 transition-colors duration-200"
                      >
                        <IoEyeSharp className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-4 py-4 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        src={Data}
                        alt="No Data"
                        className="h-40 opacity-70"
                      />
                      <p className="mt-4 text-xl font-semibold text-gray-700 capitalize">
                        No users found
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination component */}
      <Pagination
        ordersPerPage={rowsPerPage || 12} // Use total count when rowsPerPage is null
        totalOrders={filteredUsers.length} // Pass total number of filtered orders
        paginate={paginate} // Pass the pagination function
        currentPage={currentPage} // Pass the current page
        noDataFound={noDataFound}
      />
    </div>
  );
};

export default UserList;