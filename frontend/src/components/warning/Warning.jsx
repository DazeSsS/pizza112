import React from 'react';
import './warning.css';
import ListPosition from './../list-position/ListPosition';
import warningLogo from './../../img/warningLogo.svg';

const Warning = () => {
  return (
    <section className="warning">
      <div className="container">
        <div className="alert">
          <img src={warningLogo} alt="" />
          <span className="alert__title">Нехватка продуктов:</span>
          <div className="alert__list">
            <ul className="list__positions">
              <ListPosition title="Мясо"/>
              <ListPosition title="Каша"/>
              <ListPosition title="Молоко"/>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Warning;