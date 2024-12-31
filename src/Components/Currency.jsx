import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import payment_logos from "../assets/Images/payment_logo.png";
import Button from "../Dashboard/components/Button";
import Customize_Payment from "../Dashboard/components/Customize_Payment";

const Currency = () => {
  // const [selectedTab, setSelectedTab] = useState("creditCard");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // User login state
  const [creditCardDeposit, setCreditCardDeposit] = useState("");
  const [cryptoDeposit, setCryptoDeposit] = useState("");
  // const [creditCardError, setCreditCardError] = useState("");
  // const [cryptoError, setCryptoError] = useState("");
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    // Check if there's a token or user info in localStorage to determine login status
    const authToken = localStorage.getItem("authToken"); // or localStorage.getItem("user");
    if (authToken) {
      setIsLoggedIn(true); // If token exists, user is logged in
    } else {
      setIsLoggedIn(false); 
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
        <div className="Currency-main">
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
        <Customize_Payment className="bg-red-500"/>
      )}
    </section>
  );
};

export default Currency;
