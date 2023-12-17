/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styles from './bakerTable.module.css';
import { useState } from 'react';
import Modal from "../modal/Modal";
import BakerCard from "../baker-card/BakerCard";
import { useEffect } from "react";
import { getBakerOrders } from '../../utils/userData';

export const STATES = {
  'Завершён': styles.green,
  'Готовится': styles.yellow,
  'Отменён': styles.red,
  'Доставка': styles.blue,
}

const BakerTable = ({ employee }) => {
  const [modalActive, setModalActive] = useState(false);
  const [orders, setOrders] = useState(null);
  const [currentOrder, setCurrentOrder] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentStates, setCurrentStates] = useState([]);

  useEffect(() => {
    getBakerOrders(employee, setOrders);
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
        }}
      >
        {item.id}
      </button>
      </td>
      <td className={styles.state}>
        <div className={STATES[currentStates[index]]}>{currentStates[index]}</div>
      </td>
      <td>{item.date}</td>
      {item.ready_time
        ? <td>{item.ready_time}</td>
        : <td>-</td>
      }
      <td>{item.items_count}</td>
      <td>{item.delivery_type}</td>
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
            <th>Время готовн.</th>
            <th>Позиций</th>
            <th className={styles.last}>Выдача</th>
          </tr>
  
          {rows}
  
        </tbody>
      </table>  
      <Modal active={modalActive} setActive={setModalActive} size="baker">
        <BakerCard
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

export default BakerTable;