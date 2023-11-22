import Header from '../components/header/Header';
import Types from '../components/types/Types';
import Warning from '../components/warning/Warning';

function Home()  {
  return (
    <>
      <Header view="home" />
      <Types />
      <Warning />
    </>
  );
}

export default Home;