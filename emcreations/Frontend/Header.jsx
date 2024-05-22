import React from 'react'
import './Header.css'
import Logo from '../src/assets/E-tra.png'

function Header() {
  return (
    <div>
<div className="headermaincon">
    <div className="headerlogo">
      <img src={Logo} className='Headerlogoclass'></img>
    </div>
    <div className="Headermaintextlogo">EMCREATIONS</div>
    <div className="Headerrightside">
        Home
        AboutUs
    </div>
   
</div>


    </div>
  )
}

export default Header