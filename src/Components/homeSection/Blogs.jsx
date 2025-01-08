import React from "react";
import GradientHeading from "../GradientHeading";
import blogs from ""

const Blogs = () => {
  return (
    <section className="bg-white py-5">
      <div className="container mx-auto">
        <div>
          <GradientHeading
            tag="h3"
            beforeText="Got Questions?"
            gradientText="We Can Help"
            beforeSpanClassName="font-bold"
            textSize="text-basic lg:text-xlarge text-center mb-6
              "
          />
        </div>
        
      </div>
    </section>
  );
};

export default Blogs;
