import React from "react";
import Data from "../../../assets/Images/nodata.svg"; // No data icon
import { HiLink } from "react-icons/hi";

const OrderTableDesign = ({ loading, tableData, formattedDate, paginatedData }) => {
  return (
    <div className="overflow-hidden rounded-br-small rounded-bl-small">
      <div className="overflow-x-auto custom-scroll">
        <div className="min-w-[1000px]">
          <table className="w-full border-collapse table-auto table-main">
            <thead className="capitalize text-small bg-gray-light text-sub-color">
              <tr>
                <th className="px-6 py-3">Order #</th>
                <th className="px-6 py-3">Details</th>
                <th className="px-6 py-3">Started</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Deliver votes</th>
                <th className="px-6 py-3">Total Votes</th>
                <th className="px-6 py-3">Status</th>
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
                    <div className="flex flex-col">
                      <img src={Data} alt="No Data" className="h-40" />
                      <p className="mt-4 text-lg font-medium">No Data Available</p>
                    </div>
                  </td>
                </tr>
              ) : (
                paginatedData.map((item, index) => (
                  <tr key={`${item.orderId}-${index}`}>
                    <td className="px-6 py-3 text-center">{item.orderId.substring(0, 4)}</td>
                    <td className="gap-3 px-6 py-2 ">
                      <span className="flex justify-center gap-2">
                        {item.service}
                        <a href={`${item.link}`} target="_blank" className="">
                          <HiLink className="mt-1" />
                        </a>
                      </span>
                    </td>
                    <td className="px-6 py-3 text-center">{item.started}</td>
                    <td className="px-6 py-3 text-center">{formattedDate(item.date)}</td>
                    <td className="px-6 py-3 text-center">{item.completedVotes}</td>
                    <td className="px-6 py-3 text-center">{item.quantity}</td>
                    <td className="px-6 py-3 text-center">
                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide inline-block ${item.status === "Completed"
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
      </div>
    </div>
  );
};

export default OrderTableDesign;
