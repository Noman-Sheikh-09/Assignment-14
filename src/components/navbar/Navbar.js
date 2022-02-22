import React from 'react'
import './navbarStyle.css'

export default function Navbar() {
  return (
    <div>
    <header className='header-nav'>
     <div className='logo-side'>
               <img src='./assets/Logo.png' className='Logo-navbar' />
           </div>
           <nav>
               <ul>
                   <li><a href='#' className='home'>Home</a></li>
                   <li><a href='#' className='about'>About us</a></li>
                   <li><a href='#' className='feature'>Projects</a></li>
                   <li><a href='#' className='feature'>Services</a></li>
                   <li><a href='#' className='contact'>Contact</a></li>
               </ul>
              
           </nav>
        
           </header> 
        </div>
  )
}
