import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Employees from './pages/Employees';
import Orders from './pages/Orders';
import Baker from './pages/Baker';

function App()  {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/employees' element={<Employees/>} />
      <Route path='/orders' element={<Orders/>} />
      <Route path='/baker' element={<Baker/>} />
    </Routes>
  );
}

export default App;