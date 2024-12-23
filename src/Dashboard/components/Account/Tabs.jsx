import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Tabs = ({ activeTab, onTabChange }) => {
  const tabRefs = useRef([]);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleTabChange = (tabId, index) => {
    onTabChange(tabId);
    updateIndicator(index);
  };

  const updateIndicator = (index) => {
    const tab = tabRefs.current[index];
    if (tab) {
      setIndicatorWidth(tab.offsetWidth);
      setIndicatorLeft(tab.offsetLeft);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center w-full my-5 max-w-7xl">
      <button onClick={scrollLeft} className="flex-shrink-0 p-2 md:hidden">
        <FaChevronLeft className="h-3 text-sub-color" />
      </button>

      <div
        ref={scrollContainerRef}
        className="relative flex items-center flex-grow overflow-x-auto whitespace-nowrap"
      >
        {/* Indicator */}
        <div
          className="absolute bottom-0 h-0.5 bg-main-color transition-all duration-300"
          style={{
            width: `${indicatorWidth}px`,
            left: `${indicatorLeft}px`,
          }}
        ></div>

        {[
          { id: "general", label: "General Information" },
          { id: "security", label: "Security" },
          { id: "transactions", label: "Transactions" },
        ].map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => (tabRefs.current[index] = el)}
            className={`flex items-center gap-2 px-4 py-2 transition-all duration-300 ${
              activeTab === tab.id
                ? "text-main-color border-b-2 border-main-color"
                : "text-sub-color border-b-2 border-transparent"
            }`}
            onClick={() => handleTabChange(tab.id, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <button onClick={scrollRight} className="flex-shrink-0 p-2 md:hidden">
        <FaChevronRight className="h-3 text-sub-color" />
      </button>
    </div>
  );
};

export default Tabs;
