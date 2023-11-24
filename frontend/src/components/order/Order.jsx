import React from 'react';
import styles from './order.module.css'



const Order = ({id, state, time, positions, issuance, courier, baker, client}) => {
  let states =[]*4
  let state1 = "Завершён"
  let state2 = "Готовится"
  let state3 = "Отменён"
  let state4 = "Доставка"
  let stateClasses = []*4
  let stateClass1 = styles.green
  let stateClass2 = styles.yellow
  let stateClass3 = styles.red
  let stateClass4 = styles.blue
  switch(state){
    case state1:
      states = [state1, state2, state3, state4]
      stateClasses = [stateClass1, stateClass2, stateClass3, stateClass4]
      break;
    case state2:
      states = [state2, state1, state3, state4]
      stateClasses = [stateClass2, stateClass1, stateClass3, stateClass4]
      break;
    case state3:
      states = [state3, state1, state2, state4]
      stateClasses = [stateClass3, stateClass1, stateClass2, stateClass4]
      break;
    case state4:
      states = [state4, state1, state2, state3]
      stateClasses = [stateClass4, stateClass1, stateClass2, stateClass3]
      break;
    default:
      break;
  }

  return(
    <tr className={styles.row}>
      <td>{id}</td>
      <td className={styles.state}>
        <select className={stateClasses[0]} onchange="">
          <option selected="selected" value={states[0]} className={stateClasses[0]}> {states[0]} </option>
          <option value={state[1]} className={stateClasses[1]}> {states[1]} </option>
          <option value={state[2]} className={stateClasses[2]}> {states[2]} </option>
          <option value={state[3]} className={stateClasses[3]}> {states[3]} </option>
        </select>
      </td>
      <td>{time}</td>
      <td>{positions}</td>
      <td>{issuance}</td>
      <td>{courier}</td>
      <td>{baker}</td>
      <td>{client}</td>
    </tr>
  )
  
}

export default Order