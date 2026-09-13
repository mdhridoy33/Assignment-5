import React from 'react';
import Logo from '../assets/logo-text.png';

const Navbar = () => {
    return (
       <nav className="sticky top-0 z-50 bg-base-100 shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="md:hidden flex items-center">
            <button className="btn btn-square btn-ghost"></button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </div>
          <div className="flex items-center gap-2">
        <img src={Logo} alt="" className="h-7 w-auto"/>
      
        </div>
        <ul className=" hidden md:flex items-center font-medium gap-4">
          <li><a href="">Home</a></li>
          <li><a href="#">Technologies</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>

        </ul>
        <div className="flex items-center gap-2">
        <button className="btn btn-ghost">Sign In</button>
        <button className="btn bg-pink-600 hover:bg-pink-700 text-white rounded-full px-6 border-none">
            Sign Up
          </button>
        </div>
        </div>
      </nav>
      
    );
};

export default Navbar;