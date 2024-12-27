// import React, { useState, useEffect } from "react";
// import Data from "../../assets/Images/nodata.svg"; // No data icon
// import { FiSearch } from "react-icons/fi";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import axios from "axios"; // Import Axios
// import { HiLink } from "react-icons/hi";
// import { useRef } from "react";
// import InputField from "../components/InputField";
// import { FaPlus } from "react-icons/fa6";
// import { FaTrashAlt } from "react-icons/fa";


// function parseAndFormatDate(dateString) {
//   try {
//     // Split date and time
//     const [datePart] = dateString.split(", ");
//     const [day, month, year] = datePart.split("/");

//     // Return the date in 'dd/MM/yyyy' format
//     return `${day}/${month}/${year}`;
//   } catch (error) {
//     console.error(`Error parsing date: ${dateString}`, error);
//     return "Invalid Date";
//   }
// }



// const Ordertable = () => {
//   const [activeTab, setActiveTab] = useState("All");
//   const [tableData, setTableData] = useState([]); // state for table data
//   const [searchQuery, setSearchQuery] = useState(""); // New search state
//   const [debouncedQuery, setDebouncedQuery] = useState(""); // For debounce effect
//   const [startDate, setStartDate] = useState(""); // Track start date
//   const [endDate, setEndDate] = useState(""); // Track end date
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [loading, setLoading] = useState(false); // Track loading state
//   const [error, setError] = useState(null); // Error state
//   const scrollableRef = useRef(null);
//   const [indicatorWidth, setIndicatorWidth] = useState(0);
//   const [indicatorLeft, setIndicatorLeft] = useState(0);
//   const tabRefs = useRef([]); // Store references to each tab button.
//   const [tabCounts, setTabCounts] = useState({
//     All: 0,
//     Pending: 0,
//     "In Progress": 0,
//     Completed: 0,
//     Canceled: 0,
//   }); // To keep dynamic counts of each status

//   useEffect(() => {
//     // Set the indicator position and width for the default active tab
//     updateIndicator(0);
//   }, []);

//   const handleTabChange = (label, index) => {
//     setActiveTab(label); // Update active tab
//     updateIndicator(index); // Update the indicator's position and width
//   };

//   const updateIndicator = (index) => {
//     const tab = tabRefs.current[index];
//     if (tab) {
//       setIndicatorWidth(tab.offsetWidth);
//       setIndicatorLeft(tab.offsetLeft);
//     }
//   };

//   const scrollLeft = () => {
//     if (scrollableRef.current) {
//       scrollableRef.current.scrollBy({ left: -100, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollableRef.current) {
//       scrollableRef.current.scrollBy({ left: 100, behavior: "smooth" });
//     }
//   };



//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   const totalPages = Math.ceil(tableData.length / rowsPerPage);
//   const paginatedData = tableData.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleRowsPerPageChange = (e) => {
//     setRowsPerPage(parseInt(e.target.value));
//     setCurrentPage(1); // Reset to first page
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedQuery(searchQuery);
//     }, 500); // Adjust delay as needed
//     return () => clearTimeout(timer);
//   }, [searchQuery]);

//   // Fetch data from API
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true); // Start loading
//       setError(null); // Clear previous errors

//       try {
//         const token = localStorage.getItem("authToken");
//         const response = await axios.get(`${API_BASE_URL}/auth/orders`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         let filteredData = response.data;

//         // Filter data based on the active tab
//         if (activeTab !== "All") {
//           filteredData = filteredData.filter(
//             (item) => item.status === activeTab
//           );
//         }

//         // Filter data based on the search query (only `orderId` and `service`)
//         if (debouncedQuery) {
//           filteredData = filteredData.filter(
//             (item) =>
//               item.orderId
//                 .toLowerCase()
//                 .includes(debouncedQuery.toLowerCase()) ||
//               item.service.toLowerCase().includes(debouncedQuery.toLowerCase())
//           );
//         }

//         // Filter by date range
//         if (startDate) {
//           filteredData = filteredData.filter(
//             (item) => new Date(item.date) >= new Date(startDate)
//           );
//         }
//         if (endDate) {
//           filteredData = filteredData.filter(
//             (item) => new Date(item.date) <= new Date(endDate)
//           );
//         }

//         // Sort data by date in descending order (latest first)
//         filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));

//         // Update table data
//         setTableData(filteredData);

//         // Update tab counts
//         setTabCounts((prevCounts) => ({
//           ...prevCounts,
//           All: response.data.length,
//           Pending: response.data.filter((item) => item.status === "Pending")
//             .length,
//           "In Progress": response.data.filter(
//             (item) => item.status === "In Progress"
//           ).length,
//           Completed: response.data.filter((item) => item.status === "Completed")
//             .length,
//           Canceled: response.data.filter((item) => item.status === "Canceled")
//             .length,
//         }));
//       } catch (error) {
//         setError(
//           "There was an issue fetching the data. Please try again later."
//         );
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchData();
//   }, [activeTab, startDate, endDate, debouncedQuery]);

//   const tabs = [
//     {
//       label: "All",
//       count: tabCounts["All"],
//       color: "bg-[#919EAB29] text-para-color",
//       colors: "bg-black text-white",
//     },
//     {
//       label: "Pending",
//       count: tabCounts["Pending"] || 0,
//       color: "bg-[#FFAB0029] text-[#B76E00]",
//       colors: "bg-[#FFAB00] text-[#212B36]",
//     },
//     {
//       label: "In Progress",
//       count: tabCounts["In Progress"] || 0,
//       color: "bg-[#0ea5e92b] text-[#0ea5e9]",
//       colors: "bg-[#0ea5e9] text-white",
//     },
//     {
//       label: "Completed",
//       count: tabCounts["Completed"] || 0,
//       color: "bg-[#22C55E29] text-[#118D57]",
//       colors: "bg-[#22C55E] text-white",
//     },
//     {
//       label: "Partial",
//       count: tabCounts["Partial"] || 0,
//       color: "bg-[#919EAB29] text-para-color",
//       colors: "bg-sub-color text-white",
//     },
//     {
//       label: "Canceled",
//       count: tabCounts["Canceled"] || 0,
//       color: "bg-[#FF563029] text-[#B71D18]",
//       colors: "bg-light-orange text-white",
//     },
//   ];

//   return (
//     <div className="mb-4 border rounded-small">
//       <h1 className="p-4 font-semibold text-sub-color lg:text-basic">
//         Your past upvote orders:
//       </h1>

//       {/* Tabs table */}
//       <div className="relative flex items-center border rounded-sm border-gray-300/50 shadow-main ">
//         {/* Left Icon */}
//         <button
//           onClick={scrollLeft}
//           className="absolute left-0 z-0 p-2 rounded-full lg:hidden"
//         >
//           <FaChevronLeft className="h-3" />
//         </button>

//         {/* Tabs table */}
//         <div className="relative flex items-center justify-center mx-6 overflow-hidden lg:mx-2">
//           {/* Tabs Container */}
//           <div
//             ref={scrollableRef}
//             className="relative flex items-center overflow-hidden tabs-scrollable lg:gap-6 scroll-smooth"
//           >
//             {/* Active Tab Indicator */}
//             <div
//               className="absolute bottom-0 h-0.5 bg-main-color transition-all duration-300"
//               style={{
//                 width: `${indicatorWidth}px`,
//                 left: `${indicatorLeft}px`,
//               }}
//             ></div>

//             {tabs.map((tab, index) => (
//               <button
//                 key={tab.label}
//                 onClick={() => handleTabChange(tab.label, index)}
//                 className={`relative p-3.5 font-bold text-sm whitespace-nowrap ${activeTab === tab.label ? "text-main-color" : "text-sub-color"
//                   }`}
//                 ref={(el) => (tabRefs.current[index] = el)}
//               >
//                 {tab.label}
//                 <span
//                   className={`ml-2 px-2 py-1 rounded text-xs font-bold ${activeTab === tab.label ? tab.colors : tab.color
//                     }`}
//                 >
//                   {tab.count}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Right Icon */}
//         <button
//           onClick={scrollRight}
//           className="absolute right-0 z-0 p-2 rounded-full lg:hidden"
//         >
//           <FaChevronRight className="h-3" />
//         </button>
//       </div>

//       {/* Filter Section */}
//       <div className="flex flex-wrap items-center w-full gap-3 p-2 py-3 border border-gray-border">
//         {/* Start Date */}
//         <div className="w-full gap-2 lg:w-auto">
//           <InputField
//             name="Date"
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//           />
//         </div>

//         {/* End Date */}
//         <div className="w-full gap-2 lg:w-auto">
//           <InputField
//             name="Date"
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//           />
//         </div>

//         {/* Search Product */}
//         <div className="relative flex-grow w-full lg:w-auto ">
//           <InputField
//             name="Search"
//             type="text"
//             placeholder="search by subreddit names..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <FiSearch className="absolute top-3 right-3 size-5 text-sub-color" />
//         </div>
//       </div>

//       <div className="flex space-x-2">
//         {/* Status Check Section */}
//         {activeTab !== "All" && (
//           <div className="p-2">
//             <div className="flex items-center p-2 space-x-2 border border-dashed rounded-medium">
//               <h1 className="font-medium text-sub-color">Status : </h1>
//               <button
//                 onClick={() => handleTabChange("All")} // Set active tab to "All" on click
//                 className="flex items-center px-2 py-1 text-xs text-white transition-all duration-300 ease-in rounded-full bg-sub-color hover:bg-slate-500/50"
//               >
//                 {activeTab}
//                 {/* Close Icon */}
//                 <div className="flex items-center justify-center ml-2 bg-white rounded-full size-5">
//                   <FaPlus className="h-3 text-gray-500 rotate-45" />
//                 </div>
//               </button>
//             </div>
//           </div>
//         )}
//         {activeTab !== "All" && (
//           <div
//             className="flex items-center cursor-pointer"
//             onClick={() => setActiveTab("All")}
//           >
//             <FaTrashAlt className="size-5 text-light-orange" />
//             <h1 className="ml-2 font-bold text-small text-light-orange">
//               Clear
//             </h1>
//           </div>
//         )}
//       </div>

//       {/* Table Section */}
//       <div className="table-scrollable">
//         <table className="w-full border-collapse table-auto table-main">
//           <thead className="capitalize text-small bg-gray-light text-sub-color">
//             <tr>
//               <th>Order #</th>
//               <th>Details</th>
//               <th>Started</th>
//               <th>Date</th>
//               <th>Total Votes</th>
//               <th>Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan="6" className="py-20 text-center text-gray-400">
//                   <div className="flex flex-col items-center">
//                     <div className="w-16 h-16 border-t-4 border-solid rounded-full border-main-color animate-spin"></div>
//                   </div>
//                 </td>
//               </tr>
//             ) : tableData.length === 0 ? (
//               <tr>
//                 <td colSpan="6" className="py-20 text-center text-gray-400">
//                   <div className="flex flex-col items-center">
//                     <img src={Data} alt="No Data" className="h-40" />
//                     <p className="mt-4 text-lg font-medium">
//                       No Data Available
//                     </p>
//                   </div>
//                 </td>
//               </tr>
//             ) : (
//               paginatedData.map((item, index) => (
//                 <tr key={`${item.orderId}-${index}`}>
//                   <td className="px-6 py-4">{item.orderId.substring(0, 4)}</td>
//                   <td className="gap-3 px-6 py-2 ">
//                     <span className="flex gap-2">
//                       {item.service}
//                       <a href={`${item.link}`} target="_blank" className="">
//                         <HiLink className="mt-1" />
//                       </a>
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">
//                     {item.started}
//                   </td>
//                   <td className="px-6 py-4">
//                     {
//                       // Use the helper function to parse and format the date
//                       parseAndFormatDate(item.date)
//                     }
//                   </td>

//                   <td className="px-4 py-4">{item.quantity}</td>
//                   <td className="px-4 py-4">
//                     <span
//                       className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide ${item.status === "Completed"
//                         ? "bg-green-500 text-white"
//                         : item.status === "Pending"
//                           ? "bg-yellow-500 text-white"
//                           : item.status === "Canceled"
//                             ? "bg-red-500 text-white"
//                             : "bg-sky-500 text-white"
//                         }`}
//                     >
//                       {item.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex justify-between p-4">
//           <button
//             onClick={handlePreviousPage}
//             className="flex items-center text-sm text-main-color"
//             disabled={currentPage === 1}
//           >
//             <FaChevronLeft className="mr-2" />
//             Previous
//           </button>
//           <div className="text-sm">
//             Page {currentPage} of {totalPages}
//           </div>
//           <button
//             onClick={handleNextPage}
//             className="flex items-center text-sm text-main-color"
//             disabled={currentPage === totalPages}
//           >
//             Next
//             <FaChevronRight className="ml-2" />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Ordertable;




// import React, { useState, useEffect } from "react";
// import Data from "../../assets/Images/nodata.svg"; // No data icon
// import { FiSearch } from "react-icons/fi";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import axios from "axios"; // Import Axios
// import { HiLink } from "react-icons/hi";
// import { useRef } from "react";
// import InputField from "../components/InputField";
// import { FaPlus } from "react-icons/fa6";
// import { FaTrashAlt } from "react-icons/fa";



// const Ordertable = () => {
//   const [activeTab, setActiveTab] = useState("All");
//   const [tableData, setTableData] = useState([]); // state for table data
//   const [searchQuery, setSearchQuery] = useState(""); // New search state
//   const [debouncedQuery, setDebouncedQuery] = useState(""); // For debounce effect
//   const [startDate, setStartDate] = useState(""); // Track start date
//   const [endDate, setEndDate] = useState(""); // Track end date
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [loading, setLoading] = useState(false); // Track loading state
//   const [error, setError] = useState(null); // Error state
//   const scrollableRef = useRef(null);
//   const [indicatorWidth, setIndicatorWidth] = useState(0);
//   const [indicatorLeft, setIndicatorLeft] = useState(0);
//   const tabRefs = useRef([]); // Store references to each tab button.
//   const [tabCounts, setTabCounts] = useState({
//     All: 0,
//     Pending: 0,
//     "In Progress": 0,
//     Completed: 0,
//     Canceled: 0,
//   }); // To keep dynamic counts of each status

//   useEffect(() => {
//     // Set the indicator position and width for the default active tab
//     updateIndicator(0);
//   }, []);

//   const handleTabChange = (label, index) => {
//     setActiveTab(label); // Update active tab
//     updateIndicator(index); // Update the indicator's position and width
//   };

//   const updateIndicator = (index) => {
//     const tab = tabRefs.current[index];
//     if (tab) {
//       setIndicatorWidth(tab.offsetWidth);
//       setIndicatorLeft(tab.offsetLeft);
//     }
//   };

//   const scrollLeft = () => {
//     if (scrollableRef.current) {
//       scrollableRef.current.scrollBy({ left: -100, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollableRef.current) {
//       scrollableRef.current.scrollBy({ left: 100, behavior: "smooth" });
//     }
//   };



//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   const totalPages = Math.ceil(tableData.length / rowsPerPage);
//   const paginatedData = tableData.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleRowsPerPageChange = (e) => {
//     setRowsPerPage(parseInt(e.target.value));
//     setCurrentPage(1); // Reset to first page
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedQuery(searchQuery);
//     }, 500); // Adjust delay as needed
//     return () => clearTimeout(timer);
//   }, [searchQuery]);

//   // // Fetch data from API
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     setLoading(true); // Start loading
//   //     setError(null); // Clear previous errors

//   //     try {
//   //       const token = localStorage.getItem("authToken");
//   //       const response = await axios.get(`${API_BASE_URL}/auth/orders`, {
//   //         headers: { Authorization: `Bearer ${token}` },
//   //       });

//   //       let filteredData = response.data;
//   //       console.log("Table data",response.data);

//   //       // Filter data based on the active tab
//   //       if (activeTab !== "All") {
//   //         filteredData = filteredData.filter((item) => item.status === activeTab);
//   //       }

//   //       // Filter data based on the search query (only `orderId` and `service`)
//   //       if (debouncedQuery) {
//   //         filteredData = filteredData.filter(
//   //           (item) =>
//   //             item.orderId.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
//   //             item.service.toLowerCase().includes(debouncedQuery.toLowerCase())
//   //         );
//   //       }

//   //       // Filter by date range
//   //       if (startDate) {
//   //         filteredData = filteredData.filter(
//   //           (item) => new Date(item.date) >= new Date(startDate)
//   //         );
//   //       }
//   //       if (endDate) {
//   //         filteredData = filteredData.filter(
//   //           (item) => new Date(item.date) <= new Date(endDate)
//   //         );
//   //       }

//   //       // Sort data by date in descending order (latest first)
//   //       filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));

//   //       // Update table data
//   //       setTableData(filteredData);

//   //       // Update tab counts
//   //       setTabCounts((prevCounts) => ({
//   //         ...prevCounts,
//   //         All: response.data.length,
//   //         Pending: response.data.filter((item) => item.status === "Pending")
//   //           .length,
//   //         "In Progress": response.data.filter(
//   //           (item) => item.status === "In Progress"
//   //         ).length,
//   //         Completed: response.data.filter((item) => item.status === "Completed")
//   //           .length,
//   //         Canceled: response.data.filter((item) => item.status === "Canceled")
//   //           .length,
//   //       }));
//   //     } catch (error) {
//   //       setError("There was an issue fetching the data. Please try again later.");
//   //     } finally {
//   //       setLoading(false); // Stop loading
//   //     }
//   //   };

//   //   fetchData();
//   // }, [activeTab, startDate, endDate, debouncedQuery]);


//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true); // Start loading
//       setError(null); // Clear previous errors

//       try {
//         const token = localStorage.getItem("authToken");

//         // Ensure the token is available
//         if (!token) {
//           setError('Token missing or invalid.');
//           return;
//         }

//         const response = await axios.get(`${API_BASE_URL}/auth/orders`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         // Log the response once to inspect data
//         console.log("API Response:", response);

//         // Ensure the data is an array before proceeding
//         let filteredData = Array.isArray(response.data) ? response.data : [];
//         console.log("Filtered Data", filteredData); // Log filtered data

//         // Filter data based on the active tab
//         if (activeTab !== "All") {
//           filteredData = filteredData.filter((item) => item.status === activeTab);
//         }

//         // Filter data based on the search query (only `orderId` and `service`)
//         if (debouncedQuery) {
//           filteredData = filteredData.filter(
//             (item) =>
//               item.orderId.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
//               item.service.toLowerCase().includes(debouncedQuery.toLowerCase())
//           );
//         }

//         // Filter by date range
//         if (startDate) {
//           filteredData = filteredData.filter(
//             (item) => new Date(item.date) >= new Date(startDate)
//           );
//         }
//         if (endDate) {
//           filteredData = filteredData.filter(
//             (item) => new Date(item.date) <= new Date(endDate)
//           );
//         }

//         // Sort data by date in descending order (latest first)
//         filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));

//         // Update table data
//         setTableData(filteredData);

//         // Update tab counts in one go
//         const tabCounts = {
//           All: filteredData.length,
//           Pending: filteredData.filter((item) => item.status === "Pending").length,
//           "In Progress": filteredData.filter((item) => item.status === "In Progress").length,
//           Completed: filteredData.filter((item) => item.status === "Completed").length,
//           Canceled: filteredData.filter((item) => item.status === "Canceled").length,
//         };
//         setTabCounts(tabCounts);

//       } catch (error) {
//         setError("There was an issue fetching the data. Please try again later.");
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     // Call fetchData only once when the dependencies change
//     fetchData();
//   }, [activeTab, startDate, endDate, debouncedQuery]);






//   function formattedDate(date) {
//     const parsedDate = new Date(date);
//     if (isNaN(parsedDate.getTime())) {
//       return 'No Date Provided';  // Return a default message if the date is invalid
//     }
//     return parsedDate.toLocaleDateString();  // Return the formatted date string
//   }

//   const tabs = [
//     {
//       label: "All",
//       count: tabCounts["All"],
//       color: "bg-[#919EAB29] text-para-color",
//       colors: "bg-black text-white",
//     },
//     {
//       label: "Pending",
//       count: tabCounts["Pending"] || 0,
//       color: "bg-[#FFAB0029] text-[#B76E00]",
//       colors: "bg-[#FFAB00] text-[#212B36]",
//     },
//     {
//       label: "In Progress",
//       count: tabCounts["In Progress"] || 0,
//       color: "bg-[#0ea5e92b] text-[#0ea5e9]",
//       colors: "bg-[#0ea5e9] text-white",
//     },
//     {
//       label: "Completed",
//       count: tabCounts["Completed"] || 0,
//       color: "bg-[#22C55E29] text-[#118D57]",
//       colors: "bg-[#22C55E] text-white",
//     },
//     {
//       label: "Partial",
//       count: tabCounts["Partial"] || 0,
//       color: "bg-[#919EAB29] text-para-color",
//       colors: "bg-sub-color text-white",
//     },
//     {
//       label: "Canceled",
//       count: tabCounts["Canceled"] || 0,
//       color: "bg-[#FF563029] text-[#B71D18]",
//       colors: "bg-light-orange text-white",
//     },
//   ];

//   return (
//     <div className="mb-4 border rounded-small">
//       <h1 className="p-4 font-semibold text-sub-color lg:text-basic">
//         Your past upvote orders:
//       </h1>

//       {/* Tabs table */}
//       <div className="relative flex items-center border rounded-sm border-gray-300/50 shadow-main ">
//         {/* Left Icon */}
//         <button
//           onClick={scrollLeft}
//           className="absolute left-0 z-0 p-2 rounded-full lg:hidden"
//         >
//           <FaChevronLeft className="h-3" />
//         </button>

//         {/* Tabs table */}
//         <div className="relative flex items-center justify-center mx-6 overflow-hidden lg:mx-2">
//           {/* Tabs Container */}
//           <div
//             ref={scrollableRef}
//             className="relative flex items-center overflow-hidden tabs-scrollable lg:gap-6 scroll-smooth"
//           >
//             {/* Active Tab Indicator */}
//             <div
//               className="absolute bottom-0 h-0.5 bg-main-color transition-all duration-300"
//               style={{
//                 width: `${indicatorWidth}px`,
//                 left: `${indicatorLeft}px`,
//               }}
//             ></div>

//             {tabs.map((tab, index) => (
//               <button
//                 key={tab.label}
//                 onClick={() => handleTabChange(tab.label, index)}
//                 className={`relative p-3.5 font-bold text-sm whitespace-nowrap ${activeTab === tab.label ? "text-main-color" : "text-sub-color"
//                   }`}
//                 ref={(el) => (tabRefs.current[index] = el)}
//               >
//                 {tab.label}
//                 <span
//                   className={`ml-2 px-2 py-1 rounded text-xs font-bold ${activeTab === tab.label ? tab.colors : tab.color
//                     }`}
//                 >
//                   {tab.count}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Right Icon */}
//         <button
//           onClick={scrollRight}
//           className="absolute right-0 z-0 p-2 rounded-full lg:hidden"
//         >
//           <FaChevronRight className="h-3" />
//         </button>
//       </div>

//       {/* Filter Section */}
//       <div className="flex flex-wrap items-center w-full gap-3 p-2 py-3 border border-gray-border">
//         {/* Start Date */}
//         <div className="w-full gap-2 lg:w-auto">
//           <InputField
//             name="Date"
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//           />
//         </div>

//         {/* End Date */}
//         <div className="w-full gap-2 lg:w-auto">
//           <InputField
//             name="Date"
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//           />
//         </div>

//         {/* Search Product */}
//         <div className="relative flex-grow w-full lg:w-auto ">
//           <InputField
//             name="Search"
//             type="text"
//             placeholder="search by subreddit names..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <FiSearch className="absolute top-3 right-3 size-5 text-sub-color" />
//         </div>
//       </div>

//       <div className="flex space-x-2">
//         {/* Status Check Section */}
//         {activeTab !== "All" && (
//           <div className="p-2">
//             <div className="flex items-center p-2 space-x-2 border border-dashed rounded-medium">
//               <h1 className="font-medium text-sub-color">Status : </h1>
//               <button
//                 onClick={() => handleTabChange("All")} // Set active tab to "All" on click
//                 className="flex items-center px-2 py-1 text-xs text-white transition-all duration-300 ease-in rounded-full bg-sub-color hover:bg-slate-500/50"
//               >
//                 {activeTab}
//                 {/* Close Icon */}
//                 <div className="flex items-center justify-center ml-2 bg-white rounded-full size-5">
//                   <FaPlus className="h-3 text-gray-500 rotate-45" />
//                 </div>
//               </button>
//             </div>
//           </div>
//         )}
//         {activeTab !== "All" && (
//           <div
//             className="flex items-center cursor-pointer"
//             onClick={() => setActiveTab("All")}
//           >
//             <FaTrashAlt className="size-5 text-light-orange" />
//             <h1 className="ml-2 font-bold text-small text-light-orange">
//               Clear
//             </h1>
//           </div>
//         )}
//       </div>

//       {/* Table Section */}
//       <div className="table-scrollable">
//         <table className="w-full border-collapse table-auto table-main">
//           <thead className="capitalize text-small bg-gray-light text-sub-color">
//             <tr>
//               <th>Order #</th>
//               <th>Details</th>
//               <th>Started</th>
//               <th>Date</th>
//               <th>Total Votes</th>
//               <th>Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan="6" className="py-20 text-center text-gray-400">
//                   <div className="flex flex-col items-center">
//                     <div className="w-16 h-16 border-t-4 border-solid rounded-full border-main-color animate-spin"></div>
//                   </div>
//                 </td>
//               </tr>
//             ) : tableData.length === 0 ? (
//               <tr>
//                 <td colSpan="6" className="py-20 text-center text-gray-400">
//                   <div className="flex flex-col items-center">
//                     <img src={Data} alt="No Data" className="h-40" />
//                     <p className="mt-4 text-lg font-medium">
//                       No Data Available
//                     </p>
//                   </div>
//                 </td>
//               </tr>
//             ) : (
//               paginatedData.map((item, index) => (
//                 <tr key={`${item.orderId}-${index}`}>
//                   <td className="px-6 py-4">{item.orderId.substring(0, 4)}</td>
//                   <td className="gap-3 px-6 py-2 ">
//                     <span className="flex gap-2">
//                       {item.service}
//                       <a href={`${item.link}`} target="_blank" className="">
//                         <HiLink className="mt-1" />
//                       </a>
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">
//                     {item.started}
//                   </td>
//                   <td className="px-4 py-4">
//                     {formattedDate(item.date)}
//                   </td>

//                   <td className="px-4 py-4">{item.quantity}</td>
//                   <td className="px-4 py-4">
//                     <span
//                       className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide ${item.status === "Completed"
//                         ? "bg-green-500 text-white"
//                         : item.status === "Pending"
//                           ? "bg-yellow-500 text-white"
//                           : item.status === "Canceled"
//                             ? "bg-red-500 text-white"
//                             : "bg-sky-500 text-white"
//                         }`}
//                     >
//                       {item.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex justify-between p-4">
//           <button
//             onClick={handlePreviousPage}
//             className="flex items-center text-sm text-main-color"
//             disabled={currentPage === 1}
//           >
//             <FaChevronLeft className="mr-2" />
//             Previous
//           </button>
//           <div className="text-sm">
//             Page {currentPage} of {totalPages}
//           </div>
//           <button
//             onClick={handleNextPage}
//             className="flex items-center text-sm text-main-color"
//             disabled={currentPage === totalPages}
//           >
//             Next
//             <FaChevronRight className="ml-2" />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Ordertable;








import React, { useState, useEffect } from "react";
import Data from "../../assets/Images/nodata.svg"; // No data icon
import { FiSearch } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios"; // Import Axios
import { HiLink } from "react-icons/hi";
import { useRef } from "react";
import InputField from "../components/InputField";
import { FaPlus } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";



const Ordertable = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [tableData, setTableData] = useState([]); // state for table data
  const [searchQuery, setSearchQuery] = useState(""); // New search state
  const [debouncedQuery, setDebouncedQuery] = useState(""); // For debounce effect
  const [startDate, setStartDate] = useState(null); // Track start date
  const [endDate, setEndDate] = useState(null); // Track end date
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Error state
  const scrollableRef = useRef(null);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const tabRefs = useRef([]); // Store references to each tab button.
  const [tabCounts, setTabCounts] = useState({
    All: 0,
    Pending: 0,
    "In Progress": 0,
    Completed: 0,
    Canceled: 0,
  }); // To keep dynamic counts of each status



  useEffect(() => {
    // Set the indicator position and width for the default active tab
    updateIndicator(0);
  }, []);

  const handleTabChange = (label, index) => {
    setActiveTab(label); // Update active tab
    updateIndicator(index); // Update the indicator's position and width
  };

  const updateIndicator = (index) => {
    const tab = tabRefs.current[index];
    if (tab) {
      setIndicatorWidth(tab.offsetWidth);
      setIndicatorLeft(tab.offsetLeft);
    }
  };

  const scrollLeft = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };



  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const totalPages = Math.ceil(tableData.length / rowsPerPage);
  const paginatedData = tableData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  useEffect(() => {
    if (searchQuery.trim() === "") return; // Avoid triggering debounce if query is empty
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          setError("Token missing or invalid.");
          return;
        }

        const response = await axios.get(
          `${API_BASE_URL}/auth/orders?timestamp=${new Date().getTime()}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        // const response = await axios.get(`${API_BASE_URL}/auth/orders`, {
        //   headers: { Authorization: `Bearer ${token}` },
        // });

        if (!Array.isArray(response.data)) {
          setError("Invalid data format.");
          return;
        }

        // Initialize originalData
        const originalData = response.data;

        // Filtering logic
        let filteredData = [...originalData];

        // Apply filters based on active tab, debouncedQuery, and dates
        filteredData = filteredData.filter((item) => {
          if (
            debouncedQuery &&
            !(
              item.orderId.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
              item.service.toLowerCase().includes(debouncedQuery.toLowerCase())
            )
          )
            return false;
          if (startDate && new Date(item.date) < new Date(startDate)) return false;
          if (endDate && new Date(item.date) > new Date(endDate)) return false;

          if (activeTab !== "All" && item.status !== activeTab) return false;

          return true;
        });

        // Sort the filtered data
        filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setTableData(filteredData);

        // Calculate tab counts based on originalData
        const tabCounts = {
          All: originalData.length,
          Pending: originalData.filter((item) => item.status === "Pending")
            .length,
          "In Progress": originalData.filter(
            (item) => item.status === "In Progress"
          ).length,
          Completed: originalData.filter((item) => item.status === "Completed")
            .length,
          Canceled: originalData.filter((item) => item.status === "Canceled")
            .length,
          Partial: originalData.filter((item) => item.status === "Partial")
            .length,
        };
        setTabCounts(tabCounts);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("There was an issue fetching the data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab, startDate, endDate, debouncedQuery]);


  function formattedDate(date) {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return 'No Date Provided';  // Return a default message if the date is invalid
    }
    return parsedDate.toLocaleDateString();  // Return the formatted date string
  }

  const tabs = [
    {
      label: "All",
      count: tabCounts["All"],
      color: "bg-[#919EAB29] text-para-color",
      colors: "bg-black text-white",
    },
    {
      label: "Pending",
      count: tabCounts["Pending"] || 0,
      color: "bg-[#FFAB0029] text-[#B76E00]",
      colors: "bg-[#FFAB00] text-[#212B36]",
    },
    {
      label: "In Progress",
      count: tabCounts["In Progress"] || 0,
      color: "bg-[#0ea5e92b] text-[#0ea5e9]",
      colors: "bg-[#0ea5e9] text-white",
    },
    {
      label: "Completed",
      count: tabCounts["Completed"] || 0,
      color: "bg-[#22C55E29] text-[#118D57]",
      colors: "bg-[#22C55E] text-white",
    },
    {
      label: "Partial",
      count: tabCounts["Partial"] || 0,
      color: "bg-[#919EAB29] text-para-color",
      colors: "bg-sub-color text-white",
    },
    {
      label: "Canceled",
      count: tabCounts["Canceled"] || 0,
      color: "bg-[#FF563029] text-[#B71D18]",
      colors: "bg-light-orange text-white",
    },
  ];
  const handleClearStatus = () => {
    setActiveTab("All");
    const allTabIndex = tabs.findIndex((tab) => tab.label === "All");
    updateIndicator(allTabIndex); // Update indicator for the "All" tab
  };
  
  return (
    <div className="mb-4 border rounded-small">
      <h1 className="p-4 font-semibold text-sub-color lg:text-basic">
        Your past upvote orders:
      </h1>

      {/* Tabs table */}
      <div className="relative flex items-center border rounded-sm border-gray-300/50 shadow-main">
        {/* Left Icon */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-0 p-2 rounded-full lg:hidden"
        >
          <FaChevronLeft className="h-3" />
        </button>

        {/* Tabs table */}
        <div className="relative flex items-center justify-center mx-6 overflow-hidden lg:mx-2">
          {/* Tabs Container */}
          <div
            ref={scrollableRef}
            className="relative flex items-center overflow-hidden tabs-scrollable lg:gap-6 scroll-smooth"
          >
            {/* Active Tab Indicator */}
            <div
              className="absolute bottom-0 h-0.5 bg-main-color transition-all duration-300 w-[calc(100%-40px)]"
              style={{
                width: `${indicatorWidth}px`,
                left: `${indicatorLeft}px`,
              }}
            ></div>

            {tabs.map((tab, index) => (
              <button
                key={tab.label}
                onClick={() => handleTabChange(tab.label, index)}
                className={`relative p-3.5 font-bold text-sm whitespace-nowrap ${activeTab === tab.label ? "text-main-color" : "text-sub-color"
                  }`}
                ref={(el) => (tabRefs.current[index] = el)}
              >
                {tab.label}
                <span
                  className={`ml-2 px-2 py-1 rounded text-xs font-bold ${activeTab === tab.label ? tab.colors : tab.color
                    }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Icon */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-0 p-2 rounded-full lg:hidden"
        >
          <FaChevronRight className="h-3" />
        </button>
      </div>

      {/* Filter Section */}
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

      <div className="flex space-x-2">
        {/* Status Check Section */}
        {activeTab !== "All" && (
          <div className="p-2">
            <div className="flex items-center p-2 space-x-2 border border-dashed rounded-medium">
              <h1 className="font-medium text-sub-color">Status : </h1>
              <button
        onClick={() => {
          handleTabChange("All", 0); // Reset active tab to "All" and update the indicator
        }}
        className="flex items-center px-2 py-1 text-xs text-white transition-all duration-300 ease-in rounded-full bg-sub-color hover:bg-slate-500/50"
      >
                {activeTab}
                {/* Close Icon */}
                <div className="flex items-center justify-center ml-2 bg-white rounded-full size-5">
                  <FaPlus className="h-3 text-gray-500 rotate-45" />
                </div>
              </button>
            </div>
          </div>
        )}
        {activeTab !== "All" && (
          <div
            className="flex items-center cursor-pointer"
            onClick={handleClearStatus}
          >
            <FaTrashAlt className="size-5 text-light-orange" />
            <h1 className="ml-2 font-bold text-small text-light-orange">
              Clear
            </h1>
          </div>
        )}
      </div>

      {/* Table Section */}
      <div className="table-scrollable">
        <table className="w-full border-collapse table-auto table-main">
          <thead className="capitalize text-small bg-gray-light text-sub-color">
            <tr>
              <th>Order #</th>
              <th>Details</th>
              <th>Started</th>
              <th>Date</th>
              <th>Total Votes</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="py-20 text-center text-gray-400">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-t-4 border-solid rounded-full border-main-color animate-spin"></div>
                  </div>
                </td>
              </tr>
            ) : tableData.length === 0 ? (
              <tr>
                <td colSpan="6" className="py-20 text-center text-gray-400">
                  <div className="flex flex-col items-center">
                    <img src={Data} alt="No Data" className="h-40" />
                    <p className="mt-4 text-lg font-medium">
                      No Data Available
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              paginatedData.map((item, index) => (
                <tr key={`${item.orderId}-${index}`}>
                  <td className="px-6 py-4">{item.orderId.substring(0, 4)}</td>
                  <td className="gap-3 px-6 py-2 ">
                    <span className="flex gap-2">
                      {item.service}
                      <a href={`${item.link}`} target="_blank" className="">
                        <HiLink className="mt-1" />
                      </a>
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {item.started}
                  </td>
                  <td className="px-4 py-4">
                    {formattedDate(item.date)}
                  </td>

                  <td className="px-4 py-4">{item.quantity}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide ${item.status === "Completed"
                        ? "bg-green-500 text-white"
                        : item.status === "Pending"
                          ? "bg-yellow-500 text-white"
                          : item.status === "Canceled"
                            ? "bg-red-500 text-white"
                            : "bg-sky-500 text-white"
                        }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-between p-4">
          <button
            onClick={handlePreviousPage}
            className="flex items-center text-sm text-main-color"
            disabled={currentPage === 1}
          >
            <FaChevronLeft className="mr-2" />
            Previous
          </button>
          <div className="text-sm">
            Page {currentPage} of {totalPages}
          </div>
          <button
            onClick={handleNextPage}
            className="flex items-center text-sm text-main-color"
            disabled={currentPage === totalPages}
          >
            Next
            <FaChevronRight className="ml-2" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Ordertable;



// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { FiSearch } from "react-icons/fi";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { HiLink } from "react-icons/hi";
// import { FaPlus, FaTrashAlt } from "react-icons/fa";
// import InputField from "../components/InputField";
// import Data from "../../assets/Images/nodata.svg";

// const OrderTable = () => {
//   const [activeTab, setActiveTab] = useState("All");
//   const [tableData, setTableData] = useState([]);
//   const [originalData, setOriginalData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [tabCounts, setTabCounts] = useState({});
//   const [debouncedQuery, setDebouncedQuery] = useState("");

//   const tabs = [
//     "All",
//     "Pending",
//     "In Progress",
//     "Completed",
//     "Canceled",
//     "Partial",
//   ];

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     // Debounce search query to avoid excessive API calls
//     const debounceTimer = setTimeout(() => {
//       setDebouncedQuery(searchQuery);
//     }, 500);

//     return () => clearTimeout(debounceTimer);
//   }, [searchQuery]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       setLoading(true);
//       setError(null);
  
//       try {
//         const token = localStorage.getItem("authToken");
//         if (!token) throw new Error("User not authenticated.");
  
//         const response = await axios.get(`${API_BASE_URL}/auth/orders`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
  
//         console.log("API Response:", response);
  
//         // Check if the response contains a message indicating no orders
//         if (response.data.message && response.data.message === "No orders found for this user.") {
//           console.warn("No orders found for the user:", response.data.message);
//           setOriginalData([]); // Set originalData to an empty array
//           setTableData([]); // Clear table data
//           calculateTabCounts([]); // Update tab counts with empty data
//           return;
//         }
  
//         // Check if response.data is an array of orders
//         if (Array.isArray(response.data)) {
//           setOriginalData(response.data);
//           filterAndSetData(response.data);
//         } else {
//           throw new Error("Unexpected API response format.");
//         }
//       } catch (err) {
//         console.error("Error fetching orders:", err.message);
//         setError(err.message || "Error fetching data.");
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchOrders();
//   }, [activeTab, startDate, endDate, debouncedQuery]);
  



//   const filterAndSetData = (data) => {
//     let filtered = [...data];

//     if (debouncedQuery) {
//       filtered = filtered.filter((item) =>
//         ["orderId", "service"]
//           .some((key) =>
//             item[key]?.toString().toLowerCase().includes(debouncedQuery.toLowerCase())
//           )
//       );
//     }

//     if (startDate) {
//       filtered = filtered.filter((item) => new Date(item.date) >= new Date(startDate));
//     }

//     if (endDate) {
//       filtered = filtered.filter((item) => new Date(item.date) <= new Date(endDate));
//     }

//     if (activeTab !== "All") {
//       filtered = filtered.filter((item) => item.status === activeTab);
//     }

//     // Sort by date descending
//     filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

//     setTableData(filtered);
//     calculateTabCounts(data);
//   };

//   const calculateTabCounts = (data) => {
//     const counts = tabs.reduce((acc, tab) => {
//       acc[tab] = tab === "All" ? data.length : data.filter((item) => item.status === tab).length;
//       return acc;
//     }, {});
//     setTabCounts(counts);
//   };

//   const formattedDate = (date) => {
//     const parsedDate = new Date(date);
//     return isNaN(parsedDate.getTime()) ? "No Date" : parsedDate.toLocaleDateString();
//   };

//   const paginatedData = tableData.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

//   const totalPages = Math.ceil(tableData.length / rowsPerPage);

//   return (
//     <div className="order-table-container">
//       <h1 className="header">Your Orders</h1>

//       {/* Tabs */}
//       <div className="tabs-container">
//         {tabs.map((tab, index) => (
//           <button
//             key={tab}
//             className={`tab-button ${activeTab === tab ? "active" : ""}`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab} ({tabCounts[tab] || 0})
//           </button>
//         ))}
//       </div>

//       {/* Filters */}
//       <div className="filters">
//         <InputField
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//         />
//         <InputField
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//         />
//         <InputField
//           type="text"
//           placeholder="Search..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* Table */}
//       <table>
//         <thead>
//           <tr>
//             <th>Order #</th>
//             <th>Service</th>
//             <th>Date</th>
//             <th>Quantity</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {loading ? (
//             <tr>
//               <td colSpan="5">Loading...</td>
//             </tr>
//           ) : error ? (
//             <tr>
//               <td colSpan="5" style={{ color: "red" }}>{error}</td>
//             </tr>
//           ) : paginatedData.length ? (
//             paginatedData.map((order) => (
//               <tr key={order.orderId}>
//                 <td>{order.orderId}</td>
//                 <td>{order.service}</td>
//                 <td>{formattedDate(order.date)}</td>
//                 <td>{order.quantity}</td>
//                 <td>{order.status}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5">No Orders Found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="pagination">
//           <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>
//             <FaChevronLeft />
//           </button>
//           Page {currentPage} of {totalPages}
//           <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((prev) => prev + 1)}>
//             <FaChevronRight />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderTable;
