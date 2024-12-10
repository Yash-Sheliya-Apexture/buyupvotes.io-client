import React, { useState, useEffect } from "react";
import Data from "../../assets/Images/nodata.svg"; // No data icon
import { FiSearch } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Ordertable = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [tableData, setTableData] = useState([]); // state for table data
  const [searchQuery, setSearchQuery] = useState(""); // New search state
  const [debouncedQuery, setDebouncedQuery] = useState(""); // For debounce effect
  const [startDate, setStartDate] = useState(""); // Track start date
  const [endDate, setEndDate] = useState(""); // Track end date
  
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
      count: 2,
      color: "bg-[#22C55E29] text-[#118D57]",
      colors: "bg-[#22C55E] text-white",
    },
    {
      label: "Completed",
      count: 3,
      color: "bg-[#22C55E29] text-[#118D57]",
      colors: "bg-[#22C55E] text-white",
    },
    {
      label: "Partial",
      count: 1,
      color: "bg-[#919EAB29] text-para-color",
      colors: "bg-sub-color text-white",
    },
    {
      label: "Canceled",
      count: 2,
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
      orderNumber: "102",
      details: "Samsung Universe 9",
      progress: "100%",
      date: "2024-12-04",
      totalVotes: 200,
      status: "Completed",
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
      orderNumber: "104",
      details: "Huawei P30",
      progress: "0%",
      date: "2024-12-02",
      totalVotes: 0,
      status: "Canceled",
    },
    {
      orderNumber: "105",
      details: "MacBook Pro",
      progress: "75%",
      date: "2024-12-01",
      totalVotes: 150,
      status: "In Progress",
    },
    {
      orderNumber: "106",
      details: "Microsoft Surface Laptop 4",
      progress: "100%",
      date: "2024-11-30",
      totalVotes: 300,
      status: "Completed",
    },
    {
      orderNumber: "107",
      details: "Infinix Book",
      progress: "50%",
      date: "2024-11-29",
      totalVotes: 100,
      status: "Partial",
    },
    {
      orderNumber: "108",
      details: "HP Pavilion 15-DK1056W",
      progress: "0%",
      date: "2024-11-28",
      totalVotes: 0,
      status: "Canceled",
    },
    {
      orderNumber: "109",
      details: "RealmeXT",
      progress: "100%",
      date: "2024-11-27",
      totalVotes: 500,
      status: "Completed",
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
    <div className="p-6 max-h-screen">
      <h1 className="py-2 text-sub-color font-bold text-basic">
        Your past upvote orders:
      </h1>

      {/* Tabs */}
      <div className="flex items-center shadow-sm border border-gray-border">
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
      <div className="flex flex-wrap items-center gap-4 py-4 border border-gray-border p-2">
        {/* Start Date */}
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded-full hover:border-black transition-all ease-in duration-150 px-6 py-2 text-black"
          />
        </div>
        {/* End Date */}
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded-full hover:border-black transition-all ease-in duration-150 px-6 py-2 text-black"
          />
        </div>

        {/* Search Product `*/}
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="Search Product Name or Order #..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border rounded-full hover:border-black transition-all ease-in duration-150 py-2 px-10 text-sub-color"
          />
          <FiSearch className="absolute top-3 left-3 size-5 text-light-gray" />
        </div>
      </div>

      {/* Order Result */}
      <div className="py-2">
        <h1 className="text-sub-color">
          <span className="text-sub-color font-black">{tableData.length}</span>
          {tableData.length === 1 ? " Result found" : " Results found"}
          {activeTab !== "All" && (
            <span className="text-sub-color font-normal ml-2">
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
                className="size-6 ml-1"
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
              xmlns:xlink="http://www.w3.org/1999/xlink"
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
                fill-rule="evenodd"
                d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.339 1.181-5.245l.267-4.188c.1-1.577.15-2.366-.303-2.865c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.288-.303 2.865l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.043.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.043-.713-.43-.672-.864l.5-5.263c.04-.434.409-.75.82-.707"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h1 className="ml-2 text-small font-bold text-light-orange">
              Clear
            </h1>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-md shadow-md overflow-hidden h-auto max-h-screen">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-100 text-sub-color text-xs font-medium uppercase">
            <tr className="border-b">
              <th className="py-3 px-4 text-left">Order #</th>
              <th className="py-3 px-4 text-left">Details</th>
              <th className="py-3 px-4 text-left">Progress</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Total Votes</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.length > 0 ? (
              tableData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : ""
                  }`}
                >
                  <td className="py-3 px-4">{row.orderNumber}</td>
                  <td className="py-3 px-4">{row.details}</td>
                  <td className="py-3 px-4">{row.progress}</td>
                  <td className="py-3 px-4">{row.date}</td>
                  <td className="py-3 px-4">{row.totalVotes}</td>
                  <td className="py-3 px-4">
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
                <td colSpan="6" className="text-center text-gray-400 py-20">
                  <div className="flex flex-col items-center">
                    <img src={Data} alt="No Data" className="h-40" />
                    <p className="text-lg font-bold mt-4">No Data Available</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end space-x-5 items-center p-4 bg-white border border-gray-border">
        <span className="text-sm text-sub-color">
          Rows per page:{" "}
          <select className="rounded-md text-sub-color outline-none text-small">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
          </select>
        </span>

        <span className="text-sm text-sub-color">0-0 of 0</span>
        <div className="flex items-center gap-2">
          <button>
            <FaChevronLeft className="size-5 text-light-gray" />
          </button>
          <button className="">
            <FaChevronRight className="size-5 text-light-gray" />
          </button>
        </div>
      </div>
      {/* Pagination */}
    </div>
  );
};

export default Ordertable;
