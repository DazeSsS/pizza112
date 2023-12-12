import React from 'react';
import styles from './orderCard.module.css'
import closeButton from '../../img/closeButton.svg'
import { STATES } from '../order-table/OrderTable';

const OrderCard = ({item, setModalActive, index, currentStates, setCurrentStates}) => {
  return(
    <>
      <div className={styles.header}>
        <p className={styles.id}>Заказ: {item.id}</p>
        <div className={styles.state}>
          <select 
            className={STATES[currentStates[index]]}
            value={currentStates[index]}
            onChange={e => setCurrentStates(prev => [
              ...(prev.slice(0, index)),
              e.target.value,
              ...(prev.slice(index + 1))
            ])}
        >
          {Object.keys(STATES).map((state) => (
            <option 
              key={state}
              className={STATES[state]}
              value={state}
            >
              {state}
            </option>
          ))}
        </select>
        </div>
        <button className={styles.close__button} onClick={() => setModalActive(false)}>
          <img src={closeButton} alt="" />
        </button>
      </div>
      <div className={styles.blocks}>
        <div className={styles.left}>
          <p>Дата заказа: {item.date}</p>
          <p>Время готовности: {item.order_ready_time}</p>
          <p>Время выдачи: {item.order_delivered_time}</p>
          <p>Стоимость заказа: {item.total} рублей</p>
          <p>Выдача: {item.delivery_type}</p>
          <p>Количество позиций: {item.items_count}</p>
          <p>Позиции: {item.items_in_order}</p>
        </div>
        <div className={styles.right}>
          <div className={styles.up}>
            <p>Клиент: {item.customer_name}</p>
            <p>Номер клиента: {item.customer_phone_number}</p>
            <p>Эл. почта клиента: {item.customer_email}</p>
            <p>Адрес доставки: {item.address}</p>
          </div>
          <div className={styles.down}>
            <p>Повар: {item.employee_first_name} {item.employee_last_name}</p>
            <p>Курьер: {item.courier_first_name} {item.courier_last_name}</p>
            <p>Номер курьера: {item.courier_phone_number}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderCard;