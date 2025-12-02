// Navbar.jsx
/*import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar= ()=> {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b shadow-sm px-8 py-4 flex items-center justify-between">
      <Link to="/" className="text-2xl font-semibold text-blue-600 tracking-wide">
        OddJobs
      </Link>

      <div className="flex items-center gap-4 relative">
        {/* Login 
        <div className="relative">
          <button
            onClick={() => {
              setLoginOpen(!loginOpen);
              setRegisterOpen(false);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            Login
          </button>
          {loginOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl border overflow-hidden animate-fadeIn">
              <Link to="/loginEmployee" className="block px-4 py-2 hover:bg-gray-100">
                Employee Login
              </Link>
              <Link to="/loginEmployer" className="block px-4 py-2 hover:bg-gray-100">
                Employer Login
              </Link>
            </div>
          )}
        </div>

        {/* Register 
        <div className="relative">
          <button
            onClick={() => {
              setRegisterOpen(!registerOpen);
              setLoginOpen(false);
            }}
            className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
          >
            Register
          </button>
          {registerOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-xl border overflow-hidden animate-fadeIn">
              <Link to="/registerEmployee" className="block px-4 py-2 hover:bg-gray-100">
                Employee Register
              </Link>
              <Link to="/registerEmployer" className="block px-4 py-2 hover:bg-gray-100">
                Employer Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
*/


import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const Navbar = () => {
  const { isLoggedin, userData, setIsLoggedin, setUserData, backendUrl } =
    useContext(AppContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get(`${backendUrl}/api/auth/logout`);
      setIsLoggedin(false);
      setUserData(null);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          OddJob
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-4">

          {!isLoggedin ? (
            <>
              {/* Login Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 font-medium hover:text-blue-600">
                  Login
                </button>

                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-40 p-2">
                  <Link
                    to="/loginEmployee"
                    className="block px-3 py-2 hover:bg-gray-100 rounded-md"
                  >
                    Employee Login
                  </Link>

                  <Link
                    to="/loginEmployer"
                    className="block px-3 py-2 hover:bg-gray-100 rounded-md"
                  >
                    Employer Login
                  </Link>
                </div>
              </div>

              {/* Register Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 font-medium hover:text-blue-600">
                  Register
                </button>

                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-40 p-2">
                  <Link
                    to="/registerEmployee"
                    className="block px-3 py-2 hover:bg-gray-100 rounded-md"
                  >
                    Employee Register
                  </Link>

                  <Link
                    to="/registerEmployer"
                    className="block px-3 py-2 hover:bg-gray-100 rounded-md"
                  >
                    Employer Register
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* User Info */}
              <span className="text-gray-700 font-medium">
                Hi, {userData?.name || "User"}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
