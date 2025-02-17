// src/components/OrderTable.jsx
import React from "react";
import moment from "moment";
import { RiEdit2Fill } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";

const OrderTable = ({
  orders,
  columns,
  onEdit,
  onDelete,
  onView,
  truncateId,
  formatDate,
  noDataFound,
}) => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {noDataFound ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-4 text-center text-lg font-bold text-gray-500"
              >
                No orders found.
              </td>
            </tr>
          ) : (
            orders.map((order, index) => (
              <tr
                key={order._id}
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                {columns.map((column) => (
                  <td
                    key={`${order._id}-${column.key}`}
                    className="px-4 py-2 whitespace-nowrap text-sm text-gray-700"
                  >
                    {column.render ? (
                      column.render(order)
                    ) : (
                      <>
                        {column.key === "orderId" && truncateId(order.orderId.substring(0, 4))}
                        {column.key === "userId" && truncateId(order.userId.substring(0, 4))}
                        {column.key === "category" && order.category}
                        {column.key === "service" && order.service}
                        {column.key === "quantity" && order.quantity}
                        {column.key === "status" && order.status}
                        {column.key === "started" && order.started}
                        {column.key === "completedVotes" && (order.completedVotes || 0)}
                        {column.key === "calculatedPrice" && `$${order.calculatedPrice}`}
                        {column.key === "createdAt" && formatDate(order.createdAt)}
                        {column.key === "actions" && (
                          <div className="flex items-center justify-center gap-1">
                            {/* Edit Button */}
                            <button
                              className="px-2 py-2 rounded-md bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 transition-colors duration-200"
                              onClick={() => onEdit(order)}
                              title="Edit Order"
                            >
                              <RiEdit2Fill className="h-4 w-4" />
                            </button>

                            {/* Delete Button */}
                            <button
                              className="px-2 py-2 rounded-md bg-red-100 text-red-500 hover:text-white hover:bg-red-500 transition-colors duration-200"
                              onClick={() => onDelete(order.orderId)}
                              title="Delete Order"
                            >
                              <FaRegTrashCan className="h-4 w-4" />
                            </button>

                            {/* View Button */}
                            <button
                              className="px-2 py-2 rounded-md bg-gray-200 text-gray-500 hover:text-white hover:bg-gray-500 transition-colors duration-200"
                              onClick={() => onView(order)}
                              title="View Order"
                            >
                              <IoEyeSharp className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;