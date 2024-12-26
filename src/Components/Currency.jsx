import React, { useEffect, useState } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { MdCurrencyBitcoin } from "react-icons/md";
import { Link } from "react-router-dom";
import payment_logos from "../assets/Images/payment_logo.png";
import Button from "../Dashboard/components/Button";

const Currency = () => {
  const [selectedTab, setSelectedTab] = useState("creditCard");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // User login state
  const [creditCardDeposit, setCreditCardDeposit] = useState("");
  const [cryptoDeposit, setCryptoDeposit] = useState("");
  const [creditCardError, setCreditCardError] = useState("");
  const [cryptoError, setCryptoError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    // Check if there's a token or user info in localStorage to determine login status
    const authToken = localStorage.getItem("authToken"); // or localStorage.getItem("user");
    if (authToken) {
      setIsLoggedIn(true); // If token exists, user is logged in
    } else {
      setIsLoggedIn(false); // If no token, user is not logged in
    }
  }, []);

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
    setModalContent(`$${amount} will purchase ${calculated} tokens.`);
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
    setModalContent(`$${amount} will purchase ${calculated} coins.`);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCreditCardDeposit("");
    setCryptoDeposit("");
  };

  const handleContinue = () => {
    toast.success("Payment Successful!", {
      position: "top-right", // Position of the toast
      autoClose: 3000, // Auto close after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    closeModal(); // Close the modal
  };

  return (
    <section className="container mx-auto">
      {!isLoggedIn ? (
        <div className="tujghvcbxfvdsf">
          <div className="flex items-center justify-center my-4">
            <img src={payment_logos} alt="" className="lg:max-w-screen-md" />
          </div>
          <div className="relative flex items-center justify-center space-x-4">
            <Button>
              <Link to="/signin">Sign-In</Link>
            </Button>

            <Button>
              <Link to="/signup">Sign-Up</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <hr className="mt-10 w-[80%]" />
          </div>
        </div>
      ) : (
        <div className="py-5">
          <div className="flex items-center justify-center">
            <div className="max-w-lg overflow-hidden">
              <div className="flex justify-center lg:pb-8 pb-4">
                {/* Credit Card Tab */}
                <button
                  className={`flex items-center font-bold lg:text-sm text-xs border-b-2 border-2 ${
                    selectedTab === "creditCard"
                      ? "border-main-color text-main-color"
                      : "text-gray-600 hover:text-main-color"
                  } rounded-t-small lg:px-10 px-3.5 py-2`}
                  onClick={() => setSelectedTab("creditCard")}
                >
                  <span className="mr-2">
                    <CiCreditCard1 className="size-8" />
                  </span>
                  CreditCard
                </button>

                {/* Crypto Tab */}
                <button
                  className={`flex items-center font-bold lg:text-sm text-xs border-b-2 border-2 ${
                    selectedTab === "crypto"
                      ? "border-main-color text-main-color"
                      : "text-gray-600 hover:text-main-color"
                  } rounded-t-small lg:px-10 px-3.5 py-2`}
                  onClick={() => setSelectedTab("crypto")}
                >
                  <span className="mr-2">
                    <MdCurrencyBitcoin className="size-8" />
                  </span>
                  Cryptocurrency
                </button>
              </div>

              {/* Content Sections */}
              <div className="flex">
                {/* Credit Card Form */}
                <div
                  className={`relative transition-all duration-500 ${
                    selectedTab === "creditCard" ? "opacity-100" : "opacity-0"
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
                        className="lg:px-4 lg:py-2 p-1 w-1/2 border-t border-b border-l border-black rounded-l-full focus:outline-none"
                      />
                      <button
                        onClick={handleCreditCardCalculate}
                        className="lg:px-4 lg:py-2 p-1 font-bold transition-all bg-transparent border-2 rounded-r-full border-main-color text-main-color"
                      >
                        Calculate
                      </button>
                    </div>
                  </div>
                  {creditCardError && (
                    <p className="mt-4 text-sm text-center text-[#FF0000] font-semibold">
                      {creditCardError}
                    </p>
                  )}
                </div>

                {/* Crypto Form */}
                <div
                  className={`relative transition-all duration-500 ${
                    selectedTab === "crypto" ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    width: "100%",
                    flexShrink: "0",
                    transform:
                      selectedTab === "crypto"
                        ? "translateX(-100%)"
                        : "translateX(0%)",
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
                        className="lg:px-4 lg:py-2 p-1 w-1/2 border-t border-b border-l border-black rounded-l-full focus:outline-none"
                      />
                      <button
                        onClick={handleCryptoCalculate}
                        className="lg:px-4 lg:py-2 p-1 font-bold transition-all bg-transparent border-2 rounded-r-full border-main-color text-main-color"
                      >
                        Calculate
                      </button>
                    </div>
                  </div>
                  {cryptoError && (
                    <p className="mt-4 text-sm text-center text-[#FF0000] font-semibold">
                      {cryptoError}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Payment Logos */}
          <div className="flex items-center justify-center mt-6">
            <img
              src={payment_logos}
              alt="currencyImage"
              className="lg:h-10 h-5"
            />
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center z-50 justify-center bg-black/70 bg-opacity-100">
              <div className="lg:w-full w-4/5 lg:max-w-md lg:p-6 p-4 bg-white shadow-lg rounded-3xl">
                <h2 className="mb-4 text-lg lg:font-medium">{modalContent}</h2>
                <p>Click continue to be redirected to the payment page.</p>
                <div className="flex justify-end space-x-2 mt-6">
                  <button
                    className="px-6 py-1 border text-sub-color rounded-full hover:bg-gray-300/50 hover:border-black transition-all ease-in duration-150 text-xs font-bold"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-6 py-1 border border-green-500 text-green-500 rounded-full hover:shadow-newShadow transition-all ease-in duration-150 text-xs font-bold"
                    onClick={handleContinue}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Currency;
