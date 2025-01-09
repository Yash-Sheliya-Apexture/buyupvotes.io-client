import React from "react";
import Pricing from "../Components/Pricing";
import Currency from "../Components/Currency";
import Button from "../Dashboard/components/Button";
import { Link } from "react-router-dom";
import Breadcrumb from "../Dashboard/components/Breadcrumb";
import GradientHeading from "../Components/GradientHeading";
import pricing from ".././assets/Images/Priceimage.png";

const Price = () => {
  const breadcrumbs = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Pricing" },
  ];

  return (
    <section className="my-10">
      {/* Pricing-Page */}
      <div className="container mx-auto">
        <h1 className="mb-2 font-bold text-sub-color text-basic">Pricing</h1>
        <div className="flex items-center space-x-4">
          <Breadcrumb items={breadcrumbs} />
        </div>

        {/* Header Section */}
        <div className="rounded-small gap-4 md:grid md:grid-cols-2 md:gap-6 flex flex-col">
          {/* Rightside */}
          <div className="order-1 md:order-2">
            <div className="lg:max-w-md lg:mt-10 mt-5">
              <GradientHeading
                tag="h1"
                beforeText="Affordable Plans Tailored to Your"
                gradientText="Fit Your Needs"
                beforeSpanClassName="font-bold"
                textSize="text-3xl lg:text-5xl lg:leading-[55px]  md:text-4xl"
                className="mb-5"
              />
            </div>
            <p className="text-gray-700 font-medium text-small lg:text-base lg:leading-8">
              Choose the plan that’s right for you! Our flexible pricing options
              are designed to meet the needs of individuals, startups, and
              growing businesses.Upgrade anytime as your needs grow—no hassle,
              no hidden costs. Start your journey today with confidence and
              transparency!
            </p>
          </div>
          {/* Leftside */}
          <div className="order-2 md:order-1 flex items-center justify-center">
            <img
              src={pricing}
              alt="Pricing-Image"
              className="max-w-full h-auto md:max-h-[450px]"
            />
          </div>
        </div>
        <Pricing />
        <Currency />
        <div className="flex justify-center items-center flex-col my-6">
          <GradientHeading
            tag="h1"
            beforeText="We’re Here to Help—Contact"
            gradientText="Us Today!"
            beforeSpanClassName="font-bold"
            textSize="text-basic lg:text-xlarge"
            className="mb-5"
          />
          <Link
            to="/contactus"
            className="inline-flex items-center gap-3 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Price;
