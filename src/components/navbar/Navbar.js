import React from 'react'
import './navbarStyle.css'

export default function Navbar() {
  return (
    <div>
    <nav>
      <div className='logo-part'>
        <img src="./assets/logo.png" alt=""  className='logo-navbar'/>
        <h1 className='logo-heading'>The Box</h1>
        </div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Projects</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
     
    </nav>
        </div>
  )
}
