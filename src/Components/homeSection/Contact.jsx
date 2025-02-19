import React from "react";
import metting from "../../assets/Images/metting.webp";
import GradientHeading from "../GradientHeading";
import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";



const Contact = () => {
  return (
    <section className="Contact-Main">
      <div className="relative max-w-full p-0 contact">
        <div className="w-full mx-auto container">
          <div className="sub-content grid md:grid-cols-2">
            <div className="left w-full p-4 lg:px-10 bg-white border border-gray-300 lg:rounded-large round lg:-mr-10 flex items-center z-10">
              <div className="space-y-5 relative">
                {/* Leftside */}
                <GradientHeading
                  tag="h3"
                  beforeText="Have Questions? We’ve "
                  gradientText="Got Answers!"
                  beforeSpanClassName="font-bold"
                  textSize="text-basic lg:text-xlarge"
                />

                <FaQuoteLeft className="absolute size-3 top-8 md:block hidden text-main-color"/>
                <div className="text-para-color font-medium text-small lg:text-medium leading-7 max-w-md">
                  "Have questions, feedback, or need assistance? We’re here to
                  help! Reach out to us through the form below, send us an
                  email, or give us a call. Our team is ready to assist you and
                  ensure you get the answers or support you need.
                </div>
                <FaQuoteRight className="absolute size-3 bottom-14 lg:block hidden left-24 text-main-color"/>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
                >
                  Talk to Us
                </Link>
              </div>
            </div>

            {/* Rightside */}
            <div className="right w-full lg:max-w-[450px]">
              <img
                src={metting}
                alt="Image"
                className="w-full h-auto lg:rounded-small round1 md:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
