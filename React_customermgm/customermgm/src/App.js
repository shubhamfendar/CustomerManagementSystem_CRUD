
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import ListCustomer from './Components/ListCustomer';
import AddCustomer from './Components/AddCustomer';
import UpdateCustomer from './Components/UpdateCustomer';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Add from './Components/Add';
import Edit from './Components/Edit';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import ListCustomers from './Components/ListCustomers';


function App() {
  return (
    < >
 
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/addCustomer' element={<Add></Add>}></Route>
        <Route path='/editCustomer/:custId' element={<Edit></Edit>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/listCustomer' element={<ListCustomers></ListCustomers>}></Route>


      </Routes>




    </>
  );
}

export default App;
