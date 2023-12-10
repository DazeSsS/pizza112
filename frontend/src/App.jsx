// import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Employees from './pages/Employees';
import Orders from './pages/Orders';
import Baker from './pages/Baker';
import Courier from './pages/Courier';
import Menu from './components/menu/Menu'
import LogIn from './components/log-in/LogIn'
import SignUp from './components/sign-up/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Menu/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/login' element={<LogIn/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/employees' element={<Employees/>} />
      <Route path='/orders' element={<Orders/>} />
      <Route path='/baker' element={<Baker/>} />
      <Route path='/courier' element={<Courier/>} />
    </Routes>
  );
}

export default App;