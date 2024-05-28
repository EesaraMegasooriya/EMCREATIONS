import React from 'react';
import "./Home.css";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Mypic from '../src/assets/me.jpg';

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
              <span style={{ fontWeight: 'bold', color: '#0091ff' }}>{text} </span>
              <span style={{ color: 'red' }}><Cursor cursorStyle='|' /></span>
            </div>
          </div>
        </div>
      </div>

      <div className="hommmainabt">
        <img className='abtmyimghome' src={Mypic} alt="Eesara" />
        <div className='aboutdetails'>
        <div className="homabouttxt">
          I’m Eesara Megasooriya, a passionate full stack developer from SriLanka. I’m currently an undergraduate at SLIIT, where I'm deepening my knowledge in Web Development, specifically learning React Js. I also have a talent for editing videos and have completed several projects in this area. You can contact me for class videos, YouTube videos, or functional video editingsç. I thrive in dynamic environments that allow me to apply my skills and expertise while continuously learning and growing.
        </div>
        <button class="aboutme-animated-button">
          <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
          <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span class="text">More AboutMe</span>
            <span class="circle"></span>
            <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
         <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
        </button>

        </div>
        
      </div>
    </div>
  );
}

export default Home;
