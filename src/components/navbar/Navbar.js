import React from 'react'
import './navbarStyle.css'

export default function Navbar() {
  return (
    <div>
    <nav>
      <div className='logo-part'>
        <img src="./assets/logo.png" alt=""  className='logo-navbar'/>
        <h1 className='logo-heading'>TheBox</h1>
        </div>
        <ul>
          <li><a href="#">Home</a> </li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
     
    </nav>
        </div>
  )
}
