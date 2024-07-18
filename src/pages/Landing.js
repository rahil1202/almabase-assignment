import React from "react";
import { AlmabaseLogo } from "../assets";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Landing = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="absolute top-0 left-0 w-full py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <img src={AlmabaseLogo} alt="Almabase Logo" className="w-12 h-12" />
          <nav className="flex space-x-4">
            <Link
              to="https://github.com/rahil1202/almabase-assignment"
              className="text-gray-300 hover:text-white"
              target="_blank" rel="noopener noreferrer"
              alt="Repository"
            >
              Repository
            </Link>
          </nav>
        </div>
      </div>
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight max-w-3xl">
          Revolutionize Your Form Building with Drag-and-Drop Simplicity
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl">
          Experience our highly customizable, scalable form builder that empowers you to create professional forms effortlessly.
        </p>
        <Link to="/editor">
          <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Start Building Now
          </button>
        </Link>
      </main>

      <footer className="w-full py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
             © 2024 Rahil Vahora <span className="mx-1">| Made with </span>
          
            <FaHeart className="inline text-red-500" />
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/rahil1202"
              target="_blank"
              rel="noopener noreferrer"
              alt="Github"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaGithub className="text-xl" />
            </a>

            <a
              href="https://linkedin.com/in/rahil-vahora"
              target="_blank"
              rel="noopener noreferrer"
              alt="Linkedin"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaLinkedin className="text-xl" />
            </a>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
