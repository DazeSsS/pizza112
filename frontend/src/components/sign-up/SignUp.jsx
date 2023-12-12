import React, { useState } from 'react';
import styles from './signUp.module.css';
import websiteLogo from './../../img/logo.svg';
import closeButton from '../../img/closeButton.svg'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  
  const onSignUpSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await axios.post(
        'http://127.0.0.1:8000/api/v1/auth/users/',
        {
          username: username,
          password: password,
          role: role,
          is_staff: role === 'Управляющий' ? true : false
        }
      );

      navigate('/login/');
    } catch(error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className={styles.container}>
      <header>
          <img src={websiteLogo} width="120px" height="120px" alt="WebsiteLogo"/>
          <span className={styles.title}>
            Регистрация
            <button className={styles.close__button}>
              <Link to="/" className={styles.type__link}></Link>
              <img src={closeButton} alt="" />
            </button>
          </span>
      </header>
      <form onSubmit={onSignUpSubmit}>
        <div className={styles.content}>
          <div className={styles.inputs}>
            <div className={styles.column}>
              <input className={styles.signup__input} type="text" placeholder='Полное имя'/>
              <input className={styles.signup__input} type="text" placeholder='Фамилия'/>
              <input className={styles.signup__input} type="text" placeholder='Отчество'/>
              <input
                className={styles.signup__input}
                type="text"
                value={username}
                placeholder='Логин'
                onChange={evt => setUsername(evt.target.value)}
                required
              />
            </div>
            <div className={styles.column}>
              <select
                className={styles.position__menu}
                defaultValue={role}
                onChange={evt => setRole(evt.target.value)}
                required
              >
                  <option className={styles.position} value="" disabled>Выберите должность</option>
                  <option className={styles.position} value="Управляющий">Управляющий</option>
                  <option className={styles.position} value="Управляющий">Технолог</option>
                  <option className={styles.position} value="Пекарь">Приемщик</option>
                  <option className={styles.position} value="Пекарь">Пекарь</option>
                  <option className={styles.position} value="Курьер">Курьер</option>
              </select>
              <div className={styles.gender}>
                Пол
                <input id='man' type="radio" name='gender' value='М' defaultChecked/>
                <label className={styles.man} htmlFor='man'>М</label>
                <input id='woman' type="radio" name='gender' value='Ж'/>
                <label className={styles.woman} htmlFor='woman'>Ж</label>
              </div>
              <input className={styles.signup__date} type="date"/>
              <input
                className={styles.signup__input}
                type="password"
                value={password}
                placeholder='Пароль'
                onChange={evt => setPassword(evt.target.value)}
                required
              />
            </div>
          </div>
          <button className={styles.login__button}>
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;