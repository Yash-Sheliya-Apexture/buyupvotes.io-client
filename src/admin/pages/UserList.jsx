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

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FiEye,
  FiSearch,
  FiFilter,
  FiChevronDown,
  FiX,
} from "react-icons/fi";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortLabel, setSortLabel] = useState("Sort");

  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("authToken");
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
  }, [API_BASE_URL]);

  const handleViewDetails = (userId) => {
    navigate(`/admin/users/${userId}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (order, label) => {
    setSortOrder(order);
    setSortLabel(label);
    setIsDropdownOpen(false);
  };

  const handleClearSort = () => {
    setSortOrder("");
    setSortLabel("Sort");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
  }, [dropdownRef]);

  const sortedUsers = React.useMemo(() => {
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

  const filteredUsers = React.useMemo(() => {
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <span className="ml-2 text-gray-700">Loading users...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 container mx-auto p-4">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
            User List
          </h1>
          <div className="flex items-center gap-4">
            {/* Custom Filter Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={toggleDropdown}
                className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition duration-150"
              >
                <FiFilter className="mr-2 w-5 h-5" />
                {sortLabel}
                {sortOrder ? (
                  <FiX
                    className="ml-2 w-5 h-5 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClearSort();
                    }}
                  />
                ) : (
                  <FiChevronDown
                    className={`ml-2 w-5 h-5 transition-transform duration-200 ${
                      isDropdownOpen ? "transform rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                  <div className="p-2">
                    <button
                      onClick={() => handleSortChange("admin", "Admin")}
                      className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      Admin
                    </button>
                    <button
                      onClick={() => handleSortChange("user", "User")}
                      className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      User
                    </button>
                    <button
                      onClick={() => handleSortChange("AtoZ", "A to Z")}
                      className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      A to Z
                    </button>
                    <button
                      onClick={() => handleSortChange("ZtoA", "Z to A")}
                      className="w-full text-left p-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      Z to A
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="search"
                placeholder="Search users..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900"
              />
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white shadow-lg border border-gray-200 rounded-xl overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredUsers.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
                    {user.email}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      user.role === 'admin' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-center text-sm">
                    <button
                      onClick={() => handleViewDetails(user._id)}
                      className="inline-flex items-center px-3 py-2 border border-indigo-500 text-indigo-500 rounded-md hover:bg-indigo-500 hover:text-white transition duration-150 focus:outline-none"
                    >
                      <FiEye className="mr-1 w-5 h-5" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <p className="mt-6 text-center text-gray-600">
            No users found.
          </p>
        )}
      </div>
    </div>
  );
};

export default UserList;