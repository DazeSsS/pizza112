import React from 'react';
import styles from './courierProfile.module.css'
import profileLogo from '../../img/profileLogo.svg'
import closeButton from '../../img/closeButton.svg'
import salaryLogo from '../../img/salary.svg'

const CourierProfile = ({item, setModalActive, setFilter}) => {
  const onAppointedClick = () => {
    setFilter("Appointed");
    setModalActive(false);
  }
  const onReadyClick = () => {
    setFilter("Ready");
    setModalActive(false);
  }

  return (
    <>
      <div className={styles.employee__header}>
        <div className={styles.name}>{item.first_name} {item.last_name}</div>
        <button className={styles.close__button} onClick={() => setModalActive(false)}>
          <img src={closeButton} alt="" height="30px" width="30px"/>
        </button>
      </div>
      <section className={styles.employee__information}>
        <div className={styles.employee__info}>
          <div className={styles.information}>
            <span>Должность: {item.role}</span>
            <span>Дата рождения: 01.01.2004</span>
            <span>Возраст: {item.age}</span>
            <span>Пол: {item.gender}</span>
            <span>Телефон: {item.phone_number}</span>
          </div>
          <div className={styles.profile__image}>
            <img src={profileLogo} height="150px" width="150px" alt="" />
          </div>
        </div>
        <div className={styles.work__info}>
          <div className={styles.work__information}>
            <span>Первый рабочий день: {item.first_work_day}</span>
            <span>Последний рабочий день: {item.last_work_day}</span>
            <span>Заработная плата: {item.salary} рублей</span>
            <span className={styles.salary}>Квиток о зп:  
              <a href="docs/pizza112salary.xlsx" download className={styles.download}>
                <img src={salaryLogo} height="35px" width="35px" alt="" />
              </a>
            </span>
          </div>
        </div>
      </section>
      <section className={styles.order__information}>
        <div className={styles.order__type}>
          <button className={styles.select} onClick={()=>{ 
            onAppointedClick();
          }}>
            <span>Назначенные заказы</span>
          </button>
          <button className={styles.select} onClick={()=>{ 
            onReadyClick();
          }}>
            <span>Завершенные заказы</span>
          </button>
        </div>
        <table className={styles.order__table}>
          <tbody>
              <tr className={styles.order__table__header}>
                <th className={styles.monday}>Пн</th>
                <th>Вт</th>
                <th>Ср</th>
                <th>Чт</th>
                <th>Пт</th>
                <th>Сб</th>
                <th className={styles.sunday}>Вс</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
              <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}

export default CourierProfile;