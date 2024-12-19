import React, { useState } from "react";

const PricingWithMenu = () => {
  // Pricing data
  const pricingPlans = [
    {
      id: "1",
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
      id: "2",
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
      id: "3",
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
      id: "4",
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
      id: "5",
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
    <section className="container mx-auto lg:pt-10" id="Pricing">
      <p className="lg:text-basic text-medium text-sub-color pb-8 text-center font-medium">
        Choose the perfect tier for your needs
      </p>

      {/* Large Screen Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 border border-[rgba(145, 158, 171, 0.2)] rounded-small">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-small p-6 ${
                plan.bestValue || selectedPlan.title === plan.title
                  ? "border-main-color border-2 relative"
                  : "bg-white"
              }`}
            >
              {plan.bestValue && (
                <div className="absolute top-0 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 bg-main-color text-white text-xs font-bold py-1 px-2 rounded-full ">
                  Best Value
                </div>
              )}
              <div className="space-y-2">
                <h3 className="text-xs font-normal text-light-gray">
                  {plan.title}
                </h3>
                <p className="text-base font-bold text-sub-color">
                  {plan.price}
                </p>
                <p className="text-xs font-normal text-light-gray">
                  {plan.rate}
                </p>
                {plan.discount && (
                  <p className="text-xs text-main-color font-medium">
                    {plan.discount}
                  </p>
                )}
                <hr className="border-t border-t-gray-300" />
                <ul className="space-y-0">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex p-2">
                      <span className="text-green-500 mr-2">✔</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet/Small Screen Layout */}
      <div className="block lg:hidden">
        {/* Pricing Tab */}
        <div className="flex overflow-x-auto md:space-x-12 space-x-6 pb-6 justify-center items-center">
          {pricingPlans.map((plan, index) => (
            <button
              key={index}
              className={`py-2 text-small font-semibold transition-all ease-in duration-200
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
            className={`rounded-small p-6 bg-white border border-gray-300 md:w-[60%] w-full relative ${
              selectedPlan.title === "Standard"
                ? "border-2 border-main-color"
                : ""
            }`}
          >
            {selectedPlan.bestValue && (
              <div className="flex justify-center absolute -top-5 left-1/2 -translate-x-1/2">
                <span className="border-4 border-white bg-main-color py-1 px-5 rounded-full text-white text-xs ">
                  Best Value
                </span>
              </div>
            )}
            <h3 className="text-xs font-medium text-light-gray mb-3">
              {selectedPlan.title}
            </h3>
            <p className="text-base font-medium text-sub-color mb-3">
              {selectedPlan.price}
            </p>
            <p className="text-xs font-medium text-[#A3AEB9] mb-3">
              {selectedPlan.rate}
            </p>
            {selectedPlan.discount && (
              <p className="text-xs text-main-color font-medium mb-3">
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
