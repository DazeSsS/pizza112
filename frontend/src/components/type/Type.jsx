/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styles from './type.module.css';
import { Link } from 'react-router-dom';

const Type = ({title, img, path}) => {
  
  return (
    <div className={styles.type}>
      <Link to={path} className={styles.type__link}></Link>
      <div className={styles.profile__logo}>
        <img src={img} height="42px" width="42px" alt="profileLogo"/>
      </div>
      <div className={styles.type__name}>
        {title}
      </div>
    </div>
  )
}

export default Type;

