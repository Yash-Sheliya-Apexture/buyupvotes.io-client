import React, { useState, useRef, useEffect } from "react";

const InputField = ({
  type = "text",
  name,
  placeholder = "",
  value = "",
  onChange,
  onBlur,
  error = "",
  disabled = false,
  isEditing = true,
  className = "",
  rows,
  cols,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={inputRef}>
      {/* Floating Label */}
      <label
        htmlFor={name}
        className={`absolute left-3 transition-all duration-300 ${
          isFocused || value
            ? "-top-2.5 text-sub-color bg-white px-1"
            : "top-3 text-sub-color"
        }`}
      >
        {placeholder}
      </label>

      {/* Input Field */}
      <input
        id={name}
        type={type}
        name={name}
        value={value || ""}
        onChange={onChange}
        rows={rows}
        cols={cols}
        onFocus={() => setIsFocused(true)}
        onBlur={onBlur}
        disabled={!isEditing || disabled}
        className={`w-full border rounded-full p-2.5 ${
          error ? "border-red-500" : "border-gray-300"
        } placeholder-transparent hover:border-black transition-all ease-in duration-150 ${
          !isEditing || disabled ? "bg-gray-200 opacity-50" : ""
        } ${className}`}
        placeholder={placeholder}
        {...rest}
      />

      {/* Error Message */}
      {error && <p className="text-sm text-[#FF0000] mt-2">{error}</p>}
    </div>
  );
};

export default InputField;
