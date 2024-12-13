import React from "react";

const Button = ({ onClick, type, className="", children }) => {
  return (
    <button
      type={type || "button"} // default to "button" if not provided
      className={`border border-main-color text-main-color px-14 py-1.5 hover:shadow-btnShadow transition-all duration-200 ease-in text-xs rounded-full font-bold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
