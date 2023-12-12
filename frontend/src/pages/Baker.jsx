import Header from '../components/header/Header';
import BakerTable from '../components/baker-table/BakerTable'
import { useNavigate } from 'react-router-dom';
import { getToken } from '../utils/authToken';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '../utils/userData';

function Baker () {
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
          <Header view="baker" employee={employee}/>
          <BakerTable employee={employee}/>
        </>
      )}
    </>
  );
};
export default Baker;