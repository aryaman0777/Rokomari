import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginEmployee from "./pages/loginEmployee";
import LoginEmployer from "./pages/loginEmployer";

const App =() => {
  return (
    <>
      <h1>hello</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginEmployee" element={<LoginEmployee />} />
        <Route path="/LoginEmployer" element={<LoginEmployer />} />
      </Routes>
    </>
  );
}

export default App;
