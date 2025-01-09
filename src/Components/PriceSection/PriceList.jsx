import React from "react";
import pricing from "../../assets/Images/Priceimage.png";
import GradientHeading from "../GradientHeading";

const PriceList = ({ heading, description }) => {
  return (
    <section className="Price-List">
      <div className="container mx-auto">
        <div className="rounded-small gap-4 md:grid md:grid-cols-2 md:gap-6 flex flex-col">
          {/* Rightside */}
          <div className="order-2 md:order-1">
            <div className="lg:max-w-md lg:mt-10 mt-5">
              <GradientHeading
                tag="h1"
                beforeText="Affordable Plans Tailored to Your"
                gradientText={heading}
                beforeSpanClassName="font-bold"
                textSize="text-3xl lg:text-5xl lg:leading-[55px]  md:text-4xl"
                className="mb-5"
              />
            </div>
            <p className="text-gray-700 font-medium text-small lg:text-base lg:leading-8">
              {description}
            </p>
          </div>
          {/* Leftside */}
          <div className="order-1 md:order-2 flex items-center justify-center">
            <img
              src={pricing}
              alt="Pricing-Image"
              className="max-w-full h-auto md:max-h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
