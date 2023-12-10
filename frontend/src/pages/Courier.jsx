import Header from '../components/header/Header';
import CourierTable from '../components/courier-table/CourierTable'
import { useNavigate } from 'react-router-dom';
import { getToken } from '../utils/authToken';
import { useEffect } from 'react';

function Courier () {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate('/');
    }
  }, [navigate]);
  
  return (
    <>
      <Header view="courier"/>
      <CourierTable/>
    </>
  );
};
export default Courier;