// src/Dashboard/components/Account/AccountTransactionsTab.jsx
import React, { useState } from "react";
import InputField from "../InputField";
import { FiSearch } from "react-icons/fi";

const transactions = [
  { date: "2024-03-15", description: "Grocery Shopping", amount: -50.25 },
  { date: "2024-03-12", description: "Salary Deposit", amount: 2500 },
  { date: "2024-03-10", description: "Online Purchase", amount: -75.8 },
  { date: "2024-03-05", description: "Bill Payment", amount: -120 },
  { date: "2024-03-01", description: "Restaurant Bill", amount: -35.5 },
];

const AccountTransactionsTab = ({
  accountName = "Checking Account",
  balance = 1100,
}) => {
  // Added props
  const [searchTerm, setSearchTerm] = useState(""); // Search state
  const [sortBy, setSortBy] = useState(null); // Sorting state
  const [sortOrder, setSortOrder] = useState("asc"); // Sorting order

  const filteredTransactions = transactions.filter((transaction) => {
    return (
      transaction.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      transaction.date.includes(searchTerm)
    );
  });

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (sortBy === null) return 0; // No sorting

    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  return (
    <div className="space-y-5">
      <h2 className="lg:text-basic text-base font-bold text-sub-color">
        {accountName}
      </h2>
      {/* Account Name */}
      <p className="text-lg text-sub-color">
        Balance:{" "}
        <span className="font-bold">
          {balance.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </p>{" "}
      {/* Account Balance */}
      <div className="relative flex-grow w-full lg:w-1/4">
        <InputField
          name="Search"
          type="text"
          placeholder="Search transactions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FiSearch className="absolute top-3.5 right-3 size-5 text-light-gray" />
      </div>
      <h3 className="font-semibold text-medium text-sub-color mt-4">
        Transaction History :
      </h3>
      {sortedTransactions.length === 0 ? ( // Use filtered and sorted transactions
        <p className="font-normal text-sub-color">
          No matching transactions found.
        </p> // Updated message
      ) : (
        <div className="overflow-x-auto custom-scroll">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-sub-color uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("date")}
                >
                  Date {sortBy === "date" && (sortOrder === "asc" ? "▲" : "▼")}
                </th>
                {/* ... other table headers (Description and Amount) with click handlers for sorting */}

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-sub-color uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("description")}
                >
                  Description{" "}
                  {sortBy === "description" &&
                    (sortOrder === "asc" ? "▲" : "▼")}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-bold text-sub-color uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("amount")}
                >
                  Amount{" "}
                  {sortBy === "amount" && (sortOrder === "asc" ? "▲" : "▼")}
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {sortedTransactions.map(
                (
                  transaction,
                  index // Use filtered and sorted transactions
                ) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : ""}
                  >
                    {/* ... table cells ... */}
                    <td className="px-6 py-4 whitespace-nowrap  text-para-color">
                      {transaction.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-small text-para-color">
                      {transaction.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-para-color">
                      {transaction.amount.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AccountTransactionsTab;
