import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/MainPageStyles/header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="header">
            <div className="header-container">
                <nav className="header-nav">
                    <div className="title">
                        <div className="burger-menu" onClick={toggleMenu}>
                            <div className="burger-line"></div>
                            <div className="burger-line"></div>
                            <div className="burger-line"></div>
                        </div>
                        <div className={`dropdown-menu ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
                            <Link to="/" onClick={closeMenu}>English</Link>
                            <Link to="/ru" onClick={closeMenu}>Русский</Link>
                        </div>
                    </div>
                    <ul className="nav-links">
                        <li className="link">
                            <a href="#about-me">About me</a>
                        </li>
                        <li className="link">
                            <a href="#my-skills">Skills</a>
                        </li>
                        <li className="link">
                            <a href="#my-projects">Projects</a>
                        </li>
                        <li className="link">
                            <a href="#my-experience">Experience</a>
                        </li>
                        <li className="link">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <Link className="btn-nav" to="/hirepage">Hire me</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;