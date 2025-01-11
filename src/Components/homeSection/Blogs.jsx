import React from "react";
import GradientHeading from "../GradientHeading";
import BlogList from "../../Components/blog/BlogList";

const Blogs = () => {
  return (
    <section className="mt-10 bg-white Blog-Main">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-5 md:flex-row md:space-y-0">
        <GradientHeading
          tag="h3"
          beforeText="Explore Your Our"
          gradientText="Latest Blogs"
          beforeSpanClassName="font-bold"
          textSize="text-basic lg:text-xlarge text-center"
        />
        <Link
          className="inline-flex items-center gap-3 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600"
          to="/post"
        >
          View More
        </Link>
      </div>
      <div className="py-6">
        <BlogList />
      </div>
    </section>
  );
};

export default Blogs;
