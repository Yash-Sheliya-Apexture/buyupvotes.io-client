import React, { useState, useEffect } from "react";
import BreadcrumbHeader from "../../Components/BreadcrumbHeader";
import BlogList from "../../Components/blog/BlogList";

const Blog = () => {
  const breadcrumbs = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Blogs" },
  ];

  return (
    <>
      <BreadcrumbHeader title="Blog" breadcrumbs={breadcrumbs} />
      <BlogList />
    </>
  );
};

export default Blog;
