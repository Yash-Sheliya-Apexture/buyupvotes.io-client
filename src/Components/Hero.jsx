import React, { useState, useEffect } from "react";
import light_1 from "../assets/images/light_1.png";
import light_2 from "../assets/images/light_2.png";
import overlay_3 from "../assets/images/overlay_3.jpg";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Button from "../Dashboard/components/Button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  // Function to simulate continuous scroll-up for the first image and scroll-down for the second image
  const incrementScroll = () => {
    setScrollY((prevScrollY) => {
      // Reset the scrollY value after it moves a certain amount to create an infinite loop
      if (prevScrollY <= -100) {
        return 0; // Reset to 0 for infinite scroll
      }
      return prevScrollY - 0.1; // Scroll up for the first image
    });
  };

  useEffect(() => {
    // Start the automatic scroll effect every 30 milliseconds
    const interval = setInterval(incrementScroll, 30);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        className="hero-section relative h-screen overflow-hidden bg-no-repeat bg-center bg-cover"
        style={{
          background:`linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${overlay_3})`,
        }}
      >
        <div className="lg:mt-20 mt-10">
          <div className="container mx-auto">
            <div className="">
              {/* grid 1 row 2 cols */}
              <div className="hero-contain w-full grid grid-cols-1 tablet:grid-cols-2">
                {/* Left Content */}
                <div className="flex flex-col justify-center items-center">
                  <h1 className="hero-heading text-4xl tracking-wide lg:text-6xl text-center font-extrabold text-main-color mt-2 mb-6 ">
                    Buy Reddit <br /> Upvotes
                  </h1>
                  <p className="text-xl text-center font-bold text-main-color mb-7 tablet:mb-2">
                    Boost your posts, dominate your conversion
                  </p>
                  <ul className="list-disc flex flex-col gap-2.5 mb-11 tablet:mb-6">
                    <li className="text-sm font-normal">
                      Get trending by sending instant upvotes to any post or
                      comment
                    </li>
                    <li className="text-sm font-normal">
                      Take control of comments on your posts by sending upvotes
                      and downvotes
                    </li>
                  </ul>
                  <div>
                    <div className="flex flex-col gap-2">
                      <Link to="/signin">
                        <Button>Sign in</Button>
                      </Link>

                      <Link
                        to="/signup"
                        className="flex items-center gap-2 text-sm underline "
                      >
                        <BsBoxArrowUpRight />
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Images */}
                <div className="min-w-0 overflow-hidden tablet:block hidden pl-20">
                  <div className="hero-image-wrap absolute flex flex-row">
                    {/* First image moves up */}
                    <div className="hero-image relative flex flex-col">
                      <img
                        src={light_2}
                        alt="Image 1"
                        className="absolute"
                        style={{
                          transform: `translateY(${
                            scrollY * 0.2
                          }%) translateZ(0px)`,
                          transition: "transform 0.1s ease-out", // Smooth scroll effect
                        }}
                      />
                      <img
                        src={light_2}
                        alt="Image 1"
                        className="absolute"
                        style={{
                          transform: `translateY(${
                            scrollY * 0.2
                          }%) translateZ(0px)`,
                          transition: "transform 0.1s ease-out",
                        }}
                      />
                    </div>

                    {/* Second image moves down */}
                    <div className="hero-image relative flex flex-col">
                      <img
                        src={light_1}
                        alt="Image 2"
                        className="absolute"
                        style={{
                          transform: `translateY(${
                            scrollY * -0.2
                          }%) translateZ(0px)`,
                          transition: "transform 0.1s ease-out", // Smooth scroll effect
                        }}
                      />
                      <img
                        src={light_1}
                        alt="Image 2"
                        className="absolute"
                        style={{
                          transform: `translateY(${
                            scrollY * -0.2
                          }%) translateZ(0px)`,
                          transition: "transform 0.1s ease-out",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
