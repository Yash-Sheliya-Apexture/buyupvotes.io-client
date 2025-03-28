import React, { useState, useEffect } from "react";
import Data from "../../assets/Images/nodata.svg"; // No data icon
import { FiSearch } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const CommentTable = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [tableData, setTableData] = useState([]); // state for table data
  const [searchQuery, setSearchQuery] = useState(""); // New search state
  const [debouncedQuery, setDebouncedQuery] = useState(""); // For debounce effect
  const [startDate, setStartDate] = useState(""); // Track start date
  const [endDate, setEndDate] = useState(""); // Track end date
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  const tabs = [
    {
      label: "All",
      count: 10,
      color: "bg-[#919EAB29] text-para-color",
      colors: "bg-black text-white",
    },
    {
      label: "Pending",
      count: 2,
      color: "bg-[#FFAB0029] text-[#B76E00]",
      colors: "bg-[#FFAB00] text-[#212B36]",
    },
    {
      label: "In Progress",
      count: 1,
      color: "bg-[#22C55E29] text-[#118D57]",
      colors: "bg-[#22C55E] text-white",
    },
    {
      label: "Completed",
      count: 0,
      color: "bg-[#22C55E29] text-[#118D57]",
      colors: "bg-[#22C55E] text-white",
    },
    {
      label: "Canceled",
      count: 0,
      color: "bg-[#FF563029] text-[#B71D18]",
      colors: "bg-light-orange text-white",
    },
  ];

  // Sample data (You can replace it with API data)
  const sampleData = [
    {
      orderNumber: "101",
      details: "iPhone 9",
      progress: "50%",
      date: "2024-12-05",
      totalVotes: 100,
      status: "In Progress",
    },
    {
      orderNumber: "103",
      details: "OppoF19",
      progress: "25%",
      date: "2024-12-03",
      totalVotes: 50,
      status: "Pending",
    },
    {
      orderNumber: "110",
      details: "Google pixel 9",
      progress: "10%",
      date: "2024-11-26",
      totalVotes: 20,
      status: "Pending",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Filter data based on active tab and search query
  useEffect(() => {
    let filteredData = sampleData;

    if (activeTab !== "All") {
      filteredData = filteredData.filter((item) => item.status === activeTab);
    }

    if (debouncedQuery) {
      filteredData = filteredData.filter(
        (item) =>
          item.details.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
          item.details.toUpperCase().includes(debouncedQuery.toUpperCase()) ||
          item.orderNumber.toLowerCase().includes(debouncedQuery.toLowerCase())
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

    setTableData(filteredData);
  }, [activeTab, debouncedQuery, startDate, endDate]);

  // Simulating fetching data based on the tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);

    // Update tableData based on active tab (just a mock for now)
    if (tab === "All") {
      setTableData(sampleData); // Show all data
    } else {
      // Filter data based on the tab
      setTableData(sampleData.filter((item) => item.status === tab));
    }
  };

  return (
    <div className="max-h-screen p-6">
      <h1 className="py-2 font-bold text-sub-color text-basic">
        Your past upvote orders:
      </h1>

      {/* Tabs */}
      <div className="flex items-center border shadow-sm border-gray-border">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => handleTabChange(tab.label)}
            className={`relative p-3 font-bold text-sm mr-4 ${
              activeTab === tab.label
                ? "text-main-color border-b-2 border-main-color"
                : "text-sub-color"
            }`}
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

      {/* Filter Section */}
      <div className="flex flex-wrap items-center gap-4 p-2 py-4 border border-gray-border">
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

        {/* Search Product `*/}
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search Product Name or Order #..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-10 py-2 transition-all duration-150 ease-in border rounded-full hover:border-black text-sub-color"
          />
          <FiSearch className="absolute top-3 left-3 size-5 text-light-gray" />
        </div>
      </div>

      {/* Order Result */}
      <div className="py-2">
        <h1 className="text-sub-color">
<<<<<<< HEAD
          <span className="font-black text-sub-color">{tableData.length}</span>
=======
          <span className="text-sub-color font-bold">{tableData.length}</span>
>>>>>>> client
          {tableData.length === 1 ? " Result found" : " Results found"}
          {activeTab !== "All" && (
            <span className="ml-2 font-normal text-sub-color">
              (Filtered by <span className="font-bold">{activeTab}</span>)
            </span>
          )}
        </h1>
      </div>

      <div className="flex space-x-4">
        {/* Status Check Section - Show for tabs other than "All" */}
        {activeTab !== "All" && (
          <div className="mb-2 flex items-center space-x-2 border border-dashed w-48 p-1.5">
            <h1 className="text-sub-color">Status :</h1>
            <button
              onClick={() => handleTabChange("All")} // Set active tab to "All" on click
              className="px-2 py-1 flex bg-sub-color rounded-full text-white text-[14px] hover:bg-light-gray transition-all ease-in duration-150 font-bold"
            >
              {activeTab}
              {/* Close Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                viewBox="0 0 24 24"
                className="ml-1 size-6"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        )}

        {activeTab !== "All" && (
          <div
            className="flex items-center mb-2 cursor-pointer"
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
                clip-rule="evenodd"
              ></path>
            </svg>
            <h1 className="ml-2 font-bold text-small text-light-orange">
              Clear
            </h1>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="h-auto max-h-screen overflow-hidden bg-white rounded-md shadow-md">
        <table className="w-full border-collapse table-auto">
          <thead className="text-xs font-medium uppercase bg-gray-100 text-sub-color">
            <tr className="border-b">
              <th className="px-4 py-3 text-left">Order #</th>
              <th className="px-4 py-3 text-left">Massage</th>
              <th className="px-4 py-3 text-left">Quantity</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : ""
                  }`}
                >
                  <td className="px-4 py-3">{row.orderNumber}</td>
                  <td className="px-4 py-3">{row.details}</td>
                  <td className="px-4 py-3">{row.progress}</td>
                  <td className="px-4 py-3">{row.date}</td>
                  <td className="px-4 py-3">{row.totalVotes}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide ${
                        row.status === "Completed"
                          ? "bg-green-500 text-white"
                          : row.status === "Pending"
                          ? "bg-yellow-500 text-white"
                          : row.status === "Canceled"
                          ? "bg-red-500 text-white"
                          : "bg-sky-500 text-white"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-20 text-center text-gray-400">
                  <div className="flex flex-col items-center">
                    <img src={Data} alt="No Data" className="h-40" />
                    <p className="mt-4 text-lg font-bold">No Data Available</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-end p-4 space-x-5 bg-white border border-gray-border">
        <span className="text-sm text-sub-color">
          Rows per page:
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="rounded-md outline-none text-sub-color text-small"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
          </select>
        </span>
        <span className="text-sm text-sub-color">
          {Math.min((currentPage - 1) * rowsPerPage + 1, tableData.length)}-
          {Math.min(currentPage * rowsPerPage, tableData.length)} of{" "}
          {tableData.length}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={currentPage === 1 ? "opacity-50" : ""}
          >
            <FaChevronLeft className="size-5" />
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={currentPage === totalPages ? "opacity-50" : ""}
          >
            <FaChevronRight className="size-5" />
          </button>
        </div>
      </div>

      {/* Pagination */}
    </div>
  );
};

export default CommentTable;
