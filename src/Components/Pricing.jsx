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
      {/* <h1 className="text-center text-[#2d2624] lg:text-[48px] text-[32px] font-black lg:leading-[60px] leading-10">
        Tiered pricing with <br /> bulk discounts
      </h1> */}
      <p className="lg:text-[24px] text-[18px] text-[#2d2624] my-6 text-center font-bold">
        Choose the perfect tier for your needs
      </p>

      {/* Large Screen Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 border-2 border-[#919dab33] rounded-[26px]">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-[26px] p-4 ${
                plan.bestValue
                  ? "border-[#FF5700] border-[3px] relative"
                  : "bg-white"
              }`}
            >
              {plan.bestValue && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FF5700] text-white text-[16px] font-bold py-1 px-2 rounded-full">
                  Best Value
                </div>
              )}
              <h3 className="text-[14px] font-bold text-[#919EAB] mb-3">
                {plan.title}
              </h3>
              <p className="text-[20px] font-bold text-[#2D2624] mb-3">
                {plan.price}
              </p>
              <p className="text-[14px] font-bold text-[#A3AEB9] mb-3">
                {plan.rate}
              </p>
              {plan.discount && (
                <p className="text-[14px] text-[#FF5F0C] font-bold mb-3">
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
              className={`py-2 text-[16px] font-bold transition-all ease-in duration-200
        ${
          selectedPlan === plan
            ? "text-[#FF5700] border-b-2 border-[#FF5700]"
            : "bg-transparent text-[#2D2624] border-b-2 border-transparent hover:border-[#FF5700] hover:text-[#FF5700]"
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
            className={`border-4 border-[#FF5700] rounded-[26px] p-6 bg-white shadow-lg md:w-[60%] w-full ${
              selectedPlan.title === "Standard"
                ? "border-2 border-[#FF5700]"
                : ""
            }`}
          >
            <h3 className="text-[14px] font-bold text-[#919EAB] mb-3">
              {selectedPlan.title}
            </h3>
            <p className="text-[20px] font-bold text-[#2D2624] mb-3">
              {selectedPlan.price}
            </p>
            <p className="text-[14px] font-bold text-[#A3AEB9] mb-3">
              {selectedPlan.rate}
            </p>
            {selectedPlan.discount && (
              <p className="text-[14px] text-[#FF5F0C] font-bold mb-3">
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
