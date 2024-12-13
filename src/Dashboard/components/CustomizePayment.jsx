// import React, { useState } from 'react'
// import { CiCreditCard1 } from "react-icons/ci";
// import { MdCurrencyBitcoin } from "react-icons/md";
// import { Link } from "react-router-dom";
// import payment_logos from "../../assets/Images/payment_logos.png";
// const CustomizePayment = () => {
//     const [selectedTab, setSelectedTab] = useState("creditCard");
//     return (
//         <>
//             {/* Tabs Section */}
//             <div className="py-10">
//                 <div className="flex items-center justify-center ">
//                     <div className="max-w-lg overflow-hidden">
//                         <div className="flex justify-center pb-4 space-x-8">
//                             <button
//                                 className={`flex items-center font-bold lg:text-small text-xxs lg:px-4 px-0 py-2 ${selectedTab === "creditCard"
//                                     ? "text-main-color border-b-2 border-main-color"
//                                     : "text-gray-600 hover:text-main-color"
//                                     }`}
//                                 onClick={() => setSelectedTab("creditCard")}
//                             >
//                                 <span className="mr-2">
//                                     <CiCreditCard1 className="size-8" />
//                                 </span>
//                                 Credit Card
//                             </button>
//                             <button
//                                 className={`flex items-center font-bold lg:text-small text-xs lg:px-4 px-0 py-2 ${selectedTab === "crypto"
//                                     ? "text-main-color border-b-2 border-main-color"
//                                     : "text-gray-600 hover:text-main-color"
//                                     }`}
//                                 onClick={() => setSelectedTab("crypto")}
//                             >
//                                 <span className="mr-2">
//                                     <MdCurrencyBitcoin className="size-8" />
//                                 </span>{" "}
//                                 Cryptocurrency
//                             </button>
//                         </div>
//                         {/* Animated Content Section */}
//                         <div className="flex">
//                             <div
//                                 className={`relative transition-all duration-500 ${selectedTab === "creditCard" ? "opacity-100" : "opacity-0"
//                                     }`}
//                                 style={{
//                                     width: "100%",
//                                     flexShrink: "0",
//                                     transform:
//                                         selectedTab === "creditCard"
//                                             ? "translateX(0)"
//                                             : "translateX(-100%)",
//                                 }}
//                             >
//                                 {/* Credit Card Content */}
//                                 <div className="flex items-center justify-center mt-2 text-center">
//                                     <p className="text-[#403633] lg:text-base max-w-[400px]">
//                                         Enter your{" "}
//                                         <span className="font-medium leading-10 text-main-color">
//                                             deposit amount
//                                         </span>{" "}
//                                         using Credit-Card, and it will convert into:
//                                     </p>
//                                 </div>
//                                 {/* Input and Calculate Section */}
//                                 <div className="flex items-center justify-center mt-8">
//                                     {/* Input Section */}
//                                     <div className="relative transition-all duration-500">
//                                         <form action="">
//                                             <span className="text-black text-[24px] mr-2">$</span>
//                                             <input
//                                                 placeholder="Deposit amount"
//                                                 className="px-4 py-2 border-t border-b border-l border-black rounded-l-full focus:outline-none"
//                                             />
//                                             {/* Button Section */}
//                                             <button type="submit" className="px-4 py-2 font-bold transition-all bg-transparent border-2 rounded-r-full border-main-color text-main-color">
//                                                 Calculate
//                                             </button>
//                                         </form>
//                                     </div>

//                                 </div>
//                             </div>
//                             <div
//                                 className={`relative transition-all duration-500 ${selectedTab === "crypto" ? "opacity-100" : "opacity-0"
//                                     }`}
//                                 style={{
//                                     width: "100%",
//                                     flexShrink: "0",
//                                     transform:
//                                         selectedTab === "crypto" ? "translateX(-100%)" : "translateX(0%)",
//                                 }}
//                             >
//                                 {/* Cryptocurrency Content */}
//                                 <div className="flex items-center justify-center mt-2 text-center">
//                                     <p className="text-[#403633] lg:text-base max-w-[400px]">
//                                         Enter your{" "}
//                                         <span className="font-medium leading-10 text-main-color">
//                                             deposit amount
//                                         </span>{" "}
//                                         using Cryptocurrency, and it will convert into:
//                                     </p>
//                                 </div>
//                                 {/* Input and Calculate Section */}
//                                 <div className="flex items-center justify-center mt-8">
//                                     {/* Input Section */}
//                                     <div className="relative transition-all duration-500">
//                                         <form action="">
//                                             <span className="text-black text-[24px] mr-2">$</span>
//                                             <input
//                                                 placeholder="Deposit amount"
//                                                 className="px-4 py-2 border-t border-b border-l border-black rounded-l-full focus:outline-none"
//                                             />
//                                             {/* Button Section */}
//                                             <button type="submit" className="px-4 py-2 font-bold transition-all bg-transparent border-2 rounded-r-full border-main-color text-main-color">
//                                                 Calculate
//                                             </button>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>



//                 <div className="flex items-center justify-center mt-6">
//                     <img src={payment_logos} alt="currencyImage" className="h-10" />
//                 </div>

//                 <div className="flex justify-center mb-4">
//                     <hr className="mt-10 border w-[85%]" />
//                 </div>

//                 <div className="flex flex-col items-center justify-center space-y-4">
//                     <h1 className="text-base font-bold text-sub-color">
//                         Have any questions?
//                     </h1>
//                     <p className="font-medium text-sub-color text-small">
//                         Contact us and we'll get back to you as soon as possible.
//                     </p>
//                     <Link to="/Dashboard/ContactUs">
//                         <button className="py-1 font-bold transition-all border rounded-full px-14 border-main-color text-main-color">
//                             Contact Us
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default CustomizePayment



// import React, { useState } from "react";
// import { CiCreditCard1 } from "react-icons/ci";
// import { MdCurrencyBitcoin } from "react-icons/md";
// import { Link } from "react-router-dom";
// import payment_logos from "../../assets/Images/payment_logos.png";

// const CustomizePayment = () => {
//     const [selectedTab, setSelectedTab] = useState("creditCard");
//     const [depositAmount, setDepositAmount] = useState("");
//     const [errorMessage, setErrorMessage] = useState("");
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [calculatedValue, setCalculatedValue] = useState(0);

//     // Calculation logic
//     const handleCalculate = (e) => {
//         e.preventDefault();

//         if (!depositAmount) {
//             setErrorMessage("Deposit amount required");
//             return;
//         }
//         const amount = parseFloat(depositAmount);
//         if (isNaN(amount)) {
//             setErrorMessage("Invalid amount. Please enter a number.");
//             return;
//         }
//         if (amount < 10) {
//             setErrorMessage("Minimum amount is $10");
//             return;
//         }
//         if (amount > 10000) {
//             setErrorMessage("Amount must not exceed $10,000");
//             return;
//         }

//         setErrorMessage(""); // Clear errors
//         const calculated = amount * 20; // Example: Calculation logic
//         setCalculatedValue(calculated);
//         setIsModalOpen(true); // Open modal
//     };

//     // Close modal
//     const closeModal = () => {
//         setIsModalOpen(false);
//         setDepositAmount(""); // Reset input
//     };

//     return (
//         <>
//             {/* Tabs Section */}
//             <div className="py-10">
//                 <div className="flex items-center justify-center ">
//                     <div className="max-w-lg overflow-hidden">
//                         <div className="flex justify-center pb-4 space-x-8">
//                             <button
//                                 className={`flex items-center font-bold lg:text-small text-xxs lg:px-4 px-0 py-2 ${selectedTab === "creditCard"
//                                     ? "text-main-color border-b-2 border-main-color"
//                                     : "text-gray-600 hover:text-main-color"
//                                     }`}
//                                 onClick={() => setSelectedTab("creditCard")}
//                             >
//                                 <span className="mr-2">
//                                     <CiCreditCard1 className="size-8" />
//                                 </span>
//                                 Credit Card
//                             </button>
//                             <button
//                                 className={`flex items-center font-bold lg:text-small text-xs lg:px-4 px-0 py-2 ${selectedTab === "crypto"
//                                     ? "text-main-color border-b-2 border-main-color"
//                                     : "text-gray-600 hover:text-main-color"
//                                     }`}
//                                 onClick={() => setSelectedTab("crypto")}
//                             >
//                                 <span className="mr-2">
//                                     <MdCurrencyBitcoin className="size-8" />
//                                 </span>{" "}
//                                 Cryptocurrency
//                             </button>
//                         </div>
//                         {/* Animated Content Section */}
//                         <div className="flex">
//                             <div
//                                 className={`relative transition-all duration-500 ${selectedTab === "creditCard" ? "opacity-100" : "opacity-0"
//                                     }`}
//                                 style={{
//                                     width: "100%",
//                                     flexShrink: "0",
//                                     transform:
//                                         selectedTab === "creditCard"
//                                             ? "translateX(0)"
//                                             : "translateX(-100%)",
//                                 }}
//                             >
//                                 {/* Credit Card Content */}
//                                 <div className="flex items-center justify-center mt-2 text-center">
//                                     <p className="text-[#403633] lg:text-base max-w-[400px]">
//                                         Enter your{" "}
//                                         <span className="font-medium leading-10 text-main-color">
//                                             deposit amount
//                                         </span>{" "}
//                                         using Credit-Card, and it will convert into:
//                                     </p>
//                                 </div>
//                                 {/* Input and Calculate Section */}
//                                 <div className="flex items-center justify-center mt-8">
//                                     <form onSubmit={handleCalculate}>
//                                         <div className="flex items-center">
//                                             <span className="text-black text-[24px] mr-2">$</span>
//                                             <input
//                                                 value={depositAmount}
//                                                 onChange={(e) => setDepositAmount(e.target.value)}
//                                                 placeholder="Deposit amount"
//                                                 className="px-4 py-2 border-t border-b border-l border-black rounded-l-full focus:outline-none"
//                                             />
//                                             {/* Button Section */}
//                                             <button
//                                                 type="submit"
//                                                 className="px-4 py-2 font-bold transition-all bg-transparent border-2 rounded-r-full border-main-color text-main-color"
//                                             >
//                                                 Calculate
//                                             </button>
//                                         </div>
//                                     </form>
//                                 </div>
//                                 {/* Error Message */}
//                                 {errorMessage && (
//                                     <p className="mt-4 text-sm text-red-500">{errorMessage}</p>
//                                 )}
//                             </div>
//                             <div
//                                 className={`relative transition-all duration-500 ${selectedTab === "crypto" ? "opacity-100" : "opacity-0"
//                                     }`}
//                                 style={{
//                                     width: "100%",
//                                     flexShrink: "0",
//                                     transform:
//                                         selectedTab === "crypto" ? "translateX(-100%)" : "translateX(0%)",
//                                 }}
//                             >
//                                 {/* Cryptocurrency Content */}
//                                 <div className="flex items-center justify-center mt-2 text-center">
//                                     <p className="text-[#403633] lg:text-base max-w-[400px]">
//                                         Enter your{" "}
//                                         <span className="font-medium leading-10 text-main-color">
//                                             deposit amount
//                                         </span>{" "}
//                                         using Cryptocurrency, and it will convert into:
//                                     </p>
//                                 </div>
//                                 {/* Input and Calculate Section */}
//                                 <div className="flex items-center justify-center mt-8">
//                                     {/* Input Section */}
//                                     <div className="relative transition-all duration-500">
//                                         <form action="">
//                                             <span className="text-black text-[24px] mr-2">$</span>
//                                             <input
//                                                 placeholder="Deposit amount"
//                                                 className="px-4 py-2 border-t border-b border-l border-black rounded-l-full focus:outline-none"
//                                             />
//                                             {/* Button Section */}
//                                             <button type="submit" className="px-4 py-2 font-bold transition-all bg-transparent border-2 rounded-r-full border-main-color text-main-color">
//                                                 Calculate
//                                             </button>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Payment Logos */}
//                 <div className="flex items-center justify-center mt-6">
//                     <img src={payment_logos} alt="currencyImage" className="h-10" />
//                 </div>

//                 <div className="flex justify-center mb-4">
//                     <hr className="mt-10 border w-[85%]" />
//                 </div>

//                 <div className="flex flex-col items-center justify-center space-y-4">
//                     <h1 className="text-base font-bold text-sub-color">
//                         Have any questions?
//                     </h1>
//                     <p className="font-medium text-sub-color text-small">
//                         Contact us and we'll get back to you as soon as possible.
//                     </p>
//                     <Link to="/Dashboard/ContactUs">
//                         <button className="py-1 font-bold transition-all border rounded-full px-14 border-main-color text-main-color">
//                             Contact Us
//                         </button>
//                     </Link>
//                 </div>
//             </div>

//             {/* Modal */}
//             {isModalOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                     <div className="w-full max-w-sm p-6 text-center bg-white rounded-lg shadow-lg">
//                         <h2 className="mb-4 text-lg font-bold">
//                             ${depositAmount} will purchase {calculatedValue} upvotes
//                         </h2>
//                         <p>Click continue to be redirected to the payment page.</p>
//                         <div className="flex justify-between mt-6">
//                             <button
//                                 className="px-4 py-2 text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300"
//                                 onClick={closeModal}
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 className="px-4 py-2 text-white rounded-md bg-main-color hover:bg-main-color-dark"
//                                 onClick={() => alert("Redirecting to payment...")}
//                             >
//                                 Continue
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default CustomizePayment;


import React, { useState } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { MdCurrencyBitcoin } from "react-icons/md";
import { Link } from "react-router-dom";
import payment_logos from "../../assets/Images/payment_logos.png";

const CustomizePayment = () => {
    const [selectedTab, setSelectedTab] = useState("creditCard");
    const [creditCardDeposit, setCreditCardDeposit] = useState("");
    const [cryptoDeposit, setCryptoDeposit] = useState("");
    const [creditCardError, setCreditCardError] = useState("");
    const [cryptoError, setCryptoError] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    // Handle Credit Card Calculation
    const handleCreditCardCalculate = () => {
        if (!creditCardDeposit) {
            setCreditCardError("Deposit amount required for Credit Card");
            return;
        }
        const amount = parseFloat(creditCardDeposit);
        if (isNaN(amount)) {
            setCreditCardError("Invalid amount. Please enter a number.");
            return;
        }
        if (amount < 10) {
            setCreditCardError("Minimum amount is $10 for Credit Card");
            return;
        }
        if (amount > 5000) {
            setCreditCardError("Amount must not exceed $5,000 for Credit Card");
            return;
        }

        setCreditCardError("");
        const calculated = amount * 10; // Example: Custom logic for credit card
        setModalContent(`Credit Card: $${amount} will purchase ${calculated} tokens.`);
        setIsModalOpen(true);
    };

    // Handle Cryptocurrency Calculation
    const handleCryptoCalculate = () => {
        if (!cryptoDeposit) {
            setCryptoError("Deposit amount required for ");
            return;
        }
        const amount = parseFloat(cryptoDeposit);
        if (isNaN(amount)) {
            setCryptoError("Invalid amount. Please enter a number.");
            return;
        }
        if (amount < 10) {
            setCryptoError("Minimum amount is $10 for Cryptocurrency");
            return;
        }
        if (amount > 10000) {
            setCryptoError("Amount must not exceed $10,000 for Cryptocurrency");
            return;
        }

        setCryptoError("");
        const calculated = amount * 15; // Example: Custom logic for cryptocurrency
        setModalContent(`Cryptocurrency: $${amount} will purchase ${calculated} coins.`);
        setIsModalOpen(true);
    };

    // Close Modal
    const closeModal = () => {
        setIsModalOpen(false);
        setCreditCardDeposit("");
        setCryptoDeposit("");
    };

    return (
        <>
            {/* Tabs Section */}
            <div className="py-10">
                <div className="flex items-center justify-center">
                    <div className="max-w-lg overflow-hidden">
                        <div className="flex justify-center pb-4 space-x-8">
                            {/* Credit Card Tab */}
                            <button
                                className={`flex items-center font-bold lg:text-small text-xxs lg:px-4 px-0 py-2 ${selectedTab === "creditCard"
                                    ? "text-main-color border-b-2 border-main-color"
                                    : "text-gray-600 hover:text-main-color"
                                    }`}
                                onClick={() => setSelectedTab("creditCard")}
                            >
                                <span className="mr-2">
                                    <CiCreditCard1 className="size-8" />
                                </span>
                                Credit Card
                            </button>
                            {/* Crypto Tab */}
                            <button
                                className={`flex items-center font-bold lg:text-small text-xs lg:px-4 px-0 py-2 ${selectedTab === "crypto"
                                    ? "text-main-color border-b-2 border-main-color"
                                    : "text-gray-600 hover:text-main-color"
                                    }`}
                                onClick={() => setSelectedTab("crypto")}
                            >
                                <span className="mr-2">
                                    <MdCurrencyBitcoin className="size-8" />
                                </span>{" "}
                                Cryptocurrency
                            </button>
                        </div>

                        {/* Content Sections */}
                        <div className="flex">
                            {/* Credit Card Form */}
                            <div
                                className={`relative transition-all duration-500 ${selectedTab === "creditCard" ? "opacity-100" : "opacity-0"
                                    }`}
                                style={{
                                    width: "100%",
                                    flexShrink: "0",
                                    transform:
                                        selectedTab === "creditCard"
                                            ? "translateX(0)"
                                            : "translateX(-100%)",
                                }}
                            >
                                <div className="flex items-center justify-center mt-2 text-center">
                                    <p className="text-[#403633] lg:text-base max-w-[400px]">
                                        Enter your{" "}
                                        <span className="font-medium leading-10 text-main-color">
                                            deposit amount
                                        </span>{" "}
                                        using Credit Card, and it will convert into tokens.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center mt-8">
                                    <div className="flex items-center">
                                        <span className="text-black text-[24px] mr-2">$</span>
                                        <input
                                            value={creditCardDeposit}
                                            onChange={(e) => setCreditCardDeposit(e.target.value)}
                                            placeholder="Deposit amount"
                                            className="px-4 py-2 border-t border-b border-l border-black rounded-l-full focus:outline-none"
                                        />
                                        <button
                                            onClick={handleCreditCardCalculate}
                                            className="px-4 py-2 font-bold transition-all bg-transparent border-2 rounded-r-full border-main-color text-main-color"
                                        >
                                            Calculate
                                        </button>
                                    </div>
                                </div>
                                {creditCardError && (
                                    <p className="mt-4 text-sm text-center text-red-500">{creditCardError}</p>
                                )}
                            </div>

                            {/* Crypto Form */}
                            <div
                                className={`relative transition-all duration-500 ${selectedTab === "crypto" ? "opacity-100" : "opacity-0"
                                    }`}
                                style={{
                                    width: "100%",
                                    flexShrink: "0",
                                    transform:
                                        selectedTab === "crypto" ? "translateX(-100%)" : "translateX(0%)",
                                }}
                            >
                                <div className="flex items-center justify-center mt-2 text-center">
                                    <p className="text-[#403633] lg:text-base max-w-[400px]">
                                        Enter your{" "}
                                        <span className="font-medium leading-10 text-main-color">
                                            deposit amount
                                        </span>{" "}
                                        using Cryptocurrency, and it will convert into coins.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center mt-8">
                                    <div className="flex items-center">
                                        <span className="text-black text-[24px] mr-2">$</span>
                                        <input
                                            value={cryptoDeposit}
                                            onChange={(e) => setCryptoDeposit(e.target.value)}
                                            placeholder="Deposit amount"
                                            className="px-4 py-2 border-t border-b border-l border-black rounded-l-full focus:outline-none"
                                        />
                                        <button
                                            onClick={handleCryptoCalculate}
                                            className="px-4 py-2 font-bold transition-all bg-transparent border-2 rounded-r-full border-main-color text-main-color"
                                        >
                                            Calculate
                                        </button>
                                    </div>
                                </div>
                                {cryptoError && (
                                    <p className="mt-4 text-sm text-center text-red-500">{cryptoError}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Logos */}
                <div className="flex items-center justify-center mt-6">
                    <img src={payment_logos} alt="currencyImage" className="h-10" />
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
                        <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-3xl">
                            <h2 className="mb-4 text-lg font-bold">{modalContent}</h2>
                            <p>Click continue to be redirected to the payment page.</p>
                            <div className="flex justify-between mt-6">
                                <button
                                    className="px-4 py-2 text-gray-800 bg-gray-200 rounded-full hover:bg-gray-300"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="px-4 py-2 text-white rounded-full bg-main-color hover:bg-main-color-dark"
                                    onClick={closeModal}
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CustomizePayment;
