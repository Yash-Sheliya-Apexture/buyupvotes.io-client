import React from "react";
import GradientHeading from "./GradientHeading";
import { FaBolt } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { BiSolidLayer } from "react-icons/bi";
import { GiCheckMark } from "react-icons/gi";

const PricingWithMenu = () => {
  return (
    <section className="flex items-center justify-center bg-white">
      <div className="container mx-auto">
        <GradientHeading
          tag="h3"
          beforeText="Choose the perfect plan"
          gradientText="for your needs."
          beforeSpanClassName="font-bold"
          textSize="text-3xl lg:text-[40px]"
          className="py-6 text-center lg:pb-14 lg:mt-4"
        />

        <div className="py-10">
          <div className="flex flex-col gap-6 md:flex-row">
            <div
              className="relative flex-1 p-6 bg-white rounded-2xl shadow-main bg-gradient-to-b from-pink-100 to-white"
            >
              <div className="flex flex-col items-center justify-center space-y-3">
                <div className="inline-block px-4 py-1 font-medium text-white rounded-full bg-main-color text-medium">
                  <span className="flex items-center gap-2">
                    <FaBolt className="text-white size-5" />
                    Starter
                  </span>
                </div>

                <h2 className="font-bold text-center text-gray-800 text-small">
                  $0.05/upvote
                </h2>
                <h2 className="text-5xl font-bold text-center text-main-color">
                  $10+
                </h2>
                <p className="font-medium text-center text-gray-800 text-small">
                  10% discount
                </p>
              </div>

              <div className="mt-6">
                <button className="w-full px-4 py-2 font-bold text-gray-700 bg-white border border-gray-300 rounded-md">
                  Get Started
                </button>
              </div>

              <div className="mt-4">
                <h3 className="mb-2 text-sm font-bold text-gray-600">INCLUDES</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-green-500 size-4" />1 editor &
                    3 guests
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-green-500 size-4" />
                    125+ Al avatars
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    3 personal avatars
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    120 minutes of video/year
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="mb-2 text-sm font-bold text-gray-600">
                  KEY FEATURES
                </h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Avatar builder
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Al video assistant
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Personal avatars
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <button className="w-full text-sm text-center text-gray-500 hover:text-gray-800">
                  See all features
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="inline-block w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className="relative flex-1 p-6 bg-white rounded-2xl shadow-main bg-gradient-to-b from-blue-100 to-white"
            >
              <div className="absolute flex items-center justify-center px-4 py-1 font-medium text-white rounded-full top-6 left-36 bg-main-color text-medium">
                <span className="flex items-center gap-2">
                  <FaStar className="text-white size-5" />
                  Creator
                </span>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-center text-gray-800">
                <span className="text-5xl">₹4,649</span>/mo
              </h2>
              <p className="text-sm text-center text-gray-500">
                Billed yearly.{" "}
                <span className="font-bold text-blue-600">Pay monthly</span>
              </p>
              <div className="mt-6">
                <button className="w-full px-4 py-2 font-bold text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700">
                  Get started
                </button>
              </div>

              <div className="mt-8">
                <h3 className="mb-2 text-sm font-bold text-gray-600">INCLUDES</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    1 editor & 5 guests
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    180+ Al avatars
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    5 personal avatars
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    360 minutes of video/year
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="mb-2 text-sm font-bold text-gray-600">
                  EVERYTHING IN STARTER, PLUS
                </h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Custom fonts
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Branded video page
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    CTA on video page
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <button className="w-full text-sm text-center text-gray-500 hover:text-gray-800">
                  See all features
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="inline-block w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#ffb087] via-[#ff6518] to-main-color rounded-2xl shadow-main p-6 flex-1 text-white relative">
              <div className="absolute flex items-center justify-center px-4 py-1 font-medium text-white rounded-full top-6 left-36 bg-main-color text-medium">
                <span className="flex items-center gap-2">
                  <BiSolidLayer className="text-white size-5" />
                  Enterprice
                </span>
              </div>
              <h2 className="mt-12 text-4xl font-bold text-center">Let's talk</h2>
              <p className="mb-6 text-sm text-center text-gray-300">
                Custom pricing
              </p>
              <div className="mt-6">
                <button className="w-full px-4 py-2 font-bold transition-colors bg-blue-600 rounded-md hover:bg-blue-700">
                  Book demo
                </button>
              </div>

              <div className="mt-8">
                <h3 className="mb-2 text-sm font-bold text-gray-300">INCLUDES</h3>
                <ul className="space-y-2 text-sm text-grayZ-300">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Custom # of editors & guests
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    230+ Al avatars
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Unlimited personal avatars
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Unlimited minutes of video
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="mb-2 text-sm font-bold text-gray-300">
                  EVERYTHING IN CREATOR, PLUS
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Teams & collaboration
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    1-click translations
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Priority support
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <button className="w-full text-sm text-center text-gray-400 hover:text-white">
                  See all features
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="inline-block w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingWithMenu;
