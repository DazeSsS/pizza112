import React from 'react';
import './types.css';
import Type from '../type/Type';
import profileLogo from './../../img/profileLogo.svg';
import orderLogo from './../../img/orderLogo.svg';


const Types = () => {
  return (
    <section className="type__selection">
      <div className="container">
        <div className="types">
          <Type title="Сотрудники" img={profileLogo} path="/employees"/>
          <Type title="Заказы" img={orderLogo} path="/orders"/>
        </div>
      </div>
    </section>
  )
}

export default Types;