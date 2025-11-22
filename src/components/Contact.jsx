import React from "react";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This is a demo form. Hook it to a backend or Formspree.");
  };

  return (
    <section id="contact" className="section fade-in">
      <div className="section-header">
        <h2>Contact</h2>
        <p>Let&apos;s build something together.</p>
      </div>
      <div className="contact-wrapper">
        <div className="contact-text">
          <p>
            Whether you have an opportunity, a question, or just want to say
            hi, my inbox is always open. I&apos;ll do my best to get back to
            you soon.
          </p>
          <div className="contact-cta">
            <a href="mailto:youremail@example.com" className="btn primary">
              Say Hello <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="btn ghost"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Tell me about the role, project, or idea..."
              required
            />
          </div>
          <button className="btn primary full-width" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
