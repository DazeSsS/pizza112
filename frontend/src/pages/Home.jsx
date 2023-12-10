import { useNavigate } from 'react-router-dom';
import Header from '../components/header/Header';
import Types from '../components/types/Types';
import Warning from '../components/warning/Warning';
import { getToken } from '../utils/authToken';
import { useEffect} from 'react';

function Home()  {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <Header view="home" />
      <Types />
      <Warning />
    </>
  );
}

export default Home;