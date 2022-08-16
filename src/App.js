
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Transaction from './components/Transaction';
import Transfer from './components/Transfer';
import Profile from './components/Profile';
import Error from './components/Error';
import Verifyotp from './components/Verifyotp';
import Home from './components/Home';
import ProtectedRoutes from './components/ProtectedRoutes';
import PublicRoutes from './components/PublicRoutes'
import Dashboard from './components/Dashboard'
import Customer from './components/Customer';




function App() {
  return (
    <>
    <Router>
        <Navbar />
       
        {/* <Test></Test> */}
        <Routes >

           <Route  element={<ProtectedRoutes/>}>
            

            <Route path="/transfer" element={<Transfer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/transaction" element={<Transaction />} />
          
           

              <Route  element={<ProtectedRoutes roleRequired="Employee" />} >
              <Route path='/dashboard' element={<Dashboard />} /> 
              <Route path='/signup' element={<Customer />} /> 
                 
                  {/* <Route path="/manageUsers" element={<ManageUsers />} /> */}
                  {/* <Route path="/table" element={<Table />} /> */}
                  {/* <Route path="/customer" element={<Customer />} /> */}
              </Route>
          </Route>


          <Route element={<PublicRoutes />}>     

              
          </Route>
          <Route path="" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/verify' element={<Verifyotp />} />
                <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error />} />  
          
          
        </Routes>
     </Router>
    </>
  );
}

export default App;
