import React from "react";
import Pricing from "../Components/Pricing";
import Currency from "../Components/Currency";
import BreadcrumbHeader from "../Components/BreadcrumbHeader";
import PriceList from "../Components/PriceSection/PriceList";
const Price = () => {
  const breadcrumbs = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Pricing" },
  ];

  return (
    <main className="py-10" id="Pricing">
      {/* Pricing-Page */}
      <BreadcrumbHeader title="Pricing" breadcrumbs={breadcrumbs} />
      <PriceList
        heading="Fit Your Needs"
        description="Choose the plan that’s right for you! Our flexible pricing options
              are designed to meet the needs of individuals, startups, and
              growing businesses.Upgrade anytime as your needs grow—no hassle,
              no hidden costs. Start your journey today with confidence and
              transparency!"
      />
      <Pricing />
      <Currency />
    </main>
  );
};

export default Price;
