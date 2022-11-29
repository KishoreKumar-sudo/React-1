import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-dark bg-white navbar-expand-lg">
            <a href="/home" className='navbar-brand'>Navbar</a>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                   <li className='navbar-list'><Link to='/'>Home</Link></li> &nbsp;&nbsp;
                   <li className='navbar-list'>About</li> 
                </ul>
            </div>
        </nav>
      </div>
    )
  }
  }


export default Navbar