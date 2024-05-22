import React from 'react';
import "./Home.css";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Mypic from './me.jpg';

function Home() {
  const [text] = useTypewriter({
    words: ['Youtuber', 'Developer', 'Designer', 'Content Creator', 'Undergraduate'],
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
              I'm a{' '}
              <span style={{ fontWeight: 'bold', color: '#0091ff' }}>{text} </span>
              <span style={{ color: 'red' }}><Cursor cursorStyle='|' /></span>
            </div>
          </div>
        </div>
      </div>

      <div className="hommmainabt">
        <img className='abtmyimghome' src={Mypic} alt="Eesara" />
        <div className="homabouttxt">
          I’m Eesara Megasooriya, a passionate frontend developer from SriLanka. I’m currently an undergraduate at SLIIT, where I'm deepening my knowledge in Web Development, specifically learning React Js. I also have a talent for editing videos and have completed several projects in this area. You can contact me for class videos, YouTube videos, or functional video editing. I thrive in dynamic environments that allow me to apply my skills and expertise while continuously learning and growing.
        </div>
      </div>
    </div>
  );
}

export default Home;
