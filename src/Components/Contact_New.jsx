import React, { useState } from "react";
import men from "../assets/Images/contact.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "../Dashboard/components/InputField";
import ContactForm from "../Components/ContactUs/ContactForm";

const ContactUS = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (fieldName, value) => {
    let error = "";
    switch (fieldName) {
      case "name":
        if (!value.trim()) error = "Name is required.";
        break;
      case "email":
        if (!value.trim()) error = "Email is required.";
        else if (
          !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value)
        )
          error = "Enter a valid email.";
        break;
      case "phone":
        if (!value.trim()) error = "Phone number is required.";
        else if (!/^\d{10}$/.test(value))
          error = "Enter a valid 10-digit phone number.";
        break;
      case "message":
        if (!value.trim()) error = "Message is required.";
        break;
      default:
        break;
    }
    return error;
  };

  return (
    <>
      <div className="my-5">
        <h1
          className="text-center text-basic  font-bold text-sub-color capitalize animate__animated animate__fadeInDown"
          style={{ animationDelay: "0.1s" }}
        >
          We're Here to{" "}
          <span className="text-main-color font-bold"> Help?</span>
        </h1>
        <p
          className="lg:text-[18px] text-[16px] text-sub-color font-medium mt-2 mb-6 text-center animate__animated animate__fadeInDown"
          style={{ animationDelay: "0.2s" }}
        >
          Contact us for support or inquiries.
        </p>
      </div>

      <section className="container mx-auto" id="contact">
        <div className="rounded-xl shadow-main border border-gray-300/50 my-8 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="hidden md:block md:w-1/2 p-6 -mt-5">
              <img
                className="w-full object-cover"
                src={men}
                alt="Contact Illustration"
              />
            </div>
            <ContactForm />
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default ContactUS;
