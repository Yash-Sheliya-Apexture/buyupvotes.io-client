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



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { FiEye } from 'react-icons/fi'; // Import an eye icon
import Skeleton from "react-loading-skeleton";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    // Use API base URL from environment variable
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            setError(null); // Reset error on new fetch
            try {
                const token = localStorage.getItem("authToken");
                if (!token) {
                    setError("Token missing or invalid.");
                    setLoading(false);
                    return;
                }

                const response = await axios.get(
                    `${API_BASE_URL}/admin/users`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

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
    }, []);

    const handleViewDetails = (userId) => {
        // Use navigate to go to the detail page
        navigate(`/admin/users/${userId}`);
    };

    if (loading) {
        return (
           <div className="flex justify-center items-center h-48">
                <span className="ml-2 text-gray-700">Loading users...</span>
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <div>
            <h4 className="text-2xl font-semibold mb-4">User List</h4>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700">Name</th>
                            <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700">Email</th>
                            <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700">Role</th>
                            <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-50 transition-colors duration-200">
                                <td className="py-3 px-4 border-b text-sm text-gray-700">{user.firstName} {user.lastName}</td>
                                <td className="py-3 px-4 border-b text-sm text-gray-700">{user.email}</td>
                                <td className="py-3 px-4 border-b text-sm text-gray-700">{user.role}</td>
                                <td className="py-3 px-4 border-b text-sm text-gray-700">
                                    <button
                                        onClick={() => handleViewDetails(user._id)}
                                        className="text-blue-500 hover:text-blue-700 transition-colors duration-200 focus:outline-none"
                                        aria-label="View Details"
                                    >
                                        <FiEye className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {users.length === 0 && !loading && !error && (
                <p className="mt-4 text-gray-600">No users found.</p>
            )}
        </div>
    );
};

export default UserList;