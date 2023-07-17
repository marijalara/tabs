import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <nav>
            <ul className='navMenu'>
            <header className='header'>
                WebDev
                <div className='underline'></div>
            </header>
            <li className='item'>
                <Link to='/' className='navLink'>Home</Link>
            </li>
            <li>
                <Link to='/about' className='navLink'>About</Link>
            </li>
            <li>
                <Link to='/projects' className='navLink'>Projects</Link>
            </li>
            <li>
                <Link to='/contact' className='navLink'>Contact</Link>
            </li>
            </ul>
        </nav>
    )
}

export default Navbar