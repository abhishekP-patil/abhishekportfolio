import React from "react";
import '../css/project-modals.css';

function LastStand(){
    return(
        <>
        <div style={{width:'100%', height: '100%',backgroundColor:'black', borderRadius: '50px 50px 0px 0px', paddingTop:'50px', overflow:'scroll'}}>
            <div className="heading-div" style={{fontSize:'80px', color: 'white'}}>
                <span style={{color:'#00f1f2'}}>L</span>
                ast&nbsp;
                <span style={{color:'#00f1f2'}}>S</span>
                tand
            </div>
            <div className="introduction" style={{color:'#00f1f2'}}>
                Last Stand is a hyper-casual smartphone game where the player play to save the Earth from a devastating meteor shower. The player controls a shield that can rotate clockwise and anticlockwise around the Earth and is the last line of defense against this calamity.
            </div>
            <div className="project-subtitles" style={{color:'white'}}>
                <span style={{color:'#00f1f2'}}>C</span>
                utscene&nbsp;
            </div>
            <div className="project-sub-container">
                <img src={process.env.PUBLIC_URL + '/assets/images/laststand/LastStandCutscene.gif'} className="project-sub-image-mobile" />
                <div className="project-sub-text" style={{color:'white'}}>
                    The opening cutscene shows a massive asteroid taking out 3/4th of the Earth's defenses. Its main purpose is to provide context to the events of the game.
                </div>
            </div>
        </div>
        </>
    )
}

export default LastStand;