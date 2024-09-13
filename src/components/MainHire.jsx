import React from 'react';
import devLogo from '../assets/hire-page.png';
import '../styles/mainHire.css';

const MainHire = () => {
    return (
        <main className="hire-main">
            <section className="hire-hero" id="about-me">
                <img className="hire-hero-img" src={devLogo} alt="Programmist picture" />

                <p className="hire-hero-text">
                    If you're looking to hire a passionate front-end developer who's eager to bring your ideas to life, you're in the right place! Whether it's building a sleek, modern website or adding new features to your existing project, I'm here to help. Just drop me a message, and let's start creating something amazing together!
                </p>

                <h1 className="hire-hero-title">Contact me via:</h1>
                <div className="hire-hero-links">
                    <a className="hire-btn-hero" href="mailto:Ustinov.Daniil@urfu.me" target="_blank" rel="noopener noreferrer">Email</a>
                    <a className="hire-btn-hero" href="https://t.me/acuraels" target="_blank" rel="noopener noreferrer">TG</a>
                    <a className="hire-btn-hero" href="https://vk.com/acuraels" target="_blank" rel="noopener noreferrer">VK</a>
                </div>
            </section>
        </main>
    );
};

export default MainHire;
