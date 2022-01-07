import React from "react";
import { ImCross } from "react-icons/im";
import "../css/project-modals.css";

function VRHangouts({ setModalShow }) {
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
            <span style={{ color: "#5a00ed" }}>V</span>
            R&nbsp;
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>H</span>
            angouts
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
          During the peak of the Covid-19 pandemic, when all professional and
          casual meetings had to be held through video calling applications,
          however a shortcoming of video based technologies is that they can
          lack immersion. I focused my B.Tech project on remedying this issue by
          using Virtual Reality, 3D Avatar Customisation and voice chat for
          providing users with interactive 3D environments for hosting their
          meetings.
        </div>
        <div style={{ marginTop: "20px" }}>
          <span className="role-duration-key" style={{ color: "#5a00ed" }}>
            Role :&nbsp;
          </span>
          <span className="role-duration-value" style={{ color: "black" }}>
            &nbsp;Designer, Software Architect, Programmer (Virtual Reality
            primary)
          </span>
          <br />
          <span className="role-duration-key" style={{ color: "#5a00ed" }}>
            Time Frame :&nbsp;
          </span>
          <span className="role-duration-value" style={{ color: "black" }}>
            &nbsp;Winter 2020
          </span>
          <br />
          <span className="role-duration-key" style={{ color: "#5a00ed" }}>
            Other Members :&nbsp;
          </span>
          <span className="role-duration-value" style={{ color: "black" }}>
            &nbsp;Harsh Siriah (Designer, Software Architect, Programmer (Voice
            Chat primary))
          </span>
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>O</span>
            bjective&nbsp;
          </span>
        </div>
        <div
          className="introduction"
          style={{ color: "black", marginTop: "0px" }}
        >
          <span>
            We wanted to provide users with traversable 3D environments so that
            the feel of being in the same room could be mirrored. We also wanted
            elements of the environment to be interactive accross the server so
            that players could get the feeling of simultaneously being present
            in the same place. Moreover, we wished to provide players with
            options of how they wanted to be represented so that they can
            maintain there sence of individuality. Based on this we defined our
            project scope.
          </span>
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>P</span>
            roject&nbsp;
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>S</span>
            cope&nbsp;
          </span>
        </div>
        <div
          className="introduction"
          style={{ color: "black", marginTop: "0px" }}
        >
          <span>
            <span style={{ color: "#5a00ed" }}>1.&nbsp;</span>Users should be
            able to have custom made 3D avatars that they can use in the virtual
            environment.
            <br />
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>2.&nbsp;</span>Users should be
            able to interact with each other in a virtual room using voice chat.
            <br />
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>3.&nbsp;</span>Users should be
            able to interact with objects in the virtual environment with
            virtual reality gear.
          </span>
        </div>
        <div className="project-sub-container">
          <img
            className="image-center"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/vrhangouts/overviewusecase.png"
            }
          />
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
            <span style={{ color: "#5a00ed" }}>Google cardboard :&nbsp;</span>
            The most affordable Virtual Reality headset.
            <br />
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>Unity 3D :&nbsp;</span>For
            rendering 3D environments and programming thet physics and
            interactions.
            <br />
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>Photon PUN2 :&nbsp;</span>A
            plugin that is used for multiplayer room creation.
          </span>
          <br />
        </div>
        <div
          className="introduction"
          style={{ color: "black", marginTop: "0px" }}
        >
          <span>
            <span style={{ color: "#5a00ed" }}>UMA :&nbsp;</span>A plugin that
            is used for 3D avatar generation.
          </span>
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>F</span>
            low&nbsp;
          </span>
        </div>
        <div className="project-sub-container">
          <img
            className="image-center"
            src={
              process.env.PUBLIC_URL + "/assets/images/vrhangouts/flowchart.png"
            }
            style={{ width: "80%" }}
          />
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>C</span>
            reating&nbsp;
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>M</span>
            eetings&nbsp;
          </span>
        </div>
        <div className="project-sub-container">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/vrhangouts/gifs/homescreen.gif"
            }
            className="project-sub-image-pc"
          />
          <div className="project-sub-text-pc" style={{ color: "black" }}>
            <span style={{ color: "#5a00ed", fontSize: "25px" }}>
              Usernames
            </span>
            <br />
            For every meeting users can set their own nickname that will be
            visible over their avatars in the meeting room.
          </div>
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/vrhangouts/gifs/roomcreation.gif"
            }
            className="project-sub-image-pc"
          />
          <div className="project-sub-text-pc" style={{ color: "black" }}>
            <span style={{ color: "#5a00ed", fontSize: "25px" }}>
              Meeting Creation Menu
            </span>
            <br />
            Users can specify a room size and choose an environment that would
            best suit their meeting.
          </div>
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/vrhangouts/gifs/playerjoining.gif"
            }
            className="project-sub-image-pc"
          />
          <div className="project-sub-text-pc" style={{ color: "black" }}>
            <span style={{ color: "#5a00ed", fontSize: "25px" }}>
              Starting a Meeting
            </span>
            <br />A unique code is generated everytime a meeting is created and
            the meeting creator can view how many people join the meeting.
          </div>
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/vrhangouts/gifs/roomjoining.gif"
            }
            className="project-sub-image-pc"
          />
          <div className="project-sub-text-pc" style={{ color: "black" }}>
            <span style={{ color: "#5a00ed", fontSize: "25px" }}>
              Joining a Meeting
            </span>
            <br />
            Participants need to enter the unique code to join the meeting.
          </div>
          <div
            className="introduction"
            style={{ color: "black", marginTop: "0px" }}
          >
            <span>
              The users can choose their own nickname, choose room size and
              choose an environment and instantly create a meeting with a unique
              code. For joining the meeting, all other participants need to do
              is choose a nickname and enter the unique code.{" "}
              <span style={{ color: "#5a00ed" }}>
                The process was intentionally kept simple and it was ensured
                that least amount of steps need to be taken to get into a
                meeting.
              </span>
            </span>
          </div>
          <div className="project-sub-container">
            <img
              className="image-center"
              src={
                process.env.PUBLIC_URL +
                "/assets/images/vrhangouts/roomcreationusecase.png"
              }
            />
            <br />
            <div className="image-subtext" style={{ color: "#5a00ed" }}>
              Meeting Creation UseCase Diagram
            </div>
            <img
              className="image-center"
              src={
                process.env.PUBLIC_URL +
                "/assets/images/vrhangouts/roomcreationactivity.png"
              }
            />
            <br />
            <div className="image-subtext" style={{ color: "#5a00ed" }}>
              Meeting Creation Activity Diagram
            </div>
            <img
              className="image-center"
              src={
                process.env.PUBLIC_URL +
                "/assets/images/vrhangouts/roomjoiningusecase.png"
              }
            />
            <br />
            <div className="image-subtext" style={{ color: "#5a00ed" }}>
              Joining a Meeting UseCase Diagram
            </div>
            <img
              className="image-center"
              src={
                process.env.PUBLIC_URL +
                "/assets/images/vrhangouts/roomjoiningactivity.png"
              }
            />
            <br />
            <div className="image-subtext" style={{ color: "#5a00ed" }}>
              Joining a Meeting Activity Diagram
            </div>
          </div>
          <div className="project-subtitles" style={{ color: "black" }}>
            <span>
              <span style={{ color: "#5a00ed" }}>A</span>
              vatar&nbsp;
            </span>
            <span>
              <span style={{ color: "#5a00ed" }}>C</span>
              ustomization&nbsp;
            </span>
          </div>
        </div>
        <div className="project-sub-container">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/vrhangouts/gifs/avatarcustomization.gif"
            }
            className="project-sub-image-pc"
          />
          <div className="project-sub-text-pc" style={{ color: "black" }}>
            <span style={{ color: "#5a00ed", fontSize: "25px" }}>
              Customizable Avatars
            </span>
            <br />
            Users can customize their sex, bellyfat, hairstyle, facial hair as
            well as skin and hair colors.
          </div>
        </div>
        <div className="project-sub-container">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/vrhangouts/gifs/wardrobecustomization.gif"
            }
            className="project-sub-image-pc"
          />
          <div className="project-sub-text-pc" style={{ color: "black" }}>
            <span style={{ color: "#5a00ed", fontSize: "25px" }}>
              Customizable Wardrobe
            </span>
            <br />
            Users can also customize their wardrobe with preset clothing
            options.
          </div>
          <div
            className="introduction"
            style={{ color: "black", marginTop: "0px" }}
          >
            <span>
              The users have vast range of options to create a variety of unique
              looks
              <span style={{ color: "#5a00ed" }}>
                This has been added to boost user engagement by allowing users
                to better express and represent themselves.
              </span>
            </span>
          </div>
          <img
            className="image-center"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/vrhangouts/avatarcustomization.png"
            }
          />
          <br />
          <div className="image-subtext" style={{ color: "#5a00ed" }}>
            Avatar Customization UseCase Diagram
          </div>
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>M</span>
            aps&nbsp;
          </span>
        </div>
        <div
          className="introduction"
          style={{ color: "black", marginTop: "0px" }}
        >
          <span>
            The users can choose between three 3D virtual environments.
            <span style={{ color: "#5a00ed" }}>
              This was done to aid immersion as different people have different
              definitions of an ideal meeting place. It also opens opportunities
              for adding outlandish environments that would not be possible or
              practical in the real world.
            </span>
          </span>
        </div>
        <div className="project-sub-container">
          <img
            src={
              process.env.PUBLIC_URL + "/assets/images/vrhangouts/gifs/map1.gif"
            }
            className="project-sub-image-pc"
          />
          <div className="project-sub-text-pc" style={{ color: "black" }}>
            <span style={{ color: "#5a00ed", fontSize: "25px" }}>
              A Sleek Futuristic Map
            </span>
          </div>
        </div>
        <div className="project-sub-container">
          <img
            src={
              process.env.PUBLIC_URL + "/assets/images/vrhangouts/gifs/map2.gif"
            }
            className="project-sub-image-pc"
          />
          <div className="project-sub-text-pc" style={{ color: "black" }}>
            <span style={{ color: "#5a00ed", fontSize: "25px" }}>
              A Furnished Office Space
            </span>
          </div>
        </div>
        <div className="project-sub-container">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/vrhangouts/map3.png"}
            className="project-sub-image-pc"
          />
          <div className="project-sub-text-pc" style={{ color: "black" }}>
            <span style={{ color: "#5a00ed", fontSize: "25px" }}>
              An Outdoor Grassy Field
            </span>
          </div>
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>E</span>
            nvironmental&nbsp;
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>T</span>
            raversal&nbsp;
          </span>
        </div>
        <div
          className="introduction"
          style={{ color: "black", marginTop: "0px" }}
        >
          <span>
            The users need to gaze to the yellow waypoints and press the Gogle
            Cardboard button located throughout the maps.
            <span style={{ color: "#5a00ed" }}>
              This was done as Google Cardboard only has one button and to keep
              the price affordable for as many people as possible we did not
              want to use any additional devices like controllers.
            </span>
          </span>
        </div>
        <div className="project-sub-container">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/vrhangouts/gifs/waypoint.gif"
            }
            className="project-sub-image-pc"
          />
          <div className="project-sub-text-pc" style={{ color: "black" }}>
            <span style={{ color: "#5a00ed", fontSize: "25px" }}>
              Moving About
            </span>
            <br />
            Gaze on the yellow waypoint at the position you want to move to and
            click the Google Cardboard button to float there.
          </div>
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>R</span>
            ealtime&nbsp;
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>E</span>
            nvironmental&nbsp;
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>I</span>
            nteractions&nbsp;
          </span>
        </div>
        <div
          className="introduction"
          style={{ color: "black", marginTop: "0px" }}
        >
          <span>
            In the 1st map there is a VR multiplayer Tic Tac Toe game that can
            be played in realtime by all the participants of the meetings.
            <span style={{ color: "#5a00ed" }}>
              Social minigames like this allow for social hangouts to feel more
              engaging and also boosts the social aspects of the meet.
            </span>
            The 2nd map contains doors that can open and close which are synched
            across the server.
            <span style={{ color: "#5a00ed" }}>
              This boosts the immersion as it shows that the other
              participantsin the meeting are influencing your environment.
            </span>
          </span>
        </div>
        <div className="project-sub-container">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/vrhangouts//gifs/tictactoe.gif"
            }
            className="project-sub-image-pc"
          />
          <div className="project-sub-text-pc" style={{ color: "black" }}>
            <span style={{ color: "#5a00ed", fontSize: "25px" }}>
              Multiplayer VR Minigame
            </span>
            <br />
            Participants of the meeting can play a VR multiplayer Tic-Tac-Toe
            game.
          </div>
        </div>
        <div className="project-sub-container">
          <img
            src={
              process.env.PUBLIC_URL + "/assets/images/vrhangouts/gifs/door.gif"
            }
            className="project-sub-image-pc"
          />
          <div className="project-sub-text-pc" style={{ color: "black" }}>
            <span style={{ color: "#5a00ed", fontSize: "25px" }}>
              Realtime Environmental Interactions
            </span>
            <br />
            Participants can open and close doors which get synched across the
            server.
          </div>
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>F</span>
            uture&nbsp;
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>S</span>
            cope&nbsp;
          </span>
        </div>
        <div
          className="introduction"
          style={{ color: "black", marginTop: "0px" }}
        >
          <span>
            <span style={{ color: "#5a00ed" }}>1.&nbsp;</span>Creating better
            and more varied avatar animations.
            <br />
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>2.&nbsp;</span>Providing more
            interactivity within the virtual environments and adding more
            virtual environments.
            <br />
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>3.&nbsp;</span>Including more
            social interactivity with more minigames.
            <br />
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>4.&nbsp;</span>Making the
            application compatible with IOS devices.
            <br />
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>5.&nbsp;</span>Designing better
            user interfaces.
            <br />
          </span>
        </div>
      </div>
    </>
  );
}

export default VRHangouts;
