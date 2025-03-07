
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaPlus, FaTrashAlt } from "react-icons/fa"; // Import specific icons
import "react-datepicker/dist/react-datepicker.css";
import OrderTableTabs from "./OrderTableTabs";
import OrderTableDesign from "./OrderTableDesign";
import OrderTableFilters from "./OrderTableFilters";
import OrderTablePagination from "./OrderTablePagination";
import moment from 'moment'; // Import moment.js
import TokenService from "../../../utils/TokenService"; // Import TokenService

const OrderTable = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [tableData, setTableData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tabCounts, setTabCounts] = useState({
        All: 0,
        Pending: 0,
        "In Progress": 0,
        Completed: 0,
        Canceled: 0,
        Partial: 0,
    });
    const tabRefs = useRef([]);

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

    useEffect(() => {
        if (searchQuery.trim() === "") {
            setDebouncedQuery(""); // Clear debounced query when input is empty
            return;
        }
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
                const token = TokenService.getToken();
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

                if (!Array.isArray(response.data)) {
                    setError("Invalid data format.");
                    return;
                }
                const originalData = response.data;

                let filteredData = [...originalData];

                filteredData = filteredData.filter((item) => {
                    if (
                        debouncedQuery &&
                        !(
                            item.orderId
                                .toLowerCase()
                                .includes(debouncedQuery.toLowerCase()) ||
                            item.service.toLowerCase().includes(debouncedQuery.toLowerCase())
                        )
                    )
                        return false;
                    if (startDate && new Date(item.createdAt) < new Date(startDate))
                        return false;
                    if (endDate && new Date(item.createdAt) > new Date(endDate)) return false;

                    if (activeTab !== "All" && item.status !== activeTab) return false;

                    return true;
                });
                filteredData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setTableData(filteredData);

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
                setError(
                    "There was an issue fetching the data. Please try again later."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [activeTab, startDate, endDate, debouncedQuery]);

    const handleCancelOrder = async (orderId) => {
        try {
            const token = TokenService.getToken();
            if (!token) {
                setError("Token missing or invalid.");
                return;
            }

            setLoading(true);
            await axios.put(`${API_BASE_URL}/auth/orders/${orderId}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // After deleting, refresh the table data
            const response = await axios.get(
                `${API_BASE_URL}/auth/orders?timestamp=${new Date().getTime()}`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            if (!Array.isArray(response.data)) {
                setError("Invalid data format.");
                return;
            }
            const originalData = response.data;
            let filteredData = [...originalData];
            filteredData = filteredData.filter((item) => {
                if (
                    debouncedQuery &&
                    !(
                        item.orderId
                            .toLowerCase()
                            .includes(debouncedQuery.toLowerCase()) ||
                        item.service.toLowerCase().includes(debouncedQuery.toLowerCase())
                    )
                )
                    return false;
                if (startDate && new Date(item.createdAt) < new Date(startDate))
                    return false;
                if (endDate && new Date(item.createdAt) > new Date(endDate)) return false;

                if (activeTab !== "All" && item.status !== activeTab) return false;

                return true;
            });
            filteredData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setTableData(filteredData);
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
            console.error("Error cancelling order:", err);
            setError("Failed to cancel order.");
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        return moment(dateString).format('DD/MM/YYYY'); // Format the date
    };

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

    const handleTabChange = (label) => {
        setActiveTab(label);
        setCurrentPage(1); // Reset page to 1 on tab change
    };

    return (
        <div className="mb-4 border border-gray-300 Upvotes-Table Order-Table rounded-small">
            <h1 className="p-4 font-semibold text-sub-color lg:text-basic">
                Your past upvote orders:
            </h1>

            {/* Tabs table */}
            <OrderTableTabs
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={handleTabChange}
            />

            {/* Filter Section */}
            <OrderTableFilters
                startDate={startDate}
                endDate={endDate}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
            />

            <div className="flex space-x-2">
                {/* Status Check Section */}
                {activeTab !== "All" && (
                    <div className="p-2">
                        <div className="flex items-center p-2 space-x-2 border border-dashed rounded-medium">
                            <h1 className="font-medium text-sub-color">Status : </h1>
                            <button
                                onClick={() => {
                                    setActiveTab("All");
                                }}
                                className="flex items-center px-2 py-1 text-xs text-white transition-all duration-300 ease-in rounded-full bg-sub-color hover:bg-slate-500/50"
                            >
                                {activeTab}
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
                        onClick={() => {
                            setActiveTab("All");
                        }}
                    >
                        <FaTrashAlt className="size-5 text-light-orange" />
                        <h1 className="ml-2 font-bold text-small text-light-orange">
                            Clear
                        </h1>
                    </div>
                )}
            </div>

            {/* Table Section */}
            <OrderTableDesign
                loading={loading}
                tableData={tableData}
                formattedDate={formatDate}
                paginatedData={paginatedData}
                activeTab={activeTab}
                handleCancelOrder={handleCancelOrder}
            />

            {/* Pagination */}
            <OrderTablePagination
                totalPages={totalPages}
                currentPage={currentPage}
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
            />
        </div>
    );
};

export default OrderTable;