import React from "react";
import Pricing from "../Components/Pricing";
import Currency from "../Components/Currency";
import Button from "../Dashboard/components/Button";
import { Link } from "react-router-dom";

const Pricedata = () => {
  
  return (
    <div className="mt-10">
      <h1
        className="text-center lg:text-5xl text-large font-bold text-sub-color lg:leading-[60px] lg:-mb-2 mb-2 animate__animated animate__fadeInDown"
        style={{ animationDuration: "0.5s", animationDelay: "0.2s" }}
      >
        Tiered pricing with <br /> bulk discounts
      </h1>
      <Pricing />
      <Currency />
      <div className="pb-8 pt-4">
        <h1 className="text-center text-[24px] font-bold text-[#2D2624]">
          Have any questions?
        </h1>
        <p className="lg:text-[18px] text-[16px] text-[#403633] mt-3 mb-6 text-center">
          Contact us and we'll get back to you as soon as possible.
        </p>
        <div className="flex justify-center">
          <Button>
            <Link to="/dashboard/contactus">Contact us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricedata;
