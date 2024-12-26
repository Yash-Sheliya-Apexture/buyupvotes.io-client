import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Used for navigation

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!email.trim()) {
      toast.error("Email address is required.");
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // Simulate success case
    toast.success("Verification code sent to your email address!");

    // Redirect to NewPassword component after 3 seconds
    setTimeout(() => {
      navigate("/newpassword");
    }, 4000);

    setLoading(false);
  };

  return (
    <>
      <div className="flex items-center justify-center p-4">
        <div className="lg:w-[30%] h-auto bg-white rounded-small lg:p-6 p-4 pb-10">
          <p className="text-center text-sub-color font-normal leading-7">
            Enter your email address below and we'll email you a verification
            code to confirm your email and reset your password.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="py-2">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3.5 py-2.5 border hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm"
                placeholder="Email address"
              />
            </div>

            <div className="my-2">
              <button
                type="submit"
                className="mybtn w-full flex justify-center items-center"
                style={{ padding: "8px 40px" }}
                disabled={loading}
              >
                {loading ? (
                  <div className="flex-col gap-4 w-full flex items-center justify-center">
                    <div className="w-5 h-5 border-4 border-transparent text-blue-300 text-4xl animate-spin flex items-center justify-center border-t-blue-300 rounded-full">
                      <div className="w-5 h-5 border-4 border-transparent text-red-300 text-2xl animate-spin flex items-center justify-center border-t-red-300 rounded-full"></div>
                    </div>
                  </div>
                ) : (
                  "Send Verification Code"
                )}
              </button>
            </div>

            <div className="flex items-center text-sub-color font-medium text-small space-x-1 py-2">
              <FaChevronLeft className="size-4" />
              <Link
                to="/signin"
                className="hover:underline hover:underline-offset-1 cursor-pointer"
              >
                Return to sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
