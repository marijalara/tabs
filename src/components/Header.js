import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    let navigate=useNavigate()
    const routeChange=() => {
        let path=`/contact`
        navigate(path)
    }
    return (
        <div>
            <header className='head'>
                I'm John
            </header>
            <p className='text'>freelance web and mobile UI/UX designer</p>
            <button className='button' onClick={routeChange}>
                contact me
            </button>
        
        </div>
    )
}

export default Header