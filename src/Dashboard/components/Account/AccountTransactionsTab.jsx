// src/Dashboard/components/Account/AccountTransactionsTab.jsx
import React from 'react';

const AccountTransactionsTab = () => {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-medium text-sub-color">
        Transaction History
      </h2>
      <p className="font-normal text-sub-color">
        You have no transactions.
      </p>
    </div>
  );
};

export default AccountTransactionsTab;