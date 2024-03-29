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

const CourierTable = ({ employee, filter }) => {
  const [modalActive, setModalActive] = useState(false);
  const [orders, setOrders] = useState(null);
  const [filteredOrders, setFilteredOrders] = useState(null);
  const [currentOrder, setCurrentOrder] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentStates, setCurrentStates] = useState([]);

  useEffect(() => {
    getCourierOrders(employee, setOrders);
  }, [employee]);

  useEffect(() => {
    if (orders) {
      setFilteredOrders(orders);
    }
  }, [orders]);

  useEffect(() => {
    if (filteredOrders) {
      setCurrentStates(filteredOrders.map(item => item.status));
    }
  }, [filteredOrders]);

  useEffect(() => {
    if (filter === "Appointed" && orders) {
      const suitableStates = ["Готовится", "Доставка"]
      const suitableOrders = orders.filter(element => {
        return element.status === suitableStates[0] || element.status === suitableStates[1];
      });
      setFilteredOrders(suitableOrders);
    } else if (filter === "Ready" && orders) {
      const suitableStates = ["Завершён", "Отменён"]
      const suitableOrders = orders.filter(element => {
        return element.status === suitableStates[0] || element.status === suitableStates[1];
      });
      setFilteredOrders(suitableOrders);
    }
  }, [filter, orders]);

  const rows = filteredOrders?.map((item, index) => (
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
        <div className={STATES[currentStates[index]]}>{currentStates[index]}</div>
      </td>
      <td>{item.order_due?.slice(11, 19)}</td>
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
          modalActive={modalActive}
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