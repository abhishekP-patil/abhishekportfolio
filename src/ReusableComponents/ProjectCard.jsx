import React from "react";
import "../css/project-card.css";

function ProjectCard({
  img,
  title,
  setShowModal,
  setModalContentString,
  contentString,
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
        <div className="project-card-text-div">{title}</div>
      </div>
    </>
  );
}

export default ProjectCard;
