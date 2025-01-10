import React from "react";
import Pricing from "../../Components/Pricing";
import Customize_Payment from "../components/Customize_Payment";
import ContactBtn from "../../Components/ContactBtn";

const FundPricing = () => {
  return (
    <>
      <Pricing />
      <Customize_Payment />
      <ContactBtn
        headingBeforeText="We’re Here to Help—Contact"
        headingGradientText="Us Today!"
        buttonText="Contact"
        linkTo="/quote"
      />
    </>
  );
};

export default FundPricing;
