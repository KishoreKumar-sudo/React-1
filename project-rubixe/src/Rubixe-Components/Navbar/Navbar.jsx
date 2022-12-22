import React from 'react'
import {Link}  from 'react-router-dom'
import homeLogo from '../../Images/logo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
        <nav className='nav'>
          <div className='nav-left'>
          <Link to='/'><img height="200px"src={homeLogo} className='homeLogo' alt="" /></Link>
          </div>
            <ul className='nav-right-list'>
                <li><Link className='li-link' to='/'>HOME</Link></li>
                <li><Link className='li-link'>SERVICES</Link></li>
                <li><Link className='li-link'>PRODUCTS</Link></li>
                <li><Link className='li-link'>AI INTERNSHIP</Link></li>
                <li><Link className='li-link'>CAREER</Link></li>
                <li><Link className='li-link'>BLOG</Link></li>
                <li><Link className='li-link'>ABOUT</Link></li>
                <li><Link className='li-link'>CONTACT US</Link></li>
            </ul>
        </nav>
        </>
  )
}

export default Navbar

