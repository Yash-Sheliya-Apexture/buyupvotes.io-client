import React from "react";
import BreadcrumbHeader from "./BreadcrumbHeader";
import FAQSection from "../Components/faqSection/FAQSection";
import FAQList from "./faqSection/FAQList";

const FAQS = () => {
  const breadcrumbs = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "FAQS" },
  ];

  const faqs = [
    {
      question:
        "How long does it take for the upvotes to start being delivered?",
      answer:
        "Yes. Taazaa provides skilled teams to assist you with product ideation, market analysis, and UX/UI design, as well as coding, testing, release, and support of the final product. We can even help you find venture capital funding. Taazaa is a complete custom software development company.",
    },
    {
      question: "At what speed do the upvotes get delivered?",
      answer:
        "Custom software development is a significant investment. The cost depends on many variables, such as how complex the solution is, what type of software it is (mobile app, enterprise application, etc.), and what compliance measures need to be met.",
    },
    {
      question: "How many upvotes should I send to my post?",
      answer:
        "Yes. We know good product support and maintenance are crucial to business growth. As part of an effective customer retention strategy, it ensures that your product keeps wowing users even as their expectations evolve. We proactively help you add features and triage bugs, so your software consistently meets your users’ needs.",
    },
    {
      question: "What upvote speed should I choose for my order?",
      answer:
        "We follow an Agile, iterative development methodology enhanced by our team culture and wealth of experience. Agile development is an iterative process that involves multiple releases following a product roadmap. Agile gives us the ability to respond quickly to user feedback and changes in the market.",
    },
    {
      question: "Will buying upvotes get my Reddit account banned?",
      answer:
        "Of course! Taazaa is a top-tier custom software development company. Engaging a dedicated team from Taazaa gives you access to developers and engineers with deep industry knowledge and experience. We deliver affordable, high-value solutions tailored to your business needs.",
    },
    {
      question: "Can I order downvotes?",
      answer:
        "Yes, we provide upvotes and downvotes on both posts and comments.",
    },
    {
      question: "Can I get recommendations for my Reddit marketing campaign?",
      answer:
        "Reach out to us through any of our contact methods and we'll be happy to answer your questions and help you put together your campaign.",
    },
    {
      question: "What if I’m unsatisfied with my order?",
      answer:
        "If you're unsatisfied with your order for any reason, please reach out and get in touch - we'll try our best to make it right.",
    },
    {
      question: "Do you do partnerships with agencies or resellers?",
      answer:
        "Yes, please reach out to us through any of our contact methods and we'll be happy to discuss any potential partnerships.",
    },
    {
      question: "How do I place an order?",
      answer:
        "After signing in and adding funds to your account, you can place an order in the 'Orders' tab.",
    },
    {
      question: "Can I order upvotes for a post that is more than a day old?",
      answer:
        "It depends on the subreddit that the post is in, some subreddit's allow for this and others don't. If you place an order that is ineligible, your funds will be refunded back into your balance.",
    },
  ];

  return (
    <main className="py-10" id="FAQ">
      <BreadcrumbHeader title="FAQS" breadcrumbs={breadcrumbs} />
      <FAQSection
        heading="Frequently asked questions!"
        description="Welcome to our FAQs! Here, you’ll find answers to the most
        commonly asked questions about our products and services. Whether
        you’re just getting started or looking for detailed insights,we’ve
        got you covered."
      />
      <FAQList faqs={faqs} />
    </main>
  );
};

export default FAQS;
