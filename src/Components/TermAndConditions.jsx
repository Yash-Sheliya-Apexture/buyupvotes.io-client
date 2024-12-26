import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const TermAndConditions = () => {
  const [terms, setTerms] = useState(null); // Define state for terms data

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}termsAndConditions.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch terms and conditions data");
        }
        return response.json();
      })
      .then((data) => setTerms(data)) // Set fetched data to terms
      .catch((error) => console.error(error));
  }, []);

  if (!terms) {
    return <div>Loading...</div>; // Show a loading state until terms are fetched
  }

  return (
    <>
      <Header />
      <section className="px-4 mx-auto my-10 lg:container">
        <h1 className="mb-8 font-bold text-center text-sub-color lg:text-large text-basic">
          {terms.title}
        </h1>
        <div className="w-full p-6 border shadow-main rounded-large border-gray-300/50">
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
