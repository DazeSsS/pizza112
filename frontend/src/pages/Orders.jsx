import { useNavigate } from 'react-router-dom';
import Header from '../components/header/Header';
import OrderTable from '../components/order-table/OrderTable';
import { getToken } from '../utils/authToken';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '../utils/userData';

function Orders () {
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (getToken()){
      getCurrentUser(setEmployee);
    } else {
      navigate('/');
    }
  }, [navigate]);
  
  return (
    <>
      {!employee ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Header view="orders" employee={employee}/>
          <OrderTable />
        </>
      )}
    </>
  );
};
export default Orders;