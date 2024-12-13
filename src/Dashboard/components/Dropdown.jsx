// import React, { useState, useEffect, useRef } from "react";
// import { FaAngleDown } from "react-icons/fa6";
// import defaultBackground from "../../assets/Images/blue-background.png";

// const Dropdown = ({
//   options,
//   selectedValue,
//   onSelect,
//   placeholder = "Select an option",
//   error,
//   backgroundImage,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0); // Track active item index
//   const dropdownRef = useRef(null);

//   // Close the dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     // Set the first option as active by default
//     if (!selectedValue && options.length > 0) {
//       setActiveIndex(0);
//     }
//   }, [options, selectedValue]);

//   return (
//     <div className="relative" ref={dropdownRef}>
//       {/* Dropdown Header */}
//       <div
//         className={`w-full border rounded-full p-2.5 ${
//           error ? "border-red-500" : "border-gray-300"
//         } text-sub-color hover:border-black transition-all ease-in duration-150 flex justify-between items-center`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span>{selectedValue || placeholder}</span>
//         <FaAngleDown
//           className={`text-black transition-transform duration-200 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         />
//       </div>
//       {error && <p className="text-sm text-red-500">{error}</p>}

//       {/* Dropdown Menu */}
//       <div
//         className={`absolute top-full left-0 w-full overflow-hidden bg-white border rounded-small shadow-md mt-1 z-10 transition-transform duration-300 transform origin-top ${
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
//               onClick={() => {
//                 onSelect(option);
//                 setActiveIndex(index); // Update active index
//                 setIsOpen(false);
//               }}
//               className={`p-2 my-1 text-sub-color cursor-pointer rounded-[10px] transition-all duration-150 ${
//                 activeIndex === index
//                   ? "bg-[#919eb229] text-sub-color" // Active item style
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


import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";
import defaultBackground from "../../assets/Images/blue-background.png";

const Dropdown = ({
  options,
  selectedValue,
  onSelect,
  placeholder = "Select an option",
  error,
  backgroundImage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!selectedValue && options.length > 0) {
      setActiveIndex(0);
    }
  }, [options, selectedValue]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={`w-full border rounded-full p-2.5 ${error ? "border-red-500" : "border-gray-300"} text-sub-color hover:border-black transition-all ease-in duration-150 flex justify-between items-center`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedValue || placeholder}</span>
        <FaAngleDown
          className={`text-black transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}

      <div
        className={`absolute top-full left-0 w-full overflow-hidden bg-white border rounded-small shadow-md mt-1 z-10 transition-transform duration-300 transform origin-top ${
          isOpen ? "scale-y-100 translate-y-0" : "scale-y-0 pointer-events-none"
        }`}
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
              onClick={() => {
                onSelect(option); // Trigger the parent handler
                setActiveIndex(index); // Update active index
                setIsOpen(false); // Close dropdown
              }}
              className={`p-2 my-1 text-sub-color cursor-pointer rounded-[10px] transition-all duration-150 ${
                activeIndex === index ? "bg-[#919eb229]" : "hover:bg-[#f3f2f2]"
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
