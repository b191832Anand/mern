import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signup(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { username, email, password };

    try {
      const response = await axios.post('http://localhost:1010/api/signup', newUser);
      console.log('Signup successful:', response.data);
      alert('Signup successful!');
      // Optionally redirect or handle successful signup
      navigate('/Login')
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed! Please try again.');
    }
  };

  return (
    <div className={`min-h-screen flex justify-center items-center ${props.mode?'bg-gray-900':'bg-gray-100'}`}>
      <div className="bg-white p-8 sm:w-96 rounded-lg shadow-md sm:shadow-lg transition-all duration-100 ease-in-out hover:shadow-xl">
        <h1 className="text-3xl text-center">Signup</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4 flex flex-col">
            <label htmlFor="username" className="font-medium">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="px-2 py-1 border-2 mt-1 rounded-md"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="email" className="font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-2 py-1 border-2 mt-1 rounded-md"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="password" className="font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="px-2 py-1 border-2 mt-1 rounded-md"
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-600 w-full px-4 py-2 rounded-md text-white hover:bg-blue-700">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
