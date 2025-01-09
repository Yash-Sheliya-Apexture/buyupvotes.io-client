// import React, { useState, useEffect, useRef } from "react";
// import { FaAngleDown } from "react-icons/fa6";
// import defaultBackground from "../../assets/Images/blue-background.png";

// const Dropdown = ({
//   options = [],
//   selectedValue,
//   onSelect,
//   placeholder = "",
//   error = "",
//   backgroundImage,
//   className = "",
//   onBlur,
//   dropdownPadding = "p-3.5", // Add prop for dropdown padding
//   listPadding = "p-2",
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//         if (onBlur) onBlur(); // Trigger onBlur when clicking outside
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [onBlur]);

//   const handleSelect = (option) => {
//     onSelect(option);
//     setIsOpen(false);
//   };

//   return (
//     <div className={`relative ${className}`} ref={dropdownRef}>
//       {/* Dropdown Trigger */}
//       <div
//         className={`w-full border rounded-full cursor-pointer shadow-main  ${dropdownPadding} focus:outline-none ${
//           error ? "border-red-500" : "border-gray-300"
//         } hover:border-black transition-all ease-in duration-150 relative`}
//         onClick={() => setIsOpen(!isOpen)}
//         onBlur={onBlur}
//       >
//         {/* Floating Label */}
//         <span
//           className={`absolute left-3 transition-all duration-300 ${
//             selectedValue || isOpen
//               ? "-top-2.5 text-sub-color bg-white px-1"
//               : "top-3 text-sub-color"
//           }`}
//         >
//           {placeholder}
//         </span>
//         <div className="flex items-center justify-between">
//           <span className="text-black">{selectedValue || ""}</span>
//           <FaAngleDown
//             className={`text-black transition-transform duration-200 ${
//               isOpen ? "rotate-180" : ""
//             }`}
//           />
//         </div>
//       </div>

//       {/* Error Message */}
//       {error && (
//         <div className="text-sm text-[#FF0000] mt-1">{error}</div> // Changed to div
//       )}

//       {/* Dropdown Menu */}
//       <div
//         className={`absolute top-full left-0 w-full overflow-hidden bg-white border rounded-2xl mt-2 z-10 transition-transform duration-300 transform origin-top ${
//           isOpen ? "scale-y-100 translate-y-0" : "scale-y-0 pointer-events-none"
//         }`}
//       >
//         <ul
//           className="p-1 custom-scroll"
//           style={{
//             backgroundImage: `url(${backgroundImage || defaultBackground})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             maxHeight: "220px",
//             overflowY: "auto",
//           }}
//         >
//           {options.map((option, index) => (
//             <li
//               key={index}
//               onClick={() => handleSelect(option)}
//               className={`${listPadding} text-black cursor-pointer rounded-md transition-all duration-150 ${
//                 selectedValue === option
//                   ? "bg-[#919eb229]"
//                   : "hover:bg-[#f3f2f2]"
//               }`}
//             >
//               {option}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;

// import React, { useState, useEffect, useRef } from "react";
// import { FaAngleDown } from "react-icons/fa6";
// import defaultBackground from "../../assets/Images/blue-background.png";

// const Dropdown = ({
//   options = [],
//   selectedValue,
//   onSelect,
//   placeholder = "",
//   error = "",
//   backgroundImage,
//   className = "",
//   onBlur,
//   dropdownPadding = "p-3.5", // Add prop for dropdown padding
//   listPadding = "p-2",
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const isFirstClick = useRef(true); // Track if it's the first click

//     useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//           setIsOpen(false);
//           if (onBlur && !isFirstClick.current) onBlur();
//            isFirstClick.current = false;
//       }
//     };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [onBlur]);

//   const handleSelect = (option) => {
//     onSelect(option);
//     setIsOpen(false);
//         isFirstClick.current = false;
//   };

//   const handleDropdownClick = () => {
//     setIsOpen(!isOpen);
//       isFirstClick.current = false;
//   };

//   return (
//     <div className={`relative ${className}`} ref={dropdownRef}>
//       {/* Dropdown Trigger */}
//       <div
//         className={`w-full border rounded-full cursor-pointer shadow-main  ${dropdownPadding} focus:outline-none ${
//           error ? "border-red-500" : "border-gray-300"
//         } hover:border-black transition-all ease-in duration-150 relative`}
//         onClick={handleDropdownClick}
//        >
//         {/* Floating Label */}
//         <span
//           className={`absolute left-3 transition-all duration-300 ${
//             selectedValue || isOpen
//               ? "-top-2.5 text-sub-color bg-white px-1"
//               : "top-3 text-sub-color"
//           }`}
//         >
//           {placeholder}
//         </span>
//         <div className="flex items-center justify-between">
//           <span className="text-black">{selectedValue || ""}</span>
//           <FaAngleDown
//             className={`text-black transition-transform duration-200 ${
//               isOpen ? "rotate-180" : ""
//             }`}
//           />
//         </div>
//       </div>

//       {/* Error Message */}
//       {error && <div className="text-sm text-[#FF0000] mt-1">{error}</div>}

//       {/* Dropdown Menu */}
//       <div
//         className={`absolute top-full left-0 w-full overflow-hidden bg-white border rounded-2xl mt-2 z-10 transition-transform duration-300 transform origin-top ${
//           isOpen ? "scale-y-100 translate-y-0" : "scale-y-0 pointer-events-none"
//         }`}
//       >
//         <ul
//           className="p-1 custom-scroll"
//           style={{
//             backgroundImage: `url(${backgroundImage || defaultBackground})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             maxHeight: "220px",
//             overflowY: "auto",
//           }}
//         >
//           {options.map((option, index) => (
//             <li
//               key={index}
//               onClick={() => handleSelect(option)}
//               className={`${listPadding} text-black cursor-pointer rounded-md transition-all duration-150 ${
//                 selectedValue === option
//                   ? "bg-[#919eb229]"
//                   : "hover:bg-[#f3f2f2]"
//               }`}
//             >
//               {option}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;

// import React, { useState, useEffect, useRef } from "react";
// import { FaAngleDown } from "react-icons/fa6";
// import defaultBackground from "../../assets/Images/blue-background.png";

// const Dropdown = ({
//   options = [],
//   selectedValue,
//   onSelect,
//   placeholder = "",
//   error = "",
//   backgroundImage,
//   className = "",
//   onBlur,
//   dropdownPadding = "p-3.5",
//   listPadding = "p-2",
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const isFirstClick = useRef(true); // Track if it's the first click

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//         // Trigger onBlur only when it's NOT the first click and the dropdown is open
//         if (onBlur && !isFirstClick.current && isOpen) {
//              onBlur();
//         }
//         isFirstClick.current = false; // Indicate that first click already happened after closing the dropdown
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [onBlur, isOpen]); // Depend on isOpen for when to trigger onBlur

//   const handleSelect = (option) => {
//     onSelect(option);
//     setIsOpen(false);
//     isFirstClick.current = false; // Indicate that first click has already happened
//   };

//   const handleDropdownClick = () => {
//     setIsOpen(!isOpen); // Toggle dropdown
//     isFirstClick.current = false; // Indicate first click has happened on dropdown click

//   };

//   return (
//     <div className={`relative ${className}`} ref={dropdownRef}>
//       {/* Dropdown Trigger */}
//       <div
//         className={`w-full border rounded-full cursor-pointer shadow-main  ${dropdownPadding} focus:outline-none ${
//           error ? "border-red-500" : "border-gray-300"
//         } hover:border-black transition-all ease-in duration-150 relative`}
//         onClick={handleDropdownClick}
//       >
//         {/* Floating Label */}
//         <span
//           className={`absolute left-3 transition-all duration-300 ${
//             selectedValue || isOpen
//               ? "-top-2.5 text-sub-color bg-white px-1"
//               : "top-3 text-sub-color"
//           }`}
//         >
//           {placeholder}
//         </span>
//         <div className="flex items-center justify-between">
//           <span className="text-black">{selectedValue || ""}</span>
//           <FaAngleDown
//             className={`text-black transition-transform duration-200 ${
//               isOpen ? "rotate-180" : ""
//             }`}
//           />
//         </div>
//       </div>

//       {/* Error Message */}
//       {error && <div className="text-sm text-[#FF0000] mt-1">{error}</div>}

//       {/* Dropdown Menu */}
//       <div
//         className={`absolute top-full left-0 w-full overflow-hidden bg-white border rounded-2xl mt-2 z-10 transition-transform duration-300 transform origin-top ${
//           isOpen ? "scale-y-100 translate-y-0" : "scale-y-0 pointer-events-none"
//         }`}
//       >
//         <ul
//           className="p-1 custom-scroll"
//           style={{
//             backgroundImage: `url(${backgroundImage || defaultBackground})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             maxHeight: "220px",
//             overflowY: "auto",
//           }}
//         >
//           {options.map((option, index) => (
//             <li
//               key={index}
//               onClick={() => handleSelect(option)}
//               className={`${listPadding} text-black cursor-pointer rounded-md transition-all duration-150 ${
//                 selectedValue === option
//                   ? "bg-[#919eb229]"
//                   : "hover:bg-[#f3f2f2]"
//               }`}
//             >
//               {option}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;

import React, { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import defaultBackground from "../../assets/Images/blue-background.png";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const Dropdown = ({
  options = [],
  selectedValue,
  onSelect,
  placeholder = "",
  error = "",
  backgroundImage,
  className = "",
  onBlur,
  dropdownPadding = "p-[18px]", // Default padding for dropdown trigger
  listPadding = "p-2.5", // Default padding for dropdown list items
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const firstClickRef = useRef(true);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
    firstClickRef.current = false;
  };

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
    firstClickRef.current = false;
  };

  const handleClickAway = () => {
    if (isOpen && !firstClickRef.current) {
      setIsOpen(false);
      if (onBlur) {
        onBlur();
      }
    }
    firstClickRef.current = false;
  };

  useEffect(() => {
    if (isOpen) {
      firstClickRef.current = true;
    }
  }, [isOpen]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={`relative ${className}`} ref={dropdownRef}>
        {/* Dropdown Trigger */}
        <div
          className={`w-full border rounded-xl cursor-pointer ${dropdownPadding} focus:outline-none ${
            error ? "border-red-500" : "border-gray-300"
          } hover:border-black transition-all ease-in duration-150 relative`}
          onClick={handleDropdownClick}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {/* Floating Label */}
          <span
            className={`absolute left-4 transition-all duration-300 ${
              selectedValue || isOpen
                ? "-top-2.5 text-sub-color bg-white px-1"
                : "top-3 text-sub-color"
            }`}
          >
            {placeholder}
          </span>
          <div className="flex items-center justify-between">
            <span className="text-black">{selectedValue || ""}</span>
            <FaAngleDown
              className={`text-black transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>

        {/* Error Message */}
        {error && <div className="text-sm text-[#FF0000] mt-1">{error}</div>}

        {/* Dropdown Menu */}
        <div
          className={`absolute top-full left-0 w-full overflow-hidden bg-white border rounded-2xl mt-2 z-10 transition-transform duration-300 transform origin-top ${
            isOpen
              ? "scale-y-100 translate-y-0"
              : "scale-y-0 pointer-events-none"
          }`}
          role="listbox"
          aria-labelledby="dropdown-label"
        >
          <ul
            className="p-1 custom-scroll"
            style={{
              backgroundImage: `url(${backgroundImage || defaultBackground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              maxHeight: "220px",
              overflowY: "auto",
            }}
          >
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className={`${listPadding} text-black cursor-pointer rounded-md transition-all duration-150 ${
                  selectedValue === option
                    ? "bg-[#919eb229]"
                    : "hover:bg-[#f3f2f2]"
                }`}
                role="option"
                aria-selected={selectedValue === option}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default Dropdown;
