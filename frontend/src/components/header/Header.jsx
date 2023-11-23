import React from 'react';
import './header.css';
import websiteLogo from './../../img/logo.svg';
import profileLogo from './../../img/profileLogo.svg';
import styles from './header.module.css';
import orderLogo from './../../img/orderLogo.svg';
import { Link } from 'react-router-dom';

// У функции header теперь параметр view с 3 значениями: home, orders, employees: с тремя хедерами для разных страничек

function Header ({view}) {
  let logo;
  let text;
  let a;
  if (view === "home"){
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
  switch (view) {
    case "orders":
      logo = profileLogo;
      text = "Сотрудники";
      a = "/employees";
      break;
    case "employees":
      logo = orderLogo;
      text = "Заказы";
      a = "/orders";
      break;
    default:
      break;
  }
  return(
    <header className="header">
        <div className="container">
          <div className="header__row">
            <Link className="website__information" to="/">
              <img src={websiteLogo} width="120px" height="120px" alt="WebsiteLogo"/>
            </Link>
            <Link className={styles.other} to={a}>
              <img src={logo} width="28px" height="28px" alt=""/>
              <span>{text}</span>
            </Link>
            <div className={styles.search}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 26 26" fill="none">
              <path d="M11.6667 5C15.3485 5 18.3333 7.98477 18.3333 11.6667M19.2117 19.2065L25 25M22.3333 11.6667C22.3333 17.5577 17.5577 22.3333 11.6667 22.3333C5.77563 22.3333 1 17.5577 1 11.6667C1 5.77563 5.77563 1 11.6667 1C17.5577 1 22.3333 5.77563 22.3333 11.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
              <input className={styles.input}/>
            </div>
            <div className="profile__information">
              <span>User's name</span>
              <img src={profileLogo} width="90px" height="90px" alt="ProfileLogo"/>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header