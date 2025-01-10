import React from "react";
import metting from "../../assets/Images/metting.webp";
import GradientHeading from "../GradientHeading";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="Contact-Main">
      <div className="relative max-w-full p-0 contact">
        <div className="w-full mx-auto container">
          <div className="sub-content grid md:grid-cols-2">
            <div className="left w-full p-4 lg:px-10 bg-white border border-gray-300 lg:rounded-large round lg:-mr-10 flex items-center z-10">
              <div className="space-y-5">
                {/* Leftside */}
                <GradientHeading
                  tag="h3"
                  beforeText="Let’s get"
                  gradientText="Acquainted"
                  beforeSpanClassName="font-bold"
                  textSize="text-basic lg:text-xlarge"
                />

                <div className="text-para-color font-medium text-small lg:text-medium leading-7 max-w-md">
                  {" "}
                  Whether you’re established or fast-growing business, we’re
                  here to help you gain a competitive edge — speak to one of our
                  human agents about how Yellow.ai might work for you.
                </div>
                <Link
                  to="/faq"
                  className="inline-flex items-center gap-3 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
                >
                  Get In Touch
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
