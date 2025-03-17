import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaChevronLeft, FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "../Dashboard/components/InputField"; // Import InputField


const Newpassword = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswords, setShowPasswords] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    otp: Array(6).fill(false),
    password: false,
    confirmPassword: false,
  });
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState("");
  const otpRefs = useRef([]);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const storedEmail = localStorage.getItem("resetEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      // navigate("/forgot-password");
      toast.error("Please initiate a password reset to continue.");
    }
  }, []);

  // Validate individual fields
  const validateField = (name, value) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])(?=.{8,})/;
    switch (name) {
      case "otp":
        if (value.some((digit) => digit.trim() === "")) return "Code is required";
        break;
      case "password":
        if (!value) return "Password is required.";
        if (!passwordRegex.test(value))
          return "Password must be at least 8 characters, include one uppercase letter, and one special symbol.";
        break;
      case "confirmPassword":
        if (!value) return "Confirm Password is required.";
        if (value !== password) return "Passwords do not match.";
        break;
      default:
        return null;
    }
    return null;
  };


  const handleOtpChange = (index, value) => {
    if (isNaN(value) || value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      otpRefs.current[index + 1].focus();
    }
    setTouched((prev) => {
      const newTouched = [...prev.otp];
      newTouched[index] = true;
      return { ...prev, otp: newTouched };
    });
    if (errors.otp) {
      setErrors((prevErrors) => ({ ...prevErrors, otp: null }));
    }
    if (touched.otp && touched.otp[index]) {
      const error = validateField("otp", newOtp);
      setErrors((prev) => ({ ...prev, otp: error }));
    }
    setGeneralError("");
  };

  const handleBackspace = (index) => {
    if (index > 0 && !otp[index]) {
      otpRefs.current[index - 1].focus();
    }
    setTouched((prev) => {
      const newTouched = [...prev.otp];
      newTouched[index] = true;
      return { ...prev, otp: newTouched };
    });
    if (touched.otp && touched.otp[index]) {
      const error = validateField("otp", otp);
      setErrors((prev) => ({ ...prev, otp: error }));
    }
    setGeneralError("");

  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
    setGeneralError("");
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("Text").trim();
    if (/^\d{6}$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      setTouched((prev) => {
        return { ...prev, otp: Array(6).fill(true) };
      });
      setErrors({});
      setGeneralError("");
      if (otpRefs.current && otpRefs.current[0]) {
        otpRefs.current[0].focus();
      }
    }
  };


  const validateForm = () => {
    const validationErrors = {};
    const passwordError = validateField("password", password);
    const confirmPasswordError = validateField("confirmPassword", confirmPassword);
    const otpError = validateField("otp", otp);


    if (otpError) validationErrors.otp = otpError;
    if (passwordError) validationErrors.password = passwordError;
    if (confirmPasswordError) validationErrors.confirmPassword = confirmPasswordError;
    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setTouched({
        otp: Array(6).fill(true),
        password: true,
        confirmPassword: true,
      });
      const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])(?=.{8,})/;
      if (!passwordRegex.test(password)) {
        setGeneralError('Password must be at least 8 characters, include one uppercase letter, and one special symbol.');
      }
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/verify-otp-reset-password`,
        {
          email: email,
          otp: otp.join(""),
          newPassword: password,
          confirmPassword: confirmPassword,
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        setOtp(Array(6).fill(""));
        setPassword("");
        setConfirmPassword("");
        setShowPasswords(false);
        localStorage.removeItem("resetEmail");
        setTouched({
          otp: Array(6).fill(false),
          password: false,
          confirmPassword: false,
        });
        setGeneralError("");
        setTimeout(() => {
          navigate("/signin");
        });
      }
    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;
        const message = error.response.data.message || "An error occurred";
        if (statusCode === 400) {
          setErrors((prev) => ({
            ...prev,
            general: message,
          }));
        } else if (statusCode === 500) {
          setErrors((prev) => ({
            ...prev,
            general: "Server error. Please try again later.",
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            general: "An unexpected error occurred. Please try again.",
          }));
        }
      } else if (error.request) {
        setErrors((prev) => ({
          ...prev,
          general: "Network error. Please check your connection.",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          general: "Unexpected error. Please try again.",
        }));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/resend-reset-otp`, {
        email: email, // Ensure the email state/variable is correctly populated
      });

      if (response.status === 200) {
        toast.success("A new OTP has been sent to your email!");
      } else {
        // Handle unexpected status codes
        toast.error(response.data.message || "Failed to resend OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error resending OTP:", error);

      // Handle specific error status codes
      if (error.response) {
        if (error.response.status === 400) {
          // If OTP is still valid
          toast.error(error.response.data.message || "OTP is still valid. Please check your email.");
        } else {
          // Handle other errors, such as server errors
          toast.error(error.response.data.message || "Failed to resend OTP. Please try again.");
        }
      } else {
        // If no response, show a network error
        toast.error("An error occurred while resending the OTP. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };



  return (
    <>
      <div className="h-[calc(100vh-72px)] layout flex items-center justify-center px-4">
        <div className="lg:w-[420px] h-auto bg-white rounded-small lg:p-6 p-4 pb-10">
          {/* Display general error message here */}
          {errors.general && (
            <>
              <div className="flex items-center min-h-12 gap-3 px-4 py-2 bg-[#ffe9d5] rounded-xl shadow-box mb-4">
                <div className="w-5">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-xl text-light-orange" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M7.843 3.802C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792zM13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75" clipRule="evenodd"></path></svg>
                </div>
                <p className="text-xs text-[#7a0916]">
                  {errors.general}
                </p>
              </div>
            </>
          )}
          <div className="flex justify-center">
            <svg
              className="h-20"
              fill="none"
              viewBox="0 0 96 97"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FF4500"
                d="M80.476 16.01c-2-2-48.544 35.833-52.269 43.652 0 0-.155 29.249 5.21 30.093 2.904 0 8.228-15.41 9.35-18.755.143-.428.339-.805.612-1.163 11.697-15.343 39.074-51.85 37.097-53.827z"
              ></path>
              <path
                fill="#FF5700"
                d="M11.167 39.109c-2.51 1.716-2.606 4.943-.319 6.946 3.06 2.68 8.372 7.018 17.359 13.62v-.013c3.724-7.82 50.269-45.652 52.269-43.652 1.977 1.977-25.4 38.484-37.097 53.826-.273.36-.47.736-.613 1.163-1.082 3.227-6.071 17.672-9.03 18.699 6.326-1.22 12.623-6.279 18.458-13.265 7.403 4.887 12.643 8.034 15.829 9.86 2.228 1.279 4.962.804 6.134-1.482 6.764-13.202 14.387-52.323 15.821-72.819.231-3.305-2.447-5.951-5.707-5.355-20.295 3.714-59.214 22.977-73.104 32.472zM33.417 89.755z"
              ></path>
              <defs>
                <filter
                  id="filter0_i_1870_134242"
                  width="82.787"
                  height="85.202"
                  x="7.205"
                  y="4.553"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset dx="-2" dy="-2"></feOffset>
                  <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  ></feComposite>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"></feColorMatrix>
                  <feBlend
                    in2="shape"
                    result="effect1_innerShadow_1870_134242"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
          <p className="my-4 text-xs font-normal text-center text-sub-color">
            We've sent a 6-digit confirmation code to your email. Please enter
            the code below to verify your email. The code will{" "}
            <span className="font-bold">expire</span> after{" "}
            <span className="font-bold">10 minutes</span>.
          </p>
          <form onSubmit={handleSubmit}>
            {/* OTP Fields */}
            <div className="mb-4">
              <div className="relative">
                <div className="flex mt-4 space-x-5">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) =>
                        e.key === "Backspace" && handleBackspace(index)
                      }
                      onPaste={handlePaste}
                      ref={(el) => (otpRefs.current[index] = el)}
                       className={`p-2.5 w-full text-center rounded-md border ${otpRefs.current[index] === document.activeElement
                        ? "border-main-color"
                        : errors.otp && touched.otp[index]
                          ? "border-red-500"
                          : "border-gray-300"
                        } hover:border-sub-color transition-all ease-in duration-200`}
                      maxLength={1}
                    />
                  ))}
                </div>
              </div>
              {touched.otp && errors.otp && (
                <p className="mt-0.5 text-xs text-[#FF0000]">{errors.otp}</p>
              )}
            </div>

            {/* Password Fields */}
            <div className="mb-4">
            <InputField
                  type="password"
                  name="password"
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={handleBlur}
                  error={errors.password}
                  togglePasswordVisibility = {true}
                  inputPadding="p-3"
                  labelPosition="top-3.5"
             />
          </div>

            <div className="mb-4">
                <InputField
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={handleBlur}
                    error={errors.confirmPassword}
                    togglePasswordVisibility = {true}
                    inputPadding="p-3"
                    labelPosition="top-3.5"
                 />
           </div>
            {loading ? (
              <div className="flex items-center justify-center">
                <FaSpinner className="text-lg animate-spin" />
              </div>
            ) : (
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-10 py-2.5 text-small font-medium text-white transition-colors duration-300 border-2 bg-main-color rounded-xl hover:bg-orange-600 w-full border-main-color hover:border-orange-600"
              >
                Update Password
              </button>
            )}


          </form>
          <div className="my-4 text-center">
            <p className="font-medium text-sub-color">
              Didn’t receive a code?{" "}
              <span
                className="underline cursor-pointer text-main-color"
                onClick={handleResendOtp}
              >
                Resend code
              </span>
            </p>
          </div>

          <div className="mt-6 text-sm font-normal text-sub-color">
            <div className="flex items-center gap-1">
              <FaChevronLeft className="size-3" />
              <Link to="/signin" className="cursor-pointer hover:underline hover:underline-offset-1">
                Return to sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newpassword;