/*import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home;*/

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
