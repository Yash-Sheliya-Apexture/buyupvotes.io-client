import React from "react";

const InputField = ({
  type = "text",
  name,
  placeholder = "",
  value,
  onChange,
  error = "",
  className = "",
  ...rest
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full border rounded-full p-2.5 ${
          error ? "border-red-500" : "border-gray-300"
        } text-sub-color placeholder:text-sub-color hover:border-black transition-all ease-in duration-150 ${className}`}
        {...rest}
      />
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default InputField;
