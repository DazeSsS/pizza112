import React from 'react';
import styles from './courierCard.module.css'
import closeButton from '../../img/closeButton.svg'
import { STATES } from '../courier-table/CourierTable';

const CourierCard = ({item, setModalActive, index, currentStates, setCurrentStates}) => {  
  return(
    <>
      <div className={styles.header}>
        <div className={styles.state}>
        <select 
            className={STATES[currentStates[index]]}
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
              selected={currentStates[index] === state}
            >
              {state}
            </option>
          ))}
        </select>
        </div>
        <p className={styles.id}>Заказ: {item.id}</p>
        <button className={styles.close__button} onClick={() => setModalActive(false)}>
          <img src={closeButton} alt="" height='30px' width='30px' />
        </button>
      </div>
      <div className={styles.body}>
        <div className={styles.order__info}>
          <p>Время заказа: {item.time}</p>
          <p>Время выдачи: {item.issueTime}</p>
          <p>Стоимость заказа: {item.price}</p>
          <p>Выдача: {item.issuance}</p>
          <p>Количество позиций: {item.positionsNum}</p>
          <p>Позиции: {item.positions}</p>  
        </div>
        <div className={styles.client__info}>
        <p>Клиент: {item.client}</p> 
        <p>Номер: {item.clientPhone}</p>
        <p>Эл. почта: {item.clientMail}</p>
        <p>Адрес доставки: {item.clientAdress}</p>
        </div>
      </div>
    </>

)};

export default CourierCard;