import React, { useEffect } from 'react';
import styles from './employeeTable.module.css';
import Modal from '../modal/Modal';
import { useState } from 'react';
import EmployeeCard from '../employee-card/EmployeeCard';
import { getEmployees } from '../../utils/userData';

const EmployeeTable = () => {
  const [modalActive, setModalActive] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState({});

  useEffect(() => {
    getEmployees(setEmployees);
  }, []);

  const rows = employees.map(item => {
    return <tr className={styles.row} key={item.id}>
      <td className={styles.employee__column}>
        <button className={styles.open__button} onClick={() => {
          setModalActive(true)
          setCurrentEmployee(item)
        }}>
          <img src="img/kega.jpg" width="37px" height="37px" alt="" />
          <div className={styles.employee__name}>{item.first_name} {item.last_name}</div>
        </button>
      </td>
      <td>{item.role}</td>
      <td>{item.phone_number}</td>
      <td>{item.gender}</td>
      <td>{item.age}</td>
    </tr>

  });

  return (

    <div className={styles.container}>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.table__header}>
            <th className={styles.employee}>Сотрудник</th>
            <th>Должность</th>
            <th>Телефон</th>
            <th>Пол сотрудника</th>
            <th className={styles.age}>Возраст</th>
          </tr>
          {rows}
        </tbody>
      </table>
      <Modal active={modalActive} setActive={setModalActive}>
        <EmployeeCard item={currentEmployee} setModalActive={setModalActive}/>
      </Modal>
    </div>
    
  )
}

export default EmployeeTable;