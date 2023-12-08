import React from 'react';
import styles from './signUp.module.css';
import websiteLogo from './../../img/logo.svg';
import closeButton from '../../img/closeButton.svg'
import { Link } from 'react-router-dom';

const SignUp = () => {
  
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
          <body>
            <form action="">
              <div className={styles.content}>
                <div className={styles.inputs}>
                  <div className={styles.column}>
                    <input className={styles.signup__input} type="text" placeholder='Полное имя'/>
                    <input className={styles.signup__input} type="text" placeholder='Фамилия'/>
                    <input className={styles.signup__input} type="text" placeholder='Отчество'/>
                    <input className={styles.signup__input} type="text" placeholder='Логин'/>
                  </div>
                  <div className={styles.column}>
                    <select className={styles.position__menu}>
                        <option class={styles.position} disabled selected hidden>Выберите должность</option>
                        <option class={styles.position}>Управляющий</option>
                        <option class={styles.position}>Технолог</option>
                        <option class={styles.position}>Приемщик</option>
                        <option class={styles.position}>Пекарь</option>
                        <option class={styles.position}>Курьер</option>
                    </select>
                    <div className={styles.gender}>
                      Пол
                      <input id='man' type="radio" name='gender' value='М'/>
                      <label className={styles.man} for='man'>М</label>
                      <input id='woman' type="radio" name='gender' value='Ж'/>
                      <label className={styles.woman} for='woman'>Ж</label>
                    </div>
                    <input className={styles.signup__date} type="date"/>
                    <input className={styles.signup__input} type="password" placeholder='Пароль'/>
                  </div>
                </div>
                <button className={styles.login__button}>
                  Зарегистрироваться
                </button>
              </div>
            </form>
          </body>
        </div>
  )
}

export default SignUp;