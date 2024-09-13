import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/headerHire.css';

const HeaderHire = () => {
    return (
        <header className="header">
            <div className="header-hire-container">
                <nav className="header-hire-nav">
                    <p className="text-hire-nav">If you want to hire me look for information below ↓</p>
                    <Link className="btn-hire-nav" to="/">Return</Link>
                </nav>
            </div>
        </header>
    );
};

export default HeaderHire;
