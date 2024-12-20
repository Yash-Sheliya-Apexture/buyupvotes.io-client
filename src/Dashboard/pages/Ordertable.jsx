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

const Ordertable = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [tableData, setTableData] = useState([]); // state for table data
  const [searchQuery, setSearchQuery] = useState(""); // New search state
  const [debouncedQuery, setDebouncedQuery] = useState(""); // For debounce effect
  const [startDate, setStartDate] = useState(""); // Track start date
  const [endDate, setEndDate] = useState(""); // Track end date
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Error state
  const scrollableRef = useRef(null);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const tabRefs = useRef([]); // Store references to each tab button.

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

  const [tabCounts, setTabCounts] = useState({
    All: 0,
    Pending: 0,
    "In Progress": 0,
    Completed: 0,
    Canceled: 0,
  }); // To keep dynamic counts of each status

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
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      setError(null); // Clear previous errors

      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(`${API_BASE_URL}/auth/orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        let filteredData = response.data;

        // Filter data based on the active tab
        if (activeTab !== "All") {
          filteredData = filteredData.filter(
            (item) => item.status === activeTab
          );
        }

        // Filter data based on the search query (only `orderId` and `service`)
        if (debouncedQuery) {
          filteredData = filteredData.filter(
            (item) =>
              item.orderId
                .toLowerCase()
                .includes(debouncedQuery.toLowerCase()) ||
              item.service.toLowerCase().includes(debouncedQuery.toLowerCase())
          );
        }

        // Filter by date range
        if (startDate) {
          filteredData = filteredData.filter(
            (item) => new Date(item.date) >= new Date(startDate)
          );
        }
        if (endDate) {
          filteredData = filteredData.filter(
            (item) => new Date(item.date) <= new Date(endDate)
          );
        }

        // Sort data by date in descending order (latest first)
        filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Update table data
        setTableData(filteredData);

        // Update tab counts
        setTabCounts((prevCounts) => ({
          ...prevCounts,
          All: response.data.length,
          Pending: response.data.filter((item) => item.status === "Pending")
            .length,
          "In Progress": response.data.filter(
            (item) => item.status === "In Progress"
          ).length,
          Completed: response.data.filter((item) => item.status === "Completed")
            .length,
          Canceled: response.data.filter((item) => item.status === "Canceled")
            .length,
        }));
      } catch (error) {
        setError(
          "There was an issue fetching the data. Please try again later."
        );
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, [activeTab, startDate, endDate, debouncedQuery]);

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

  return (
    <div className="mb-4 border rounded-small">
      <h1 className="p-4 font-semibold text-sub-color lg:text-basic">
        Your past upvote orders:
      </h1>

      {/* Tabs table */}
      <div className="relative flex items-center border border-gray-300/50 shadow-main rounded-sm ">
        {/* Left Icon */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-0 p-2 rounded-full lg:hidden"
        >
          <FaChevronLeft className="h-3" />
        </button>

        {/* Tabs table */}
        <div className="relative flex justify-center items-center mx-6 lg:mx-2 overflow-hidden">
          {/* Tabs Container */}
          <div
            ref={scrollableRef}
            className="tabs-scrollable relative flex items-center lg:gap-6 overflow-hidden scroll-smooth"
          >
            {/* Active Tab Indicator */}
            <div
              className="absolute bottom-0 h-0.5 bg-main-color transition-all duration-300"
              style={{
                width: `${indicatorWidth}px`,
                left: `${indicatorLeft}px`,
              }}
            ></div>

            {tabs.map((tab, index) => (
              <button
                key={tab.label}
                onClick={() => handleTabChange(tab.label, index)}
                className={`relative p-3.5 font-bold text-sm whitespace-nowrap ${
                  activeTab === tab.label ? "text-main-color" : "text-sub-color"
                }`}
                ref={(el) => (tabRefs.current[index] = el)}
              >
                {tab.label}
                <span
                  className={`ml-2 px-2 py-1 rounded text-xs font-bold ${
                    activeTab === tab.label ? tab.colors : tab.color
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
      <div className="flex flex-wrap items-center gap-3 p-2 py-3 w-full border border-gray-border">
        {/* Start Date */}
        <div className="gap-2 w-full lg:w-auto">
          <InputField
            name="Date"
            type="date" 
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        {/* End Date */}
        <div className="gap-2 w-full lg:w-auto">
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
            placeholder="search by subreddit names..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FiSearch className="absolute top-3 right-3 size-5 text-sub-color" />
        </div>
      </div>

      <div className="flex space-x-2">
        {/* Status Check Section */}
        {activeTab !== "All" && (
          <div className="p-2">
            <div className="flex items-center space-x-2 p-2 border rounded-medium border-dashed">
              <h1 className="text-sub-color font-medium">Status : </h1>
              <button
                onClick={() => handleTabChange("All")} // Set active tab to "All" on click
                className="px-2 py-1 flex items-center bg-sub-color rounded-full text-white text-xs hover:bg-slate-500/50 transition-all ease-in duration-300"
              >
                {activeTab}
                {/* Close Icon */}
                <div className="size-5 bg-white rounded-full ml-2 flex items-center justify-center">
                  <FaPlus className="h-3 text-gray-500 rotate-45" />
                </div>
              </button>
            </div>
          </div>
        )}
        {activeTab !== "All" && (
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setActiveTab("All")}
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
          <thead className="text-small capitalize bg-gray-light text-sub-color">
            <tr>
              <th>Order #</th>
              <th>Details</th>
              <th>Progress</th>
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
                  <td className="px-4 py-4">{item.orderId.substring(0, 4)}</td>
                  <td className="gap-3 px-4 py-2 ">
                    <span className="flex gap-2">
                      {item.service}
                      <a href={`${item.link}`} target="_blank" className="">
                        <HiLink className="mt-1" />
                      </a>
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-1 items-center">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          item.progress === 100 ? "bg-green-500" : "bg-sky-500"
                        }`}
                        style={{
                          width: `${item.progress}%`,
                          height: "3px",
                        }}
                      ></div>
                      <span className="text-small font-medium text-sub-color">
                        {item.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    {new Intl.DateTimeFormat("en-US", {
                      month: "2-digit",
                      day: "2-digit",
                      year: "numeric",
                    }).format(new Date(item.date))}
                  </td>
                  <td className="px-4 py-4">{item.quantity}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide ${
                        item.status === "Completed"
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
