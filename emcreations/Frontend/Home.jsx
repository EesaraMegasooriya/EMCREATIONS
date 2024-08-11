// Home.jsx
import React from 'react';
import './Home.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import Mypic from '../src/assets/me.jpg';
import MyProjects from '../Frontend/MyProjects'; // Ensure correct import path

function Home() {
  const [text] = useTypewriter({
    words: ['a Youtuber', 'a Developer', 'a Designer', 'a Content Creator', 'an Undergraduate'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div>
      <div className="hommainconal">
        <div className="homemainanimcon">
          <div className="hommaintxt">Hello, It's Eesara.</div>
          <div className="animhomtxtcon">
            <div className="animhomtxtmain">
              I'm {' '}
              <span style={{ fontWeight: 'bold', color: '#0091ff' }}>{text}</span>
              <span style={{ color: 'red' }}><Cursor cursorStyle='|' /></span>
            </div>
          </div>
        </div>
      </div>

      <div className="hommmainabt">
        <img className='abtmyimghome' src={Mypic} alt="Eesara" />
        <div className='aboutdetails'>
          <div className="homabouttxt">
            I’m Eesara Megasooriya, a passionate full stack developer from Sri Lanka. I’m currently an undergraduate at SLIIT, where I'm deepening my knowledge in Web Development, specifically learning React Js. I also have a talent for editing videos and have completed several projects in this area. You can contact me for class videos, YouTube videos, or functional video editings. I thrive in dynamic environments that allow me to apply my skills and expertise while continuously learning and growing.
          </div>

          <div className="cvbtn">
            <a href="https://drive.google.com/file/d/1_eJhd5cYey9VQBFuFoGV_uODt04VVAlk/view?usp=sharing">
              <button className="buttoncv" type="button">
                <span className="button__text">Download CV</span>
                <span className="button__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" className="svg">
                    <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                    <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                    <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                  </svg>
                </span>
              </button>
            </a>
          </div>

          <Link to="/about">
            <button className="aboutme-animated-button">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">More About Me</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
      
      <MyProjects /> 
    </div>
  );
}

export default Home;
