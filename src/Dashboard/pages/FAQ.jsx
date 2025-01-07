// import React, { useState, useEffect } from "react";
// import FaQbackground from "../../assets/Images/Hero.jpg";
// import { FaPlus } from "react-icons/fa";
// import { FaMinus } from "react-icons/fa";

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(0);
//   const [visibleLines, setVisibleLines] = useState([]);

//   const lines = ["How", "can we help you?"];

//   const faqs = [
//     {
//       question:
//         "How long does it take for the upvotes to start being delivered?",
//       answer:
//         "Yes. Taazaa provides skilled teams to assist you with product ideation, market analysis, and UX/UI design, as well as coding, testing, release, and support of the final product. We can even help you find venture capital funding. Taazaa is a complete custom software development company.",
//     },
//     {
//       question: "At what speed do the upvotes get delivered?",
//       answer:
//         "Custom software development is a significant investment. The cost depends on many variables, such as how complex the solution is, what type of software it is (mobile app, enterprise application, etc.), and what compliance measures need to be met.",
//     },
//     {
//       question: "How many upvotes should I send to my post?",
//       answer:
//         "Yes. We know good product support and maintenance are crucial to business growth. As part of an effective customer retention strategy, it ensures that your product keeps wowing users even as their expectations evolve. We proactively help you add features and triage bugs, so your software consistently meets your users’ needs.",
//     },
//     {
//       question: "What upvote speed should I choose for my order?",
//       answer:
//         "We follow an Agile, iterative development methodology enhanced by our team culture and wealth of experience. Agile development is an iterative process that involves multiple releases following a product roadmap. Agile gives us the ability to respond quickly to user feedback and changes in the market.",
//     },
//     {
//       question: "Will buying upvotes get my Reddit account banned?",
//       answer:
//         "Of course! Taazaa is a top-tier custom software development company. Engaging a dedicated team from Taazaa gives you access to developers and engineers with deep industry knowledge and experience. We deliver affordable, high-value solutions tailored to your business needs.",
//     },
//     {
//       question: "Can I order downvotes?",
//       answer:
//         "Yes, we provide upvotes and downvotes on both posts and comments.",
//     },
//     {
//       question: "Can I get recommendations for my Reddit marketing campaign?",
//       answer:
//         "Reach out to us through any of our contact methods and we'll be happy to answer your questions and help you put together your campaign.",
//     },
//     {
//       question: "What if I’m unsatisfied with my order?",
//       answer:
//         "If you're unsatisfied with your order for any reason, please reach out and get in touch - we'll try our best to make it right.",
//     },
//     {
//       question: "Do you do partnerships with agencies or resellers?",
//       answer:
//         "Yes, please reach out to us through any of our contact methods and we'll be happy to discuss any potential partnerships.",
//     },
//     {
//       question: "How do I place an order?",
//       answer:
//         "After signing in and adding funds to your account, you can place an order in the 'Orders' tab.",
//     },
//     {
//       question: "Can I order upvotes for a post that is more than a day old?",
//       answer:
//         "It depends on the subreddit that the post is in, some subreddit's allow for this and others don't. If you place an order that is ineligible, your funds will be refunded back into your balance.",
//     },
//   ];

//   useEffect(() => {
//     lines.forEach((line, index) => {
//       setTimeout(() => {
//         setVisibleLines((prev) => [...prev, line]);
//       }, index * 1000);
//     });
//   }, []);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="container mx-auto">
//       {/* Header Section */}
//       <div
//         className="relative lg:h-[550px] h-[350px] bg-cover bg-center rounded-small overflow-hidden"
//         style={{
//           backgroundImage: `url(${FaQbackground})`,
//         }}
//       >
//         {/* Overlay with Backdrop Filter */}
//         <div className="absolute inset-0 bg-black/75 bg-opacity-70 flex items-center justify-center"></div>
//         <div className="flex items-center justify-center h-full px-6 py-20 text-center lg:absolute lg:text-left lg:mt-36">
//           <h1 className="font-bold leading-10 text-white lg:text-largest text-4xl lg:leading-20">
//             <div
//               className="text-main-color animate__animated animate__bounceInLeft"
//               style={{ animationDuration: "1s", animationDelay: "0.1s" }}
//             >
//               How
//             </div>
//             <div
//               className="animate__animated animate__bounceInLeft"
//               style={{ animationDuration: "1s", animationDelay: "0.2s" }}
//             >
//               Can Help You ?
//             </div>
//           </h1>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="max-w-6xl mx-auto space-y-2 my-10">
//         <h1 className="text-sub-color lg:text-large text-basic font-bold ">
//           Frequently asked questions
//         </h1>
//         {faqs.map((faq, index) => (
//           <div key={index} className="border-b border-light-gray p-4">
//             <button
//               onClick={() => toggleFAQ(index)}
//               className={`flex justify-between items-center w-full gap-2 ${
//                 openIndex === index ? "" : "bg-white"
//               }`}
//             >
//               {/* Question */}
//               <h2 className="lg:text-base text-start font-medium text-sub-color">
//                 {faq.question}
//               </h2>

//               {/* Icon (+/-) */}
//               <span
//                 className={`transform transition-transform duration-500 text-base rounded-full p-2.5  ${
//                   openIndex === index
//                     ? "bg-main-color text-white"
//                     : "bg-[#fdece3] text-sub-color"
//                 }`}
//               >
//                 {openIndex === index ? (
//                   <FaMinus className="text-white h-4" />
//                 ) : (
//                   <FaPlus className="text-sub-color h-4" />
//                 )}
//               </span>
//             </button>
//             {/* Answer */}
//             <div
//               className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
//                 openIndex === index ? "max-h-[150px]" : "max-h-0"
//               }`}
//             >
//               <p className="text-sub-color lg:text-medium lg:py-4 py-2">
//                 {faq.answer}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;

import React, { useState, useEffect, useRef } from "react";
import FaQbackground from "../../assets/Images/Untitled__5_-removebg-preview.png";
import { FaPlus, FaMinus, FaSearch } from "react-icons/fa";
import Breadcrumb from "../components/breadcrumb";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // For individual question toggle
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleLines, setVisibleLines] = useState([]);
  const searchInputRef = useRef(null);
  const [openCategoryIndex, setOpenCategoryIndex] = useState(0); // For category toggle
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null); // For open question within a category

  const lines = ["How", "can we help you?"];

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question:
            "How long does it take for the upvotes to start being delivered?",
          answer:
            "Yes. Taazaa provides skilled teams to assist you with product ideation, market analysis, and UX/UI design, as well as coding, testing, release, and support of the final product. We can even help you find venture capital funding. Taazaa is a complete custom software development company.",
        },
        {
          question: "How do I place an order?",
          answer:
            "After signing in and adding funds to your account, you can place an order in the 'Orders' tab.",
        },
        {
          question:
            "Can I order upvotes for a post that is more than a day old?",
          answer:
            "It depends on the subreddit that the post is in, some subreddit's allow for this and others don't. If you place an order that is ineligible, your funds will be refunded back into your balance.",
        },
        {
          question: "What if I’m unsatisfied with my order?",
          answer:
            "If you're unsatisfied with your order for any reason, please reach out and get in touch - we'll try our best to make it right.",
        },
      ],
    },
    {
      category: "Upvote Delivery",
      questions: [
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
      ],
    },
    {
      category: "Account and Policies",
      questions: [
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
          question:
            "Can I get recommendations for my Reddit marketing campaign?",
          answer:
            "Reach out to us through any of our contact methods and we'll be happy to answer your questions and help you put together your campaign.",
        },
      ],
    },
    {
      category: "Partnerships and Support",
      questions: [
        {
          question: "Do you do partnerships with agencies or resellers?",
          answer:
            "Yes, please reach out to us through any of our contact methods and we'll be happy to discuss any potential partnerships.",
        },
      ],
    },
  ];

  useEffect(() => {
    lines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, index * 500); // Adjusted timing for faster animation
    });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryClick = (index) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index);
  };

  const handleQuestionClick = (categoryIndex, questionIndex) => {
    setOpenQuestionIndex(
      openQuestionIndex === `${categoryIndex}-${questionIndex}`
        ? null
        : `${categoryIndex}-${questionIndex}`
    );
    if (openIndex !== null) {
      setOpenIndex(null);
    }
  };

  const filteredFAQs = faqs.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  const hasSearchResults = filteredFAQs.some(
    (category) => category.questions.length > 0
  );
  const hasCategories = faqs.some((faq) => faq.category);

  return (
    <>
      <div className="container mx-auto">
        {/* BACKGROUND-IMAGE */}
        <div className="relative md:h-[450px] h-[300px] bg-cover bg-no-repeat bg-center overflow-hidden rounded-medium">
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10"></div>
          <div
            className="absolute inset-0 -z-10"
            style={{
              background: `url(${FaQbackground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(2px)",
            }}
          ></div>
          <div className="text-center md:mt-44 mt-28 relative z-20 lg:space-y-2">
            <h1
              className="font-bold text-white text-center animate__animated animate__bounceIn lg:text-5xl text-3xl "
              style={{ animationDuration: "1s", animationDelay: "0.1s" }}
            >
              FAQ
            </h1>
            <p
              className="font-bold text-main-color text-center animate__animated animate__bounceIn lg:text-5xl text-3xl"
              style={{ animationDuration: "1s", animationDelay: "0.2s" }}
            >
              Got Questions?
            </p>
          </div>
        </div>

        <div className="mt-5">
          <h1 className="font-medium text-sub-color text-base lg:text-basic">
            FAQS
          </h1>
          <div className="flex items-center space-x-4">
            <Breadcrumb
              items={[
                { label: "Dashboard", link: "/dashboard" },
                { label: "FAQ" },
              ]}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto my-10">
          {hasSearchResults && (
            <>
              {hasCategories
                ? filteredFAQs.map((category, categoryIndex) => {
                    if (category.questions.length === 0) {
                      return null;
                    }
                    return (
                      <div key={categoryIndex} className="my-5">
                        <button
                          onClick={() => handleCategoryClick(categoryIndex)}
                          className="w-full lg:text-2xl text-medium font-medium text-sub-color border-b lg:px-3 px-2 border-light-gray pb-2.5 capitalize flex justify-between items-center"
                        >
                          {category.category}
                          {/* Buttons */}
                          <span
                            className={`transform transition-transform duration-500 text-base rounded-full px-3 py-2 ${
                              openCategoryIndex === categoryIndex
                                ? "bg-main-color text-white"
                                : "bg-[#fff5f0] text-sub-color"
                            }`}
                          >
                            {openCategoryIndex === categoryIndex ? (
                              <FaMinus className="text-white h-4" />
                            ) : (
                              <FaPlus className="text-sub-color h-4" />
                            )}
                          </span>
                        </button>
                        <div
                          className={`overflow-hidden transition-[max-height] duration-700 ease-in ${
                            openCategoryIndex === categoryIndex
                              ? "max-h-[450px]"
                              : "max-h-0"
                          }`}
                        >
                          {category.questions.map((faq, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg shadow-main mt-4 overflow-hidden border border-gray-300/50"
                            >
                              <button
                                onClick={() =>
                                  handleQuestionClick(categoryIndex, index)
                                }
                                className={`flex justify-between items-center w-full lg:p-3 p-2.5 transition-colors duration-200 text-left gap-4 ${
                                  openQuestionIndex ===
                                  `${categoryIndex}-${index}`
                                    ? "bg-gray-100"
                                    : "hover:bg-gray-50"
                                }`}
                              >
                                <h3 className="lg:text-base text-start font-normal text-sub-color">
                                  {faq.question}
                                </h3>
                                <span
                                  className={`transform transition-transform duration-500 text-base rounded-full px-3 py-2 ${
                                    openQuestionIndex ===
                                    `${categoryIndex}-${index}`
                                      ? "bg-main-color text-white"
                                      : "bg-[#fff5f0] text-sub-color"
                                  }`}
                                >
                                  {openQuestionIndex ===
                                  `${categoryIndex}-${index}` ? (
                                    <FaMinus className="text-white h-4" />
                                  ) : (
                                    <FaPlus className="text-sub-color h-4" />
                                  )}
                                </span>
                              </button>
                              <div
                                className={`overflow-hidden transition-[max-height] duration-700 ease-in ${
                                  openQuestionIndex ===
                                  `${categoryIndex}-${index}`
                                    ? "max-h-[250px]"
                                    : "max-h-0"
                                }`}
                              >
                                <p className="text-sub-color font-medium lg:text-medium lg:py-4 lg:px-4 px-2 py-2">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })
                : filteredFAQs.map((category, categoryIndex) => {
                    if (category.questions.length === 0) {
                      return null;
                    }
                    return (
                      <div key={categoryIndex}>
                        {category.questions.map((faq, index) => (
                          <div
                            key={index}
                            className="bg-white rounded-lg shadow-main mt-4 overflow-hidden border border-gray-300/50"
                          >
                            <button
                              onClick={() => toggleFAQ(index)}
                              className={`flex justify-between items-center w-full lg:p-3 p-2.5 transition-colors duration-200 text-left gap-4 ${
                                openIndex === index
                                  ? "bg-gray-100"
                                  : "hover:bg-gray-50"
                              }`}
                            >
                              <h3 className="lg:text-base text-start font-normal text-sub-color">
                                {faq.question}
                              </h3>
                              <span
                                className={`transform transition-transform duration-500 text-base rounded-full px-3 py-2 ${
                                  openIndex === index
                                    ? "bg-main-color text-white"
                                    : "bg-[#fdece3] text-sub-color"
                                }`}
                              >
                                {openIndex === index ? (
                                  <FaMinus className="text-white h-4" />
                                ) : (
                                  <FaPlus className="text-sub-color h-4" />
                                )}
                              </span>
                            </button>
                            <div
                              className={`overflow-hidden transition-[max-height] duration-700 ease-in ${
                                openIndex === index
                                  ? "max-h-[250px]"
                                  : "max-h-0"
                              }`}
                            >
                              <p className="text-sub-colo font-medium lg:text-medium lg:py-4 px-4 py-2">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FAQ;
