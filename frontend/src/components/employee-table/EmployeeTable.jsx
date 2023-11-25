import React from 'react';
import styles from './employeeTable.module.css';
import profileLogo from '../../img/profileLogo.svg'

const parameters = [
  {
    id: '34dsf1df',
    img: {profileLogo},
    name: 'Горшков Георгий',
    position: 'Курьер',
    number: '89080040077',
    gender: 'Мужской',
    age: '19'
  },
  {
    id: '45dsfsdfw3f',
    img: '../../../public/images/profile',
    name: 'Волчихин Артём',
    position: 'Пекарь',
    number: '89091453724',
    gender: 'Мужской',
    age: '20'
  },
  {
    id: '798dsf123df',
    img: 'profileLogo.svg',
    name: 'Раков Иван',
    position: 'Курьер',
    number: '89826626402',
    gender: 'Мужской',
    age: '19'
  }
]

const EmployeeTable = () => {
  const rows = parameters.map(function(item) {
    return <tr className={styles.row} key={item.id}>
      <td className={styles.employee__column}>
        <img src={item.img} width="37px" height="37px" alt="" />
        <div className={styles.employee__name}>{item.name}</div>
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
      </table>
    </div>
  )
}

export default EmployeeTable;