import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import LoginEmployee from "./pages/LoginEmployee";
import LoginEmployer from "./pages/LoginEmployer";
import RegisterEmployer from "./pages/RegisterEmployer";
import RegisterEmployee from "./pages/RegisterEmployee";
import Home from "./pages/Home";


const App =() => {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/loginEmployee" element={<LoginEmployee />} />
        <Route path="/loginEmployer" element={<LoginEmployer />} />
        <Route path="/registerEmployer" element={<RegisterEmployer />} />
        <Route path="/registerEmployee" element={<RegisterEmployee/>} />
      </Routes>
    </div>
  );
}

export default App;
