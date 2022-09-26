import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/home/Home';
// import AddEditUser from './pages/Users/AddEditUser'
// import UserInfo from "./pages/Users/UserInfo"
import NavbarUI from './components/Navbar/NavbarUI';
import Curriculum from './pages/curriculum';
import Test from './pages/Test'
import Training from './pages/training';

function App() {
  return (
    <>
   
    <BrowserRouter>
    <div className="app">
    <NavbarUI />
      <Routes>
        <Route  path="/home" element={<Home />}/>       
         {/* <Route  path="/adduser" element={<AddEditUser/>} />
       <Route  path="/edituser/:id" element={<AddEditUser/>} />
        <Route  path="/userinfo/:id" element={<UserInfo/>}/> */}
        <Route  path="/curriculum" element={<Curriculum />}/>
        <Route  path="/test" element={<Test/>}/>
        <Route path="/training" element={<Training />} /> 
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
