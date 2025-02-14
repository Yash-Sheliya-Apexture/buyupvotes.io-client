// import React from "react";
// import Pricing from "../../Components/Pricing";
// import Customize_Payment from "../components/Customize_Payment";
// import ContactBtn from "../../Components/ContactBtn";
// import BreadcrumbHeader from "../../Components/BreadcrumbHeader";

// const FundPricing = () => {
//   const breadcrumbs = [
//     { label: "Dashboard", link: "/dashboard" },
//     { label: "Pricing" },
//   ];
//   return (
//     <>
//       <div>
//         <BreadcrumbHeader title="Pricing" breadcrumbs={breadcrumbs} />
//         {/* <Pricing /> */}
//         <Customize_Payment />
//         {/* <ContactBtn
//           headingBeforeText="We’re Here to Help—Contact"
//           headingGradientText="Us Today!"
//           buttonText="Contact"
//           linkTo="/quote"
//         /> */}
//       </div>
//     </>
//   );
// };

// export default FundPricing;



import React from "react";
import Customize_Payment from "../components/Customize_Payment";
import BreadcrumbHeader from "../../Components/BreadcrumbHeader";
import FundPricingTopbar from "../components/FundPricing/FundPricingTopbar";

const FundPricing = () => {
  const breadcrumbs = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Pricing" },
  ];
  return (
    <>
      <BreadcrumbHeader title="Pricing" breadcrumbs={breadcrumbs} />
      <FundPricingTopbar />
      <Customize_Payment />
    </>
  );
};

export default FundPricing;
