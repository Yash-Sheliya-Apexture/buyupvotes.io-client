import React from "react";
import background from "../../assets/Images/hero1.jpg";

function ContactInfo() {
  return (
    <div className="relative lg:w-2/5 lg:h-[600px] overflow-hidden rounded-large">
      <div
        className="absolute inset-0 z-0 w-auto"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute inset-0 z-0 bg-black/70"></div>
      <div className="flex items-center justify-center h-full px-6 py-20 text-center lg:absolute lg:text-left lg:mt-20">
        <h1 className="font-bold leading-10 text-white lg:text-largest text-4xl lg:leading-20">
          <div
            className="animate__animated animate__bounceInLeft"
            style={{ animationDuration: "1s", animationDelay: "0.1s" }}
          >
            Looking To
          </div>
          <div
            className="animate__animated animate__bounceInLeft"
            style={{ animationDuration: "1s", animationDelay: "0.2s" }}
          >
            <span className="text-main-color">Contact</span>{" "}
          </div>
          <div
            className="animate__animated animate__bounceInLeft"
            style={{ animationDuration: "1s", animationDelay: "0.3s" }}
          >
            Us
          </div>
        </h1>
      </div>
    </div>
  );
}

export default ContactInfo;
