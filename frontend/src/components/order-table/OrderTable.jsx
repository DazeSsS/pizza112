import React from "react";
import styles from './orderTable.module.css'
import Order from "../order/Order";

//id="gf-342" state="Завершён" time="12.12.12 12:00" positions="4" issuance="Самовывоз" courier="Пупкин Залупкин " baker="Гадя Хренова" client="Пупкин Залупкин"

const OrderTable = () => {
  return(
    <div className={styles.container}>
      <table className={styles.table}>
        <tr className={styles.header}>
          <th className={styles.id}>id заказа</th>
          <th>Cтатус</th>
          <th>Время зак.</th>
          <th>Позиций</th>
          <th>Выдача</th>
          <th>Курьер</th>
          <th>Пекарь</th>
          <th className={styles.client}>Клиент</th>
        </tr>
        <Order id="gf-342" state="Завершён" time="12.12.12 12:00" positions="4" issuance="Самовывоз" courier="Пупкин Залупкин " baker="Гадя Хренова" client="Пупкин Залупкин"/>
        <Order id="gf-342" state="Готовится" time="12.12.12 12:00" positions="4" issuance="Самовывоз" courier="Пупкин Залупкин " baker="Гадя Хренова" client="Пупкин Залупкин"/>
        <Order id="gf-342" state="Отменён" time="12.12.12 12:00" positions="4" issuance="Самовывоз" courier="Пупкин Залупкин " baker="Гадя Хренова" client="Пупкин Залупкин"/>
        <Order id="gf-342" state="Доставка" time="12.12.12 12:00" positions="4" issuance="Самовывоз" courier="Пупкин Залупкин " baker="Гадя Хренова" client="Пупкин Залупкин"/>
      </table>  
    </div>
  )
}

export default OrderTable