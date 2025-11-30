import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2C3E50] text-white shadow py-4 px-4 fixed top-0 left-0 w-full z-10">
<div className="container w-10/12 mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h2 className="uppercase font-bold text-[24px] md:text-[32px]">
          <Link to="/">Start Framework</Link>
        </h2>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu */}
      <ul
  className={`flex flex-col md:flex-row 
  items-center md:items-center 
  justify-center md:justify-end
  gap-4 md:gap-6 
  font-bold text-[16px] uppercase 
  absolute md:static 
  bg-[#2C3E50] 
  w-full left-0 md:w-auto 
  px-4 md:px-0 
  text-center
  transition-all duration-300 ease-in-out 
  ${isOpen ? 'top-[64px]' : 'top-[-400px]'} 
  md:top-auto`}
>


          <li>
            <NavLink to="/About" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portofolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </NavLink>
          </li>
          <li className='mb-8 md:mb-0'>
            <NavLink to="/Contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
