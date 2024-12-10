import React, { useState, useEffect } from "react";
import Data from "../../assets/Images/nodata.svg"; // No data icon
import { FiSearch } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CommentTable = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
    // More sample data...
  ];

  const filteredData = sampleData.filter((item) => {
    if (activeTab !== "All" && item.status !== activeTab) return false;
    if (
      searchQuery &&
      !item.details.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    if (startDate && new Date(item.date) < new Date(startDate)) return false;
    if (endDate && new Date(item.date) > new Date(endDate)) return false;
    return true;
  });

  return (
    <div className="p-6 max-h-screen">
      <h1 className="py-2 text-sub-color font-bold text-basic">
        Your past upvote orders:
      </h1>
      <div className="flex items-center shadow-sm border border-gray-border">
        {["All", "Pending", "In Progress", "Completed", "Canceled"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative p-3 font-bold text-sm mr-4 ${
                activeTab === tab
                  ? "text-main-color border-b-2 border-main-color"
                  : "text-sub-color"
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>


      <div className="flex flex-wrap items-center gap-4 py-4 border border-gray-border p-2">
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded-full hover:border-black transition-all ease-in duration-150 px-6 py-2 text-black"
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded-full hover:border-black transition-all ease-in duration-150 px-6 py-2 text-black"
          />
        </div>
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

      <div className="py-2">
        <h1 className="text-sub-color">
          <span className="text-sub-color font-black">
            {filteredData.length}
          </span>{" "}
          Results found
        </h1>
      </div>

      <div className="bg-white rounded-md shadow-md overflow-hidden h-auto max-h-screen">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-100 text-sub-color text-xs font-medium uppercase">
            <tr className="border-b">
              <th className="py-3 px-4 text-left">Order #</th>
              <th className="py-3 px-4 text-left">Message</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Votes</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : ""
                  }`}
                >
                  <td className="py-3 px-4">{row.orderNumber}</td>
                  <td className="py-3 px-4">{row.details}</td>
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
                <td colSpan="5" className="text-center text-gray-400 py-20">
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
    </div>
  );
};

export default CommentTable; 
