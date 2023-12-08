import React from 'react';
import websiteLogo from './../../img/logo.svg';
import styles from './menu.module.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
      <>
        <div className={styles.container}>
          <header>
              <img src={websiteLogo} width="120px" height="120px" alt="WebsiteLogo"/>
          </header>
          <body>
              <div className={styles.types}>
                <div className={styles.type}>
                  <Link to="/LogIn" className={styles.type__link}></Link>
                  <span>Вход</span>
                </div>
                <div className={styles.type}>
                  <Link to="/SignUp" className={styles.type__link}></Link>
                  <span>Регистрация</span>
                </div>
              </div>
          </body>
        </div>
      </>
  )
}

export default Menu;