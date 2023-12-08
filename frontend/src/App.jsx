import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Employees from './pages/Employees';
import Orders from './pages/Orders';
import Baker from './pages/Baker';
import Courier from './pages/Courier';
import Menu from './components/menu/Menu'
import LogIn from './components/log-in/LogIn'
import SignUp from './components/sign-up/SignUp';

function App()  {
  return (
    <Routes>
      <Route path='/' element={<Menu/>}></Route>
      <Route path='/SignUp' element={<SignUp/>}></Route>
      <Route path='/LogIn' element={<LogIn/>}></Route>
      <Route path='/Home' element={<Home/>} />
      <Route path='/Employees' element={<Employees/>} />
      <Route path='/Orders' element={<Orders/>} />
      <Route path='/Baker' element={<Baker/>} />
      <Route path='/Courier' element={<Courier/>} />
    </Routes>
  );
}

export default App;