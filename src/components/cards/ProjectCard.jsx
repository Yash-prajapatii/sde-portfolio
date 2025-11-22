import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <article className="card project-card hover-lift">
      <div className="card-header">
        <h3>{project.title}</h3>
        <span className="pill pill-soft">{project.period}</span>
      </div>
      <p className="card-desc">{project.desc}</p>
      <div className="pill-row">
        {project.tech.map((t) => (
          <span key={t} className="pill">
            {t}
          </span>
        ))}
      </div>
      <div className="card-links">
        {project.links.demo && project.links.demo !== "#" && (
          <a href={project.links.demo} target="_blank" rel="noreferrer">
            Live Demo <FaExternalLinkAlt />
          </a>
        )}
        {project.links.github && (
          <a href={project.links.github} target="_blank" rel="noreferrer">
            Code <FaGithub />
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
