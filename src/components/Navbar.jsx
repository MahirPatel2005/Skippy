import React from 'react';
import './Navbar.css'; // Import the CSS for styling

const Navbar = () => {
    return (
        <div>
            {/* Combined Navbar */}
            <div className="navbar">
                {/* Top Section */}
                <div className="top-navbar">
                    <div className="contact-info">
                        <span>📞 +91 9154363545</span>
                        <span>|</span>
                        <span>✉️ hello@skippi.in</span>
                    </div>
                    {/* Logo Container for Centering */}
                    <div className="logo-container">
                        <img 
                            src="https://skippi.in/cdn/shop/files/skippi_font.png" 
                            alt="Skippi Logo" 
                            style={{ height: '40px', margin: '0 10px' }} 
                        />
                    </div>
                    <div className="user-actions">
                        <span>🔍</span>
                        <span>Hi</span>
                        <span>🛒 Cart</span>
                    </div>
                </div>

                {/* Bottom Section */}
                <nav className="navbar-links">
                    <ul>
                        <li><a href="#shop">Shop</a></li>
                        <li><a href="#b2b">B2B Shop</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#distribution">Distribution</a></li>
                        <li><a href="#franchise">Franchise</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#blogs">Blogs</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#track-orders">Track Orders</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
