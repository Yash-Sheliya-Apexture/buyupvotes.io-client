import React from "react";

const Button = ({ onClick, className = "", type, children }) => {
  return (
  
    /* <button
      type={type || "button"} // default to "button" if not provided
      className={`border border-main-color text-main-color px-14 py-1.5 font-bold  hover:shadow-btnShadow transition-all duration-200 ease-in text-xs rounded-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>  */

    /*  <button
      type={type || "button"}
      onClick={onClick}
      class="relative inline-flex items-center justify-center px-14 py-1 overflow-hidden tracking-tighter border border-main-color text-main-color hover:text-white rounded-md group"
    >
      <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-main-color rounded-full group-hover:w-56 group-hover:h-56"></span>
      <span class="relative text-base font-medium">{children}</span>
    </button>  */

    <button className="mybtn" type={type || "button"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
