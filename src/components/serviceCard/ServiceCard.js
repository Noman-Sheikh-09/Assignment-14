import React from 'react'
import './ServiceCard.css'
import First from '../../assets/first.png'
export default function ServiceCard() {
  return (
    <div>
        <div className='service-card-white-bg'>
          <img src={First} alt="" className='white-card-img'/>
          <hr  className='hr-line'/>
         <h5 className='service-white-card-title'>Construction</h5>
        </div>
    </div>
  )
}
