import React, { useState } from "react";
import "../css/home-page.css";
import "../css/projects-page.css";

import { Modal } from "react-bootstrap";

import ProjectCard from "../ReusableComponents/ProjectCard";
import LastStand from "../Modals/LastStand";
import JanKenPon from "../Modals/JanKenPon";
import VRHangouts from "./VRHangouts";

function ProjectsPage() {
  const [showModal, setShowModal] = useState(false);
  const [modalContentString, setModalContentString] = useState(null);

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <div
          style={{
            marginTop: "auto",
            width: "100%",
            height: "92%",
            position: "absolute",
            backgroundColor: "white",
            bottom: "0px",
            borderRadius: "50px 50px 0px 0px",
          }}
        >
          {modalContentString === "last-stand" ? (
            <LastStand setModalShow={setShowModal} />
          ) : modalContentString === "jan-ken-pon" ? (
            <JanKenPon setModalShow={setShowModal} />
          ) : (
            modalContentString === "vr-hangouts" && (
              <VRHangouts setModalShow={setShowModal} />
            )
          )}
        </div>
      </Modal>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1440px",
            height: "100%",
            display: "block",
          }}
        >
          <div
            style={{
              marginTop: "40px",
              width: "auto",
              height: "auto",
              display: "block",
            }}
          >
            <div className="heading-div" style={{ fontSize: "60px" }}>
              <span>
                <span style={{ color: "#5A00ED" }}> M</span>
                y&nbsp;
              </span>
              <span>
                <span style={{ color: "#5A00ED" }}> P</span>
                rojects
              </span>
            </div>
            <div
              className="text-div"
              style={{ marginTop: "10px", fontSize: "20px" }}
            >
              Throughout my B.Tech Computer Engineering program I have worked on
              a variety of projects in the fields of&nbsp;
              <span style={{ color: "#5A00ED" }}>videogame</span>
              ,&nbsp;
              <span style={{ color: "#5A00ED" }}>mobile application</span>
              &nbsp;and&nbsp;
              <span style={{ color: "#5A00ED" }}>
                virtual reality application
              </span>
              &nbsp;design and development.
            </div>
            {
              //<div className="projects-container"></div>
            }
            <ProjectCard
              img={
                process.env.PUBLIC_URL +
                "/assets/images/thumbnails/LastStandThumbnail.jpeg"
              }
              title="Last Stand"
              setShowModal={setShowModal}
              setModalContentString={setModalContentString}
              contentString={"last-stand"}
            />
            <ProjectCard
              img={
                process.env.PUBLIC_URL +
                "/assets/images/thumbnails/JKPThumb.jpeg"
              }
              title="Jan Ken Pon"
              setShowModal={setShowModal}
              setModalContentString={setModalContentString}
              contentString={"jan-ken-pon"}
            />
            <ProjectCard
              img={
                process.env.PUBLIC_URL +
                "/assets/images/thumbnails/VRHangouts.png"
              }
              title="VR Hangouts"
              setShowModal={setShowModal}
              setModalContentString={setModalContentString}
              contentString={"vr-hangouts"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
