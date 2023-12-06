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
          {/* <select id={item.id+"-"} className={stylesArr[stateStart]} onChange={e => {
            document.getElementById(item.id+"-").className = (e.target.value)
          }}>
            <option selected={stateStatus[0]} className={styles.green} value={styles.green}>{states[0]}</option>
            <option selected={stateStatus[1]} className={styles.yellow} value={styles.yellow}>{states[1]}</option>
            <option selected={stateStatus[2]} className={styles.red} value={styles.red}>{states[2]}</option>
            <option selected={stateStatus[3]} className={styles.blue} value={styles.blue}>{states[3]}</option>
          </select> */}
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
      <div className={styles.blocks}>
        <div className={styles.left}>
          <p>Время заказа: {item.time}</p>
          <p>Время готовности: {item.readyTime}</p>
          <p>Время выдачи: {item.issueTime}</p>
          <p>Стоимость заказа: {item.price} рублей</p>
          <p>Выдача: {item.issuance}</p>
          <p>Количество позиций: {item.positionsNum}</p>
          <p>Позиции: {item.positions}</p>
        </div>
        <div className={styles.right}>
          <div className={styles.up}>
            <p>Клиент: {item.client}</p>
            <p>Номер клиента: {item.clientPhone}</p>
            <p>Эл. почта клиента: {item.clientMail}</p>
            <p>Адрес доставки: {item.clientAdress}</p>
          </div>
          <div className={styles.down}>
            <p>Повар: {item.baker}</p>
            <p>Курьер: {item.courier}</p>
            <p>Номер курьера: {item.courierPhone}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderCard;