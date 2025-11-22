import React from "react";
import { skills } from "../data/skills";
import SkillCard from "./cards/SkillCard";

function Skills() {
  return (
    <section id="skills" className="section fade-in">
      <div className="section-header">
        <h2>Skills</h2>
        <p>Technologies I use to ship reliable software.</p>
      </div>
      <div className="skills-grid">
        <SkillCard title="Languages" items={skills.languages} />
        <SkillCard title="Frontend" items={skills.frontend} />
        <SkillCard title="Backend" items={skills.backend} />
        <SkillCard title="Databases" items={skills.databases} />
        <SkillCard title="Tools & Platforms" items={skills.tools} />
        <SkillCard title="CS Fundamentals" items={skills.cs} />
      </div>
    </section>
  );
}

export default Skills;
