import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginEmployee from "./pages/loginEmployee";
//import Login from "./pages/loginEmployee";
import LoginEmployer from "./pages/loginEmployer";
import RegisterEmployee from "./pages/registerEmployee";
import RegisterEmployer from "./pages/registerEmployer";
import { ToastContainer } from 'react-toastify';

const App =() => {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginEmployee" element={<LoginEmployee />} />
        <Route path="/LoginEmployer" element={<LoginEmployer />} />
        <Route path="/registerEmployee" element={<RegisterEmployee />} />
        <Route path="/registerEmployer" element={<RegisterEmployer />} />
      </Routes>
    </div>
  );
}

export default App;
