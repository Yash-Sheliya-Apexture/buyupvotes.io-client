import React from "react";
import Pricing from "../../Components/Pricing";
import Customize_Payment from "../components/Customize_Payment";
import Button from "../components/Button";
import payment_logos from "../../assets/Images/allPaymentIcons.png";

const FundPricing = () => {
  return (
    <div className="container mx-auto">
      <Pricing />
      <Customize_Payment />
      <div className="flex items-center justify-center my-5">
        <img src={payment_logos} alt="" className="rounded-lg lg:max-w-3xl" />
      </div>
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <hr className="border border-gray-300/50 w-4/5" />
        </div>
        <h1 className="mb-4 text-base font-bold text-sub-color">
          Have any questions?
        </h1>
        <p className="font-medium text-sub-color text-small">
          Contact us and we'll get back to you as soon as possible.
        </p>
        <div className="my-6">
          <Button to="/dashboard/contactus">Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default FundPricing;
