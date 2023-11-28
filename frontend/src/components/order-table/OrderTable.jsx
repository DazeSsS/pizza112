import React from "react";
import styles from './orderTable.module.css';
import { useState } from 'react';
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
    courier:"Иван Зорин",
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
    courier:"Иван Зорин",
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

const OrderTable = () => {
  const [modalActive, setModalActive] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(parameters[0]);
  const states = ["Завершён","Готовится","Отменён","Доставка"]
  const stylesArr = [styles.green, styles.yellow, styles.red, styles.blue];
  const rows = parameters.map(function(item) {
    let stateStart = 0;
    for (let i = 0; i < states.length; i++){
      if (states[i]===item.state) {stateStart = i}
    }
    const stateStatus = states.map(function(s){
      return s===item.state;
    });
    

    return <tr className={styles.row}>
      <td>
      <button className={styles.openButton} onClick={() => {
          setModalActive(true)
          setCurrentOrder(item)
        }}>
        {item.id}
      </button>
      </td>
      <td className={styles.state}>
        <select id={item.id} className={stylesArr[stateStart]} onChange={e => document.getElementById(item.id).className = (e.target.value)}>
          <option selected={stateStatus[0]} className={styles.green} value={styles.green}>{states[0]}</option>
          <option selected={stateStatus[1]} className={styles.yellow} value={styles.yellow}>{states[1]}</option>
          <option selected={stateStatus[2]} className={styles.red} value={styles.red}>{states[2]}</option>
          <option selected={stateStatus[3]} className={styles.blue} value={styles.blue}>{states[3]}</option>
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
        <OrderCard item={currentOrder} setModalActive={setModalActive}></OrderCard>
      </Modal>
    </div> 
  )
}

export default OrderTable