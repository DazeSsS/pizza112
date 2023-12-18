import React, { useEffect, useState } from 'react';
import styles from './bakerCard.module.css'
import closeButton from '../../img/closeButton.svg'
import { STATES } from '../baker-table/BakerTable';
import { updateOrder } from '../../utils/userData';

const BakerCard = ({item, modalActive, setModalActive, index, currentStates, setCurrentStates}) => {
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
      <div className={styles.body}>
        <div className={styles.info}>
          <p>Дата заказа: {item.date}</p>
          <p>Время готовности: {item.ready_time}</p>
          <p>Выдача: {item.delivery_type}</p>
          <p>Количество позиций: {item.items_count}</p>
          <p>Позиции: {item.items_in_order
              ? item.items_in_order.join(', ')
              : ''
            }
          </p>  
        </div>
      </div>
    </>

)};

export default BakerCard;