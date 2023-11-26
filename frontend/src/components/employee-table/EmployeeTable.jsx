import React from 'react';
import styles from './employeeTable.module.css';
import Modal from '../modal-window/Modal';
import { useState } from 'react';
import EmployeeCard from '../employee-card/EmployeeCard';

const parameters = [
  {
    id: '34dsf1df',
    img: '../../../public/images/profile',
    name: 'Горшков Георгий',
    position: 'Курьер',
    number: '89080040077',
    gender: 'Мужской',
    age: '19',
    birthdate: '19.06.2004',
    firstWorkDay: '01.09.2023',
    salary: '50000'
  },
  {
    id: '45dsfsdfw3f',
    img: '../../../public/images/profile',
    name: 'Волчихин Артём',
    position: 'Пекарь',
    number: '89091453724',
    gender: 'Мужской',
    age: '20',
    birthdate: '02.11.2004',
    firstWorkDay: '01.06.2022',
    salary: '55000'
  },
  {
    id: '798dsf123df',
    img: 'profileLogo.svg',
    name: 'Раков Иван',
    position: 'Бездарь',
    number: '89826626402',
    gender: 'Мужской',
    age: '19',
    birthdate: '29.04.2004',
    firstWorkDay: '09.01.2023',
    salary: '40000'
  } 
]

const EmployeeTable = () => {

  const [modalActive, setModalActive] = useState(false);

  const [currentEmployee, setCurrentEmployee] = useState(parameters[0]);

  const rows = parameters.map(function(item) {

    return <tr className={styles.row} key={item.id}>
      <td className={styles.employee__column}>
        <button className={styles.open__button} onClick={() => {
          setModalActive(true)
          setCurrentEmployee(item)
        }}>
          <img src={item.img} width="37px" height="37px" alt="" />
          <div className={styles.employee__name}>{item.name}</div>
        </button>
      </td>
      <td>{item.position}</td>
      <td>{item.number}</td>
      <td>{item.gender}</td>
      <td>{item.age}</td>
    </tr>

  });

  return (

    <div className={styles.container}>
      <table className={styles.table}>
        <tr className={styles.table__header}>
          <th className={styles.employee}>Сотрудник</th>
          <th>Должность</th>
          <th>Телефон</th>
          <th>Пол сотрудника</th>
          <th className={styles.age}>Возраст</th>
        </tr>
        {rows}
        <Modal active={modalActive} setActive={setModalActive}>
          <EmployeeCard item={currentEmployee} setModalActive={setModalActive}/>
        </Modal>
      </table>
    </div>
    
  )
}

export default EmployeeTable;