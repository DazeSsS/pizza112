import React, { useEffect, useState } from 'react';
import { STATES } from '../order-table/OrderTable';
import { updateOrder } from '../../utils/userData';
import closeButton from '../../img/closeButton.svg'
import styles from './orderCard.module.css'

const OrderCard = ({item, modalActive, setModalActive, index, currentStates, setCurrentStates}) => {
  const [orderStatus, setOrderStatus] = useState('');
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);

  useEffect(() => {
    setOrderStatus(currentStates[index]);
    setSaveButtonDisabled(true);
  }, [currentStates, index, modalActive]);

  return(
    <>
      <div className={styles.header}>
        <p className={styles.id}>Заказ: {item.id}</p>
        <div className={styles.state}>
          <select 
            className={STATES[orderStatus]}
            value={orderStatus}
            onChange={(evt) => {
              setOrderStatus(evt.target.value);
              setSaveButtonDisabled(false);
            }}
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
        <button
          className={styles.saveButton}
          disabled={saveButtonDisabled}
          onClick={() => {
            updateOrder(item, {status: orderStatus});
            setCurrentStates(prev => [
              ...(prev.slice(0, index)),
              orderStatus,
              ...(prev.slice(index + 1))
            ]);
          }}
        >
          Сохранить
        </button>
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
          <p>Позиции: {item.items_in_order
              ? item.items_in_order.join(', ')
              : ''
            }
          </p> 
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
            {item.courier_first_name && (
              <>
                <p>Курьер: {item.courier_first_name} {item.courier_last_name}</p>
                <p>Номер курьера: {item.courier_phone_number}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderCard;