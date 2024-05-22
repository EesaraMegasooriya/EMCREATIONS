import React from 'react';
import "./Home.css"
import {useTypewriter, Cursor} from 'react-simple-typewriter';

function Home() {
  const [text] = useTypewriter({
  words: ['Youtuber', 'Devoloper', 'Designer', 'Content Creator', 'Undergraduate'],
  loop: {},
    typeSpeed:120,
    deleteSpeed:80,
  });


  return (
    <div>

      <div className="homemainanimcon">
        
      <div className="hommaintxt">Hello,
        It's Eesara.</div>
      <div className="animhomtxtcon">
        <div className="animhomtxtmain">
        I'm a {' '}
        <span style={{fontWeight:'bold' , color: '#0091ff'}}>{text} </span>
        <span style={{color:'red'}}><Cursor cursorStyle='|'/></span>
        
        </div>
      </div>

      </div>


    </div>
  )
}

export default Home