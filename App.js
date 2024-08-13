import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './user-management/Signup';
import './App.css';
import Login from './user-management/Login';
import Home from './Home/Home'
import Navbar from './Home/Navbar/Navbar';
/*import { useState } from 'react';*/

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;



