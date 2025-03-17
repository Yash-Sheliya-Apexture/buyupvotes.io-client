import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

const AccountTransactionsTab = () => {
    const [transactions, setTransactions] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const modalRef = useRef(null); // Ref for the modal
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        const fetchTransactions = async () => {
            const token = localStorage.getItem("authToken");
            if (!token) {
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                const response = await axios.get(`${API_BASE_URL}/payment`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (response.status === 200 && response.data) {
                    setTransactions(response.data.payments || []);
                }
            } catch (error) {
                console.error('Error fetching transactions:', error);
                setTransactions([]);

            } finally {
                setLoading(false);
            }
        };

        fetchTransactions();
    }, [API_BASE_URL]);

    const handleTransactionClick = (transaction) => {
        setSelectedTransaction(transaction);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTransaction(null);
    };

    const renderTableHeader = () => (
        <thead className="bg-gray-100">
            <tr>
                <th className="px-4 py-3 font-semibold text-left text-gray-700">
                    Date
                </th>
                <th className="px-4 py-3 font-semibold text-left text-gray-700">
                    Amount
                </th>
                <th className="px-4 py-3 font-semibold text-left text-gray-700">
                    Tokens
                </th>
                <th className="px-4 py-3 font-semibold text-left text-gray-700">
                    Number
                </th>
                <th className="px-4 py-3 font-semibold text-left text-gray-700">
                    Email
                </th>
                <th className="px-4 py-3 font-semibold text-center text-gray-700">
                    Actions
                </th>
            </tr>
        </thead>
    );

    const renderLoadingRow = () => (
        <tr>
            <td colSpan="6" className="py-10 text-center text-gray-400">
                <div className="flex items-center justify-center">
                    <div className="w-12 h-12 border-t-4 border-solid rounded-full border-main-color animate-spin"></div>
                    <span className="ml-3">Loading transactions...</span>
                </div>
            </td>
        </tr>
    );

    const renderEmptyTransactionsRow = () => (
        <tr>
            <td colSpan="6" className="py-10 text-center text-gray-400">
                You have no transactions.
            </td>
        </tr>
    );


    return (
        <div className="bg-white shadow rounded-md p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Transaction History
            </h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    {renderTableHeader()}
                    <tbody>
                        {loading ? (
                            renderLoadingRow()
                        ) : transactions.length === 0 ? (
                            renderEmptyTransactionsRow()
                        ) : (
                            transactions.map((transaction) => (
                                <tr
                                    key={transaction._id}
                                    className="hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <td className="px-4 py-3 text-gray-700">
                                        {new Date(transaction.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-3 text-gray-700">
                                        ${transaction.amount.toFixed(2)}
                                    </td>
                                    <td className="px-4 py-3 text-gray-700">
                                        {transaction.tokens ? transaction.tokens : '-'}
                                    </td>
                                    <td className="px-4 py-3 text-gray-700">
                                        {transaction.cardNumber}
                                    </td>
                                     <td className="px-4 py-3 text-gray-700">
                                        {transaction.email}
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <button
                                            onClick={() => handleTransactionClick(transaction)}
                                            className="p-1 rounded hover:bg-gray-200 transition-colors duration-200"
                                        >
                                            <MdOutlineRemoveRedEye className="text-sub-color size-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {isModalOpen && selectedTransaction && (
                <ClickAwayListener onClickAway={closeModal}>
                    <div ref={modalRef} className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-75 bg-black/70">
                        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-xl">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                                Transaction Details
                            </h2>
                            <div className="space-y-3 mb-6">
                                <p>
                                    <span className="font-medium">Date:</span> {new Date(selectedTransaction.createdAt).toLocaleDateString()}
                                </p>
                                <p>
                                    <span className="font-medium">Amount:</span> ${selectedTransaction.amount.toFixed(2)}
                                </p>
                                <p>
                                    <span className="font-medium">
                                        {selectedTransaction.type === 'creditCard' ? 'Tokens:' : 'Coins:'}
                                    </span> {selectedTransaction.type === 'creditCard' ? selectedTransaction.tokens : selectedTransaction.coins}
                                </p>
                                <p>
                                    <span className="font-medium">Number:</span> {selectedTransaction.cardNumber}
                                </p>
                                 <p>
                                    <span className="font-medium">Email:</span> {selectedTransaction.email}
                                </p>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={closeModal}
                                    className="px-4 py-2 text-sm font-medium text-sub-color rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </ClickAwayListener>
            )}
        </div>
    );
};

export default AccountTransactionsTab;