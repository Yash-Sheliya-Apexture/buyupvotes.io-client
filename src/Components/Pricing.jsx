// import React, { useState } from "react";
// import GradientHeading from "./GradientHeading";
// import images from "../assets/websiteImages/index";
// // import standard from '../assets/Images/Standard.svg';

// const PricingWithMenu = () => {
//   // Pricing data
//   const pricingPlans = [
//     {
//       id: "1",
//       title: "Starter",
//       price: "$10+",
//       rate: "$0.05/upvote",
//       discount: "10% discount",
//       features: [
//         "Post upvotes",
//         "Post downvotes",
//         "Comment upvotes",
//         "Comment downvotes",
//       ],
//     },
//     {
//       id: "2",
//       title: "Basic",
//       price: "$100+",
//       rate: "$0.03/upvote",
//       discount: "40% discount",
//       features: [
//         "Post upvotes",
//         "Post downvotes",
//         "Comment upvotes",
//         "Comment downvotes",
//       ],
//     },
//     {
//       id: "3",
//       title: "Standard",
//       price: "$250+",
//       rate: "$0.025/upvote",
//       discount: "50% discount",
//       features: [
//         "Post upvotes",
//         "Post downvotes",
//         "Comment upvotes",
//         "Comment downvotes",
//       ],
//       bestValue: true,
//     },
//     {
//       id: "4",
//       title: "Pro",
//       price: "$500+",
//       rate: "$0.02/upvote",
//       discount: "60% discount",
//       features: [
//         "Post upvotes",
//         "Post downvotes",
//         "Comment upvotes",
//         "Comment downvotes",
//       ],
//     },
//     {
//       id: "5",
//       title: "Elite",
//       price: "$750+",
//       rate: "$0.015/upvote",
//       discount: "70% discount",
//       features: [
//         "Post upvotes",
//         "Post downvotes",
//         "Comment upvotes",
//         "Comment downvotes",
//       ],
//     },
//   ];

//   // State to track the selected plan
//   const [selectedPlan, setSelectedPlan] = useState(pricingPlans[2]);

//   return (
//     <>
//       <section className="bg-white lg:pt-16">
//         <div className="container mx-auto">
//           <GradientHeading
//             tag="h1"
//             beforeText="Choose the perfect plan"
//             gradientText="for your needs."
//             beforeSpanClassName="font-bold"
//             textSize="text-5xl md:text-7xl lg:text-4xl"
//             className="mb-10 text-center"
//           />

//           <div className="mb-10 plan-wrap">
//             <div className="inline-grid w-full grid-cols-5 gap-4">
//               <div className="p-5 border border-gray-300 rounded-2xl shadow-plan">
//                 <div className="plan-header">
//                   <img src={images.plan_1} alt="" className="rounded-lg w-9 h-9" />
//                   <div className="mt-4 space-y-2">
//                     <h6 className="font-normal text-light-gray">Starter</h6>
//                     <span className="block mt-3 text-3xl font-semibold font-BasierSquare">$10+ <span className="text-sm font-normal font-InterDisplay text-light-gray">$0.05/upvote</span></span>
//                     <p className="text-xs font-medium text-main-color">10% discount</p>
//                   </div>
//                 </div>
//                 <hr className="my-2 border-t border-t-gray-300" />
//                 <div className="plan-details">
//                   <ul>
//                     <li className="flex p-2">
//                       <span className="mt-[2px] mr-2 text-green-500 text-sm">✔</span>
//                       <span className="text-sm">Post upvotes</span>
//                     </li>
//                     <li className="flex p-2">
//                       <span className="mr-2 text-sm text-green-500">✔</span>
//                       <span className="text-sm">Post downvotes</span>
//                     </li>
//                     <li className="flex p-2">
//                       <span className="mr-2 text-sm text-green-500">✔</span>
//                       <span className="text-sm">Comment upvotes</span>
//                     </li>
//                     <li className="flex p-2">
//                       <span className="mr-2 text-sm text-green-500">✔</span>
//                       <span className="text-sm">Comment downvotes</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="p-5 border border-gray-300 rounded-2xl shadow-plan">
//                 <div className="plan-header">
//                   <img src={images.plan_1} alt="" className="rounded-lg w-9 h-9" />
//                   <div className="mt-4 space-y-2">
//                     <h6 className="font-normal text-light-gray">Basic</h6>
//                     <span className="block mt-3 text-3xl font-semibold font-BasierSquare">$100+ <span className="text-sm font-normal font-InterDisplay text-light-gray">$0.03/upvote</span></span>
//                     <p className="text-xs font-medium text-main-color">14% discount</p>
//                   </div>
//                 </div>
//                 <hr className="my-2 border-t border-t-gray-300" />
//                 <div className="plan-details">
//                   <ul>
//                     <li className="flex p-2">
//                       <span className="mt-[2px] mr-2 text-green-500 text-sm">✔</span>
//                       <span className="text-sm">Post upvotes</span>
//                     </li>
//                     <li className="flex p-2">
//                       <span className="mr-2 text-sm text-green-500">✔</span>
//                       <span className="text-sm">Post downvotes</span>
//                     </li>
//                     <li className="flex p-2">
//                       <span className="mr-2 text-sm text-green-500">✔</span>
//                       <span className="text-sm">Comment upvotes</span>
//                     </li>
//                     <li className="flex p-2">
//                       <span className="mr-2 text-sm text-green-500">✔</span>
//                       <span className="text-sm">Comment downvotes</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="p-5 border border-main-color rounded-2xl shadow-plan"
//               >
//                 <div className="relative plan-header">
//                   <div class="text-white bg-main-color py-1 px-4 rounded-md text-sm absolute -top-9 left-[50%] translate-x-[-50%]">Best Value</div>
//                   <img src={images.standard_Icon} alt="" className="rounded-lg w-9 h-9" />
//                   <div className="mt-4 space-y-2">
//                     <h6 className="font-normal text-light-gray">Standard</h6>
//                     <span className="block mt-3 text-3xl font-semibold font-BasierSquare">$250+ <span className="text-sm font-normal font-InterDisplay text-light-gray">$0.025/upvote</span></span>
//                     <p className="text-xs font-medium text-main-color">50% discount</p>
//                   </div>
//                 </div>
//                 <hr className="my-2 border-t border-gray-300" />
//                 <div className="plan-details">
//                   <ul>
//                     <li className="flex p-2">
//                       <span className="mt-[2px] mr-2 text-green-500 text-sm">✔</span>
//                       <span className="text-sm">Post upvotes</span>
//                     </li>
//                     <li className="flex p-2">
//                       <span className="mr-2 text-sm text-green-500">✔</span>
//                       <span className="text-sm">Post downvotes</span>
//                     </li>
//                     <li className="flex p-2">
//                       <span className="mr-2 text-sm text-green-500">✔</span>
//                       <span className="text-sm">Comment upvotes</span>
//                     </li>
//                     <li className="flex p-2">
//                       <span className="mr-2 text-sm text-green-500">✔</span>
//                       <span className="text-sm">Comment downvotes</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="p-5 border border-gray-300 rounded-2xl shadow-plan">
//                 <div className="plan-header">
//                   <img src={images.plan_1} alt="" className="rounded-lg w-9 h-9" />
//                   <div className="mt-4 space-y-2">
//                     <h6 className="font-normal text-light-gray">Pro</h6>
//                     <span className="block mt-3 text-3xl font-semibold font-BasierSquare">$500+ <span className="text-sm font-normal font-InterDisplay text-light-gray">$0.02/upvote</span></span>
//                     <p className="text-xs font-medium text-main-color">60% discount</p>
//                   </div>
//                 </div>
//                 <hr className="my-2 border-t border-t-gray-300" />
//                 <div className="plan-details">
//                   <ul>
//                     <li className="flex p-2">
//                       <span className="mt-[2px] mr-2 text-green-500 text-sm">✔</span>
//                       <span className="text-sm">Post upvotes</span>
//                     </li>
//                     <li className="flex p-2">
//                       <span className="mr-2 text-sm text-green-500">✔</span>
//                       <span className="text-sm">Post downvotes</span>
//                     </li>
//                     <li className="flex p-2">
//                       <span className="mr-2 text-sm text-green-500">✔</span>
//                       <span className="text-sm">Comment upvotes</span>
//                     </li>
//                     <li className="flex p-2">
//                       <span className="mr-2 text-sm text-green-500">✔</span>
//                       <span className="text-sm">Comment downvotes</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="p-5 border border-gray-300 rounded-2xl shadow-plan">
//                 <div className="plan-header">
//                   <img src={images.plan_1} alt="" className="rounded-lg w-9 h-9" />
//                   <div className="mt-4 space-y-2">
//                     <h6 className="font-normal text-light-gray">Elite</h6>
//                     <span className="block mt-3 text-3xl font-semibold font-BasierSquare">$750+ <span className="text-sm font-normal font-InterDisplay text-light-gray">$0.015/upvote</span></span>
//                     <p className="text-xs font-medium text-main-color">70% discount</p>
//                   </div>
//                 </div>
//                 <hr className="my-2 border-t border-t-gray-300" />
//                 <div className="plan-details">
//                   <ul>
//                     <li className="flex p-2">
//                       <span className="mt-[2px] mr-2 text-green-500 text-sm">✔</span>
//                       <span className="text-sm">Post upvotes</span>
//                     </li>
//                     <li className="flex p-2">
//                       <span className="mr-2 text-sm text-green-500">✔</span>
//                       <span className="text-sm">Post downvotes</span>
//                     </li>
//                     <li className="flex p-2">
//                       <span className="mr-2 text-sm text-green-500">✔</span>
//                       <span className="text-sm">Comment upvotes</span>
//                     </li>
//                     <li className="flex p-2">
//                       <span className="mr-2 text-sm text-green-500">✔</span>
//                       <span className="text-sm">Comment downvotes</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>


//           {/* Large Screen Layout */}
//           {/* <div className="hidden lg:block">
//             <div className="grid grid-cols-1 gap-6 mx-auto border max-w-7xl lg:grid-cols-5 border-gray-300/50 rounded-small">
//               {pricingPlans.map((plan) => (


//                 <div
//                   key={plan.id}
//                   className={`rounded-small p-6 ${plan.bestValue || selectedPlan.title === plan.title
//                     ? "border-main-color border-2 relative"
//                     : "bg-white"
//                     }`}
//                 >
//                   {plan.bestValue && (
//                     <div className="absolute top-0 px-2 py-1 text-xs font-bold text-white transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-main-color ">
//                       Best Value
//                     </div>
//                   )}
//                   <div className="space-y-2">
//                     <h3 className="text-xs font-normal text-light-gray">
//                       {plan.title}
//                     </h3>
//                     <p className="text-base font-bold text-sub-color">
//                       {plan.price}
//                     </p>
//                     <p className="text-xs font-normal text-light-gray">
//                       {plan.rate}
//                     </p>
//                     {plan.discount && (
//                       <p className="text-xs font-medium text-main-color">
//                         {plan.discount}
//                       </p>
//                     )}
//                     <hr className="border-t border-t-gray-300" />
//                     <ul className="space-y-0">
//                       {plan.features.map((feature, i) => (
//                         <li key={i} className="flex p-2">
//                           <span className="mr-2 text-green-500">✔</span>
//                           <span className="text-sm">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div> */}

//           {/* Tablet/Small Screen Layout */}
//           <div className="block lg:hidden">
//             {/* Pricing Tab */}
//             <div className="flex items-center justify-center gap-4 pb-6 overflow-x-auto md:gap-10">
//               {pricingPlans.map((plan, index) => (
//                 <button
//                   key={index}
//                   className={`py-2 text-small font-semibold transition-all ease-in duration-200
//         ${selectedPlan === plan
//                       ? "text-main-color border-b-2 border-main-color"
//                       : "bg-transparent text-sub-color border-b-2 border-transparent hover:border-main-color hover:text-main-color transition-all ease-in duration-200"
//                     }
//       `}
//                   onClick={() => setSelectedPlan(plan)}
//                 >
//                   {plan.title}
//                 </button>
//               ))}
//             </div>

//             <div className="flex items-center justify-center">
//               <div
//                 className={`rounded-small p-6 bg-white border border-gray-300 md:w-[60%] w-full relative ${selectedPlan.title === "Standard"
//                   ? "border-2 border-main-color"
//                   : ""
//                   }`}
//               >
//                 {selectedPlan.bestValue && (
//                   <div className="absolute flex justify-center -translate-x-1/2 -top-5 left-1/2">
//                     <span className="px-5 py-1 text-xs text-white border-4 border-white rounded-full bg-main-color ">
//                       Best Value
//                     </span>
//                   </div>
//                 )}
//                 <h3 className="mb-3 text-xs font-medium text-light-gray">
//                   {selectedPlan.title}
//                 </h3>
//                 <p className="mb-3 text-base font-medium text-sub-color">
//                   {selectedPlan.price}
//                 </p>
//                 <p className="text-xs font-medium text-[#A3AEB9] mb-3">
//                   {selectedPlan.rate}
//                 </p>
//                 {selectedPlan.discount && (
//                   <p className="mb-3 text-xs font-medium text-main-color">
//                     {selectedPlan.discount}
//                   </p>
//                 )}
//                 <hr className="mb-3 border-t border-t-gray-300" />
//                 <ul className="space-y-2">
//                   {selectedPlan.features.map((feature, i) => (
//                     <li key={i} className="flex p-2">
//                       <span className="mr-2 text-green-500">✔</span>
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default PricingWithMenu;




import React, { useState } from "react";
import GradientHeading from "./GradientHeading";
import images from "../assets/websiteImages/index";

const PricingWithMenu = () => {
  const pricingData = [
    {
      icon: images.plan_1,
      title: "Starter",
      price: "$10",
      pricePerUpvote: "$0.05/upvote",
      discount: "10% discount",
      features: ["Post upvotes", "Post downvotes", "Comment upvotes", "Comment downvotes"],
      isBestValue: false,
    },
    {
      icon: images.plan_1,
      title: "Basic",
      price: "$100",
      pricePerUpvote: "$0.03/upvote",
      discount: "14% discount",
      features: ["Post upvotes", "Post downvotes", "Comment upvotes", "Comment downvotes"],
      isBestValue: false,
    },
    {
      icon: images.standard_Icon,
      title: "Standard",
      price: "$250",
      pricePerUpvote: "$0.025/upvote",
      discount: "50% discount",
      features: ["Post upvotes", "Post downvotes", "Comment upvotes", "Comment downvotes"],
      isBestValue: true,
    },
    {
      icon: images.plan_1,
      title: "Pro",
      price: "$500",
      pricePerUpvote: "$0.02/upvote",
      discount: "60% discount",
      features: ["Post upvotes", "Post downvotes", "Comment upvotes", "Comment downvotes"],
      isBestValue: false,
    },
    {
      icon: images.plan_1,
      title: "Elite",
      price: "$750",
      pricePerUpvote: "$0.015/upvote",
      discount: "70% discount",
      features: ["Post upvotes", "Post downvotes", "Comment upvotes", "Comment downvotes"],
      isBestValue: false,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section className="bg-white lg:pt-16">
        <div className="container mx-auto">
          <GradientHeading
            tag="h3"
            beforeText="Choose the perfect plan"
            gradientText="for your needs."
            beforeSpanClassName="font-bold"
            textSize="text-5xl md:text-7xl lg:text-4xl"
            className="mb-10 text-center"
          />

          {/* Tab Navigation (Hidden on larger screens) */}
          <div className="mb-6 xl:hidden">
            <div className="flex p-5 space-x-3 overflow-x-auto bg-white border border-gray-300 custom-scrollbar scrollbar-hide rounded-2xl shadow-plan_tab">
              {pricingData.map((plan, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                   className={`py-2 px-4 border rounded-lg whitespace-nowrap ${
                    activeTab === index ? "bg-main-color text-white border-main-color" : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {plan.title}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10 plan-wrap">
              {/* Grid of cards for large screens */}
              <div className="hidden w-full grid-cols-5 gap-4 xl:inline-grid">
                {pricingData.map((plan, index) => (
                 <div key={index} className={`p-5 border ${plan.isBestValue ? 'border-main-color' : 'border-gray-300'} rounded-2xl shadow-plan`}>
                  <div className="relative plan-header">
                    {plan.isBestValue && <div className="text-white bg-main-color py-1 px-3 rounded-md text-sm absolute -top-9 left-[50%] translate-x-[-50%]">Best Value</div>}
                    <img src={plan.icon} alt={plan.title} className="rounded-lg w-9 h-9" />
                    <div className="mt-4 space-y-2">
                      <h6 className="font-normal text-light-gray">{plan.title}</h6>
                      <span className="block mt-3 text-3xl font-semibold font-BasierSquare">
                        {plan.price}+ <span className="text-sm font-normal font-InterDisplay text-light-gray">{plan.pricePerUpvote}</span>
                      </span>
                      <p className="text-xs font-medium text-main-color">{plan.discount}</p>
                    </div>
                  </div>
                  <hr className="my-2 border-t border-t-gray-300" />
                  <div className="plan-details">
                    <ul>
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex p-2">
                          <span className="mt-[2px] mr-2 text-green-500 text-sm">✔</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              </div>
             {/*  render single card for tablet/small screen */}
              <div className="xl:hidden">
                {
                    <div className={`p-5 border ${pricingData[activeTab].isBestValue ? 'border-main-color' : 'border-gray-300'} rounded-2xl shadow-plan`}>
                    <div className="relative plan-header">
                      {pricingData[activeTab].isBestValue && <div className="text-white bg-main-color py-1 px-3 rounded-md text-sm absolute -top-9 left-[50%] translate-x-[-50%]">Best Value</div>}
                      <img src={pricingData[activeTab].icon} alt={pricingData[activeTab].title} className="rounded-lg w-9 h-9" />
                      <div className="mt-4 space-y-2">
                        <h6 className="font-normal text-light-gray">{pricingData[activeTab].title}</h6>
                        <span className="block mt-3 text-3xl font-semibold font-BasierSquare">
                          {pricingData[activeTab].price}+ <span className="text-sm font-normal font-InterDisplay text-light-gray">{pricingData[activeTab].pricePerUpvote}</span>
                        </span>
                        <p className="text-xs font-medium text-main-color">{pricingData[activeTab].discount}</p>
                      </div>
                    </div>
                    <hr className="my-2 border-t border-t-gray-300" />
                    <div className="plan-details">
                      <ul>
                        {pricingData[activeTab].features.map((feature, i) => (
                          <li key={i} className="flex p-2">
                            <span className="mt-[2px] mr-2 text-green-500 text-sm">✔</span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                }
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingWithMenu;