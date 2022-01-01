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
            <span style={{ color: "gray" }}>J</span>
            an&nbsp;
          </span>
          <span>
            <span style={{ color: "gray" }}>K</span>
            en&nbsp;
          </span>
          <span>
            <span style={{ color: "gray" }}>P</span>
            on&nbsp;
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
        <div className="introduction" style={{ color: "white" }}>
          Jan Ken Pon is the japanese name for the Rock Paper Scissor game. This
          hyper-casual mobile game uses the concept of Rock Paper Scissors to
          create an intense reaction based game.
        </div>
        <div style={{ marginTop: "20px" }}>
          <span className="role-duration-key" style={{ color: "grey" }}>
            Role :&nbsp;
          </span>
          <span className="role-duration-value" style={{ color: "white" }}>
            &nbsp;Designer, Developer
          </span>
          <br />
          <span className="role-duration-key" style={{ color: "grey" }}>
            Duration :&nbsp;
          </span>
          <span className="role-duration-value" style={{ color: "white" }}>
            &nbsp;June 2019
          </span>
          <br />
          <span className="role-duration-key" style={{ color: "grey" }}>
            Other Members :&nbsp;
          </span>
          <span className="role-duration-value" style={{ color: "white" }}>
            &nbsp;Harsh Siriah (Developer)
          </span>
        </div>
        <div className="project-subtitles" style={{ color: "white" }}>
          <span>
            <span style={{ color: "gray" }}>G</span>
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
            The player can tap on the rock, paper or scissor icons on the bottom
            of the screen to toggle between those three items. A randomized
            stream of rocks, papers and scissors is showering from above with
            increasing speeds and the player has to combat every item in this
            stream with by choosing its weakness. For every item in the shower
            that the player beats they receive a point. The goal is to achieve a
            highscore.
          </div>
        </div>
        <div className="project-subtitles" style={{ color: "white" }}>
          <span>
            <span style={{ color: "gray" }}>T</span>
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
            <span style={{ color: "gray" }}>C</span>
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
            Tap on the icons at the bottom of the screen.
          </div>
        </div>
        <div className="project-subtitles" style={{ color: "white" }}>
          <span>
            <span style={{ color: "gray" }}>S</span>
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
            The score is shown at the center of the screen so that the player
            does not have to look away from the action as this game can get
            quite intense due to the increasing pace. Having the score in the
            middle of the scrren does not hinder the gameplay as it focal point
            of the action is in the lower half. Additionally the bright white
            rocks, papers and scissors easily stand out over the gray of the
            score,
          </div>
        </div>
        <div className="project-subtitles" style={{ color: "white" }}>
          <span>
            <span style={{ color: "gray" }}>L</span>
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
            Getting hit even once causes a game over.
          </div>
        </div>
        <div className="project-subtitles" style={{ color: "white" }}>
          <span>
            <span style={{ color: "gray" }}>G</span>
            ame&nbsp;
          </span>
          <span>
            <span style={{ color: "gray" }}>O</span>
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
