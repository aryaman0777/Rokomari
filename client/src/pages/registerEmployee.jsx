// // ============================
// // File: src/pages/RegisterEmployee.jsx
// // ============================
// import { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';


// const RegisterEmployee = () => {
// const navigate = useNavigate();
// //const [form, setForm] = useState({ name: '', email: '', password: '' });
// //const [error, setError] = useState('');
// const {backendUrl, setIsLoggedin, getUserData} = useContext(AppContext)

//  // Input field states
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [gender, setGender] = useState('')
//   const [phone, setPhone] = useState('')

//   const handleSubmit = async(e)=>{
//     try {
//         axios.defaults.withCredentials = true;
//         const {data} = await axios.post(backendUrl + '/api/auth/registerEmployee', {name,email,password,gender,phone})
//         if(data.success){
//           setIsLoggedin(true)
//           getUserData()
//           navigate('/')
//         }else{
//           toast.error(data.message)
//         }

        
//     } catch (error) {
//         toast.error(data.message)
//     }

//   }


// const handleChange = (e) => {
// setForm({ ...form, [e.target.name]: e.target.value });
// };


// /*const handleSubmit = async (e) => {
// e.preventDefault();
// setError('');


// try {
// const res = await fetch('http://localhost:5000/api/auth/registerEmployee', {
// method: 'POST',
// headers: { 'Content-Type': 'application/json' },
// body: JSON.stringify(form),
// });


// const data = await res.json();
// if (!res.ok) throw new Error(data.message || 'Registration failed');


// navigate('/loginEmployee');
// } catch (err) {
// setError(err.message);
// }
// };
// <!-- {error && <p className="error">{error}</p>} -->

// */


// return (
// <div className="auth-container">
// <div className="auth-box">
// <h2>Register Employee</h2>
// <form onSubmit={handleSubmit}>
// <input name="name" placeholder="Name" onChange={handleChange} required />
// <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
// <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
// <input type="name" name="gender" placeholder="Enter your gender" onChange={handleChange} required />
// <input type="phone" name="phone" placeholder="phn no" onChange={handleChange} required />
// <button type="submit">Register</button>
// </form>
// </div>
// </div>
// );
// };


// export default RegisterEmployee;

/*hello
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import axios from 'axios'



const RegisterEmployee = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
  });

  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:4000/api/auth/registerEmployee", {
            name,
            email,
            password,
            phone,
            gender,
        });

        console.log("Backend Response:", response.data); // ✅ Correct
        alert(response.data.message);

    } catch (error) {
        console.error("Error registering employee:", error.response?.data || error.message);
        alert(error.response?.data?.message || "Registration failed");
    }
};

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Employee Registration
        </h2>

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}
        {successMsg && (
          <p className="text-green-600 text-center mb-3">{successMsg}</p>
        )}

        <div className="mb-4">
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Password</label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Gender</label>
          <select
            name="gender"
            required
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterEmployee;


*/


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const RegisterEmployee = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log("Sending Payload:", formData);


  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/registerEmployee",
        formData,
        { withCredentials: true }
      );

      toast.success(response.data.message || "Registered Successfully!");

      navigate("/loginEmployee");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Employee Registration
        </h2>

        {/* NAME */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        {/* EMAIL */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Password</label>
          <input
            type="password"
            name="password"
            required
            minLength="6"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        {/* PHONE */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        {/* GENDER */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Gender</label>
          <select
            name="gender"
            required
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-semibold py-2 rounded-lg transition
            ${loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"}
          `}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterEmployee;
