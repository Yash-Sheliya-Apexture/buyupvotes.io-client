// import React from "react";
// import GradientHeading from "./GradientHeading";
// import images from "../assets/websiteImages/index";

// const PricingWithMenu = () => {
//   const pricingData = [
//     {
//       icon: images.true_icon,
//       title: "Basic",
//       price: "$100",
//       pricePerUpvote: "$0.03/upvote",
//       discount: "14% discount",
//       features: [
//         "Post upvotes",
//         "Post downvotes",
//         "Comment upvotes",
//         "Comment downvotes",
//       ],
//       isBestValue: false,
//     },
//     {
//       icon: images.standard_Icon,
//       title: "Standard",
//       price: "$250",
//       pricePerUpvote: "$0.025/upvote",
//       discount: "50% discount",
//       features: [
//         "Post upvotes",
//         "Post downvotes",
//         "Comment upvotes",
//         "Comment downvotes",
//       ],
//       isBestValue: true,
//     },
//     {
//       icon: images.plan_1,
//       title: "Pro",
//       price: "$500",
//       pricePerUpvote: "$0.02/upvote",
//       discount: "60% discount",
//       features: [
//         "Post upvotes",
//         "Post downvotes",
//         "Comment upvotes",
//         "Comment downvotes",
//       ],
//       isBestValue: false,
//     },
//   ];

//   return (
//     <section className="flex items-center justify-center bg-white Hero-Home">
//       <div className="container mx-auto">
//         <GradientHeading
//           tag="h3"
//           beforeText="Choose the perfect plan"
//           gradientText="for your needs."
//           beforeSpanClassName="font-bold"
//           textSize="text-3xl lg:text-[40px]"
//           className="py-6 text-left lg:pb-14 lg:mt-4 md:text-center"
//         />

//         <div className="mb-10">
//           {/* Grid of cards for large screens */}
//           <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-4">
//             {pricingData.map((plan, index) => (
//               <div
//                 key={index}
//                 className={`p-4 border-2 lg:w-[320px] w-full pb-10 shadow-main ${plan.isBestValue ? "border-main-color" : "border-gray-300"
//                   } rounded-2xl`}
//               >
//                 <div className="relative plan-header">
//                   {plan.isBestValue && (
//                     <div className="text-white bg-main-color px-4 py-1.5 rounded-full text-xs font-medium absolute -top-8 left-[50%] translate-x-[-50%]">
//                       Best Value
//                     </div>
//                   )}
//                   <img
//                     src={plan.icon}
//                     alt={plan.title}
//                     className="rounded-lg w-9 h-9"
//                   />
//                   <div className="mt-4 space-y-3">
//                     <h6 className="font-medium text-sub-color">{plan.title}</h6>
//                     <span className="block mt-3 text-3xl font-semibold font-BasierSquare">
//                       {plan.price}+{"  "}
//                       <span className="ml-2 font-medium text-small font-InterDisplay text-para-color">
//                         {plan.pricePerUpvote}
//                       </span>
//                     </span>

//                     <p className="text-xs font-medium text-main-color">
//                       {plan.discount}
//                     </p>
//                   </div>
//                 </div>
//                 <hr className="my-2 border-t border-t-gray-300" />
//                 <div className="plan-details">
//                   <ul>
//                     {plan.features.map((feature, i) => (
//                       <li key={i} className="flex space-y-2">
//                         <span className="mr-1.5 mt-2 text-green-500 text-small">
//                           ✔
//                         </span>
//                         <span className="font-normal text-small">
//                           {feature}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingWithMenu;


// import React, { useState } from 'react';

// const Pricing = () => {
//   const [paymentMethod, setPaymentMethod] = useState('card');
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryMonth, setExpiryMonth] = useState('');
//   const [expiryYear, setExpiryYear] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [nameOnCard, setNameOnCard] = useState('');
//   const [billingAddressSame, setBillingAddressSame] = useState(true);

//   const handlePaymentMethodChange = (method) => {
//     setPaymentMethod(method);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your payment processing logic here
//     console.log('Payment submitted');
//   };

//   return (
//     <div className="bg-gray-50 py-12">
//       <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
//         {/* Header */}
//         <h1 className="text-2xl font-semibold mb-6 flex items-center justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 mr-2 text-gray-500"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
//             />
//           </svg>
//           Secure Checkout
//         </h1>

//         {/* Payment Methods */}
//         <div className="mb-6">
//           <h2 className="text-lg font-medium mb-3">Choose Payment Method</h2>
//           <div className="flex flex-wrap gap-3">
//             <button
//               className={`py-2 px-4 rounded-md border ${paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:bg-gray-50'
//                 } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//               onClick={() => handlePaymentMethodChange('card')}
//             >
//               Card
//             </button>
//             <button
//               className={`py-2 px-4 rounded-md border ${paymentMethod === 'wallet' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:bg-gray-50'
//                 } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//               onClick={() => handlePaymentMethodChange('wallet')}
//             >
//               Wallet
//             </button>
//             <button
//               className={`py-2 px-4 rounded-md border ${paymentMethod === 'crypto' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:bg-gray-50'
//                 } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//               onClick={() => handlePaymentMethodChange('crypto')}
//             >
//               Crypto
//             </button>
//             <button
//               className={`py-2 px-4 rounded-md border ${paymentMethod === 'bank' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:bg-gray-50'
//                 } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//               onClick={() => handlePaymentMethodChange('bank')}
//             >
//               Bank
//             </button>
//           </div>
//         </div>

//         {/* Card Payment Form (Conditional) */}
//         {paymentMethod === 'card' && (
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">
//                 Card Number
//               </label>
//               <input
//                 type="text"
//                 id="cardNumber"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="XXXX-XXXX-XXXX-XXXX"
//                 value={cardNumber}
//                 onChange={(e) => setCardNumber(e.target.value)}
//               />
//             </div>

//             <div className="flex mb-4">
//               <div className="w-1/2 mr-2">
//                 <label htmlFor="expiryMonth" className="block text-gray-700 text-sm font-bold mb-2">
//                   Expiry Month
//                 </label>
//                 <select
//                   id="expiryMonth"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   value={expiryMonth}
//                   onChange={(e) => setExpiryMonth(e.target.value)}
//                 >
//                   <option value="">Month</option>
//                   {[...Array(12)].map((_, i) => (
//                     <option key={i + 1} value={i + 1}>
//                       {i + 1}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="w-1/2 ml-2">
//                 <label htmlFor="expiryYear" className="block text-gray-700 text-sm font-bold mb-2">
//                   Expiry Year
//                 </label>
//                 <select
//                   id="expiryYear"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   value={expiryYear}
//                   onChange={(e) => setExpiryYear(e.target.value)}
//                 >
//                   <option value="">Year</option>
//                   {/* Example years - adjust as needed */}
//                   {[...Array(10)].map((_, i) => (
//                     <option key={2024 + i} value={2024 + i}>
//                       {2024 + i}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <div className="mb-4">
//               <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">
//                 CVV
//               </label>
//               <input
//                 type="password"
//                 id="cvv"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="CVV"
//                 value={cvv}
//                 onChange={(e) => setCvv(e.target.value)}
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="nameOnCard" className="block text-gray-700 text-sm font-bold mb-2">
//                 Name on Card
//               </label>
//               <input
//                 type="text"
//                 id="nameOnCard"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Name as it appears on card"
//                 value={nameOnCard}
//                 onChange={(e) => setNameOnCard(e.target.value)}
//               />
//             </div>

//             {/* Billing Address */}
//             <div className="mb-4">
//               <label className="inline-flex items-center">
//                 <input
//                   type="checkbox"
//                   className="form-checkbox h-5 w-5 text-blue-600"
//                   checked={billingAddressSame}
//                   onChange={() => setBillingAddressSame(!billingAddressSame)}
//                 />
//                 <span className="ml-2 text-gray-700">Billing address is the same as shipping address</span>
//               </label>
//             </div>

//             {!billingAddressSame && (
//               <div className="mb-4">
//                 <label htmlFor="billingAddress" className="block text-gray-700 text-sm font-bold mb-2">
//                   Billing Address
//                 </label>
//                 <textarea
//                   id="billingAddress"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   placeholder="Enter billing address"
//                 ></textarea>
//               </div>
//             )}

//             {/* Total Amount (Example) */}
//             <div className="mb-6 text-center">
//               <p className="text-lg font-medium">Total Amount: $199.99</p>
//             </div>

//             {/* Security Assurance */}
//             <div className="flex justify-center items-center mb-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 mr-2 text-green-500"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               <p className="text-sm text-gray-600">Your payment information is encrypted and secure.</p>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//             >
//               Pay Securely
//             </button>
//           </form>
//         )}

//         {/* Wallet Payment Option */}
//         {paymentMethod === 'wallet' && (
//           <div className="mb-6">
//             <p>Wallet Integration Coming Soon</p>
//           </div>
//         )}
//         {/* Crypto Payment Option */}
//         {paymentMethod === 'crypto' && (
//           <div className="mb-6">
//             <p>Crypto Integration Coming Soon</p>
//           </div>
//         )}
//         {/* Bank Payment Option */}
//         {paymentMethod === 'bank' && (
//           <div className="mb-6">
//             <p>Bank Integration Coming Soon</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Pricing;

// import React, { useState, useEffect } from 'react';

// function PaymentGateway() {
//   const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' or 'crypto'
//   const [cryptoType, setCryptoType] = useState('BTC'); // Default to Bitcoin
//   const [amount, setAmount] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [cryptoRate, setCryptoRate] = useState(0);
//   const [loadingRate, setLoadingRate] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(''); // Error message state

//   // Dummy Crypto Rates (Replace with API call)
//   const cryptoRates = {
//     BTC: 65000,
//     ETH: 3500,
//     LTC: 100,
//     DOGE: 0.15,
//   };

//   useEffect(() => {
//     // Simulate fetching crypto rates from an API
//     const fetchRate = async () => {
//       setLoadingRate(true);
//       await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay
//       if (cryptoRates[cryptoType]) {
//         setCryptoRate(cryptoRates[cryptoType]);
//       } else {
//         setErrorMessage('Could not load crypto rate');
//       }
//       setLoadingRate(false);
//     };

//     if (paymentMethod === 'crypto') {
//       fetchRate();
//     }
//   }, [cryptoType, paymentMethod]);

//   const handlePayment = () => {
//     setErrorMessage(''); // Clear any previous errors

//     if (paymentMethod === 'card') {
//       if (!cardNumber || !expiryDate || !cvv || !amount) {
//         setErrorMessage('Please fill in all card details and amount.');
//         return;
//       }
//       // In a real application, you would send this data to your backend for processing
//       console.log('Processing card payment:', { cardNumber, expiryDate, cvv, amount });
//       alert('Card payment processed (simulated)'); // Replace with real logic
//     } else {
//       if (!amount) {
//         setErrorMessage('Please enter the amount.');
//         return;
//       }

//       const cryptoAmount = amount / cryptoRate;

//       console.log('Processing crypto payment:', { cryptoType, amount, cryptoAmount });
//       alert(`Crypto payment processed (simulated).  Pay ${cryptoAmount.toFixed(8)} ${cryptoType}`); // Replace with real logic
//     }
//   };


//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
//       <h2 className="text-2xl font-semibold mb-4 text-gray-800">Payment Gateway</h2>

//       {/* Payment Method Toggle */}
//       <div className="flex space-x-4 mb-4">
//         <button
//           className={`py-2 px-4 rounded-md ${paymentMethod === 'card' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             }`}
//           onClick={() => setPaymentMethod('card')}
//         >
//           Pay with Card
//         </button>
//         <button
//           className={`py-2 px-4 rounded-md ${paymentMethod === 'crypto' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             }`}
//           onClick={() => setPaymentMethod('crypto')}
//         >
//           Pay with Crypto
//         </button>
//       </div>

//       {/* Card Payment Form */}
//       {paymentMethod === 'card' && (
//         <div>
//           <div className="mb-4">
//             <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">
//               Card Number
//             </label>
//             <input
//               type="text"
//               id="cardNumber"
//               placeholder="Enter card number"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={cardNumber}
//               onChange={(e) => setCardNumber(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="expiryDate" className="block text-gray-700 text-sm font-bold mb-2">
//               Expiry Date
//             </label>
//             <input
//               type="text"
//               id="expiryDate"
//               placeholder="MM/YY"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={expiryDate}
//               onChange={(e) => setExpiryDate(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">
//               CVV
//             </label>
//             <input
//               type="text"
//               id="cvv"
//               placeholder="CVV"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={cvv}
//               onChange={(e) => setCvv(e.target.value)}
//             />
//           </div>
//         </div>
//       )}
//       {/* Amount input shared for both card and crypto */}
//       <div className="mb-4">
//         <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
//           Amount
//         </label>
//         <input
//           type="number"
//           id="amount"
//           placeholder="Enter amount"
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//       </div>

//       {/* Crypto Payment Form */}
//       {paymentMethod === 'crypto' && (
//         <div>
//           <div className="mb-4">
//             <label htmlFor="cryptoType" className="block text-gray-700 text-sm font-bold mb-2">
//               Cryptocurrency
//             </label>
//             <select
//               id="cryptoType"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={cryptoType}
//               onChange={(e) => setCryptoType(e.target.value)}
//             >
//               <option value="BTC">Bitcoin (BTC)</option>
//               <option value="ETH">Ethereum (ETH)</option>
//               <option value="LTC">Litecoin (LTC)</option>
//               <option value="DOGE">Dogecoin (DOGE)</option>
//             </select>
//           </div>

//           {loadingRate ? (
//             <p className="text-gray-500">Loading current {cryptoType} rate...</p>
//           ) : (
//             <p className="text-gray-600">
//               Current {cryptoType} rate: ${cryptoRate}
//             </p>
//           )}

//           {/* Amount input shared for both card and crypto */}
//           <div className="mb-4">
//             <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
//               Amount
//             </label>
//             <input
//               type="number"
//               id="amount"
//               placeholder="Enter amount"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//           </div>
//         </div>
//       )}

//       {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         onClick={handlePayment}
//       >
//         Pay Now
//       </button>

//       <p className="text-gray-500 text-xs mt-4">
//         Secured by AwesomeSecurityProvider.
//       </p>
//     </div>
//   );
// }

// export default PaymentGateway;

// import React, { useState, useEffect } from 'react';

// import secureBadge from '../assets/Images/Creator.svg';
// import cardIcons from '../assets/Images/Creator.svg';
// import cryptoLogos from '../assets/Images/Creator.svg';

// function PaymentGateway() {
//   const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' or 'crypto'
//   const [cryptoType, setCryptoType] = useState('BTC'); // Default to Bitcoin
//   const [amount, setAmount] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [cryptoRate, setCryptoRate] = useState(0);
//   const [loadingRate, setLoadingRate] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(''); // Error message state

//   // Dummy Crypto Rates (Replace with API call)
//   const cryptoRates = {
//     BTC: 65000,
//     ETH: 3500,
//     LTC: 100,
//     DOGE: 0.15,
//   };

//   useEffect(() => {
//     // Simulate fetching crypto rates from an API
//     const fetchRate = async () => {
//       setLoadingRate(true);
//       await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay
//       if (cryptoRates[cryptoType]) {
//         setCryptoRate(cryptoRates[cryptoType]);
//       } else {
//         setErrorMessage('Could not load crypto rate');
//       }
//       setLoadingRate(false);
//     };

//     if (paymentMethod === 'crypto') {
//       fetchRate();
//     }
//   }, [cryptoType, paymentMethod]);

//   const handlePayment = () => {
//     setErrorMessage(''); // Clear any previous errors

//     if (paymentMethod === 'card') {
//       if (!cardNumber || !expiryDate || !cvv || !amount) {
//         setErrorMessage('Please fill in all card details and amount.');
//         return;
//       }
//       // In a real application, you would send this data to your backend for processing
//       console.log('Processing card payment:', { cardNumber, expiryDate, cvv, amount });
//       alert('Card payment processed (simulated)'); // Replace with real logic
//     } else {
//       if (!amount) {
//         setErrorMessage('Please enter the amount.');
//         return;
//       }

//       const cryptoAmount = amount / cryptoRate;

//       console.log('Processing crypto payment:', { cryptoType, amount, cryptoAmount });
//       alert(`Crypto payment processed (simulated).  Pay ${cryptoAmount.toFixed(8)} ${cryptoType}`); // Replace with real logic
//     }
//   };


//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">

//       {/* Payment Gateway Information Section */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-2 text-gray-800">About Our Secure Payment Gateway</h2>
//         <p className="text-gray-700 mb-4">
//           We provide a secure and reliable payment gateway that supports both credit/debit cards and popular cryptocurrencies. Your financial information is protected with advanced encryption technology.  Enjoy seamless and hassle-free payments!
//         </p>

//         <div className="flex items-center space-x-4">
//           <img src={secureBadge} alt="Secure Payment Badge" className="h-12" />
//           <img src={cardIcons} alt="Credit Card Icons" className="h-8" />
//           <img src={cryptoLogos} alt="Crypto Logos" className="h-8" />
//         </div>
//       </div>

//       {/* Payment Method Toggle */}
//       <div className="flex space-x-4 mb-4">
//         <button
//           className={`py-2 px-4 rounded-md ${paymentMethod === 'card' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             }`}
//           onClick={() => setPaymentMethod('card')}
//         >
//           Pay with Card
//         </button>
//         <button
//           className={`py-2 px-4 rounded-md ${paymentMethod === 'crypto' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             }`}
//           onClick={() => setPaymentMethod('crypto')}
//         >
//           Pay with Crypto
//         </button>
//       </div>

//       {/* Card Payment Form */}
//       {paymentMethod === 'card' && (
//         <div>
//           <div className="mb-4">
//             <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">
//               Card Number
//             </label>
//             <input
//               type="text"
//               id="cardNumber"
//               placeholder="Enter card number"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={cardNumber}
//               onChange={(e) => setCardNumber(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="expiryDate" className="block text-gray-700 text-sm font-bold mb-2">
//               Expiry Date
//             </label>
//             <input
//               type="text"
//               id="expiryDate"
//               placeholder="MM/YY"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={expiryDate}
//               onChange={(e) => setExpiryDate(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">
//               CVV
//             </label>
//             <input
//               type="text"
//               id="cvv"
//               placeholder="CVV"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={cvv}
//               onChange={(e) => setCvv(e.target.value)}
//             />
//           </div>
//         </div>
//       )}
//       {/* Amount input shared for both card and crypto */}
//       <div className="mb-4">
//         <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
//           Amount
//         </label>
//         <input
//           type="number"
//           id="amount"
//           placeholder="Enter amount"
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//       </div>

//       {/* Crypto Payment Form */}
//       {paymentMethod === 'crypto' && (
//         <div>
//           <div className="mb-4">
//             <label htmlFor="cryptoType" className="block text-gray-700 text-sm font-bold mb-2">
//               Cryptocurrency
//             </label>
//             <select
//               id="cryptoType"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={cryptoType}
//               onChange={(e) => setCryptoType(e.target.value)}
//             >
//               <option value="BTC">Bitcoin (BTC)</option>
//               <option value="ETH">Ethereum (ETH)</option>
//               <option value="LTC">Litecoin (LTC)</option>
//               <option value="DOGE">Dogecoin (DOGE)</option>
//             </select>
//           </div>

//           {loadingRate ? (
//             <p className="text-gray-500">Loading current {cryptoType} rate...</p>
//           ) : (
//             <p className="text-gray-600">
//               Current {cryptoType} rate: ${cryptoRate}
//             </p>
//           )}

//           {/* Amount input shared for both card and crypto */}
//           <div className="mb-4">
//             <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
//               Amount
//             </label>
//             <input
//               type="number"
//               id="amount"
//               placeholder="Enter amount"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//           </div>
//         </div>
//       )}

//       {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         onClick={handlePayment}
//       >
//         Pay Now
//       </button>

//       <p className="text-gray-500 text-xs mt-4">
//         Secured by AwesomeSecurityProvider.
//       </p>
//     </div>
//   );
// }

// export default PaymentGateway;

// import React from 'react'

// const Pricing = () => {
//   return (
//     <section className='text-small'>
//       <div className='text-5xl font-medium text-small'>Pricing</div>
//     </section>
//   )
// }

// export default Pricing

// import { useState } from "react";
// import { FaBitcoin, FaEthereum, FaCreditCard, FaCopy, FaShieldAlt } from "react-icons/fa";

// const Pricing = () => {
//   const [status, setStatus] = useState("Awaiting Payment");
//   const cryptoWallet = "0x1234abcd5678efgh9012ijkl3456mnop7890qrst"; // Example wallet address

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(cryptoWallet);
//     alert("Wallet address copied!");
//   };

//   return (
//     <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10">
//       {/* Header */}
//       <h2 className="text-xl font-bold text-center mb-4">Secure Payment Gateway</h2>

//       {/* Crypto Payment Section */}
//       <div className="bg-gray-800 p-4 rounded-lg mb-4">
//         <h3 className="text-lg font-semibold flex items-center gap-2">
//           <FaBitcoin className="text-yellow-500" /> Pay with Crypto
//         </h3>
//         <p className="text-sm mt-2">Scan the QR code or copy the address below.</p>

//         {/* QR Code (Placeholder) */}
//         <div className="bg-gray-700 w-32 h-32 mx-auto my-3 flex items-center justify-center">
//           <span className="text-gray-500 text-xs">[QR Code Here]</span>
//         </div>

//         {/* Wallet Address & Copy Button */}
//         <div className="flex items-center justify-between bg-gray-700 p-2 rounded-md">
//           <span className="truncate text-sm">{cryptoWallet}</span>
//           <button onClick={copyToClipboard} className="text-blue-400 hover:text-blue-600">
//             <FaCopy />
//           </button>
//         </div>
//       </div>

//       {/* Card Payment Section */}
//       <div className="bg-gray-800 p-4 rounded-lg mb-4">
//         <h3 className="text-lg font-semibold flex items-center gap-2">
//           <FaCreditCard className="text-blue-500" /> Pay with Credit/Debit Card
//         </h3>
//         <p className="text-sm mt-2">Fast & secure payment via Visa, MasterCard, and more.</p>

//         <button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition">
//           Pay with Card
//         </button>
//       </div>

//       {/* Payment Status & Security */}
//       <div className="bg-gray-800 p-4 rounded-lg text-center">
//         <p className="text-sm font-semibold">Payment Status: <span className="text-green-400">{status}</span></p>
//         <div className="flex justify-center gap-2 mt-2 text-sm text-gray-400">
//           <FaShieldAlt /> SSL Secure • 3D Secure Enabled
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;






// import { useState } from "react";
// import { FaBitcoin, FaCreditCard, FaCopy, FaShieldAlt } from "react-icons/fa";

// const Pricing = ({ title, description, cryptoInfo, cardInfo, image }) => {
//   const [status, setStatus] = useState("Awaiting Payment");

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(cryptoInfo.walletAddress);
//     alert("Wallet address copied!");
//   };

//   return (
//     <section className="bg-gray-900 text-white py-10 px-6">
//       <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-8 items-center">

//         {/* Left Side: Image Display */}
//         <div className="w-full lg:w-1/2">
//           <img src={image} alt="Payment Illustration" className="rounded-lg shadow-lg w-full" />
//         </div>

//         {/* Right Side: Payment Information */}
//         <div className="w-full lg:w-1/2">
//           <h2 className="text-2xl font-bold">{title}</h2>
//           <p className="text-gray-400 mt-2">{description}</p>

//           {/* Crypto Payment Section */}
//           <div className="bg-gray-800 p-4 rounded-lg mt-4">
//             <h3 className="text-lg font-semibold flex items-center gap-2">
//               <FaBitcoin className="text-yellow-500" /> {cryptoInfo.name} Payment
//             </h3>
//             <p className="text-sm mt-2">{cryptoInfo.details}</p>

//             {/* QR Code Display */}
//             <div className="bg-gray-700 w-32 h-32 mx-auto my-3 flex items-center justify-center">
//               <img src={cryptoInfo.qrCode} alt="QR Code" className="w-full h-full object-cover" />
//             </div>

//             {/* Wallet Address & Copy Button */}
//             <div className="flex items-center justify-between bg-gray-700 p-2 rounded-md">
//               <span className="truncate text-sm">{cryptoInfo.walletAddress}</span>
//               <button onClick={copyToClipboard} className="text-blue-400 hover:text-blue-600">
//                 <FaCopy />
//               </button>
//             </div>
//           </div>

//           {/* Card Payment Section */}
//           <div className="bg-gray-800 p-4 rounded-lg mt-4">
//             <h3 className="text-lg font-semibold flex items-center gap-2">
//               <FaCreditCard className="text-blue-500" /> Pay with Card
//             </h3>
//             <p className="text-sm mt-2">{cardInfo.details}</p>

//             {/* Card Image */}
//             <div className="mt-3">
//               <img src={cardInfo.image} alt="Card Payment" className="rounded-lg shadow-md w-full" />
//             </div>

//             {/* Pay Button */}
//             <button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition">
//               {cardInfo.buttonText}
//             </button>
//           </div>

//           {/* Payment Status & Security */}
//           <div className="bg-gray-800 p-4 rounded-lg text-center mt-4">
//             <p className="text-sm font-semibold">Payment Status: <span className="text-green-400">{status}</span></p>
//             <div className="flex justify-center gap-2 mt-2 text-sm text-gray-400">
//               <FaShieldAlt /> SSL Secure • 3D Secure Enabled
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;


// import React from 'react';
// import GradientHeading from './GradientHeading';
// import Visa from "../assets/Images/Bitcoin.png";
// import MasterCard from "../assets/Images/MasterCard.png";
// import { MdOutlineSecurity } from "react-icons/md"

// const Pricing = () => {
//   return (
//     <div className='container mx-auto'>
//       <section id="payment-gateways" className="bg-gray-50 py-10 text-center">
//         <div className="container mx-auto px-4">
//           <GradientHeading
//             tag="h3"
//             beforeText="Secure "
//             gradientText="Payment Options"
//             beforeSpanClassName="font-bold"
//             textSize="text-basic lg:text-xlarge text-center"
//           />
//           <p className="text-para-color text-base mb-10">
//             We offer a variety of secure and convenient payment options to ensure a seamless checkout experience.
//           </p>

//           <div className="flex justify-center gap-6">

//             {/* Crpto */}
//             <div className="p-4 w-72 border border-gray-300 rounded-2xl bg-white shadow-md">
//               <img src={Visa} alt="Visa" className="h-16 mx-auto mb-4" />
//               <h3 className="text-xl font-bold text-para-color mb-2">Crypto</h3>
//               <p className="text-gray-700 text-medium">Use your Visa credit or debit card for quick and reliable payments.</p>
//             </div>

//             {/* Mastercard */}
//             <div className="p-4 w-72 border border-gray-300 rounded-2xl bg-white shadow-md">
//               <img src={MasterCard} alt="Mastercard" className="h-16 mx-auto mb-4" />
//               <h3 className="text-xl font-bold text-para-color mb-2">Mastercard</h3>
//               <p className="text-gray-700 text-medium">Pay with your Mastercard credit or debit card. Secure and widely accepted.</p>
//             </div>
//           </div>

//           <div className="mt-12 flex items-center justify-center gap-2">
//             <MdOutlineSecurity className='text-main-color size-8' />
//             <p className="text-gray-700 text-medium font-medium">
//               Your payment information is protected with SSL encryption. We do not store your credit card details.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Pricing;

// import React from 'react';
// import GradientHeading from './GradientHeading';
// import Bitcoin from "../assets/Images/Bitcoin.png";  // Corrected import
// import MasterCard from "../assets/Images/MasterCard.png";
// import { MdOutlineSecurity } from "react-icons/md";
// import { motion } from 'framer-motion';  // Import framer-motion for animation


// const Pricing = () => {

//   // Animation Variants for cards
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 100 } },
//   };


//   return (
//     <div className='container mx-auto py-16'> {/*Added some padding to container*/}
//       <section id="payment-gateways" className="bg-gray-50 py-10 text-center rounded-lg shadow-md"> {/*Added background, padding, rounded corners, and shadow to the section*/}
//         <div className="container mx-auto px-4">
//           <GradientHeading
//             tag="h3"
//             beforeText="Secure "
//             gradientText="Payment Options"
//             beforeSpanClassName="font-bold"
//             textSize="text-basic lg:text-xlarge text-center"
//           />
//           <p className="text-gray-600 text-base mb-10"> {/*Slightly darkened text color for better readability*/}
//             We offer a variety of secure and convenient payment options to ensure a seamless checkout experience.
//           </p>

//           <div className="flex justify-center gap-8 flex-wrap"> {/*Added flex-wrap for responsiveness*/}

//             {/* Bitcoin Card */}
//             <motion.div
//               className="p-6 w-full max-w-sm border border-gray-200 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300" // More modern card styling + hover effect
//               variants={cardVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               <img src={Bitcoin} alt="Bitcoin" className="h-20 mx-auto mb-4" /> {/*Larger Image*/}
//               <h3 className="text-2xl font-semibold text-gray-800 mb-3">Bitcoin</h3> {/*Larger font, bolder, and better text color*/}
//               <p className="text-gray-700 text-medium">Use Bitcoin for secure and anonymous payments.</p>
//             </motion.div>

//             {/* Mastercard Card */}
//             <motion.div
//               className="p-6 w-full max-w-sm border border-gray-200 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300" // More modern card styling + hover effect
//               variants={cardVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               <img src={MasterCard} alt="Mastercard" className="h-20 mx-auto mb-4" />  {/*Larger Image*/}
//               <h3 className="text-2xl font-semibold text-gray-800 mb-3">Mastercard</h3> {/*Larger font, bolder, and better text color*/}
//               <p className="text-gray-700 text-medium">Pay securely with your Mastercard credit or debit card.</p>
//             </motion.div>
//           </div>

//           <div className="mt-12 flex items-center justify-center gap-2">
//             <MdOutlineSecurity className='text-green-500 size-8' /> {/*Changed icon color*/}
//             <p className="text-gray-700 text-medium font-medium">
//               Your payment information is protected with SSL encryption. We do not store your credit card details.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Pricing;


// import React from 'react';
// import GradientHeading from './GradientHeading';
// import Bitcoin from "../assets/Images/Bitcoin.png";
// import MasterCard from "../assets/Images/MasterCard.png";
// import { MdOutlineSecurity } from "react-icons/md";
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';  // Import useInView from react-intersection-observer

// const Pricing = () => {

//   // Animation Variants - More refined
//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 20 }, // Start slightly smaller and a little lower
//     visible: {
//       opacity: 1,
//       scale: 1, // Return to normal size
//       y: 0,     // Move to normal position
//       transition: {
//         duration: 0.6,   // Adjusted speed - try 0.5 or 0.7 for other speeds
//         ease: "easeInOut",  // A smoother ease function
//         delay: 0.1  // slight stagger effect to animate cards separately
//       },
//     },
//   };

//   // Use Intersection Observer to trigger animations when the section is in view
//   const { ref, inView } = useInView({
//     threshold: 0.5, // Trigger animation when 20% of the section is visible
//     triggerOnce: true,  // Only animate once when the section comes into view
//   });

//   return (
//     <div className='container mx-auto py-16'>
//       <div
//         id="payment-gateways"
//         className="bg-gray-50 py-10 text-center"
//         ref={ref}
//       >
//         <div>
//           <GradientHeading
//             tag="h3"
//             beforeText="Secure "
//             gradientText="Payment Options"
//             beforeSpanClassName="font-bold"
//             textSize="text-basic lg:text-xlarge text-center"
//           />
//         </div>
//         <p className="text-gray-600 text-base mb-10">
//           We offer a variety of secure and convenient payment options to ensure a seamless checkout experience.
//         </p>

//         <div className="flex justify-center gap-8 flex-wrap">
//           {/* Bitcoin Card */}
//           <motion.div
//             className="p-6 w-full max-w-sm border border-gray-200 rounded-xl bg-white shadow-md transition-shadow duration-300"
//             variants={cardVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}

//           >
//             <img src={Bitcoin} alt="Bitcoin" className="h-20 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold text-gray-800 mb-3">Bitcoin</h3>
//             <p className="text-gray-700 text-medium">Use Bitcoin for secure and anonymous payments.</p>
//           </motion.div>

//           {/* Mastercard Card */}
//           <motion.div
//             className="p-6 w-full max-w-sm border border-gray-200 rounded-xl bg-white shadow-md transition-shadow duration-300"
//             variants={cardVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//           >
//             <img src={MasterCard} alt="Mastercard" className="h-20 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold text-gray-800 mb-3">Mastercard</h3>
//             <p className="text-gray-700 text-medium">Pay securely with your Mastercard credit or debit card.</p>
//           </motion.div>
//         </div>

//         <div className="mt-12 flex items-center justify-center gap-2">
//           <MdOutlineSecurity className='text-green-500 size-8' />
//           <p className="text-gray-700 text-medium font-medium">
//             Your payment information is protected with SSL encryption. We do not store your credit card details.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;

// import React from 'react';
// import GradientHeading from './GradientHeading';
// import Bitcoin from "../assets/Images/Bitcoin.png";
// import MasterCard from "../assets/Images/MasterCard.png";
// import { MdOutlineSecurity } from "react-icons/md";
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const Pricing = () => {

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,       // Start below
//       rotate: 2,    // Slightly rotated
//       scale: 0.9     // Slightly smaller
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       rotate: 0,    // Rotate back to normal
//       scale: 1,
//       transition: {
//         type: "spring", // Spring physics for a more natural feel
//         stiffness: 200,   // Controls bounciness (higher = less bouncy)
//         damping: 10,    // Controls oscillation (lower = more oscillation)
//         duration: 0.5,   // Total animation time
//         delay: 0.2     // Introduce a slight delay to make it more appealing. Removed stagger effect cause main tag component can manage this
//       },
//     },
//   };


//   // Use Intersection Observer
//   const { ref, inView } = useInView({
//     threshold: 0.5,
//     triggerOnce: true,
//   });



//   return (
//     <div className='container mx-auto py-16'>
//       <div
//         id="payment-gateways"
//         className="bg-gray-50 py-10 text-center"
//         ref={ref}
//       >
//         <div>
//           <GradientHeading
//             tag="h3"
//             beforeText="Secure "
//             gradientText="Payment Gateways"
//             beforeSpanClassName="font-bold"
//             textSize="text-basic lg:text-xlarge text-center pb-2"
//           />
//         </div>
//         <p className="text-gray-600 text-medium lg:text-base mb-10">
//           We offer a variety of secure and convenient payment options to ensure a seamless checkout experience.
//         </p>

//         <div className="flex md:flex-row flex-col items-center justify-center gap-8">


//           <motion.div
//             className="p-6 w-full max-w-sm border border-gray-200 rounded-xl bg-white shadow-md"
//             variants={cardVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//           >
//             <img src={Bitcoin} alt="Bitcoin" className="lg:h-20 h-14 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold text-gray-800 mb-3">Bitcoin</h3>
//             <p className="text-gray-700 text-small lg:text-medium">Use Bitcoin for secure and anonymous payments.</p>
//           </motion.div>


//           <motion.div
//             className="p-6 w-full max-w-sm border border-gray-200 rounded-xl bg-white shadow-md"
//             variants={cardVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//           >
//             <img src={MasterCard} alt="Mastercard" className="lg:h-20 h-14 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold text-gray-800 mb-3">Mastercard</h3>
//             <p className="text-gray-700 text-small lg:text-medium">Pay securely with your Mastercard credit or debit card.</p>
//           </motion.div>
//         </div>

//         <div className="lg:mt-12 mt-5 flex items-center justify-center gap-0">
//           <MdOutlineSecurity className='text-green-500 inline-block size-8' />
//           <p className="text-gray-700 text-small lg:text-medium font-medium">
//             Your payment information is protected with SSL encryption. We do not store your credit card details.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;

// import React, { useEffect, useState } from "react";
// import Rocket from "../assets/Images/rocket.webp";
// import { FaUpRightFromSquare } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// const Pricing = () => {

//   const [isLoggedIn, setIsLoggedIn] = useState(false); // User login state

//   useEffect(() => {
//     // Check if there's a token or user info in localStorage to determine login status
//     const authToken = localStorage.getItem("authToken"); // or localStorage.getItem("user");
//     if (authToken) {
//       setIsLoggedIn(true); // If token exists, user is logged in
//     } else {
//       setIsLoggedIn(false); // If no token, user is not logged in
//     }
//   }, []);


//   return (
//     <>
//       {/* Contact Form */}
//       <section className="mx-auto container" id="FaQ">
//         <div className="bg-main-color my-10 rounded-[30px] pb-6">
//           <div className="flex flex-wrap items-center lg:flex-nowrap">
//             {/* Left Side: Image */}
//             <div className="w-full lg:w-[40%] flex justify-center lg:justify-start">
//               <img
//                 src={Rocket}
//                 alt="Rocket"
//                 className="max-w-[350px] md:max-w-[400px] animate-float"
//               />
//             </div>

//             {/* Right Side: Content */}
//             <div className="w-full lg:w-[60%] text-center lg:text-left mt-10 lg:mt-0">
//               <h1 className="text-white text-[24px] md:text-[32px] lg:text-[50px] font-black leading-tight">
//                 Buy upvotes today & <br /> get instant delivery!
//               </h1>
//               {!isLoggedIn ? (
//                 <div className="flex mt-8">
//                   <Link
//                     to="/dashboard"
//                     className="bg-white text-[#FF5700] inline-block px-10 py-2.5 font-bold rounded-full transition-all hover:bg-[#454F5B] hover:text-white"
//                   >
//                     Dashboard
//                   </Link>
//                 </div>
//               ) : (
//                 <div className="flex flex-col items-center mt-8 space-y-4 lg:flex-row lg:items-start md:space-y-0 md:space-x-4">
//                   {/* Sign In Button */}
//                   <Link
//                     to="/signin"
//                     className="bg-white text-[#FF5700] font-bold px-20 py-1.5 rounded-full transition-all hover:bg-[#454F5B] hover:text-white"
//                   >
//                     Sign in
//                   </Link>

//                   {/* Sign Up Button */}
//                   <Link to="/signup" className="text-white font-bold lg:px-20 px-16 py-1.5 rounded-full border-2 border-transparent flex items-center transition-all hover:border-white">
//                     Sign up
//                     <FaUpRightFromSquare className="ml-1" />
//                   </Link>
//                 </div>
//               )
//               }
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Pricing;


// import React, { useEffect, useState } from "react";
// import Rocket from "../assets/Images/rocket.webp";
// import { FaUpRightFromSquare } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// const Pricing = () => {

//   const [isLoggedIn, setIsLoggedIn] = useState(false); // User login state

//   useEffect(() => {
//     // Check if there's a token or user info in localStorage to determine login status
//     const authToken = localStorage.getItem("authToken"); // or localStorage.getItem("user");
//     if (authToken) {
//       setIsLoggedIn(true); // If token exists, user is logged in
//     } else {
//       setIsLoggedIn(false); // If no token, user is not logged in
//     }
//   }, []);


//   return (
//     <>
//       {/* Contact Form */}
//       <section className="mx-auto container" id="FaQ">
//         <div className="bg-[#FF5700] my-10 rounded-[30px] pb-6 shadow-lg overflow-hidden">
//           <div className="flex flex-wrap items-center lg:flex-nowrap">
//             {/* Left Side: Image */}
//             <div className="w-full lg:w-[40%] flex justify-center lg:justify-start">
//               <img
//                 src={Rocket}
//                 alt="Rocket"
//                 className="max-w-[350px] md:max-w-[400px] animate-float p-4" // Add padding to image
//               />
//             </div>

//             {/* Right Side: Content */}
//             <div className="w-full lg:w-[60%] text-center lg:text-left mt-10 lg:mt-0 px-4 md:px-8">
//               <h1 className="text-white text-[28px] md:text-[36px] lg:text-[48px] font-extrabold leading-tight mb-4">
//                 Boost Your Reach: Get Upvotes Instantly!
//               </h1>
//               <p className="text-white text-lg mb-6 opacity-80">
//                 Skyrocket your content visibility with our upvote service.  Fast delivery, real results.
//               </p>
//               {!isLoggedIn ? (
//                 <div className="flex justify-center lg:justify-start">
//                   <Link
//                     to="/dashboard"
//                     className="bg-white text-[#FF5700] inline-block px-8 py-3 font-semibold rounded-full transition-all hover:bg-[#f0f0f0] shadow-md"
//                   >
//                     Dashboard
//                   </Link>
//                 </div>
//               ) : (
//                 <div className="flex flex-col items-center mt-8 space-y-4 lg:flex-row lg:items-center lg:justify-start md:space-y-0 md:space-x-4">
//                   {/* Sign In Button */}
//                   <Link
//                     to="/signin"
//                     className="bg-white text-[#FF5700] font-semibold px-6 py-3 rounded-full transition-all hover:bg-[#f0f0f0] shadow-md"
//                   >
//                     Sign in
//                   </Link>

//                   {/* Sign Up Button */}
//                   <Link to="/signup" className="text-white font-semibold px-6 py-3 rounded-full border-2 border-white flex items-center transition-all hover:bg-[#FF5700]/80 hover:border-transparent shadow-md">
//                     Sign up
//                     <FaUpRightFromSquare className="ml-2" />
//                   </Link>
//                 </div>
//               )
//               }
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Pricing;

import React, { useEffect, useState } from "react";
import Rocket from "../assets/Images/rocket.webp";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    setIsLoggedIn(!!authToken);
  }, []);

  return (
    <section className="container mx-auto">
      <div className="relative bg-gradient-to-r mt-10 from-main-color to-[#FE674F] rounded-2xl overflow-hidden text-white flex flex-col md:flex-row items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img src={Rocket} alt="Rocket" className="animate-float w-5/6" />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 space-y-6">
          <h1 className="sm:text-4xl text-large lg:text-5xl font-extrabold leading-tight">
            Boost Your Reach Post <span className="text-white">Instantly!</span>
          </h1>
          <p className="md:text-lg text-small text-white font-medium">
            Increase visibility and engagement with real upvotes. Fast delivery, real results.
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            {isLoggedIn ? (
              <Link to="/dashboard" className="bg-white text-orange-500 font-bold px-10 py-3 rounded-full transition-all flex items-center">
                Go to Dashboard <FaArrowRight className="ml-2" />
              </Link>
            ) : (
              <>
                <div className="flex space-x-4">
                  {/* Sign In Button */}
                  <Link
                    to="/signin"
                    className="bg-white text-orange-600 font-semibold px-10 py-2 rounded-full transition-all duration-300 transform hover:bg-orange-100 hover:scale-105"
                  >
                    Sign In
                  </Link>

                  {/* Sign Up Button */}
                  <Link
                    to="/signup"
                    className="flex items-center px-10 py-2 rounded-full border-2 border-white text-white font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Sign Up
                  </Link>
                </div>


              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;