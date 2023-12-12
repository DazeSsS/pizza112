import React from 'react';
import styles from './bakerCard.module.css'
import closeButton from '../../img/closeButton.svg'
import { STATES } from '../baker-table/BakerTable';

const BakerCard = ({item, setModalActive, index, currentStates, setCurrentStates}) => {  
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