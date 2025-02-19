// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const UserProfile = () => {
//     const { userId } = useParams();  // Gets the userId from the URL parameters.
//     const [user, setUser] = useState(null);  // Stores the user's data.
//     const [loading, setLoading] = useState(true);  // Shows loading state.
//     const [error, setError] = useState(null);  // Displays errors to the user.
//     const navigate = useNavigate();

//     // Access the API URL using Vite-specific syntax
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     useEffect(() => {
//         const fetchUser = async () => {
//             setLoading(true);  // Start loading
//             setError(null);  // Clear any previous errors

//             try {
//                 // Get the authentication token from localStorage
//                 const token = localStorage.getItem("authToken");
//                 if (!token) {
//                     setError("Authentication token not found");
//                     setLoading(false);  // Stop loading
//                     return;  // Exit the function if there's no token
//                 }

//                 // Make an API request to get user details
//                 const response = await axios.get(`${API_BASE_URL}/admin/users/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`  // Include the token in the request header
//                     }
//                 });

//                 // Check if the API response is successful
//                 if (response.status !== 200) {
//                     throw new Error(`Failed to fetch user. Status code: ${response.status}`);
//                 }

//                 // Update state with the user data from the API response
//                 setUser(response.data);
//             } catch (err) {
//                 setError(err.message || "Failed to load user");  // Set an error message
//                 console.error("Error fetching user:", err);
//             } finally {
//                 setLoading(false);  // Stop loading whether success or failure
//             }
//         };

//         fetchUser();  // Call the fetchUser function
//     }, [API_BASE_URL, userId]);

//     const handleGoBack = () => {
//         navigate(-1);  // Navigate back to the previous page
//     };

//     if (loading) {
//         return <div className="flex justify-center items-center h-48">Loading user details...</div>;  // Show loading message
//     }

//     if (error) {
//         return <div className="text-red-500">Error: {error}</div>;  // Show error message
//     }

//     if (!user) {
//         return <div>User not found.</div>;  // If for some reason user is not found
//     }

//     return (
//       <div>
//         <h2 className="text-2xl font-semibold mb-4">User Details</h2>
//           <button onClick={handleGoBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 focus:outline-none focus:shadow-outline">
//             Back
//           </button>
//         <div className="bg-white shadow-md rounded-lg p-6">
//             <div className="mb-4">
//                 <h3 className="text-xl font-semibold">Personal Information</h3>
//                 <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
//                 <p><strong>Email:</strong> {user.email}</p>
//                 <p><strong>Role:</strong> {user.role}</p>
//             </div>

//             {/* You can add more details here depending on your user object */}
//         </div>
//       </div>
//     );
// };

// export default UserProfile;

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import moment from 'moment';  // For formatting dates
// import { FiEye } from 'react-icons/fi'; // For the "View" icon
// import Skeleton from 'react-loading-skeleton';

// const UserProfile = () => {
//     const { userId } = useParams();  // Gets the userId from the URL parameters.
//     const [user, setUser] = useState(null);  // Stores the user's data.
//     const [orders, setOrders] = useState([]);  // Stores the user's orders.
//     const [loading, setLoading] = useState(true);  // Shows loading state.
//     const [error, setError] = useState(null);  // Displays errors to the user.
//     const navigate = useNavigate();

//     // Access the API URL using Vite-specific syntax
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     useEffect(() => {
//         const fetchUserAndOrders = async () => {
//             setLoading(true);  // Start loading
//             setError(null);  // Clear any previous errors

//             try {
//                 // Get the authentication token from localStorage
//                 const token = localStorage.getItem("authToken");
//                 if (!token) {
//                     setError("Authentication token not found");
//                     setLoading(false);  // Stop loading
//                     return;  // Exit the function if there's no token
//                 }

//                 // Make an API request to get user details
//                 const userResponse = await axios.get(`${API_BASE_URL}/admin/users/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`  // Include the token in the request header
//                     }
//                 });

//                 if (userResponse.status !== 200) {
//                     throw new Error(`Failed to fetch user. Status code: ${userResponse.status}`);
//                 }

//                 setUser(userResponse.data);

//                 // Make an API request to get the USER'S orders
//                 const ordersResponse = await axios.get(`${API_BASE_URL}/admin/users/${userId}/orders`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });

//                 if (ordersResponse.status !== 200) {
//                     throw new Error(`Failed to fetch orders. Status code: ${ordersResponse.status}`);
//                 }

//                // Ensure that the response data is an array before mapping the result to
//                 if (Array.isArray(ordersResponse.data)) {
//                      setOrders(ordersResponse.data);
//                 }
//                 else
//                 {
//                     throw new Error("Data returned was not of the right type (should be an array)");
//                 }

//             } catch (err) {
//                 setError(err.message || "Failed to load user and/or orders");  // Set an error message
//                 console.error("Error fetching user:", err);
//             } finally {
//                 setLoading(false);  // Stop loading whether success or failure
//             }
//         };

//         fetchUserAndOrders();  // Call the fetchUser function
//     }, [API_BASE_URL, userId]);

//     const handleGoBack = () => {
//         navigate(-1);  // Navigate back to the previous page
//     };

//       const truncateId = (id) => {
//         if (!id) return "";

//         const parts = id.split("-");
//         if (parts.length > 0) {
//           return parts.slice(0, Math.min(4, parts.length)).join("-");
//         }
//         return id;
//       };

//       const formatDate = (dateString) => {
//         if (!dateString) return "";
//         return moment(dateString).format("DD/MM/YYYY");
//       };

//     if (loading) {
//         return <div className="flex justify-center items-center h-48">Loading user details...</div>;  // Show loading message
//     }

//     if (error) {
//         return <div className="text-red-500">Error: {error}</div>;  // Show error message
//     }

//     if (!user) {
//         return <div>User not found.</div>;  // If for some reason user is not found
//     }

//     return (
//         <div>
//             <h2 className="text-2xl font-semibold mb-4">User Details</h2>
//             <button onClick={handleGoBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 focus:outline-none focus:shadow-outline">
//                 Back
//             </button>
//             <div className="bg-white shadow-md rounded-lg p-6 mb-4">
//                 <div className="mb-4">
//                     <h3 className="text-xl font-semibold">Personal Information</h3>
//                     <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
//                     <p><strong>Email:</strong> {user.email}</p>
//                     <p><strong>Role:</strong> {user.role}</p>
//                 </div>
//             </div>

//             <h3 className="text-xl font-semibold mb-2">User Orders</h3>
//             <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
//                 <table className="min-w-full bg-white">
//                     <thead className="bg-gray-200">
//                         <tr>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order ID</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Category</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Service</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Quantity</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Started Votes</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Deliver Votes</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Withheld Price</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order Date</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orders.map((order, index) => (
//                             <tr key={order._id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">{truncateId(order.orderId.substring(0, 4))}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.category}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.service}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.quantity}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.status}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.started}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.completedVotes || 0}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">${order.calculatedPrice}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{formatDate(order.createdAt)}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             {orders.length === 0 && !loading && !error && (
//                 <p className="mt-4 text-gray-600">No orders found for this user.</p>
//             )}
//         </div>
//     );
// };

// export default UserProfile;

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import moment from 'moment';
// import { FiEye } from 'react-icons/fi';
// import { FaEdit, FaTrash } from "react-icons/fa"; // Import Edit and Delete icons
// import DeleteConfirmationPopup from "../components/OrderList/DeleteConfirmationPopup"; // Import the DeleteConfirmationPopup
// import EditOrderPopup from "../components/OrderList/EditOrderPopup"; // Import EditOrderPopup
// import ViewOrderPopup from "../components/OrderList/ViewOrderPopup"; // Import ViewOrderPopup

// const UserProfile = () => {
//     const { userId } = useParams();
//     const [user, setUser] = useState(null);
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     // State variables and functions copied from OrderList
//     const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//     const [orderToDelete, setOrderToDelete] = useState(null);
//     const [showEditPopup, setShowEditPopup] = useState(false);
//     const [showViewPopup, setShowViewPopup] = useState(false);
//     const [selectedOrder, setSelectedOrder] = useState(null);

//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     useEffect(() => {
//         const fetchUserAndOrders = async () => {
//             setLoading(true);
//             setError(null);

//             try {
//                 const token = localStorage.getItem("authToken");
//                 if (!token) {
//                     setError("Authentication token not found");
//                     setLoading(false);
//                     return;
//                 }

//                 const userResponse = await axios.get(`${API_BASE_URL}/admin/users/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });

//                 if (userResponse.status !== 200) {
//                     throw new Error(`Failed to fetch user. Status code: ${userResponse.status}`);
//                 }

//                 setUser(userResponse.data);

//                 const ordersResponse = await axios.get(`${API_BASE_URL}/admin/users/${userId}/orders`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });

//                 if (ordersResponse.status !== 200) {
//                     throw new Error(`Failed to fetch orders. Status code: ${ordersResponse.status}`);
//                 }

//                 if (Array.isArray(ordersResponse.data)) {
//                     setOrders(ordersResponse.data);
//                 } else {
//                     throw new Error("Data returned was not of the right type (should be an array)");
//                 }

//             } catch (err) {
//                 setError(err.message || "Failed to load user and/or orders");
//                 console.error("Error fetching user:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUserAndOrders();
//     }, [API_BASE_URL, userId]);

//     const handleGoBack = () => {
//         navigate(-1);
//     };

//     const truncateId = (id) => {
//         if (!id) return "";

//         const parts = id.split("-");
//         if (parts.length > 0) {
//             return parts.slice(0, Math.min(4, parts.length)).join("-");
//         }
//         return id;
//     };

//     const formatDate = (dateString) => {
//         if (!dateString) return "";
//         return moment(dateString).format("DD/MM/YYYY");
//     };

//     // Functions copied from OrderList
//     const handleEdit = (order) => {
//         setSelectedOrder(order);
//         setShowEditPopup(true);
//     };

//     const handleView = (order) => {
//         setSelectedOrder(order);
//         setShowViewPopup(true);
//     };

//     const handleDeleteClick = (orderId) => {
//         setOrderToDelete(orderId);
//         setShowDeleteConfirmation(true);
//     };

//     const handleDeleteConfirm = async () => {
//         try {
//             const token = localStorage.getItem("authToken");
//             if (!token) {
//                 setError("Token missing or invalid.");
//                 return;
//             }

//             await axios.delete(`${API_BASE_URL}/admin/orders/${orderToDelete}`, {  // Ensure correct API endpoint
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setOrders((prevOrders) =>
//                 prevOrders.filter((order) => order.orderId !== orderToDelete)
//             );
//         } catch (err) {
//             console.error("Error deleting order:", err);
//             setError(err.message || "Failed to delete order");
//         } finally {
//             setShowDeleteConfirmation(false);
//             setOrderToDelete(null);
//         }
//     };

//     const handleDeleteCancel = () => {
//         setShowDeleteConfirmation(false);
//         setOrderToDelete(null);
//     };

//     const updateOrderInState = (updatedOrder) => {
//         setOrders((prevOrders) =>
//             prevOrders.map((order) =>
//                 order.orderId === updatedOrder.orderId ? updatedOrder : order
//             )
//         );
//     };

//     if (loading) {
//         return <div className="flex justify-center items-center h-48">Loading user details...</div>;
//     }

//     if (error) {
//         return <div className="text-red-500">Error: {error}</div>;
//     }

//     if (!user) {
//         return <div>User not found.</div>;
//     }

//     return (
//         <div>
//             <h2 className="text-2xl font-semibold mb-4">User Details</h2>
//             <button onClick={handleGoBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 focus:outline-none focus:shadow-outline">
//                 Back
//             </button>
//             <div className="bg-white shadow-md rounded-lg p-6 mb-4">
//                 <div className="mb-4">
//                     <h3 className="text-xl font-semibold">Personal Information</h3>
//                     <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
//                     <p><strong>Email:</strong> {user.email}</p>
//                     <p><strong>Role:</strong> {user.role}</p>
//                 </div>
//             </div>

//             <h3 className="text-xl font-semibold mb-2">User Orders</h3>
//             <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
//                 <table className="min-w-full bg-white">
//                     <thead className="bg-gray-200">
//                         <tr>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order ID</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Category</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Service</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Quantity</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Started Votes</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Deliver Votes</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Withheld Price</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order Date</th>
//                               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                                     Actions
//                                 </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orders.map((order, index) => (
//                             <tr key={order._id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">{truncateId(order.orderId.substring(0, 4))}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.category}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.service}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.quantity}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.status}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.started}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.completedVotes || 0}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">${order.calculatedPrice}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{formatDate(order.createdAt)}</td>
//                                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                                         <div className="flex items-center justify-center gap-2">
//                                             <button
//                                                 className="px-2 py-2 rounded-md border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
//                                                 onClick={() => handleEdit(order)}
//                                                 title="Edit Order"
//                                             >
//                                                 <FaEdit className="h-4 w-4" />
//                                             </button>
//                                             <button
//                                                 className="px-2 py-2 rounded-md border border-red-500 text-red-500 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-colors duration-200"
//                                                 onClick={() => handleDeleteClick(order.orderId)}
//                                                 title="Delete Order"
//                                             >
//                                                 <FaTrash className="h-4 w-4" />
//                                             </button>
//                                             <button
//                                                 className="px-2 py-2 rounded-md border border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-200"
//                                                 onClick={() => handleView(order)}
//                                                 title="View Order"
//                                             >
//                                                 <FiEye className="h-4 w-4" />
//                                             </button>
//                                         </div>
//                                     </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             {orders.length === 0 && !loading && !error && (
//                 <p className="mt-4 text-gray-600">No orders found for this user.</p>
//             )}

//             {showDeleteConfirmation && (
//                 <DeleteConfirmationPopup
//                     onCancel={handleDeleteCancel}
//                     onConfirm={handleDeleteConfirm}
//                     setShowDeleteConfirmation={setShowDeleteConfirmation}
//                 />
//             )}

//             {showEditPopup && selectedOrder && (
//                 <EditOrderPopup
//                     order={selectedOrder}
//                     onClose={() => setShowEditPopup(false)}
//                     onSave={async (updatedFields) => {
//                         try {
//                             const token = localStorage.getItem("authToken");
//                             if (!token) {
//                                 setError("Token missing or invalid.");
//                                 return;
//                             }

//                             const response = await axios.put(
//                                 `${API_BASE_URL}/admin/orders/${selectedOrder.orderId}`,
//                                 updatedFields,
//                                 {
//                                     headers: { Authorization: `Bearer ${token}` },
//                                 }
//                             );

//                             if (response.status === 200) {
//                                 const updatedOrder = { ...selectedOrder, ...updatedFields };
//                                 updateOrderInState(updatedOrder);
//                             } else {
//                                 setError(
//                                     "Failed to update order. " + (response.data?.message || "")
//                                 );
//                             }
//                         } catch (err) {
//                             console.error("Error updating order:", err);
//                             setError(err.message || "Failed to update order");
//                         } finally {
//                             setShowEditPopup(false);
//                         }
//                     }}
//                 />
//             )}

//             {showViewPopup && selectedOrder && (
//                 <ViewOrderPopup
//                     order={selectedOrder}
//                     onClose={() => setShowViewPopup(false)}
//                 />
//             )}
//         </div>
//     );
// };

// export default UserProfile;

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import moment from 'moment';
// import { FiEye } from 'react-icons/fi';
// import { FaEdit, FaTrash } from "react-icons/fa";
// import DeleteConfirmationPopup from "../components/OrderList/DeleteConfirmationPopup";
// import EditOrderPopup from "../components/OrderList/EditOrderPopup";
// import ViewOrderPopup from "../components/OrderList/ViewOrderPopup";

// const UserProfile = () => {
//     const { userId } = useParams();
//     const [user, setUser] = useState(null);
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();
//     const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//     const [orderToDelete, setOrderToDelete] = useState(null);
//     const [showEditPopup, setShowEditPopup] = useState(false);
//     const [showViewPopup, setShowViewPopup] = useState(false);
//     const [selectedOrder, setSelectedOrder] = useState(null);
//     const [payments, setPayments] = useState([]); // Added payments state
//     const [totalAmount, setTotalAmount] = useState(0); // Added state for total amount

//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     useEffect(() => {
//         const fetchUserAndOrders = async () => {
//             setLoading(true);
//             setError(null);

//             try {
//                 const token = localStorage.getItem("authToken");
//                 if (!token) {
//                     setError("Authentication token not found");
//                     setLoading(false);
//                     return;
//                 }

//                 const userResponse = await axios.get(`${API_BASE_URL}/admin/users/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });

//                 if (userResponse.status !== 200) {
//                     throw new Error(`Failed to fetch user. Status code: ${userResponse.status}`);
//                 }

//                 setUser(userResponse.data);

//                 const ordersResponse = await axios.get(`${API_BASE_URL}/admin/users/${userId}/orders`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });

//                 if (ordersResponse.status !== 200) {
//                     throw new Error(`Failed to fetch orders. Status code: ${ordersResponse.status}`);
//                 }

//                 if (Array.isArray(ordersResponse.data)) {
//                     setOrders(ordersResponse.data);
//                 } else {
//                     throw new Error("Data returned was not of the right type (should be an array)");
//                 }

//             } catch (err) {
//                 setError(err.message || "Failed to load user and/or orders");
//                 console.error("Error fetching user:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         const fetchPayments = async () => {
//             try {
//                 const token = localStorage.getItem('authToken');
//                 if (!token) {
//                     console.error('Authentication token not found');
//                     return;
//                 }

//                 const paymentsResponse = await axios.get(`${API_BASE_URL}/admin/users/${userId}/payments`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });
//                 //const filteredPayments = paymentsResponse.data.payments.filter(payment => payment.userId === userId);  // Filter by userId on the client side

//                 setPayments(paymentsResponse.data.payments); // Set payment state

//             } catch (error) {
//                 console.error('Error fetching payments:', error);
//             }
//         };
//         fetchPayments();
//         fetchUserAndOrders();
//     }, [API_BASE_URL, userId]);

//     useEffect(() => {
//         // Calculate total amount from payments
//         const calculateTotalAmount = () => {
//             const total = payments.reduce((acc, payment) => acc + payment.amount, 0);
//             setTotalAmount(total);
//         };

//         calculateTotalAmount();
//     }, [payments]);

//     // Calculating Balance
//     const currentBalance = user && totalAmount - (user.spentAmount || 0);

//     const handleGoBack = () => {
//         navigate(-1);
//     };

//     const truncateId = (id) => {
//         if (!id) return "";

//         const parts = id.split("-");
//         if (parts.length > 0) {
//             return parts.slice(0, Math.min(4, parts.length)).join("-");
//         }
//         return id;
//     };

//     const formatDate = (dateString) => {
//         if (!dateString) return "";
//         return moment(dateString).format("DD/MM/YYYY");
//     };

//     const handleEdit = (order) => {
//         setSelectedOrder(order);
//         setShowEditPopup(true);
//     };

//     const handleView = (order) => {
//         setSelectedOrder(order);
//         setShowViewPopup(true);
//     };

//     const handleDeleteClick = (orderId) => {
//         setOrderToDelete(orderId);
//         setShowDeleteConfirmation(true);
//     };

//     const handleDeleteConfirm = async () => {
//         try {
//             const token = localStorage.getItem("authToken");
//             if (!token) {
//                 setError("Token missing or invalid.");
//                 return;
//             }

//             await axios.delete(`${API_BASE_URL}/admin/orders/${orderToDelete}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setOrders((prevOrders) =>
//                 prevOrders.filter((order) => order.orderId !== orderToDelete)
//             );
//         } catch (err) {
//             console.error("Error deleting order:", err);
//             setError(err.message || "Failed to delete order");
//         } finally {
//             setShowDeleteConfirmation(false);
//             setOrderToDelete(null);
//         }
//     };

//     const handleDeleteCancel = () => {
//         setShowDeleteConfirmation(false);
//         setOrderToDelete(null);
//     };

//     const updateOrderInState = (updatedOrder) => {
//         setOrders((prevOrders) =>
//             prevOrders.map((order) =>
//                 order.orderId === updatedOrder.orderId ? updatedOrder : order
//             )
//         );
//     };

//     if (loading) {
//         return <div className="flex justify-center items-center h-48">Loading user details...</div>;
//     }

//     if (error) {
//         return <div className="text-red-500">Error: {error}</div>;
//     }

//     if (!user) {
//         return <div>User not found.</div>;
//     }

//     return (
//         <div>
//             <h2 className="text-2xl font-semibold mb-4">User Details</h2>
//             <button onClick={handleGoBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 focus:outline-none focus:shadow-outline">
//                 Back
//             </button>
//             <div className="bg-white shadow-md rounded-lg p-6 mb-4">
//                 <div className="mb-4">
//                     <h3 className="text-xl font-semibold">Personal Information</h3>
//                     <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
//                     <p><strong>Email:</strong> {user.email}</p>
//                     <p><strong>Role:</strong> {user.role}</p>
//                     <p><strong>Total Amount:</strong> ${totalAmount}</p>
//                     {user.spentAmount !== undefined && (
//                         <p><strong>Spent Amount:</strong> ${user.spentAmount}</p>
//                     )}
//                     {currentBalance !== undefined && (
//                         <p><strong>Current Balance:</strong> ${currentBalance}</p>
//                     )}
//                 </div>
//             </div>

//             {/* Payment History */}
//             <h3 className="text-xl font-semibold mb-2">Payment History</h3>
//             {payments.length > 0 ? (
//                 <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
//                     <table className="min-w-full bg-white">
//                         <thead className="bg-gray-200">
//                             <tr>
//                                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Payment ID</th>
//                                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Amount</th>
//                                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Date</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {payments.map((payment) => (
//                                 <tr key={payment._id}>
//                                     <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{payment._id.substring(0, 4)}</td>
//                                     <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">${payment.amount}</td>
//                                     <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{formatDate(payment.createdAt)}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             ) : (
//                 <p className="mt-4 text-gray-600">No payment history available for this user.</p>
//             )}

//             <h3 className="text-xl font-semibold mb-2">User Orders</h3>
//             <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
//                 <table className="min-w-full bg-white">
//                     <thead className="bg-gray-200">
//                         <tr>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order ID</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Category</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Service</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Quantity</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Started Votes</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Deliver Votes</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Withheld Price</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order Date</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                                 Actions
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orders.map((order, index) => (
//                             <tr key={order._id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">{truncateId(order.orderId.substring(0, 4))}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.category}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.service}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.quantity}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.status}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.started}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.completedVotes || 0}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">${order.calculatedPrice}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{formatDate(order.createdAt)}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                                     <div className="flex items-center justify-center gap-2">
//                                         <button
//                                             className="px-2 py-2 rounded-md border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
//                                             onClick={() => handleEdit(order)}
//                                             title="Edit Order"
//                                         >
//                                             <FaEdit className="h-4 w-4" />
//                                         </button>
//                                         <button
//                                             className="px-2 py-2 rounded-md border border-red-500 text-red-500 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-colors duration-200"
//                                             onClick={() => handleDeleteClick(order.orderId)}
//                                             title="Delete Order"
//                                         >
//                                             <FaTrash className="h-4 w-4" />
//                                         </button>
//                                         <button
//                                             className="px-2 py-2 rounded-md border border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-200"
//                                             onClick={() => handleView(order)}
//                                             title="View Order"
//                                         >
//                                             <FiEye className="h-4 w-4" />
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             {orders.length === 0 && !loading && !error && (
//                 <p className="mt-4 text-gray-600">No orders found for this user.</p>
//             )}

//             {showDeleteConfirmation && (
//                 <DeleteConfirmationPopup
//                     onCancel={handleDeleteCancel}
//                     onConfirm={handleDeleteConfirm}
//                     setShowDeleteConfirmation={setShowDeleteConfirmation}
//                 />
//             )}

//             {showEditPopup && selectedOrder && (
//                 <EditOrderPopup
//                     order={selectedOrder}
//                     onClose={() => setShowEditPopup(false)}
//                     onSave={async (updatedFields) => {
//                         try {
//                             const token = localStorage.getItem("authToken");
//                             if (!token) {
//                                 setError("Token missing or invalid.");
//                                 return;
//                             }

//                             const response = await axios.put(
//                                 `${API_BASE_URL}/admin/orders/${selectedOrder.orderId}`,
//                                 updatedFields,
//                                 {
//                                     headers: { Authorization: `Bearer ${token}` },
//                                 }
//                             );

//                             if (response.status === 200) {
//                                 const updatedOrder = { ...selectedOrder, ...updatedFields };
//                                 updateOrderInState(updatedOrder);
//                             } else {
//                                 setError(
//                                     "Failed to update order. " + (response.data?.message || "")
//                                 );
//                             }
//                         } catch (err) {
//                             console.error("Error updating order:", err);
//                             setError(err.message || "Failed to update order");
//                         } finally {
//                             setShowEditPopup(false);
//                         }
//                     }}
//                 />
//             )}

//             {showViewPopup && selectedOrder && (
//                 <ViewOrderPopup
//                     order={selectedOrder}
//                     onClose={() => setShowViewPopup(false)}
//                 />
//             )}
//         </div>
//     );
// };

// export default UserProfile;

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import moment from 'moment';
// import { FiEye } from 'react-icons/fi';
// import { FaEdit, FaTrash, FaUser, FaMoneyBillWave } from "react-icons/fa"; // Added FaMoneyBillWave Icon
// import DeleteConfirmationPopup from "../components/OrderList/DeleteConfirmationPopup";
// import EditOrderPopup from "../components/OrderList/EditOrderPopup";
// import ViewOrderPopup from "../components/OrderList/ViewOrderPopup";
// import PaymentHistoryPopup from '../components/PaymentHistoryPopup'; // PaymentHistoryPopup

// const UserProfile = () => {
//     const { userId } = useParams();
//     const [user, setUser] = useState(null);
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();
//     const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//     const [orderToDelete, setOrderToDelete] = useState(null);
//     const [showEditPopup, setShowEditPopup] = useState(false);
//     const [showViewPopup, setShowViewPopup] = useState(false);
//     const [selectedOrder, setSelectedOrder] = useState(null);
//     const [payments, setPayments] = useState([]); // Added payments state
//     const [totalAmount, setTotalAmount] = useState(0); // Added state for total amount
//     const [showPaymentHistoryPopup, setShowPaymentHistoryPopup] = useState(false);  //Payment History popup

//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     useEffect(() => {
//         const fetchUserAndOrders = async () => {
//             setLoading(true);
//             setError(null);

//             try {
//                 const token = localStorage.getItem("authToken");
//                 if (!token) {
//                     setError("Authentication token not found");
//                     setLoading(false);
//                     return;
//                 }

//                 const userResponse = await axios.get(`${API_BASE_URL}/admin/users/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });

//                 if (userResponse.status !== 200) {
//                     throw new Error(`Failed to fetch user. Status code: ${userResponse.status}`);
//                 }

//                 setUser(userResponse.data);

//                 const ordersResponse = await axios.get(`${API_BASE_URL}/admin/users/${userId}/orders`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });

//                 if (ordersResponse.status !== 200) {
//                     throw new Error(`Failed to fetch orders. Status code: ${ordersResponse.status}`);
//                 }

//                 if (Array.isArray(ordersResponse.data)) {
//                     setOrders(ordersResponse.data);
//                 } else {
//                     throw new Error("Data returned was not of the right type (should be an array)");
//                 }

//             } catch (err) {
//                 setError(err.message || "Failed to load user and/or orders");
//                 console.error("Error fetching user:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         const fetchPayments = async () => {
//             try {
//                 const token = localStorage.getItem('authToken');
//                 if (!token) {
//                     console.error('Authentication token not found');
//                     return;
//                 }

//                 const paymentsResponse = await axios.get(`${API_BASE_URL}/admin/users/${userId}/payments`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });

//                 setPayments(paymentsResponse.data.payments); // Set payment state

//             } catch (error) {
//                 console.error('Error fetching payments:', error);
//             }
//         };
//         fetchPayments();
//         fetchUserAndOrders();
//     }, [API_BASE_URL, userId]);

//     useEffect(() => {
//         // Calculate total amount from payments
//         const calculateTotalAmount = () => {
//             const total = payments.reduce((acc, payment) => acc + payment.amount, 0);
//             setTotalAmount(total);
//         };

//         calculateTotalAmount();
//     }, [payments]);

//     // Calculating Balance
//     const currentBalance = user && totalAmount - (user.spentAmount || 0);

//     const handleGoBack = () => {
//         navigate(-1);
//     };

//     const truncateId = (id) => {
//         if (!id) return "";

//         const parts = id.split("-");
//         if (parts.length > 0) {
//             return parts.slice(0, Math.min(4, parts.length)).join("-");
//         }
//         return id;
//     };

//     const formatDate = (dateString) => {
//         if (!dateString) return "";
//         return moment(dateString).format("DD/MM/YYYY");
//     };

//     const handleEdit = (order) => {
//         setSelectedOrder(order);
//         setShowEditPopup(true);
//     };

//     const handleView = (order) => {
//         setSelectedOrder(order);
//         setShowViewPopup(true);
//     };

//     const handleDeleteClick = (orderId) => {
//         setOrderToDelete(orderId);
//         setShowDeleteConfirmation(true);
//     };

//     const handleDeleteConfirm = async () => {
//         try {
//             const token = localStorage.getItem("authToken");
//             if (!token) {
//                 setError("Token missing or invalid.");
//                 return;
//             }

//             await axios.delete(`${API_BASE_URL}/admin/orders/${orderToDelete}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setOrders((prevOrders) =>
//                 prevOrders.filter((order) => order.orderId !== orderToDelete)
//             );
//         } catch (err) {
//             console.error("Error deleting order:", err);
//             setError(err.message || "Failed to delete order");
//         } finally {
//             setShowDeleteConfirmation(false);
//             setOrderToDelete(null);
//         }
//     };

//     const handleDeleteCancel = () => {
//         setShowDeleteConfirmation(false);
//         setOrderToDelete(null);
//     };

//     const updateOrderInState = (updatedOrder) => {
//         setOrders((prevOrders) =>
//             prevOrders.map((order) =>
//                 order.orderId === updatedOrder.orderId ? updatedOrder : order
//             )
//         );
//     };

//     //Function to payment history to toggle open or not
//     const togglePaymentHistoryPopup = () => {
//         setShowPaymentHistoryPopup(!showPaymentHistoryPopup);
//     };

//     if (loading) {
//         return <div className="flex justify-center items-center h-48">Loading user details...</div>;
//     }

//     if (error) {
//         return <div className="text-red-500">Error: {error}</div>;
//     }

//     if (!user) {
//         return <div>User not found.</div>;
//     }

//     return (
//         <div className="container mx-auto p-6">
//             <h2 className="text-3xl font-bold text-gray-800 mb-2 md:mb-0">User Profile</h2>
//             <div className="my-4 inline-block" >
//                 <div className="flex justify-start gap-4 border border-gray-300 p-3 rounded-full">
//                     <div className="bg-main-color text-white py-3 px-8 border border-main-color rounded-full cursor-pointer" onClick={handleGoBack}>Go Back</div>
//                     <div className="bg-white text-gray-900 py-3 px-8 border border-gray-300 rounded-full cursor-pointer" onClick={togglePaymentHistoryPopup}>Payment History</div>
//                 </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* User Details Card */}
//                 <div className="bg-white shadow-md rounded-lg p-6">
//                     <div className="flex items-center space-x-6 mb-4">
//                         <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-200 text-gray-600">
//                             <FaUser className="h-8 w-8" />
//                         </div>
//                         <div>
//                             <h3 className="text-xl font-semibold text-gray-800">{user.firstName} {user.lastName}</h3>
//                             <p className="text-gray-500">{user.email}</p>
//                         </div>
//                     </div>
//                     <div className="mb-4">
//                         <h4 className="text-lg font-semibold text-gray-700">Information</h4>
//                         <p><strong>Role:</strong> {user.role}</p>
//                         <p><strong>Total Amount Paid:</strong> ${totalAmount.toFixed(2)}</p>
//                         {user.spentAmount !== undefined && (
//                             <p><strong>Amount Spent:</strong> ${user.spentAmount.toFixed(2)}</p>
//                         )}
//                         {currentBalance !== undefined && (
//                             <p><strong>Current Balance:</strong> ${currentBalance.toFixed(2)}</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//             <h3 className="text-xl font-semibold mb-2">User Orders</h3>
//             <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
//                 <table className="min-w-full bg-white">
//                     <thead className="bg-gray-200">
//                         <tr>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order ID</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Category</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Service</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Quantity</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Started Votes</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Deliver Votes</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Withheld Price</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order Date</th>
//                             <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                                 Actions
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orders.map((order, index) => (
//                             <tr key={order._id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">{truncateId(order.orderId.substring(0, 4))}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.category}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.service}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.quantity}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.status}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.started}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.completedVotes || 0}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">${order.calculatedPrice}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{formatDate(order.createdAt)}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                                     <div className="flex items-center justify-center gap-2">
//                                         <button
//                                             className="px-2 py-2 rounded-md border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
//                                             onClick={() => handleEdit(order)}
//                                             title="Edit Order"
//                                         >
//                                             <FaEdit className="h-4 w-4" />
//                                         </button>
//                                         <button
//                                             className="px-2 py-2 rounded-md border border-red-500 text-red-500 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-colors duration-200"
//                                             onClick={() => handleDeleteClick(order.orderId)}
//                                             title="Delete Order"
//                                         >
//                                             <FaTrash className="h-4 w-4" />
//                                         </button>
//                                         <button
//                                             className="px-2 py-2 rounded-md border border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-200"
//                                             onClick={() => handleView(order)}
//                                             title="View Order"
//                                         >
//                                             <FiEye className="h-4 w-4" />
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             {orders.length === 0 && !loading && !error && (
//                 <p className="mt-4 text-gray-600">No orders found for this user.</p>
//             )}

//             {/* Modals */}
//             {showDeleteConfirmation && (
//                 <DeleteConfirmationPopup
//                     onCancel={handleDeleteCancel}
//                     onConfirm={handleDeleteConfirm}
//                     setShowDeleteConfirmation={setShowDeleteConfirmation}
//                 />
//             )}

//             {showEditPopup && selectedOrder && (
//                 <EditOrderPopup
//                     order={selectedOrder}
//                     onClose={() => setShowEditPopup(false)}
//                     onSave={async (updatedFields) => {
//                         try {
//                             const token = localStorage.getItem("authToken");
//                             if (!token) {
//                                 setError("Token missing or invalid.");
//                                 return;
//                             }

//                             const response = await axios.put(
//                                 `${API_BASE_URL}/admin/orders/${selectedOrder.orderId}`,
//                                 updatedFields,
//                                 {
//                                     headers: { Authorization: `Bearer ${token}` },
//                                 }
//                             );

//                             if (response.status === 200) {
//                                 const updatedOrder = { ...selectedOrder, ...updatedFields };
//                                 updateOrderInState(updatedOrder);
//                             } else {
//                                 setError(
//                                     "Failed to update order. " + (response.data?.message || "")
//                                 );
//                             }
//                         } catch (err) {
//                             console.error("Error updating order:", err);
//                             setError(err.message || "Failed to update order");
//                         } finally {
//                             setShowEditPopup(false);
//                         }
//                     }}
//                 />
//             )}

//             {showViewPopup && selectedOrder && (
//                 <ViewOrderPopup
//                     order={selectedOrder}
//                     onClose={() => setShowViewPopup(false)}
//                 />
//             )}

//             {showPaymentHistoryPopup && ( // Show Payment History
//                 <PaymentHistoryPopup
//                     payments={payments}
//                     onClose={togglePaymentHistoryPopup}
//                     formatDate={formatDate}
//                 />
//             )}
//         </div>
//     );
// };

// export default UserProfile;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import moment from "moment";
// import { RiEdit2Fill } from "react-icons/ri";
// import { FaRegTrashCan, FaUser } from "react-icons/fa6";
// import { IoEyeSharp } from "react-icons/io5";
// import DeleteConfirmationPopup from "../components/OrderList/DeleteConfirmationPopup";
// import EditOrderPopup from "../components/OrderList/EditOrderPopup";
// import ViewOrderPopup from "../components/OrderList/ViewOrderPopup";
// import PaymentHistoryPopup from "../components/PaymentHistoryPopup"; // PaymentHistoryPopup

// const UserProfile = () => {
//   const { userId } = useParams();
//   const [user, setUser] = useState(null);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//   const [orderToDelete, setOrderToDelete] = useState(null);
//   const [showEditPopup, setShowEditPopup] = useState(false);
//   const [showViewPopup, setShowViewPopup] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [payments, setPayments] = useState([]); // Added payments state
//   const [totalAmount, setTotalAmount] = useState(0); // Added state for total amount
//   const [showPaymentHistoryPopup, setShowPaymentHistoryPopup] = useState(false); //Payment History popup

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const fetchUserAndOrders = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const token = localStorage.getItem("authToken");
//         if (!token) {
//           setError("Authentication token not found");
//           setLoading(false);
//           return;
//         }

//         const userResponse = await axios.get(
//           `${API_BASE_URL}/admin/users/${userId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (userResponse.status !== 200) {
//           throw new Error(
//             `Failed to fetch user. Status code: ${userResponse.status}`
//           );
//         }

//         setUser(userResponse.data);

//         const ordersResponse = await axios.get(
//           `${API_BASE_URL}/admin/users/${userId}/orders`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (ordersResponse.status !== 200) {
//           throw new Error(
//             `Failed to fetch orders. Status code: ${ordersResponse.status}`
//           );
//         }

//         if (Array.isArray(ordersResponse.data)) {
//           // Sort orders by createdAt in descending order (latest first)
//           const sortedOrders = [...ordersResponse.data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//           setOrders(sortedOrders);
//         } else {
//           throw new Error(
//             "Data returned was not of the right type (should be an array)"
//           );
//         }
//       } catch (err) {
//         setError(err.message || "Failed to load user and/or orders");
//         console.error("Error fetching user:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchPayments = async () => {
//       try {
//         const token = localStorage.getItem("authToken");
//         if (!token) {
//           console.error("Authentication token not found");
//           return;
//         }

//         const paymentsResponse = await axios.get(
//           `${API_BASE_URL}/admin/users/${userId}/payments`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         if (paymentsResponse.data && Array.isArray(paymentsResponse.data.payments)) {
//           // Sort payments by createdAt in descending order (latest first)
//           const sortedPayments = [...paymentsResponse.data.payments].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//           setPayments(sortedPayments); // Set sorted payments
//         } else {
//           console.error("Unexpected payments data format:", paymentsResponse.data);
//           setPayments([]);
//         }

//       } catch (error) {
//         console.error("Error fetching payments:", error);
//         setPayments([]);
//       }
//     };
//     fetchPayments();
//     fetchUserAndOrders();
//   }, [API_BASE_URL, userId]);

//   useEffect(() => {
//     // Calculate total amount from payments
//     const calculateTotalAmount = () => {
//       const total = payments.reduce((acc, payment) => acc + payment.amount, 0);
//       setTotalAmount(total);
//     };

//     calculateTotalAmount();
//   }, [payments]);

//   // Calculating Balance
//   const currentBalance = user && totalAmount - (user.spentAmount || 0);

//   const handleGoBack = () => {
//     navigate(-1);
//   };

//   const truncateId = (id) => {
//     if (!id) return "";

//     const parts = id.split("-");
//     if (parts.length > 0) {
//       return parts.slice(0, Math.min(4, parts.length)).join("-");
//     }
//     return id;
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return "";
//     return moment(dateString).format("DD/MM/YYYY");
//   };

//   const handleEdit = (order) => {
//     setSelectedOrder(order);
//     setShowEditPopup(true);
//   };

//   const handleView = (order) => {
//     setSelectedOrder(order);
//     setShowViewPopup(true);
//   };

//   const handleDeleteClick = (orderId) => {
//     setOrderToDelete(orderId);
//     setShowDeleteConfirmation(true);
//   };

//   const handleDeleteConfirm = async () => {
//     try {
//       const token = localStorage.getItem("authToken");
//       if (!token) {
//         setError("Token missing or invalid.");
//         return;
//       }

//       await axios.delete(`${API_BASE_URL}/admin/orders/${orderToDelete}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setOrders((prevOrders) =>
//         prevOrders.filter((order) => order.orderId !== orderToDelete)
//       );
//     } catch (err) {
//       console.error("Error deleting order:", err);
//       setError(err.message || "Failed to delete order");
//     } finally {
//       setShowDeleteConfirmation(false);
//       setOrderToDelete(null);
//     }
//   };

//   const handleDeleteCancel = () => {
//     setShowDeleteConfirmation(false);
//     setOrderToDelete(null);
//   };

//   const updateOrderInState = (updatedOrder) => {
//     setOrders((prevOrders) =>
//       prevOrders.map((order) =>
//         order.orderId === updatedOrder.orderId ? updatedOrder : order
//       )
//     );
//   };

//   //Function to payment history to toggle open or not
//   const togglePaymentHistoryPopup = () => {
//     setShowPaymentHistoryPopup(!showPaymentHistoryPopup);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-48">
//         Loading user details...
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-red-500">Error: {error}</div>;
//   }

//   if (!user) {
//     return <div>User not found.</div>;
//   }

//   return (
//     <div>
//       <h2 className="text-3xl font-bold text-gray-800 mb-2 md:mb-0">
//         User Profile
//       </h2>
//       <div className="my-4 inline-block">
//         <div className="flex justify-start gap-4 border border-gray-300 p-3 rounded-full">
//           <div
//             className="bg-main-color text-white py-3 px-8 border border-main-color rounded-full cursor-pointer"
//             onClick={handleGoBack}
//           >
//             Go Back
//           </div>
//           <div
//             className="bg-white text-gray-900 py-3 px-8 border border-gray-300 rounded-full cursor-pointer"
//             onClick={togglePaymentHistoryPopup}
//           >
//             Payment History
//           </div>
//         </div>
//       </div>

//        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Part 1: User Info Card */}
//         <div className="bg-gray-50 shadow-main border rounded-3xl overflow-hidden">
//           <div className="p-8 relative">
//             <div className="flex items-center space-x-6">
//               <div className="relative rounded-full shadow-inner-md border border-blue-300">
//                 <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-200 text-blue-700 shadow-md">
//                   <FaUser className="h-10 w-10" />
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-1">
//                   {user.firstName} {user.lastName}
//                 </h3>
//                 <p className="text-gray-600 font-medium">{user.email}</p>
//               </div>
//             </div>
//             {/* Role Tag with Subtle Glow Effect */}
//             <div
//               className={`flex items-center gap-3 bg-opacity-80 p-2 rounded-bl-xl w-fit absolute right-0 top-0 transition-colors duration-300
//           ${
//             user.role === "admin"
//               ? "bg-red-200 text-red-800 hover:bg-red-300"
//               : "bg-green-200 text-green-800 hover:bg-green-300"
//           }`}
//               style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
//             >
//               <span className="text-lg text-gray-900 font-semibold">Role:</span>
//               <span className="font-medium capitalize">{user.role}</span>
//             </div>
//           </div>
//         </div>

//         {/* Part 2: Information Card */}
//         <div className="bg-gray-50 shadow-main border rounded-3xl overflow-hidden">
//           <div className="p-8">
//             <h4 className="text-xl font-semibold text-gray-700 mb-4 relative before:block before:absolute before:left-0 before:bottom-0 before:w-14 before:h-0.5 before:bg-main-color">
//               Amount Information
//             </h4>
//             <div className="space-y-3">
//               <div className="flex items-center justify-between">
//                 <span className="text-lg font-semibold text-gray-700">
//                   Total Amount Paid:
//                 </span>
//                 <span className="text-green-600 font-bold">
//                   ${totalAmount.toFixed(2)}
//                 </span>
//               </div>
//               {user.spentAmount !== undefined && (
//                 <div className="flex items-center justify-between">
//                   <span className="text-lg font-semibold text-gray-700">
//                     Amount Spent:
//                   </span>
//                   <span className="text-red-600 font-bold">
//                     ${user.spentAmount.toFixed(2)}
//                   </span>
//                 </div>
//               )}
//               {currentBalance !== undefined && (
//                 <div className="flex items-center justify-between">
//                   <span className="text-lg font-semibold text-gray-700">
//                     Current Balance:
//                   </span>
//                   <span
//                     className={`font-bold ${
//                       currentBalance >= 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     ${currentBalance.toFixed(2)}
//                   </span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <h3 className="text-2xl font-semibold my-6">User Orders</h3>
//       {/* User Order table */}
//       <div className="overflow-x-auto rounded-2xl border border-gray-300 shadow-main">
//         <table className="min-w-full bg-white">
//           <thead className="bg-gray-light text-sub-color font-bold">
//             <tr>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Order ID
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Category
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Service
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Quantity
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Started Votes
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Deliver Votes
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Withheld Price
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Order Date
//               </th>
//               <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.length > 0 ? (
//               orders.map((order, index) => (
//                 <tr
//                   key={order._id}
//                   className={`hover:bg-gray-50 transition-colors`}
//                 >
//                   <td className="px-4 py-2 whitespace-nowrap text-sm">
//                     {truncateId(order.orderId.substring(0, 4))}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm">
//                     {order.category}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm">
//                     {order.service}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm">
//                     {order.quantity}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm">
//                     {order.status}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm">
//                     {order.started}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm">
//                     {order.completedVotes || 0}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm">
//                     ${order.calculatedPrice}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm">
//                     {formatDate(order.createdAt)}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm">
//                     <div className="flex items-center justify-center gap-1">
//                       {/* Edit Button */}
//                       <button
//                         className="px-2 py-2 rounded-md bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 transition-colors duration-200"
//                         onClick={() => handleEdit(order)}
//                         title="Edit Order"
//                       >
//                         <RiEdit2Fill className="h-4 w-4" />
//                       </button>

//                       {/* Delete Button */}
//                       <button
//                         className="px-2 py-2 rounded-md bg-red-100 text-red-500 hover:text-white hover:bg-red-500 transition-colors duration-200"
//                         onClick={() => handleDeleteClick(order.orderId)}
//                         title="Delete Order"
//                       >
//                         <FaRegTrashCan className="h-4 w-4" />
//                       </button>

//                       {/* View Button */}
//                       <button
//                         className="px-2 py-2 rounded-md bg-gray-200 text-gray-500 hover:text-white hover:bg-gray-500 transition-colors duration-200"
//                         onClick={() => handleView(order)}
//                         title="View Order"
//                       >
//                         <IoEyeSharp className="h-4 w-4" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="10" className="px-4 py-4 text-center text-lg font-bold text-gray-500">
//                   No orders found for this user.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modals */}
//       {showDeleteConfirmation && (
//         <DeleteConfirmationPopup
//           onCancel={handleDeleteCancel}
//           onConfirm={handleDeleteConfirm}
//           setShowDeleteConfirmation={setShowDeleteConfirmation}
//         />
//       )}

//       {showEditPopup && selectedOrder && (
//         <EditOrderPopup
//           order={selectedOrder}
//           onClose={() => setShowEditPopup(false)}
//           onSave={async (updatedFields) => {
//             try {
//               const token = localStorage.getItem("authToken");
//               if (!token) {
//                 setError("Token missing or invalid.");
//                 return;
//               }

//               const response = await axios.put(
//                 `${API_BASE_URL}/admin/orders/${selectedOrder.orderId}`,
//                 updatedFields,
//                 {
//                   headers: { Authorization: `Bearer ${token}` },
//                 }
//               );

//               if (response.status === 200) {
//                 const updatedOrder = { ...selectedOrder, ...updatedFields };
//                 updateOrderInState(updatedOrder);
//               } else {
//                 setError(
//                   "Failed to update order. " + (response.data?.message || "")
//                 );
//               }
//             } catch (err) {
//               console.error("Error updating order:", err);
//               setError(err.message || "Failed to update order");
//             } finally {
//               setShowEditPopup(false);
//             }
//           }}
//         />
//       )}

//       {showViewPopup && selectedOrder && (
//         <ViewOrderPopup
//           order={selectedOrder}
//           onClose={() => setShowViewPopup(false)}
//         />
//       )}

//       {showPaymentHistoryPopup && ( // Show Payment History
//         <PaymentHistoryPopup
//           payments={payments}
//           onClose={togglePaymentHistoryPopup}
//           formatDate={formatDate}
//         />
//       )}
//     </div>
//   );
// };

// export default UserProfile;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import moment from "moment";
// import { RiEdit2Fill } from "react-icons/ri";
// import { FaRegTrashCan, FaUser } from "react-icons/fa6";
// import { IoEyeSharp } from "react-icons/io5";
// import DeleteConfirmationPopup from "../components/OrderList/DeleteConfirmationPopup";
// import EditOrderPopup from "../components/OrderList/EditOrderPopup";
// import ViewOrderPopup from "../components/OrderList/ViewOrderPopup";
// import PaymentHistoryPopup from "../components/PaymentHistoryPopup"; // PaymentHistoryPopup
// import TokenService from "../../utils/TokenService";  // Import TokenService

// const UserProfile = () => {
//     const { userId } = useParams();
//     const [user, setUser] = useState(null);
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();
//     const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//     const [orderToDelete, setOrderToDelete] = useState(null);
//     const [showEditPopup, setShowEditPopup] = useState(false);
//     const [showViewPopup, setShowViewPopup] = useState(false);
//     const [selectedOrder, setSelectedOrder] = useState(null);
//     const [payments, setPayments] = useState([]); // Added payments state
//     const [totalAmount, setTotalAmount] = useState(0); // Added state for total amount
//     const [showPaymentHistoryPopup, setShowPaymentHistoryPopup] = useState(false); //Payment History popup

//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     const token = TokenService.getToken();  // Get token from TokenService

//     useEffect(() => {
//         const fetchUserAndOrders = async () => {
//             setLoading(true);
//             setError(null);

//             try {
//                 if (!token) {
//                     setError("Authentication token not found");
//                     setLoading(false);
//                     return;
//                 }

//                 const headers = {
//                     Authorization: `Bearer ${token}`
//                 };

//                 const userResponse = await axios.get(`${API_BASE_URL}/admin/users/${userId}`, {
//                     headers
//                 });

//                 if (userResponse.status !== 200) {
//                     throw new Error(
//                         `Failed to fetch user. Status code: ${userResponse.status}`
//                     );
//                 }

//                 setUser(userResponse.data);

//                 const ordersResponse = await axios.get(`${API_BASE_URL}/admin/users/${userId}/orders`, {
//                     headers
//                 });

//                 if (ordersResponse.status !== 200) {
//                     throw new Error(
//                         `Failed to fetch orders. Status code: ${ordersResponse.status}`
//                     );
//                 }

//                 if (Array.isArray(ordersResponse.data)) {
//                     // Sort orders by createdAt in descending order (latest first)
//                     const sortedOrders = [...ordersResponse.data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//                     setOrders(sortedOrders);
//                 } else {
//                     throw new Error(
//                         "Data returned was not of the right type (should be an array)"
//                     );
//                 }
//             } catch (err) {
//                 setError(err.message || "Failed to load user and/or orders");
//                 console.error("Error fetching user:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         const fetchPayments = async () => {
//             try {
//                 if (!token) {
//                     console.error("Authentication token not found");
//                     return;
//                 }

//                 const paymentsResponse = await axios.get(
//                     `${API_BASE_URL}/admin/users/${userId}/payments`,
//                     {
//                         headers: { Authorization: `Bearer ${token}` },
//                     }
//                 );

//                 if (paymentsResponse.data && Array.isArray(paymentsResponse.data.payments)) {
//                     // Sort payments by createdAt in descending order (latest first)
//                     const sortedPayments = [...paymentsResponse.data.payments].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//                     setPayments(sortedPayments); // Set sorted payments
//                 } else {
//                     console.error("Unexpected payments data format:", paymentsResponse.data);
//                     setPayments([]);
//                 }
//             } catch (error) {
//                 console.error("Error fetching payments:", error);
//                 setPayments([]);
//             }
//         };
//         fetchPayments();
//         fetchUserAndOrders();
//     }, [API_BASE_URL, userId, token]);

//     useEffect(() => {
//         // Calculate total amount from payments
//         const calculateTotalAmount = () => {
//             const total = payments.reduce((acc, payment) => acc + payment.amount, 0);
//             setTotalAmount(total);
//         };

//         calculateTotalAmount();
//     }, [payments]);

//     // Calculating Balance
//     const currentBalance = user && totalAmount - (user.spentAmount || 0);

//     const handleGoBack = () => {
//         navigate(-1);
//     };

//     const truncateId = (id) => {
//         if (!id) return "";

//         const parts = id.split("-");
//         if (parts.length > 0) {
//             return parts.slice(0, Math.min(4, parts.length)).join("-");
//         }
//         return id;
//     };

//     const formatDate = (dateString) => {
//         if (!dateString) return "";
//         return moment(dateString).format("DD/MM/YYYY");
//     };

//     const handleEdit = (order) => {
//         setSelectedOrder(order);
//         setShowEditPopup(true);
//     };

//     const handleView = (order) => {
//         setSelectedOrder(order);
//         setShowViewPopup(true);
//     };

//     const handleDeleteClick = (orderId) => {
//         setOrderToDelete(orderId);
//         setShowDeleteConfirmation(true);
//     };

//     const handleDeleteConfirm = async () => {
//         try {
//             if (!token) {
//                 setError("Token missing or invalid.");
//                 return;
//             }

//             await axios.delete(`${API_BASE_URL}/admin/orders/${orderToDelete}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setOrders((prevOrders) =>
//                 prevOrders.filter((order) => order.orderId !== orderToDelete)
//             );
//         } catch (err) {
//             console.error("Error deleting order:", err);
//             setError(err.message || "Failed to delete order");
//         } finally {
//             setShowDeleteConfirmation(false);
//             setOrderToDelete(null);
//         }
//     };

//     const handleDeleteCancel = () => {
//         setShowDeleteConfirmation(false);
//         setOrderToDelete(null);
//     };

//     const updateOrderInState = (updatedOrder) => {
//         setOrders((prevOrders) =>
//             prevOrders.map((order) =>
//                 order.orderId === updatedOrder.orderId ? updatedOrder : order
//             )
//         );
//     };

//     //Function to payment history to toggle open or not
//     const togglePaymentHistoryPopup = () => {
//         setShowPaymentHistoryPopup(!showPaymentHistoryPopup);
//     };

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center h-48">
//                 Loading user details...
//             </div>
//         );
//     }

//     if (error) {
//         return <div className="text-red-500">Error: {error}</div>;
//     }

//     if (!user) {
//         return <div>User not found.</div>;
//     }

//     return (
//         <div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-2 md:mb-0">
//                 User Profile
//             </h2>
//             <div className="my-4 inline-block">
//                 <div className="flex justify-start gap-4 border border-gray-300 p-3 rounded-full">
//                     <div
//                         className="bg-main-color text-white py-3 px-8 border border-main-color rounded-full cursor-pointer"
//                         onClick={handleGoBack}
//                     >
//                         Go Back
//                     </div>
//                     <div
//                         className="bg-white text-gray-900 py-3 px-8 border border-gray-300 rounded-full cursor-pointer"
//                         onClick={togglePaymentHistoryPopup}
//                     >
//                         Payment History
//                     </div>
//                 </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Part 1: User Info Card */}
//                 <div className="bg-gray-50 shadow-main border rounded-3xl overflow-hidden">
//                     <div className="p-8 relative">
//                         <div className="flex items-center space-x-6">
//                             <div className="relative rounded-full shadow-inner-md border border-blue-300">
//                                 <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-200 text-blue-700 shadow-md">
//                                     <FaUser className="h-10 w-10" />
//                                 </div>
//                             </div>
//                             <div>
//                                 <h3 className="text-2xl font-semibold text-gray-900 mb-1">
//                                     {user.firstName} {user.lastName}
//                                 </h3>
//                                 <p className="text-gray-600 font-medium">{user.email}</p>
//                             </div>
//                         </div>
//                         {/* Role Tag with Subtle Glow Effect */}
//                         <div
//                             className={`flex items-center gap-3 bg-opacity-80 p-2 rounded-bl-xl w-fit absolute right-0 top-0 transition-colors duration-300
//           ${user.role === "admin"
//                                     ? "bg-red-200 text-red-800 hover:bg-red-300"
//                                     : "bg-green-200 text-green-800 hover:bg-green-300"
//                                 }`}
//                             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
//                         >
//                             <span className="text-lg text-gray-900 font-semibold">Role:</span>
//                             <span className="font-medium capitalize">{user.role}</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Part 2: Information Card */}
//                 <div className="bg-gray-50 shadow-main border rounded-3xl overflow-hidden">
//                     <div className="p-8">
//                         <h4 className="text-xl font-semibold text-gray-700 mb-4 relative before:block before:absolute before:left-0 before:bottom-0 before:w-14 before:h-0.5 before:bg-main-color">
//                             Amount Information
//                         </h4>
//                         <div className="space-y-3">
//                             <div className="flex items-center justify-between">
//                                 <span className="text-lg font-semibold text-gray-700">
//                                     Total Amount Paid:
//                                 </span>
//                                 <span className="text-green-600 font-bold">
//                                     ${totalAmount.toFixed(2)}
//                                 </span>
//                             </div>
//                             {user.spentAmount !== undefined && (
//                                 <div className="flex items-center justify-between">
//                                     <span className="text-lg font-semibold text-gray-700">
//                                         Amount Spent:
//                                     </span>
//                                     <span className="text-red-600 font-bold">
//                                         ${user.spentAmount.toFixed(2)}
//                                     </span>
//                                 </div>
//                             )}
//                             {currentBalance !== undefined && (
//                                 <div className="flex items-center justify-between">
//                                     <span className="text-lg font-semibold text-gray-700">
//                                         Current Balance:
//                                     </span>
//                                     <span
//                                         className={`font-bold ${currentBalance >= 0 ? "text-green-600" : "text-red-600"
//                                             }`}
//                                     >
//                                         ${currentBalance.toFixed(2)}
//                                     </span>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <h3 className="text-2xl font-semibold my-6">User Orders</h3>
//             {/* User Order table */}
//             <div className="overflow-x-auto rounded-2xl border border-gray-300 shadow-main">
//                 <table className="min-w-full bg-white">
//                     <thead className="bg-gray-light text-sub-color font-bold">
//                         <tr>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Order ID
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Category
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Service
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Quantity
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Status
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Started Votes
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Deliver Votes
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Withheld Price
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Order Date
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Actions
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orders.map((order, index) => (
//                             <tr
//                                 key={order._id}
//                                 className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
//                             >
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     {truncateId(order.orderId.substring(0, 4))}
//                                 </td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     {order.category}
//                                 </td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     {order.service}
//                                 </td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     {order.quantity}
//                                 </td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     {order.status}
//                                 </td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     {order.started}
//                                 </td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     {order.completedVotes || 0}
//                                 </td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     ${order.calculatedPrice}
//                                 </td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     {formatDate(order.createdAt)}
//                                 </td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     <div className="flex items-center justify-center gap-1">
//                                         <button
//                                             className="px-2 py-2 rounded-md bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 transition-colors duration-200"
//                                             onClick={() => handleEdit(order)}
//                                             title="Edit Order"
//                                         >
//                                             <RiEdit2Fill className="h-4 w-4" />
//                                         </button>

//                                         <button
//                                             className="px-2 py-2 rounded-md bg-red-100 text-red-500 hover:text-white hover:bg-red-500 transition-colors duration-200"
//                                             onClick={() => handleDeleteClick(order.orderId)}
//                                             title="Delete Order"
//                                         >
//                                             <FaRegTrashCan className="h-4 w-4" />
//                                         </button>

//                                         <button
//                                             className="px-2 py-2 rounded-md bg-gray-200 text-gray-500 hover:text-white hover:bg-gray-500 transition-colors duration-200"
//                                             onClick={() => handleView(order)}
//                                             title="View Order"
//                                         >
//                                             <IoEyeSharp className="h-4 w-4" />
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//       {/* Modals */}
//       {showDeleteConfirmation && (
//         <DeleteConfirmationPopup
//           onCancel={handleDeleteCancel}
//           onConfirm={handleDeleteConfirm}
//           setShowDeleteConfirmation={setShowDeleteConfirmation}
//         />
//       )}

//       {showEditPopup && selectedOrder && (
//         <EditOrderPopup
//           order={selectedOrder}
//           onClose={() => setShowEditPopup(false)}
//           onSave={async (updatedFields) => {
//             try {
//                 const token = TokenService.getToken(); // Get token from TokenService
//                 if (!token) {
//                     setError("Token missing or invalid.");
//                     return;
//                 }

//               const response = await axios.put(
//                 `${API_BASE_URL}/admin/orders/${selectedOrder.orderId}`,
//                 updatedFields,
//                 {
//                   headers: { Authorization: `Bearer ${token}` },
//                 }
//               );

//               if (response.status === 200) {
//                 const updatedOrder = { ...selectedOrder, ...updatedFields };
//                 updateOrderInState(updatedOrder);
//               } else {
//                 setError(
//                   "Failed to update order. " + (response.data?.message || "")
//                 );
//               }
//             } catch (err) {
//               console.error("Error updating order:", err);
//               setError(err.message || "Failed to update order");
//             } finally {
//               setShowEditPopup(false);
//             }
//           }}
//         />
//       )}

//       {showViewPopup && selectedOrder && (
//         <ViewOrderPopup
//           order={selectedOrder}
//           onClose={() => setShowViewPopup(false)}
//         />
//       )}

//       {showPaymentHistoryPopup && ( // Show Payment History
//         <PaymentHistoryPopup
//           payments={payments}
//           onClose={togglePaymentHistoryPopup}
//           formatDate={formatDate}
//         />
//       )}
//     </div>
//   );
// };

// export default UserProfile;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import moment from "moment";
// import { RiEdit2Fill } from "react-icons/ri";
// import { FaRegTrashCan, FaUser } from "react-icons/fa6";
// import { IoEyeSharp } from "react-icons/io5";
// import DeleteConfirmationPopup from "../components/OrderList/DeleteConfirmationPopup";
// import EditOrderPopup from "../components/OrderList/EditOrderPopup";
// import ViewOrderPopup from "../components/OrderList/ViewOrderPopup";
// import PaymentHistoryPopup from "../components/PaymentHistoryPopup"; // PaymentHistoryPopup
// import TokenService from "../../utils/TokenService";  // Import TokenService

// const UserProfile = () => {
//     const { userId } = useParams();
//     const [user, setUser] = useState(null);
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();
//     const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//     const [orderToDelete, setOrderToDelete] = useState(null);
//     const [showEditPopup, setShowEditPopup] = useState(false);
//     const [showViewPopup, setShowViewPopup] = useState(false);
//     const [selectedOrder, setSelectedOrder] = useState(null);
//     const [payments, setPayments] = useState([]); // Added payments state
//     const [totalAmount, setTotalAmount] = useState(0); // Added state for total amount
//     const [showPaymentHistoryPopup, setShowPaymentHistoryPopup] = useState(false); //Payment History popup

//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     const token = TokenService.getToken();  // Get token from TokenService

//     useEffect(() => {
//         const fetchUserAndOrders = async () => {
//             setLoading(true);
//             setError(null);

//             try {
//                 if (!token) {
//                     setError("Authentication token not found");
//                     setLoading(false);
//                     return;
//                 }

//                 const headers = {
//                     Authorization: `Bearer ${token}`
//                 };

//                 const userResponse = await axios.get(`${API_BASE_URL}/admin/users/${userId}`, {
//                     headers
//                 });

//                 if (userResponse.status !== 200) {
//                     throw new Error(
//                         `Failed to fetch user. Status code: ${userResponse.status}`
//                     );
//                 }

//                 setUser(userResponse.data);

//                 const ordersResponse = await axios.get(`${API_BASE_URL}/admin/users/${userId}/orders`, {
//                     headers
//                 });

//                 if (ordersResponse.status !== 200) {
//                     throw new Error(
//                         `Failed to fetch orders. Status code: ${ordersResponse.status}`
//                     );
//                 }

//                 if (Array.isArray(ordersResponse.data)) {
//                     // Sort orders by createdAt in descending order (latest first)
//                     const sortedOrders = [...ordersResponse.data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//                     setOrders(sortedOrders);
//                 } else {
//                     throw new Error(
//                         "Data returned was not of the right type (should be an array)"
//                     );
//                 }
//             } catch (err) {
//                 setError(err.message || "Failed to load user and/or orders");
//                 console.error("Error fetching user:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         const fetchPayments = async () => {
//             try {
//                 if (!token) {
//                     console.error("Authentication token not found");
//                     return;
//                 }

//                 const paymentsResponse = await axios.get(
//                     `${API_BASE_URL}/admin/users/${userId}/payments`,
//                     {
//                         headers: { Authorization: `Bearer ${token}` },
//                     }
//                 );

//                 if (paymentsResponse.data && Array.isArray(paymentsResponse.data.payments)) {
//                     // Sort payments by createdAt in descending order (latest first)
//                     const sortedPayments = [...paymentsResponse.data.payments].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//                     setPayments(sortedPayments); // Set sorted payments
//                 } else {
//                     console.error("Unexpected payments data format:", paymentsResponse.data);
//                     setPayments([]);
//                 }
//             } catch (error) {
//                 console.error("Error fetching payments:", error);
//                 setPayments([]);
//             }
//         };
//         fetchPayments();
//         fetchUserAndOrders();
//     }, [API_BASE_URL, userId, token]);

//     useEffect(() => {
//         // Calculate total amount from payments
//         const calculateTotalAmount = () => {
//             const total = payments.reduce((acc, payment) => acc + payment.amount, 0);
//             setTotalAmount(total);
//         };

//         calculateTotalAmount();
//     }, [payments]);

//     // Calculating Balance
//     const currentBalance = user && totalAmount - (user.spentAmount || 0);

//     const handleGoBack = () => {
//         navigate(-1);
//     };

//     const truncateId = (id) => {
//         if (!id) return "";

//         const parts = id.split("-");
//         if (parts.length > 0) {
//             return parts.slice(0, Math.min(4, parts.length)).join("-");
//         }
//         return id;
//     };

//     const formatDate = (dateString) => {
//         if (!dateString) return "";
//         return moment(dateString).format("DD/MM/YYYY");
//     };

//     const handleEdit = (order) => {
//         setSelectedOrder(order);
//         setShowEditPopup(true);
//     };

//     const handleView = (order) => {
//         setSelectedOrder(order);
//         setShowViewPopup(true);
//     };

//     const handleDeleteClick = (orderId) => {
//         setOrderToDelete(orderId);
//         setShowDeleteConfirmation(true);
//     };

//     const handleDeleteConfirm = async () => {
//         try {
//             if (!token) {
//                 setError("Token missing or invalid.");
//                 return;
//             }

//             await axios.delete(`${API_BASE_URL}/admin/orders/${orderToDelete}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setOrders((prevOrders) =>
//                 prevOrders.filter((order) => order.orderId !== orderToDelete)
//             );
//         } catch (err) {
//             console.error("Error deleting order:", err);
//             setError(err.message || "Failed to delete order");
//         } finally {
//             setShowDeleteConfirmation(false);
//             setOrderToDelete(null);
//         }
//     };

//     const handleDeleteCancel = () => {
//         setShowDeleteConfirmation(false);
//         setOrderToDelete(null);
//     };

//     const updateOrderInState = (updatedOrder) => {
//         setOrders((prevOrders) =>
//             prevOrders.map((order) =>
//                 order.orderId === updatedOrder.orderId ? updatedOrder : order
//             )
//         );
//     };

//     //Function to payment history to toggle open or not
//     const togglePaymentHistoryPopup = () => {
//         setShowPaymentHistoryPopup(!showPaymentHistoryPopup);
//     };

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center h-48">
//                 Loading user details...
//             </div>
//         );
//     }

//     if (error) {
//         return <div className="text-red-500">Error: {error}</div>;
//     }

//     if (!user) {
//         return <div>User not found.</div>;
//     }

//     return (
//         <div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-2 md:mb-0">
//                 User Profile
//             </h2>
//             <div className="my-4 inline-block">
//                 <div className="flex justify-start gap-4 border border-gray-300 p-3 rounded-full">
//                     <div
//                         className="bg-main-color text-white py-3 px-8 border border-main-color rounded-full cursor-pointer"
//                         onClick={handleGoBack}
//                     >
//                         Go Back
//                     </div>
//                     <div
//                         className="bg-white text-gray-900 py-3 px-8 border border-gray-300 rounded-full cursor-pointer"
//                         onClick={togglePaymentHistoryPopup}
//                     >
//                         Payment History
//                     </div>
//                 </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Part 1: User Info Card */}
//                 <div className="bg-gray-50 shadow-main border rounded-3xl overflow-hidden">
//                     <div className="p-8 relative">
//                         <div className="flex items-center space-x-6">
//                             <div className="relative rounded-full shadow-inner-md border border-blue-300">
//                                 <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-200 text-blue-700 shadow-md">
//                                     <FaUser className="h-10 w-10" />
//                                 </div>
//                             </div>
//                             <div>
//                                 <h3 className="text-2xl font-semibold text-gray-900 mb-1">
//                                     {user.firstName} {user.lastName}
//                                 </h3>
//                                 <p className="text-gray-600 font-medium">{user.email}</p>
//                             </div>
//                         </div>
//                         {/* Role Tag with Subtle Glow Effect */}
//                         <div
//                             className={`flex items-center gap-3 bg-opacity-80 p-2 rounded-bl-xl w-fit absolute right-0 top-0 transition-colors duration-300
//           ${user.role === "admin"
//                                     ? "bg-red-200 text-red-800 hover:bg-red-300"
//                                     : "bg-green-200 text-green-800 hover:bg-green-300"
//                                 }`}
//                             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
//                         >
//                             <span className="text-lg text-gray-900 font-semibold">Role:</span>
//                             <span className="font-medium capitalize">{user.role}</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Part 2: Information Card */}
//                 <div className="bg-gray-50 shadow-main border rounded-3xl overflow-hidden">
//                     <div className="p-8">
//                         <h4 className="text-xl font-semibold text-gray-700 mb-4 relative before:block before:absolute before:left-0 before:bottom-0 before:w-14 before:h-0.5 before:bg-main-color">
//                             Amount Information
//                         </h4>
//                         <div className="space-y-3">
//                             <div className="flex items-center justify-between">
//                                 <span className="text-lg font-semibold text-gray-700">
//                                     Total Amount Paid:
//                                 </span>
//                                 <span className="text-green-600 font-bold">
//                                     ${totalAmount.toFixed(2)}
//                                 </span>
//                             </div>
//                             {user.spentAmount !== undefined && (
//                                 <div className="flex items-center justify-between">
//                                     <span className="text-lg font-semibold text-gray-700">
//                                         Amount Spent:
//                                     </span>
//                                     <span className="text-red-600 font-bold">
//                                         ${user.spentAmount.toFixed(2)}
//                                     </span>
//                                 </div>
//                             )}
//                             {currentBalance !== undefined && (
//                                 <div className="flex items-center justify-between">
//                                     <span className="text-lg font-semibold text-gray-700">
//                                         Current Balance:
//                                     </span>
//                                     <span
//                                         className={`font-bold ${currentBalance >= 0 ? "text-green-600" : "text-red-600"
//                                             }`}
//                                     >
//                                         ${currentBalance.toFixed(2)}
//                                     </span>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <h3 className="text-2xl font-semibold my-6">User Orders</h3>
//             {/* User Order table */}
//             <div className="overflow-x-auto rounded-2xl border border-gray-300 shadow-main">
//                 <table className="min-w-full bg-white">
//                     <thead className="bg-gray-200 text-sub-color font-bold">
//                         <tr>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Order ID
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Category
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Service
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Quantity
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Status
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Started Votes
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Deliver Votes
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Withheld Price
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Order Date
//                             </th>
//                             <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                 Actions
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orders.map((order, index) => (
//                             <tr
//                                 key={order._id}
//                                 className="hover:bg-gray-50 transition-colors"
//                             >
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     {truncateId(order.orderId.substring(0, 4))}
//                                 </td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     {order.category}
//                                 </td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     {order.service}
//                                 </td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     {order.quantity}
//                                 </td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     {order.status}
//                                 </td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     {order.started}
//                                 </td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     {order.completedVotes || 0}
//                                 </td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     ${order.calculatedPrice}
//                                 </td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     {formatDate(order.createdAt)}
//                                 </td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                     <div className="flex items-center justify-center gap-1">
//                                         <button
//                                             className="px-2 py-2 rounded-md bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 transition-colors duration-200"
//                                             onClick={() => handleEdit(order)}
//                                             title="Edit Order"
//                                         >
//                                             <RiEdit2Fill className="h-4 w-4" />
//                                         </button>

//                                         <button
//                                             className="px-2 py-2 rounded-md bg-red-100 text-red-500 hover:text-white hover:bg-red-500 transition-colors duration-200"
//                                             onClick={() => handleDeleteClick(order.orderId)}
//                                             title="Delete Order"
//                                         >
//                                             <FaRegTrashCan className="h-4 w-4" />
//                                         </button>

//                                         <button
//                                             className="px-2 py-2 rounded-md bg-gray-200 text-gray-500 hover:text-white hover:bg-gray-500 transition-colors duration-200"
//                                             onClick={() => handleView(order)}
//                                             title="View Order"
//                                         >
//                                             <IoEyeSharp className="h-4 w-4" />
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//       {/* Modals */}
//       {showDeleteConfirmation && (
//         <DeleteConfirmationPopup
//           onCancel={handleDeleteCancel}
//           onConfirm={handleDeleteConfirm}
//           setShowDeleteConfirmation={setShowDeleteConfirmation}
//         />
//       )}

//       {showEditPopup && selectedOrder && (
//         <EditOrderPopup
//           order={selectedOrder}
//           onClose={() => setShowEditPopup(false)}
//           onSave={async (updatedFields) => {
//             try {
//                 const token = TokenService.getToken(); // Get token from TokenService
//                 if (!token) {
//                     setError("Token missing or invalid.");
//                     return;
//                 }

//               const response = await axios.put(
//                 `${API_BASE_URL}/admin/orders/${selectedOrder.orderId}`,
//                 updatedFields,
//                 {
//                   headers: { Authorization: `Bearer ${token}` },
//                 }
//               );

//               if (response.status === 200) {
//                 const updatedOrder = { ...selectedOrder, ...updatedFields };
//                 updateOrderInState(updatedOrder);
//               } else {
//                 setError(
//                   "Failed to update order. " + (response.data?.message || "")
//                 );
//               }
//             } catch (err) {
//               console.error("Error updating order:", err);
//               setError(err.message || "Failed to update order");
//             } finally {
//               setShowEditPopup(false);
//             }
//           }}
//         />
//       )}

//       {showViewPopup && selectedOrder && (
//         <ViewOrderPopup
//           order={selectedOrder}
//           onClose={() => setShowViewPopup(false)}
//         />
//       )}

//       {showPaymentHistoryPopup && ( // Show Payment History
//         <PaymentHistoryPopup
//           payments={payments}
//           onClose={togglePaymentHistoryPopup}
//           formatDate={formatDate}
//         />
//       )}
//     </div>
//   );
// };

// export default UserProfile;




import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { RiEdit2Fill } from "react-icons/ri";
import { FaRegTrashCan, FaUser } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import DeleteConfirmationPopup from "../components/OrderList/DeleteConfirmationPopup";
import EditOrderPopup from "../components/OrderList/EditOrderPopup";
import ViewOrderPopup from "../components/OrderList/ViewOrderPopup";
import PaymentHistoryPopup from "../components/PaymentHistoryPopup";
import TokenService from "../../utils/TokenService";
import FilterAndSearch from "../components/FilterAndSearch"; // Import the component
import Pagination from "../components/Pagination"; // Import the Pagination component
import Data from "../../assets/Images/nodata.svg";

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showViewPopup, setShowViewPopup] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [payments, setPayments] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showPaymentHistoryPopup, setShowPaymentHistoryPopup] = useState(false);

  // New State for Filtering & Pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5); // Start as 5
  const [currentPage, setCurrentPage] = useState(1);
  const [sortLabel, setSortLabel] = useState("Sort");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const token = TokenService.getToken();

  //short order option
  const sortOptions = [
    { label: "Date Ascending", value: "date_asc" },
    { label: "Date Descending", value: "date_desc" },
    { label: "Quantity Ascending", value: "quantity_asc" },
    { label: "Quantity Descending", value: "quantity_desc" },
  ];

  useEffect(() => {
    const fetchUserAndOrders = async () => {
      setLoading(true);
      setError(null);

      try {
        if (!token) {
          setError("Authentication token not found");
          setLoading(false);
          return;
        }

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const userResponse = await axios.get(
          `${API_BASE_URL}/admin/users/${userId}`,
          {
            headers,
          }
        );

        if (userResponse.status !== 200) {
          throw new Error(
            `Failed to fetch user. Status code: ${userResponse.status}`
          );
        }

        setUser(userResponse.data);

        const ordersResponse = await axios.get(
          `${API_BASE_URL}/admin/users/${userId}/orders`,
          {
            headers,
          }
        );

        if (ordersResponse.status !== 200) {
          throw new Error(
            `Failed to fetch orders. Status code: ${ordersResponse.status}`
          );
        }
        setOrders(ordersResponse.data);
      } catch (err) {
        setError(err.message || "Failed to load user and/or orders");
        console.error("Error fetching user:", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchPayments = async () => {
      try {
        if (!token) {
          console.error("Authentication token not found");
          return;
        }

        const paymentsResponse = await axios.get(
          `${API_BASE_URL}/admin/users/${userId}/payments`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (
          paymentsResponse.data &&
          Array.isArray(paymentsResponse.data.payments)
        ) {
          // Sort payments by createdAt in descending order (latest first)
          const sortedPayments = [...paymentsResponse.data.payments].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setPayments(sortedPayments); // Set sorted payments
        } else {
          console.error(
            "Unexpected payments data format:",
            paymentsResponse.data
          );
          setPayments([]);
        }
      } catch (error) {
        console.error("Error fetching payments:", error);
        setPayments([]);
      }
    };
    fetchPayments();
    fetchUserAndOrders();
  }, [API_BASE_URL, userId, token]);

  useEffect(() => {
    // Calculate total amount from payments
    const calculateTotalAmount = () => {
      const total = payments.reduce((acc, payment) => acc + payment.amount, 0);
      setTotalAmount(total);
    };

    calculateTotalAmount();
  }, [payments]);

  // Calculating Balance
  const currentBalance = user && totalAmount - (user.spentAmount || 0);

  const handleGoBack = () => {
    navigate(-1);
  };

  const truncateId = (id) => {
    if (!id) return "";

    const parts = id.split("-");
    if (parts.length > 0) {
      return parts.slice(0, Math.min(4, parts.length)).join("-");
    }
    return id;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return moment(dateString).format("DD/MM/YYYY");
  };

  const handleEdit = (order) => {
    setSelectedOrder(order);
    setShowEditPopup(true);
  };

  const handleView = (order) => {
    setSelectedOrder(order);
    setShowViewPopup(true);
  };

  const handleDeleteClick = (orderId) => {
    setOrderToDelete(orderId);
    setShowDeleteConfirmation(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (!token) {
        setError("Token missing or invalid.");
        return;
      }

      await axios.delete(`${API_BASE_URL}/admin/orders/${orderToDelete}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.orderId !== orderToDelete)
      );
    } catch (err) {
      console.error("Error deleting order:", err);
      setError(err.message || "Failed to delete order");
    } finally {
      setShowDeleteConfirmation(false);
      setOrderToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirmation(false);
    setOrderToDelete(null);
  };

  const updateOrderInState = (updatedOrder) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.orderId === updatedOrder.orderId ? updatedOrder : order
      )
    );
  };

  //Function to payment history to toggle open or not
  const togglePaymentHistoryPopup = () => {
    setShowPaymentHistoryPopup(!showPaymentHistoryPopup);
  };

  // Handler to set the current page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handler for search term change
  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  // Handler for short term
  const handleSortChange = (order, label) => {
    setSortOrder(order);
    setSortLabel(label);
    setCurrentPage(1); // Reset to the first page when sorting
  };

  // Handler for reset filter and search
  const handleResetFilters = () => {
    setSearchTerm("");
    setSortOrder("");
    setSortLabel("Sort");
    setRowsPerPage(5);
    setCurrentPage(1);
  };

  // Handler for Rows Per Page
  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to the first page when rows per page changes
  };

  // Memoized filtered and sorted orders
  const filteredOrders = useMemo(() => {
    let filtered = [...orders];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (order) =>
          order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.service.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sort
    if (sortOrder) {
      switch (sortOrder) {
        case "date_asc":
          filtered.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          );
          break;
        case "date_desc":
          filtered.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          break;
        case "quantity_asc":
          filtered.sort((a, b) => a.quantity - b.quantity);
          break;
        case "quantity_desc":
          filtered.sort((a, b) => b.quantity - a.quantity);
          break;
        default:
          break;
      }
    }
    return filtered;
  }, [orders, searchTerm, sortOrder]);

  // Memoized paginated orders
  const paginatedOrders = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return filteredOrders.slice(startIndex, endIndex);
  }, [filteredOrders, currentPage, rowsPerPage]);

  const isFilterApplied = searchTerm || sortOrder || rowsPerPage !== 5; // Determine whether filter is applied or not

  if (loading) {
    return (
      <div>
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

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div className="px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 md:mb-0">
        User Profile
      </h2>
      <div className="my-4 inline-block">
        <div className="flex justify-start gap-4 border border-gray-300 p-3 rounded-full">
          <div
            className="bg-main-color text-white py-3 px-8 border border-main-color rounded-full cursor-pointer"
            onClick={handleGoBack}
          >
            Go Back
          </div>
          <div
            className="bg-white text-gray-900 py-3 px-8 border border-gray-300 rounded-full cursor-pointer"
            onClick={togglePaymentHistoryPopup}
          >
            Payment History
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Part 1: User Info Card */}
        <div className="bg-gray-50 shadow-main border rounded-3xl overflow-hidden flex items-center relative">
          <div className="p-8 w-full">
            <div className="flex items-center space-x-6">
              <div className="relative rounded-full shadow-inner-md border border-gray-300">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-200 text-gray-700 shadow-md">
                  <FaUser className="h-10 w-10" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  {user.firstName} {user.lastName}
                </h3>
                <p className="text-gray-600 font-medium">{user.email}</p>
              </div>
            </div>
            {/* Role Tag with Subtle Glow Effect */}
            <div
              className={`flex items-center gap-3 bg-opacity-80 p-2 rounded-bl-xl w-fit absolute right-0 top-0 transition-colors duration-300
          ${
            user.role === "admin"
              ? "bg-red-200 text-red-800 hover:bg-red-300"
              : "bg-green-200 text-green-800 hover:bg-green-300"
          }`}
              style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
            >
              <span className="text-lg text-gray-900 font-semibold">Role:</span>
              <span className="font-medium capitalize">{user.role}</span>
            </div>
          </div>
        </div>

        {/* Part 2: Information Card */}
        <div className="bg-gray-50 shadow-main border rounded-3xl overflow-hidden">
          <div className="p-8">
            <h4 className="text-xl font-semibold text-gray-700 mb-4 relative before:block before:absolute before:left-0 before:bottom-0 before:w-14 before:h-0.5 before:bg-main-color">
              Amount Information
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-700">
                  Total Amount Paid:
                </span>
                <span className="text-green-600 font-bold">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
              {user.spentAmount !== undefined && (
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-700">
                    Amount Spent:
                  </span>
                  <span className="text-red-600 font-bold">
                    ${user.spentAmount.toFixed(2)}
                  </span>
                </div>
              )}
              {currentBalance !== undefined && (
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-700">
                    Current Balance:
                  </span>
                  <span
                    className={`font-bold ${
                      currentBalance >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    ${currentBalance.toFixed(2)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="my-4">
        <h1 className="text-3xl font-bold mb-2">Users List</h1>
      </div>
      {/* FilterAndSearch component */}
      <div className="flex justify-between items-center gap-4 mb-4">
        <FilterAndSearch
          searchTerm={searchTerm}
          sortOrder={sortOrder}
          sortLabel={sortLabel}
          rowsPerPage={rowsPerPage}
          onSearch={handleSearchChange}
          onSort={handleSortChange}
          sortOptions={sortOptions}
          onRowsPerPageChange={handleRowsPerPageChange}
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
      {/* User Order table */}
      <div className="overflow-x-auto rounded-2xl border border-gray-300 shadow-main">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200 text-sub-color font-bold">
            <tr>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
                Category
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
                Service
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
                Started Votes
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
                Deliver Votes
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
                Withheld Price
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
                Order Date
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.length > 0 ? (
              paginatedOrders.map((order, index) => (
                <tr
                  key={order._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-2 whitespace-nowrap text-sm">
                    {truncateId(order.orderId.substring(0, 4))}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm">
                    {order.category}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm">
                    {order.service}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm">
                    {order.quantity}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm">
                    {order.status}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm">
                    {order.started}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm">
                    {order.completedVotes || 0}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm">
                    ${order.calculatedPrice}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm">
                    {formatDate(order.createdAt)}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        className="px-2 py-2 rounded-md bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 transition-colors duration-200"
                        onClick={() => handleEdit(order)}
                        title="Edit Order"
                      >
                        <RiEdit2Fill className="h-4 w-4" />
                      </button>

                      <button
                        className="px-2 py-2 rounded-md bg-red-100 text-red-500 hover:text-white hover:bg-red-500 transition-colors duration-200"
                        onClick={() => handleDeleteClick(order.orderId)}
                        title="Delete Order"
                      >
                        <FaRegTrashCan className="h-4 w-4" />
                      </button>

                      <button
                        className="px-2 py-2 rounded-md bg-gray-200 text-gray-500 hover:text-white hover:bg-gray-500 transition-colors duration-200"
                        onClick={() => handleView(order)}
                        title="View Order"
                      >
                        <IoEyeSharp className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="px-4 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <img src={Data} alt="No Data" className="h-40" />
                    <p className="mt-4 text-xl font-semibold text-gray-700 capitalize">
                      No users payment found
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <Pagination
        ordersPerPage={rowsPerPage} // Use total count when rowsPerPage is null
        totalOrders={filteredOrders.length} // Pass total number of filtered orders
        paginate={handlePageChange} // Pass the pagination function
        currentPage={currentPage} // Pass the current page
      />

      {/* Modals */}
      {showDeleteConfirmation && (
        <DeleteConfirmationPopup
          onCancel={handleDeleteCancel}
          onConfirm={handleDeleteConfirm}
          setShowDeleteConfirmation={setShowDeleteConfirmation}
        />
      )}

      {showEditPopup && selectedOrder && (
        <EditOrderPopup
          order={selectedOrder}
          onClose={() => setShowEditPopup(false)}
          onSave={async (updatedFields) => {
            try {
              const token = TokenService.getToken(); // Get token from TokenService
              if (!token) {
                setError("Token missing or invalid.");
                return;
              }

              const response = await axios.put(
                `${API_BASE_URL}/admin/orders/${selectedOrder.orderId}`,
                updatedFields,
                {
                  headers: { Authorization: `Bearer ${token}` },
                }
              );

              if (response.status === 200) {
                const updatedOrder = { ...selectedOrder, ...updatedFields };
                updateOrderInState(updatedOrder);
              } else {
                setError(
                  "Failed to update order. " + (response.data?.message || "")
                );
              }
            } catch (err) {
              console.error("Error updating order:", err);
              setError(err.message || "Failed to update order");
            } finally {
              setShowEditPopup(false);
            }
          }}
        />
      )}

      {showViewPopup && selectedOrder && (
        <ViewOrderPopup
          order={selectedOrder}
          onClose={() => setShowViewPopup(false)}
        />
      )}

      {showPaymentHistoryPopup && (
        <PaymentHistoryPopup
          payments={payments}
          onClose={togglePaymentHistoryPopup}
          formatDate={formatDate}
        />
      )}
    </div>
  );
};

export default UserProfile;
