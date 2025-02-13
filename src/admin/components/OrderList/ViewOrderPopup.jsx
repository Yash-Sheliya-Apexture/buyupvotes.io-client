import React from 'react';
import moment from 'moment';

const ViewOrderPopup = ({ order, onClose }) => {

    const formatDate = (dateString) => {
        if (!dateString) return '';
        return moment(dateString).format('MMMM D, YYYY');
    };

    const formatComments = (text) => {
        if (!text) return '';
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                {index < text.split('\n').length - 1 && <br />}
            </React.Fragment>
        ));
    };

    const getStatusColorClass = (status) => {
        switch (status) {
            case 'Pending':
                return 'bg-orange-500';
            case 'In Progress':
                return 'bg-blue-500';
            case 'Completed':
                return 'bg-green-500';
            case 'Partial':
                return 'bg-yellow-500';
            case 'Canceled':
                return 'bg-red-500';
            default:
                return 'bg-gray-500'; // Default color
        }
    };

    const statusColorClass = getStatusColorClass(order.status);

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">View Order</h2>

                {/* Status with colored background */}
                <div className="mb-4">
                    <p className="font-bold">Status:</p>
                    <div className={`inline-block px-4 py-2 rounded-full text-white ${statusColorClass}`}>
                        {order.status}
                    </div>
                </div>

                <div className="mb-2">
                    <p><span className="font-bold">Order ID:</span> {order.orderId.substring(0, 4)}</p>
                </div>
                <div className="mb-2">
                    <p><span className="font-bold">User ID:</span> {order.userId.substring(0, 4)}</p>
                </div>
                <div className="mb-2">
                    <p><span className="font-bold">Category:</span> {order.category}</p>
                </div>
                <div className="mb-2">
                    <p><span className="font-bold">Service:</span> {order.service}</p>
                </div>
                <div className="mb-2">
                    <p><span className="font-bold">Quantity:</span> {order.quantity}</p>
                </div>

                <div className="mb-2">
                    <p><span className="font-bold">Completed Votes:</span> {order.completedVotes}</p>
                </div>
                <div className="mb-2">
                    <p><span className="font-bold">Order Date:</span> {formatDate(order.createdAt)}</p>
                </div>
                {order.comments && (
                    <div className="mb-2">
                        <p><span className="font-bold">Comments:</span> {formatComments(order.comments)}</p>
                    </div>
                )}
                <div className="mb-2">
                    <div className='flex gap-1'>
                        <span className="font-bold">Link:</span>
                        <a href={order.link} target="_blank" rel="noopener noreferrer" className='truncate'>
                            {order.link}
                        </a>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewOrderPopup;