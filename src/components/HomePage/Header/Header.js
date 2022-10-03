import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faBars } from '@fortawesome/free-solid-svg-icons' 

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <header className='header'>
            <div onClick={() => setOpen(!open)} className='icon-nav md:hidden bg-yellow-300'>
                {
                  open ?  <FontAwesomeIcon icon={faX} />
                 : <FontAwesomeIcon icon={faBars} />
                }
            </div>
            
            <nav className={`md:flex md:flex-row justify-center bg-yellow-300 text-center w-full md:static absolute duration-300 ease-in ${open ? 'top-10' : 'top-[-120px]'}`}> 
                <Link to='/home'>Home</Link>
                <Link to='/review'>Review</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/about'>About</Link>
            </nav>

            
        </header>
    );
};

export default Header;