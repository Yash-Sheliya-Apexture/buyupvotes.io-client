// import React, { useState } from "react";
// import { CiCreditCard1 } from "react-icons/ci";
// import { MdCurrencyBitcoin } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import { BiCalculator } from "react-icons/bi";
// import GradientHeading from "../../Components/GradientHeading";
// import { MdError } from "react-icons/md";

// const Customize_Payment = () => {
//   const [selectedTab, setSelectedTab] = useState("creditCard");
//   const [creditCardDeposit, setCreditCardDeposit] = useState("");
//   const [cryptoDeposit, setCryptoDeposit] = useState("");
//   const [creditCardError, setCreditCardError] = useState("");
//   const [cryptoError, setCryptoError] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalContent, setModalContent] = useState("");
//   const [purchaseDetails, setPurchaseDetails] = useState(null);
//   const navigate = useNavigate();

//   // Handle Credit Card Calculation
//   const handleCreditCardCalculate = (e) => {
//     e.preventDefault();
//     if (!creditCardDeposit) {
//       setCreditCardError("Deposit amount required for Credit Card");
//       return;
//     }
//     const amount = parseFloat(creditCardDeposit);
//     if (isNaN(amount)) {
//       setCreditCardError("Invalid amount. Please enter a number.");
//       return;
//     }
//     if (amount < 10) {
//       setCreditCardError("Minimum amount is $10 for Credit Card");
//       return;
//     }
//     if (amount > 5000) {
//       setCreditCardError("Amount must not exceed $5,000 for Credit Card");
//       return;
//     }

//     setCreditCardError("");
//     let upvotes;

//     if (amount >= 10 && amount <= 99) {
//       upvotes = amount * 20;
//     } else if (amount >= 100 && amount <= 249) {
//       upvotes = amount * 33.33;
//     } else if (amount >= 250 && amount <= 499) {
//       upvotes = amount * 40;
//     } else if (amount >= 500 && amount <= 749) {
//       upvotes = amount * 50;
//     } else if (amount >= 750 && amount <= 10000) {
//       upvotes = amount * 66.66;
//     }

//     const roundedUpvotes = Math.round(upvotes);

//     setModalContent(`$${amount} will purchase ${roundedUpvotes} upvotes.`);
//     setPurchaseDetails({
//       amount: amount,
//       tokens: roundedUpvotes,
//       type: "creditCard",
//     });
//     setIsModalOpen(true);
//   };

//   // Handle Cryptocurrency Calculation
//   const handleCryptoCalculate = (e) => {
//     e.preventDefault();
//     if (!cryptoDeposit) {
//       setCryptoError("Deposit amount required for Cryptocurrency");
//       return;
//     }
//     const amount = parseFloat(cryptoDeposit);
//     if (isNaN(amount)) {
//       setCryptoError("Invalid amount. Please enter a number.");
//       return;
//     }
//     if (amount < 10) {
//       setCryptoError("Minimum amount is $10 for Cryptocurrency");
//       return;
//     }
//     if (amount > 10000) {
//       setCryptoError("Amount must not exceed $10,000 for Cryptocurrency");
//       return;
//     }

//     setCryptoError("");
//     let coins;
//     if (amount >= 10 && amount <= 99) {
//       coins = amount * 15;
//     } else if (amount >= 100 && amount <= 249) {
//       coins = amount * 25;
//     } else if (amount >= 250 && amount <= 499) {
//       coins = amount * 35;
//     } else if (amount >= 500 && amount <= 749) {
//       coins = amount * 45;
//     } else if (amount >= 750 && amount <= 10000) {
//       coins = amount * 55;
//     }

//     const roundedCoins = Math.round(coins);

//     setModalContent(`$${amount} will purchase ${roundedCoins} coins.`);
//     setPurchaseDetails({
//       amount: amount,
//       coins: roundedCoins,
//       type: "crypto",
//     });
//     setIsModalOpen(true);
//   };

//   // Close Modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setCreditCardDeposit("");
//     setCryptoDeposit("");
//   };

//   const handleContinue = () => {
//     // Store the purchase details in local storage
//     localStorage.setItem("purchaseDetails", JSON.stringify(purchaseDetails));

//     // Navigate to the checkout page
//     navigate("/checkout");

//     closeModal();
//   };

//   const tabVariants = {
//     initial: { opacity: 0, y: 10 },
//     animate: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: -10 },
//   };

//   return (
//     <>
//       {/* Tabs Section */}
//       <section className="Payment-Customize">
//         <div className="container mx-auto">
//           <div className="my-6">
//             <GradientHeading
//               tag="h4"
//               beforeText="Customize your payment"
//               gradientText="below."
//               beforeSpanClassName="font-bold"
//               textSize="md:text-large text-basic lg:text-[40px] lg:leading-[45px]"
//               className="text-center"
//             />
//           </div>
//           <div className="flex items-center justify-center">
//             <div className="max-w-lg bg-white rounded-md">
//               {/* Card Tabs */}
//               <div className="relative flex justify-center bg-gray-100 rounded-lg w-fit mx-auto p-[10px]">
//                 <div className="relative flex justify-center items-center bg-gray-100 overflow-hidden">
//                   <div
//                     className={`absolute left-0 top-0 h-full transition-all duration-300 bg-main-color rounded-lg
//             ${
//               selectedTab === "creditCard"
//                 ? "w-5/6 translate-x-0" // Corrected translate for credit card
//                 : "w-0 translate-x-[100%]" // Move offscreen when not active
//             }
//           `}
//                     style={{ width: "50%" }}
//                   ></div>
//                   <div
//                     className={`absolute left-0 top-0 h-full transition-all duration-300 bg-main-color rounded-lg
//             ${
//               selectedTab === "crypto"
//                 ? "w-3/5 translate-x-full" // Corrected translate for crypto
//                 : "w-0 translate-x-0" // Retract when not active
//             }
//           `}
//                     style={{ width: "50%" }}
//                   ></div>
//                   {/* Credit Card Tab */}
//                   <button
//                     className={`relative flex items-center justify-center flex-col md:flex-row font-medium px-6 py-2 focus:outline-none transition-colors duration-300 w-1/2 ${
//                       selectedTab === "creditCard" ? "text-white z-10" : ""
//                     }`}
//                     onClick={() => setSelectedTab("creditCard")}
//                   >
//                     <span className="mr-2">
//                       <CiCreditCard1 className="h-6 w-6" />
//                     </span>
//                     <span className="">Credit Card</span>
//                   </button>
//                   {/* Cryptocurrency Tab */}
//                   <button
//                     className={`relative flex items-center justify-center flex-col md:flex-row font-medium px-6 py-2 focus:outline-none transition-colors duration-300 w-1/2 ${
//                       selectedTab === "crypto" ? "text-white z-10" : ""
//                     }`}
//                     onClick={() => setSelectedTab("crypto")}
//                   >
//                     <span className="mr-2">
//                       <MdCurrencyBitcoin className="h-6 w-6" />
//                     </span>
//                     <span className="">Cryptocurrency</span>
//                   </button>
//                 </div>
//               </div>

//               {/* Content Sections */}
//               <div className="p-4 -mb-4">
//                 <AnimatePresence mode="wait">
//                   {selectedTab === "creditCard" && (
//                     <motion.div
//                       key="creditCard"
//                       variants={tabVariants}
//                       initial="initial"
//                       animate="animate"
//                       exit="exit"
//                       className="space-y-4"
//                     >
//                       <form onSubmit={handleCreditCardCalculate}>
//                         <div className="text-center text-gray-700">
//                           <p className="text-lg leading-6">
//                             Enter your{" "}
//                             <span className="font-semibold text-main-color">
//                               Deposit amount
//                             </span>{" "}
//                             using Credit Card, and it will convert into upvotes.
//                           </p>
//                         </div>

//                         <div className="flex items-center justify-center mt-3 gap-1 rounded-lg border p-1">
//                           <div className="relative flex-grow">
//                             <input
//                               type="text"
//                               value={creditCardDeposit}
//                               onChange={(e) =>
//                                 setCreditCardDeposit(e.target.value)
//                               }
//                               placeholder="Enter amount"
//                               className="py-2 w-full rounded-lg pl-8 text-lg focus:from-main-color focus:ring-4 focus:ring-main-color transition-all duration-300 ease-in-out transform focus:outline-none"
//                               style={{ border: "none" }}
//                             />
//                             <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl font-semibold">
//                               $
//                             </span>
//                           </div>
//                           <button
//                             type="submit"
//                             className="px-4 py-2 rounded-md bg-main-color text-white font-semibold transform transition-transform duration-200 ease-in-out focus:ring-4 focus:ring-main-color-light active:scale-95 hidden xs:block"
//                           >
//                             Calculate
//                           </button>
//                           <button
//                             type="submit"
//                             className="px-3 py-2 rounded-md bg-main-color text-white font-semibold transform transition-transform duration-200 ease-in-out focus:ring-4 focus:ring-main-color-light active:scale-95 block xs:hidden"
//                           >
//                             <BiCalculator size={24} />
//                           </button>
//                         </div>
//                         {creditCardError && (
//                           <>
//                             <div className="text-[#FF0000] flex items-center justify-center gap-1 mt-1">
//                               <MdError className="w-5 h-5" />
//                               <p className="text-small font-medium">
//                                 {creditCardError}
//                               </p>
//                             </div>
//                           </>
//                         )}
//                       </form>
//                     </motion.div>
//                   )}
//                   {selectedTab === "crypto" && (
//                     <motion.div
//                       key="crypto"
//                       variants={tabVariants}
//                       initial="initial"
//                       animate="animate"
//                       exit="exit"
//                       className="space-y-4"
//                     >
//                       <form onSubmit={handleCryptoCalculate}>
//                         <div className="text-center text-gray-700">
//                           <p className="text-lg leading-6">
//                             Enter your{" "}
//                             <span className="font-semibold text-main-color">
//                               Deposit amount
//                             </span>{" "}
//                             Cryptocurrency, using and it will convert into
//                             coins.
//                           </p>
//                         </div>
//                         <div className="flex items-center justify-center mt-3 gap-1 border rounded-lg p-1 ">
//                           <div className="relative flex-grow">
//                             <input
//                               type="text"
//                               value={cryptoDeposit}
//                               onChange={(e) => setCryptoDeposit(e.target.value)}
//                               placeholder="Enter amount"
//                               className="py-2 w-full rounded-lg pl-8 text-lg focus:from-main-color focus:ring-4 focus:ring-main-color transition-all duration-300 ease-in-out transform"
//                               style={{ border: "none" }}
//                             />
//                             <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl font-semibold">
//                               $
//                             </span>
//                           </div>
//                           <button
//                             type="submit"
//                             className="px-4 py-2 rounded-md bg-main-color text-white font-semibold transform transition-transform duration-200 ease-in-out focus:ring-4 focus:ring-main-color-light active:scale-95 hidden xs:block"
//                           >
//                             Calculate
//                           </button>
//                           <button
//                             type="submit"
//                             className="px-3 py-2 rounded-md bg-main-color text-white font-semibold transform transition-transform duration-200 ease-in-out focus:ring-4 focus:ring-main-color-light active:scale-95 block xs:hidden"
//                           >
//                             <BiCalculator size={24} />
//                           </button>
//                         </div>
//                         {cryptoError && (
//                           <>
//                             <div className="text-[#FF0000] flex items-center justify-center gap-1 mt-1">
//                               <MdError className="w-5 h-5" />
//                               <p className="text-small font-medium">
//                                 {cryptoError}
//                               </p>
//                             </div>
//                           </>
//                         )}
//                       </form>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>
//           {/* Modal */}
//           {isModalOpen && (
//             <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-100 bg-black/70">
//               <div className="w-4/5 p-4 bg-white shadow-lg lg:w-full lg:max-w-md lg:p-6 rounded-3xl">
//                 <h2 className="mb-4 text-lg lg:font-medium">{modalContent}</h2>
//                 <p>Click continue to be redirected to the payment page.</p>
//                 <div className="flex justify-end mt-6 space-x-2">
//                   <button
//                     className="px-6 py-1 text-xs font-bold transition-all duration-150 ease-in border rounded-full text-sub-color hover:bg-gray-300/50 hover:border-black"
//                     onClick={closeModal}
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     className="px-6 py-1 text-xs font-bold text-green-500 transition-all duration-150 ease-in border border-green-500 rounded-full hover:shadow-newShadow"
//                     onClick={handleContinue}
//                   >
//                     Continue
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Customize_Payment;




// import React from "react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { MdError } from "react-icons/md";
// import GradientHeading from "../../Components/GradientHeading";
// import { LuWallet } from "react-icons/lu";
// import { PiQuestionBold } from "react-icons/pi";

// const Customize_Payment = () => {
//   const [selectedAmount, setSelectedAmount] = useState("");
//   const [customAmount, setCustomAmount] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const predefinedAmounts = [50, 100, 150, 200]; // Quick amounts

//   // Handle Amount Selection (Quick Selector)
//   const handleAmountSelect = (amount) => {
//     setSelectedAmount(amount);
//     setCustomAmount(amount); // Synchronize with the input
//     setError(""); // Clear any previous errors
//   };

//   // Handle Custom Amount Input Change
//   const handleCustomAmountChange = (e) => {
//     const value = e.target.value;
//     setSelectedAmount(""); // Clear selection when typing
//     setCustomAmount(value);
//     setError(""); // Clear any previous errors
//   };

//   // Handle Form Submission
//   const handleCalculate = (e) => {
//     e.preventDefault();

//     const amountToUse = parseFloat(customAmount);

//     if (!amountToUse) {
//       setError("Amount is required.");
//       return;
//     }

//     if (isNaN(amountToUse)) {
//       setError("Invalid amount. Please enter a number.");
//       return;
//     }

//     if (amountToUse < 10) {
//       setError("Minimum amount is $10.");
//       return;
//     }

//     if (amountToUse > 10000) {
//       setError("Amount must not exceed $10,000.");
//       return;
//     }

//     setError("");

//     // Store the purchase details in local storage
//     localStorage.setItem(
//       "purchaseDetails",
//       JSON.stringify({ amount: amountToUse })
//     );

//     // Navigate to the checkout page
//     navigate("/checkout");
//   };

//   return (
//     <section className="Payment-Customize pb-12">
//       <div className="container mx-auto">
//         {/* <div className="my-6">
//           <GradientHeading
//             tag="h4"
//             beforeText="Customize your payment"
//             gradientText="below."
//             beforeSpanClassName="font-bold"
//             textSize="md:text-large text-basic lg:text-[40px] lg:leading-[45px]"
//           />
//         </div> */}
//         <div className="flex items-center">
//           <form onSubmit={handleCalculate}>
//             {/* Quick Amount Selector */}
//             <div className="mb-5">
//               <h6 className="font-semibold mb-1 text-gray-700">
//                 Quick Amount Selector
//               </h6>
//               <div className="flex items-center justify-between border border-gray-300 rounded-xl overflow-hidden">
//                 {predefinedAmounts.map((amount) => (
//                   <label
//                     key={amount}
//                     className={`flex items-center px-12 py-4 cursor-pointer gap-2 select-none ${selectedAmount === amount
//                       ? "text-gray-900 hover:bg-main-color/10"
//                       : "bg-white text-gray-700 hover:bg-main-color/10"
//                       } transition-colors duration-200`}
//                   >
//                     <div className={`w-4 h-4 rounded-full border-2 relative before:absolute before:content[""]  ${selectedAmount === amount
//                       ? "border-main-color before:w-2 before:h-2 before:bg-main-color before:rounded-full before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4"
//                       : "border-gray-300"
//                       }`}></div>
//                     <input
//                       type="radio"
//                       name="amount"
//                       value={amount}
//                       checked={selectedAmount === amount}
//                       onChange={() => handleAmountSelect(amount)}
//                       className="hidden" // Hide the default radio button
//                     />
//                     ${amount}.00
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Amount Input */}
//             <div className="mb-8">
//               <h6 className="font-semibold mb-1 text-gray-700">Amount</h6>
//               <input
//                 type="number"
//                 value={customAmount}
//                 onChange={handleCustomAmountChange}
//                 placeholder="Enter amount"
//                 className="w-full py-4 px-3 rounded-xl bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
//               />
//               {/* Error Message */}
//               {error && (
//                 <div className="text-[#FF0000] flex items-center gap-1 mt-1">
//                   <MdError className="w-5 h-5" />
//                   <p className="text-small font-medium">{error}</p>
//                 </div>
//               )}
//             </div>


//             {/* Pay Button */}
//             <div className="flex gap-3">
//               <button
//                 type="submit"
//                 className="w-2/4 bg-main-color hover:bg-orange-600 text-white py-4 px-4 rounded-xl transition-colors duration-200 flex justify-center items-center gap-3 border border-main-color"
//               >
//                 <LuWallet size="22" />
//                 Pay
//               </button>
//               <Link 
//               to="/dashboard/contactus"
//                 className="w-2/4 bg-transparent hover:bg-main-color/10 text-gray-900 py-4 px-4 rounded-xl transition-colors duration-200 flex justify-center items-center gap-3 border border-gray-300"
//               >
//                 <PiQuestionBold size="22" />
//                 Request New Payment Method
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Customize_Payment;









// import React, { useEffect } from "react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { MdError } from "react-icons/md";
// import { LuWallet } from "react-icons/lu";
// import { PiQuestionBold } from "react-icons/pi";

// import cryptomus from "../../assets/Images/cryptomus.png";
// import stripe from "../../assets/Images/stripe.png";
// import coinbase from "../../assets/Images/coinbase.png";
// import coinpayments from "../../assets/Images/coinpayments.png";
// import payeer from "../../assets/Images/payeer.png";
// import wise from "../../assets/Images/wise.png";
// import revolut from "../../assets/Images/revolut.png";

// const Customize_Payment = () => {
//     const [selectedAmount, setSelectedAmount] = useState("");
//     const [customAmount, setCustomAmount] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();
//     const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null); // Initialize as null

//     const predefinedAmounts = [50, 100, 150, 200]; // Quick amounts

//     // Simulated list of payment methods
//     const paymentMethods = [
//         {
//             id: "cryptomus",
//             name: "Crypto via Cryptomus",
//             image: cryptomus,
//         }, // Replace with actual image URLs
//         { id: "stripe", name: "Stripe (Credit/Debit Card)", image: stripe },
//         { id: "coinbase", name: "Crypto via Coinbase", image: coinbase },
//         {
//             id: "coinpayments",
//             name: "Crypto via CoinPayments",
//             image: coinpayments,
//         },
//         { id: "payeer", name: "Payeer", image: payeer },
//         { id: "wise", name: "Wise/Bank Transfer", image: wise },
//         { id: "revolut", name: "Revolut", image: revolut },
//     ];

//     // Use useEffect to set the default payment method after component mounts
//     useEffect(() => {
//         // Set the default payment method only if it's not already set
//         if (!selectedPaymentMethod) {
//             setSelectedPaymentMethod(paymentMethods[0]); // Set the first payment method as default
//         }
//     }, [paymentMethods, selectedPaymentMethod]); // Dependency array: rerun if paymentMethods changes

//     // Handle Amount Selection (Quick Selector)
//     const handleAmountSelect = (amount) => {
//         setSelectedAmount(amount);
//         setCustomAmount(amount); // Synchronize with the input
//         setError(""); // Clear any previous errors
//     };

//     // Handle Custom Amount Input Change
//     const handleCustomAmountChange = (e) => {
//         const value = e.target.value;
//         setSelectedAmount(""); // Clear selection when typing
//         setCustomAmount(value);
//         setError(""); // Clear any previous errors
//     };

//     const handlePaymentMethodSelect = (paymentMethod) => {
//         setSelectedPaymentMethod(paymentMethod);
//     };

//     // Handle Form Submission
//     const handleCalculate = (e) => {
//         e.preventDefault();

//         const amountToUse = parseFloat(customAmount);

//         if (!amountToUse) {
//             setError("Amount is required.");
//             return;
//         }

//         if (isNaN(amountToUse)) {
//             setError("Invalid amount. Please enter a number.");
//             return;
//         }

//         if (amountToUse < 10) {
//             setError("Minimum amount is $10.");
//             return;
//         }

//         if (amountToUse > 10000) {
//             setError("Amount must not exceed $10,000.");
//             return;
//         }

//         // Payment method validation
//         if (!selectedPaymentMethod) {
//             setError("Please select a payment method.");
//             return;
//         }

//         setError("");

//         // Store the purchase details in local storage
//         localStorage.setItem(
//             "purchaseDetails",
//             JSON.stringify({
//                 amount: amountToUse,
//                 paymentMethod: selectedPaymentMethod, // Save the selected payment method
//             })
//         );

//         // Navigate to the checkout page
//         navigate("/checkout");
//     };

//     return (
//         <section className="Payment-Customize pb-12">
//             <div className="container mx-auto">
//                 <div className="flex items-center">
//                     <form onSubmit={handleCalculate}>
//                         {/* Payment Method Selection */}
//                         <div className="mb-8">
//                             <h6 className="font-semibold mb-1 text-gray-700">
//                                 Select Payment Method
//                             </h6>
//                             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 overflow-x-auto"> {/* Grid container with Tailwind */}
//                                 {paymentMethods.map((method) => (
//                                     <div
//                                         key={method.id}
//                                         onClick={() => handlePaymentMethodSelect(method)}
//                                         className={`flex flex-col items-center justify-center py-2 px-2 rounded-xl text-center text-gray-700 border-2 cursor-pointer transition-colors duration-200 min-w-[120px] ${selectedPaymentMethod?.id === method.id
//                                             ? "border-main-color"
//                                             : "border-gray-300 hover:border-gray-500"
//                                             }`}

//                                     >
//                                         <img
//                                             src={method.image}
//                                             alt={method.name}
//                                             className="w-12 h-12 mb-2 object-contain"

//                                         />
//                                         <p className="text-small">{method.name}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Quick Amount Selector */}
//                         <div className="mb-5">
//                             <h6 className="font-semibold mb-1 text-gray-700">
//                                 Quick Amount Selector
//                             </h6>
//                             <div className="flex items-center justify-between border border-gray-300 rounded-xl overflow-hidden">
//                                 {predefinedAmounts.map((amount) => (
//                                     <label
//                                         key={amount}
//                                         className={`flex items-center px-12 py-4 cursor-pointer gap-2 select-none ${selectedAmount === amount
//                                             ? "text-gray-900 hover:bg-main-color/10"
//                                             : "bg-white text-gray-700 hover:bg-main-color/10"
//                                             } transition-colors duration-200`}
//                                     >
//                                         <div className={`w-4 h-4 rounded-full border-2 relative before:absolute before:content[""]  ${selectedAmount === amount
//                                             ? "border-main-color before:w-2 before:h-2 before:bg-main-color before:rounded-full before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4"
//                                             : "border-gray-300"
//                                             }`}></div>
//                                         <input
//                                             type="radio"
//                                             name="amount"
//                                             value={amount}
//                                             checked={selectedAmount === amount}
//                                             onChange={() => handleAmountSelect(amount)}
//                                             className="hidden" // Hide the default radio button
//                                         />
//                                         ${amount}.00
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Amount Input */}
//                         <div className="mb-8">
//                             <h6 className="font-semibold mb-1 text-gray-700">Amount</h6>
//                             <input
//                                 type="number"
//                                 value={customAmount}
//                                 onChange={handleCustomAmountChange}
//                                 placeholder="Enter amount"
//                                 className="w-full py-4 px-3 rounded-xl bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                             />
//                             {/* Error Message */}
//                             {error && (
//                                 <div className="text-[#FF0000] flex items-center gap-1 mt-1">
//                                     <MdError className="w-5 h-5" />
//                                     <p className="text-small font-medium">{error}</p>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Pay Button */}
//                         <div className="flex gap-3">
//                             <button
//                                 type="submit"
//                                 className="w-2/4 bg-main-color hover:bg-orange-600 text-white py-4 px-4 rounded-xl transition-colors duration-200 flex justify-center items-center gap-3 border border-main-color"
//                             >
//                                 <LuWallet size="22" />
//                                 Pay
//                             </button>
//                             <Link
//                                 to="/dashboard/contactus"
//                                 className="w-2/4 bg-transparent hover:bg-main-color/10 text-gray-900 py-4 px-4 rounded-xl transition-colors duration-200 flex justify-center items-center gap-3 border border-gray-300"
//                             >
//                                 <PiQuestionBold size="22" />
//                                 Request New Payment Method
//                             </Link>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Customize_Payment;






// import React, { useEffect } from "react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { MdError } from "react-icons/md";
// import { LuWallet } from "react-icons/lu";
// import { PiQuestionBold } from "react-icons/pi";

// import cryptomus from "../../assets/Images/cryptomus.png";
// import stripe from "../../assets/Images/stripe.png";
// import coinbase from "../../assets/Images/coinbase.png";
// import coinpayments from "../../assets/Images/coinpayments.png";
// import payeer from "../../assets/Images/payeer.png";
// import wise from "../../assets/Images/wise.png";
// import revolut from "../../assets/Images/revolut.png";

// const Customize_Payment = () => {
//     const [selectedAmount, setSelectedAmount] = useState("");
//     const [customAmount, setCustomAmount] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();
//     const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null); // Initialize as null

//     const predefinedAmounts = [50, 100, 150, 200]; // Quick amounts

//     // Simulated list of payment methods
//     const paymentMethods = [
//         {
//             id: "cryptomus",
//             name: "Crypto via Cryptomus",
//             image: cryptomus,
//         }, // Replace with actual image URLs
//         { id: "stripe", name: "Stripe (Credit/Debit Card)", image: stripe },
//         { id: "coinbase", name: "Crypto via Coinbase", image: coinbase },
//         {
//             id: "coinpayments",
//             name: "Crypto via CoinPayments",
//             image: coinpayments,
//         },
//         { id: "payeer", name: "Payeer", image: payeer },
//         { id: "wise", name: "Wise/Bank Transfer", image: wise },
//         { id: "revolut", name: "Revolut", image: revolut },
//     ];

//     // Use useEffect to set the default payment method after component mounts
//     useEffect(() => {
//         // Set the default payment method only if it's not already set
//         if (!selectedPaymentMethod) {
//             setSelectedPaymentMethod(paymentMethods[0]); // Set the first payment method as default
//         }
//     }, [paymentMethods, selectedPaymentMethod]); // Dependency array: rerun if paymentMethods changes

//     // Handle Amount Selection (Quick Selector)
//     const handleAmountSelect = (amount) => {
//         setSelectedAmount(amount);
//         setCustomAmount(amount); // Synchronize with the input
//         setError(""); // Clear any previous errors
//     };

//     // Handle Custom Amount Input Change
//     const handleCustomAmountChange = (e) => {
//         const value = e.target.value;
//         setSelectedAmount(""); // Clear selection when typing
//         setCustomAmount(value);
//         setError(""); // Clear any previous errors
//     };

//     const handlePaymentMethodSelect = (paymentMethod) => {
//         setSelectedPaymentMethod(paymentMethod);
//     };

//     // Handle Form Submission
//     const handleCalculate = async (e) => {
//         e.preventDefault();

//         const amountToUse = parseFloat(customAmount);

//         if (!amountToUse) {
//             setError("Amount is required.");
//             return;
//         }

//         if (isNaN(amountToUse)) {
//             setError("Invalid amount. Please enter a number.");
//             return;
//         }

//         if (amountToUse < 10) {
//             setError("Minimum amount is $10.");
//             return;
//         }

//         if (amountToUse > 10000) {
//             setError("Amount must not exceed $10,000.");
//             return;
//         }

//         // Payment method validation
//         if (!selectedPaymentMethod) {
//             setError("Please select a payment method.");
//             return;
//         }

//         setError("");

//         // Build the payment data object
//         const paymentData = {
//             amount: amountToUse,
//             type: selectedPaymentMethod.id, // Store payment method ID as 'type'
//         };

//         // Navigate to the checkout page and pass the payment data
//         navigate("/checkout", { state: { paymentData } });
//     };

//     return (
//         <section className="Payment-Customize pb-12">
//             <div className="container mx-auto">
//                 <div className="flex items-center">
//                     <form onSubmit={handleCalculate}>
//                         {/* Payment Method Selection */}
//                         <div className="mb-8">
//                             <h6 className="font-semibold mb-1 text-gray-700">
//                                 Select Payment Method
//                             </h6>
//                             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 overflow-x-auto"> {/* Grid container with Tailwind */}
//                                 {paymentMethods.map((method) => (
//                                     <div
//                                         key={method.id}
//                                         onClick={() => handlePaymentMethodSelect(method)}
//                                         className={`flex flex-col items-center justify-center py-2 px-2 rounded-xl text-center text-gray-700 border-2 cursor-pointer transition-colors duration-200 min-w-[120px] ${selectedPaymentMethod?.id === method.id
//                                             ? "border-main-color"
//                                             : "border-gray-300 hover:border-gray-500"
//                                             }`}

//                                     >
//                                         <img
//                                             src={method.image}
//                                             alt={method.name}
//                                             className="w-12 h-12 mb-2 object-contain"

//                                         />
//                                         <p className="text-small">{method.name}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Quick Amount Selector */}
//                         <div className="mb-5">
//                             <h6 className="font-semibold mb-1 text-gray-700">
//                                 Quick Amount Selector
//                             </h6>
//                             <div className="flex items-center justify-between border border-gray-300 rounded-xl overflow-hidden">
//                                 {predefinedAmounts.map((amount) => (
//                                     <label
//                                         key={amount}
//                                         className={`flex items-center px-12 py-4 cursor-pointer gap-2 select-none ${selectedAmount === amount
//                                             ? "text-gray-900 hover:bg-main-color/10"
//                                             : "bg-white text-gray-700 hover:bg-main-color/10"
//                                             } transition-colors duration-200`}
//                                     >
//                                         <div className={`w-4 h-4 rounded-full border-2 relative before:absolute before:content[""]  ${selectedAmount === amount
//                                             ? "border-main-color before:w-2 before:h-2 before:bg-main-color before:rounded-full before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4"
//                                             : "border-gray-300"
//                                             }`}></div>
//                                         <input
//                                             type="radio"
//                                             name="amount"
//                                             value={amount}
//                                             checked={selectedAmount === amount}
//                                             onChange={() => handleAmountSelect(amount)}
//                                             className="hidden" // Hide the default radio button
//                                         />
//                                         ${amount}.00
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Amount Input */}
//                         <div className="mb-8">
//                             <h6 className="font-semibold mb-1 text-gray-700">Amount</h6>
//                             <input
//                                 type="number"
//                                 value={customAmount}
//                                 onChange={handleCustomAmountChange}
//                                 placeholder="Enter amount"
//                                 className="w-full py-4 px-3 rounded-xl bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                             />
//                             {/* Error Message */}
//                             {error && (
//                                 <div className="text-[#FF0000] flex items-center gap-1 mt-1">
//                                     <MdError className="w-5 h-5" />
//                                     <p className="text-small font-medium">{error}</p>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Pay Button */}
//                         <div className="flex gap-3">
//                             <button
//                                 type="submit"
//                                 className="w-2/4 bg-main-color hover:bg-orange-600 text-white py-4 px-4 rounded-xl transition-colors duration-200 flex justify-center items-center gap-3 border border-main-color"
//                             >
//                                 <LuWallet size="22" />
//                                 Pay
//                             </button>
//                             <Link
//                                 to="/dashboard/contactus"
//                                 className="w-2/4 bg-transparent hover:bg-main-color/10 text-gray-900 py-4 px-4 rounded-xl transition-colors duration-200 flex justify-center items-center gap-3 border border-gray-300"
//                             >
//                                 <PiQuestionBold size="22" />
//                                 Request New Payment Method
//                             </Link>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Customize_Payment;



// import React, { useEffect } from "react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { MdError } from "react-icons/md";
// import { LuWallet } from "react-icons/lu";
// import { PiQuestionBold } from "react-icons/pi";
// import cryptomus from "../../assets/Images/cryptomus.png";
// import stripe from "../../assets/Images/stripe.png"; // Ensure stripe image is imported

// const Customize_Payment = () => {
//     const [selectedAmount, setSelectedAmount] = useState("");
//     const [customAmount, setCustomAmount] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();
//     const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null); // Initialize as null

//     const predefinedAmounts = [50, 100, 150, 200]; // Quick amounts

//     // Simulated list of payment methods
//     const paymentMethods = [
//         {
//             id: "cryptomus",
//             name: "Crypto via Cryptomus",
//             description: "Instant",
//             image: cryptomus,
//         }, // Replace with actual image URLs
//         {
//             id: "stripe",
//             name: "Credit/Debit Card",
//             description: "Secure and convenient",
//             image: stripe,
//             disabled: true,
//         }, // Indicate Stripe is coming soon
//     ];

//     // Use useEffect to set the default payment method after component mounts
//     useEffect(() => {
//         // Set the default payment method only if it's not already set
//         if (!selectedPaymentMethod) {
//             setSelectedPaymentMethod(paymentMethods[0]); // Set the first payment method as default
//         }
//     }, [paymentMethods, selectedPaymentMethod]); // Dependency array: rerun if paymentMethods changes

//     // Handle Amount Selection (Quick Selector)
//     const handleAmountSelect = (amount) => {
//         setSelectedAmount(amount);
//         setCustomAmount(amount); // Synchronize with the input
//         setError(""); // Clear any previous errors
//     };

//     // Handle Custom Amount Input Change
//     const handleCustomAmountChange = (e) => {
//         const value = e.target.value;
//         setSelectedAmount(""); // Clear selection when typing
//         setCustomAmount(value);
//         setError(""); // Clear any previous errors
//     };

//     const handlePaymentMethodSelect = (paymentMethod) => {
//         if (!paymentMethod.disabled) {
//             setSelectedPaymentMethod(paymentMethod);
//         }
//     };

//     // Handle Form Submission
//     const handleCalculate = async (e) => {
//         e.preventDefault();

//         const amountToUse = parseFloat(customAmount);

//         if (!amountToUse) {
//             setError("Amount is required.");
//             return;
//         }

//         if (isNaN(amountToUse)) {
//             setError("Invalid amount. Please enter a number.");
//             return;
//         }

//         if (amountToUse < 10) {
//             setError("Minimum amount is $10.");
//             return;
//         }

//         if (amountToUse > 10000) {
//             setError("Amount must not exceed $10,000.");
//             return;
//         }

//         // Payment method validation
//         if (!selectedPaymentMethod) {
//             setError("Please select a payment method.");
//             return;
//         }

//         setError("");

//         // Build the payment data object
//         const paymentData = {
//             amount: amountToUse,
//             type: selectedPaymentMethod.id, // Store payment method ID as 'type'
//         };

//         // Navigate to the checkout page and pass the payment data
//         navigate("/checkout", { state: { paymentData } });
//     };

//     return (
//         <section className="Payment-Customize my-10">
//             <div className="flex gap-4 container mx-auto">
//                 {/* Payment Method Selection */}
//                 <div className="lg:flex lg:items-center">
//                     <form onSubmit={handleCalculate}>
//                         <div className="mb-8">
//                             <h6 className="font-semibold mb-1 text-gray-700">
//                                 Select Payment Method
//                             </h6>
//                             <div className="flex flex-col w-full gap-4">
//                                 {paymentMethods.map((method) => (
//                                     <div
//                                         key={method.id}
//                                         onClick={() => handlePaymentMethodSelect(method)}
//                                         className={`relative flex items-center w-full lg:p-4 p-2 rounded-lg border transition-colors duration-200 cursor-pointer 
//                     ${selectedPaymentMethod?.id === method.id
//                                                 ? "border-main-color shadow-md"
//                                                 : "border-gray-300 hover:border-gray-500"
//                                             }
//                     ${method.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
//                                     >
//                                         <img
//                                             src={method.image}
//                                             alt={method.name}
//                                             className="lg:size-10 size-6 mr-4 object-contain"
//                                         />
//                                         <div>
//                                             <h5 className="font-semibold">{method.name}</h5>
//                                             <p className="text-sm text-gray-500">{method.description}</p>
//                                         </div>
//                                         {method.disabled && (
//                                             <div className="absolute top-0 left-0 w-full h-full text-nowrap bg-white/70 rounded-lg pointer-events-none">
//                                                 <div className="absolute md:top-1/2 top-10 left-60 md:left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-900 font-semibold">
//                                                     Coming Soon
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         <div className="mb-5 w-full">
//                             <h6 className="font-semibold mb-1 text-gray-700">
//                                 Quick Amount Selector
//                             </h6>
//                             <div className="sm:flex flex-row items-center justify-between border border-gray-300 rounded-xl overflow-hidden grid grid-cols-2 gap-1">
//                                 {predefinedAmounts.map((amount) => (
//                                     <label
//                                         key={amount}
//                                         className={`flex items-center justify-center w-full px-5 py-3 cursor-pointer gap-2 select-none ${selectedAmount === amount
//                                             ? "text-gray-900 hover:bg-main-color/10 bg-main-color/5"
//                                             : "bg-white text-gray-700 hover:bg-main-color/10"
//                                             } transition-colors duration-200`}
//                                     >
//                                         <div className={`w-4 h-4 rounded-full border-2 relative before:absolute before:content[""]  ${selectedAmount === amount
//                                             ? "border-main-color before:w-2 before:h-2 before:bg-main-color before:rounded-full before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4"
//                                             : "border-gray-300"
//                                             }`}></div>
//                                         <input
//                                             type="radio"
//                                             name="amount"
//                                             value={amount}
//                                             checked={selectedAmount === amount}
//                                             onChange={() => handleAmountSelect(amount)}
//                                             className="hidden" // Hide the default radio button
//                                         />
//                                         ${amount}.00
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>


//                         {/* Amount Input */}
//                         <div className="mb-8 w-full">
//                             <h6 className="font-semibold mb-1 text-gray-700">Amount</h6>
//                             <input
//                                 type="number"
//                                 value={customAmount}
//                                 onChange={handleCustomAmountChange}
//                                 placeholder="Enter amount"
//                                 className="w-full py-4 px-3 rounded-xl bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                             />
//                             {/* Error Message */}
//                             {error && (
//                                 <div className="text-[#FF0000] flex items-center gap-1 mt-1">
//                                     <MdError className="w-5 h-5" />
//                                     <p className="text-small font-medium">{error}</p>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Pay Button */}
//                         <div className="flex md:flex-row flex-col gap-3 w-full">
//                             <button
//                                 type="submit"
//                                 className="md:w-2/4 bg-main-color text-nowrap hover:bg-orange-600 text-white py-4 px-4 rounded-xl transition-colors duration-200 flex justify-center items-center gap-3 border border-main-color"
//                             >
//                                 <LuWallet size="22" />
//                                 Pay
//                             </button>
//                             <Link
//                                 to="/dashboard/contactus"
//                                 className="md:w-2/4 bg-transparent text-nowrap hover:bg-main-color/10 text-gray-900 py-4 px-4 rounded-xl transition-colors duration-200 flex justify-center items-center gap-3 border border-gray-300"
//                             >
//                                 <PiQuestionBold size="22" />
//                                 Request New Payment Method
//                             </Link>
//                         </div>
//                     </form>
//                 </div>
//                 {/* Rightside Discrption */}
//                 <div>
//                     <h1>Hello</h1>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Customize_Payment;


// import React, { useEffect } from "react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { MdError } from "react-icons/md";
// import { LuWallet } from "react-icons/lu";
// import { PiQuestionBold } from "react-icons/pi";
// import cryptomus from "../../assets/Images/cryptomus.png";
// import stripe from "../../assets/Images/stripe.png"; // Ensure stripe image is imported

// const Customize_Payment = () => {
//     const [selectedAmount, setSelectedAmount] = useState("");
//     const [customAmount, setCustomAmount] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();
//     const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null); // Initialize as null

//     const predefinedAmounts = [50, 100, 150, 200]; // Quick amounts

//     // Simulated list of payment methods
//     const paymentMethods = [
//         {
//             id: "cryptomus",
//             name: "Crypto via Cryptomus",
//             description: "Instant",
//             image: cryptomus,
//         }, // Replace with actual image URLs
//         {
//             id: "stripe",
//             name: "Credit/Debit Card",
//             description: "Secure and convenient",
//             image: stripe,
//             disabled: true,
//         }, // Indicate Stripe is coming soon
//     ];

//     // Use useEffect to set the default payment method after component mounts
//     useEffect(() => {
//         // Set the default payment method only if it's not already set
//         if (!selectedPaymentMethod) {
//             setSelectedPaymentMethod(paymentMethods[0]); // Set the first payment method as default
//         }
//     }, [paymentMethods, selectedPaymentMethod]); // Dependency array: rerun if paymentMethods changes

//     // Handle Amount Selection (Quick Selector)
//     const handleAmountSelect = (amount) => {
//         setSelectedAmount(amount);
//         setCustomAmount(amount); // Synchronize with the input
//         setError(""); // Clear any previous errors
//     };

//     // Handle Custom Amount Input Change
//     const handleCustomAmountChange = (e) => {
//         const value = e.target.value;
//         setSelectedAmount(""); // Clear selection when typing
//         setCustomAmount(value);
//         setError(""); // Clear any previous errors
//     };

//     const handlePaymentMethodSelect = (paymentMethod) => {
//         if (!paymentMethod.disabled) {
//             setSelectedPaymentMethod(paymentMethod);
//         }
//     };

//     // Handle Form Submission
//     const handleCalculate = async (e) => {
//         e.preventDefault();

//         const amountToUse = parseFloat(customAmount);

//         if (!amountToUse) {
//             setError("Amount is required.");
//             return;
//         }

//         if (isNaN(amountToUse)) {
//             setError("Invalid amount. Please enter a number.");
//             return;
//         }

//         if (amountToUse < 10) {
//             setError("Minimum amount is $10.");
//             return;
//         }

//         if (amountToUse > 10000) {
//             setError("Amount must not exceed $10,000.");
//             return;
//         }

//         // Payment method validation
//         if (!selectedPaymentMethod) {
//             setError("Please select a payment method.");
//             return;
//         }

//         setError("");

//         // Build the payment data object
//         const paymentData = {
//             amount: amountToUse,
//             type: selectedPaymentMethod.id, // Store payment method ID as 'type'
//         };

//         // Navigate to the checkout page and pass the payment data
//         navigate("/checkout", { state: { paymentData } });
//     };

//     return (
//         <section className="Payment-Customize my-10">
//             <div className="flex gap-4 container mx-auto">
//                 {/* Payment Method Selection */}
//                 <div className="lg:w-1/2">
//                     <form onSubmit={handleCalculate}>
//                         <div className="mb-8">
//                             <h6 className="font-semibold mb-1 text-gray-700">
//                                 Select Payment Method
//                             </h6>
//                             <div className="flex flex-col w-full gap-4">
//                                 {paymentMethods.map((method) => (
//                                     <div
//                                         key={method.id}
//                                         onClick={() => handlePaymentMethodSelect(method)}
//                                         className={`relative flex items-center w-full lg:p-4 p-2 rounded-lg border transition-colors duration-200 cursor-pointer 
//                     ${selectedPaymentMethod?.id === method.id
//                                                 ? "border-main-color shadow-md"
//                                                 : "border-gray-300 hover:border-gray-500"
//                                             }
//                     ${method.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
//                                     >
//                                         <img
//                                             src={method.image}
//                                             alt={method.name}
//                                             className="lg:size-10 size-6 mr-4 object-contain"
//                                         />
//                                         <div>
//                                             <h5 className="font-semibold">{method.name}</h5>
//                                             <p className="text-sm text-gray-500">{method.description}</p>
//                                         </div>
//                                         {method.disabled && (
//                                             <div className="absolute top-0 left-0 w-full h-full text-nowrap bg-white/70 rounded-lg pointer-events-none">
//                                                 <div className="absolute md:top-1/2 top-10 left-60 md:left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-900 font-semibold">
//                                                     Coming Soon
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         <div className="mb-5 w-full">
//                             <h6 className="font-semibold mb-1 text-gray-700">
//                                 Quick Amount Selector
//                             </h6>
//                             <div className="sm:flex flex-row items-center justify-between border border-gray-300 rounded-xl overflow-hidden grid grid-cols-2 gap-1">
//                                 {predefinedAmounts.map((amount) => (
//                                     <label
//                                         key={amount}
//                                         className={`flex items-center justify-center w-full px-5 py-3 cursor-pointer gap-2 select-none ${selectedAmount === amount
//                                             ? "text-gray-900 hover:bg-main-color/10 bg-main-color/5"
//                                             : "bg-white text-gray-700 hover:bg-main-color/10"
//                                             } transition-colors duration-200`}
//                                     >
//                                         <div className={`w-4 h-4 rounded-full border-2 relative before:absolute before:content[""]  ${selectedAmount === amount
//                                             ? "border-main-color before:w-2 before:h-2 before:bg-main-color before:rounded-full before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4"
//                                             : "border-gray-300"
//                                             }`}></div>
//                                         <input
//                                             type="radio"
//                                             name="amount"
//                                             value={amount}
//                                             checked={selectedAmount === amount}
//                                             onChange={() => handleAmountSelect(amount)}
//                                             className="hidden" // Hide the default radio button
//                                         />
//                                         ${amount}.00
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>


//                         {/* Amount Input */}
//                         <div className="mb-8 w-full">
//                             <h6 className="font-semibold mb-1 text-gray-700">Amount</h6>
//                             <input
//                                 type="number"
//                                 value={customAmount}
//                                 onChange={handleCustomAmountChange}
//                                 placeholder="Enter amount"
//                                 className="w-full py-4 px-3 rounded-xl bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                             />
//                             {/* Error Message */}
//                             {error && (
//                                 <div className="text-[#FF0000] flex items-center gap-1 mt-1">
//                                     <MdError className="w-5 h-5" />
//                                     <p className="text-small font-medium">{error}</p>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Pay Button */}
//                         <div className="flex md:flex-row flex-col gap-3 w-full">
//                             <button
//                                 type="submit"
//                                 className="md:w-2/4 bg-main-color text-nowrap hover:bg-orange-600 text-white py-4 px-4 rounded-xl transition-colors duration-200 flex justify-center items-center gap-3 border border-main-color"
//                             >
//                                 <LuWallet size="22" />
//                                 Pay
//                             </button>
//                             <Link
//                                 to="/dashboard/contactus"
//                                 className="md:w-2/4 bg-transparent text-nowrap hover:bg-main-color/10 text-gray-900 py-4 px-4 rounded-xl transition-colors duration-200 flex justify-center items-center gap-3 border border-gray-300"
//                             >
//                                 <PiQuestionBold size="22" />
//                                 Request New Payment Method
//                             </Link>
//                         </div>
//                     </form>
//                 </div>

//                 {/* Description on the right */}
//                 <div className="w-1/2 p-4 bg-gray-50 rounded-lg shadow-md">
//                     <h2 className="text-xl font-semibold mb-4 text-gray-800">Payment Information</h2>

//                     <p className="text-gray-700 mb-3">
//                         This page allows you to customize your payment amount and select your preferred payment method.  Currently, Crypto via Cryptomus is the only available payment option. Credit/Debit Card payments are coming soon!
//                     </p>

//                     <h3 className="text-lg font-semibold mb-2 text-gray-800">Payment Methods:</h3>
//                     <ul>
//                         {paymentMethods.map((method) => (
//                             <li key={method.id} className="text-gray-700 mb-1">
//                                 {method.name} - {method.description}
//                                 {method.disabled && <span className="text-sm text-red-500"> (Coming Soon)</span>}
//                             </li>
//                         ))}
//                     </ul>

//                     <p className="text-gray-700 mb-3">
//                         For a faster checkout, use the Quick Amount Selector or enter a custom amount.
//                         The minimum payment amount is $10, and the maximum is $10,000.
//                     </p>

//                     <p className="text-gray-700 mb-3">
//                         If you have questions or need assistance with a different payment method,
//                         please <Link to="/dashboard/contactus" className="text-blue-600 hover:underline">request a new payment method</Link>.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Customize_Payment;






// import React, { useEffect } from "react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { MdError } from "react-icons/md";
// import { LuWallet } from "react-icons/lu";
// import { PiQuestionBold } from "react-icons/pi";
// import cryptomus from "../../assets/Images/cryptomus.png";
// import stripe from "../../assets/Images/stripe.png"; // Ensure stripe image is imported

// const Customize_Payment = () => {
//     const [selectedAmount, setSelectedAmount] = useState("");
//     const [customAmount, setCustomAmount] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();
//     const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null); // Initialize as null

//     const predefinedAmounts = [50, 100, 150, 200]; // Quick amounts

//     // Simulated list of payment methods
//     const paymentMethods = [
//         {
//             id: "cryptomus",
//             name: "Crypto via Cryptomus",
//             description: "Instant",
//             image: cryptomus,
//         }, // Replace with actual image URLs
//         {
//             id: "stripe",
//             name: "Credit/Debit Card",
//             description: "Secure and convenient",
//             image: stripe,
//             disabled: true,
//         }, // Indicate Stripe is coming soon
//     ];

//     // Use useEffect to set the default payment method after component mounts
//     useEffect(() => {
//         // Set the default payment method only if it's not already set
//         if (!selectedPaymentMethod) {
//             setSelectedPaymentMethod(paymentMethods[0]); // Set the first payment method as default
//         }
//     }, [paymentMethods, selectedPaymentMethod]); // Dependency array: rerun if paymentMethods changes

//     // Handle Amount Selection (Quick Selector)
//     const handleAmountSelect = (amount) => {
//         setSelectedAmount(amount);
//         setCustomAmount(amount); // Synchronize with the input
//         setError(""); // Clear any previous errors
//     };

//     // Handle Custom Amount Input Change
//     const handleCustomAmountChange = (e) => {
//         const value = e.target.value;
//         setSelectedAmount(""); // Clear selection when typing
//         setCustomAmount(value);
//         setError(""); // Clear any previous errors
//     };

//     const handlePaymentMethodSelect = (paymentMethod) => {
//         if (!paymentMethod.disabled) {
//             setSelectedPaymentMethod(paymentMethod);
//         }
//     };

//     // Handle Form Submission
//     const handleCalculate = async (e) => {
//         e.preventDefault();

//         const amountToUse = parseFloat(customAmount);

//         if (!amountToUse) {
//             setError("Amount is required.");
//             return;
//         }

//         if (isNaN(amountToUse)) {
//             setError("Invalid amount. Please enter a number.");
//             return;
//         }

//         if (amountToUse < 10) {
//             setError("Minimum amount is $10.");
//             return;
//         }

//         if (amountToUse > 10000) {
//             setError("Amount must not exceed $10,000.");
//             return;
//         }

//         // Payment method validation
//         if (!selectedPaymentMethod) {
//             setError("Please select a payment method.");
//             return;
//         }

//         setError("");

//         // Build the payment data object
//         const paymentData = {
//             amount: amountToUse,
//             type: selectedPaymentMethod.id, // Store payment method ID as 'type'
//         };

//         // Navigate to the checkout page and pass the payment data
//         navigate("/checkout", { state: { paymentData } });
//     };

//     return (
//         <section className="Payment-Customize pb-10">
//             <div className="flex lg:flex-row flex-col gap-6 container mx-auto">
//                 {/* Payment Method Selection */}
//                 <div className="lg:w-1/2 w-full">
//                     <form onSubmit={handleCalculate}>
//                         <div className="mb-8">
//                             <h6 className="font-semibold mb-2 text-gray-700">
//                                 Select Payment Method
//                             </h6>
//                             <div className="flex flex-col w-full gap-4">
//                                 {paymentMethods.map((method) => (
//                                     <div
//                                         key={method.id}
//                                         onClick={() => handlePaymentMethodSelect(method)}
//                                         className={`relative flex items-center w-full lg:p-4 p-2 rounded-lg border transition-colors duration-200 cursor-pointer 
//                     ${selectedPaymentMethod?.id === method.id
//                                                 ? "border-main-color shadow-md"
//                                                 : "border-gray-300 hover:border-gray-500"
//                                             }
//                     ${method.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
//                                     >
//                                         <img
//                                             src={method.image}
//                                             alt={method.name}
//                                             className="lg:size-10 size-6 mr-4 object-contain"
//                                         />
//                                         <div>
//                                             <h5 className="font-semibold">{method.name}</h5>
//                                             <p className="text-sm text-gray-500">{method.description}</p>
//                                         </div>
//                                         {method.disabled && (
//                                             <div className="absolute top-0 left-0 w-full h-full text-nowrap bg-white/70 rounded-lg pointer-events-none">
//                                                 <div className="absolute md:top-1/2 top-1/2 left-1/2 md:left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-900 font-semibold">
//                                                     Coming Soon
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         <div className="mb-5 w-full">
//                             <h6 className="font-semibold mb-2 text-gray-700">
//                                 Quick Amount Selector
//                             </h6>
//                             <div className="sm:flex flex-row items-center justify-between border border-gray-300 rounded-xl overflow-hidden grid grid-cols-2">
//                                 {predefinedAmounts.map((amount) => (
//                                     <label
//                                         key={amount}
//                                         className={`flex items-center justify-center w-full px-5 py-3 cursor-pointer gap-2 select-none ${selectedAmount === amount
//                                             ? "text-gray-900 hover:bg-main-color/10 bg-main-color/5"
//                                             : "bg-white text-gray-700 hover:bg-main-color/10"
//                                             } transition-colors duration-200`}
//                                     >
//                                         <div className={`w-4 h-4 rounded-full border-2 relative before:absolute before:content[""]  ${selectedAmount === amount
//                                             ? "border-main-color before:w-2 before:h-2 before:bg-main-color before:rounded-full before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4"
//                                             : "border-gray-300"
//                                             }`}></div>
//                                         <input
//                                             type="radio"
//                                             name="amount"
//                                             value={amount}
//                                             checked={selectedAmount === amount}
//                                             onChange={() => handleAmountSelect(amount)}
//                                             className="hidden" // Hide the default radio button
//                                         />
//                                         ${amount}.00
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>


//                         {/* Amount Input */}
//                         <div className="mb-8 w-full">
//                             <h6 className="font-semibold mb-2 text-gray-700">Amount</h6>
//                             <input
//                                 type="number"
//                                 value={customAmount}
//                                 onChange={handleCustomAmountChange}
//                                 placeholder="Enter amount"
//                                 className="w-full py-4 px-3 rounded-xl bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                             />
//                             {/* Error Message */}
//                             {error && (
//                                 <div className="text-[#FF0000] flex items-center gap-1 mt-1">
//                                     <MdError className="w-5 h-5" />
//                                     <p className="text-small font-medium">{error}</p>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Pay Button */}
//                         <div className="flex md:flex-row flex-col gap-2 w-full">
//                             <button
//                                 type="submit"
//                                 className="w-full bg-main-color text-nowrap hover:bg-orange-600 text-white py-4 px-4 rounded-xl transition-colors duration-200 flex justify-center items-center gap-3 border border-main-color"
//                             >
//                                 <LuWallet size="22" />
//                                 Pay
//                             </button>
//                             <Link
//                                 to="/dashboard/contactus"
//                                 className="w-full bg-transparent text-nowrap hover:bg-main-color/10 text-gray-900 py-4 px-4 rounded-xl transition-colors duration-200 flex justify-center items-center gap-3 border border-gray-300"
//                             >
//                                 <PiQuestionBold size="22" />
//                                 Request New Payment Method
//                             </Link>
//                         </div>
//                     </form>
//                 </div>
//                 {/* Description on the right */}
//                 <div className="lg:w-1/2 p-4 bg-white space-y-2 border border-gray-300 rounded-small shadow-main">
//                     <h2 className="text-xl font-medium text-primary">Payment Information</h2>
//                     <p className="text-para-color font-medium">
//                         This page allows you to customize your payment amount and select your preferred payment method.  Currently, Crypto via Cryptomus is the only available payment option. Credit/Debit Card payments are coming soon! We are actively working on adding more payment methods to provide you with a wider range of choices.
//                     </p>
//                     <h3 className="text-xl font-medium text-primary">Payment Methods:</h3>
//                     <ul>
//                         {paymentMethods.map((method) => (
//                             <li key={method.id} className="text-para-color font-medium pb-1">
//                                 {method.name} - {method.description}
//                                 {method.disabled && <span className="text-small text-red-500"> (Coming Soon)</span>}
//                             </li>
//                         ))}
//                     </ul>

//                     <p className="text-para-color font-medium">
//                         When paying with Crypto via Cryptomus, the transaction will be processed instantly upon confirmation on the blockchain.  Remember to double-check the recipient address to avoid potential issues.
//                     </p>

//                     <p className="text-para-color font-medium">
//                         If you have questions or need assistance with a different payment method,
//                         please <Link to="/dashboard/contactus" className="text-main-color capitalize hover:underline">request a new payment method</Link>.  Our support team is available 24/7 to assist you with any issues or inquiries regarding payments.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };





import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdError } from "react-icons/md";
import { LuWallet } from "react-icons/lu";
import { PiQuestionBold } from "react-icons/pi";
import cryptomus from "../../assets/Images/cryptomus.png";
import axios from 'axios';
import TokenService from '../../utils/TokenService';

const Customize_Payment = () => {
    const [selectedAmount, setSelectedAmount] = useState("");
    const [customAmount, setCustomAmount] = useState("");
    const [error, setError] = useState("");
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const [currency, setCurrency] = useState("USD");
    const [isLoading, setIsLoading] = useState(false); // Loading state

    const predefinedAmounts = [50, 100, 150, 200];

    const paymentMethods = [
        {
            id: "cryptomus",
            name: "Crypto via Cryptomus",
            description: "Instant",
            image: cryptomus,
        }
    ];

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const token = TokenService.getToken();

    useEffect(() => {
        // Set the default payment method on component mount
        if (!selectedPaymentMethod && paymentMethods.length > 0) {
            setSelectedPaymentMethod(paymentMethods[0]);
        }
    }, [paymentMethods, selectedPaymentMethod]);

    const handleAmountSelect = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount(String(amount)); // Ensure customAmount is a string
        setError("");
    };

    const handleCustomAmountChange = (e) => {
        const value = e.target.value;
        setSelectedAmount("");
        setCustomAmount(value);
        setError("");
    };

    const handlePaymentMethodSelect = (paymentMethod) => {
        if (!paymentMethod.disabled) {
            setSelectedPaymentMethod(paymentMethod);
        }
    };

    const handleCalculate = async (e) => {
        e.preventDefault();

        let amountToUse;
        try {
            amountToUse = parseFloat(customAmount); // Parse to float earlier
            if (isNaN(amountToUse)) {
                throw new Error("Invalid amount. Please enter a number.");
            }
        } catch (err) {
            setError("Invalid amount. Please enter a number.");
            return;
        }

        if (!amountToUse) {
            setError("Amount is required.");
            return;
        }


        if (amountToUse < 10) {
            setError("Minimum amount is $10.");
            return;
        }

        if (amountToUse > 10000) {
            setError("Amount must not exceed $10,000.");
            return;
        }

        if (!selectedPaymentMethod) {
            setError("Please select a payment method.");
            return;
        }

        setError("");
        setIsLoading(true); // Start loading

        const paymentData = {
            amount: String(amountToUse), // Send amount as string to backend
            type: selectedPaymentMethod.id,
            currency: currency,
            url_return: `${window.location.origin}/payment/success`,
            url_callback: `${API_BASE_URL}/api/payment/cryptomus-callback`
        };

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await axios.post(`${API_BASE_URL}/payment`, paymentData, config);

            if (response.data && response.data.payment_url) {
                window.location.href = response.data.payment_url;
            } else {
                setError("Failed to initiate Cryptomus payment. Please try again.");
            }
        } catch (error) {
            console.error("Error creating Cryptomus payment:", error);

            if (axios.isAxiosError(error) && error.response) {
                setError(error.response.data.message || "Failed to initiate Cryptomus payment. Please try again."); // Use backend message
            } else {
                setError("Failed to initiate Cryptomus payment. Please try again.");
            }
        } finally {
            setIsLoading(false); // End loading
        }
    };

    return (
        <section className="Payment-Customize pb-10">
            <div className="flex lg:flex-row flex-col gap-6 container mx-auto">
                {/* Payment Method Selection */}
                <div className="lg:w-1/2 w-full">
                    <form onSubmit={handleCalculate}>
                        <div className="mb-8">
                            <h6 className="font-semibold mb-2 text-gray-700">
                                Select Payment Method
                            </h6>
                            <div className="flex flex-col w-full gap-4">
                                {paymentMethods.map((method) => (
                                    <div
                                        key={method.id}
                                        onClick={() => handlePaymentMethodSelect(method)}
                                        className={`relative flex items-center w-full lg:p-4 p-2 rounded-lg border transition-colors duration-200 cursor-pointer 
                    ${selectedPaymentMethod?.id === method.id
                                                ? "border-main-color shadow-md"
                                                : "border-gray-300 hover:border-gray-500"
                                            }
                    ${method.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                                    >
                                        <img
                                            src={method.image}
                                            alt={method.name}
                                            className="lg:size-10 size-6 mr-4 object-contain"
                                        />
                                        <div>
                                            <h5 className="font-semibold">{method.name}</h5>
                                            <p className="text-sm text-gray-500">{method.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-5 w-full">
                            <h6 className="font-semibold mb-2 text-gray-700">
                                Quick Amount Selector
                            </h6>
                            <div className="sm:flex flex-row items-center justify-between border border-gray-300 rounded-xl overflow-hidden grid grid-cols-2">
                                {predefinedAmounts.map((amount) => (
                                    <label
                                        key={amount}
                                        className={`flex items-center justify-center w-full px-5 py-3 cursor-pointer gap-2 select-none ${selectedAmount === amount
                                            ? "text-gray-900 hover:bg-main-color/10 bg-main-color/5"
                                            : "bg-white text-gray-700 hover:bg-main-color/10"
                                            } transition-colors duration-200`}
                                    >
                                        <div className={`w-4 h-4 rounded-full border-2 relative before:absolute before:content[""]  ${selectedAmount === amount
                                            ? "border-main-color before:w-2 before:h-2 before:bg-main-color before:rounded-full before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4"
                                            : "border-gray-300"
                                            }`}></div>
                                        <input
                                            type="radio"
                                            name="amount"
                                            value={amount}
                                            checked={selectedAmount === amount}
                                            onChange={() => handleAmountSelect(amount)}
                                            className="hidden" // Hide the default radio button
                                        />
                                        ${amount}.00
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Amount Input */}
                        <div className="mb-8 w-full">
                            <h6 className="font-semibold mb-2 text-gray-700">Amount</h6>
                            <input
                                type="number"
                                value={customAmount}
                                onChange={handleCustomAmountChange}
                                placeholder="Enter amount"
                                className="w-full py-4 px-3 rounded-xl bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                            {/* Error Message */}
                            {error && (
                                <div className="text-[#FF0000] flex items-center gap-1 mt-1">
                                    <MdError className="w-5 h-5" />
                                    <p className="text-small font-medium">{error}</p>
                                </div>
                            )}
                        </div>

                        {/* Pay Button */}
                        <div className="flex md:flex-row flex-col gap-2 w-full">
                            <button
                                type="submit"
                                disabled={isLoading} // Disable button while loading
                                className={`w-full bg-main-color text-nowrap hover:bg-orange-600 text-white py-4 px-4 rounded-xl transition-colors duration-200 flex justify-center items-center gap-3 border border-main-color
                    ${isLoading ? 'opacity-50 cursor-wait' : ''}`} // Style for loading state
                            >
                                <LuWallet size="22" />
                                {isLoading ? 'Processing...' : 'Pay'}
                            </button>
                            <Link
                                to="/dashboard/contactus"
                                className="w-full bg-transparent text-nowrap hover:bg-main-color/10 text-gray-900 py-4 px-4 rounded-xl transition-colors duration-200 flex justify-center items-center gap-3 border border-gray-300"
                            >
                                <PiQuestionBold size="22" />
                                Request New Payment Method
                            </Link>
                        </div>
                    </form>
                </div>
                {/* Description on the right */}
                <div className="lg:w-1/2 p-4 bg-white space-y-2 border border-gray-300 rounded-small shadow-main">
                    <h2 className="text-xl font-medium text-primary">Payment Information</h2>
                    <p className="text-para-color font-medium">
                        This page allows you to customize your payment amount and select your preferred payment method. Currently, Crypto via Cryptomus is the only available payment option. We are actively working on adding more payment methods to provide you with a wider range of choices.
                    </p>
                    <h3 className="text-xl font-medium text-primary">Payment Methods:</h3>
                    <ul>
                        {paymentMethods.map((method) => (
                            <li key={method.id} className="text-para-color font-medium pb-1">
                                {method.name} - {method.description}
                            </li>
                        ))}
                    </ul>

                    <p className="text-para-color font-medium">
                        When paying with Crypto via Cryptomus, the transaction will be processed instantly upon confirmation on the blockchain. Remember to double-check the recipient address to avoid potential issues.
                    </p>

                    <p className="text-para-color font-medium">
                        If you have questions or need assistance with a different payment method,
                        please <Link to="/dashboard/contactus" className="text-main-color capitalize hover:underline">request a new payment method</Link>. Our support team is available 24/7 to assist you with any issues or inquiries regarding payments.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Customize_Payment;