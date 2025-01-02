import React, { useState } from "react";
import men from "../assets/Images/contact.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "../Dashboard/components/InputField";

const ContactUS = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(formData.email)
    )
      errors.email = "Enter a valid email.";
    if (!formData.phone.trim()) errors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone))
      errors.phone = "Enter a valid 10-digit phone number.";
    if (!formData.message.trim()) errors.message = "Message is required.";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = () => {
    validate();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } else {
      toast.error("Please fill in all required fields correctly.");
    }
  };

  return (
    <section
      className="bg-gradient-to-br from-light-blue via-light-purple to-light-pink container mx-auto"
      id="contact"
    >
      <div className="my-5">
        <h1 className="text-center text-[24px] font-bold text-[#2D2624] capitalize">
          Have any <span className="text-main-color font-bold">questions?</span>
        </h1>
        <p className="lg:text-[18px] text-[16px] text-sub-color font-medium mt-3 mb-6 text-center">
          Contact us and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="shadow-xl rounded-xl my-8 border border-gray-200 bg-white overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <div className="hidden md:block md:w-1/2 p-6 -mt-20">
            <img
              className="w-full object-cover"
              src={men}
              alt="Contact Illustration"
            />
          </div>
          <form
            id="contact-form"
            className="md:w-1/2 w-full p-4 space-y-3"
            onSubmit={handleSubmit}
          >
            <div>
              <InputField
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
              />
            </div>
            <div>
              <InputField
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
              />
            </div>
            <div>
              <InputField
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.phone}
              />
            </div>
            <div>
              <textarea
                name="message"
                className={`w-full border placeholder:text-sub-color ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } hover:border-black transition-all duration-150 ease-in rounded-small resize-none`}
                id="message"
                rows="8"
                cols="20"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <p className="text-[#ff0000] text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <div className="flex justify-end">
              <button className="mybtn">
                Submit <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactUS;
