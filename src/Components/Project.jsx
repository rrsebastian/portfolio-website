import React from "react";

function Project({ img, projectName, githubLink, websiteLink }) {
  return (
    <div className="project-container">
      <img src={img} />
      <div className="project-bottom-wrapper">
        <h3>{projectName}</h3>
        <div className="project-button-wrapper">
          <a href={githubLink} target="_blank">
            <button>Github</button>
          </a>
          <a href={websiteLink} target="_blank">
            <button>Live Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
