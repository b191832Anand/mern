import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer(props) {
  return (
    <footer className=" text-gray py-8 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={`hover:text-pink-500 transition duration-300 ${props.mode?'text-white':'text-gray-900'}`}>
              <FaInstagram className="text-3xl mb-2" />
              Instagram
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={`hover:text-blue-500 transition duration-300 ${props.mode?'text-white':'text-gray-900'}`}>
              <FaLinkedin className="text-3xl mb-2" />
              LinkedIn
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className={`hover:text-black-400 transition duration-300 ${props.mode?'text-white':'text-gray-900'}`}>
              <FaGithub className="text-3xl mb-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;