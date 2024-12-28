import React from "react";
import Data from "../../../assets/Images/nodata.svg"; // No data icon
import { HiLink } from "react-icons/hi";

const OrderTable = ({ loading, tableData, formattedDate, paginatedData }) => {
    return (
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
                                <td className="px-6 py-4">
                                    {formattedDate(item.date)}
                                </td>

                                <td className="px-6 py-4">{item.quantity}</td>
                                <td className="px-6 py-4">
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
    );
};

export default OrderTable;