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





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { HiLink } from 'react-icons/hi';
import DeleteConfirmationPopup from '../components/OrderList/DeleteConfirmationPopup';
import EditOrderPopup from '../components/OrderList/EditOrderPopup';
import ViewOrderPopup from '../components/OrderList/ViewOrderPopup';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [orderToDelete, setOrderToDelete] = useState(null);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showViewPopup, setShowViewPopup] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    // Use API base URL from environment variable
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem("authToken");
                if (!token) {
                    setError("Token missing or invalid.");
                    setLoading(false);
                    return;
                }
                const response = await axios.get(
                    `${API_BASE_URL}/admin/orders`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                if (Array.isArray(response.data)) {
                    setOrders(response.data);
                } else {
                    console.error('Response data is not an array:', response.data);
                    setOrders([]);
                    setError('Invalid data format received from the API');
                }
                console.log(response.data)
                setLoading(false);
            } catch (err) {
                console.error('Error fetching orders:', err);
                setError(err.message || 'Failed to fetch orders');
                setLoading(false);
            }
        };

        fetchOrders();

    }, [API_BASE_URL]);
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

            await axios.delete(`${API_BASE_URL}/admin/orders/${orderToDelete}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setOrders(prevOrders => prevOrders.filter(order => order.orderId !== orderToDelete));
        } catch (err) {
            console.error('Error deleting order:', err);
            setError(err.message || 'Failed to delete order');
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
        if (!id) return '';

        const parts = id.split('-');
        if (parts.length > 0) {
            return parts.slice(0, Math.min(4, parts.length)).join('-');
        }
        return id;
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        return moment(dateString).format('MMMM D, YYYY'); // Format the date
    };

    if (loading) {
        return <div className="text-center py-4">Loading orders...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center py-4">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Order List (Admin)</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-2 text-left">Order ID</th>
                            <th className="px-4 py-2 text-left">User ID</th>
                            <th className="px-4 py-2 text-left">Category</th>
                            <th className="px-4 py-2 text-left">Service</th>
                            <th className="px-4 py-2 text-left">Quantity</th>
                            <th className="px-4 py-2 text-left">Status</th>
                            <th className="px-4 py-2 text-left">Deliver votes</th>
                            <th className="px-4 py-2 text-left">Order Date</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id} className="border-b border-gray-200">
                                <td className="px-4 py-2">{truncateId(order.orderId.substring(0, 4))}</td>
                                <td className="px-4 py-2">{truncateId(order.userId.substring(0, 4))}</td>
                                <td className="px-4 py-2">{order.category}</td>
                                <td className="px-4 py-2 flex gap-2">
                                    {order.service}
                                    <a href={order.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-7 h-7 p-1 bg-gray-200 rounded-full"><HiLink className="text-sm" /></a>
                                </td>
                                <td className="px-4 py-2">{order.quantity}</td>
                                <td className="px-4 py-2">
                                    {order.status}
                                </td>
                                <td className="px-4 py-2">
                                    {order.completedVotes || 0}
                                </td>
                                <td className="px-4 py-2">{formatDate(order.createdAt)}</td>
                                <td className="px-4 py-2">
                                    <div className="flex space-x-2">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                            onClick={() => handleEdit(order)}
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                            onClick={() => handleDeleteClick(order.orderId)}
                                        >
                                            <FaTrash />
                                        </button>
                                        <button
                                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                            onClick={() => handleView(order)}
                                        >
                                            <FaEye />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Delete Confirmation Popup */}
            {showDeleteConfirmation && (
                <DeleteConfirmationPopup
                    onCancel={handleDeleteCancel}
                    onConfirm={handleDeleteConfirm}
                    setShowDeleteConfirmation = {setShowDeleteConfirmation}
                />
            )}

            {/* Edit Popup */}
            {showEditPopup && selectedOrder && (
                <EditOrderPopup
                    order={selectedOrder}
                    onClose={() => setShowEditPopup(false)}
                    onSave={() => {
                        // Implement the logic to save the data
                        setShowEditPopup(false);
                    }}
                />
            )}

            {/* View Popup */}
            {showViewPopup && selectedOrder && (
                <ViewOrderPopup
                    order={selectedOrder}
                    onClose={() => setShowViewPopup(false)}
                />
            )}
        </div>
    );
};

export default OrderList;