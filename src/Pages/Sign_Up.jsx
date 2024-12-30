import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import google from "../assets/Images/google_logo.png";

const Sign_Up = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required."),
    lastName: Yup.string().required("Last name is required."),
    email: Yup.string()
      .email("Invalid email address.")
      .required("Email is required."),
    password: Yup.string()
      .min(8, "It must contain at least 8 characters.")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .test(
        "no-repeated-password",
        "Password should not be repeated twice.",
        (value) => {
          if (value) {
            const splitValue = value.split("");
            for (let i = 0; i < splitValue.length - 1; i++) {
              if (splitValue[i] === splitValue[i + 1]) {
                return false;
              }
            }
          }
          return true;
        }
      )
      .required("Password is required."),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match.")
      .required("Confirm Password is required."),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/auth/register`,
          values
        );
        if (response.status === 201) {
          toast.success("Registration successful! Redirecting to sign in...");
          setTimeout(() => {
            // Reset the form before navigating
            resetForm();
            navigate("/signin"); // Redirect after resetting form
          }, 2000); // Delay navigation to show the success toast
        }
      } catch (error) {
        toast.error("Registration failed. Please try again.");
        console.error("Error: ", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="lg:w-[30%] h-auto bg-white rounded-small lg:p-6 p-4 pb-10">
            <h1 className="lg:text-basic text-base font-bold text-center mb-4 text-sub-color">
              Welcome to BuyUpvotes!
            </h1>
            <p className="mb-4 text-sm leading-7 text-center">
              Already have an account?
              <Link
                to="/signin"
                className="text-main-color font-bold underline underline-offset-1"
              >
                &nbsp;Sign in <br />
              </Link>
              Or register below
            </p>
            <button className="flex items-center justify-start w-full border border-gray-300 hover:border-sub-color rounded-full px-4 py-2 lg:text-small text-sm font-semibold text-sub-color mb-4 transition-all ease-in duration-300">
              <img src={google} alt="Google Logo" className="w-7 h-7 -ml-2.5" />
              <span className="pl-16">Sign in with Google</span>
            </button>
            <form
              onSubmit={formik.handleSubmit}
              className="lg:space-y-4 space-y-3"
            >
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`mt-1 block w-full px-3.5 py-3 border ${
                      formik.touched.firstName && formik.errors.firstName
                        ? "border-red-500"
                        : "border-gray-300"
                    } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
                    placeholder="First name"
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <p className="mt-1 text-xs text-red-500">
                      {formik.errors.firstName}
                    </p>
                  )}
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`mt-1 block w-full px-3.5 py-3 border ${
                      formik.touched.lastName && formik.errors.lastName
                        ? "border-red-500"
                        : "border-gray-300"
                    } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
                    placeholder="Last name"
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <p className="mt-1 text-xs text-red-500">
                      {formik.errors.lastName}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`mt-1 block w-full px-3.5 py-3 border ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
                  placeholder="Email address"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`block w-full px-3.5 py-3 border ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : "border-gray-300"
                  } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute text-gray-600 right-3 top-4"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
                {formik.touched.password && formik.errors.password && (
                  <p className="mt-1 text-xs text-red-500">
                    {formik.errors.password}
                  </p>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`block w-full px-3.5 py-3 border ${
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } hover:border-sub-color transition-all ease-in duration-200 rounded-full sm:text-sm`}
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute text-gray-600 right-3 top-4"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <p className="mt-1 text-xs text-red-500">
                      {formik.errors.confirmPassword}
                    </p>
                  )}
              </div>
              <div>
                <button
                  type="submit"
                  className={`mybtn w-full ${
                    formik.isSubmitting
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "border border-main-color hover:bg-main-color text-sub-color"
                  }`}
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "Signing up..." : "Sign Up"}
                </button>
              </div>
            </form>
            <p className="text-[12px] text-center font-medium text-sub-color mt-6">
              By signing up, I agree to
              <a href="#" className="underline decoration-[#2d262466]">
                Terms and Service
              </a>{" "}
              and
              <a href="#" className="underline decoration-[#2d262466]">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign_Up;


