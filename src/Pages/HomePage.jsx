import React from "react";
import "../css/home-page.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaLinkedinIn, FaLinkedin } from "react-icons/fa";

function HomePage() {
  return (
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
          paddingLeft: "6.5%",
          paddingRight: "6.5%",
          paddingBottom: "150px",
        }}
      >
        <div style={{ height: "80px" }} />
        <div
          style={{
            marginTop: "5%",
            width: "100%",
            height: "600px",
            display: "block",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src={
              process.env.PUBLIC_URL + "/assets/images/ezgif-2-4200ec037a.gif"
            }
            alt="hello"
            style={{ width: "92.5%", height: "auto", marginLeft: "-2%" }}
          />
          <div
            style={{
              marginTop: "40px",
              width: "auto",
              height: "auto",
              display: "block",
            }}
          >
            <div className="heading-div">
              I'm&nbsp;
              <span>
                <span style={{ color: "#5A00ED" }}> A</span>
                bhishek&nbsp;
              </span>
              <span>
                <span style={{ color: "#5A00ED" }}> P</span>
                atil
              </span>
            </div>
            <div className="text-div" style={{ fontSize: "40px" }}>
              A&nbsp;
              <span style={{ color: "#5A00ED" }}>developer</span>, a&nbsp;
              <span style={{ color: "#5A00ED" }}>designer</span>
              &nbsp;and a&nbsp;
              <span style={{ color: "#5A00ED" }}>linguist</span>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            marginTop: "5%",
            color: "#5A00ED",
            fontSize: "50px",
            opacity: "0.3",
            zIndex: "-1",
          }}
        >
          <p>
            <IoIosArrowDown />
          </p>
        </div>
        <div
          className="heading-div"
          style={{ fontSize: "60px", marginTop: "10%" }}
        >
          <span>
            <span style={{ color: "#5A00ED" }}>A</span>
            bout&nbsp;
          </span>
          <span>
            <span style={{ color: "#5A00ED" }}>M</span>e
          </span>
        </div>
        <div
          style={{
            marginTop: "10px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            height: "auto",
            flexWrap: "wrap",
          }}
        >
          <div className="about-me-text">
            <span>
              I am an aspiring{" "}
              <span style={{ color: "#5A00ED" }}>developer</span> and{" "}
              <span style={{ color: "#5A00ED" }}>designer</span> who wants to
              build a career that integrates{" "}
              <span style={{ color: "#5A00ED" }}>
                technology with creativity
              </span>
              . I excel at rapidly learning on the go and can familiarize myself
              with new concepts and technologies as required by an assignment. I
              work well in multicultural and multinational teams and can adjust
              well with different time zones and remote work.
            </span>
            <br />
            <span>
              I am also a linguaphile and enjoy learning new languages as I feel
              they act as windows to their respective cultures. I am fluent at{" "}
              <span style={{ color: "#5A00ED" }}>
                English, Marathi and Hindi
              </span>
              . I am also currently pursuing the third level (JLPT N3) of{" "}
              <span style={{ color: "#5A00ED" }}>Japanese</span> and the second
              level (A2) of <span style={{ color: "#5A00ED" }}>German</span>.
            </span>
            <br />
            <a
              href="https://www.linkedin.com/in/abhishek-patil-og/"
              target="_blank"
              style={{ color: "#5A00ED", fontSize: "30px" }}
            >
              <FaLinkedin />
            </a>
          </div>
          <img
            className="me-image"
            src={process.env.PUBLIC_URL + "/assets/images/me.jpeg"}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
