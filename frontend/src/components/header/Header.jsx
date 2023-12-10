import React, { useEffect } from 'react';
import styles from './header.module.css';
import websiteLogo from './../../img/logo.svg';
import profileLogo from './../../img/profileLogo.svg';
import orderLogo from './../../img/orderLogo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from "../modal/Modal";
import EmployeeCard from '../employee-card/EmployeeCard';
import CourierProfile from '../courier-profile/CourierProfile';
import { getCurrentUser } from '../../utils/userData';
import { getToken } from '../../utils/authToken';

// У функции header теперь параметр view с 4 значениями: home, orders, employees, baker: с тремя хедерами для разных страничек

// const currentEmployee = {
//   id: '45dsfsdfw3f',
//   img: '../../../public/images/profile',
//   name: 'Волчихин Артём',
//   position: 'Пекарь',
//   number: '89091453724',
//   gender: 'Мужской',
//   age: '20',
//   birthdate: '02.11.2004',
//   firstWorkDay: '01.06.2022',
//   salary: '55000'
// } 

const Header = ({view}) => {
  const [modalActive, setModalActive] = useState(false);
  const [employee, setEmployee] = useState({});
  let logo;
  let text;
  let a;
  let pageName;

  useEffect(() => {
    if (getToken()){
      getCurrentUser(setEmployee);
    }
  }, []);

  if (view === "home") {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header__row}>
            <div className={styles.website__information}>
              <img src={websiteLogo} width="120px" height="120px" alt="WebsiteLogo"/>
              <span>Pizza112</span>
            </div>
            <div className={styles.profile__information}>
              <span>{employee.username}</span>
              <img src={profileLogo} width="90px" height="90px" alt="ProfileLogo"/>
            </div>
          </div>
        </div>
      </header>
    )
  }
  if (view === "baker") {
    return (
      <header className={styles.searchHeader}>
        <div className={styles.container}>
          <div className={styles.header__row}>
            <img src={websiteLogo} width="120px" height="120px" alt="WebsiteLogo"/>
            <Link className={styles.other}/>
            <div className={styles.search}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 26 26" fill="none">
              <path d="M11.6667 5C15.3485 5 18.3333 7.98477 18.3333 11.6667M19.2117 19.2065L25 25M22.3333 11.6667C22.3333 17.5577 17.5577 22.3333 11.6667 22.3333C5.77563 22.3333 1 17.5577 1 11.6667C1 5.77563 5.77563 1 11.6667 1C17.5577 1 22.3333 5.77563 22.3333 11.6667Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
              <input className={styles.input}/>
            </div>
            <button className={styles.profile__information} onClick={() => {
                setModalActive(true);
              }}>
              <span>{employee.username}</span>
              <img src={profileLogo} width="90px" height="90px" alt="ProfileLogo"/>
            </button>
          </div>
          <h1 className={styles.pageName}>Данные заказов</h1>
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
          <EmployeeCard item={employee} setModalActive={setModalActive}/>
        </Modal>
      </header>
    )
  }
  if (view === "courier") {
    return (
      <header className={styles.searchHeader}>
        <div className={styles.courier__container}>
          <div className={styles.header__row}>
            <img src={websiteLogo} width="60px" height="60px" alt="WebsiteLogo"/>
            <div className={styles.courier__search}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 26 26" fill="none">
              <path d="M11.6667 5C15.3485 5 18.3333 7.98477 18.3333 11.6667M19.2117 19.2065L25 25M22.3333 11.6667C22.3333 17.5577 17.5577 22.3333 11.6667 22.3333C5.77563 22.3333 1 17.5577 1 11.6667C1 5.77563 5.77563 1 11.6667 1C17.5577 1 22.3333 5.77563 22.3333 11.6667Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
              <input className={styles.input}/>
            </div>
            <button className={styles.courier__profile__information} onClick={() => {
                setModalActive(true)
              }}>
              <span>{employee.username}</span>
              <img src={profileLogo} width="45px" height="45px" alt="ProfileLogo"/>
            </button>
          </div>
          <h1 className={styles.courier__pageName}>Данные заказов</h1>
        </div>
        <Modal active={modalActive} setActive={setModalActive} size={"courier_profile"}>
          {console.log(employee)}
          <CourierProfile item={employee} setModalActive={setModalActive}/>
        </Modal>
      </header>
    )
  }
  switch (view) {
    case "orders":
      logo = profileLogo;
      pageName = 'Заказы';
      text = "Сотрудники";
      a = "/employees";
      break;
    case "employees":
      logo = orderLogo;
      pageName = 'Сотрудники';
      text = "Заказы";
      a = "/orders";
      break;
    default:
      break;
  }
  return (
    <header className={styles.searchHeader}>
        <div className={styles.container}>
          <div className={styles.header__row}>
            <Link className={styles.website__information} to="/home">
              <img src={websiteLogo} width="120px" height="120px" alt="WebsiteLogo"/>
            </Link>
            <Link className={styles.other} to={a}>
              <img src={logo} width="28px" height="28px" alt=""/>
              <span>{text}</span>
            </Link>
            <div className={styles.search}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 26 26" fill="none">
              <path d="M11.6667 5C15.3485 5 18.3333 7.98477 18.3333 11.6667M19.2117 19.2065L25 25M22.3333 11.6667C22.3333 17.5577 17.5577 22.3333 11.6667 22.3333C5.77563 22.3333 1 17.5577 1 11.6667C1 5.77563 5.77563 1 11.6667 1C17.5577 1 22.3333 5.77563 22.3333 11.6667Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
              <input className={styles.input}/>
            </div>
            <div className={styles.profile__information}>
              <span>{employee.username}</span>
              <img src={profileLogo} width="90px" height="90px" alt="ProfileLogo"/>
            </div>
          </div>
          <h1 className={styles.pageName}>{pageName}</h1>
        </div>
      </header>
  );
}

export default Header