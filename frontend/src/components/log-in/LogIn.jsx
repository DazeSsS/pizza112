import React, { useState } from 'react';
import websiteLogo from './../../img/logo.svg';
import closeButton from '../../img/closeButton.svg'
import styles from './logIn.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { setToken } from '../../utils/authToken';
import axios from 'axios';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onLoginSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/auth/token/login/',
        {
          username: username,
          password: password
        }
      );

      setToken(response.data.auth_token)
      navigate('/');
    } catch (error) {
      setError('Ошибка! Проверьте корректность введенных данных');
    }
  }

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
      <form onSubmit={onLoginSubmit}>
          <div className={styles.content}>
            <input
              className={styles.login__input}
              type="text"
              value={username}
              placeholder='Логин'
              onChange={evt => setUsername(evt.target.value)}
              required
            />
            <input
              className={styles.login__input}
              type="password"
              value={password}
              placeholder='Пароль'
              onChange={evt => setPassword(evt.target.value)}
              required
            />
            {error && (
              <p>{error}</p>
            )}
            <button className={styles.login__button}>
              Войти
            </button>
          </div>
      </form>
    </div>
  )
}

export default LogIn;