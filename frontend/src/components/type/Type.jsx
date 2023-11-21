/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './type.css';
import { Link } from 'react-router-dom';

const Type = ({title, img, path}) => {
  
  return (
    <div className="type">
      <Link to={path} className="type__link"></Link>
      <div className="profile__logo">
        <img src={img} height="42px" width="42px" alt="profileLogo"/>
      </div>
      <div className="type__name">
        {title}
      </div>
    </div>
  )
}

export default Type;