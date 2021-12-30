import React, {useState} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Modal } from 'react-bootstrap';

import MainNav from './MainNav';
import HomePage from './Pages/HomePage';
import ProjectsPage from './Pages/ProjectsPage';

function App() {
  const [currentPage, setCurrentPage] = useState();

  return (
    <BrowserRouter basename='/abhishekportfolio'>
      <div>
        <MainNav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <Routes>
          <Route path='/' exact element={<HomePage currentPage={currentPage}/>}/>
          <Route path='/projects' exact element={<ProjectsPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
