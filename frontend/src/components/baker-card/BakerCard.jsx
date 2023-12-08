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
        <button className={styles.close__button} onClick={() => setModalActive(false)}>
          <img src={closeButton} alt="" />
        </button>
      </div>
      <div className={styles.body}>
        <div className={styles.info}>
          <p>Время заказа: {item.time}</p>
          <p>Время готовности: {item.readyTime}</p>
          <p>Выдача: {item.issuance}</p>
          <p>Количество позиций: {item.positionsNum}</p>
          <p>Позиции: {item.positions}</p>  
        </div>
      </div>
    </>

)};

export default BakerCard;