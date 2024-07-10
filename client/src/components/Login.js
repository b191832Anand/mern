import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate} from "react-router-dom";

function Login({ mode, setAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    }
  }, [setAuthenticated]);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem('token');
    if (token) { 
      alert('Logout first to login');
      return;
    }
    const requestBody = { email, password };
    console.log("Request Body: ", requestBody);

    try {
      const response = await axios.post(
        'http://localhost:1010/api/signin',
        requestBody,
        { headers: { 'Content-Type': 'application/json' } }
      );
      const token = response.data.token;
      if (token) {
        localStorage.setItem('token', token);
        setAuthenticated(true);
        alert("Login successful");
        navigate('/');
      } else {
        throw new Error("Token not found in response");
      }
    } catch (error) {
      console.log("Login failed", error.response ? error.response.data : error.message);
      const errorMessage = error.response ? error.response.data.message : error.message;
      alert("Login failed: " + errorMessage);
    }
  };

  return (
    <div className={`${
        mode ? "bg-gray-900" : "bg-gray-100"
      } min-h-screen flex justify-center items-center`}>
      <div className="bg-white p-8 sm:w-96 rounded-lg shadow-md sm:shadow-lg transition-all duration-100 ease-in-out hover:shadow-xl">
        <h1 className="text-3xl text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col font-medium">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-2 py-1 border-2 mt-1 rounded-md"
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="password" className="font-medium">Password</label>
            <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter the password"
                required
                className="px-2 py-1 mt-1 border-2 rounded-md w-full"
                value={password}
                onChange={(e) => setPass(e.target.value)}
              />
              {showPassword ? (
                <FaEyeSlash className="-mx-6 cursor-pointer" onClick={handlePasswordVisibility} />
              ) : (
                <FaEye className="-mx-6 cursor-pointer" onClick={handlePasswordVisibility} />
              )}
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-blue-500 cursor-pointer hover:underline">Change password?</p>
              <p className="text-blue-500 cursor-pointer hover:underline">Forgot password?</p>
            </div>
          </div>
          <div className="mb-2">
            <button type="submit" className="bg-blue-600 w-full px-2 py-1 rounded-md text-white">Login</button>
          </div>
          <div className="flex justify-center">
            <hr className="w-full border-b-2 border-gray-300" />
          </div>
          <div className="flex justify-center mt-2">
            <span>Don't have an account?</span>
            <span className="text-blue-500 cursor-pointer hover:underline" onClick={()=>navigate('/Signup')}>Signup</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
