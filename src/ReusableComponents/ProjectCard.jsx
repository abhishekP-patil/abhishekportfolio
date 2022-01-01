import React from "react";

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
        style={{
          width: "auto",
          height: "auto",
          marginLeft: "6.7%",
          marginRight: "6.7%",
          display: "flex",
          marginTop: "40px",
          flexWrap: "wrap",
          cursor: "pointer",
        }}
        onClick={() => {
          setShowModal(true);
          setModalContentString(contentString);
        }}
      >
        <img
          src={img}
          style={{
            width: "100%",
            maxWidth: "550px",
            marginRight: "6.7%",
            height: "360px",
            marginTop: "20px",
            backgroundColor: "black",
            borderRadius: "50px",
            marginBottom: "20px",
          }}
        />
        <div
          style={{
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: "45px",
            fontFamily: "'Josefin Sans', sans-serif",
            letterSpacing: "0.05em",
            textDecoration: "underline",
            textDecorationColor: "#5A00ED",
          }}
        >
          {title}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
