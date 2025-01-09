import React from "react";
import GradientHeading from "../GradientHeading";
import Blog from "../../Dashboard/pages/Blog";

const Blogs = () => {
  return (
    <section className="Blog-Main bg-white my-4">
      <div className="container mx-auto flex justify-between items-center flex-col md:flex-row space-y-4">
        <GradientHeading
          tag="h3"
          beforeText="Explore Your Our"
          gradientText="Latest Blogs"
          beforeSpanClassName="font-bold"
          textSize="text-basic lg:text-xlarge text-center"
        />
        <a
          className="inline-flex items-center gap-3 px-4 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
          href="/signup"
          data-discover="true"
        >
          Read blogs
        </a>
      </div>
      <div>
        <Blog />
      </div>
    </section>
  );
};

export default Blogs;
