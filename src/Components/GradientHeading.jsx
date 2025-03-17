import React from 'react';

const GradientHeading = ({
    beforeText,
    gradientText,
    tag = 'h2',
    className = '',
    classicSpanText = null,
    classicSpanClassName = '',
    beforeSpanClassName = '',
    textSize = 'text-4xl',  // Default text size
    tracking = 'tracking-normal',    // Default tracking
    ...otherProps
  }) => {
    const HeadingTag = tag;
  
    return (
      <HeadingTag
        className={`font-semibold font-BasierSquare ${textSize} ${className} ${tracking}`}
        {...otherProps}
      >
        <span className={beforeSpanClassName}>{beforeText} </span>
        <span className="pe-3 text-transparent bg-clip-text bg-gradient-to-r from-[#ffb087] via-[#ff6518] to-main-color ">
          {gradientText}
        </span>
  
        {classicSpanText && (
          <span className={`pe-3 ${classicSpanClassName}`}>
            {classicSpanText}
          </span>
        )}
      </HeadingTag>
    );
  };
  
  export default GradientHeading;