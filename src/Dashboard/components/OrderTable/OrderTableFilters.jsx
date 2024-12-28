import React from 'react';
import InputField from "../InputField";
import { FiSearch } from "react-icons/fi";

const OrderTableFilters = ({startDate, endDate, setSearchQuery, searchQuery, setStartDate, setEndDate}) => {
  return (
    <div className="flex flex-wrap w-full gap-4 p-3 border lg:py-4 border-gray-border">
        {/* Start Date */}
        <div className="w-full lg:w-auto">
            <InputField
                name="Date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
        </div>
        {/* End Date */}
        <div className="w-full lg:w-auto">
            <InputField
                name="Date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
        </div>
        {/* Search Product */}
        <div className="relative flex-grow w-full lg:w-auto ">
            <InputField
                name="Search"
                type="text"
                placeholder="Search by subreddit name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute top-3.5 right-3 size-5 text-light-gray" />
        </div>
    </div>
  );
};

export default OrderTableFilters;