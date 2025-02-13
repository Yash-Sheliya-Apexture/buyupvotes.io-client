// import React, { useState, useEffect } from 'react';
// import { FaTimes } from 'react-icons/fa';

// const EditOrderPopup = ({ order, onClose, onSave }) => {
//     const [editedStatus, setEditedStatus] = useState(order.status);
//     const [editedCompletedVotes, setEditedCompletedVotes] = useState(order.completedVotes || 0);

//     useEffect(() => {
//         if (order) {
//             setEditedStatus(order.status);
//             setEditedCompletedVotes(order.completedVotes || 0);
//         }
//     }, [order]);

//     const handleStatusChange = (event) => {
//         setEditedStatus(event.target.value);
//     };

//     const handleCompletedVotesChange = (event) => {
//         const parsedValue = parseInt(event.target.value, 10);
//         setEditedCompletedVotes(isNaN(parsedValue) ? 0 : parsedValue);
//     };

//     const handleSave = () => {
//         onSave({
//             status: editedStatus,
//             completedVotes: editedCompletedVotes,
//         });
//     };

//     return (
//         <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
//             <div className="bg-white p-8 rounded shadow-md w-96">
//                 <h2 className="text-2xl font-bold mb-4">Edit Order</h2>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">Status:</label>
//                     <select
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         value={editedStatus}
//                         onChange={handleStatusChange}
//                     >
//                         <option value="Pending">Pending</option>
//                         <option value="In Progress">In Progress</option>
//                         <option value="Completed">Completed</option>
//                         <option value="Partial">Partial</option>
//                         <option value="Canceled">Canceled</option>
//                     </select>
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">Completed Votes:</label>
//                     <input
//                         type="number"
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         value={editedCompletedVotes}
//                         onChange={handleCompletedVotesChange}
//                     />
//                 </div>
//                 <div className="flex justify-end space-x-4">
//                     <button
//                         className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         onClick={onClose}
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         onClick={handleSave}
//                     >
//                         Save
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EditOrderPopup;




import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const EditOrderPopup = ({ order, onClose, onSave }) => {
    const [editedStatus, setEditedStatus] = useState(order.status);
    const [editedCompletedVotes, setEditedCompletedVotes] = useState(order.completedVotes || 0);
    const [editedStarted, setEditedStarted] = useState(order.started);

    useEffect(() => {
        if (order) {
            setEditedStatus(order.status);
            setEditedCompletedVotes(order.completedVotes || 0);
            setEditedStarted(order.started);
        }
    }, [order]);

    const handleStatusChange = (event) => {
        setEditedStatus(event.target.value);
    };

    const handleCompletedVotesChange = (event) => {
        const parsedValue = parseInt(event.target.value, 10);
        setEditedCompletedVotes(isNaN(parsedValue) ? 0 : parsedValue);
    };

    const handleStartedChange = (event) => {
        setEditedStarted(event.target.value);
    };

    const handleSave = () => {
        onSave({
            status: editedStatus,
            completedVotes: editedCompletedVotes,
            started: editedStarted,
        });
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Edit Order</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Status:</label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={editedStatus}
                        onChange={handleStatusChange}
                    >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Partial">Partial</option>
                        <option value="Canceled">Canceled</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Started Votes:</label>
                    <input
                        type="text"  // Changed to type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={editedStarted}
                        onChange={handleStartedChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Deliver Votes:</label>
                    <input
                        type="number"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={editedCompletedVotes}
                        onChange={handleCompletedVotesChange}
                    />
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditOrderPopup;