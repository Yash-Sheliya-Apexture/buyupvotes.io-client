// src/Dashboard/components/Account/AccountTabNavigation.jsx
import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AccountTabNavigation = ({ tabs, activeTab, onTabChange }) => {
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const tabRefs = useRef([]);
  const scrollContainerRef = useRef(null);

    useEffect(() => {
        updateIndicator(0);
    }, []);


  const updateIndicator = (index) => {
    const tab = tabRefs.current[index];
    if (tab) {
      setIndicatorWidth(tab.offsetWidth);
      setIndicatorLeft(tab.offsetLeft);
    }
  };

  const handleTabChange = (tabId, index) => {
    onTabChange(tabId);
    updateIndicator(index);
  };


    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
            left: -150,
            behavior: "smooth",
            });
        }
    };


    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
            left: 150,
            behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative flex items-center w-full my-5 max-w-7xl">
            {/* Left Scroll Button */}
            <button onClick={scrollLeft} className="flex-shrink-0 p-2 md:hidden">
            <FaChevronLeft className="h-3 text-sub-color" />
            </button>

            {/* Tabs Container */}
            <div
            ref={scrollContainerRef}
            className="relative flex items-center flex-grow overflow-x-auto scrollbar-hide whitespace-nowrap lg:gap-6 tabs-scrollable scroll-smooth"
            >
            {/* Indicator */}
            <div
                className="absolute bottom-0 h-0.5 bg-main-color transition-all duration-300"
                style={{
                width: `${indicatorWidth}px`,
                left: `${indicatorLeft}px`,
                }}
            ></div>

            {tabs.map((tab, index) => (
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
                    {tab.icon}
                    {tab.label}
                </button>
            ))}
            </div>

            {/* Right Scroll Button */}
            <button onClick={scrollRight} className="flex-shrink-0 p-2 md:hidden">
            <FaChevronRight className="h-3 text-sub-color" />
            </button>
        </div>
    );
};

export default AccountTabNavigation;