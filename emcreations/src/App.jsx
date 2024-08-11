// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../Frontend/Home';
import Header from '../Frontend/Header';
import MyProjects from '../Frontend/MyProjects';
import Footer from '../Frontend/Footer';
import AboutMe from '../Frontend/AboutMe';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/home" element={<Home />} />
          <Route path="/EMCreations" element={<Home />} />
          <Route path="/EMCreations/projects" element={<MyProjects />} />
          <Route path="/about" element={<AboutMe />} />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
