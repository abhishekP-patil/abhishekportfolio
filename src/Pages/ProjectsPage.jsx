import React, { useState } from "react";
import "../css/home-page.css";
import "../css/projects-page.css";

import { Modal } from "react-bootstrap";

import ProjectCard from "../ReusableComponents/ProjectCard";
import LastStand from "../Modals/LastStand";
import JanKenPon from "../Modals/JanKenPon";
import VRHangouts from "./VRHangouts";
import Spreecommerce from "./Spreecommerce";
import SandwichApp from "../Modals/SandwichApp";
import Portfolio from "../Modals/Portfolio";

function ProjectsPage() {
  const [showModal, setShowModal] = useState(false);
  const [modalContentString, setModalContentString] = useState(null);
  const [currentPage, setCurrentPage] = useState("all");

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
          ) : modalContentString === "vr-hangouts" ? (
            <VRHangouts setModalShow={setShowModal} />
          ) : modalContentString === "sandwich-app" ? (
            <SandwichApp setModalShow={setShowModal} />
          ) : modalContentString === "portfolio" ? (
            <Portfolio setModalShow={setShowModal} />
          ) : (
            modalContentString === "spree-commerce" && (
              <Spreecommerce setModalShow={setShowModal} />
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
            paddingBottom: "150px",
            overflowX: "hidden",
          }}
        >
          <div style={{ height: "80px" }} />
          <div
            style={{
              marginTop: "40px",
              width: "auto",
              height: "auto",
              display: "block",
            }}
          >
            <div
              className="heading-div"
              style={{ fontSize: "60px", marginLeft: "6.7%" }}
            >
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
              style={{
                marginTop: "10px",
                fontSize: "20px",
                marginLeft: "6.7%",
              }}
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
            <div
              className="main-nav"
              style={{
                width: "400px",
                maxWidth: "1440px",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
                marginLeft: "auto",
                marginRight: "auto",
                backgroundColor: "#5A00ED",
                height: "40px",
                paddingTop: "10px",
                borderRadius: "50px",
                marginTop: "50px",
              }}
            >
              <div
                className="nav-element"
                style={{
                  marginRight: "30px",
                  backgroundColor: `${currentPage === "all" ? "white" : ""}`,
                  height: `${currentPage === "all" ? "20px" : ""}`,
                  paddingLeft: `${currentPage === "all" ? "5px" : ""}`,
                  paddingRight: `${currentPage === "all" ? "5px" : ""}`,
                  borderRadius: `${currentPage === "all" ? "50px" : ""}`,
                  color: `${currentPage === "all" ? "black" : "white"}`,
                }}
                onClick={() => setCurrentPage("all")}
              >
                ALL
                {/* <div
                  className="nav-black-bar"
                  style={{
                    visibility: `${
                      currentPage === "all" ? "visible" : "hidden"
                    }`,
                  }}
                /> */}
              </div>
              {/* </Link>
    <Link to="/" style={{ textDecoration: "none" }}> */}
              <div
                className="nav-element"
                style={{
                  backgroundColor: `${currentPage === "vr" ? "white" : ""}`,
                  height: `${currentPage === "vr" ? "20px" : ""}`,
                  paddingLeft: `${currentPage === "vr" ? "5px" : ""}`,
                  paddingRight: `${currentPage === "vr" ? "5px" : ""}`,
                  borderRadius: `${currentPage === "vr" ? "50px" : ""}`,
                  color: `${currentPage === "vr" ? "black" : "white"}`,
                }}
                onClick={() => setCurrentPage("vr")}
              >
                VR
                {/* <div
                  className="nav-black-bar"
                  style={{
                    visibility: `${
                      currentPage === "vr" ? "visible" : "hidden"
                    }`,
                  }}
                /> */}
              </div>
              <div
                className="nav-element"
                style={{
                  marginLeft: "30px",
                  backgroundColor: `${currentPage === "games" ? "white" : ""}`,
                  height: `${currentPage === "games" ? "20px" : ""}`,
                  paddingLeft: `${currentPage === "games" ? "5px" : ""}`,
                  paddingRight: `${currentPage === "games" ? "5px" : ""}`,
                  borderRadius: `${currentPage === "games" ? "50px" : ""}`,
                  color: `${currentPage === "games" ? "black" : "white"}`,
                }}
                onClick={() => setCurrentPage("games")}
              >
                GAMES
                {/* <div
                  className="nav-black-bar"
                  style={{
                    visibility: `${
                      currentPage === "games" ? "visible" : "hidden"
                    }`,
                  }}
                /> */}
              </div>
              <div
                className="nav-element"
                style={{
                  marginLeft: "30px",
                  backgroundColor: `${currentPage === "uiux" ? "white" : ""}`,
                  height: `${currentPage === "uiux" ? "20px" : ""}`,
                  paddingLeft: `${currentPage === "uiux" ? "5px" : ""}`,
                  paddingRight: `${currentPage === "uiux" ? "5px" : ""}`,
                  borderRadius: `${currentPage === "uiux" ? "50px" : ""}`,
                  color: `${currentPage === "uiux" ? "black" : "white"}`,
                }}
                onClick={() => setCurrentPage("uiux")}
              >
                UI/UX
                {/* <div
                  className="nav-black-bar"
                  style={{
                    visibility: `${
                      currentPage === "uiux" ? "visible" : "hidden"
                    }`,
                  }}
                /> */}
              </div>
              <div
                className="nav-element"
                style={{
                  marginLeft: "30px",
                  backgroundColor: `${currentPage === "web" ? "white" : ""}`,
                  height: `${currentPage === "web" ? "20px" : ""}`,
                  paddingLeft: `${currentPage === "web" ? "5px" : ""}`,
                  paddingRight: `${currentPage === "web" ? "5px" : ""}`,
                  borderRadius: `${currentPage === "web" ? "50px" : ""}`,
                  color: `${currentPage === "web" ? "black" : "white"}`,
                }}
                onClick={() => setCurrentPage("web")}
              >
                WEB
                {/* <div
                  className="nav-black-bar"
                  style={{
                    visibility: `${
                      currentPage === "uiux" ? "visible" : "hidden"
                    }`,
                  }}
                /> */}
              </div>
            </div>
            {(currentPage == "all" || currentPage == "vr") && (
              <ProjectCard
                img={
                  process.env.PUBLIC_URL +
                  "/assets/images/thumbnails/VRHangouts.png"
                }
                title="VR Hangouts"
                intro="A virtual reality, realtime meeting application."
                tech="Unity3D, Google Cardboard, Photon PUN 2, Unity Multipurpose Avatars"
                setShowModal={setShowModal}
                setModalContentString={setModalContentString}
                contentString={"vr-hangouts"}
              />
            )}
            {(currentPage == "all" || currentPage == "uiux") && (
              <ProjectCard
                img={
                  process.env.PUBLIC_URL +
                  "/assets/images/thumbnails/sandwich3.png"
                }
                title="Nutrition App for Sandwich Shop"
                intro="A UX design project being completed as an assignment for the Google UX design course on Coursera. This project is ONGOING."
                tech="Figma"
                setShowModal={setShowModal}
                setModalContentString={setModalContentString}
                contentString={"sandwich-app"}
              />
            )}
            {(currentPage == "all" || currentPage == "games") && (
              <ProjectCard
                img={
                  process.env.PUBLIC_URL +
                  "/assets/images/thumbnails/LastStandThumbnail.jpeg"
                }
                title="Last Stand"
                intro="A 2D hyper-casual mobile game about saving the earth from asteroids."
                tech="Unity3D, Adobe Photoshop"
                setShowModal={setShowModal}
                setModalContentString={setModalContentString}
                contentString={"last-stand"}
              />
            )}
            {(currentPage == "all" || currentPage == "games") && (
              <ProjectCard
                img={
                  process.env.PUBLIC_URL +
                  "/assets/images/thumbnails/JKPThumb.jpeg"
                }
                title="Jan Ken Pon"
                intro="A 2D hyper-casual mobile game based on rock-paper-scissors."
                tech="Unity3D, Adobe Photoshop"
                setShowModal={setShowModal}
                setModalContentString={setModalContentString}
                contentString={"jan-ken-pon"}
              />
            )}
            {(currentPage == "all" || currentPage == "web") && (
              <ProjectCard
                img={
                  process.env.PUBLIC_URL +
                  "/assets/images/thumbnails/spreecommerce.png"
                }
                title="E-commerce Website"
                intro="An e-commerce website developed for International Week Hackathon at Hof University of Applied Sciences. It won the highest grade."
                tech="ReactJS, HTML, CSS, Fastify, MongoDB"
                setShowModal={setShowModal}
                setModalContentString={setModalContentString}
                contentString={"spree-commerce"}
              />
            )}
            {(currentPage == "all" || currentPage == "web") && (
              <ProjectCard
                img={
                  process.env.PUBLIC_URL +
                  "/assets/images/thumbnails/portfolio.png"
                }
                title="Portfolio Website"
                intro="A website showcasing my projects and a little bit about me."
                tech="ReactJS, HTML, CSS"
                setShowModal={setShowModal}
                setModalContentString={setModalContentString}
                contentString={"portfolio"}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
