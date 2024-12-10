import React from "react";
import { Link } from "react-router-dom";

const DataSection = () => {
  return (
    <div className="container p-2 mx-auto mt-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {/* Order-1 */}
        <div className="flex items-center justify-between p-6 bg-white border shadow-md cursor-pointer rounded-small border-gray-border">
          <div>
            <p className="mb-2 font-bold text-large text-sub-color">100</p>
            <p className="text-xs text-para-color">Votes remaining</p>
          </div>
          <div className="text-main-color text-large">
            <Link to="FundPrice">
              <i className="p-3 transition-all duration-150 ease-in rounded-full fas fa-wallet hover:bg-gray-hover"></i>
            </Link>
          </div>
        </div>

        {/* Order-2 */}
        <div className="flex items-center justify-between p-6 bg-white border shadow-md cursor-pointer rounded-small border-gray-border">
          <div>
            <p className="mb-2 font-bold text-large text-sub-color">0</p>
            <p className="text-xs text-para-color">Total Orders</p>
          </div>
          <div className="text-main-color text-large">
            <Link to="UpvoteOrder">
              <i className="p-3 transition-all duration-150 ease-in rounded-full fas fa-chart-line hover:bg-gray-hover"></i>
            </Link>
          </div>
        </div>

        {/* Order-3 */}
        <div className="flex items-center justify-between p-6 bg-white border shadow-md cursor-pointer rounded-small border-gray-border">
          <div>
            <p className="mb-2 font-bold text-large text-sub-color">0</p>
            <p className="text-xs text-para-color">Orders in Progress</p>
          </div>
          <div className="text-main-color text-large">
            <Link to="UpvoteOrder">
              <i className="p-3 transition-all duration-150 ease-in rounded-full fas fa-bolt hover:bg-gray-hover"></i>
            </Link>
          </div>
        </div>

        {/* Order-4 */}
        <div className="flex items-center justify-between p-6 bg-white border shadow-md cursor-pointer rounded-small border-gray-border">
          <div>
            <p className="mb-2 text-base font-bold text-sub-color">New Order</p>
          </div>
          <div className="text-main-color text-large">
            <Link to="OrderComment">
              <i className="p-3 transition-all duration-150 ease-in rounded-full fas fa-plus-circle hover:bg-gray-hover"></i>
            </Link>
          </div>
        </div>

        {/* Order-5 */}
        <div className="flex items-center justify-between p-6 bg-white border shadow-md cursor-pointer rounded-small border-gray-border">
          <div>
            <p className="mb-2 text-base font-bold text-sub-color">
              Buy Reddit Accounts
            </p>
          </div>
          <div className="text-main-color text-large">
            <i className="p-3 transition-all duration-150 ease-in rounded-full fab fa-reddit hover:bg-gray-hover"></i>
          </div>
        </div>

        {/* Order-6 */}
        <div className="flex items-center justify-between p-6 bg-white border shadow-md cursor-pointer rounded-small border-gray-border">
          <div>
            <p className="mb-2 text-base font-bold text-sub-color">
              API Documentation
            </p>
          </div>
          <div className="text-main-color text-large">
            <i className="p-3 transition-all duration-150 ease-in rounded-full fas fa-code hover:bg-gray-hover"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSection;
