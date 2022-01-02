import React from "react";
import "../css/project-card.css";

function ProjectCard({
  img,
  title,
  setShowModal,
  setModalContentString,
  contentString,
  intro,
  tech,
}) {
  return (
    <>
      <div
        className="project-card-container"
        onClick={() => {
          setShowModal(true);
          setModalContentString(contentString);
        }}
      >
        <img src={img} className="project-card-image" />
        <div className="project-card-text-div">
          <div className="project-card-title">{title}</div>
          <br />
          <span className="project-card-intro">{intro}</span>
          <br />
          <span className="project-card-tech">{tech}</span>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
