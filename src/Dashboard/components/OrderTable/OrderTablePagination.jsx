import React from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OrderTablePagination = ({ totalPages, currentPage, handlePreviousPage, handleNextPage }) => {
    if (totalPages <= 1) return null;

    return (
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
    );
};

export default OrderTablePagination;