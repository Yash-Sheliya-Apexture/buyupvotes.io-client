import React, { useState, useEffect } from "react";

const ScrollBorder = () => {
  const [borderWidth, setBorderWidth] = useState(0);
  const [shadowOpacity, setShadowOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollTop / pageHeight; // Calculate scroll percentage
      const newBorderWidth = Math.min(100, scrollPercentage * 100); // Ensure width is between 0% and 100%
      const newShadowOpacity = Math.min(0.8, scrollPercentage); // Opacity increases as you scroll
      setBorderWidth(newBorderWidth);
      setShadowOpacity(newShadowOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "4px", // Adjust thickness as needed
        width: `${borderWidth}%`,
        backgroundColor: "#FF5700", // Orange color
        boxShadow: `0 0px 10px rgba(255, 87, 0, ${shadowOpacity})`, // Dynamic shadow opacity
        transition: "all 1s ease-out", // Smooth easing for better effect
        zIndex: 9999,
      }}
    ></div>
  );
};

export default ScrollBorder;