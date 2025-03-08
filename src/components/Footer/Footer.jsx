import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Scrolling Marquee Effect */}
      <div className="marquee">
        <div className="marquee-content">
          <span>FIGMA ✺ DESIGNER ✺ DEVELOPER ✺ CREATIVE ✺ UI/UX ✺</span>
          <span>FIGMA ✺ DESIGNER ✺ DEVELOPER ✺ CREATIVE ✺ UI/UX ✺</span>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="contact">
        <h1>LET’S TALK!</h1>
        <a href="mailto:rehanurraihan@gmail.com" className="email">
          rehanurraihan@gmail.com ↗
        </a>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© Rehan Raihan - 2023</p>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">Dribbble</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Behance</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
