// ============================
// File: src/pages/RegisterEmployer.jsx
// ============================
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const RegisterEmployer = () => {
const navigate = useNavigate();
const [form, setForm] = useState({ name: '', email: '', password: '' });
const [error, setError] = useState('');


const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};


const handleSubmit = async (e) => {
e.preventDefault();
setError('');


try {
const res = await fetch('http://localhost:5000/api/auth/registerEmployer', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(form),
});


const data = await res.json();
if (!res.ok) throw new Error(data.message || 'Registration failed');


navigate('/loginEmployer');
} catch (err) {
setError(err.message);
}
};


return (
<div className="auth-container">
<div className="auth-box">
<h2>Register Employer</h2>
{error && <p className="error">{error}</p>}
<form onSubmit={handleSubmit}>
<input name="name" placeholder="Name" onChange={handleChange} required />
<input type="email" name="email" placeholder="Email" onChange={handleChange} required />
<input type="password" name="password" placeholder="Password" onChange={handleChange} required />
<button type="submit">Register</button>
</form>
</div>
</div>
);
};


export default RegisterEmployer;