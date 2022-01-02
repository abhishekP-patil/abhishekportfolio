import React from "react";
import "./css/main-nav.css";

import { Link } from "react-router-dom";

function MainNav({ currentPage, setCurrentPage }) {
  return (
    <div
      style={{
        width: "100%",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        backgroundColor: "white",
      }}
    >
      <div
        className="main-nav"
        style={{
          width: "100%",
          maxWidth: "1440px",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "sticky",
        }}
      >
        <div
          className="nav-name"
          style={{ position: "absolute", left: "50px" }}
        >
          ABHISHEK PATIL
        </div>
        {/* <Link to="/projects" style={{ textDecoration: "none" }}> */}
        <div
          className="nav-element"
          style={{
            marginRight: "60px",
            color: `${
              currentPage === "abhishekportfolio/projects" ? "black" : "#5A00ED"
            }`,
          }}
          onClick={() => setCurrentPage("abhishekportfolio/projects")}
        >
          PROJECTS
          <div
            className="nav-black-bar"
            style={{
              visibility: `${
                currentPage === "abhishekportfolio/projects"
                  ? "visible"
                  : "hidden"
              }`,
            }}
          />
        </div>
        {/* </Link>
        <Link to="/" style={{ textDecoration: "none" }}> */}
        <div
          className="nav-element"
          style={{
            color: `${
              currentPage === "/abhishekportfolio" ? "black" : "#5A00ED"
            }`,
          }}
          onClick={() => setCurrentPage("/abhishekportfolio")}
        >
          ABOUT
          <div
            className="nav-black-bar"
            style={{
              visibility: `${
                currentPage === "/abhishekportfolio" ? "visible" : "hidden"
              }`,
            }}
          />
        </div>
        {/* </Link> */}
        <a
          className="nav-element"
          href={process.env.PUBLIC_URL + "/assets/pdfs/AbhishekPPatilCV.pdf"}
          target="_blank"
          style={{
            textDecoration: "none",
            marginLeft: "60px",
            color: `${currentPage === "Resume" ? "black" : "#5A00ED"}`,
          }}
        >
          RESUME
          <div
            className="nav-black-bar"
            style={{
              visibility: `${currentPage === "Resume" ? "visible" : "hidden"}`,
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default MainNav;
