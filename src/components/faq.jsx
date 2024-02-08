import React, { useState } from "react";

function FaqSimple() {
  const [accordionStates, setAccordionStates] = useState(
    new Array(5).fill(false)
  );

  const toggleAccordion = (index) => {
    const newAccordionStates = accordionStates.map((state, i) =>
      i === index ? !state : false
    );
    setAccordionStates(newAccordionStates);
  };

  // Dummy text for the accordion questions and answers
  const faqs = [
    {
      question: "How do I get started with this app?",
      answer:
        "To get started with this app, simply sign up for an account and follow the on-screen instructions.",
    },
    {
      question: "What are the system requirements?",
      answer:
        "The system requirements for this app vary depending on the platform. Please refer to our documentation for detailed information.",
    },
    {
      question: "Can I use this app on multiple devices?",
      answer:
        "Yes, you can use this app on multiple devices. Simply log in to your account on each device.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions sent to your email.",
    },
    {
      question: "Where can I find help documentation?",
      answer:
        "You can find help documentation on our website's support page. If you need further assistance, please contact our support team.",
    },
  ];

  return (
    <div className="container sm p-4 text-white">
      <h1 className="text-center mb-8">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div className="rounded-md mb-6 border border-gray-300" key={index}>
          <div
            className="flex justify-between p-4 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div>{faq.question}</div>
            <div>{accordionStates[index] ? "-" : "+"}</div>
          </div>
          {accordionStates[index] && <div className="p-4">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default FaqSimple;
