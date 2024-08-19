// AboutMe.jsx
import React from 'react';
import './AboutMe.css';
import Mybanner from '../src/assets/cropped.jpg';
import Img1 from '../src/assets/imggal/img1.jpeg'
import Img2 from '../src/assets/imggal/img2.jpeg'
import Img3 from '../src/assets/imggal/img3.jpeg'


function AboutMe() {
  return (
    <div>
      

      <div className="banner">
      <img src={Mybanner} alt="Banner" className="banner-image" />
    </div>

      <div className="aboutptitle">About Me</div>

      <div className="aboutmecontainer">
        <div className="aboutmetxts">
      Hello! <br></br>I’m Eesara Megasooriya, a passionate web developer and video editor from Sri Lanka. Currently, I'm an undergraduate at the <b>Sri Lanka Institute of Information Technology (SLIIT)</b>, pursuing a BSc. Hons in Information Technology since 2022. <br/><br/>
      My journey in technology began at Bandaranayake College Gampaha, where I developed a strong foundation in IT. In addition to my academic pursuits, I was actively involved in various extracurricular activities. <br/>I served as<br/> <b>a Super Senior Prefect,<br/>Treasurer of the Computer Science Society,<br/> Secretary of the Buddhist Association,<br/>was a dedicated member of the Scout Troop,<br/>was a dedicated member of Traffic Warden Unit, <br/>was a dedicated member of Technology Society</b>. <br/>These roles helped me develop leadership skills, teamwork, and a commitment to community service. </div>
      
      <br/><br/>
        <div className="imgcontainer1">
       <img className='aboutmeimgs' src={Img1} alt="Eesara" /> 
       <img className='aboutmeimgs' src={Img2} alt="Eesara" /> 
       <img className='aboutmeimgs' src={Img3} alt="Eesara" /> 

       </div>


       <div className="aboutmetxts">
        <br/><br/>
       In 2021, I completed a Diploma in <b>Information Technology</b> at <b>Esoft Metro Campus</b>, where I achieved the distinction of being the <b>batch top</b>. I followed that up with a <b>Diploma in Software Engineering</b> at the same campus in 2022, further expanding my technical expertise.<br/><br/> </div>


       I’m constantly seeking new challenges and opportunities to apply my knowledge and creativity. Let’s connect and build something amazing together!
    </div>



   



    </div>
  );
}

export default AboutMe;
