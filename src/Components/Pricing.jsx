import React from "react";
import GradientHeading from "./GradientHeading";
import { FaBolt } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { BiSolidLayer } from "react-icons/bi";

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
          className="lg:pb-14 lg:mt-4 py-6 text-center"
        />

        <div class="py-10">
          <div class="flex flex-col md:flex-row gap-6">
            <div
              class="bg-white rounded-2xl shadow-main p-6 flex-1 relative
                        bg-gradient-to-b from-pink-100 to-white"
            >
              <div className="flex justify-center items-center flex-col space-y-3">
                <div class="inline-block bg-main-color text-white text-medium font-medium py-1 px-4 rounded-full">
                  <span class="flex items-center gap-2">
                    <FaBolt className="size-5 text-white" />
                    Starter
                  </span>
                </div>

                <h2 class="text-small font-bold text-gray-800 text-center">
                  $0.05/upvote
                </h2>
                <h2 class="text-5xl font-bold text-main-color text-center">
                  $10+
                </h2>
                <p class="text-small text-gray-800 text-center font-medium">
                  10% discount
                </p>
              </div>

              <div class="mt-6">
                <button class="bg-white border border-gray-300  text-gray-700 font-bold py-2 px-4 rounded-md w-full">
                  Get Started
                </button>
              </div>

              <div class="mt-4">
                <h3 class="text-sm font-bold text-gray-600 mb-2">INCLUDES</h3>
                <ul class="text-sm text-gray-500 space-y-2">
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    1 editor & 3 guests
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    125+ Al avatars
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    3 personal avatars
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    120 minutes of video/year
                  </li>
                </ul>
              </div>

              <div class="mt-8">
                <h3 class="text-sm font-bold text-gray-600 mb-2">
                  KEY FEATURES
                </h3>
                <ul class="text-sm text-gray-500 space-y-2">
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Avatar builder
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Al video assistant
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Personal avatars
                  </li>
                </ul>
              </div>
              <div class="mt-8">
                <button class="text-sm text-gray-500 hover:text-gray-800 w-full text-center">
                  See all features
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              class="bg-white rounded-2xl shadow-main p-6 flex-1 relative
                        bg-gradient-to-b from-blue-100 to-white"
            >
              <div class="absolute top-6 left-36 bg-main-color text-white text-medium font-medium py-1 px-4 rounded-full flex items-center justify-center">
                <span class="flex items-center gap-2">
                  <FaStar className="size-5 text-white" />
                  Creator
                </span>
              </div>

              <h2 class="text-3xl font-bold text-gray-800 mt-12 text-center">
                <span class="text-5xl">₹4,649</span>/mo
              </h2>
              <p class="text-sm text-gray-500 text-center">
                Billed yearly.{" "}
                <span class="font-bold text-blue-600">Pay monthly</span>
              </p>
              <div class="mt-6">
                <button class="bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full hover:bg-blue-700 transition-colors">
                  Get started
                </button>
              </div>

              <div class="mt-8">
                <h3 class="text-sm font-bold text-gray-600 mb-2">INCLUDES</h3>
                <ul class="text-sm text-gray-500 space-y-2">
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    1 editor & 5 guests
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    180+ Al avatars
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    5 personal avatars
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    360 minutes of video/year
                  </li>
                </ul>
              </div>

              <div class="mt-8">
                <h3 class="text-sm font-bold text-gray-600 mb-2">
                  EVERYTHING IN STARTER, PLUS
                </h3>
                <ul class="text-sm text-gray-500 space-y-2">
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Custom fonts
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Branded video page
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    CTA on video page
                  </li>
                </ul>
              </div>
              <div class="mt-8">
                <button class="text-sm text-gray-500 hover:text-gray-800 w-full text-center">
                  See all features
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="bg-gradient-to-b from-[#ffb087] via-[#ff6518] to-main-color rounded-2xl shadow-main p-6 flex-1 text-white relative">
              <div class="absolute top-6 left-36  bg-main-color text-white text-medium font-medium py-1 px-4 rounded-full flex items-center justify-center">
                <span class="flex items-center gap-2">
                  <BiSolidLayer className="size-5 text-white" />
                  Enterprice
                </span>
              </div>
              <h2 class="text-4xl font-bold mt-12 text-center">Let's talk</h2>
              <p class="text-sm text-gray-300 text-center mb-6">
                Custom pricing
              </p>
              <div class="mt-6">
                <button class="bg-blue-600 hover:bg-blue-700  font-bold py-2 px-4 rounded-md w-full transition-colors">
                  Book demo
                </button>
              </div>

              <div class="mt-8">
                <h3 class="text-sm font-bold text-gray-300 mb-2">INCLUDES</h3>
                <ul class="text-sm text-gray-300 space-y-2">
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Custom # of editors & guests
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    230+ Al avatars
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Unlimited personal avatars
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Unlimited minutes of video
                  </li>
                </ul>
              </div>

              <div class="mt-8">
                <h3 class="text-sm font-bold text-gray-300 mb-2">
                  EVERYTHING IN CREATOR, PLUS
                </h3>
                <ul class="text-sm text-gray-300 space-y-2">
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Teams & collaboration
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    1-click translations
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-green-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Priority support
                  </li>
                </ul>
              </div>
              <div class="mt-8">
                <button class="text-sm text-gray-400 hover:text-white w-full text-center">
                  See all features
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
