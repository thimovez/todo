import React from 'react';
import "./footer.scss";

const Footer = () => {
    return (
        <div>
            <div className="background">
                <div className="logo"></div>
                <nav className="navbar">
                    <ul className="navbar__ul">
                        <li>Terms & Conditions</li>
                        <li>Privacy</li>
                        <li>Notice at Collection</li>
                        <li>CA Privacy Hub</li>
                        <li>Contact Us</li>
                        <li>Sitemap</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Footer;