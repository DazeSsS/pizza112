import Header from '../components/header/Header';
import CourierTable from '../components/courier-table/CourierTable'
import { useNavigate } from 'react-router-dom';
import { getToken } from '../utils/authToken';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '../utils/userData';

function Courier () {
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
          <Header view="courier" employee={employee}/>
          <CourierTable employee={employee}/>
        </>
      )}
    </>
  );
};
export default Courier;