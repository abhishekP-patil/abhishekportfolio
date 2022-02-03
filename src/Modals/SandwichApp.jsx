import React from "react";
import { ImCross } from "react-icons/im";
import "../css/project-modals.css";

function SandwichApp({ setModalShow }) {
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
            <span style={{ color: "#BBE24A" }}>S</span>
            andwich&nbsp;
          </span>
          <span>
            <span style={{ color: "#BBE24A" }}>S</span>
            tore
          </span>
          <span>
            <span style={{ color: "#BBE24A" }}>N</span>
            utrition
          </span>
          <span>
            <span style={{ color: "#BBE24A" }}>A</span>
            pp
          </span>
        </div>
        <div style={{ color: "orange" }}>
          <img
            style={{ height: "50px", width: "50px" }}
            src="assets/images/sandwichapp/underconstruction.png"
            alt="Under Construction"
          />{" "}
          This page is under construction as the project is ongoing and has only
          reached the stage of "Low Fidelity Prototype" which is being user
          tested!{" "}
          <img
            style={{ height: "50px", width: "50px" }}
            src="assets/images/sandwichapp/underconstruction.png"
            alt="Under Construction"
          />
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
        <div className="introduction" style={{ color: "black" }}>
          I am currently completing a 7 course long professional certification
          in UX design offered by Google on Coursera. As a part of the
          specialization I have to complete a UX design project on randomly
          generated prompt. My prompt was "Nutrition app for a healthy
          sandwich/burger shop in Tokyo".
        </div>
        <div style={{ marginTop: "20px" }}>
          <span className="role-duration-key" style={{ color: "#BBE24A" }}>
            Role :&nbsp;
          </span>
          <span className="role-duration-value" style={{ color: "black" }}>
            &nbsp;User Researcher, Designer, Prototyper
          </span>
          <br />
          <span className="role-duration-key" style={{ color: "#BBE24A" }}>
            Time Frame :&nbsp;
          </span>
          <span className="role-duration-value" style={{ color: "black" }}>
            &nbsp;Present
          </span>
          <br />
          <span className="role-duration-key" style={{ color: "#BBE24A" }}>
            Other Members :&nbsp;
          </span>
          <span className="role-duration-value" style={{ color: "black" }}>
            &nbsp;None
          </span>
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#BBE24A" }}>O</span>
            bjective&nbsp;
          </span>
        </div>
        <div
          className="introduction"
          style={{ color: "black", marginTop: "0px" }}
        >
          <span>
            I wanted to create an app that does not simply serve as a nutrition
            lister for the menu but rather assists the users in filtering the
            menu to suit their nutritional goals and also allows them to create
            their own sandwiches that are customized to hit their goals. I also
            wanted to add ordering functionality to increase the utility of the
            app.
          </span>
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#BBE24A" }}>A</span>
            ssignment&nbsp;
          </span>
          <span>
            <span style={{ color: "#BBE24A" }}>S</span>
            cope&nbsp;
          </span>
        </div>
        <div
          className="introduction"
          style={{ color: "black", marginTop: "0px" }}
        >
          <span>
            <span style={{ color: "#BBE24A" }}>1.&nbsp;</span>User Research to
            understand user needs. Creating 2 user personas based on the user
            research.
            <br />
          </span>
          <span>
            <span style={{ color: "#BBE24A" }}>2.&nbsp;</span>Competitive audit
            to get and idea of market offerings and to guage strengths and
            weaknesses of similar applications.
            <br />
          </span>
          <span>
            <span style={{ color: "#BBE24A" }}>3.&nbsp;</span>Creating a Low
            Fidelity Prototype and testing it out with a variety of users.
          </span>
          <span>
            <span style={{ color: "#BBE24A" }}>4.&nbsp;</span>Creating a High
            Fidelity Prototype and testing it out with a variety of users.
          </span>
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#BBE24A" }}>T</span>
            echnologies&nbsp;
          </span>
        </div>
        <div
          className="introduction"
          style={{ color: "black", marginTop: "0px" }}
        >
          <span>
            <span style={{ color: "#BBE24A" }}>Figma :&nbsp;</span>
            A prototyping tool.
            <br />
          </span>
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#BBE24A" }}>U</span>
            ser&nbsp;
          </span>
          <span>
            <span style={{ color: "#BBE24A" }}>P</span>
            ersonas&nbsp;
          </span>
        </div>
        <div className="project-sub-container">
          <img
            className="image-center"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/sandwichapp/userpersonas/ayane.png"
            }
            style={{
              width: "80%",
              border: "solid",
              borderColor: "black",
              borderWidth: "1px",
            }}
          />
          <img
            className="image-center"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/sandwichapp/userpersonas/aryan.png"
            }
            style={{
              marginTop: "15px",
              width: "80%",
              border: "solid",
              borderColor: "black",
              borderWidth: "1px",
            }}
          />
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#BBE24A" }}>U</span>
            ser&nbsp;
          </span>
          <span>
            <span style={{ color: "#BBE24A" }}>J</span>
            ourney&nbsp;
          </span>
          <span>
            <span style={{ color: "#BBE24A" }}>M</span>
            ap&nbsp;
          </span>
        </div>
        <div className="project-sub-container">
          <img
            className="image-center"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/sandwichapp/userjourney/ayane.png"
            }
            style={{
              width: "80%",
              border: "solid",
              borderColor: "black",
              borderWidth: "1px",
            }}
          />
          <img
            className="image-center"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/sandwichapp/userjourney/aryan.png"
            }
            style={{
              marginTop: "15px",
              width: "80%",
              border: "solid",
              borderColor: "black",
              borderWidth: "1px",
            }}
          />
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#BBE24A" }}>C</span>
            ompetitive&nbsp;
          </span>
          <span>
            <span style={{ color: "#BBE24A" }}>A</span>
            udit&nbsp;
          </span>
        </div>
        <a
          className="introduction text-link"
          style={{ color: "black", marginTop: "0px" }}
          href={process.env.PUBLIC_URL + "/assets/pdfs/competitiveAudit.pdf"}
          target="_blank"
        >
          <span>
            Click here to view the comprehensive competitive audit table.
          </span>
        </a>

        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#BBE24A" }}>P</span>
            rimary&nbsp;
          </span>
          <span>
            <span style={{ color: "#BBE24A" }}>C</span>
            ompetitive&nbsp;
          </span>
          <span>
            <span style={{ color: "#BBE24A" }}>A</span>
            udit&nbsp;
          </span>
          <span>
            <span style={{ color: "#BBE24A" }}>R</span>
            eport&nbsp;
          </span>
        </div>
        <div className="project-sub-container">
          <img
            className="image-center"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/sandwichapp/competitiveaudit/car1.png"
            }
            style={{
              width: "80%",
            }}
          />
          <img
            className="image-center"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/sandwichapp/competitiveaudit/car2.png"
            }
            style={{
              width: "80%",
            }}
          />
          <img
            className="image-center"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/sandwichapp/competitiveaudit/car3.png"
            }
            style={{
              width: "80%",
            }}
          />
          <img
            className="image-center"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/sandwichapp/competitiveaudit/car4.png"
            }
            style={{
              width: "80%",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default SandwichApp;
