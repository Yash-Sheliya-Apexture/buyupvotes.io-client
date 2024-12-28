import React, { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OrderTableTabs = ({ tabs, activeTab, onTabChange }) => {
    const scrollableRef = useRef(null);
    const [indicatorWidth, setIndicatorWidth] = useState(0);
    const [indicatorLeft, setIndicatorLeft] = useState(0);
    const tabRefs = useRef([]);


    useEffect(() => {
        updateIndicator(tabs.findIndex((tab) => tab.label === activeTab));
    }, [activeTab, tabs]);


    const updateIndicator = (index) => {
        const tab = tabRefs.current[index];
         if (tab) {
            setIndicatorWidth(tab.offsetWidth);
            setIndicatorLeft(tab.offsetLeft);
        }
    };

   const handleTabChange = (label) => {
        onTabChange(label);
        const index = tabs.findIndex((tab) => tab.label === label);
         if (tabRefs.current && tabRefs.current.length > 0) {
             updateIndicator(index)
        }
    };


    const scrollLeft = () => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollBy({ left: -100, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollBy({ left: 100, behavior: "smooth" });
        }
    };
    const handleTabClick = (label) => {
        handleTabChange(label);
    };


    return (
        <div className="relative flex items-center border rounded-sm border-gray-300/50 shadow-main">
            {/* Left Icon */}
            <button
                onClick={scrollLeft}
                className="absolute left-0 z-0 p-2 rounded-full lg:hidden"
            >
                <FaChevronLeft className="h-3" />
            </button>

            {/* Tabs table */}
            <div className="relative flex items-center justify-center mx-6 overflow-hidden lg:mx-2">
                {/* Tabs Container */}
                <div
                    ref={scrollableRef}
                    className="relative flex items-center overflow-hidden tabs-scrollable lg:gap-6 scroll-smooth"
                >
                    {/* Active Tab Indicator */}
                    <div
                        className="absolute bottom-0 h-0.5 bg-main-color transition-all duration-300 w-[calc(100%-40px)]"
                        style={{
                            width: `${indicatorWidth}px`,
                            left: `${indicatorLeft}px`,
                        }}
                    ></div>

                    {tabs.map((tab, index) => (
                        <button
                            key={tab.label}
                             onClick={() => handleTabClick(tab.label, index)}
                            className={`relative p-3.5 font-bold text-sm whitespace-nowrap ${
                                activeTab === tab.label
                                    ? "text-main-color"
                                    : "text-sub-color"
                            }`}
                            ref={(el) => (tabRefs.current[index] = el)}
                        >
                            {tab.label}
                            <span
                                className={`ml-2 px-2 py-1 rounded text-xs font-bold ${
                                    activeTab === tab.label ? tab.colors : tab.color
                                }`}
                            >
                                {tab.count}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Icon */}
            <button
                onClick={scrollRight}
                className="absolute right-0 z-0 p-2 rounded-full lg:hidden"
            >
                <FaChevronRight className="h-3" />
            </button>
        </div>
    );
};

export default OrderTableTabs;