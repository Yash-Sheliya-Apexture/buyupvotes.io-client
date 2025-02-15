// import React from "react";

// const Pagination = ({ ordersPerPage, totalOrders, paginate, currentPage }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalOrders / ordersPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav className="mt-4">
//       <ul className="flex justify-center space-x-2">
//         {pageNumbers.map((number) => (
//           <li key={number}>
//             <button
//               onClick={() => paginate(number)}
//               className={`py-2 px-4 rounded-full ${
//                 currentPage === number
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               } transition-colors duration-200`}
//             >
//               {number}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;




// import React from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const Pagination = ({ ordersPerPage, totalOrders, paginate, currentPage }) => {
//   const pageNumbers = Array.from({ length: Math.ceil(totalOrders / ordersPerPage) }, (_, i) => i + 1);

//   const maxPagesToShow = 5; // Show current + 2 on each side

//   const visiblePageNumbers = () => {
//     const maxInitialPages = 5;
  
//     if (pageNumbers.length <= maxInitialPages + 1) {
//       return pageNumbers; // If total pages are few, display all
//     }
  
//     let pages = [];
  
//     if (currentPage <= maxInitialPages) {
//       // Display the first 5 pages, "...", and last page
//       for (let i = 1; i <= maxInitialPages; i++) {
//         pages.push(i);
//       }
//       pages.push("...");
//       pages.push(pageNumbers.length);
//     } else if (currentPage > pageNumbers.length - 3) {
//       // Display the last 5 pages
//       pages.push(1);
//       pages.push("...");
//       for (let i = pageNumbers.length - 4; i <= pageNumbers.length; i++) {
//         pages.push(i);
//       }
//     } else {
//       // Display 1, "...", current page +/- 1, "...", last page
//       pages.push(1);
//       pages.push("...");
//       for (let i = currentPage - 1; i <= currentPage + 1; i++) {
//         pages.push(i);
//       }
//       pages.push("...");
//       pages.push(pageNumbers.length);
//     }
  
//     return pages;
//   };

//   const scrollToTopAndPaginate = (page) => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     paginate(page);
//   };

//   return (
//     <nav className="mt-4">
//       <ul className="flex justify-center space-x-2 items-center">
//         <li>
//           <button
//             onClick={() => scrollToTopAndPaginate(Math.max(1, currentPage - 1))}
//             disabled={currentPage === 1}
//             className={`py-2 px-4 rounded-md bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 transition-colors duration-200 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
//           >
//             <FaChevronLeft className="inline-block mr-1" />
//             Previous
//           </button>
//         </li>

//         {visiblePageNumbers().map((page, index) => (
//           <li key={index}>
//             {page === "..." ? (
//               <span className="py-2 px-4 text-gray-500">...</span>
//             ) : (
//               <button
//                 onClick={() => scrollToTopAndPaginate(page)}
//                 className={`py-2 px-4 rounded-md ${currentPage === page ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"} transition-colors duration-200`}
//               >
//                 {page}
//               </button>
//             )}
//           </li>
//         ))}

//         <li>
//           <button
//             onClick={() => scrollToTopAndPaginate(Math.min(pageNumbers.length, currentPage + 1))}
//             disabled={currentPage === pageNumbers.length}
//             className={`py-2 px-4 rounded-md bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 transition-colors duration-200 ${currentPage === pageNumbers.length ? "opacity-50 cursor-not-allowed" : ""}`}
//           >
//             Next
//             <FaChevronRight className="inline-block ml-1" />
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;




// import React from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const Pagination = ({ ordersPerPage, totalOrders, paginate, currentPage }) => {
//   const pageNumbers = Array.from({ length: Math.ceil(totalOrders / ordersPerPage) }, (_, i) => i + 1);

//   const maxPagesToShow = 5; // Show current + 2 on each side

//   const visiblePageNumbers = () => {
//     const maxInitialPages = 5;

//     if (pageNumbers.length <= maxInitialPages + 1) {
//       return pageNumbers; // If total pages are few, display all
//     }

//     let pages = [];

//     if (currentPage <= maxInitialPages) {
//       // Display the first 5 pages, "...", and last page
//       for (let i = 1; i <= maxInitialPages; i++) {
//         pages.push(i);
//       }
//       pages.push("...");
//       pages.push(pageNumbers.length);
//     } else if (currentPage > pageNumbers.length - 3) {
//       // Display the last 5 pages
//       pages.push(1);
//       pages.push("...");
//       for (let i = pageNumbers.length - 4; i <= pageNumbers.length; i++) {
//         pages.push(i);
//       }
//     } else {
//       // Display 1, "...", current page +/- 1, "...", last page
//       pages.push(1);
//       pages.push("...");
//       for (let i = currentPage - 1; i <= currentPage + 1; i++) {
//         pages.push(i);
//       }
//       pages.push("...");
//       pages.push(pageNumbers.length);
//     }

//     return pages;
//   };

//   const scrollToTopAndPaginate = (page) => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     paginate(page);
//   };

//   return (
//     <nav className="mt-4">
//       <ul className="flex justify-center space-x-2 items-center">
//         {currentPage !== 1 && (
//           <li>
//             <button
//               onClick={() => scrollToTopAndPaginate(Math.max(1, currentPage - 1))}
//               className={`py-2 px-4 rounded-md bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 transition-colors duration-200`}
//             >
//               <FaChevronLeft className="inline-block mr-1" />
//               Previous
//             </button>
//           </li>
//         )}

//         {visiblePageNumbers().map((page, index) => (
//           <li key={index}>
//             {page === "..." ? (
//               <span className="py-2 px-4 text-gray-500">...</span>
//             ) : (
//               <button
//                 onClick={() => scrollToTopAndPaginate(page)}
//                 className={`py-2 px-4 rounded-md ${currentPage === page ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"} transition-colors duration-200`}
//               >
//                 {page}
//               </button>
//             )}
//           </li>
//         ))}

//         {currentPage !== pageNumbers.length && (
//           <li>
//             <button
//               onClick={() => scrollToTopAndPaginate(Math.min(pageNumbers.length, currentPage + 1))}
//               className={`py-2 px-4 rounded-md bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 transition-colors duration-200`}
//             >
//               Next
//               <FaChevronRight className="inline-block ml-1" />
//             </button>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;




import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ ordersPerPage, totalOrders, paginate, currentPage, noDataFound }) => {
  const pageNumbers = Array.from({ length: Math.ceil(totalOrders / ordersPerPage) }, (_, i) => i + 1);

  const visiblePageNumbers = () => {
    const maxInitialPages = 5;

    if (pageNumbers.length <= maxInitialPages + 1) {
      return pageNumbers; // If total pages are few, display all
    }

    let pages = [];

    if (currentPage <= maxInitialPages) {
      // Display the first 5 pages, "...", and last page
      for (let i = 1; i <= maxInitialPages; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(pageNumbers.length);
    } else if (currentPage > pageNumbers.length - 3) {
      // Display the last 5 pages
      pages.push(1);
      pages.push("...");
      for (let i = pageNumbers.length - 4; i <= pageNumbers.length; i++) {
        pages.push(i);
      }
    } else {
      // Display 1, "...", current page +/- 1, "...", last page
      pages.push(1);
      pages.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(pageNumbers.length);
    }

    return pages;
  };

  const scrollToTopAndPaginate = (page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    paginate(page);
  };

  // Conditionally render the entire pagination component, include only one page cases
  return (
    !noDataFound && pageNumbers.length > 1 && (
      <nav className="mt-4">
        <ul className="flex justify-center space-x-2 items-center">
          {currentPage !== 1 && (
            <li>
              <button
                onClick={() => scrollToTopAndPaginate(Math.max(1, currentPage - 1))}
                className={`py-2 px-4 rounded-md bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 transition-colors duration-200`}
              >
                <FaChevronLeft className="inline-block mr-1" />
                Previous
              </button>
            </li>
          )}

          {visiblePageNumbers().map((page, index) => (
            <li key={index}>
              {page === "..." ? (
                <span className="py-2 px-4 text-gray-500">...</span>
              ) : (
                <button
                  onClick={() => scrollToTopAndPaginate(page)}
                  className={`py-2 px-4 rounded-md ${currentPage === page ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"} transition-colors duration-200`}
                >
                  {page}
                </button>
              )}
            </li>
          ))}

          {currentPage !== pageNumbers.length && (
            <li>
              <button
                onClick={() => scrollToTopAndPaginate(Math.min(pageNumbers.length, currentPage + 1))}
                className={`py-2 px-4 rounded-md bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 transition-colors duration-200`}
              >
                Next
                <FaChevronRight className="inline-block ml-1" />
              </button>
            </li>
          )}
        </ul>
      </nav>
    )
  );
};

export default Pagination;