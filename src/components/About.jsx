import React from "react";

function About() {
  return (
    <section id="about" className="section fade-in">
      <div className="section-header">
        <h2>About Me</h2>
        <p>Who I am beyond just the resume.</p>
      </div>
      <div className="about-grid">
        <p>
          I&apos;m a software engineer who enjoys turning ideas into functional,
          maintainable software. I like working across the stack, but I lean
          slightly towards backend and system design — APIs, databases, and
          performance tuning.
        </p>
        <p>
          Outside of work and internships, I explore projects like e-commerce
          platforms, AI-powered tools, and game development. I also enjoy
          competitive programming, which keeps my DSA skills sharp and helps me
          reason about complexity and edge cases.
        </p>
        <p>
          I&apos;m looking for opportunities where I can contribute to real
          products, learn from experienced engineers, and grow into a strong SDE
          who owns features end-to-end.
        </p>
      </div>
    </section>
  );
}

export default About;
