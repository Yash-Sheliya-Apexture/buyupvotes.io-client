// import { useState } from "react";
// import React from "react";
// import Pricing from "../../Components/Pricing";
// import { CiCreditCard1 } from "react-icons/ci";
// import { MdCurrencyBitcoin } from "react-icons/md";
// import { Link } from "react-router-dom";
// import payment_logos from "../../assets/Images/payment_logos.png";

// const FundPricing = () => {
//   const [selectedTab, setSelectedTab] = useState("creditCard");

//   return (
//     <div className="container mx-auto">
//       <Pricing />

//       {/* Tabs Section */}
//       <div className="py-10">
//         <div className="flex justify-center pb-4 space-x-8">
//           <button
//             className={`flex items-center font-bold lg:text-small text-xxs lg:px-4 px-0 py-2 ${
//               selectedTab === "creditCard"
//                 ? "text-main-color border-b-2 border-main-color"
//                 : "text-gray-600 hover:text-main-color"
//             }`}
//             onClick={() => setSelectedTab("creditCard")}
//           >
//             <span className="mr-2">
//               <CiCreditCard1 className="size-8" />
//             </span>
//             Credit Card
//           </button>
//           <button
//             className={`flex items-center font-bold lg:text-small text-xs lg:px-4 px-0 py-2 ${
//               selectedTab === "crypto"
//                 ? "text-main-color border-b-2 border-main-color"
//                 : "text-gray-600 hover:text-main-color"
//             }`}
//             onClick={() => setSelectedTab("crypto")}
//           >
//             <span className="mr-2">
//               <MdCurrencyBitcoin className="size-8" />
//             </span>{" "}
//             Cryptocurrency
//           </button>
//         </div>

//         {/* Animated Content Section */}
//         <div
//           className={`transition-all duration-300 ${
//             selectedTab === "creditCard" ? "opacity-100" : "opacity-0"
//           }`}
//           style={{
//             transform:
//               selectedTab === "creditCard"
//                 ? "translateY(0)"
//                 : "translateY(20px)",
//             display: selectedTab === "creditCard" ? "block" : "none",
//           }}
//         >
//           {/* Credit Card Content */}
//           <div className="flex items-center justify-center mt-4 text-center">
//             <p className="text-[#403633] lg:text-base max-w-[400px]">
//               Enter your{" "}
//               <span className="font-medium leading-10 text-main-color">
//                 deposit amount
//               </span>{" "}
//               using to Credit-Card many upvotes it will convert into:
//             </p>
//           </div>
//         </div>

//         <div
//           className={`transition-all duration-500 ${
//             selectedTab === "crypto" ? "opacity-100" : "opacity-0"
//           }`}
//           style={{
//             transform:
//               selectedTab === "crypto" ? "translateY(0)" : "translateY(60px)",
//             display: selectedTab === "crypto" ? "block" : "none",
//           }}
//         >
//           {/* Cryptocurrency Content */}
//           <div className="flex items-center justify-center mt-4 text-center">
//             <p className="text-[#403633] lg:text-base max-w-[400px]">
//               Enter your{" "}
//               <span className="font-medium leading-10 text-main-color">
//                 deposit amount
//               </span>{" "}
//               using to Cryptocurrency upvotes it will convert into:
//             </p>
//           </div>
//         </div>

//         {/* Input and Calculate Section */}
//         <div className="flex items-center justify-center mt-8">
//           {/* Input Section */}
//           <div className="relative">
//             <span className="text-black text-[24px] mr-2">$</span>
//             <input
//               placeholder="Deposit amount"
//               className="px-4 py-2 border-t border-b border-l border-black rounded-l-full focus:outline-none"
//             />
//           </div>

//           {/* Button Section */}
//           <button className="px-4 py-2 font-bold transition-all bg-transparent border-2 rounded-r-full border-main-color text-main-color">
//             Calculate
//           </button>
//         </div>

//         <div className="flex items-center justify-center mt-6">
//           <img src={payment_logos} alt="currencyImage" className="h-10" />
//         </div>

//         <div className="flex justify-center mb-4">
//           <hr className=" mt-10 border w-[85%]" />
//         </div>

//         <div className="flex flex-col items-center justify-center space-y-4">
//           <h1 className="text-base font-bold text-sub-color">
//             Have any questions?
//           </h1>
//           <p className="font-medium text-sub-color text-small">
//             Contact us and we'll get back to you as soon as possible.
//           </p>
//           <Link to="/Dashboard/ContactUs">
//             <button className="py-1 font-bold transition-all border rounded-full px-14 border-main-color text-main-color">
//               Contact Us
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FundPricing;



import React from "react";
import Pricing from "../../Components/Pricing";
import CustomizePayment from "../components/CustomizePayment";
import { Link } from "react-router-dom";

const FundPricing = () => {

  return (
    <div className="container mx-auto">
      <Pricing />
      <CustomizePayment />
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <hr className=" border w-[85%]" />
        </div>
        <h1 className="mb-4 text-base font-bold text-sub-color">
          Have any questions?
        </h1>
        <p className="font-medium text-sub-color text-small">
          Contact us and we'll get back to you as soon as possible.
        </p>
        <Link to="/Dashboard/ContactUs" className="inline-block py-1 mt-6 font-bold transition-all border rounded-full px-14 border-main-color text-main-color">
            Contact Us
        </Link>
      </div>
    </div>
  );
};

export default FundPricing;

