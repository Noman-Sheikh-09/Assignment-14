import React from 'react'
import './BlueCard.css'
import Two from '../../assets/two.png'
export default function BlueCard() {
  return (
    <div>
        <div className='service-blue-card-bg'>
<img src={Two} alt=""  className='service-blue-card-img'/>
<hr  className='hr-line-blue'/>
<h5 className='service-blue-card-title'>Renovation</h5>
        </div>
    </div>
  )
}



