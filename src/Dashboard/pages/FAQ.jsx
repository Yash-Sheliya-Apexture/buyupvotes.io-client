import React, { useState, useEffect } from "react";
import FaQbackground from "../../assets/Images/Hero.jpg";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [visibleLines, setVisibleLines] = useState([]);

  const lines = ["How", "can we help you?"];

  const faqs = [
    {
      question:
        "How long does it take for the upvotes to start being delivered?",
      answer:
        "Yes. Taazaa provides skilled teams to assist you with product ideation, market analysis, and UX/UI design, as well as coding, testing, release, and support of the final product. We can even help you find venture capital funding. Taazaa is a complete custom software development company.",
    },
    {
      question: "At what speed do the upvotes get delivered?",
      answer:
        "Custom software development is a significant investment. The cost depends on many variables, such as how complex the solution is, what type of software it is (mobile app, enterprise application, etc.), and what compliance measures need to be met.",
    },
    {
      question: "How many upvotes should I send to my post?",
      answer:
        "Yes. We know good product support and maintenance are crucial to business growth. As part of an effective customer retention strategy, it ensures that your product keeps wowing users even as their expectations evolve. We proactively help you add features and triage bugs, so your software consistently meets your users’ needs.",
    },
    {
      question: "What upvote speed should I choose for my order?",
      answer:
        "We follow an Agile, iterative development methodology enhanced by our team culture and wealth of experience. Agile development is an iterative process that involves multiple releases following a product roadmap. Agile gives us the ability to respond quickly to user feedback and changes in the market.",
    },
    {
      question: "Will buying upvotes get my Reddit account banned?",
      answer:
        "Of course! Taazaa is a top-tier custom software development company. Engaging a dedicated team from Taazaa gives you access to developers and engineers with deep industry knowledge and experience. We deliver affordable, high-value solutions tailored to your business needs.",
    },
    {
      question: "Can I order downvotes?",
      answer:
        "Yes, we provide upvotes and downvotes on both posts and comments.",
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

  useEffect(() => {
    lines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, index * 1000);
    });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Header Section */}
      <div
        className="relative h-[550px] bg-cover bg-center rounded-small"
        style={{
          backgroundImage: `url(${FaQbackground})`,
        }}
      >
        {/* Overlay with Backdrop Filter */}
        <div className="absolute inset-0 bg-black/75 bg-opacity-70 flex items-center justify-center rounded-small"></div>
        <div className="absolute bottom-20 left-6">
          <h1 className="text-white text-largest font-bold leading-20">
            {lines.map((line, index) => (
              <span
                key={index}
                className={`block ${
                  visibleLines.includes(line)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-14"
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
      <div className="max-w-5xl mx-auto mt-10">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-light-gray">
            <button
              onClick={() => toggleFAQ(index)}
              className={`flex justify-between items-center w-full py-3 ${
                openIndex === index ? "" : "bg-white"
              }`}
            >
              {/* Question */}
              <h2 className="text-base font-medium text-sub-color">
                {faq.question}
              </h2>

              {/* Icon (+/-) */}
              <span
                className={`transform transition-transform duration-500 text-base px-4 py-2 rounded-full ${
                  openIndex === index
                    ? "bg-main-color text-white"
                    : "bg-gray-100 text-sub-color"
                }`}
              >
                {openIndex === index ? (
                  <FaMinus className="text-white h-4" />
                ) : (
                  <FaPlus className="text-sub-color h-4" />
                )}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                openIndex === index ? "max-h-[150px]" : "max-h-0"
              }`}
            >
              <p className="text-sub-color text-medium leading-7 py-4">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;