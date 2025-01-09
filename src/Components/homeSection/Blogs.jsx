import React from "react";
import GradientHeading from "../GradientHeading";
import Blog from "../../Dashboard/pages/Blog";

const Blogs = () => {
  return (
    <section className="bg-white">
      <div>
        <GradientHeading
          tag="h3"
          beforeText="Got Questions?"
          gradientText="We Can Help"
          beforeSpanClassName="font-bold"
          textSize="text-basic lg:text-xlarge text-center mb-6"
        />
      </div>
      <div>
        <Blog />
      </div>
    </section>
  );
};

export default Blogs;
