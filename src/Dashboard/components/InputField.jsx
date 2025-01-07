// import React, { useState, useRef, useEffect } from "react";

// const InputField = ({
//   type = "text",
//   name,
//   placeholder = "",
//   value = "",
//   onChange,
//   onBlur,
//   error = "",
//   disabled = false,
//   isEditing = true,
//   className = "",
//   rows,
//   cols,
//   as: ElementType = "input", // Default to 'input', can be 'textarea'
//   ...rest
// }) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const inputRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (inputRef.current && !inputRef.current.contains(event.target)) {
//         setIsFocused(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const commonProps = {
//     id: name,
//     name: name,
//     value: value || "",
//     onChange: onChange,
//     onFocus: () => setIsFocused(true),
//     onBlur: onBlur,
//     disabled: !isEditing || disabled,
//     className: `w-full border rounded-3xl p-2.5 ${error ? "border-red-500" : "border-gray-300"
//       } placeholder-transparent hover:border-black transition-all ease-in duration-150 ${!isEditing || disabled ? "bg-gray-200 opacity-50" : ""
//       } ${className}`,
//     placeholder: placeholder,
//     ...rest,
//   };


//   return (
//     <div className="relative w-full" ref={inputRef}>
//       {/* Floating Label */}
//       <label
//         htmlFor={name}
//         className={`absolute left-3 transition-all duration-300 z-[1] ${isFocused || value
//             ? "-top-2.5 text-sub-color bg-white px-1"
//             : "top-3 text-sub-color"
//           }`}
//       >
//         {placeholder}
//       </label>

//       {/* Input Field */}
//       {ElementType === "input" ? (
//         <input
//           id={name}
//           type={type}
//           name={name}
//           value={value || ""}
//           onChange={onChange}
//           rows={rows}
//           cols={cols}
//           onFocus={() => setIsFocused(true)}
//           onBlur={onBlur}
//           disabled={!isEditing || disabled}
//           className={`w-full border rounded-3xl p-2.5 ${error ? "border-red-500" : "border-gray-300"
//             } placeholder-transparent hover:border-black transition-all ease-in duration-150  ${className}`}
//           placeholder={placeholder}
//           {...rest}
//         />
//       ) : (
//         <textarea
//           rows={rows}
//           cols={cols}
//           {...commonProps}
//         />
//       )}

//       {/* Error Message */}
//       {error && <p className="text-sm text-[#FF0000] mt-1">{error}</p>}
//     </div>
//   );
// };

// export default InputField;



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
  as: ElementType = "input", // Default to 'input', can be 'textarea'
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

  const commonProps = {
    id: name,
    name: name,
    value: value || "",
    onChange: onChange,
    onFocus: () => setIsFocused(true),
    onBlur: onBlur,
    disabled: !isEditing || disabled,
    className: `w-full border rounded-xl p-3.5 ${error ? "border-red-500" : "border-gray-300"
      } placeholder-transparent hover:border-black transition-all ease-in duration-150 ${!isEditing || disabled ? "bg-gray-200 opacity-50" : ""
      } ${className}`,
    placeholder: placeholder,
    ...rest,
  };


  return (
    <div className="relative w-full" ref={inputRef}>
      {/* Floating Label */}
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all duration-300 z-[1] ${isFocused || value
            ? "-top-2.5 text-sub-color bg-white px-1"
            : "top-3.5 text-sub-color"
          }`}
      >
        {placeholder}
      </label>

      {/* Input Field */}
      {ElementType === "input" ? (
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
          className={`w-full border rounded-xl p-3.5 ${error ? "border-red-500" : "border-gray-300"
            } placeholder-transparent transition-all ease-in duration-150  ${className}`}
          placeholder={placeholder}
          {...rest}
        />
      ) : (
        <textarea
          rows={rows}
          cols={cols}
          {...commonProps}
        />
      )}

      {/* Error Message */}
      {error && <p className="text-sm text-[#FF0000] mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
