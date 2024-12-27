import React from "react";

const Button = ({ onClick, className = "", type, children }) => {
  return (
    <button
      className={`mybtn ${className} `}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
