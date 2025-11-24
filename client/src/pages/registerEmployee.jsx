// ============================
// File: src/pages/RegisterEmployee.jsx
// ============================
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


const RegisterEmployee = () => {
const navigate = useNavigate();
//const [form, setForm] = useState({ name: '', email: '', password: '' });
//const [error, setError] = useState('');
const {backendUrl, setIsLoggedin, getUserData} = useContext(AppContext)

 // Input field states
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = async(e)=>{
    try {
        axios.defaults.withCredentials = true;
        const {data} = await axios.post(backendUrl + '/api/auth/registerEmployee', {name,email,password,gender,phone})
        if(data.success){
          setIsLoggedin(true)
          getUserData()
          navigate('/')
        }else{
          toast.error(data.message)
        }

        
    } catch (error) {
        toast.error(data.message)
    }

  }


const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};


/*const handleSubmit = async (e) => {
e.preventDefault();
setError('');


try {
const res = await fetch('http://localhost:5000/api/auth/registerEmployee', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(form),
});


const data = await res.json();
if (!res.ok) throw new Error(data.message || 'Registration failed');


navigate('/loginEmployee');
} catch (err) {
setError(err.message);
}
};
<!-- {error && <p className="error">{error}</p>} -->

*/


return (
<div className="auth-container">
<div className="auth-box">
<h2>Register Employee</h2>
<form onSubmit={handleSubmit}>
<input name="name" placeholder="Name" onChange={handleChange} required />
<input type="email" name="email" placeholder="Email" onChange={handleChange} required />
<input type="password" name="password" placeholder="Password" onChange={handleChange} required />
<input type="name" name="gender" placeholder="Enter your gender" onChange={handleChange} required />
<input type="phone" name="phone" placeholder="phn no" onChange={handleChange} required />
<button type="submit">Register</button>
</form>
</div>
</div>
);
};


export default RegisterEmployee;