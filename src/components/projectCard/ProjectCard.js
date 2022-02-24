import React from 'react'
import './ProjectCard.css'
import BlackBuilding from '../../assets/blackbuilding.png'
export default function ProjectCard() {
  return (
    <div>
        <div className='project-card'>
<img src={BlackBuilding} alt="" className='black-img'/>
<div className='project-card-bg'>
<p className='project-card-title'>Wildstone Infra Hotel</p>
<p className='project-card-subtitle'>2715 Ash Dr. San Jose, South Dakota</p>
        </div>
        </div>
    </div>
  )
}
