import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
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
      {users.length > 0 ? (
        <ul className="list-none p-0">
          {users.map((user) => (
            <li key={user._id} className="mb-2 p-3 bg-gray-100 rounded-md shadow-sm">
              <p className="font-medium">{user.firstName} {user.lastName}</p>
              <p className="text-gray-600">Email: {user.email}</p>
              <p className="text-gray-600">Role: {user.role}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;