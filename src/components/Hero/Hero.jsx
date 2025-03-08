import React from "react";
import "./Hero.css";
import img1 from "../../assets/H1.png";
import img2 from "../../assets/H2.png";

const Hero = () => {
  return (
    <section className="hero">
      <h1>
        I AM A{" "}
        <span className="image-text">
          <img src={img1} alt="design" />
        </span>{" "}
        FREELANCE
      </h1>
      <h1>
        DESIGNER{" "}
        <span className="image-text">
          <img src={img2} alt="work" />
        </span>{" "}
        FROM
      </h1>
      <h1>SAN FRANCISCO</h1>
    </section>
  );
};

export default Hero;
