import React from 'react';
import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <h1>SOCIAL TREE</h1>
            </div>
            <div className="header__nav">
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Plans</li>
                    <li>Sign Up</li>
                    <li>Log In</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;