import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
return (
<nav style={{
width: '100%',
padding: '15px 25px',
background: '#ffffff',
boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
display: 'flex',
alignItems: 'center',
justifyContent: 'space-between'
}}>
<h2 style={{ margin: 0, color: '#4b6bfb' }}>OddJob</h2>


<div style={{ display: 'flex', gap: '15px' }}>
<Link to="/" style={{ textDecoration: 'none', color: '#333', fontSize: '16px' }}>Home</Link>
</div>
</nav>
);
};


export default Navbar;