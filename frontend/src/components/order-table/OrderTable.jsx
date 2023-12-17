import React from "react";
import { useState, useEffect } from 'react';
import Modal from "../modal/Modal";
import OrderCard from "../order-card/OrderCard";
import { getOrders } from '../../utils/userData';
import styles from './orderTable.module.css';

export const STATES = {
  'Завершён': styles.green,
  'Готовится': styles.yellow,
  'Отменён': styles.red,
  'Доставка': styles.blue,
}

const OrderTable = () => {
  const [modalActive, setModalActive] = useState(false);
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentStates, setCurrentStates] = useState([]);

  useEffect(() => {
    getOrders(setOrders);
  }, []);

  useEffect(() => {
    setCurrentStates(orders.map(item => item.status));
  }, [orders]);

  const rows = orders.map((item, index) => (
    <tr key={item.id} className={styles.row}>
      <td>
      <button
        className={styles.openButton}
        onClick={() => {
          setModalActive(true);
          setCurrentOrder(item);
          setCurrentIndex(index);
        }}
      >
        {item.id}
      </button>
      </td>
      <td className={styles.state}>
        <div className={STATES[currentStates[index]]}>{currentStates[index]}</div>
      </td>
      <td>{item.date}</td>
      <td>{item.items_count}</td>
      <td>{item.delivery_type}</td>
      {item.courier_first_name
        ? <td>{item.courier_first_name} {item.courier_last_name}</td>
        : <td>-</td>
      }
      <td>{item.employee_first_name} {item.employee_last_name}</td>
      <td>{item.customer_name}</td>
    </tr>
  ));

  return(
    <div className={styles.container}>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.header}>
            <th className={styles.id}>id заказа</th>
            <th>Cтатус</th>
            <th>Дата заказа</th>
            <th>Позиций</th>
            <th>Выдача</th>
            <th>Курьер</th>
            <th>Пекарь</th>
            <th className={styles.client}>Клиент</th>
          </tr>
  
          {rows}
  
        </tbody>
      </table>  
      <Modal active={modalActive} setActive={setModalActive}>
        <OrderCard
          item={currentOrder}
          modalActive={modalActive}
          setModalActive={setModalActive}
          index={currentIndex}
          currentStates={currentStates}
          setCurrentStates={setCurrentStates}
        ></OrderCard>
      </Modal>
    </div> 
  )
}

export default OrderTable;
