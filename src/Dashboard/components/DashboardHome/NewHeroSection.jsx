// import React, { useEffect, useState } from "react";
// import { FaShoppingCart, FaWallet, FaMoneyBillWave } from "react-icons/fa";
// import { RiPaypalFill } from "react-icons/ri";
// import { SiStripe } from "react-icons/si";
// import { BiLinkExternal } from "react-icons/bi";

// const NewHeroSection = () => {
//   return (
//     <section className="herosection">
//       <div className="flex lg:flex-row flex-col gap-6">
//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 border rounded-xl p-6 shadow-md lg:w-2/5 w-full">
//           <div className="xl:inline-block flex items-center justify-between">
//             <div className="flex flex-col gap-2 mb-1">
//               <div className="rounded-full bg-blue-500 p-2 w-fit">
//                 <FaShoppingCart className="h-6 w-6 text-white" />
//               </div>
//               <h3 className="text-small font-semibold">Total Orders</h3>
//             </div>
//             <p className="text-2xl font-bold">3,478,794</p>
//           </div>

//           <div className="xl:inline-block flex items-center justify-between">
//             <div className="flex flex-col gap-2 mb-1">
//               <div className="rounded-full bg-green-500 p-2 w-fit">
//                 <FaWallet className="h-6 w-6 text-white" />
//               </div>
//               <h3 className="text-small font-semibold">Current Balance</h3>
//             </div>
//             <p className="text-2xl font-bold">$0.00</p>
//           </div>

//           <div className="xl:inline-block flex items-center justify-between">
//             <div className="flex flex-col gap-2 mb-1">
//               <div className="rounded-full bg-amber-500 p-2 w-fit">
//                 <FaMoneyBillWave className="h-6 w-6 text-white" />
//               </div>
//               <h3 className="text-small font-semibold">My Spent</h3>
//             </div>
//             <p className="text-2xl font-bold">$0.00</p>
//           </div>
//         </div>

//         {/* Right Side: Load Balance */}
//         <div className=" border rounded-xl shadow-md p-6 lg:w-3/5 w-full">
//           <div className="flex flex-col w-1/2">
//             <h2 className="text-2xl font-bold">Load Balance Without Hassle</h2>

//             <button className="flex items-center justify-center gap-2 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border-2 rounded-lg bg-sub-color w-fit">
//               <FaWallet className="h-5 w-5" />
//               <span>Add Funds</span>
//             </button>
//           </div>

//             {/* Add fund history */}
//           <div className="w-1/2 rounded-xl overflow-hidden">
//             <div
//               className="relative shadow-md"
//               style={{
//                 background:
//                   "linear-gradient(112.48deg, rgba(28, 40, 66, 0.8) 20.09%, rgba(28, 40, 66, 0.1) 101.38%)",
//               }}
//             >
//               {/* Simulated browser window */}
//               <div className="bg-sub-color text-white py-1 px-2 flex items-center justify-between">
//                 <div className="flex space-x-1">
//                   <div className="h-2 w-2 bg-red-500 rounded-full"></div>
//                   <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
//                   <div className="h-2 w-2 bg-green-500 rounded-full"></div>
//                 </div>
//                 <span className="text-xs">upvotes.io/addfunds</span>
//                 {/* <div className="flex space-x-2">
//                   <BiLinkExternal className="h-4 w-4 opacity-50" />
//                 </div> */}
//               </div>

//               {/* Payment Methods */}
//               <div className="p-4">
//                 <div className="text-gray-300 text-sm mb-2">Add Funds</div>
//                 <div className="space-y-2">
//                   <div className="bg-neutral-900 text-white rounded-md p-3 flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <RiPaypalFill className="h-6 w-6 text-blue-500" />
//                       <span>PayPal</span>
//                     </div>
//                     <span className="bg-neutral-700 rounded-full py-1 px-3 text-xs">
//                       +1520 USD
//                     </span>
//                   </div>

//                   <div className="bg-neutral-900 text-white rounded-md p-3 flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       {/*  You might need a custom icon for Paymentwall; replace with a suitable alternative if necessary */}
//                       <FaWallet className="h-6 w-6 text-yellow-500" />
//                       <span>Paymentwall</span>
//                     </div>
//                     <span className="bg-neutral-700 rounded-full py-1 px-3 text-xs">
//                       +1350 USD
//                     </span>
//                   </div>

//                   <div className="bg-neutral-900 text-white rounded-md p-3 flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <SiStripe className="h-6 w-6 text-violet-500" />
//                       <span>stripe</span>
//                     </div>
//                     <span className="bg-neutral-700 rounded-full py-1 px-3 text-xs">
//                       +1200 USD
//                     </span>
//                   </div>
//                   <div className="bg-neutral-900 text-white rounded-md p-3 flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <SiStripe className="h-6 w-6 text-violet-500" />
//                       <span>stripe</span>
//                     </div>
//                     <span className="bg-neutral-700 rounded-full py-1 px-3 text-xs">
//                       +1200 USD
//                     </span>
//                   </div>
//                   <div className="bg-neutral-900 text-white rounded-md p-3 flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <SiStripe className="h-6 w-6 text-violet-500" />
//                       <span>stripe</span>
//                     </div>
//                     <span className="bg-neutral-700 rounded-full py-1 px-3 text-xs">
//                       +1200 USD
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewHeroSection;







// import React from "react";
// import { FaShoppingCart, FaWallet, FaMoneyBillWave } from "react-icons/fa";
// import { RiPaypalFill } from "react-icons/ri";
// import { FaCreditCard } from "react-icons/fa"; // Added FaCreditCard
// import { SiStripe } from "react-icons/si";
// import { Link } from "react-router-dom";

// const NewHeroSection = () => {
//   return (
//     <section className="herosection">
//       <div className="flex lg:flex-row flex-col gap-6">
//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 border rounded-xl p-6 shadow-md lg:w-2/5 w-full">
//           <div className="xl:inline-block flex items-center justify-between">
//             <div className="flex flex-col gap-2 mb-1">
//               <div className="rounded-full bg-blue-500 p-2 w-fit">
//                 <FaShoppingCart className="h-6 w-6 text-white" />
//               </div>
//               <h3 className="text-small font-semibold">Total Orders</h3>
//             </div>
//             <p className="text-2xl font-bold">3,478,794</p>
//           </div>

//           <div className="xl:inline-block flex items-center justify-between">
//             <div className="flex flex-col gap-2 mb-1">
//               <div className="rounded-full bg-green-500 p-2 w-fit">
//                 <FaWallet className="h-6 w-6 text-white" />
//               </div>
//               <h3 className="text-small font-semibold">Current Balance</h3>
//             </div>
//             <p className="text-2xl font-bold">$0.00</p>
//           </div>

//           <div className="xl:inline-block flex items-center justify-between">
//             <div className="flex flex-col gap-2 mb-1">
//               <div className="rounded-full bg-amber-500 p-2 w-fit">
//                 <FaMoneyBillWave className="h-6 w-6 text-white" />
//               </div>
//               <h3 className="text-small font-semibold">My Spent</h3>
//             </div>
//             <p className="text-2xl font-bold">$0.00</p>
//           </div>
//         </div>

//         {/* Right Side: Load Balance */}
//         <div className="border rounded-xl shadow-md p-6 lg:w-3/5 w-full flex relative overflow-hidden">
//           <div className="flex flex-col max-w-64">
//             <h2 className="text-2xl font-bold">Load Balance Without Hassle</h2>

//             <button className="flex items-center justify-center gap-2 py-2 px-4 text-lg font-medium text-white transition-colors duration-300 border-2 rounded-lg bg-sub-color w-fit mt-4">
//               <FaWallet className="h-5 w-5" />
//               <Link to="/dashboard/pricing">Add Fund</Link>
//             </button>
//           </div>

//           {/* Add fund history */}
//           <div className="w-full lg:w-1/2 rounded-xl overflow-hidden flex-grow absolute top-6 right-6">
//             <div
//               className="relative shadow-md h-full"
//               style={{
//                 background:
//                   "linear-gradient(112.48deg, rgba(28, 40, 66, 0.8) 20.09%, rgba(28, 40, 66, 0.1) 101.38%)",
//               }}
//             >
//               {/* Simulated browser window */}
//               <div className="bg-sub-color text-white py-1 px-2 flex items-center justify-between">
//                 <div className="flex space-x-1">
//                   <div className="h-2 w-2 bg-red-500 rounded-full"></div>
//                   <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
//                   <div className="h-2 w-2 bg-green-500 rounded-full"></div>
//                 </div>
//                 <span className="text-xs">upvotes.io/addfunds</span>
//               </div>

//               {/* Payment Methods */}
//               <div className="p-2 h-full">
//                 <div className="text-gray-300 text-sm mb-2">Add Funds</div>
//                 <div
//                   className="space-y-1 overflow-y-auto max-h-[120px]"
//                   style={{
//                     scrollbarWidth: "none",
//                   }}
//                 >
//                   {" "}
//                   {/* adjust max-h to your preferred height */}
//                   <div className="bg-neutral-900 text-white rounded-md p-2 flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <RiPaypalFill className="h-5 w-5 text-blue-500" />
//                       <span>PayPal</span>
//                     </div>
//                     <span className="bg-neutral-700 rounded-full py-1 px-3 text-xs">
//                       +1520 USD
//                     </span>
//                   </div>
//                   <div className="bg-neutral-900 text-white rounded-md p-2 flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <FaWallet className="h-5 w-5 text-yellow-500" />
//                       <span>Paymentwall</span>
//                     </div>
//                     <span className="bg-neutral-700 rounded-full py-1 px-3 text-xs">
//                       +1350 USD
//                     </span>
//                   </div>
//                   <div className="bg-neutral-900 text-white rounded-md p-2 flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <SiStripe className="h-5 w-5 text-violet-500" />
//                       <span>stripe</span>
//                     </div>
//                     <span className="bg-neutral-700 rounded-full py-1 px-3 text-xs">
//                       +1200 USD
//                     </span>
//                   </div>
//                   <div className="bg-neutral-900 text-white rounded-md p-2 flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       {/*  Replace with Paystack Icon */}
//                       <FaCreditCard className="h-5 w-5 text-sky-500" />
//                       <span>paystack</span>
//                     </div>
//                     <span className="bg-neutral-700 rounded-full py-1 px-3 text-xs">
//                       +1000 USD
//                     </span>
//                   </div>
//                   <div className="bg-neutral-900 text-white rounded-md p-2 flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <FaWallet className="h-5 w-5 text-yellow-500" />
//                       <span>Paymentwall</span>
//                     </div>
//                     <span className="bg-neutral-700 rounded-full py-1 px-3 text-xs">
//                       +1350 USD
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewHeroSection;



import React from "react";
import { FaShoppingCart, FaWallet, FaMoneyBillWave } from "react-icons/fa";
import { RiPaypalFill } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa"; // Added FaCreditCard
import { SiStripe } from "react-icons/si";
import { Link } from "react-router-dom";
import useCurrentBalance from "../hooks/useCurrentBalance"; // Import the hook
import useTotalOrders from "../hooks/useTotalOrders"; // Import the new hook
import useMySpent from "../hooks/useMySpent"; // Import the new hook

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Replace with your actual API base URL
const token = localStorage.getItem("token"); // Replace with your actual token retrieval method


const NewHeroSection = () => {
  const { totalOrders, loading: ordersLoading, error: ordersError } = useTotalOrders(API_BASE_URL, token);
  const { currentBalance, loading, error } = useCurrentBalance(API_BASE_URL, token);  // Use the hook
  const { mySpent, loading: spentLoading, error: spentError } = useMySpent(API_BASE_URL, token, currentBalance);

  // Display loading state
  if (loading || ordersLoading || spentLoading) {
    return <div>Loading...</div>; // Or a more appropriate loading indicator
  }

  // Display error state
  if (error || ordersError || spentError) {
    return <div>Error: {balanceError || ordersError || spentError}</div>; // Display the appropriate error message
  }

  return (
    <section className="herosection">
      <div className="flex lg:flex-row flex-col gap-6">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 border rounded-xl p-6 shadow-md lg:w-2/5 w-full">
          <div className="xl:inline-block flex items-center justify-between">
            <div className="flex flex-col gap-2 mb-1">
              <div className="rounded-full bg-blue-500 p-2 w-fit">
                <FaShoppingCart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-small font-semibold">Total Orders</h3>
            </div>
            <p className="text-2xl font-bold">{totalOrders}</p>
          </div>

          <div className="xl:inline-block flex items-center justify-between">
            <div className="flex flex-col gap-2 mb-1">
              <div className="rounded-full bg-green-500 p-2 w-fit">
                <FaWallet className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-small font-semibold">Current Balance</h3>
            </div>
            <p className="text-2xl font-bold">${currentBalance ? currentBalance.toFixed(2) : '0.00'}</p>
          </div>

          <div className="xl:inline-block flex items-center justify-between">
            <div className="flex flex-col gap-2 mb-1">
              <div className="rounded-full bg-amber-500 p-2 w-fit">
                <FaMoneyBillWave className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-small font-semibold">My Spent</h3>
            </div>
            <p className="text-2xl font-bold">${mySpent ? mySpent.toFixed(2) : '0.00'}</p>
          </div>
        </div>

        {/* Right Side: Load Balance */}
        <div className="border rounded-xl shadow-md p-6 lg:w-3/5 w-full flex relative overflow-hidden">
          <div className="flex flex-col max-w-64">
            <h2 className="text-2xl font-bold">Load Balance Without Hassle</h2>

            <button className="flex items-center justify-center gap-2 py-2 px-4 text-lg font-medium text-white transition-colors duration-300 border-2 rounded-lg bg-sub-color w-fit mt-4">
              <FaWallet className="h-5 w-5" />
              <Link to="/dashboard/pricing">Add Fund</Link>
            </button>
          </div>

          {/* Add fund history */}
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden flex-grow absolute top-6 right-6">
            <div
              className="relative shadow-md h-full"
              style={{
                background:
                  "linear-gradient(112.48deg, rgba(28, 40, 66, 0.8) 20.09%, rgba(28, 40, 66, 0.1) 101.38%)",
              }}
            >
              {/* Simulated browser window */}
              <div className="bg-sub-color text-white py-1 px-2 flex items-center justify-between">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                  <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs">upvotes.io/addfunds</span>
              </div>

              {/* Payment Methods */}
              <div className="p-2 h-full">
                <div className="text-gray-300 text-sm mb-2">Add Funds</div>
                <div
                  className="space-y-1 overflow-y-auto max-h-[120px]"
                  style={{
                    scrollbarWidth: "none",
                  }}
                >
                  {" "}
                  {/* adjust max-h to your preferred height */}
                  <div className="bg-neutral-900 text-white rounded-md p-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <RiPaypalFill className="h-5 w-5 text-blue-500" />
                      <span>PayPal</span>
                    </div>
                    <span className="bg-neutral-700 rounded-full py-1 px-3 text-xs">
                      +1520 USD
                    </span>
                  </div>
                  <div className="bg-neutral-900 text-white rounded-md p-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FaWallet className="h-5 w-5 text-yellow-500" />
                      <span>Paymentwall</span>
                    </div>
                    <span className="bg-neutral-700 rounded-full py-1 px-3 text-xs">
                      +1350 USD
                    </span>
                  </div>
                  <div className="bg-neutral-900 text-white rounded-md p-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <SiStripe className="h-5 w-5 text-violet-500" />
                      <span>stripe</span>
                    </div>
                    <span className="bg-neutral-700 rounded-full py-1 px-3 text-xs">
                      +1200 USD
                    </span>
                  </div>
                  <div className="bg-neutral-900 text-white rounded-md p-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/*  Replace with Paystack Icon */}
                      <FaCreditCard className="h-5 w-5 text-sky-500" />
                      <span>paystack</span>
                    </div>
                    <span className="bg-neutral-700 rounded-full py-1 px-3 text-xs">
                      +1000 USD
                    </span>
                  </div>
                  <div className="bg-neutral-900 text-white rounded-md p-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FaWallet className="h-5 w-5 text-yellow-500" />
                      <span>Paymentwall</span>
                    </div>
                    <span className="bg-neutral-700 rounded-full py-1 px-3 text-xs">
                      +1350 USD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;