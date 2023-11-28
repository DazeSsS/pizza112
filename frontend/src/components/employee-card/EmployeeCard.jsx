import React from 'react';
import styles from './employeeCard.module.css'
import profileLogo from '../../img/profileLogo.svg'
import closeButton from '../../img/closeButton.svg'
import salaryLogo from '../../img/salary.svg'

const EmployeeCard = ({item, setModalActive}) => {

  return (

    <>
    <div className={styles.employee__header}>
      <div className={styles.name}>{item.name}</div>
      <button className={styles.close__button} onClick={() => setModalActive(false)}>
        <img src={closeButton} alt="" />
      </button>
    </div>
    <section className={styles.employee__information}>
      <div className={styles.employee__info}>
        <div className={styles.information}>
          <span>Должность: {item.position}</span>
          <span>Дата рождения: {item.birthdate}</span>
          <span>Возраст: {item.age} лет</span>
          <span>Пол: {item.gender}</span>
          <span>Телефон: {item.number}</span>
        </div>
        <div className={styles.profile__image}>
          <img src={profileLogo} height="190px" width="190px" alt="" />
        </div>
      </div>
      <div className={styles.work__info}>
        <div className={styles.work__information}>
          <span>Первый рабочий день: {item.firstWorkDay}</span>
          <span>Последний рабочий день:</span>
          <span>Заработная плата: {item.salary} рублей</span>
          <span className={styles.salary}>Квиток о зп:  
            <button className={styles.download}>
              <img src={salaryLogo} height="35px" width="35px" alt="" />
            </button>
          </span>
        </div>
      </div>
    </section>
    <section className={styles.order__information}>
      <div className={styles.order__type}>
        <button className={styles.select}>
          <span>Назначенные заказы</span>
        </button>
        <button className={styles.select}>
          <span>Завершенные заказы</span>
        </button>
      </div>
      <table className={styles.order__table}>
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
      </table>
    </section>
    </>

  )
}

export default EmployeeCard;