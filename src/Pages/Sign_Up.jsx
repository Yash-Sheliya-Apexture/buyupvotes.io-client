import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import google from "../assets/Images/google_logo.png";
import InputField from "../Dashboard/components/InputField";

const Sign_Up = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
    firstName: false,
    lastName: false,
  });
  const [loading, setLoading] = useState(false);
  const [overflow, setOverflow] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // Single state for visibility
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const scrollContainerRef = useRef(null);

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "Email is required.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Invalid email address.";
        break;
      case "password":
        if (!value) return "Password is required.";
        if (value.length < 8) return "Password must be at least 8 characters.";
        break;
      case "confirmPassword":
        if (!value) return "Confirm Password is required.";
        if (value !== password) return "Passwords do not match.";
        break;
      case "firstName":
        if (!value) return "First name is required.";
        break;
      case "lastName":
        if (!value) return "Last name is required.";
        break;
      default:
        return null;
    }
    return null;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
    if (name === "firstName") setFirstName(value);
    if (name === "lastName") setLastName(value);

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const validateForm = () => {
    const validationErrors = {};
    const fields = [
      "email",
      "password",
      "confirmPassword",
      "firstName",
      "lastName",
    ];

    fields.forEach((field) => {
      const error = validateField(field, eval(field));
      if (error) validationErrors[field] = error;
    });

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setTouched({
        email: true,
        password: true,
        confirmPassword: true,
        firstName: true,
        lastName: true,
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });

      if (response.status === 201) {
        navigate("/signin");
      }
    } catch (error) {
      console.error("Error during registration:", error);

      if (error.response) {
        const errorMessage =
          error.response.data.message ||
          "Registration failed. Please try again.";
        setErrors((prev) => ({ ...prev, general: errorMessage }));
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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const hasErrors = Object.keys(errors).length > 0;
      if (hasErrors) {
        setOverflow(container.scrollHeight > container.clientHeight);
      } else {
        setOverflow(false);
      }
    }
  }, [errors]);

  return (
    <>
      <section className="h-[calc(100vh-72px)] layout flex items-center justify-center px-4 pb-6">
        <div className="md:w-[420px] w-full h-auto bg-white rounded-small p-4 pb-10">
          <h1 className="mb-2 text-base font-bold text-center lg:text-basic text-sub-color">
            Welcome to BuyUpvotes!
          </h1>
          <div className="mb-2 text-sm leading-7 text-center">
            <p className="flex justify-center gap-1">
              Already have an account?
              <Link
                to="/signin"
                className="font-bold underline text-main-color underline-offset-1"
              >
                Sign in
              </Link>
            </p>
            Or register below
          </div>
          <button className="flex items-center justify-center w-full gap-4 px-8 py-2.5 text-lg font-semibold transition-colors duration-300 bg-white border border-gray-300 rounded-xl text-balck hover:bg-gray-100 hover:border-gray-400 mb-4">
            <img src={google} alt="Google Logo" className="w-6 h-6" />
            <div className="flex justify-center">
              <span className="text-xs">Sign in with Google</span>
            </div>
          </button>

          <div
            ref={scrollContainerRef}
            className={`relative ${overflow ? "overflow-y-auto custom-scroll pr-2" : ""
              } md:max-h-[310px] max-h-[420px]`}
          >
            <form onSubmit={handleSubmit} className="form-handle">
              {errors.general && (
                <>
                  <div className="flex items-center min-h-12 gap-3 px-4 py-2 bg-[#ffe9d5] rounded-xl shadow-box mb-3">
                    <div className="w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        className="text-xl text-light-orange"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M7.843 3.802C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792zM13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-xs text-[#7a0916]">{errors.general}</p>
                  </div>
                </>
              )}

              <div className="flex flex-col gap-2 mb-3 lg:flex-row">
                <div className="w-full lg:w-1/2">
                  <InputField
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.firstName}
                    inputPadding="p-3"
                    labelPosition="top-3.5"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <InputField
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.lastName}
                    inputPadding="p-3"
                    labelPosition="top-3.5"
                  />
                </div>
              </div>

              <div className="mb-3">
                <InputField
                  type="text" 
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email}
                  inputPadding="p-3"
                  labelPosition="top-3.5"
                />
              </div>

              <div className="mb-3">
                <InputField
                  type={passwordVisible ? "text" : "password"} // Use the passwordVisible state
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password}
                  inputPadding="p-3"
                  labelPosition="top-3.5"
                  togglePasswordVisibility={togglePasswordVisibility} // Pass the toggle function
                />
              </div>
              <div className="mb-3">
                <InputField
                  type={passwordVisible ? "text" : "password"} // Use the passwordVisible state
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.confirmPassword}
                  inputPadding="p-3"
                  labelPosition="top-3.5"
                  togglePasswordVisibility={togglePasswordVisibility} // Pass the toggle function
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
                  Create Account
                </button>
              )}
              <p className="text-[13px] text-center font-medium text-sub-color mt-3.5">
                By signing up, I agree to{" "}
                <Link to="/terms-and-conditions" className="underline-hover">
                  Terms and Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy-policy" className="underline-hover">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sign_Up;
