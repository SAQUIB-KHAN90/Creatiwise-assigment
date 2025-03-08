import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Lead Product Designer",
    company: "Fortknox",
    date: "Mar 2022 - Oct 2023",
  },
  { role: "Intern Designer", company: "OmniSafe", date: "Mar 2022 - Oct 2023" },
  { role: "UI Designer", company: "Doradesign", date: "Mar 2022 - Oct 2023" },
  {
    role: "Frontend Developer",
    company: "OpacityAuthor",
    date: "Mar 2022 - Oct 2023",
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>✺ Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <span className="role">{exp.role}</span>
            <div className="right-section">
              <span className="company">{exp.company}</span>
              <span className="date">{exp.date}</span>
            </div>
            {index !== experiences.length - 1 && (
              <div className="divider"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
