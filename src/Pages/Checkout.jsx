// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";

// const Checkout = () => {
//   const [purchaseDetails, setPurchaseDetails] = useState(null);
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [cardExpiry, setCardExpiry] = useState("");
//   const [cardCvc, setCardCvc] = useState("");
//   const [cardHolderName, setCardHolderName] = useState("");

//   // Access the API URL using Vite-specific syntax
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   // Get token from storage
//    const token = localStorage.getItem("authToken");

//   useEffect(() => {
//     const storedDetails = localStorage.getItem("purchaseDetails");
//     if (storedDetails) {
//       setPurchaseDetails(JSON.parse(storedDetails));
//     } else {
//       navigate("/");
//     }
//   }, [navigate]);


//     if (!token) {
//         // Redirect to signin if there is no token
//        toast.error("You are not logged in. Please sign in");
//        navigate("/signin")
//        return null;
//     }


//   if (!purchaseDetails) {
//     return <div className="text-center">Loading...</div>;
//   }

//   const handlePay = async () => {
//       const paymentData = {
//         email,
//         cardNumber,
//         cardExpiry,
//         cardCvc,
//         cardHolderName,
//         amount: purchaseDetails.amount,
//         type: purchaseDetails.type,
//         tokens: purchaseDetails.tokens || null,
//         coins: purchaseDetails.coins || null,
//       };
//       console.log("Payment data being sent", paymentData)


//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           // Include token in authorization header
//           Authorization: `Bearer ${token}`,
//         },
//       };

//     console.log("Config object being sent", config);

//       // Use the API_BASE_URL to create the full endpoint
//       await axios.post(`${API_BASE_URL}/payment`, paymentData, config);

//       toast.success("Payment Successful!");
//       navigate("/");
//     } catch (error) {
//           console.error("Error from Axios", error);
//            console.error("Error Response from Server", error.response)
//       toast.error(
//           error.response && error.response.data && error.response.data.message
//           ? error.response.data.message
//           : error.message
//       );
//     }
//   };

//   return (
//     <div className="relative min-h-screen bg-gray-100 ">
//       <div className="absolute inset-0 z-[-1] bg-peach-100"></div>
//       <div className="container h-screen mx-auto ">
//         <div className="flex h-full font-sans ">
//           {/* Left side */}
//           <div className="flex flex-col justify-start flex-1 p-10 ">
//             <h2 className="mb-4 text-xl font-semibold ">Deposit Funds</h2>
//             <h1 className="text-3xl font-bold">${purchaseDetails.amount}</h1>
//           </div>

//           {/* Right side */}
//           <div className="flex flex-col flex-1 p-10 ">
//             <div className="mb-5">
//               <label
//                 htmlFor="email"
//                 className="block mb-2 text-sm font-medium text-gray-700"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
//               />
//             </div>
//             <div className="mb-5">
//               <label className="block mb-2 text-sm font-medium text-gray-700">
//                 Card information
//               </label>
//               <div className="flex items-center justify-between">
//                 <input
//                   type="text"
//                   placeholder="1234 1234 1234 1234"
//                   onChange={(e) => setCardNumber(e.target.value)}
//                   className="w-[70%] px-3 py-2 mr-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
//                 />
//                 <div className="flex items-center space-x-2">
//                   <span className="flex items-center px-2 py-1 text-xs font-medium text-white bg-blue-800 rounded-md">
//                     VISA
//                   </span>
//                   <span className="flex items-center px-2 py-1 text-xs font-medium text-white bg-orange-500 rounded-md">
//                     Mastercard
//                   </span>
//                   <span className="flex items-center px-2 py-1 text-xs font-medium text-black bg-yellow-400 rounded-md">
//                     Discover
//                   </span>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between mt-3">
//                 <input
//                   type="text"
//                   placeholder="MM / YY"
//                   onChange={(e) => setCardExpiry(e.target.value)}
//                   className="w-[48%] px-3 py-2  border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
//                 />
//                 <input
//                   type="text"
//                   placeholder="CVC"
//                   onChange={(e) => setCardCvc(e.target.value)}
//                   className="w-[48%] px-3 py-2  border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
//                 />
//               </div>
//             </div>
//             <div className="mb-5">
//               <label
//                 htmlFor="cardholder-name"
//                 className="block mb-2 text-sm font-medium text-gray-700"
//               >
//                 Cardholder name
//               </label>
//               <input
//                 type="text"
//                 id="cardholder-name"
//                 placeholder="Full name on card"
//                 onChange={(e) => setCardHolderName(e.target.value)}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
//               />
//             </div>

//             <button
//               onClick={handlePay}
//               className="w-full py-4 font-bold text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-600"
//             >
//               Pay
//             </button>
//             <p className="mt-5 text-sm text-center text-gray-500">
//               Powered by <span className="font-bold">stripe</span>
//               <span className="ml-2">Terms</span>
//               <span className="ml-2">Privacy</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;



// Checkout.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Checkout = () => {
    const [email, setEmail] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardExpiry, setCardExpiry] = useState("");
    const [cardCvc, setCardCvc] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [paymentData, setPaymentData] = useState(null)

    const navigate = useNavigate();
    const location = useLocation();

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const token = localStorage.getItem("authToken");


    useEffect(() => {
        if (location.state && location.state.paymentData) {
            setPaymentData(location.state.paymentData);
        } else {
            navigate("/"); // Redirect if no payment data
        }
    }, [location.state, navigate]);


    if (!token) {
        // Redirect to signin if there is no token
        toast.error("You are not logged in. Please sign in");
        navigate("/signin")
        return null;
    }

    if (!paymentData) {
        return <div className="text-center">Loading...</div>;
    }

    const handlePay = async () => {
        const cardPaymentData = {
            email,
            cardNumber,
            cardExpiry,
            cardCvc,
            cardHolderName,
            amount: paymentData.amount,
            type: paymentData.type,
        };
        console.log("Payment data being sent", cardPaymentData)


        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    // Include token in authorization header
                    Authorization: `Bearer ${token}`,
                },
            };

            console.log("Config object being sent", config);

            // Use the API_BASE_URL to create the full endpoint
            await axios.post(`${API_BASE_URL}/payment`, cardPaymentData, config);

            toast.success("Payment Successful!");
            navigate("/");
        } catch (error) {
            console.error("Error from Axios", error);
            console.error("Error Response from Server", error.response)
            toast.error(
                error.response && error.response.data && error.response.data.message
                    ? error.response.data.message
                    : error.message
            );
        }
    };

    return (
        <div className="relative min-h-screen bg-gray-100 ">
            <div className="absolute inset-0 z-[-1] bg-peach-100"></div>
            <div className="container h-screen mx-auto ">
                <div className="flex h-full font-sans ">
                    {/* Left side */}
                    <div className="flex flex-col justify-start flex-1 p-10 ">
                        <h2 className="mb-4 text-xl font-semibold ">Deposit Funds</h2>
                        <h1 className="text-3xl font-bold">${paymentData.amount}</h1>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col flex-1 p-10 ">
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Card information
                            </label>
                            <div className="flex items-center justify-between">
                                <input
                                    type="text"
                                    placeholder="1234 1234 1234 1234"
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    className="w-[70%] px-3 py-2 mr-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                                />
                                <div className="flex items-center space-x-2">
                                    <span className="flex items-center px-2 py-1 text-xs font-medium text-white bg-blue-800 rounded-md">
                                        VISA
                                    </span>
                                    <span className="flex items-center px-2 py-1 text-xs font-medium text-white bg-orange-500 rounded-md">
                                        Mastercard
                                    </span>
                                    <span className="flex items-center px-2 py-1 text-xs font-medium text-black bg-yellow-400 rounded-md">
                                        Discover
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                                <input
                                    type="text"
                                    placeholder="MM / YY"
                                    onChange={(e) => setCardExpiry(e.target.value)}
                                    className="w-[48%] px-3 py-2  border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                                />
                                <input
                                    type="text"
                                    placeholder="CVC"
                                    onChange={(e) => setCardCvc(e.target.value)}
                                    className="w-[48%] px-3 py-2  border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="cardholder-name"
                                className="block mb-2 text-sm font-medium text-gray-700"
                            >
                                Cardholder name
                            </label>
                            <input
                                type="text"
                                id="cardholder-name"
                                placeholder="Full name on card"
                                onChange={(e) => setCardHolderName(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                            />
                        </div>

                        <button
                            onClick={handlePay}
                            className="w-full py-4 font-bold text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-600"
                        >
                            Pay
                        </button>
                        <p className="mt-5 text-sm text-center text-gray-500">
                            Powered by <span className="font-bold">stripe</span>
                            <span className="ml-2">Terms</span>
                            <span className="ml-2">Privacy</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;