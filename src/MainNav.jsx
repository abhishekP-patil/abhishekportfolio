import React from 'react';
import './css/main-nav.css';

import {Link} from 'react-router-dom';

function MainNav({currentPage, setCurrentPage}) {
  return (
      <div style={{width: '100%',height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'sticky'}}>
          <div className="main-nav" style={{width: '100%', maxWidth: '1440px', height: '100%', display:'flex', justifyContent: 'center',alignItems: 'center', position: 'sticky'}}>
            <div className="nav-name" style={{position:'absolute', left:'50px'}}>
                ABHISHEK PATIL
            </div>
            <Link to="abhishekportfolio/projects" style={{textDecoration: 'none'}}>
            <div className="nav-element" style={{marginRight: '60px', color: `${currentPage === 'abhishekportfolio/projects' ? 'black' : '#5A00ED'}`}} onClick={() => setCurrentPage('abhishekportfolio/projects')}>
                PROJECTS
                <div className="nav-black-bar" style={{visibility: `${currentPage === 'abhishekportfolio/projects' ? 'visible' : 'hidden'}`}}/>
            </div>
            </Link>
            <Link to="/abhishekportfolio" style={{textDecoration: 'none'}}>
            <div className="nav-element" style={{color: `${currentPage === '/abhishekportfolio' ? 'black' : '#5A00ED'}`,}}  onClick={() => setCurrentPage('/abhishekportfolio')}>
                ABOUT
                <div className="nav-black-bar" style={{visibility: `${currentPage === '/abhishekportfolio' ? 'visible' : 'hidden'}`}}/>
            </div>
            </Link>
            <div className="nav-element" style={{marginLeft: '60px', color: `${currentPage === 'Resume' ? 'black' : '#5A00ED'}`}}>
                RESUME
                <div className="nav-black-bar" style={{visibility: `${currentPage === 'Resume' ? 'visible' : 'hidden'}`}}/>
            </div>
        </div>
      </div>
  );
}

export default MainNav;