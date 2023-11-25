import React from 'react';
import styles from './types.module.css';
import Type from '../type/Type';
import profileLogo from './../../img/profileLogo.svg';
import orderLogo from './../../img/orderLogo.svg';


const Types = () => {
  return (
    <section className={styles.type__selection}>
      <div className={styles.container}>
        <div className={styles.types}>
          <Type title="Сотрудники" img={profileLogo} path="/employees"/>
          <Type title="Заказы" img={orderLogo} path="/orders"/>
        </div>
      </div>
    </section>
  )
}

export default Types;