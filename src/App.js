/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './auth/Login/Login';
import SignUp from './auth/SignUp/SignUp';
import Dashboard from './dashboard/Dashboard';


function App() {

  const [data,setData] = useState("");

  const getData = async() => {
    const response = await Axios.get("http://localhost:8080/getData");
    setData(response.data);
  }

  useEffect(()=>{
    getData()
  },[]);

  return (
    <>
    {/* <div>{data}</div> */}
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard/*" element={<Dashboard />} />

        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
