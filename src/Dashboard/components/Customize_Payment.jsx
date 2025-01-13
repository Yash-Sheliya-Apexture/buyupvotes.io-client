import React, { useState } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { MdCurrencyBitcoin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BiCalculator } from "react-icons/bi";
import GradientHeading from "../../Components/GradientHeading";
import { MdError } from "react-icons/md";

const Customize_Payment = () => {
  const [selectedTab, setSelectedTab] = useState("creditCard");
  const [creditCardDeposit, setCreditCardDeposit] = useState("");
  const [cryptoDeposit, setCryptoDeposit] = useState("");
  const [creditCardError, setCreditCardError] = useState("");
  const [cryptoError, setCryptoError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [purchaseDetails, setPurchaseDetails] = useState(null);
  const navigate = useNavigate();

  // Handle Credit Card Calculation
  const handleCreditCardCalculate = (e) => {
    e.preventDefault();
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
    let upvotes;

    if (amount >= 10 && amount <= 99) {
      upvotes = amount * 20;
    } else if (amount >= 100 && amount <= 249) {
      upvotes = amount * 33.33;
    } else if (amount >= 250 && amount <= 499) {
      upvotes = amount * 40;
    } else if (amount >= 500 && amount <= 749) {
      upvotes = amount * 50;
    } else if (amount >= 750 && amount <= 10000) {
      upvotes = amount * 66.66;
    }

    const roundedUpvotes = Math.round(upvotes);

    setModalContent(`$${amount} will purchase ${roundedUpvotes} upvotes.`);
    setPurchaseDetails({
      amount: amount,
      tokens: roundedUpvotes,
      type: "creditCard",
    });
    setIsModalOpen(true);
  };

  // Handle Cryptocurrency Calculation
  const handleCryptoCalculate = (e) => {
    e.preventDefault();
    if (!cryptoDeposit) {
      setCryptoError("Deposit amount required for Cryptocurrency");
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
    let coins;
    if (amount >= 10 && amount <= 99) {
      coins = amount * 15;
    } else if (amount >= 100 && amount <= 249) {
      coins = amount * 25;
    } else if (amount >= 250 && amount <= 499) {
      coins = amount * 35;
    } else if (amount >= 500 && amount <= 749) {
      coins = amount * 45;
    } else if (amount >= 750 && amount <= 10000) {
      coins = amount * 55;
    }

    const roundedCoins = Math.round(coins);

    setModalContent(`$${amount} will purchase ${roundedCoins} coins.`);
    setPurchaseDetails({
      amount: amount,
      coins: roundedCoins,
      type: "crypto",
    });
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCreditCardDeposit("");
    setCryptoDeposit("");
  };

  const handleContinue = () => {
    // Store the purchase details in local storage
    localStorage.setItem("purchaseDetails", JSON.stringify(purchaseDetails));

    // Navigate to the checkout page
    navigate("/checkout");

    closeModal();
  };

  const tabVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <>
      {/* Tabs Section */}
      <section className="Payment-Customize">
        <div className="my-6">
          <GradientHeading
            tag="h4"
            beforeText="Customize your payment"
            gradientText="below."
            beforeSpanClassName="font-bold"
            textSize="md:text-large text-basic lg:text-[40px] lg:leading-[45px]"
            className="text-center"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="max-w-lg bg-white rounded-md">
            {/* Card Tabs */}
            <div className="relative flex justify-center bg-gray-100 rounded-lg w-fit mx-auto p-[10px]">
              <div className="relative flex justify-center items-center bg-gray-100 overflow-hidden">
                <div
                  className={`absolute left-0 top-0 h-full transition-all duration-300 bg-main-color rounded-lg
            ${
              selectedTab === "creditCard"
                ? "w-1/2 translate-x-0" // Corrected translate for credit card
                : "w-0 translate-x-[100%]" // Move offscreen when not active
            }
          `}
                  style={{ width: "50%" }}
                ></div>
                <div
                  className={`absolute left-0 top-0 h-full transition-all duration-300 bg-main-color rounded-lg
            ${
              selectedTab === "crypto"
                ? "w-1/2 translate-x-full" // Corrected translate for crypto
                : "w-0 translate-x-0" // Retract when not active
            }
          `}
                  style={{ width: "50%" }}
                ></div>
                {/* Credit Card Tab */}
                <button
                  className={`relative flex items-center justify-center flex-col md:flex-row font-medium px-6 py-2 focus:outline-none transition-colors duration-300 w-1/2 ${
                    selectedTab === "creditCard" ? "text-white z-10" : ""
                  }`}
                  onClick={() => setSelectedTab("creditCard")}
                >
                  <span className="mr-2">
                    <CiCreditCard1 className="h-6 w-6" />
                  </span>
                  <span className="">Credit Card</span>
                </button>
                {/* Cryptocurrency Tab */}
                <button
                  className={`relative flex items-center justify-center flex-col md:flex-row font-medium px-6 py-2 focus:outline-none transition-colors duration-300 w-1/2 ${
                    selectedTab === "crypto" ? "text-white z-10" : ""
                  }`}
                  onClick={() => setSelectedTab("crypto")}
                >
                  <span className="mr-2">
                    <MdCurrencyBitcoin className="h-6 w-6" />
                  </span>
                  <span className="">Cryptocurrency</span>
                </button>
              </div>
            </div>

            {/* Content Sections */}
            <div className="p-4 -mb-4">
              <AnimatePresence mode="wait">
                {selectedTab === "creditCard" && (
                  <motion.div
                    key="creditCard"
                    variants={tabVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="space-y-4"
                  >
                    <form onSubmit={handleCreditCardCalculate}>
                      <div className="text-center text-gray-700">
                        <p className="text-lg leading-6">
                          Enter your{" "}
                          <span className="font-semibold text-main-color">
                            Deposit amount
                          </span>{" "}
                          using Credit Card, and it will convert into upvotes.
                        </p>
                      </div>

                      <div className="flex items-center justify-center mt-3 gap-1 rounded-lg border p-1">
                        <div className="relative flex-grow">
                          <input
                            type="text"
                            value={creditCardDeposit}
                            onChange={(e) =>
                              setCreditCardDeposit(e.target.value)
                            }
                            placeholder="Enter amount"
                            className="py-2 w-full rounded-lg pl-8 text-lg focus:from-main-color focus:ring-4 focus:ring-main-color transition-all duration-300 ease-in-out transform focus:outline-none"
                            style={{ border: "none" }}
                          />
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl font-semibold">
                            $
                          </span>
                        </div>
                        <button
                          type="submit"
                          className="px-4 py-2 rounded-md bg-main-color text-white font-semibold transform transition-transform duration-200 ease-in-out focus:ring-4 focus:ring-main-color-light active:scale-95 hidden xs:block"
                        >
                          Calculate
                        </button>
                        <button
                          type="submit"
                          className="px-3 py-2 rounded-md bg-main-color text-white font-semibold transform transition-transform duration-200 ease-in-out focus:ring-4 focus:ring-main-color-light active:scale-95 block xs:hidden"
                        >
                          <BiCalculator size={24} />
                        </button>
                      </div>
                      {creditCardError && (
                        <>
                          <div className="text-[#FF0000] flex items-center justify-center gap-1 mt-1">
                            <MdError className="w-5 h-5" />
                            <p className="text-small font-medium">
                              {creditCardError}
                            </p>
                          </div>
                        </>
                      )}
                    </form>
                  </motion.div>
                )}
                {selectedTab === "crypto" && (
                  <motion.div
                    key="crypto"
                    variants={tabVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="space-y-4"
                  >
                    <form onSubmit={handleCryptoCalculate}>
                      <div className="text-center text-gray-700">
                        <p className="text-lg leading-6">
                          Enter your{" "}
                          <span className="font-semibold text-main-color">
                            Deposit amount
                          </span>{" "}
                          Cryptocurrency, using and it will convert into coins.
                        </p>
                      </div>
                      <div className="flex items-center justify-center mt-3 gap-1 border rounded-lg p-1 ">
                        <div className="relative flex-grow">
                          <input
                            type="text"
                            value={cryptoDeposit}
                            onChange={(e) => setCryptoDeposit(e.target.value)}
                            placeholder="Enter amount"
                            className="py-2 w-full rounded-lg pl-8 text-lg focus:from-main-color focus:ring-4 focus:ring-main-color transition-all duration-300 ease-in-out transform"
                            style={{ border: "none" }}
                          />
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl font-semibold">
                            $
                          </span>
                        </div>
                        <button
                          type="submit"
                          className="px-4 py-2 rounded-md bg-main-color text-white font-semibold transform transition-transform duration-200 ease-in-out focus:ring-4 focus:ring-main-color-light active:scale-95 hidden xs:block"
                        >
                          Calculate
                        </button>
                        <button
                          type="submit"
                          className="px-3 py-2 rounded-md bg-main-color text-white font-semibold transform transition-transform duration-200 ease-in-out focus:ring-4 focus:ring-main-color-light active:scale-95 block xs:hidden"
                        >
                          <BiCalculator size={24} />
                        </button>
                      </div>
                      {cryptoError && (
                        <>
                          <div className="text-[#FF0000] flex items-center justify-center gap-1 mt-1">
                            <MdError className="w-5 h-5" />
                            <p className="text-small font-medium">{cryptoError}</p>
                          </div>
                        </>
                      )}
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-100 bg-black/70">
            <div className="w-4/5 p-4 bg-white shadow-lg lg:w-full lg:max-w-md lg:p-6 rounded-3xl">
              <h2 className="mb-4 text-lg lg:font-medium">{modalContent}</h2>
              <p>Click continue to be redirected to the payment page.</p>
              <div className="flex justify-end mt-6 space-x-2">
                <button
                  className="px-6 py-1 text-xs font-bold transition-all duration-150 ease-in border rounded-full text-sub-color hover:bg-gray-300/50 hover:border-black"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  className="px-6 py-1 text-xs font-bold text-green-500 transition-all duration-150 ease-in border border-green-500 rounded-full hover:shadow-newShadow"
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Customize_Payment;
