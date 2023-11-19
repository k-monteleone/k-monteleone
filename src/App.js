import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkExperience from './components/pages/WorkExperience';
import Education from './components/pages/Education';
import Hobbies from './components/pages/Hobbies';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/WorkExperience' element={<WorkExperience/>} />
          <Route path='/Education' element={<Education/>} />
          <Route path='/Hobbies' element={<Hobbies/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
