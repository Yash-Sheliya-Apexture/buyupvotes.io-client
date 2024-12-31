import React from "react";
import background from "../../assets/Images/hero1.jpg";

function ContactInfo() {
  return (
    <div className="relative lg:w-[45%] overflow-hidden rounded-xlarge">
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
        <h1
          className="z-0 font-black leading-10 text-white lg:text-largest text-xlarge lg:leading-20"
        >
          <span>Looking to</span> <br />
          <span className="text-main-color">contact</span> <br />
          <span>us?</span>
        </h1>
      </div>
    </div>
  );
}

export default ContactInfo;