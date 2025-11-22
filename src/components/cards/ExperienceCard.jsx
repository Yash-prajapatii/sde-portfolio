import React from "react";

function ExperienceCard({ exp }) {
  return (
    <div className="timeline-item hover-lift">
      <div className="timeline-dot" />
      <div className="timeline-content">
        <h3>{exp.role}</h3>
        <h4>{exp.company}</h4>
        <span className="timeline-period">{exp.period}</span>
        <ul>
          {exp.points.map((p, idx) => (
            <li key={idx}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
