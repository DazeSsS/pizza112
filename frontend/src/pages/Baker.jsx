import Header from '../components/header/Header';
import BakerTable from '../components/baker-table/BakerTable'
import { useNavigate } from 'react-router-dom';
import { getToken } from '../utils/authToken';
import { useEffect } from 'react';

function Baker () {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate('/');
    }
  }, [navigate]);
  
  return (
    <>
      <Header view="baker"/>
      <BakerTable baker="Елизавета Карамолина"/>
    </>
  );
};
export default Baker;