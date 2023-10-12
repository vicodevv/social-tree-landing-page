import React from 'react';
import './Header.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <h1>SOCIAL TREE</h1>
            </div>
            <div className="header__nav">
                <div className="circle"></div>
                <ArrowForwardIcon className='header__nav__icon'/>
            </div>
        </div>
    );
};

export default Header;