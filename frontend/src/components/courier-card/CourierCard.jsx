import React, { useEffect, useState } from 'react';
import styles from './courierCard.module.css'
import closeButton from '../../img/closeButton.svg'
import { STATES } from '../courier-table/CourierTable';
import { updateOrder } from '../../utils/userData';

const CourierCard = ({item, modalActive, setModalActive, index, currentStates, setCurrentStates}) => {
  const [orderStatus, setOrderStatus] = useState('');
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);

  useEffect(() => {
    setOrderStatus(currentStates[index]);
    setSaveButtonDisabled(true);
  }, [currentStates, index, modalActive]);

  return(
    <>
      <div className={styles.header}>
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
        <p className={styles.id}>Заказ: {item.id}</p>
        <button className={styles.close__button} onClick={() => setModalActive(false)}>
          <img src={closeButton} alt="" height='30px' width='30px' />
        </button>
      </div>
      <div className={styles.body}>
        <div className={styles.order__info}>
          <p>Время заказа: {item.date}</p>
          <p>Время выдачи: {item.ready_time}</p>
          <p>Стоимость заказа: {item.total}</p>
          <p>Выдача: {item.delivery_type}</p>
          <p>Стоимость заказа: {item.total} р.</p>
          <p>Количество позиций: {item.items_count}</p>
          <p>Позиции: {item.items_in_order
              ? item.items_in_order.join(', ')
              : ''
            }
          </p>   
        </div>
        <div className={styles.client__info}>
        <p>Клиент: {item.customer_name}</p> 
        <p>Номер: {item.customer_phone_number}</p>
        <p>Эл. почта: {item.customer_email}</p>
        <p>Адрес доставки: {item.address}</p>
        </div>
      </div>
    </>

)};

export default CourierCard;