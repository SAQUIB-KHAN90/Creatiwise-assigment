import React, { useState } from "react";
import "./Testimonials.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import user1 from "../../assets/user1.png";

const testimonials = [
  {
    id: 1,
    name: "Floyd Miles",
    company: "eBay",
    image: user1,
    quote:
      "Synergy’s resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
  {
    id: 2,
    name: "Jane Cooper",
    company: "Google",
    image: user1, 
    quote:
      "The design process was smooth and efficient. My business now has a website that truly represents our brand identity.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="testimonials">
      <h2>✺ What they say</h2>
      <div className="testimonial-container">
        <div className="testimonial-profile">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
          />
          <div>
            <h3>{testimonials[currentIndex].name}</h3>
            <p>{testimonials[currentIndex].company}</p>
          </div>
        </div>
        <div className="testimonial-quote">
          <span className="quote-mark">“</span>
          <p>{testimonials[currentIndex].quote}</p>
        </div>
      </div>
      <div className="testimonial-controls">
        <button onClick={prevTestimonial} className="nav-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextTestimonial} className="nav-btn">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
