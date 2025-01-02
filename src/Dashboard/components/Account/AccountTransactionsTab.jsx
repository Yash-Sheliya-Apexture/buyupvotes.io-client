// // src/Dashboard/components/Account/AccountTransactionsTab.jsx
// import React from 'react';

// const AccountTransactionsTab = () => {
//   return (
//     <div className="space-y-5">
//       <h2 className="font-semibold text-medium text-sub-color">
//         Transaction History
//       </h2>
//       <p className="font-normal text-sub-color">
//         You have no transactions.
//       </p>
//     </div>
//   );
// };

// export default AccountTransactionsTab;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdOutlineRemoveRedEye } from "react-icons/md";

const AccountTransactionsTab = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
 const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
          const response = await axios.get(`${API_BASE_URL}/payment`);
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
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

  return (
    <div className="">
      <h2 className="font-semibold text-medium text-sub-color">
        Transaction History
      </h2>
      {transactions.length === 0 ? (
        <p className="font-normal text-sub-color">
          You have no transactions.
        </p>
      ) : (
        <div className="mt-5 overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 font-semibold text-left text-gray-700">Date</th>
                <th className="px-4 py-2 font-semibold text-left text-gray-700">Amount</th>
                <th className="px-4 py-2 font-semibold text-left text-gray-700">Tokens</th>
                  <th className="px-4 py-2 font-semibold text-left text-gray-700">Number</th>
                <th className="px-4 py-2 font-semibold text-left text-gray-700">Email</th>
                <th className="px-4 py-2 font-semibold text-left text-gray-700"></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction._id} // Use _id from backend
                  className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleTransactionClick(transaction)}
                >
                  <td className="px-4 py-2 text-gray-600">{new Date(transaction.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-2 text-gray-600">${transaction.amount.toFixed(2)}</td>
                  <td className="px-4 py-2 text-gray-600">{transaction.tokens ? transaction.tokens : '-'}</td>
                  <td className="px-4 py-2 text-gray-600">{transaction.cardNumber}</td>
                  <td className="px-4 py-2 text-gray-600">{transaction.email}</td>
                   <td className="px-4 py-2 text-center">
                    <MdOutlineRemoveRedEye className="inline-block text-sub-color size-5" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-100 bg-black/70">
          <div className="w-4/5 p-4 bg-white shadow-lg lg:w-full lg:max-w-md lg:p-6 rounded-3xl">
            <h2 className="mb-4 text-lg font-medium text-gray-800">
              Transaction Details
            </h2>
            {selectedTransaction && (
              <div className="space-y-3">
                  <p>
                    <span className="font-medium">Date:</span>{' '}
                      {new Date(selectedTransaction.createdAt).toLocaleDateString()}
                  </p>
                <p>
                  <span className="font-medium">Amount:</span>{' '}
                  ${selectedTransaction.amount.toFixed(2)}
                </p>
                <p>
                  <span className="font-medium">
                    {selectedTransaction.type === 'creditCard' ? 'Tokens:' : 'Coins:'}
                  </span>{' '}
                  {selectedTransaction.type === 'creditCard'
                    ? selectedTransaction.tokens
                    : selectedTransaction.coins}
                </p>
                  <p>
                      <span className="font-medium">Number:</span>{' '}
                      {selectedTransaction.cardNumber}
                  </p>
                <p>
                  <span className="font-medium">Email:</span>{' '}
                  {selectedTransaction.email}
                </p>
              </div>
            )}
            <div className="flex justify-end mt-6 space-x-2">
              <button
                className="px-6 py-1 text-xs font-bold transition-all duration-150 ease-in border rounded-full text-sub-color hover:bg-gray-300/50 hover:border-black"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountTransactionsTab;