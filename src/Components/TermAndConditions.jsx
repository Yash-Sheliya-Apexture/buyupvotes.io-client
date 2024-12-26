import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// Import the JSON data
import termsData from "/termsAndConditions.json";

const TermAndConditions = () => {
  const [terms, setTerms] = useState(null);

  useEffect(() => {
    // Simulate fetching the JSON data
    setTerms(termsData); // Set the imported JSON data into state
  }, []);

  if (!terms) {
    return <div>Loading...</div>; // Display loading while the data is being set
  }

  return (
    <>
      <Header />
      <section className="lg:container mx-auto my-10 px-4">
        <h1 className="text-sub-color font-bold lg:text-large text-basic text-center mb-8">
          {terms.title}
        </h1>
        <div className="w-full shadow-main p-6 rounded-large border border-gray-300/50">
          {terms.sections.map((section, index) => (
            <div key={index}>
              <h1 className="heading">{section.heading}</h1>
              <br />
              <p className="para">{section.content}</p>
              <br />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermAndConditions;
