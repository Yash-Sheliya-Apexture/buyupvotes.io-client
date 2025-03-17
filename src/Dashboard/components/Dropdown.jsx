


import React, { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import defaultBackground from "../../assets/Images/blue-background.png";

const Dropdown = ({
  options = [],
  selectedValue,
  onSelect,
  placeholder = "",
  error = "",
  setError,
  backgroundImage,
  className = "",
  onBlur,
  dropdownPadding = "p-[18px]",
  listPadding = "p-2.5",
  disabled = false,
  isRequired = false, // New prop to indicate if dropdown is required
  name, // Unique identifier for the dropdown
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option) => {
    if (!disabled) {
      onSelect(option);
      setIsOpen(false);
      // setError((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear error using functional update
    }
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
      // Check if the dropdown is required and no value has been selected
      if (isRequired && !selectedValue) {
        setError((prevErrors) => ({ ...prevErrors, [name]: "This field is required." })); // Set the error message using functional update
      }

      if (onBlur) {
        onBlur();
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, selectedValue, isRequired, setError, name]);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        className={`w-full border rounded-xl cursor-pointer ${dropdownPadding} focus:outline-none transition-all ease-in duration-150 relative ${
          error ? "border-red-500" : "border-gray-300"
        } hover:border-black ${
          disabled ? "opacity-70 cursor-not-allowed" : ""
        }`}
        onClick={handleDropdownClick}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
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
          <span className="text-black leading-4">{selectedValue || ""}</span>
          <FaAngleDown
            className={`text-black transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {error && (
        <div className="text-[#FF0000] flex items-center gap-1 mt-1">
          <MdError className="w-4 h-4" />
          <p className="text-sm">{error}</p>
        </div>
      )}
      <div
        className={`absolute top-full left-0 w-full overflow-hidden bg-white border rounded-2xl mt-2 z-10 transition-transform duration-300 transform origin-top ${
          isOpen ? "scale-y-100 translate-y-0" : "scale-y-0 pointer-events-none"
        }`}
        role="listbox"
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
              className={`${listPadding} text-black cursor-pointer rounded-xl transition-all duration-150 ${
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
  );
};

export default Dropdown;