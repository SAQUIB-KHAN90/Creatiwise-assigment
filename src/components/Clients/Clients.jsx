import React from "react";
import "./Clients.css";
import C1 from "../../assets/C1.png";
import C2 from "../../assets/C2.png";
import C3 from "../../assets/C3.png";

const Clients = () => {
  return (
    <section className="clients">
      <div className="client-logos">
        <img src={C1} alt="doradesign" />
        <img src={C2} alt="wave" />
        <img src={C3} alt="siloila" />
      </div>
      <p className="client-description">
        Welcome to my portfolio. Here, artistry meets functionality. Dive into a
        curated showcase of distinctive branding and web designs, each crafted
        to captivate and inspire.
      </p>
    </section>
  );
};

export default Clients;
