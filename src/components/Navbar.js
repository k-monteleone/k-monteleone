import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        <i className="lni lni-home"/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'lni lni-close' : 'lni lni-menu'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu inactive'}>
                        <li className='nav-item'>
                            <Link to='/WorkExperience' className='nav-links' onClick={closeMobileMenu}>
                                Work Experience
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Education' className='nav-links' onClick={closeMobileMenu}>
                                Education
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Hobbies' className='nav-links' onClick={closeMobileMenu}>
                                Hobbies
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
