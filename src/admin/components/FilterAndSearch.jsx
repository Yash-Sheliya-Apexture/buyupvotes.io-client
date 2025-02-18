// import React, { useState, useEffect } from 'react';
// import {
//     FiSearch,
// } from "react-icons/fi";
// import Dropdown from '../../Dashboard/components/Dropdown';  // Import the custom Dropdown component
// import InputField from '../../Dashboard/components/InputField'; // Import the InputField

// const FilterAndSearch = ({
//     onSearch,
//     onSort,
//     sortOptions,
//     defaultSortLabel = "Sort",
//     onReset
// }) => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [sortOrder, setSortOrder] = useState("");
//     const [sortLabel, setSortLabel] = useState(defaultSortLabel);
//     const [hasFilters, setHasFilters] = useState(false); // State to track if any filters are applied

//     useEffect(() => {
//         // Check if any filters are active
//         if (searchTerm || sortOrder) {
//             setHasFilters(true);
//         } else {
//             setHasFilters(false);
//         }
//     }, [searchTerm, sortOrder]);

//     const handleSearchChange = (event) => {
//         const term = event.target.value;
//         setSearchTerm(term);
//         onSearch(term);
//     };

//     const handleSortSelect = (selectedValue) => {
//         // Find the corresponding value and label from sortOptions
//         const selectedOption = sortOptions.find(option => option.label === selectedValue);

//         if (selectedOption) {
//             setSortOrder(selectedOption.value); // Set the value
//             setSortLabel(selectedValue);       // Set the label
//             onSort(selectedOption.value, selectedValue); // Notify parent
//         }
//     };

//     const handleReset = () => {
//         setSearchTerm("");
//         setSortOrder("");
//         setSortLabel(defaultSortLabel);
//         onSearch(""); // Clear the search
//         onSort("", defaultSortLabel); // Clear the sort
//         setHasFilters(false); //Reset hasFilters to false
//     };

//     return (
//         <div className="flex items-center gap-4">
//             {/* Custom Filter Dropdown (using your Dropdown component) */}
//             <div className="relative">
//                 <Dropdown
//                     options={sortOptions.map(option => option.label)} // Pass labels to Dropdown
//                     selectedValue={sortLabel !== defaultSortLabel ? sortLabel : null} // Conditional value
//                     onSelect={handleSortSelect}
//                     placeholder={defaultSortLabel}
//                     className="w-48"  // Adjust width as needed
//                 />

//             </div>

//             {/* Search Input  - using your InputField component*/}
//             <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FiSearch className="w-5 h-5 text-gray-400" />
//                 </div>
//                 <InputField
//                     type="search" // Use the "search" type
//                     placeholder="Search..."
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     name="search" // Add a unique name
//                 />
//             </div>

//             {/* Conditionally Render Reset Button */}
//             {hasFilters && (
//                 <button
//                     onClick={handleReset}
//                     className="py-4 px-6 bg-gray-200 hover:bg-gray-300 rounded-xl text-sm font-bold text-gray-800 transition-colors duration-300"
//                 >
//                     Reset
//                 </button>
//             )}
//         </div>
//     );
// };

// export default FilterAndSearch;

// import React, { useState, useEffect } from "react";
// import Dropdown from "../../Dashboard/components/Dropdown";
// import InputField from "../../Dashboard/components/InputField";

// const FilterAndSearch = ({
//   onSearch,
//   onSort,
//   sortOptions,
//   onReset,
//   onRowsPerPageChange,
//   showSearch = true, // Add show props with default value
//   showSort = true,
//   showRowsPerPage = true,
// }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [sortLabel, setSortLabel] = useState("Sort");
//   const [hasFilters, setHasFilters] = useState(false);
//   const [rowsPerPage, setRowsPerPage] = useState(null); // No default value!

//   const rowsPerPageOptions = [5, 10, 20, 50];

//   useEffect(() => {
//     if (
//       (showSearch && searchTerm) ||
//       (showSort && sortOrder) ||
//       (showRowsPerPage && rowsPerPage !== null)
//     ) {
//       setHasFilters(true);
//     } else {
//       setHasFilters(false);
//     }
//   }, [searchTerm, sortOrder, rowsPerPage, showSearch, showSort, showRowsPerPage]);

//   const handleSearchChange = (event) => {
//     const term = event.target.value;
//     setSearchTerm(term);
//     onSearch(term);
//   };

//   const handleSortSelect = (selectedValue) => {
//     const selectedOption = sortOptions.find(
//       (option) => option.label === selectedValue
//     );

//     if (selectedOption) {
//       setSortOrder(selectedOption.value);
//       setSortLabel(selectedValue);
//       onSort(selectedOption.value, selectedValue);
//     }
//   };

//   const handleRowsPerPageSelect = (selectedRows) => {
//     const rows = parseInt(selectedRows, 10);
//     setRowsPerPage(rows);
//     onRowsPerPageChange(rows);
//   };

//   const handleReset = () => {
//     setSearchTerm("");
//     setSortOrder("");
//     setSortLabel("Sort");
//     setRowsPerPage(null); // Reset to null
//     onSearch("");
//     onSort("", "Sort");
//     onRowsPerPageChange(null); // Notify the parent
//     setHasFilters(false);
//   };

//   return (
//     <div className="flex items-center justify-between">
//       {/* Search Input  - using your InputField component*/}
//       {showSearch && (
//         <div className="search-input">
//           <InputField
//             type="search"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={handleSearchChange}
//             name="search"
//           />
//         </div>
//       )}

//       {/* Sorting Dropdown */}
//       <div className="flex items-center justify-between gap-4">
//         {/* Custom Filter Dropdown (using your Dropdown component) */}
//         {showSort && (
//           <div className="relative">
//             <Dropdown
//               options={sortOptions.map((option) => option.label)}
//               selectedValue={sortLabel !== "Sort" ? sortLabel : null}
//               onSelect={handleSortSelect}
//               placeholder="Sort"
//               className="w-48"
//             />
//           </div>
//         )}

//         {/* Rows Per Page Dropdown */}
//         {showRowsPerPage && (
//           <div className="relative">
//             <Dropdown
//               options={rowsPerPageOptions.map(String)}
//               selectedValue={rowsPerPage !== null ? String(rowsPerPage) : null} // Conditional value
//               onSelect={handleRowsPerPageSelect}
//               placeholder="Rows"
//               className="w-24"
//             />
//           </div>
//         )}

//         {/* Conditionally Render Reset Button */}
//         {hasFilters && (
//           <button
//             onClick={handleReset}
//             className="py-4 px-6 bg-gray-200 hover:bg-gray-300 rounded-xl text-sm font-bold text-gray-800 transition-colors duration-300"
//           >
//             Reset
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FilterAndSearch;

import React from "react";
import Dropdown from "../../Dashboard/components/Dropdown";
import InputField from "../../Dashboard/components/InputField";

const FilterAndSearch = ({
  searchTerm,
  onSearch,
  sortOrder,
  sortLabel,
  onSort,
  sortOptions,
  onRowsPerPageChange,
  rowsPerPage,
  showSearch = true, // Add show props with default value
  showSort = true,
  showRowsPerPage = true,
}) => {
  const rowsPerPageOptions = [5, 10, 20, 50];

  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  const handleSortSelect = (selectedValue) => {
    const selectedOption = sortOptions.find(
      (option) => option.label === selectedValue
    );
    if (selectedOption) {
      onSort(selectedOption.value, selectedValue);
    }
  };

  const handleRowsPerPageSelect = (selectedRows) => {
    const rows = parseInt(selectedRows, 10);
    onRowsPerPageChange(rows);
  };

  return (
    <div className="flex justify-between items-center gap-4 w-full">
      {/* Search Input */}
      {showSearch && (
        <div className="search-input">
          <InputField
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            name="search"
          />
        </div>
      )}

      <div className="flex items-center gap-4">
        {/* Sorting Dropdown */}
        {showSort && (
          <div className="relative">
            <Dropdown
              options={sortOptions.map((option) => option.label)}
              selectedValue={sortLabel !== "Sort" ? sortLabel : null}
              onSelect={handleSortSelect}
              placeholder="Sort"
              className="w-48"
            />
          </div>
        )}

        {/* Rows Per Page Dropdown */}
        {showRowsPerPage && (
          <div className="relative">
            <Dropdown
              options={rowsPerPageOptions.map(String)}
              selectedValue={rowsPerPage !== null ? String(rowsPerPage) : null}
              onSelect={handleRowsPerPageSelect}
              placeholder="Rows"
              className="w-24"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterAndSearch;
