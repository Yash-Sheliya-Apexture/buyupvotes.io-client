import React, { useState, useEffect } from "react";
import FaQbackground from "../../assets/Images/Hero.jpg";
import { FaAngleDown } from "react-icons/fa6";
import { div } from "motion/react-client";

const FAQs = [
  {
    question: "How long does it take for the upvotes to start being delivered?",
    answer:
      "It typically starts within a few minutes, but delays can occur during high traffic times.",
  },
  {
    question: "At what speed do the upvotes get delivered?",
    answer:
      "The upvotes are delivered at a steady pace to ensure account safety.",
  },
  {
    question: "How many upvotes should I send to my post?",
    answer:
      "It depends on your post's visibility and audience. Start small and increase as needed.",
  },
  {
    question: "What upvote speed should I choose for my order?",
    answer:
      "Choose a speed based on the size of your post and how quickly you want engagement.",
  },
  {
    question: "Will buying upvotes get my Reddit account banned?",
    answer:
      "No, we take all necessary precautions to ensure your account remains safe.",
  },
  {
    question: "Can I order downvotes?",
    answer: "Yes, we provide upvotes and downvotes on both posts and comments.",
  },
  {
    question: "Can I get recommendations for my Reddit marketing campaign?",
    answer:
      "Reach out to us through any of our contact methods and we'll be happy to answer your questions and help you put together your campaign.",
  },
  {
    question: "What if I’m unsatisfied with my order?",
    answer:
      "If you're unsatisfied with your order for any reason, please reach out and get in touch - we'll try our best to make it right.",
  },
  {
    question: "Do you do partnerships with agencies or resellers?",
    answer:
      "Yes, please reach out to us through any of our contact methods and we'll be happy to discuss any potential partnerships.",
  },
  {
    question: "How do I place an order?",
    answer:
      "After signing in and adding funds to your account, you can place an order in the 'Orders' tab.",
  },
  {
    question: "Can I order upvotes for a post that is more than a day old?",
    answer:
      "It depends on the subreddit that the post is in, some subreddit's allow for this and others don't. If you place an order that is ineligible, your funds will be refunded back into your balance.",
  },
];

/* FAQ Question And Answer */
const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="rounded-medium shadow-md border-gray-border">
      {/* Question Section */}
      <button
        onClick={toggle}
        className="w-full text-left p-4 font-semibold text-[#2D2624] flex justify-between items-center transition-all duration-300"
      >
        {question}
        {/* Rotate Icon Conditionally */}
        <FaAngleDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Smooth Expand/Collapse Animation for Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[250px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 text-[#2D2624] font-medium">{answer}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleLines, setVisibleLines] = useState([]);

  const lines = ["How", "can we help you?"];

  useEffect(() => {
    lines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, index * 500); // Adjust timing for delay between lines
    });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };  

  return (
    <div>
      {/* Header Section */}
      <div
        className="relative h-[600px] bg-cover bg-center rounded-sm"
        style={{
          backgroundImage: `url(${FaQbackground})`,
        }}
      >
        {/* Overlay with Backdrop Filter */}
        <div className="absolute inset-0 bg-[#121213] bg-opacity-70 flex items-center justify-center rounded-sm"></div>
        <div className="absolute bottom-20 left-10">
          <h1 className="text-white text-[60px] font-black leading-[70px]">
            {lines.map((line, index) => (
              <span
                key={index}
                className={`block ${
                  visibleLines.includes(line)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-16"
                } transition-all duration-500 ease-in`}
              >
                {index === 0 ? (
                  <span className="text-main-color">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[20px] text-[#2d2624] font-bold my-8">
          Frequently asked questions
        </h2>
        <div className="space-y-2">
          {FAQs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
