import React, { useState, useEffect, useRef } from 'react';
import '../Css/Navbar.css';
import ContrastIcon from '@mui/icons-material/Contrast';
import LightModeIcon from '@mui/icons-material/LightMode';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navRef = useRef();

    // Handle scroll direction
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            const currentY = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (currentY < lastScrollY || currentY <= 0) {
                        setShowNavbar(true); // scrolling up
                    } else {
                        setShowNavbar(false); // scrolling down
                    }
                    setLastScrollY(currentY);
                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);


    // Handle theme + click outside
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);

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
        <nav className={`navbar ${menuOpen ? 'menu-open' : ''} ${showNavbar ? 'show-navbar' : 'hide-navbar'}`} ref={navRef}>
            <div className="navbar-content">
                <div className="nav-left-logo">
                    <h4 className="logo">
                        {"David's code LaB".split("").map((char, i) => (
                            <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h4>
                </div>

                <div className={`right_ ${menuOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                        <li><a href="#about" onClick={toggleMenu}>About</a></li>
                        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                        <li className="theme-toggle-mobile">
                            <button className="theme-toggle" onClick={toggleTheme}>
                                {theme === 'light' ? <ContrastIcon /> : <LightModeIcon />}
                            </button>
                        </li>
                    </ul>

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
