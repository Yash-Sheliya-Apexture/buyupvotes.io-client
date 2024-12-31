import React from "react";
import FAQ from "../Dashboard/pages/FAQ";
import Button from "../Dashboard/components/Button";
import { Link } from "react-router-dom";

const FAQS = () => {
  return (
    <div>
      <FAQ />
      <div className="flex justify-center items-center flex-col my-6">
        <h1 className="text-sub-color text-basic mb-6 font-medium text-center">
          Haven't found the right help?
        </h1>
        <Link to="/contactus">
          <Button>Contact Us</Button>
        </Link>
      </div>
    </div>
  );
};

export default FAQS;
