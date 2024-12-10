import React, { useState } from "react";

const PricingWithMenu = () => {
  // Pricing data
  const pricingPlans = [
    {
      title: "Starter",
      price: "$10+",
      rate: "$0.05/upvote",
      discount: "10% discount",
      features: [
        "Post upvotes",
        "Post downvotes",
        "Comment upvotes",
        "Comment downvotes",
      ],
    },
    {
      title: "Basic",
      price: "$100+",
      rate: "$0.03/upvote",
      discount: "40% discount",
      features: [
        "Post upvotes",
        "Post downvotes",
        "Comment upvotes",
        "Comment downvotes",
      ],
    },
    {
      title: "Standard",
      price: "$250+",
      rate: "$0.025/upvote",
      discount: "50% discount",
      features: [
        "Post upvotes",
        "Post downvotes",
        "Comment upvotes",
        "Comment downvotes",
      ],
      bestValue: true,
    },
    {
      title: "Pro",
      price: "$500+",
      rate: "$0.02/upvote",
      discount: "60% discount",
      features: [
        "Post upvotes",
        "Post downvotes",
        "Comment upvotes",
        "Comment downvotes",
      ],
    },
    {
      title: "Elite",
      price: "$750+",
      rate: "$0.015/upvote",
      discount: "70% discount",
      features: [
        "Post upvotes",
        "Post downvotes",
        "Comment upvotes",
        "Comment downvotes",
      ],
    },
  ];

  // State to track the selected plan
  const [selectedPlan, setSelectedPlan] = useState(pricingPlans[2]);

  return (
    <section className="container mx-auto pt-10" id="Pricing">
      {/* <h1 className="text-center text-sub-color lg:text-[48px] text-[32px] font-black lg:leading-[60px] leading-10">
        Tiered pricing with <br /> bulk discounts
      </h1> */}
      <p className="lg:text-basic text-medium text-sub-color my-6 text-center font-bold">
        Choose the perfect tier for your needs
      </p>

      {/* Large Screen Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 border-2 border-[#919dab33] rounded-small">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-[26px] p-4 ${
                plan.bestValue
                  ? "border-main-color border-2 relative"
                  : "bg-white"
              }`}
            >
              {plan.bestValue && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-main-color text-white text-small font-bold py-1 px-2 rounded-full">
                  Best Value
                </div>
              )}
              <h3 className="text-[14px] font-bold text-light-gray mb-3">
                {plan.title}
              </h3>
              <p className="text-[20px] font-bold text-sub-color mb-3">
                {plan.price}
              </p>
              <p className="text-[14px] font-bold text-[#A3AEB9] mb-3">
                {plan.rate}
              </p>
              {plan.discount && (
                <p className="text-[14px] text-main-color font-bold mb-3">
                  {plan.discount}
                </p>
              )}
              <hr className="border-t border-t-gray-300 mb-3" />
              <ul className="space-y-0">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex p-2">
                    <span className="text-green-500 mr-2">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet/Small Screen Layout */}
      {/* Tablet/Small Screen Layout */}
      <div className="block lg:hidden">
        <div className="flex overflow-x-auto md:space-x-12 space-x-4 pb-8 justify-center items-center">
          {pricingPlans.map((plan, index) => (
            <button
              key={index}
              className={`py-2 text-small font-bold transition-all ease-in duration-200
        ${
          selectedPlan === plan
            ? "text-main-color border-b-2 border-main-color"
            : "bg-transparent text-sub-color border-b-2 border-transparent hover:border-main-color hover:text-main-color"
        }
      `}
              onClick={() => setSelectedPlan(plan)}
            >
              {plan.title}
            </button>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <div
            className={`border-4 border-main-color rounded-small p-6 bg-white shadow-lg md:w-[60%] w-full ${
              selectedPlan.title === "Standard"
                ? "border-2 border-main-color"
                : ""
            }`}
          >
            <h3 className="text-[14px] font-bold text-light-gray mb-3">
              {selectedPlan.title}
            </h3>
            <p className="text-[20px] font-bold text-sub-color mb-3">
              {selectedPlan.price}
            </p>
            <p className="text-[14px] font-bold text-[#A3AEB9] mb-3">
              {selectedPlan.rate}
            </p>
            {selectedPlan.discount && (
              <p className="text-[14px] text-main-color font-bold mb-3">
                {selectedPlan.discount}
              </p>
            )}
            <hr className="border-t border-t-gray-300 mb-3" />
            <ul className="space-y-2">
              {selectedPlan.features.map((feature, i) => (
                <li key={i} className="flex p-2">
                  <span className="text-green-500 mr-2">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingWithMenu;
