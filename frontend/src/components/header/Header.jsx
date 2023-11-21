import React from 'react';
import './header.css';
import websiteLogo from './../../img/logo.svg';
import profileLogo from './../../img/profileLogo.svg';

function Header () {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="website__information">
            <img src={websiteLogo} width="120px" height="120px" alt="WebsiteLogo"/>
            <span>Pizza112</span>
          </div>
          <div className="profile__information">
            <span>User's name</span>
            <img src={profileLogo} width="90px" height="90px" alt="ProfileLogo"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header