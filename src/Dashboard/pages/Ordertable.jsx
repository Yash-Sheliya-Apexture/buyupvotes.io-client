import React, { useState, useEffect } from "react";
import Data from "../../assets/Images/nodata.svg"; // No data icon
import { FiSearch } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios"; // Import Axios
import { HiLink } from "react-icons/hi";

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
          filteredData = filteredData.filter((item) => item.status === activeTab);
        }

        // Filter data based on the search query (only `orderId` and `service`)
        if (debouncedQuery) {
          filteredData = filteredData.filter(
            (item) =>
              item.orderId.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
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
          Pending: response.data.filter((item) => item.status === "Pending").length,
          "In Progress": response.data.filter((item) => item.status === "In Progress").length,
          Completed: response.data.filter((item) => item.status === "Completed").length,
          Canceled: response.data.filter((item) => item.status === "Canceled").length,
        }));
      } catch (error) {
        setError("There was an issue fetching the data. Please try again later.");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, [activeTab, startDate, endDate, debouncedQuery]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    { label: "All", count: tabCounts["All"], color: "bg-[#919EAB29] text-para-color", colors: "bg-black text-white" },
    { label: "Pending", count: tabCounts["Pending"] || 0, color: "bg-[#FFAB0029] text-[#B76E00]", colors: "bg-[#FFAB00] text-[#212B36]" },
    { label: "In Progress", count: tabCounts["In Progress"] || 0, color: "bg-[#0ea5e92b] text-[#0ea5e9]", colors: "bg-[#0ea5e9] text-white" },
    { label: "Completed", count: tabCounts["Completed"] || 0, color: "bg-[#22C55E29] text-[#118D57]", colors: "bg-[#22C55E] text-white" },
    { label: "Partial", count: tabCounts["Partial"] || 0, color: "bg-[#919EAB29] text-para-color", colors: "bg-sub-color text-white" },
    { label: "Canceled", count: tabCounts["Canceled"] || 0, color: "bg-[#FF563029] text-[#B71D18]", colors: "bg-light-orange text-white" },
  ];

  return (
    <div className="mb-4 border rounded-2xl">
      <h1 className="p-4 font-bold text-sub-color text-basic">
        Your past upvote orders:
      </h1>

      {/* Tabs */}
      <div className="flex items-center border border-gray-border">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => handleTabChange(tab.label)}
            className={`relative p-3 font-bold text-sm mr-4 ${activeTab === tab.label
              ? "text-main-color border-b-2 border-main-color"
              : "text-sub-color"
              }`}
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

      {/* Filter Section */}
      <div className="flex flex-wrap items-center gap-4 p-3 py-4 border border-gray-border">
        {/* Start Date */}
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="px-6 py-2 text-black transition-all duration-150 ease-in border rounded-full hover:border-black"
          />
        </div>
        {/* End Date */}
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="px-6 py-2 text-black transition-all duration-150 ease-in border rounded-full hover:border-black"
          />
        </div>

        {/* Search Product */}
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search Details or Order #..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-10 py-2 transition-all duration-150 ease-in border rounded-full hover:border-black text-sub-color"
          />
          <FiSearch className="absolute top-3 left-3 size-5 text-light-gray" />
        </div>
      </div>

      <div className="flex space-x-4">
        {/* Status Check Section */}
        {activeTab !== "All" && (
          <div className="flex items-center space-x-2 w-50 p-1.5">
            <h1 className="text-sub-color">Status </h1>
            <button
              onClick={() => handleTabChange("All")} // Set active tab to "All" on click
              className="px-2 py-1 flex bg-sub-color rounded-full text-white text-[14px] hover:bg-light-gray transition-all ease-in duration-150"
            >
              {activeTab}
              {/* Close Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                viewBox="0 0 24 24"
                width="1.5em"
                height="1.5em"
                preserveAspectRatio="xMidYMid meet"
                className="ml-2"
              >
                <g>
                  <path
                    fill="none"
                    d="M0 0h24v24H0z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 10.586L15.657 7.929l1.414 1.414L13.414 12l3.657 3.657-1.414 1.414L12 13.414l-3.657 3.657-1.414-1.414L10.586 12 7.929 8.343l1.414-1.414z"
                  />
                </g>
              </svg>
            </button>
          </div>
        )}
        {activeTab !== "All" && (
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setActiveTab("All")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              viewBox="0 0 24 24"
              className="size-6 text-light-orange"
            >
              <path
                fill="currentColor"
                d="M3 6.386c0-.484.345-.877.771-.877h2.665c.529-.016.996-.399 1.176-.965l.03-.1l.115-.391c.07-.24.131-.45.217-.637c.338-.739.964-1.252 1.687-1.383c.184-.033.378-.033.6-.033h3.478c.223 0 .417 0 .6.033c.723.131 1.35.644 1.687 1.383c.086.187.147.396.218.637l.114.391l.03.1c.18.566.74.95 1.27.965h2.57c.427 0 .772.393.772.877s-.345.877-.771.877H3.77c-.425 0-.77-.393-.77-.877"
              ></path>
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.339 1.181-5.245l.267-4.188c.1-1.577.15-2.366-.303-2.865c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.288-.303 2.865l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.043.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.043-.713-.43-.672-.864l.5-5.263c.04-.434.409-.75.82-.707"
                clipRule="evenodd"
              ></path>
            </svg>
            <h1 className="ml-2 font-bold text-small text-light-orange">
              Clear
            </h1>
          </div>
        )}
      </div>

      {/* Table Section */}
      <div className="h-auto max-h-screen overflow-hidden">
        <table className="w-full border-collapse table-auto">
          <thead className="text-xs font-medium uppercase bg-gray-100 text-sub-color">
            <tr>
              <th className="px-4 py-3 text-left">Order #</th>
              <th className="px-4 py-3 text-left">Details</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Total Votes</th>
              <th className="px-4 py-3 text-left">Status</th>
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
                    <p className="mt-4 text-lg font-bold">No Data Available</p>
                  </div>
                </td>
              </tr>
            ) : (
              paginatedData.map((item, index) => (
                <tr key={`${item.orderId}-${index}`}>
                  <td className="px-4 py-4">{item.orderId.substring(0, 4)}</td>
                  <td className="gap-3 px-4 py-2 "><span className="flex gap-2">{item.service}<a href={`${item.link}`} target="_blank" className=""><HiLink className="mt-1" /></a></span></td>
                  <td className="px-4 py-4">
                    {new Intl.DateTimeFormat("en-US", { month: "2-digit", day: "2-digit", year: "numeric" }).format(new Date(item.date))}
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
