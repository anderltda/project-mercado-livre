import React from 'react';

import logo from '../../assets/logo.png';

import './style.css';

const Header = () => (

    <header className="header">
        <div className="mdl-grid">
            
            <div className="mdl-cell--12-col-phone">
                <img alt="logo"
                    src={logo}
                    className="header__logo"></img>
            </div>
        </div>

    </header>

);

export default Header;

