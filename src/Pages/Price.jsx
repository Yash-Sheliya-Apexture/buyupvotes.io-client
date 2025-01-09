import React from "react";
import Pricing from "../Components/Pricing";
import Currency from "../Components/Currency";
import { Link } from "react-router-dom";
import GradientHeading from "../Components/GradientHeading";
import BreadcrumbHeader from "../Components/BreadcrumbHeader";
import PriceList from "../Components/PriceSection/PriceList";
const Price = () => {
  const breadcrumbs = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Pricing" },
  ];

  return (
    <main className="my-10">
      {/* Pricing-Page */}
      <BreadcrumbHeader title="Pricing" breadcrumbs={breadcrumbs} />
      <PriceList
        heading="Fit Your Needs"
        description=" Choose the plan that’s right for you! Our flexible pricing options
              are designed to meet the needs of individuals, startups, and
              growing businesses.Upgrade anytime as your needs grow—no hassle,
              no hidden costs. Start your journey today with confidence and
              transparency!"
      />
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
    </main>
  );
};

export default Price;
