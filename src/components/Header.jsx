import React from 'react';
import { Link } from 'react-router-dom';
import "./../styles/header.css";

const Header = () => {
    const toggleMenu = () => {
        const menu = document.querySelector('.dropdown-menu');
        menu.classList.toggle('active');
    };

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
                        <div className="dropdown-menu">
                            <a href="index.html">English</a>
                            <a href="html/ru-index.html">Русский</a>
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
                    <Link className="btn-nav" to="/hire">Hire me</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
