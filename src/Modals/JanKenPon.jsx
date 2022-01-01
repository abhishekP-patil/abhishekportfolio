import React from "react";
import { ImCross } from "react-icons/im";
import "../css/project-modals.css";

function JanKenPon({ setModalShow }) {
  return (
    <>
      <div
        className="modal-content-container"
        style={{
          backgroundColor: "black",
        }}
      >
        <div className="heading-div project-heading" style={{ color: "white" }}>
          <span>
            <span style={{ color: "#00f1f2" }}>J</span>
            an&nbsp;
          </span>
          <span>
            <span style={{ color: "#00f1f2" }}>K</span>
            en
          </span>
        </div>
        <div
          style={{
            marginLeft: "auto",
            color: "white",
            position: "absolute",
            top: "20px",
            right: "20px",
          }}
        >
          <h3 onClick={() => setModalShow(false)} style={{ cursor: "pointer" }}>
            <ImCross />
          </h3>
        </div>
        <div className="introduction" style={{ color: "#00f1f2" }}>
          Last Stand is a hyper-casual smartphone game where the player play to
          save the Earth from a devastating meteor shower. The player controls a
          shield that can rotate clockwise and anticlockwise around the Earth
          and is the last line of defense against this calamity.
        </div>
        <div style={{ marginTop: "20px" }}>
          <span className="role-duration-key" style={{ color: "#00f1f2" }}>
            Role :&nbsp;
          </span>
          <span className="role-duration-value" style={{ color: "white" }}>
            &nbsp;Designer, Developer
          </span>
          <br />
          <span className="role-duration-key" style={{ color: "#00f1f2" }}>
            Duration :&nbsp;
          </span>
          <span className="role-duration-value" style={{ color: "white" }}>
            &nbsp;June 2019
          </span>
          <br />
          <span className="role-duration-key" style={{ color: "#00f1f2" }}>
            Other Members :&nbsp;
          </span>
          <span className="role-duration-value" style={{ color: "white" }}>
            &nbsp;Harsh Siriah (Developer)
          </span>
        </div>
        <div className="project-subtitles" style={{ color: "white" }}>
          <span>
            <span style={{ color: "#00f1f2" }}>I</span>
            ntroductory&nbsp;
          </span>
          <span>
            <span style={{ color: "#00f1f2" }}>C</span>
            utscene
          </span>
        </div>
        <div className="project-sub-container">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/laststand/LastStandCutscene.gif"
            }
            className="project-sub-image-mobile"
          />
          <div className="project-sub-text" style={{ color: "white" }}>
            The opening cutscene set in the distant future shows a massive
            asteroid taking out 3/4th of a Earth's defense shield. Its main
            purpose is to provide context to the events of the game. The player
            is tasked with using the remaing 1/4th shield to protect the now
            vulnerable earth from the incoming debris.
          </div>
        </div>
        <div className="project-subtitles" style={{ color: "white" }}>
          <span>
            <span style={{ color: "#00f1f2" }}>G</span>
            ameplay&nbsp;
          </span>
        </div>
        <div className="project-sub-container">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/laststand/LastStandCutscene.gif"
            }
            className="project-sub-image-mobile"
          />
          <div className="project-sub-text" style={{ color: "white" }}>
            The player is tasked with using the remaing 1/4th shield to protect
            the now vulnerable earth from the incoming debris. Every aesteroid
            that the player successfully obliterates with the shield rewards a
            point. The goal is to get a highscore.
          </div>
        </div>
        <div className="project-subtitles" style={{ color: "white" }}>
          <span>
            <span style={{ color: "#00f1f2" }}>T</span>
            utorial&nbsp;
          </span>
        </div>
        <div className="project-sub-container">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/laststand/LastStandCutscene.gif"
            }
            className="project-sub-image-mobile"
          />
          <div className="project-sub-text" style={{ color: "white" }}>
            The tutorial is in the form of a simple text message that flashes on
            the screen for the first few moments of every game. This ensures
            that the player does not have to memorize any controls, thus,
            maintaining its hyper-casual nature.
          </div>
        </div>
        <div className="project-subtitles" style={{ color: "white" }}>
          <span>
            <span style={{ color: "#00f1f2" }}>C</span>
            ontrols&nbsp;
          </span>
        </div>
        <div className="project-sub-container">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/laststand/LastStandCutscene.gif"
            }
            className="project-sub-image-mobile"
          />
          <div className="project-sub-text" style={{ color: "white" }}>
            The player can rotate the shield by 90 degrees clockwise by tapping
            the the right half of the screen and the shield can be moved by 90
            degrees anticlockwise by tapping the left half of the screen.
          </div>
        </div>
        <div className="project-subtitles" style={{ color: "white" }}>
          <span>
            <span style={{ color: "#00f1f2" }}>S</span>
            core&nbsp;
          </span>
        </div>
        <div className="project-sub-container">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/laststand/LastStandCutscene.gif"
            }
            className="project-sub-image-mobile"
          />
          <div className="project-sub-text" style={{ color: "white" }}>
            The score is shown in the top left corner of the screen to ensure
            that it does not get in between of the action.
          </div>
        </div>
        <div className="project-subtitles" style={{ color: "white" }}>
          <span>
            <span style={{ color: "#00f1f2" }}>L</span>
            ives&nbsp;
          </span>
        </div>
        <div className="project-sub-container">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/laststand/LastStandCutscene.gif"
            }
            className="project-sub-image-mobile"
          />
          <div className="project-sub-text" style={{ color: "white" }}>
            The lives are indicated by the changing color of the earth which
            goes from a lively blue to a sickly brown to a deathly red as the
            earth takes more and more hits.
          </div>
        </div>
        <div className="project-subtitles" style={{ color: "white" }}>
          <span>
            <span style={{ color: "#00f1f2" }}>G</span>
            ame&nbsp;
          </span>
          <span>
            <span style={{ color: "#00f1f2" }}>O</span>
            ver&nbsp;
          </span>
        </div>
        <div className="project-sub-container">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/laststand/LastStandCutscene.gif"
            }
            className="project-sub-image-mobile"
          />
          <div className="project-sub-text" style={{ color: "white" }}>
            The game over screen shows the current score along with the highest
            score achieved on that device.
          </div>
        </div>
      </div>
    </>
  );
}

export default JanKenPon;
