import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";
import defaultBackground from "../../assets/Images/blue-background.png";

const Dropdown = ({
  options = [],
  selectedValue,
  onSelect,
  placeholder = "",
  error = "",
  backgroundImage,
  className = "",
  onBlur,
  dropdownPadding = "p-3.5", // Add prop for dropdown padding
  listPadding = "p-2 my-1",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        if (onBlur) onBlur(); // Trigger onBlur when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onBlur]);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <div
        className={`w-full border rounded-full cursor-pointer shadow-main  ${dropdownPadding} focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        } hover:border-black transition-all ease-in duration-150 relative`}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={onBlur}
      >
        {/* Floating Label */}
        <span
          className={`absolute left-3 transition-all duration-300 ${
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
      {error && (
        <div className="text-sm text-[#FF0000] mt-1">{error}</div> // Changed to div
      )}

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full overflow-hidden bg-white border rounded-small mt-1 z-10 transition-transform duration-300 transform origin-top ${
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
              onClick={() => handleSelect(option)}
              className={`${listPadding} text-black cursor-pointer rounded-md transition-all duration-150 ${
                selectedValue === option
                  ? "bg-[#919eb229]"
                  : "hover:bg-[#f3f2f2]"
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
