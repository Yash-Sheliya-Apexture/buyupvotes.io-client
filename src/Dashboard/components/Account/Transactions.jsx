import React from "react";

const Transactions = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Transaction History</h2>
      <div className="space-y-4">
        {/* Example transaction item */}
        <div className="p-4 border rounded-lg">
          <div className="flex justify-between">
            <span>Transaction 1</span>
            <span>$100</span>
          </div>
          <div className="text-sm text-gray-500">Date: 2024-12-23</div>
        </div>
        {/* Add more transaction items */}
      </div>
    </div>
  );
};

export default Transactions;
