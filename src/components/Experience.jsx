import React from "react";
import { experience } from "../data/experience";
import ExperienceCard from "./cards/ExperienceCard";

function Experience() {
  return (
    <section id="experience" className="section fade-in">
      <div className="section-header">
        <h2>Experience</h2>
        <p>Internships and real-world contributions.</p>
      </div>
      <div className="timeline">
        {experience.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
