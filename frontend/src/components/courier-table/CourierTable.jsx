import React from "react";
import styles from './courierTable.module.css';
import { useState } from 'react';
import Modal from "../modal/Modal";
import CourierCard from "../courier-card/CourierCard";
import { useEffect } from "react";
import { getCourierOrders } from '../../utils/userData';

export const STATES = {
  'Завершён': styles.green,
  'Готовится': styles.yellow,
  'Отменён': styles.red,
  'Доставка': styles.blue,
}

const CourierTable = ({ employee }) => {
  const [modalActive, setModalActive] = useState(false);
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentStates, setCurrentStates] = useState([]);

  useEffect(() => {
    getCourierOrders(employee, setOrders);
  }, [employee]);

  useEffect(() => {
    if (orders) {
      setCurrentStates(orders.map(item => item.status));
    }
  }, [orders]);

  const rows = orders?.map((item, index) => (
    <tr key={item.id} className={styles.row}>
      <td>
      <button className={styles.openButton} onClick={() => {
          setModalActive(true);
          setCurrentOrder(item);
          setCurrentIndex(index);
        }}>
        {item.id}
      </button>
      </td>
      <td className={styles.state}>
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
      </td>
      <td>{item.order_due}</td>
    </tr>
  ));

  return(
    <div className={styles.container}>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.header}>
            <th className={styles.id}>id заказа</th>
            <th>Cтатус</th>
            <th className={styles.last}>Время доставки</th>
          </tr>
  
          {rows}
  
        </tbody>
      </table>  
      <Modal active={modalActive} setActive={setModalActive} size="courier_order">
        <CourierCard
          item={currentOrder}
          setModalActive={setModalActive}
          index={currentIndex}
          currentStates={currentStates}
          setCurrentStates={setCurrentStates}
        />
      </Modal>
    </div> 
  )
}

export default CourierTable;