import React from 'react';
import styles from './modal.module.css'

const Modal = ({active, setActive, children}) => {
  return (
    <div className={active ? [styles.modal__active] : [styles.modal]} onClick={() => setActive(false)}>
      <div className={active ? [styles.modal__content__active] : [styles.modal__content]} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal;