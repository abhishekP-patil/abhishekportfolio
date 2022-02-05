import React from "react";
import { ImCross } from "react-icons/im";
import "../css/project-modals.css";

function Portfolio({ setModalShow }) {
  return (
    <>
      <div
        className="modal-content-container"
        style={{
          backgroundColor: "white",
          paddingLeft: "6.7%",
        }}
      >
        <div className="heading-div project-heading" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>P</span>
            ortfolio&nbsp;
          </span>

          <span>
            <span style={{ color: "#5a00ed" }}>W</span>
            ebsite
          </span>
        </div>
        <div
          className="modal-close-icon-container"
          style={{
            color: "black",
          }}
        >
          <h3 onClick={() => setModalShow(false)} style={{ cursor: "pointer" }}>
            <ImCross />
          </h3>
        </div>
        <div className="introduction" style={{ color: "#5a00ed" }}>
          This project was designed and developed by me to showcase some of the
          projects that I have worked on throughout my bachelor program.
        </div>
        <div style={{ marginTop: "20px" }}>
          <span className="role-duration-key" style={{ color: "#5a00ed" }}>
            Role :&nbsp;
          </span>
          <span className="role-duration-value" style={{ color: "black" }}>
            &nbsp;Web Designer and Developer
          </span>
          <br />
          <span className="role-duration-key" style={{ color: "#5a00ed" }}>
            Time Frame :&nbsp;
          </span>
          <span className="role-duration-value" style={{ color: "black" }}>
            &nbsp;Winter 2022
          </span>
          <br />
          <span className="role-duration-key" style={{ color: "#5a00ed" }}>
            Other Members :&nbsp;
          </span>
          <span className="role-duration-value" style={{ color: "black" }}>
            &nbsp;
            <span>None</span>
            <br />
          </span>
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>T</span>
            echnologies&nbsp;
          </span>
        </div>
        <div
          className="introduction"
          style={{ color: "black", marginTop: "0px" }}
        >
          <span>
            <span style={{ color: "#5a00ed" }}>Figma :&nbsp;</span>
            A prototyping tool.
            <br />
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>ReactJS :&nbsp;</span>React is a
            JavaScript library for building user interfaces. React allows you to
            build encapsulated components that manage their own state, then
            compose them to make complex UIs.
            <br />
          </span>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
