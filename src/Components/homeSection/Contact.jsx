import React from "react";
import men from "../../assets/Images/contact.png";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "../ContactUs/ContactForm";

const Contact = () => {
  return (
    <>
      <div className="my-5">
        <h1
          className="font-bold text-center capitalize text-basic text-sub-color animate__animated animate__fadeInDown"
          style={{ animationDelay: "0.1s" }}
        >
          We're Here to{" "}
          <span className="font-bold text-main-color"> Help?</span>
        </h1>
        <p
          className="lg:text-[18px] text-[16px] text-sub-color font-medium mt-2 mb-6 text-center animate__animated animate__fadeInDown"
          style={{ animationDelay: "0.2s" }}
        >
          Contact us for support or inquiries.
        </p>
      </div>

      <section className="container mx-auto" id="contact">
        <div className="my-8 overflow-hidden border rounded-xl shadow-main border-gray-300/50">
          <div className="flex flex-col items-center md:flex-row">
            <div className="hidden p-6 -mt-5 md:block md:w-1/2">
              <img
                className="object-cover w-full"
                src={men}
                alt="Contact Illustration"
              />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
