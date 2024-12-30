import React from "react";

const Button = ({ onClick, className = "", type, children }) => {
  return (
    <button
      className={`mybtn ${className}`.trim()} // Add custom class dynamically
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
