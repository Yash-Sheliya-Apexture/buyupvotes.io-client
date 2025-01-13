import React, { useState, useRef, useEffect } from "react";
import { MdError } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

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
  inputPadding = "p-3.5",
  as: ElementType = "input",
  labelPosition = "top-3.5",
  togglePasswordVisibility = false, // New prop for password toggle
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

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

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const commonProps = {
    id: name,
    name: name,
    value: value || "",
    onChange: onChange,
    onFocus: () => setIsFocused(true),
    onBlur: onBlur,
    disabled: !isEditing || disabled,
    className: `w-full border rounded-xl resize-none ${inputPadding} ${
      error ? "border-red-500" : "border-gray-300"
    } placeholder-transparent hover:border-black transition-all ease-in duration-150 ${
      !isEditing || disabled ? "bg-gray-200 opacity-50" : ""
    } ${className}`,
    placeholder: placeholder,
    ...rest,
  };

  return (
    <>
      <div className="relative w-full" ref={inputRef}>
        {/* Floating Label */}
        <label
          htmlFor={name}
          className={`absolute left-4 transition-all duration-300 z-[1] ${
            isFocused || value
              ? "-top-2.5 text-sub-color bg-white px-1"
              : `${labelPosition} text-sub-color`
          }`}
        >
          {placeholder}
        </label>

        {/* Input Field */}
        <div className="relative">
          {ElementType === "input" ? (
            <input
              id={name}
              type={togglePasswordVisibility && showPassword ? "text" : type} // Set type based on toggle state
              name={name}
              value={value || ""}
              onChange={onChange}
              rows={rows}
              cols={cols}
              onFocus={() => setIsFocused(true)}
              onBlur={onBlur}
              disabled={!isEditing || disabled}
              className={`w-full border rounded-xl ${inputPadding} ${
                error ? "border-red-500" : "border-gray-300"
              } placeholder-transparent transition-all ease-in duration-150  ${className}
              ${togglePasswordVisibility ? "pr-10" : ""}`} // Add padding if toggle is present
              placeholder={placeholder}
              {...rest}
            />
          ) : (
            <textarea rows={rows} cols={cols} {...commonProps} />
          )}

          {/* Password Visibility Toggle Icon */}
          {togglePasswordVisibility && (
            <div
              type="button"
              onClick={handleTogglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer text-slate-500"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          )}
        </div>
      </div>
      {/* Error Message */}
      {error && (
        <>
          <div className="text-[#FF0000] flex items-center gap-1 mt-1">
            <MdError className="w-4 h-4" />
            <p className="text-sm">{error}</p>
          </div>
        </>
      )}
    </>
  );
};

export default InputField;
