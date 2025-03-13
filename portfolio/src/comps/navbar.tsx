import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/">My Portfolio</a>
            </div>
            <ul className="navbar-menu">
                <li className="navbar-item"><a href="#about">About</a></li>
                <li className="navbar-item"><a href="#projects">Projects</a></li>
                <li className="navbar-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;