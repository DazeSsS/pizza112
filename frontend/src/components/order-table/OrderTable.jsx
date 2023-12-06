import React from "react";
import styles from './orderTable.module.css';
import { useState, useEffect } from 'react';
import Modal from "../modal/Modal";
import OrderCard from "../order-card/OrderCard";

const parameters = [
  {
    id: "gf-342",
    state: "Завершён",
    time:"12.12.12 12:00",
    readyTime:"12.12.12 13:12",
    issueTime:"12.12.12 14:12",
    price:"1495",
    positionsNum:"4",
    positions:"рис курица курица рис рис",
    issuance:"Самовывоз",
    courier:"Иван Зорин",
    baker:"Елизавета Карамолина",
    client:"Владимир Тарасенко",
    clientPhone:"+78439852873",
    clientMail:"sussybaka2013@mail.ru",
    clientAdress:"ул. Бассейная д.228",
    courierPhone:"+78005553535"
  },
  {
    id: "gf-442",
    state: "Готовится",
    time:"12.12.12 12:00",
    readyTime:"12.12.12 13:12",
    issueTime:"12.12.12 14:12",
    price:"1495",
    positionsNum:"4",
    positions:"рис курица курица рис рис",
    issuance:"Самовывоз",
    courier:"Иван Раков",
    baker:"Елизавета Карамолина",
    client:"Владимир Тарасенко",
    clientPhone:"+78439852873",
    clientMail:"sussybaka2013@mail.ru",
    clientAdress:"ул. Бассейная д.228",
    courierPhone:"+78005553535"
  },
  {
    id: "gf-542",
    state: "Отменён",
    time:"12.12.12 12:00",
    readyTime:"12.12.12 13:12",
    issueTime:"12.12.12 14:12",
    price:"1495",
    positionsNum:"4",
    positions:"рис курица курица рис рис",
    issuance:"Самовывоз",
    courier:"Иван Раков",
    baker:"Елизавета Карамолина",
    client:"Владимир Тарасенко",
    clientPhone:"+78439852873",
    clientMail:"sussybaka2013@mail.ru",
    clientAdress:"ул. Бассейная д.228",
    courierPhone:"+78005553535"
  },
  {
    id: "gf-942",
    state: "Доставка",
    time:"12.12.12 12:00",
    readyTime:"12.12.12 13:12",
    issueTime:"12.12.12 14:12",
    price:"1495",
    positionsNum:"4",
    positions:"рис курица курица рис рис",
    issuance:"Самовывоз",
    courier:"Иван Зорин",
    baker:"Елизавета Карамолина",
    client:"Владимир Тарасенко",
    clientPhone:"+78439852873",
    clientMail:"sussybaka2013@mail.ru",
    clientAdress:"ул. Бассейная д.228",
    courierPhone:"+78005553535"
  }
]

export const STATES = {
  'Завершён': styles.green,
  'Готовится': styles.yellow,
  'Отменён': styles.red,
  'Доставка': styles.blue,
}

const OrderTable = () => {
  const [modalActive, setModalActive] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(parameters[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentStates, setCurrentStates] = useState([]);

  useEffect(() => {
    setCurrentStates(parameters.map(item => item.state));
  }, []);

  const rows = parameters.map(function(item, index) {
    return <tr className={styles.row}>
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
      </td>
      <td>{item.time}</td>
      <td>{item.positionsNum}</td>
      <td>{item.issuance}</td>
      <td>{item.courier}</td>
      <td>{item.baker}</td>
      <td>{item.client}</td>
    </tr>
  });

  return(
    <div className={styles.container}>
      <table className={styles.table}>
        <tr className={styles.header}>
          <th className={styles.id}>id заказа</th>
          <th>Cтатус</th>
          <th>Время зак.</th>
          <th>Позиций</th>
          <th>Выдача</th>
          <th>Курьер</th>
          <th>Пекарь</th>
          <th className={styles.client}>Клиент</th>
        </tr>

        {rows}

      </table>  
      <Modal active={modalActive} setActive={setModalActive}>
        <OrderCard
          item={currentOrder}
          setModalActive={setModalActive}
          index={currentIndex}
          currentStates={currentStates}
          setCurrentStates={setCurrentStates}
        ></OrderCard>
      </Modal>
    </div> 
  )
}

export default OrderTable