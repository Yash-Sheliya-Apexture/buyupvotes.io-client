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






// import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import classNames from 'classnames'; // Import classNames

// const Button = ({
//     children,
//     onClick,
//     href,
//     className = '',
//     type = "button",
//     target,
//     ...props
// }) => {

//     const defaultClasses = `
//     flex 
//     items-center 
//     justify-center 
//     gap-2 
//     text-xl 
//     font-medium 
//     text-white 
//     w-60
//     py-4
//     px-10
//     transition-colors 
//     duration-300 
//     border-2 
//     bg-main-color 
//     rounded-xl 
//     hover:bg-orange-600 
//     border-main-color 
//     hover:border-orange-600
//     `;


//     // Use classNames to combine default and custom classes
//     const classes = classNames(
//         defaultClasses,
//         className
//     );

//     const linkClasses = classNames(
//         defaultClasses,
//          className
//     );


//     const handleClick = (event) => {
//         if(onClick) {
//             onClick(event);
//         }
//     }

//     // Conditional Rendering: Check if children exist
//      if (!children || (typeof children === 'string' && !children.trim())) {
//        return null; // Don't render anything
//      }


//     if (href) {
//         return (
//             <Link to={href}
//                 className={linkClasses}
//                 onClick={handleClick}
//                 target={target}
//                 {...props}
//             >
//                 {children}
//             </Link>
//         );
//     }

//     return (
//         <button
//             type={type}
//             className={classes}
//             onClick={handleClick}
//             {...props}
//         >
//             {children}
//         </button>
//     );
// };
// Button.propTypes = {
//     children: PropTypes.node.isRequired,
//     onClick: PropTypes.func,
//     href: PropTypes.string,
//     className: PropTypes.string,
//     type: PropTypes.string,
//     width: PropTypes.string,
//     padding: PropTypes.string,
//     target: PropTypes.string,
// };

// export default Button;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const ButtonLink = ({
//   label,
//   to,
//   onClick,
//   className,
//   children,
//   fontSizeClass,
//   fontWeightClass,
//   designClass
// }) => {

//     //Default design
//     const baseClasses =
//     `flex items-center justify-center gap-2 px-8 py-2 text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600`;

//     // override design
//   const combinedClasses = className
//     ? `${designClass || baseClasses} ${className} ${fontSizeClass || ""} ${fontWeightClass || ""}`
//     : `${designClass || baseClasses} ${fontSizeClass || ""} ${fontWeightClass || ""}`;

//   if (to) {
//     return (
//       <Link to={to} className={combinedClasses}>
//         {children ? children : label}
//       </Link>
//     );
//   } else {
//     return (
//       <button type="button" onClick={onClick} className={combinedClasses}>
//         {children ? children : label}
//       </button>
//     );
//   }
// };

// export default ButtonLink;