import Header from '../components/header/Header';
import EmployeeTable from '../components/employee-table/EmployeeTable'
import { useNavigate } from 'react-router-dom';
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
      <Header view="employees"/>
      <EmployeeTable />
    </>
  );
};
export default Orders;