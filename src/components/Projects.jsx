import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./cards/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="section fade-in">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Selected work that reflects how I think and build.</p>
      </div>
      <div className="cards-grid">
        {projects.map((p, idx) => (
          <ProjectCard key={idx} project={p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
