import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Employees from './pages/Employees';
import Orders from './pages/Orders';

function App()  {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/employees' element={<Employees/>} />
      <Route path='/orders' element={<Orders/>} />
    </Routes>
  );
}

export default App;