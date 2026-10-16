import React from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../utils/projectsData";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id.toString() === id);

  if (!project) {
    return (
      <div className="project-notfound container">
        <h2>Project not found</h2>
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <article className="project-details container">
      <img src={project.image} alt={project.name} className="detail-img" />
      <h1>{project.title}</h1>

      <section className="problem-solution">
        <div className="section-item">
          <h3>Problem</h3>
          <p>{project.problem || "-"}</p>
        </div>
        <div className="section-item">
          <h3>Solution</h3>
          <p>{project.solution || "-"}</p>
        </div>
        <div className="section-item">
          <h3>Outcome</h3>
          <p>{project.outcome || "-"}</p>
        </div>
      </section>

      <div className="detail-meta">
        <div><strong>Skills & Tools:</strong> {project.techStack.join(", ")}</div>
        {project.date && <div><strong>Date:</strong> {project.date}</div>}
      </div>

      <div className="detail-links">
        {project.liveLink && <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn">View Work</a>}
        {project.instagramLink && <a href={project.instagramLink} target="_blank" rel="noreferrer" className="btn">Instagram</a>}
        {project.codeLink && <a href={project.codeLink} target="_blank" rel="noreferrer" className="btn">View Code</a>}
      </div>

      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </article>
  );
};

export default ProjectDetails;
</parameter>
