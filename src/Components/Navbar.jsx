import React, { useState, useEffect, useRef } from 'react';
import '../Css/Navbar.css';
import ContrastIcon from '@mui/icons-material/Contrast';
import LightModeIcon from '@mui/icons-material/LightMode';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const navRef = useRef();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);

        // Click outside to close
        const handleClickOutside = (e) => {
            if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`} ref={navRef}>
            <div className="navbar-content">
                <div className="nav-left-logo">
                    <h4 className="logo">David's code LaB</h4>
                </div>

                <div className={`right_ ${menuOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                        <li><a href="#about" onClick={toggleMenu}>About</a></li>
                        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                        {/* Show toggle inside mobile menu */}
                        <li className="theme-toggle-mobile">
                            <button className="theme-toggle" onClick={toggleTheme}>
                                {theme === 'light' ? <ContrastIcon /> : <LightModeIcon />}
                            </button>
                        </li>
                    </ul>
                    {/* Desktop toggle icon (outside links) */}
                 

                    <button className="theme-toggle desktop-only" onClick={toggleTheme}>
                        {theme === 'light' ? <ContrastIcon /> : <LightModeIcon />}
                    </button>


                </div>


                {/* Burger Icon */}
                <div className={`burger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="burger-line" />
                    <span className="burger-line" />
                    <span className="burger-line" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
