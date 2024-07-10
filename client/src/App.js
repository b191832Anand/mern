import React, { useEffect, useState } from 'react';
import Dsa from './components/Dsa';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar'; // Ensure Navbar is imported

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Access from './components/Access';

function App() {
  const [mode, setMode] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false); // Initialize isAuthenticated to false

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  const totoggle = () => {
    if (!mode) {
      document.body.style.backgroundColor = 'black';
    } else {
      document.body.style.backgroundColor = '#F5F5F5';
    }
    setMode(!mode);
  };

  const items = [
    {
      title: 'CodeChef',
      description: 'CodeChef is a competitive programming platform known for hosting contests and challenges to improve coding skills.',
      linkss: 'https://www.codechef.com'
    },
    {
      title: 'LeetCode',
      description: 'LeetCode is a popular online platform for practicing coding interviews and improving algorithmic problem-solving skills.',
      linkss: 'https://leetcode.com'
    },
    {
      title: 'Codeforces',
      description: 'Codeforces is a competitive programming platform that hosts contests and provides a community for programmers to solve algorithmic problems.',
      linkss: 'https://codeforces.com'
    },
    {
      title: 'HackerRank',
      description: 'HackerRank is a platform for practicing coding skills and preparing for technical interviews through coding challenges.',
      linkss: 'https://www.hackerrank.com'
    }
  ];

  return (
    <Router>
      <div>
        <Navbar mode={mode} totoggle={totoggle} isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
        <Routes>
          <Route path='/' element={<Home mode={mode} />} />
          <Route path='/Login' element={<Login mode={mode} setAuthenticated={setAuthenticated} />} />
          <Route path='/Resources' element={
            <>
              <Dsa title="Data structure and Algorithm" items={items} mode={mode} totoggle={totoggle} />
              <Dsa title="Web Development" items={items} mode={mode} totoggle={totoggle} />
            </>
          } />
          <Route path='/Signup' element={<Signup mode={mode}/>} />
          <Route path='/Access' element={<Access mode={mode}/>}/>
        </Routes>
        <Footer mode={mode} totoggle={totoggle} />
      </div>
    </Router>
  );
}

export default App;
