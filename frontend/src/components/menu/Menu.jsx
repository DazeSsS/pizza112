import React, { useEffect, useState } from 'react';
import websiteLogo from './../../img/logo.svg';
import styles from './menu.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { getToken } from '../../utils/authToken';
import { getCurrentUser } from '../../utils/userData';

const Menu = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken()) {
      getCurrentUser(setUser);
    }
  }, [navigate]);

  if (getToken()) {
    switch (user.role) {
      case 'Управляющий':
        navigate('/home/');
        break;
      case 'Пекарь':
        navigate('/baker/');
        break;
      case 'Курьер':
        navigate('/courier/');
        break;
      default:
        break;
    }
  }

  return (
      <div className={styles.container}>
        <header>
            <img src={websiteLogo} width="120px" height="120px" alt="WebsiteLogo"/>
        </header>
        <div>
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
        </div>
      </div>
  )
}

export default Menu;