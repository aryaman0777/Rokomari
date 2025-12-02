/*import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home;*/
/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';



const Home = () => {
return (
<div className="pt-24 flex flex-col items-center w-full h-[80vh] bg-gray-100 space-x-10">
  <Navbar />
  <h1 className=".mt-10 justify-center text-4xl font-bold text-gray-800 mt-10">
    Welcome to OddJobs
  </h1>
</div>

);
}

export default Home
*/

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold">Welcome to OddJob</h1>
          <p className="text-gray-600 mt-2">
            Find local workers or get hired for small tasks instantly.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
    
  );
};

export default Home;
