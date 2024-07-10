import React, { useState } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    props.setAuthenticated(false);
    alert("You have been logged out");
    navigate('/');
  };

  return (
    <div>
      <nav>
        <div className='nav flex justify-between bg-purple-900 text-white py-2 px-2'>
          <span className='px-2 py-2 rounded-lg'>
            <img src="images.jpeg" alt="Logo" style={{ width: '40px', height: 'auto', borderRadius: '10px' }} />
          </span>
          <div className='hidden md:flex flex-row'>
            <ul className='flex justify-center items-center space-x-3 px-10'>
              <span onClick={props.totoggle} className='hover:cursor-pointer hover:text-gray-200 px-2 py-2'>
                {props.mode ? <FaSun /> : <FaMoon />}
              </span>
              <Link className='hover:bg-purple-800 hover:text-gray-200 rounded-lg px-2 py-2' to='/'>Home</Link>
              <Link className='hover:bg-purple-800 hover:text-gray-200 rounded-lg px-2 py-2' to={props.isAuthenticated ? '/Resources' : '/Access'}>Resources</Link>
              <a className='hover:bg-purple-800 hover:text-gray-200 rounded-lg px-2 py-2' href='https://roadmap.sh/' target='_blank' rel='noopener noreferrer'>Roadmaps</a>
              {props.isAuthenticated
                ? <span className='hover:bg-purple-800 hover:text-gray-200 rounded-lg px-2 py-2 cursor-pointer' onClick={handleLogout}>Logout</span>
                : <Link className='hover:bg-purple-800 hover:text-gray-200 rounded-lg px-2 py-2' to='/Signup'>Signup</Link>
              }
              {props.isAuthenticated
                ? null 
                : <Link className='hover:bg-purple-800 hover:text-gray-200 rounded-lg px-2 py-2' to='/Login'>Signin</Link>
              }
            </ul>
          </div>
          <div className='flex justify-center items-center md:hidden'>
            <span onClick={props.totoggle} className='hover:cursor-pointer'>
              {props.mode ? <FaSun /> : <FaMoon />}
            </span>
            <button
              className="md:hidden transition-all duration-500 ease-in-out flex justify-center space-x-4 mx-4"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className='md:hidden flex flex-col justify-center items-center bg-purple-900 text-white transition-all duration-500 ease-in-out'>
            <ul className='flex flex-col space-y-5'>
              <Link className='hover:bg-purple-800 hover:text-gray-200 px-2 py-2 mx-auto rounded-lg' to='/'>Home</Link>
              <Link className='hover:bg-purple-800 hover:text-gray-200 px-2 py-2 mx-auto rounded-lg' to={props.isAuthenticated ? '/Resources' : '/Access'}>Resources</Link>
              <a className='hover:bg-purple-800 hover:text-gray-200 px-2 py-2 mx-auto rounded-lg' href='https://roadmap.sh/' target='_blank' rel='noopener noreferrer'>Roadmaps</a>
              {props.isAuthenticated
                ? <span className='hover:bg-purple-800 hover:text-gray-200 px-2 py-2 mx-auto rounded-lg cursor-pointer' onClick={handleLogout}>Logout</span>
                : <Link className='hover:bg-purple-800 hover:text-gray-200 px-2 py-2 mx-auto rounded-lg' to='/Signup'>Signup</Link>
              }
              {props.isAuthenticated
                ? null 
                : <Link className='hover:bg-purple-800 hover:text-gray-200 rounded-lg px-2 py-2 mx-auto' to='/Login'>Signin</Link>
              }
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
