import React from "react";

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border border-gray-300 rounded-md">
      <button
        onClick={toggle}
        className="w-full text-left px-4 py-2 font-medium flex justify-between items-center"
      >
        {question}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && <div className="px-4 py-2 text-sub-color">{answer}</div>}
    </div>
  );
};

export default FAQItem;
