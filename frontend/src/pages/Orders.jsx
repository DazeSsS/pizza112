import { useNavigate } from 'react-router-dom';
import Header from '../components/header/Header';
import OrderTable from '../components/order-table/OrderTable';
import { getToken } from '../utils/authToken';
import { useEffect } from 'react';

function Orders () {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <Header view="orders"/>
      <OrderTable/>
    </>
  );
};
export default Orders;