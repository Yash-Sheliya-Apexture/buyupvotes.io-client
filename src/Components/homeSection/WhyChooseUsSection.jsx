import React from "react";
import GradientHeading from "../GradientHeading";
import { Link } from "react-router-dom";
import { FaBolt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-6 lg:py-10 py-5 md:grid-cols-2">
          {/* Left Side */}
          <div className="lg:max-w-md">
            <GradientHeading
              tag="h3"
              beforeText="Boost your online presence "
              gradientText="with to ease!"
              beforeSpanClassName="font-bold"
              textSize="md:text-large text-basic lg:text-[40px] lg:leading-[45px]"
              className="text-center md:text-left"
            />
          </div>
          {/* Right Side */}
          <div className="content-wrap">
            <p className="mb-6 text-xl text-sub-color font-medium">
              Whether you're looking to rank higher on Reddit, Quora, YouTube,
              or other platforms, our upvote services are here to help you
              shine. With real engagement from verified users, we ensure your
              content gets the visibility it deserves.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-3 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
            >
              Learn more
            </Link>
          </div>
        </div>

        <div className="lg:py-10 py-5">
          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-min">
            {/* Card 1 */}
            <div className="lg:p-6 p-5 rounded-lg bg-[#ffddcc] flex flex-col">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center p-2 text-white rounded-lg bg-main-color">
                  <FaBolt className="size-5" />
                </span>
                <h4 className="ml-3 text-medium md:text-base font-bold text-para-color">
                  Instant Results
                </h4>
              </div>
              <p className="text-para-color font-medium text-small">
                With our instant results, you'll be able to quickly analyze
                data, track your progress, and make changes in real-time for
                optimal performance.
              </p>
            </div>
            {/* Card 2 */}
            <div className="lg:p-6 p-5 rounded-lg bg-[#ffddcc] flex flex-col">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center p-2 text-white rounded-lg bg-main-color">
                  <FaKey className="size-5" />
                </span>
                <h4 className="ml-3 text-medium md:text-base font-bold text-para-color">
                  Safe & Secure
                </h4>
              </div>
              <p className="text-para-color font-medium text-small">
                We continuously monitor and update our security measures to
                ensure the highest level of protection.
              </p>
            </div>
            {/* Card 3 */}
            <div className="lg:p-6 p-5 rounded-lg bg-[#ffddcc] flex flex-col">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center p-2 text-white rounded-lg bg-main-color">
                  <FaDollarSign className="size-5" />
                </span>
                <h4 className="ml-3 text-medium md:text-base font-bold text-para-color">
                  Affordable Plans
                </h4>
              </div>
              <p className="text-para-color font-medium text-small">
                Choose from a variety of plans with different feature sets to
                meet your needs, all at affordable price points
              </p>
            </div>
            {/* Card 4 */}
            <div className="lg:p-6 p-5 rounded-lg bg-[#ffddcc] flex flex-col">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center p-2 text-white rounded-lg bg-main-color">
                  <IoEarth className="size-6" />
                </span>
                <h4 className="ml-3 text-medium md:text-base font-bold text-para-color">
                  Global Reach
                </h4>
              </div>
              <p className="text-para-color font-medium text-small">
                Our platform is designed to provide you with seamless access to
                a global audience, helping you expand your reach beyond borders
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
