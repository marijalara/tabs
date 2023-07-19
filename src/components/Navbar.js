import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
    const [clicked, setClicked]=useState(false)
    const navigate=useNavigate()
    
    const handleClick=() => {
        setClicked(!clicked)
    }
    
    const handleLinkClick=(path) => {
        setClicked(false)
        navigate(path)
    }
    return (
        <nav>
            <header className='header'>
                WebDev
                <div className='underline'></div>
            </header>
            <div>
            <ul className={clicked ? 'navMenu active' : 'navMenu'}>
            <li>
                <Link to='/' className='navLink' onClick={() =>handleLinkClick('/')}>Home</Link>
            </li>
            <li>
                <Link to='/about' className='navLink' onClick={() => handleLinkClick('/about')}>About</Link>
            </li>
            <li>
                <Link to='/projects' className='navLink' onClick={() => handleLinkClick('/projects')}>Projects</Link>
            </li>
            <li>
                <Link to='/contact' className='navLink' onClick={() => handleLinkClick('/contact')}>Contact</Link>
            </li>
            </ul>
            </div>
            <div className='mobile' onClick={handleClick}>
                <i>{clicked ? <AiOutlineClose /> : <GiHamburgerMenu />}</i>
            </div>
        </nav>
    )
}

export default Navbar