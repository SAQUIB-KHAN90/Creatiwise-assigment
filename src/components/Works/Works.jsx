import React from "react";
import "./Works.css";
import img1 from "../../assets/imggg3.png";
import img2 from "../../assets/imggg1.png";
import img3 from "../../assets/imggg2.png";

const projects = [
  {
    id: 1,
    title: "Analysis Application",
    description: "With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
    tags: ["FIGMA", "UX"],
    image: img1,
  },
  {
    id: 2,
    title: "Fortknox Application",
    description: "With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
    tags: ["MOBILE", "WEB"],
    image: img2,
  },
  {
    id: 3,
    title: "Zenocide Application",
    description: "With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
    tags: ["APP", "WEB"],
    image: img3,
  },
];

const Works = () => {
  return (
    <section className="works">
      <div className="works-header">
        <h2>✺ Works</h2>
        <a href="#">View All</a>
      </div>
      <div className="works-container">
        {projects.map((project) => (
          <div key={project.id} className="work-card">
            <img src={project.image} alt={project.title} className="work-image" />
            <div className="work-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <button className="case-study-btn">View Case Study</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
