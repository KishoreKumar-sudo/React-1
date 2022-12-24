import React from 'react'
import './InitiativeCard.css'
import cardImg1 from '../../Images/card-1.jpg'
import cardImg2 from '../../Images/card-2.jpg'
import cardImg3 from '../../Images/card-3.jpg'
import cardImg4 from '../../Images/card-4.jpg'
import cardImg5 from '../../Images/card-5.jpg'
const InitiativeCard = () => {
  return <>
   <div className="card-div">
      <div><h1>TECH FOR TEENS -A RUBIXE Ⓡ INITIATIVE</h1></div>
      <div className='card-content'>

        <div className='card-1'>

          <div className="card-head radius-top" style={{ backgroundColor: '#1d2d60' }}>
            <div className="card-circle up"><h3 style={{color:'#1d2d60'}}>01</h3></div>
          </div>
          <div className="card-body">
            <img src={cardImg1} alt="" />
            <div className='card-text'> Introducing Al to children in an age appropriate manner.</div>
          </div>
          <div className="card-tail"></div>
        </div>

        <div className='card-2'>
          <div className="card-tail"></div>
          <div className="card-body">
            <div className='card-text'> Gain awareness on Al and build an interactive story around it</div>
            <img src={cardImg2} alt="" />
          </div>
          <div className="card-head radius-bottom card-head-down" style={{ backgroundColor: '#9d2057' }}><div className="card-circle down"><h3 style={{color:'#9d2057'}}>02</h3></div></div>
        </div>
        <div className='card-1'>
          <div className="card-head radius-top" style={{ backgroundColor: '#e35e13' }}><div className="card-circle up"><h3 style={{color:'#e35e13'}}>03</h3></div></div>
          <div className="card-body">
            <img src={cardImg3} alt="" />
            <div className='card-text'> Acquire programming skills in a user-friendly format</div>
          </div>          
          <div className="card-tail"></div>
        </div>
        <div className='card-2'>
          <div className="card-tail"></div>
          <div className="card-body">
            <div className='card-text'> Exposure to mini projects on diverse topics</div>
            <img src={cardImg4} alt="" />
          </div>          
          <div className="card-head radius-bottom card-head-down" style={{ backgroundColor: '#195b37' }}><div className="card-circle down"><h3 style={{color:'#195b37'}}>04</h3></div></div>
        </div>
        <div className='card-1'>
          <div className="card-head radius-top" style={{ backgroundColor: '#b77d33' }}><div className="card-circle up"><h3 style={{color:'#b77d33'}} >05</h3></div></div>
          <div className="card-body">
            <img src={cardImg5} alt="" />
            <div className='card-text'> Train the teachers programme</div>
          </div>          
          <div className="card-tail"></div>
        </div>
      </div>
    </div>
  </>
}
export default InitiativeCard