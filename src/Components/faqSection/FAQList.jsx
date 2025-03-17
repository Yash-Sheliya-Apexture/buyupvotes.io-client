import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const FAQList = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="FAQ-List">
      <div className="container mx-auto">
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-4 border-b border-gray-300">
              <button
                onClick={() => toggleFAQ(index)}
                className={`flex justify-between items-center w-full gap-4 ${
                  openIndex === index ? "" : "bg-white"
                }`}
              >
                {/* Question */}
                <h2 className="font-medium lg:text-basic text-start text-sub-color">
                  {faq.question}
                </h2>

                {/* Icon (+/-) */}
                <span
                  className={`transition-all duration-300 text-base rounded-full lg:px-3.5 px-2.5 py-2 lg:py-2 flex items-center justify-center ${
                    openIndex === index
                      ? "bg-gradient-to-bl from-[#ff5700] to-[#fdbb90] text-white"
                      : "bg-[#d3d3d375] text-sub-color "
                  }`}
                >
                  {openIndex === index ? (
                    <FaChevronUp
                      className={`text-white lg:h-4 h-3 transform transition-transform duration-30`}
                    />
                  ) : (
                    <FaChevronDown
                      className={`text-sub-color lg:h-4 h-3 transform transition-transform duration-300`}
                    />
                  )}
                </span>
              </button>
              {/* Answer */}
              <div
                className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                  openIndex === index ? "max-h-[150px]" : "max-h-0"
                }`}
              >
                <p className="py-2 font-medium text-gray-700 lg:text-medium lg:py-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQList;
