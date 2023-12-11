import React from "react";
import styles from './orderTable.module.css';
import { useState, useEffect } from 'react';
import Modal from "../modal/Modal";
import OrderCard from "../order-card/OrderCard";
import axios from 'axios';
import { deleteToken, getToken } from '../../utils/authToken';

// const parameters = [
//   {
//     id: "gf-342",
//     state: "Завершён",
//     time:"12.12.12 12:00",
//     readyTime:"12.12.12 13:12",
//     issueTime:"12.12.12 14:12",
//     price:"1495",
//     positionsNum:"4",
//     positions:"рис курица курица рис рис",
//     issuance:"Самовывоз",
//     courier:"Иван Зорин",
//     baker:"Елизавета Карамолина",
//     client:"Владимир Тарасенко",
//     clientPhone:"+78439852873",
//     clientMail:"sussybaka2013@mail.ru",
//     clientAdress:"ул. Бассейная д.228",
//     courierPhone:"+78005553535"
//   },
//   {
//     id: "gf-442",
//     state: "Готовится",
//     time:"12.12.12 12:00",
//     readyTime:"12.12.12 13:12",
//     issueTime:"12.12.12 14:12",
//     price:"1495",
//     positionsNum:"4",
//     positions:"рис курица курица рис рис",
//     issuance:"Самовывоз",
//     courier:"Иван Раков",
//     baker:"Елизавета Карамолина",
//     client:"Владимир Тарасенко",
//     clientPhone:"+78439852873",
//     clientMail:"sussybaka2013@mail.ru",
//     clientAdress:"ул. Бассейная д.228",
//     courierPhone:"+78005553535"
//   },
//   {
//     id: "gf-542",
//     state: "Отменён",
//     time:"12.12.12 12:00",
//     readyTime:"12.12.12 13:12",
//     issueTime:"12.12.12 14:12",
//     price:"1495",
//     positionsNum:"4",
//     positions:"рис курица курица рис рис",
//     issuance:"Самовывоз",
//     courier:"Иван Раков",
//     baker:"Елизавета Карамолина",
//     client:"Владимир Тарасенко",
//     clientPhone:"+78439852873",
//     clientMail:"sussybaka2013@mail.ru",
//     clientAdress:"ул. Бассейная д.228",
//     courierPhone:"+78005553535"
//   },
//   {
//     id: "gf-942",
//     state: "Доставка",
//     time:"12.12.12 12:00",
//     readyTime:"12.12.12 13:12",
//     issueTime:"12.12.12 14:12",
//     price:"1495",
//     positionsNum:"4",
//     positions:"рис курица курица рис рис",
//     issuance:"Самовывоз",
//     courier:"Иван Зорин",
//     baker:"Елизавета Карамолина",
//     client:"Владимир Тарасенко",
//     clientPhone:"+78439852873",
//     clientMail:"sussybaka2013@mail.ru",
//     clientAdress:"ул. Бассейная д.228",
//     courierPhone:"+78005553535"
//   }
// ]

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

  const getOrders = () => {
    axios.get(
      'http://127.0.0.1:8000/api/v1/orders/',
      {
        headers: {
          'Authorization': `Token ${getToken()}`
        }
      }
    )
    .then(response => setOrders(response.data))
    .catch(error => {
      if (error.response.statusText === 'Unauthorized') {
        deleteToken();
      }
    });
  };

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    setCurrentStates(orders.map(item => item.status));
  }, [orders]);

  const rows = orders.map((item, index) => (
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
      <td>{item.date}</td>
      <td>{item.items_count}</td>
      <td>{item.delivery_type}</td>
      <td>{item.courier}</td>
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
            <th>Время зак.</th>
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

// const OrderTable = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetch('/api/orders/')
//       .then(response => response.json())
//       .then(data => setOrders(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const rows = parameters.map((item, index) => (
//     <tr key={item.id} className={styles.row}>
//       <td>
//       <button className={styles.openButton} onClick={() => {
//           setModalActive(true);
//           setCurrentOrder(item);
//           setCurrentIndex(index);
//         }}>
//         {item.id}
//       </button>
//       </td>
//       <td className={styles.state}>
//         <select 
//           className={STATES[currentStates[index]]}
//           onChange={e => setCurrentStates(prev => [
//             ...(prev.slice(0, index)),
//             e.target.value,
//             ...(prev.slice(index + 1))
//           ])}
//         >
//           {Object.keys(STATES).map((state) => (
//             <option 
//               key={state}
//               className={STATES[state]}
//               value={state}
//               selected={currentStates[index] === state}
//             >
//               {state}
//             </option>
//           ))}
//         </select>
//       </td>
//       <td>{item.date}</td>
//       <td>{item.items_count}</td>
//       <td>{item.delivery_type}</td>
//       <td>{item.courier}</td>
//       <td>{item.employee_first_name}{item.employee_last_name}</td>
//       <td>{item.customer_name}</td>
//     </tr>
//   ));