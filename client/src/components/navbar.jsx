// Navbar.jsx
import { useState } from 'react';
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
        {/* Login */}
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

        {/* Register */}
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
