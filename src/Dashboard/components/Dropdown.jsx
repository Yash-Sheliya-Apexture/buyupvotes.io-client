import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";
import defaultBackground from "../../assets/Images/blue-background.png"; // Import a default image

const Dropdown = ({
  options,
  selectedValue,
  onSelect,
  placeholder = "Select an option",
  error,
  backgroundImage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside
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

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={`w-full border rounded-full p-2.5 ${
          error ? "border-red-500" : "border-gray-300"
        } text-sub-color hover:border-black transition-all ease-in duration-150 flex justify-between items-center`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedValue || placeholder}</span>
        <FaAngleDown
          className={`text-black transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div
        className={`absolute top-full left-0 w-full overflow-hidden bg-white border rounded-small shadow-md mt-1 z-10 transition-transform duration-300 transform origin-top ${
          isOpen ? "scale-y-100 translate-y-0" : "scale-y-0 pointer-events-none"
        }`}
      >
        <ul
          className="custom-scroll"
          style={{
            backgroundImage: `url(${backgroundImage || defaultBackground})`, // Use the passed image or fall back to the default
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            maxHeight: "220px", // Set max height for scrolling
            overflowY: "auto", // Enable scrolling
          }}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
              className="p-2 text-sub-color hover:bg-gray-100 rounded-medium cursor-pointer"
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
