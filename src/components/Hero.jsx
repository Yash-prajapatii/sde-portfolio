import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

function Hero({ onNavigate }) {
  return (
    <section id="hero" className="section hero-section fade-in">
      <div className="hero-content">
        <p className="hero-tag">Software Development Engineer (SDE) • Fresher</p>
        <h1 className="hero-title">
          Hi, I&apos;m <span className="accent">Yash</span>.
        </h1>
        <h2 className="hero-subtitle">
          I build <span className="accent">clean</span>,{" "}
          <span className="accent">scalable</span> software.
        </h2>
        <p className="hero-text">
          Passionate about backend systems, scalable web apps, and writing
          readable, efficient code. I love combining solid CS fundamentals
          with real-world problem solving.
        </p>

        <div className="hero-actions">
          <button
            className="btn primary"
            onClick={() => onNavigate("projects")}
          >
            View Projects
          </button>
          <button
            className="btn ghost"
            onClick={() => onNavigate("contact")}
          >
            Contact Me
          </button>
        </div>

        <div className="hero-links">
          <a
            href="https://github.com/Yash-prajapatii"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="hero-card floating-card">
        <div className="hero-card-header">
          <span className="status-dot" />
          <span className="status-text">Open to SDE Roles</span>
        </div>
        <div className="hero-card-body">
          <p>Currently focused on:</p>
          <ul>
            <li>High-quality, production-ready code</li>
            <li>System design fundamentals</li>
            <li>Deepening DSA &amp; problem solving</li>
          </ul>
        </div>
      </div>

      <div className="hero-scroll">
        <FaArrowDown />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

export default Hero;
