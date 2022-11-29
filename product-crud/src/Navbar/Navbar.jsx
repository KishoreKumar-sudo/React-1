import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark text-white navbar-expand-lg">
                <Link to='/' className='navbar-brand'>Product-CRUD</Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-list"><Link to='/create' className="nav-link">Create-Product</Link></li>
                    <li className="nav-list"><Link to='/products' className="nav-link">Products-Lists</Link></li>
                    <li className="nav-list"><Link to='/admin' className="nav-link">Admin</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
