import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router
import GradientHeading from "./GradientHeading"; // Assuming GradientHeading component is in the same directory or you update path accordingly

const ContactBtn = ({
  headingBeforeText,
  headingGradientText,
  buttonText,
  linkTo,
  headingTextSize = "text-basic lg:text-xlarge",
  headingClassName = "",
  buttonClassName = "",
}) => {
  return (
    <section className="Contact-Reauable">
      <div className="flex justify-center items-center flex-col my-6 space-y-2">
        <GradientHeading
          tag="h1"
          beforeText={headingBeforeText}
          gradientText={headingGradientText}
          beforeSpanClassName="font-bold"
          textSize={headingTextSize}
          className={`mb-5 ${headingClassName}`}
        />
        <Link
          to={linkTo}
          className={`inline-flex items-center gap-3 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600 ${buttonClassName}`}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default ContactBtn;
