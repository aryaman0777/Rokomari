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
const [openLogin, setOpenLogin] = useState(false);
const [openRegister, setOpenRegister] = useState(false);


return (
<>
<Navbar />


<div className="auth-container">
<div className="auth-box" style={{ textAlign: 'center' }}>
<h2>Welcome to OddJob</h2>


{/* Login Dropdown */}
<div style={{ marginTop: '20px' }}>
<button onClick={() => setOpenLogin(!openLogin)}>Login</button>
{openLogin && (
<div className="dropdown-box">
<Link to="/loginEmployee">Employee Login</Link>
<Link to="/loginEmployer">Employer Login</Link>
</div>
)}
</div>


{/* Register Dropdown */}
<div style={{ marginTop: '20px' }}>
<button onClick={() => setOpenRegister(!openRegister)}>Register</button>
{openRegister && (
<div className="dropdown-box">
<Link to="/registerEmployee">Employee Register</Link>
<Link to="/registerEmployer">Employer Register</Link>
</div>
)}
</div>
</div>
</div>
</>
);
};
export default Home;

