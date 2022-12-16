import React from 'react'
import './Home.css'
import node from '../../assets/images/node.gif'
import react from '../../assets/images/react.gif'
const Home = () => {
  
  return<>
  <div id="homeContainer">
    <div id="word">
      <div className="container">
        <div className="row" id='row'>
          <center><h1>Electronic Gadget Hub</h1></center>
        </div>
        <div className="row">
          <img src={node} height="250px" alt="" />
          <img src={react} height="250px" alt="" />
        </div>
      </div>
    </div>
  </div>
  </>
}

export default Home