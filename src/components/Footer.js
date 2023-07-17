import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai'

const Footer = () => {
  return (
        <footer>
            <div>
                <div className='footer-links'>
                    <Link to='https://www.facebook.com/' className='social-link'>
                        <AiFillFacebook />
                    </Link>
                    <Link to='https://www.instagram.com/' className='social-link'>
                        <AiFillInstagram />
                    </Link>
                    <Link to='https://twitter.com/i/flow/login?redirect_after_login=%2F' className='social-link'> 
                        <AiFillTwitterSquare />
                    </Link>
                </div>
                <h4>
                    copyright© 2023
                    <span>WebDeb</span> all rights reserved
                </h4>
            </div>
        </footer>
    )
}

export default Footer