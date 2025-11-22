import React from "react";

function SkillCard({ title, items }) {
  return (
    <div className="skill-card floating-card">
      <h3>{title}</h3>
      <ul>
        {items.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;
