import { useNavigate } from 'react-router-dom';
import Header from '../components/header/Header';
import Types from '../components/types/Types';
import Warning from '../components/warning/Warning';
import { getToken } from '../utils/authToken';
import { useEffect, useState} from 'react';
import { getCurrentUser } from '../utils/userData';

function Home()  {
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
          <Header view="home" employee={employee}/>
          <Types />
          <Warning />
        </>
      )}
    </>
  );
}

export default Home;