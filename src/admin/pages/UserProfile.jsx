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



import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { FiEye } from 'react-icons/fi';
import { FaEdit, FaTrash } from "react-icons/fa"; // Import Edit and Delete icons
import DeleteConfirmationPopup from "../components/OrderList/DeleteConfirmationPopup"; // Import the DeleteConfirmationPopup
import EditOrderPopup from "../components/OrderList/EditOrderPopup"; // Import EditOrderPopup
import ViewOrderPopup from "../components/OrderList/ViewOrderPopup"; // Import ViewOrderPopup


const UserProfile = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // State variables and functions copied from OrderList
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [orderToDelete, setOrderToDelete] = useState(null);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showViewPopup, setShowViewPopup] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        const fetchUserAndOrders = async () => {
            setLoading(true);
            setError(null);

            try {
                const token = localStorage.getItem("authToken");
                if (!token) {
                    setError("Authentication token not found");
                    setLoading(false);
                    return;
                }

                const userResponse = await axios.get(`${API_BASE_URL}/admin/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (userResponse.status !== 200) {
                    throw new Error(`Failed to fetch user. Status code: ${userResponse.status}`);
                }

                setUser(userResponse.data);

                const ordersResponse = await axios.get(`${API_BASE_URL}/admin/users/${userId}/orders`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (ordersResponse.status !== 200) {
                    throw new Error(`Failed to fetch orders. Status code: ${ordersResponse.status}`);
                }

                if (Array.isArray(ordersResponse.data)) {
                    setOrders(ordersResponse.data);
                } else {
                    throw new Error("Data returned was not of the right type (should be an array)");
                }

            } catch (err) {
                setError(err.message || "Failed to load user and/or orders");
                console.error("Error fetching user:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserAndOrders();
    }, [API_BASE_URL, userId]);

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

    // Functions copied from OrderList
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
            const token = localStorage.getItem("authToken");
            if (!token) {
                setError("Token missing or invalid.");
                return;
            }

            await axios.delete(`${API_BASE_URL}/admin/orders/${orderToDelete}`, {  // Ensure correct API endpoint
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

    if (loading) {
        return <div className="flex justify-center items-center h-48">Loading user details...</div>;
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    if (!user) {
        return <div>User not found.</div>;
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">User Details</h2>
            <button onClick={handleGoBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 focus:outline-none focus:shadow-outline">
                Back
            </button>
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">Personal Information</h3>
                    <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">User Orders</h3>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order ID</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Category</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Service</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Quantity</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Started Votes</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Deliver Votes</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Withheld Price</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order Date</th>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Actions
                                </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">{truncateId(order.orderId.substring(0, 4))}</td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.category}</td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.service}</td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.quantity}</td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.status}</td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.started}</td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{order.completedVotes || 0}</td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">${order.calculatedPrice}</td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{formatDate(order.createdAt)}</td>
                                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                                        <div className="flex items-center justify-center gap-2">
                                            <button
                                                className="px-2 py-2 rounded-md border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
                                                onClick={() => handleEdit(order)}
                                                title="Edit Order"
                                            >
                                                <FaEdit className="h-4 w-4" />
                                            </button>
                                            <button
                                                className="px-2 py-2 rounded-md border border-red-500 text-red-500 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-colors duration-200"
                                                onClick={() => handleDeleteClick(order.orderId)}
                                                title="Delete Order"
                                            >
                                                <FaTrash className="h-4 w-4" />
                                            </button>
                                            <button
                                                className="px-2 py-2 rounded-md border border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-200"
                                                onClick={() => handleView(order)}
                                                title="View Order"
                                            >
                                                <FiEye className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {orders.length === 0 && !loading && !error && (
                <p className="mt-4 text-gray-600">No orders found for this user.</p>
            )}

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
                            const token = localStorage.getItem("authToken");
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
        </div>
    );
};

export default UserProfile;