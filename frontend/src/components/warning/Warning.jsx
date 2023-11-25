import React from 'react';
import styles from './warning.module.css';
import ListPosition from './../list-position/ListPosition';
import warningLogo from './../../img/warningLogo.svg';

const Warning = () => {
  return (
    <section className={styles.warning}>
      <div className={styles.container}>
        <div className={styles.alert}>
          <img src={warningLogo} alt="" />
          <span className={styles.alert__title}>Нехватка продуктов:</span>
          <div className={styles.alert__list}>
            <ul className={styles.list__positions}>
              <ListPosition title="Мясо"/>
              <ListPosition title="Каша"/>
              <ListPosition title="Молоко"/>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Warning;