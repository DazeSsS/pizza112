import React from 'react';
import styles from './modal.module.css'
// Теперь модальное окно принимает дополнительный (необязательный) параметр, от него зависит размер окна
// Возможные значения параметра указаны в кейсах
const Modal = ({active, setActive, size = "big", children}) => {
  let styleContent = styles.modal__content__active;
  switch (size){
    case "baker":
      styleContent = styles.modal__content__active__baker;
    break;
    case "courier_profile":
      styleContent = styles.modal__content__active__courier__profile;
    break;
    case "courier_order":
      styleContent = styles.modal__content__active__courier__order;
    break;
    default:
      break;
  }
  return (
    <div className={active ? [styles.modal__active] : [styles.modal]} onClick={() => setActive(false)}>
      <div className={active ? [styleContent] : [styles.modal__content]} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal;