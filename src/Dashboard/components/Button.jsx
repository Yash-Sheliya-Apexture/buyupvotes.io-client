import React from "react";
import { Link } from "react-router-dom";

const Button = ({ onClick, className = "", type = "button", children, to }) => {
  // Render a Link if the "to" prop is provided
  if (to) {
    return (
      <Link to={to} className={`mybtn ${className}`.trim()}>
        {children}
      </Link>
    );
  }

  // Render a button otherwise
  return (
    <button
      className={`mybtn ${className}`.trim()}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;