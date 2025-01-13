import React from "react";
import { Link } from "react-router-dom";
import GradientHeading from "./GradientHeading";

const ContactBtn = () => {
  return (
    <section className="Contact-Reauable container mx-auto">
      <div className="flex justify-center items-center my-5">
        <span className="border border-gray-300/50 w-[90%]"></span>
      </div>
      <div className="flex justify-center items-center flex-col space-y-2 mb-5">
        <GradientHeading
          tag="h1"
          beforeText="We’re Here to Help—Contact"
          gradientText="Us Today!"
          beforeSpanClassName="font-bold"
          textSize="text-basic lg:text-xlarge"
          className="mb-5"
        />
        <Link
          to="/dashboard/contactus"
          className={`inline-flex items-center gap-3 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-y-orange-600`}
        >
          Contact
        </Link>
      </div>
    </section>
  );
};

export default ContactBtn;
