import React from "react";
import GradientHeading from "../GradientHeading";
import Blog from "../../Dashboard/pages/Blog";

const Blogs = () => {
  return (
    <section className="Blog-Main bg-white">
      <div className="lg:my-10 my-5">
        <GradientHeading
          tag="h3"
          beforeText="Explore Your Our"
          gradientText="Latest Blogs"
          beforeSpanClassName="font-bold"
          textSize="text-basic lg:text-xlarge text-center"
        />
      </div>
      <div>
        <Blog />
      </div>
    </section>
  );
};

export default Blogs;
