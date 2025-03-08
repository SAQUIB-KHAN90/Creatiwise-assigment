import React, { useState } from "react";
import "./FAQ.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is your design process?",
    answer:
      "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
  {
    question: "What tools and software do you use for UX design?",
    answer:
      "I use tools like Figma, Adobe XD, Sketch, and InVision for UX design and prototyping.",
  },
  {
    question: "How do you measure the success of your UX designs?",
    answer:
      "I measure success using user feedback, analytics, usability testing, and conversion rates.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <section className="faq">
      <h2>✺ Frequently asked questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
