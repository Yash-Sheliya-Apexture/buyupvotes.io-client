import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FaSearch size={12} className="text-gray-400" />
      </div>
      <input
        type="search"
        placeholder="Search..."
        className="block w-full pl-10 text-sm text-gray-900 rounded-full search-input border-none"
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBar;