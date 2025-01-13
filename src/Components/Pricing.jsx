import React from "react";
import GradientHeading from "./GradientHeading";
import images from "../assets/websiteImages/index";

const PricingWithMenu = () => {
  const pricingData = [
    {
      icon: images.true_icon,
      title: "Basic",
      price: "$100",
      pricePerUpvote: "$0.03/upvote",
      discount: "14% discount",
      features: [
        "Post upvotes",
        "Post downvotes",
        "Comment upvotes",
        "Comment downvotes",
      ],
      isBestValue: false,
    },
    {
      icon: images.standard_Icon,
      title: "Standard",
      price: "$250",
      pricePerUpvote: "$0.025/upvote",
      discount: "50% discount",
      features: [
        "Post upvotes",
        "Post downvotes",
        "Comment upvotes",
        "Comment downvotes",
      ],
      isBestValue: true,
    },
    {
      icon: images.plan_1,
      title: "Pro",
      price: "$500",
      pricePerUpvote: "$0.02/upvote",
      discount: "60% discount",
      features: [
        "Post upvotes",
        "Post downvotes",
        "Comment upvotes",
        "Comment downvotes",
      ],
      isBestValue: false,
    },
  ];

  return (
    <section className="flex items-center justify-center bg-white Hero-Home">
      <div className="container mx-auto">
        <GradientHeading
          tag="h3"
          beforeText="Choose the perfect plan"
          gradientText="for your needs."
          beforeSpanClassName="font-bold"
          textSize="text-3xl lg:text-[40px]"
          className="py-6 text-left lg:pb-14 lg:mt-4 md:text-center"
        />

        <div className="mb-10">
          {/* Grid of cards for large screens */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-4">
            {pricingData.map((plan, index) => (
              <div
                key={index}
                className={`p-4 border-2 lg:w-[320px] w-full pb-10 shadow-main ${
                  plan.isBestValue ? "border-main-color" : "border-gray-300"
                } rounded-2xl`}
              >
                <div className="relative plan-header">
                  {plan.isBestValue && (
                    <div className="text-white bg-main-color px-4 py-1.5 rounded-full text-xs font-medium absolute -top-8 left-[50%] translate-x-[-50%]">
                      Best Value
                    </div>
                  )}
                  <img
                    src={plan.icon}
                    alt={plan.title}
                    className="rounded-lg w-9 h-9"
                  />
                  <div className="mt-4 space-y-3">
                    <h6 className="font-medium text-sub-color">{plan.title}</h6>
                    <span className="block mt-3 text-3xl font-semibold font-BasierSquare">
                      {plan.price}+{"  "}
                      <span className="ml-2 font-medium text-small font-InterDisplay text-para-color">
                        {plan.pricePerUpvote}
                      </span>
                    </span>

                    <p className="text-xs font-medium text-main-color">
                      {plan.discount}
                    </p>
                  </div>
                </div>
                <hr className="my-2 border-t border-t-gray-300" />
                <div className="plan-details">
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex space-y-2">
                        <span className="mr-1.5 mt-2 text-green-500 text-small">
                          ✔
                        </span>
                        <span className="font-normal text-small">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingWithMenu;
