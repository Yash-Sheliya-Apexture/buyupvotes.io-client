// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import moment from 'moment'; // Import moment.js
// import { FaEdit, FaTrash, FaEye, FaTimes, FaCheck } from 'react-icons/fa';
// import { HiLink } from 'react-icons/hi';

// const OrderList = () => {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [editOrderId, setEditOrderId] = useState(null);
//     const [editedStatus, setEditedStatus] = useState('');
//     const [editedCompletedVotes, setEditedCompletedVotes] = useState({});
//     const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//     const [orderToDelete, setOrderToDelete] = useState(null);
//     const [showEditPopup, setShowEditPopup] = useState(false);
//     const [showViewPopup, setShowViewPopup] = useState(false);
//     const [selectedOrder, setSelectedOrder] = useState(null);

//     // Use API base URL from environment variable
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const token = localStorage.getItem("authToken");
//                 if (!token) {
//                     setError("Token missing or invalid.");
//                     setLoading(false);
//                     return;
//                 }
//                 const response = await axios.get(
//                     `${API_BASE_URL}/admin/orders`,
//                     {
//                         headers: { Authorization: `Bearer ${token}` },
//                     }
//                 );
//                 if (Array.isArray(response.data)) {
//                     setOrders(response.data);
//                 } else {
//                     console.error('Response data is not an array:', response.data);
//                     setOrders([]);
//                     setError('Invalid data format received from the API');
//                 }
//                 console.log(response.data)
//                 setLoading(false);
//             } catch (err) {
//                 console.error('Error fetching orders:', err);
//                 setError(err.message || 'Failed to fetch orders');
//                 setLoading(false);
//             }
//         };

//         fetchOrders();

//     }, [API_BASE_URL]);
//     const handleEdit = (order) => {
//         setEditOrderId(order.orderId);
//         setEditedStatus(order.status);
//         setEditedCompletedVotes({ [order.orderId]: order.completedVotes || 0 });
//         setSelectedOrder(order);
//         setShowEditPopup(true);
//     };

//     const handleView = (order) => {
//         setSelectedOrder(order);
//         setShowViewPopup(true);
//     };

//     const handleStatusChange = (event) => {
//         setEditedStatus(event.target.value);
//     };

//     const handleCompletedVotesChange = (orderId, value) => {
//         const parsedValue = parseInt(value, 10);
//         setEditedCompletedVotes(prevVotes => ({
//             ...prevVotes,
//             [orderId]: isNaN(parsedValue) ? 0 : parsedValue
//         }));
//     };

//     const handleSave = async () => {
//         try {
//             const token = localStorage.getItem("authToken");
//             if (!token) {
//                 setError("Token missing or invalid.");
//                 return;
//             }

//             await axios.put(`${API_BASE_URL}/admin/orders/${editOrderId}`, {
//                 status: editedStatus,
//                 completedVotes: editedCompletedVotes[editOrderId] || 0
//             }, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });

//             setOrders(prevOrders =>
//                 prevOrders.map(order => {
//                     if (order.orderId === editOrderId) {
//                         return {
//                             ...order,
//                             status: editedStatus,
//                             completedVotes: editedCompletedVotes[editOrderId] || 0
//                         };
//                     } else {
//                         return order;
//                     }
//                 })
//             );
//             setShowEditPopup(false);
//             setEditOrderId(null);
//         } catch (err) {
//             console.error('Error updating order status:', err);
//             setError(err.message || 'Failed to update order status');
//         }
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
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setOrders(prevOrders => prevOrders.filter(order => order.orderId !== orderToDelete));
//         } catch (err) {
//             console.error('Error deleting order:', err);
//             setError(err.message || 'Failed to delete order');
//         } finally {
//             setShowDeleteConfirmation(false);
//             setOrderToDelete(null);
//         }
//     };

//     const handleDeleteCancel = () => {
//         setShowDeleteConfirmation(false);
//         setOrderToDelete(null);
//     };

//     const truncateId = (id) => {
//         if (!id) return '';

//         const parts = id.split('-');
//         if (parts.length > 0) {
//             return parts.slice(0, Math.min(4, parts.length)).join('-');
//         }
//         return id;
//     };

//     const formatDate = (dateString) => {
//         if (!dateString) return '';
//         return moment(dateString).format('MMMM D, YYYY'); // Format the date
//     };

//     if (loading) {
//         return <div className="text-center py-4">Loading orders...</div>;
//     }

//     if (error) {
//         return <div className="text-red-500 text-center py-4">Error: {error}</div>;
//     }

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">Order List (Admin)</h1>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white border border-gray-200">
//                     <thead className="bg-gray-50">
//                         <tr>
//                             <th className="px-4 py-2 text-left">Order ID</th>
//                             <th className="px-4 py-2 text-left">User ID</th>
//                             <th className="px-4 py-2 text-left">Category</th>
//                             <th className="px-4 py-2 text-left">Service</th>
//                             <th className="px-4 py-2 text-left">Quantity</th>
//                             <th className="px-4 py-2 text-left">Status</th>
//                             <th className="px-4 py-2 text-left">Deliver votes</th>
//                             <th className="px-4 py-2 text-left">Order Date</th>
//                             <th className="px-4 py-2 text-left">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orders.map((order) => (
//                             <tr key={order._id} className="border-b border-gray-200">
//                                 <td className="px-4 py-2">{truncateId(order.orderId.substring(0, 4))}</td>
//                                 <td className="px-4 py-2">{truncateId(order.userId.substring(0, 4))}</td>
//                                 <td className="px-4 py-2">{order.category}</td>
//                                 <td className="px-4 py-2 flex gap-2">
//                                     {order.service}
//                                     <a href={order.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-7 h-7 p-1 bg-gray-200 rounded-full"><HiLink className="text-sm"/></a>
//                                 </td>
//                                 <td className="px-4 py-2">{order.quantity}</td>
//                                 <td className="px-4 py-2">
//                                     {order.status}
//                                 </td>
//                                 <td className="px-4 py-2">
//                                     {order.completedVotes || 0}
//                                 </td>
//                                 <td className="px-4 py-2">{formatDate(order.createdAt)}</td>
//                                 <td className="px-4 py-2">
//                                     <div className="flex space-x-2">
//                                         <button
//                                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
//                                             onClick={() => handleEdit(order)}
//                                         >
//                                             <FaEdit />
//                                         </button>
//                                         <button
//                                             className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
//                                             onClick={() => handleDeleteClick(order.orderId)}
//                                         >
//                                             <FaTrash />
//                                         </button>
//                                         <button
//                                             className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
//                                             onClick={() => handleView(order)}
//                                         >
//                                             <FaEye />
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Delete Confirmation Popup */}
//             {showDeleteConfirmation && (
//                 <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
//                     <div className="bg-white p-8 rounded shadow-md">
//                         <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
//                         <p className="mb-4">Are you sure you want to delete this order?</p>
//                         <div className="flex justify-end space-x-4">
//                             <button
//                                 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                 onClick={handleDeleteCancel}
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                 onClick={handleDeleteConfirm}
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Edit Popup */}
//             {showEditPopup && selectedOrder && (
//                 <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
//                     <div className="bg-white p-8 rounded shadow-md w-96">
//                         <h2 className="text-2xl font-bold mb-4">Edit Order</h2>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">Status:</label>
//                             <select
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 value={editedStatus}
//                                 onChange={handleStatusChange}
//                             >
//                                 <option value="Pending">Pending</option>
//                                 <option value="In Progress">In Progress</option>
//                                 <option value="Completed">Completed</option>
//                                 <option value="Partial">Partial</option>
//                                 <option value="Canceled">Canceled</option>
//                             </select>
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">Completed Votes:</label>
//                             <input
//                                 type="number"
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 value={editedCompletedVotes[selectedOrder.orderId] === undefined ? (selectedOrder.completedVotes || 0) : editedCompletedVotes[selectedOrder.orderId]}
//                                 onChange={(e) => handleCompletedVotesChange(selectedOrder.orderId, e.target.value)}
//                             />
//                         </div>
//                         <div className="flex justify-end space-x-4">
//                             <button
//                                 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                 onClick={() => setShowEditPopup(false)}
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                 onClick={handleSave}
//                             >
//                                 Save
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* View Popup */}
//             {showViewPopup && selectedOrder && (
//                 <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
//                     <div className="bg-white p-8 rounded shadow-md w-96">
//                         <h2 className="text-2xl font-bold mb-4">View Order</h2>
//                         <div className="mb-2">
//                             <p><span className="font-bold">Order ID:</span> {selectedOrder.orderId.substring(0, 4)}</p>
//                         </div>
//                         <div className="mb-2">
//                             <p><span className="font-bold">User ID:</span> {selectedOrder.userId.substring(0, 4)}</p>
//                         </div>
//                         <div className="mb-2">
//                             <p><span className="font-bold">Category:</span> {selectedOrder.category}</p>
//                         </div>
//                         <div className="mb-2">
//                             <p><span className="font-bold">Service:</span> {selectedOrder.service}</p>
//                         </div>
//                         <div className="mb-2">
//                             <p><span className="font-bold">Quantity:</span> {selectedOrder.quantity}</p>
//                         </div>
//                         <div className="mb-2">
//                             <p><span className="font-bold">Status:</span> {selectedOrder.status}</p>
//                         </div>
//                         <div className="mb-2">
//                             <p><span className="font-bold">Completed Votes:</span> {selectedOrder.completedVotes}</p>
//                         </div>
//                         <div className="mb-2">
//                             <p><span className="font-bold">Order Date:</span> {formatDate(selectedOrder.createdAt)}</p>
//                         </div>
//                         <div className="mb-2">
//                             <p><span className="font-bold">Order Date:</span><a href={(selectedOrder.link)} target='_blank'> {(selectedOrder.link)}</a></p>
//                         </div>
//                         {selectedOrder.comments && (
//                             <div className="mb-2">
//                                 <p><span className="font-bold">Comments:</span> {selectedOrder.comments}</p>
//                             </div>
//                         )}
//                         <div className="flex justify-end">
//                             <button
//                                 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                 onClick={() => setShowViewPopup(false)}
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default OrderList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import moment from 'moment';
// import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
// import { HiLink } from 'react-icons/hi';
// import DeleteConfirmationPopup from '../components/OrderList/DeleteConfirmationPopup';
// import EditOrderPopup from '../components/OrderList/EditOrderPopup';
// import ViewOrderPopup from '../components/OrderList/ViewOrderPopup';

// const OrderList = () => {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//     const [orderToDelete, setOrderToDelete] = useState(null);
//     const [showEditPopup, setShowEditPopup] = useState(false);
//     const [showViewPopup, setShowViewPopup] = useState(false);
//     const [selectedOrder, setSelectedOrder] = useState(null);

//     // Use API base URL from environment variable
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const token = localStorage.getItem("authToken");
//                 if (!token) {
//                     setError("Token missing or invalid.");
//                     setLoading(false);
//                     return;
//                 }
//                 const response = await axios.get(
//                     `${API_BASE_URL}/admin/orders`,
//                     {
//                         headers: { Authorization: `Bearer ${token}` },
//                     }
//                 );
//                 if (Array.isArray(response.data)) {
//                     setOrders(response.data);
//                 } else {
//                     console.error('Response data is not an array:', response.data);
//                     setOrders([]);
//                     setError('Invalid data format received from the API');
//                 }
//                 console.log(response.data)
//                 setLoading(false);
//             } catch (err) {
//                 console.error('Error fetching orders:', err);
//                 setError(err.message || 'Failed to fetch orders');
//                 setLoading(false);
//             }
//         };

//         fetchOrders();

//     }, [API_BASE_URL]);
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
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setOrders(prevOrders => prevOrders.filter(order => order.orderId !== orderToDelete));
//         } catch (err) {
//             console.error('Error deleting order:', err);
//             setError(err.message || 'Failed to delete order');
//         } finally {
//             setShowDeleteConfirmation(false);
//             setOrderToDelete(null);
//         }
//     };

//     const handleDeleteCancel = () => {
//         setShowDeleteConfirmation(false);
//         setOrderToDelete(null);
//     };

//     const truncateId = (id) => {
//         if (!id) return '';

//         const parts = id.split('-');
//         if (parts.length > 0) {
//             return parts.slice(0, Math.min(4, parts.length)).join('-');
//         }
//         return id;
//     };

//     const formatDate = (dateString) => {
//         if (!dateString) return '';
//         return moment(dateString).format('MMMM D, YYYY'); // Format the date
//     };

//     if (loading) {
//         return <div className="text-center py-4">Loading orders...</div>;
//     }

//     if (error) {
//         return <div className="text-red-500 text-center py-4">Error: {error}</div>;
//     }

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">Order List (Admin)</h1>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white border border-gray-200">
//                     <thead className="bg-gray-50">
//                         <tr>
//                             <th className="px-4 py-2 text-left">Order ID</th>
//                             <th className="px-4 py-2 text-left">User ID</th>
//                             <th className="px-4 py-2 text-left">Category</th>
//                             <th className="px-4 py-2 text-left">Service</th>
//                             <th className="px-4 py-2 text-left">Quantity</th>
//                             <th className="px-4 py-2 text-left">Status</th>
//                             <th className="px-4 py-2 text-left">Deliver votes</th>
//                             <th className="px-4 py-2 text-left">Order Date</th>
//                             <th className="px-4 py-2 text-left">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orders.map((order) => (
//                             <tr key={order._id} className="border-b border-gray-200">
//                                 <td className="px-4 py-2">{truncateId(order.orderId.substring(0, 4))}</td>
//                                 <td className="px-4 py-2">{truncateId(order.userId.substring(0, 4))}</td>
//                                 <td className="px-4 py-2">{order.category}</td>
//                                 <td className="px-4 py-2 flex gap-2">
//                                     {order.service}
//                                     <a href={order.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-7 h-7 p-1 bg-gray-200 rounded-full"><HiLink className="text-sm" /></a>
//                                 </td>
//                                 <td className="px-4 py-2">{order.quantity}</td>
//                                 <td className="px-4 py-2">
//                                     {order.status}
//                                 </td>
//                                 <td className="px-4 py-2">
//                                     {order.completedVotes || 0}
//                                 </td>
//                                 <td className="px-4 py-2">{formatDate(order.createdAt)}</td>
//                                 <td className="px-4 py-2">
//                                     <div className="flex space-x-2">
//                                         <button
//                                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
//                                             onClick={() => handleEdit(order)}
//                                         >
//                                             <FaEdit />
//                                         </button>
//                                         <button
//                                             className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
//                                             onClick={() => handleDeleteClick(order.orderId)}
//                                         >
//                                             <FaTrash />
//                                         </button>
//                                         <button
//                                             className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
//                                             onClick={() => handleView(order)}
//                                         >
//                                             <FaEye />
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             {/* Delete Confirmation Popup */}
//             {showDeleteConfirmation && (
//                 <DeleteConfirmationPopup
//                     onCancel={handleDeleteCancel}
//                     onConfirm={handleDeleteConfirm}
//                     setShowDeleteConfirmation = {setShowDeleteConfirmation}
//                 />
//             )}

//             {/* Edit Popup */}
//             {showEditPopup && selectedOrder && (
//                 <EditOrderPopup
//                     order={selectedOrder}
//                     onClose={() => setShowEditPopup(false)}
//                     onSave={() => {
//                         // Implement the logic to save the data
//                         setShowEditPopup(false);
//                     }}
//                 />
//             )}

//             {/* View Popup */}
//             {showViewPopup && selectedOrder && (
//                 <ViewOrderPopup
//                     order={selectedOrder}
//                     onClose={() => setShowViewPopup(false)}
//                 />
//             )}
//         </div>
//     );
// };

// export default OrderList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import moment from 'moment';
// import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
// import { HiLink } from 'react-icons/hi';
// import DeleteConfirmationPopup from '../components/OrderList/DeleteConfirmationPopup';
// import EditOrderPopup from '../components/OrderList/EditOrderPopup';
// import ViewOrderPopup from '../components/OrderList/ViewOrderPopup';

// const OrderList = () => {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//     const [orderToDelete, setOrderToDelete] = useState(null);
//     const [showEditPopup, setShowEditPopup] = useState(false);
//     const [showViewPopup, setShowViewPopup] = useState(false);
//     const [selectedOrder, setSelectedOrder] = useState(null);

//     // Use API base URL from environment variable
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const token = localStorage.getItem("authToken");
//                 if (!token) {
//                     setError("Token missing or invalid.");
//                     setLoading(false);
//                     return;
//                 }
//                 const response = await axios.get(
//                     `${API_BASE_URL}/admin/orders`,
//                     {
//                         headers: { Authorization: `Bearer ${token}` },
//                     }
//                 );
//                 if (Array.isArray(response.data)) {
//                     setOrders(response.data);
//                 } else {
//                     console.error('Response data is not an array:', response.data);
//                     setOrders([]);
//                     setError('Invalid data format received from the API');
//                 }
//                 console.log(response.data)
//                 setLoading(false);
//             } catch (err) {
//                 console.error('Error fetching orders:', err);
//                 setError(err.message || 'Failed to fetch orders');
//                 setLoading(false);
//             }
//         };

//         fetchOrders();

//     }, [API_BASE_URL]);
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
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setOrders(prevOrders => prevOrders.filter(order => order.orderId !== orderToDelete));
//         } catch (err) {
//             console.error('Error deleting order:', err);
//             setError(err.message || 'Failed to delete order');
//         } finally {
//             setShowDeleteConfirmation(false);
//             setOrderToDelete(null);
//         }
//     };

//     const handleDeleteCancel = () => {
//         setShowDeleteConfirmation(false);
//         setOrderToDelete(null);
//     };

//     const truncateId = (id) => {
//         if (!id) return '';

//         const parts = id.split('-');
//         if (parts.length > 0) {
//             return parts.slice(0, Math.min(4, parts.length)).join('-');
//         }
//         return id;
//     };

//     const formatDate = (dateString) => {
//         if (!dateString) return '';
//         return moment(dateString).format('DD/MM/YYYY'); // Format the date
//     };

//     // Function to update order in the state
//     const updateOrderInState = (updatedOrder) => {
//         setOrders(prevOrders =>
//             prevOrders.map(order =>
//                 order.orderId === updatedOrder.orderId ? updatedOrder : order
//             )
//         );
//     };

//     if (loading) {
//         return <div className="text-center py-4">Loading orders...</div>;
//     }

//     if (error) {
//         return <div className="text-red-500 text-center py-4">Error: {error}</div>;
//     }

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">Order List (Admin)</h1>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white border border-gray-200">
//                     <thead className="bg-gray-50">
//                         <tr>
//                             <th className="px-4 py-2 text-left">Order ID</th>
//                             <th className="px-4 py-2 text-left">User ID</th>
//                             <th className="px-4 py-2 text-left">Category</th>
//                             <th className="px-4 py-2 text-left">Service</th>
//                             <th className="px-4 py-2 text-left">Quantity</th>
//                             <th className="px-4 py-2 text-left">Status</th>
//                             <th className="px-4 py-2 text-left">Started Votes</th>
//                             <th className="px-4 py-2 text-left">Deliver Votes</th>
//                             <th className="px-4 py-2 text-left">Withheld Price</th>
//                             <th className="px-4 py-2 text-left">Order Date</th>
//                             <th className="px-4 py-2 text-left">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orders.map((order) => (
//                             <tr key={order._id} className="border-b border-gray-200">
//                                 <td className="px-4 py-2">{truncateId(order.orderId.substring(0, 4))}</td>
//                                 <td className="px-4 py-2">{truncateId(order.userId.substring(0, 4))}</td>
//                                 <td className="px-4 py-2">{order.category}</td>
//                                 <td className="px-4 py-2 flex gap-2">
//                                     {order.service}
//                                     <a href={order.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-7 h-7 p-1 bg-gray-200 rounded-full"><HiLink className="text-sm" /></a>
//                                 </td>
//                                 <td className="px-4 py-2">{order.quantity}</td>
//                                 <td className="px-4 py-2">
//                                     {order.status}
//                                 </td>
//                                 <td className="px-4 py-2">
//                                     {order.started}
//                                 </td>
//                                 <td className="px-4 py-2">
//                                     {order.completedVotes || 0}
//                                 </td>
//                                  <td className="px-4 py-2">
//                                     ${order.calculatedPrice}
//                                 </td>
//                                 <td className="px-4 py-2">{formatDate(order.createdAt)}</td>
//                                 <td className="px-4 py-2">
//                                     <div className="flex space-x-2">
//                                         <button
//                                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
//                                             onClick={() => handleEdit(order)}
//                                         >
//                                             <FaEdit />
//                                         </button>
//                                         <button
//                                             className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
//                                             onClick={() => handleDeleteClick(order.orderId)}
//                                         >
//                                             <FaTrash />
//                                         </button>
//                                         <button
//                                             className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
//                                             onClick={() => handleView(order)}
//                                         >
//                                             <FaEye />
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             {/* Delete Confirmation Popup */}
//             {showDeleteConfirmation && (
//                 <DeleteConfirmationPopup
//                     onCancel={handleDeleteCancel}
//                     onConfirm={handleDeleteConfirm}
//                     setShowDeleteConfirmation={setShowDeleteConfirmation}
//                 />
//             )}

//             {/* Edit Popup */}
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
//                                 updatedFields,  // Send updated fields to the backend
//                                 {
//                                     headers: { Authorization: `Bearer ${token}` }
//                                 }
//                             );

//                             if (response.status === 200) {
//                                 // Update the order in the state with the new values
//                                 const updatedOrder = { ...selectedOrder, ...updatedFields };
//                                 updateOrderInState(updatedOrder);
//                             } else {
//                                 setError("Failed to update order. " + (response.data?.message || ""));
//                             }
//                         } catch (err) {
//                             console.error('Error updating order:', err);
//                             setError(err.message || 'Failed to update order');
//                         } finally {
//                             setShowEditPopup(false);
//                         }
//                     }}
//                 />
//             )}

//             {/* View Popup */}
//             {showViewPopup && selectedOrder && (
//                 <ViewOrderPopup
//                     order={selectedOrder}
//                     onClose={() => setShowViewPopup(false)}
//                 />
//             )}
//         </div>
//     );
// };

// export default OrderList;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import moment from "moment";
// import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
// import { FcFilledFilter } from "react-icons/fc";
// import DeleteConfirmationPopup from "../components/OrderList/DeleteConfirmationPopup";
// import EditOrderPopup from "../components/OrderList/EditOrderPopup";
// import ViewOrderPopup from "../components/OrderList/ViewOrderPopup";

// const OrderList = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//   const [orderToDelete, setOrderToDelete] = useState(null);
//   const [showEditPopup, setShowEditPopup] = useState(false);
//   const [showViewPopup, setShowViewPopup] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   // Use API base URL from environment variable
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const token = localStorage.getItem("authToken");
//         if (!token) {
//           setError("Token missing or invalid.");
//           setLoading(false);
//           return;
//         }
//         const response = await axios.get(`${API_BASE_URL}/admin/orders`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (Array.isArray(response.data)) {
//           setOrders(response.data);
//         } else {
//           console.error("Response data is not an array:", response.data);
//           setOrders([]);
//           setError("Invalid data format received from the API");
//         }
//         console.log(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching orders:", err);
//         setError(err.message || "Failed to fetch orders");
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [API_BASE_URL]);
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
//     return moment(dateString).format("DD/MM/YYYY"); // Format the date
//   };

//   // Function to update order in the state
//   const updateOrderInState = (updatedOrder) => {
//     setOrders((prevOrders) =>
//       prevOrders.map((order) =>
//         order.orderId === updatedOrder.orderId ? updatedOrder : order
//       )
//     );
//   };

//   if (loading) {
//     return <div className="text-center py-4">Loading orders...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500 text-center py-4">Error: {error}</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-bold mb-4">Order List (Admin)</h1>
//         <button className="flex items-center gap-2">
//           <FcFilledFilter className="w-5 h-5" />
//           <p className="text-xl font-bold">Filter</p>
//         </button>
//       </div>
//       <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
//         <table className="min-w-full bg-white">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Order ID
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 User ID
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Category
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Service
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Quantity
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Started Votes
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Deliver Votes
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Withheld Price
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Order Date
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order, index) => (
//               <tr
//                 key={order._id}
//                 className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
//               >
//                 <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
//                   {truncateId(order.orderId.substring(0, 4))}
//                 </td>
//                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                   {truncateId(order.userId.substring(0, 4))}
//                 </td>
//                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                   {order.category}
//                 </td>
//                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                   {order.service}
//                 </td>
//                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                   {order.quantity}
//                 </td>
//                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                   {order.status}
//                 </td>
//                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                   {order.started}
//                 </td>
//                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                   {order.completedVotes || 0}
//                 </td>
//                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                   ${order.calculatedPrice}
//                 </td>
//                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                   {formatDate(order.createdAt)}
//                 </td>
//                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                   <div className="flex items-center justify-center gap-2">
//                     <button
//                       className="px-2 py-2 rounded-md border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
//                       onClick={() => handleEdit(order)}
//                       title="Edit Order"
//                     >
//                       <FaEdit className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="px-2 py-2 rounded-md border border-red-500 text-red-500 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-colors duration-200"
//                       onClick={() => handleDeleteClick(order.orderId)}
//                       title="Delete Order"
//                     >
//                       <FaTrash className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="px-2 py-2 rounded-md border border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-200"
//                       onClick={() => handleView(order)}
//                       title="View Order"
//                     >
//                       <FaEye className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {/* Delete Confirmation Popup */}
//       {showDeleteConfirmation && (
//         <DeleteConfirmationPopup
//           onCancel={handleDeleteCancel}
//           onConfirm={handleDeleteConfirm}
//           setShowDeleteConfirmation={setShowDeleteConfirmation}
//         />
//       )}

//       {/* Edit Popup */}
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
//                 updatedFields, // Send updated fields to the backend
//                 {
//                   headers: { Authorization: `Bearer ${token}` },
//                 }
//               );

//               if (response.status === 200) {
//                 // Update the order in the state with the new values
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

//       {/* View Popup */}
//       {showViewPopup && selectedOrder && (
//         <ViewOrderPopup
//           order={selectedOrder}
//           onClose={() => setShowViewPopup(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default OrderList;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import moment from "moment";
// import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
// import { FcFilledFilter } from "react-icons/fc";
// import DeleteConfirmationPopup from "../components/OrderList/DeleteConfirmationPopup";
// import EditOrderPopup from "../components/OrderList/EditOrderPopup";
// import ViewOrderPopup from "../components/OrderList/ViewOrderPopup";
// import FilterSidebar from "../components/FilterSidebar";

// const OrderList = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//   const [orderToDelete, setOrderToDelete] = useState(null);
//   const [showEditPopup, setShowEditPopup] = useState(false);
//   const [showViewPopup, setShowViewPopup] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [filters, setFilters] = useState({});
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const [isFilterApplied, setIsFilterApplied] = useState(false);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const token = localStorage.getItem("authToken");
//         if (!token) {
//           setError("Token missing or invalid.");
//           setLoading(false);
//           return;
//         }

//         const response = await axios.get(`${API_BASE_URL}/admin/orders`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (Array.isArray(response.data)) {
//           setOrders(response.data);
//         } else {
//           console.error("Response data is not an array:", response.data);
//           setOrders([]);
//           setError("Invalid data format received from the API");
//         }
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching orders:", err);
//         setError(err.message || "Failed to fetch orders");
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [API_BASE_URL]);

//   useEffect(() => {
//     applyFilters();
//   }, [orders, filters]);

//   const applyFilters = () => {
//     let filtered = [...orders];
//     let filterUsed = false;

//     if (filters.category) {
//       filtered = filtered.filter((order) =>
//         order.category.toLowerCase().includes(filters.category.toLowerCase())
//       );
//       filterUsed = true;
//     }
//     if (filters.service) {
//       filtered = filtered.filter((order) =>
//         order.service.toLowerCase().includes(filters.service.toLowerCase())
//       );
//       filterUsed = true;
//     }
//     if (filters.status) {
//       filtered = filtered.filter((order) => order.status === filters.status);
//       filterUsed = true;
//     }

//     if (filters.startDate) {
//       const startDate = moment(filters.startDate); // Use moment to parse
//       if (startDate.isValid()) {
//         // Validate date
//         filtered = filtered.filter((order) => {
//           const orderDate = moment(order.createdAt);
//           return orderDate.isSameOrAfter(startDate, "day"); // Compare dates correctly
//         });
//         filterUsed = true;
//       } else {
//         console.warn("Invalid start date provided.");
//       }
//     }

//     if (filters.endDate) {
//       const endDate = moment(filters.endDate); // Use moment to parse
//       if (endDate.isValid()) {
//         // Validate date
//         filtered = filtered.filter((order) => {
//           const orderDate = moment(order.createdAt);
//           return orderDate.isSameOrBefore(endDate, "day"); // Compare dates correctly
//         });
//         filterUsed = true;
//       } else {
//         console.warn("Invalid end date provided.");
//       }
//     }

//     setFilteredOrders(filtered);
//     setIsFilterApplied(filterUsed);
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

//   const updateOrderInState = (updatedOrder) => {
//     setOrders((prevOrders) =>
//       prevOrders.map((order) =>
//         order.orderId === updatedOrder.orderId ? updatedOrder : order
//       )
//     );
//   };

//   const toggleFilter = () => {
//     setIsFilterOpen(!isFilterOpen);
//   };

//   const handleFilter = (filterValues) => {
//     setFilters(filterValues);
//   };

//   const handleResetFilters = () => {
//     setFilters({});
//     setFilteredOrders([]);
//     setIsFilterApplied(false);
//   };

//   const ordersToDisplay = filteredOrders.length > 0 ? filteredOrders : orders;
//   const noDataFound = (isFilterApplied && filteredOrders.length === 0) || (!isFilterApplied && orders.length === 0);

//   if (loading) {
//     return <div className="text-center py-4">Loading orders...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500 py-4">Error: {error}</div>;
//   }

//   return (
//     <div className="container mx-auto p-4 relative">
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-2xl font-bold">Order List (Admin)</h1>
//         <div className="flex items-center gap-2">
//         {isFilterApplied && (
//             <button
//               onClick={handleResetFilters}
//               className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
//             >
//               <span>Reset</span>
//             </button>
//           )}
//           <button className="flex items-center gap-2" onClick={toggleFilter}>
//             <FcFilledFilter className="w-5 h-5" />
//             <p className="text-xl font-bold">Filter</p>
//           </button>
//         </div>
//       </div>

//       <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
//         <table className="min-w-full bg-white">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Order ID
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 User ID
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Category
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Service
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Quantity
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Started Votes
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Deliver Votes
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Withheld Price
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Order Date
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {noDataFound ? (
//               <tr>
//                 <td
//                   colSpan="11"
//                   className="px-4 py-4 text-center text-lg font-bold text-gray-500"
//                 >
//                   No orders found.
//                 </td>
//               </tr>
//             ) : (
//               ordersToDisplay.map((order, index) => (
//                 <tr
//                   key={order._id}
//                   className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
//                 >
//                   <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
//                     {truncateId(order.orderId.substring(0, 4))}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     {truncateId(order.userId.substring(0, 4))}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     {order.category}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     {order.service}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     {order.quantity}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     {order.status}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     {order.started}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     {order.completedVotes || 0}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     ${order.calculatedPrice}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     {formatDate(order.createdAt)}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     <div className="flex items-center justify-center gap-2">
//                       <button
//                         className="px-2 py-2 rounded-md border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
//                         onClick={() => handleEdit(order)}
//                         title="Edit Order"
//                       >
//                         <FaEdit className="h-4 w-4" />
//                       </button>
//                       <button
//                         className="px-2 py-2 rounded-md border border-red-500 text-red-500 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-colors duration-200"
//                         onClick={() => handleDeleteClick(order.orderId)}
//                         title="Delete Order"
//                       >
//                         <FaTrash className="h-4 w-4" />
//                       </button>
//                       <button
//                         className="px-2 py-2 rounded-md border border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-200"
//                         onClick={() => handleView(order)}
//                         title="View Order"
//                       >
//                         <FaEye className="h-4 w-4" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

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

//       <FilterSidebar
//         isOpen={isFilterOpen}
//         onClose={toggleFilter}
//         onFilter={handleFilter}
//         initialFilters={filters}
//       />
//     </div>
//   );
// };

// export default OrderList;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import moment from "moment";
// import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
// import { FcFilledFilter } from "react-icons/fc";
// import DeleteConfirmationPopup from "../components/OrderList/DeleteConfirmationPopup";
// import EditOrderPopup from "../components/OrderList/EditOrderPopup";
// import ViewOrderPopup from "../components/OrderList/ViewOrderPopup";
// import FilterSidebar from "../components/FilterSidebar";
// import Pagination from "../components/Pagination"; // Import Pagination component

// const OrderList = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//   const [orderToDelete, setOrderToDelete] = useState(null);
//   const [showEditPopup, setShowEditPopup] = useState(false);
//   const [showViewPopup, setShowViewPopup] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [filters, setFilters] = useState({});
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const [isFilterApplied, setIsFilterApplied] = useState(false);

//   const [currentPage, setCurrentPage] = useState(1); // Current page state
//   const [ordersPerPage] = useState(12); // Orders per page

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const token = localStorage.getItem("authToken");
//         if (!token) {
//           setError("Token missing or invalid.");
//           setLoading(false);
//           return;
//         }

//         const response = await axios.get(`${API_BASE_URL}/admin/orders`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (Array.isArray(response.data)) {
//           setOrders(response.data);
//         } else {
//           console.error("Response data is not an array:", response.data);
//           setOrders([]);
//           setError("Invalid data format received from the API");
//         }
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching orders:", err);
//         setError(err.message || "Failed to fetch orders");
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [API_BASE_URL]);

//   useEffect(() => {
//     applyFilters();
//   }, [orders, filters]);

//   const applyFilters = () => {
//     let filtered = [...orders];
//     let filterUsed = false;

//     if (filters.category) {
//       filtered = filtered.filter((order) =>
//         order.category.toLowerCase().includes(filters.category.toLowerCase())
//       );
//       filterUsed = true;
//     }
//     if (filters.service) {
//       filtered = filtered.filter((order) =>
//         order.service.toLowerCase().includes(filters.service.toLowerCase())
//       );
//       filterUsed = true;
//     }
//     if (filters.status) {
//       filtered = filtered.filter((order) => order.status === filters.status);
//       filterUsed = true;
//     }

//     if (filters.startDate) {
//       const startDate = moment(filters.startDate); // Use moment to parse
//       if (startDate.isValid()) {
//         // Validate date
//         filtered = filtered.filter((order) => {
//           const orderDate = moment(order.createdAt);
//           return orderDate.isSameOrAfter(startDate, "day"); // Compare dates correctly
//         });
//         filterUsed = true;
//       } else {
//         console.warn("Invalid start date provided.");
//       }
//     }

//     if (filters.endDate) {
//       const endDate = moment(filters.endDate); // Use moment to parse
//       if (endDate.isValid()) {
//         // Validate date
//         filtered = filtered.filter((order) => {
//           const orderDate = moment(order.createdAt);
//           return orderDate.isSameOrBefore(endDate, "day"); // Compare dates correctly
//         });
//         filterUsed = true;
//       } else {
//         console.warn("Invalid end date provided.");
//       }
//     }

//     setFilteredOrders(filtered);
//     setIsFilterApplied(filterUsed);
//     setCurrentPage(1); // Reset to first page when filters change
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

//   const updateOrderInState = (updatedOrder) => {
//     setOrders((prevOrders) =>
//       prevOrders.map((order) =>
//         order.orderId === updatedOrder.orderId ? updatedOrder : order
//       )
//     );
//   };

//   const toggleFilter = () => {
//     setIsFilterOpen(!isFilterOpen);
//   };

//   const handleFilter = (filterValues) => {
//     setFilters(filterValues);
//   };

//   const handleResetFilters = () => {
//     setFilters({});
//     setFilteredOrders([]);
//     setIsFilterApplied(false);
//     setCurrentPage(1); // Reset to first page after resetting filters
//   };

//   const ordersToDisplay = filteredOrders.length > 0 ? filteredOrders : orders;
//   const noDataFound =
//     (isFilterApplied && filteredOrders.length === 0) ||
//     (!isFilterApplied && orders.length === 0);

//   // Get current orders
//   const indexOfLastOrder = currentPage * ordersPerPage;
//   const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
//   const currentOrders = ordersToDisplay.slice(
//     indexOfFirstOrder,
//     indexOfLastOrder
//   );

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (loading) {
//     return <div className="text-center py-4">Loading orders...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500 py-4">Error: {error}</div>;
//   }

//   return (
//     <div className="container mx-auto p-4 relative">
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-2xl font-bold">Order List (Admin)</h1>
//         <div className="flex items-center gap-2">
//           {isFilterApplied && (
//             <button
//               onClick={handleResetFilters}
//               className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
//             >
//               <span>Reset</span>
//             </button>
//           )}
//           <button className="flex items-center gap-2" onClick={toggleFilter}>
//             <FcFilledFilter className="w-5 h-5" />
//             <p className="text-xl font-bold">Filter</p>
//           </button>
//         </div>
//       </div>

//       <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
//         <table className="min-w-full bg-white">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Order ID
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 User ID
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Category
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Service
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Quantity
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Started Votes
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Deliver Votes
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Withheld Price
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Order Date
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {noDataFound ? (
//               <tr>
//                 <td
//                   colSpan="11"
//                   className="px-4 py-4 text-center text-lg font-bold text-gray-500"
//                 >
//                   No orders found.
//                 </td>
//               </tr>
//             ) : (
//               currentOrders.map((order, index) => (
//                 <tr
//                   key={order._id}
//                   className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
//                 >
//                   <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
//                     {truncateId(order.orderId.substring(0, 4))}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     {truncateId(order.userId.substring(0, 4))}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     {order.category}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     {order.service}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     {order.quantity}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     {order.status}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     {order.started}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     {order.completedVotes || 0}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     ${order.calculatedPrice}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     {formatDate(order.createdAt)}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                     <div className="flex items-center justify-center gap-2">
//                       <button
//                         className="px-2 py-2 rounded-md border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
//                         onClick={() => handleEdit(order)}
//                         title="Edit Order"
//                       >
//                         <FaEdit className="h-4 w-4" />
//                       </button>
//                       <button
//                         className="px-2 py-2 rounded-md border border-red-500 text-red-500 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-colors duration-200"
//                         onClick={() => handleDeleteClick(order.orderId)}
//                         title="Delete Order"
//                       >
//                         <FaTrash className="h-4 w-4" />
//                       </button>
//                       <button
//                         className="px-2 py-2 rounded-md border border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-200"
//                         onClick={() => handleView(order)}
//                         title="View Order"
//                       >
//                         <FaEye className="h-4 w-4" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//       {ordersToDisplay.length > 0 && (
//         <Pagination
//           ordersPerPage={ordersPerPage}
//           totalOrders={ordersToDisplay.length}
//           paginate={paginate}
//           currentPage={currentPage}
//         />
//       )}

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

//       <FilterSidebar
//         isOpen={isFilterOpen}
//         onClose={toggleFilter}
//         onFilter={handleFilter}
//         initialFilters={filters}
//       />
//     </div>
//   );
// };

// export default OrderList;

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import moment from "moment";
// import { FcFilledFilter } from "react-icons/fc";
// import DeleteConfirmationPopup from "../components/OrderList/DeleteConfirmationPopup";
// import EditOrderPopup from "../components/OrderList/EditOrderPopup";
// import ViewOrderPopup from "../components/OrderList/ViewOrderPopup";
// import FilterSidebar from "../components/FilterSidebar";
// import Pagination from "../components/Pagination"; // Import Pagination component
// import { RiEdit2Fill } from "react-icons/ri";
// import { FaRegTrashCan } from "react-icons/fa6";
// import { IoEyeSharp } from "react-icons/io5";

// const OrderList = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//   const [orderToDelete, setOrderToDelete] = useState(null);
//   const [showEditPopup, setShowEditPopup] = useState(false);
//   const [showViewPopup, setShowViewPopup] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [isFilterOpen, setIsFilterOpen] = useState(false); // State for controlling the visibility of the filter sidebar
//   const [filters, setFilters] = useState({});
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const [isFilterApplied, setIsFilterApplied] = useState(false);

//   const [currentPage, setCurrentPage] = useState(1); // Current page state
//   const [ordersPerPage] = useState(12); // Orders per page

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const token = localStorage.getItem("authToken");
//         if (!token) {
//           setError("Token missing or invalid.");
//           setLoading(false);
//           return;
//         }

//         const response = await axios.get(`${API_BASE_URL}/admin/orders`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (Array.isArray(response.data)) {
//           setOrders(response.data);
//         } else {
//           console.error("Response data is not an array:", response.data);
//           setOrders([]);
//           setError("Invalid data format received from the API");
//         }
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching orders:", err);
//         setError(err.message || "Failed to fetch orders");
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [API_BASE_URL]);

//   useEffect(() => {
//     applyFilters();
//   }, [orders, filters]);

//   const applyFilters = () => {
//     let filtered = [...orders];
//     let filterUsed = false;

//     if (filters.category) {
//       filtered = filtered.filter((order) =>
//         order.category.toLowerCase().includes(filters.category.toLowerCase())
//       );
//       filterUsed = true;
//     }
//     if (filters.service) {
//       filtered = filtered.filter((order) =>
//         order.service.toLowerCase().includes(filters.service.toLowerCase())
//       );
//       filterUsed = true;
//     }
//     if (filters.status) {
//       filtered = filtered.filter((order) => order.status === filters.status);
//       filterUsed = true;
//     }

//     if (filters.startDate) {
//       const startDate = moment(filters.startDate); // Use moment to parse
//       if (startDate.isValid()) {
//         // Validate date
//         filtered = filtered.filter((order) => {
//           const orderDate = moment(order.createdAt);
//           return orderDate.isSameOrAfter(startDate, "day"); // Compare dates correctly
//         });
//         filterUsed = true;
//       } else {
//         console.warn("Invalid start date provided.");
//       }
//     }

//     if (filters.endDate) {
//       const endDate = moment(filters.endDate); // Use moment to parse
//       if (endDate.isValid()) {
//         // Validate date
//         filtered = filtered.filter((order) => {
//           const orderDate = moment(order.createdAt);
//           return orderDate.isSameOrBefore(endDate, "day"); // Compare dates correctly
//         });
//         filterUsed = true;
//       } else {
//         console.warn("Invalid end date provided.");
//       }
//     }

//     setFilteredOrders(filtered);
//     setIsFilterApplied(filterUsed);
//     setCurrentPage(1); // Reset to first page when filters change
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

//   const updateOrderInState = (updatedOrder) => {
//     setOrders((prevOrders) =>
//       prevOrders.map((order) =>
//         order.orderId === updatedOrder.orderId ? updatedOrder : order
//       )
//     );
//   };

//   const toggleFilter = () => {
//     setIsFilterOpen(!isFilterOpen); // This function now toggles the `isFilterOpen` state
//   };

//   const handleFilter = (filterValues) => {
//     setFilters(filterValues);
//   };

//   const handleResetFilters = () => {
//     setFilters({});
//     setFilteredOrders([]);
//     setIsFilterApplied(false);
//     setCurrentPage(1); // Reset to first page after resetting filters
//   };

//   const ordersToDisplay = filteredOrders.length > 0 ? filteredOrders : orders;
//   const noDataFound =
//     (isFilterApplied && filteredOrders.length === 0) ||
//     (!isFilterApplied && orders.length === 0);

//   // Get current orders
//   const indexOfLastOrder = currentPage * ordersPerPage;
//   const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
//   const currentOrders = ordersToDisplay.slice(
//     indexOfFirstOrder,
//     indexOfLastOrder
//   );

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (loading) {
//     return <div className="text-center py-4">Loading orders...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500 py-4">Error: {error}</div>;
//   }

//   return (
//     <div className="order-list">
//       <div className="container mx-auto px-4 relative">
//         <div>
//           <div className="flex items-center justify-between mb-4">
//             <h1 className="text-2xl font-bold">Order List (Admin)</h1>
//             <div className="flex items-center gap-2">
//               {isFilterApplied && (
//                 <button
//                   onClick={handleResetFilters}
//                   className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
//                 >
//                   <span>Reset</span>
//                 </button>
//               )}
//               <button
//                 className="flex items-center gap-2"
//                 onClick={toggleFilter}
//               >
//                 <FcFilledFilter className="w-5 h-5" />
//                 <p className="text-xl font-bold">Filter</p>
//               </button>
//             </div>
//           </div>

//           <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
//             <table className="min-w-full bg-white">
//               <thead className="bg-gray-200">
//                 <tr>
//                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                     Order ID
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                     User ID
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                     Category
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                     Service
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                     Quantity
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                     Status
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                     Started Votes
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                     Deliver Votes
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                     Withheld Price
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                     Order Date
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {noDataFound ? (
//                   <tr>
//                     <td
//                       colSpan="11"
//                       className="px-4 py-4 text-center text-lg font-bold text-gray-500"
//                     >
//                       No orders found.
//                     </td>
//                   </tr>
//                 ) : (
//                   currentOrders.map((order, index) => (
//                     <tr
//                       key={order._id}
//                       className={`${
//                         index % 2 === 0 ? "bg-gray-50" : "bg-white"
//                       }`}
//                     >
//                       <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
//                         {truncateId(order.orderId.substring(0, 4))}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                         {truncateId(order.userId.substring(0, 4))}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                         {order.category}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                         {order.service}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                         {order.quantity}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                         {order.status}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                         {order.started}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                         {order.completedVotes || 0}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                         ${order.calculatedPrice}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                         {formatDate(order.createdAt)}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                         <div className="flex items-center justify-center gap-1">
//                           {/* Edit Button */}
//                           <button
//                             className="px-2 py-2 rounded-md bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 transition-colors duration-200"
//                             onClick={() => handleEdit(order)}
//                             title="Edit Order"
//                           >
//                             <RiEdit2Fill  className="h-4 w-4" />
//                           </button>

//                           {/* Delete Button */}
//                           <button
//                             className="px-2 py-2 rounded-md bg-red-100 text-red-500 hover:text-white hover:bg-red-500 transition-colors duration-200"
//                             onClick={() => handleDeleteClick(order.orderId)}
//                             title="Delete Order"
//                           >
//                             <FaRegTrashCan className="h-4 w-4" />
//                           </button>

//                           {/* View Button */}
//                           <button
//                             className="px-2 py-2 rounded-md bg-gray-200 text-gray-500 hover:text-white hover:bg-gray-500 transition-colors duration-200"
//                             onClick={() => handleView(order)}
//                             title="View Order"
//                           >
//                             <IoEyeSharp className="h-4 w-4" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//           {ordersToDisplay.length > 0 && (
//         <Pagination
//           ordersPerPage={ordersPerPage}
//           totalOrders={ordersToDisplay.length}
//           paginate={paginate}
//           currentPage={currentPage}
//           noDataFound={noDataFound} // Pass noDataFound prop
//         />
//       )}
//           {showDeleteConfirmation && (
//             <DeleteConfirmationPopup
//               onCancel={handleDeleteCancel}
//               onConfirm={handleDeleteConfirm}
//               setShowDeleteConfirmation={setShowDeleteConfirmation}
//             />
//           )}

//           {showEditPopup && selectedOrder && (
//             <EditOrderPopup
//               order={selectedOrder}
//               onClose={() => setShowEditPopup(false)}
//               onSave={async (updatedFields) => {
//                 try {
//                   const token = localStorage.getItem("authToken");
//                   if (!token) {
//                     setError("Token missing or invalid.");
//                     return;
//                   }

//                   const response = await axios.put(
//                     `${API_BASE_URL}/admin/orders/${selectedOrder.orderId}`,
//                     updatedFields,
//                     {
//                       headers: { Authorization: `Bearer ${token}` },
//                     }
//                   );

//                   if (response.status === 200) {
//                     const updatedOrder = { ...selectedOrder, ...updatedFields };
//                     updateOrderInState(updatedOrder);
//                   } else {
//                     setError(
//                       "Failed to update order. " +
//                         (response.data?.message || "")
//                     );
//                   }
//                 } catch (err) {
//                   console.error("Error updating order:", err);
//                   setError(err.message || "Failed to update order");
//                 } finally {
//                   setShowEditPopup(false);
//                 }
//               }}
//             />
//           )}

//           {showViewPopup && selectedOrder && (
//             <ViewOrderPopup
//               order={selectedOrder}
//               onClose={() => setShowViewPopup(false)}
//             />
//           )}

//           {/*  Conditionally render FilterSidebar based on `isFilterOpen` */}
//           {isFilterOpen && (
//             <FilterSidebar
//               isOpen={isFilterOpen}
//               onClose={toggleFilter}
//               onFilter={handleFilter}
//               initialFilters={filters}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderList;

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import moment from "moment";
// import { FcFilledFilter } from "react-icons/fc";
// import DeleteConfirmationPopup from "../components/OrderList/DeleteConfirmationPopup";
// import EditOrderPopup from "../components/OrderList/EditOrderPopup";
// import ViewOrderPopup from "../components/OrderList/ViewOrderPopup";
// import FilterSidebar from "../components/FilterSidebar";
// import Pagination from "../components/Pagination"; // Import Pagination component
// import { RiEdit2Fill } from "react-icons/ri";
// import { FaRegTrashCan } from "react-icons/fa6";
// import { IoEyeSharp } from "react-icons/io5";
// import Data from '../../assets/Images/nodata.svg'

// const OrderList = () => {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//     const [orderToDelete, setOrderToDelete] = useState(null);
//     const [showEditPopup, setShowEditPopup] = useState(false);
//     const [showViewPopup, setShowViewPopup] = useState(false);
//     const [selectedOrder, setSelectedOrder] = useState(null);
//     const [isFilterOpen, setIsFilterOpen] = useState(false); // State for controlling the visibility of the filter sidebar
//     const [filters, setFilters] = useState({});
//     const [filteredOrders, setFilteredOrders] = useState([]);
//     const [isFilterApplied, setIsFilterApplied] = useState(false);

//     const [currentPage, setCurrentPage] = useState(1); // Current page state
//     const [ordersPerPage] = useState(12); // Orders per page

//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     const token = TokenService.getToken();  // Get token from TokenService

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 if (!token) {
//                     setError("Token missing or invalid.");
//                     setLoading(false);
//                     return;
//                 }

//                 const response = await axios.get(`${API_BASE_URL}/admin/orders`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });

//                 if (Array.isArray(response.data)) {
//                     setOrders(response.data);
//                 } else {
//                     console.error("Response data is not an array:", response.data);
//                     setOrders([]);
//                     setError("Invalid data format received from the API");
//                 }
//                 setLoading(false);
//             } catch (err) {
//                 console.error("Error fetching orders:", err);
//                 setError(err.message || "Failed to fetch orders");
//                 setLoading(false);
//             }
//         };

//         fetchOrders();
//     }, [API_BASE_URL, token]);

//     useEffect(() => {
//         applyFilters();
//     }, [orders, filters]);

//     const applyFilters = () => {
//         let filtered = [...orders];
//         let filterUsed = false;

//         if (filters.category) {
//             filtered = filtered.filter((order) =>
//                 order.category.toLowerCase().includes(filters.category.toLowerCase())
//             );
//             filterUsed = true;
//         }
//         if (filters.service) {
//             filtered = filtered.filter((order) =>
//                 order.service.toLowerCase().includes(filters.service.toLowerCase())
//             );
//             filterUsed = true;
//         }
//         if (filters.status) {
//             filtered = filtered.filter((order) => order.status === filters.status);
//             filterUsed = true;
//         }

//         const response = await axios.get(`${API_BASE_URL}/admin/orders`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (Array.isArray(response.data)) {
//           // Sort orders by createdAt in descending order (latest first)
//           const sortedOrders = [...response.data].sort(
//             (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//           );
//           setOrders(sortedOrders);
//         } else {
//           console.error("Response data is not an array:", response.data);
//           setOrders([]);
//           setError("Invalid data format received from the API");
//         }

//         if (filters.endDate) {
//             const endDate = moment(filters.endDate); // Use moment to parse
//             if (endDate.isValid()) {
//                 // Validate date
//                 filtered = filtered.filter((order) => {
//                     const orderDate = moment(order.createdAt);
//                     return orderDate.isSameOrBefore(endDate, "day"); // Compare dates correctly
//                 });
//                 filterUsed = true;
//             } else {
//                 console.warn("Invalid end date provided.");
//             }
//         }

//         setFilteredOrders(filtered);
//         setIsFilterApplied(filterUsed);
//         setCurrentPage(1); // Reset to first page when filters change
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

//     // Sort filtered orders by createdAt in descending order (latest first)
//     const sortedFiltered = filtered.sort(
//       (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//     );
//     setFilteredOrders(sortedFiltered);

//     setIsFilterApplied(filterUsed);
//     setCurrentPage(1); // Reset to first page when filters change
//   };

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

//     const updateOrderInState = (updatedOrder) => {
//         setOrders((prevOrders) =>
//             prevOrders.map((order) =>
//                 order.orderId === updatedOrder.orderId ? updatedOrder : order
//             )
//         );
//     };

//     const toggleFilter = () => {
//         setIsFilterOpen(!isFilterOpen); // This function now toggles the `isFilterOpen` state
//     };

//     const handleFilter = (filterValues) => {
//         setFilters(filterValues);
//     };

//     const handleResetFilters = () => {
//         setFilters({});
//         setFilteredOrders([]);
//         setIsFilterApplied(false);
//         setCurrentPage(1); // Reset to first page after resetting filters
//     };

//     const ordersToDisplay = filteredOrders.length > 0 ? filteredOrders : orders;
//     const noDataFound =
//         (isFilterApplied && filteredOrders.length === 0) ||
//         (!isFilterApplied && orders.length === 0);

//     // Get current orders
//     const indexOfLastOrder = currentPage * ordersPerPage;
//     const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
//     const currentOrders = ordersToDisplay.slice(
//         indexOfFirstOrder,
//         indexOfLastOrder
//     );

//     // Change page
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     if (loading) {
//         return <div className="text-center py-4">Loading orders...</div>;
//     }

//     if (error) {
//         return <div className="text-center text-red-500 py-4">Error: {error}</div>;
//     }

//   const ordersToDisplay = filteredOrders.length > 0 ? filteredOrders : orders;
//   const noDataFound =
//     (isFilterApplied && filteredOrders.length === 0) ||
//     (!isFilterApplied && orders.length === 0);

//   // Get current orders
//   const indexOfLastOrder = currentPage * ordersPerPage;
//   const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
//   const currentOrders = ordersToDisplay.slice(
//     indexOfFirstOrder,
//     indexOfLastOrder
//   );

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (loading) {
//     return <div className="text-center py-4">Loading orders...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500 py-4">Error: {error}</div>;
//   }

//   return (
//     <div className="order-list px-4">
//       <div className="relative">
//         <div>
//           <div className="flex items-center justify-between mb-4">
//             <h1 className="text-2xl font-bold">Order List (Admin)</h1>
//             <div className="flex items-center gap-2 mr-8">
//               {isFilterApplied && (
//                 <button
//                   onClick={handleResetFilters}
//                   className="py-2.5 px-6 bg-gray-200 hover:bg-gray-300 rounded-xl text-sm font-bold text-gray-800 transition-colors duration-300"
//                 >
//                   <span>Reset</span>
//                 </button>
//               )}
//               <button
//                 className="flex items-center gap-2"
//                 onClick={toggleFilter}
//               >
//                 <FcFilledFilter className="w-5 h-5" />
//                 <p className="text-xl font-bold">Filter</p>
//               </button>
//             </div>
//           </div>

//           <div className="overflow-x-auto rounded-2xl border border-gray-300 shadow-main">
//             <table className="min-w-full bg-white">
//               <thead className="bg-gray-light text-sub-color font-bold">
//                 <tr>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Order ID
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     User ID
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Category
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Service
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Quantity
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Status
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Started Votes
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Deliver Votes
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Withheld Price
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Order Date
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {noDataFound ? (
//                   <tr>
//                     <td
//                       colSpan="11"
//                       className="px-4 py-4 text-center"
//                     >
//                       <div className="flex flex-col">
//                         <img src={Data} alt="No Data" className="h-40" />
//                         <p className="mt-4 text-xl font-semibold text-gray-700 capitalize">
//                           No order found
//                         </p>
//                       </div>
//                     </td>
//                   </tr>
//                 ) : (
//                   currentOrders.map((order, index) => (
//                     <tr
//                       key={order._id}
//                       className={`hover:bg-gray-50 transition-colors`}
//                     >
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {truncateId(order.orderId.substring(0, 4))}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {truncateId(order.userId.substring(0, 4))}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {order.category}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {order.service}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {order.quantity}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {order.status}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {order.started}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {order.completedVotes || 0}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         ${order.calculatedPrice}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {formatDate(order.createdAt)}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         <div className="flex items-center justify-center gap-1">
//                           {/* Edit Button */}
//                           <button
//                             className="px-2 py-2 rounded-md bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 transition-colors duration-200"
//                             onClick={() => handleEdit(order)}
//                             title="Edit Order"
//                           >
//                             <RiEdit2Fill className="h-4 w-4" />
//                           </button>

//                           {/* Delete Button */}
//                           <button
//                             className="px-2 py-2 rounded-md bg-red-100 text-red-500 hover:text-white hover:bg-red-500 transition-colors duration-200"
//                             onClick={() => handleDeleteClick(order.orderId)}
//                             title="Delete Order"
//                           >
//                             <FaRegTrashCan className="h-4 w-4" />
//                           </button>

//                           {/* View Button */}
//                           <button
//                             className="px-2 py-2 rounded-md bg-gray-200 text-gray-500 hover:text-white hover:bg-gray-500 transition-colors duration-200"
//                             onClick={() => handleView(order)}
//                             title="View Order"
//                           >
//                             <IoEyeSharp className="h-4 w-4" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//           {ordersToDisplay.length > 0 && (
//             <Pagination
//               ordersPerPage={ordersPerPage}
//               totalOrders={ordersToDisplay.length}
//               paginate={paginate}
//               currentPage={currentPage}
//               noDataFound={noDataFound} // Pass noDataFound prop
//             />
//           )}
//           {showDeleteConfirmation && (
//             <DeleteConfirmationPopup
//               onCancel={handleDeleteCancel}
//               onConfirm={handleDeleteConfirm}
//               setShowDeleteConfirmation={setShowDeleteConfirmation}
//             />
//           )}

//                     <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
//                         <table className="min-w-full bg-white">
//                             <thead className="bg-gray-200">
//                                 <tr>
//                                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                                         Order ID
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                                         User ID
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                                         Category
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                                         Service
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                                         Quantity
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                                         Status
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                                         Started Votes
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                                         Deliver Votes
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                                         Withheld Price
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                                         Order Date
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                                         Actions
//                                     </th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {noDataFound ? (
//                                     <tr>
//                                         <td
//                                             colSpan="11"
//                                             className="px-4 py-4 text-center text-lg font-bold text-gray-500"
//                                         >
//                                             No orders found.
//                                         </td>
//                                     </tr>
//                                 ) : (
//                                     currentOrders.map((order, index) => (
//                                         <tr
//                                             key={order._id}
//                                             className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
//                                                 }`}
//                                         >
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
//                                                 {truncateId(order.orderId.substring(0, 4))}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                                                 {truncateId(order.userId.substring(0, 4))}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                                                 {order.category}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                                                 {order.service}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                                                 {order.quantity}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                                                 {order.status}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                                                 {order.started}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                                                 {order.completedVotes || 0}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                                                 ${order.calculatedPrice}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                                                 {formatDate(order.createdAt)}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
//                                                 <div className="flex items-center justify-center gap-1">
//                                                     {/* Edit Button */}
//                                                     <button
//                                                         className="px-2 py-2 rounded-md bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 transition-colors duration-200"
//                                                         onClick={() => handleEdit(order)}
//                                                         title="Edit Order"
//                                                     >
//                                                         <RiEdit2Fill className="h-4 w-4" />
//                                                     </button>

//                                                     {/* Delete Button */}
//                                                     <button
//                                                         className="px-2 py-2 rounded-md bg-red-100 text-red-500 hover:text-white hover:bg-red-500 transition-colors duration-200"
//                                                         onClick={() => handleDeleteClick(order.orderId)}
//                                                         title="Delete Order"
//                                                     >
//                                                         <FaRegTrashCan className="h-4 w-4" />
//                                                     </button>

//                                                     {/* View Button */}
//                                                     <button
//                                                         className="px-2 py-2 rounded-md bg-gray-200 text-gray-500 hover:text-white hover:bg-gray-500 transition-colors duration-200"
//                                                         onClick={() => handleView(order)}
//                                                         title="View Order"
//                                                     >
//                                                         <IoEyeSharp className="h-4 w-4" />
//                                                     </button>
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                     ))
//                                 )}
//                             </tbody>
//                         </table>
//                     </div>
//                     {ordersToDisplay.length > 0 && (
//                         <Pagination
//                             ordersPerPage={ordersPerPage}
//                             totalOrders={ordersToDisplay.length}
//                             paginate={paginate}
//                             currentPage={currentPage}
//                             noDataFound={noDataFound} // Pass noDataFound prop
//                         />
//                     )}
//                     {showDeleteConfirmation && (
//                         <DeleteConfirmationPopup
//                             onCancel={handleDeleteCancel}
//                             onConfirm={handleDeleteConfirm}
//                             setShowDeleteConfirmation={setShowDeleteConfirmation}
//                         />
//                     )}

//                     {showEditPopup && selectedOrder && (
//                         <EditOrderPopup
//                             order={selectedOrder}
//                             onClose={() => setShowEditPopup(false)}
//                             onSave={async (updatedFields) => {
//                                 try {
//                                     const token = TokenService.getToken(); // Get token from TokenService
//                                     if (!token) {
//                                         setError("Token missing or invalid.");
//                                         return;
//                                     }

//                                     const response = await axios.put(
//                                         `${API_BASE_URL}/admin/orders/${selectedOrder.orderId}`,
//                                         updatedFields,
//                                         {
//                                             headers: { Authorization: `Bearer ${token}` },
//                                         }
//                                     );

//                                     if (response.status === 200) {
//                                         const updatedOrder = { ...selectedOrder, ...updatedFields };
//                                         updateOrderInState(updatedOrder);
//                                     } else {
//                                         setError(
//                                             "Failed to update order. " + (response.data?.message || "")
//                                         );
//                                     }
//                                 } catch (err) {
//                                     console.error("Error updating order:", err);
//                                     setError(err.message || "Failed to update order");
//                                 } finally {
//                                     setShowEditPopup(false);
//                                 }
//                             }}
//                         />
//                     )}

//                     {showViewPopup && selectedOrder && (
//                         <ViewOrderPopup
//                             order={selectedOrder}
//                             onClose={() => setShowViewPopup(false)}
//                         />
//                     )}

//                     {/*  Conditionally render FilterSidebar based on `isFilterOpen` */}
//                     {isFilterOpen && (
//                         <FilterSidebar
//                             isOpen={isFilterOpen}
//                             onClose={toggleFilter}
//                             onFilter={handleFilter}
//                             initialFilters={filters}
//                         />
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OrderList;

// import React, { useState, useEffect, useRef, useMemo } from "react";
// import axios from "axios";
// import moment from "moment";
// import { FcFilledFilter } from "react-icons/fc";
// import { RiEdit2Fill } from "react-icons/ri";
// import { FaRegTrashCan } from "react-icons/fa6";
// import { IoEyeSharp } from "react-icons/io5";
// import DeleteConfirmationPopup from "../components/OrderList/DeleteConfirmationPopup";
// import EditOrderPopup from "../components/OrderList/EditOrderPopup";
// import ViewOrderPopup from "../components/OrderList/ViewOrderPopup";
// import FilterSidebar from "../components/FilterSidebar";
// import Pagination from "../components/Pagination"; // Import Pagination component
// import Data from "../../assets/Images/nodata.svg";
// import TokenService from "../../utils/TokenService"; // Import TokenService

// const OrderList = () => {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//     const [orderToDelete, setOrderToDelete] = useState(null);
//     const [showEditPopup, setShowEditPopup] = useState(false);
//     const [showViewPopup, setShowViewPopup] = useState(false);
//     const [selectedOrder, setSelectedOrder] = useState(null);
//     const [isFilterOpen, setIsFilterOpen] = useState(false); // State for controlling the visibility of the filter sidebar
//     const [filters, setFilters] = useState({});
//     const [filteredOrders, setFilteredOrders] = useState([]);
//     const [isFilterApplied, setIsFilterApplied] = useState(false);

//     const [currentPage, setCurrentPage] = useState(1); // Current page state
//     const [ordersPerPage] = useState(12); // Orders per page

//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     const token = TokenService.getToken();  // Get token from TokenService

//     useEffect(() => {
//         const fetchOrders = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 if (!token) {
//                     setError("Token missing or invalid.");
//                     setLoading(false);
//                     return;
//                 }

//                 const response = await axios.get(`${API_BASE_URL}/admin/orders`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });

//                 if (response.status !== 200) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }

//                 const data = response.data;
//                 if (Array.isArray(data)) {
//                      // Sort orders by createdAt in descending order (latest first)
//                     const sortedOrders = [...data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//                     setOrders(sortedOrders);
//                 } else {
//                     console.error("Response data is not an array:", data);
//                     setOrders([]);
//                     setError("Invalid data format received from the API");
//                 }
//             } catch (err) {
//                 console.error("Error fetching orders:", err);
//                 setError(err.message || "Failed to fetch orders");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchOrders();
//     }, [API_BASE_URL, token]);

//     useEffect(() => {
//         applyFilters();
//     }, [orders, filters]);

//     const applyFilters = () => {
//         let filtered = [...orders];
//         let filterUsed = false;

//         if (filters.category) {
//             filtered = filtered.filter((order) =>
//                 order.category.toLowerCase().includes(filters.category.toLowerCase())
//             );
//             filterUsed = true;
//         }
//         if (filters.service) {
//             filtered = filtered.filter((order) =>
//                 order.service.toLowerCase().includes(filters.service.toLowerCase())
//             );
//             filterUsed = true;
//         }
//         if (filters.status) {
//             filtered = filtered.filter((order) => order.status === filters.status);
//             filterUsed = true;
//         }

//         if (filters.startDate) {
//             const startDate = moment(filters.startDate); // Use moment to parse
//             if (startDate.isValid()) {
//                 // Validate date
//                 filtered = filtered.filter((order) => {
//                     const orderDate = moment(order.createdAt);
//                     return orderDate.isSameOrAfter(startDate, "day"); // Compare dates correctly
//                 });
//                 filterUsed = true;
//             } else {
//                 console.warn("Invalid start date provided.");
//             }
//         }

//         if (filters.endDate) {
//             const endDate = moment(filters.endDate); // Use moment to parse
//             if (endDate.isValid()) {
//                 // Validate date
//                 filtered = filtered.filter((order) => {
//                     const orderDate = moment(order.createdAt);
//                     return orderDate.isSameOrBefore(endDate, "day"); // Compare dates correctly
//                 });
//                 filterUsed = true;
//             } else {
//                 console.warn("Invalid end date provided.");
//             }
//         }

//         // Sort filtered orders by createdAt in descending order (latest first)
//         const sortedFiltered = [...filtered].sort(
//           (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//         );

//         setFilteredOrders(sortedFiltered);
//         setIsFilterApplied(filterUsed);
//         setCurrentPage(1); // Reset to first page when filters change
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

//     const updateOrderInState = (updatedOrder) => {
//         setOrders((prevOrders) =>
//             prevOrders.map((order) =>
//                 order.orderId === updatedOrder.orderId ? updatedOrder : order
//             )
//         );
//     };

//     const toggleFilter = () => {
//         setIsFilterOpen(!isFilterOpen); // This function now toggles the `isFilterOpen` state
//     };

//     const handleFilter = (filterValues) => {
//         setFilters(filterValues);
//     };

//     const handleResetFilters = () => {
//         setFilters({});
//         setFilteredOrders([]);
//         setIsFilterApplied(false);
//         setCurrentPage(1); // Reset to first page after resetting filters
//     };

//     const ordersToDisplay = filteredOrders.length > 0 ? filteredOrders : orders;
//     const noDataFound =
//         (isFilterApplied && filteredOrders.length === 0) ||
//         (!isFilterApplied && orders.length === 0);

//     // Get current orders
//     const indexOfLastOrder = currentPage * ordersPerPage;
//     const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
//     const currentOrders = ordersToDisplay.slice(
//         indexOfFirstOrder,
//         indexOfLastOrder
//     );

//     // Change page
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     if (loading) {
//         return <div className="text-center py-4">Loading orders...</div>;
//     }

//     if (error) {
//         return <div className="text-center text-red-500 py-4">Error: {error}</div>;
//     }

//     return (
//         <div className="order-list px-4">
//             <div className="relative">
//                 <div>
//                     <div className="flex items-center justify-between mb-4">
//                         <h1 className="text-2xl font-bold">Order List (Admin)</h1>
//                         <div className="flex items-center gap-2 mr-8">
//                             {isFilterApplied && (
//                                 <button
//                                     onClick={handleResetFilters}
//                                     className="py-2.5 px-6 bg-gray-200 hover:bg-gray-300 rounded-xl text-sm font-bold text-gray-800 transition-colors duration-300"
//                                 >
//                                     <span>Reset</span>
//                                 </button>
//                             )}
//                             <button
//                                 className="flex items-center gap-2"
//                                 onClick={toggleFilter}
//                             >
//                                 <FcFilledFilter className="w-5 h-5" />
//                                 <p className="text-xl font-bold">Filter</p>
//                             </button>
//                         </div>
//                     </div>

//                     <div className="overflow-x-auto rounded-2xl border border-gray-300 shadow-main">
//                         <table className="min-w-full bg-white">
//                             <thead className="bg-gray-light text-sub-color font-bold">
//                                 <tr>
//                                     <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                         Order ID
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                         User ID
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                         Category
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                         Service
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                         Quantity
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                         Status
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                         Started Votes
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                                         Deliver Votes
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                                         Withheld Price
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                                         Order Date
//                                     </th>
//                                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                                         Actions
//                                     </th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {noDataFound ? (
//                                     <tr>
//                                         <td
//                                             colSpan="11"
//                                             className="px-4 py-4 text-center"
//                                         >
//                                             <div className="flex flex-col">
//                                                 <img src={Data} alt="No Data" className="h-40" />
//                                                 <p className="mt-4 text-xl font-semibold text-gray-700 capitalize">
//                                                     No order found
//                                                 </p>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ) : (
//                                     currentOrders.map((order, index) => (
//                                         <tr
//                                             key={order._id}
//                                             className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
//                                                 }`}
//                                         >
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                                 {truncateId(order.orderId.substring(0, 4))}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                                 {truncateId(order.userId.substring(0, 4))}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                                 {order.category}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                                 {order.service}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                                 {order.quantity}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                                 {order.status}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                                 {order.started}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                                 {order.completedVotes || 0}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                                 ${order.calculatedPrice}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                                 {formatDate(order.createdAt)}
//                                             </td>
//                                             <td className="px-4 py-2 whitespace-nowrap text-sm">
//                                                 <div className="flex items-center justify-center gap-1">
//                                                     {/* Edit Button */}
//                                                     <button
//                                                         className="px-2 py-2 rounded-md bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 transition-colors duration-200"
//                                                         onClick={() => handleEdit(order)}
//                                                         title="Edit Order"
//                                                     >
//                                                         <RiEdit2Fill className="h-4 w-4" />
//                                                     </button>

//                                                     {/* Delete Button */}
//                                                     <button
//                                                         className="px-2 py-2 rounded-md bg-red-100 text-red-500 hover:text-white hover:bg-red-500 transition-colors duration-200"
//                                                         onClick={() => handleDeleteClick(order.orderId)}
//                                                         title="Delete Order"
//                                                     >
//                                                         <FaRegTrashCan className="h-4 w-4" />
//                                                     </button>

//                                                     {/* View Button */}
//                                                     <button
//                                                         className="px-2 py-2 rounded-md bg-gray-200 text-gray-500 hover:text-white hover:bg-gray-500 transition-colors duration-200"
//                                                         onClick={() => handleView(order)}
//                                                         title="View Order"
//                                                     >
//                                                         <IoEyeSharp className="h-4 w-4" />
//                                                     </button>
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                     ))
//                                 )}
//                             </tbody>
//                         </table>
//                     </div>
//                     {ordersToDisplay.length > 0 && (
//                         <Pagination
//                             ordersPerPage={ordersPerPage}
//                             totalOrders={ordersToDisplay.length}
//                             paginate={paginate}
//                             currentPage={currentPage}
//                             noDataFound={noDataFound} // Pass noDataFound prop
//                         />
//                     )}
//                     {showDeleteConfirmation && (
//                         <DeleteConfirmationPopup
//                             onCancel={handleDeleteCancel}
//                             onConfirm={handleDeleteConfirm}
//                             setShowDeleteConfirmation={setShowDeleteConfirmation}
//                         />
//                     )}

//           {showEditPopup && selectedOrder && (
//             <EditOrderPopup
//               order={selectedOrder}
//               onClose={() => setShowEditPopup(false)}
//               onSave={async (updatedFields) => {
//                 try {
//                   const response = await axios.put(
//                     `${API_BASE_URL}/admin/orders/${selectedOrder.orderId}`,
//                     updatedFields,
//                     {
//                       headers: { Authorization: `Bearer ${token}` },
//                     }
//                   );

//                   if (response.status === 200) {
//                     const updatedOrder = { ...selectedOrder, ...updatedFields };
//                     updateOrderInState(updatedOrder);
//                   } else {
//                     setError(
//                       "Failed to update order. " +
//                         (response.data?.message || "")
//                     );
//                   }
//                 } catch (err) {
//                   console.error("Error updating order:", err);
//                   setError(err.message || "Failed to update order");
//                 } finally {
//                   setShowEditPopup(false);
//                 }
//               }}
//             />
//           )}

//           {showViewPopup && selectedOrder && (
//             <ViewOrderPopup
//               order={selectedOrder}
//               onClose={() => setShowViewPopup(false)}
//             />
//           )}

//           {/* Conditionally render FilterSidebar based on `isFilterOpen` */}
//           {isFilterOpen && (
//             <FilterSidebar
//               isOpen={isFilterOpen}
//               onClose={toggleFilter}
//               onFilter={handleFilter}
//               initialFilters={filters}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderList;





// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import moment from "moment";
// import { FcFilledFilter } from "react-icons/fc";
// import { RiEdit2Fill } from "react-icons/ri";
// import { FaRegTrashCan } from "react-icons/fa6";
// import { IoEyeSharp } from "react-icons/io5";
// import DeleteConfirmationPopup from "../components/OrderList/DeleteConfirmationPopup";
// import EditOrderPopup from "../components/OrderList/EditOrderPopup";
// import ViewOrderPopup from "../components/OrderList/ViewOrderPopup";
// import FilterSidebar from "../components/FilterSidebar";
// import Pagination from "../components/Pagination"; // Import Pagination component
// import Data from "../../assets/Images/nodata.svg";
// import TokenService from "../../utils/TokenService"; // Import TokenService
// import FilterAndSearch from "../components/FilterAndSearch"; // Adjust path as needed

// const OrderList = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//   const [orderToDelete, setOrderToDelete] = useState(null);
//   const [showEditPopup, setShowEditPopup] = useState(false);
//   const [showViewPopup, setShowViewPopup] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [filters, setFilters] = useState({});
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const [isFilterApplied, setIsFilterApplied] = useState(false);

//   // State for FilterAndSearch
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [sortLabel, setSortLabel] = useState("Sort");
//   const [rowsPerPage, setRowsPerPage] = useState(12);

//   // Temporary state for FilterSidebar values
//   const [tempFilters, setTempFilters] = useState({});

//   const [currentPage, setCurrentPage] = useState(1);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   const token = TokenService.getToken();

//   const sortOptions = [
//     { label: "Date Ascending", value: "date_asc" },
//     { label: "Date Descending", value: "date_desc" },
//     { label: "Quantity Ascending", value: "quantity_asc" },
//     { label: "Quantity Descending", value: "quantity_desc" },
//   ];

//   useEffect(() => {
//     const fetchOrders = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         if (!token) {
//           setError("Token missing or invalid.");
//           setLoading(false);
//           return;
//         }

//         const response = await axios.get(`${API_BASE_URL}/admin/orders`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (response.status !== 200) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = response.data;
//         if (Array.isArray(data)) {
//           const sortedOrders = [...data].sort(
//             (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//           );
//           setOrders(sortedOrders);
//         } else {
//           console.error("Response data is not an array:", data);
//           setOrders([]);
//           setError("Invalid data format received from the API");
//         }
//       } catch (err) {
//         console.error("Error fetching orders:", err);
//         setError(err.message || "Failed to fetch orders");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [API_BASE_URL, token]);

//   useEffect(() => {
//     applyFilters(); // Apply filters when searchTerm or sortOrder changes
//   }, [orders, searchTerm, sortOrder, filters]);

//   const applyFilters = () => {
//     let filtered = [...orders];
//     let filterUsed = false;

//     // Apply search filter
//     if (searchTerm) {
//       filtered = filtered.filter(
//         (order) =>
//           order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           order.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           order.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           order.service.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       filterUsed = true;
//     }

//     // Apply sort
//     if (sortOrder) {
//       switch (sortOrder) {
//         case "date_asc":
//           filtered.sort(
//             (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
//           );
//           break;
//         case "date_desc":
//           filtered.sort(
//             (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//           );
//           break;
//         case "quantity_asc":
//           filtered.sort((a, b) => a.quantity - b.quantity);
//           break;
//         case "quantity_desc":
//           filtered.sort((a, b) => b.quantity - a.quantity);
//           break;
//         default:
//           break;
//       }
//       filterUsed = true;
//     }

//     // apply FilterSideBar filter
//     if (filters.category) {
//       filtered = filtered.filter((order) =>
//         order.category.toLowerCase().includes(filters.category.toLowerCase())
//       );
//       filterUsed = true;
//     }
//     if (filters.service) {
//       filtered = filtered.filter((order) =>
//         order.service.toLowerCase().includes(filters.service.toLowerCase())
//       );
//       filterUsed = true;
//     }
//     if (filters.status) {
//       filtered = filtered.filter((order) => order.status === filters.status);
//       filterUsed = true;
//     }

//     if (filters.startDate) {
//       const startDate = moment(filters.startDate);
//       if (startDate.isValid()) {
//         filtered = filtered.filter((order) => {
//           const orderDate = moment(order.createdAt);
//           return orderDate.isSameOrAfter(startDate, "day");
//         });
//         filterUsed = true;
//       } else {
//         console.warn("Invalid start date provided.");
//       }
//     }

//     if (filters.endDate) {
//       const endDate = moment(filters.endDate);
//       if (endDate.isValid()) {
//         filtered = filtered.filter((order) => {
//           const orderDate = moment(order.createdAt);
//           return orderDate.isSameOrBefore(endDate, "day");
//         });
//         filterUsed = true;
//       } else {
//         console.warn("Invalid end date provided.");
//       }
//     }

//     setFilteredOrders(filtered);
//     setIsFilterApplied(filterUsed);
//     setCurrentPage(1); // Reset to first page when filters change
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

//   const updateOrderInState = (updatedOrder) => {
//     setOrders((prevOrders) =>
//       prevOrders.map((order) =>
//         order.orderId === updatedOrder.orderId ? updatedOrder : order
//       )
//     );
//   };

//   const toggleFilter = () => {
//     setIsFilterOpen(!isFilterOpen);
//     setTempFilters(filters); // save current filters to tempFilters before opening the sidebar
//   };

//   const handleFilter = (filterValues) => {
//     setTempFilters(filterValues); // Store the filter value in the temporary state
//   };

//   const handleApplyFilters = () => {
//     setFilters(tempFilters); // Apply all the filters to the filter state.
//     setIsFilterOpen(false); //close the filter
//   };

//   const handleCancelFilters = () => {
//     // Reset temporary filters to current filters
//     setTempFilters(filters);
//     setIsFilterOpen(false);
//   };

//   const handleSearchChange = (term) => {
//     setSearchTerm(term);
//     setCurrentPage(1);
//   };

//   const handleSortSelect = (value, label) => {
//     setSortOrder(value);
//     setSortLabel(label);
//     setCurrentPage(1);
//   };

//   const handleRowsPerPageChange = (newRowsPerPage) => {
//     setRowsPerPage(newRowsPerPage);
//     setCurrentPage(1);
//   };

//   const handleReset = () => {
//     setSearchTerm("");
//     setSortOrder("");
//     setSortLabel("Sort");
//     setRowsPerPage(12);
//     setFilters({});
//     setTempFilters({}); // Reset the temporary state as well
//     setFilteredOrders([]);
//     setIsFilterApplied(false);
//     setCurrentPage(1);
//   };

//   // Pass tempFilters and setTempFilters to FilterSidebar
//   const handleCategoryChange = (selectedCategory) => {
//     setTempFilters({ ...tempFilters, category: selectedCategory });
//   };

//   const handleServiceChange = (selectedService) => {
//     setTempFilters({ ...tempFilters, service: selectedService });
//   };

//   const handleStatusChange = (selectedStatus) => {
//     const statusValue = selectedStatus === "All" ? null : selectedStatus;
//     setTempFilters({ ...tempFilters, status: statusValue });
//   };

//   const handleStartDateChange = (e) => {
//     setTempFilters({ ...tempFilters, startDate: e.target.value });
//   };

//   const handleEndDateChange = (e) => {
//     setTempFilters({ ...tempFilters, endDate: e.target.value });
//   };

//   const ordersToDisplay = filteredOrders.length > 0 ? filteredOrders : orders;
//   const noDataFound =
//     (isFilterApplied && filteredOrders.length === 0) ||
//     (!isFilterApplied && orders.length === 0);

//   // Get current orders
//   const indexOfLastOrder = currentPage * rowsPerPage;
//   const indexOfFirstOrder = indexOfLastOrder - rowsPerPage;
//   const currentOrders = ordersToDisplay.slice(
//     indexOfFirstOrder,
//     indexOfLastOrder
//   );

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const isFilterAppliedInFilterAndSearch = rowsPerPage !== 12; // Determine whether filter is applied for FilterAndSearch or not

//   if (loading) {
//     return (
//         <div className="flex justify-center items-center h-full">
//           <div className="py-20 text-center text-gray-400">
//             <div className="flex flex-col items-center">
//               <div className="w-16 h-16 border-t-4 border-solid rounded-full border-main-color animate-spin"></div>
//             </div>
//           </div>
//         </div>
//       );
//   }

//   if (error) {
//     return <div className="text-center text-red-500 py-4">Error: {error}</div>;
//   }

//   return (
//     <div className="order-list px-4">
//       <div className="relative">
//         <div>
//           <div className="mb-4">
//             <h1 className="text-3xl font-bold mb-2">Order List (Admin)</h1>
//           </div>
//           <div className="flex items-center justify-between gap-4 mb-4">
//             {/* Left: Filter Button */}
//             <div className="flex items-center gap-4">
//               <button
//                 className="flex items-center gap-2"
//                 onClick={toggleFilter}
//               >
//                 <FcFilledFilter className="w-5 h-5" />
//                 <p className="text-xl font-bold">Filter</p>
//               </button>
//             </div>

//             {/* Right: Rows per Page and Reset Button */}
//             <div className="flex items-center gap-4">
//               <FilterAndSearch
//                 searchTerm={searchTerm}
//                 sortOrder={sortOrder}
//                 sortLabel={sortLabel}
//                 rowsPerPage={rowsPerPage}
//                 onSearch={handleSearchChange}
//                 onSort={handleSortSelect}
//                 onRowsPerPageChange={handleRowsPerPageChange}
//                 sortOptions={sortOptions}
//                 showSearch={false}
//                 showSort={false}
//                 showRowsPerPage={true}
//               />

//               {isFilterApplied ||
//               searchTerm ||
//               sortOrder ||
//               rowsPerPage !== 12 ? (
//                 <button
//                   onClick={handleReset}
//                   className="py-4 px-6 bg-gray-200 hover:bg-gray-300 rounded-xl text-sm font-bold text-gray-800 border transition-colors duration-300 w-full"
//                 >
//                   <span>Reset All</span>
//                 </button>
//               ) : null}
//             </div>
//           </div>

//           <div className="overflow-x-auto rounded-2xl border border-gray-300 shadow-main">
//             <table className="min-w-full bg-white">
//               <thead className="bg-gray-200 text-sub-color font-bold">
//                 <tr>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Order ID
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     User ID
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Category
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Service
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Quantity
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Status
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Started Votes
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Deliver Votes
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                     Withheld Price
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                     Order Date
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {noDataFound ? (
//                   <tr>
//                     <td colSpan="11" className="px-4 py-4 text-center">
//                       <div className="flex flex-col">
//                         <img src={Data} alt="No Data" className="h-40" />
//                         <p className="mt-4 text-xl font-semibold text-gray-700 capitalize">
//                           No order found
//                         </p>
//                       </div>
//                     </td>
//                   </tr>
//                 ) : (
//                   currentOrders.map((order, index) => (
//                     <tr
//                       key={order._id}
//                       className="hover:bg-gray-50 transition-colors"
//                     >
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {truncateId(order.orderId.substring(0, 4))}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {truncateId(order.userId.substring(0, 4))}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {order.category}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {order.service}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {order.quantity}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {order.status}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {order.started}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {order.completedVotes || 0}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         ${order.calculatedPrice}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {formatDate(order.createdAt)}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         <div className="flex items-center justify-center gap-1">
//                           {/* Edit Button */}
//                           <button
//                             className="px-2 py-2 rounded-md bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 transition-colors duration-200"
//                             onClick={() => handleEdit(order)}
//                             title="Edit Order"
//                           >
//                             <RiEdit2Fill className="h-4 w-4" />
//                           </button>

//                           {/* Delete Button */}
//                           <button
//                             className="px-2 py-2 rounded-md bg-red-100 text-red-500 hover:text-white hover:bg-red-500 transition-colors duration-200"
//                             onClick={() => handleDeleteClick(order.orderId)}
//                             title="Delete Order"
//                           >
//                             <FaRegTrashCan className="h-4 w-4" />
//                           </button>

//                           {/* View Button */}
//                           <button
//                             className="px-2 py-2 rounded-md bg-gray-200 text-gray-500 hover:text-white hover:bg-gray-500 transition-colors duration-200"
//                             onClick={() => handleView(order)}
//                             title="View Order"
//                           >
//                             <IoEyeSharp className="h-4 w-4" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//           {ordersToDisplay.length > 0 && (
//             <Pagination
//               ordersPerPage={rowsPerPage}
//               totalOrders={ordersToDisplay.length}
//               paginate={paginate}
//               currentPage={currentPage}
//               noDataFound={noDataFound} // Pass noDataFound prop
//             />
//           )}
//           {showDeleteConfirmation && (
//             <DeleteConfirmationPopup
//               onCancel={handleDeleteCancel}
//               onConfirm={handleDeleteConfirm}
//               setShowDeleteConfirmation={setShowDeleteConfirmation}
//             />
//           )}

//           {showEditPopup && selectedOrder && (
//             <EditOrderPopup
//               order={selectedOrder}
//               onClose={() => setShowEditPopup(false)}
//               onSave={async (updatedFields) => {
//                 try {
//                   const response = await axios.put(
//                     `${API_BASE_URL}/admin/orders/${selectedOrder.orderId}`,
//                     updatedFields,
//                     {
//                       headers: { Authorization: `Bearer ${token}` },
//                     }
//                   );

//                   if (response.status === 200) {
//                     const updatedOrder = { ...selectedOrder, ...updatedFields };
//                     updateOrderInState(updatedOrder);
//                   } else {
//                     setError(
//                       "Failed to update order. " +
//                         (response.data?.message || "")
//                     );
//                   }
//                 } catch (err) {
//                   console.error("Error updating order:", err);
//                   setError(err.message || "Failed to update order");
//                 } finally {
//                   setShowEditPopup(false);
//                 }
//               }}
//             />
//           )}

//           {showViewPopup && selectedOrder && (
//             <ViewOrderPopup
//               order={selectedOrder}
//               onClose={() => setShowViewPopup(false)}
//             />
//           )}

//           {/* Conditionally render FilterSidebar based on `isFilterOpen` */}
//           {isFilterOpen && (
//             <FilterSidebar
//               isOpen={isFilterOpen}
//               onClose={handleCancelFilters} // Use handleCancelFilters
//               tempCategory={tempFilters.category || ""} // Use tempFilters
//               tempService={tempFilters.service || ""}
//               tempStatus={tempFilters.status || ""}
//               tempStartDate={tempFilters.startDate || ""}
//               tempEndDate={tempFilters.endDate || ""}
//               onCategoryChange={handleCategoryChange} // Use setTempFilters
//               onServiceChange={handleServiceChange}
//               onStatusChange={handleStatusChange}
//               onStartDateChange={handleStartDateChange}
//               onEndDateChange={handleEndDateChange}
//               onApplyFilters={handleApplyFilters} //pass apply filter method to FilterSideBar
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderList;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import moment from "moment";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { FcFilledFilter } from "react-icons/fc";
// import { RiEdit2Fill } from "react-icons/ri";
// import { FaRegTrashCan } from "react-icons/fa6";
// import { IoEyeSharp } from "react-icons/io5";
// import DeleteConfirmationPopup from "../components/OrderList/DeleteConfirmationPopup";
// import EditOrderPopup from "../components/OrderList/EditOrderPopup";
// import FilterSidebar from "../components/FilterSidebar";
// import Pagination from "../components/Pagination"; // Import Pagination component
// import Data from "../../assets/Images/nodata.svg";
// import TokenService from "../../utils/TokenService"; // Import TokenService
// import FilterAndSearch from "../components/FilterAndSearch"; // Adjust path as needed

// const OrderList = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//   const [orderToDelete, setOrderToDelete] = useState(null);
//   const [showEditPopup, setShowEditPopup] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [filters, setFilters] = useState({});
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const [isFilterApplied, setIsFilterApplied] = useState(false);

//   // State for FilterAndSearch
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [sortLabel, setSortLabel] = useState("Sort");
//   const [rowsPerPage, setRowsPerPage] = useState(12);

//   // Temporary state for FilterSidebar values
//   const [tempFilters, setTempFilters] = useState({});

//   const [currentPage, setCurrentPage] = useState(1);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   const token = TokenService.getToken();

//   const navigate = useNavigate(); // Get the navigate function

//   const sortOptions = [
//     { label: "Date Ascending", value: "date_asc" },
//     { label: "Date Descending", value: "date_desc" },
//     { label: "Quantity Ascending", value: "quantity_asc" },
//     { label: "Quantity Descending", value: "quantity_desc" },
//   ];

//   useEffect(() => {
//     const fetchOrders = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         if (!token) {
//           setError("Token missing or invalid.");
//           setLoading(false);
//           return;
//         }

//         const response = await axios.get(`${API_BASE_URL}/admin/orders`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (response.status !== 200) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = response.data;
//         if (Array.isArray(data)) {
//           const sortedOrders = [...data].sort(
//             (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//           );
//           setOrders(sortedOrders);
//         } else {
//           console.error("Response data is not an array:", data);
//           setOrders([]);
//           setError("Invalid data format received from the API");
//         }
//       } catch (err) {
//         console.error("Error fetching orders:", err);
//         setError(err.message || "Failed to fetch orders");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [API_BASE_URL, token]);

//   useEffect(() => {
//     applyFilters(); // Apply filters when searchTerm or sortOrder changes
//   }, [orders, searchTerm, sortOrder, filters]);

//   const applyFilters = () => {
//     let filtered = [...orders];
//     let filterUsed = false;

//     // Apply search filter
//     if (searchTerm) {
//       filtered = filtered.filter(
//         (order) =>
//           order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           order.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           order.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           order.service.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       filterUsed = true;
//     }

//     // Apply sort
//     if (sortOrder) {
//       switch (sortOrder) {
//         case "date_asc":
//           filtered.sort(
//             (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
//           );
//           break;
//         case "date_desc":
//           filtered.sort(
//             (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//           );
//           break;
//         case "quantity_asc":
//           filtered.sort((a, b) => a.quantity - b.quantity);
//           break;
//         case "quantity_desc":
//           filtered.sort((a, b) => b.quantity - a.quantity);
//           break;
//         default:
//           break;
//       }
//       filterUsed = true;
//     }

//     // apply FilterSideBar filter
//     if (filters.category) {
//       filtered = filtered.filter((order) =>
//         order.category.toLowerCase().includes(filters.category.toLowerCase())
//       );
//       filterUsed = true;
//     }
//     if (filters.service) {
//       filtered = filtered.filter((order) =>
//         order.service.toLowerCase().includes(filters.service.toLowerCase())
//       );
//       filterUsed = true;
//     }
//     if (filters.status) {
//       filtered = filtered.filter((order) => order.status === filters.status);
//       filterUsed = true;
//     }

//     if (filters.startDate) {
//       const startDate = moment(filters.startDate);
//       if (startDate.isValid()) {
//         filtered = filtered.filter((order) => {
//           const orderDate = moment(order.createdAt);
//           return orderDate.isSameOrAfter(startDate, "day");
//         });
//         filterUsed = true;
//       } else {
//         console.warn("Invalid start date provided.");
//       }
//     }

//     if (filters.endDate) {
//       const endDate = moment(filters.endDate);
//       if (endDate.isValid()) {
//         filtered = filtered.filter((order) => {
//           const orderDate = moment(order.createdAt);
//           return orderDate.isSameOrBefore(endDate, "day");
//         });
//         filterUsed = true;
//       } else {
//         console.warn("Invalid end date provided.");
//       }
//     }

//     setFilteredOrders(filtered);
//     setIsFilterApplied(filterUsed);
//     setCurrentPage(1); // Reset to first page when filters change
//   };

//   const handleEdit = (order) => {
//     setSelectedOrder(order);
//     setShowEditPopup(true);
//   };

//   const handleView = (order) => {
//     navigate(`/admin/orders/${order.orderId}`); // Navigate to the single order page
//   };

//   const handleDeleteClick = (orderId) => {
//     setOrderToDelete(orderId);
//     setShowDeleteConfirmation(true);
//   };

//   const handleDeleteConfirm = async () => {
//     try {
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

//   const updateOrderInState = (updatedOrder) => {
//     setOrders((prevOrders) =>
//       prevOrders.map((order) =>
//         order.orderId === updatedOrder.orderId ? updatedOrder : order
//       )
//     );
//   };

//   const toggleFilter = () => {
//     setIsFilterOpen(!isFilterOpen);
//     setTempFilters(filters); // save current filters to tempFilters before opening the sidebar
//   };

//   const handleFilter = (filterValues) => {
//     setTempFilters(filterValues); // Store the filter value in the temporary state
//   };

//   const handleApplyFilters = () => {
//     setFilters(tempFilters); // Apply all the filters to the filter state.
//     setIsFilterOpen(false); //close the filter
//   };

//   const handleCancelFilters = () => {
//     // Reset temporary filters to current filters
//     setTempFilters(filters);
//     setIsFilterOpen(false);
//   };

//   const handleSearchChange = (term) => {
//     setSearchTerm(term);
//     setCurrentPage(1);
//   };

//   const handleSortSelect = (value, label) => {
//     setSortOrder(value);
//     setSortLabel(label);
//     setCurrentPage(1);
//   };

//   const handleRowsPerPageChange = (newRowsPerPage) => {
//     setRowsPerPage(newRowsPerPage);
//     setCurrentPage(1);
//   };

//   const handleReset = () => {
//     setSearchTerm("");
//     setSortOrder("");
//     setSortLabel("Sort");
//     setRowsPerPage(12);
//     setFilters({});
//     setTempFilters({}); // Reset the temporary state as well
//     setFilteredOrders([]);
//     setIsFilterApplied(false);
//     setCurrentPage(1);
//   };

//   // Pass tempFilters and setTempFilters to FilterSidebar
//   const handleCategoryChange = (selectedCategory) => {
//     setTempFilters({ ...tempFilters, category: selectedCategory });
//   };

//   const handleServiceChange = (selectedService) => {
//     setTempFilters({ ...tempFilters, service: selectedService });
//   };

//   const handleStatusChange = (selectedStatus) => {
//     const statusValue = selectedStatus === "All" ? null : selectedStatus;
//     setTempFilters({ ...tempFilters, status: statusValue });
//   };

//   const handleStartDateChange = (e) => {
//     setTempFilters({ ...tempFilters, startDate: e.target.value });
//   };

//   const handleEndDateChange = (e) => {
//     setTempFilters({ ...tempFilters, endDate: e.target.value });
//   };

//   const ordersToDisplay = filteredOrders.length > 0 ? filteredOrders : orders;
//   const noDataFound =
//     (isFilterApplied && filteredOrders.length === 0) ||
//     (!isFilterApplied && orders.length === 0);

//   // Get current orders
//   const indexOfLastOrder = currentPage * rowsPerPage;
//   const indexOfFirstOrder = indexOfLastOrder - rowsPerPage;
//   const currentOrders = ordersToDisplay.slice(
//     indexOfFirstOrder,
//     indexOfLastOrder
//   );

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const isFilterAppliedInFilterAndSearch = rowsPerPage !== 12; // Determine whether filter is applied for FilterAndSearch or not

//   if (loading) {
//     return (
//         <div className="flex justify-center items-center h-full">
//           <div className="py-20 text-center text-gray-400">
//             <div className="flex flex-col items-center">
//               <div className="w-16 h-16 border-t-4 border-solid rounded-full border-main-color animate-spin"></div>
//             </div>
//           </div>
//         </div>
//       );
//   }

//   if (error) {
//     return <div className="text-center text-red-500 py-4">Error: {error}</div>;
//   }

//   return (
//     <div className="order-list px-4">
//       <div className="relative">
//         <div>
//           <div className="mb-4">
//             <h1 className="text-3xl font-bold mb-2">Order List (Admin)</h1>
//           </div>
//           <div className="flex items-center justify-between gap-4 mb-4">
//             {/* Left: Filter Button */}
//             <div className="flex items-center gap-4">
//               <button
//                 className="flex items-center gap-2"
//                 onClick={toggleFilter}
//               >
//                 <FcFilledFilter className="w-5 h-5" />
//                 <p className="text-xl font-bold">Filter</p>
//               </button>
//             </div>

//             {/* Right: Rows per Page and Reset Button */}
//             <div className="flex items-center gap-4">
//               <FilterAndSearch
//                 searchTerm={searchTerm}
//                 sortOrder={sortOrder}
//                 sortLabel={sortLabel}
//                 rowsPerPage={rowsPerPage}
//                 onSearch={handleSearchChange}
//                 onSort={handleSortSelect}
//                 onRowsPerPageChange={handleRowsPerPageChange}
//                 sortOptions={sortOptions}
//                 showSearch={false}
//                 showSort={false}
//                 showRowsPerPage={true}
//               />

//               {isFilterApplied ||
//               searchTerm ||
//               sortOrder ||
//               rowsPerPage !== 12 ? (
//                 <button
//                   onClick={handleReset}
//                   className="py-4 px-6 bg-gray-200 hover:bg-gray-300 rounded-xl text-sm font-bold text-gray-800 border transition-colors duration-300 w-full"
//                 >
//                   <span>Reset All</span>
//                 </button>
//               ) : null}
//             </div>
//           </div>

//           <div className="overflow-x-auto rounded-2xl border border-gray-300 shadow-main">
//             <table className="min-w-full bg-white">
//               <thead className="bg-gray-200 text-sub-color font-bold">
//                 <tr>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Order ID
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     User ID
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Category
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Service
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Quantity
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Status
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Started Votes
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
//                     Deliver Votes
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                     Withheld Price
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                     Order Date
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {noDataFound ? (
//                   <tr>
//                     <td colSpan="11" className="px-4 py-4 text-center">
//                       <div className="flex flex-col">
//                         <img src={Data} alt="No Data" className="h-40" />
//                         <p className="mt-4 text-xl font-semibold text-gray-700 capitalize">
//                           No order found
//                         </p>
//                       </div>
//                     </td>
//                   </tr>
//                 ) : (
//                   currentOrders.map((order, index) => (
//                     <tr
//                       key={order._id}
//                       className="hover:bg-gray-50 transition-colors"
//                     >
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {truncateId(order.orderId.substring(0, 4))}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {truncateId(order.userId.substring(0, 4))}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {order.category}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {order.service}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {order.quantity}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {order.status}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {order.started}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {order.completedVotes || 0}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         ${order.calculatedPrice}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         {formatDate(order.createdAt)}
//                       </td>
//                       <td className="px-4 py-2 whitespace-nowrap text-sm">
//                         <div className="flex items-center justify-center gap-1">
//                           {/* Edit Button */}
//                           <button
//                             className="px-2 py-2 rounded-md bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 transition-colors duration-200"
//                             onClick={() => handleEdit(order)}
//                             title="Edit Order"
//                           >
//                             <RiEdit2Fill className="h-4 w-4" />
//                           </button>

//                           {/* Delete Button */}
//                           <button
//                             className="px-2 py-2 rounded-md bg-red-100 text-red-500 hover:text-white hover:bg-red-500 transition-colors duration-200"
//                             onClick={() => handleDeleteClick(order.orderId)}
//                             title="Delete Order"
//                           >
//                             <FaRegTrashCan className="h-4 w-4" />
//                           </button>

//                           {/* View Button */}
//                           <button
//                             className="px-2 py-2 rounded-md bg-gray-200 text-gray-500 hover:text-white hover:bg-gray-500 transition-colors duration-200"
//                             onClick={() => handleView(order)}
//                             title="View Order"
//                           >
//                             <IoEyeSharp className="h-4 w-4" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//           {ordersToDisplay.length > 0 && (
//             <Pagination
//               ordersPerPage={rowsPerPage}
//               totalOrders={ordersToDisplay.length}
//               paginate={paginate}
//               currentPage={currentPage}
//               noDataFound={noDataFound} // Pass noDataFound prop
//             />
//           )}
//           {showDeleteConfirmation && (
//             <DeleteConfirmationPopup
//               onCancel={handleDeleteCancel}
//               onConfirm={handleDeleteConfirm}
//               setShowDeleteConfirmation={setShowDeleteConfirmation}
//             />
//           )}

//           {showEditPopup && selectedOrder && (
//             <EditOrderPopup
//               order={selectedOrder}
//               onClose={() => setShowEditPopup(false)}
//               onSave={async (updatedFields) => {
//                 try {
//                   const token = TokenService.getToken();
//                   const response = await axios.put(
//                     `${API_BASE_URL}/admin/orders/${selectedOrder.orderId}`,
//                     updatedFields,
//                     {
//                       headers: { Authorization: `Bearer ${token}` },
//                     }
//                   );

//                   if (response.status === 200) {
//                     const updatedOrder = { ...selectedOrder, ...updatedFields };
//                     updateOrderInState(updatedOrder);
//                   } else {
//                     setError(
//                       "Failed to update order. " +
//                         (response.data?.message || "")
//                     );
//                   }
//                 } catch (err) {
//                   console.error("Error updating order:", err);
//                   setError(err.message || "Failed to update order");
//                 } finally {
//                   setShowEditPopup(false);
//                 }
//               }}
//             />
//           )}

//           {/* Conditionally render FilterSidebar based on `isFilterOpen` */}
//           {isFilterOpen && (
//             <FilterSidebar
//               isOpen={isFilterOpen}
//               onClose={handleCancelFilters} // Use handleCancelFilters
//               tempCategory={tempFilters.category || ""} // Use tempFilters
//               tempService={tempFilters.service || ""}
//               tempStatus={tempFilters.status || ""}
//               tempStartDate={tempFilters.startDate || ""}
//               tempEndDate={tempFilters.endDate || ""}
//               onCategoryChange={handleCategoryChange} // Use setTempFilters
//               onServiceChange={handleServiceChange}
//               onStatusChange={handleStatusChange}
//               onStartDateChange={handleStartDateChange}
//               onEndDateChange={handleEndDateChange}
//               onApplyFilters={handleApplyFilters} //pass apply filter method to FilterSideBar
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderList;



import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FcFilledFilter } from "react-icons/fc";
import { RiEdit2Fill } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import DeleteConfirmationPopup from "../components/OrderList/DeleteConfirmationPopup";
import EditOrderPopup from "../components/OrderList/EditOrderPopup";
import FilterSidebar from "../components/FilterSidebar";
import Pagination from "../components/Pagination"; // Import Pagination component
import Data from "../../assets/Images/nodata.svg";
import TokenService from "../../utils/TokenService"; // Import TokenService
import FilterAndSearch from "../components/FilterAndSearch"; // Adjust path as needed

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({});
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  // State for FilterAndSearch
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [sortLabel, setSortLabel] = useState("Sort");
  const [rowsPerPage, setRowsPerPage] = useState(12);

  // Temporary state for FilterSidebar values
  const [tempFilters, setTempFilters] = useState({});

  const [currentPage, setCurrentPage] = useState(1);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const token = TokenService.getToken();

  const navigate = useNavigate(); // Get the navigate function

  const sortOptions = [
    { label: "Date Ascending", value: "date_asc" },
    { label: "Date Descending", value: "date_desc" },
    { label: "Quantity Ascending", value: "quantity_asc" },
    { label: "Quantity Descending", value: "quantity_desc" },
  ];

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError(null);
      try {
        if (!token) {
          setError("Token missing or invalid.");
          setLoading(false);
          return;
        }

        const response = await axios.get(`${API_BASE_URL}/admin/orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status !== 200) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = response.data;
        if (Array.isArray(data)) {
          const sortedOrders = [...data].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setOrders(sortedOrders);
        } else {
          console.error("Response data is not an array:", data);
          setOrders([]);
          setError("Invalid data format received from the API");
        }
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError(err.message || "Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [API_BASE_URL, token]);

  useEffect(() => {
    applyFilters(); // Apply filters when searchTerm or sortOrder changes
  }, [orders, searchTerm, sortOrder, filters]);

  const applyFilters = () => {
    let filtered = [...orders];
    let filterUsed = false;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (order) =>
          order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.service.toLowerCase().includes(searchTerm.toLowerCase())
      );
      filterUsed = true;
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
      filterUsed = true;
    }

    // apply FilterSideBar filter
    if (filters.category) {
      filtered = filtered.filter((order) =>
        order.category.toLowerCase().includes(filters.category.toLowerCase())
      );
      filterUsed = true;
    }
    if (filters.service) {
      filtered = filtered.filter((order) =>
        order.service.toLowerCase().includes(filters.service.toLowerCase())
      );
      filterUsed = true;
    }
    if (filters.status) {
      filtered = filtered.filter((order) => order.status === filters.status);
      filterUsed = true;
    }

    if (filters.startDate) {
      const startDate = moment(filters.startDate);
      if (startDate.isValid()) {
        filtered = filtered.filter((order) => {
          const orderDate = moment(order.createdAt);
          return orderDate.isSameOrAfter(startDate, "day");
        });
        filterUsed = true;
      } else {
        console.warn("Invalid start date provided.");
      }
    }

    if (filters.endDate) {
      const endDate = moment(filters.endDate);
      if (endDate.isValid()) {
        filtered = filtered.filter((order) => {
          const orderDate = moment(order.createdAt);
          return orderDate.isSameOrBefore(endDate, "day");
        });
        filterUsed = true;
      } else {
        console.warn("Invalid end date provided.");
      }
    }

    setFilteredOrders(filtered);
    setIsFilterApplied(filterUsed);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleEdit = (order) => {
    setSelectedOrder(order);
    setShowEditPopup(true);
  };

  const handleView = (order) => {
    navigate(`/admin/orders/${order.orderId}`); // Navigate to the single order page
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

  const updateOrderInState = (updatedOrder) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.orderId === updatedOrder.orderId ? updatedOrder : order
      )
    );
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    setTempFilters(filters); // save current filters to tempFilters before opening the sidebar
  };

  const handleFilter = (filterValues) => {
    setTempFilters(filterValues); // Store the filter value in the temporary state
  };

  const handleApplyFilters = () => {
    setFilters(tempFilters); // Apply all the filters to the filter state.
    setIsFilterOpen(false); //close the filter
  };

  const handleCancelFilters = () => {
    // Reset temporary filters to current filters
    setTempFilters(filters);
    setIsFilterOpen(false);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleSortSelect = (value, label) => {
    setSortOrder(value);
    setSortLabel(label);
    setCurrentPage(1);
  };

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearchTerm("");
    setSortOrder("");
    setSortLabel("Sort");
    setRowsPerPage(12);
    setFilters({});
    setTempFilters({}); // Reset the temporary state as well
    setFilteredOrders([]);
    setIsFilterApplied(false);
    setCurrentPage(1);
  };

  // Pass tempFilters and setTempFilters to FilterSidebar
  const handleCategoryChange = (selectedCategory) => {
    setTempFilters({ ...tempFilters, category: selectedCategory });
  };

  const handleServiceChange = (selectedService) => {
    setTempFilters({ ...tempFilters, service: selectedService });
  };

  const handleStatusChange = (selectedStatus) => {
    const statusValue = selectedStatus === "All" ? null : selectedStatus;
    setTempFilters({ ...tempFilters, status: statusValue });
  };

  const handleStartDateChange = (e) => {
    setTempFilters({ ...tempFilters, startDate: e.target.value });
  };

  const handleEndDateChange = (e) => {
    setTempFilters({ ...tempFilters, endDate: e.target.value });
  };

  const ordersToDisplay = filteredOrders.length > 0 ? filteredOrders : orders;
  const noDataFound =
    (isFilterApplied && filteredOrders.length === 0) ||
    (!isFilterApplied && orders.length === 0);

  // Get current orders
  const indexOfLastOrder = currentPage * rowsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - rowsPerPage;
  const currentOrders = ordersToDisplay.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const isFilterAppliedInFilterAndSearch = rowsPerPage !== 12; // Determine whether filter is applied for FilterAndSearch or not

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
    return <div className="text-center text-red-500 py-4">Error: {error}</div>;
  }

  return (
    <div className="order-list px-4">
      <div className="relative">
        <div>
          <div className="mb-4">
            <h1 className="text-3xl font-bold mb-2">Order List (Admin)</h1>
          </div>
          <div className="flex items-center justify-between gap-4 mb-4">
            {/* Left: Filter Button */}
            <div className="flex items-center gap-4">
              <button
                className="flex items-center gap-2"
                onClick={toggleFilter}
              >
                <FcFilledFilter className="w-5 h-5" />
                <p className="text-xl font-bold">Filter</p>
              </button>
            </div>

            {/* Right: Rows per Page and Reset Button */}
            <div className="flex items-center gap-4">
              <FilterAndSearch
                searchTerm={searchTerm}
                sortOrder={sortOrder}
                sortLabel={sortLabel}
                rowsPerPage={rowsPerPage}
                onSearch={handleSearchChange}
                onSort={handleSortSelect}
                onRowsPerPageChange={handleRowsPerPageChange}
                sortOptions={sortOptions}
                showSearch={false}
                showSort={false}
                showRowsPerPage={true}
              />

              {isFilterApplied ||
              searchTerm ||
              sortOrder ||
              rowsPerPage !== 12 ? (
                <button
                  onClick={handleReset}
                  className="py-4 px-6 bg-gray-200 hover:bg-gray-300 rounded-xl text-sm font-bold text-gray-800 border transition-colors duration-300 w-full"
                >
                  <span>Reset All</span>
                </button>
              ) : null}
            </div>
          </div>

          <div className="overflow-hidden border border-gray-300  rounded-2xl  shadow-main">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-200 text-sub-color font-bold sticky top-0 text-nowrap">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs uppercase tracking-wider">
                      User ID
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
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Withheld Price
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Order Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {noDataFound ? (
                    <tr>
                      <td colSpan="11" className="px-4 py-4 text-center">
                        <div className="flex flex-col">
                          <img src={Data} alt="No Data" className="h-40" />
                          <p className="mt-4 text-xl font-semibold text-gray-700 capitalize">
                            No order found
                          </p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    currentOrders.map((order, index) => (
                      <tr
                        key={order._id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-2 whitespace-nowrap text-sm">
                          {truncateId(order.orderId.substring(0, 4))}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm">
                          {truncateId(order.userId.substring(0, 4))}
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
                            {/* Edit Button */}
                            <button
                              className="px-2 py-2 rounded-md bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 transition-colors duration-200"
                              onClick={() => handleEdit(order)}
                              title="Edit Order"
                            >
                              <RiEdit2Fill className="h-4 w-4" />
                            </button>

                            {/* Delete Button */}
                            <button
                              className="px-2 py-2 rounded-md bg-red-100 text-red-500 hover:text-white hover:bg-red-500 transition-colors duration-200"
                              onClick={() => handleDeleteClick(order.orderId)}
                              title="Delete Order"
                            >
                              <FaRegTrashCan className="h-4 w-4" />
                            </button>

                            {/* View Button */}
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
                  )}
                </tbody>
              </table>
            </div>
          </div>
          {ordersToDisplay.length > 0 && (
            <Pagination
              ordersPerPage={rowsPerPage}
              totalOrders={ordersToDisplay.length}
              paginate={paginate}
              currentPage={currentPage}
              noDataFound={noDataFound} // Pass noDataFound prop
            />
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
                  const token = TokenService.getToken();
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
                      "Failed to update order. " +
                        (response.data?.message || "")
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

          {/* Conditionally render FilterSidebar based on `isFilterOpen` */}
          {isFilterOpen && (
            <FilterSidebar
              isOpen={isFilterOpen}
              onClose={handleCancelFilters} // Use handleCancelFilters
              tempCategory={tempFilters.category || ""} // Use tempFilters
              tempService={tempFilters.service || ""}
              tempStatus={tempFilters.status || ""}
              tempStartDate={tempFilters.startDate || ""}
              tempEndDate={tempFilters.endDate || ""}
              onCategoryChange={handleCategoryChange} // Use setTempFilters
              onServiceChange={handleServiceChange}
              onStatusChange={handleStatusChange}
              onStartDateChange={handleStartDateChange}
              onEndDateChange={handleEndDateChange}
              onApplyFilters={handleApplyFilters} //pass apply filter method to FilterSideBar
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;