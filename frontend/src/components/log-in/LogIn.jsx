import React from 'react';
import styles from './logIn.module.css';
import websiteLogo from './../../img/logo.svg';
import closeButton from '../../img/closeButton.svg'
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className={styles.container}>
          <header>
              <img src={websiteLogo} width="120px" height="120px" alt="WebsiteLogo"/>
              <span className={styles.title}>
                Вход в аккаунт
                <button className={styles.close__button}>
                  <Link to="/" className={styles.type__link}></Link>
                  <img src={closeButton} alt="" />
                </button>
              </span>
          </header>
          <body>
              <div className={styles.content}>
                <input className={styles.login__input} type="text" placeholder='Логин'/>
                <input className={styles.login__input} type="password" placeholder='Пароль'/>
                <button className={styles.login__button}>
                  Войти
                </button>
              </div>
          </body>
        </div>
  )
}

export default LogIn;