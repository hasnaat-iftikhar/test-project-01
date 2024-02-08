import React, { useState } from "react";
import Container from "./Container";

function Faq({
  className=""
}) {
  const [accordionStates, setAccordionStates] = useState(
    new Array(5).fill(false)
  );

  const toggleAccordion = (index) => {
    const newAccordionStates = accordionStates.map((state, i) =>
      i === index ? !state : false
    );
    setAccordionStates(newAccordionStates);
  };

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
    <div className={`${className}`}>
      <Container className="flex justify-between items-start">
        <div className="flex flex-col gap-4">
          <h1 className="text-white font-bold md:text-3xl">Frequently Asked Questions</h1>
          <p className="text-[16px] opacity-90 max-w-[480px] text-white leading-[140%]">Answers to all your BIG questions about KCD Sri Lanka 2023. Still have a question? Feel free to reach out to us!</p>
        </div>
        
        <div className="flex flex-col gap-[24px] w-full max-w-[600px]">
          {faqs.map((faq, index) => (
            <div className="rounded-[16px] p-[24px] bg-[#222222]" key={index}>
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <p className="text-white text-[16px] font-semibold">{faq.question}</p>
                <div className="text-white font-semibold text-[20px]">{accordionStates[index] ? "-" : "+"}</div>
              </div>
              {accordionStates[index] && <div className="mt-[20px]"><p className="text-[16px] text-white opacity-90 leading-[140%]">{faq.answer}</p></div>}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Faq;
