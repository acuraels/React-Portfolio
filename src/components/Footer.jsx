import React from 'react';
import "./../styles/footer.css";
import emailIcon from '../assets/Email-icon.svg';
import tgIcon from '../assets/TG-logo.svg';
import vkIcon from '../assets/VK-logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container" id="contact">
                <h2 className="footer-title">Contact</h2>

                <p className="footer-text">
                    If you feel the need to reach out, don't hesitate to get in touch! I'm always open to
                    discussing new opportunities, collaborations, or simply exchanging ideas. You can contact me via links
                    below. Looking forward to hearing from you!
                </p>

                <div className="footer-email">
                    <a href="mailto:Ustinov.Daniil@urfu.me">
                        <img className="email-icon" src={emailIcon} alt="MailBox" />
                    </a>
                    <p className="email-text">Ustinov.Daniil@urfu.me</p>
                </div>

                <div className="footer-links">
                    <a href="https://t.me/acuraels">
                        <img className="icon" src={tgIcon} alt="TG" />
                    </a>
                    <a href="https://vk.com/acuraels">
                        <img className="icon" src={vkIcon} alt="VK" />
                    </a>
                </div>

                <div className="copyright">
                    <p className="copyright-text">Created by Daniil Ustinov 2024 ©</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
