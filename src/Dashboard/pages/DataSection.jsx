import React from "react";
import { Link } from "react-router-dom";

const DataSection = () => {
  return (
    <div className="container mx-auto p-2 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Order-1 */}
        <div className="bg-white shadow-md rounded-small border border-gray-border p-6 flex justify-between items-center cursor-pointer">
          <div>
            <p className="text-large font-bold text-sub-color mb-2">100</p>
            <p className="text-xs text-para-color">Votes remaining</p>
          </div>
          <div className="text-main-color text-large">
            <Link to="FundPrice">
              <i className="fas fa-wallet hover:bg-gray-hover p-3 rounded-full transition-all ease-in duration-150"></i>
            </Link>
          </div>
        </div>

        {/* Order-2 */}
        <div className="bg-white shadow-md rounded-small border border-gray-border p-6 flex justify-between items-center cursor-pointer">
          <div>
            <p className="text-large font-bold text-sub-color mb-2">0</p>
            <p className="text-xs text-para-color">Total Orders</p>
          </div>
          <div className="text-main-color text-large">
            <Link to="UpvoteOrder">
              <i className="fas fa-chart-line hover:bg-gray-hover p-3 rounded-full transition-all ease-in duration-150"></i>
            </Link>
          </div>
        </div>

        {/* Order-3 */}
        <div className="bg-white shadow-md rounded-small border border-gray-border p-6 flex justify-between items-center cursor-pointer">
          <div>
            <p className="text-large font-bold text-sub-color mb-2">0</p>
            <p className="text-xs text-para-color">Orders in Progress</p>
          </div>
          <div className="text-main-color text-large">
            <Link to="UpvoteOrder">
              <i className="fas fa-bolt hover:bg-gray-hover p-3 rounded-full transition-all ease-in duration-150"></i>
            </Link>
          </div>
        </div>

        {/* Order-4 */}
        <div className="bg-white shadow-md rounded-small border border-gray-border p-6 flex justify-between items-center cursor-pointer">
          <div>
            <p className="text-base font-bold text-sub-color mb-2">New Order</p>
          </div>
          <div className="text-main-color text-large">
            <Link to="OrderComment">
              <i className="fas fa-plus-circle hover:bg-gray-hover p-3 rounded-full transition-all ease-in duration-150"></i>
            </Link>
          </div>
        </div>

        {/* Order-5 */}
        <div className="bg-white shadow-md rounded-small border border-gray-border p-6 flex justify-between items-center cursor-pointer">
          <div>
            <p className="text-base font-bold text-sub-color mb-2">
              Buy Reddit Accounts
            </p>
          </div>
          <div className="text-main-color text-large">
            <i className="fab fa-reddit hover:bg-gray-hover p-3 rounded-full transition-all ease-in duration-150"></i>
          </div>
        </div>

        {/* Order-6 */}
        <div className="bg-white shadow-md rounded-small border border-gray-border p-6 flex justify-between items-center cursor-pointer">
          <div>
            <p className="text-base font-bold text-sub-color mb-2">
              API Documentation
            </p>
          </div>
          <div className="text-main-color text-large">
            <i className="fas fa-code hover:bg-gray-hover p-3 rounded-full transition-all ease-in duration-150"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSection;
