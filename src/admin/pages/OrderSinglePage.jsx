// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import TokenService from '../../utils/TokenService';

// const OrderSinglePage = () => {
//   const { orderId } = useParams();
//   const [order, setOrder] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const fetchOrder = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const token = TokenService.getToken(); // Correct function name
//         const response = await axios.get(`${API_BASE_URL}/admin/orders/${orderId}`, { // Correct URL
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (response.status === 200) { // Validate successful response
//           setOrder(response.data);
//         } else {
//           setError(`Failed to fetch order: Status ${response.status}`);
//         }
//       } catch (err) {
//         console.error('Error fetching order:', err);
//         setError(err.message || 'Failed to fetch order');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrder();
//   }, [orderId, API_BASE_URL]); // Added API_BASE_URL as dependency

//   if (loading) {
//     return <div>Loading order details...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!order) {
//     return <div>Order not found.</div>;
//   }

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Order Details</h1>

//       <div className="bg-white shadow-md rounded-md p-4">
//         <p><strong>Order ID:</strong> {order.orderId}</p>
//         <p><strong>User ID:</strong> {order.userId}</p>
//         <p><strong>Category:</strong> {order.category}</p>
//         <p><strong>Service:</strong> {order.service}</p>
//         <p><strong>Link:</strong> {order.link}</p>
//         <p><strong>Quantity:</strong> {order.quantity}</p>
//         <p><strong>Completed Votes:</strong> {order.completedVotes}</p>
//         <p><strong>Comments:</strong> {order.comments || 'N/A'}</p>
//         <p><strong>Started:</strong> {order.started}</p>
//         <p><strong>Status:</strong> {order.status}</p>
//         <p><strong>Calculated Price:</strong> ${order.calculatedPrice ? order.calculatedPrice.toFixed(2) : 'N/A'}</p>
//         <p><strong>Created At:</strong> {formatDate(order.createdAt)}</p>
//         <p><strong>Updated At:</strong> {formatDate(order.updatedAt)}</p>
//       </div>
//     </div>
//   );
// };

// export default OrderSinglePage;





// OrderSinglePage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import TokenService from '../../utils/TokenService';
import moment from "moment";
import {
  IoCheckmarkCircle,
  IoAlertCircle,
  IoInformationCircle,
  IoTimeOutline,
} from "react-icons/io5";
import { RiEdit2Fill } from "react-icons/ri";  // Import the edit icon
import EditOrderPopup from "../components/OrderList/EditOrderPopup"; // Import the EditOrderPopup

const OrderSinglePage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false); // Add state for edit popup
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      setError(null);

      try {
        const token = TokenService.getToken();
        const response = await axios.get(`${API_BASE_URL}/admin/orders/${orderId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          setOrder(response.data);
        } else {
          setError(`Failed to fetch order: Status ${response.status}`);
        }
      } catch (err) {
        console.error('Error fetching order:', err);
        setError(err.message || 'Failed to fetch order');
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId, API_BASE_URL]); // Add API_BASE_URL as a dependency

  const handleEditClick = () => {  // Function to open the edit popup
    setShowEditPopup(true);
  };

  const handleCloseEditPopup = () => { // Function to close the edit popup
    setShowEditPopup(false);
  };

  const handleSaveEdit = async (updatedFields) => { // Function to save changes
    try {
      const token = TokenService.getToken();
      const response = await axios.put(
        `${API_BASE_URL}/admin/orders/${orderId}`,
        updatedFields,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 200) {
        // Update the order in state
        setOrder({ ...order, ...updatedFields }); // Corrected state update
      } else {
        setError("Failed to update order");
      }
    } catch (err) {
      console.error("Error updating order:", err);
      setError(err.message || "Failed to update order");
    } finally {
      setShowEditPopup(false); // Close the popup after saving
    }
  };

  if (loading) {
    return <div>Loading order details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!order) {
    return <div>Order not found.</div>;
  }

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return moment(dateString).format("MMMM D, YYYY, h:mm A");
  };

  const formatComments = (text) => {
    if (!text) return "";
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split("\n").length - 1 && (
          <>
            <br /> <br />
          </>
        )}
      </React.Fragment>
    ));
  };

  const getStatusDetails = (status) => {
    switch (status) {
      case "Pending":
        return {
          color: "yellow",
          icon: IoTimeOutline,
          tailwindClass: "bg-yellow-400",
        };
      case "In Progress":
        return {
          color: "blue",
          icon: IoInformationCircle,
          tailwindClass: "bg-blue-500",
        };
      case "Completed":
        return {
          color: "green",
          icon: IoCheckmarkCircle,
          tailwindClass: "bg-green-500",
        };
      case "Partial":
        return {
          color: "orange",
          icon: IoAlertCircle,
          tailwindClass: "bg-orange-500",
        };
      case "Canceled":
        return {
          color: "red",
          icon: IoAlertCircle,
          tailwindClass: "bg-red-500",
        };
      default:
        return {
          color: "gray",
          icon: IoInformationCircle,
          tailwindClass: "bg-gray-500",
        };
    }
  };

  const {
    icon: StatusIcon,
    message,
    tailwindClass,
  } = getStatusDetails(order.status);

  const linkStyle = {
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };

  // Style to disable selection
  const noSelectStyle = {
    userSelect: "none" /* Standard syntax */,
    WebkitUserSelect: "none" /* Safari */,
    MozUserSelect: "none" /* Firefox */,
    msUserSelect: "none" /* Internet Explorer/Edge */,
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-4">
          Order Details
        </h1>

        <button className="bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 transition-colors duration-200 rounded-md p-2"
              onClick={handleEditClick}  // Open popup on click
              title="Edit Order"
        >
          <RiEdit2Fill className="h-4 w-4" />
        </button>
      </div>

      <div className="rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden bg-white">
        <div className="py-5 px-6 bg-gray-300 ">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Order Details
            </h2>
            <div
              className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-white ${tailwindClass}`}
            >
              <StatusIcon className="h-5 w-5 mr-2" aria-hidden="true" />
              {order.status}
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-3 gap-6">
            {/* Order ID */}
            <div className="rounded-2xl p-4 border border-gray-300 shadow-main">
              <label className="block text-small font-bold tracking-wide mb-2">
                Order ID
              </label>
              <p className="font-medium text-xs text-gray-500">
                {order.orderId.substring(0, 4)}
              </p>
            </div>

            {/* User ID */}
            <div className="rounded-2xl p-4 border border-gray-300 shadow-main">
              <label className="block text-small font-bold tracking-wide mb-2">
                User ID
              </label>
              <p className="font-medium text-xs text-gray-500">
                {order.userId.substring(0, 4)}
              </p>
            </div>

            {/* Category */}
            <div className="rounded-2xl p-4 border border-gray-300 shadow-main">
              <label className="block text-small font-bold tracking-wide mb-2">
                Category
              </label>
              <p className="font-medium text-xs text-gray-500">
                {order.category}
              </p>
            </div>

            {/* Service */}
            <div className="rounded-2xl p-4 border border-gray-300 shadow-main">
              <label className="block text-small font-bold tracking-wide mb-2">
                Service
              </label>
              <p className="font-medium text-xs text-gray-500">
                {order.service}
              </p>
            </div>

            {/* Quantity */}
            <div className="rounded-2xl p-4 border border-gray-300 shadow-main">
              <label className="block text-small font-bold tracking-wide mb-2">
                Quantity
              </label>
              <p className="font-medium text-xs text-gray-500">
                {order.quantity}
              </p>
            </div>

            {/* Completed Votes */}
            <div className="rounded-2xl p-4 border border-gray-300 shadow-main">
              <label className="block text-small font-bold tracking-wide mb-2">
                Completed Votes
              </label>
              <p className="font-medium text-xs text-gray-500">
                {order.completedVotes}
              </p>
            </div>

            {/* Order Date */}
            <div className="rounded-2xl p-4 border border-gray-300 shadow-main">
              <label className="block text-small font-bold tracking-wide mb-2">
                Order Date
              </label>
              <p className="font-medium text-xs text-gray-500">
                {formatDate(order.createdAt)}
              </p>
            </div>

            {/* Started Votes */}
            <div className="rounded-2xl p-4 border border-gray-300 shadow-main">
              <label className="block text-small font-bold tracking-wide mb-2">
                Started Votes
              </label>
              <p className="font-medium text-xs text-gray-500">
                {order.started}
              </p>
            </div>

            {/* Deliver Votes */}
            <div className="rounded-2xl p-4 border border-gray-300 shadow-main">
              <label className="block text-small font-bold tracking-wide mb-2">
                Deliver Votes
              </label>
              <p className="font-medium text-xs text-gray-500">
                {order.completedVotes || 0}
              </p>
            </div>

            {/* Withheld Price */}
            <div className="rounded-2xl p-4 border border-gray-300 shadow-main">
              <label className="block text-small font-bold tracking-wide mb-2">
                Withheld Price
              </label>
              <p className="font-medium text-xs text-gray-500">
                {order.calculatedPrice}
              </p>
            </div>

            {/* Link */}
            <div className="rounded-2xl p-4 border border-gray-300 shadow-main col-span-2">
              <label className="block text-small font-bold tracking-wide mb-2">
                Link
              </label>
              <a
                href={order.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-xs hover:underline break-all font-medium"
                style={linkStyle}
              >
                {order.link}
              </a>
            </div>
          </div>

          {/* Comments */}
          {order.comments && (
            <div className="mt-8">
              <label className="block text-small font-bold tracking-wide mb-2">
                Comments
              </label>
              <div
                className="rounded-2xl p-4 border border-gray-300 shadow-main whitespace-pre-line max-h-[200px] overflow-y-auto"
                style={noSelectStyle}
              >
                <p className="font-medium text-small text-gray-500">
                  {formatComments(order.comments)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {showEditPopup && order && (
        <EditOrderPopup
          order={order}  // Pass the order object
          onClose={handleCloseEditPopup}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
};

export default OrderSinglePage;