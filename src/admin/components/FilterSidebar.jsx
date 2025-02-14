// import React, { useState, useEffect } from "react";
// import moment from "moment";
// import { MdDateRange } from "react-icons/md";
// import { FcFilledFilter } from "react-icons/fc";

// const FilterSidebar = ({ isOpen, onClose, onFilter, initialFilters }) => {
//   const [category, setCategory] = useState(initialFilters.category || "");
//   const [service, setService] = useState(initialFilters.service || "");
//   const [status, setStatus] = useState(initialFilters.status || "");
//   const [startDate, setStartDate] = useState(initialFilters.startDate || "");
//   const [endDate, setEndDate] = useState(initialFilters.endDate || "");

//   const [isResetting, setIsResetting] = useState(false); // Track resetting state

//   useEffect(() => {
//     setCategory(initialFilters.category || "");
//     setService(initialFilters.service || "");
//     setStatus(initialFilters.status || "");
//     setStartDate(
//       initialFilters.startDate
//         ? moment(initialFilters.startDate).format("YYYY-MM-DD")
//         : ""
//     );
//     setEndDate(
//       initialFilters.endDate
//         ? moment(initialFilters.endDate).format("YYYY-MM-DD")
//         : ""
//     );
//   }, [initialFilters]);

//   const handleApplyFilters = () => {
//     const filters = {
//       category,
//       service,
//       status,
//       startDate: startDate || null,
//       endDate: endDate || null,
//     };
//     onFilter(filters);
//     onClose();
//   };

//   const handleResetFilters = () => {
//     setIsResetting(true); // Start the resetting animation

//     // Delay resetting the state to allow the animation to complete
//     setTimeout(() => {
//       setCategory("");
//       setService("");
//       setStatus("");
//       setStartDate("");
//       setEndDate("");
//       setIsResetting(false); // End the resetting animation
//     }, 300); // Adjust the duration to match the animation
//   };

//   return (
//     <div
//       className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
//         isOpen ? "translate-x-0" : "translate-x-full"
//       } z-50`}
//     >
//       {/* Header with close button */}
//       <div className="p-5 bg-gray-200">
//         <h2 className="text-xl font-semibold flex items-center tracking-wider uppercase">
//           <FcFilledFilter className="mr-3" size={28} />
//           Filter Orders
//         </h2>
//       </div>

//       <div className="p-6 overflow-y-auto">
//         {/* Category Input */}
//         <div className="mb-6">
//           <label
//             htmlFor="category"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Category
//           </label>
//           <input
//             type="text"
//             id="category"
//             className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500 transition-shadow duration-200"
//             placeholder="Enter category..."
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           />
//         </div>

//         {/* Service Input */}
//         <div className="mb-6">
//           <label
//             htmlFor="service"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Service
//           </label>
//           <input
//             type="text"
//             id="service"
//             className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500 transition-shadow duration-200"
//             placeholder="Enter service..."
//             value={service}
//             onChange={(e) => setService(e.target.value)}
//           />
//         </div>

//         {/* Status Select */}
//         <div className="mb-6">
//           <label
//             htmlFor="status"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Status
//           </label>
//           <div className="relative">
//             <select
//               id="status"
//               className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-3 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500 transition-shadow duration-200"
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//             >
//               <option value="">All</option>
//               <option value="Pending">Pending</option>
//               <option value="In Progress">In Progress</option>
//               <option value="Completed">Completed</option>
//               <option value="Partial">Partial</option>
//               <option value="Canceled">Cancelled</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg
//                 className="fill-current h-4 w-4"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* Start Date Input */}
//         <div className="mb-6">
//           <label
//             htmlFor="startDate"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Order Date From
//           </label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <MdDateRange className="text-gray-500" size={24} />
//             </div>
//             <input
//               type="date"
//               id="startDate"
//               className="shadow appearance-none border rounded-lg w-full py-3 px-4 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500 transition-shadow duration-200"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* End Date Input */}
//         <div className="mb-6">
//           <label
//             htmlFor="endDate"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Order Date To
//           </label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <MdDateRange className="text-gray-500" size={24} />
//             </div>
//             <input
//               type="date"
//               id="endDate"
//               className="shadow appearance-none border rounded-lg w-full py-3 px-4 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500 transition-shadow duration-200"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="flex justify-end">
//           <button
//             type="button"
//             className="py-2 px-4 bg-gray-200 font-medium text-gray-700 rounded-lg hover:bg-gray-300 mr-3 focus:outline-none transition-colors duration-200"
//             onClick={onClose}
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             className="py-2 px-4 bg-main-color font-medium text-white rounded-lg hover:bg-orange-600 focus:outline-none transition-colors duration-200 flex items-center"
//             onClick={handleApplyFilters}
//           >
//             Apply Filters
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterSidebar;

import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import { FcFilledFilter } from "react-icons/fc";
import Dropdown from "../../Dashboard/components/Dropdown";
import InputField from "../../Dashboard/components/InputField";
import { IoClose } from "react-icons/io5"

const FilterSidebar = ({ isOpen, onClose, onFilter, initialFilters }) => {
  const [category, setCategory] = useState(initialFilters.category || "");
  const [service, setService] = useState(initialFilters.service || "");
  const [status, setStatus] = useState(initialFilters.status || "");
  const [startDate, setStartDate] = useState(initialFilters.startDate || "");
  const [endDate, setEndDate] = useState(initialFilters.endDate || "");

  // Options
  const categoryOptions = ["Post", "Comment", "Upvotes"];
  const statusOptions = [
    "All",
    "Pending",
    "In Progress",
    "Completed",
    "Partial",
    "Canceled",
  ];

  const [serviceOptions, setServiceOptions] = useState([]);

  const sidebarRef = useRef(null);

  useEffect(() => {
    switch (category) {
      case "Post":
        setServiceOptions(["Random Post", "Custom Post"]);
        break;
      case "Comment":
        setServiceOptions(["Random Comments", "Custom Comments"]);
        break;
      case "Upvotes":
        setServiceOptions(["Post Upvotes", "Comments Upvotes"]);
        break;
      default:
        setServiceOptions([]);
    }
  }, [category]);

  useEffect(() => {
    setCategory(initialFilters.category || "");
    setService(initialFilters.service || "");
    setStatus(initialFilters.status || "");
    setStartDate(
      initialFilters.startDate
        ? moment(initialFilters.startDate).format("YYYY-MM-DD")
        : ""
    );
    setEndDate(
      initialFilters.endDate
        ? moment(initialFilters.endDate).format("YYYY-MM-DD")
        : ""
    );
  }, [initialFilters]);


  const handleApplyFilters = () => {
    let filters = {
      category,
      service,
      startDate: startDate || null,
      endDate: endDate || null,
    };

    // Conditionally add the status filter based on whether it's "All"
    if (status !== "All") {
      filters.status = status;
    } else {
      filters.status = null;
    }

    onFilter(filters);
    onClose();
  };


  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
     {isOpen && (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40" onClick={onClose}></div>
    )}
    <div
      className={`fixed m-3 top-0 right-0 h-[calc(100%-24px)] w-96 border rounded-xl bg-white transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full -right-2"
      } z-50`}
      ref={sidebarRef}
    >
      <div className="p-5 rounded-t-lg bg-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-semibold flex items-center tracking-wider">
          <FcFilledFilter className="mr-3" size={28} />
          Filter Orders
        </h2>
        <button
          onClick={onClose} // Call the onClose function when the button is clicked
          className="text-gray-900" // Styling for the button
        >
          <IoClose size={24} /> {/* Render the close icon */}
        </button>
      </div>

      <div className="p-6 overflow-y-auto">
        <div className="mb-6">
          <label
            htmlFor="category"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Category
          </label>
          <Dropdown
            options={categoryOptions}
            selectedValue={category}
            onSelect={(selectedCategory) => {
              setCategory(selectedCategory);
              setService("");
            }}
            placeholder="Select Category"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="service"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Service
          </label>
          <Dropdown
            options={serviceOptions}
            selectedValue={service}
            onSelect={(selectedService) => setService(selectedService)}
            placeholder="Select Service"
            disabled={serviceOptions.length === 0}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="status"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Status
          </label>
          <Dropdown
            options={statusOptions}
            selectedValue={status}
            onSelect={(selectedStatus) => setStatus(selectedStatus)}
            placeholder="Select Status"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="startDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Order Date From
          </label>
          <InputField
            type="date"
            name="startDate"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="endDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Order Date To
          </label>
          <InputField
            type="date"
            name="endDate"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="py-2 px-4 bg-gray-200 font-medium text-gray-700 rounded-lg hover:bg-gray-300 mr-3 focus:outline-none transition-colors duration-200"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="py-2 px-4 bg-main-color font-medium text-white rounded-lg hover:bg-orange-600 focus:outline-none transition-colors duration-200 flex items-center"
            onClick={handleApplyFilters}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
    </>

  );
};

export default FilterSidebar;